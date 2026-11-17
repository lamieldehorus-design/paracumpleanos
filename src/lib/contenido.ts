// Carga contenido.json + todos los archivos de data/categorias/*.json
import base from '../../data/contenido.json';
import {
  crearCatalogo,
  SITIO,
  MARCA,
  POR_PAGINA,
  RELACIONADAS,
  HERMANAS,
  GRUPOS,
  metaDe,
  nombreHub,
  migasLd,
  construirSetIndexables
} from './catalogo';

const modulos = import.meta.glob('../../data/categorias/*.json', { eager: true });
let extras: any[] = [];
Object.values(modulos as any).forEach(function (m: any) {
  extras = extras.concat(m.default);
});

const catalogo = crearCatalogo((base as any[]).concat(extras));

export const indexablesSet = construirSetIndexables(catalogo.todosMensajes);

export function esMensajeIndexable(registro: any): boolean {
  return Boolean(registro && registro.tipo === 'mensaje' && indexablesSet.has(registro.slug));
}

export const {
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
} = catalogo;

export {
  SITIO,
  MARCA,
  POR_PAGINA,
  RELACIONADAS,
  HERMANAS,
  GRUPOS,
  metaDe,
  nombreHub,
  migasLd,
};
