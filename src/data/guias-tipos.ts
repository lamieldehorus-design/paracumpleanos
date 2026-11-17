export interface SeccionGuia {
  subtitulo: string;
  parrafos: string[];
  lista?: string[];
}

export interface TablaGuia {
  titulo: string;
  columnas: [string, string, string];
  filas: [string, string, string][];
}

export interface ComparacionGuia {
  titulo: string;
  evitar: string;
  mejor: string;
}

export interface EjemploGuia {
  etiqueta: string;
  texto: string;
}

export interface FaqGuia {
  pregunta: string;
  respuesta: string;
}

export interface DatoPropioGuia {
  titulo: string;
  dato: string;
  fuente: string;
}

export interface FuenteAutoridadGuia {
  nombre: string;
  url: string;
}

export interface PasoHowToGuia {
  nombre: string;
  texto: string;
}

export interface GuiaEditorial {
  slug: string;
  seoTitle: string;
  titulo: string;
  h1: string;
  descripcion: string;
  keywordPrincipal: string;
  keywordsSecundarias: string[];
  emoji: string;
  tiempoLectura: string;
  fechaPublicacion: string;
  fechaActualizacion: string;
  autor: string;
  autorRol: string;
  autorBio: string;
  resumen: string;
  respuestaDirecta: string;
  citaDestacada: string;
  datosPropios: DatoPropioGuia;
  comparacionPractica: ComparacionGuia;
  tablaComparativa: TablaGuia;
  ejemplosAdaptables: EjemploGuia[];
  checklistPractica: string[];
  faqs: FaqGuia[];
  pasosHowTo?: PasoHowToGuia[];
  categoriasRelacionadas: { slug: string; nombre: string }[];
  fuentesAutoridad: FuenteAutoridadGuia[];
  secciones: SeccionGuia[];
}

export const AUTOR_ROL_DEFAULT = 'Redacción y revisión lingüística en español · ParaCumpleanos';
export const AUTOR_BIO_DEFAULT =
  'Equipo especializado en dedicatorias y textos afectivos en español rioplatense y neutro. Editamos y auditamos a diario 352 categorías y 14.080 textos inéditos verificando tono, concordancia gramatical y adecuación emocional para cada vínculo.';
