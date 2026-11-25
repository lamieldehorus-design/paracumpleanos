export const SITIO = 'https://paracumpleanos.com';
export const MARCA = 'ParaCumpleanos';

export const POR_PAGINA = 12;
export const RELACIONADAS = 8;
export const HERMANAS = 6;

export interface GrupoInfo {
  id: string;
  nombre: string;
  emoji: string;
}

export const GRUPOS: GrupoInfo[] = [
  { id: 'destinatarios', nombre: 'Destinatarios principales', emoji: '🎂' },
  { id: 'cartas', nombre: 'Cartas de cumpleaños', emoji: '✉️' },
  { id: 'edades', nombre: 'Edades e hitos', emoji: '🎈' },
  { id: 'cristiano', nombre: 'Cristiano y bendiciones', emoji: '🙏' },
  { id: 'tono', nombre: 'Tonos, estilos y formatos', emoji: '🎉' },
  { id: 'distancia', nombre: 'A distancia / lejos', emoji: '🌍' },
  { id: 'familia', nombre: 'Familia política y extendida', emoji: '🏡' },
  { id: 'profesionales', nombre: 'Trabajo, escuela y profesión', emoji: '💼' },
  { id: 'aniversarios', nombre: 'Aniversarios y meses de novios', emoji: '💑' },
  { id: 'meses', nombre: 'Cumpleaños por mes y signo', emoji: '🗓️' },
  { id: 'fechas_especiales', nombre: 'Fechas especiales del año', emoji: '🎉' },
  { id: 'fechas_hitos', nombre: 'Hitos y momentos de vida', emoji: '💐' },
  { id: 'duelo_recuerdos', nombre: 'Condolencias, duelo y recuerdos', emoji: '🕊️' },
  { id: 'especiales', nombre: 'Ocasiones especiales', emoji: '✨' }
];

function fechaOrdenRegistro(r: any, fechaHub?: string): string {
  return String(r?.actualizado || r?.creado || fechaHub || '2026-11-15');
}

export function ordenarMasRecientePrimero<T extends Record<string, any>>(
  lista: T[],
  fechaPorItem?: (item: T) => string
): T[] {
  const indexMap = new Map<T, number>();
  for (let i = 0; i < lista.length; i++) indexMap.set(lista[i], i);
  return [...lista].sort((a, b) => {
    const fa = fechaPorItem ? fechaPorItem(a) : fechaOrdenRegistro(a);
    const fb = fechaPorItem ? fechaPorItem(b) : fechaOrdenRegistro(b);
    if (fb !== fa) return fb.localeCompare(fa);
    return (indexMap.get(b) ?? 0) - (indexMap.get(a) ?? 0);
  });
}

export function crearCatalogo(contenido: any[]) {
  const hubsRaw: any[] = [];
  const todosMensajesRaw: any[] = [];
  const hubsPorSlug = new Map<string, any>();
  const mensajesPorCategoriaRaw = new Map<string, any[]>();
  const hubsPorGrupoRaw = new Map<string, any[]>();
  const hubsPorDestinatario = new Map<string, any[]>();

  for (let i = 0; i < contenido.length; i++) {
    const r = contenido[i];
    if (r.tipo === 'hub') {
      hubsRaw.push(r);
      hubsPorSlug.set(r.slug, r);
      const g = r.grupo || 'destinatarios';
      if (!hubsPorGrupoRaw.has(g)) hubsPorGrupoRaw.set(g, []);
      hubsPorGrupoRaw.get(g)!.push(r);
      const d = r.destinatario || '';
      if (!hubsPorDestinatario.has(d)) hubsPorDestinatario.set(d, []);
      hubsPorDestinatario.get(d)!.push(r);
    } else if (r.tipo === 'mensaje') {
      todosMensajesRaw.push(r);
      if (!mensajesPorCategoriaRaw.has(r.categoria)) mensajesPorCategoriaRaw.set(r.categoria, []);
      mensajesPorCategoriaRaw.get(r.categoria)!.push(r);
    }
  }

  // Ordenar siempre de mas reciente a mas antiguo (arriba hacia abajo)
  const hubs = ordenarMasRecientePrimero(hubsRaw);
  const hubsPorGrupo = new Map<string, any[]>();
  for (const [g, arr] of hubsPorGrupoRaw.entries()) {
    hubsPorGrupo.set(g, ordenarMasRecientePrimero(arr));
  }
  const fechaDeMsg = (m: any) => {
    const h = hubsPorSlug.get(m.categoria);
    return fechaOrdenRegistro(m, h ? fechaOrdenRegistro(h) : undefined);
  };
  const todosMensajes = ordenarMasRecientePrimero(todosMensajesRaw, fechaDeMsg);
  const mensajesPorCategoria = new Map<string, any[]>();
  for (const [catSlug, arr] of mensajesPorCategoriaRaw.entries()) {
    mensajesPorCategoria.set(catSlug, ordenarMasRecientePrimero(arr, fechaDeMsg));
  }

  const ordenPreferido = [
    'feliz-cumpleanos-mama', 'feliz-cumpleanos-papa', 'feliz-cumpleanos-amiga',
    'feliz-cumpleanos-amigo', 'feliz-cumpleanos-hermana', 'feliz-cumpleanos-para-un-hermano',
    'feliz-cumpleanos-hija', 'feliz-cumpleanos-hijo', 'feliz-cumpleanos-novia',
    'feliz-cumpleanos-novio', 'feliz-cumpleanos-mi-amor', 'feliz-cumpleanos-para-mi-esposa',
    'feliz-cumpleanos-para-mi-esposo', 'feliz-cumpleanos-abuela', 'feliz-cumpleanos-abuelo',
    'feliz-cumpleanos-para-una-tia', 'feliz-cumpleanos-para-mi-tio', 'feliz-cumpleanos-prima',
    'feliz-cumpleanos-primo', 'feliz-cumpleanos-para-una-sobrina', 'feliz-cumpleanos-para-un-sobrino',
    'feliz-cumpleanos-para-una-cunada', 'feliz-cumpleanos-para-un-cunado', 'feliz-cumpleanos-suegra',
    'feliz-cumpleanos-mujer', 'feliz-cumpleanos-para-hombre', 'feliz-cumpleanos-alguien-especial'
  ];
  const hubsPrincipales: any[] = [];
  const destVistos = new Set<string>();
  for (let i = 0; i < ordenPreferido.length; i++) {
    const h = hubsPorSlug.get(ordenPreferido[i]);
    if (h && !destVistos.has(h.destinatario)) {
      destVistos.add(h.destinatario);
      hubsPrincipales.push(h);
    }
  }
  const delGrupoDest = hubsPorGrupo.get('destinatarios') || [];
  for (let i = 0; i < delGrupoDest.length; i++) {
    const h = delGrupoDest[i];
    if (!destVistos.has(h.destinatario)) {
      destVistos.add(h.destinatario);
      hubsPrincipales.push(h);
    }
  }

  function mensajesDe(slugHub: string): any[] {
    return mensajesPorCategoria.get(slugHub) || [];
  }

  function hubDe(registro: any): any {
    return registro.tipo === 'hub' ? registro : hubsPorSlug.get(registro.categoria);
  }

  function relacionadasDe(m: any, n: number = RELACIONADAS): any[] {
    const lista = mensajesDe(m.categoria);
    const i = lista.findIndex(function (x) { return x.slug === m.slug; });
    const out: any[] = [];
    for (let k = 1; k < lista.length && out.length < n; k++) out.push(lista[(i + k) % lista.length]);
    return out;
  }

  function hermanasDe(hub: any, n: number = HERMANAS): any[] {
    if (!hub) return hubs.slice(0, n);
    const delDest = (hubsPorDestinatario.get(hub.destinatario) || []).filter(function (h) { return h.slug !== hub.slug; });
    const delGrupo = (hubsPorGrupo.get(hub.grupo || 'destinatarios') || []).filter(function (h) { return h.slug !== hub.slug; });
    const vistos = new Set<string>([hub.slug]);
    const out: any[] = [];
    const candidatos = delDest.concat(delGrupo);
    for (let i = 0; i < candidatos.length && out.length < n; i++) {
      const h = candidatos[i];
      if (!vistos.has(h.slug)) {
        vistos.add(h.slug);
        out.push(h);
      }
    }
    const idx = hubs.findIndex(function (h) { return h.slug === hub.slug; });
    for (let k = 1; k < hubs.length && out.length < n; k++) {
      const h = hubs[(idx + k) % hubs.length];
      if (!vistos.has(h.slug)) {
        vistos.add(h.slug);
        out.push(h);
      }
    }
    return out;
  }

  return {
    contenido,
    hubs,
    todosMensajes,
    hubsPorSlug,
    mensajesPorCategoria,
    hubsPorGrupo,
    hubsPorDestinatario,
    hubsPrincipales,
    mensajesDe,
    hubDe,
    relacionadasDe,
    hermanasDe
  };
}

export function metaDe(texto: string, max: number = 155): string {
  const plano = texto.replace(/\s+/g, ' ').trim();
  if (plano.length <= max) return plano;
  const corte = plano.slice(0, max - 1);
  return corte.slice(0, corte.lastIndexOf(' ')).replace(/[,;:.]$/, '') + '…';
}

export function nombreHub(hub: any): string {
  const k = hub.keyword || hub.destinatario;
  return k.charAt(0).toUpperCase() + k.slice(1);
}

export function migasLd(items: { name: string; url: string }[]): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(function (it, i) { return { '@type': 'ListItem', position: i + 1, name: it.name, item: it.url }; })
  };
}

export function construirSetIndexables(todosMensajes: any[]): Set<string> {
  const indexables = new Set<string>();
  const cuerposVistos = new Set<string>();

  for (const m of todosMensajes) {
    const slug = String(m.slug || '').trim();
    const titulo = String(m.titulo || '').trim();
    const texto = String(m.texto || '').normalize('NFC').replace(/\s+/g, ' ').trim();
    const categoria = String(m.categoria || '').trim();
    const claveTexto = texto.toLocaleLowerCase('es');

    // La indexabilidad depende de señales editoriales básicas, no de un
    // mínimo arbitrario de palabras: contenido, título, categoría y unicidad.
    if (slug && titulo && texto && categoria && !cuerposVistos.has(claveTexto)) {
      cuerposVistos.add(claveTexto);
      indexables.add(slug);
    }
  }

  return indexables;
}

export function generarUrlsSitio(
  catalogo: ReturnType<typeof crearCatalogo>,
  slugsGuias: string[] = [],
  slugsSignos: string[] = [],
  slugsPaises: string[] = [],
  slugsTarot: string[] = []
): string[] {
  const urls: string[] = [
    `${SITIO}/`,
    `${SITIO}/calendario/`,
    `${SITIO}/hitos-historicos/`,
    `${SITIO}/categorias/`,
    `${SITIO}/herramientas/`,
    `${SITIO}/horoscopo/`,
    `${SITIO}/tarot-egipcio/`,
    `${SITIO}/guias/`,
    `${SITIO}/sobre-nosotros/`,
    `${SITIO}/contacto/`,
    `${SITIO}/privacidad/`,
    `${SITIO}/terminos-de-uso/`
  ];

  for (const slugPais of slugsPaises) {
    urls.push(`${SITIO}/hitos-historicos/${slugPais}/`);
  }

  for (const slugSigno of slugsSignos) {
    urls.push(`${SITIO}/horoscopo/${slugSigno}/`);
  }

  for (const slugArcano of slugsTarot) {
    urls.push(`${SITIO}/tarot-egipcio/${slugArcano}/`);
  }

  for (const slugGuia of slugsGuias) {
    urls.push(`${SITIO}/guias/${slugGuia}/`);
  }

  for (const h of catalogo.hubs) {
    urls.push(`${SITIO}/${h.slug}/`);
  }

  const indexables = construirSetIndexables(catalogo.todosMensajes);
  for (const m of catalogo.todosMensajes) {
    if (indexables.has(m.slug)) {
      urls.push(`${SITIO}/${m.slug}/`);
    }
  }

  for (const h of catalogo.hubs) {
    const total = Math.ceil(catalogo.mensajesDe(h.slug).length / POR_PAGINA);
    for (let p = 2; p <= total; p++) {
      urls.push(`${SITIO}/${h.slug}/${p}/`);
    }
  }

  return urls;
}

function escaparXml(valor: string): string {
  return valor
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function esFechaIsoValida(valor: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) return false;
  const fechaParseada = new Date(`${valor}T00:00:00.000Z`);
  return !Number.isNaN(fechaParseada.getTime()) && fechaParseada.toISOString().slice(0, 10) === valor;
}

export function construirMapaLastmodSitemap(
  catalogo: ReturnType<typeof crearCatalogo>,
  guias: { slug: string; fechaActualizacion?: string; fechaPublicacion?: string }[] = [],
  slugsSignos: string[] = [],
  slugsPaises: string[] = [],
  fechaBaseSitio: string = '2026-11-20',
  slugsTarot: string[] = []
): Record<string, string> {
  if (!esFechaIsoValida(fechaBaseSitio)) {
    throw new Error(`Fecha base lastmod inválida: ${fechaBaseSitio}`);
  }

  const mapa: Record<string, string> = {};
  const fechasGlobales: string[] = [fechaBaseSitio];

  for (const g of guias) {
    const f = g.fechaActualizacion || g.fechaPublicacion || fechaBaseSitio;
    const valida = esFechaIsoValida(f) ? f : fechaBaseSitio;
    mapa[`${SITIO}/guias/${g.slug}/`] = valida;
    fechasGlobales.push(valida);
  }

  const maxFechaHub = new Map<string, string>();
  for (const h of catalogo.hubs) {
    const fHub = esFechaIsoValida(String(h.actualizado || ''))
      ? String(h.actualizado)
      : esFechaIsoValida(String(h.creado || ''))
      ? String(h.creado)
      : fechaBaseSitio;
    let maxF = fHub;
    const msgs = catalogo.mensajesDe(h.slug);
    for (const m of msgs) {
      const fMsg = esFechaIsoValida(String(m.actualizado || ''))
        ? String(m.actualizado)
        : esFechaIsoValida(String(m.creado || ''))
        ? String(m.creado)
        : fHub;
      if (fMsg > maxF) maxF = fMsg;
    }
    maxFechaHub.set(h.slug, maxF);
    mapa[`${SITIO}/${h.slug}/`] = maxF;
    fechasGlobales.push(maxF);

    const totalPags = Math.ceil(msgs.length / POR_PAGINA);
    for (let p = 2; p <= totalPags; p++) {
      mapa[`${SITIO}/${h.slug}/${p}/`] = maxF;
    }
  }

  const indexables = construirSetIndexables(catalogo.todosMensajes);
  for (const m of catalogo.todosMensajes) {
    if (!indexables.has(m.slug)) continue;
    const fallbackHub = maxFechaHub.get(m.categoria) || fechaBaseSitio;
    const fMsg = esFechaIsoValida(String(m.actualizado || ''))
      ? String(m.actualizado)
      : esFechaIsoValida(String(m.creado || ''))
      ? String(m.creado)
      : fallbackHub;
    mapa[`${SITIO}/${m.slug}/`] = fMsg;
  }

  const fechaMasRecienteSitio = fechasGlobales.sort().slice(-1)[0] || fechaBaseSitio;

  for (const slugPais of slugsPaises) {
    mapa[`${SITIO}/hitos-historicos/${slugPais}/`] = fechaBaseSitio;
  }
  for (const slugSigno of slugsSignos) {
    mapa[`${SITIO}/horoscopo/${slugSigno}/`] = fechaBaseSitio;
  }
  for (const slugArcano of slugsTarot) {
    mapa[`${SITIO}/tarot-egipcio/${slugArcano}/`] = fechaBaseSitio;
  }

  const estaticas = [
    `${SITIO}/`,
    `${SITIO}/calendario/`,
    `${SITIO}/hitos-historicos/`,
    `${SITIO}/categorias/`,
    `${SITIO}/herramientas/`,
    `${SITIO}/horoscopo/`,
    `${SITIO}/tarot-egipcio/`,
    `${SITIO}/guias/`,
    `${SITIO}/sobre-nosotros/`,
    `${SITIO}/contacto/`,
    `${SITIO}/privacidad/`,
    `${SITIO}/terminos-de-uso/`
  ];
  for (const u of estaticas) {
    mapa[u] = fechaMasRecienteSitio;
  }

  return mapa;
}

export function generarSitemapXml(urls: string[], lastmod?: string | Record<string, string>): string {
  let fechaGlobal: string | undefined;
  let mapaFechas: Record<string, string> | undefined;

  if (typeof lastmod === 'string') {
    if (!esFechaIsoValida(lastmod)) {
      throw new Error(`Fecha lastmod inválida: ${lastmod}. Usá YYYY-MM-DD o no envíes lastmod.`);
    }
    fechaGlobal = lastmod;
  } else if (lastmod && typeof lastmod === 'object') {
    mapaFechas = lastmod;
  }

  const bloques = urls.map((u) => {
    const loc = `<loc>${escaparXml(u)}</loc>`;
    const fechaUrl = mapaFechas ? mapaFechas[u] : fechaGlobal;
    if (fechaUrl !== undefined && !esFechaIsoValida(fechaUrl)) {
      throw new Error(`Fecha lastmod inválida para ${u}: ${fechaUrl}. Usá YYYY-MM-DD.`);
    }
    const modificacion = fechaUrl ? `<lastmod>${escaparXml(fechaUrl)}</lastmod>` : '';
    return `  <url>${loc}${modificacion}</url>`;
  });

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    bloques.join('\n') +
    '\n</urlset>\n'
  );
}
