// Verificacion semantica SVD / LSA de ParaCumpleanos
// Uso: npm run svd   (o node scripts/verificar-svd.mjs)
// Audita canibalizacion semantica entre hubs/guias (441 + 45), cohesion de portada
// y duplicacion latente dentro de los 22280 mensajes y 196 hitos historicos.

import fs from 'node:fs';
import path from 'node:path';

const STOPWORDS_ES = new Set([
  'a', 'al', 'algo', 'alguien', 'algun', 'alguna', 'algunas', 'alguno', 'algunos',
  'ante', 'antes', 'asi', 'aun', 'aunque', 'bajo', 'bien', 'cada', 'casi', 'como',
  'con', 'contra', 'cual', 'cuando', 'de', 'del', 'desde', 'donde', 'dos', 'el',
  'ella', 'ellas', 'ellos', 'en', 'entre', 'era', 'eres', 'es', 'esa', 'esas',
  'ese', 'eso', 'esos', 'esta', 'estaba', 'estan', 'estas', 'este', 'esto',
  'estos', 'fue', 'ha', 'hace', 'hacia', 'han', 'hasta', 'hay', 'hoy', 'la',
  'las', 'le', 'les', 'lo', 'los', 'mas', 'me', 'mi', 'mis', 'mucho', 'muy',
  'nada', 'ni', 'no', 'nos', 'nuestra', 'nuestro', 'o', 'otra', 'otro', 'para',
  'pero', 'por', 'porque', 'que', 'quien', 'quienes', 'se', 'sea', 'ser', 'si',
  'sin', 'sobre', 'solo', 'son', 'su', 'sus', 'tambien', 'tan', 'te', 'tener',
  'ti', 'tiene', 'toda', 'todas', 'todo', 'todos', 'tu', 'tus', 'un', 'una',
  'unas', 'uno', 'unos', 'usted', 'vos', 'y', 'ya', 'yo'
]);

function tokenizar(texto) {
  return String(texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOPWORDS_ES.has(w));
}

function construirTfIdf(docs) {
  const N = docs.length;
  const df = new Map();
  const tfs = docs.map((d) => {
    const tokens = tokenizar(d.texto);
    const counts = new Map();
    for (const t of tokens) counts.set(t, (counts.get(t) || 0) + 1);
    for (const t of counts.keys()) df.set(t, (df.get(t) || 0) + 1);
    return counts;
  });

  const vocab = [];
  const termIdx = new Map();
  for (const [t, freq] of df.entries()) {
    if (N > 20 && freq > N * 0.65) continue;
    termIdx.set(t, vocab.length);
    vocab.push(t);
  }

  const rows = tfs.map((counts) => {
    const vec = new Map();
    let normSq = 0;
    for (const [t, tf] of counts.entries()) {
      const idx = termIdx.get(t);
      if (idx === undefined) continue;
      const idf = Math.log((N + 1) / ((df.get(t) || 0) + 1)) + 1;
      const w = (1 + Math.log(tf)) * idf;
      vec.set(idx, w);
      normSq += w * w;
    }
    const norm = Math.sqrt(normSq) || 1;
    for (const [idx, w] of vec.entries()) vec.set(idx, w / norm);
    return vec;
  });

  return { rows, vocabSize: vocab.length, termIdx, df, N };
}

// Multiplicacion X^T * (X * v) sobre matriz dispersa
function gramVec(rows, v, vocabSize) {
  const docProj = new Float64Array(rows.length);
  for (let i = 0; i < rows.length; i++) {
    let s = 0;
    for (const [idx, w] of rows[i].entries()) s += w * v[idx];
    docProj[i] = s;
  }
  const out = new Float64Array(vocabSize);
  for (let i = 0; i < rows.length; i++) {
    const p = docProj[i];
    if (p === 0) continue;
    for (const [idx, w] of rows[i].entries()) out[idx] += w * p;
  }
  return out;
}

// Descomposicion SVD truncada (k componentes principales via iteracion de potencia + deflacion)
function svdTruncada(rows, vocabSize, k = 24) {
  const compCount = Math.min(k, rows.length, vocabSize);
  const basis = [];
  const sigmas = [];
  let frobEst = 0;
  for (const r of rows) {
    for (const w of r.values()) frobEst += w * w;
  }

  for (let c = 0; c < compCount; c++) {
    let v = new Float64Array(vocabSize);
    for (let j = 0; j < vocabSize; j++) {
      v[j] = ((j * 2654435761 + c * 40503) % 997) / 997 - 0.5;
    }
    for (let iter = 0; iter < 12; iter++) {
      // Ortogonalizar respecto a componentes previos (Gram-Schmidt)
      for (const b of basis) {
        let dot = 0;
        for (let j = 0; j < vocabSize; j++) dot += v[j] * b[j];
        for (let j = 0; j < vocabSize; j++) v[j] -= dot * b[j];
      }
      let norm = 0;
      for (let j = 0; j < vocabSize; j++) norm += v[j] * v[j];
      norm = Math.sqrt(norm) || 1;
      for (let j = 0; j < vocabSize; j++) v[j] /= norm;

      let w = gramVec(rows, v, vocabSize);
      for (const b of basis) {
        let dot = 0;
        for (let j = 0; j < vocabSize; j++) dot += w[j] * b[j];
        for (let j = 0; j < vocabSize; j++) w[j] -= dot * b[j];
      }
      let wNorm = 0;
      for (let j = 0; j < vocabSize; j++) wNorm += w[j] * w[j];
      wNorm = Math.sqrt(wNorm) || 1;
      for (let j = 0; j < vocabSize; j++) v[j] = w[j] / wNorm;
    }

    const gv = gramVec(rows, v, vocabSize);
    let lambda = 0;
    for (let j = 0; j < vocabSize; j++) lambda += v[j] * gv[j];
    if (lambda <= 1e-8) break;
    basis.push(v);
    sigmas.push(Math.sqrt(lambda));
  }

  // Proyectar documentos: Z_i = U_i * Sigma
  const embeddings = rows.map((r) => {
    const emb = new Float64Array(basis.length);
    let normSq = 0;
    for (let c = 0; c < basis.length; c++) {
      let s = 0;
      const b = basis[c];
      for (const [idx, w] of r.entries()) s += w * b[idx];
      emb[c] = s;
      normSq += s * s;
    }
    const norm = Math.sqrt(normSq) || 1;
    for (let c = 0; c < basis.length; c++) emb[c] /= norm;
    return emb;
  });

  const explained = sigmas.reduce((acc, s) => acc + s * s, 0) / Math.max(1, frobEst);
  return { embeddings, sigmas, explained, basis };
}

function cosenoDenso(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}

function cosenoDisperso(a, b) {
  let s = 0;
  for (const [idx, w] of a.entries()) {
    const wb = b.get(idx);
    if (wb) s += w * wb;
  }
  return s;
}

function cargarCatalogoJson() {
  let all = JSON.parse(fs.readFileSync('data/contenido.json', 'utf8'));
  const dir = 'data/categorias';
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
    all = all.concat(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
  }
  return all;
}

function extraerGuiasTs() {
  const guiasDir = 'src/data';
  const files = fs.readdirSync(guiasDir).filter((f) => /^guias(-parte\d+)?\.ts$/.test(f)).sort();
  const out = [];
  for (const f of files) {
    const src = fs.readFileSync(path.join(guiasDir, f), 'utf8');
    const blocks = src.split(/\n\s*\{\s*\n\s*slug:\s*'/);
    for (let i = 1; i < blocks.length; i++) {
      const b = blocks[i];
      const slug = b.slice(0, b.indexOf("'"));
      const mTit = b.match(/titulo:\s*'([^']+)'/);
      const mH1 = b.match(/h1:\s*'([^']+)'/);
      const mDesc = b.match(/descripcion:\s*'([^']+)'/);
      const mRd = b.match(/respuestaDirecta:\s*'([^']+)'/);
      out.push({
        slug,
        titulo: mTit ? mTit[1] : slug,
        texto: `${mTit ? mTit[1] : ''} ${mH1 ? mH1[1] : ''} ${mDesc ? mDesc[1] : ''} ${mRd ? mRd[1] : ''}`
      });
    }
  }
  return out;
}

function main() {
  const inicio = Date.now();
  const registros = cargarCatalogoJson();
  const hubs = registros.filter((r) => r.tipo === 'hub');
  const mensajes = registros.filter((r) => r.tipo === 'mensaje');
  const guias = extraerGuiasTs();

  // 1. Verificar 100% unicidad normalizada de mensajes
  const cuerpos = new Map();
  const duplicadosExactos = [];
  for (const m of mensajes) {
    const clave = String(m.texto || '').normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('es');
    if (cuerpos.has(clave)) {
      duplicadosExactos.push([cuerpos.get(clave), `${m.categoria}/${m.slug}`]);
    } else {
      cuerpos.set(clave, `${m.categoria}/${m.slug}`);
    }
  }

  // 2. SVD / LSA sobre 441 hubs + 45 guias
  const docsMacro = [
    ...hubs.map((h) => ({
      id: `hub:${h.slug}`,
      titulo: h.titulo,
      texto: `${h.titulo} ${h.h1 || ''} ${h.keyword || ''} ${h.meta || ''} ${h.lead || ''}`
    })),
    ...guias.map((g) => ({
      id: `guia:${g.slug}`,
      titulo: g.titulo,
      texto: g.texto
    }))
  ];

  const tfidfMacro = construirTfIdf(docsMacro);
  const svdMacro = svdTruncada(tfidfMacro.rows, tfidfMacro.vocabSize, 32);

  const alertasMacro = [];
  const topParesMacro = [];
  for (let i = 0; i < docsMacro.length; i++) {
    for (let j = i + 1; j < docsMacro.length; j++) {
      const cosSvd = cosenoDenso(svdMacro.embeddings[i], svdMacro.embeddings[j]);
      if (cosSvd >= 0.88) {
        const cosExact = cosenoDisperso(tfidfMacro.rows[i], tfidfMacro.rows[j]);
        if (cosExact >= 0.72) {
          alertasMacro.push({ a: docsMacro[i].id, b: docsMacro[j].id, cosSvd, cosExact });
        }
        topParesMacro.push({ a: docsMacro[i].id, b: docsMacro[j].id, cosSvd, cosExact });
      }
    }
  }
  topParesMacro.sort((x, y) => y.cosExact - x.cosExact);

  // 3. SVD intra-categoria sobre los 22280 mensajes
  const porCat = new Map();
  for (const m of mensajes) {
    if (!porCat.has(m.categoria)) porCat.set(m.categoria, []);
    porCat.get(m.categoria).push(m);
  }

  const alertasMensajes = [];
  let maxCosIntra = 0;
  for (const [catSlug, lista] of porCat.entries()) {
    const docsCat = lista.map((m) => ({
      id: m.slug,
      texto: `${m.titulo} ${m.texto}`
    }));
    const tfCat = construirTfIdf(docsCat);
    const svdCat = svdTruncada(tfCat.rows, tfCat.vocabSize, 10);
    for (let i = 0; i < docsCat.length; i++) {
      for (let j = i + 1; j < docsCat.length; j++) {
        const cosSvd = cosenoDenso(svdCat.embeddings[i], svdCat.embeddings[j]);
        if (cosSvd >= 0.965) {
          const cosExact = cosenoDisperso(tfCat.rows[i], tfCat.rows[j]);
          if (cosExact > maxCosIntra) maxCosIntra = cosExact;
          if (cosExact >= 0.82) {
            alertasMensajes.push({ cat: catSlug, a: docsCat[i].id, b: docsCat[j].id, cosSvd, cosExact });
          }
        }
      }
    }
  }

  // 4. Cobertura semantica de portada (index.astro) frente a hubs macro
  let portadaCohesion = 0;
  let portadaMaxCanib = 0;
  let portadaHubMasCercano = '';
  if (fs.existsSync('src/pages/index.astro')) {
    const idxHtml = fs
      .readFileSync('src/pages/index.astro', 'utf8')
      .replace(/^---[\s\S]*?---/, '')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ');
    const tokensIdx = tokenizar(idxHtml);
    const countsIdx = new Map();
    for (const t of tokensIdx) countsIdx.set(t, (countsIdx.get(t) || 0) + 1);
    const vecIdx = new Map();
    let nSq = 0;
    for (const [t, tf] of countsIdx.entries()) {
      const col = tfidfMacro.termIdx.get(t);
      if (col === undefined) continue;
      const idf = Math.log((tfidfMacro.N + 1) / ((tfidfMacro.df.get(t) || 0) + 1)) + 1;
      const w = (1 + Math.log(tf)) * idf;
      vecIdx.set(col, w);
      nSq += w * w;
    }
    const nIdx = Math.sqrt(nSq) || 1;
    for (const [c, w] of vecIdx.entries()) vecIdx.set(c, w / nIdx);

    const embIdx = new Float64Array(svdMacro.basis.length);
    let eSq = 0;
    for (let c = 0; c < svdMacro.basis.length; c++) {
      let s = 0;
      const b = svdMacro.basis[c];
      for (const [col, w] of vecIdx.entries()) s += w * b[col];
      embIdx[c] = s;
      eSq += s * s;
    }
    const eNorm = Math.sqrt(eSq) || 1;
    for (let c = 0; c < embIdx.length; c++) embIdx[c] /= eNorm;

    let sumaTop5 = 0;
    const sims = docsMacro.map((d, i) => ({ id: d.id, s: cosenoDisperso(vecIdx, tfidfMacro.rows[i]), svd: cosenoDenso(embIdx, svdMacro.embeddings[i]) }));
    sims.sort((a, b) => b.s - a.s);
    portadaMaxCanib = sims[0]?.s || 0;
    portadaHubMasCercano = sims[0]?.id || '';
    sumaTop5 = sims.slice(0, 5).reduce((acc, x) => acc + x.svd, 0) / 5;
    portadaCohesion = sumaTop5;
  }

  const ms = Date.now() - inicio;
  console.log('=== Verificacion SVD / LSA (ParaCumpleanos) ===');
  console.log(`Hubs analizados: ${hubs.length} | Guias: ${guias.length} | Mensajes: ${mensajes.length}`);
  console.log(`Varianza explicada SVD macro (k=${svdMacro.sigmas.length}): ${(svdMacro.explained * 100).toFixed(1)}%`);
  console.log(`Duplicados exactos normalizados: ${duplicadosExactos.length}`);
  console.log(`Alertas canibalizacion SVD+TFIDF hubs/guias (>=0.88 SVD & >=0.72 TFIDF): ${alertasMacro.length}`);
  console.log(`Alertas duplicacion latente intra-categoria (>=0.965 SVD & >=0.82 TFIDF): ${alertasMensajes.length} (max TFIDF=${maxCosIntra.toFixed(3)})`);
  console.log(`Portada SVD cohesion top-5=${portadaCohesion.toFixed(3)} | max solapamiento directo=${portadaMaxCanib.toFixed(3)} (${portadaHubMasCercano})`);
  if (topParesMacro.length) {
    console.log('Top pares macro con mayor cercania:');
    for (const p of topParesMacro.slice(0, 5)) {
      console.log(`  - ${p.a} <-> ${p.b} (SVD=${p.cosSvd.toFixed(3)}, TF-IDF=${p.cosExact.toFixed(3)})`);
    }
  }
  console.log(`Tiempo SVD: ${ms} ms`);

  if (duplicadosExactos.length || alertasMacro.length || alertasMensajes.length) {
    console.error('SVD DETECTO PROBLEMAS:', { duplicadosExactos, alertasMacro, alertasMensajes });
    process.exit(1);
  }
  console.log('SVD OK: 0 duplicados exactos, 0 canibalizaciones y separacion semantica limpia.');
}

main();
