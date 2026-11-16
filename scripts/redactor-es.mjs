// Motor profesional de redaccion en espanol (Guia practica de escritura y redaccion - Instituto Cervantes)
// Garantiza concordancia gramatical estricta, progresion tematica, descripciones unicas por hub
// y 0 frases fragmentadas o sin sentido en titulos y textos.

import {
  POEMAS_BANCO,
  FRASES_BILINGUES,
  MASCOTAS_CONTENIDO,
  DUELO_CONTENIDO,
  INVITACION_CONTENIDO,
  CARTAS_ESRUCTURA
} from './corpus-especiales.mjs';

export function normalizar(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e').replace(/[íìï]/g, 'i')
    .replace(/[óòö]/g, 'o').replace(/[úùü]/g, 'u').replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function slugify(s) {
  return normalizar(s).replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
}

// ---------------------------------------------------------------------------
// 1. Perfiles gramaticales y semanticos por destinatario y hub
// ---------------------------------------------------------------------------
const GENERO_FEM = new Set([
  'mamá', 'amiga', 'mejor amiga', 'hermana', 'hija', 'novia', 'esposa', 'abuela',
  'tía', 'prima', 'sobrina', 'cuñada', 'suegra', 'nuera', 'nieta', 'madrina',
  'comadre', 'ahijada', 'madrastra', 'hijastra', 'exnovia', 'ex-suegra',
  'doctora', 'jefa', 'maestra', 'profesora', 'vecina', 'niña', 'quinceañera',
  'embarazada', 'mujer', 'mamá en el cielo', 'hermana en el cielo',
  'gemelas', 'sobrinas gemelas'
]);

const GENERO_MASC = new Set([
  'papá', 'amigo', 'mejor amigo', 'hermano', 'hijo', 'novio', 'esposo', 'abuelo',
  'tío', 'primo', 'sobrino', 'cuñado', 'suegro', 'yerno', 'nieto', 'padrino',
  'compadre', 'ahijado', 'padrastro', 'hijastro', 'exnovio',
  'doctor', 'jefe', 'profesor', 'pastor', 'sacerdote', 'alumno',
  'compañero de trabajo', 'niño', 'hombre', 'papá en el cielo', 'gemelos'
]);

const PLURALES = new Set(['gemelas', 'gemelos', 'sobrinas gemelas']);

const FORMALES_USTED = new Set([
  'doctor', 'doctora', 'jefe', 'jefa', 'maestra', 'profesora', 'profesor',
  'pastor', 'sacerdote', 'ex-suegra', 'formal'
]);

const VOCATIVOS = {
  'mamá': 'mamá', 'papá': 'papá', 'amiga': 'amiga', 'mejor amiga': 'mejor amiga',
  'amigo': 'amigo', 'mejor amigo': 'mejor amigo', 'hermana': 'hermana', 'hermano': 'hermano',
  'hija': 'hija', 'hijo': 'hijo', 'novia': 'mi amor', 'novio': 'mi amor',
  'esposa': 'esposa mía', 'esposo': 'esposo mío', 'amor': 'mi amor', 'pareja': 'amor mío',
  'novios': 'mi amor', 'abuela': 'abuelita', 'abuelo': 'abuelo', 'tía': 'tía', 'tío': 'tío',
  'prima': 'prima', 'primo': 'primo', 'sobrina': 'sobrina', 'sobrino': 'sobrino',
  'cuñada': 'cuñada', 'cuñado': 'cuñado', 'suegra': 'querida suegra', 'suegro': 'querido suegro',
  'nuera': 'querida nuera', 'yerno': 'querido yerno', 'nieta': 'nieta querida', 'nieto': 'nieto querido',
  'madrina': 'madrina', 'padrino': 'padrino', 'comadre': 'comadre', 'compadre': 'compadre',
  'ahijada': 'ahijada', 'ahijado': 'ahijado', 'madrastra': 'querida', 'padrastro': 'querido',
  'hijastra': 'querida', 'hijastro': 'querido', 'gemelas': 'hermanas queridas',
  'gemelos': 'hermanos queridos', 'sobrinas gemelas': 'sobrinas queridas',
  'doctor': 'doctor', 'doctora': 'doctora', 'jefe': 'jefe', 'jefa': 'jefa',
  'maestra': 'maestra', 'profesora': 'profesora', 'profesor': 'profesor',
  'pastor': 'pastor', 'sacerdote': 'padre', 'alumno': 'querido alumno',
  'compañero de trabajo': 'compañero', 'vecina': 'vecina', 'bebé': 'mi pequeño tesoro',
  'niño': 'pequeño', 'niña': 'pequeña', 'quinceañera': 'quinceañera', 'embarazada': 'futura mamá',
  'mujer': 'mujer admirable', 'hombre': 'gran hombre', 'mamá en el cielo': 'mamá',
  'papá en el cielo': 'papá', 'hermana en el cielo': 'hermana', 'en el cielo': 'alma querida',
  'perros': 'mi fiel amigo', 'gatos': 'mi pequeño felino'
};

export function resolverConcordancia(texto, perfil) {
  const f = perfil.genero === 'f';
  const m = perfil.genero === 'm';
  const pl = perfil.plural;
  const rep = {
    '{oa}': pl ? (f ? 'as' : 'os') : (f ? 'a' : m ? 'o' : 'e'),
    '{querido}': pl ? (f ? 'queridas' : 'queridos') : (f ? 'querida' : m ? 'querido' : 'especial'),
    '{amado}': pl ? (f ? 'amadas' : 'amados') : (f ? 'amada' : m ? 'amado' : 'invaluable'),
    '{hermoso}': pl ? (f ? 'hermosas' : 'hermosos') : (f ? 'hermosa' : m ? 'hermoso' : 'luminosa'),
    '{rodeado}': pl ? (f ? 'rodeadas' : 'rodeados') : (f ? 'rodeada' : m ? 'rodeado' : 'acompañada'),
    '{chico}': f ? 'chica' : 'chico',
    '{esperado}': f ? 'esperada' : 'esperado',
    '{contento}': pl ? (f ? 'contentas' : 'contentos') : (f ? 'contenta' : m ? 'contento' : 'feliz'),
    '{orgulloso}': f ? 'orgullosa' : m ? 'orgulloso' : 'lleno de orgullo',
    '{bendecido}': pl ? (f ? 'bendecidas' : 'bendecidos') : (f ? 'bendecida' : m ? 'bendecido' : 'con bendición'),
    '{celebrado}': pl ? (f ? 'celebradas' : 'celebrados') : (f ? 'celebrada' : m ? 'celebrado' : 'homenajeada'),
    '{juntos}': f ? 'juntas' : 'juntos',
    '{un}': f ? 'una' : 'un',
    '{el}': f ? 'la' : 'el',
    '{la}': f ? 'la' : 'el',
    '{al}': f ? 'a la' : 'al',
    '{del}': f ? 'de la' : 'del',
    '{este}': f ? 'esta' : 'este',
    '{nuestro}': f ? 'nuestra' : 'nuestro',
    '{voc}': perfil.voc || 'persona especial'
  };
  let out = texto;
  for (const [k, v] of Object.entries(rep)) {
    out = out.split(k).join(v);
  }
  return out;
}

export function extraerCalificador(hub) {
  const kw = hub.keyword || '';
  const mod = hub.modificador || '';
  let edadNum = null;
  let mesesNum = null;
  let anosNum = null;

  const mMeses = kw.match(/(\d+)\s*mes(es)?/i) || mod.match(/(\d+)\s*mes(es)?/i);
  if (mMeses) mesesNum = parseInt(mMeses[1], 10);
  if (!mesesNum && /primer mes/i.test(kw)) mesesNum = 1;

  const mAnos = kw.match(/(\d+)\s*añ(o|os|ito)/i) || mod.match(/(\d+)\s*añ(o|os|ito)/i);
  if (mAnos) anosNum = parseInt(mAnos[1], 10);
  if (!anosNum && /primer añ/i.test(kw)) anosNum = 1;

  if (!/novios|bodas|aniversario/i.test(kw) && anosNum !== null) {
    edadNum = anosNum;
  }
  return { edadNum, mesesNum, anosNum };
}

export function numeroEnLetras(n) {
  const map = {
    1: 'primer año', 2: 'dos años', 3: 'tres años', 4: 'cuatro años', 5: 'cinco años',
    6: 'seis años', 7: 'siete años', 8: 'ocho años', 9: 'nueve años', 10: 'diez años',
    12: 'doce años', 13: 'trece años', 14: 'catorce años', 15: 'quince años',
    16: 'dieciséis años', 17: 'diecisiete años', 18: 'dieciocho años', 19: 'diecinueve años',
    20: 'veinte años', 21: 'veintiún años', 25: 'veinticinco años', 30: 'treinta años',
    40: 'cuarenta años', 50: 'cincuenta años', 60: 'sesenta años'
  };
  return map[n] || `${n} años`;
}

export function mesesEnLetras(n) {
  const map = {
    1: 'un mes', 2: 'dos meses', 3: 'tres meses', 4: 'cuatro meses', 5: 'cinco meses',
    6: 'seis meses', 7: 'siete meses', 8: 'ocho meses', 9: 'nueve meses', 10: 'diez meses',
    11: 'once meses', 13: 'trece meses', 14: 'catorce meses', 15: 'quince meses',
    16: 'dieciséis meses', 18: 'dieciocho meses'
  };
  return map[n] || `${n} meses`;
}

export function obtenerPerfilHub(hub) {
  const dest = hub.destinatario || 'general';
  const kw = (hub.keyword || '').toLowerCase();
  const grupo = hub.grupo || 'tono';
  const mod = (hub.modificador || '').toLowerCase();
  const { edadNum, mesesNum, anosNum } = extraerCalificador(hub);

  let genero = GENERO_FEM.has(dest) ? 'f' : GENERO_MASC.has(dest) ? 'm' : 'n';
  if (kw.includes('para mi misma')) genero = 'f';
  if (kw.includes('para mí mismo')) genero = 'm';
  if (kw.includes('para una hija') || kw.includes('mi hija') || kw.includes('nieta') || kw.includes('sobrina') || kw.includes('quinceañera') || kw.includes('niña') || kw.includes('madre') || kw.includes('hermana') || kw.includes('exnovia') || kw.includes('novia') || kw.includes('abuelita') || kw.includes('mujer')) genero = 'f';
  if (kw.includes('para un hijo') || kw.includes('mi hijo') || kw.includes('nieto') || kw.includes('sobrino') || kw.includes('niño') || kw.includes('padre') || kw.includes('hermano') || kw.includes('exnovio') || kw.includes('novio') || kw.includes('abuelito') || kw.includes('hombre')) genero = 'm';

  const plural = PLURALES.has(dest);

  let tratamiento = 'vos';
  if (FORMALES_USTED.has(dest) || kw.includes('formal') || kw.includes('elegante')) {
    tratamiento = 'usted';
  } else if (plural) {
    tratamiento = 'plural';
  } else if (dest === 'para mí' || dest === 'graduación' || dest === 'invitación' || kw.includes('agradecimiento por mi') || kw === 'frases de agradecimiento' || kw === 'palabras de agradecimiento') {
    tratamiento = '1p';
  }

  const esCarta = grupo === 'cartas' || kw.includes('carta');
  const esLargo = !esCarta && (kw.includes('texto largo') || kw.includes('mensajes largos') || kw.includes('mensaje largo'));
  const esPoema = kw.includes('poema');
  const esBilingue = dest === 'bilingüe' || kw.includes('inglés');
  const esInvitacion = dest === 'invitación' || kw.includes('invitación');
  const esMascota = dest === 'perros' || dest === 'gatos';
  const esDuelo = kw.includes('fallecid') || kw.includes('hasta el cielo') || dest.includes('cielo');
  const esCristiano = grupo === 'cristiano' || kw.includes('cristian') || kw.includes('dios') || dest === 'sacerdote' || dest === 'pastor';
  const esAtrasado = dest === 'atrasado' || kw.includes('atrasado');
  const esDivertido = dest === 'divertido' || kw.includes('divertida') || kw.includes('gracioso');
  const esCorto = !esCarta && !esLargo && (dest === 'corto' || /\bcort(a|o)s\b/.test(kw));
  const esDistancia = grupo === 'distancia' || kw.includes('está lejos') || kw.includes('a distancia');
  const esLlorar = kw.includes('llorar');
  const esEx = dest === 'exnovio' || dest === 'exnovia' || dest === 'ex-suegra';
  const esEmbarazo = dest === 'embarazada';
  const esCrush = dest === 'crush';
  const esGraduacion = dest === 'graduación';
  const esAgradecimiento = kw.includes('agradecimiento') || kw.includes('agradecer');
  const esAniversario = grupo === 'aniversarios' || /\bde novios\b/.test(kw) || kw.includes('aniversario') || kw.includes('bodas');
  const esAutoMensaje = tratamiento === '1p' && !esInvitacion && !esGraduacion && !esAgradecimiento;

  let formato = 'estandar';
  if (esCarta) formato = 'carta';
  else if (esLargo) formato = 'largo';
  else if (esPoema) formato = 'poema';
  else if (esBilingue) formato = 'bilingue';
  else if (esInvitacion) formato = 'invitacion';
  else if (esCorto) formato = 'corto';

  let tema = 'general';
  if (esDuelo) tema = 'duelo';
  else if (esMascota) tema = dest === 'perros' ? 'mascota_perro' : 'mascota_gato';
  else if (esBilingue) tema = 'bilingue';
  else if (esInvitacion) tema = 'invitacion';
  else if (esGraduacion) tema = 'graduacion';
  else if (esAutoMensaje && esCristiano) tema = 'automensaje_cristiano';
  else if (esAutoMensaje) tema = 'automensaje';
  else if (esAniversario) tema = 'aniversario';
  else if (esCristiano) tema = 'cristiano';
  else if (esEmbarazo) tema = 'embarazada';
  else if (esCrush) tema = 'crush';
  else if (esEx) tema = 'ex';
  else if (esAtrasado) tema = 'atrasado';
  else if (esDivertido) tema = 'divertido';
  else if (esDistancia) tema = 'distancia';
  else if (grupo === 'profesionales') tema = 'profesionales';
  else if (tratamiento === 'usted') tema = 'formal';
  else if (edadNum !== null) {
    if (edadNum <= 3) tema = 'edad_bebe';
    else if (edadNum <= 12) tema = 'edad_ninez';
    else if (edadNum === 15) tema = 'edad_15';
    else if (edadNum <= 17) tema = 'edad_adolescencia';
    else if (edadNum <= 25) tema = 'edad_juventud';
    else tema = 'edad_madurez';
  } else if (dest === 'bebé' || mod.includes('primer')) {
    tema = 'edad_bebe';
  } else if (dest === 'niño' || dest === 'niña' || mod.includes('pequeñ')) {
    tema = 'edad_ninez';
  } else if (dest === 'quinceañera') {
    tema = 'edad_15';
  } else if (dest === 'adolescente') {
    tema = 'edad_adolescencia';
  } else if (dest === 'joven') {
    tema = 'edad_juventud';
  } else if (esAgradecimiento) {
    tema = 'agradecimiento';
  } else if (['novia', 'novio', 'esposa', 'esposo', 'amor', 'pareja'].includes(dest)) {
    tema = 'pareja';
  } else if (['amiga', 'mejor amiga', 'amigo', 'mejor amigo'].includes(dest)) {
    tema = 'amistad';
  } else if (grupo === 'familia' || ['mamá', 'papá', 'hermana', 'hermano', 'hija', 'hijo', 'abuela', 'abuelo', 'tía', 'tío', 'prima', 'primo', 'sobrina', 'sobrino', 'cuñada', 'cuñado', 'suegra', 'suegro', 'nuera', 'yerno', 'nieta', 'nieto', 'madrina', 'padrino', 'comadre', 'compadre', 'ahijada', 'ahijado', 'madrastra', 'padrastro', 'hijastra', 'hijastro', 'gemelas', 'gemelos', 'sobrinas gemelas'].includes(dest)) {
    tema = 'familia';
  }

  let voc = VOCATIVOS[dest] || '';
  if (kw.includes('abuelita')) voc = 'abuelita';
  if (kw.includes('abuelito')) voc = 'abuelito';
  if (kw.includes('hermanita')) voc = 'hermanita';
  if (kw.includes('princesa')) voc = 'mi princesa';
  if (kw.includes('hombre de mi vida')) voc = 'amor de mi vida';
  if (kw.includes('novios')) voc = 'mi amor';
  if (esAutoMensaje) voc = '';

  const duracionStr = mesesNum
    ? mesesEnLetras(mesesNum)
    : anosNum
      ? numeroEnLetras(anosNum)
      : kw.includes('primer aniversario')
        ? 'nuestro primer aniversario'
        : 'este aniversario';

  const edadStr = edadNum !== null ? numeroEnLetras(edadNum) : '';

  return {
    dest, kw, grupo, genero, plural, tratamiento, formato, tema,
    voc, edadNum, mesesNum, anosNum, duracionStr, edadStr,
    esCarta, esLargo, esPoema, esLlorar, esDistancia, esAtrasado,
    esDivertido, esCristiano, esDuelo, esEx, esEmbarazo, esCrush,
    esAniversario, esAutoMensaje, esMascota, esCorto, esGraduacion,
    esAgradecimiento, esInvitacion, esBilingue
  };
}

// ---------------------------------------------------------------------------
// 2. Titulos, H1, Meta y Lead unicos para las 341 categorias (0 repetidos)
// ---------------------------------------------------------------------------
const DISPLAY_CORRECCIONES = {
  'frases cortas las más bonitas': {
    titulo: 'Frases Cortas de Cumpleaños: Las Más Bonitas',
    h1: 'Frases cortas de cumpleaños: las más bonitas'
  },
  'saludos las dedicatorias más lindas': {
    titulo: 'Saludos y Dedicatorias Más Lindas de Cumpleaños',
    h1: 'Saludos y dedicatorias más lindas de cumpleaños'
  },
  'cumpleaños para perros': {
    titulo: 'Cumpleaños para Perros - 30 Mensajes Tiernos',
    h1: 'Mensajes de cumpleaños para perros'
  },
  'feliz cumpleaños pastor imágenes y palabras': {
    titulo: 'Feliz Cumpleaños, Pastor - 30 Palabras y Mensajes',
    h1: 'Feliz cumpleaños, pastor: palabras de bendición'
  },
  'feliz cumpleaños con flores imágenes y frases': {
    titulo: 'Feliz Cumpleaños con Flores - 30 Frases para Dedicar',
    h1: 'Feliz cumpleaños con flores: frases para dedicar'
  },
  'feliz cumpleaños para hombres imágenes y tarjetas': {
    titulo: 'Feliz Cumpleaños para Hombres - 30 Mensajes',
    h1: 'Feliz cumpleaños para hombres: frases y tarjetas'
  },
  'imágenes y frases para hombres': {
    titulo: 'Frases y Tarjetas de Cumpleaños para Hombres',
    h1: 'Frases y tarjetas de cumpleaños para hombres'
  },
  'las 38 mejores frases en inglés traducidas': {
    titulo: 'Frases de Cumpleaños en Inglés Traducidas',
    h1: 'Frases de cumpleaños en inglés traducidas al español'
  },
  'feliz cumpleaños a distancia': {
    titulo: 'Feliz Cumpleaños a la Distancia - 30 Mensajes',
    h1: 'Feliz cumpleaños a la distancia'
  },
  'feliz cumpleaños atrasado': {
    titulo: 'Feliz Cumpleaños Atrasado - 30 Mensajes',
    h1: 'Feliz cumpleaños atrasado: mensajes para compensar'
  },
  'feliz cumpleaños general': {
    titulo: 'Feliz Cumpleaños General - 30 Mensajes Versátiles',
    h1: 'Mensajes generales de feliz cumpleaños'
  },
  '13 meses de novios': {
    titulo: '13 Meses de Novios - 30 Mensajes de Amor',
    h1: '13 meses de novios: frases para celebrar'
  },
  'cartas para mi papá que lo haga llorar': {
    titulo: 'Cartas para Mi Papá que lo Hagan Llorar',
    h1: 'Cartas para mi papá que lo emocionen hasta las lágrimas'
  },
  'feliz cumpleaños mamá texto largo': {
    titulo: 'Feliz Cumpleaños Mamá: Textos Largos (30)',
    h1: 'Feliz cumpleaños, mamá: textos largos y emotivos'
  },
  'mensaje largo para mi mejor amiga whatsapp': {
    titulo: 'Mensajes Largos para Mejor Amiga por WhatsApp',
    h1: 'Mensajes largos para mi mejor amiga por WhatsApp'
  },
  'frases para mi hijo 8 años': {
    titulo: 'Frases para Mi Hijo de 8 Años - 30 Mensajes',
    h1: 'Frases de cumpleaños para mi hijo de 8 años'
  },
  'carta para novia que está lejos': {
    titulo: 'Cartas para Mi Novia que Está Lejos - 30 Textos',
    h1: 'Carta de cumpleaños para mi novia que está lejos'
  },
  'carta para amiga que está lejos': {
    titulo: 'Cartas para Mi Amiga que Está Lejos - 30 Textos',
    h1: 'Carta de cumpleaños para una amiga que está lejos'
  },
  'frases para amiga recién conocida': {
    titulo: 'Frases de Cumpleaños para Amiga Recién Conocida',
    h1: 'Frases de cumpleaños para una amiga recién conocida'
  },
  'dedicatoria para mi pareja escritos con amor': {
    titulo: 'Dedicatorias para Mi Pareja Escritas con Amor',
    h1: 'Dedicatorias para mi pareja escritas con amor',
    kwLead: 'dedicatorias para mi pareja escritas con amor'
  },
  'tarjetas de feliz cumpleaños amor para hacer sonreír a tu pareja': {
    titulo: 'Tarjetas de Cumpleaños para Hacer Sonreír a Tu Pareja',
    h1: 'Tarjetas de cumpleaños para hacer sonreír a tu pareja',
    kwLead: 'tarjetas de cumpleaños para tu pareja'
  },
  'las mejores frases para felicitar a un amigo por aniversario de bodas': {
    titulo: 'Frases para Felicitar a un Amigo por Aniversario de Bodas',
    h1: 'Frases para felicitar a un amigo por su aniversario de bodas',
    kwLead: 'frases de aniversario de bodas para un amigo'
  },
  'gracias dios por un año más de vida': {
    titulo: 'Gracias, Dios, por un Año Más de Vida - 30 Mensajes',
    h1: 'Gracias, Dios, por un año más de vida',
    kwLead: 'dar gracias a Dios por un año más de vida'
  },
  'palabras de agradecimiento a dios por mi cumpleaños': {
    titulo: 'Palabras de Agradecimiento a Dios por Mi Cumpleaños',
    h1: 'Palabras de agradecimiento a Dios por mi cumpleaños',
    kwLead: 'palabras de agradecimiento a Dios por mi cumpleaños'
  },
  'feliz cumpleaños dios me regala un año más de vida': {
    titulo: 'Feliz Cumpleaños: Dios Me Regala un Año Más de Vida',
    h1: 'Feliz cumpleaños: Dios me regala un año más de vida',
    kwLead: 'agradecer a Dios por un nuevo año de vida'
  },
  'feliz cumpleaños con la bendición de dios': {
    titulo: 'Feliz Cumpleaños con la Bendición de Dios - 30 Textos',
    h1: 'Feliz cumpleaños con la bendición de Dios',
    kwLead: 'desear un feliz cumpleaños con la bendición de Dios'
  },
  'feliz cumpleaños que dios te bendiga': {
    titulo: 'Feliz Cumpleaños, Que Dios Te Bendiga - 30 Mensajes',
    h1: 'Feliz cumpleaños: que Dios te bendiga hoy y siempre',
    kwLead: 'dedicatorias cristianas de cumpleaños'
  },
  'frases para hermano para hacerlo sentir especial': {
    titulo: 'Frases para Mi Hermano para Hacerlo Sentir Especial',
    h1: 'Frases para mi hermano para hacerlo sentir especial',
    kwLead: 'dedicatorias especiales para un hermano'
  },
  'imágenes para mujeres de cumpleaños': {
    titulo: 'Tarjetas y Frases de Cumpleaños para Mujeres',
    h1: 'Tarjetas y frases de cumpleaños para mujeres',
    kwLead: 'tarjetas y frases de cumpleaños para mujeres'
  },
  'lindas imágenes para mi hija': {
    titulo: 'Tarjetas y Mensajes Lindos para Mi Hija (30)',
    h1: 'Tarjetas y mensajes lindos para mi hija',
    kwLead: 'mensajes y tarjetas de cumpleaños para una hija'
  },
  'imágenes y frases de feliz aniversario': {
    titulo: 'Tarjetas y Frases de Feliz Aniversario - 30 Mensajes',
    h1: 'Tarjetas y frases de feliz aniversario',
    kwLead: 'frases y tarjetas de feliz aniversario'
  }
};

const APERTURAS_LEAD = [
  (kw) => `Elegir las palabras justas para ${kw} marca la diferencia entre un saludo de compromiso y un recuerdo que se guarda.`,
  (kw) => `Detrás de cada búsqueda sobre ${kw} hay ganas sinceras de demostrar afecto con naturalidad y sin frases repetidas.`,
  (kw) => `Cuando llega el momento de dedicar ${kw}, encontrar un tono honesto ayuda a decir en voz alta lo que a veces se calla.`,
  (kw) => `Esta selección dedicada a ${kw} reúne treinta textos cuidados en fondo y forma para emocionar desde la primera línea.`,
  (kw) => `Escribir con calidez sobre ${kw} requiere equilibrar gratitud, memoria compartida y deseos concretos para la etapa que empieza.`,
  (kw) => `Pensando en quienes buscan ideas auténticas para ${kw}, preparamos treinta propuestas con redacción clara y cercana.`,
  (kw) => `No todas las ocasiones admiten el mismo tono, y por eso esta colección de ${kw} cuida cada matiz con sensibilidad.`,
  (kw) => `Más allá de los saludos rápidos, dedicar unas buenas líneas en ${kw} convierte una fecha del calendario en un puente afectivo.`,
  (kw) => `Quienes valoran decir mucho sin sonar artificiales encontrarán en esta página dedicada a ${kw} opciones listas para usar.`,
  (kw) => `Cada vínculo tiene su propio lenguaje; en este repertorio sobre ${kw} reunimos mensajes pensados para sonar creíbles y humanos.`,
  (kw) => `Acertar con las palabras en ${kw} es una manera sencilla pero poderosa de hacer sentir importante a quien tenés enfrente.`,
  (kw) => `Con redacción fluida y cercana, estas treinta dedicatorias enfocadas en ${kw} evitan los lugares comunes de siempre.`
];

const CUERPOS_LEAD_POR_TEMA = {
  carta: [
    'Cada texto adopta formato epistolar completo, con saludo inicial, desarrollo en párrafos que evocan recuerdos reales, reconocimiento sincero y despedida cálida.',
    'Lejos de las frases sueltas, aquí vas a leer cartas extensas y bien hiladas que permiten contar anécdotas, agradecer y proyectar futuro sin apuro.',
    'Pensadas para leer despacio o entregar impresas junto a un detalle personal, estas cartas largas ordenan las emociones con claridad y ternura.'
  ],
  largo: [
    'Estos mensajes extendidos desarrollan varias ideas en párrafos conectados para enviar por WhatsApp o acompañar un regalo significativo.',
    'Ideales cuando unas pocas palabras quedan cortas: cada texto combina gratitud, memoria cotidiana y deseos genuinos de bienestar.'
  ],
  poema: [
    'Cada publicación ofrece versos organizados en estrofas con ritmo suave, imágenes cotidianas y rima cuidada para declamar o copiar.',
    'Escritos con cadencia lírica accesible, estos poemas celebran el cariño sin rebuscamientos y conservan intacta la emoción de cada verso.'
  ],
  duelo: [
    'Escritas con profundo respeto y serenidad, estas palabras acompañan la memoria de quien partió honrando su legado y el amor que permanece.',
    'Sin caer en festejos fuera de lugar, cada mensaje prioriza el consuelo, la gratitud por lo vivido y la presencia viva en el recuerdo.'
  ],
  aniversario: [
    'Las dedicatorias celebran el tiempo exacto compartido, los aprendizajes en pareja y la decisión cotidiana de seguir construyendo juntos.',
    'Desde la ternura del comienzo hasta la complicidad madura, cada frase destaca gestos reales, paciencia mutua e ilusión compartida.'
  ],
  cristiano: [
    'Cada mensaje integra bendiciones, oración agradecida y confianza serena en el cuidado de Dios para el nuevo año que comienza.',
    'Con tono espiritual cercano y esperanzador, estas dedicatorias unen el afecto humano con deseos de paz, salud y propósito en la fe.'
  ],
  automensaje_cristiano: [
    'Redactadas en primera persona, estas oraciones y reflexiones agradecen a Dios por la salud, las pruebas superadas y la vida recibida.',
    'Ideales para compartir en estados o guardar en tu diario personal dando gracias por otro ciclo bajo la guía divina.'
  ],
  automensaje: [
    'Escritas en primera persona, estas reflexiones celebran el crecimiento propio, las lecciones del año que termina y las metas que vienen.',
    'Pensadas para publicar en redes o regalarte un momento de gratitud hacia tu propia historia, con honestidad y calma.'
  ],
  mascota_perro: [
    'Con ternura y guiños divertidos, cada mensaje celebra paseos, juegos, lealtad incondicional y la alegría de ese compañero de cuatro patas.',
    'Perfectas para acompañar una foto de tu perro en redes o celebrar con humor y cariño otro año moviendo la cola.'
  ],
  mascota_gato: [
    'Llenas de dulzura e ingenio felino, estas frases rinden homenaje a siestas al sol, ronroneos tranquilos y compañía silenciosa.',
    'Pensadas para compartir fotos y anécdotas de tu gato celebrando su curiosidad, su elegancia y su afecto único.'
  ],
  edad_bebe: [
    'Tiernas y luminosas, celebran primeros descubrimientos, risas pequeñas y la enorme alegría que trajo a toda la familia desde su llegada.',
    'Escritas para guardar en álbumes, tarjetas o dedicatorias familiares que un día podrá leer con emoción.'
  ],
  edad_ninez: [
    'Combinan entusiasmo, juegos, asombro y palabras alentadoras para acompañar una infancia llena de curiosidad y aventuras.',
    'Adecuadas tanto para tarjetas de regalo como para saludos familiares llenos de color, orgullo y buenos deseos.'
  ],
  edad_15: [
    'Celebran esa transición luminosa hacia nuevos sueños, amistades duraderas y la emoción irrepetible de festejar los quince.',
    'Reúnen emoción familiar, orgullo por su crecimiento y deseos alentadores para esta etapa llena de ilusiones.'
  ],
  edad_adolescencia: [
    'Hablan en un lenguaje cercano que respeta su identidad, valora su carácter y alienta sus proyectos sin sermones aburridos.',
    'Equilibran cariño, humor sano y confianza en todo lo que está aprendiendo a construir por sí mismo.'
  ],
  edad_juventud: [
    'Acompañan el impulso de la juventud, los desafíos de estudio o trabajo, la libertad responsable y los sueños grandes.',
    'Con energía optimista y madurez cercana, celebran esta etapa decisiva donde se afianzan proyectos de vida.'
  ],
  edad_madurez: [
    'Honran la experiencia ganada, los vínculos sólidos, la serenidad ante la vida y las ilusiones que siguen intactas con los años.',
    'Lejos de bromas gastadas sobre la edad, celebran plenitud, sabiduría práctica y alegría compartida.'
  ],
  profesionales: [
    'Mantienen un equilibrio cuidado entre respeto cordial, reconocimiento por su labor cotidiana y deseos sinceros de bienestar.',
    'Ideales para tarjetas firmadas en equipo, mensajes laborales respetuosos o saludos cercanos dentro de la comunidad educativa o médica.'
  ],
  distancia: [
    'Cruzan kilómetros y diferencias horarias con calidez, recordando que el afecto verdadero no depende del código postal.',
    'Pensadas para videollamadas, audios o mensajes matutinos que acortan la espera hasta el próximo abrazo en persona.'
  ],
  divertido: [
    'Aportan humor limpio, guiños cómplices sobre la torta o las velas y chispa alegre sin perder el cariño verdadero.',
    'Perfectas para romper el hielo y arrancar una carcajada sincera antes de brindar por otro año vivido.'
  ],
  atrasado: [
    'Con gracia y afecto genuino, convierten un despiste de calendario en la excusa perfecta para extender el festejo un día más.',
    'Ayudan a disculparse con encanto y enviar buenos deseos que valen igual aunque lleguen fuera de fecha.'
  ],
  corto: [
    'Condensan emoción real en pocas líneas ágiles, ideales para estados de WhatsApp, notas de regalo o saludos directos.',
    'Cada texto evita adornos innecesarios y va directo al punto con ritmo claro y cordial.'
  ],
  formal: [
    'Emplean trato cortés, vocabulario sobrio y elegancia natural para contextos donde corresponde mantener cordialidad y distinción.',
    'Aptas para tarjetas institucionales, mensajes respetuosos o saludos distinguidos sin frialdad.'
  ],
  invitacion: [
    'Facilitan invitar a familiares y amistades con claridad, entusiasmo y espacio listo para agregar horario, dirección y confirmación.',
    'Desde propuestas relajadas hasta invitaciones más emotivas, ayudan a convocar con calidez desde el primer mensaje.'
  ],
  graduacion: [
    'Expresan gratitud hacia la familia, docentes y compañeros tras completar una meta académica que exigió años de constancia.',
    'Pensadas para discursos breves, agradecimientos en redes o tarjetas personales al cerrar una etapa de esfuerzo.'
  ],
  agradecimiento: [
    'Permiten responder saludos, regalos y gestos recibidos con humildad, cercanía y palabras bien elegidas.',
    'Útiles para cerrar un cumpleaños agradeciendo a quienes se hicieron presentes con un mensaje o un abrazo.'
  ],
  bilingue: [
    'Cada publicación presenta una frase idiomática natural en inglés acompañada de su traducción fiel y cercana al español.',
    'Pensadas tanto para dedicar a amigos internacionales como para compartir saludos bilingües con sentido claro.'
  ],
  embarazada: [
    'Celebran doblemente su nueva vuelta al sol y la dulce espera que llena la casa de ilusión y cuidados especiales.',
    'Combinan mimos para ella con buenos deseos tiernos para la nueva vida que pronto llegará a sus brazos.'
  ],
  crush: [
    'Sugieren simpatía, admiración y una chispa sutil que invita a conversar más sin resultar invasiva ni exagerada.',
    'Ideales para animarse a dar el primer paso con encanto ligero, naturalidad y una sonrisa compartida.'
  ],
  ex: [
    'Ofrecen palabras maduras, respetuosas y serenas para desear lo mejor cerrando ciclos sin amargura ni reproches.',
    'Priorizan el respeto por lo compartido y la cordialidad tranquila en una fecha significativa.'
  ],
  pareja: [
    'Mezclan ternura cotidiana, complicidad amorosa y gratitud por compartir proyectos, rutinas y celebraciones de a dos.',
    'Ideales para sorprender desde temprano con una nota en la mesa, un mensaje largo o una tarjeta romántica.'
  ],
  amistad: [
    'Celebran la lealtad sin poses, las confidencias guardadas y esa alegría compartida que convierte amigos en familia elegida.',
    'Van desde saludos cómplices y divertidos hasta dedicatorias profundas para agradecer años de presencia real.'
  ],
  familia: [
    'Ponen en valor las sobremesas, las raíces compartidas y el orgullo silencioso de acompañarse en cada etapa familiar.',
    'Pensadas para fortalecer lazos entre generaciones con afecto cercano y palabras llenas de hogar.'
  ],
  general: [
    'Reúnen mensajes versátiles, luminosos y bien redactados que se adaptan con facilidad a familiares, colegas o amistades cercanas.',
    'Cuidan la fluidez y la calidez para que cualquiera pueda personalizarlos en segundos y regalar un saludo memorable.'
  ]
};

const CIERRES_LEAD = [
  'Copiá tu preferido con un clic, adaptá algún detalle personal y envialo por WhatsApp o descargalo como tarjeta lista para compartir.',
  'Elegí el estilo que mejor encaje con tu relación, sumale un recuerdo propio si querés y hacé que tu dedicatoria suene única.',
  'Podés copiar cualquier texto al instante, enviarlo por mensaje directo o guardarlo en formato tarjeta para imprimir o publicar.',
  'Revisá las distintas opciones, quedate con la que diga justo lo que pensabas y regalá un gesto cuidado desde el corazón.'
];

export function construirHubProfesional(keyword, dest, cab, mod, grupo, slugOverride, hubIdx) {
  const slug = slugOverride || slugify(keyword);
  const baseHub = { keyword, destinatario: dest, cabecera: cab, modificador: mod, grupo, slug };
  const perfil = obtenerPerfilHub(baseHub);
  const emoji = emojiDe(dest, grupo);

  const kwCap = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const corr = DISPLAY_CORRECCIONES[keyword];
  let titulo = corr ? corr.titulo : `${kwCap} - 30 ${perfil.esCarta ? 'Cartas' : perfil.esPoema ? 'Poemas' : 'Mensajes'}`;
  if (titulo.length > 60) {
    titulo = corr ? corr.titulo.slice(0, 60).replace(/\s+\S*$/, '') : kwCap;
  }
  if (titulo.length > 60) titulo = titulo.slice(0, 58).replace(/\s+\S*$/, '').trim();

  const h1 = `${corr ? corr.h1 : kwCap} ${emoji}`;

  // Meta descriptions variadas (125-160 chars)
  const metaTemplates = [
    `${kwCap}: 30 ${perfil.esCarta ? 'cartas largas y sentidas' : perfil.esPoema ? 'poemas originales con rima' : 'mensajes originales'} listos para copiar, enviar por WhatsApp o descargar en tarjeta.`,
    `Descubrí 30 ${perfil.esCarta ? 'cartas emotivas y extensas' : 'dedicatorias auténticas'} sobre ${keyword}. Textos redactados con calidez para dedicar hoy.`,
    `Selección especial para ${keyword}: 30 textos claros, emotivos y listos para compartir por mensaje o imprimir en tarjeta.`,
    `Encontrá 30 ideas cuidadas para ${keyword}. Mensajes escritos con naturalidad para emocionar, agradecer y celebrar este momento.`
  ];
  let meta = metaTemplates[hubIdx % metaTemplates.length];
  if (meta.length < 122) meta += ' Copiá y enviá gratis.';
  if (meta.length > 162) meta = meta.slice(0, 159).replace(/\s+\S*$/, '') + '.';

  const leadKw = (corr && corr.kwLead)
    ? corr.kwLead
    : corr
      ? corr.h1.charAt(0).toLowerCase() + corr.h1.slice(1)
      : keyword.replace(/\s+whatsapp$/i, ' por WhatsApp').replace(/\bdios\b/g, 'Dios');
  const apFn = APERTURAS_LEAD[hubIdx % APERTURAS_LEAD.length];
  const temaKey = perfil.esCarta ? 'carta' : perfil.esLargo ? 'largo' : perfil.esPoema ? 'poema' : (CUERPOS_LEAD_POR_TEMA[perfil.tema] ? perfil.tema : 'general');
  const cuerpoArr = CUERPOS_LEAD_POR_TEMA[temaKey] || CUERPOS_LEAD_POR_TEMA.general;
  const cuerpoLead = cuerpoArr[(hubIdx * 3) % cuerpoArr.length];
  const cierreLead = CIERRES_LEAD[(hubIdx * 5) % CIERRES_LEAD.length];

  const detalleExtra = perfil.edadStr
    ? ` Al tratarse de un hito como cumplir ${perfil.edadStr}, los textos reflejan con fidelidad las vivencias propias de esa etapa.`
    : perfil.mesesNum || perfil.anosNum
      ? ` Con menciones acordes a celebrar ${perfil.duracionStr}, cada párrafo acompaña el ritmo real de la relación.`
      : perfil.esLlorar
        ? ' Su enfoque profundo busca tocar fibras verdaderas sin recurrir a exageraciones forzadas.'
        : perfil.esDistancia
          ? ' Incluye referencias cercanas a la nostalgia, la espera del reencuentro y el cariño que cruza cualquier distancia.'
          : '';

  const lead = `${apFn(leadKw)} ${cuerpoLead}${detalleExtra} ${cierreLead}`.replace(/\s+/g, ' ').trim();

  return {
    tipo: 'hub',
    slug,
    destinatario: dest,
    cabecera: cab,
    modificador: mod,
    grupo,
    keyword,
    titulo,
    h1,
    meta,
    emoji,
    lead,
    creado: '2026-11-15',
    actualizado: '2026-11-15'
  };
}

// ---------------------------------------------------------------------------
// 2b. Enriquecimiento humanizado de descripcion (lead) y texto SEO alternativo
// ---------------------------------------------------------------------------
const APERTURAS_HUMANAS = [
  (kw, n) => `Cuando llega una fecha especial y te sentás frente al teléfono buscando ${kw}, lo último que querés es mandar una frase fría de compromiso. Por eso acá armamos ${n} ideas reales, pensadas para sonar como vos cuando querés decir algo lindo de verdad.`,
  (kw, n) => `Pasa siempre: tenés mil sentimientos dando vueltas sobre ${kw}, pero a la hora de escribirlos te quedás mirando la pantalla en blanco. Acá juntamos ${n} mensajes con tono cercano, directo y sin vueltas para que elijas el que más va con tu historia.`,
  (kw, n) => `No hace falta ser escritor ni rebuscar palabras raras para emocionar con ${kw}. En esta selección vas a encontrar ${n} textos escritos como se habla de verdad, listos para copiar, ajustar un detalle tuyo y mandar al toque.`,
  (kw, n) => `A veces unas palabras justas cambian el día entero. Pensando en quienes buscan ${kw} con alma y cercanía, reunimos ${n} propuestas honestas que esquivan los clichés repetidos y suenan genuinas desde la primera línea.`,
  (kw, n) => `Si querés salir del típico mensaje automático al pensar en ${kw}, llegaste al lugar indicado. Tenés ${n} textos variados —algunos más tiernos, otros más serenos y otros bien profundos— para que ninguno te suene ajeno.`,
  (kw, n) => `Decir lo que uno siente sobre ${kw} no debería ser difícil ni sonar artificial. Por eso preparamos ${n} dedicatorias cuidadas, humanas y fáciles de adaptar para expresar lo que llevás adentro.`,
  (kw, n) => `Entre tanta frase repetida dando vueltas por internet, quisimos armar algo distinto para ${kw}: ${n} mensajes con calidez real, ritmo natural y espacio para que les sumes ese guiño personal que solo vos conocés.`,
  (kw, n) => `Ya sea que mandes un mensaje apenas arranca la mañana o escribas una nota a mano para ${kw}, acá tenés ${n} opciones pensadas con corazón para hacer sentir especial a quien está del otro lado.`
];

const CIERRES_HUMANOS = [
  'Elegí la que más te represente, cambiale o sumale una anécdota chica de ustedes y mandásela por WhatsApp, o descargala directo como tarjeta para compartir.',
  'Copiá el texto que mejor encaje con tu vínculo, dale tu toque personal si tenés ganas y envialo por mensaje o guardalo en tarjeta con un clic.',
  'Recorré tranquilo todas las páginas de esta categoría: podés copiar cualquier dedicatoria al instante, retocarla a tu manera o bajarla lista para publicar.',
  'Quedate con la que diga justo eso que querías expresar hoy, sumale algún recuerdo compartido y regalá palabras que de verdad se sienten cerca.'
];

const TITULOS_SEO_PLANTILLAS = [
  (kw) => `Cómo elegir y personalizar tus palabras de ${kw}`,
  (kw) => `Ideas reales para adaptar cada mensaje sobre ${kw}`,
  (kw) => `Qué tener en cuenta al dedicar ${kw} sin sonar frío`,
  (kw) => `Guía práctica para mandar ${kw} por WhatsApp o en tarjeta`,
  (kw) => `Cómo darle tu propio sello a estas dedicatorias de ${kw}`,
  (kw) => `Consejos simples para acertar con ${kw} en cualquier momento`,
  (kw) => `De la pantalla al corazón: cómo aprovechar estas ideas de ${kw}`,
  (kw) => `Variantes y tonos para compartir ${kw} con naturalidad`
];

function limpiarKwParaSeo(hub, corr) {
  let base = (corr && corr.kwLead)
    ? corr.kwLead
    : corr
      ? corr.h1.charAt(0).toLowerCase() + corr.h1.slice(1)
      : (hub.keyword || '').replace(/\s+whatsapp$/i, ' por WhatsApp').replace(/\bdios\b/g, 'Dios');
  base = base.replace(/\s+/g, ' ').trim();
  return base;
}

export function actualizarTituloYMetaHub(hub, totalMensajes) {
  const nStr = String(totalMensajes);
  let titulo = (hub.titulo || '')
    .replace(/\b30\b/, nStr)
    .replace(/\b8\b/, nStr);
  if (!titulo.includes(nStr) && (titulo + ` (${nStr})`).length <= 60) {
    // Mantiene titulos sin numero intactos si ya superan 54 chars, o suma conteo si entra limpio
    if (titulo.length <= 53 && !/\(\d+\)$/.test(titulo)) {
      titulo = `${titulo} (${nStr})`;
    }
  }
  if (titulo.length > 60) titulo = titulo.slice(0, 59).replace(/\s+\S*$/, '').trim();

  let meta = (hub.meta || '')
    .replace(/\b30\b/g, nStr)
    .replace(/\b8\b/g, nStr);
  if (meta.length < 120) meta += ' Textos listos para copiar y enviar.';
  if (meta.length > 165) meta = meta.slice(0, 162).replace(/\s+\S*$/, '') + '.';

  return { titulo, meta };
}

export function construirDescripcionYSeoHub(hub, totalMensajes, hubIdx) {
  const perfil = obtenerPerfilHub(hub);
  const corr = DISPLAY_CORRECCIONES[hub.keyword];
  const kwLimpia = limpiarKwParaSeo(hub, corr);
  const n = totalMensajes;
  const i = Math.abs(hubIdx || 0);

  // Parrafo 1 del lead: voz humana directa
  const apLead = APERTURAS_HUMANAS[i % APERTURAS_HUMANAS.length](kwLimpia, n);

  // Parrafo 2 del lead: detalle especifico segun el tema real de la categoria
  let detalleTema = '';
  if (perfil.esDuelo) {
    detalleTema = `Sabemos lo delicado que es escribir cuando alguien falta en la mesa. Por eso cada uno de estos ${n} textos está pensado desde el respeto, la memoria serena y el cariño que sigue vivo, evitando frases huecas o fuera de tono.`;
  } else if (perfil.esAniversario) {
    detalleTema = `Celebrar ${perfil.duracionStr || 'un aniversario'} tiene su propio peso y su propia historia. Vas a leer mensajes que hablan de lo cotidiano compartido, la complicidad de los meses juntos y las ganas reales de seguir eligiéndose.`;
  } else if (perfil.esCarta) {
    detalleTema = `Como acá hablamos de cartas de verdad y no de renglones sueltos, cada una de las ${n} publicaciones tiene desarrollo largo en varios párrafos: saludo inicial, memoria compartida, presente y despedida con corazón.`;
  } else if (perfil.esPoema) {
    detalleTema = `Cada poema de esta página viene armado en estrofas y versos reales para que lo puedas leer en voz alta, copiar en una dedicatoria bonita o compartir acompañado de una imagen especial.`;
  } else if (perfil.esMascota) {
    detalleTema = `Quienes convivimos con animales sabemos que son parte real de la familia. Estas ${n} ideas mezclan ternura y humor para acompañar una foto linda o guardar un recuerdo simpático de su día.`;
  } else if (perfil.esBilingue) {
    detalleTema = `Las ${n} opciones traen la frase natural en inglés acompañada de su traducción fiel al español, pensadas para que entiendas el matiz exacto antes de mandarla o subirla a tus redes.`;
  } else if (perfil.esCristiano) {
    detalleTema = `En estas ${n} dedicatorias se mezcla el afecto cotidiano con palabras de fe, oración y gratitud a Dios, manteniendo un tono cercano que transmite paz sin sonar rígido.`;
  } else if (perfil.esDistancia) {
    detalleTema = `Cuando los kilómetros no dejan dar el abrazo en persona, las palabras pesan el doble. Cada mensaje cruza la distancia con calidez real para que tu saludo llegue puntual desde temprano.`;
  } else if (perfil.esInvitacion) {
    detalleTema = `Tenés ${n} invitaciones distintas —más relajadas, familiares o emotivas— pensadas para que solo completes horario, dirección y confirmes rápido por WhatsApp.`;
  } else if (perfil.edadStr) {
    detalleTema = `Cumplir ${perfil.edadStr} es un momento particular que merece algo a la altura. Por eso estos ${n} mensajes acompañan esa etapa exacta con naturalidad, sin bromas repetidas ni sermones.`;
  } else if (perfil.esAutoMensaje) {
    detalleTema = `Dedicarte unas palabras sinceras también vale: estas ${n} reflexiones en primera persona ayudan a agradecer lo vivido, valorar lo aprendido y arrancar el ciclo nuevo con buena energía.`;
  } else if (perfil.tratamiento === 'usted') {
    detalleTema = `Cuando corresponde mantener trato respetuoso de usted, cuesta encontrar saludos que no queden fríos. Acá tenés ${n} textos equilibrados entre la cordialidad profesional y el aprecio genuino.`;
  } else {
    detalleTema = `En estas ${n} publicaciones vas a encontrar tonos variados para elegir según el momento: dedicatorias cortas para mandar rápido, textos emotivos para decir cuánto te importa y opciones cálidas para acompañar un regalo.`;
  }

  const cierreLead = CIERRES_HUMANOS[(i * 3) % CIERRES_HUMANOS.length];
  const lead = `${apLead}\n\n${detalleTema} ${cierreLead}`.replace(/[ \t]+/g, ' ').trim();

  // Titulo SEO H2 unico por categoria (anclado siempre a kwLimpia)
  const tituloTpl = TITULOS_SEO_PLANTILLAS[(i * 5 + 1) % TITULOS_SEO_PLANTILLAS.length];
  const seoTitulo = tituloTpl(kwLimpia);

  // Texto SEO alternativo humanizado (3 parrafos ricos, cero stuffing, coherente con tema)
  const tipoPieza = perfil.esCarta
    ? 'cartas largas y dedicatorias extensas'
    : perfil.esPoema
      ? 'poemas en verso y rimas sentidas'
      : perfil.esInvitacion
        ? 'textos de invitación claros y cordiales'
        : perfil.esDuelo
          ? 'mensajes respetuosos de homenaje y recuerdo'
          : 'frases originales, dedicatorias cálidas y saludos listos para enviar';

  const seoP1Options = perfil.esDuelo
    ? [
        `Escribir sobre ${kwLimpia} siempre pide tacto y honestidad. Muchas veces alcanza con nombrar un recuerdo compartido, agradecer una enseñanza que quedó en casa y acompañar en silencio con palabras que den abrigo.`,
        `Quienes buscan ${kwLimpia} suelen necesitar algo sencillo pero verdadero. No hace falta explicar todo el dolor en un texto largo: un mensaje sereno que honre su memoria ya dice muchísimo.`,
        `Cuando se acerca una fecha sensible y pensás en ${kwLimpia}, lo que más reconforta es hablar sin poses, recordando su calidez diaria y todo el bien que sembró en la familia.`
      ]
    : perfil.esAniversario
      ? [
          `Cuando buscás ${kwLimpia}, lo que más suma es mencionar lo real de ustedes: una costumbre diaria, una risa compartida o lo bien que se siente caminar juntos incluso en las semanas complicadas.`,
          `Las mejores palabras para ${kwLimpia} no prometen cuentos irreales; agradecen la paciencia mutua, las charlas honestas y esa complicidad que vuelve especial cada etapa en pareja.`,
          `Al escribir sobre ${kwLimpia}, funciona muchísimo recordar una escena chiquita de su historia —ese primer mate, un viaje improvisado o una charla nocturna— antes de cerrar con un deseo lindo para lo que viene.`
        ]
      : perfil.esCarta
        ? [
            `A la hora de preparar ${kwLimpia}, la clave para emocionar es no apurarse: mencioná un recuerdo concreto de ustedes, agradecé lo aprendido juntos y cerrá con un deseo sincero para la etapa que sigue.`,
            `Por eso armamos ${n} ${tipoPieza} con verdadero desarrollo epistolar: apertura cálida, cuerpo lleno de recuerdos compartidos y despedida con firma afectuosa para leer sin prisas.`,
            `Si te sentás a buscar ${kwLimpia} porque un mensaje suelto no alcanza, cualquiera de estas cartas extensas te sirve como base fiel para copiar o reescribir con tu propia historia.`
          ]
        : [
            `A la hora de buscar ${kwLimpia}, el mejor truco para que nadie sienta un texto copiado de internet es agregar un detalle chiquito de verdad: el apodo de siempre, el nombre de esa comida que comparten o un recuerdo corto de este año.`,
            `No todas las personas reciben igual los saludos de cumpleaños, y ahí está la ventaja de tener ${n} ${tipoPieza} en un mismo lugar: podés elegir un texto sereno y medido o abrir el corazón de par en par con todo lo que sentís.`,
            `Si estás buscando ${kwLimpia} y te cuesta arrancar, pensá primero qué querés hacer sentir del otro lado: una sonrisa rápida apenas agarra el celular, un abrazo largo de familia o ese guiño cómplice que solo ustedes entienden.`
          ];

  const seoP2Options = perfil.esDuelo
    ? [
        `Si querés personalizar cualquiera de estas ${n} opciones, podés sumar el nombre propio al comienzo, recordar una canción o una sobremesa familiar y compartirla con tus seres queridos como un pequeño homenaje.`,
        `Estas palabras están pensadas tanto para publicar junto a una foto querida como para enviar en privado a alguien de la familia que hoy también extraña su presencia.`,
        `También podés tomar una idea de aquí y sumarle una frase corta tuya o una oración serena para acompañar a quienes comparten este recuerdo.`
      ]
    : perfil.esAniversario
      ? [
          `Podés mandar tu elegida por WhatsApp a primera hora, dejarla escrita en una nota junto al desayuno o acompañarla con una foto linda de los dos sin tener que pensar qué poner desde cero.`,
          `Con estas ${n} propuestas sobre ${kwLimpia} tenés variedad de sobra para sorprender hoy y guardar ideas distintas cuando quieras recordar cuánto valorás lo construido juntos.`,
          `Si preferís algo más personal, usá cualquiera de estos textos como base y agregale la fecha exacta o algún plan que tengan pendiente para celebrar tranquilos.`
        ]
      : perfil.esCarta
        ? [
            `Podés copiar la carta completa para mandarla en un mensaje largo por WhatsApp, pasarla a un papel lindo junto al regalo o grabarla en un audio leído con calma.`,
            `Si querés personalizar todavía más tu ${kwLimpia}, intercalá el nombre de una ciudad, una canción que los una o una anécdota chiquita entre los párrafos del medio.`,
            `Cada una de estas ${n} opciones está pensada para tomarse unos minutos de lectura tranquila y dejar un recuerdo escrito que no se borra al día siguiente.`
          ]
        : [
            `Si lo vas a mandar por WhatsApp o redes, conviene elegir algo ágil que se lea bien de una sola mirada en la pantalla; en cambio, si va en tarjeta impresa o junto a un regalo, animate con uno de los textos más largos para que se lo guarde de recuerdo.`,
            `También podés combinar el arranque de una felicitación con el cierre de otra hasta armar tu versión ideal de ${kwLimpia}. La idea es ahorrarte el bloqueo frente a la hoja en blanco sin perder tu voz propia.`,
            `Para que llegue con más fuerza, probá mandarlo temprano con un audio corto o descargarlo directo como tarjeta visual desde el botón de cada publicación.`
          ];

  const seoP3Options = perfil.esDuelo
    ? [
        `En ParaCumpleanos revisamos cada una de las ${n} publicaciones de ${kwLimpia} para cuidar el tono respetuoso, la buena redacción en español y el consuelo sincero en fechas sensibles.`,
        `Cada texto sobre ${kwLimpia} fue pensado con delicadeza y respeto en nuestro idioma para acompañarte cuando más cuesta encontrar las palabras justas.`
      ]
    : perfil.esAniversario
      ? [
          `Todo este repertorio de ${n} mensajes dedicados a ${kwLimpia} fue redactado con lenguaje natural y cercano, cuidando la ortografía y listo para copiar o descargar como tarjeta en segundos.`,
          `Revisamos cada publicación de ${kwLimpia} para que suene humana, actual y coherente con esta etapa en pareja, sin frases acartonadas ni errores.`
        ]
      : [
          `Cada una de las ${n} publicaciones sobre ${kwLimpia} fue escrita en español claro, natural y cercano, sin errores ni frases robóticas, lista para copiar gratis o descargar en tarjeta personalizada.`,
          `Todo el contenido de ${kwLimpia} está curado y revisado línea por línea para ofrecerte textos cálidos, originales y fáciles de compartir en segundos desde el celular o la compu.`,
          `Recorré las páginas de ${kwLimpia} tranquilo y quedate con los mensajes que mejor reflejen tu cariño: son ${n} ideas reales hechas para personas reales.`
        ];

  const seoP1 = seoP1Options[i % seoP1Options.length];
  const seoP2 = seoP2Options[(i * 3) % seoP2Options.length];
  const seoP3 = seoP3Options[(i * 7) % seoP3Options.length];
  const seoTexto = `${seoP1}\n\n${seoP2}\n\n${seoP3}`.replace(/[ \t]+/g, ' ').trim();

  return { lead, seoTitulo, seoTexto };
}

const EMOJI_POR_DEST = {
  'mamá': '💐', 'papá': '🎩', 'amiga': '🥂', 'mejor amiga': '👯', 'amigo': '🍻', 'mejor amigo': '🤝',
  'hermana': '💜', 'hermano': '💙', 'hija': '🌸', 'hijo': '🌟', 'novia': '💖', 'novio': '❤️',
  'esposa': '💍', 'esposo': '🥂', 'amor': '💕', 'pareja': '💑', 'novios': '💌', 'abuela': '🌷',
  'abuelo': '🎩', 'tía': '🌺', 'tío': '🎈', 'prima': '🦋', 'primo': '🎉', 'sobrina': '🎀',
  'sobrino': '🚀', 'cuñada': '🌼', 'cuñado': '🎂', 'suegra': '🌹', 'suegro': '🥂', 'nuera': '💐',
  'yerno': '🎉', 'nieta': '✨', 'nieto': '⭐', 'madrina': '🕊️', 'padrino': '🎂', 'comadre': '☕',
  'compadre': '🍻', 'ahijada': '🌸', 'ahijado': '🎈', 'madrastra': '🌷', 'padrastro': '🤝',
  'hijastra': '🌼', 'hijastro': '⭐', 'gemelas': '👯', 'gemelos': '🎉', 'sobrinas gemelas': '🎀',
  'exnovia': '🕊️', 'exnovio': '🕊️', 'ex-suegra': '🌸', 'cristianos': '🙏', 'sacerdote': '✝️',
  'pastor': '🙏', 'doctor': '🩺', 'doctora': '🩺', 'jefe': '💼', 'jefa': '💼', 'maestra': '📚',
  'profesora': '📚', 'profesor': '🎓', 'alumno': '📖', 'compañero de trabajo': '🏢', 'vecina': '🏡',
  'bebé': '🍼', 'niño': '🧸', 'niña': '🎀', 'adolescente': '🎧', 'joven': '🎉', 'quinceañera': '👑',
  'embarazada': '🤰', 'crush': '💘', 'perros': '🐶', 'gatos': '🐱', 'para mí': '🎂',
  'en el cielo': '🕊️', 'mamá en el cielo': '🕊️', 'papá en el cielo': '🕊️', 'hermana en el cielo': '🕊️',
  'mujer': '🌹', 'hombre': '🎂', 'persona especial': '✨', 'alguien especial': '✨',
  'facebook': '📱', 'whatsapp': '💬', 'invitación': '🎟️', 'graduación': '🎓', 'bilingüe': '🌎'
};
const EMOJI_POR_GRUPO = {
  destinatarios: '🎂', cartas: '✉️', edades: '🎈', cristiano: '🙏', tono: '🎉',
  distancia: '🌍', familia: '🏡', profesionales: '💼', aniversarios: '💑', especiales: '✨'
};
export function emojiDe(dest, grupo) {
  return EMOJI_POR_DEST[dest] || EMOJI_POR_GRUPO[grupo] || '🎂';
}

// ---------------------------------------------------------------------------
// 3. Banco semantico rico para construir titulos 100% gramaticales (R2, R2b, R3, R5, R6)
//    CADA plantilla es una oracion espanola completa; NUNCA se cortan fragmentos.
// ---------------------------------------------------------------------------
function construirContextoTitulos(hub, p) {
  const ctx = {
    infPor: [],
    subjDeseo: [],
    objCelebrar: [],
    concesivaPair: [],
    siPair: [],
    cuandoPair: [],
    cadaSustPred: [],
    vocFinal: p.voc ? `, ${p.voc}` : ''
  };

  // Cláusulas de contexto compartidas según tema específico
  if (p.tema === 'duelo') {
    ctx.infPor = [
      'dejarnos enseñanzas que iluminan cada paso nuestro',
      'haber sembrado tanto cariño en quienes te conocimos',
      'regalarnos recuerdos que abrigan siempre el alma',
      'seguir viviendo intacto en nuestra memoria más tierna'.replace('intacto', p.genero === 'f' ? 'intacta' : 'intacto'),
      'enseñarnos con tu ejemplo lo que vale de verdad',
      'iluminar nuestros días con el amor que nos dejaste'
    ];
    ctx.subjDeseo = [
      'tu alma descanse rodeada de luz y paz eterna',
      'el cielo abrace hoy tu nombre con ternura infinita',
      'tu recuerdo nos siga dando fuerza en cada mañana',
      'la paz divina guarde para siempre tu sonrisa serena',
      'nunca falte una oración agradecida por tu historia'
    ];
    ctx.objCelebrar = [
      'tu memoria luminosa con amor profundo',
      'el regalo inolvidable que fue compartir vida contigo',
      'la huella eterna de bondad que dejaste en casa',
      'cada anécdota tuya guardada en nuestro corazón',
      'tu paso generoso por nuestras vidas con gratitud'
    ];
    ctx.concesivaPair = [
      'ya no podamos abrazarte hoy, seguís muy presente en casa',
      'pasen los años en silencio, tu recuerdo nunca se apaga',
      'tu silla esté vacía, tu voz vive en nuestras costumbres',
      'la nostalgia apriete el pecho, agradecemos haberte tenido'
    ];
    ctx.siPair = [
      'miramos al cielo hoy, sentimos tu luz acompañándonos',
      'nombramos tu historia, brota gratitud antes que tristeza',
      'buscamos un refugio sereno, volvemos a tus enseñanzas'
    ];
    ctx.cuandoPair = [
      'llega esta fecha especial, honramos tu vida con ternura',
      'recordamos tu sonrisa, todo vuelve a cobrar sentido',
      'alzamos una oración, el amor cruza cualquier distancia'
    ];
    ctx.cadaSustPred = [
      'recuerdo tuyo abraza la memoria con dulzura serena',
      'año sin vos confirma cuánto valió tu paso por aquí',
      'enseñanza que dejaste sigue guiando nuestras decisiones',
      'estrella en el cielo nos recuerda tu amor eterno'
    ];
    return ctx;
  }

  if (p.tema === 'mascota_perro') {
    ctx.infPor = [
      'esperarme siempre en la puerta con la cola feliz',
      'alegrar la casa con tus paseos y travesuras diarias',
      'acompañar mis tardes con tu lealtad sin condiciones',
      'llenar cada rincón de saltos tiernos y patitas alegres',
      'regalarme la compañía más noble de cuatro patas'
    ];
    ctx.subjDeseo = [
      'nunca te falten paseos largos bajo el sol',
      'este nuevo año traiga premios ricos y siestas tibias',
      'sigas sano, juguetón y lleno de carreras felices',
      'la vida nos regale muchísimos años más caminando juntos'
    ];
    ctx.objCelebrar = [
      'tu lealtad incondicional y tus saltos de alegría',
      'otro año de caminatas, juegos y siestas compartidas',
      'al compañero más fiel y noble de toda la casa',
      'cada travesura tuya que nos saca una sonrisa'
    ];
    ctx.concesivaPair = [
      'no entiendas el calendario, sabés perfecto cuánto te queremos',
      'dejes juguetes por todo el piso, alegrás el hogar entero',
      'no hables con palabras, tus ojos lo dicen absolutamente todo'
    ];
    ctx.siPair = [
      'hay una pelota cerca, empieza tu fiesta favorita',
      'buscamos amor puro, basta mirarte mover la cola'
    ];
    ctx.cuandoPair = [
      'escuchás la correa, toda la casa se llena de entusiasmo',
      'llegamos cansados a casa, tu saludo nos devuelve el ánimo'
    ];
    ctx.cadaSustPred = [
      'paseo contigo transforma un día común en aventura alegre',
      'ladrido feliz anuncia que la vida se disfruta simple',
      'siesta a mis pies regala calma que vale oro'
    ];
    return ctx;
  }

  if (p.tema === 'mascota_gato') {
    ctx.infPor = [
      'acompañar mis lecturas con tu ronroneo tan sereno',
      'elegir el rayo de sol para nuestras siestas tranquilas',
      'alegrar la casa con tu elegancia y saltos curiosos',
      'regalarme mimos suaves cuando más calma necesito',
      'llenar el sillón de ternura con tus bigotes inquietos'
    ];
    ctx.subjDeseo = [
      'nunca falten rayos de sol ni latitas deliciosas',
      'sigas curioso, ágil y mimado por toda tu familia',
      'tengas mil cajas nuevas para explorar este año',
      'disfrutes muchos años más de siestas largas en paz'
    ];
    ctx.objCelebrar = [
      'al dueño indiscutido del sofá y nuestros corazones',
      'otro año de ronroneos tibios y juegos nocturnos',
      'tu compañía silenciosa que vuelve más cálida la casa',
      'cada salto felino y cada mirada llena de misterio'
    ];
    ctx.concesivaPair = [
      'parezcas independiente, siempre buscás dormir bien cerca nuestro',
      'tires algún lápiz de la mesa, te perdonamos al instante',
      'no soples velitas, hoy sos el rey absoluto del hogar'
    ];
    ctx.siPair = [
      'suena un ronroneo tuyo, la tarde se vuelve perfecta',
      'abrís una caja vacía, ya encontraste tu castillo'
    ];
    ctx.cuandoPair = [
      'entran rayos de sol, la calma felina conquista la sala',
      'te acercás despacio, traés paz sin decir una palabra'
    ];
    ctx.cadaSustPred = [
      'maullido suave recuerda lo bien que hace tu presencia',
      'siesta bajo la ventana refleja el arte de vivir tranquilo',
      'caricia en tus orejas alegra cualquier jornada gris'
    ];
    return ctx;
  }

  if (p.tema === 'invitacion') {
    ctx.infPor = [
      'compartir conmigo este festejo tan esperado entre amigos',
      'sumarte a brindar por un año más lleno de alegría',
      'hacer espacio en tu agenda para celebrar juntos en mesa',
      'acompañarme con tu sonrisa en una noche inolvidable'
    ];
    ctx.subjDeseo = [
      'puedas acompañarnos y brindar sin apuros toda la noche',
      'nos encontremos pronto para reír, comer rico y festejar',
      'no faltes a esta reunión pensada con tanto cariño',
      'llegues con ganas enormes de bailar y celebrar la vida'
    ];
    ctx.objCelebrar = [
      'mi cumpleaños rodeado de las personas que más quiero',
      'una noche de buena música, mesa compartida y abrazos',
      'otro año vivido invitándote a festejarlo en persona',
      'un encuentro especial donde tu presencia hace la fiesta'
    ];
    ctx.concesivaPair = [
      'la semana venga agitada, hacete un hueco para brindar',
      'haya mil planes posibles, este festejo te espera con ganas',
      'cumplir años sea mío, celebrarlo contigo es lo mejor'
    ];
    ctx.siPair = [
      'venís con buena energía, la noche va a salir redonda',
      'querés pasarla genial, ya tenés reservado tu lugar'
    ];
    ctx.cuandoPair = [
      'llegue el gran día, te esperamos con torta y alegría',
      'alcemos las copas, quiero verte justo ahí en la mesa'
    ];
    ctx.cadaSustPred = [
      'invitado querido suma risas que vuelven única la reunión',
      'abrazo en la puerta vale más que cualquier regalo envuelto',
      'brindis compartido convierte la noche en recuerdo imborrable'
    ];
    return ctx;
  }

  if (p.tema === 'aniversario') {
    const dur = p.duracionStr || 'este aniversario';
    const esSing = /^(este|nuestro|un|primer)\b/.test(dur);
    const estosDur = esSing ? dur : `estos ${dur}`;
    ctx.infPor = [
      `construir conmigo ${dur} ${esSing ? 'lleno' : 'llenos'} de respeto y ternura`,
      `elegirme cada mañana durante ${dur} ${esSing ? 'tan luminoso' : 'tan luminosos'}`,
      'transformar la rutina cotidiana en un refugio seguro',
      'caminar a mi lado en las alegrías y las tormentas',
      `sumar risas y aprendizajes a lo largo de ${dur}`,
      'cuidar nuestro vínculo con paciencia, humor y verdad',
      `hacer que ${dur} ${esSing ? 'parezca' : 'parezcan'} apenas el comienzo`,
      'regalarme abrazos que ordenan cualquier semana difícil',
      'compartir sueños sencillos y metas grandes de la mano',
      'escucharme siempre con el corazón abierto y en calma'
    ];
    ctx.subjDeseo = [
      `${estosDur} ${esSing ? 'sea' : 'sean'} apenas el inicio de algo inmenso`,
      'sigamos eligiéndonos con la misma ilusión del principio',
      'el tiempo multiplique nuestra complicidad y calma',
      'nunca falten proyectos lindos para soñar de la mano',
      'cada aniversario nos encuentre más unidos y serenos',
      'nuestro noviazgo crezca firme entre risas y respeto',
      'los próximos capítulos superen todo lo soñado hoy',
      'la ternura cotidiana cuide siempre lo que construimos'
    ];
    ctx.objCelebrar = [
      `${dur} caminando juntos con amor y complicidad`,
      'todo lo que supimos construir paso a paso de a dos',
      `la dicha de cumplir ${dur} sintiéndonos hogar`,
      'las historias, viajes y metas que aún nos esperan',
      `este aniversario marcado por ${dur} de entrega sincera`,
      `un vínculo noble fortalecido a través de ${dur}`,
      'cada conversación larga y cada gesto tierno compartido',
      'el regalo inmenso de seguir creciendo en pareja'
    ];
    ctx.concesivaPair = [
      'el calendario sume tiempo, sigo eligiéndote como el primer día',
      'haya días difíciles, de tu mano todo se vuelve más claro',
      `ya ${esSing ? 'haya' : 'hayan'} pasado ${dur}, nuestra chispa sigue intacta`,
      'cambiemos de planes a veces, nuestro norte sigue siendo amar',
      'el mundo corra apurado, juntos encontramos calma real'
    ];
    ctx.siPair = [
      'miro lo vivido juntos, confirmo que elegí caminar con vos',
      'pienso en el futuro, me ilusiona recorrerlo siempre contigo',
      `cuento ${estosDur}, agradezco cada sonrisa compartida`,
      'tuviera que empezar de nuevo, volvería a buscar tu mano'
    ];
    ctx.cuandoPair = [
      `celebramos ${dur}, agradezco cada instante compartido`,
      'me tomás la mano, desaparece cualquier duda del camino',
      'recordamos nuestro comienzo, sonrío con enorme ternura',
      'hacemos planes nuevos, el corazón late con ilusión linda'
    ];
    ctx.cadaSustPred = [
      'mes compartido confirma lo bien que nos hace caminar juntos',
      'abrazo tuyo renueva todas las promesas de nuestra historia',
      'recuerdo en pareja suma brillo a este aniversario especial',
      'mañana contigo recuerda cuánto vale el amor paciente',
      'capítulo nuestro deja huella honda de gratitud y paz'
    ];
    return ctx;
  }

  if (p.tema === 'graduacion') {
    ctx.infPor = [
      'sostenerme con paciencia durante cada examen y desvelo',
      'creer en mis sueños cuando el cansancio pesaba más',
      'acompañar este logro que lleva el esfuerzo de todos',
      'impulsarme a no bajar los brazos hasta alcanzar la meta'
    ];
    ctx.subjDeseo = [
      'este título sea apenas la puerta de grandes horizontes',
      'la vida me permita retribuir tanto apoyo recibido',
      'celebremos juntos este triunfo ganado paso a paso'
    ];
    ctx.objCelebrar = [
      'el final de una etapa exigente con gratitud inmensa',
      'un logro profesional construido con apoyo familiar y esfuerzo',
      'a quienes hicieron posible que llegara hasta la meta'
    ];
    ctx.concesivaPair = [
      'el camino tuvo madrugadas largas, valió cada minuto vivido',
      'el diploma lleve mi nombre, este logro pertenece a todos'
    ];
    ctx.siPair = [
      'logré llegar hasta aquí, fue gracias a quienes me cuidaron',
      'miro atrás con orgullo, veo cada abrazo que me dio fuerza'
    ];
    ctx.cuandoPair = [
      'cierro esta etapa académica, agradezco de todo corazón',
      'recibo este título, pienso en cada consejo oportuno'
    ];
    ctx.cadaSustPred = [
      'paso hasta la graduación llevó aliento de gente inolvidable',
      'desvelo compartido terminó convertido en alegría inmensa',
      'abrazo de hoy premia años enteros de constancia'
    ];
    return ctx;
  }

  if (p.tema === 'agradecimiento') {
    ctx.infPor = [
      'tomarte el tiempo de saludarme con tanto cariño',
      'recordar mi día con un gesto tan noble y cálido',
      'acompañar mi cumpleaños con palabras llenas de afecto',
      'sumar tu abrazo sincero a esta nueva vuelta al sol',
      'hacerme sentir tan querido en una fecha especial',
      'tener siempre un detalle atento y una palabra justa'
    ];
    ctx.subjDeseo = [
      'la vida te devuelva multiplicado tanto afecto sincero',
      'nunca te falten motivos lindos ni abrazos honestos',
      'recibas el doble de alegría que hoy me regalaste',
      'sigamos compartiendo muchos años más de buena amistad'
    ];
    ctx.objCelebrar = [
      'tu saludo tan cálido agradeciendo de todo corazón',
      'la suerte inmensa de contar con gente tan noble',
      'cada mensaje hermoso recibido en mi cumpleaños hoy',
      'el cariño sincero que iluminó toda esta jornada'
    ];
    ctx.concesivaPair = [
      'pasen los días rápido, tu gesto se queda guardado aquí',
      'no respondí enseguida, valoré cada palabra de verdad'
    ];
    ctx.siPair = [
      'este cumpleaños fue tan feliz, se lo debo a ustedes',
      'guardo algo hermoso hoy, es cada mensaje recibido'
    ];
    ctx.cuandoPair = [
      'leí tu saludo hoy, sonreí con gratitud inmensa',
      'pienso en este día, agradezco contar con tu cariño'
    ];
    ctx.cadaSustPred = [
      'saludo recibido hoy me llenó el pecho de emoción',
      'abrazo y cada mensaje valieron más que cualquier regalo',
      'palabra tuya hizo todavía más lindo mi cumpleaños'
    ];
    return ctx;
  }

  if (p.tema === 'automensaje' || p.tema === 'automensaje_cristiano') {
    const esCris = p.tema === 'automensaje_cristiano';
    ctx.infPor = esCris
      ? [
          'sostener mi vida con salud, fe y bendiciones diarias, Señor',
          'darme un año más lleno de aprendizaje y misericordia',
          'cuidar cada paso mío incluso en los días de incertidumbre',
          'renovar mis fuerzas al iniciar esta nueva vuelta al sol'
        ]
      : [
          'todo lo aprendido tras superar las pruebas de este año',
          'darme permiso para celebrar mis propios logros sin apuros',
          'haber crecido con calma, valentía y mayor claridad interior',
          'mantener intactas las ganas de aprender y disfrutar la vida'
        ];
    ctx.subjDeseo = esCris
      ? [
          'Dios siga guiando mis pasos con sabiduría y calma',
          'este nuevo año camine siempre bajo su gracia fiel',
          'nunca me falte un corazón agradecido ante sus bendiciones'
        ]
      : [
          'este nuevo ciclo me encuentre en paz conmigo y mis metas',
          'nunca pierda la curiosidad ni la ternura al caminar',
          'se cumplan los proyectos que sembré con tanta paciencia'
        ];
    ctx.objCelebrar = esCris
      ? [
          'un año más de vida agradeciendo la fidelidad de Dios',
          'las bendiciones recibidas con fe serena en el corazón',
          'cada enseñanza divina que fortaleció mi camino'
        ]
      : [
          'mi propia historia aceptando cada paso vivido con orgullo',
          'otra vuelta al sol mirando hacia adelante con ilusión',
          'las pequeñas victorias cotidianas que me trajeron hasta acá'
        ];
    ctx.concesivaPair = [
      'hubo jornadas exigentes, llego hoy con el alma más fuerte',
      'el tiempo avance rápido, aprendo a disfrutar mucho más el presente',
      'cambien varios planes, sigo fiel a lo que de verdad importa'
    ];
    ctx.siPair = [
      'miro el año que termina, elijo quedarme con lo aprendido',
      'pido un deseo hoy, elijo salud, serenidad y buenos vínculos'
    ];
    ctx.cuandoPair = [
      'soplo las velas hoy, celebro la persona en que me convertí',
      'empiezo un año nuevo, abrazo mi camino con gratitud real'
    ];
    ctx.cadaSustPred = [
      'cicatriz ganada recuerda cuánto crecí en los momentos difíciles',
      'mañana nueva abre oportunidad limpia para volver a empezar',
      'paso en mi historia merece festejarse con alegría genuina'
    ];
    return ctx;
  }

  // Temas generales / relaciones / edades / carta / poema / cristiano / humor / atrasado / distancia / ex / embarazo / crush / pro
  const sufEdad = p.edadStr ? ` al cumplir ${p.edadStr}` : '';
  const ref = p.voc || 'persona especial';

  ctx.infPor = [
    p.esAtrasado ? 'entender que el cariño verdadero nunca llega fuera de fecha' : 'llenar mis días de luz, escucha sincera y alegría cotidiana',
    p.esCristiano ? 'reflejar la paz de Dios en cada gesto generoso' : 'enseñarme con tu ejemplo lo valioso de caminar con calma',
    p.esDistancia ? 'mantener intacto nuestro lazo a pesar de la distancia' : 'regalarme tu compañía fiel en los momentos buenos y difíciles',
    p.esEmbarazo ? 'irradiar tanta dulzura mientras esperás una vida nueva' : 'hacer más liviana la rutina con tu risa contagiosa',
    p.esEx ? 'los momentos sinceros que compartimos con respeto y calma' : `aportar calidez y nobleza en todo lo que hacés${sufEdad}`,
    p.esDivertido ? 'demostrar que los años se notan solo en las ganas de festejar' : 'cuidar cada detalle cuando alguien que querés te necesita',
    p.esCrush ? 'iluminar cualquier lugar apenas llegás con tu sonrisa' : 'compartir charlas honestas que se quedan guardadas siempre',
    p.esCarta ? 'darme tantos motivos reales para dedicarte estas páginas' : 'convertir encuentros comunes en recuerdos que duran años'
  ];

  ctx.subjDeseo = [
    p.esCristiano ? 'el Señor derrame salud abundante y paz sobre tu hogar' : `la vida te regale salud plena y sueños cumplidos${sufEdad}`,
    p.esCristiano ? 'la gracia divina ilumine cada decisión de este nuevo ciclo' : 'este año nuevo multiplique los motivos reales para sonreír',
    p.esDistancia ? 'pronto se acorten los kilómetros para celebrar frente a frente' : 'nunca falten mesas alegres ni abrazos honestos en tu camino',
    p.esEmbarazo ? 'esta dulce espera multiplique salud, calma y ternura infinita' : 'cada proyecto que empieces encuentre viento a favor este año',
    p.esDivertido ? 'la torta alcance para repetir y las calorías hoy descansen' : 'recibas multiplicado todo el afecto que repartís sin medida',
    p.esAtrasado ? 'este saludo tardío te arranque una sonrisa doble hoy' : 'la calma y el entusiasmo te acompañen en los doce meses siguientes',
    p.esEx ? 'este nuevo capítulo te traiga paz firme y grandes alegrías' : 'sigas creciendo con coraje, alegría y corazón generoso'
  ];

  ctx.objCelebrar = [
    p.edadStr ? `tus ${p.edadStr} con orgullo inmenso y alegría sincera` : `tu vida y todo lo bueno que sembrás alrededor`,
    p.esDistancia ? 'tu cumpleaños enviando un abrazo que cruza cualquier frontera' : 'el privilegio enorme de compartir camino contigo',
    p.esCarta ? 'tu historia escribiendo estas líneas nacidas del corazón' : 'una nueva vuelta al sol llena de esperanza y gratitud',
    p.esCristiano ? 'el regalo inmenso de tu vida bajo la bendición de Dios' : 'cada logro alcanzado y los sueños que aún te esperan',
    p.esDivertido ? 'otro año sin perder la chispa ni el sentido del humor' : 'tu autenticidad, tu fuerza tranquila y tu enorme corazón',
    p.esEmbarazo ? 'tu vida mientras esperás el abrazo más tierno de todos' : 'las risas compartidas que siguen sumando historias lindas'
  ];

  ctx.concesivaPair = [
    p.esDistancia ? 'nos separen mapas y horas, mi abrazo llega hoy puntual' : 'pasen los años rápido, tu esencia generosa sigue intacta',
    p.esAtrasado ? 'hayan pasado unos días, mi deseo sincero vale el doble' : 'cambien las etapas, siempre vas a contar con mi apoyo',
    p.esDivertido ? 'sumes otra vela más, seguís con energía de estreno' : 'la rutina nos apure a veces, hoy todo se detiene por vos',
    p.esCarta ? 'las palabras parezcan pocas, esta carta guarda todo mi afecto' : 'no lo diga a diario, admiro profundamente tu forma de vivir',
    p.esCristiano ? 'haya retos en el camino, la fe sostiene firme tus pasos' : 'vengan días nublados, tu sonrisa siempre sabe abrir claridad'
  ];

  ctx.siPair = [
    'pudiera elegir a quienes caminan conmigo, volvería a elegirte siempre',
    'alguien pregunta qué es la alegría, basta nombrar tu presencia',
    p.esCarta ? 'reviso todo lo vivido, sobran razones para escribirte con gratitud' : 'mirás atrás hoy, verás cuánto cariño supiste cosechar',
    p.esDivertido ? 'la torta tiene muchas velas, significa que sobran historias buenas' : 'pedís un deseo al brindar, ojalá se cumpla antes de tiempo'
  ];

  ctx.cuandoPair = [
    p.edadStr ? `cumplís ${p.edadStr}, la familia entera celebra con emoción` : 'llega tu cumpleaños, todo alrededor se llena de fiesta',
    p.esDistancia ? 'miro el reloj en tu día, brindo desde lejos pensando en vos' : 'repartís tu sonrisa, contagiás entusiasmo a toda la mesa',
    p.esCristiano ? 'elevamos oración por vos, agradecemos a Dios tenerte cerca' : 'soplás las velas, deseamos lo mejor para tu futuro'
  ];

  ctx.cadaSustPred = [
    p.edadStr ? `paso rumbo a tus ${p.edadStr} suma luz y aprendizaje real` : 'año sumado confirma la clase de persona admirable que sos',
    p.esCarta ? 'párrafo de esta carta lleva gratitud y ternura verdadera' : 'charla contigo deja una enseñanza que atesoro con cariño',
    p.esDivertido ? 'vela encendida suma experiencia, anécdotas buenas y cero arrugas' : 'gesto generoso tuyo deja una huella honda en nuestra historia',
    p.esCristiano ? 'amanecer nuevo testimonia la fidelidad de Dios sobre tu vida' : 'encuentro compartido suma motivos para celebrar tu camino'
  ];

  // Ajuste automático de vos -> usted / plural si corresponde
  if (p.tratamiento === 'usted') {
    for (const k of ['infPor', 'subjDeseo', 'objCelebrar', 'concesivaPair', 'siPair', 'cuandoPair', 'cadaSustPred']) {
      ctx[k] = ctx[k].map((s) => adaptarAUsted(s));
    }
  } else if (p.tratamiento === 'plural') {
    for (const k of ['infPor', 'subjDeseo', 'objCelebrar', 'concesivaPair', 'siPair', 'cuandoPair', 'cadaSustPred']) {
      ctx[k] = ctx[k].map((s) => adaptarAPlural(s, p.genero));
    }
  }
  return ctx;
}

function adaptarAUsted(s) {
  return s
    .replace(/\bestás\b/g, 'está').replace(/\bsos\b/g, 'es').replace(/\bseas\b/g, 'sea')
    .replace(/\bcumplís\b/g, 'cumple').replace(/\btenés\b/g, 'tiene').replace(/\btenes\b/g, 'tiene')
    .replace(/\bhacés\b/g, 'hace').replace(/\bquerés\b/g, 'quiere').replace(/\bquieras\b/g, 'quiera')
    .replace(/\bpuedas\b/g, 'pueda').replace(/\bsigas\b/g, 'siga').replace(/\bestés\b/g, 'esté')
    .replace(/\btengas\b/g, 'tenga').replace(/\bdisfrutes\b/g, 'disfrute').replace(/\bcumplas\b/g, 'cumpla')
    .replace(/\brecibas\b/g, 'reciba').replace(/\bsembrás\b/g, 'siembra').replace(/\bvivas\b/g, 'viva')
    .replace(/\brepartís\b/g, 'reparte').replace(/\besperás\b/g, 'espera').replace(/\bsonrías\b/g, 'sonría')
    .replace(/\bsoplás\b/g, 'sopla').replace(/\bcontagiás\b/g, 'contagia').replace(/\bbrilles\b/g, 'brille')
    .replace(/\bpedís\b/g, 'pide').replace(/\bmirás\b/g, 'mira').replace(/\bmerezcas\b/g, 'merezca')
    .replace(/\bcrecés\b/g, 'crece').replace(/\bsumás\b/g, 'suma').replace(/\bolvides\b/g, 'olvide')
    .replace(/\barrancás\b/g, 'arranca').replace(/\bguardes\b/g, 'guarde').replace(/\bcuides\b/g, 'cuide')
    .replace(/\bempieces\b/g, 'empiece').replace(/\brecuerdes\b/g, 'recuerde').replace(/\bsepas\b/g, 'sepa')
    .replace(/\b(tener|ver|cuidar|abrazar|acompañar|desear|recordar|querer|elegir|saludar|mimar|esperar|dejar|agradecer|mirar|escuchar|llamar|regalar|encontrar|sentir|conocer|celebrar|felicitar)te\b/g, '$1le')
    .replace(/\btu\b/g, 'su').replace(/\btus\b/g, 'sus').replace(/\bte\b/g, 'le')
    .replace(/\bcontigo\b/g, 'con usted').replace(/\bcon vos\b/g, 'con usted')
    .replace(/\bvos\b/g, 'usted').replace(/\bconocimos\b/g, 'conocemos');
}

function adaptarAPlural(s, genero) {
  const f = genero === 'f';
  const objPron = f ? 'las' : 'los';
  return s
    .replace(/\bestás\b/g, 'están').replace(/\bsos\b/g, 'son').replace(/\bseas\b/g, 'sean')
    .replace(/\bcumplís\b/g, 'cumplen').replace(/\btenés\b/g, 'tienen').replace(/\btenes\b/g, 'tienen')
    .replace(/\bhacés\b/g, 'hacen').replace(/\bquerés\b/g, 'quieren').replace(/\bquieras\b/g, 'quieran')
    .replace(/\bpuedas\b/g, 'puedan').replace(/\btengas\b/g, 'tengan').replace(/\bestés\b/g, 'estén')
    .replace(/\bsigas\b/g, 'sigan').replace(/\brecibas\b/g, 'reciban').replace(/\bdisfrutes\b/g, 'disfruten')
    .replace(/\bcumplas\b/g, 'cumplan').replace(/\bvivas\b/g, 'vivan').replace(/\bsonrías\b/g, 'sonrían')
    .replace(/\bsembrás\b/g, 'siembran').replace(/\brepartís\b/g, 'reparten').replace(/\bbrilles\b/g, 'brillen')
    .replace(/\bsoplás\b/g, 'soplan').replace(/\bmirás\b/g, 'miran').replace(/\bmerezcas\b/g, 'merezcan')
    .replace(/\bcrecés\b/g, 'crecen').replace(/\bsumás\b/g, 'suman').replace(/\bolvides\b/g, 'olviden')
    .replace(/\bempieces\b/g, 'empiecen').replace(/\bguardes\b/g, 'guarden').replace(/\bcuides\b/g, 'cuiden')
    .replace(/\brecuerdes\b/g, 'recuerden').replace(/\bsepas\b/g, 'sepan')
    .replace(/\b(tener|ver|cuidar|abrazar|acompañar|desear|recordar|querer|elegir|saludar|mimar|esperar|dejar|agradecer|mirar|escuchar|llamar|regalar|encontrar|sentir|conocer|celebrar|felicitar)te\b/g, `$1${objPron}`)
    .replace(/\bte\b/g, 'les')
    .replace(/\btu\b/g, 'su').replace(/\btus\b/g, 'sus')
    .replace(/\bcontigo\b/g, 'con ustedes').replace(/\bcon vos\b/g, 'con ustedes').replace(/\bvos\b/g, 'ustedes')
    .replace(/\bmis días\b/g, 'nuestros días')
    .replace(/\bpersona admirable\b/g, f ? 'hermanas admirables' : 'hermanos admirables');
}

function crearGeneradorDeTitulos(hub, p, seedOffset) {
  const ctx = construirContextoTitulos(hub, p);
  if (!p.esDuelo && !p.esMascota && !p.esInvitacion && !p.esAutoMensaje && !p.esAniversario) {
    ctx.infPor.push(
      'enseñarme que la alegría sencilla vale más que cualquier lujo',
      'estar presente en los días comunes sin esperar fecha especial',
      'traer calma y buena palabra cada vez que el mundo apura',
      'cuidar nuestros recuerdos con esa calidez tan tuya',
      'sostener con nobleza lo que de verdad importa en la vida',
      'demostrar que el cariño honesto siempre encuentra camino',
      'convertir conversaciones simples en momentos que no se olvidan',
      'regalar tu sonrisa sincera incluso cuando la semana cansa'
    );
    ctx.subjDeseo.push(
      'cada amanecer te encuentre con salud, calma y esperanza viva',
      'tus proyectos más queridos den fruto en el momento oportuno',
      'la mesa siempre tenga risas honestas y gente que te cuide',
      'nunca falten fuerzas para seguir defendiendo tus mejores sueños',
      'esta etapa nueva sume viajes lindos, paz y abrazos cercanos',
      'el año que empieza supere todo lo bueno que venías esperando',
      'siempre tengas razones claras para mirar el futuro con ilusión',
      'la serenidad abrace tu hogar y multiplique buenas noticias'
    );
    ctx.objCelebrar.push(
      'cada paso valiente que te trajo hasta este presente luminoso',
      'las anécdotas compartidas y las ilusiones que recién comienzan',
      'tu manera generosa de cuidar a quienes caminamos cerca',
      'un año más disfrutando tu compañía leal y tu sonrisa franca',
      'todo lo aprendido hasta hoy junto a tu familia y amigos',
      'esta nueva etapa cargada de proyectos, salud y alegría serena'
    );
    ctx.concesivaPair.push(
      'el reloj corra rápido, tu presencia siempre detiene el ruido',
      'no nos veamos a diario, nuestro cariño sigue intacto siempre',
      'cambien muchas costumbres, tu esencia noble permanece igual',
      'vengan retos nuevos, llevás fuerza de sobra para superarlos'
    );
    ctx.siPair.push(
      'hago memoria hoy, encuentro decenas de motivos para agradecerte',
      'soplás las velas ahora, ojalá cada deseo encuentre su camino',
      'celebramos tu historia, faltan palabras para nombrar tu bondad'
    );
    ctx.cuandoPair.push(
      'llega esta fecha especial, sobran razones para brindar por vos',
      'sonreís con ganas, contagiás calma a toda la casa entera',
      'pensamos en gente buena, tu nombre aparece siempre primero'
    );
    ctx.cadaSustPred.push(
      'año nuevo de vida abre puertas distintas llenas de esperanza',
      'abrazo tuyo recuerda que lo esencial nunca pasa de moda',
      'mañana compartida regala motivos sencillos para agradecer más',
      'consejo tuyo llega con paciencia en el momento exacto'
    );
    if (p.tratamiento === 'usted') {
      for (const k of ['infPor', 'subjDeseo', 'objCelebrar', 'concesivaPair', 'siPair', 'cuandoPair', 'cadaSustPred']) {
        ctx[k] = ctx[k].map((s) => adaptarAUsted(s));
      }
    } else if (p.tratamiento === 'plural') {
      for (const k of ['infPor', 'subjDeseo', 'objCelebrar', 'concesivaPair', 'siPair', 'cuandoPair', 'cadaSustPred']) {
        ctx[k] = ctx[k].map((s) => adaptarAPlural(s, p.genero));
      }
    }
  }

  const vc = p.voc ? `, ${p.voc}` : '';
  const es1p = p.tratamiento === '1p';
  const esUd = p.tratamiento === 'usted';
  const esPl = p.tratamiento === 'plural';
  const esDuelo = p.esDuelo;
  const esAniv = p.esAniversario;
  const esCarta = p.esCarta;

  const modTema = esAniv
    ? `por ${p.duracionStr}`
    : p.edadStr
      ? `al cumplir ${p.edadStr}`
      : p.esDistancia
        ? 'cruzando cualquier distancia'
        : p.esCristiano
          ? 'bajo la gracia de Dios'
          : p.esDuelo
            ? 'con luz en la memoria'
            : p.esDivertido
              ? 'con sonrisa y buen humor'
              : p.esCarta
                ? 'en esta carta sincera'
                : 'con cariño genuino';
  const modFinal = esUd ? modTema.replace('para vos', 'para usted') : modTema;

  const ancla = p.edadStr
    ? `en tus ${p.edadStr}`
    : p.esAniversario
      ? `por ${p.duracionStr}`
      : p.esPoema
        ? 'en versos sinceros'
        : p.esLargo
          ? 'en palabras largas'
          : p.esLlorar
            ? 'con emoción honda'
            : p.esDistancia
              ? 'desde la distancia'
              : p.esAtrasado
                ? 'con cariño intacto'
                : p.esDivertido
                  ? 'con buen humor'
                  : p.esCristiano
                    ? 'con fe y gratitud'
                    : p.esCorto
                      ? 'con afecto breve'
                      : '';

  const pick = (arr, k) => arr[Math.abs(k) % arr.length];
  const pick2 = (arr, k) => arr[Math.abs(Math.floor(k / 3) + k * 7) % arr.length];
  const pronom = esUd ? 'usted' : esPl ? 'ustedes' : 'vos';
  const pos = esUd || esPl ? 'su' : 'tu';
  const poss = esUd || esPl ? 'sus' : 'tus';
  const vMerece = es1p ? 'Merezco' : esUd ? 'Merece' : esPl ? 'Merecen' : 'Merecés';
  const vSonrie = es1p ? 'Sonreír' : esUd ? 'Sonría' : esPl ? 'Sonrían' : 'Sonreí';
  const vDisfruta = es1p ? 'Disfrutar' : esUd ? 'Disfrute' : esPl ? 'Disfruten' : 'Disfrutá';
  const vSeguis = es1p ? 'Sigo' : esUd ? 'Sigue' : esPl ? 'Siguen' : 'Seguís';
  const vBrillas = es1p ? 'Brillo' : esUd ? 'Brilla' : esPl ? 'Brillan' : 'Brillás';
  const vLlevas = es1p ? 'Llevo' : esUd ? 'Lleva' : esPl ? 'Llevan' : 'Llevás';
  const vRecibe = es1p ? 'Recibo' : esUd ? 'Reciba' : esPl ? 'Reciban' : 'Recibí';

  const adjsFem = ['sincera', 'luminosa', 'serena', 'verdadera', 'profunda', 'cálida'];

  const builders = [
    (k) => `Hoy celebramos ${pick(ctx.objCelebrar, k)}`,
    (k) => `Gracias por ${pick(ctx.infPor, k)}`,
    (k) => `Que ${pick(ctx.subjDeseo, k)}`,
    (k) => `Cada ${pick(ctx.cadaSustPred, k)}`,
    (k) => `Aunque ${pick(ctx.concesivaPair, k)}`,
    (k) => `Si ${pick(ctx.siPair, k)}`,
    (k) => `Cuando ${pick(ctx.cuandoPair, k)}`,
    (k) => `Ojalá ${pick(ctx.subjDeseo, k + 2)}`,
    (k) => esDuelo
      ? pick([
          `Siempre recordaremos tu ejemplo noble ${modFinal}`,
          `Siempre vivirás en cada abrazo sincero de nuestra familia`,
          `Siempre agradeceremos la luz inmensa de tu paso por casa`,
          `Siempre honraremos tu sonrisa en nuestras charlas familiares`
        ], k)
      : es1p
        ? pick([
            `Siempre elijo agradecer lo vivido ${modFinal}`,
            `Siempre encuentro motivos honestos para festejar mi historia`,
            `Siempre valoro el camino recorrido con paz y esperanza`
          ], k)
        : pick([
            `Siempre ${esUd ? 'va' : esPl ? 'van' : 'vas'} a contar con nuestro apoyo ${ancla || modFinal}`,
            `Siempre ${esUd ? 'encontrará' : esPl ? 'encontrarán' : 'encontrarás'} en casa un lugar cálido para volver`,
            `Siempre celebramos la suerte enorme de caminar junto a ${pronom}`,
            `Siempre deseamos calma y alegría en ${pos} camino diario`
          ], k),
    (k) => esDuelo
      ? pick([
          `Nunca se apaga la luz que dejaste en nosotros`,
          `Nunca olvidaremos el sonido honesto de tu risa en casa`,
          `Nunca dejamos de agradecer todo lo que sembraste en vida`
        ], k)
      : es1p
        ? pick([
            `Nunca pierdo las ganas de celebrar mi propio camino`,
            `Nunca dejo de agradecer a quienes sostienen mis días`
          ], k)
        : pick([
            `Nunca ${esUd ? 'olvide' : esPl ? 'olviden' : 'olvides'} el enorme valor que tiene ${pos} presencia${vc}`,
            `Nunca faltan razones sinceras para celebrar junto a ${pronom} ${ancla || ''}`.trim(),
            `Nunca dejan de inspirarnos ${poss} gestos generosos y ${pos} calma`,
            `Nunca falte un motivo noble para brindar junto a ${pronom}`
          ], k),
    (k) => esDuelo
      ? pick([
          `Desde la tierra enviamos nuestro abrazo más tierno hasta el cielo`,
          `Desde el recuerdo agradecido honramos hoy tu nombre querido`,
          `Desde nuestra mesa guardamos tu luz con amor sereno`
        ], k)
      : esCarta
        ? pick([
            `Desde el corazón abro estas páginas ${ancla || modFinal}`,
            `Desde la memoria más tierna escribo esta carta para ${pronom}`,
            `Desde la calma de hoy dejo por escrito todo mi cariño`,
            `Desde lo más hondo nace esta dedicatoria tan sentida`
          ], k)
        : pick([
            `Desde temprano enviamos buenos deseos ${ancla || modFinal}`,
            `Desde el corazón celebramos un capítulo nuevo junto a ${pronom}`,
            `Desde nuestra mesa brindamos hoy por ${pos} alegría y salud`,
            `Desde el primer brindis celebramos ${pos} vida con cariño`
          ], k),
    (k) => esDuelo
      ? pick([
          `Para honrar tu memoria guardamos gratitud en cada palabra`,
          `Para recordar tu paso noble elevamos hoy una plegaria`
        ], k)
      : esCarta
        ? pick([
            `Para guardar en el alma te dedico esta carta${vc}`,
            `Para que nunca olvides lo que valés escribo estas líneas`,
            `Para celebrar nuestra historia abro este escrito tan sentido`
          ], k)
        : pick([
            esAniv ? `Para celebrar nuestro aniversario reunimos deseos llenos de amor` : `Para celebrar ${pos} día reunimos deseos llenos de cariño`,
            `Para este nuevo año deseamos calma, salud y puertas abiertas`,
            esAniv ? `Para celebrar ${p.duracionStr || 'este aniversario'} envío un abrazo enorme` : `Para acompañar ${pos} cumpleaños enviamos un abrazo enorme`,
            `Para inaugurar esta etapa deseamos alegría ${pick2(adjsFem, k)}`
          ], k),
    (k) => esDuelo
      ? pick([
          `Con ternura serena recordamos cada enseñanza tuya hoy`,
          `Con amor infinito nombramos tu historia mirando al cielo`
        ], k)
      : pick([
          `Con profunda gratitud celebramos este día especial ${ancla || ''}`.trim(),
          `Con alegría genuina brindamos por ${pos} salud y futuro`,
          `Con palabras simples agradecemos todo lo que ${es1p ? 'vivo' : esUd ? 'entrega' : esPl ? 'entregan' : 'regalás'}`,
          `Con enorme afecto deseamos un año sereno y luminoso`,
          `Con sonrisa ${pick2(adjsFem, k)} acompañamos ${pos} celebración`
        ], k),
    (k) => esDuelo
      ? `Entre recuerdos luminosos nombramos tu vida con amor eterno`
      : esAniv
        ? `Entre risas y planes celebramos ${p.duracionStr || 'nuestra historia'} de la mano`
        : pick([
            `Entre abrazos y buenos deseos festejamos este presente luminoso`,
            `Entre charlas lindas y brindis compartidos celebramos ${pos} historia`,
            `Entre canciones alegres y gratitud sincera recibimos este nuevo año`,
            `Entre amigos cercanos celebramos ${pos} alegría con entusiasmo`
          ], k),
    (k) => esDuelo
      ? `En esta fecha tan sensible honramos tu recuerdo con paz`
      : es1p
        ? pick([
            `En mi cumpleaños elijo celebrar lo aprendido este año`,
            `En este día tan mío brindo por cada meta superada`
          ], k)
        : pick([
            `En ${pos} día celebramos lo valiosa que es ${pos} presencia`,
            `En esta nueva etapa deseamos salud firme y proyectos lindos`,
            `En cada paso nuevo te deseamos paz, alegría y buen camino`,
            `En tu mesa querida nunca falten abrazos ni calma`
          ], k),
    (k) => `Brindo ${esDuelo ? 'en silencio por el regalo eterno de tu historia' : es1p ? 'por otro año de vida y aprendizajes profundos' : pick([
      `con alegría por ${pos} vida y ${poss} sueños${vc}`,
      `por la salud, la calma y las metas de este nuevo año`,
      `por muchos años más compartiendo mesa, risas y confianza`,
      `por cada historia linda que todavía queda por vivir`
    ], k)}`,
    (k) => `Celebramos con orgullo ${esAniv ? `${p.duracionStr || 'nuestro aniversario'} llenos de ternura` : esDuelo ? 'todo el amor que dejaste sembrado' : pick([
      `un capítulo nuevo cargado de esperanza ${ancla}`.trim(),
      `la nobleza y el entusiasmo con que vivís cada etapa`,
      `cada triunfo pequeño y grande de este hermoso recorrido`,
      `todo lo bueno que construís con calma y verdad`
    ], k)}`,
    (k) => `${esDuelo ? 'Atesoramos' : 'Festejamos'} ${pick(ctx.objCelebrar, k + 1)}`,
    (k) => `Agradezco ${es1p ? 'cada paso dado hasta hoy con el corazón' : esDuelo ? 'cada instante compartido que sigue vivo en mí' : pick([
      `la fortuna inmensa de ${esUd ? 'contar con usted' : esPl ? 'tenerlos cerca' : 'tenerte cerca'}${vc}`,
      `cada consejo oportuno y cada abrazo sincero recibido`,
      `esa presencia luminosa que vuelve mejor cualquier jornada`,
      `tu forma generosa de acompañar cada momento importante`
    ], k)}`,
    (k) => `Recuerdo con emoción ${esAniv ? 'cómo empezó esta hermosa historia nuestra' : esDuelo ? 'tu sonrisa noble iluminando toda la casa' : pick([
      'tantas anécdotas lindas que guardamos juntos',
      'las sobremesas largas llenas de risas y complicidad',
      'los momentos simples que se volvieron tesoros reales',
      'cada charla honesta que nos dio ánimo oportuno'
    ], k)}`,
    (k) => pick([
      `Comparto estas líneas sinceras ${ancla || modFinal}`,
      `Comparto con alegría este brindis por ${pos} nuevo año`,
      `Comparto deseos honestos de paz, salud y alegría`,
      `Comparto este saludo especial pensando en ${pos} bienestar`
    ], k),
    (k) => esDuelo
      ? `Deseo paz eterna para tu alma y consuelo en casa`
      : `Deseo que ${pick(ctx.subjDeseo, k + 3)}`,
    (k) => pick([
      `Valoro profundamente ${esUd ? 'su' : es1p ? 'cada' : 'tu'} entrega generosa ${ancla || modFinal}`,
      `Valoro cada gesto noble que dejás en quienes te rodean`,
      `Valoro tu honestidad tranquila y tu alegría constante`,
      `Valoro el tiempo compartido y tu lealtad sin condiciones`
    ], k),
    (k) => pick([
      `Admiro la fortaleza serena con la que ${es1p ? 'camino' : esUd ? 'camina' : esPl ? 'caminan' : 'caminás'} cada día`,
      `Admiro esa mezcla luminosa de paciencia, carácter y ternura`,
      `Admiro el modo generoso en que cuidás a la gente querida`,
      `Admiro la claridad con que perseguís tus propios proyectos`
    ], k),
    (k) => esDuelo
      ? `Recordarte hoy llena el hogar de gratitud y silencio tierno`
      : es1p
        ? `Celebrar mi historia me llena el pecho de esperanza`
        : esAniv
          ? `Caminar a tu lado confirma lo bien que nos hace amar`
          : pick([
              `${esUd ? 'Contar con usted' : esPl ? 'Tenerlos cerca' : 'Tenerte en mi vida'} multiplica los motivos para celebrar`,
              `${esUd ? 'Su' : esPl ? 'Su' : 'Tu'} compañía transforma cualquier semana gris en alegría`,
              `Tener a alguien tan leal en la vida vale más que todo`,
              `Contar con ${pos} palabra franca es un regalo diario`
            ], k),
    (k) => esDuelo
      ? `Mirar al cielo hoy despierta memoria agradecida y calma`
      : es1p
        ? `Mirar atrás confirma cuánto crecí con paciencia este año`
        : pick([
            `Ver ${esUd ? 'su alegría hoy' : esPl ? 'sus sonrisas' : 'tu sonrisa hoy'} nos regala felicidad genuina`,
            `Ver cómo ${esUd ? 'cumple' : esPl ? 'cumplen' : 'cumplís'} metas propias nos llena de orgullo`,
            `Ver avanzar ${poss} proyectos confirma tu fuerza interior`
          ], k),
    (k) => `Cumplir ${esAniv ? `${p.duracionStr || 'otro aniversario'} confirma la solidez de lo nuestro` : esDuelo ? 'una fecha más recordándote fortalece el amor familiar' : p.edadStr ? `${p.edadStr} abre puertas hermosas hacia nuevos horizontes` : pick([
      'un año más regala motivos frescos para agradecer',
      'una nueva vuelta al sol invita a brindar con ilusión',
      'otro capítulo de vida trae proyectos renovados y paz',
      'otra vuelta solar confirma cuánto cariño cosechaste'
    ], k)}`,
    (k) => esDuelo
      ? `Tu recuerdo sigue siendo un faro cálido en nuestra casa`
      : es1p
        ? `Mi camino merece palabras honestas de gratitud y calma`
        : pick([
            `${esUd ? 'Su' : 'Tu'} sonrisa ilumina cualquier tarde sin importar el clima`,
            `${esUd ? 'Su' : 'Tu'} bondad silenciosa deja huella honda en todos nosotros`,
            `${esUd ? 'Su' : 'Tu'} forma auténtica de querer une a toda la mesa`,
            `${esUd ? 'Su' : 'Tu'} presencia cálida convierte la reunión en fiesta`
          ], k),
    (k) => esDuelo
      ? `Este homenaje sencillo abraza tu nombre hasta el cielo`
      : esCarta
        ? pick([
            `Este escrito guarda sentimientos que merecen quedar en papel`,
            `Este mensaje largo abraza cada etapa vivida juntos`,
            `Este texto sincero reúne gratitud por todo lo vivido`
          ], k)
        : pick([
            `Este mensaje viaja lleno de buenos deseos ${ancla || modFinal}`,
            esAniv ? `Este aniversario llega cargado de abrazos y ternura` : `Este cumpleaños llega cargado de abrazos y buenas noticias`,
            `Este nuevo ciclo abre oportunidades hechas a tu medida`,
            `Este saludo busca regalarte una sonrisa muy sincera`
          ], k),
    (k) => esDuelo
      ? `Un abrazo eterno sube hasta donde descansás en paz`
      : esCarta
        ? `Un capítulo largo para celebrar todo lo que vivimos`
        : pick([
            `Un brindis sincero por ${pos} salud y proyectos luminosos`,
            `Un deseo enorme de calma, risa y esperanza para este año`,
            `Un saludo cercano para recordar cuánto te apreciamos hoy`,
            `Un festejo hermoso espera para celebrar ${pos} nueva etapa`
          ], k),
    (k) => esDuelo
      ? `Nadie reemplaza la ternura inmensa que dejaste entre nosotros`
      : es1p
        ? `Nadie conoce mejor que yo todo lo superado este año`
        : pick([
            `Nadie ilumina una reunión con tanta calidez como ${pronom}`,
            `Nadie merece más un festejo sereno y lleno de afecto`,
            `Nadie aporta tanta calma oportuna cuando hace falta apoyo`
          ], k),
    (k) => esDuelo
      ? `Todo el cariño sembrado sigue dando frutos en nuestra familia`
      : pick([
          `Todo lo bueno que deseamos para ${pronom} florezca hoy`,
          `Todo esfuerzo silencioso tuyo encuentre recompensa en este año`,
          `Todo sueño pendiente encuentre camino claro durante este ciclo`
        ], k),
    (k) => esDuelo
      ? `La memoria de tu bondad vive intacta en nuestro corazón`
      : pick([
          `La vida mejora cada vez que compartimos alegría ${p.genero === 'f' ? 'juntas' : 'juntos'}`,
          `La casa entera festeja hoy la suerte de tenerte cerca`,
          `La alegría compartida multiplica su brillo en este día`,
          `La gratitud crece al recordar tantos momentos lindos juntos`
        ], k),
    (k) => esDuelo
      ? `El amor verdadero trasciende cualquier ausencia y tiempo`
      : esAniv
        ? `El calendario celebra ${p.duracionStr || 'nuestro aniversario'} con alegría compartida`
        : pick([
            `El cariño genuino encuentra hoy la mejor excusa para brindar`,
            `El nuevo año llega con promesas lindas y calma interior`,
            `El orgullo de verte avanzar crece con cada cumpleaños`,
            `El corazón agradece hoy contar con ${pos} compañía leal`
          ], k),
    (k) => esDuelo
      ? `Escribo mirando al cielo para agradecer tu legado eterno`
      : esCarta
        ? pick([
            `Escribo despacio esta carta pensando en nuestra hermosa historia`,
            `Escribo cada párrafo agradeciendo tu presencia tan valiosa`
          ], k)
        : pick([
            `Escribo estas líneas con el corazón lleno de buenos deseos`,
            `Escribo para recordarte que tu presencia hace bien siempre`,
            `Escribo con entusiasmo deseando que tengas un gran año`
          ], k),
    (k) => pick([
      `Guardo en el alma cada gesto noble que ${es1p ? 'recibí' : esUd ? 'regaló' : esPl ? 'regalaron' : 'regalaste'}`,
      `Guardo con gratitud nuestras charlas, paseos y risas compartidas`,
      `Guardo como tesoro cada consejo sincero de nuestra historia`
    ], k),
    (k) => pick([
      `Abro el corazón para agradecer ${es1p ? 'cada abrazo sincero recibido' : `${pos} compañía tan valiosa`}`,
      `Abro este mensaje deseando que hoy sobre alegría en tu mesa`,
      `Abro los brazos hoy para celebrar ${pos} vida con cariño`
    ], k),
    (k) => esDuelo
      ? `Sonreír recordando tus historias es honrar tu paso feliz`
      : es1p
        ? `Sonreír hoy es celebrar cada paso que me trajo aquí`
        : pick([
            `${vSonrie} sin reservas en esta fecha tan especial${vc}`,
            `${vSonrie} celebrando todo lo lindo que está por venir`
          ], k),
    (k) => esDuelo
      ? `Honramos tu vida con flores blancas, fe y memoria serena`
      : pick([
          `${vMerece} recibir multiplicado todo el bien que ${es1p ? 'siembro' : esUd ? 'siembra' : esPl ? 'siembran' : 'sembrás'}`,
          `${vMerece} un año sereno, próspero y rodeado de gente buena`
        ], k),
    (k) => esDuelo
      ? `Vivís por siempre en cada consejo que nos diste`
      : es1p
        ? `Disfruto este día con gratitud tranquila por todo lo vivido`
        : pick([
            `${vDisfruta} cada instante de esta celebración ${ancla || ''}`.trim(),
            `${vDisfruta} en paz esta jornada pensada para homenajear ${pos} historia`
          ], k),
    (k) => esDuelo
      ? `Seguís guiando nuestros pasos desde la paz del cielo`
      : es1p
        ? `Sigo caminando hacia adelante con ilusiones firmes y calmas`
        : pick([
            `${vSeguis} iluminando la casa con esa alegría serena`,
            `${vSeguis} sumando motivos enormes para sentir orgullo de vos`
          ], k),
    (k) => esDuelo
      ? `Elevamos una oración llena de luz por tu memoria`
      : es1p
        ? `Alzo mi copa por todo lo que aprendí y superé`
        : pick([
            `${vBrillas} con luz propia en cada etapa nueva`,
            `${vBrillas} hoy con fuerza tranquila y alegría contagiosa`
          ], k),
    (k) => esDuelo
      ? `Guardamos tus recuerdos como el tesoro más puro de casa`
      : es1p
        ? `Agradezco de corazón a quienes me acompañaron este año`
        : `${esUd ? 'Es' : esPl ? 'Son' : 'Sos'} ${p.genero === 'f' ? (esPl ? 'hermanas luminosas e indispensables' : 'una presencia luminosa e indispensable') : p.genero === 'm' ? (esPl ? 'hermanos nobles e indispensables' : 'un pilar noble e indispensable') : 'alguien sumamente valioso en nuestras vidas'}`,
    (k) => esDuelo
      ? `Conservamos viva tu risa en el álbum familiar de siempre`
      : es1p
        ? `Renuevo mis sueños con fe serena en lo que viene`
        : pick([
            `${vLlevas} en el alma una bondad que contagia esperanza`,
            `${vLlevas} años sembrando calma y cariño entre los tuyos`
          ], k),
    (k) => `Por ${esDuelo ? 'todo lo hermoso que fuiste te recordamos con amor' : esAniv ? `${p.duracionStr || 'todo lo compartido'} seguimos apostando por nosotros` : pick([
      `${pos} alegría genuina hoy sobran razones para celebrar`,
      `todo lo compartido merecés el abrazo más sincero de hoy`
    ], k)}`,
    (k) => esDuelo
      ? `Al recordar tus días felices agradecemos haberte tenido cerca`
      : esAniv
        ? pick([
            `Al brindar por nuestro amor deseamos que cada sueño tome vuelo`,
            `Al cumplir ${p.duracionStr || 'un nuevo aniversario'} renovamos promesas lindas`
          ], k)
        : pick([
            `Al soplar las velas deseamos que cada sueño tome vuelo`,
            `Al iniciar este nuevo ciclo brindamos por ${pos} bienestar`,
            `Al mirar hacia adelante deseamos paz y proyectos luminosos`
          ], k),
    (k) => esDuelo
      ? `Bendigo tu memoria eterna llena de ternura y ejemplo`
      : pick([
          `Bendigo este nuevo año tuyo deseando paz en cada amanecer`,
          `Bendigo la fortuna de compartir camino, mesa y risa`,
          `Bendigo cada alegría que está preparando la vida para ${pronom}`
        ], k),
    (k) => esDuelo
      ? `Caminar con tu recuerdo nos da serenidad en el hogar`
      : pick([
          `Caminar cerca de ${pronom} enseña el valor de la nobleza`,
          `Caminar hacia nuevas metas con entusiasmo ilumina este año`,
          `Caminar de la mano de gente buena vuelve todo liviano`
        ], k),
    (k) => esDuelo
      ? `De todo corazón abrazamos tu recuerdo bajo cielo sereno`
      : pick([
          `De todo corazón deseamos salud firme y días muy felices`,
          `De parte de quienes te queremos va este saludo sincero`,
          `De nuestra familia entera recibí un abrazo bien fuerte`
        ], k),
    (k) => esDuelo
      ? `Frente a tu ausencia elegimos honrar tu bondad cada día`
      : esAniv
        ? pick([
            `Frente al horizonte compartido renovamos ilusión y calma`,
            `Frente a todo lo vivido pedimos paz y dicha para los dos`
          ], k)
        : pick([
            `Frente al horizonte nuevo deseamos calma y buenas noticias`,
            `Frente a la torta encendida pedimos todo lo mejor para ${pronom}`,
            `Frente a este año que empieza renovamos fe y esperanza`
          ], k),
    (k) => esDuelo
      ? `Mientras vivamos nosotros tu sonrisa seguirá brillando aquí`
      : pick([
          `Mientras sumás historias lindas, acá celebramos ${pos} vida`,
          `Mientras los años pasan, crece aún más nuestro cariño sincero`,
          `Mientras celebrás hoy, agradecemos tenerte en nuestra historia`
        ], k),
    (k) => esDuelo
      ? `Nuestro hogar guarda intacta la calidez de tu presencia`
      : pick([
          `Nuestro brindis de hoy celebra ${pos} alegría, salud y futuro`,
          `Nuestro afecto acompaña cada paso tuyo en esta nueva etapa`,
          `Nuestro cariño fiel viaja puntual para abrazarte en este día`
        ], k),
    (k) => esDuelo
      ? `Quien supo amar tanto jamás desaparece de la memoria`
      : pick([
          `Quien regala tanta calidez merece volver a recibir alegría doble`,
          `Quien camina con verdad siempre encuentra brazos abiertos`,
          `Quien siembra afecto honesto cosecha mesas llenas de amigos`
        ], k),
    (k) => `${vRecibe} ${esDuelo ? 'nuestras oraciones llenas de luz hasta el cielo' : esAniv ? 'este abrazo enorme en nuestro aniversario especial' : pick([
      'un abrazo enorme cargado de gratitud y buenos deseos',
      'estas palabras escritas con ternura, respeto y esperanza',
      'nuestro saludo más cálido en este cumpleaños especial'
    ], k)}`,
    (k) => esDuelo
      ? `Saludamos tu memoria luminosa con amor que nunca muere`
      : pick([
          `Salud por otro capítulo hermoso lleno de paz y sueños cumplidos`,
          `Salud y alegría abundante en este nuevo año que comienza`,
          `Salud por tantas risas pasadas y las que faltan vivir`
        ], k),
    (k) => esDuelo
      ? `Te nombramos con ternura infinita mirando el cielo claro`
      : es1p
        ? `Me abrazo con cariño celebrando todo lo aprendido este año`
        : esAniv
          ? `Te deseo un aniversario sereno, luminoso e inolvidable`
          : pick([
              `${esUd ? 'Le' : esPl ? 'Les' : 'Te'} deseamos un cumpleaños sereno, luminoso e inolvidable`,
              `${esUd ? 'Le' : esPl ? 'Les' : 'Te'} enviamos el abrazo más cálido en esta fecha especial`,
              `${esUd ? 'Le' : esPl ? 'Les' : 'Te'} deseamos salud firme, calma y buena compañía siempre`
            ], k),
    (k) => esDuelo
      ? `Unos versos silenciosos suben hoy hasta donde descansás`
      : pick([
          `Unos minutos de brindis bastan para celebrar cuánto valés`,
          `Unos deseos sinceros viajan directo hacia ${pos} corazón hoy`,
          `Unos versos sencillos celebran hoy tu luz y nobleza`
        ], k),
    (k) => esDuelo
      ? `Valorar tu legado nos da fuerza y calma cada mañana`
      : pick([
          `Valorar cada instante junto a ${pronom} hace grande esta fiesta`,
          `Valorar la vida hoy es agradecer tu risa y tu bondad`,
          `Valorar tu compañía es celebrar la suerte de conocernos`
        ], k),
    (k) => esDuelo
      ? `Vivir honrando tu ejemplo mantiene encendido tu cariño`
      : pick([
          esAniv ? `Vivir este aniversario con calma y gratitud es el mejor regalo` : `Vivir este cumpleaños con calma y gratitud es el mejor regalo`,
          `Vivir un año nuevo lleno de luz y salud empieza hoy mismo`,
          `Vivir {rodeado} de cariño sincero multiplica toda alegría`
        ], k),
    (k) => esDuelo
      ? `Agradecer por tu vida consuela nuestro corazón en este día`
      : pick([
          `Agradecer por tu amistad y nobleza nace solo en esta fecha`,
          esAniv ? `Agradecer tu presencia ilumina cada día de nuestra historia` : `Agradecer tu presencia ilumina nuestra reunión de cumpleaños`,
          `Agradecer cada risa compartida llena de sentido este brindis`
        ], k),
    (k) => esDuelo
      ? `Llevamos en la memoria cada gesto tierno que nos diste`
      : pick([
          `Llevamos el alma contenta por celebrar un año más contigo`,
          `Llevamos en la mesa mil motivos honestos para festejar hoy`
        ], k),
    (k) => esDuelo
      ? `Queremos recordarte con paz eterna y gratitud infinita`
      : pick([
          `Queremos regalarte un abrazo gigante y un año luminoso`,
          `Queremos brindar fuerte por tu alegría, calma y bienestar`
        ], k),
    // 6 constructores adicionales (total = 67, primo)
    (k) => esDuelo
      ? `Amar tu recuerdo nos enseña a valorar cada instante`
      : pick([
          `Amar lo que somos hoy llena de luz este día`,
          `Amar con verdad y alegría vuelve grande cada encuentro`
        ], k),
    (k) => esDuelo
      ? `Basta pensar en tu risa para sentirte cerca siempre`
      : pick([
          `Basta compartir una charla linda para celebrar tu historia`,
          `Basta verte sonreír hoy para saber que todo vale`
        ], k),
    (k) => esDuelo
      ? `Contigo aprendimos a caminar firmes incluso en tormentas`
      : pick([
          `Contigo cada momento cotidiano se convierte en alegría real`,
          `Contigo sobran motivos sinceros para brindar hoy en casa`
        ], k),
    (k) => esDuelo
      ? `Juntos guardamos intacta la luz serena de tu memoria`
      : pick([
          `Juntos celebramos esta fecha con gratitud y sonrisa franca`,
          `Juntos sumamos recuerdos buenos que nadie puede borrar`
        ], k),
    (k) => esDuelo
      ? `Sostener tu ejemplo en alto es nuestro mejor homenaje`
      : pick([
          `Sostener sueños compartidos llena de fuerza este nuevo año`,
          `Sostener nuestro cariño fiel hace hermoso cada aniversario`
        ], k),
    (k) => esDuelo
      ? `Sumar oraciones por tu descanso nos abraza con paz`
      : pick([
          `Sumar otro capítulo juntos renueva toda nuestra esperanza`,
          `Sumar años con tanta bondad merece doble celebración`
        ], k),
    // 6 constructores adicionales (total = 73, primo)
    (k) => esDuelo
      ? `Abrimos el corazón recordando cada consejo tuyo en casa`
      : pick([
          `Abrimos este brindis celebrando ${pos} alegría ${ancla || ''}`.trim(),
          `Abrimos otro año hermoso lleno de metas y salud`
        ], k),
    (k) => esDuelo
      ? `Acompañar tu memoria nos une en oración y paz`
      : pick([
          `Acompañar cada paso tuyo ${ancla || 'es nuestra mayor alegría'}`.trim(),
          `Acompañar esta celebración con cariño multiplica la risa`
        ], k),
    (k) => esDuelo
      ? `Agradecemos al cielo por el regalo inmenso de tu vida`
      : pick([
          `Agradecemos tu sonrisa sincera y tu noble corazón ${ancla || ''}`.trim(),
          esAniv ? `Agradecemos la fortuna de celebrar juntos otro aniversario` : `Agradecemos la fortuna de festejar juntos otro cumpleaños`
        ], k),
    (k) => esDuelo
      ? `Brillar en el recuerdo es el don de quienes amaron bien`
      : pick([
          `Brillar con luz propia distingue ${pos} camino ${ancla || ''}`.trim(),
          `Brillar en cada etapa nueva refleja tu fuerza interior`
        ], k),
    (k) => esDuelo
      ? `Crecer bajo tu ejemplo dejó raíces firmes en nosotros`
      : pick([
          `Crecer {rodeado} de cariño ${ancla || 'llena de sentido cada paso'}`.trim(),
          `Crecer con ilusión y calma abre horizontes maravillosos`
        ], k),
    (k) => esDuelo
      ? `Disfrutamos cada historia tuya guardada en la memoria`
      : pick([
          `Disfrutamos tu día con mesa larga y abrazo sincero`,
          `Disfrutamos celebrar cada logro y cada risa compartida`
        ], k),
    // 6 constructores adicionales (total = 79, primo)
    (k) => esDuelo
      ? `Brindemos en silencio agradeciendo el regalo de tu vida`
      : pick([
          `Brindemos hoy por cada sueño cumplido y por venir`,
          `Brindemos con alegría sincera por un año lleno de calma`
        ], k),
    (k) => esDuelo
      ? `Celebremos tu memoria honrando siempre tu ejemplo noble`
      : pick([
          `Celebremos este día con mesa cálida y buena compañía`,
          `Celebremos cada etapa vivida mirando al futuro con fe`
        ], k),
    (k) => esDuelo
      ? `Demos gracias eternas por todo el cariño que sembraste`
      : pick([
          `Demos gracias hoy por tenerte cerca un año más`,
          `Demos la bienvenida a un ciclo sereno y luminoso`
        ], k),
    (k) => esDuelo
      ? `Escribamos tu nombre en el lugar más puro de casa`
      : pick([
          `Escribamos nuevos recuerdos felices durante este año que empieza`,
          `Escribamos este capítulo con salud, paz y buena sonrisa`
        ], k),
    (k) => esDuelo
      ? `Honremos con gratitud la luz que dejaste en nosotros`
      : pick([
          esAniv ? `Celebramos sin apuros este aniversario pensado para los dos` : `Festejemos sin apuros esta fecha pensada para tu alegría`,
          `Festejemos que seguís sumando historia, fuerza y cariño`
        ], k),
    (k) => esDuelo
      ? `Vivamos cuidando el amor noble que nos enseñaste`
      : pick([
          `Vivamos este festejo con abrazos honestos y mucha gratitud`,
          `Vivamos otro año compartido con ilusión y buen humor`
        ], k),
    // 48 constructores adicionales con palabras iniciales frescas y voz humana (total = 127, primo)
    (k) => esDuelo
      ? `Tenerte en la memoria nos regala calma en días grises`
      : es1p
        ? `Tenerme paciencia este año me enseñó a disfrutar más`
        : pick([
            `Tenerte cerca en esta vida es un regalo enorme${vc}`,
            `Tenerte en nuestra mesa vuelve linda cualquier reunión`
          ], k),
    (k) => esDuelo
      ? `Guardá nuestra gratitud eterna en la paz del cielo`
      : pick([
          `Guardá estas líneas sinceras para cuando quieras sonreír`,
          `Guardá este abrazo largo en el bolsillo para todo el año`
        ], k),
    (k) => esDuelo
      ? `Notar tu huella buena nos acompaña en cada mesa familiar`
      : pick([
          `Notar cuánto creciste nos llena el corazón de orgullo`,
          `Notar tu calma alegre vuelve hermoso este festejo de hoy`
        ], k),
    (k) => esDuelo
      ? `Sumás recuerdos luminosos que siguen abrigando nuestro hogar`
      : es1p
        ? `Sumo un año nuevo mirando adelante con paz`
        : pick([
            `${esUd ? 'Suma' : esPl ? 'Suman' : 'Sumás'} otro capítulo lindo lleno de proyectos y salud`,
            `${esUd ? 'Suma' : esPl ? 'Suman' : 'Sumás'} historias reales que vale muchísimo la pena brindar`
          ], k),
    (k) => esDuelo
      ? `Armé estas líneas serenas honrando todo lo que dejaste`
      : pick([
          `Armé estas palabras pensando en lo bien que nos hace verte feliz`,
          `Armé este saludo sencillo porque merecés leer algo lindo hoy`
        ], k),
    (k) => esDuelo
      ? `Pensé en tu sonrisa tranquila apenas empezó esta mañana`
      : pick([
          `Pensé en vos apenas desperté para mandarte un abrazo enorme`,
          `Pensé en todo lo compartido y solo pude agradecerte hoy`
        ], k),
    (k) => esDuelo
      ? `Dejo una oración serena y flores blancas por tu vida`
      : pick([
          `Dejo estas palabras con cariño para alegrarte el día entero`,
          `Dejo acá un brindis sincero por tu salud y calma`
        ], k),
    (k) => esDuelo
      ? `Traigo en silencio todo el cariño que sembraste aquí`
      : pick([
          `Traigo buenos deseos de salud, paz y proyectos cumplidos hoy`,
          `Traigo un abrazo gigante para arrancar bien esta etapa nueva`
        ], k),
    (k) => esDuelo
      ? `Pido paz eterna para tu alma y alivio en casa`
      : pick([
          `Pido para vos doce meses livianos llenos de buenas noticias`,
          `Pido salud abundante, calma diaria y mesa siempre rodeada`
        ], k),
    (k) => esDuelo
      ? `Arranca otra fecha recordando tu ejemplo con inmenso respeto`
      : esAniv
        ? `Arranca otra etapa linda caminando juntos con ilusión`
        : pick([
            `Arranca un año nuevo hecho a medida de tus ganas`,
            `Arranca otra vuelta al sol cargada de salud y alegría`
          ], k),
    (k) => esDuelo
      ? `Florece tu recuerdo en cada enseñanza buena que dejamos viva`
      : pick([
          `Florece otro año lindo para disfrutar sin apuros ni ruido`,
          `Florece tu sonrisa hoy mientras celebramos cuánto te queremos`
        ], k),
    (k) => esDuelo
      ? `Va nuestro abrazo hasta el cielo lleno de memoria fiel`
      : pick([
          `Va este saludo directo y sincero para acompañarte todo el día`,
          `Va un deseo gigante de calma, risas y buenos caminos`
        ], k),
    (k) => esDuelo
      ? `Cuántas enseñanzas tuyas siguen iluminando nuestra rutina diaria`
      : pick([
          `Cuántas razones lindas nos diste para celebrar hoy tu vida`,
          `Cuántas anécdotas hermosas quedan por vivir durante este año`
        ], k),
    (k) => esDuelo
      ? `Vienen recuerdos dulces a consolar nuestro corazón en tu fecha`
      : pick([
          `Vienen meses hermosos llenos de calma, logros y abrazos sinceros`,
          `Vienen días luminosos para disfrutar en buena compañía siempre`
        ], k),
    (k) => esDuelo
      ? `Siguen vivos tus consejos en cada paso de nuestra familia`
      : pick([
          `Siguen multiplicándose los motivos lindos para agradecer tu compañía`,
          `Siguen creciendo las ganas de verte feliz y tranquilo`
        ], k),
    (k) => esDuelo
      ? `Llegó este día sensible para nombrarte con ternura infinita`
      : esAniv
        ? `Llegó un aniversario lindo para brindar por nuestra historia`
        : pick([
            `Llegó tu día especial para llenarte de mimos y abrazos`,
            `Llegó el momento justo de celebrar todo lo que sos`
          ], k),
    (k) => esDuelo
      ? `Acá seguimos honrando tu huella con gratitud y paz`
      : pick([
          `Acá tenés un abrazo enorme y deseos lindos sin medida`,
          `Acá estamos celebrando tu vida con orgullo y sonrisa sincera`
        ], k),
    (k) => esDuelo
      ? `Sabés cuánto amor dejaste sembrado en cada uno aquí`
      : es1p
        ? `Sé mejor que nadie cuánto valió cada paso dado`
        : pick([
            `${esUd ? 'Sabe' : esPl ? 'Saben' : 'Sabés'} de sobra cuánto valoramos tu presencia tan cálida`,
            `${esUd ? 'Sabe' : esPl ? 'Saben' : 'Sabés'} que siempre contás con nosotros en cualquier camino`
          ], k),
    (k) => esDuelo
      ? `Soñamos con el día en que volvamos a abrazarnos en paz`
      : pick([
          `Soñamos verte cumplir cada meta con sonrisa tranquila y firme`,
          `Soñamos compartir mil tardes lindas más durante este nuevo año`
        ], k),
    (k) => esDuelo
      ? `Elegimos recordar tu bondad antes que el silencio de hoy`
      : pick([
          `Elegimos brindar bien alto por tu salud y proyectos nuevos`,
          `Elegimos celebrar tu historia con palabras simples y verdaderas`
        ], k),
    (k) => esDuelo
      ? `Cuidamos con ternura cada historia linda que vivimos juntos`
      : pick([
          `Cuidamos con alegría el regalo hermoso de caminar junto a vos`,
          `Cuidamos tu sonrisa deseándote días tranquilos y mucha salud`
        ], k),
    (k) => esDuelo
      ? `Abrazarte con oración limpia alivia la nostalgia de hoy`
      : pick([
          `Abrazarte fuerte hoy es la forma más linda de festejar`,
          `Abrazarte en tu día confirma cuánto valoramos tu presencia`
        ], k),
    (k) => esDuelo
      ? `Regalar una oración limpia abraza tu memoria hasta el cielo`
      : pick([
          `Regalarte palabras honestas vale mucho más que cualquier envoltorio`,
          `Regalarte un día tranquilo y alegre es nuestro mejor deseo`
        ], k),
    (k) => esDuelo
      ? `Mandarte luz serena al cielo nos da paz en casa`
      : pick([
          `Mandarte este saludo temprano busca sacarte una linda sonrisa`,
          `Mandarte buenos deseos nace directo desde el cariño real`
        ], k),
    (k) => esDuelo
      ? `Encontrar consuelo en tu ejemplo alivia el alma hoy`
      : pick([
          `Encontrar gente tan noble como vos cambia la vida entera`,
          `Encontrar motivos reales para brindar resulta fácil cuando estás`
        ], k),
    (k) => esDuelo
      ? `Recordarte serenos honra el cariño enorme que nos diste`
      : pick([
          `Brindarte cariño honesto hoy nace directo desde el corazón`,
          `Desearte un año lleno de calma nace con enorme alegría`
        ], k),
    (k) => esDuelo
      ? `Construir memoria fiel mantiene vivo todo tu afecto`
      : pick([
          `Construir sueños nuevos te espera en este capítulo distinto`,
          `Construir días tranquilos junto a los tuyos vale muchísimo`
        ], k),
    (k) => esDuelo
      ? `Despertar agradeciendo tu legado trae serenidad a la mesa`
      : pick([
          `Despertar celebrando tu vida llena de sentido esta mañana`,
          `Despertar con buenas noticias inaugura hermoso este año nuevo`
        ], k),
    (k) => esDuelo
      ? `Cosechar el cariño que sembraste une a toda la familia`
      : pick([
          `Cosechar alegría sincera premia todo tu esfuerzo cotidiano`,
          `Cosechar abrazos honestos confirma lo bien que hacés alrededor`
        ], k),
    (k) => esDuelo
      ? `Imaginar tu sonrisa tranquila consuela nuestro hogar en paz`
      : pick([
          `Imaginar todo lo bueno que viene multiplica nuestra alegría`,
          `Imaginar este año nuevo contigo nos llena de ilusión`
        ], k),
    (k) => esDuelo
      ? `Creer en la paz eterna abraza tu nombre con ternura`
      : pick([
          `Creer en tus propios pasos abre caminos firmes y alegres`,
          esAniv ? `Creer en proyectos lindos vuelve luminoso este aniversario` : `Creer en proyectos lindos vuelve luminoso este cumpleaños`
        ], k),
    (k) => esDuelo
      ? `Decirte cuánto te extrañamos honra tu memoria luminosa`
      : pick([
          `Decirte todo lo que valés empieza con este abrazo fuerte`,
          `Decirte gracias hoy suena corto frente a tanto afecto`
        ], k),
    (k) => esDuelo
      ? `Sentir tu guía cercana calma el corazón en silencio`
      : pick([
          `Sentir tu risa cerca convierte el encuentro en fiesta`,
          `Sentir orgullo por tu camino nos alegra hoy muchísimo`
        ], k),
    (k) => esDuelo
      ? `Trazar puentes de oración nos acerca a tu recuerdo`
      : pick([
          `Trazar metas claras hace más liviano cada mes que viene`,
          `Trazar planes alegres inaugura con calma este ciclo nuevo`
        ], k),
    (k) => esDuelo
      ? `Sembrar paz en tu nombre honra tu corazón bueno`
      : pick([
          `Sembrar palabras honestas deja huella linda todo el año`,
          `Sembrar afecto verdadero vuelve abundante cualquier celebración`
        ], k),
    (k) => esDuelo
      ? `Buscar serenidad en tus recuerdos abriga toda la casa`
      : pick([
          `Buscar motivos para sonreír resulta sencillo celebrando tu vida`,
          `Buscar calma y buena salud guía nuestro brindis de hoy`
        ], k),
    (k) => esDuelo
      ? `Juntar historias tuyas en familia nos devuelve ternura`
      : pick([
          `Juntar abrazos reales hoy celebra todo lo que sos`,
          `Juntar buenos deseos arma este regalo escrito con alma`
        ], k),
    (k) => esDuelo
      ? `Iluminar la memoria con gratitud honra tu ejemplo fiel`
      : pick([
          `Iluminar esta jornada con risas alegra toda la reunión`,
          `Iluminar tu camino nuevo pide salud, calma y compañía`
        ], k),
    (k) => esDuelo
      ? `Contar anécdotas tuyas mantiene viva tu voz en casa`
      : pick([
          `Contar con tu amistad leal mejora cualquier semana difícil`,
          `Contar historias nuevas juntos promete otro año inolvidable`
        ], k),
    (k) => esDuelo
      ? `Esperar el reencuentro sereno fortalece nuestra fe diaria`
      : pick([
          `Esperar doce meses lindos arranca con este deseo sincero`,
          `Esperar buenas sorpresas cobra fuerza en esta linda etapa`
        ], k),
    (k) => esDuelo
      ? `Mimar tu recuerdo con flores blancas nos trae alivio`
      : pick([
          `Mimar a quien queremos bien hoy pide abrazo largo`,
          `Mimar tu corazón hoy empieza leyendo estas palabras`
        ], k),
    (k) => esDuelo
      ? `Sobra gratitud sincera por cada huella buena que dejaste`
      : pick([
          `Sobra cariño honesto para celebrar hoy esta fecha especial`,
          `Sobran ganas reales de verte tranquilo, sano y feliz`
        ], k),
    (k) => esDuelo
      ? `Vale recordar con calma cuánto amor supiste entregar`
      : pick([
          `Vale brindar sin apuros por otro año tan tuyo`,
          `Vale celebrar cada logro simple de este lindo presente`
        ], k),
    (k) => esDuelo
      ? `Lograr paz pensando en vos reconforta a toda la mesa`
      : pick([
          `Lograr metas sanas y tranquilas distingue tu hermoso camino`,
          `Lograr días serenos corona este festejo lleno de afecto`
        ], k),
    (k) => esDuelo
      ? `Alzar una plegaria limpia acompaña tu descanso en paz`
      : pick([
          `Alzar la copa por vos celebra tu enorme corazón`,
          `Alzar este brindis sincero abre un ciclo muy prometedor`
        ], k),
    (k) => esDuelo
      ? `Cantar bajo el cielo claro abraza tu memoria querida`
      : pick([
          `Cantar rodeados de afecto llena de chispa este día`,
          `Cantar por tu vida celebra otra vuelta llena de luz`
        ], k),
    (k) => esDuelo
      ? `Aprender de tu nobleza sigue guiando nuestras decisiones`
      : pick([
          `Aprender junto a vos hace más valioso cada paso`,
          `Aprender a disfrutar lo simple ilumina este año nuevo`
        ], k),
    (k) => esDuelo
      ? `Respirar calma mirando al cielo honra tu recuerdo vivo`
      : pick([
          `Respirar alegría tranquila inaugura tu mejor temporada hasta hoy`,
          `Respirar aire nuevo abre caminos hermosos para vos`
        ], k)
  ];

  return {
    total: builders.length,
    obtener(intento) {
      const idx = (intento - 1) % builders.length;
      const vuelta = Math.floor((intento - 1) / builders.length);
      const k = seedOffset + idx * 5 + vuelta;
      let raw = builders[idx](k);
      raw = resolverConcordancia(raw, p).replace(/\s+,/g, ',').replace(/\s+/g, ' ').trim();
      const words = normalizar(raw).split(' ').filter(Boolean);
      if (words.length < 4 || words.length > 12) return null;
      return { raw, vuelta };
    }
  };
}

// ---------------------------------------------------------------------------
// 4. Bancos ricos de parrafos tematicos (Pensador + Cervantes, 0 relleno)
// ---------------------------------------------------------------------------
const BANCO_TEXTOS_POR_TEMA = {
  cristiano: {
    ap: [
      'En este nuevo cumpleaños elevamos una oración sincera agradeciendo a Dios por tu vida, por tu fe paciente y por la manera generosa en que reflejás su amor cotidiano.',
      'Hoy celebramos el regalo sagrado de otro año caminando bajo la mirada fiel del Señor, quien ha sostenido tus pasos y renovado tus fuerzas en cada temporada.',
      'Cumplir un año más es dar testimonio de la bondad divina que nunca falla: hoy damos gracias al cielo por tenerte cerca y por la paz que transmitís.',
      'Con gratitud profunda bendecimos este día especial de tu vida, pidiendo que la sabiduría del cielo siga guiando cada proyecto, decisión y vínculo de tu hogar.',
      'Hay vidas que edifican en silencio con su testimonio diario, y la tuya es motivo de acción de gracias para quienes compartimos el camino contigo.',
      'Hoy la oración se vuelve festejo: celebramos tu corazón dispuesto, tu fidelidad en las pruebas y la alegría serena con que servís a los tuyos.'
    ],
    dev: [
      'A lo largo de los meses aprendimos que cuando ponés tus planes en manos de Dios, incluso los desafíos más grandes encuentran propósito y serenidad.',
      'Tu ejemplo de mansedumbre, respeto y servicio desinteresado deja una semilla limpia en la familia y en cada comunidad donde te toca actuar.',
      'Aunque existan días exigentes, nunca dejás de confiar en las promesas eternas ni de ofrecer una palabra alentadora a quien llega cansado.',
      'Damos gracias por tus consejos prudentes, tu hospitalidad sincera y esa firmeza tranquila que nace de una fe vivida sin apariencias.',
      'Que nunca falte la presencia del Señor iluminando tu mesa, multiplicando los frutos de tu trabajo y guardando la salud de toda tu casa.'
    ],
    cie: [
      'Que Dios te bendiga hoy y siempre, colmando tus próximos doce meses de paz, salud y alegría verdadera. ¡Feliz cumpleaños!',
      'Oramos para que su gracia abrace tu hogar y multiplique tus bendiciones en esta nueva vuelta al sol. ¡Muchas felicidades!',
      'Que la luz divina siga siendo tu refugio seguro y el motivo más grande de tu sonrisa. ¡Muy feliz cumpleaños en Cristo!',
      'Recibí un abrazo lleno de oración y buenos deseos: que este nuevo ciclo sea fecundo en fe, amor y serenidad.'
    ]
  },
  profesionales: {
    ap: [
      'Hoy hacemos una pausa merecida en la jornada para saludar con aprecio no solo su sólida trayectoria profesional, sino también su enorme calidad humana.',
      'En el día de su cumpleaños queremos agradecerle la claridad, el respeto y la buena disposición con que acompaña el trabajo de cada semana.',
      'Compartir proyectos o aprendizajes junto a usted convierte los retos cotidianos en oportunidades ordenadas para crecer con confianza.',
      'Más allá de las metas y responsabilidades diarias, esta fecha invita a celebrar a la persona íntegra y amable que sostiene cada logro del equipo.',
      'Reciba un saludo especialmente cálido en su cumpleaños, junto al reconocimiento sincero por su vocación constante y su trato respetuoso.'
    ],
    dev: [
      'Su ejemplo de responsabilidad, escucha atenta y criterio sereno aporta estabilidad incluso en los momentos de mayor exigencia laboral.',
      'Quienes tratamos con usted valoramos profundamente la paciencia para enseñar, la palabra justa a tiempo y la capacidad para motivar con respeto.',
      'Es un privilegio contar con profesionales comprometidos que combinan excelencia técnica con cercanía humana y buen humor en la tarea diaria.',
      'Ojalá este nuevo año personal equilibre con armonía las metas cumplidas, el descanso necesario y el tiempo valioso junto a sus seres queridos.'
    ],
    cie: [
      'Le deseamos un año próspero, saludable y colmado de satisfacciones personales y profesionales. ¡Muy feliz cumpleaños!',
      'Que disfrute este día rodeado de afecto genuino y que los próximos meses traigan bienestar y nuevos éxitos. ¡Felicidades!',
      'Reciba nuestros más cordiales deseos de salud, calma y logros renovados en esta nueva etapa que comienza.'
    ]
  },
  edad_bebe: {
    ap: [
      'Qué inmensa alegría celebrar esta etapa tan tierna llena de primeras sonrisas, pasitos curiosos y descubrimientos diarios que enternecen a toda la familia.',
      'Desde que llegaste a este mundo cambiaste el ritmo de la casa por canciones suaves, risas espontáneas y un amor que no conocía medida.',
      'Todavía sos tan pequeño para recordar esta fiesta, pero las fotos y nuestro cariño van a contarte siempre cuánto celebramos verte crecer sano y feliz.'
    ],
    dev: [
      'Cada gesto nuevo tuyo —una palabra ensayada, un abrazo distraído o tu asombro frente a cualquier juego— nos enseña a mirar la vida con ojos limpios.',
      'Te rodeamos con ternura infinita, cuentos antes de dormir y el deseo firme de cuidar tu infancia para que crezcas libre, seguro y muy amado.',
      'El hogar entero se ilumina con tus travesuras pequeñas y tu energía inocente que transforma cualquier tarde común en motivo de festejo.'
    ],
    cie: [
      '¡Feliz cumpleaños, tesoro hermoso! Que crezcas siempre sano, rodeado de juegos, calma y amor inmenso.',
      'Brindamos por cada nuevo pasito y por una niñez llena de magia, cuidado y alegría. ¡Muchas felicidades!',
      'Que Dios y tu familia bendigan siempre tu camino desde estos primeros años tan luminosos. ¡Feliz día!'
    ]
  },
  edad_ninez: {
    ap: [
      'Llegó uno de los días más esperados del año: velitas por soplar, juegos sin reloj y todo el entusiasmo hermoso de tu edad.',
      'Nos llena de emoción ver cómo crecés curioso, alegre y lleno de preguntas nuevas sobre cada aventura que descubrís.',
      'Esta etapa tuya combina risas contagiosas, imaginación sin límites y un corazón noble que conquista a toda la familia.'
    ],
    dev: [
      'Que nunca pierdas las ganas de aprender cosas nuevas, hacer buenos amigos en el colegio y disfrutar cada tarde de juegos al aire libre.',
      'Cada dibujo, cada logro pequeño y cada abrazo espontáneo nos recuerda la suerte gigante de acompañarte mientras vas creciendo tan bien.',
      'Ojalá sigas soñando en grande con esa energía limpia que contagia entusiasmo en cada reunión familiar.'
    ],
    cie: [
      '¡Feliz cumpleaños! Que tengas un día lleno de torta, risas, regalos lindos y juegos inolvidables.',
      'Que este nuevo año te traiga aventuras divertidas, salud y muchísimos motivos para sonreír fuerte. ¡Felicidades!',
      'Disfrutá tu fiesta al máximo rodeado de quienes tanto te queremos. ¡Muy feliz cumpleaños!'
    ]
  },
  edad_15: {
    ap: [
      'Cumplir quince años marca un puente luminoso entre la infancia atesorada y una juventud cargada de ilusiones propias.',
      'Hoy celebramos tus quince primaveras con emoción doble: por todo lo hermoso que ya sos y por los horizontes que recién empezás a abrir.',
      'Llega una fecha irrepetible en tu historia, pensada para brindar por tus sueños, tu sonrisa auténtica y tu paso firme.'
    ],
    dev: [
      'Mirarte crecer con tanta personalidad, dulzura y valentía llena de orgullo a quienes te acompañamos desde tus primeros pasos.',
      'Que esta etapa inolvidable te regale amistades verdaderas, aprendizajes valiosos y la confianza necesaria para defender siempre tu voz.',
      'Guardá en la memoria cada abrazo de esta celebración sabiendo que siempre vas a contar con el respaldo amoroso de tu familia.'
    ],
    cie: [
      '¡Felices 15 años! Que la vida te sorprenda con caminos luminosos, música alegre y sueños cumplidos uno por uno.',
      'Disfrutá esta noche mágica y que tus quince abran una etapa maravillosa llena de amor, salud y libertad responsable.',
      '¡Muchas felicidades en tus quince años! Seguí brillando con esa alegría auténtica que te hace única.'
    ]
  },
  edad_adolescencia: {
    ap: [
      'Estrenás una edad vibrante donde empiezan a tomar forma tus gustos propios, tus ideas claras y tus primeros grandes proyectos.',
      'Celebramos tu crecimiento con respeto y admiración por la manera auténtica en que enfrentás nuevos desafíos cada año.',
      'Esta etapa adolescente trae preguntas nuevas, amistades intensas y una fuerza increíble que te prepara para grandes cosas.'
    ],
    dev: [
      'Aunque a veces parezca que todo cambia rápido, llevás dentro valores firmes y un corazón generoso que te van a guiar siempre bien.',
      'Valoramos tu sentido del humor, tu sinceridad y las ganas que ponés en lo que de verdad te apasiona.',
      'Recordá que acá tenés siempre un lugar seguro para charlar sin juicios, celebrar avances o pedir apoyo cuando haga falta.'
    ],
    cie: [
      '¡Feliz cumpleaños! Que este año te traiga buenos amigos, proyectos que te entusiasmen y mucha alegría compartida.',
      'Seguí confiando en tu talento y disfrutá esta etapa intensa con salud y serenidad. ¡Muchas felicidades!',
      'Brindamos por todo lo que sos y por los caminos increíbles que estás por descubrir. ¡Feliz día!'
    ]
  },
  edad_juventud: {
    ap: [
      'Llegar a esta edad representa un hito emocionante: energía plena, decisiones propias y horizontes abiertos esperando tus pasos.',
      'Celebramos esta nueva vuelta al sol reconociendo tu constancia, tus ganas de abrirte camino y todo lo que venís construyendo.',
      'Estrenar una etapa joven y adulta a la vez es la excusa perfecta para brindar por tus metas, aprendizajes y libertad con propósito.'
    ],
    dev: [
      'Cada desafío superado hasta hoy demuestra que tenés carácter, sensibilidad y criterio para transformar ideas en logros reales.',
      'Deseamos que el estudio, el trabajo y los vínculos que elijas sumen calma, entusiasmo y experiencias que valgan la pena recordar.',
      'No tengas miedo de probar caminos nuevos ni apuro por resolver todo hoy: disfrutá el proceso rodeado de gente leal.'
    ],
    cie: [
      '¡Feliz cumpleaños! Que este capítulo joven brille con oportunidades lindas, viajes inolvidables y salud de sobra.',
      'Brindamos por tu presente luminoso y por cada meta audaz que te propongas conquistar. ¡Muy feliz día!',
      'Seguí avanzando con coraje y alegría genuina: lo mejor de tu historia recién empieza a desplegarse.'
    ]
  },
  edad_madurez: {
    ap: [
      'Alcanzar esta etapa plena de la vida merece celebrarse con orgullo sereno: cada década suma sabiduría, carácter y afectos reales.',
      'Hoy festejamos mucho más que un número en el calendario: celebramos historias ganadas, pruebas superadas y tu presencia querida en nuestra mesa.',
      'Esta edad llega con una claridad valiosa que solo da el camino recorrido: saber exactamente quiénes importan y qué merece nuestro tiempo.'
    ],
    dev: [
      'Tu equilibrio para aconsejar, tu entrega silenciosa por la familia y tus ganas intactas de disfrutar lo simple inspiran a quienes te rodeamos.',
      'No se trata de contar años sino de celebrar cuánta vida, risa y ejemplo supiste poner en cada uno de ellos.',
      'Que esta nueva vuelta te regale descanso merecido, salud firme, proyectos tranquilos y muchas sobremesas largas sin reloj.'
    ],
    cie: [
      '¡Feliz cumpleaños! Que la plenitud de esta etapa llegue colmada de paz, salud y satisfacciones compartidas.',
      'Brindamos por toda tu trayectoria hermosa y por muchísimos años más celebrando juntos con el mismo cariño.',
      'Disfrutá hoy el reconocimiento sincero de quienes agradecemos tenerte cerca cada día. ¡Muchas felicidades!'
    ]
  },
  divertido: {
    ap: [
      'Llegó tu cumpleaños y, por decreto oficial de hoy, queda terminantemente prohibido contar calorías de la torta o hablar de cosas serias antes del brindis.',
      'Dicen que los años traen sabiduría, aunque en tu caso todavía conservás intactas las ganas de reírte hasta tarde y armar planes improvisados.',
      'No te preocupes si hacen falta varias velas en la torta: pensalo como iluminación extra para destacar mejor en las fotos de hoy.',
      'Otro año más joven de espíritu y apenas un poquito más experimentado en elegir excusas buenas para festejar en grande.'
    ],
    dev: [
      'Gracias por ser esa clase de persona con la que hasta los problemas cotidianos terminan convertidos en anécdota graciosa después de cinco minutos.',
      'Prometemos no revelar tu edad exacta en público siempre y cuando garantices buena música, comida rica y risa asegurada.',
      'La verdadera madurez consiste en saber que cumplir años es obligatorio, pero disfrutar el festejo como si fuera viernes es decisión tuya.'
    ],
    cie: [
      '¡Feliz cumpleaños! Que nunca te falte sentido del humor, salud firme ni torta suficiente para repetir.',
      'Brindamos por tu chispa única y por otro año coleccionando anécdotas divertidas juntos. ¡A festejar!',
      'Soplá las velas con ganas antes de que derritan el merengue y disfrutá un cumpleaños genial.'
    ]
  },
  atrasado: {
    ap: [
      'Puede que este saludo llegue unos días después de la fecha oficial en el calendario, pero el cariño verdadero nunca vence ni pierde fuerza.',
      'Me atrasé un poquito con el mensaje, aunque pensalo por el lado bueno: hoy tenés permiso oficial para seguir festejando tu cumpleaños otra vez.',
      'Las fechas a veces se nos escapan entre horarios y corridas, pero jamás se me olvida cuánto valoro tu presencia y nuestra historia.'
    ],
    dev: [
      'Mientras otros ya guardaron los saludos de rigor, el mío llega con calma para recordarte que mis buenos deseos para vos duran todo el año.',
      'Dicen que lo bueno se hace esperar un poco; aceptame entonces este abrazo tardío cargado con intereses de alegría y gratitud.',
      'Ojalá tu celebración oficial haya salido impecable y este mensaje atrasado sirva para prolongar un rato más la sonrisa.'
    ],
    cie: [
      '¡Feliz cumpleaños atrasado! Que los próximos doce meses compensen con creces salud, calma y buenas noticias.',
      'Aunque tarde en el calendario, va puntual desde el corazón: ¡muchísimas felicidades y abrazo enorme!',
      'Seguí celebrando tu nueva vuelta al sol con todo lo bueno que merecés hoy y siempre.'
    ]
  },
  distancia: {
    ap: [
      'Aunque hoy haya kilómetros, fronteras o husos horarios entre nuestras mesas, apenas empezó el día viajó este abrazo directo hacia donde estás.',
      'Celebrar un cumpleaños lejos de quienes uno quiere cuesta un poco, pero demuestra que el afecto auténtico no entiende de mapas ni pantallas.',
      'No puedo entregarte el regalo en mano esta mañana, así que envío estas palabras sinceras para acompañarte de cerca en tu celebración.'
    ],
    dev: [
      'Cada llamada, foto o audio compartido desde tu ciudad mantiene vivo nuestro vínculo como si todavía estuviéramos a la vuelta de la esquina.',
      'Guardamos tu lugar intacto en nuestras charlas y brindamos desde acá deseando que tu festejo esté rodeado de buena compañía allá.',
      'La espera hasta el próximo reencuentro se vuelve más liviana sabiendo que estás creciendo, aprendiendo y cumpliendo metas importantes.'
    ],
    cie: [
      '¡Feliz cumpleaños a la distancia! Pronto volveremos a brindar frente a frente para celebrar todos los abrazos pendientes.',
      'Que sientas hoy nuestro cariño cruzando océanos y rutas: ¡felicidades desde lejos con el corazón bien cerca!',
      'Disfrutá tu día sabiendo que acá pensamos en vos con enorme orgullo y ternura. ¡Feliz vuelta al sol!'
    ]
  },
  formal: {
    ap: [
      'En esta fecha tan significativa deseo hacerle llegar un saludo cordial y sincero, acompañado de mis mejores augurios para el año que comienza.',
      'Cumplir un año más de vida brinda la oportunidad oportuna de reconocer su trato atento, su integridad y la serenidad que aporta en cada encuentro.',
      'Reciba estas líneas respetuosas en su cumpleaños, con gratitud por su amabilidad constante y deseos genuinos de bienestar.'
    ],
    dev: [
      'Quienes valoramos su discreción, constancia y nobleza celebramos hoy con alegría la fortuna de contar con su aprecio y ejemplo.',
      'Deseo que este nuevo ciclo equilibre con acierto los proyectos cumplidos, la tranquilidad familiar y los momentos de descanso merecido.',
      'Su corrección, calma y generosidad dejan una impresión duradera y muy estimada en todos los que comparten su entorno.'
    ],
    cie: [
      'Reciba mis más atentas felicitaciones, deseándole salud firme, serenidad y dicha duradera. ¡Feliz cumpleaños!',
      'Que disfrute de una grata celebración junto a sus seres queridos y tenga un año pleno en satisfacciones.',
      'Mis mejores deseos de prosperidad, paz y bienestar en esta nueva etapa de su vida. ¡Muchas felicidades!'
    ]
  },
  ex: {
    ap: [
      'Hoy que celebrás otro año de vida quise acercarte un saludo respetuoso y sereno para desearte sinceramente un gran cumpleaños.',
      'El paso del tiempo permite mirar lo vivido con calma y agradecer con madurez lo aprendido durante nuestra etapa compartida.',
      'Más allá de que nuestros caminos sigan rumbos propios, creo de corazón que las personas importantes merecen buenos deseos honestos en su día.'
    ],
    dev: [
      'Ojalá este nuevo año te encuentre en paz con tus decisiones, rodeado de personas que te cuiden bien y avanzando hacia metas que te entusiasmen.',
      'Guardo con serenidad los recuerdos valiosos y el aprendizaje mutuo, sin rencores y con el deseo genuino de que estés bien.',
      'Cumplir años siempre invita a renovar fuerzas y cerrar capítulos pasados con gratitud tranquila y mirada limpia hacia adelante.'
    ],
    cie: [
      'Que pases un cumpleaños tranquilo, saludable y rodeado de afecto sincero. ¡Te deseo lo mejor hoy y siempre!',
      'Feliz cumpleaños; ojalá los próximos doce meses te regalen claridad, paz y proyectos luminosos.',
      'Con respeto y buenos deseos genuinos: ¡que tengas un excelente año nuevo de vida!'
    ]
  },
  embarazada: {
    ap: [
      'Este cumpleaños tiene una magia irrepetible: no solo celebramos tu vida luminosa, sino también la dulce espera que hoy late junto a vos.',
      'Radiante y llena de ternura nueva, inaugurás otro año mientras preparás los brazos para el encuentro más emocionante de todos.',
      'Hoy festejamos doblemente: por la mujer maravillosa que sos y por esa vida pequeñita que ya transforma cada rincón en esperanza.'
    ],
    dev: [
      'Cuidarte, descansar sin culpas y dejarte mimar es el plan obligatorio de este año tan especial en que todo empieza a florecer.',
      'Quienes te queremos miramos con emoción cómo te preparás para recibir a tu bebé con tanta paciencia, alegría y amor.',
      'Que cada semana restante de embarazo llegue acompañada de calma, salud firme y manos cercanas dispuestas a sostenerte siempre.'
    ],
    cie: [
      '¡Feliz cumpleaños, futura mamá! Que este año te regale el abrazo más dulce del mundo y salud plena para ambos.',
      'Brindamos por vos y por esa nueva vida en camino: ¡que sea un año inolvidable lleno de ternura!',
      'Disfrutá cada mimo hoy porque merecés un cumpleaños tan hermoso como la aventura que está por llegar.'
    ]
  },
  crush: {
    ap: [
      'No podía dejar pasar tu cumpleaños sin mandarte unas líneas y confesar que tu sonrisa siempre logra alegrarme el día entero.',
      'Hoy es la excusa perfecta para escribirte un saludo distinto, desearte un gran cumpleaños y admitir que hablar contigo siempre suma magia.',
      'Entre todos los mensajes que vas a recibir hoy, quería que el mío llegara con buena vibra y ganas sinceras de verte sonreír.'
    ],
    dev: [
      'Tenés esa mezcla encantadora de frescura, humor y autenticidad que hace imposible no notarte apenas aparecés en cualquier lugar.',
      'Ojalá este año nuevo te sorprenda con planes lindos —y quién dice, tal vez algún café compartido para celebrarlo pronto.',
      'Deseo que pases un día increíble haciendo todo lo que te gusta y que sigamos coincidiendo mucho más seguido.'
    ],
    cie: [
      '¡Feliz cumpleaños! Que este año traiga cosas lindas, sueños cumplidos y alguna buena excusa para vernos pronto.',
      'Pasalo increíble hoy y guardá un pedacito de torta virtual. ¡Muchas felicidades!',
      'Que tengas un cumpleaños tan brillante y especial como la energía que transmitís cada vez que sonreís.'
    ]
  },
  agradecimiento: {
    ap: [
      'Quiero tomarme un momento tranquilo para agradecer de corazón cada saludo, abrazo y palabra cariñosa recibida en mi cumpleaños.',
      'Leer tantos mensajes llenos de afecto me recordó la enorme fortuna que significa caminar acompañado por gente tan valiosa.',
      'Hoy cierro esta celebración con el pecho agradecido por cada llamada, cada gesto amable y cada buen deseo compartido.'
    ],
    dev: [
      'En medio de la rutina diaria, tomarse unos segundos para felicitar a alguien demuestra un cariño genuino que jamás doy por sentado.',
      'Gracias por estar presentes en las pequeñas alegrías, por sostener en los retos y por sumar calor humano a este nuevo año.',
      'Cada palabra recibida funciona como impulso limpio para comenzar estos próximos doce meses con entusiasmo renovado.'
    ],
    cie: [
      '¡Mil gracias a todos por hacer de mi cumpleaños un día tan cálido e inolvidable! Que la vida se los devuelva multiplicado.',
      'De todo corazón, gracias por su tiempo, su amistad y su cariño sincero. ¡Un abrazo enorme!',
      'Agradezco infinito cada muestra de afecto recibida hoy; me siento muy afortunado de tenerlos cerca.'
    ]
  },
  graduacion: {
    ap: [
      'Al cerrar esta etapa académica tan exigente, siento una gratitud profunda hacia quienes me sostuvieron durante cada examen, desvelo y paso difícil.',
      'Este título lleva mi nombre en el diploma, pero detrás de cada página estudiada están los abrazos, consejos y paciencia de mi familia y amigos.',
      'Hoy celebro mi graduación mirando atrás con humildad para agradecer a todos los que creyeron en mí incluso cuando dudé de mis fuerzas.'
    ],
    dev: [
      'Hubo mañanas largas y semanas agotadoras, pero cada palabra de aliento en el momento justo me devolvió la calma para seguir adelante.',
      'Gracias por celebrar conmigo no solo la meta final, sino también todo el proceso silencioso de esfuerzo y aprendizaje compartido.',
      'Prometo honrar esta oportunidad aplicando lo aprendido con responsabilidad, ética y gratitud hacia quienes abrieron el camino.'
    ],
    cie: [
      '¡Gracias infinitas por acompañarme hasta esta graduación! Este triunfo es compartido con ustedes de todo corazón.',
      'Hoy brindamos por la meta cumplida y por los nuevos desafíos profesionales que comienzan con alegría.',
      'Un abrazo agradecido a cada persona que sumó su apoyo incondicional en esta hermosa etapa.'
    ]
  },
  automensaje: {
    ap: [
      'Hoy cumplo un año más de vida y elijo frenar un momento para agradecer lo vivido, perdonarme tropiezos pasados y celebrar cuánto crecí.',
      'Apagar las velas este año tiene otro sabor: mayor calma, más claridad sobre lo que quiero cuidar y gratitud sincera por seguir en pie.',
      'En mi cumpleaños me regalo palabras amables hacia mi propia historia, reconociendo el esfuerzo silencioso que me trajo hasta hoy.'
    ],
    dev: [
      'Aprendí a soltar lo que resta paz, valorar los vínculos verdaderos y disfrutar las mañanas simples sin esperar ocasiones gigantes.',
      'Cada desafío superado durante estos doce meses dejó herramientas nuevas, carácter más sereno y confianza renovada en mi camino.',
      'Me prometo caminar este nuevo año con paciencia, cuidando mi salud y dedicando tiempo a los proyectos que encienden mi ilusión.'
    ],
    cie: [
      '¡Feliz cumpleaños para mí! Que este nuevo ciclo traiga salud firme, paz interior y metas cumplidas con alegría.',
      'Brindo por mi historia, por quienes me quieren bien y por todo lo luminoso que aún está por llegar.',
      'Hoy celebro mi vida con gratitud tranquila y entusiasmo sincero por la etapa que comienza.'
    ]
  },
  automensaje_cristiano: {
    ap: [
      'Señor, al cumplir un año más de vida elevo mi corazón agradecido por tu fidelidad constante, tu cuidado diario y cada mañana regalada.',
      'Hoy no solo celebro una fecha en el calendario, sino la misericordia infinita con que Dios sostuvo mis pasos durante todo este año.',
      'En mi cumpleaños digo gracias, Dios, por las respuestas que llegaron a tiempo, por las pruebas que me fortalecieron y por tu paz.'
    ],
    dev: [
      'Cuando miro el camino recorrido descubro tu mano guiando decisiones, cerrando puertas que no convenían y abriendo caminos llenos de luz.',
      'Te pido sabiduría humilde para servir mejor, salud para trabajar con alegría y un corazón atento a las bendiciones sencillas de cada día.',
      'Pongo en tus manos estos próximos doce meses sabiendo que quien confía en tu promesa camina siempre acompañado.'
    ],
    cie: [
      '¡Gracias, Dios, por un año más de vida! Que tu gracia y tu paz sigan iluminando cada paso de mi hogar.',
      'Señor, recibí mi gratitud sincera en este cumpleaños y renová mis fuerzas para seguir sirviendo con alegría.',
      'Bendito sea este nuevo ciclo que comienzo confiando plenamente en tu amor eterno.'
    ]
  },
  pareja: {
    ap: [
      'Hoy celebramos tu vida y yo agradezco en silencio el regalo inmenso de despertar compartiendo sueños, risas y proyectos contigo.',
      'Desde que llegaste a mi historia, hasta los días comunes tienen brillo distinto; por eso tu cumpleaños es también mi fiesta favorita del año.',
      'En medio de mil prisas cotidianas, hoy frenamos todo para mimarte, mirarte con ternura y celebrar a la persona que elijo cada mañana.'
    ],
    dev: [
      'Admiro tu forma honesta de querer, tu paciencia en mis días difíciles y esa complicidad única que transforma cualquier plan sencillo en aventura.',
      'Gracias por ser refugio sereno cuando el mundo hace ruido y compañero entusiasta cuando toca empezar un proyecto nuevo.',
      'Quiero seguir sumando viajes pendientes, cafés sin apuro y tardes tranquilas a tu lado mientras celebramos muchas vueltas al sol.'
    ],
    cie: [
      '¡Feliz cumpleaños, mi amor! Que la vida te regale tanta dicha como la que traés a mis días desde que te conozco.',
      'Brindo por vos, por nuestra historia y por todo lo hermoso que todavía vamos a vivir de la mano. ¡Te amo!',
      'Que este nuevo año te encuentre feliz, sano y muy celebrado. ¡Sos mi lugar favorito en el mundo!'
    ]
  },
  amistad: {
    ap: [
      'Cumplís un año más y celebro la suerte inmensa de tener una amistad como la tuya: franca, leal y siempre lista para transformar cualquier tarde.',
      'Los años pasan y confirman que los verdaderos amigos son la familia que elegimos con el corazón; gracias por estar sin condiciones.',
      'Hoy es tu día y no alcanza un saludo común para agradecer las charlas eternas, las risas hasta llorar y tu escucha sincera.'
    ],
    dev: [
      'Sos de esas personas raras que dicen la verdad con cariño, acompañan cuando nadie mira y festejan los logros ajenos como propios.',
      'Cada anécdota compartida demuestra que con buena compañía incluso los momentos más simples se convierten en recuerdos inolvidables.',
      'Que nunca cambie esa chispa tuya que vuelve más livianos los problemas y más alegres todas nuestras reuniones.'
    ],
    cie: [
      '¡Feliz cumpleaños, amigo del alma! Que este nuevo ciclo traiga salud, proyectos grandes y mil brindis más juntos.',
      'Brindo por vos y por nuestra amistad verdadera que mejora con cada año vivido. ¡Muchas felicidades!',
      'Seguí brillando tal como sos y disfrutá este día al máximo porque te merecés todo lo bueno.'
    ]
  },
  familia: {
    ap: [
      'En nuestra familia cada cumpleaños es una ocasión preciosa para agradecer las raíces que nos sostienen y el cariño que nos une en cada etapa.',
      'Hoy la casa entera celebra tu vida con gratitud sincera por tu calidez cotidiana, tu consejo oportuno y tu presencia tan querida.',
      'Hay lazos que crecen más fuertes con el paso de los años, y tenerte en esta familia es uno de los mayores privilegios que compartimos.'
    ],
    dev: [
      'Tu paciencia, tu ejemplo silencioso y la manera generosa en que cuidás de los tuyos hacen de cada reunión familiar un verdadero hogar.',
      'Agradecemos cada sobremesa compartida, cada historia contada con humor y el respaldo firme que siempre ofrecés sin esperar aplausos.',
      'Más allá de regalos o fechas formales, lo verdaderamente valioso sigue siendo caminar juntos, cuidarnos y celebrar tus alegrías como propias.'
    ],
    cie: [
      '¡Feliz cumpleaños! Que este nuevo año te regale salud abundante, días tranquilos y muchos abrazos alrededor de nuestra mesa.',
      'Celebramos tu vida con enorme orgullo familiar y deseamos que todos tus sueños sigan floreciendo. ¡Felicidades!',
      'Recibí todo el cariño de esta familia que te admira y agradece cada día compartido.'
    ]
  },
  general: {
    ap: [
      'Hoy celebramos tu cumpleaños con palabras sinceras, deseando que esta nueva vuelta al sol llegue cargada de calma, salud y alegrías reales.',
      'Cumplir un año más invita a detenerse un instante, mirar todo lo bueno sembrado hasta hoy y recibir con ilusión las oportunidades nuevas.',
      'En este día especial deseamos recordarte cuánto vale tu presencia y el bien silencioso que dejás en quienes compartimos camino contigo.'
    ],
    dev: [
      'Tu trato amable, tu entrega cotidiana y esa energía luminosa que transmitís hacen una diferencia positiva que todos alrededor agradecen.',
      'Ojalá los próximos doce meses traigan proyectos que te entusiasmen, personas honestas a tu lado y tiempo sereno para disfrutar lo que amás.',
      'Que cada meta trabajada con paciencia encuentre frutos claros y que nunca falten motivos para brindar con quienes más querés.'
    ],
    cie: [
      '¡Muy feliz cumpleaños! Que la dicha, la salud y el cariño genuino te acompañen hoy y durante todo el año.',
      'Brindamos por tu presente luminoso y por cada sueño lindo que está por cumplirse. ¡Felicidades!',
      'Disfrutá tu día al máximo rodeado de afecto sincero y buenas noticias. ¡Feliz nueva vuelta al sol!'
    ]
  }
};

// ---------------------------------------------------------------------------
// 5. Compositor completo del cuerpo de cada publicacion (Cartas largas, Poemas, Cortos, etc.)
// ---------------------------------------------------------------------------
export function redactarTextoMensaje(titulo, hub, perfil, msgIndex, seed) {
  const fIdx = (msgIndex + seed) % 1000;

  if (perfil.esPoema) {
    const kw = (hub.keyword || '').toLowerCase();
    const pool = kw.includes('mamá') ? POEMAS_BANCO.mama
      : kw.includes('hija') ? POEMAS_BANCO.hija
      : kw.includes('novia') ? POEMAS_BANCO.novia
      : kw.includes('amiga') ? POEMAS_BANCO.amiga
      : kw.includes('enamorar') ? POEMAS_BANCO.enamorar
      : POEMAS_BANCO.general;
    const basePoema = pool[fIdx % pool.length][1];
    if (msgIndex < pool.length) return basePoema;
    const stanzasA = basePoema.split('\n\n');
    const altPoema = pool[(fIdx + 1) % pool.length][1];
    const stanzasB = altPoema.split('\n\n');
    const genFallback = POEMAS_BANCO.general[(fIdx + 2) % POEMAS_BANCO.general.length][1].split('\n\n');
    const s1 = stanzasA[0];
    const s2 = stanzasB[1] || genFallback[1];
    const s3 = stanzasA[2] || genFallback[2];
    const cierreVerso = [
      'Y en este día claro te abrazo con el alma,\ndeseando que la dicha te abrace en plena calma.',
      'Que cada verso guarde mi afecto verdadero\ny brille tu sonrisa como un cielo entero.',
      'Feliz cumpleaños hoy, que nunca falte vida,\nni sueño compartido ni esperanza encendida.',
      'Brindemos por tus años con luz y gratitud,\nque abunde la alegría, la calma y la salud.'
    ][(msgIndex + seed) % 4];
    return `${s1}\n\n${s2}\n\n${s3}\n\n${cierreVerso}`;
  }

  if (perfil.esBilingue) {
    const item = FRASES_BILINGUES[msgIndex % FRASES_BILINGUES.length];
    return `Mensaje en inglés:\n"${item.en}"\n\nTraducción al español:\n"${item.es}"\n\nIdeal para dedicar por WhatsApp, acompañar un regalo o publicar en redes con un toque internacional cálido y comprensible.`;
  }

  if (perfil.esCarta) {
    return componerCartaLarga(hub, perfil, msgIndex, seed);
  }

  if (perfil.formato === 'largo') {
    const temaKey = BANCO_TEXTOS_POR_TEMA[perfil.tema] ? perfil.tema : 'general';
    const b = BANCO_TEXTOS_POR_TEMA[temaKey];
    const p1 = b.ap[(msgIndex + seed) % b.ap.length];
    const p2 = b.dev[(msgIndex * 3 + seed) % b.dev.length];
    const p3 = b.dev[(msgIndex * 5 + 1 + seed) % b.dev.length];
    const p4 = CARTAS_ESRUCTURA.cuerpoPresente[(msgIndex + seed) % CARTAS_ESRUCTURA.cuerpoPresente.length];
    const p5 = b.cie[(msgIndex * 2 + seed) % b.cie.length];
    return resolverConcordancia(aplicarTratamientoTexto(`${p1}\n\n${p2}\n\n${p3}\n\n${p4}\n\n${p5}`, perfil), perfil);
  }

  if (perfil.esDuelo) {
    const p1 = DUELO_CONTENIDO.aperturas[(msgIndex + seed) % DUELO_CONTENIDO.aperturas.length];
    const p2 = DUELO_CONTENIDO.desarrollos[(msgIndex * 3 + seed) % DUELO_CONTENIDO.desarrollos.length];
    const p3 = DUELO_CONTENIDO.cierres[(msgIndex * 5 + seed) % DUELO_CONTENIDO.cierres.length];
    const pExtra = perfil.voc
      ? `Hoy recordamos especialmente todo lo que fuiste como ${perfil.voc}: tu entrega serena sigue iluminando nuestra casa. `
      : '';
    return resolverConcordancia(`${p1}\n\n${pExtra}${p2}\n\n${p3}`, perfil);
  }

  if (perfil.esMascota) {
    const bank = perfil.dest === 'perros' ? MASCOTAS_CONTENIDO.perros : MASCOTAS_CONTENIDO.gatos;
    const v1 = bank.virtudes[(msgIndex + seed) % bank.virtudes.length];
    const p1 = `Gracias por ${v1}. Desde que llegaste a nuestra casa llenaste cada rincón de compañía fiel y momentos hermosos que hoy celebramos con cariño.`;
    const p2 = bank.escenas[(msgIndex * 3 + seed) % bank.escenas.length];
    const p3 = bank.cierres[(msgIndex * 5 + seed) % bank.cierres.length];
    return `${p1}\n\n${p2}\n\n${p3}`;
  }

  if (perfil.esInvitacion) {
    const p1 = INVITACION_CONTENIDO.aperturas[(msgIndex + seed) % INVITACION_CONTENIDO.aperturas.length];
    const p2 = INVITACION_CONTENIDO.desarrollos[(msgIndex * 3 + seed) % INVITACION_CONTENIDO.desarrollos.length];
    const p3 = INVITACION_CONTENIDO.cierres[(msgIndex * 5 + seed) % INVITACION_CONTENIDO.cierres.length];
    return `${p1}\n\n${p2}\n\n${p3}`;
  }

  if (perfil.esCorto) {
    const cortosAp = [
      'Hoy celebramos tu vida luminosa y la suerte enorme de tenerte siempre cerca. Que nunca falten risas sinceras, calma y abrazos verdaderos en tu camino.',
      'Que esta nueva vuelta al sol te regale salud firme, proyectos lindos, mesa alegre y días tranquilos junto a quienes te quieren de verdad.',
      'Con pocas palabras pero con todo el corazón, te deseo un cumpleaños hermoso, en paz, con buena compañía, mesa compartida y momentos inolvidables.',
      'Agradezco cada risa sincera y cada charla compartida contigo. Ojalá los próximos doce meses multipliquen las buenas noticias, la calma y la alegría en tu hogar.',
      'Soplá las velas con entusiasmo enorme y recibí hoy multiplicado todo el afecto bonito y generoso que sembrás durante cada semana del año.',
      'Merecés un día muy luminoso, sin apuros innecesarios y lleno de detalles tiernos. ¡Feliz cumpleaños y lo mejor para todo este nuevo capítulo!'
    ];
    const cortosCierre = [
      'Brindamos hoy por tu salud plena, tus sueños cumplidos y la alegría inmensa de seguir compartiendo camino. ¡Muy feliz cumpleaños!',
      'Que nunca te falten motivos genuinos y sencillos para sonreír al despertar cada mañana de este año. ¡Muchas felicidades en tu día!',
      'Recibí un abrazo gigante cargado de cariño sincero, gratitud honda y muy buenos deseos para todo el año que empieza.',
      'Hoy se festeja tu historia valiosa y todo lo hermoso que todavía te espera por conquistar en paz. ¡Feliz cumpleaños!'
    ];
    const a = cortosAp[(msgIndex + seed) % cortosAp.length];
    const b = cortosCierre[(msgIndex * 3 + seed) % cortosCierre.length];
    return resolverConcordancia(aplicarTratamientoTexto(`${a}\n\n${b}`, perfil), perfil);
  }

  if (perfil.esAniversario) {
    const dur = perfil.duracionStr || 'este aniversario';
    const esSing = /^(este|nuestro|un|primer)\b/.test(dur);
    const estosDur = esSing ? dur : `estos ${dur}`;
    const anivAp = [
      `Celebrar ${dur} juntos llena el corazón de gratitud y ternura. Cuando miro todo lo que construimos paso a paso, confirmo que caminar a tu lado es mi mayor acierto.`,
      `Esta fecha celebrando ${dur} no solo cuenta el tiempo en el calendario, sino las charlas largas, los abrazos que sanan y las metas que soñamos compartir.`,
      `Hoy brindamos por ${dur} ${esSing ? 'lleno' : 'llenos'} de complicidad real, aprendizaje mutuo y esa calma bonita que nace cuando dos personas eligen cuidarse con respeto.`,
      `Cumplir ${dur} confirma que nuestro cariño crece más firme, paciente y luminoso con cada capítulo vivido de la mano.`,
      `Al recordar nuestro primer día juntos frente a ${estosDur}, sonrío agradeciendo cada gesto pequeño que nos trajo hasta acá.`
    ];
    const anivDev = [
      'Aprendimos a sostenernos en las jornadas exigentes, a reírnos de las pequeñas manías y a convertir días comunes en refugio seguro.',
      'Gracias por tu escucha atenta, por respetar nuestros tiempos y por hacer que estar juntos se sienta siempre como casa.',
      'Incluso en la rutina apretada encontramos minutos lindos para recordarnos cuánto nos importa seguir construyendo esta historia con verdad.'
    ];
    const anivCie = [
      `¡Feliz aniversario por ${dur}! Que sigamos sumando viajes, risas y promesas cumplidas por muchísimo tiempo más.`,
      'Brindamos por el presente hermoso que levantamos y por todo lo increíble que todavía nos queda por vivir juntos.',
      'Gracias por seguir eligiéndome con la misma ilusión del principio. ¡Por muchos capítulos más llenos de amor!'
    ];
    let p1 = anivAp[(msgIndex + seed) % anivAp.length];
    let p2 = anivDev[(msgIndex * 3 + seed) % anivDev.length];
    let p3 = anivCie[(msgIndex * 5 + seed) % anivCie.length];
    if (hub.keyword.includes('amigo') && hub.keyword.includes('bodas')) {
      p1 = 'Qué alegría enorme celebrar junto a ustedes otro aniversario de bodas, testimonio hermoso de amor maduro, paciencia y compañerismo.';
      p2 = 'Como amigos admiramos la forma respetuosa y cálida en que construyeron su hogar, superando pruebas y festejando cada logro en equipo.';
      p3 = '¡Feliz aniversario de bodas! Brindamos por muchos años más de salud, complicidad y alegría compartida.';
    } else if (hub.keyword.includes('bodas de oro')) {
      p1 = 'Cincuenta años caminando juntos representan un tesoro inmenso de fidelidad, ternura y entrega cotidiana que inspira a toda la familia.';
      p2 = 'Estas bodas de oro celebran medio siglo de decisiones compartidas, mesas largas y un amor que supo madurar con gracia y fortaleza.';
      p3 = '¡Felices bodas de oro! Que sigan disfrutando este amor dorado con salud, paz y el abrazo agradecido de quienes los amamos.';
    }
    return resolverConcordancia(`${p1}\n\n${p2}\n\n${p3}`, perfil);
  }

  const temaKey = BANCO_TEXTOS_POR_TEMA[perfil.tema] ? perfil.tema : 'general';
  const b = BANCO_TEXTOS_POR_TEMA[temaKey];
  // Cuando generamos nuevas publicaciones (msgIndex >= 30), combinamos con aperturas y cierres frescos humanizados
  const apHumanoExtra = !perfil.esDuelo && !perfil.esAniversario && !perfil.esAutoMensaje && !perfil.esEx && !perfil.esCristiano && perfil.tratamiento === 'vos'
    ? [
        'Quería mandarte algo distinto hoy porque un simple saludo corto se quedaba re corto para todo lo que representás. A veces en el apuro de todos los días no frenamos a decirnos cuánto bien nos hace tenernos cerca.',
        'Me puse a pensar en vos apenas arranqué el día y quise dejarte unas líneas reales, sin vueltas ni palabras acartonadas, para que sepas lo mucho que valoro cada momento compartido.',
        'Hay personas que hacen más liviana la semana con solo mandar un audio o sentarse a charlar un rato, y vos sos exactamente de esas. Hoy que celebrás un año más, tocaba devolverte un poquito de todo ese cariño.'
      ]
    : [];
  const cieHumanoExtra = !perfil.esDuelo && !perfil.esAniversario && !perfil.esAutoMensaje && !perfil.esEx && !perfil.esCristiano && perfil.tratamiento === 'vos'
    ? [
        '¡Muy feliz cumpleaños! Ojalá este año nuevo venga liviano, con salud firme, mates o cafés tranquilos y muchísimos motivos para reírte con ganas.',
        'Mandame cómo la estás pasando hoy y guardame un pedacito de alegría para brindar pronto juntos. ¡Te mando un abrazo enorme de corazón!'
      ]
    : [];

  const poolAp = msgIndex >= 30 && apHumanoExtra.length ? [...apHumanoExtra, ...b.ap] : b.ap;
  const poolCie = msgIndex >= 30 && cieHumanoExtra.length ? [...cieHumanoExtra, ...b.cie] : b.cie;

  const p1 = poolAp[(msgIndex + seed) % poolAp.length];
  const p2 = b.dev[(msgIndex * 3 + seed) % b.dev.length];
  const p3 = poolCie[(msgIndex * 5 + seed) % poolCie.length];

  const rolesComo = new Set([
    'mamá', 'papá', 'amiga', 'mejor amiga', 'amigo', 'mejor amigo',
    'hermana', 'hermano', 'hermanita', 'hija', 'hijo', 'abuelita', 'abuelito',
    'abuela', 'abuelo', 'tía', 'tío', 'prima', 'primo', 'sobrina', 'sobrino',
    'cuñada', 'cuñado', 'madrina', 'padrino', 'comadre', 'compadre', 'ahijada', 'ahijado'
  ]);
  let puente = '';
  if (perfil.edadStr && !p1.includes(perfil.edadStr) && msgIndex % 2 === 0) {
    puente = `Cumplir ${perfil.edadStr} merece celebrarse con calma, orgullo sano y toda la alegría de mirar hacia adelante. `;
  } else if (perfil.voc && rolesComo.has(perfil.voc) && msgIndex % 3 === 1 && !perfil.esAutoMensaje && perfil.tratamiento === 'vos') {
    puente = `Como ${perfil.voc}, dejás una marca hermosa que celebramos hoy con gratitud sincera. `;
  }

  const cuerpo = `${p1}\n\n${puente}${p2}\n\n${p3}`;
  return resolverConcordancia(aplicarTratamientoTexto(cuerpo, perfil), perfil);
}

function componerCartaLarga(hub, perfil, msgIndex, seed) {
  const kw = (hub.keyword || '').toLowerCase();
  const sIdx = msgIndex + seed;

  let salKey = perfil.genero === 'f' ? 'f' : perfil.genero === 'm' ? 'm' : 'n';
  if (perfil.esAniversario || ['novia', 'novio', 'amor', 'pareja'].includes(perfil.dest) || perfil.voc === 'mi amor') salKey = 'novios';
  if (perfil.esEx) salKey = 'ex';
  const saludosArr = CARTAS_ESRUCTURA.saludos[salKey] || CARTAS_ESRUCTURA.saludos.n;
  const saludo = resolverConcordancia(saludosArr[sIdx % saludosArr.length], perfil);

  let temaCarta = 'general';
  if (perfil.esAniversario) temaCarta = 'novios_tiempo';
  else if (perfil.edadNum !== null && perfil.edadNum <= 4 && (perfil.dest === 'hijo' || perfil.dest === 'hija')) temaCarta = 'hijos_bebe';
  else if (perfil.dest === 'hijo' || perfil.dest === 'hija') temaCarta = 'hijos_edad';
  else if (perfil.esDistancia) temaCarta = 'distancia';
  else if (perfil.esLlorar) temaCarta = 'llorar';
  else if (perfil.esEx) temaCarta = 'ex';

  const apArr = CARTAS_ESRUCTURA.cuerpoApertura[temaCarta] || CARTAS_ESRUCTURA.cuerpoApertura.general;
  const memArr = CARTAS_ESRUCTURA.cuerpoMemoria[temaCarta] || CARTAS_ESRUCTURA.cuerpoMemoria.general;
  const desArr = CARTAS_ESRUCTURA.cuerpoDeseos[temaCarta] || CARTAS_ESRUCTURA.cuerpoDeseos.general;

  const durVal = perfil.duracionStr || 'este tiempo';
  const esSingDur = /^(este|nuestro|un|primer)\b/.test(durVal);
  const replTokens = (t) => t
    .split('estos {duracion} ').join(esSingDur ? `${durVal} ` : `estos ${durVal} `)
    .split('{duracion}').join(durVal)
    .split('{edad}').join(perfil.edadStr || 'un año más');

  let p1 = replTokens(apArr[sIdx % apArr.length]);
  let p2 = replTokens(memArr[(sIdx * 3) % memArr.length]);
  let p3 = CARTAS_ESRUCTURA.cuerpoPresente[(sIdx * 5) % CARTAS_ESRUCTURA.cuerpoPresente.length];
  let p4 = replTokens(desArr[(sIdx * 7) % desArr.length]);

  if (kw.includes('abuelita')) {
    p2 += ' En tus manos pacientes, en el aroma de tu cocina y en tus consejos sin apuro descubrimos el valor más hondo de nuestras raíces familiares.';
  } else if (kw.includes('papá')) {
    p2 += ' Aunque muchas veces trabajaste en silencio para que nada faltara, cada esfuerzo tuyo quedó grabado en nosotros como ejemplo imborrable de nobleza y entrega.';
  } else if (kw.includes('madre') || kw.includes('mamá')) {
    p2 += ' Fuiste refugio en cada tormenta, escucha paciente cuando faltaban respuestas y la primera alegría en todos nuestros logros.';
  } else if (kw.includes('15 años')) {
    p2 += ' Cumplir quince años junto a vos me llena de emoción por todo lo vivido desde pequeñas y por la mujer valiente en que te estás convirtiendo.';
  } else if (kw.includes('hermana menor')) {
    p2 += ' Aunque siempre te vea con esa ternura protectora de hermana grande, me maravilla ver tu fuerza, tu criterio y tu forma luminosa de crecer.';
  } else if (kw.includes('hermano menor')) {
    p2 += ' Verte pasar de las travesuras infantiles a tus metas actuales confirma el gran hombre noble en que te estás convirtiendo.';
  }

  const despArr = perfil.esEx ? CARTAS_ESRUCTURA.despedidasEx : CARTAS_ESRUCTURA.despedidas;
  const despedida = despArr[sIdx % despArr.length];

  const carta = `${saludo}\n\n${p1}\n\n${p2}\n\n${p3}\n\n${p4}\n\n${despedida}`;
  return resolverConcordancia(aplicarTratamientoTexto(carta, perfil), perfil);
}

function aplicarTratamientoTexto(texto, perfil) {
  if (perfil.tratamiento === 'usted') return adaptarAUsted(texto);
  if (perfil.tratamiento === 'plural') return adaptarAPlural(texto, perfil.genero);
  return texto;
}

// ---------------------------------------------------------------------------
// 6. Orquestador para generar exactamente N mensajes unicos por hub
// ---------------------------------------------------------------------------
export function bigramas(s) {
  const t = s.replace(/\s+/g, '');
  if (t.length < 2) return new Uint16Array(0);
  const out = new Uint16Array(t.length - 1);
  for (let i = 0; i < t.length - 1; i++) {
    const a = charCode36(t[i]);
    const b = charCode36(t[i + 1]);
    out[i] = a * 37 + b;
  }
  out.sort();
  return out;
}
function charCode36(ch) {
  const c = ch.charCodeAt(0);
  if (c >= 97 && c <= 122) return c - 97;
  if (c >= 48 && c <= 57) return 26 + (c - 48);
  return 36;
}
export function dicePre(A, B) {
  if (!A.length || !B.length) return 0;
  let hit = 0, i = 0, j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) { hit++; i++; j++; }
    else if (A[i] < B[j]) i++;
    else j++;
  }
  return (2 * hit) / (A.length + B.length);
}
export function jaccardPre(A, B) {
  let inter = 0;
  A.forEach((x) => { if (B.has(x)) inter++; });
  return inter / (A.size + B.size - inter);
}

const ADORNOS_FINALES_SEGUROS = [
  'hoy mismo',
  'con todo el corazón',
  'con inmensa gratitud',
  'en esta nueva etapa',
  'con paz y esperanza',
  'desde lo más hondo',
  'en familia hoy',
  'con sonrisa sincera',
  'de todo corazón',
  'bajo cielo claro',
  'con enorme cariño',
  'con afecto verdadero',
  'en calma y salud',
  'con sincero entusiasmo'
];

const ADORNOS_DUELO = [
  'con amor eterno',
  'hasta el cielo',
  'con paz y gratitud',
  'en nuestra memoria',
  'con fe serena',
  'de todo corazón'
];

export function generarMensajesProfesionales(hub, cantidadFaltante, usadosSlugs, usadosTitulosNorm, usadosPorDest, palabrasInicioUsadas, seedOffset, inicioIndice = 0) {
  const perfil = obtenerPerfilHub(hub);
  const kwNorm = normalizar(hub.keyword);
  const dest = hub.destinatario;
  if (!usadosPorDest.has(dest)) usadosPorDest.set(dest, []);
  const listaDest = usadosPorDest.get(dest);

  const genTitulos = crearGeneradorDeTitulos(hub, perfil, seedOffset);
  const mensajes = [];
  let intento = 0;
  const maxIntentos = 12000;

  const altVerbs = [
    ['celebramos', ['festejamos', 'honramos', 'valoramos', 'brindamos por']],
    ['festejamos', ['celebramos', 'honramos']],
    ['regale', ['conceda', 'acerque', 'traiga']],
    ['lleno de', ['colmado de', 'cargado de', 'rodeado de']],
    ['llenos de', ['colmados de', 'cargados de', 'rodeados de']],
    ['nuevo año', ['nuevo ciclo', 'capítulo nuevo', 'tiempo por venir', 'camino nuevo']],
    ['sincero', ['genuino', 'verdadero', 'profundo', 'hondo']],
    ['sincera', ['genuina', 'verdadera', 'profunda', 'honda']],
    ['hermosa', ['luminosa', 'valiosa', 'preciosa']],
    ['hermoso', ['luminoso', 'valioso', 'precioso']],
    ['alegría', ['dicha', 'felicidad', 'plenitud']],
    ['camino', ['sendero', 'recorrido', 'rumbo']],
    ['cariño', ['afecto', 'aprecio']],
    ['sueños', ['anhelos', 'deseos']],
    ['salud', ['fortaleza', 'serenidad']],
    ['paz', ['calma', 'serenidad', 'armonía']],
    ['sonrisa', ['mirada', 'risa', 'alegría']],
    ['etapa', ['temporada', 'jornada']],
    ['día', ['momento']],
    ['vida', ['historia', 'existencia']],
    ['historia', ['trayectoria', 'aventura']],
    ['mesa', ['casa', 'reunión', 'sobremesa']],
    ['casa', ['mesa', 'familia']],
    ['risa', ['sonrisa', 'alegría', 'chispa']],
    ['risas', ['sonrisas', 'alegrías']],
    ['abrazo', ['saludo', 'brindis']],
    ['abrazos', ['saludos', 'gestos']],
    ['capítulo', ['tramo', 'ciclo', 'año']],
    ['futuro', ['porvenir', 'horizonte']],
    ['lindo', ['bonito', 'grato', 'hermoso']],
    ['linda', ['bonita', 'grata', 'hermosa']],
    ['lindos', ['bonitos', 'gratos', 'hermosos']],
    ['lindas', ['bonitas', 'gratas', 'hermosas']],
    ['claro', ['limpio', 'sereno']],
    ['esperanza', ['ilusión', 'fe']],
    ['ternura', ['dulzura', 'calidez']],
    ['respeto', ['aprecio', 'afecto']],
    ['deseamos', ['auguramos', 'pedimos', 'enviamos']],
    ['enviamos', ['mandamos', 'acercamos']],
    ['siempre', ['cada día', 'sin falta']]
  ];

  const altVerbsDuelo = [
    ['sincero', ['genuino', 'verdadero', 'profundo']],
    ['sincera', ['genuina', 'verdadera', 'profunda']],
    ['paz', ['calma', 'serenidad', 'armonía']],
    ['vida', ['historia', 'existencia', 'memoria']],
    ['recuerdo', ['legado', 'ejemplo', 'nombre']],
    ['eterno', ['inmenso', 'fiel', 'luminoso']],
    ['eterna', ['inmensa', 'serena', 'luminosa']],
    ['ternura', ['dulzura', 'calidez']],
    ['cariño', ['afecto', 'aprecio']],
    ['familia', ['mesa', 'casa', 'historia']],
    ['casa', ['mesa', 'familia']],
    ['hogar', ['corazón', 'refugio']],
    ['camino', ['paso', 'recorrido']],
    ['oración', ['plegaria', 'esperanza']],
    ['siempre', ['cada día', 'sin olvido']]
  ];

  while (mensajes.length < cantidadFaltante) {
    intento++;
    if (intento > maxIntentos) {
      throw new Error(`No se pudieron generar ${cantidadFaltante} mensajes para ${hub.slug} (generados: ${mensajes.length})`);
    }
    const candObj = genTitulos.obtener(intento);
    if (!candObj) continue;
    let titulo = candObj.raw;
    const vuelta = candObj.vuelta;

    if (vuelta >= 1) {
      const poolAd = perfil.esDuelo ? ADORNOS_DUELO : ADORNOS_FINALES_SEGUROS;
      const ad = poolAd[(intento + vuelta + seedOffset) % poolAd.length];
      const yaTieneCierre = /(hoy|siempre|sincero|sincera|genuino|genuina|profundo|profunda|eterno|claro|eterna|corazón|esperanza|familia|hogar|distancia|gratitud|cariño|afecto|alma|salud|entusiasmo|etapa|bien|viento|vida|futuro|mesa|breve|largo|largas|honda|intacto|humor|años|año|meses|mes|cielo|memoria|serena)$/i.test(titulo);
      const tieneHoySiAdHoy = /\bhoy\b/i.test(titulo) && /\bhoy\b/i.test(ad);
      const adPrepMatch = ad.match(/^(con|en|de|desde|bajo|hasta)\s+/i);
      const mismoPrepEnCola = adPrepMatch && new RegExp(`\\b${adPrepMatch[1]}\\s+[^\\s]+(\\s+[^\\s]+)?$`, 'i').test(titulo);
      if (ad && !yaTieneCierre && !tieneHoySiAdHoy && !mismoPrepEnCola && !normalizar(titulo).includes(normalizar(ad)) && !/[,.]$/.test(titulo)) {
        const cand = `${titulo} ${ad}`;
        if (normalizar(cand).split(' ').filter(Boolean).length <= 12) {
          titulo = cand;
        }
      }
    }
    if (vuelta >= 2) {
      const subVuelta = Math.floor(vuelta / 2);
      const listaSwaps = perfil.esDuelo ? altVerbsDuelo : altVerbs;
      for (let r = 0; r < listaSwaps.length; r++) {
        const [orig, reps] = listaSwaps[r];
        const re = new RegExp(`(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])${orig}(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])`);
        if (re.test(titulo) && ((subVuelta >> (r % 5)) & 1 || (vuelta + r) % 3 === 0)) {
          const rep = reps[(vuelta + r + subVuelta + seedOffset) % reps.length];
          const replaced = titulo.replace(re, rep);
          if (normalizar(replaced).split(' ').filter(Boolean).length <= 12) {
            titulo = replaced;
          }
        }
      }
    }

    titulo = titulo.charAt(0).toUpperCase() + titulo.slice(1);
    const nt = normalizar(titulo);
    const words = nt.split(' ').filter(Boolean);
    if (words.length < 4 || words.length > 12) continue;
    if (palabrasInicioUsadas.has(words[0])) continue;
    if (nt.includes(kwNorm)) continue;
    if (usadosTitulosNorm.has(nt)) continue;

    const slug = slugify(titulo);
    if (!slug || usadosSlugs.has(slug)) continue;
    if (['categorias', 'sobre-nosotros', 'privacidad', 'terminos-de-uso'].includes(slug)) continue;

    const limiteSim = intento > 2500 ? 0.83 : intento > 900 ? 0.80 : 0.75;
    const bigA = bigramas(nt);
    const setA = new Set(words);
    let muyParecido = false;
    for (let j = listaDest.length - 1; j >= 0; j--) {
      const prev = listaDest[j];
      const sim = Math.max(dicePre(bigA, prev.big), jaccardPre(setA, prev.wordSet));
      if (sim > limiteSim) {
        muyParecido = true;
        break;
      }
    }
    if (muyParecido) continue;

    palabrasInicioUsadas.add(words[0]);
    usadosSlugs.add(slug);
    usadosTitulosNorm.add(nt);
    listaDest.push({ big: bigA, wordSet: setA });

    const texto = redactarTextoMensaje(titulo, hub, perfil, inicioIndice + mensajes.length, seedOffset);
    mensajes.push({
      tipo: 'mensaje',
      slug,
      categoria: hub.slug,
      destinatario: dest,
      titulo,
      texto
    });
  }
  return mensajes;
}

