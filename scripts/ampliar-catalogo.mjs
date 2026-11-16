// Ampliacion no destructiva del catalogo:
// 1. Conserva intactos los 351 hubs existentes y sus 10.530 mensajes actuales (0 URLs rotas).
// 2. Enriquece cada categoria con lead extendido humanizado + seoTitulo + seoTexto alternativo unico.
// 3. Agrega 6 publicaciones nuevas y originales en cada una de las 351 categorias (30 -> 36 = 12.636 mensajes).
import fs from 'node:fs';
import path from 'node:path';
import {
  normalizar,
  bigramas,
  actualizarTituloYMetaHub,
  construirDescripcionYSeoHub,
  generarMensajesProfesionales
} from './redactor-es.mjs';

const TARGET_POR_CAT = 36;
const FECHA_ACTUALIZACION = '2026-11-16';
const REFRESCAR_NUEVOS = process.argv.includes('--refrescar-nuevos');

const basePath = path.resolve('data/contenido.json');
const catDir = path.resolve('data/categorias');

const archivos = [
  { ruta: basePath, nombre: 'data/contenido.json', compacto: false },
  ...fs.readdirSync(catDir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => ({
      ruta: path.join(catDir, f),
      nombre: `data/categorias/${f}`,
      compacto: /^g\d{2}-/.test(f)
    }))
];

// Leer todos los archivos manteniendo ubicacion original de cada registro
const datasets = archivos.map((info) => ({
  ...info,
  registros: JSON.parse(fs.readFileSync(info.ruta, 'utf8'))
}));

if (REFRESCAR_NUEVOS) {
  const vistosPorCat = new Map();
  for (const ds of datasets) {
    ds.registros = ds.registros.filter((r) => {
      if (r.tipo !== 'mensaje') return true;
      const c = (vistosPorCat.get(r.categoria) || 0) + 1;
      vistosPorCat.set(r.categoria, c);
      return c <= 30;
    });
  }
}

// Trackers globales construidos sobre TODO lo existente (sin tocar mensajes previos)
const usadosSlugs = new Set();
const usadosTitulosNorm = new Set();
const usadosPorDest = new Map();
const inicioPorCat = new Map();
const mensajesPorCat = new Map();

for (const ds of datasets) {
  for (const r of ds.registros) {
    usadosSlugs.add(r.slug);
    if (r.tipo === 'hub') {
      if (!inicioPorCat.has(r.slug)) inicioPorCat.set(r.slug, new Set());
      if (!mensajesPorCat.has(r.slug)) mensajesPorCat.set(r.slug, []);
    } else if (r.tipo === 'mensaje') {
      const nt = normalizar(r.titulo);
      const words = nt.split(' ').filter(Boolean);
      usadosTitulosNorm.add(nt);
      if (!usadosPorDest.has(r.destinatario)) usadosPorDest.set(r.destinatario, []);
      usadosPorDest.get(r.destinatario).push({ big: bigramas(nt), wordSet: new Set(words) });
      if (!inicioPorCat.has(r.categoria)) inicioPorCat.set(r.categoria, new Set());
      if (words[0]) inicioPorCat.get(r.categoria).add(words[0]);
      if (!mensajesPorCat.has(r.categoria)) mensajesPorCat.set(r.categoria, []);
      mensajesPorCat.get(r.categoria).push(r);
    }
  }
}

let hubIdx = 0;
let nuevosAgregados = 0;
const todosHubs = [];

for (const ds of datasets) {
  const nuevosDelArchivo = [];
  for (let i = 0; i < ds.registros.length; i++) {
    const r = ds.registros[i];
    if (r.tipo !== 'hub') continue;

    const actuales = mensajesPorCat.get(r.slug) || [];
    const totalObjetivo = Math.max(TARGET_POR_CAT, actuales.length);
    const faltan = Math.max(0, totalObjetivo - actuales.length);

    const { titulo, meta } = actualizarTituloYMetaHub(r, totalObjetivo);
    const { lead, seoTitulo, seoTexto } = construirDescripcionYSeoHub(r, totalObjetivo, hubIdx);

    r.titulo = titulo;
    r.meta = meta;
    r.lead = lead;
    r.seoTitulo = seoTitulo;
    r.seoTexto = seoTexto;
    r.creado = r.creado || '2026-11-15';
    r.actualizado = FECHA_ACTUALIZACION;

    if (faltan > 0) {
      const nuevos = generarMensajesProfesionales(
        r,
        faltan,
        usadosSlugs,
        usadosTitulosNorm,
        usadosPorDest,
        inicioPorCat.get(r.slug),
        700 + hubIdx * 13,
        actuales.length
      );
      nuevosDelArchivo.push(...nuevos);
      actuales.push(...nuevos);
      nuevosAgregados += nuevos.length;
    }

    todosHubs.push(r);
    hubIdx++;
  }
  ds.registros.push(...nuevosDelArchivo);
}

// Verificar unicidad estricta antes de guardar
const leadsUnicos = new Set(todosHubs.map((h) => h.lead));
const seoTitulosUnicos = new Set(todosHubs.map((h) => h.seoTitulo));
const seoTextosUnicos = new Set(todosHubs.map((h) => h.seoTexto));

if (todosHubs.length !== 351) {
  throw new Error(`Se esperaban 351 hubs y se encontraron ${todosHubs.length}`);
}
if (leadsUnicos.size !== todosHubs.length) {
  throw new Error(`Colision en lead: ${leadsUnicos.size}/${todosHubs.length} unicos`);
}
if (seoTitulosUnicos.size !== todosHubs.length) {
  throw new Error(`Colision en seoTitulo: ${seoTitulosUnicos.size}/${todosHubs.length} unicos`);
}
if (seoTextosUnicos.size !== todosHubs.length) {
  throw new Error(`Colision en seoTexto: ${seoTextosUnicos.size}/${todosHubs.length} unicos`);
}

let totalMensajesFinal = 0;
for (const ds of datasets) {
  const txt = ds.compacto ? JSON.stringify(ds.registros) : JSON.stringify(ds.registros, null, 2);
  fs.writeFileSync(ds.ruta, txt);
  const hubsArchivo = ds.registros.filter((x) => x.tipo === 'hub').length;
  const msgsArchivo = ds.registros.filter((x) => x.tipo === 'mensaje').length;
  totalMensajesFinal += msgsArchivo;
  console.log(`${ds.nombre}: ${hubsArchivo} hubs, ${msgsArchivo} mensajes`);
}

console.log(`\nResumen: ${todosHubs.length} hubs | ${totalMensajesFinal} mensajes (+${nuevosAgregados} nuevos) | lead/seoTitulo/seoTexto 100% unicos.`);
