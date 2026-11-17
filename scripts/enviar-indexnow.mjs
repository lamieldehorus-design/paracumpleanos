#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const HOST = 'paracumpleanos.com';
const KEY = 'e7b49c1a6d024f839c5b2e1d84a70f63';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT_BING = 'https://www.bing.com/indexnow';
const MAX_BATCH = 10000;
const POR_PAGINA = 12;

function parseArgs(argv) {
  const opts = {
    dryRun: false,
    fromCatalog: false,
    endpoint: ENDPOINT_BING,
    waitKeySeconds: 0
  };
  for (const arg of argv) {
    if (arg === '--dry-run') opts.dryRun = true;
    else if (arg === '--from-catalog') opts.fromCatalog = true;
    else if (arg.startsWith('--endpoint=')) opts.endpoint = arg.slice('--endpoint='.length);
    else if (arg.startsWith('--wait-key=')) opts.waitKeySeconds = Number(arg.slice('--wait-key='.length)) || 0;
  }
  return opts;
}

function cargarUrlsDesdeSitemap(sitemapPath) {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const prefijo = `https://${HOST}/`;
  const vistos = new Set();
  const urls = [];
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const u = m[1].replace(/&amp;/g, '&').trim();
    if (u.startsWith(prefijo) && !vistos.has(u)) {
      vistos.add(u);
      urls.push(u);
    }
  }
  return urls;
}

function cargarSlugsGuias() {
  const guiasPath = path.resolve('src/data/guias.ts');
  if (!fs.existsSync(guiasPath)) return [];
  const src = fs.readFileSync(guiasPath, 'utf8');
  const slugs = [];
  for (const m of src.matchAll(/\n  \{\n    slug: '([^']+)'/g)) {
    slugs.push(m[1]);
  }
  return slugs;
}

function cargarUrlsDesdeCatalogo() {
  const base = JSON.parse(fs.readFileSync(path.resolve('data/contenido.json'), 'utf8'));
  const catDir = path.resolve('data/categorias');
  const files = fs.readdirSync(catDir).filter((f) => f.endsWith('.json')).sort();
  let todos = [...base];
  for (const f of files) {
    todos = todos.concat(JSON.parse(fs.readFileSync(path.join(catDir, f), 'utf8')));
  }

  const hubs = [];
  const mensajes = [];
  const porCat = new Map();

  for (const r of todos) {
    if (r.tipo === 'hub') {
      hubs.push(r);
    } else if (r.tipo === 'mensaje') {
      mensajes.push(r);
      if (!porCat.has(r.categoria)) porCat.set(r.categoria, []);
      porCat.get(r.categoria).push(r);
    }
  }

  const urls = [
    `https://${HOST}/`,
    `https://${HOST}/categorias/`,
    `https://${HOST}/guias/`,
    `https://${HOST}/sobre-nosotros/`,
    `https://${HOST}/contacto/`,
    `https://${HOST}/privacidad/`,
    `https://${HOST}/terminos-de-uso/`
  ];

  for (const slugGuia of cargarSlugsGuias()) {
    urls.push(`https://${HOST}/guias/${slugGuia}/`);
  }

  for (const h of hubs) {
    urls.push(`https://${HOST}/${h.slug}/`);
  }

  const freqParrafos = new Map();
  for (const m of mensajes) {
    const ps = String(m.texto || '').split(/\n\n+/).map((p) => p.trim()).filter((p) => p.length > 25);
    for (const p of ps) freqParrafos.set(p, (freqParrafos.get(p) || 0) + 1);
  }

  const cuerposVistos = new Set();
  const tokensSeleccionados = [];
  const toTokens = (s) => new Set(
    String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length > 3)
  );

  for (const m of mensajes) {
    const texto = String(m.texto || '').trim();
    if (!texto || cuerposVistos.has(texto)) continue;
    const ps = texto.split(/\n\n+/).map((p) => p.trim()).filter((p) => p.length > 25);
    if (!ps.length || ps.some((p) => (freqParrafos.get(p) || 0) > 1)) continue;
    const toks = toTokens(texto);
    if (toks.size < 6) continue;
    let dup = false;
    for (const prev of tokensSeleccionados) {
      let inter = 0;
      toks.forEach((w) => { if (prev.has(w)) inter++; });
      if (inter / (toks.size + prev.size - inter) >= 0.55) { dup = true; break; }
    }
    if (!dup) {
      cuerposVistos.add(texto);
      tokensSeleccionados.push(toks);
      urls.push(`https://${HOST}/${m.slug}/`);
    }
  }

  return Array.from(new Set(urls));
}

async function esperarClavePublicada(maxSeconds) {
  const deadline = Date.now() + maxSeconds * 1000;
  let intento = 0;
  while (true) {
    intento++;
    try {
      const res = await fetch(KEY_LOCATION, { method: 'GET' });
      const body = (await res.text()).trim();
      if (res.ok && body === KEY) {
        console.log(`Clave IndexNow verificada en ${KEY_LOCATION} (intento ${intento}).`);
        return true;
      }
      console.log(`Clave aun no disponible (HTTP ${res.status}, intento ${intento}).`);
    } catch (err) {
      console.log(`Error consultando ${KEY_LOCATION} (intento ${intento}): ${err.message}`);
    }
    if (Date.now() >= deadline) return false;
    await new Promise((r) => setTimeout(r, 5000));
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const keyLocal = path.resolve('public', `${KEY}.txt`);
  if (!fs.existsSync(keyLocal) || fs.readFileSync(keyLocal, 'utf8').trim() !== KEY) {
    throw new Error(`Falta o no coincide el archivo de clave local: ${keyLocal}`);
  }

  const sitemapPath = path.resolve('dist/sitemap.xml');
  const urls =
    !opts.fromCatalog && fs.existsSync(sitemapPath)
      ? cargarUrlsDesdeSitemap(sitemapPath)
      : cargarUrlsDesdeCatalogo();

  const lotes = [];
  for (let i = 0; i < urls.length; i += MAX_BATCH) {
    lotes.push(urls.slice(i, i + MAX_BATCH));
  }

  console.log(`IndexNow preparado: ${urls.length} URLs en ${lotes.length} lote(s) -> ${opts.endpoint}`);

  if (opts.dryRun) {
    lotes.forEach((lote, idx) => {
      console.log(`  [dry-run] Lote ${idx + 1}/${lotes.length}: ${lote.length} URLs (primera=${lote[0]}, ultima=${lote[lote.length - 1]})`);
    });
    return;
  }

  const disponible = await esperarClavePublicada(opts.waitKeySeconds);
  if (!disponible) {
    throw new Error(`La clave ${KEY_LOCATION} no responde todavia con el valor esperado; publica primero los cambios en ${HOST}.`);
  }

  for (let idx = 0; idx < lotes.length; idx++) {
    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: lotes[idx]
    };
    const res = await fetch(opts.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const texto = await res.text();
    if (!res.ok) {
      throw new Error(`Fallo lote ${idx + 1}/${lotes.length} (HTTP ${res.status}): ${texto}`);
    }
    console.log(`  Lote ${idx + 1}/${lotes.length} enviado (${lotes[idx].length} URLs) -> HTTP ${res.status}`);
  }
}

main().catch((err) => {
  console.error('Error IndexNow:', err.message);
  process.exit(1);
});
