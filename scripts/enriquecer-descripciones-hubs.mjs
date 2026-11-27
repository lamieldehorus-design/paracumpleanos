import fs from 'node:fs';
import path from 'node:path';

const DIR_BATCHES = path.resolve('scripts/editorial-hubs');
const DATA_ARCHIVOS = [
  path.resolve('data/contenido.json'),
  ...fs
    .readdirSync(path.resolve('data/categorias'))
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => path.resolve('data/categorias', f))
];

const REGEX_DUELO = /fallecid|hasta-el-cielo|condolencias|pesame|consuelo|luctuoso|duelo|tristes|nostalgia|extranas/;
const REGEX_ANIV = /^(?!.*luctuoso).*(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/;
const REGEX_FIESTA = /(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(torta|pastel|sopl[aá]|velas|fiesta|festej[a-záéíóúüñ]*|brindis|regalos)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i;
const REGEX_TUTEO = /(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(tú|tienes|quieres|puedes|sabes|sientes|eres|estás tú|cuéntale|dile|háblale|mándale|regálale|escríbele|añade|ponle|deséale)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i;

function cargarCatalogo() {
  const archivosMap = new Map();
  const hubs = new Map();
  const msgCount = new Map();

  for (const arch of DATA_ARCHIVOS) {
    const arr = JSON.parse(fs.readFileSync(arch, 'utf8'));
    archivosMap.set(arch, arr);
    for (const r of arr) {
      if (r.tipo === 'hub') {
        hubs.set(r.slug, { reg: r, arch });
      } else if (r.tipo === 'mensaje') {
        msgCount.set(r.categoria, (msgCount.get(r.categoria) || 0) + 1);
      }
    }
  }
  return { archivosMap, hubs, msgCount };
}

function cargarBatches() {
  const files = fs
    .readdirSync(DIR_BATCHES)
    .filter((f) => /^batch-\d+\.json$/.test(f))
    .sort();
  const entries = new Map();
  const overlaps = [];

  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(DIR_BATCHES, f), 'utf8'));
    for (const [slug, val] of Object.entries(data)) {
      if (entries.has(slug)) {
        overlaps.push(`${slug} (${entries.get(slug).batch} & ${f})`);
      }
      entries.set(slug, { ...val, batch: f });
    }
  }
  return { files, entries, overlaps };
}

function validar() {
  const { archivosMap, hubs, msgCount } = cargarCatalogo();
  const { files, entries, overlaps } = cargarBatches();
  const errores = [...overlaps.map((o) => `Solapamiento: ${o}`)];
  const sents = new Map();

  for (const [slug, val] of entries.entries()) {
    const info = hubs.get(slug);
    if (!info) {
      errores.push(`[${val.batch}] Hub inexistente: ${slug}`);
      continue;
    }
    const hub = info.reg;
    const real = msgCount.get(slug) || 0;
    const meta = String(val.meta || '').trim();
    const lead = String(val.lead || '').trim();
    const seoTitulo = String(val.seoTitulo || '').trim();
    const seoTexto = String(val.seoTexto || '').trim();

    if (meta.length < 120 || meta.length > 165) {
      errores.push(`[${val.batch}] ${slug}: meta fuera de 120-165 chars (${meta.length})`);
    }
    if (lead.length < 300 || lead.split('\n\n').filter(Boolean).length < 2) {
      errores.push(`[${val.batch}] ${slug}: lead < 300 chars o < 2 párrafos (${lead.length})`);
    }
    if (seoTitulo.length < 20 || seoTitulo.length > 105) {
      errores.push(`[${val.batch}] ${slug}: seoTitulo fuera de rango (${seoTitulo.length})`);
    }
    if (seoTexto.length < 400 || seoTexto.split('\n\n').filter(Boolean).length < 3) {
      errores.push(`[${val.batch}] ${slug}: seoTexto < 400 chars o < 3 párrafos (${seoTexto.length})`);
    }

    for (const numEdad of slug.match(/\b\d+(?=-anos|-meses|-ano)\b/g) || []) {
      if (!meta.includes(numEdad)) {
        errores.push(`[${val.batch}] ${slug}: meta perdió edad ${numEdad}`);
      }
    }

    const blob = `${meta}\n${lead}\n${seoTitulo}\n${seoTexto}`;

    if (real === 70 && /\b(50|40)\s+(mensajes|frases|dedicatorias|textos|opciones|saludos|propuestas|tarjetas|cartas)\b/i.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: dice 50/40 en hub de 70`);
    }
    if (real === 40 && /\b(50|70)\s+(mensajes|frases|dedicatorias|textos|opciones|saludos|propuestas|guías|guias)\b/i.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: dice 50/70 en hub de 40`);
    }
    if (real === 50 && /\b(40|70)\s+(mensajes|frases|dedicatorias|textos|opciones|saludos|propuestas|tarjetas|cartas)\b/i.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: dice 40/70 en hub de 50`);
    }

    if (/personalizador superior|personalizador de arriba|arriba en el|352 categorías/i.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: referencia prohibida a arriba/superior/352`);
    }

    const esDuelo = REGEX_DUELO.test(slug) || hub.grupo === 'duelo_recuerdos';
    const esAniv = REGEX_ANIV.test(slug);
    if (esDuelo && REGEX_FIESTA.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: palabra festiva en duelo (${blob.match(REGEX_FIESTA)?.[0]})`);
    }
    if (esAniv && /cumpleaños/i.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: menciona cumpleaños en aniversario`);
    }
    if (slug === 'motivaciones' && /soplar velas|regalo de cumpleaños/i.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: menciona velas/regalo de cumpleaños en motivaciones`);
    }
    if (REGEX_TUTEO.test(blob)) {
      errores.push(`[${val.batch}] ${slug}: tuteo detectado (${blob.match(REGEX_TUTEO)?.[0]})`);
    }

    const partes = blob
      .split(/[.!?\n]+/)
      .map((x) => x.trim())
      .filter((x) => x.length >= 35);
    for (const p of partes) {
      const k = p.toLowerCase();
      if (sents.has(k)) {
        errores.push(`[${val.batch}] ${slug}: oración repetida con ${sents.get(k)} -> "${p}"`);
      } else {
        sents.set(k, slug);
      }
    }
  }

  const faltantes = [...hubs.keys()].filter((s) => !entries.has(s));
  return { archivosMap, hubs, files, entries, faltantes, errores };
}

function main() {
  const apply = process.argv.includes('--apply');
  const strictAll = process.argv.includes('--strict');
  const res = validar();

  console.log(`Batches cargados (${res.files.length}): ${res.files.join(', ')}`);
  console.log(`Hubs cubiertos: ${res.entries.size} / ${res.hubs.size} | Faltantes: ${res.faltantes.length}`);
  console.log(`Errores detectados: ${res.errores.length}`);

  if (res.errores.length) {
    for (const e of res.errores.slice(0, 40)) console.error('ERROR:', e);
    if (res.errores.length > 40) console.error(`... y ${res.errores.length - 40} errores más.`);
    process.exit(1);
  }

  if (strictAll && res.faltantes.length > 0) {
    console.error(`Faltan ${res.faltantes.length} hubs por cubrir.`);
    process.exit(1);
  }

  if (!apply) {
    console.log('Validación OK (modo dry-run). Usá --apply para escribir en data/.');
    return;
  }

  let actualizados = 0;
  for (const [arch, arr] of res.archivosMap.entries()) {
    let touched = false;
    for (const reg of arr) {
      if (reg.tipo === 'hub' && res.entries.has(reg.slug)) {
        const val = res.entries.get(reg.slug);
        reg.meta = val.meta.trim();
        reg.lead = val.lead.trim();
        reg.seoTitulo = val.seoTitulo.trim();
        reg.seoTexto = val.seoTexto.trim();
        touched = true;
        actualizados++;
      }
    }
    if (touched) {
      fs.writeFileSync(arch, JSON.stringify(arr, null, 2) + '\n', 'utf8');
    }
  }
  console.log(`Aplicados ${actualizados} hubs actualizados en archivos data/*.json`);
}

main();
