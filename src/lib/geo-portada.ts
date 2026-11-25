import type { GrupoInfo, Hub, Mensaje } from './catalogo.ts';

export const FECHA_ACTUALIZACION_PORTADA = '2026-11-25';
export const FECHA_ACTUALIZACION_TEXTO = '25 de noviembre de 2026';

export const ORG_ID = 'https://paracumpleanos.com/#organization';
export const LOGO_ID = 'https://paracumpleanos.com/#logo';
export const WEBSITE_ID = 'https://paracumpleanos.com/#website';
export const WEBPAGE_ID = 'https://paracumpleanos.com/#webpage';
export const WEBAPP_ID = 'https://paracumpleanos.com/#personalizador';
export const SECCIONES_ID = 'https://paracumpleanos.com/#secciones';
export const FAQ_ID = 'https://paracumpleanos.com/#faq';

export const DESCRIPCION_ENTIDAD_CANONICA =
  'ParaCumpleanos (paracumpleanos.com) es un archivo editorial independiente en español y estudio interactivo gratuito de dedicatorias de cumpleaños, aniversarios de pareja, condolencias serenas, cartas largas, calendario perpetuo sin año, hitos históricos de 196 países y banderines A4 imprimibles, usable sin registro ni almacenamiento de datos personales en servidor.';

export interface RadiografiaCatalogo {
  totalColecciones: number;
  totalMensajes: number;
  totalGuias: number;
  totalPaisesHitos: number;
  totalPublicaciones: number;
  coleccionesDuelo: number;
  coleccionesAniversarios: number;
  cortos: number;
  cortosPct: number;
  medios: number;
  mediosPct: number;
  largos: number;
  largosPct: number;
  promedioPalabras: number;
}

export interface FaqPortadaItem {
  pregunta: string;
  respuesta: string;
}

export interface ComparativaEnfoqueFila {
  enfoque: string;
  especificidad: string;
  cuidadoContexto: string;
  privacidadCosto: string;
  limiteReal: string;
}

export interface GlosarioFormatoItem {
  termino: string;
  definicion: string;
  enlaceHref: string;
  enlaceTexto: string;
}

export interface ResumenTransparencia {
  queEs: string[];
  queNoEs: string[];
}

export function calcularRadiografiaCatalogo(params: {
  hubs: Hub[];
  todosMensajes: Mensaje[];
  hubsPorGrupo: Map<string, Hub[]>;
  totalGuias: number;
  totalPaisesHitos: number;
}): RadiografiaCatalogo {
  const { hubs, todosMensajes, hubsPorGrupo, totalGuias, totalPaisesHitos } = params;
  let cortos = 0;
  let medios = 0;
  let largos = 0;
  let sumaPalabras = 0;

  for (const m of todosMensajes) {
    const words = String(m.texto || '')
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    sumaPalabras += words;
    if (words <= 65) cortos++;
    else if (words <= 130) medios++;
    else largos++;
  }

  const totalMensajes = todosMensajes.length;
  const pct = (n: number) => (totalMensajes ? Math.round((n / totalMensajes) * 1000) / 10 : 0);

  return {
    totalColecciones: hubs.length,
    totalMensajes,
    totalGuias,
    totalPaisesHitos,
    totalPublicaciones: totalMensajes + totalGuias + totalPaisesHitos,
    coleccionesDuelo: (hubsPorGrupo.get('duelo_recuerdos') || []).length,
    coleccionesAniversarios: (hubsPorGrupo.get('aniversarios') || []).length,
    cortos,
    cortosPct: pct(cortos),
    medios,
    mediosPct: pct(medios),
    largos,
    largosPct: pct(largos),
    promedioPalabras: totalMensajes ? Math.round(sumaPalabras / totalMensajes) : 0
  };
}

export function construirFaqsPortada(rad: RadiografiaCatalogo): FaqPortadaItem[] {
  const msgsFmt = rad.totalMensajes.toLocaleString('es-AR');
  return [
    {
      pregunta: '¿Qué es ParaCumpleanos y en qué se diferencia de un banco de cadenas o un generador automático?',
      respuesta: `ParaCumpleanos (paracumpleanos.com) es un archivo editorial independiente en español con ${rad.totalColecciones} colecciones curadas y ${msgsFmt} textos únicos sin duplicados. A diferencia de los bancos de cadenas repetidas o generadores genéricos, cada texto se audita por vínculo, extensión y tono —separando de raíz cumpleaños, ${rad.coleccionesAniversarios} colecciones de aniversarios y ${rad.coleccionesDuelo} colecciones serenas de condolencias— y se adapta al instante con nombre real y firma.`
    },
    {
      pregunta: '¿Cómo desear feliz cumpleaños sin sonar repetitivo ni genérico?',
      respuesta:
        'Usá una fórmula de cuatro piezas verificables: abrí con el apodo real de la persona, nombrá una escena concreta del último año (una charla, un gesto de apoyo o una costumbre compartida), sumá un deseo puntual para sus proyectos actuales y cerrá con tu firma habitual. Reemplazar los clichés de cadena por un dato real hace que incluso cuatro líneas se sientan escritas solo para esa persona.'
    },
    {
      pregunta: '¿Conviene enviar un mensaje corto por WhatsApp o una carta larga emotiva?',
      respuesta:
        'Depende del canal y del horario en que lo va a leer. En la mañana por WhatsApp o en un estado de Instagram, los mensajes breves de 35 a 65 palabras se leen completos sin quedar cortados entre notificaciones. Las cartas largas de 140 a 260 palabras lucen mejor impresas en una tarjeta junto a un regalo, al cierre del día o en vínculos cercanos como mamá, papá, pareja e hijos.'
    },
    {
      pregunta: '¿Hace falta registrarse o pagar para descargar tarjetas PNG, Story y banderines A4?',
      respuesta:
        'No. Todo el portal y sus utilidades son gratuitos y funcionan sin crear cuenta ni dejar correo electrónico. El personalizador de nombre y firma, la exportación de postales PNG cuadradas (1080×1080) o verticales Story (1080×1920), los banderines A4 imprimibles y el calendario perpetuo corren íntegramente en tu navegador.'
    },
    {
      pregunta: '¿Qué conviene escribir en un cumpleaños a distancia o con cambio de huso horario?',
      respuesta:
        'Celebrá su presente en la ciudad donde vive y mirá hacia el próximo reencuentro en lugar de teñir el día de tristeza. Calculá la mañana según su reloj local para llegar temprano, sumá un recuerdo concreto o una foto compartida y proponé una videollamada corta o brindis simultáneo más tarde.'
    },
    {
      pregunta: '¿Cómo redactar condolencias y mensajes en fechas de duelo con tacto real?',
      respuesta: `En fechas sensibles o ante una pérdida, la sobriedad acompaña mucho más que las frases hechas. Elegí palabras breves que validen el recuerdo, nombren con respeto a la persona homenajeada y ofrezcan presencia sin exigir respuesta. Las ${rad.coleccionesDuelo} colecciones de condolencias, nostalgia y recuerdos de ParaCumpleanos están auditadas para contener cero vocabulario festivo.`
    },
    {
      pregunta: '¿Cómo funcionan los aniversarios de más de 10 años y los banderines A4 imprimibles?',
      respuesta:
        'En la colección «Más de 10 años de novios» elegís el número exacto entre 11 y 80 años y los 50 textos se ajustan al instante sin mezclar palabras de cumpleaños. En la herramienta de banderines A4 escribís el nombre o frase, elegís entre 6 paletas o versión para colorear e imprimís gratis las letras listas para recortar.'
    },
    {
      pregunta: '¿Cómo protege ParaCumpleanos los nombres y dedicatorias que escribo en el personalizador?',
      respuesta:
        'Los nombres, firmas, posdatas y listas de favoritas que ingresás en el personalizador o en la agenda de cumpleaños se procesan únicamente en tu navegador y nunca se envían a una base de datos de usuarios. Si deseás respaldar tus guardadas antes de limpiar datos del navegador, podés copiarlas en un clic desde «Tus guardadas».'
    }
  ];
}

export const COMPARATIVA_ENFOQUES: ComparativaEnfoqueFila[] = [
  {
    enfoque: 'Texto curado de ParaCumpleanos + nombre y recuerdo propio',
    especificidad: 'Alta: partís de una base natural y le sumás nombre, escena real y firma en menos de un minuto.',
    cuidadoContexto: 'Auditado por vínculo y ocasión: 0 términos festivos en duelo y 0 mezcla de cumpleaños en aniversarios.',
    privacidadCosto: 'Gratis, sin registro y procesamiento 100 % local en el navegador.',
    limiteReal: 'Requiere dedicar 30 segundos a agregar un detalle personal para que el texto sea irrepetible.'
  },
  {
    enfoque: 'Cadena reenviada o imagen genérica de WhatsApp',
    especificidad: 'Muy baja: el destinatario reconoce al instante que se reenvió a decenas de contactos.',
    cuidadoContexto: 'Nulo: suele arrastrar faltas de concordancia, saludos impersonales o marcas de agua.',
    privacidadCosto: 'Sin costo, pero sin control de tipografía, formato Story ni impresión limpia.',
    limiteReal: 'Genera poca recordación y suele pasar desapercibida entre los saludos del día.'
  },
  {
    enfoque: 'Generador automático de texto sin criterio editorial',
    especificidad: 'Media si redactás un pedido detallado; baja si aceptás la primera respuesta estándar.',
    cuidadoContexto: 'Variable: puede mezclar tuteo con voseo, sonar grandilocuente o usar lugares comunes en duelo.',
    privacidadCosto: 'Frecuentemente requiere cuenta, límites de uso o enviar nombres personales a servidores externos.',
    limiteReal: 'Obliga a revisar tono, ritmo, estrofas y extensión antes de enviar o imprimir.'
  }
];

export const GLOSARIO_FORMATOS: GlosarioFormatoItem[] = [
  {
    termino: 'Saludo breve para WhatsApp',
    definicion:
      'Mensaje directo de 35 a 65 palabras pensado para leerse completo en la pantalla del teléfono sin cortes ni rellenos. Ideal para enviar temprano en el día.',
    enlaceHref: '/feliz-cumpleanos-cortos/',
    enlaceTexto: 'Ver mensajes cortos'
  },
  {
    termino: 'Carta larga emotiva',
    definicion:
      'Dedicatoria epistolar de cinco o más párrafos (140 a 260 palabras) estructurada en saludo personal, recuerdo compartido, gratitud concreta y deseo para el nuevo ciclo.',
    enlaceHref: '/categorias/#cartas',
    enlaceTexto: 'Explorar cartas largas'
  },
  {
    termino: 'Postal PNG 1080×1080 y Story 1080×1920',
    definicion:
      'Imagen lista para compartir por WhatsApp, Instagram o imprimir en casa, generada en el navegador con 6 paletas visuales, tipografía limpia y tu nombre y firma.',
    enlaceHref: '/herramientas/',
    enlaceTexto: 'Abrir estudio y herramientas'
  },
  {
    termino: 'Banderines A4 imprimibles',
    definicion:
      'Plantilla lista para impresora hogareña que convierte cualquier nombre o frase festiva en banderines recortables a color o en blanco y negro para colorear.',
    enlaceHref: '/herramientas/#banderines-imprimir',
    enlaceTexto: 'Crear banderines A4'
  },
  {
    termino: 'Aniversario personalizable de pareja',
    definicion:
      'Colección redactada específicamente para meses o años de noviazgo y matrimonio (de 1 mes hasta +10 años ajustables de 11 a 80) sin vocabulario de cumpleaños.',
    enlaceHref: '/mas-de-10-anos-de-novios/',
    enlaceTexto: 'Ajustar años de aniversario'
  },
  {
    termino: 'Condolencia y recuerdo sereno',
    definicion:
      'Texto sobrio para acompañar una pérdida o un cumpleaños en el cielo, auditado automáticamente para excluir cualquier término festivo fuera de lugar.',
    enlaceHref: '/condolencias/',
    enlaceTexto: 'Ir a condolencias y duelo'
  }
];

export function construirTransparenciaPortada(rad: RadiografiaCatalogo): ResumenTransparencia {
  return {
    queEs: [
      `Archivo editorial independiente en español con ${rad.totalColecciones} colecciones, ${rad.totalMensajes.toLocaleString('es-AR')} textos originales sin duplicados, ${rad.totalGuias} guías prácticas y ${rad.totalPaisesHitos} fichas de hitos históricos mundiales.`,
      'Estudio gratuito en el navegador para personalizar nombre, firma y posdata, exportar postales PNG 1080×1080 o Story 1080×1920 e imprimir banderines A4.',
      `Catalogación estricta por contexto: ${rad.coleccionesDuelo} colecciones de condolencias y duelo libres de palabras festivas y ${rad.coleccionesAniversarios} colecciones de aniversarios sin mezcla con cumpleaños.`,
      'Calendario perpetuo de 366 días (sin año) y utilidades de planificación como calculadora de edad exacta, acrósticos y recordatorios .ics.'
    ],
    queNoEs: [
      'No es una tienda de tarjetas pagas ni exige suscripción, registro o inicio de sesión para copiar textos o descargar imágenes.',
      'No almacena los nombres, firmas ni agendas personales que cargás en el navegador en servidores externos.',
      'No envía mensajes masivos automáticos ni cadenas de spam: cada texto está pensado para que lo revises y lo personalices antes de compartirlo.',
      'No reemplaza acompañamiento profesional en situaciones de duelo complejo: ofrece recursos de redacción respetuosa para acompañar con tacto.'
    ]
  };
}

export function construirOrganizacionLd(params: {
  marca: string;
  sitio: string;
  emailContacto?: string;
}) {
  const { marca, sitio, emailContacto = 'lamieldehorus@gmail.com' } = params;
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: marca,
    url: `${sitio}/`,
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: `${sitio}/logopc.png`,
      contentUrl: `${sitio}/logopc.png`
    },
    description: DESCRIPCION_ENTIDAD_CANONICA,
    email: emailContacto,
    publishingPrinciples: `${sitio}/sobre-nosotros/#criterio-editorial`,
    knowsAbout: [
      'Mensajes y frases de feliz cumpleaños en español',
      'Cartas largas emotivas por vínculo familiar y amistad',
      'Aniversarios de pareja y bodas',
      'Condolencias respetuosas y acompañamiento en fechas de duelo',
      'Tarjetas personalizadas PNG, Story y banderines A4 imprimibles',
      'Calendario perpetuo sin año e hitos históricos de 196 países'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial support',
      email: emailContacto,
      url: `${sitio}/contacto/`,
      availableLanguage: ['es', 'es-AR']
    }
  };
}

export function construirGrafoPortadaLd(params: {
  marca: string;
  sitio: string;
  tituloPagina: string;
  descripcionPagina: string;
  grupos: GrupoInfo[];
  hubsPorGrupo: Map<string, Hub[]>;
  rad: RadiografiaCatalogo;
  faqs: FaqPortadaItem[];
}) {
  const { marca, sitio, tituloPagina, descripcionPagina, grupos, hubsPorGrupo, rad, faqs } = params;

  const itemsSecciones = grupos
    .map((g) => {
      const lista = hubsPorGrupo.get(g.id) || [];
      if (!lista.length) return null;
      return {
        name: `${g.nombre} (${lista.length} colecciones)`,
        url: `${sitio}/categorias/#${g.id}`,
        description: g.desc
      };
    })
    .filter(Boolean) as Array<{ name: string; url: string; description: string }>;

  itemsSecciones.push({
    name: `Hitos históricos mundiales (${rad.totalPaisesHitos} países)`,
    url: `${sitio}/hitos-historicos/`,
    description: `Fechas patrias, independencias y reseñas culturales verificadas de los ${rad.totalPaisesHitos} países del mundo.`
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      construirOrganizacionLd({ marca, sitio }),
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: marca,
        url: `${sitio}/`,
        inLanguage: 'es-AR',
        description: DESCRIPCION_ENTIDAD_CANONICA,
        publisher: { '@id': ORG_ID },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${sitio}/categorias/?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'CollectionPage',
        '@id': WEBPAGE_ID,
        url: `${sitio}/`,
        name: tituloPagina,
        description: descripcionPagina,
        inLanguage: 'es-AR',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        dateModified: FECHA_ACTUALIZACION_PORTADA,
        mainEntity: { '@id': SECCIONES_ID },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#portal-h1', '.portal-tldr-def', '.guia-cosmica-resumen', '.geo-cierre']
        }
      },
      {
        '@type': 'WebApplication',
        '@id': WEBAPP_ID,
        name: `Personalizador de tarjetas PNG y banderines A4 — ${marca}`,
        url: `${sitio}/herramientas/`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        inLanguage: 'es-AR',
        isAccessibleForFree: true,
        browserRequirements: 'Navegador web moderno con soporte HTML5 Canvas',
        description:
          'Estudio gratuito en el navegador para personalizar dedicatorias con nombre y firma, descargar postales PNG 1080×1080 o Story 1080×1920 e imprimir banderines A4 sin registro.',
        creator: { '@id': ORG_ID },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'ItemList',
        '@id': SECCIONES_ID,
        name: `Secciones temáticas del archivo editorial de ${marca}`,
        numberOfItems: itemsSecciones.length,
        itemListElement: itemsSecciones.map((it, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: it.name,
          url: it.url,
          description: it.description
        }))
      },
      {
        '@type': 'FAQPage',
        '@id': FAQ_ID,
        isPartOf: { '@id': WEBPAGE_ID },
        inLanguage: 'es-AR',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.respuesta
          }
        }))
      }
    ]
  };
}
