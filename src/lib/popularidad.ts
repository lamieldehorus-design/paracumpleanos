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
  'feliz-cumpleanos-en-otros-idiomas-ingles-italiano-frances-y-portugues': 94,
  'como-agradecer-los-mensajes-de-cumpleanos-por-whatsapp-y-redes': 93,
  'como-escribir-frases-motivacionales-diarias-que-inspiren': 92,
  'que-regalar-y-como-decorar-un-cumpleanos-con-presupuesto-inteligente': 91,
  'canciones-de-cumpleanos-las-mananitas-feliz-cumpleanos-y-tradiciones': 90,
  'cumpleanos-solo-o-en-momentos-dificiles-ideas-para-pasar-el-dia-con-calma': 89
};

export const BASE_POPULARIDAD_CATEGORIAS: Record<string, number> = {
  'feliz-cumpleanos-prima-dios-te-bendiga': 230,
  'feliz-cumpleanos-sobrina-dios-te-bendiga': 224,
  'cartas-para-mi-papa-que-lo-haga-llorar': 220,
  'frases-para-un-hijo-que-esta-lejos': 216,
  'feliz-cumpleanos-papa': 212,
  'feliz-cumpleanos-para-mi-esposa': 208,
  'feliz-cumpleanos-para-mi-esposo': 206,
  'feliz-cumpleanos-amigo-dios-te-bendiga': 204,
  'feliz-cumpleanos-amiga-dios-te-bendiga': 202,
  'palabras-de-agradecimiento-a-dios-por-mi-cumpleanos': 198,
  'feliz-cumpleanos-amiga': 196,
  'feliz-cumpleanos-mama': 194,
  'feliz-cumpleanos-mama-texto-largo': 192,
  'feliz-cumpleanos-abuelo': 190,
  'frases-para-un-hijo-de-2-anos': 188,
  'carta-para-mi-hermana-menor-que-la-haga-llorar': 186,
  'feliz-cumpleanos-hijo': 184,
  'feliz-cumpleanos-mi-amor': 182,
  'frases-para-un-primo-que-esta-lejos': 180,
  'feliz-cumpleanos-para-doctora': 178,
  'feliz-cumpleanos-hermana': 176,
  'feliz-cumpleanos-para-un-hermano': 174,
  'condolencias': 172,
  'mas-de-10-anos-de-novios': 170,
  'banderines-de-cumpleanos-para-imprimir': 168,
  'feliz-cumpleanos-hija': 166,
  'frases-para-mi-hija-de-5-anos': 164,
  'feliz-cumpleanos-cortos-y-bonitos': 162,
  'feliz-cumpleanos-amigo': 160,
  'frases-tristes-para-recordar-momentos': 158,
  'feliz-aniversario-mi-amor': 156,
  'feliz-cumpleanos-gracioso': 154,
  'feliz-cumpleanos-padrastro': 152,
  'carta-para-mi-hijo-de-3-anos': 150,
  'carta-para-mi-hijo-de-10-anos': 148,
  'feliz-cumpleanos-mi-princesa': 146,
  'carta-para-mi-prima-en-su-cumpleanos-que-la-haga-llorar': 144,
  'feliz-cumpleanos-cristiano': 142,
  'cartas-para-mi-madre': 140,
  'feliz-cumpleanos-a-distancia': 138,
  'feliz-cumpleanos-jefe': 136,
  'motivaciones': 134,
  'feliz-1-ano-de-novios': 132,
  'feliz-cumpleanos-15-anos': 128,
  'feliz-cumpleanos-50-anos': 126,
  'feliz-cumpleanos-abuela': 124,
  'feliz-cumpleanos-novia': 122,
  'feliz-cumpleanos-novio': 120,
  'feliz-cumpleanos-para-mi': 118
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
