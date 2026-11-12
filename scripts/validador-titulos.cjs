// Validador de titulos y slugs - ParaCumpleanos
// Uso:  npm run validate                       (gate: falla el build si hay errores)
//       npm run validate -- mensaje arch.json  (validar un mensaje nuevo antes de publicarlo)
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

function bigramas(s) {
  const t = s.replace(/\s+/g, '');
  const out = [];
  for (let i = 0; i < t.length - 1; i++) out.push(t.slice(i, i + 2));
  return out;
}

function dice(a, b) {
  const A = bigramas(a), B = bigramas(b);
  if (!A.length || !B.length) return 0;
  const m = {};
  B.forEach(function (x) { m[x] = (m[x] || 0) + 1; });
  let hit = 0;
  A.forEach(function (x) { if (m[x] > 0) { hit++; m[x]--; } });
  return (2 * hit) / (A.length + B.length);
}

function jaccard(a, b) {
  const A = new Set(a.split(' ')), B = new Set(b.split(' '));
  let inter = 0;
  A.forEach(function (x) { if (B.has(x)) inter++; });
  return inter / (A.size + B.size - inter);
}

function similitud(a, b) {
  const na = normalizar(a), nb = normalizar(b);
  if (!na || !nb) return 0;
  return Math.max(dice(na, nb), jaccard(na, nb));
}

function validarRegistro(reg, base, errores, avisos) {
  const donde = (reg.tipo === 'hub' ? 'hub ' : 'mensaje ') + (reg.slug || '(sin slug)');

  // R0: slug unico y sin colision con rutas estaticas
  const dupe = base.find(function (r) { return r !== reg && r.slug === reg.slug; });
  if (dupe) errores.push('R0 ' + donde + ': slug duplicado');
  if (CONFIG.rutasEstaticas.indexOf(reg.slug) !== -1) errores.push('R0 ' + donde + ': colisiona con ruta estatica');
  if (!/^[a-z0-9-]+$/.test(reg.slug || '')) errores.push('R0 ' + donde + ': slug con caracteres invalidos');

  if (reg.tipo === 'hub') {
    // R1: keyword unica por hub
    const kw = base.filter(function (r) { return r.tipo === 'hub' && r.keyword === reg.keyword; });
    if (kw.length > 1) errores.push('R1 ' + donde + ': keyword repetida en otro hub');
    // R4: cabecera+modificador unico por destinatario
    const cab = base.filter(function (r) { return r.tipo === 'hub' && r.destinatario === reg.destinatario && r.cabecera === reg.cabecera && r.modificador === reg.modificador; });
    if (cab.length > 1) errores.push('R4 ' + donde + ': cabecera+modificador ya existe para ese destinatario');
    // R6: longitudes de hub
    if (reg.titulo.length > CONFIG.hubMax) avisos.push('R6 ' + donde + ': title de ' + reg.titulo.length + ' caracteres (max ' + CONFIG.hubMax + ')');
    if (!reg.meta || reg.meta.length < CONFIG.metaMin || reg.meta.length > CONFIG.metaMax) avisos.push('R6 ' + donde + ': meta description fuera de rango (' + CONFIG.metaMin + '-' + CONFIG.metaMax + ')');
  }

  if (reg.tipo === 'mensaje') {
    const palabras = normalizar(reg.titulo).split(' ').filter(Boolean).length;
    if (palabras < CONFIG.tituloMin || palabras > CONFIG.tituloMax) errores.push('R6 ' + donde + ': titulo con ' + palabras + ' palabras (rango ' + CONFIG.tituloMin + '-' + CONFIG.tituloMax + ')');
    const cat = base.find(function (r) { return r.tipo === 'hub' && r.slug === reg.categoria; });
    if (!cat) errores.push('R5 ' + donde + ': categoria inexistente');
    else {
      // R5: el mensaje NO debe competir por la keyword del hub
      if (normalizar(reg.titulo).indexOf(normalizar(cat.keyword)) !== -1) avisos.push('R5 ' + donde + ': el titulo contiene la keyword exacta del hub (canibalizacion)');
      // R3: primera palabra no repetida dentro de la categoria
      const primera = normalizar(reg.titulo).split(' ')[0];
      const rival = base.find(function (r) { return r !== reg && r.tipo === 'mensaje' && r.categoria === reg.categoria && normalizar(r.titulo).split(' ')[0] === primera; });
      if (rival) errores.push('R3 ' + donde + ': primera palabra "' + primera + '" ya usada en la categoria (compara con ' + rival.slug + ')');
    }
    // R2: similitud alta con otro mensaje del mismo destinatario
    base.forEach(function (r) {
      if (r !== reg && r.tipo === 'mensaje' && r.destinatario === reg.destinatario) {
        const s = similitud(reg.titulo, r.titulo);
        if (s > CONFIG.umbralSimilitud) errores.push('R2 ' + donde + ': similitud ' + s.toFixed(2) + ' con ' + r.slug + ' (umbral ' + CONFIG.umbralSimilitud + ')');
      }
    });
    // R7: sustancia del texto
    if (!reg.texto || normalizar(reg.texto).split(' ').length < CONFIG.textoMin) avisos.push('R7 ' + donde + ': texto demasiado corto (min ' + CONFIG.textoMin + ' palabras)');
  }
}

function validarTodo(todo) {
  const errores = [], avisos = [];
  todo.forEach(function (reg) { validarRegistro(reg, todo, errores, avisos); });
  return { errores: errores, avisos: avisos };
}

// ---------- modos ----------

function modoGate() {
  const todo = JSON.parse(fs.readFileSync('data/contenido.json', 'utf8'));
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
  const base = JSON.parse(fs.readFileSync('data/contenido.json', 'utf8'));
  const errores = [], avisos = [];
  validarRegistro(reg, base.concat([reg]), errores, avisos);
  avisos.forEach(function (a) { console.log('AVISO  ' + a); });
  errores.forEach(function (e) { console.log('ERROR  ' + e); });
  if (errores.length) { console.log('No publiques: corregi primero.'); process.exit(1); }
  console.log('Mensaje valido: sumalo a data/contenido.json.');
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
if (args[0] === 'mensaje') modoEditor(args[1]);
else if (args[0] === 'auditoria') modoAuditoria(args[1]);
else modoGate();
