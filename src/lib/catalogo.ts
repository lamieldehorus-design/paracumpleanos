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
  { id: 'especiales', nombre: 'Ocasiones especiales', emoji: '✨' }
];

export function crearCatalogo(contenido: any[]) {
  const hubs: any[] = [];
  const todosMensajes: any[] = [];
  const hubsPorSlug = new Map<string, any>();
  const mensajesPorCategoria = new Map<string, any[]>();
  const hubsPorGrupo = new Map<string, any[]>();
  const hubsPorDestinatario = new Map<string, any[]>();

  for (let i = 0; i < contenido.length; i++) {
    const r = contenido[i];
    if (r.tipo === 'hub') {
      hubs.push(r);
      hubsPorSlug.set(r.slug, r);
      const g = r.grupo || 'destinatarios';
      if (!hubsPorGrupo.has(g)) hubsPorGrupo.set(g, []);
      hubsPorGrupo.get(g)!.push(r);
      const d = r.destinatario || '';
      if (!hubsPorDestinatario.has(d)) hubsPorDestinatario.set(d, []);
      hubsPorDestinatario.get(d)!.push(r);
    } else if (r.tipo === 'mensaje') {
      todosMensajes.push(r);
      if (!mensajesPorCategoria.has(r.categoria)) mensajesPorCategoria.set(r.categoria, []);
      mensajesPorCategoria.get(r.categoria)!.push(r);
    }
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
  const plano = texto.replace(/\\s+/g, ' ').trim();
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

export const MIN_PALABRAS_INDEXABLE = 140;

export function construirSetIndexables(todosMensajes: any[]): Set<string> {
  const indexables = new Set<string>();
  const cuerposVistos = new Set<string>();
  for (let i = 0; i < todosMensajes.length; i++) {
    const m = todosMensajes[i];
    const texto = String(m.texto || '').trim();
    const palabras = texto ? texto.split(/\\s+/).length : 0;
    if (palabras >= MIN_PALABRAS_INDEXABLE && !cuerposVistos.has(texto)) {
      cuerposVistos.add(texto);
      indexables.add(m.slug);
    }
  }
  return indexables;
}

export function generarUrlsSitio(
  catalogo: ReturnType<typeof crearCatalogo>,
  slugsGuias: string[] = []
): string[] {
  const urls: string[] = [
    `${SITIO}/`,
    `${SITIO}/categorias/`,
    `${SITIO}/guias/`,
    `${SITIO}/sobre-nosotros/`,
    `${SITIO}/contacto/`,
    `${SITIO}/privacidad/`,
    `${SITIO}/terminos-de-uso/`
  ];

  for (const slugGuia of slugsGuias) {
    urls.push(`${SITIO}/guias/${slugGuia}/`);
  }

  for (const h of catalogo.hubs) {
    urls.push(`${SITIO}/${h.slug}/`);
    const total = Math.ceil(catalogo.mensajesDe(h.slug).length / POR_PAGINA);
    for (let p = 2; p <= total; p++) {
      urls.push(`${SITIO}/${h.slug}/${p}/`);
    }
  }

  const indexables = construirSetIndexables(catalogo.todosMensajes);
  for (const m of catalogo.todosMensajes) {
    if (indexables.has(m.slug)) {
      urls.push(`${SITIO}/${m.slug}/`);
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

export function generarSitemapXml(urls: string[], lastmod?: string): string {
  let fecha: string | undefined;

  if (lastmod !== undefined) {
    const fechaParseada = new Date(`${lastmod}T00:00:00.000Z`);
    const fechaValida =
      /^\\d{4}-\\d{2}-\\d{2}$/.test(lastmod) &&
      !Number.isNaN(fechaParseada.getTime()) &&
      fechaParseada.toISOString().slice(0, 10) === lastmod;

    if (!fechaValida) {
      throw new Error(`Fecha lastmod inválida: ${lastmod}. Usá YYYY-MM-DD o no envíes lastmod.`);
    }

    fecha = lastmod;
  }

  const bloques = urls.map((u) => {
    const loc = `<loc>${escaparXml(u)}</loc>`;
    const modificacion = fecha ? `<lastmod>${escaparXml(fecha)}</lastmod>` : '';
    return `  <url>${loc}${modificacion}</url>`;
  });

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n' +
    bloques.join('\\n') +
    '\\n</urlset>\\n'
  );
}
