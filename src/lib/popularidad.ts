// Ranking de popularidad de guias y pool mixto popular para la portada.
// Combina pesos editoriales reales (clics Bing + consultas IA) con visitas/acciones locales del navegador.

import { clasificarMensaje, type SegmentoTono } from './editorial.ts';
import type { GuiaEditorial } from '../data/guias-tipos.ts';
import type { crearCatalogo } from './catalogo.ts';

export const BASE_POPULARIDAD_GUIAS: Record<string, number> = {
  'banderines-de-cumpleanos-para-imprimir-medidas-y-plantillas': 185,
  'invitaciones-y-postales-de-cumpleanos-para-imprimir-y-editar': 170,
  'tematicas-de-cumpleanos-ideas-originales-para-fiestas': 162,
  'como-escribir-una-carta-de-cumpleanos-que-emocione': 155,
  'como-escribir-condolencias-y-palabras-de-pesame-respetuosas': 148,
  'como-felicitar-por-whatsapp-sin-sonar-automatico': 142,
  'como-personalizar-tarjetas-y-dedicatorias-whatsapp': 136,
  'cumpleanos-de-15-anos-dedicatorias-y-reglas-del-festejo': 130,
  'que-regalar-segun-la-edad-guia-practica': 125,
  'como-celebrar-meses-de-novios-y-aniversarios-sin-caer-en-cliches': 122,
  'ideas-para-cumpleanos-de-18-anos-regalos-y-dedicatorias': 118,
  'como-escribir-una-carta-de-cumpleanos-a-tu-pareja': 114,
  'como-celebrar-cumpleanos-de-50-anos-homenajes-y-palabras': 110,
  'frases-de-cumpleanos-graciosas-sin-incomodar': 106,
  'como-felicitar-en-el-trabajo-jefe-companeros-clientes': 102,
  'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido': 98,
  'mensajes-de-cumpleanos-en-ingles-y-espanol-bilingues': 95,
  'como-escribir-frases-motivacionales-diarias-que-inspiren': 92
};

export const BASE_POPULARIDAD_CATEGORIAS: Record<string, number> = {
  'feliz-cumpleanos-amiga': 200,
  'feliz-cumpleanos-mama': 195,
  'feliz-cumpleanos-papa': 190,
  'feliz-cumpleanos-para-mi-esposo': 186,
  'feliz-cumpleanos-para-mi-esposa': 182,
  'feliz-cumpleanos-hermana': 178,
  'feliz-cumpleanos-para-un-hermano': 174,
  'banderines-de-cumpleanos-para-imprimir': 170,
  'condolencias': 168,
  'mas-de-10-anos-de-novios': 165,
  'feliz-cumpleanos-hija': 162,
  'feliz-cumpleanos-hijo': 158,
  'frases-tristes-para-recordar-momentos': 155,
  'feliz-aniversario-mi-amor': 152,
  'feliz-cumpleanos-gracioso': 149,
  'feliz-cumpleanos-cristiano': 146,
  'cartas-para-mi-madre': 144,
  'feliz-cumpleanos-a-distancia': 142,
  'feliz-cumpleanos-jefe': 138,
  'motivaciones': 136,
  'feliz-1-ano-de-novios': 134,
  'felices-6-meses-de-novios': 132,
  'frases-de-nostalgia-y-recuerdos': 130,
  'feliz-cumpleanos-15-anos': 128,
  'feliz-cumpleanos-50-anos': 126,
  'feliz-cumpleanos-abuela': 124,
  'feliz-cumpleanos-novia': 122,
  'feliz-cumpleanos-novio': 120,
  'feliz-cumpleanos-para-mi': 118,
  'feliz-dia-del-amigo': 116,
  'feliz-san-valentin': 114,
  'mensajes-cuando-extranas-a-alguien': 112,
  'carta-para-mi-hija': 110,
  'frases-para-invitacion-de-cumpleanos': 108,
  'poemas-para-mi-mama': 106,
  'feliz-cumpleanos-atrasado': 104
};

export interface GuiaRankeada extends GuiaEditorial {
  scorePopularidad: number;
}

export function rankearGuiasPorPopularidad(
  guias: GuiaEditorial[],
  visitasLocales: Record<string, number> = {}
): GuiaRankeada[] {
  return guias
    .map((g, idx) => {
      const base = BASE_POPULARIDAD_GUIAS[g.slug] ?? Math.max(40, 88 - idx);
      const visitas = Math.max(0, Number(visitasLocales[g.slug] || 0));
      return {
        ...g,
        scorePopularidad: base + visitas * 25
      };
    })
    .sort((a, b) => {
      if (b.scorePopularidad !== a.scorePopularidad) {
        return b.scorePopularidad - a.scorePopularidad;
      }
      return b.fechaActualizacion.localeCompare(a.fechaActualizacion);
    });
}

export interface ItemPopularMixto {
  mensaje: any;
  hub: any;
  scoreBase: number;
  segmentos: SegmentoTono[];
  claseTono: string;
  tonoLabel: string;
  canalLabel: string;
  palabras: number;
}

export function seleccionarPoolPopularMixto(
  catalogo: ReturnType<typeof crearCatalogo>,
  limite: number = 32
): ItemPopularMixto[] {
  const slugsOrdenados = Object.keys(BASE_POPULARIDAD_CATEGORIAS).sort(
    (a, b) => (BASE_POPULARIDAD_CATEGORIAS[b] || 0) - (BASE_POPULARIDAD_CATEGORIAS[a] || 0)
  );

  const items: ItemPopularMixto[] = [];
  const slugsUsados = new Set<string>();

  for (const slugHub of slugsOrdenados) {
    if (items.length >= limite) break;
    const hub = catalogo.hubsPorSlug.get(slugHub);
    if (!hub) continue;
    const lista = catalogo.mensajesDe(slugHub);
    if (!lista.length) continue;
    // Tomamos la publicacion mas reciente de cada categoria popular
    const m = lista[0];
    if (!m || slugsUsados.has(m.slug)) continue;
    slugsUsados.add(m.slug);
    const clasif = clasificarMensaje(m, hub);
    items.push({
      mensaje: m,
      hub,
      scoreBase: BASE_POPULARIDAD_CATEGORIAS[slugHub] || 100,
      segmentos: clasif.segmentos,
      claseTono: clasif.claseTono,
      tonoLabel: clasif.tonoLabel,
      canalLabel: clasif.canalLabel,
      palabras: clasif.palabras
    });
  }

  return items;
}
