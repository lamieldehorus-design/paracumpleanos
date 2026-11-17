import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  crearCatalogo,
  metaDe,
  nombreHub,
  migasLd,
  construirSetIndexables,
  generarUrlsSitio,
  generarSitemapXml,
  POR_PAGINA,
  RELACIONADAS,
  HERMANAS
} from './catalogo';
import { GUIAS_EDITORIALES } from '../data/guias';
import {
  TEMAS_TARJETA,
  limpiarCampoTexto,
  personalizarTexto,
  resumirTextoCard,
  prepararParrafosTarjeta
} from './personalizador';
import {
  clasificarMensaje,
  extraerCitaDestacada,
  guiaRelacionadaParaHub,
  editorialHubCompleto,
  guiaAdaptacionMensaje
} from './editorial';
import {
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
  INDEXNOW_MAX_BATCH,
  extraerUrlsDeSitemap,
  construirPayloadsIndexNow
} from './indexnow';
import {
  WEBSUB_HUB,
  SITEMAP_URL,
  FEED_URL,
  generarRssXml,
  parsearCredencialesGsc,
  construirJwtGsc,
  construirEndpointsGsc
} from './google-notify';

function cargarDatosCompletos() {
  const base = JSON.parse(fs.readFileSync(path.resolve('data/contenido.json'), 'utf8'));
  const dir = path.resolve('data/categorias');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
  let all = [...base];
  for (const f of files) {
    all = all.concat(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
  }
  return all;
}

test('catalogo contiene exactamente 351 categorias y 36 mensajes por categoria (12636 todos unicos)', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  assert.equal(cat.hubs.length, 351, `Se esperaban 351 hubs, hay ${cat.hubs.length}`);
  assert.equal(cat.todosMensajes.length, 351 * 36, `Se esperaban ${351 * 36} mensajes, hay ${cat.todosMensajes.length}`);
  assert.equal(
    new Set(cat.todosMensajes.map((m) => String(m.texto || '').trim())).size,
    12636,
    'Todos los 12636 mensajes deben tener cuerpo unico sin duplicados'
  );

  for (const hub of cat.hubs) {
    const msgs = cat.mensajesDe(hub.slug);
    assert.ok(msgs.length >= 36, `Hub ${hub.slug} tiene solo ${msgs.length} mensajes`);
    assert.ok(hub.titulo.length <= 60, `Hub ${hub.slug} excede 60 chars en titulo: ${hub.titulo.length}`);
    assert.ok(hub.meta.length >= 120 && hub.meta.length <= 165, `Hub ${hub.slug} meta fuera de rango: ${hub.meta.length}`);
  }
});

test('interlinks garantizan 8 relacionadas y 6 hermanas por pagina', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const sampleMsg = cat.todosMensajes[0];
  const rels = cat.relacionadasDe(sampleMsg);
  assert.equal(rels.length, RELACIONADAS);
  assert.ok(!rels.some((r) => r.slug === sampleMsg.slug));

  const hub = cat.hubDe(sampleMsg);
  assert.ok(hub);
  const her = cat.hermanasDe(hub);
  assert.equal(her.length, HERMANAS);
  assert.ok(!her.some((h) => h.slug === hub.slug));

  const chips = cat.hubsPrincipales.slice(0, 25).map((h) => h.destinatario);
  assert.equal(new Set(chips).size, 25, 'hubsPrincipales debe tener 25 destinatarios unicos');

  assert.equal(Math.ceil(cat.mensajesDe(hub.slug).length / POR_PAGINA), 3);
});

test('helpers SEO metaDe, nombreHub y migasLd formatean correctamente', () => {
  const m = metaDe('Un texto de prueba '.repeat(15), 155);
  assert.ok(m.length <= 155);
  assert.ok(m.endsWith('…'));

  assert.equal(nombreHub({ keyword: 'feliz cumpleaños mamá', destinatario: 'mamá' }), 'Feliz cumpleaños mamá');

  const ld = migasLd([{ name: 'Inicio', url: 'https://paracumpleanos.com/' }]);
  assert.equal(ld['@type'], 'BreadcrumbList');
  assert.equal(ld.itemListElement[0].position, 1);
});

test('descripciones lead, seoTitulo y seoTexto son unicos y ningun titulo queda truncado', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  assert.equal(new Set(cat.hubs.map((h) => h.lead)).size, 351, 'Cada categoria debe tener una descripcion lead unica');
  assert.equal(new Set(cat.hubs.map((h) => h.seoTitulo)).size, 351, 'Cada categoria debe tener un seoTitulo unico');
  assert.equal(new Set(cat.hubs.map((h) => h.seoTexto)).size, 351, 'Cada categoria debe tener un seoTexto unico');
  assert.equal(new Set(cat.hubs.map((h) => h.titulo)).size, 351, 'Cada categoria debe tener un titulo unico');

  const cortePrep = /(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(de|del|en|con|a|al|para|por|sin|y|el|la|los|las|un|una|tu|su)$/i;
  for (const h of cat.hubs) {
    assert.ok(!cortePrep.test(h.titulo.trim()), `Hub ${h.slug} termina en preposicion/articulo: "${h.titulo}"`);
    assert.ok((h.lead || '').length >= 300, `Hub ${h.slug} lead demasiado corto: ${(h.lead || '').length}`);
    assert.ok((h.lead || '').split('\n\n').length >= 2, `Hub ${h.slug} lead debe tener al menos 2 parrafos`);
    assert.ok((h.seoTexto || '').length >= 400, `Hub ${h.slug} seoTexto demasiado corto: ${(h.seoTexto || '').length}`);
    assert.ok((h.seoTexto || '').split('\n\n').length >= 3, `Hub ${h.slug} seoTexto debe tener 3 parrafos`);
    if (/fallecid|hasta-el-cielo/.test(h.slug)) {
      const seoBlob = `${h.lead} ${h.seoTitulo} ${h.seoTexto}`;
      assert.ok(!/(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(torta|pastel|soplá|velas|fiesta|festej\w*|brindis|regalos)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i.test(seoBlob), `Hub de duelo ${h.slug} contiene palabra festiva en lead/seo`);
    }
    if (/(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(h.slug)) {
      const seoBlob = `${h.lead} ${h.seoTitulo} ${h.seoTexto}`;
      assert.ok(!/cumpleaños/i.test(seoBlob), `Hub de aniversario ${h.slug} menciona cumpleaños en lead/seo`);
    }
  }
  for (const m of cat.todosMensajes) {
    assert.ok(!cortePrep.test(m.titulo.trim()), `Mensaje ${m.slug} termina en preposicion/articulo: "${m.titulo}"`);
    assert.ok(!/\{[a-zA-Z0-9_]+\}/.test(m.titulo + ' ' + m.texto), `Mensaje ${m.slug} contiene token sin resolver`);
    assert.ok(!/,\s*quien cumple\b|quien cumple\s+de\s+alma|\bpara quien cumple:/i.test(m.texto), `Mensaje ${m.slug} contiene vocativo literal "quien cumple"`);
    assert.ok(!/Querida persona especial/i.test(m.texto), `Mensaje ${m.slug} contiene saludo generico "Querida persona especial"`);
    assert.ok(!/\(\d+\/36 para [^)]+\)/.test(m.texto), `Mensaje ${m.slug} contiene marcador interno (/36 para ...)`);
    assert.ok(!/\b([a-záéíóúüñ]{2,})\s+\1\b/i.test(m.texto), `Mensaje ${m.slug} tiene palabra duplicada consecutiva`);
    assert.ok(!/de corazón\.\s+Deseo de corazón/i.test(m.texto), `Mensaje ${m.slug} repite "de corazon" pegado`);
    assert.ok(!/(,\s+(hija|hijo|mamá|papá|hermana|hermano|amiga|amigo|novia|novio|esposa|esposo|abuela|abuelo|prima|primo)\.\s+Cuando pienso en tu cumpleaños),\s+\2,/i.test(m.texto), `Mensaje ${m.slug} repite vocativo en oraciones seguidas`);
  }
});

test('cartas largas, poemas en estrofas, duelo respetuoso y aniversarios coherentes', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  const cartasHubs = new Set(
    cat.hubs.filter((h) => h.grupo === 'cartas' || h.slug === 'feliz-cumpleanos-abuelita-cartas-hermosas').map((h) => h.slug)
  );
  const poemasHubs = new Set(
    cat.hubs.filter((h) => /^poema|poesia/.test(h.slug) || /-poema/.test(h.slug)).map((h) => h.slug)
  );
  const dueloHubs = new Set(
    cat.hubs.filter((h) => /fallecid|hasta-el-cielo/.test(h.slug)).map((h) => h.slug)
  );
  const anivHubs = new Set(
    cat.hubs.filter((h) => /(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(h.slug)).map((h) => h.slug)
  );

  for (const m of cat.todosMensajes) {
    if (cartasHubs.has(m.categoria)) {
      const words = m.texto.trim().split(/\s+/).length;
      const paras = m.texto.split('\n\n').length;
      assert.ok(words >= 140, `Carta ${m.slug} (${m.categoria}) demasiado corta: ${words} palabras`);
      assert.ok(paras >= 5, `Carta ${m.slug} (${m.categoria}) requiere estructura epistolar (>=5 parrafos): ${paras}`);
    }
    if (poemasHubs.has(m.categoria)) {
      assert.ok(m.texto.includes('\n'), `Poema ${m.slug} no contiene saltos de verso`);
      assert.ok(m.texto.split('\n\n').length >= 2, `Poema ${m.slug} debe tener estrofas`);
    }
    if (dueloHubs.has(m.categoria)) {
      const txt = m.titulo + ' ' + m.texto;
      assert.ok(!/(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(torta|pastel|soplá|velas|fiesta|festej\w*|brindis|regalos)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i.test(txt), `Mensaje de duelo ${m.slug} contiene palabra festiva`);
    }
    if (anivHubs.has(m.categoria)) {
      const txt = m.titulo + ' ' + m.texto;
      assert.ok(!/cumpleaños/i.test(txt), `Mensaje de aniversario ${m.slug} (${m.categoria}) menciona cumpleaños`);
    }
    if (/hija|exnovia|hermana/.test(m.categoria) && cartasHubs.has(m.categoria)) {
      const sinAnio = m.texto.replace(/\b(un|este)\s+año\s+rodeado\b/gi, '');
      assert.ok(!/\b(tan chico|más chico|rodeado|esperado|amado)\b/i.test(sinAnio), `Carta femenina ${m.slug} (${m.categoria}) contiene concordancia masculina`);
    }
  }
});

test('modulo editorial genera 20 perfiles distintos, citas, FAQs y posdatas coherentes sin contaminacion de tono', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  const perfilesEncontrados = new Set<string>();
  const ejConcretos = new Set<string>();

  for (const hub of cat.hubs) {
    const msgs = cat.mensajesDe(hub.slug);
    const ed = editorialHubCompleto(hub, msgs);
    perfilesEncontrados.add(ed.perfil);
    assert.equal(ed.tabla.length, 3);
    assert.equal(ed.faqs.length, 3);
    assert.ok(ed.claves.length >= 3);

    const isDuelo = /fallecid|hasta-el-cielo/.test(hub.slug);
    const isAniv = /(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(hub.slug);

    if (isDuelo) {
      assert.equal(ed.perfil, 'duelo', `Hub duelo mal clasificado: ${hub.slug}`);
      assert.ok(!/(torta|fiesta|pastel|festej\w*|brindis|velas)/i.test(ed.citaClave + ed.claves.join(' ')), `Editorial duelo con fiesta: ${hub.slug}`);
    }
    if (isAniv) {
      assert.ok(ed.perfil === 'aniv_meses' || ed.perfil === 'aniv_anos', `Hub aniversario mal clasificado: ${hub.slug}`);
      assert.ok(!/cumpleaños/i.test(ed.citaClave + ed.claves.join(' ') + ed.faqs.map((f) => f.pregunta + ' ' + f.respuesta).join(' ')), `Editorial aniversario menciona cumpleaños: ${hub.slug}`);
    }

    const adapt0 = guiaAdaptacionMensaje(msgs[0], hub);
    ejConcretos.add(adapt0.ejemploConcreto);
    assert.ok(adapt0.posdataSugerida.length >= 25);
    assert.ok(adapt0.citaDestacada.length >= 20);
    assert.equal(adapt0.pasos.length, 3);
    if (isDuelo) {
      assert.ok(!/(torta|fiesta|pastel|festej\w*|velas)/i.test(adapt0.ejemploGenerico + ' ' + adapt0.ejemploConcreto + ' ' + adapt0.posdataSugerida));
    }
    if (isAniv) {
      assert.ok(!/cumpleaños/i.test(adapt0.ejemploGenerico + ' ' + adapt0.ejemploConcreto + ' ' + adapt0.posdataSugerida));
    }
  }

  assert.ok(perfilesEncontrados.size >= 18, `Se esperaban al menos 18 perfiles editoriales distintos, hay ${perfilesEncontrados.size}`);
  assert.ok(ejConcretos.size >= 30, `Se esperaban al menos 30 variaciones de ejemplos concretos, hay ${ejConcretos.size}`);

  const hubDuelo = cat.hubsPorSlug.get('felicitaciones-a-madre-fallecida');
  assert.equal(guiaRelacionadaParaHub(hubDuelo).slug, 'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido');

  const msgMama = cat.mensajesDe('feliz-cumpleanos-mama')[0];
  assert.equal(clasificarMensaje(msgMama, cat.hubDe(msgMama)).palabras > 30, true);
  assert.ok(extraerCitaDestacada(msgMama).length > 15);

  for (const m of cat.todosMensajes) {
    const cita = extraerCitaDestacada(m);
    assert.ok(cita.length >= 15, `Cita muy corta en ${m.slug}: ${cita}`);
    assert.ok(!/^(Mensaje en inglés|Traducción al español):/i.test(cita), `Cita expone etiqueta bilingue en ${m.slug}: ${cita}`);
    assert.ok(!/^(Hoy en tu cumpleaños|Querid[ao]\s+[^,]+|Mi amor|Amor mío|Con todo cariño|Para vos[^,]*),\s+[A-ZÁÉÍÓÚÜÑ]/u.test(cita), `Cita pega saludo con mayuscula en ${m.slug}: ${cita}`);
    const comillas = (cita.match(/"/g) || []).length;
    assert.equal(comillas % 2, 0, `Cita con comillas desparejas en ${m.slug}: ${cita}`);
  }
});

test('construirSetIndexables prioriza contenido real y unicidad sin minimo artificial de palabras', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const indexables = construirSetIndexables(cat.todosMensajes);

  assert.equal(indexables.size, 12636, `Se esperaban 12636 mensajes con contenido y slug unicos, hay ${indexables.size}`);
  const cuerpos = new Set<string>();
  for (const m of cat.todosMensajes) {
    assert.ok(indexables.has(m.slug), `Mensaje con contenido valido excluido: ${m.slug}`);
    const cuerpo = String(m.texto || '').normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('es');
    assert.ok(!cuerpos.has(cuerpo), `Mensaje indexable duplicado en texto: ${m.slug}`);
    cuerpos.add(cuerpo);
  }

  const breve = cat.todosMensajes.find((m) => String(m.texto || '').trim().split(/\s+/).filter(Boolean).length < 50);
  assert.ok(breve, 'La prueba debe incluir mensajes breves reales');
  assert.ok(indexables.has(breve.slug), 'Un mensaje breve y unico no se excluye solo por su extension');
});

test('guias editoriales cumplen checklist completo SEO y GEO 2026 para guias actuales y futuras', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const norm = (s: string) =>
    String(s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  assert.ok(GUIAS_EDITORIALES.length >= 10);
  const slugsGuias = new Set<string>();
  for (const g of GUIAS_EDITORIALES) {
    assert.ok(!slugsGuias.has(g.slug), `Slug de guia duplicado: ${g.slug}`);
    assert.match(g.slug, /^[a-z0-9-]+$/, `Slug invalido en guia: ${g.slug}`);
    slugsGuias.add(g.slug);

    assert.ok(g.seoTitle.length >= 50 && g.seoTitle.length <= 60, `Guia ${g.slug} seoTitle fuera de 50-60 chars: ${g.seoTitle.length}`);
    assert.ok(g.descripcion.length >= 150 && g.descripcion.length <= 160, `Guia ${g.slug} meta description fuera de 150-160 chars: ${g.descripcion.length}`);
    assert.ok(g.keywordPrincipal.trim().length >= 5, `Guia ${g.slug} requiere keywordPrincipal`);
    assert.ok(g.keywordsSecundarias.length >= 3 && g.keywordsSecundarias.length <= 6, `Guia ${g.slug} requiere 3-6 keywordsSecundarias`);

    const kw = norm(g.keywordPrincipal);
    assert.ok(norm(g.seoTitle).includes(kw), `Guia ${g.slug} debe incluir keywordPrincipal en seoTitle`);
    assert.ok(norm(g.h1).includes(kw), `Guia ${g.slug} debe incluir keywordPrincipal en h1`);
    assert.ok(norm(g.respuestaDirecta).includes(kw), `Guia ${g.slug} debe incluir keywordPrincipal en respuestaDirecta`);
    assert.ok(g.secciones.some((s) => norm(s.subtitulo).includes(kw)), `Guia ${g.slug} debe incluir keywordPrincipal en al menos un H2`);

    const rdWords = g.respuestaDirecta.trim().split(/\s+/).filter(Boolean).length;
    assert.ok(rdWords >= 40 && rdWords <= 100, `Guia ${g.slug} respuestaDirecta fuera de 40-100 palabras: ${rdWords}`);

    assert.ok(g.secciones.length >= 3, `Guia ${g.slug} requiere al menos 3 secciones`);
    assert.ok(g.secciones.every((s) => /^¿.+\?$/.test(s.subtitulo.trim())), `Guia ${g.slug} debe tener todos los H2 de secciones en forma de pregunta`);
    assert.ok(g.citaDestacada.length >= 40, `Guia ${g.slug} requiere citaDestacada`);
    assert.ok(g.comparacionPractica.evitar.length >= 30 && g.comparacionPractica.mejor.length >= 30);
    assert.equal(g.tablaComparativa.columnas.length, 3);
    assert.ok(g.tablaComparativa.filas.length >= 3, `Guia ${g.slug} tabla con pocas filas`);
    assert.ok(g.ejemplosAdaptables.length >= 2, `Guia ${g.slug} requiere al menos 2 plantillas adaptables`);
    assert.equal(g.faqs.length, 3, `Guia ${g.slug} requiere 3 FAQs`);

    assert.match(g.fechaPublicacion, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(g.fechaActualizacion, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(g.autor.length >= 5 && g.autorRol.length >= 10 && g.autorBio.length >= 40, `Guia ${g.slug} requiere autor con rol y bio E-E-A-T`);
    assert.ok(g.datosPropios.dato.length >= 40 && g.datosPropios.fuente.length >= 15, `Guia ${g.slug} requiere datosPropios con fuente`);
    assert.ok(g.fuentesAutoridad.length >= 2 && g.fuentesAutoridad.length <= 3, `Guia ${g.slug} requiere 2-3 fuentes externas de autoridad`);
    assert.ok(g.fuentesAutoridad.every((f) => /^https:\/\//.test(f.url)), `Guia ${g.slug} tiene fuente externa sin https`);
    assert.ok(g.categoriasRelacionadas.length >= 3 && g.categoriasRelacionadas.length <= 5, `Guia ${g.slug} requiere 3-5 enlaces internos`);

    const textoTotal = [
      g.h1,
      g.resumen,
      g.respuestaDirecta,
      g.citaDestacada,
      g.datosPropios.dato,
      g.comparacionPractica.evitar,
      g.comparacionPractica.mejor,
      g.tablaComparativa.titulo,
      ...g.tablaComparativa.filas.flat(),
      ...g.ejemplosAdaptables.map((e) => `${e.etiqueta} ${e.texto}`),
      ...g.faqs.map((f) => `${f.pregunta} ${f.respuesta}`),
      ...g.secciones.map((s) => `${s.subtitulo} ${s.parrafos.join(' ')} ${(s.lista || []).join(' ')}`)
    ]
      .join(' ')
      .split(/\s+/).length;
    assert.ok(textoTotal >= 800, `Guia ${g.slug} demasiado corta (${textoTotal} palabras; minimo 800 en articulo informativo)`);

    for (const rel of g.categoriasRelacionadas) {
      assert.ok(cat.hubsPorSlug.has(rel.slug), `Guia ${g.slug} enlaza a categoria inexistente: ${rel.slug}`);
    }
  }

  const robots = fs.readFileSync(path.resolve('public/robots.txt'), 'utf8');
  for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
    assert.ok(robots.includes(bot), `Falta crawler IA ${bot} en public/robots.txt`);
  }
});

test('personalizador adapta saludos, cartas, bilingues, poemas y firma sin cortar texto ni perder cuerpo en grillas', () => {
  assert.equal(limpiarCampoTexto('  Laura \n Perez  '), 'Laura Perez');
  const salida = personalizarTexto('Hoy celebramos tu vida con enorme alegría.', {
    nombre: 'Laura',
    firma: 'Sofi'
  });
  assert.equal(salida, 'Laura, hoy celebramos tu vida con enorme alegría.\n\n— Sofi');

  const conNombreYaPresente = personalizarTexto('Laura, hoy te deseamos lo mejor del mundo.', {
    nombre: 'Laura',
    firma: '— Tus amigos'
  });
  assert.equal(conNombreYaPresente, 'Laura, hoy te deseamos lo mejor del mundo.\n\n— Tus amigos');

  const cartaAmor = personalizarTexto('Mi amor,\n\nHoy celebramos un mes más caminando juntos.', {
    nombre: 'Laura',
    firma: 'Martín'
  });
  assert.equal(cartaAmor, 'Laura, mi amor,\n\nHoy celebramos un mes más caminando juntos.\n\n— Martín');

  const cartaMama = personalizarTexto('Querida mamá,\n\nGracias por estar cada día en nuestra mesa.', {
    nombre: 'Mami'
  });
  assert.equal(cartaMama, 'Mami,\n\nGracias por estar cada día en nuestra mesa.');
  assert.ok(!/persona especial/i.test(cartaMama));

  const resumenGrilla = resumirTextoCard(cartaMama);
  assert.equal(resumenGrilla, 'Mami, gracias por estar cada día en nuestra mesa.');

  const bilingue = personalizarTexto('Mensaje en inglés:\n"Happy birthday!"\n\nTraducción al español:\n"¡Feliz cumpleaños!"', {
    nombre: 'Laura'
  });
  assert.equal(
    bilingue,
    'Para Laura:\n\nMensaje en inglés:\n"Happy birthday!"\n\nTraducción al español:\n"¡Feliz cumpleaños!"'
  );

  const poema = personalizarTexto('Hoy brillan las luces\nen tu caminar.\n\nQue sigas sumando\nmotivos para amar.', {
    nombre: 'Laura'
  });
  assert.equal(
    poema,
    'Para Laura:\n\nHoy brillan las luces\nen tu caminar.\n\nQue sigas sumando\nmotivos para amar.'
  );

  const exclam = personalizarTexto('¡Qué alegría festejar tu día!', { nombre: 'Laura' });
  assert.equal(exclam, 'Laura, ¡qué alegría festejar tu día!');

  const cartaLarga = Array.from({ length: 5 }, (_, i) => `Párrafo ${i + 1} lleno de recuerdos hermosos compartidos juntos en familia.`).join('\n\n') + '\n\n— Sofi';
  const bloquesCanvas = prepararParrafosTarjeta(cartaLarga, (s) => s.length * 14, 860);
  const textoReconstruido = bloquesCanvas.map((b) => b.lineas.join(' ')).join(' ');
  assert.ok(textoReconstruido.includes('Párrafo 5'));
  assert.ok(textoReconstruido.includes('— Sofi'));
  assert.ok(!textoReconstruido.includes('…'));
  assert.equal(bloquesCanvas[bloquesCanvas.length - 1].esFirma, true);
  assert.equal(Object.keys(TEMAS_TARJETA).length, 4);
});

test('generarUrlsSitio y generarSitemapXml cubren las 13706 URLs indexables sin duplicados', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const slugsGuias = GUIAS_EDITORIALES.map((g) => g.slug);
  const urls = generarUrlsSitio(cat, slugsGuias);

  assert.equal(urls.length, 13706, `Se esperaban 13706 URLs indexables, se obtuvieron ${urls.length}`);
  assert.equal(new Set(urls).size, 13706, 'Las URLs del sitemap deben ser todas unicas');
  assert.ok(urls.every((url) => url.startsWith('https://paracumpleanos.com/')));
  assert.ok(urls.every((url) => !/[?#]/.test(url)));
  assert.ok(urls.includes('https://paracumpleanos.com/'));
  assert.ok(urls.includes('https://paracumpleanos.com/categorias/'));
  assert.ok(urls.includes('https://paracumpleanos.com/guias/'));
  assert.ok(urls.includes('https://paracumpleanos.com/sobre-nosotros/'));
  assert.ok(urls.includes('https://paracumpleanos.com/contacto/'));
  assert.ok(urls.includes('https://paracumpleanos.com/privacidad/'));
  assert.ok(urls.includes('https://paracumpleanos.com/terminos-de-uso/'));
  assert.ok(urls.includes('https://paracumpleanos.com/guias/como-escribir-una-carta-de-cumpleanos-que-emocione/'));
  assert.ok(urls.includes('https://paracumpleanos.com/feliz-cumpleanos-mama/'));
  assert.ok(urls.includes('https://paracumpleanos.com/feliz-cumpleanos-mama/2/'));
  assert.ok(urls.includes('https://paracumpleanos.com/feliz-cumpleanos-mama/3/'));
  assert.ok(urls.includes('https://paracumpleanos.com/hoy-celebramos-tu-autenticidad-tu-fuerza-tranquila-y-tu-enorme-corazon/'));

  const indexables = construirSetIndexables(cat.todosMensajes);
  assert.equal(indexables.size, 12636);

  const xml = generarSitemapXml(urls);
  assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
  const locs = xml.match(/<loc>/g) || [];
  assert.equal(locs.length, 13706);
  assert.ok(!xml.includes('<lastmod>'), 'No agregar lastmod sin fechas reales por URL');
});

test('Bing IndexNow cubre las 13706 URLs en lotes validos de hasta 10000 y tiene archivo de clave valido', () => {
  const keyFile = path.resolve('public', `${INDEXNOW_KEY}.txt`);
  assert.ok(fs.existsSync(keyFile), `Falta archivo de clave IndexNow: ${keyFile}`);
  assert.equal(fs.readFileSync(keyFile, 'utf8'), INDEXNOW_KEY);
  assert.match(INDEXNOW_KEY, /^[a-f0-9]{32}$/);

  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const slugsGuias = GUIAS_EDITORIALES.map((g) => g.slug);
  const xml = generarSitemapXml(generarUrlsSitio(cat, slugsGuias));
  const extraidas = extraerUrlsDeSitemap(xml);
  assert.equal(extraidas.length, 13706);

  const payloads = construirPayloadsIndexNow(extraidas);
  assert.equal(payloads.length, 2);
  assert.equal(payloads.reduce((total, p) => total + p.urlList.length, 0), 13706);
  assert.equal(payloads[0].urlList.length, INDEXNOW_MAX_BATCH);
  assert.equal(payloads[1].urlList.length, 3706);
  for (const p of payloads) {
    assert.equal(p.host, INDEXNOW_HOST);
    assert.equal(p.key, INDEXNOW_KEY);
    assert.equal(p.keyLocation, INDEXNOW_KEY_LOCATION);
    assert.ok(p.urlList.length <= INDEXNOW_MAX_BATCH);
  }
});

test('Google RSS + WebSub y Search Console Sitemaps API generan feed y JWT validos y Pages incluye CNAME/.nojekyll', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const rssDefault = generarRssXml(cat.hubs, cat.mensajesDe, new Date('2026-11-16T18:00:00Z'));
  assert.equal((rssDefault.match(/<item>/g) || []).length, 60);

  const rssConGuias = generarRssXml(cat.hubs, cat.mensajesDe, new Date('2026-11-16T18:00:00Z'), GUIAS_EDITORIALES);
  assert.ok(rssConGuias.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(rssConGuias.includes('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'));
  assert.ok(rssConGuias.includes(`<atom:link rel="hub" href="${WEBSUB_HUB}" />`));
  assert.ok(rssConGuias.includes(`<atom:link rel="self" type="application/rss+xml" href="${FEED_URL}" />`));
  assert.equal((rssConGuias.match(/<item>/g) || []).length, 70);

  const { privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    publicKeyEncoding: { type: 'spki', format: 'pem' }
  });
  const creds = parsearCredencialesGsc(
    JSON.stringify({
      client_email: 'bot@test-project.iam.gserviceaccount.com',
      private_key: privateKey
    })
  );
  const jwt = construirJwtGsc(creds, 1700000000);
  const partes = jwt.split('.');
  assert.equal(partes.length, 3);
  const claims = JSON.parse(Buffer.from(partes[1], 'base64url').toString('utf8'));
  assert.equal(claims.iss, 'bot@test-project.iam.gserviceaccount.com');
  assert.equal(claims.exp, 1700003600);

  const endpoints = construirEndpointsGsc(SITEMAP_URL);
  assert.equal(endpoints.length, 2);
  assert.ok(endpoints[0].includes(encodeURIComponent(SITEMAP_URL)));

  assert.equal(fs.readFileSync(path.resolve('public/CNAME'), 'utf8').trim(), 'paracumpleanos.com');
  assert.ok(fs.existsSync(path.resolve('public/.nojekyll')));
  const robots = fs.readFileSync(path.resolve('public/robots.txt'), 'utf8');
  assert.ok(robots.includes('Sitemap: https://paracumpleanos.com/sitemap.xml'));
  assert.ok(!robots.includes('sitemap-index.xml'));
});



