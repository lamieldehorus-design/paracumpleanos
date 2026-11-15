// Validador de titulos y slugs - ParaCumpleanos
// Uso:  npm run validate                       (gate: falla el build si hay errores)
//       npm run validate -- editor arch.json   (validar un mensaje nuevo antes de publicarlo)
//       npm run validate -- mensaje arch.json  (alias de editor)
//       npm run validate -- auditoria gsc.csv  (detectar canibalizacion desde GSC)

const fs = require('fs');

const CONFIG = {
  umbralSimilitud: 0.85,
  tituloMin: 4,
  tituloMax: 12,
  hubMax: 60,
  metaMin: 120,
  metaMax: 165,
  textoMin: 40,
  rutasEstaticas: ['categorias', 'sobre-nosotros', 'privacidad', 'terminos-de-uso']
};

function normalizar(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e').replace(/[íìï]/g, 'i')
    .replace(/[óòö]/g, 'o').replace(/[úùü]/g, 'u').replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function charCode36(ch) {
  const c = ch.charCodeAt(0);
  if (c >= 97 && c <= 122) return c - 97;
  if (c >= 48 && c <= 57) return 26 + (c - 48);
  return 36;
}

function bigramas(s) {
  const t = s.replace(/\s+/g, '');
  if (t.length < 2) return new Uint16Array(0);
  const out = new Uint16Array(t.length - 1);
  for (let i = 0; i < t.length - 1; i++) {
    out[i] = charCode36(t[i]) * 37 + charCode36(t[i + 1]);
  }
  out.sort();
  return out;
}

function dicePre(A, B) {
  if (!A.length || !B.length) return 0;
  let hit = 0;
  let i = 0, j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) { hit++; i++; j++; }
    else if (A[i] < B[j]) i++;
    else j++;
  }
  return (2 * hit) / (A.length + B.length);
}

function jaccardPre(A, B) {
  let inter = 0;
  A.forEach(function (x) { if (B.has(x)) inter++; });
  return inter / (A.size + B.size - inter);
}

function similitud(a, b) {
  const na = normalizar(a), nb = normalizar(b);
  if (!na || !nb) return 0;
  return Math.max(
    dicePre(bigramas(na), bigramas(nb)),
    jaccardPre(new Set(na.split(' ')), new Set(nb.split(' ')))
  );
}

function crearIndice(base) {
  const porSlug = new Map();
  const hubsPorSlug = new Map();
  const porKeyword = new Map();
  const porCabecera = new Map();
  const porPrimeraPalabra = new Map();
  const porNormTitulo = new Map();
  const porDestinatario = new Map();

  for (let i = 0; i < base.length; i++) {
    const r = base[i];
    if (r.slug) {
      if (!porSlug.has(r.slug)) porSlug.set(r.slug, []);
      porSlug.get(r.slug).push(r);
    }
    if (r.tipo === 'hub') {
      if (r.slug) hubsPorSlug.set(r.slug, r);
      const kw = r.keyword;
      if (!porKeyword.has(kw)) porKeyword.set(kw, []);
      porKeyword.get(kw).push(r);
      const cabKey = (r.destinatario || '') + '\x00' + (r.cabecera || '') + '\x00' + (r.modificador || '');
      if (!porCabecera.has(cabKey)) porCabecera.set(cabKey, []);
      porCabecera.get(cabKey).push(r);
    } else if (r.tipo === 'mensaje') {
      const nt = normalizar(r.titulo);
      const palabrasArr = nt ? nt.split(' ') : [];
      const primera = palabrasArr[0] || '';
      const big = bigramas(nt);
      const wordSet = new Set(palabrasArr);
      r._normTitulo = nt;
      r._palabrasCount = palabrasArr.length;
      r._primera = primera;
      r._big = big;
      r._wordSet = wordSet;

      const catPrimKey = (r.categoria || '') + '\x00' + primera;
      if (!porPrimeraPalabra.has(catPrimKey)) porPrimeraPalabra.set(catPrimKey, []);
      porPrimeraPalabra.get(catPrimKey).push(r);

      if (!porNormTitulo.has(nt)) porNormTitulo.set(nt, []);
      porNormTitulo.get(nt).push(r);

      const dest = r.destinatario || '';
      if (!porDestinatario.has(dest)) porDestinatario.set(dest, []);
      porDestinatario.get(dest).push(r);
    }
  }
  return { porSlug, hubsPorSlug, porKeyword, porCabecera, porPrimeraPalabra, porNormTitulo, porDestinatario };
}

function validarRegistro(reg, base, errores, avisos, idx) {
  const index = idx || crearIndice(base);
  const donde = (reg.tipo === 'hub' ? 'hub ' : 'mensaje ') + (reg.slug || '(sin slug)');

  // R0: slug unico y sin colision con rutas estaticas
  const conSlug = index.porSlug.get(reg.slug) || [];
  if (conSlug.some(function (r) { return r !== reg; })) errores.push('R0 ' + donde + ': slug duplicado');
  if (CONFIG.rutasEstaticas.indexOf(reg.slug) !== -1) errores.push('R0 ' + donde + ': colisiona con ruta estatica');
  if (!/^[a-z0-9-]+$/.test(reg.slug || '')) errores.push('R0 ' + donde + ': slug con caracteres invalidos');

  if (reg.tipo === 'hub') {
    // R1: keyword unica por hub
    const kw = index.porKeyword.get(reg.keyword) || [];
    if (kw.length > 1) errores.push('R1 ' + donde + ': keyword repetida en otro hub');
    // R4: cabecera+modificador unico por destinatario
    const cabKey = (reg.destinatario || '') + '\x00' + (reg.cabecera || '') + '\x00' + (reg.modificador || '');
    const cab = index.porCabecera.get(cabKey) || [];
    if (cab.length > 1) errores.push('R4 ' + donde + ': cabecera+modificador ya existe para ese destinatario');
    // R6: longitudes de hub
    if (reg.titulo.length > CONFIG.hubMax) avisos.push('R6 ' + donde + ': title de ' + reg.titulo.length + ' caracteres (max ' + CONFIG.hubMax + ')');
    if (!reg.meta || reg.meta.length < CONFIG.metaMin || reg.meta.length > CONFIG.metaMax) avisos.push('R6 ' + donde + ': meta description fuera de rango (' + CONFIG.metaMin + '-' + CONFIG.metaMax + ')');
  }

  if (reg.tipo === 'mensaje') {
    const nt = reg._normTitulo !== undefined ? reg._normTitulo : normalizar(reg.titulo);
    const palabrasArr = nt ? nt.split(' ').filter(Boolean) : [];
    const palabras = reg._palabrasCount !== undefined ? reg._palabrasCount : palabrasArr.length;
    if (palabras < CONFIG.tituloMin || palabras > CONFIG.tituloMax) errores.push('R6 ' + donde + ': titulo con ' + palabras + ' palabras (rango ' + CONFIG.tituloMin + '-' + CONFIG.tituloMax + ')');
    const cat = index.hubsPorSlug.get(reg.categoria);
    if (!cat) errores.push('R5 ' + donde + ': categoria inexistente');
    else {
      // R5: el mensaje NO debe competir por la keyword del hub
      if (nt.indexOf(normalizar(cat.keyword)) !== -1) avisos.push('R5 ' + donde + ': el titulo contiene la keyword exacta del hub (canibalizacion)');
      // R3: primera palabra no repetida dentro de la categoria
      const primera = reg._primera !== undefined ? reg._primera : (palabrasArr[0] || '');
      const catPrimKey = (reg.categoria || '') + '\x00' + primera;
      const rivales = index.porPrimeraPalabra.get(catPrimKey) || [];
      const rival = rivales.find(function (r) { return r !== reg; });
      if (rival) errores.push('R3 ' + donde + ': primera palabra "' + primera + '" ya usada en la categoria (compara con ' + rival.slug + ')');
    }
    // R2: similitud alta con otro mensaje del mismo destinatario
    const mismosDest = index.porDestinatario.get(reg.destinatario || '') || [];
    const bigA = reg._big || bigramas(nt);
    const setA = reg._wordSet || new Set(palabrasArr);
    for (let j = 0; j < mismosDest.length; j++) {
      const r = mismosDest[j];
      if (r === reg) continue;
      const s = nt && r._normTitulo ? Math.max(dicePre(bigA, r._big), jaccardPre(setA, r._wordSet)) : 0;
      if (s > CONFIG.umbralSimilitud) errores.push('R2 ' + donde + ': similitud ' + s.toFixed(2) + ' con ' + r.slug + ' (umbral ' + CONFIG.umbralSimilitud + ')');
    }
    // R2b: titulo identico (normalizado) en cualquier otro mensaje del sitio
    const clones = index.porNormTitulo.get(nt) || [];
    const clon = clones.find(function (r) { return r !== reg; });
    if (clon) errores.push('R2 ' + donde + ': titulo identico al de ' + clon.slug + ' (otra pagina)');
    // R7: sustancia del texto
    if (!reg.texto || normalizar(reg.texto).split(' ').length < CONFIG.textoMin) avisos.push('R7 ' + donde + ': texto demasiado corto (min ' + CONFIG.textoMin + ' palabras)');
  }
}

function validarTodo(todo) {
  const errores = [], avisos = [];
  const idx = crearIndice(todo);
  for (let i = 0; i < todo.length; i++) {
    validarRegistro(todo[i], todo, errores, avisos, idx);
  }
  return { errores: errores, avisos: avisos };
}

// ---------- modos ----------

function cargarTodo() {
  let todo = JSON.parse(fs.readFileSync('data/contenido.json', 'utf8'));
  const dir = 'data/categorias';
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).filter(function (f) { return f.slice(-5) === '.json'; }).sort().forEach(function (f) {
      todo = todo.concat(JSON.parse(fs.readFileSync(dir + '/' + f, 'utf8')));
    });
  }
  return todo;
}

function modoGate() {
  const todo = cargarTodo();
  const r = validarTodo(todo);
  r.avisos.forEach(function (a) { console.log('AVISO  ' + a); });
  r.errores.forEach(function (e) { console.log('ERROR  ' + e); });
  console.log('');
  console.log('Registros: ' + todo.length + ' | Errores: ' + r.errores.length + ' | Avisos: ' + r.avisos.length);
  if (r.errores.length) { console.log('BUILD BLOQUEADO: corregi los errores antes de publicar.'); process.exit(1); }
  console.log('Validacion OK: listo para construir.');
}

function modoEditor(archivo) {
  if (!fs.existsSync(archivo)) { console.log('No existe: ' + archivo); process.exit(1); }
  const reg = JSON.parse(fs.readFileSync(archivo, 'utf8'));
  const base = cargarTodo();
  const todo = base.concat([reg]);
  const idx = crearIndice(todo);
  const errores = [], avisos = [];
  validarRegistro(reg, todo, errores, avisos, idx);
  avisos.forEach(function (a) { console.log('AVISO  ' + a); });
  errores.forEach(function (e) { console.log('ERROR  ' + e); });
  if (errores.length) { console.log('No publiques: corregi primero.'); process.exit(1); }
  console.log('Mensaje valido: sumalo a data/categorias/.');
}

function modoAuditoria(archivo) {
  const lineas = fs.readFileSync(archivo, 'utf8').split(/\r?\n/).filter(Boolean);
  const porQuery = {};
  lineas.forEach(function (l, i) {
    if (i === 0 && /query/i.test(l)) return;
    const c = l.split(',');
    if (c.length < 3) return;
    (porQuery[c[0]] = porQuery[c[0]] || []).push(c[1]);
  });
  let total = 0;
  Object.keys(porQuery).forEach(function (q) {
    if (porQuery[q].length > 1) {
      total++;
      console.log('CANIBALIZACION? "' + q + '" imprime ' + porQuery[q].length + ' URLs:');
      porQuery[q].forEach(function (u) { console.log('   ' + u); });
    }
  });
  console.log(total ? total + ' queries con mas de una URL.' : 'Sin canibalizacion detectada.');
}

const args = process.argv.slice(2);
if (args[0] === 'mensaje' || args[0] === 'editor') modoEditor(args[1]);
else if (args[0] === 'auditoria') modoAuditoria(args[1]);
else modoGate();
