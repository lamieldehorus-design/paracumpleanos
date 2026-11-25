// Motor estrategico de enlazado interno, prioridad de demanda GSC y FAQs orientadas a CTR
// para los ~120 hubs con mayor traccion e impresiones en Google Search Console.

import { nombreHub } from './catalogo.ts';

export type GscClusterId =
  | 'bendiciones'
  | 'papa'
  | 'pareja'
  | 'hijos_edades'
  | 'mama_hermana'
  | 'familia_cercana'
  | 'amistad'
  | 'formatos_especiales';

export interface HubPrioridadGsc {
  peso: number;
  cluster: GscClusterId;
  etiquetaCorta: string;
}

export const CLUSTERS_INFO: Record<GscClusterId, { titulo: string; emoji: string; textoContextual: string }> = {
  bendiciones: {
    titulo: 'Bendiciones y fe',
    emoji: '🙏',
    textoContextual: 'Más bendiciones y mensajes de cumpleaños con fe:'
  },
  papa: {
    titulo: 'Papá y familia',
    emoji: '👨‍👧',
    textoContextual: 'Más saludos, cartas emotivas y mensajes para papá:'
  },
  pareja: {
    titulo: 'Esposa, esposo y amor',
    emoji: '💞',
    textoContextual: 'Más dedicatorias románticas para tu pareja:'
  },
  hijos_edades: {
    titulo: 'Hijos, distancia y edades',
    emoji: '🎈',
    textoContextual: 'Más dedicatorias para hijos, hijas y edades especiales:'
  },
  mama_hermana: {
    titulo: 'Mamá y hermanas',
    emoji: '💐',
    textoContextual: 'Más mensajes y cartas largas para mamá y hermanas:'
  },
  familia_cercana: {
    titulo: 'Primos, abuelos y familia',
    emoji: '🏡',
    textoContextual: 'Más dedicatorias para familia cercana y extendida:'
  },
  amistad: {
    titulo: 'Amigos y mejores amigos',
    emoji: '🥂',
    textoContextual: 'Más saludos sinceros y cómplices de amistad:'
  },
  formatos_especiales: {
    titulo: 'Cortos, profesiones y ocasiones',
    emoji: '✨',
    textoContextual: 'Más colecciones muy buscadas para personalizar:'
  }
};

export const HUBS_PRIORITARIOS_GSC: Record<string, HubPrioridadGsc> = {
  // === 1. BENDICIONES Y FE (Mayor volumen de impresiones GSC) ===
  'feliz-cumpleanos-prima-dios-te-bendiga': { peso: 260, cluster: 'bendiciones', etiquetaCorta: 'Prima, Dios te bendiga' },
  'feliz-cumpleanos-sobrina-dios-te-bendiga': { peso: 252, cluster: 'bendiciones', etiquetaCorta: 'Sobrina, Dios te bendiga' },
  'feliz-cumpleanos-amigo-dios-te-bendiga': { peso: 244, cluster: 'bendiciones', etiquetaCorta: 'Amigo, Dios te bendiga' },
  'feliz-cumpleanos-amiga-dios-te-bendiga': { peso: 240, cluster: 'bendiciones', etiquetaCorta: 'Amiga, Dios te bendiga' },
  'palabras-de-agradecimiento-a-dios-por-mi-cumpleanos': { peso: 236, cluster: 'bendiciones', etiquetaCorta: 'Agradecimiento a Dios por mi cumpleaños' },
  'feliz-cumpleanos-hijo-dios-te-bendiga': { peso: 224, cluster: 'bendiciones', etiquetaCorta: 'Hijo, Dios te bendiga' },
  'feliz-cumpleanos-hermano-dios-te-bendiga': { peso: 220, cluster: 'bendiciones', etiquetaCorta: 'Hermano, Dios te bendiga' },
  'feliz-cumpleanos-hermana-dios-te-bendiga': { peso: 210, cluster: 'bendiciones', etiquetaCorta: 'Hermana, Dios te bendiga' },
  'feliz-cumpleanos-cristiano': { peso: 204, cluster: 'bendiciones', etiquetaCorta: 'Feliz cumpleaños cristiano' },
  'oracion-de-cumpleanos-cristiana': { peso: 192, cluster: 'bendiciones', etiquetaCorta: 'Oración de cumpleaños cristiana' },

  // === 2. PAPÁ Y PADRASTRO ===
  'cartas-para-mi-papa-que-lo-haga-llorar': { peso: 256, cluster: 'papa', etiquetaCorta: 'Palabras para mi papá que lo hagan llorar' },
  'feliz-cumpleanos-papa': { peso: 250, cluster: 'papa', etiquetaCorta: 'Feliz cumpleaños papá (frases)' },
  'cumpleanos-para-un-papa': { peso: 232, cluster: 'papa', etiquetaCorta: 'Saludos de cumpleaños para un padre' },
  'feliz-cumpleanos-padrastro': { peso: 216, cluster: 'papa', etiquetaCorta: 'Palabras para mi padrastro' },
  'frases-lindas-para-mi-padre-fallecido-que-esta-en-el-cielo': { peso: 186, cluster: 'papa', etiquetaCorta: 'Para un padre en el cielo' },
  'feliz-dia-del-padre': { peso: 176, cluster: 'papa', etiquetaCorta: 'Feliz Día del Padre' },

  // === 3. PAREJA: ESPOSA, ESPOSO, AMOR, NOVIOS ===
  'feliz-cumpleanos-para-mi-esposa': { peso: 248, cluster: 'pareja', etiquetaCorta: 'Feliz cumpleaños para mi esposa' },
  'feliz-cumpleanos-para-mi-esposo': { peso: 246, cluster: 'pareja', etiquetaCorta: 'Feliz cumpleaños para mi esposo' },
  'frases-para-mi-esposa': { peso: 234, cluster: 'pareja', etiquetaCorta: 'Frases románticas para mi esposa' },
  'frases-para-mi-esposo': { peso: 230, cluster: 'pareja', etiquetaCorta: 'Frases cortas para mi esposo' },
  'carta-de-feliz-cumpleanos-para-mi-esposo-que-lo-haga-llorar': { peso: 214, cluster: 'pareja', etiquetaCorta: 'Carta para mi esposo que lo haga llorar' },
  'feliz-cumpleanos-mi-amor': { peso: 228, cluster: 'pareja', etiquetaCorta: 'Feliz cumpleaños mi amor' },
  'frases-para-un-amor': { peso: 194, cluster: 'pareja', etiquetaCorta: 'Frases para un gran amor' },
  'frases-para-esposo-que-esta-lejos': { peso: 188, cluster: 'pareja', etiquetaCorta: 'Para esposo que está lejos' },
  'feliz-cumpleanos-novio': { peso: 198, cluster: 'pareja', etiquetaCorta: 'Feliz cumpleaños novio' },
  'mensajes-largos-para-mi-novio': { peso: 190, cluster: 'pareja', etiquetaCorta: 'Mensajes largos para mi novio' },
  'feliz-cumpleanos-novia': { peso: 196, cluster: 'pareja', etiquetaCorta: 'Feliz cumpleaños novia' },
  'feliz-aniversario-mi-amor': { peso: 184, cluster: 'pareja', etiquetaCorta: 'Feliz aniversario mi amor' },
  'mas-de-10-anos-de-novios': { peso: 182, cluster: 'pareja', etiquetaCorta: '+10 años de novios (personalizable)' },

  // === 4. HIJOS, DISTANCIA Y EDADES ===
  'frases-para-un-hijo-que-esta-lejos': { peso: 254, cluster: 'hijos_edades', etiquetaCorta: 'Mensajes para un hijo que está lejos' },
  'feliz-cumpleanos-hijo': { peso: 238, cluster: 'hijos_edades', etiquetaCorta: 'Feliz cumpleaños hijo' },
  'frases-para-un-hijo': { peso: 222, cluster: 'hijos_edades', etiquetaCorta: 'Frases cortas para un hijo' },
  'frases-para-un-hijo-de-2-anos': { peso: 226, cluster: 'hijos_edades', etiquetaCorta: 'Palabras para mi hijo de 2 años' },
  'carta-para-mi-hijo-de-3-anos': { peso: 218, cluster: 'hijos_edades', etiquetaCorta: 'Feliz 3 años hijo (cartas)' },
  'carta-para-hijo-de-4-anos': { peso: 212, cluster: 'hijos_edades', etiquetaCorta: 'Carta para mi hijo de 4 años' },
  'carta-para-mi-hijo-de-10-anos': { peso: 215, cluster: 'hijos_edades', etiquetaCorta: 'Carta para mi hijo de 10 años' },
  'frases-para-mi-hija-de-5-anos': { peso: 221, cluster: 'hijos_edades', etiquetaCorta: 'Dedicatoria para mi hija de 5 años' },
  'feliz-cumpleanos-mi-princesa': { peso: 223, cluster: 'hijos_edades', etiquetaCorta: 'Feliz cumpleaños mi princesa' },
  'feliz-cumpleanos-hija': { peso: 219, cluster: 'hijos_edades', etiquetaCorta: 'Feliz cumpleaños hija' },
  'frases-para-una-hija': { peso: 195, cluster: 'hijos_edades', etiquetaCorta: 'Frases cortas para una hija' },
  'carta-para-mi-hija': { peso: 187, cluster: 'hijos_edades', etiquetaCorta: 'Carta para mi hija' },
  'feliz-cumpleanos-para-un-hijo-de-1-ano': { peso: 189, cluster: 'hijos_edades', etiquetaCorta: 'Hijo de 1 año' },
  'frases-para-un-hijo-de-5-anos': { peso: 185, cluster: 'hijos_edades', etiquetaCorta: 'Hijo de 5 años' },
  'feliz-cumpleanos-para-hijo-de-12-anos': { peso: 181, cluster: 'hijos_edades', etiquetaCorta: 'Hijo de 12 años' },
  'feliz-cumpleanos-de-mama-a-hija': { peso: 183, cluster: 'hijos_edades', etiquetaCorta: 'De mamá a hija' },
  'feliz-cumpleanos-de-mama-a-hijo': { peso: 180, cluster: 'hijos_edades', etiquetaCorta: 'De mamá a hijo' },

  // === 5. MAMÁ Y HERMANAS ===
  'feliz-cumpleanos-mama-texto-largo': { peso: 235, cluster: 'mama_hermana', etiquetaCorta: 'Feliz cumpleaños mamá (texto largo)' },
  'feliz-cumpleanos-mama': { peso: 233, cluster: 'mama_hermana', etiquetaCorta: 'Feliz cumpleaños mamá (frases cortas)' },
  'frases-para-mama': { peso: 202, cluster: 'mama_hermana', etiquetaCorta: 'Dedicatorias para mamá' },
  'cartas-para-mi-madre': { peso: 200, cluster: 'mama_hermana', etiquetaCorta: 'Cartas para mi madre' },
  'feliz-cumpleanos-de-hija-para-mama': { peso: 179, cluster: 'mama_hermana', etiquetaCorta: 'De hija para mamá' },
  'poemas-para-mi-mama': { peso: 177, cluster: 'mama_hermana', etiquetaCorta: 'Poemas para mi mamá' },
  'felicitaciones-a-madre-fallecida': { peso: 175, cluster: 'mama_hermana', etiquetaCorta: 'Para madre fallecida' },
  'carta-para-mi-hermana-menor-que-la-haga-llorar': { peso: 229, cluster: 'mama_hermana', etiquetaCorta: 'Carta para mi hermana menor (llorar)' },
  'feliz-cumpleanos-hermana': { peso: 225, cluster: 'mama_hermana', etiquetaCorta: 'Feliz cumpleaños hermana' },
  'frases-para-una-hermana': { peso: 197, cluster: 'mama_hermana', etiquetaCorta: 'Frases cortas para una hermana' },
  'carta-para-mi-hermana-mayor': { peso: 193, cluster: 'mama_hermana', etiquetaCorta: 'Carta para mi hermana mayor' },
  'frases-para-una-hermana-fallecida-en-su-cumpleanos': { peso: 206, cluster: 'mama_hermana', etiquetaCorta: 'Para hermana fallecida' },
  'feliz-cumpleanos-para-un-hermano': { peso: 211, cluster: 'mama_hermana', etiquetaCorta: 'Feliz cumpleaños hermano' },

  // === 6. FAMILIA CERCANA Y EXTENDIDA (Primos, abuelos, sobrinos, tíos) ===
  'feliz-cumpleanos-abuelo': { peso: 237, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños abuelo' },
  'frases-para-un-primo-que-esta-lejos': { peso: 231, cluster: 'familia_cercana', etiquetaCorta: 'Primo desde la distancia' },
  'carta-para-mi-prima-en-su-cumpleanos-que-la-haga-llorar': { peso: 227, cluster: 'familia_cercana', etiquetaCorta: 'Carta para mi prima que la haga llorar' },
  'feliz-cumpleanos-abuelito': { peso: 208, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños abuelito' },
  'feliz-cumpleanos-abuela': { peso: 203, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños abuela' },
  'feliz-cumpleanos-abuelita-cartas-hermosas': { peso: 178, cluster: 'familia_cercana', etiquetaCorta: 'Cartas para abuelita' },
  'feliz-cumpleanos-primo': { peso: 213, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños primo' },
  'frases-para-un-primo': { peso: 199, cluster: 'familia_cercana', etiquetaCorta: 'Frases cortas para un primo' },
  'feliz-cumpleanos-primo-hermano': { peso: 174, cluster: 'familia_cercana', etiquetaCorta: 'Para primo hermano' },
  'feliz-cumpleanos-prima': { peso: 207, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños prima' },
  'feliz-cumpleanos-para-una-sobrina': { peso: 205, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños sobrina' },
  'feliz-cumpleanos-para-un-sobrino': { peso: 173, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños sobrino' },
  'feliz-cumpleanos-para-una-tia': { peso: 172, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños tía' },
  'frases-para-una-tia': { peso: 162, cluster: 'familia_cercana', etiquetaCorta: 'Frases cortas para una tía' },
  'feliz-cumpleanos-para-mi-tio': { peso: 171, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños tío' },
  'frases-para-un-tio': { peso: 161, cluster: 'familia_cercana', etiquetaCorta: 'Frases para un tío' },
  'feliz-cumpleanos-para-una-cunada': { peso: 170, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños cuñada' },
  'frases-para-una-cunada': { peso: 160, cluster: 'familia_cercana', etiquetaCorta: 'Frases para una cuñada' },
  'feliz-cumpleanos-para-un-cunado': { peso: 168, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños cuñado' },
  'feliz-cumpleanos-para-mi-nieto': { peso: 169, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños nieto' },
  'frases-para-un-nieto': { peso: 159, cluster: 'familia_cercana', etiquetaCorta: 'Frases para un nieto' },
  'feliz-cumpleanos-para-mi-nieta': { peso: 167, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños nieta' },
  'frases-para-mi-nieta': { peso: 158, cluster: 'familia_cercana', etiquetaCorta: 'Frases para mi nieta' },
  'feliz-cumpleanos-suegra': { peso: 166, cluster: 'familia_cercana', etiquetaCorta: 'Feliz cumpleaños suegra' },
  'frases-para-mi-suegra': { peso: 157, cluster: 'familia_cercana', etiquetaCorta: 'Frases para mi suegra' },

  // === 7. AMISTAD ===
  'feliz-cumpleanos-amigo': { peso: 229, cluster: 'amistad', etiquetaCorta: 'Frases para un amigo hombre' },
  'feliz-cumpleanos-amigo-hermano': { peso: 217, cluster: 'amistad', etiquetaCorta: 'Feliz cumpleaños amigo hermano' },
  'cumpleanos-para-un-amigo': { peso: 209, cluster: 'amistad', etiquetaCorta: 'Dedicatorias para amigos' },
  'frases-para-amigo': { peso: 191, cluster: 'amistad', etiquetaCorta: 'Frases para un buen amigo' },
  'feliz-cumpleanos-mejor-amigo': { peso: 189, cluster: 'amistad', etiquetaCorta: 'Feliz cumpleaños mejor amigo' },
  'frases-para-mi-mejor-amigo': { peso: 165, cluster: 'amistad', etiquetaCorta: 'Frases para mi mejor amigo' },
  'feliz-cumpleanos-amiga': { peso: 224, cluster: 'amistad', etiquetaCorta: 'Feliz cumpleaños amiga' },
  'frases-para-mi-amiga': { peso: 188, cluster: 'amistad', etiquetaCorta: 'Frases bonitas para mi amiga' },
  'feliz-cumpleanos-mejor-amiga': { peso: 190, cluster: 'amistad', etiquetaCorta: 'Feliz cumpleaños mejor amiga' },
  'frases-para-mi-mejor-amiga': { peso: 164, cluster: 'amistad', etiquetaCorta: 'Frases para mi mejor amiga' },
  'carta-para-una-amiga-que-la-haga-llorar': { peso: 186, cluster: 'amistad', etiquetaCorta: 'Carta para una amiga (llorar)' },

  // === 8. FORMATOS, PROFESIONES, EDADES CLAVE Y ESPECIALES ===
  'feliz-cumpleanos-para-doctora': { peso: 223, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños doctora' },
  'feliz-cumpleanos-cortos-y-bonitos': { peso: 221, cluster: 'formatos_especiales', etiquetaCorta: 'Mensajes cortos y bonitos' },
  'mensajes-cortos-de-cumpleanos': { peso: 196, cluster: 'formatos_especiales', etiquetaCorta: 'Frases cortas WhatsApp' },
  'felicitaciones-de-cumpleanos-originales': { peso: 185, cluster: 'formatos_especiales', etiquetaCorta: 'Felicitaciones originales' },
  'feliz-cumpleanos-a-distancia': { peso: 208, cluster: 'formatos_especiales', etiquetaCorta: 'Cumpleaños a la distancia' },
  'frases-para-alguien-especial-que-esta-lejos': { peso: 192, cluster: 'formatos_especiales', etiquetaCorta: 'Para alguien especial que está lejos' },
  'feliz-cumpleanos-gracioso': { peso: 184, cluster: 'formatos_especiales', etiquetaCorta: 'Cumpleaños gracioso' },
  'feliz-cumpleanos-alguien-especial': { peso: 183, cluster: 'formatos_especiales', etiquetaCorta: 'Para alguien especial' },
  'feliz-cumpleanos-mujer': { peso: 182, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños mujer' },
  'feliz-cumpleanos-para-una-nina': { peso: 179, cluster: 'formatos_especiales', etiquetaCorta: 'Para una niña' },
  'feliz-cumpleanos-nino': { peso: 178, cluster: 'formatos_especiales', etiquetaCorta: 'Para un niño' },
  'feliz-cumpleanos-15-anos': { peso: 187, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños 15 años' },
  'feliz-cumpleanos-18-anos': { peso: 181, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños 18 años' },
  'feliz-cumpleanos-20-anos': { peso: 180, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños 20 años' },
  'feliz-cumpleanos-20-anos-para-mi': { peso: 188, cluster: 'formatos_especiales', etiquetaCorta: 'Felices 20 años para mí' },
  'feliz-cumpleanos-30-anos': { peso: 182, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños 30 años' },
  'feliz-cumpleanos-30-anos-para-mi': { peso: 176, cluster: 'formatos_especiales', etiquetaCorta: 'Felices 30 años para mí' },
  'feliz-cumpleanos-50-anos': { peso: 183, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños 50 años' },
  'feliz-cumpleanos-para-mi': { peso: 191, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños para mí' },
  'frases-por-mi-cumpleanos': { peso: 175, cluster: 'formatos_especiales', etiquetaCorta: 'Frases por mi cumpleaños' },
  'agradecimiento-por-saludos-cumpleanos': { peso: 177, cluster: 'formatos_especiales', etiquetaCorta: 'Gracias por los saludos' },
  'feliz-cumpleanos-doctor': { peso: 174, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños doctor' },
  'feliz-cumpleanos-jefe': { peso: 176, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños jefe' },
  'feliz-cumpleanos-maestra': { peso: 173, cluster: 'formatos_especiales', etiquetaCorta: 'Feliz cumpleaños maestra' },
  'condolencias': { peso: 195, cluster: 'formatos_especiales', etiquetaCorta: 'Condolencias y pésame' },
  'banderines-de-cumpleanos-para-imprimir': { peso: 194, cluster: 'formatos_especiales', etiquetaCorta: 'Banderines A4 para imprimir' }
};

export interface BloquePortadaGsc {
  id: string;
  titulo: string;
  emoji: string;
  subtitulo: string;
  slugs: string[];
}

// 4 columnas editoriales en portada apuntando a los 24 hubs con mayor oportunidad inmediata de clics en GSC
export const BLOQUES_PORTADA_GSC: BloquePortadaGsc[] = [
  {
    id: 'bendiciones',
    titulo: 'Bendiciones y fe',
    emoji: '🙏',
    subtitulo: 'Mensajes cristianos con «Dios te bendiga» y gratitud',
    slugs: [
      'feliz-cumpleanos-prima-dios-te-bendiga',
      'feliz-cumpleanos-sobrina-dios-te-bendiga',
      'feliz-cumpleanos-amigo-dios-te-bendiga',
      'feliz-cumpleanos-amiga-dios-te-bendiga',
      'feliz-cumpleanos-hijo-dios-te-bendiga',
      'palabras-de-agradecimiento-a-dios-por-mi-cumpleanos'
    ]
  },
  {
    id: 'papa-familia',
    titulo: 'Papá, mamá y familia',
    emoji: '👨‍👧',
    subtitulo: 'Cartas que emocionan, abuelos, primos y hermanas',
    slugs: [
      'cartas-para-mi-papa-que-lo-haga-llorar',
      'feliz-cumpleanos-papa',
      'cumpleanos-para-un-papa',
      'feliz-cumpleanos-mama-texto-largo',
      'carta-para-mi-hermana-menor-que-la-haga-llorar',
      'feliz-cumpleanos-abuelo'
    ]
  },
  {
    id: 'pareja-amor',
    titulo: 'Esposa, esposo y pareja',
    emoji: '💞',
    subtitulo: 'Dedicatorias de amor, frases cortas y cartas largas',
    slugs: [
      'feliz-cumpleanos-para-mi-esposa',
      'feliz-cumpleanos-para-mi-esposo',
      'frases-para-mi-esposa',
      'frases-para-mi-esposo',
      'feliz-cumpleanos-mi-amor',
      'carta-de-feliz-cumpleanos-para-mi-esposo-que-lo-haga-llorar'
    ]
  },
  {
    id: 'hijos-distancia',
    titulo: 'Hijos, distancia y edades',
    emoji: '🎈',
    subtitulo: 'Abrazos lejos de casa, infancia y momentos clave',
    slugs: [
      'frases-para-un-hijo-que-esta-lejos',
      'feliz-cumpleanos-hijo',
      'frases-para-un-hijo-de-2-anos',
      'carta-para-mi-hijo-de-3-anos',
      'frases-para-mi-hija-de-5-anos',
      'frases-para-un-primo-que-esta-lejos'
    ]
  }
];

// 12 destinos prioritarios para el pie de pagina global (autoridad interna en todas las paginas)
export const TOP_FOOTER_GSC: { slug: string; label: string }[] = [
  { slug: 'feliz-cumpleanos-prima-dios-te-bendiga', label: 'Prima, Dios te bendiga' },
  { slug: 'feliz-cumpleanos-sobrina-dios-te-bendiga', label: 'Sobrina, Dios te bendiga' },
  { slug: 'cartas-para-mi-papa-que-lo-haga-llorar', label: 'Papá (cartas para llorar)' },
  { slug: 'feliz-cumpleanos-papa', label: 'Frases para papá' },
  { slug: 'frases-para-un-hijo-que-esta-lejos', label: 'Hijo que está lejos' },
  { slug: 'feliz-cumpleanos-para-mi-esposa', label: 'Feliz cumpleaños esposa' },
  { slug: 'feliz-cumpleanos-para-mi-esposo', label: 'Feliz cumpleaños esposo' },
  { slug: 'feliz-cumpleanos-amigo-dios-te-bendiga', label: 'Amigo, Dios te bendiga' },
  { slug: 'feliz-cumpleanos-amiga-dios-te-bendiga', label: 'Amiga, Dios te bendiga' },
  { slug: 'palabras-de-agradecimiento-a-dios-por-mi-cumpleanos', label: 'Agradecimiento a Dios' },
  { slug: 'carta-para-mi-hermana-menor-que-la-haga-llorar', label: 'Carta hermana menor' },
  { slug: 'feliz-cumpleanos-abuelo', label: 'Feliz cumpleaños abuelo' }
];

// Accesos directos del Hero en portada alineados con demanda real GSC + utilidades estrella
export const ACCESOS_RAPIDOS_PORTADA: { href: string; label: string }[] = [
  { href: '/feliz-cumpleanos-prima-dios-te-bendiga/', label: 'Prima, Dios te bendiga 🙏' },
  { href: '/feliz-cumpleanos-sobrina-dios-te-bendiga/', label: 'Sobrina, Dios te bendiga' },
  { href: '/cartas-para-mi-papa-que-lo-haga-llorar/', label: 'Papá (para llorar)' },
  { href: '/frases-para-un-hijo-que-esta-lejos/', label: 'Hijo que está lejos' },
  { href: '/feliz-cumpleanos-para-mi-esposa/', label: 'Esposa' },
  { href: '/feliz-cumpleanos-para-mi-esposo/', label: 'Esposo' },
  { href: '/frases-para-un-hijo-de-2-anos/', label: 'Hijo 2 años' },
  { href: '/palabras-de-agradecimiento-a-dios-por-mi-cumpleanos/', label: 'Gracias a Dios' },
  { href: '/feliz-cumpleanos-abuelo/', label: 'Abuelo' },
  { href: '/condolencias/', label: 'Condolencias 🕊️' }
];

export function pesoGscDe(slug: string): number {
  return HUBS_PRIORITARIOS_GSC[slug]?.peso || 0;
}

export function esHubPrioritarioGsc(slug: string): boolean {
  return Boolean(HUBS_PRIORITARIOS_GSC[slug]);
}

export function etiquetaCortaGsc(slug: string, fallbackHub?: any): string {
  return HUBS_PRIORITARIOS_GSC[slug]?.etiquetaCorta || (fallbackHub ? nombreHub(fallbackHub) : slug);
}

/**
 * Ordena una lista de hubs poniendo primero los hubs con mayor demanda en GSC,
 * preservando el orden original para el resto.
 */
export function ordenarHubsPorDemandaGsc<T extends { slug: string }>(lista: T[]): T[] {
  const indexMap = new Map<T, number>();
  for (let i = 0; i < lista.length; i++) indexMap.set(lista[i], i);
  return [...lista].sort((a, b) => {
    const pa = pesoGscDe(a.slug);
    const pb = pesoGscDe(b.slug);
    if (pb !== pa) return pb - pa;
    return (indexMap.get(a) ?? 0) - (indexMap.get(b) ?? 0);
  });
}

/**
 * Devuelve un bloque de enlaces contextuales de clúster para cualquier hub dentro de HUBS_PRIORITARIOS_GSC
 * (sin repetirse a sí mismo). Sirve como cobertura total para los ~120 hubs GSC.
 */
export function clusterGscDe(
  slug: string,
  hubsPorSlug: Map<string, any>,
  maxEnlaces: number = 3
): { texto: string; enlaces: { href: string; label: string }[] } | undefined {
  const info = HUBS_PRIORITARIOS_GSC[slug];
  if (!info) return undefined;

  const hermanosCluster = Object.entries(HUBS_PRIORITARIOS_GSC)
    .filter(([s, meta]) => s !== slug && meta.cluster === info.cluster && hubsPorSlug.has(s))
    .sort((a, b) => b[1].peso - a[1].peso);

  if (!hermanosCluster.length) return undefined;

  const seleccionados = hermanosCluster.slice(0, maxEnlaces).map(([s, meta]) => ({
    href: '/' + s + '/',
    label: meta.etiquetaCorta
  }));

  return {
    texto: CLUSTERS_INFO[info.cluster].textoContextual,
    enlaces: seleccionados
  };
}

/**
 * Mejora el enlazado interno de "Otras categorías que te pueden interesar" (Hermanas):
 * Prioriza:
 * 1) Hubs prioritarios GSC del mismo clúster temático (hasta 4)
 * 2) Hubs del mismo destinatario ordenados por demanda GSC
 * 3) Hubs del mismo grupo ordenados por demanda GSC
 * 4) Relleno con hubs GSC de alto impacto para asegurar siempre N enlaces únicos.
 */
export function enlacesHermanasInteligentes(
  hub: any,
  catalogo: {
    hubs: any[];
    hubsPorSlug: Map<string, any>;
    hubsPorGrupo: Map<string, any[]>;
    hubsPorDestinatario: Map<string, any[]>;
  },
  n: number = 8
): any[] {
  if (!hub) return ordenarHubsPorDemandaGsc(catalogo.hubs).slice(0, n);

  const vistos = new Set<string>([hub.slug]);
  const out: any[] = [];
  const agregar = (h: any) => {
    if (h && h.slug && !vistos.has(h.slug) && out.length < n) {
      vistos.add(h.slug);
      out.push(h);
    }
  };

  // 1. Clúster semántico GSC (máximo 4 para dejar espacio a diversidad de destinatario/grupo)
  const gscInfo = HUBS_PRIORITARIOS_GSC[hub.slug];
  if (gscInfo) {
    const mismosCluster = Object.entries(HUBS_PRIORITARIOS_GSC)
      .filter(([s, meta]) => s !== hub.slug && meta.cluster === gscInfo.cluster)
      .sort((a, b) => b[1].peso - a[1].peso)
      .map(([s]) => catalogo.hubsPorSlug.get(s))
      .filter(Boolean);
    for (const h of mismosCluster.slice(0, 4)) agregar(h);
  }

  // 2. Mismo destinatario priorizando demanda GSC
  const delDest = ordenarHubsPorDemandaGsc(
    (catalogo.hubsPorDestinatario.get(hub.destinatario) || []).filter((h) => h.slug !== hub.slug)
  );
  for (const h of delDest) agregar(h);

  // 3. Mismo grupo priorizando demanda GSC
  const delGrupo = ordenarHubsPorDemandaGsc(
    (catalogo.hubsPorGrupo.get(hub.grupo || 'destinatarios') || []).filter((h) => h.slug !== hub.slug)
  );
  for (const h of delGrupo) agregar(h);

  // 4. Relleno inteligente con hubs de mayor demanda GSC
  if (out.length < n) {
    const topGlobales = ordenarHubsPorDemandaGsc(catalogo.hubs);
    for (const h of topGlobales) {
      if (out.length >= n) break;
      agregar(h);
    }
  }

  return out;
}

export interface FaqGsc {
  pregunta: string;
  respuesta: string;
}

/**
 * Genera 3 FAQs específicas alineadas con consultas reales de Google Search Console
 * para los hubs prioritarios (alimentan tanto el acordeón visible como el JSON-LD FAQPage).
 * Respeta estrictamente el tono de duelo (sin palabras festivas) y aniversario (sin mencionar cumpleaños).
 */
export function faqsGscParaHub(hub: any, cantMensajes: number): FaqGsc[] | null {
  const slug = String(hub?.slug || '');
  if (!HUBS_PRIORITARIOS_GSC[slug]) return null;

  // No sobrescribir perfiles sensibles de duelo ni aniversarios con copias de cumpleaños
  if (/fallecid|condolencias|pesame|luctuoso|duelo|cielo|novios|aniversario|bodas-de-|banderines/.test(slug)) {
    return null;
  }

  const nombre = nombreHub(hub);

  if (slug.includes('dios-te-bendiga')) {
    const dest = String(hub.destinatario || 'ese ser querido').trim();
    return [
      {
        pregunta: `¿Qué escribir en un mensaje de "${nombre}" para que suene sincero?`,
        respuesta: `Nombrá primero a tu ${dest} con el apodo real que usan a diario, agradecé una cualidad concreta de su vida y cerrá pidiendo salud, paz y guía de Dios para su nuevo año.`
      },
      {
        pregunta: `¿Cuál es la mejor opción corta de "${nombre}" para WhatsApp o estados?`,
        respuesta: `En esta colección de ${cantMensajes} frases podés filtrar por «Breves WhatsApp» arriba de la grilla, escribir su nombre en el personalizador rápido y copiar el texto listo en un clic.`
      },
      {
        pregunta: `¿Puedo convertir una bendición de cumpleaños para mi ${dest} en tarjeta PNG?`,
        respuesta: `Sí. Al abrir cualquiera de las ${cantMensajes} opciones accedés al diseñador de tarjeta para elegir tonos sobrios o festivos, agregar tu firma y descargar gratis en formato cuadrado o Story vertical.`
      }
    ];
  }

  if (slug === 'palabras-de-agradecimiento-a-dios-por-mi-cumpleanos') {
    return [
      {
        pregunta: '¿Qué palabras cortas de agradecimiento a Dios sirven para estado de WhatsApp o Instagram?',
        respuesta: `Usá el filtro «Breves WhatsApp» o «Para estados / IG» en esta selección de ${cantMensajes} textos: encontrás oraciones de dos o tres líneas agradeciendo la vida, la salud y la familia sin sonar repetitivas.`
      },
      {
        pregunta: '¿Cómo escribir una carta de agradecimiento a Dios por mi cumpleaños?',
        respuesta: 'Repasá tres momentos concretos del año que termina (un aprendizaje, una prueba superada y una alegría), agradecé por quienes te acompañaron y pedí claridad y paz para la etapa que empieza.'
      },
      {
        pregunta: '¿Puedo personalizar estas oraciones con mi firma o edad y bajarlas como imagen?',
        respuesta: 'Sí. Abrí la frase elegida para sumar tu nombre o edad, elegir estilo visual Marfil o Celeste y descargar tu tarjeta PNG lista para publicar.'
      }
    ];
  }

  if (slug === 'cartas-para-mi-papa-que-lo-haga-llorar') {
    return [
      {
        pregunta: '¿Qué detalle hace que una carta de cumpleaños para papá lo emocione de verdad?',
        respuesta: 'Recordarle una escena cotidiana concreta —un consejo que te sirvió años después, un sacrificio silencioso o una charla de sobremesa— conmueve mucho más que repetir adjetivos genéricos.'
      },
      {
        pregunta: '¿Conviene enviarle una carta larga por WhatsApp o dársela escrita en papel?',
        respuesta: `Ambas funcionan muy bien: podés personalizar cualquiera de estas ${cantMensajes} cartas con su nombre arriba de la grilla para enviársela temprano por WhatsApp, o abrir su versión tarjeta PNG para imprimir.`
      },
      {
        pregunta: '¿Cómo adapto estas palabras si mi papá es de pocas palabras?',
        respuesta: 'Elegí un texto intermedio y directo, evitá rodeos solemnes y cerrá agradeciendo lo que aprendiste viéndolo trabajar y cuidar de la familia.'
      }
    ];
  }

  if (slug === 'feliz-cumpleanos-papa' || slug === 'cumpleanos-para-un-papa' || slug === 'feliz-cumpleanos-padrastro') {
    const esPadrastro = slug === 'feliz-cumpleanos-padrastro';
    return [
      {
        pregunta: esPadrastro
          ? '¿Cómo felicitar a mi padrastro en su cumpleaños con gratitud genuina?'
          : '¿Cómo desear feliz cumpleaños a mi papá sin caer en frases repetidas?',
        respuesta: esPadrastro
          ? 'Reconocé el valor de elegir estar presente cada día: nombrá un gesto concreto de apoyo o cariño y sumá su nombre en la barra de personalización rápida.'
          : `Para desear feliz cumpleaños a tu papá con impacto real, nombrá un rasgo concreto de su ejemplo diario —un consejo que todavía usás, su paciencia o una sobremesa compartida— antes de sumar tus deseos. Acá tenés ${cantMensajes} opciones filtrables por tono y largo.`
      },
      {
        pregunta: esPadrastro
          ? '¿Conviene un texto breve o una carta larga para un padrastro?'
          : '¿Cuál es la diferencia entre frases cortas y cartas largas de cumpleaños para papá?',
        respuesta: esPadrastro
          ? 'Si tienen trato cercano de años, una carta emotiva emociona muchísimo; si prefieren algo sobrio, elegí un mensaje breve y respetuoso para acompañar el regalo.'
          : 'Las frases cortas de 35 a 65 palabras funcionan mejor para el primer mensaje de WhatsApp a la mañana o una etiqueta de regalo; las cartas largas emocionan mucho más al leerlas en calma o en un cumpleaños redondo.'
      },
      {
        pregunta: '¿Puedo agregar el nombre de papá y mi firma antes de copiar o bajar la tarjeta?',
        respuesta: `Sí. Escribí su nombre o apodo en el personalizador rápido superior y las ${cantMensajes} dedicatorias, el envío directo a WhatsApp y la tarjeta PNG cuadrada o Story se actualizan en el momento.`
      }
    ];
  }

  if (slug === 'feliz-cumpleanos-mama' || slug === 'feliz-cumpleanos-mama-texto-largo' || slug === 'frases-para-mama') {
    const esLargo = slug === 'feliz-cumpleanos-mama-texto-largo';
    return [
      {
        pregunta: esLargo
          ? '¿Qué escribir en un texto largo de feliz cumpleaños para mi mamá que la emocione?'
          : '¿Qué frases de cumpleaños para mi mamá funcionan mejor para WhatsApp o tarjeta?',
        respuesta: esLargo
          ? 'Un texto largo para mamá conmueve cuando sigue tres pasos claros: agradecé un gesto cotidiano concreto suyo, contá qué aprendiste de su forma de cuidar y cerrá con un deseo de descanso y disfrute para este año.'
          : `Las frases de cumpleaños para mamá que más emocionan combinan gratitud específica por algo que hace todos los días con un saludo cálido y cercano. Entre las ${cantMensajes} opciones podés filtrar por breves para WhatsApp, emotivas o listas para tarjeta impresa.`
      },
      {
        pregunta: '¿Cuál es el mejor horario para enviar un saludo de cumpleaños a mamá?',
        respuesta: 'Enviá una frase breve apenas se despierta para arrancar su día con una sonrisa y reservá una carta larga, llamada tranquila o tarjeta impresa para el momento de verse o almorzar.'
      },
      {
        pregunta: '¿Cómo personalizo y descargo una tarjeta de cumpleaños para mi mamá gratis?',
        respuesta: `Escribí cómo la llamás («Mami», «Ma» o su nombre) y tu firma en el personalizador rápido superior para adaptar las ${cantMensajes} opciones al instante, y tocá «Tarjeta PNG / Story» en tu favorita.`
      }
    ];
  }

  if (
    slug === 'feliz-cumpleanos-para-mi-esposa' ||
    slug === 'frases-para-mi-esposa' ||
    slug === 'feliz-cumpleanos-para-mi-esposo' ||
    slug === 'frases-para-mi-esposo' ||
    slug === 'carta-de-feliz-cumpleanos-para-mi-esposo-que-lo-haga-llorar'
  ) {
    const esEsposa = slug.includes('esposa');
    return [
      {
        pregunta: esEsposa
          ? '¿Qué saludos de cumpleaños para una esposa suenan auténticos y románticos?'
          : '¿Qué palabras de feliz cumpleaños a mi esposo emocionan de verdad sin sonar copiadas?',
        respuesta: esEsposa
          ? `Para el cumpleaños de tu esposa, evitá clichés abstractos y nombrá una escena real que disfrutan juntos —el equipo que arman en casa, una risa compartida o cómo te acompaña en los días difíciles— usando su apodo real en cualquiera de estas ${cantMensajes} frases para esposa.`
          : `Las mejores palabras de feliz cumpleaños para tu esposo combinan admiración por su forma de ser, gratitud por lo cotidiano que construyen juntos y una nota de complicidad real. Podés adaptar estas ${cantMensajes} dedicatorias con su apodo en segundos.`
      },
      {
        pregunta: esEsposa
          ? '¿Conviene una frase corta de feliz cumpleaños esposa por WhatsApp o una carta larga?'
          : '¿Es mejor mandar un mensaje breve a la mañana o una carta larga a mi esposo?',
        respuesta: esEsposa
          ? 'La combinación que mejor resulta en el cumpleaños de mi esposa es una frase corta y cariñosa junto al desayuno o por WhatsApp temprano, y una carta extensa o tarjeta PNG impresa junto a la cena o el regalo.'
          : 'Mandá un saludo cálido y breve al comenzar el día para sorprenderlo antes de la rutina laboral, y guardá una carta emotiva o tarjeta visual personalizada para entregársela en mano a la noche.'
      },
      {
        pregunta: esEsposa
          ? '¿Cómo personalizo y descargo una tarjeta PNG de cumpleaños para mi esposa?'
          : '¿Cómo personalizo y descargo una tarjeta PNG de cumpleaños para mi esposo?',
        respuesta: `Escribí su nombre y tu firma en la barra superior para actualizar las ${cantMensajes} opciones al instante, y tocá «Tarjeta PNG / Story» en la que más te represente para descargarla gratis.`
      }
    ];
  }

  if (
    slug === 'feliz-cumpleanos-a-distancia' ||
    slug === 'frases-para-alguien-especial-que-esta-lejos' ||
    slug === 'frases-para-un-hijo-que-esta-lejos' ||
    slug === 'frases-para-un-primo-que-esta-lejos'
  ) {
    const esHijo = slug.includes('hijo');
    const esPrimo = slug.includes('primo');
    return [
      {
        pregunta: esHijo
          ? '¿Cómo felicitar a un hijo que está lejos sin hacerlo sentir triste?'
          : esPrimo
          ? '¿Qué decirle a un primo en su cumpleaños desde la distancia?'
          : '¿Qué escribir en un mensaje de cumpleaños para alguien que está lejos?',
        respuesta: esHijo
          ? 'Combiná el abrazo que extrañás darle con orgullo por el camino que está construyendo, y mencioná la próxima videollamada o reencuentro para cerrar el mensaje con esperanza.'
          : esPrimo
          ? 'Recordá una anécdota familiar divertida que los una, deseale un gran año en la ciudad donde esté y prometé el brindis pendiente apenas vuelvan a cruzarse.'
          : `Un buen mensaje de cumpleaños para alguien que está lejos equilibra el cariño sincero con energía luminosa: recordá una costumbre compartida, celebrá su presente en otra ciudad o país y proponé un brindis por videollamada o la próxima visita.`
      },
      {
        pregunta: '¿A qué hora conviene mandar un saludo de cumpleaños cuando hay diferencia horaria?',
        respuesta: 'Calculá el desayuno de su hora local para que tu saludo sea de los primeros que lea al empezar el día, y reservá un audio tranquilo o llamada breve para la tarde sin apuros.'
      },
      {
        pregunta: '¿Puedo enviar el texto personalizado a la distancia como tarjeta imagen por WhatsApp?',
        respuesta: `Sí. Escribí su nombre en la barra de personalización arriba de la grilla, elegí una de las ${cantMensajes} dedicatorias y descargala en tarjeta PNG cuadrada o Story vertical lista para compartir.`
      }
    ];
  }

  if (/hijo-de-\d+-ano|hija-de-5-anos/.test(slug)) {
    return [
      {
        pregunta: `¿Qué escribir en una dedicatoria de "${nombre}" para guardar en el álbum o redes?`,
        respuesta: 'Nombrá dos logros o ocurrencias propias de esta edad —su risa, su juego favorito o algo nuevo que aprendió este año— para que cuando crezca y vuelva a leerlo reviva exactamente esta etapa.'
      },
      {
        pregunta: '¿Sirven estos textos tanto para fotos de Instagram como para una carta guardada?',
        respuesta: `Sí. Entre las ${cantMensajes} opciones podés filtrar por «Para estados / IG» para pies de foto cortos o elegir «Cartas largas» si querés imprimirla y guardarla de recuerdo.`
      },
      {
        pregunta: '¿Puedo sumar el nombre de mi hijo o hija y bajar una tarjeta con foto?',
        respuesta: 'Sí. Al abrir cualquier dedicatoria podés subir una foto suya desde tu teléfono o computadora y descargar la tarjeta PNG lista para compartir con la familia.'
      }
    ];
  }

  if (
    slug === 'carta-para-mi-hermana-menor-que-la-haga-llorar' ||
    slug === 'carta-para-mi-prima-en-su-cumpleanos-que-la-haga-llorar' ||
    slug === 'carta-para-una-amiga-que-la-haga-llorar'
  ) {
    const vinculo = slug.includes('hermana') ? 'tu hermana' : slug.includes('prima') ? 'tu prima' : 'tu amiga';
    return [
      {
        pregunta: `¿Cómo lograr que una carta de cumpleaños para ${vinculo} la emocione hasta las lágrimas?`,
        respuesta: `Evitá listas genéricas de halagos y contá un recuerdo puntual en el que ${vinculo} estuvo para vos sin pedir nada a cambio, seguido de cuánto orgullo te da ver en quién se convirtió.`
      },
      {
        pregunta: `¿Puedo leer las ${cantMensajes} cartas completas antes de elegir cuál copiar?`,
        respuesta: 'Sí. Tocá «Leer completo ▾» en cualquier tarjeta para desplegar todos los párrafos sin salir de la página, o guardá tus favoritas con el botón ♡ para compararlas.'
      },
      {
        pregunta: '¿Se puede personalizar con su apodo real y descargar en formato Story o tarjeta?',
        respuesta: 'Sí. Al escribir su nombre arriba se actualizan todas las cartas en vivo y podés abrir la elegida para descargarla como imagen PNG o Story 1080×1920 gratis.'
      }
    ];
  }

  if (slug === 'feliz-cumpleanos-abuelo' || slug === 'feliz-cumpleanos-abuelito') {
    return [
      {
        pregunta: `¿Qué palabras emocionan más a un abuelo en su cumpleaños?`,
        respuesta: 'Agradecer sus historias, su paciencia y alguna enseñanza o costumbre compartida (mates, comidas, paseos o consejos) toca el corazón mucho más que una tarjeta formal.'
      },
      {
        pregunta: '¿Conviene imprimir la dedicatoria o mandarla por WhatsApp?',
        respuesta: `Si lo ves en persona, descargar una tarjeta PNG con letra clara para imprimir o escribir a mano le va a encantar; si está lejos, podés copiar cualquiera de estas ${cantMensajes} frases con su nombre y acompañarla con un audio.`
      },
      {
        pregunta: '¿Cómo adapto el texto si firmamos entre varios nietos?',
        respuesta: 'Escribí el nombre de tu abuelo arriba y en «Tu firma» poné por ejemplo «Tus nietos» para que todas las dedicatorias salgan listas para copiar o descargar.'
      }
    ];
  }

  if (slug === 'feliz-cumpleanos-para-doctora') {
    return [
      {
        pregunta: '¿Cómo felicitar a una doctora en su cumpleaños con respeto y calidez?',
        respuesta: 'Reconocé su vocación, empatía y esfuerzo diario sin reducir toda la dedicatoria al trabajo: deseale también tiempo de descanso, salud y momentos felices con los suyos.'
      },
      {
        pregunta: '¿Sirven estas frases tanto si es una médica conocida como una amiga o familiar?',
        respuesta: `Sí. En las ${cantMensajes} opciones tenés saludos formales (tratando de usted) ideales para pacientes o colegas, y mensajes cercanos para una amiga, hermana o hija doctora.`
      },
      {
        pregunta: '¿Puedo agregar «Dra.» y su nombre antes de copiar o descargar la tarjeta?',
        respuesta: 'Sí. Escribí por ejemplo «Dra. Sofía» en el personalizador rápido superior para adaptar al instante todos los mensajes y la postal descargable.'
      }
    ];
  }

  return null;
}
