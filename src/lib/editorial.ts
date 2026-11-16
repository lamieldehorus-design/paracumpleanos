import { GUIAS_EDITORIALES, guiaPorSlug, type GuiaEditorial } from '../data/guias.ts';
import { nombreHub } from './catalogo.ts';

export type ClaseTono =
  | 'corto'
  | 'emotivo'
  | 'carta'
  | 'poema'
  | 'fe'
  | 'duelo'
  | 'divertido'
  | 'formal';

export interface ClasificacionMensaje {
  claseTono: ClaseTono;
  tonoLabel: string;
  canalLabel: string;
  palabras: number;
  tiempoLectura: string;
}

export interface FilaDecisionHub {
  formato: string;
  cantidad: number;
  idealPara: string;
  consejo: string;
}

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export interface EditorialHub {
  tabla: FilaDecisionHub[];
  subtituloClaves: string;
  claves: string[];
  citaClave: string;
  faqs: FaqItem[];
  guia: GuiaEditorial;
}

export interface GuiaAdaptacionMensaje {
  clasificacion: ClasificacionMensaje;
  citaDestacada: string;
  destinatarioNombre: string;
  ejemploGenerico: string;
  ejemploConcreto: string;
  mejorHorario: string;
  pasos: string[];
  guia: GuiaEditorial;
}

const REGEX_DUELO = /fallecid|hasta-el-cielo/;
const REGEX_ANIV = /(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/;
const REGEX_POEMA = /^poema|poesia|-poema/;

function contarPalabras(texto: string): number {
  const limpio = String(texto || '').trim();
  return limpio ? limpio.split(/\s+/).length : 0;
}

const DEST_GENERICOS = new Set([
  'general',
  'corto',
  'divertido',
  'formal',
  'whatsapp',
  'facebook',
  'bilingüe',
  'cristianos',
  'atrasado',
  'felicitaciones',
  'poemas',
  'cartas'
]);

function destNatural(hub?: any, msg?: any): { frase: string; vocativo: string } {
  const raw = String((hub && hub.destinatario) || (msg && msg.destinatario) || '').trim();
  const lower = raw.toLowerCase();
  if (!raw || DEST_GENERICOS.has(lower)) {
    return { frase: 'la persona que cumple', vocativo: '' };
  }
  if (lower === 'mamá en el cielo') return { frase: 'mamá', vocativo: 'mamá' };
  if (lower === 'papá en el cielo') return { frase: 'papá', vocativo: 'papá' };
  return { frase: raw, vocativo: raw };
}

export function clasificarMensaje(m: any, hub?: any): ClasificacionMensaje {
  const slugCat = String((hub && hub.slug) || m.categoria || '');
  const grupo = String((hub && hub.grupo) || '');
  const palabras = contarPalabras(m.texto || '');
  const seg = Math.max(15, Math.round((palabras / 180) * 60));
  const tiempoLectura = seg < 60 ? `${seg} seg de lectura` : '1 min de lectura';

  let claseTono: ClaseTono = 'emotivo';
  let tonoLabel = 'Emotivo y cercano';

  if (REGEX_DUELO.test(slugCat)) {
    claseTono = 'duelo';
    tonoLabel = 'Recuerdo sereno';
  } else if (REGEX_POEMA.test(slugCat)) {
    claseTono = 'poema';
    tonoLabel = 'En verso';
  } else if (grupo === 'cartas' || palabras >= 140) {
    claseTono = 'carta';
    tonoLabel = 'Carta extensa';
  } else if (grupo === 'cristiano') {
    claseTono = 'fe';
    tonoLabel = 'Con fe y bendición';
  } else if (/gracioso|humor|divertido|chist|risa/.test(slugCat)) {
    claseTono = 'divertido';
    tonoLabel = 'Con humor';
  } else if (
    grupo === 'profesionales' ||
    ['formal', 'doctor', 'doctora', 'jefe', 'jefa', 'profesor', 'profesora', 'maestra', 'pastor', 'sacerdote', 'ex-suegra'].includes(
      String((hub && hub.destinatario) || m.destinatario || '')
    )
  ) {
    claseTono = 'formal';
    tonoLabel = 'Cordial y formal';
  } else if (palabras <= 65) {
    claseTono = 'corto';
    tonoLabel = 'Breve y directo';
  }

  const canalLabel =
    palabras <= 65
      ? 'WhatsApp o estado'
      : palabras >= 120 || claseTono === 'carta' || claseTono === 'poema'
      ? 'Carta impresa o lectura larga'
      : 'WhatsApp o tarjeta';

  return {
    claseTono,
    tonoLabel,
    canalLabel,
    palabras,
    tiempoLectura
  };
}

export function extraerCitaDestacada(m: any): string {
  const limpio = String(m.texto || '').replace(/\s*\n+\s*/g, ' ').replace(/\s+/g, ' ').trim();
  const oraciones = limpio.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
  const ideal = oraciones.find((o) => o.length >= 45 && o.length <= 165);
  if (ideal) return ideal;
  const primera = oraciones[0] || limpio;
  return primera.length <= 165 ? primera : primera.slice(0, 162).replace(/\s+\S*$/, '') + '…';
}

export function guiaRelacionadaParaHub(hub: any): GuiaEditorial {
  const slug = String((hub && hub.slug) || '');
  const grupo = String((hub && hub.grupo) || '');

  let target = 'como-personalizar-tarjetas-y-dedicatorias-whatsapp';
  if (REGEX_DUELO.test(slug)) target = 'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido';
  else if (REGEX_ANIV.test(slug)) target = 'como-celebrar-meses-de-novios-y-aniversarios-sin-caer-en-cliches';
  else if (grupo === 'cartas' || slug === 'feliz-cumpleanos-abuelita-cartas-hermosas') {
    target = 'como-escribir-una-carta-de-cumpleanos-que-emocione';
  } else if (grupo === 'profesionales') target = 'como-felicitar-en-el-trabajo-jefe-companeros-clientes';
  else if (grupo === 'distancia') target = 'como-celebrar-un-cumpleanos-a-la-distancia';
  else if (grupo === 'cristiano') target = 'frases-de-fe-y-agradecimiento-para-cumpleanos-cristianos';
  else if (grupo === 'edades') target = 'que-regalar-segun-la-edad-guia-practica';
  else if (/atrasado/.test(slug)) target = 'etiqueta-digital-cuando-saludar-atrasado-o-por-redes';
  else if (/invitacion/.test(slug)) target = 'como-organizar-una-fiesta-sorpresa-sin-estres';

  return guiaPorSlug(target) || GUIAS_EDITORIALES[0];
}

export function editorialHubCompleto(hub: any, mensajes: any[]): EditorialHub {
  const clasificaciones = mensajes.map((m) => clasificarMensaje(m, hub));
  const cortos = clasificaciones.filter((c) => c.palabras <= 65).length;
  const medios = clasificaciones.filter((c) => c.palabras > 65 && c.palabras < 120).length;
  const largos = clasificaciones.filter((c) => c.palabras >= 120).length;
  const { frase: dest } = destNatural(hub);
  const slug = String(hub.slug || '');
  const nombre = nombreHub(hub);
  const esDuelo = REGEX_DUELO.test(slug);
  const esAniv = REGEX_ANIV.test(slug);

  const tabla: FilaDecisionHub[] = [
    {
      formato: 'Breves (hasta 65 palabras)',
      cantidad: cortos,
      idealPara: esDuelo ? 'Acompañar en silencio por mensaje directo' : 'Primer saludo de la mañana por WhatsApp o estado',
      consejo: `Abrí con el apodo real de ${dest} antes de pegar el texto.`
    },
    {
      formato: 'Intermedios (66 a 119 palabras)',
      cantidad: medios,
      idealPara: esDuelo ? 'Recordar una anécdota familiar con respeto' : 'Tarjeta junto a un regalo o dedicatoria personal',
      consejo: 'Sumá una escena concreta de este último año en el segundo párrafo.'
    },
    {
      formato: 'Extensos o cartas (120+ palabras)',
      cantidad: largos,
      idealPara: esAniv ? 'Nota íntima para celebrar su historia juntos' : 'Carta escrita a mano o lectura tranquila al final del día',
      consejo: 'Personalizá encabezado y firma arriba y descargá la tarjeta PNG.'
    }
  ];

  let subtituloClaves = `Qué suma y qué evitar al escribir ${nombre.toLowerCase()}`;
  let claves: string[];
  let citaClave: string;
  let faqs: FaqItem[];

  if (esDuelo) {
    subtituloClaves = `Criterios de respeto al dedicar ${nombre.toLowerCase()}`;
    claves = [
      'Nombrá una escena cotidiana real (un mate compartido, una enseñanza suya, una comida de casa) en vez de frases hechas.',
      'Evitá expresiones festivas que choquen con la fecha sensible y respetá la calma de la familia.',
      'Si escribís a un ser querido que extraña mucho ese día, ofrecé presencia real: escuchar o compartir un café sin apuro.'
    ];
    citaClave = 'Recordar con ternura a quien ya no está transforma parte de la nostalgia en gratitud viva.';
    faqs = [
      {
        pregunta: `¿Conviene enviar un mensaje largo o breve en "${nombre}"?`,
        respuesta:
          'Si acompañás a un familiar cercano en su duelo, un texto breve y cálido que ofrezca escucha o recuerde un rasgo concreto suele dar más consuelo que un discurso largo.'
      },
      {
        pregunta: '¿Qué conviene evitar en estas dedicatorias?',
        respuesta:
          'Conviene evitar clichés automáticos o expresiones festivas inadecuadas. En ParaCumpleanos filtramos todo este catálogo para mantener únicamente tono sereno y respetuoso.'
      },
      {
        pregunta: '¿Puedo agregar el nombre antes de copiar o guardar la tarjeta?',
        respuesta:
          'Sí. Usá el personalizador superior con el nombre y tu firma para actualizar al instante el texto, el botón de WhatsApp y la tarjeta descargable PNG.'
      }
    ];
  } else if (esAniv) {
    subtituloClaves = `Claves para que tu texto de ${nombre.toLowerCase()} suene auténtico`;
    claves = [
      'Cambiá adjetivos genéricos por algo propio de ustedes: ese viaje improvisado, la rutina del café o un chiste interno.',
      'Mantené el foco en el tiempo juntos, los aprendizajes en equipo y lo cotidiano que eligieron construir.',
      'Elegí extensión breve para sorprender temprano por chat o versión carta si la dejás junto a una foto impresa.'
    ];
    citaClave = 'Las relaciones reales se celebran mejor hablando de lo diario compartido que repitiendo promesas de película.';
    faqs = [
      {
        pregunta: `¿Cómo personalizo un mensaje de "${nombre}" sin que parezca copiado?`,
        respuesta:
          'Escribí el apodo de tu pareja y tu firma en el personalizador de arriba y sumá una referencia concreta de un momento vivido este último período.'
      },
      {
        pregunta: '¿Estas dedicatorias sirven tanto para meses juntos como para aniversario?',
        respuesta:
          'Sí. Todas las opciones de esta sección están pensadas exclusivamente para celebrar meses, años, bodas o historia en pareja.'
      },
      {
        pregunta: '¿Puedo descargar una tarjeta imagen para mandar por WhatsApp?',
        respuesta:
          'Sí, al abrir cualquiera de las 36 dedicatorias vas a encontrar el selector de 4 estilos visuales y el botón de descarga en formato PNG cuadrado 1080×1080.'
      }
    ];
  } else if (hub.grupo === 'profesionales') {
    subtituloClaves = `Etiqueta práctica para saludar a ${dest} con equilibrio`;
    claves = [
      'Respetá el mismo trato de todos los días (vos o usted): cambiar de registro de golpe suena artificial.',
      'Mantené el mensaje claro y cordial por correo o chat laboral sin invadir espacios privados ni meter promociones.',
      'Destacá una cualidad concreta de su trato diario o su vocación antes que frases exageradas.'
    ];
    citaClave = 'En el trabajo, la cordialidad medida y sincera deja mejor recuerdo que cualquier exageración.';
    faqs = [
      {
        pregunta: `¿Trato de vos o de usted al saludar a ${dest}?`,
        respuesta:
          'Seguí siempre el trato que usan a diario en el trabajo o la institución. En esta sección incluimos opciones formales y cordiales adaptables en el personalizador.'
      },
      {
        pregunta: '¿Cuál es el mejor canal y horario en el ámbito laboral?',
        respuesta:
          'Un mensaje breve a media mañana por correo, Slack/Teams o tarjeta firmada entre compañeros funciona mucho mejor que mandar audios largos fuera de horario.'
      },
      {
        pregunta: '¿Se pueden adaptar para firmar en nombre de todo un equipo?',
        respuesta:
          'Sí. Escribí por ejemplo "Todo el equipo" en el campo Tu firma arriba para que cada tarjeta salga lista para copiar.'
      }
    ];
  } else {
    claves = [
      `Arrancá con el apodo real de ${dest} en lugar de un saludo genérico: cambia al instante cómo se lee la primera línea.`,
      'Sumá una escena concreta compartida este año (una comida, una risa, una charla en auto) para multiplicar el impacto emocional.',
      'Elegí la extensión según el canal: menos de 65 palabras para WhatsApp rápido; formato carta o tarjeta PNG para acompañar un regalo.'
    ];
    citaClave = 'Una frase corta con un recuerdo real de ustedes vale diez veces más que un discurso largo lleno de lugares comunes.';
    faqs = [
      {
        pregunta: `¿Cuál es la mejor hora para enviar "${nombre}"?`,
        respuesta:
          'Si querés destacarte entre las notificaciones del mediodía, enviá el mensaje temprano con el desayuno o al caer la tarde cuando ya hay más calma para leerlo.'
      },
      {
        pregunta: '¿Cómo adapto estas felicitaciones para que suenen escritas por mí?',
        respuesta:
          'Completá "Nombre o apodo" y "Tu firma" en el personalizador superior: todos los botones de Copiar, WhatsApp y la tarjeta PNG se actualizan automáticamente.'
      },
      {
        pregunta: '¿Es mejor mandar texto por WhatsApp o descargar la tarjeta imagen?',
        respuesta:
          'El texto directo funciona bárbaro para iniciar conversación en chat; la tarjeta PNG (con 4 colores a elección) luce ideal en historias, estados o impresa con un regalo.'
      }
    ];
  }

  return {
    tabla,
    subtituloClaves,
    claves,
    citaClave,
    faqs,
    guia: guiaRelacionadaParaHub(hub)
  };
}

export function guiaAdaptacionMensaje(m: any, hub: any): GuiaAdaptacionMensaje {
  const clasificacion = clasificarMensaje(m, hub);
  const guia = guiaRelacionadaParaHub(hub);
  const slug = String((hub && hub.slug) || m.categoria || '');
  const { frase: dest, vocativo } = destNatural(hub, m);
  const vocComma = vocativo ? `, ${vocativo}` : '';
  const esDuelo = REGEX_DUELO.test(slug);
  const esAniv = REGEX_ANIV.test(slug);

  const ejemploGenerico = esDuelo
    ? 'Te mando un saludo en este día especial, muchas bendiciones para tu familia.'
    : esAniv
    ? 'Feliz aniversario, sos la mejor persona del mundo, te amo muchísimo.'
    : `Que pases un día hermoso y especial rodeado de amor, felicidades${vocComma}.`;

  const ejemploConcreto = esDuelo
    ? `Hoy volvimos a preparar los mates como te gustaba${vocComma}; tu ejemplo sigue cuidando nuestra casa.`
    : esAniv
    ? `Gracias por bancar las corridas de esta semana con tanta calma y por las cenas improvisadas del miércoles.`
    : `Por muchas más charlas sin mirar el reloj y esa paciencia enorme con la que siempre salvás la semana${vocComma}.`;

  const mejorHorario =
    clasificacion.claseTono === 'formal'
      ? 'A media mañana (entre las 9:00 y las 11:30 hs) por correo o chat de trabajo.'
      : clasificacion.claseTono === 'carta'
      ? 'Temprano antes del mediodía o a la noche, cuando pueda leer sin interrupciones.'
      : esDuelo
      ? 'Durante la mañana o tarde tranquila, respetando la intimidad del día.'
      : 'Al despertar con el desayuno o al cierre del día para una lectura sin ruido.';

  const pasos = esDuelo
    ? [
        `Escribí arriba cómo llamaban a ${dest} en casa y tu firma familiar.`,
        'Agregá si querés un recuerdo breve y concreto compartido en familia.',
        'Copiá el texto o descargá la tarjeta sobria en estilo Marfil o Celeste.'
      ]
    : [
        `Completá arriba el apodo de ${dest} y cómo firmás vos habitualmente.`,
        'Elegí si lo mandás directo por WhatsApp o si descargás la tarjeta PNG con tu estilo favorito.',
        'Antes de apretar enviar, sumale una posdata de 1 línea con un plan próximo o un café pendiente.'
      ];

  return {
    clasificacion,
    citaDestacada: extraerCitaDestacada(m),
    destinatarioNombre: nombreHub(hub),
    ejemploGenerico,
    ejemploConcreto,
    mejorHorario,
    pasos,
    guia
  };
}
