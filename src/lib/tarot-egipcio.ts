import { ARCANOS_MAYORES, type ArcanoMayor } from '../data/tarot-egipcio-mayores.ts';
import { ARCANOS_MENORES, type ArcanoMenor } from '../data/tarot-egipcio-menores.ts';
import {
  ZODIACOS,
  MESES_CON_SIGNOS,
  resolverSignoPorDiaMes,
  type SignoZodiaco
} from './horoscopo.ts';
import { ORG_ID, WEBSITE_ID, FECHA_ACTUALIZACION_PORTADA } from './geo-portada.ts';

export { ARCANOS_MAYORES, ARCANOS_MENORES };
export type { ArcanoMayor, ArcanoMenor };

export interface CartaTarotUnificada {
  numero: number;
  romano?: string;
  slug?: string;
  nombre: string;
  tipo: 'mayor' | 'menor';
  astrologia: string;
  deidadOPlaneta: string;
  numerologia: number;
  derecho: string;
  invertido: string;
  consejo: string;
  aforismo?: string;
}

export const TODOS_LOS_ARCANOS: CartaTarotUnificada[] = [
  ...ARCANOS_MAYORES.map((a): CartaTarotUnificada => ({
    numero: a.numero,
    romano: a.romano,
    slug: a.slug,
    nombre: a.nombre,
    tipo: 'mayor',
    astrologia: a.astrologiaTexto,
    deidadOPlaneta: a.deidad,
    numerologia: a.numerologia,
    derecho: a.significadoDerecho,
    invertido: a.significadoInvertido,
    consejo: a.consejoCumpleanos,
    aforismo: a.aforismo
  })),
  ...ARCANOS_MENORES.map((m): CartaTarotUnificada => ({
    numero: m.numero,
    nombre: m.nombre,
    tipo: 'menor',
    astrologia: `${m.planeta} · ${m.notaPlanetaria}`,
    deidadOPlaneta: m.planeta,
    numerologia: m.numerologia,
    derecho: m.derecho,
    invertido: m.invertido,
    consejo: m.consejo
  }))
];

export interface PlanoArcanoInfo {
  id: 'espiritual' | 'mental' | 'fisico';
  nombre: string;
  zona: string;
  descripcion: string;
}

export const PLANOS_ARCANO: PlanoArcanoInfo[] = [
  {
    id: 'espiritual',
    nombre: 'Plano Superior (Espiritual)',
    zona: 'Parte superior de la lámina',
    descripcion:
      'Reúne los jeroglíficos, deidades, astros y coronas simbólicas. Representa el mundo de las causas, la intención profunda y el propósito que origina cada proceso.'
  },
  {
    id: 'mental',
    nombre: 'Plano Central (Mental)',
    zona: 'Escena principal de la lámina',
    descripcion:
      'Muestra la figura central, sus gestos, herramientas y equilibrio postural. Expresa las fuerzas creadoras de la mente, la actitud con la que decidís y cómo orientás tu voluntad.'
  },
  {
    id: 'fisico',
    nombre: 'Plano Inferior (Físico y Material)',
    zona: 'Basamento inferior de la lámina',
    descripcion:
      'Contiene animales sagrados, símbolos de tierra, números y signos planetarios. Traduce la energía del arcano en hechos tangibles: salud, trabajo, hogar y vínculos diarios.'
  }
];

export interface NumerologiaTarotItem {
  numero: number;
  titulo: string;
  significado: string;
}

export const NUMEROLOGIA_TAROT: NumerologiaTarotItem[] = [
  {
    numero: 1,
    titulo: 'Principio creador y voluntad',
    significado: 'Unidad, arranque consciente, iniciativa propia y chispa intelectual que abre un camino inédito.'
  },
  {
    numero: 2,
    titulo: 'Dualidad fértil y receptividad',
    significado: 'Escucha interior, intuición, acompañamiento afectivo y armonía entre dos polos complementarios.'
  },
  {
    numero: 3,
    titulo: 'Triplicidad y creación viva',
    significado: 'Expresión creativa, fertilidad de proyectos, alegría compartida y síntesis que da fruto.'
  },
  {
    numero: 4,
    titulo: 'Estabilidad y los cuatro elementos',
    significado: 'Estructura concreta, orden cotidiano, constancia en el trabajo y cimientos duraderos.'
  },
  {
    numero: 5,
    titulo: 'Espíritu consciente y cambio activo',
    significado: 'Libertad interior, aprendizaje, movimiento oportuno y discernimiento por encima de la rutina.'
  },
  {
    numero: 6,
    titulo: 'Equilibrio de fuerzas y afecto',
    significado: 'Amor responsable, belleza, acuerdos sanos, cuidado del hogar y elección desde el corazón.'
  },
  {
    numero: 7,
    titulo: 'Armonía mística y superación',
    significado: 'Reflexión profunda, maestría personal, viaje interior y victoria obtenida con serenidad.'
  },
  {
    numero: 8,
    titulo: 'Equilibrio cósmico y retribución',
    significado: 'Causa y efecto, justicia serena, disciplina recompensada y fuerza sostenida en el tiempo.'
  },
  {
    numero: 9,
    titulo: 'Madurez, fruto y cierre de ciclo',
    significado: 'Sabiduría destilada de la experiencia, gestación completa y cierre agradecido para renacer.'
  }
];

export type ModoTirada = 'carta-del-dia' | 'pasado-presente-futuro' | 'cuadrado-corazon' | 'respuesta-destino';

export interface PosicionTiradaDef {
  indice: number;
  etiqueta: string;
  guia: string;
  esRegente?: boolean;
}

export interface EsquemaTiradaDef {
  id: ModoTirada;
  nombre: string;
  referenciaTradicional: string;
  cantidadCartas: number;
  resumen: string;
  comoLeer: string;
  posiciones: PosicionTiradaDef[];
}

export const ESQUEMAS_TIRADA: EsquemaTiradaDef[] = [
  {
    id: 'carta-del-dia',
    nombre: 'Carta del Día o Consejo de Cumpleaños',
    referenciaTradicional: 'Lectura sintética de enfoque diario',
    cantidadCartas: 1,
    resumen: 'Una sola lámina para enfocar tu intención del día, inspirar una dedicatoria o recibir un consejo sereno.',
    comoLeer: 'Leé primero la esencia de la carta y luego su consejo práctico para aplicarlo hoy mismo sin sobrecargar la mente.',
    posiciones: [
      {
        indice: 1,
        etiqueta: 'Consejo central del momento',
        guia: 'Energía principal que conviene honrar hoy o regalar en una dedicatoria.',
        esRegente: true
      }
    ]
  },
  {
    id: 'pasado-presente-futuro',
    nombre: 'Pasado, Presente y Futuro',
    referenciaTradicional: 'Versión ágil del Esquema III',
    cantidadCartas: 3,
    resumen: 'Tres láminas que conectan lo que traés aprendido, la escena actual y la tendencia más fértil hacia adelante.',
    comoLeer: 'Observá cómo evoluciona el hilo entre las tres cartas: el presente siempre es el puente que transforma lo vivido en horizonte.',
    posiciones: [
      { indice: 1, etiqueta: '1 · Raíz del pasado', guia: 'Aprendizaje reciente o causa que explica dónde estás hoy.' },
      { indice: 2, etiqueta: '2 · Clave del presente', guia: 'Actitud central y recurso disponible en este momento.', esRegente: true },
      { indice: 3, etiqueta: '3 · Tendencia futura', guia: 'Camino probable si sostenés esta dirección con conciencia.' }
    ]
  },
  {
    id: 'cuadrado-corazon',
    nombre: 'Cuadrado del Corazón',
    referenciaTradicional: 'Sistema 2 tradicional (4 cartas + mentora)',
    cantidadCartas: 5,
    resumen: 'Cuatro láminas dedicadas a vínculos, afectos y reciprocidad, coronadas por una quinta carta mentora que resume la respuesta.',
    comoLeer: 'Revisá los cuatro ángulos del vínculo (cómo estás vos, qué aporta la otra persona, el lazo común y el cuidado necesario) y cerrá con la carta mentora.',
    posiciones: [
      { indice: 1, etiqueta: '1 · Tu corazón hoy', guia: 'Lo que sentís y ofrecés en este vínculo o etapa afectiva.' },
      { indice: 2, etiqueta: '2 · La otra mirada', guia: 'Energía del entorno o de la persona por la que consultás.' },
      { indice: 3, etiqueta: '3 · Puente que une', guia: 'Afinidad real y punto de encuentro que sostiene el afecto.' },
      { indice: 4, etiqueta: '4 · Cuidado necesario', guia: 'Desafío o detalle a cuidar con diálogo sereno.' },
      { indice: 5, etiqueta: '5 · Carta Mentora', guia: 'Síntesis orientadora del corazón para decidir con paz.', esRegente: true }
    ]
  },
  {
    id: 'respuesta-destino',
    nombre: 'La Respuesta del Destino',
    referenciaTradicional: 'Esquema I clásico (7 cartas con eje regente #4)',
    cantidadCartas: 7,
    resumen: 'La tirada emblema del Tarot Egipcio: siete cartas en fila donde la carta 4 actúa como regente y los pares extremos (1-7, 2-6, 3-5) dialogan entre sí.',
    comoLeer: 'Empezá observando la carta 4 (eje central), luego combiná los extremos 1 con 7 (origen y desenlace), 2 con 6 (recursos y obstáculos) y 3 con 5 (entorno y acción inmediata).',
    posiciones: [
      { indice: 1, etiqueta: '1 · Origen de la consulta', guia: 'Punto de partida real del tema que traés (dialoga con la 7).' },
      { indice: 2, etiqueta: '2 · Recurso a favor', guia: 'Fortaleza interna o apoyo disponible (dialoga con la 6).' },
      { indice: 3, etiqueta: '3 · Entorno inmediato', guia: 'Clima familiar, afectivo o laboral cercano (dialoga con la 5).' },
      { indice: 4, etiqueta: '4 · Carta Regente Central', guia: 'Corazón de la tirada: la clave maestra que ordena todo el cuadro.', esRegente: true },
      { indice: 5, etiqueta: '5 · Acción oportuna', guia: 'Paso concreto que conviene dar pronto (dialoga con la 3).' },
      { indice: 6, etiqueta: '6 · Prueba a superar', guia: 'Hábito o traba que pide atención serena (dialoga con la 2).' },
      { indice: 7, etiqueta: '7 · Síntesis y desenlace', guia: 'Fruto natural hacia el que tiende la consulta (dialoga con la 1).' }
    ]
  }
];

export const FAQS_TAROT_HUB = [
  {
    pregunta: '¿En qué se diferencia el Tarot Egipcio de otros mazos tradicionales?',
    respuesta:
      'El Tarot Egipcio reúne 78 láminas simbólicas divididas en 22 Arcanos Mayores y 56 Arcanos Menores completamente ilustrados e individuales, sin dividirse en los cuatro palos europeos clásicos. Además, cada carta organiza su lectura en tres planos claros: Espiritual (causas), Mental (actitud creadora) y Físico (hechos cotidianos).'
  },
  {
    pregunta: '¿Cómo se calcula el Arcano de cumpleaños o Arcano natal?',
    respuesta:
      'Sumás el día y el mes de nacimiento (y opcionalmente los dígitos del año) y reducís el resultado a un número entre 1 y 22. Si la suma supera 22, se suman nuevamente sus dígitos hasta obtener tu Arcano Mayor de referencia, que en ParaCumpleanos conectamos con tu signo zodiacal y tu mes de cumpleaños.'
  },
  {
    pregunta: '¿El Tarot Egipcio predice un destino fijo o sirve para reflexionar?',
    respuesta:
      'En el enfoque psicológico y reflexivo que seguimos en ParaCumpleanos, el Tarot Egipcio es una brújula de autoconocimiento y claridad personal, nunca un oráculo fatalista. Sus símbolos ayudan a ordenar pensamientos, mirar una situación desde otro ángulo y elegir con mayor serenidad.'
  },
  {
    pregunta: '¿Qué significa que una carta salga invertida en una tirada?',
    respuesta:
      'Una carta invertida no indica mala suerte inevitable: señala que la energía de ese arcano está en pausa, bloqueada por apuro o pidiendo una revisión interior antes de manifestarse con fluidez.'
  },
  {
    pregunta: '¿Cómo se vinculan los 22 Arcanos Mayores con el Horóscopo de cumpleaños?',
    respuesta:
      'Cada Arcano Mayor del Tarot Egipcio tiene una correspondencia astrológica clásica con planetas y signos del zodíaco —por ejemplo, El Mago con Sol en Leo, La Suma Sacerdotisa con Luna en Cáncer o La Esperanza con Libra—. Por eso cada ficha del Tarot enlaza directamente con su signo en /horoscopo/ y con sus meses de nacimiento.'
  },
  {
    pregunta: '¿Puedo usar las lecturas y dedicatorias del Tarot Egipcio gratis y sin registro?',
    respuesta:
      'Sí. Tanto el estudio interactivo de tiradas como la calculadora de Arcano natal, el archivo de los 78 arcanos y las dedicatorias personalizables con descarga PNG y Story funcionan 100 % gratis en tu navegador, sin crear cuenta ni enviar tus datos a ningún servidor.'
  }
];

export function reducirArcanoMayor(valor: number): number {
  let n = Math.abs(Math.trunc(valor));
  if (n === 0) return 22;
  while (n > 22) {
    let suma = 0;
    for (const dig of String(n)) suma += Number(dig);
    n = suma;
  }
  return n === 0 ? 22 : n;
}

export function reducirNumerologia(valor: number): number {
  let n = Math.abs(Math.trunc(valor));
  if (n === 0) return 9;
  while (n > 9) {
    let suma = 0;
    for (const dig of String(n)) suma += Number(dig);
    n = suma;
  }
  return n === 0 ? 9 : n;
}

export function obtenerArcanoMayorPorNumero(numero: number): ArcanoMayor {
  const idx = reducirArcanoMayor(numero) - 1;
  return ARCANOS_MAYORES[idx] || ARCANOS_MAYORES[0];
}

export function obtenerArcanoMayorPorSlug(slug: string): ArcanoMayor | undefined {
  return ARCANOS_MAYORES.find((a) => a.slug === slug);
}

export function arcanosPorSigno(signoSlug: string): ArcanoMayor[] {
  return ARCANOS_MAYORES.filter((a) => a.signosSlugs.includes(signoSlug));
}

export function signosPorArcano(arcano: ArcanoMayor): SignoZodiaco[] {
  return arcano.signosSlugs
    .map((slug) => ZODIACOS.find((z) => z.slug === slug))
    .filter((z): z is SignoZodiaco => Boolean(z));
}

export interface ResultadoArcanoCumpleanos {
  dia: number;
  mes: number;
  anio?: number;
  arcanoCumple: ArcanoMayor;
  arcanoNatal?: ArcanoMayor;
  numerologiaDiaMes: number;
  signo: SignoZodiaco;
  mesSlug: string;
  mesNombre: string;
  explicacion: string;
}

export function calcularArcanoCumpleanos(
  diaRaw: number,
  mesRaw: number,
  anioRaw?: number
): ResultadoArcanoCumpleanos {
  const mes = Math.max(1, Math.min(12, Math.trunc(Number(mesRaw) || 1)));
  const maxDias = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mes - 1];
  const dia = Math.max(1, Math.min(maxDias, Math.trunc(Number(diaRaw) || 1)));

  const sumaDiaMes = dia + mes;
  const arcanoCumple = obtenerArcanoMayorPorNumero(sumaDiaMes);
  const numerologiaDiaMes = reducirNumerologia(sumaDiaMes);
  const signo = resolverSignoPorDiaMes(mes, dia);
  const mesInfo = MESES_CON_SIGNOS[mes - 1];

  let anio: number | undefined;
  let arcanoNatal: ArcanoMayor | undefined;
  if (anioRaw !== undefined && Number.isFinite(Number(anioRaw))) {
    const a = Math.trunc(Number(anioRaw));
    if (a >= 1900 && a <= 2100) {
      anio = a;
      const sumaDigitosAnio = String(a)
        .split('')
        .reduce((acc, ch) => acc + Number(ch), 0);
      arcanoNatal = obtenerArcanoMayorPorNumero(dia + mes + sumaDigitosAnio);
    }
  }

  const explicacion = arcanoNatal
    ? `Tu fecha de cumpleaños (${dia} de ${mesInfo.nombre}) vibra con el Arcano ${arcanoCumple.romano} (${arcanoCumple.nombre}) y, al sumar tu año ${anio}, tu Arcano Natal completo es ${arcanoNatal.romano} (${arcanoNatal.nombre}).`
    : `Al sumar tu día y mes (${dia} + ${mes} = ${sumaDiaMes}), tu fecha de cumpleaños se corresponde con el Arcano ${arcanoCumple.romano} (${arcanoCumple.nombre}), bajo el signo solar de ${signo.nombre}.`;

  return {
    dia,
    mes,
    anio,
    arcanoCumple,
    arcanoNatal,
    numerologiaDiaMes,
    signo,
    mesSlug: mesInfo.slug,
    mesNombre: mesInfo.nombreCap,
    explicacion
  };
}

export interface CartaEnTirada {
  posicion: PosicionTiradaDef;
  carta: CartaTarotUnificada;
  invertida: boolean;
  lecturaActiva: string;
}

export interface ResultadoTiradaTarot {
  esquema: EsquemaTiradaDef;
  mazo: 'mayores' | 'completo';
  cartas: CartaEnTirada[];
  regente: CartaEnTirada;
  sintesisCompartible: string;
}

function crearPrngDeterminista(seed: number): () => number {
  let estado = (Math.trunc(seed) >>> 0) || 1;
  return () => {
    estado = (estado + 0x6d2b79f5) >>> 0;
    let t = Math.imul(estado ^ (estado >>> 15), 1 | estado);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generarTiradaTarot(
  modo: ModoTirada,
  mazo: 'mayores' | 'completo' = 'completo',
  incluirInvertidas: boolean = true,
  seed?: number
): ResultadoTiradaTarot {
  const esquema = ESQUEMAS_TIRADA.find((e) => e.id === modo) || ESQUEMAS_TIRADA[0];
  const basePool = mazo === 'mayores'
    ? TODOS_LOS_ARCANOS.filter((c) => c.tipo === 'mayor')
    : TODOS_LOS_ARCANOS;

  const rand = seed !== undefined ? crearPrngDeterminista(seed) : Math.random;
  const baraja = [...basePool];
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = baraja[i];
    baraja[i] = baraja[j];
    baraja[j] = tmp;
  }

  const seleccionadas = baraja.slice(0, esquema.cantidadCartas);
  const cartas: CartaEnTirada[] = esquema.posiciones.map((pos, idx) => {
    const carta = seleccionadas[idx];
    const invertida = incluirInvertidas ? rand() < 0.28 : false;
    return {
      posicion: pos,
      carta,
      invertida,
      lecturaActiva: invertida ? carta.invertido : carta.derecho
    };
  });

  const regente = cartas.find((c) => c.posicion.esRegente) || cartas[0];
  const lineas = cartas.map(
    (c) =>
      `• ${c.posicion.etiqueta}: ${c.carta.romano ? `${c.carta.romano} ` : `#${c.carta.numero} `}${c.carta.nombre}${c.invertida ? ' (Invertida)' : ''} — ${c.carta.consejo}`
  );
  const sintesisCompartible =
    `Tarot Egipcio (${esquema.nombre}) en ParaCumpleanos:\n` +
    lineas.join('\n') +
    `\n\nClave central: ${regente.carta.nombre} — ${regente.carta.consejo}\nhttps://paracumpleanos.com/tarot-egipcio/`;

  return {
    esquema,
    mazo,
    cartas,
    regente,
    sintesisCompartible
  };
}

export function construirGrafoTarotHubLd(params: {
  sitio: string;
  marca: string;
  titulo: string;
  descripcion: string;
}) {
  const { sitio, marca, titulo, descripcion } = params;
  const pageUrl = `${sitio}/tarot-egipcio/`;
  const pageId = `${pageUrl}#webpage`;
  const listId = `${pageUrl}#arcanos-mayores`;
  const appId = `${pageUrl}#tirada-interactiva`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${sitio}/` },
          { '@type': 'ListItem', position: 2, name: 'Tarot Egipcio', item: pageUrl }
        ]
      },
      {
        '@type': 'CollectionPage',
        '@id': pageId,
        url: pageUrl,
        name: titulo,
        description: descripcion,
        inLanguage: 'es-AR',
        isPartOf: { '@id': WEBSITE_ID },
        publisher: { '@id': ORG_ID },
        dateModified: FECHA_ACTUALIZACION_PORTADA,
        mainEntity: { '@id': listId }
      },
      {
        '@type': 'WebApplication',
        '@id': appId,
        name: `Tirada interactiva de Tarot Egipcio y calculadora de Arcano natal — ${marca}`,
        url: pageUrl,
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'All',
        isAccessibleForFree: true,
        inLanguage: 'es-AR',
        description:
          'Herramienta gratuita en el navegador para hacer tiradas de Tarot Egipcio (1, 3, 5 y 7 cartas con los 78 arcanos) y calcular tu Arcano de cumpleaños.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      },
      {
        '@type': 'ItemList',
        '@id': listId,
        name: 'Los 22 Arcanos Mayores del Tarot Egipcio',
        numberOfItems: ARCANOS_MAYORES.length,
        itemListElement: ARCANOS_MAYORES.map((a, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: `Arcano ${a.romano}: ${a.nombre}`,
          url: `${sitio}/tarot-egipcio/${a.slug}/`,
          description: a.esencia
        }))
      },
      {
        '@type': 'FAQPage',
        isPartOf: { '@id': pageId },
        inLanguage: 'es-AR',
        mainEntity: FAQS_TAROT_HUB.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: f.respuesta }
        }))
      }
    ]
  };
}

export function construirGrafoArcanoLd(params: {
  sitio: string;
  marca: string;
  arcano: ArcanoMayor;
  titulo: string;
  descripcion: string;
}) {
  const { sitio, marca, arcano, titulo, descripcion } = params;
  const pageUrl = `${sitio}/tarot-egipcio/${arcano.slug}/`;
  const pageId = `${pageUrl}#webpage`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${sitio}/` },
          { '@type': 'ListItem', position: 2, name: 'Tarot Egipcio', item: `${sitio}/tarot-egipcio/` },
          { '@type': 'ListItem', position: 3, name: `${arcano.romano} · ${arcano.nombre}`, item: pageUrl }
        ]
      },
      {
        '@type': 'Article',
        '@id': pageId,
        url: pageUrl,
        headline: titulo,
        description: descripcion,
        inLanguage: 'es-AR',
        dateModified: FECHA_ACTUALIZACION_PORTADA,
        author: { '@type': 'Organization', name: marca, url: `${sitio}/sobre-nosotros/` },
        publisher: { '@type': 'Organization', name: marca, url: `${sitio}/` }
      },
      {
        '@type': 'FAQPage',
        isPartOf: { '@id': pageId },
        inLanguage: 'es-AR',
        mainEntity: arcano.faqs.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: f.respuesta }
        }))
      }
    ]
  };
}
