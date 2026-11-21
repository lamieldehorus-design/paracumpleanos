import type { ContinenteHito, PaisHitosHistoricos, TipoHitoHistorico } from '../hitos-types.ts';

export const NOMBRES_MESES_HITOS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

export interface RawHitoEntrada {
  titulo: string;
  mes: number;
  dia: number;
  tipo: TipoHitoHistorico;
  relatoBase: string;
  costumbres: string;
  dedicatoria?: string;
}

export interface RawPaisEntrada {
  slug: string;
  nombre: string;
  nombreOficial: string;
  bandera: string;
  continente: ContinenteHito;
  capital: string;
  gentilicio: string;
  hitos: [RawHitoEntrada, RawHitoEntrada];
}

function tituloTipo(tipo: TipoHitoHistorico): string {
  switch (tipo) {
    case 'independencia': return 'la proclamación de su independencia y soberanía nacional';
    case 'constitucion': return 'la consolidación de su marco constitucional y derechos ciudadanos';
    case 'unidad': return 'la unión territorial y cohesión institucional del país';
    case 'revolucion': return 'un cambio histórico de rumbo ciudadano y libertad pública';
    case 'liberacion': return 'el fin de una etapa de ocupación y la recuperación del autogobierno';
    case 'cultura': return 'el reconocimiento de su identidad cultural, memoria colectiva e historia común';
  }
}

export function construirPaisHito(raw: RawPaisEntrada): PaisHitosHistoricos {
  const h1 = raw.hitos[0];
  const h2 = raw.hitos[1];
  const fecha1 = `${h1.dia} de ${NOMBRES_MESES_HITOS[h1.mes - 1]}`;
  const fecha2 = `${h2.dia} de ${NOMBRES_MESES_HITOS[h2.mes - 1]}`;

  const hitosCompletos = raw.hitos.map((h, idx) => {
    const fechaTxt = `${h.dia} de ${NOMBRES_MESES_HITOS[h.mes - 1]}`;
    const explicacionHistorica =
      `Cada ${fechaTxt}, ${raw.nombre} recuerda ${h.titulo}, una jornada central dedicada a ${tituloTipo(h.tipo)}. ` +
      `${h.relatoBase} ` +
      `En las escuelas, municipios y plazas de ${raw.capital} y del resto del país, esta conmemoración sirve para repasar en familia de dónde vienen las libertades cotidianas, el idioma compartido y los símbolos patrios que identifican al pueblo ${raw.gentilicio}. ` +
      `Más allá de los actos protocolares, la fecha invita a valorar la convivencia democrática, el cuidado del patrimonio cultural y el trabajo de generaciones pasadas que hicieron posible el presente nacional.`;

    const tradicionPopular =
      `Durante el ${fechaTxt}, en ${raw.capital} y las regiones vecinas son habituales ${h.costumbres}. ` +
      `Muchas familias aprovechan la jornada para compartir platos típicos en casa y enviar saludos conmemorativos a compatriotas que viven dentro y fuera del territorio ${raw.gentilicio}.`;

    const mensajeConmemorativo =
      h.dedicatoria ||
      `En este ${fechaTxt}, celebramos con orgullo el ${h.titulo} de ${raw.nombre}. Honramos la memoria, el esfuerzo cotidiano y la identidad viva del pueblo ${raw.gentilicio}, deseando paz, encuentro familiar y progreso compartido en cada hogar de ${raw.capital} y del mundo.`;

    return {
      id: `${raw.slug}-${idx + 1}`,
      titulo: h.titulo,
      mes: h.mes,
      dia: h.dia,
      tipo: h.tipo,
      explicacionHistorica,
      tradicionPopular,
      mensajeConmemorativo
    };
  });

  const seoTitleBase = `Hitos históricos de ${raw.nombre}: qué se festeja (${fecha1}) | ParaCumpleanos`;
  const seoTitle = seoTitleBase.length <= 68
    ? seoTitleBase
    : `Hitos históricos de ${raw.nombre}: fechas patrias y qué se festeja`;

  const descripcion = `Descubrí las fechas patrias e hitos históricos de ${raw.nombre} (${fecha1} y ${fecha2}): qué se festeja ese día, tradiciones en ${raw.capital} y dedicatorias listas.`;

  const introHistoria =
    `El calendario cívico de ${raw.nombre} (${raw.nombreOficial}) gira principalmente alrededor de dos fechas muy significativas para la identidad ${raw.gentilicio}: el ${fecha1} (${h1.titulo}) y el ${fecha2} (${h2.titulo}). ` +
    `Comprender qué se festeja cada día permite acompañar con respeto y contexto real a amistades, colegas o familiares nacidos en ${raw.nombre}, y vincular su historia nacional con nuestro calendario perpetuo sin años.`;

  const faqs = [
    {
      pregunta: `¿Qué se festeja el ${fecha1} en ${raw.nombre}?`,
      respuesta: `El ${fecha1} se conmemora ${h1.titulo}, fecha dedicada a ${tituloTipo(h1.tipo)}. En ${raw.capital} y en todo el país se realizan actos escolares, ceremonias cívicas y reuniones familiares alrededor de las tradiciones de ${raw.nombre}.`
    },
    {
      pregunta: `¿Cuál es la otra fecha histórica destacada de ${raw.nombre}?`,
      respuesta: `Además del ${fecha1}, el calendario nacional destaca el ${fecha2} con motivo de ${h2.titulo}, jornada en la que suelen organizarse ${h2.costumbres}.`
    },
    {
      pregunta: `¿Puedo agendar o consultar estas fechas de ${raw.nombre} en el calendario del sitio?`,
      respuesta: `Sí. Todas las fechas de ${raw.nombre} aparecen automáticamente en nuestro Calendario Perpetuo por día y mes (sin mostrar años), junto con los cumpleaños, signos y fechas especiales que coinciden en el mismo día.`
    }
  ];

  return {
    slug: raw.slug,
    nombre: raw.nombre,
    nombreOficial: raw.nombreOficial,
    bandera: raw.bandera,
    continente: raw.continente,
    capital: raw.capital,
    gentilicio: raw.gentilicio,
    seoTitle,
    descripcion,
    introHistoria,
    hitos: hitosCompletos,
    faqs
  };
}
