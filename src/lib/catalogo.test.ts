import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  crearCatalogo,
  ordenarMasRecientePrimero,
  GRUPOS,
  metaDe,
  nombreHub,
  migasLd,
  construirSetIndexables,
  generarUrlsSitio,
  construirMapaLastmodSitemap,
  generarSitemapXml,
  POR_PAGINA,
  RELACIONADAS,
  HERMANAS
} from './catalogo';
import { GUIAS_EDITORIALES } from '../data/guias';
import { ZODIACOS, MESES_CON_SIGNOS } from './horoscopo';
import { PAISES_HITOS, HITOS_MUNDIALES, hitosPaisesPorDiaMes } from '../data/hitos-historicos';
import {
  obtenerResumenFechaSinAnio,
  generarIndiceCalendarioAnualSinAnio,
  generarPublicacionesPorMesCalendario
} from './calendario';
import {
  normalizarAniosAniversario,
  adaptarTextoAniosAniversario,
  construirEtiquetaAnios
} from './aniversario-personalizable';
import {
  rankearGuiasPorPopularidad,
  seleccionarPoolPopularMixto
} from './popularidad';
import {
  TEMAS_TARJETA,
  ICONOS_TARJETA,
  TIPOGRAFIAS_TARJETA,
  FORMATOS_TARJETA,
  limpiarCampoTexto,
  personalizarTexto,
  resumirTextoCard,
  prepararParrafosTarjeta
} from './personalizador';
import {
  clasificarMensaje,
  calcularFiltrosHub,
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
import {
  REDIRECCIONES_POSTS,
  REDIRECCIONES_RAIZ_LEGADAS,
  sugerirHubParaRutaLegada
} from './redirecciones-legadas';

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

test('catalogo contiene 441 categorias en 14 grupos (70 por mes, 40 en banderines, 50 en el resto) y 22280 mensajes todos unicos', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  assert.equal(GRUPOS.length, 14, `Se esperaban 14 grupos tematicos, hay ${GRUPOS.length}`);
  assert.equal(cat.hubs.length, 441, `Se esperaban 441 hubs, hay ${cat.hubs.length}`);
  assert.ok(cat.hubsPorSlug.has('motivaciones'), 'Debe existir el hub /motivaciones/');
  assert.ok(cat.hubsPorSlug.has('condolencias'), 'Debe existir el hub /condolencias/');
  assert.ok(cat.hubsPorSlug.has('frases-tristes-para-recordar-momentos'), 'Debe existir hub recuerdos tristes');
  assert.ok(cat.hubsPorSlug.has('frases-de-nostalgia-y-recuerdos'), 'Debe existir hub nostalgia y recuerdos');
  assert.ok(cat.hubsPorSlug.has('mensajes-cuando-extranas-a-alguien'), 'Debe existir hub cuando extranas a alguien');
  assert.ok(cat.hubsPorSlug.has('banderines-de-cumpleanos-para-imprimir'), 'Debe existir hub banderines');
  assert.ok(cat.hubsPorSlug.has('mas-de-10-anos-de-novios'), 'Debe existir hub personalizable +10 anos de novios');
  assert.ok(cat.hubsPorSlug.has('cumpleanos-en-junio'), 'Debe existir el hub /cumpleanos-en-junio/');
  assert.ok(cat.hubsPorSlug.has('feliz-san-valentin'), 'Debe existir el hub /feliz-san-valentin/');
  assert.ok(cat.hubsPorSlug.has('feliz-cumpleanos-en-italiano'), 'Debe existir el hub /feliz-cumpleanos-en-italiano/');
  assert.ok(cat.hubsPorSlug.has('aniversario-luctuoso-recuerdos-serenos'), 'Debe existir el hub /aniversario-luctuoso-recuerdos-serenos/');
  assert.equal((cat.hubsPorGrupo.get('duelo_recuerdos') || []).length, 17, 'duelo_recuerdos debe tener 17 categorias');
  assert.equal((cat.hubsPorGrupo.get('aniversarios') || []).length, 27, 'aniversarios debe tener 27 categorias');
  assert.equal(cat.todosMensajes.length, 22280, `Se esperaban 22280 mensajes, hay ${cat.todosMensajes.length}`);
  assert.equal(
    new Set(cat.todosMensajes.map((m) => String(m.texto || '').trim())).size,
    22280,
    'Todos los 22280 mensajes deben tener cuerpo unico sin duplicados'
  );

  for (const hub of cat.hubs) {
    const msgs = cat.mensajesDe(hub.slug);
    const esperado =
      hub.slug === 'banderines-de-cumpleanos-para-imprimir'
        ? 40
        : hub.grupo === 'meses'
        ? 70
        : 50;
    assert.equal(msgs.length, esperado, `Hub ${hub.slug} debe tener ${esperado} mensajes, tiene ${msgs.length}`);
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

  assert.equal(Math.ceil(cat.mensajesDe(hub.slug).length / POR_PAGINA), 5);
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

  assert.equal(new Set(cat.hubs.map((h) => h.lead)).size, 441, 'Cada categoria debe tener una descripcion lead unica');
  assert.equal(new Set(cat.hubs.map((h) => h.seoTitulo)).size, 441, 'Cada categoria debe tener un seoTitulo unico');
  assert.equal(new Set(cat.hubs.map((h) => h.seoTexto)).size, 441, 'Cada categoria debe tener un seoTexto unico');
  assert.equal(new Set(cat.hubs.map((h) => h.titulo)).size, 441, 'Cada categoria debe tener un titulo unico');

  const cortePrep = /(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(de|del|en|con|a|al|para|por|sin|y|el|la|los|las|un|una|tu|su)$/i;
  for (const h of cat.hubs) {
    assert.ok(!cortePrep.test(h.titulo.trim()), `Hub ${h.slug} termina en preposicion/articulo: "${h.titulo}"`);
    assert.ok((h.lead || '').length >= 300, `Hub ${h.slug} lead demasiado corto: ${(h.lead || '').length}`);
    assert.ok((h.lead || '').split('\n\n').length >= 2, `Hub ${h.slug} lead debe tener al menos 2 parrafos`);
    assert.ok((h.seoTexto || '').length >= 400, `Hub ${h.slug} seoTexto demasiado corto: ${(h.seoTexto || '').length}`);
    assert.ok((h.seoTexto || '').split('\n\n').length >= 3, `Hub ${h.slug} seoTexto debe tener 3 parrafos`);
    if (/fallecid|hasta-el-cielo|condolencias|pesame|consuelo|luctuoso|tristes|nostalgia|extranas/.test(h.slug) || h.grupo === 'duelo_recuerdos') {
      const seoBlob = `${h.lead} ${h.seoTitulo} ${h.seoTexto}`;
      assert.ok(!/(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(torta|pastel|soplá|velas|fiesta|festej\w*|brindis|regalos)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i.test(seoBlob), `Hub de duelo/recuerdos ${h.slug} contiene palabra festiva en lead/seo`);
    }
    if (/^(?!.*luctuoso).*(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(h.slug)) {
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
    cat.hubs.filter((h) => /fallecid|hasta-el-cielo|condolencias|pesame|consuelo|luctuoso|tristes|nostalgia|extranas/.test(h.slug) || h.grupo === 'duelo_recuerdos').map((h) => h.slug)
  );
  const anivHubs = new Set(
    cat.hubs.filter((h) => /^(?!.*luctuoso).*(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(h.slug)).map((h) => h.slug)
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

    const isDuelo = /fallecid|hasta-el-cielo|condolencias|pesame|consuelo|luctuoso|tristes|nostalgia|extranas/.test(hub.slug) || hub.grupo === 'duelo_recuerdos';
    const isAniv = /^(?!.*luctuoso).*(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(hub.slug);

    if (isDuelo) {
      assert.equal(ed.perfil, 'duelo', `Hub duelo mal clasificado: ${hub.slug}`);
      assert.ok(!/(torta|fiesta|pastel|festej\w*|brindis|velas)/i.test(ed.citaClave + ed.claves.join(' ')), `Editorial duelo con fiesta: ${hub.slug}`);
    }
    if (isAniv) {
      assert.ok(ed.perfil === 'aniv_meses' || ed.perfil === 'aniv_anos', `Hub aniversario mal clasificado: ${hub.slug}`);
      assert.ok(!/cumpleaños/i.test(ed.citaClave + ed.claves.join(' ') + ed.faqs.map((f) => f.pregunta + ' ' + f.respuesta).join(' ')), `Editorial aniversario menciona cumpleaños: ${hub.slug}`);
    }
    if (hub.slug === 'motivaciones') {
      assert.equal(ed.perfil, 'motivaciones', 'Hub motivaciones debe tener perfil propio');
      assert.ok(!/soplar velas|regalo de cumpleaños/i.test(ed.citaClave + ed.claves.join(' ')), 'Editorial motivaciones con contaminacion de cumpleaños');
    }
    if (hub.slug === 'banderines-de-cumpleanos-para-imprimir') {
      assert.equal(ed.perfil, 'banderines', 'Hub banderines debe tener perfil editorial propio');
      const blobBand = `${ed.subtituloClaves} ${ed.citaClave} ${ed.claves.join(' ')} ${ed.tabla.map((t) => t.consejo).join(' ')}`;
      assert.ok(!/tu banderines/i.test(blobBand), 'Editorial banderines no debe contener "tu banderines"');
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

  assert.ok(perfilesEncontrados.size >= 22, `Se esperaban al menos 22 perfiles editoriales distintos, hay ${perfilesEncontrados.size}`);
  assert.ok(ejConcretos.size >= 30, `Se esperaban al menos 30 variaciones de ejemplos concretos, hay ${ejConcretos.size}`);

  const hubDuelo = cat.hubsPorSlug.get('felicitaciones-a-madre-fallecida');
  assert.equal(guiaRelacionadaParaHub(hubDuelo).slug, 'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido');
  const hubCondolencias = cat.hubsPorSlug.get('condolencias');
  assert.equal(guiaRelacionadaParaHub(hubCondolencias).slug, 'como-escribir-condolencias-y-palabras-de-pesame-respetuosas');

  const msgMama = cat.mensajesDe('feliz-cumpleanos-mama')[0];
  assert.equal(clasificarMensaje(msgMama, cat.hubDe(msgMama)).palabras > 30, true);
  assert.ok(extraerCitaDestacada(msgMama).length > 15);

  const hubLuctuoso = cat.hubsPorSlug.get('aniversario-luctuoso-recuerdos-serenos');
  assert.equal(editorialHubCompleto(hubLuctuoso, cat.mensajesDe(hubLuctuoso.slug)).perfil, 'duelo', 'aniversario-luctuoso debe clasificarse como duelo');

  const edSrc = fs.readFileSync(path.resolve('src/lib/editorial.ts'), 'utf8');
  assert.ok(!/personalizador superior|personalizador de arriba/i.test(edSrc), 'editorial.ts no debe referenciar personalizador superior en paginas hub');

  for (const m of cat.todosMensajes) {
    const cita = extraerCitaDestacada(m);
    assert.ok(cita.length >= 15, `Cita muy corta en ${m.slug}: ${cita}`);
    assert.ok(!/^(Mensaje en (inglés|italiano|portugués|francés)|Traducción al español):/i.test(cita), `Cita expone etiqueta bilingue en ${m.slug}: ${cita}`);
    assert.ok(!/^(Hoy en tu cumpleaños|Querid[ao]\s+[^,]+|Mi amor|Amor mío|Con todo cariño|Para vos[^,]*),\s+[A-ZÁÉÍÓÚÜÑ]/u.test(cita), `Cita pega saludo con mayuscula en ${m.slug}: ${cita}`);
    const comillas = (cita.match(/"/g) || []).length;
    assert.equal(comillas % 2, 0, `Cita con comillas desparejas en ${m.slug}: ${cita}`);
  }
});

test('construirSetIndexables prioriza contenido real y unicidad sin minimo artificial de palabras', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const indexables = construirSetIndexables(cat.todosMensajes);

  assert.equal(indexables.size, 22280, `Se esperaban 22280 mensajes con contenido y slug unicos, hay ${indexables.size}`);
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

  assert.equal(GUIAS_EDITORIALES.length, 45, `Se esperaban 45 guias editoriales, hay ${GUIAS_EDITORIALES.length}`);
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
    assert.ok(g.ejemplosAdaptables.length >= 10, `Guia ${g.slug} requiere al menos 10 plantillas adaptables, tiene ${g.ejemplosAdaptables.length}`);
    assert.equal(
      new Set(g.ejemplosAdaptables.map((e) => e.etiqueta.trim().toLowerCase())).size,
      g.ejemplosAdaptables.length,
      `Guia ${g.slug} tiene etiquetas de plantillas duplicadas`
    );
    assert.equal(
      new Set(g.ejemplosAdaptables.map((e) => e.texto.trim().toLowerCase())).size,
      g.ejemplosAdaptables.length,
      `Guia ${g.slug} tiene textos de plantillas duplicados`
    );
    assert.ok(
      g.ejemplosAdaptables.every((e) => e.etiqueta.trim().length >= 8 && e.texto.trim().length >= 35),
      `Guia ${g.slug} contiene alguna plantilla demasiado corta`
    );
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
      ...g.secciones.map((s) => `${s.subtitulo} ${s.parrafos.join(' ')} ${(s.lista || []).join(' ')}`),
      ...g.checklistPractica
    ]
      .join(' ')
      .split(/\s+/).length;
    assert.ok(g.checklistPractica.length >= 4, `Guia ${g.slug} requiere checklist practica de al menos 4 pasos`);
    assert.ok(textoTotal >= 900, `Guia ${g.slug} demasiado corta (${textoTotal} palabras; minimo 900 en articulo informativo)`);

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
    firma: 'Sofi',
    posdata: 'Nos vemos a la noche.'
  });
  assert.equal(salida, 'Laura, hoy celebramos tu vida con enorme alegría.\n\nP.D.: Nos vemos a la noche.\n\n— Sofi');

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
  assert.equal(Object.keys(TEMAS_TARJETA).length, 6);
  assert.equal(ICONOS_TARJETA.length, 8);
  assert.equal(Object.keys(TIPOGRAFIAS_TARJETA).length, 3);
  assert.equal(Object.keys(FORMATOS_TARJETA).length, 2);
});

test('generarUrlsSitio y generarSitemapXml cubren las 24760 URLs indexables sin duplicados y priorizan hubs y mensajes antes que paginacion', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const slugsGuias = GUIAS_EDITORIALES.map((g) => g.slug);
  const slugsSignos = ZODIACOS.map((s) => s.slug);
  const slugsPaises = PAISES_HITOS.map((p) => p.slug);
  const urls = generarUrlsSitio(cat, slugsGuias, slugsSignos, slugsPaises);

  assert.equal(urls.length, 24760, `Se esperaban 24760 URLs indexables, se obtuvieron ${urls.length}`);
  assert.equal(new Set(urls).size, 24760, 'Las URLs del sitemap deben ser todas unicas');
  assert.ok(urls.every((url) => url.startsWith('https://paracumpleanos.com/')));
  assert.ok(urls.every((url) => !/[?#]/.test(url)));
  assert.ok(urls.includes('https://paracumpleanos.com/'));
  assert.ok(urls.includes('https://paracumpleanos.com/categorias/'));
  assert.ok(urls.includes('https://paracumpleanos.com/calendario/'));
  assert.ok(urls.includes('https://paracumpleanos.com/hitos-historicos/'));
  assert.ok(urls.includes('https://paracumpleanos.com/hitos-historicos/argentina/'));
  assert.ok(urls.includes('https://paracumpleanos.com/hitos-historicos/espana/'));
  assert.ok(urls.includes('https://paracumpleanos.com/hitos-historicos/japon/'));
  assert.ok(urls.includes('https://paracumpleanos.com/hitos-historicos/taiwan/'));
  assert.ok(urls.includes('https://paracumpleanos.com/condolencias/'));
  assert.ok(urls.includes('https://paracumpleanos.com/frases-tristes-para-recordar-momentos/'));
  assert.ok(urls.includes('https://paracumpleanos.com/mas-de-10-anos-de-novios/'));
  assert.ok(urls.includes('https://paracumpleanos.com/banderines-de-cumpleanos-para-imprimir/'));
  assert.ok(urls.includes('https://paracumpleanos.com/herramientas/'));
  assert.ok(urls.includes('https://paracumpleanos.com/horoscopo/'));
  assert.ok(urls.includes('https://paracumpleanos.com/horoscopo/geminis/'));
  assert.ok(urls.includes('https://paracumpleanos.com/cumpleanos-en-junio/'));
  assert.ok(urls.includes('https://paracumpleanos.com/cumpleanos-en-junio/5/'));
  assert.ok(urls.includes('https://paracumpleanos.com/feliz-san-valentin/'));
  assert.ok(urls.includes('https://paracumpleanos.com/felices-pascuas/'));
  assert.ok(urls.includes('https://paracumpleanos.com/motivaciones/'));
  assert.ok(urls.includes('https://paracumpleanos.com/guias/'));
  assert.ok(urls.includes('https://paracumpleanos.com/sobre-nosotros/'));
  assert.ok(urls.includes('https://paracumpleanos.com/contacto/'));
  assert.ok(urls.includes('https://paracumpleanos.com/privacidad/'));
  assert.ok(urls.includes('https://paracumpleanos.com/terminos-de-uso/'));
  assert.ok(urls.includes('https://paracumpleanos.com/guias/como-escribir-una-carta-de-cumpleanos-que-emocione/'));
  assert.ok(urls.includes('https://paracumpleanos.com/guias/banderines-de-cumpleanos-para-imprimir-medidas-y-plantillas/'));
  assert.ok(urls.includes('https://paracumpleanos.com/feliz-cumpleanos-mama/'));
  assert.ok(urls.includes('https://paracumpleanos.com/feliz-cumpleanos-mama/2/'));
  assert.ok(urls.includes('https://paracumpleanos.com/feliz-cumpleanos-mama/4/'));
  assert.ok(urls.includes('https://paracumpleanos.com/hoy-celebramos-tu-autenticidad-tu-fuerza-tranquila-y-tu-enorme-corazon/'));

  const firstPagIdx = urls.findIndex((u) => /\/\d+\/$/.test(u));
  const lastMsgIdx = urls.indexOf(`https://paracumpleanos.com/${cat.todosMensajes[cat.todosMensajes.length - 1].slug}/`);
  assert.ok(firstPagIdx > lastMsgIdx, 'Hubs y mensajes deben ubicarse antes de las URLs paginadas en sitemap.xml');

  for (const s of ZODIACOS) {
    for (const mSlug of s.mesesSlugs) {
      assert.ok(cat.hubsPorSlug.has(mSlug), `Signo ${s.slug} enlaza a mes inexistente: ${mSlug}`);
    }
  }
  for (const m of MESES_CON_SIGNOS) {
    assert.ok(cat.hubsPorSlug.has(m.slug), `Falta categoria mensual ${m.slug}`);
  }

  const indexables = construirSetIndexables(cat.todosMensajes);
  assert.equal(indexables.size, 22280);

  const xmlSinLastmod = generarSitemapXml(urls);
  assert.ok(xmlSinLastmod.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(xmlSinLastmod.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
  const locs = xmlSinLastmod.match(/<loc>/g) || [];
  assert.equal(locs.length, 24760);
  assert.ok(!xmlSinLastmod.includes('<lastmod>'), 'Sin mapa lastmod no debe emitir etiquetas lastmod');

  const mapaLastmod = construirMapaLastmodSitemap(cat, GUIAS_EDITORIALES, slugsSignos, slugsPaises, '2026-11-22');
  const xmlConLastmod = generarSitemapXml(urls, mapaLastmod);
  const lastmods = xmlConLastmod.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) || [];
  assert.equal(lastmods.length, 24760, 'Cada una de las 24760 URLs debe recibir su lastmod real YYYY-MM-DD');
  assert.ok(
    xmlConLastmod.includes('<loc>https://paracumpleanos.com/banderines-de-cumpleanos-para-imprimir/</loc><lastmod>2026-11-22</lastmod>'),
    'El sitemap debe reflejar el lastmod real de banderines'
  );
  assert.throws(() => generarSitemapXml(['https://paracumpleanos.com/'], { 'https://paracumpleanos.com/': '2026-02-31' }));
});

test('Bing IndexNow cubre las 24760 URLs en lotes validos de hasta 10000 y tiene archivo de clave valido', () => {
  const keyFile = path.resolve('public', `${INDEXNOW_KEY}.txt`);
  assert.ok(fs.existsSync(keyFile), `Falta archivo de clave IndexNow: ${keyFile}`);
  assert.equal(fs.readFileSync(keyFile, 'utf8'), INDEXNOW_KEY);
  assert.match(INDEXNOW_KEY, /^[a-f0-9]{32}$/);

  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const slugsGuias = GUIAS_EDITORIALES.map((g) => g.slug);
  const slugsSignos = ZODIACOS.map((s) => s.slug);
  const slugsPaises = PAISES_HITOS.map((p) => p.slug);
  const xml = generarSitemapXml(generarUrlsSitio(cat, slugsGuias, slugsSignos, slugsPaises));
  const extraidas = extraerUrlsDeSitemap(xml);
  assert.equal(extraidas.length, 24760);

  const payloads = construirPayloadsIndexNow(extraidas);
  assert.equal(payloads.length, 3);
  assert.equal(payloads.reduce((total, p) => total + p.urlList.length, 0), 24760);
  assert.equal(payloads[0].urlList.length, INDEXNOW_MAX_BATCH);
  assert.equal(payloads[1].urlList.length, INDEXNOW_MAX_BATCH);
  assert.equal(payloads[2].urlList.length, 4760);
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

test('redirecciones legadas GSC resuelven a hubs reales sin colisiones y titulos/metas reflejan 40 textos', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const todosSlugsExistentes = new Set(datos.map((r: any) => r.slug));

  for (const r of REDIRECCIONES_POSTS) {
    assert.ok(cat.hubsPorSlug.has(r.destinoSlug), `Destino faltante para /posts/${r.slugOrigen}: ${r.destinoSlug}`);
    if (r.alternativoSlug) {
      assert.ok(cat.hubsPorSlug.has(r.alternativoSlug), `Alternativo faltante: ${r.alternativoSlug}`);
    }
  }
  for (const r of REDIRECCIONES_RAIZ_LEGADAS) {
    assert.ok(!todosSlugsExistentes.has(r.slugOrigen), `Alias raiz colisiona con slug existente: ${r.slugOrigen}`);
    assert.ok(cat.hubsPorSlug.has(r.destinoSlug), `Destino faltante para /${r.slugOrigen}: ${r.destinoSlug}`);
    if (r.alternativoSlug) {
      assert.ok(cat.hubsPorSlug.has(r.alternativoSlug), `Alternativo faltante: ${r.alternativoSlug}`);
    }
  }

  assert.equal(sugerirHubParaRutaLegada('/posts/frases-de-cumpleanos-para-mi-papa', cat.hubs), 'feliz-cumpleanos-papa');
  assert.equal(sugerirHubParaRutaLegada('/posts/frases-de-cumpleanos-para-abuelos/', cat.hubs), 'feliz-cumpleanos-abuelo');
  assert.equal(sugerirHubParaRutaLegada('/posts/frases-de-cumpleanos-para-mi-hijo/', cat.hubs), 'feliz-cumpleanos-hijo');
  assert.equal(sugerirHubParaRutaLegada('/posts/frases-de-cumpleanos-para-mi-mama', cat.hubs), 'feliz-cumpleanos-mama');
  assert.equal(sugerirHubParaRutaLegada('/mensajes-de-cumpleanos-para-un-primo/', cat.hubs), 'feliz-cumpleanos-primo');
  assert.equal(sugerirHubParaRutaLegada('/mensajes-de-cumpleanos-para-papa/', cat.hubs), 'feliz-cumpleanos-papa');

  for (const hub of cat.hubs) {
    const slugNums = hub.slug.match(/\d+/g) || [];
    for (const numEdad of hub.slug.match(/\b\d+(?=-anos|-meses|-ano)\b/g) || []) {
      assert.ok(hub.titulo.includes(numEdad), `Hub ${hub.slug} perdio el numero ${numEdad} en titulo: ${hub.titulo}`);
      assert.ok(hub.h1.includes(numEdad), `Hub ${hub.slug} perdio el numero ${numEdad} en h1: ${hub.h1}`);
      assert.ok(hub.meta.includes(numEdad), `Hub ${hub.slug} perdio el numero ${numEdad} en meta: ${hub.meta}`);
    }
    if (!slugNums.includes('36')) {
      assert.ok(!/\b36\b/.test(hub.titulo), `Hub ${hub.slug} aun muestra 36 en titulo: ${hub.titulo}`);
      assert.ok(!/\b36\b/.test(hub.meta), `Hub ${hub.slug} aun muestra 36 en meta: ${hub.meta}`);
      assert.ok(!/\b36\s+publicaciones\b/.test(hub.seoTexto || ''), `Hub ${hub.slug} aun dice 36 publicaciones`);
    }
    if (!slugNums.includes('30')) {
      assert.ok(!/\b30\b/.test(hub.titulo), `Hub ${hub.slug} aun muestra 30 en titulo: ${hub.titulo}`);
    }
    assert.ok(!/cartas largas y sentidas listos/i.test(hub.meta), `Hub ${hub.slug} con concordancia listos errónea`);
  }
});

test('Statcounter 13334162 cubre todas las paginas Astro con respaldo anti-rebote sin perdida de visitas', () => {
  const baseSrc = fs.readFileSync(path.resolve('src/layouts/Base.astro'), 'utf8');
  const puenteSrc = fs.readFileSync(path.resolve('src/components/PuenteRedireccion.astro'), 'utf8');

  for (const [nombre, src] of [
    ['Base.astro', baseSrc],
    ['PuenteRedireccion.astro', puenteSrc]
  ]) {
    assert.ok(src.includes('13334162'), `${nombre} debe incluir sc_project 13334162`);
    assert.ok(src.includes('3e891d7b'), `${nombre} debe incluir sc_security 3e891d7b`);
    assert.ok(src.includes('https://www.statcounter.com/counter/counter.js'), `${nombre} debe cargar counter.js`);
    assert.ok(src.includes('https://c.statcounter.com/13334162/0/3e891d7b/1/'), `${nombre} debe incluir pixel keepalive/noscript`);
  }

  // En PuenteRedireccion.astro usa define:vars, asi que sc_project debe quedar en window.
  assert.ok(puenteSrc.includes('window.sc_project = 13334162'), 'PuenteRedireccion debe asignar window.sc_project');
  assert.ok(!puenteSrc.includes('352 categorías'), 'PuenteRedireccion no debe hardcodear 352 categorias');

  const paginasDir = path.resolve('src/pages');
  const recolectarAstro = (dir: string): string[] => {
    const out: string[] = [];
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) out.push(...recolectarAstro(full));
      else if (ent.name.endsWith('.astro')) out.push(full);
    }
    return out;
  };
  const paginasAstro = recolectarAstro(paginasDir);
  assert.ok(paginasAstro.length >= 16, `Se esperaban >= 16 plantillas .astro en src/pages, hay ${paginasAstro.length}`);

  for (const archivo of paginasAstro) {
    const contenidoArchivo = fs.readFileSync(archivo, 'utf8');
    const usaLayoutConStatcounter =
      contenidoArchivo.includes('layouts/Base.astro') ||
      contenidoArchivo.includes('components/PuenteRedireccion.astro');
    assert.ok(usaLayoutConStatcounter, `Pagina sin Statcounter (no importa Base ni PuenteRedireccion): ${archivo}`);
  }
});

test('favicons completos presentes en public, copia sin titulo en componentes y grupo fechas_especiales conectado', () => {
  for (const asset of [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png',
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'site.webmanifest'
  ]) {
    assert.ok(fs.existsSync(path.resolve('public', asset)), `Falta activo public/${asset}`);
  }

  const baseSrc = fs.readFileSync(path.resolve('src/layouts/Base.astro'), 'utf8');
  assert.ok(baseSrc.includes('/favicon.ico'));
  assert.ok(baseSrc.includes('/favicon-32x32.png'));
  assert.ok(baseSrc.includes('/site.webmanifest'));

  const cardSrc = fs.readFileSync(path.resolve('src/components/TarjetaMensaje.astro'), 'utf8');
  assert.ok(cardSrc.includes('texto={m.texto}'), 'TarjetaMensaje debe enviar solo el cuerpo del mensaje sin titulo');

  const slugSrc = fs.readFileSync(path.resolve('src/pages/[slug].astro'), 'utf8');
  assert.ok(slugSrc.includes('const textoEnviar = esHub ? \'\' : registro.texto;'), '[slug].astro debe enviar solo registro.texto sin titulo');

  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const fechasEsp = cat.hubsPorGrupo.get('fechas_especiales') || [];
  assert.equal(fechasEsp.length, 17, `Se esperaban 17 hubs en fechas_especiales, hay ${fechasEsp.length}`);
  const dudaMsg = cat.todosMensajes.find((m) => m.slug === 'converti-las-dudas-en-preguntas-concretas-hoy');
  assert.ok(dudaMsg && dudaMsg.texto.split(/\s+/).length >= 90, 'El mensaje de dudas concretas debe tener desarrollo accionable amplio');
});

test('hitos historicos cubre los 196 paises y calendario sin anio solo enlaza publicaciones reales sin inventar URLs', () => {
  assert.equal(PAISES_HITOS.length, 196, `Se esperaban 196 paises, hay ${PAISES_HITOS.length}`);
  assert.equal(new Set(PAISES_HITOS.map((p) => p.slug)).size, 196, 'Todos los slugs de paises deben ser unicos');
  assert.ok(PAISES_HITOS.some((p) => p.slug === 'taiwan'), 'Debe incluir Taiwan entre los 196 paises');
  assert.ok(HITOS_MUNDIALES.length >= 14, `Se esperaban >= 14 hitos mundiales, hay ${HITOS_MUNDIALES.length}`);

  for (const p of PAISES_HITOS) {
    assert.match(p.slug, /^[a-z0-9-]+$/, `Slug de pais invalido: ${p.slug}`);
    assert.ok(p.hitoPrincipal.mes >= 1 && p.hitoPrincipal.mes <= 12, `Mes invalido en ${p.slug}: ${p.hitoPrincipal.mes}`);
    assert.ok(p.hitoPrincipal.dia >= 1 && p.hitoPrincipal.dia <= 31, `Dia invalido en ${p.slug}: ${p.hitoPrincipal.dia}`);
    assert.ok(p.hitoPrincipal.contextoHistorico.length >= 100, `Explicacion historica muy corta en ${p.slug}`);
    assert.ok(p.hitoPrincipal.comoSeFesteja.length >= 50, `Tradiciones muy cortas en ${p.slug}`);
    assert.ok(p.hitoPrincipal.saludoSugerido.length >= 25, `Saludo conmemorativo muy corto en ${p.slug}`);
  }

  assert.ok(hitosPaisesPorDiaMes(7, 9).some((h) => h.pais.slug === 'argentina'));
  assert.ok(hitosPaisesPorDiaMes(9, 16).some((h) => h.pais.slug === 'mexico'));
  assert.ok(hitosPaisesPorDiaMes(10, 10).some((h) => h.pais.slug === 'taiwan'));
  assert.ok(hitosPaisesPorDiaMes(10, 12).some((h) => h.pais.slug === 'espana'));

  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const urlsReales = new Set(
    generarUrlsSitio(
      cat,
      GUIAS_EDITORIALES.map((g) => g.slug),
      ZODIACOS.map((s) => s.slug),
      PAISES_HITOS.map((p) => p.slug)
    )
  );

  // Dia con celebracion exacta (14 de febrero - San Valentin): incluye publicaciones reales
  const resumenFeb14 = obtenerResumenFechaSinAnio(2, 14, cat.hubsPorSlug, cat.mensajesDe);
  assert.ok(resumenFeb14.fechasEspecialesExactas.some((f) => f.slug === 'feliz-san-valentin'));
  assert.ok(resumenFeb14.publicacionesExactas.length > 0, 'El 14 de febrero debe mostrar publicaciones reales de San Valentin');

  // Dia sin celebracion puntual (14 de enero): no inventa publicaciones falsas
  const resumenEne14 = obtenerResumenFechaSinAnio(1, 14, cat.hubsPorSlug, cat.mensajesDe);
  assert.equal(resumenEne14.fechasEspecialesExactas.length, 0);
  assert.equal(resumenEne14.publicacionesExactas.length, 0, 'Un dia sin efemeride puntual no debe inventar publicaciones');

  const resumenJul9 = obtenerResumenFechaSinAnio(7, 9, cat.hubsPorSlug, cat.mensajesDe);
  assert.equal(resumenJul9.etiquetaSinAnio, '9 de julio');
  assert.ok(!/\b20\d{2}\b/.test(resumenJul9.etiquetaSinAnio), 'El calendario no debe mostrar anio');
  assert.ok(resumenJul9.hitosPaises.some((h) => h.pais.slug === 'argentina'));
  assert.equal(resumenJul9.signo?.slug, 'cancer');
  assert.equal(resumenJul9.hubMes?.slug, 'cumpleanos-en-julio');

  const resumenFeb29 = obtenerResumenFechaSinAnio(2, 29, cat.hubsPorSlug, cat.mensajesDe);
  assert.equal(resumenFeb29.etiquetaSinAnio, '29 de febrero');
  assert.equal(resumenFeb29.signo?.slug, 'piscis');

  const indice = generarIndiceCalendarioAnualSinAnio(cat.hubsPorSlug, cat.mensajesDe);
  assert.equal(Object.keys(indice).length, 366, 'El indice anual sin anio debe cubrir los 366 dias (incl. 29/2)');

  // 100% de las URLs referenciadas en los 366 dias deben existir en el sitio real
  for (const [clave, dia] of Object.entries(indice)) {
    assert.ok(urlsReales.has(`https://paracumpleanos.com/${dia.hubMesSlug}/`), `Hub mes inexistente en ${clave}: ${dia.hubMesSlug}`);
    assert.ok(urlsReales.has(`https://paracumpleanos.com/horoscopo/${dia.signoSlug}/`), `Signo inexistente en ${clave}: ${dia.signoSlug}`);
    for (const h of dia.hitosPaises) {
      assert.ok(urlsReales.has(`https://paracumpleanos.com/hitos-historicos/${h.paisSlug}/`), `Pais inexistente en ${clave}: ${h.paisSlug}`);
    }
    for (const f of [...dia.fechasEspecialesExactas, ...dia.fechasEspecialesDelMes]) {
      assert.ok(urlsReales.has(`https://paracumpleanos.com/${f.slug}/`), `Fecha especial inexistente en ${clave}: ${f.slug}`);
    }
    for (const p of dia.publicacionesExactas) {
      assert.ok(urlsReales.has(`https://paracumpleanos.com/${p.slug}/`), `Publicacion inexistente en ${clave}: ${p.slug}`);
    }
  }

  const pubsMes = generarPublicacionesPorMesCalendario(cat.mensajesDe);
  for (let m = 1; m <= 12; m++) {
    assert.equal(pubsMes[m].length, 3, `El mes ${m} debe incluir 3 publicaciones reales`);
    for (const p of pubsMes[m]) {
      assert.ok(urlsReales.has(`https://paracumpleanos.com/${p.slug}/`), `Publicacion mensual inexistente en mes ${m}: ${p.slug}`);
    }
  }
});

test('calidad editorial SEO en Trabajo/Profesion (g08) y Condolencias/Recuerdos sin repeticiones ni errores de genero', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  // 1. Condolencias y recuerdos sin muletillas repetitivas en titulos
  const dueloSlugs = [
    'condolencias',
    'frases-tristes-para-recordar-momentos',
    'frases-de-nostalgia-y-recuerdos',
    'mensajes-cuando-extranas-a-alguien'
  ];
  for (const slug of dueloSlugs) {
    const msgs = cat.mensajesDe(slug);
    assert.equal(msgs.length, 50, `Esperados 50 mensajes en ${slug}`);
    for (const m of msgs) {
      assert.ok(!/cuando se extrañ/i.test(m.titulo), `Titulo repetitivo con "cuando se extraña" en ${slug}: ${m.titulo}`);
      assert.ok(!/en momentos tristes$/i.test(m.titulo), `Sufijo mecanico en ${slug}: ${m.titulo}`);
      assert.ok(!/entre nostalgias$/i.test(m.titulo), `Sufijo mecanico en ${slug}: ${m.titulo}`);
    }
  }

  // 2. Trabajo, escuela y profesion sin errores de genero ni plantillas sin sentido
  const profFem = [
    'feliz-cumpleanos-para-doctora',
    'feliz-cumpleanos-para-mi-jefa',
    'feliz-cumpleanos-maestra',
    'feliz-cumpleanos-para-una-profesora-muy-especial',
    'feliz-cumpleanos-vecina'
  ];
  for (const slug of profFem) {
    const msgs = cat.mensajesDe(slug);
    assert.equal(msgs.length, 50);
    for (const m of msgs) {
      assert.ok(!/\b(saludarlo|lo rodean|rodeado de|compañero querido)\b/i.test(m.texto), `Concordancia masculina indebida en ${slug}: ${m.slug}`);
      assert.ok(!/En este día especial quiero destacar especialmente/i.test(m.texto), `Plantilla repetitiva en ${slug}: ${m.slug}`);
      assert.ok(!/Siempre encontrará en casa un lugar cálido para volver/i.test(m.titulo), `Titulo fuera de contexto en ${slug}: ${m.titulo}`);
    }
  }
  const profMasc = [
    'feliz-cumpleanos-doctor',
    'feliz-cumpleanos-jefe',
    'feliz-cumpleanos-profesor',
    'feliz-cumpleanos-pastor-imagenes-y-palabras',
    'feliz-cumpleanos-para-un-companero-de-trabajo',
    'frases-de-feliz-cumpleanos-para-un-alumno'
  ];
  for (const slug of profMasc) {
    const msgs = cat.mensajesDe(slug);
    assert.equal(msgs.length, 50);
    for (const m of msgs) {
      assert.ok(!/En este día especial quiero destacar especialmente/i.test(m.texto), `Plantilla repetitiva en ${slug}: ${m.slug}`);
      assert.ok(!/bajo cielo claro|en esta nueva etapa en esta nueva etapa/i.test(m.titulo), `Titulo artificial en ${slug}: ${m.titulo}`);
    }
  }
});

test('orden mas reciente primero, filtros universales en las 441 categorias, aniversario +10 anos personalizable y popularidad dinamica', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  // 1. Orden mas reciente primero
  const ordenPrueba = ordenarMasRecientePrimero([
    { id: 'viejo', actualizado: '2026-11-15' },
    { id: 'medio', actualizado: '2026-11-19' },
    { id: 'nuevo1', actualizado: '2026-11-20' },
    { id: 'nuevo2', actualizado: '2026-11-20' }
  ]);
  assert.deepEqual(
    ordenPrueba.map((x) => x.id),
    ['nuevo2', 'nuevo1', 'medio', 'viejo'],
    'Las publicaciones mas recientes deben aparecer primero de arriba hacia abajo'
  );
  assert.equal(cat.hubs[0].actualizado, '2026-11-22', 'El primer hub del catalogo debe ser de la fecha mas reciente');

  // 2. Filtros de segmentacion en TODAS las 441 categorias (incluyendo cartas, cristiano, profesionales y duelo_recuerdos)
  for (const hub of cat.hubs) {
    const msgs = cat.mensajesDe(hub.slug);
    const filtros = calcularFiltrosHub(msgs, hub, Math.min(12, msgs.length));
    assert.ok(filtros.length >= 2, `La categoria ${hub.slug} debe tener filtros de segmentacion visibles, tiene ${filtros.length}`);
  }
  const filtrosCartas = calcularFiltrosHub(cat.mensajesDe('cartas-para-mi-madre'), cat.hubsPorSlug.get('cartas-para-mi-madre'), 12);
  assert.ok(filtrosCartas.length >= 4, `cartas-para-mi-madre debe tener >= 4 segmentos activos, tiene ${filtrosCartas.length}`);

  // 3. Aniversarios completos: meses 2..11, anos 1..10 y +10 anos personalizable
  for (let m = 2; m <= 11; m++) {
    assert.ok(cat.hubsPorSlug.has(`felices-${m}-meses-de-novios`), `Falta hub felices-${m}-meses-de-novios`);
  }
  assert.ok(cat.hubsPorSlug.has('feliz-1-ano-de-novios'), 'Falta hub feliz-1-ano-de-novios');
  for (let a = 2; a <= 10; a++) {
    assert.ok(cat.hubsPorSlug.has(`felices-${a}-anos-de-novios`), `Falta hub felices-${a}-anos-de-novios`);
  }
  const msgsMas10 = cat.mensajesDe('mas-de-10-anos-de-novios');
  assert.equal(msgsMas10.length, 50);
  for (const m of msgsMas10) {
    assert.ok(m.titulo.includes('12 años') && m.texto.includes('12 años'), `Mensaje ${m.slug} debe contener "12 años" para adaptarse en vivo`);
    const adaptado = adaptarTextoAniosAniversario(m.texto, 25);
    assert.ok(adaptado.includes('25 años') && !adaptado.includes('12 años'), `Adaptacion a 25 anos fallo en ${m.slug}`);
  }
  assert.equal(normalizarAniosAniversario(5), 11);
  assert.equal(normalizarAniosAniversario(99), 80);
  assert.equal(normalizarAniosAniversario(20), 20);
  assert.equal(construirEtiquetaAnios(25), '25 años de novios (Bodas de Plata)');

  // 4. Ranking dinamico de guias mas visitadas y pool mixto popular en portada
  const baseGuias = rankearGuiasPorPopularidad(GUIAS_EDITORIALES);
  const ultimaGuia = baseGuias[baseGuias.length - 1];
  const conVisitas = rankearGuiasPorPopularidad(GUIAS_EDITORIALES, { [ultimaGuia.slug]: 20 });
  assert.equal(conVisitas[0].slug, ultimaGuia.slug, 'Una guia con mas visitas acumuladas debe subir al puesto #1');

  const poolMixto = seleccionarPoolPopularMixto(cat, 32);
  assert.equal(poolMixto.length, 32, 'El pool popular de portada debe traer 32 publicaciones');
  const gruposEnPool = new Set(poolMixto.map((it) => it.hub.grupo));
  assert.ok(gruposEnPool.size >= 8, `El pool popular debe mezclar >= 8 secciones distintas, mezcla ${gruposEnPool.size}`);
  assert.ok(gruposEnPool.has('duelo_recuerdos'), 'El pool popular debe incluir publicaciones de condolencias/recuerdos');
  assert.ok(gruposEnPool.has('aniversarios'), 'El pool popular debe incluir publicaciones de aniversarios');
});

test('impresion aisla solo la postal o banderines, descargas omiten titulo SEO y personalizador general queda intacto', () => {
  const baseSrc = fs.readFileSync(path.resolve('src/layouts/Base.astro'), 'utf8');
  const slugSrc = fs.readFileSync(path.resolve('src/pages/[slug].astro'), 'utf8');
  const cssSrc = fs.readFileSync(path.resolve('src/styles/global.css'), 'utf8');
  const persSrc = fs.readFileSync(path.resolve('src/components/PersonalizadorTarjeta.astro'), 'utf8');

  // 1. Descarga PNG / Instagram omite titulo SEO salvo mostrarTitulo explicito (Acrostico)
  assert.ok(
    baseSrc.includes('var mostrarTitulo = Boolean(opts.mostrarTitulo);') &&
      baseSrc.includes("var tituloCard = mostrarTitulo ? String(opts.title || '').trim() : '';"),
    'generarCanvasTarjeta debe omitir el titulo SEO por defecto al descargar tarjetas'
  );
  assert.ok(
    baseSrc.includes("dl.getAttribute('data-mostrar-titulo') === '1'") &&
      baseSrc.includes("ig.getAttribute('data-mostrar-titulo') === '1'"),
    'Los handlers de descarga PNG e Instagram deben activar titulo solo cuando data-mostrar-titulo="1"'
  );

  // 2. Vista postal en [slug].astro no imprime titulo SEO dentro de .tarjeta-visual
  assert.ok(
    !slugSrc.includes('<p class="tarjeta-visual-titulo">{registro.titulo}</p>'),
    'La postal de detalle no debe mostrar el titulo SEO dentro de .tarjeta-visual'
  );

  // 3. EstudioBanderines solo en la categoria banderines; PersonalizadorTarjeta SOLO dentro de publicaciones (!esHub), nunca en hubs ni paginacion
  const pagSrc = fs.readFileSync(path.resolve('src/pages/[slug]/[pagina].astro'), 'utf8');
  assert.ok(slugSrc.includes("const esBanderines = hub.slug === 'banderines-de-cumpleanos-para-imprimir';"));
  assert.ok(slugSrc.includes('<EstudioBanderines'));
  assert.ok(slugSrc.includes('<PersonalizadorTarjeta'));
  const idxRamaHub = slugSrc.indexOf('{esHub && editorialHub ?');
  const idxRamaMsg = slugSrc.indexOf(') : guiaMsg ?');
  const idxPers = slugSrc.indexOf('<PersonalizadorTarjeta');
  assert.ok(idxRamaHub !== -1 && idxRamaMsg > idxRamaHub && idxPers > idxRamaMsg, 'PersonalizadorTarjeta debe vivir unicamente dentro de la rama de publicacion individual (!esHub)');
  assert.equal((slugSrc.match(/<PersonalizadorTarjeta/g) || []).length, 1, 'Solo debe existir un PersonalizadorTarjeta en [slug].astro');
  assert.ok(!pagSrc.includes('PersonalizadorTarjeta'), 'Las paginas de paginacion de categorias no deben incluir PersonalizadorTarjeta');
  assert.ok(persSrc.includes('class="personalizador"'), 'PersonalizadorTarjeta debe seguir intacto para las publicaciones individuales');

  // 4. @media print oculta h1, meta, selectores y formularios dejando solo postal o hojas A4 de banderines
  assert.ok(cssSrc.includes('@media print'), 'Debe existir bloque @media print');
  assert.ok(cssSrc.includes('.selector-anios-aniv'), '@media print debe ocultar .selector-anios-aniv');
  assert.ok(cssSrc.includes('.meta-linea-editorial'), '@media print debe ocultar .meta-linea-editorial');
  assert.ok(cssSrc.includes('.banderines-print-area'), '@media print debe formatear las hojas A4 de banderines');
});

test('AdSense pub-7933111729537978 etiqueta todas las paginas, ads.txt coincide, portada conserva interlinkeado y existe script SVD', () => {
  const baseSrc = fs.readFileSync(path.resolve('src/layouts/Base.astro'), 'utf8');
  assert.ok(baseSrc.includes('content="ca-pub-7933111729537978"'), 'Base.astro debe incluir meta google-adsense-account');
  assert.ok(
    baseSrc.includes('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7933111729537978'),
    'Base.astro debe cargar adsbygoogle.js con ca-pub-7933111729537978 en todas las paginas'
  );

  const adsRoot = fs.readFileSync(path.resolve('ads.txt'), 'utf8').trim();
  const adsPublic = fs.readFileSync(path.resolve('public/ads.txt'), 'utf8').trim();
  assert.ok(adsRoot.includes('pub-7933111729537978'), 'ads.txt raiz debe incluir pub-7933111729537978');
  assert.equal(adsPublic, adsRoot, 'public/ads.txt debe coincidir exactamente con ads.txt');

  const indexSrc = fs.readFileSync(path.resolve('src/pages/index.astro'), 'utf8');
  for (const enlace of [
    'id="portal-buscador"',
    'id="portal-preview-card"',
    'id="secciones-portal"',
    'id="portal-guias-populares"',
    'id="home-muestra-grilla"',
    '/calendario/',
    '/hitos-historicos/',
    '/condolencias/',
    '/mas-de-10-anos-de-novios/',
    '/herramientas/#banderines-imprimir',
    '/herramientas/',
    '/horoscopo/',
    '/guias/',
    '/categorias/',
    '/sobre-nosotros/',
    '/privacidad/'
  ]) {
    assert.ok(indexSrc.includes(enlace), `index.astro debe conservar el modulo/enlace ${enlace}`);
  }

  assert.ok(fs.existsSync(path.resolve('scripts/verificar-svd.mjs')), 'Debe existir scripts/verificar-svd.mjs');

  for (const archivo of [
    'src/layouts/Base.astro',
    'src/pages/index.astro',
    'src/pages/contacto.astro',
    'src/pages/sobre-nosotros.astro',
    'src/pages/privacidad.astro'
  ]) {
    const src = fs.readFileSync(path.resolve(archivo), 'utf8');
    assert.ok(src.includes('lamieldehorus@gmail.com'), `${archivo} debe incluir el contacto lamieldehorus@gmail.com`);
  }
});
