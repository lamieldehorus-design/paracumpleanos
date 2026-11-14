// Carga contenido.json + todos los archivos de data/categorias/*.json
import base from '../../data/contenido.json';

const modulos = import.meta.glob('../../data/categorias/*.json', { eager: true });
let extras: any[] = [];
Object.values(modulos as any).forEach(function (m: any) {
  extras = extras.concat(m.default);
});

export const contenido: any[] = (base as any[]).concat(extras);

export const SITIO = 'https://paracumpleanos.com';
export const MARCA = 'ParaCumpleanos';

// Mensajes por pagina en los hubs (lo usan [slug].astro y [slug]/[pagina].astro)
export const POR_PAGINA = 12;
// Cantidad de mensajes relacionados en cada pagina de mensaje
export const RELACIONADAS = 8;
// Cantidad de categorias hermanas sugeridas
export const HERMANAS = 6;

export const hubs: any[] = contenido.filter(function (r) { return r.tipo === 'hub'; });

export function mensajesDe(slugHub: string): any[] {
  return contenido.filter(function (r) { return r.tipo === 'mensaje' && r.categoria === slugHub; });
}

export function hubDe(registro: any): any {
  return registro.tipo === 'hub' ? registro : hubs.find(function (h) { return h.slug === registro.categoria; });
}

// Relacionadas: los N mensajes que siguen al actual dentro de su categoria (en circulo),
// asi cada mensaje recibe enlaces de sus vecinos y ninguno queda huerfano.
export function relacionadasDe(m: any, n: number = RELACIONADAS): any[] {
  const lista = mensajesDe(m.categoria);
  const i = lista.findIndex(function (x) { return x.slug === m.slug; });
  const out: any[] = [];
  for (let k = 1; k < lista.length && out.length < n; k++) out.push(lista[(i + k) % lista.length]);
  return out;
}

// Categorias hermanas: las N siguientes en el listado (en circulo)
export function hermanasDe(hub: any, n: number = HERMANAS): any[] {
  const i = hubs.findIndex(function (h) { return h.slug === hub.slug; });
  const out: any[] = [];
  for (let k = 1; k < hubs.length && out.length < n; k++) out.push(hubs[(i + k) % hubs.length]);
  return out;
}

// Meta description de un mensaje: texto cortado en palabra completa, max 155 caracteres
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
