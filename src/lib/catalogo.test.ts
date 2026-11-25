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
  HUBS_PRIORITARIOS_GSC,
  BLOQUES_PORTADA_GSC,
  TOP_FOOTER_GSC,
  ACCESOS_RAPIDOS_PORTADA,
  ordenarHubsPorDemandaGsc,
  clusterGscDe,
  enlacesHermanasInteligentes,
  faqsGscParaHub
} from './gsc-estrategia';
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
  ADSENSE_PUBLISHER_ID,
  ADSENSE_CLIENT_ID,
  ADSENSE_ADS_TXT_LINE,
  GTM_CONTAINER_ID,
  GTM_ANALYTICS_CONTAINER_ID,
  CONTACTO_EMAIL,
  REGIONES_RGPD_EEE,
  esZonaHorariaEuropea,
  normalizarPreferenciasConsentimiento,
  construirEstadoConsentimientoGoogle,
  validarAdsTxt
} from './consentimiento';
import {
  REDES_COMPARTIR,
  ARCHIVO_COMPARTIDOS_PUBLICO,
  crearEstadoCompartidosVacio,
  normalizarEstadoCompartidos,
  registrarCompartidoEnEstado,
  fusionarEstadosCompartidos,
  rankearMasCompartidos,
  filtrarHistorialCompartidos,
  formatearFechaHistorial,
  resumirRedesItem,
  formatearRespaldoFavoritas
} from './compartidos';
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
  REDIRECCIONES_PUBLICACIONES,
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

  const cortePrep = /(?<![A-Za-zÁÉÍÓÚÜÑÇáéíóúüñç])(de|del|en|con|a|al|para|por|sin|y|el|la|los|las|un|una|tu|su)$/i;
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
    if (/^(?!.*luctuoso).*(mes(es)?-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(h.slug)) {
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
    assert.ok(!/\([^)\n]{4,100},\s*texto\s+\d+\)/i.test(m.texto), `Mensaje ${m.slug} contiene marcador interno (..., texto N)`);
    assert.ok(!/(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])([a-záéíóúüñ]{2,})\s+\1(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i.test(m.texto), `Mensaje ${m.slug} tiene palabra duplicada consecutiva`);
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
    cat.hubs.filter((h) => /^(?!.*luctuoso).*(mes(es)?-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(h.slug)).map((h) => h.slug)
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
    const isAniv = /^(?!.*luctuoso).*(mes(es)?-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(hub.slug);

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

  assert.equal(GUIAS_EDITORIALES.length, 53, `Se esperaban 53 guias editoriales, hay ${GUIAS_EDITORIALES.length}`);
  const slugsGuias = new Set<string>();
  for (const g of GUIAS_EDITORIALES) {
    assert.ok(!slugsGuias.has(g.slug), `Slug de guia duplicado: ${g.slug}`);
    assert.match(g.slug, /^[a-z0-9-]+$/, `Slug invalido en guia: ${g.slug}`);
    slugsGuias.add(g.slug);

    assert.ok(g.seoTitle.length >= 50 && g.seoTitle.length <= 60, `Guia ${g.slug} seoTitle fuera de 50-60 chars: ${g.seoTitle.length}`);
    assert.ok(!/\bhoy\b/i.test(g.seoTitle), `Guia ${g.slug} incluye adverbio de relleno "hoy" en seoTitle: ${g.seoTitle}`);
    assert.ok(!/\bhoy\b/i.test(g.h1), `Guia ${g.slug} incluye adverbio de relleno "hoy" en h1: ${g.h1}`);
    assert.ok(!/\b30s\b/i.test(g.seoTitle), `Guia ${g.slug} incluye abreviatura en seoTitle: ${g.seoTitle}`);
    assert.ok(!/[!?¡¿]/.test(g.seoTitle), `Guia ${g.slug} incluye signo !/? en seoTitle: ${g.seoTitle}`);
    assert.ok(g.descripcion.length >= 150 && g.descripcion.length <= 160, `Guia ${g.slug} meta description fuera de 150-160 chars: ${g.descripcion.length}`);
    assert.ok(g.keywordPrincipal.trim().length >= 5, `Guia ${g.slug} requiere keywordPrincipal`);
    assert.ok(g.keywordsSecundarias.length >= 3 && g.keywordsSecundarias.length <= 6, `Guia ${g.slug} requiere 3-6 keywordsSecundarias`);

    const kw = norm(g.keywordPrincipal);
    assert.ok(norm(g.seoTitle).includes(kw), `Guia ${g.slug} debe incluir keywordPrincipal en seoTitle`);
    assert.ok(norm(g.h1).includes(kw), `Guia ${g.slug} debe incluir keywordPrincipal en h1`);
    assert.ok(norm(g.respuestaDirecta).includes(kw), `Guia ${g.slug} debe incluir keywordPrincipal en respuestaDirecta`);
    assert.ok(g.secciones.some((s) => norm(s.subtitulo).includes(kw)), `Guia ${g.slug} debe incluir keywordPrincipal en al menos un H2`);

    if (g.tipoLead) {
      assert.ok(Array.isArray(g.comoHacerloTuyo) && g.comoHacerloTuyo.length >= 3, `Guia v3 ${g.slug} requiere caja comoHacerloTuyo (>= 3 pautas)`);
      assert.ok(Array.isArray(g.etiquetas) && g.etiquetas.length >= 2 && g.etiquetas.length <= 3, `Guia v3 ${g.slug} requiere 2-3 etiquetas tematicas`);
      const sents = g.secciones
        .flatMap((s) => s.parrafos)
        .flatMap((p) => p.split(/(?<=[.!?])\s+/))
        .filter((s) => s.trim().length > 5);
      const avgWords = sents.reduce((acc, s) => acc + s.trim().split(/\s+/).length, 0) / (sents.length || 1);
      assert.ok(avgWords <= 22, `Guia v3 ${g.slug} tiene oraciones promedio muy largas (${avgWords.toFixed(1)} palabras)`);
    }

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

test('generarUrlsSitio y generarSitemapXml cubren las 24768 URLs indexables sin duplicados y priorizan hubs y mensajes antes que paginacion', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);
  const slugsGuias = GUIAS_EDITORIALES.map((g) => g.slug);
  const slugsSignos = ZODIACOS.map((s) => s.slug);
  const slugsPaises = PAISES_HITOS.map((p) => p.slug);
  const urls = generarUrlsSitio(cat, slugsGuias, slugsSignos, slugsPaises);

  assert.equal(urls.length, 24768, `Se esperaban 24768 URLs indexables, se obtuvieron ${urls.length}`);
  assert.equal(new Set(urls).size, 24768, 'Las URLs del sitemap deben ser todas unicas');
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
  assert.ok(urls.includes('https://paracumpleanos.com/guias/mensajes-de-cumpleanos-para-amigos-y-mejores-amigos/'));
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
  assert.equal(locs.length, 24768);
  assert.ok(!xmlSinLastmod.includes('<lastmod>'), 'Sin mapa lastmod no debe emitir etiquetas lastmod');

  const mapaLastmod = construirMapaLastmodSitemap(cat, GUIAS_EDITORIALES, slugsSignos, slugsPaises, '2026-11-22');
  const xmlConLastmod = generarSitemapXml(urls, mapaLastmod);
  const lastmods = xmlConLastmod.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) || [];
  assert.equal(lastmods.length, 24768, 'Cada una de las 24768 URLs debe recibir su lastmod real YYYY-MM-DD');
  assert.ok(
    xmlConLastmod.includes('<loc>https://paracumpleanos.com/banderines-de-cumpleanos-para-imprimir/</loc><lastmod>2026-11-22</lastmod>'),
    'El sitemap debe reflejar el lastmod real de banderines'
  );
  assert.throws(() => generarSitemapXml(['https://paracumpleanos.com/'], { 'https://paracumpleanos.com/': '2026-02-31' }));
});

test('Bing IndexNow cubre las 24768 URLs en lotes validos de hasta 10000 y tiene archivo de clave valido', () => {
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
  assert.equal(extraidas.length, 24768);

  const payloads = construirPayloadsIndexNow(extraidas);
  assert.equal(payloads.length, 3);
  assert.equal(payloads.reduce((total, p) => total + p.urlList.length, 0), 24768);
  assert.equal(payloads[0].urlList.length, INDEXNOW_MAX_BATCH);
  assert.equal(payloads[1].urlList.length, INDEXNOW_MAX_BATCH);
  assert.equal(payloads[2].urlList.length, 4768);
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
  assert.equal(cat.hubs[0].actualizado, '2026-11-23', 'El primer hub del catalogo debe ser de la fecha mas reciente');

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

test('estandar Ultra Guia Cosmica v3.0: cero contaminacion tematica, cero mezcla voseo/tuteo y ruteo exacto de 53 guias', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  // 1. Cero "Hoy" de relleno en titulos de hubs
  for (const h of cat.hubs) {
    assert.ok(!/\bhoy\b/i.test(h.titulo), `Hub ${h.slug} contiene "hoy" de relleno en titulo: ${h.titulo}`);
  }

  // 2. Cero mezcla voseo/tuteo, cero ?/! en titulos y cero cliches "momentos inolvidables"
  const tuteoMixRe = /\b(tienes|puedes|quieres|sabes|haces|dices|eres|recuerdas|necesitas|buscas|escribes|eliges|envías|compartes|tú|contigo)\b/i;
  const voseoRe = /\b(tenés|podés|querés|sabés|hacés|decís|sos|buscás|escribís|elegís|enviás|compartís|vos)\b/i;
  for (const m of cat.todosMensajes) {
    assert.ok(!/[!?¡¿]/.test(m.titulo), `Mensaje ${m.slug} contiene signo !/? en titulo: ${m.titulo}`);
    assert.ok(!/momentos inolvidables/i.test(m.texto), `Mensaje ${m.slug} contiene cliche "momentos inolvidables"`);
    if (voseoRe.test(m.texto)) {
      assert.ok(!tuteoMixRe.test(m.texto), `Mensaje ${m.slug} (${m.categoria}) mezcla voseo con tuteo`);
    }
  }

  // 3. Cero contaminacion de "cumpleaños" en fechas especiales, hitos no-cumpleanos y primer mes de novios
  const noCumpleHubs = cat.hubs.filter(
    (h) =>
      h.grupo === 'fechas_especiales' ||
      h.slug === 'frases-de-primer-mes-de-novios' ||
      /jubilacion|nacimiento|cumplemes|graduacion/.test(h.slug)
  );
  assert.ok(noCumpleHubs.length >= 22);
  for (const h of noCumpleHubs) {
    for (const m of cat.mensajesDe(h.slug)) {
      assert.ok(
        !/cumplea[ñn]os/i.test(m.titulo + ' ' + m.texto),
        `Contaminacion de "cumpleaños" en ${h.slug} (${m.slug}): ${m.titulo}`
      );
    }
  }

  // 4. Ruteo exacto de guiaRelacionadaParaHub (bugs corregidos + 8 nuevas guias)
  const casosRuteo: [string, string][] = [
    ['cumpleanos-en-la-oficina-y-equipo', 'como-felicitar-en-el-trabajo-jefe-companeros-clientes'],
    ['feliz-cumpleanos-para-mi-jefa', 'como-felicitar-en-el-trabajo-jefe-companeros-clientes'],
    ['cartas-para-mi-madre', 'como-escribir-una-carta-de-cumpleanos-que-emocione'],
    ['feliz-cumpleanos-amiga', 'mensajes-de-cumpleanos-para-amigos-y-mejores-amigos'],
    ['feliz-cumpleanos-mejor-amigo', 'mensajes-de-cumpleanos-para-amigos-y-mejores-amigos'],
    ['feliz-cumpleanos-suegra', 'como-felicitar-a-familia-politica-y-extendida-suegra-cunados-tios'],
    ['feliz-cumpleanos-para-una-cunada', 'como-felicitar-a-familia-politica-y-extendida-suegra-cunados-tios'],
    ['feliz-navidad-en-familia', 'mensajes-para-fechas-especiales-del-ano-navidad-madre-san-valentin'],
    ['feliz-san-valentin', 'mensajes-para-fechas-especiales-del-ano-navidad-madre-san-valentin'],
    ['mensajes-cuando-extranas-a-alguien', 'como-escribir-mensajes-de-nostalgia-y-cuando-extranas-a-alguien'],
    ['frases-de-nostalgia-y-recuerdos', 'como-escribir-mensajes-de-nostalgia-y-cuando-extranas-a-alguien'],
    ['feliz-jubilacion-y-retiro', 'que-escribir-en-nacimiento-jubilacion-y-graduacion-hitos-de-vida'],
    ['bienvenida-nacimiento-bebe', 'que-escribir-en-nacimiento-jubilacion-y-graduacion-hitos-de-vida'],
    ['cumpleanos-para-perros', 'como-celebrar-y-escribir-por-el-cumpleanos-de-perros-y-gatos'],
    ['feliz-cumpleanos-para-gatos', 'como-celebrar-y-escribir-por-el-cumpleanos-de-perros-y-gatos'],
    ['feliz-cumpleanos-30-anos', 'cumpleanos-de-30-y-40-anos-palabras-sinceras-sin-cliches-de-edad'],
    ['feliz-cumpleanos-40-anos', 'cumpleanos-de-30-y-40-anos-palabras-sinceras-sin-cliches-de-edad'],
    ['mensajes-de-cumpleanos-emotivos', 'mensajes-de-cumpleanos-cortos-emotivos-o-reflexivos-como-elegir'],
    ['feliz-cumpleanos-para-mi', 'auto-felicitacion-por-mi-cumpleanos-para-agradecer-y-reflexionar']
  ];
  for (const [hubSlug, guiaEsperada] of casosRuteo) {
    const h = cat.hubsPorSlug.get(hubSlug);
    assert.ok(h, `Hub faltante en prueba de ruteo: ${hubSlug}`);
    assert.equal(guiaRelacionadaParaHub(h).slug, guiaEsperada, `Hub ${hubSlug} mapeo a guia incorrecta`);
  }
});

test('Anti-canibalizacion GSC, sitemap/RSS actualizados, noindex en /posts y controles anti-rebote activos', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  // 1. Ningun titulo abrupto terminado en "- 50", ningun meta truncado o robotico y ningun lead "40 opciones" en hubs de 50
  const titulosUnicos = new Set<string>();
  for (const h of cat.hubs) {
    const tNorm = h.titulo.toLowerCase().trim();
    assert.ok(!titulosUnicos.has(tNorm), `Titulo de hub duplicado: ${h.slug} -> ${h.titulo}`);
    titulosUnicos.add(tNorm);
    assert.ok(!/-\s*50$/.test(h.titulo), `Titulo abrupto terminado en "- 50": ${h.slug} -> ${h.titulo}`);
    assert.ok(
      !/\b(este|esta|estos|estas|para|de|con|por|en|el|la|los|las|un|una|y|o)\.$/i.test(h.meta.trim()),
      `Meta truncado en ${h.slug}: ${h.meta}`
    );
    assert.ok(
      !/(?:para\s+(?:frases|mensajes|cartas|palabras|dedicatorias)|de\s+(?:frases|mensajes|cartas|palabras|dedicatorias)\s+para)/i.test(h.meta),
      `Meta robotico en ${h.slug}: ${h.meta}`
    );
    const cant = cat.mensajesDe(h.slug).length;
    const slugNums = h.slug.match(/\d+/g) || [];
    if (cant === 50 && !slugNums.includes('40')) {
      assert.ok(
        !/\b40\s+(opciones|mensajes|textos|dedicatorias|frases|cartas)\b/i.test(h.lead || ''),
        `Lead desactualizado con "40" en hub de 50: ${h.slug}`
      );
    }
  }

  // 2. Pares hermanos clave diferenciados sin canibalizacion + top consultas GSC optimizadas
  const paresDiferenciados: [string, string][] = [
    ['feliz-cumpleanos-papa', 'cumpleanos-para-un-papa'],
    ['feliz-cumpleanos-para-mi-esposo', 'frases-para-mi-esposo'],
    ['feliz-cumpleanos-para-mi-esposa', 'frases-para-mi-esposa'],
    ['feliz-cumpleanos-hijo', 'frases-para-un-hijo'],
    ['feliz-cumpleanos-hija', 'frases-para-una-hija'],
    ['feliz-cumpleanos-20-anos', 'feliz-cumpleanos-20-anos-para-mi'],
    ['feliz-cumpleanos-cortos-y-bonitos', 'mensajes-cortos-de-cumpleanos'],
    ['feliz-cumpleanos-primo', 'frases-para-un-primo']
  ];
  for (const [a, b] of paresDiferenciados) {
    const ha = cat.hubsPorSlug.get(a);
    const hb = cat.hubsPorSlug.get(b);
    assert.ok(ha && hb, `Par faltante: ${a} / ${b}`);
    assert.notEqual(ha.titulo, hb.titulo);
    assert.ok(ha.titulo.length <= 60, `Titulo > 60 en ${a}: ${ha.titulo}`);
    assert.ok(hb.titulo.length <= 60, `Titulo > 60 en ${b}: ${hb.titulo}`);
  }

  assert.ok(cat.hubsPorSlug.get('feliz-cumpleanos-prima-dios-te-bendiga')?.titulo.includes('frases'));
  assert.ok(cat.hubsPorSlug.get('frases-para-un-hijo-que-esta-lejos')?.titulo.startsWith('Mensajes para un hijo que está lejos'));
  assert.ok(cat.hubsPorSlug.get('frases-para-un-primo-que-esta-lejos')?.titulo.includes('distancia'));
  assert.ok(!cat.hubsPorSlug.get('feliz-cumpleanos-20-anos')?.titulo.includes('para mí'));

  // 3. Sitemap, RSS, robots.txt y PuenteRedireccion (noindex + canonical)
  const sitemapSrc = fs.readFileSync(path.resolve('src/pages/sitemap.xml.ts'), 'utf8');
  assert.ok(sitemapSrc.includes("'2026-11-23'"), 'sitemap.xml.ts debe usar fecha base actualizada 2026-11-23');
  const robotsSrc = fs.readFileSync(path.resolve('public/robots.txt'), 'utf8');
  assert.ok(robotsSrc.includes('Sitemap: https://paracumpleanos.com/rss.xml'), 'robots.txt debe declarar rss.xml');
  const puenteSrc = fs.readFileSync(path.resolve('src/components/PuenteRedireccion.astro'), 'utf8');
  assert.ok(puenteSrc.includes('content="noindex, follow"'), 'PuenteRedireccion debe emitir noindex, follow para evitar canibalizacion de /posts/');
  assert.ok(!fs.existsSync(path.resolve('src/pages/guias/%5Bslug%5D.astro')), 'No debe existir archivo duplicado %5Bslug%5D.astro');

  const rss = generarRssXml(cat.hubs, cat.mensajesDe, new Date('2026-11-23T12:00:00Z'), GUIAS_EDITORIALES);
  assert.ok(
    rss.includes('como-escribir-mensajes-de-nostalgia-y-cuando-extranas-a-alguien'),
    'rss.xml debe priorizar las nuevas guias publicadas en 2026-11-23'
  );

  // 4. Componentes anti-rebote presentes en [slug].astro y TarjetaMensaje.astro
  const slugSrc = fs.readFileSync(path.resolve('src/pages/[slug].astro'), 'utf8');
  assert.ok(slugSrc.includes('<PersonalizadorRapidoHub'), '[slug].astro debe montar PersonalizadorRapidoHub');
  assert.ok(slugSrc.includes('class="nav-dedicatorias"'), '[slug].astro debe incluir navegacion anterior/siguiente en paginas de mensaje');
  const cardSrc = fs.readFileSync(path.resolve('src/components/TarjetaMensaje.astro'), 'utf8');
  assert.ok(cardSrc.includes('btn-leer-mas'), 'TarjetaMensaje debe incluir boton inline Leer completo');
  assert.ok(cardSrc.includes('card-cta-tarjeta'), 'TarjetaMensaje debe incluir enlace directo a Tarjeta PNG / Story');
});

test('Estrategia Superman+Batman GSC: 120 hubs prioritarios, enlazado interno sin rotos, CTR titulos/FAQs y retencion', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  const slugsPrioritarios = Object.keys(HUBS_PRIORITARIOS_GSC);
  assert.ok(slugsPrioritarios.length >= 110, `Se esperaban >= 110 hubs prioritarios GSC, hay ${slugsPrioritarios.length}`);

  // 1. Todos los hubs prioritarios GSC existen en catalogo, sin titulos genericos "- 50 Mensajes/Cartas/Poemas"
  for (const slug of slugsPrioritarios) {
    const h = cat.hubsPorSlug.get(slug);
    assert.ok(h, `Hub prioritario GSC inexistente en catalogo: ${slug}`);
    assert.ok(
      !/-\s*50\s+(Mensajes|Cartas|Poemas|Frases)$/i.test(h.titulo.trim()),
      `Hub prioritario GSC aun tiene titulo generico: ${slug} -> ${h.titulo}`
    );
    assert.ok(h.titulo.length <= 65, `Titulo demasiado largo en hub GSC ${slug}: ${h.titulo}`);

    // clusterGscDe debe cubrir al 100% los hubs GSC con enlaces validos y sin auto-enlace
    const cl = clusterGscDe(slug, cat.hubsPorSlug, 3);
    assert.ok(cl && cl.enlaces.length >= 2, `clusterGscDe vacio para ${slug}`);
    for (const en of cl.enlaces) {
      const targetSlug = en.href.replace(/^\/|\/$/g, '');
      assert.notEqual(targetSlug, slug, `Auto-enlace en clusterGscDe para ${slug}`);
      assert.ok(cat.hubsPorSlug.has(targetSlug), `Enlace roto en clusterGscDe: ${targetSlug}`);
    }
  }

  // 2. Bloques de portada, footer global y accesos rapidos resuelven a URLs reales
  const slugsPortada = BLOQUES_PORTADA_GSC.flatMap((b) => b.slugs);
  assert.equal(BLOQUES_PORTADA_GSC.length, 4);
  assert.equal(slugsPortada.length, 24);
  assert.equal(new Set(slugsPortada).size, 24, 'Los 24 hubs destacados en portada deben ser unicos');
  for (const sl of slugsPortada) {
    assert.ok(cat.hubsPorSlug.has(sl), `Hub inexistente en BLOQUES_PORTADA_GSC: ${sl}`);
  }
  assert.equal(TOP_FOOTER_GSC.length, 12);
  for (const item of TOP_FOOTER_GSC) {
    assert.ok(cat.hubsPorSlug.has(item.slug), `Hub inexistente en TOP_FOOTER_GSC: ${item.slug}`);
  }
  for (const acc of ACCESOS_RAPIDOS_PORTADA) {
    const sl = acc.href.replace(/^\/|\/$/g, '');
    assert.ok(cat.hubsPorSlug.has(sl), `Enlace inexistente en ACCESOS_RAPIDOS_PORTADA: ${acc.href}`);
  }

  // 3. Cero slugs rotos en PARES_CONTEXTUALES de [slug].astro
  const slugAstroSrc = fs.readFileSync(path.resolve('src/pages/[slug].astro'), 'utf8');
  const bloquePares = slugAstroSrc.match(/const PARES_CONTEXTUALES[\s\S]*?\n\};/);
  assert.ok(bloquePares, 'No se encontro PARES_CONTEXTUALES en [slug].astro');
  const keysPares = [...bloquePares[0].matchAll(/^\s*'([a-z0-9-]+)':\s*\{/gm)].map((m) => m[1]);
  assert.ok(keysPares.length >= 40);
  for (const k of keysPares) {
    assert.ok(cat.hubsPorSlug.has(k), `Clave rota en PARES_CONTEXTUALES: ${k}`);
  }
  const hrefsPares = [...bloquePares[0].matchAll(/href:\s*'([^']+)'/g)].map((m) => m[1]);
  for (const href of hrefsPares) {
    if (href.startsWith('/categorias/') || href.startsWith('/herramientas/') || href.startsWith('/calendario/') || href.startsWith('/guias/')) {
      continue;
    }
    const sl = href.replace(/^\/|\/$/g, '');
    assert.ok(cat.hubsPorSlug.has(sl), `Enlace roto en PARES_CONTEXTUALES: ${href}`);
  }

  // 4. enlacesHermanasInteligentes devuelve 8 hubs unicos sin auto-enlace y prioriza clúster GSC
  const primaHub = cat.hubsPorSlug.get('feliz-cumpleanos-prima-dios-te-bendiga');
  assert.ok(primaHub);
  const hermanasPrima = enlacesHermanasInteligentes(primaHub, cat, 8);
  assert.equal(hermanasPrima.length, 8);
  assert.equal(new Set(hermanasPrima.map((h) => h.slug)).size, 8);
  assert.ok(!hermanasPrima.some((h) => h.slug === primaHub.slug));
  assert.ok(
    hermanasPrima.slice(0, 4).some((h) => h.slug === 'feliz-cumpleanos-sobrina-dios-te-bendiga'),
    'Hermanas inteligentes de prima debe priorizar sobrina-dios-te-bendiga'
  );

  // 5. ordenarHubsPorDemandaGsc prioriza los de mayor peso GSC
  const ordenados = ordenarHubsPorDemandaGsc(cat.hubs);
  assert.equal(ordenados[0].slug, 'feliz-cumpleanos-prima-dios-te-bendiga');

  // 6. faqsGscParaHub genera 3 FAQs especificas en hubs objetivo y respeta exclusiones de duelo/aniversario
  for (const sl of [
    'feliz-cumpleanos-prima-dios-te-bendiga',
    'cartas-para-mi-papa-que-lo-haga-llorar',
    'feliz-cumpleanos-para-mi-esposa',
    'frases-para-un-hijo-que-esta-lejos',
    'frases-para-un-hijo-de-2-anos',
    'feliz-cumpleanos-abuelo',
    'feliz-cumpleanos-para-doctora'
  ]) {
    const h = cat.hubsPorSlug.get(sl);
    const faqs = faqsGscParaHub(h, 50);
    assert.ok(faqs && faqs.length === 3, `faqsGscParaHub debe devolver 3 FAQs para ${sl}`);
  }
  assert.equal(faqsGscParaHub(cat.hubsPorSlug.get('condolencias'), 50), null);
  assert.equal(faqsGscParaHub(cat.hubsPorSlug.get('mas-de-10-anos-de-novios'), 50), null);
  assert.equal(faqsGscParaHub(cat.hubsPorSlug.get('banderines-de-cumpleanos-para-imprimir'), 40), null);

  // 7. Controles de retencion presentes en componentes y layout
  const prhSrc = fs.readFileSync(path.resolve('src/components/PersonalizadorRapidoHub.astro'), 'utf8');
  assert.ok(prhSrc.includes('id="prh-azar"'), 'PersonalizadorRapidoHub debe incluir boton Sorprendeme');
  const baseSrc = fs.readFileSync(path.resolve('src/layouts/Base.astro'), 'utf8');
  assert.ok(baseSrc.includes('id="pc-favoritas-dialog"'), 'Base.astro debe incluir modal de favoritas guardadas');
  assert.ok(baseSrc.includes('class="pie-gsc-strip"'), 'Base.astro debe incluir franja de colecciones mas buscadas en footer');
  const guiaSlugSrc = fs.readFileSync(path.resolve('src/pages/guias/[slug].astro'), 'utf8');
  assert.ok(guiaSlugSrc.includes('class="guia-cta-rapida"'), 'guias/[slug].astro debe incluir CTA temprano al hub');
});

test('AdSense, Google Tag Manager, Google Consent Mode v2, CMP RGPD Europa y correo de contacto oficial', () => {
  // 1. Utilidades puras de consentimiento RGPD / Consent Mode v2
  assert.equal(ADSENSE_CLIENT_ID, 'ca-pub-7756135514831267');
  assert.equal(GTM_CONTAINER_ID, 'GTM-NKFBN6X5');
  assert.equal(GTM_ANALYTICS_CONTAINER_ID, 'GTM-WKC77GT5');
  assert.equal(CONTACTO_EMAIL, 'lamieldehorus@gmail.com');
  assert.equal(REGIONES_RGPD_EEE.length, 32, 'Debe cubrir los 30 paises EEE + Reino Unido (GB) + Suiza (CH)');
  assert.ok(REGIONES_RGPD_EEE.includes('ES') && REGIONES_RGPD_EEE.includes('GB') && REGIONES_RGPD_EEE.includes('CH'));

  assert.equal(esZonaHorariaEuropea('Europe/Madrid'), true);
  assert.equal(esZonaHorariaEuropea('Atlantic/Canary'), true);
  assert.equal(esZonaHorariaEuropea('America/Argentina/Buenos_Aires'), false);
  assert.equal(esZonaHorariaEuropea('America/Mexico_City'), false);
  assert.equal(esZonaHorariaEuropea(''), false);

  const prefDef = normalizarPreferenciasConsentimiento(null);
  assert.deepEqual(prefDef, { esenciales: true, analitica: false, publicidad: false, actualizado: undefined });

  const estadoRechazado = construirEstadoConsentimientoGoogle({ analitica: false, publicidad: false });
  assert.deepEqual(estadoRechazado, {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });

  const estadoParcial = construirEstadoConsentimientoGoogle({ analitica: true, publicidad: false });
  assert.equal(estadoParcial.analytics_storage, 'granted');
  assert.equal(estadoParcial.ad_storage, 'denied');
  assert.equal(estadoParcial.ad_personalization, 'denied');

  // 2. Orden estricto en Base.astro: Consent Mode v2 default -> GTM (ambos contenedores) -> AdSense + noscript + CMP banner/dialog
  const baseSrc = fs.readFileSync(path.resolve('src/layouts/Base.astro'), 'utf8');
  const idxConsent = baseSrc.indexOf("gtag('consent', 'default'");
  const idxGtm = baseSrc.indexOf('https://www.googletagmanager.com/gtm.js?id=GTM-NKFBN6X5');
  const idxGtm2 = baseSrc.indexOf('https://www.googletagmanager.com/gtm.js?id=GTM-WKC77GT5');
  const idxAdsense = baseSrc.indexOf('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7756135514831267');
  assert.ok(idxConsent !== -1, 'Base.astro debe declarar Consent Mode v2 default');
  assert.ok(idxGtm > idxConsent, 'GTM principal debe cargarse despues de Consent Mode v2 default');
  assert.ok(idxGtm2 > idxConsent, 'GTM analitica (GTM-WKC77GT5) debe cargarse despues de Consent Mode v2 default');
  assert.ok(idxAdsense > idxConsent, 'AdSense debe cargarse despues de Consent Mode v2 default');
  assert.ok(baseSrc.includes('https://www.googletagmanager.com/ns.html?id=GTM-NKFBN6X5'), 'Base.astro debe incluir iframe noscript de GTM-NKFBN6X5');
  assert.ok(baseSrc.includes('https://www.googletagmanager.com/ns.html?id=GTM-WKC77GT5'), 'Base.astro debe incluir iframe noscript de GTM-WKC77GT5');
  assert.ok(baseSrc.includes('id="pc-cmp-banner"'), 'Base.astro debe incluir el banner CMP RGPD');
  assert.ok(baseSrc.includes('id="pc-cmp-dialog"'), 'Base.astro debe incluir el modal granular CMP RGPD');
  assert.ok(baseSrc.includes('data-abrir-cmp'), 'Base.astro debe permitir reabrir preferencias de cookies desde el footer');

  // 3. Correo actualizado a lamieldehorus@gmail.com en las 4 paginas institucionales y cero referencias viejas
  for (const relPath of ['src/pages/contacto.astro', 'src/pages/sobre-nosotros.astro', 'src/pages/privacidad.astro', 'src/pages/terminos-de-uso.astro']) {
    const src = fs.readFileSync(path.resolve(relPath), 'utf8');
    assert.ok(src.includes(CONTACTO_EMAIL), `${relPath} debe incluir ${CONTACTO_EMAIL}`);
    assert.ok(!src.includes('contacto@paracumpleanos.com'), `${relPath} aun contiene el correo anterior contacto@paracumpleanos.com`);
  }

  // 4. Privacidad actualizada, verificacion AdSense completa (meta + script + ads.txt), exclusion en 404/redirecciones y crawlers en robots.txt
  const privSrc = fs.readFileSync(path.resolve('src/pages/privacidad.astro'), 'utf8');
  assert.ok(privSrc.includes('localStorage'), 'privacidad.astro debe documentar localStorage');
  assert.ok(privSrc.includes(GTM_CONTAINER_ID), 'privacidad.astro debe documentar GTM-NKFBN6X5');
  assert.ok(privSrc.includes(GTM_ANALYTICS_CONTAINER_ID), 'privacidad.astro debe documentar GTM-WKC77GT5');
  assert.ok(privSrc.includes(ADSENSE_CLIENT_ID), 'privacidad.astro debe documentar Google AdSense');
  assert.ok(privSrc.includes('data-abrir-cmp'), 'privacidad.astro debe incluir boton para gestionar cookies RGPD');

  assert.equal(ADSENSE_PUBLISHER_ID, 'pub-7756135514831267');
  assert.ok(
    baseSrc.includes(`<meta name="google-adsense-account" content="${ADSENSE_CLIENT_ID}" />`),
    'Base.astro debe incluir meta tag google-adsense-account para verificacion oficial de AdSense'
  );
  assert.ok(baseSrc.includes('sinAnuncios = false'), 'Base.astro debe soportar exclusion de script de anuncios en pantallas de error');
  assert.ok(
    baseSrc.indexOf('intentar(ARCHIVO_PUBLICO_URL)') < baseSrc.indexOf('.catch(function () { return intentar(API_COMPARTIDOS_URL); })'),
    'Base.astro debe leer primero /compartidos-historial.json para evitar errores 404 en consola en produccion estatica'
  );

  const page404Src = fs.readFileSync(path.resolve('src/pages/404.astro'), 'utf8');
  assert.ok(page404Src.includes('sinAnuncios={true}'), '404.astro no debe cargar adsbygoogle.js para cumplir politicas de AdSense en paginas de error');
  const puenteSrc = fs.readFileSync(path.resolve('src/components/PuenteRedireccion.astro'), 'utf8');
  assert.ok(!puenteSrc.includes('adsbygoogle'), 'PuenteRedireccion.astro no debe cargar anuncios en paginas puente de redireccion');

  const publicAdsTxt = fs.readFileSync(path.resolve('public/ads.txt'), 'utf8');
  const rootAdsTxt = fs.readFileSync(path.resolve('ads.txt'), 'utf8');
  assert.equal(validarAdsTxt(publicAdsTxt), true, 'public/ads.txt debe declarar exclusivamente pub-7756135514831267');
  assert.equal(validarAdsTxt(rootAdsTxt), true, 'ads.txt raiz debe coincidir con pub-7756135514831267 sin IDs viejos');
  assert.equal(rootAdsTxt.trim(), ADSENSE_ADS_TXT_LINE);
  assert.equal(publicAdsTxt.trim(), ADSENSE_ADS_TXT_LINE);
  assert.equal(validarAdsTxt('google.com, pub-7933111729537978, DIRECT, f08c47fec0942fa0'), false);

  const robotsSrc = fs.readFileSync(path.resolve('public/robots.txt'), 'utf8');
  assert.ok(robotsSrc.includes('Mediapartners-Google'), 'robots.txt debe permitir explicitamente Mediapartners-Google');
  assert.ok(robotsSrc.includes('Google-Display-Ads-Bot'), 'robots.txt debe permitir explicitamente Google-Display-Ads-Bot');
  assert.ok(robotsSrc.includes('AdsBot-Google'), 'robots.txt debe permitir explicitamente AdsBot-Google');
});

test('contador publico de lo mas compartido por red, archivo JSON visible, historial por cada compartido y aviso de cookies/navegador', () => {
  // 1. Logica pura de compartidos separados por red + historial cronologico
  assert.deepEqual([...REDES_COMPARTIR], ['whatsapp', 'instagram', 'facebook', 'copiar']);
  assert.equal(ARCHIVO_COMPARTIDOS_PUBLICO, '/compartidos-historial.json');
  let est = crearEstadoCompartidosVacio();
  est = registrarCompartidoEnEstado(est, 'whatsapp', { slug: 'msg-a', titulo: 'Mensaje A', url: '/msg-a/', pagina: '/' }, '2026-11-23T10:00:00Z', 'ev-1');
  est = registrarCompartidoEnEstado(est, 'whatsapp', { slug: 'msg-a', titulo: 'Mensaje A', url: '/msg-a/', pagina: '/' }, '2026-11-23T10:01:00Z', 'ev-2');
  est = registrarCompartidoEnEstado(est, 'instagram', { slug: 'msg-b', titulo: 'Mensaje B', url: '/msg-b/', pagina: '/' }, '2026-11-23T10:02:00Z', 'ev-3');
  est = registrarCompartidoEnEstado(est, 'facebook', { slug: 'msg-b', titulo: 'Mensaje B', url: '/msg-b/', pagina: '/' }, '2026-11-23T10:03:00Z', 'ev-4');
  est = registrarCompartidoEnEstado(est, 'copiar', { slug: 'msg-b', titulo: 'Mensaje B', url: '/msg-b/', pagina: '/' }, '2026-11-23T10:04:00Z', 'ev-5');
  // Duplicado con mismo id no debe volver a sumar
  est = registrarCompartidoEnEstado(est, 'copiar', { slug: 'msg-b', titulo: 'Mensaje B', url: '/msg-b/', pagina: '/' }, '2026-11-23T10:04:00Z', 'ev-5');

  assert.equal(est.totalGlobal, 5);
  assert.deepEqual(est.totales, { whatsapp: 2, instagram: 1, facebook: 1, copiar: 1 });
  assert.equal(est.historial.length, 5, 'Cada compartido debe crear un registro en historial');
  assert.equal(est.historial[0].id, 'ev-5', 'El historial debe quedar ordenado del mas reciente al mas antiguo');
  assert.equal(est.historial[0].red, 'copiar');
  assert.equal(resumirRedesItem(est.items['msg-b'].redes), 'Instagram 1 · Facebook 1 · Copiar 1');

  const topTodas = rankearMasCompartidos(est, 'todas', 5);
  assert.equal(topTodas[0].slug, 'msg-b', 'msg-b tiene 3 compartidos totales y debe liderar en todas');
  assert.equal(topTodas[1].slug, 'msg-a');

  const topWa = rankearMasCompartidos(est, 'whatsapp', 5);
  assert.equal(topWa.length, 1);
  assert.equal(topWa[0].slug, 'msg-a');

  const histWa = filtrarHistorialCompartidos(est, 'whatsapp', 10);
  assert.equal(histWa.length, 2);
  assert.ok(histWa.every((h) => h.red === 'whatsapp'));
  assert.ok(/^\d{2}\/\d{2}\/\d{4} · \d{2}:\d{2}$/.test(formatearFechaHistorial('2026-11-23T10:04:00Z')));

  // Fusion sin duplicados entre archivo publico y eventos locales pendientes
  let localExtra = registrarCompartidoEnEstado(
    crearEstadoCompartidosVacio(),
    'copiar',
    { slug: 'msg-b', titulo: 'Mensaje B', url: '/msg-b/' },
    '2026-11-23T10:04:00Z',
    'ev-5'
  );
  localExtra = registrarCompartidoEnEstado(
    localExtra,
    'instagram',
    { slug: 'msg-c', titulo: 'Mensaje C', url: '/msg-c/' },
    '2026-11-23T10:09:00Z',
    'ev-6'
  );
  const fusion = fusionarEstadosCompartidos(est, localExtra);
  assert.equal(fusion.totalGlobal, 6, 'Fusion debe sumar solo ev-6 y no duplicar ev-5');
  assert.equal(fusion.historial.length, 6);
  assert.equal(fusion.historial[0].id, 'ev-6');

  // Normalizacion resiliente frente a JSON roto o valores negativos
  const norm = normalizarEstadoCompartidos({
    items: {
      malo: { slug: 'malo', redes: { whatsapp: -4, instagram: 'x', facebook: 0, copiar: 0 } },
      bueno: { slug: 'bueno', titulo: 'Bueno', redes: { whatsapp: 1, instagram: 0, facebook: 2, copiar: 0 } }
    }
  });
  assert.equal(norm.totalGlobal, 3);
  assert.equal(Object.keys(norm.items).length, 1);
  assert.equal(norm.totales.facebook, 2);

  // Respaldo legible de guardadas
  const respaldo = formatearRespaldoFavoritas([
    { slug: 'msg-a', titulo: 'Mensaje A', texto: 'Feliz cumple querido papá.' }
  ]);
  assert.ok(respaldo.includes('1. Mensaje A') && respaldo.includes('https://paracumpleanos.com/msg-a/'));

  // 2. Archivo publico real en public/compartidos-historial.json + API middleware en astro.config.mjs
  const archivoPubPath = path.resolve('public/compartidos-historial.json');
  assert.ok(fs.existsSync(archivoPubPath), 'Debe existir el archivo publico public/compartidos-historial.json');
  const archivoJson = JSON.parse(fs.readFileSync(archivoPubPath, 'utf8'));
  assert.ok(archivoJson && typeof archivoJson.totales === 'object' && Array.isArray(archivoJson.historial), 'public/compartidos-historial.json debe tener estructura valida con totales e historial');

  const astroCfg = fs.readFileSync(path.resolve('astro.config.mjs'), 'utf8');
  assert.ok(astroCfg.includes('/api/compartidos') && astroCfg.includes('compartidos-historial.json'), 'astro.config.mjs debe exponer /api/compartidos respaldado en public/compartidos-historial.json');

  // 3. Presencia en Base.astro, Compartir.astro, index.astro y privacidad.astro
  const baseSrc = fs.readFileSync(path.resolve('src/layouts/Base.astro'), 'utf8');
  assert.ok(baseSrc.includes('pc_compartidos_v1'), 'Base.astro debe persistir respaldo local pc_compartidos_v1');
  assert.ok(baseSrc.includes('/compartidos-historial.json'), 'Base.astro debe cargar y enlazar /compartidos-historial.json');
  assert.ok(baseSrc.includes('/api/compartidos'), 'Base.astro debe sincronizar compartidos con /api/compartidos');
  assert.ok(baseSrc.includes('id="pc-modal-comp-historial"'), 'El modal debe incluir el historial reciente de cada compartido');
  assert.ok(baseSrc.includes("window.gtag('event', 'share'"), 'Base.astro debe enviar evento GA4 share con method por red');
  assert.ok(baseSrc.includes("pcRegistrarCompartido('facebook'"), 'Base.astro debe contabilizar Facebook');
  assert.ok(baseSrc.includes("pcRegistrarCompartido('instagram'"), 'Base.astro debe contabilizar Instagram');
  assert.ok(baseSrc.includes("pcRegistrarCompartido('whatsapp'"), 'Base.astro debe contabilizar WhatsApp');
  assert.ok(baseSrc.includes("pcRegistrarCompartido('copiar'"), 'Base.astro debe contabilizar Copiar');
  assert.ok(baseSrc.includes('Si borrás cookies o datos del sitio'), 'El modal de guardadas debe avisar que borrar cookies/datos del navegador borra guardados');
  assert.ok(baseSrc.includes('id="pc-fav-respaldo"'), 'El modal debe ofrecer boton de Copiar respaldo');

  const compSrc = fs.readFileSync(path.resolve('src/components/Compartir.astro'), 'utf8');
  assert.ok(compSrc.includes('data-share-resumen'), 'Compartir.astro debe mostrar resumen de compartidos por red');

  const indexSrc = fs.readFileSync(path.resolve('src/pages/index.astro'), 'utf8');
  assert.ok(indexSrc.includes('id="lo-mas-compartido"'), 'La portada debe incluir el panel Lo mas compartido por red');
  assert.ok(indexSrc.includes('id="pc-home-comp-historial"'), 'La portada debe incluir el historial cronologico de cada compartido');
  assert.ok(indexSrc.includes('/compartidos-historial.json'), 'La portada debe enlazar el archivo publico /compartidos-historial.json');
  assert.ok(/si borrás cookies o datos del sitio/i.test(indexSrc), 'La portada debe incluir aviso claro sobre borrado de cookies/navegador');

  const privSrc = fs.readFileSync(path.resolve('src/pages/privacidad.astro'), 'utf8');
  assert.ok(privSrc.includes('/compartidos-historial.json') && privSrc.includes('si borrás cookies o datos del sitio'), 'privacidad.astro debe documentar el archivo publico anonimo y el aviso de cookies/navegador');
});

test('Correccion Bing /publicaciones/, recuperacion GSC (esposa/esposo/mama/papa/lejos) y descripciones Ultra Guia Cosmica en las 441 categorias', () => {
  const datos = cargarDatosCompletos();
  const cat = crearCatalogo(datos);

  // 1. Redirecciones legadas /publicaciones/ (Bing Webmaster Tools)
  assert.ok(fs.existsSync(path.resolve('src/pages/publicaciones/[slug].astro')), 'Falta ruta puente src/pages/publicaciones/[slug].astro');
  assert.ok(fs.existsSync(path.resolve('src/pages/publicaciones/index.astro')), 'Falta indice puente src/pages/publicaciones/index.astro');
  for (const r of REDIRECCIONES_PUBLICACIONES) {
    assert.ok(cat.hubsPorSlug.has(r.destinoSlug), `Destino inexistente en REDIRECCIONES_PUBLICACIONES: ${r.destinoSlug}`);
    if (r.alternativoSlug) {
      assert.ok(cat.hubsPorSlug.has(r.alternativoSlug), `Alternativo inexistente en REDIRECCIONES_PUBLICACIONES: ${r.alternativoSlug}`);
    }
  }
  assert.equal(
    sugerirHubParaRutaLegada('/publicaciones/mensajes-de-cumpleanos-para-alguien-que-esta-lejos/', cat.hubs),
    'feliz-cumpleanos-a-distancia'
  );

  // 2. FAQs y cobertura de consultas GSC en tendencia a la baja (esposa, esposo, mama, papa, distancia)
  for (const sl of [
    'feliz-cumpleanos-para-mi-esposa',
    'frases-para-mi-esposa',
    'feliz-cumpleanos-para-mi-esposo',
    'frases-para-mi-esposo',
    'feliz-cumpleanos-mama',
    'feliz-cumpleanos-mama-texto-largo',
    'feliz-cumpleanos-papa',
    'cumpleanos-para-un-papa',
    'feliz-cumpleanos-a-distancia',
    'frases-para-alguien-especial-que-esta-lejos'
  ]) {
    const h = cat.hubsPorSlug.get(sl);
    assert.ok(h, `Hub clave GSC/Bing faltante: ${sl}`);
    const faqs = faqsGscParaHub(h, 50);
    assert.ok(faqs && faqs.length === 3, `faqsGscParaHub debe devolver 3 FAQs especificas para ${sl}`);
  }

  // 3. Cero boilerplate antiguo y bloques editoriales de alto valor SEO en TODAS las 441 categorias
  const tuteoMixRe = /\b(tienes|puedes|quieres|sabes|haces|dices|eres|recuerdas|necesitas|buscas|escribes|eliges|envías|compartes|tú|contigo)\b/i;
  const voseoRe = /\b(tenés|podés|querés|sabés|hacés|decís|sos|buscás|escribís|elegís|enviás|compartís|vos)\b/i;

  for (const hub of cat.hubs) {
    assert.ok(!String(hub.seoTexto || '').includes('regla simple de causa y efecto'), `Boilerplate antiguo en seoTexto de ${hub.slug}`);
    assert.ok(!/para\s+"[a-záéíóúüñ0-9\s]{6,}"/i.test(String(hub.lead || '')), `Lead con comillas roboticas en ${hub.slug}`);

    const msgs = cat.mensajesDe(hub.slug);
    const ed = editorialHubCompleto(hub, msgs);
    assert.ok(ed.resumenIntencion.length >= 120, `resumenIntencion muy corto en ${hub.slug}`);
    assert.ok(ed.comparacionValor.evitar.length >= 25 && ed.comparacionValor.mejor.length >= 40 && ed.comparacionValor.explicacion.length >= 40, `comparacionValor incompleta en ${hub.slug}`);
    assert.equal(ed.seccionesValor.length, 2, `Se esperaban 2 seccionesValor H3 en ${hub.slug}`);
    for (const sec of ed.seccionesValor) {
      assert.ok(sec.subtitulo.length >= 20 && sec.parrafos.length >= 2, `Seccion editorial pobre en ${hub.slug}`);
    }
    assert.equal(ed.checklistEnvio.pasos.length, 4, `Se esperaban 4 pasos en checklistEnvio de ${hub.slug}`);

    const blobEditorial = [
      hub.lead,
      hub.seoTitulo,
      hub.seoTexto,
      ed.resumenIntencion,
      ed.comparacionValor.etiquetaEvitar,
      ed.comparacionValor.evitar,
      ed.comparacionValor.etiquetaMejor,
      ed.comparacionValor.mejor,
      ed.comparacionValor.explicacion,
      ...ed.seccionesValor.flatMap((s) => [s.subtitulo, ...s.parrafos]),
      ed.checklistEnvio.titulo,
      ...ed.checklistEnvio.pasos
    ].join(' ');

    if (voseoRe.test(blobEditorial)) {
      assert.ok(!tuteoMixRe.test(blobEditorial), `Mezcla voseo/tuteo en descripcion editorial de ${hub.slug}`);
    }

    const isDuelo = /fallecid|hasta-el-cielo|condolencias|pesame|consuelo|luctuoso|tristes|nostalgia|extranas/.test(hub.slug) || hub.grupo === 'duelo_recuerdos';
    const isAniv = /^(?!.*luctuoso).*(mes(es)?-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(hub.slug);
    if (isDuelo) {
      assert.ok(!/(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(torta|pastel|soplá|velas|fiesta|festej\w*|brindis|regalos)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i.test(blobEditorial), `Contaminacion festiva en bloque editorial de duelo: ${hub.slug}`);
    }
    if (isAniv) {
      assert.ok(!/cumpleaños/i.test(blobEditorial), `Contaminacion de "cumpleaños" en bloque editorial de aniversario: ${hub.slug}`);
    }

    const leadWords = String(hub.lead || '').trim().split(/\s+/).filter(Boolean).length;
    const seoWords = String(hub.seoTexto || '').trim().split(/\s+/).filter(Boolean).length;
    const seoParas = String(hub.seoTexto || '').split('\n\n').filter(Boolean).length;
    assert.ok(leadWords >= 75, `Lead demasiado corto en ${hub.slug}: ${leadWords} palabras (min 75)`);
    assert.ok(seoWords >= 260, `seoTexto demasiado corto en ${hub.slug}: ${seoWords} palabras (min 260)`);
    assert.ok(seoParas >= 6, `seoTexto requiere 6 parrafos sustantivos en ${hub.slug}, tiene ${seoParas}`);
  }

  // 4. Portada y directorio con guia pilar Ultra Guia Cosmica SEO y FAQPage
  const idxSrc = fs.readFileSync(path.resolve('src/pages/index.astro'), 'utf8');
  assert.ok(idxSrc.includes('portal-guia-cosmica'), 'La portada debe incluir la seccion pilar portal-guia-cosmica');
  assert.ok(idxSrc.includes("'@type': 'FAQPage'"), 'La portada debe emitir JSON-LD FAQPage');
  assert.ok(idxSrc.includes('class="tabla-comparativa"'), 'La portada debe incluir la tabla comparativa por canal y horario');
  assert.ok(idxSrc.includes('class="comparacion-concreta"'), 'La portada debe incluir comparaciones concretas evitar vs mejor');

  const catsSrc = fs.readFileSync(path.resolve('src/pages/categorias.astro'), 'utf8');
  assert.ok(catsSrc.includes('class="cats-guia-editorial"'), '/categorias/ debe incluir la guia editorial de orientacion');
});





