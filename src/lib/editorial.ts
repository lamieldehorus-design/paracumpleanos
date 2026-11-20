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

export type SegmentoTono =
  | 'corto'
  | 'emotivo'
  | 'recuerdo'
  | 'gratitud'
  | 'reflexivo'
  | 'estado'
  | 'divertido'
  | 'fe'
  | 'carta'
  | 'poema'
  | 'formal'
  | 'duelo';

export const ETIQUETAS_SEGMENTOS: Record<SegmentoTono, string> = {
  corto: 'Breves WhatsApp',
  emotivo: 'Emotivos',
  recuerdo: 'Nostalgia y recuerdos',
  gratitud: 'Agradecimiento',
  reflexivo: 'Reflexivos',
  estado: 'Para estados / IG',
  divertido: 'Con humor',
  fe: 'Con fe',
  carta: 'Cartas largas',
  poema: 'Poéticos / En verso',
  formal: 'Formales / Trabajo',
  duelo: 'Serenos / Duelo'
};

export const ORDEN_SEGMENTOS: SegmentoTono[] = [
  'corto',
  'emotivo',
  'recuerdo',
  'gratitud',
  'reflexivo',
  'estado',
  'divertido',
  'fe',
  'carta',
  'poema',
  'formal',
  'duelo'
];

export type PerfilEditorial =
  | 'banderines'
  | 'motivaciones'
  | 'meses'
  | 'fecha_especial'
  | 'jubilacion'
  | 'nacimiento'
  | 'duelo'
  | 'aniv_meses'
  | 'aniv_anos'
  | 'bilingue'
  | 'invitacion'
  | 'atrasado'
  | 'humor'
  | 'fe'
  | 'profesionales'
  | 'distancia'
  | 'embarazo'
  | 'infantil'
  | 'jovenes'
  | 'adultos'
  | 'mayores'
  | 'poema'
  | 'carta'
  | 'pareja'
  | 'amistad'
  | 'familia';

export interface ClasificacionMensaje {
  claseTono: ClaseTono;
  segmentos: SegmentoTono[];
  tonoLabel: string;
  canalLabel: string;
  palabras: number;
  tiempoLectura: string;
}

export interface FiltroSegmentoHub {
  id: string;
  label: string;
  count: number;
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
  perfil: PerfilEditorial;
  tabla: FilaDecisionHub[];
  subtituloClaves: string;
  claves: string[];
  citaClave: string;
  faqs: FaqItem[];
  guia: GuiaEditorial;
}

export interface GuiaAdaptacionMensaje {
  perfil: PerfilEditorial;
  clasificacion: ClasificacionMensaje;
  citaDestacada: string;
  destinatarioNombre: string;
  ejemploGenerico: string;
  ejemploConcreto: string;
  posdataSugerida: string;
  mejorHorario: string;
  pasos: string[];
  guia: GuiaEditorial;
}

const REGEX_DUELO = /fallecid|hasta-el-cielo|condolencias|pesame|duelo|tristes|nostalgia|extranas/;
const REGEX_ANIV = /(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/;
const REGEX_POEMA = /^poema|poesia|-poema/;

function contarPalabras(texto: string): number {
  const limpio = String(texto || '').trim();
  return limpio ? limpio.split(/\s+/).length : 0;
}

function hashTexto(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h >>> 0);
}

function elegirVariante<T>(lista: T[], semilla: string, salto = 0): T {
  const idx = (hashTexto(semilla) + salto) % lista.length;
  return lista[idx];
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
  'cartas',
  'en el cielo',
  'graduación',
  'invitación',
  'para mí',
  'gatos',
  'perros',
  'banderines'
]);

const DEST_FRASES_NATURALES: Record<string, { frase: string; vocativo: string }> = {
  'mamá': { frase: 'mamá', vocativo: 'mamá' },
  'papá': { frase: 'papá', vocativo: 'papá' },
  'mamá en el cielo': { frase: 'mamá', vocativo: 'mamá' },
  'papá en el cielo': { frase: 'papá', vocativo: 'papá' },
  'hermana en el cielo': { frase: 'tu hermana', vocativo: 'hermana' },
  'quinceañera': { frase: 'la quinceañera', vocativo: 'quinceañera' },
  'bebé': { frase: 'el bebé', vocativo: '' },
  'niña': { frase: 'la niña', vocativo: '' },
  'niño': { frase: 'el niño', vocativo: '' },
  'adolescente': { frase: 'ese adolescente', vocativo: '' },
  'joven': { frase: 'esa persona joven', vocativo: '' },
  'mujer': { frase: 'esa mujer especial', vocativo: '' },
  'hombre': { frase: 'ese hombre especial', vocativo: '' },
  'novios': { frase: 'los novios', vocativo: '' },
  'pareja': { frase: 'tu pareja', vocativo: 'mi amor' },
  'amor': { frase: 'tu pareja', vocativo: 'mi amor' },
  'crush': { frase: 'esa persona que te gusta', vocativo: '' },
  'alguien especial': { frase: 'esa persona especial', vocativo: '' },
  'persona especial': { frase: 'esa persona especial', vocativo: '' },
  'jefe': { frase: 'tu jefe', vocativo: '' },
  'jefa': { frase: 'tu jefa', vocativo: '' },
  'doctor': { frase: 'el doctor', vocativo: 'doctor' },
  'doctora': { frase: 'la doctora', vocativo: 'doctora' },
  'profesor': { frase: 'tu profesor', vocativo: 'profesor' },
  'profesora': { frase: 'tu profesora', vocativo: 'profesora' },
  'maestra': { frase: 'la maestra', vocativo: 'seño' },
  'pastor': { frase: 'tu pastor', vocativo: 'pastor' },
  'sacerdote': { frase: 'el sacerdote', vocativo: 'padre' },
  'compañero de trabajo': { frase: 'tu compañero de trabajo', vocativo: '' },
  'alumno': { frase: 'tu alumno', vocativo: '' },
  'embarazada': { frase: 'la futura mamá', vocativo: '' },
  'gemelas': { frase: 'las gemelas', vocativo: '' },
  'gemelos': { frase: 'los gemelos', vocativo: '' },
  'sobrinas gemelas': { frase: 'tus sobrinas gemelas', vocativo: '' }
};

function destNatural(hub?: any, msg?: any): { frase: string; vocativo: string } {
  const raw = String((hub && hub.destinatario) || (msg && msg.destinatario) || '').trim();
  const lower = raw.toLowerCase();
  if (!raw || DEST_GENERICOS.has(lower)) {
    return { frase: 'la persona que cumple', vocativo: '' };
  }
  if (DEST_FRASES_NATURALES[lower]) {
    return DEST_FRASES_NATURALES[lower];
  }
  return { frase: `tu ${lower}`, vocativo: raw };
}

export function detectarPerfilEditorial(hub?: any, msg?: any): PerfilEditorial {
  const slug = String((hub && hub.slug) || (msg && msg.categoria) || '').toLowerCase();
  const grupo = String((hub && hub.grupo) || '').toLowerCase();
  const dest = String((hub && hub.destinatario) || (msg && msg.destinatario) || '').toLowerCase();

  if (slug === 'banderines-de-cumpleanos-para-imprimir' || slug.includes('banderin')) return 'banderines';
  if (slug === 'motivaciones' || slug.includes('motivacion')) return 'motivaciones';
  if (grupo === 'meses' || /^cumpleanos-en-/.test(slug)) return 'meses';
  if (/jubilacion/.test(slug)) return 'jubilacion';
  if (/nacimiento|cumplemes/.test(slug)) return 'nacimiento';
  if (
    grupo === 'fechas_especiales' ||
    /^feliz-dia-|^feliz-navidad|^feliz-ano-nuevo|^feliz-nochebuena|^feliz-san-valentin|^feliz-halloween|^feliz-primavera|^felices-pascuas/.test(slug)
  ) {
    return 'fecha_especial';
  }
  if (REGEX_DUELO.test(slug)) return 'duelo';
  if (/meses-de-novios/.test(slug)) return 'aniv_meses';
  if (REGEX_ANIV.test(slug)) return 'aniv_anos';
  if (/ingles|english|biling/.test(slug)) return 'bilingue';
  if (/invitacion/.test(slug)) return 'invitacion';
  if (/atrasad|tarde/.test(slug)) return 'atrasado';
  if (/gracioso|divertido|chist|humor|risa/.test(slug)) return 'humor';
  if (grupo === 'cristiano' || /cristian|dios-te-bendiga/.test(slug)) return 'fe';
  if (
    grupo === 'profesionales' ||
    ['formal', 'doctor', 'doctora', 'jefe', 'jefa', 'profesor', 'profesora', 'maestra', 'pastor', 'sacerdote', 'ex-suegra'].includes(dest)
  ) {
    return 'profesionales';
  }
  if (grupo === 'distancia' || /lejos|distancia/.test(slug)) return 'distancia';
  if (/embaraz/.test(slug)) return 'embarazo';
  if (/(bebe|primer-anito|(?:^|-)[1-9]-anos?\b|(?:^|-)10-anos?\b|-nino\b|-nina\b)/.test(slug)) return 'infantil';
  if (/(?:^|-)(12|13|14|15|16|17|18|19|20|21)-anos?\b|quince/.test(slug)) return 'jovenes';
  if (/(?:^|-)(25|30|35|40|45)-anos?\b/.test(slug)) return 'adultos';
  if (/(?:^|-)(50|60|70|80|90)-anos?\b|abuel/.test(slug)) return 'mayores';
  if (REGEX_POEMA.test(slug)) return 'poema';
  if (grupo === 'cartas') return 'carta';
  if (/(novio|novia|espos|mi-amor|pareja|crush)/.test(slug)) return 'pareja';
  if (/(amig|compadre|comadre)/.test(slug)) return 'amistad';
  return 'familia';
}

export function clasificarMensaje(m: any, hub?: any): ClasificacionMensaje {
  const slugCat = String((hub && hub.slug) || m.categoria || '');
  const grupo = String((hub && hub.grupo) || '');
  const textoPlano = String(m.texto || '');
  const textoYTit = `${m.titulo || ''} ${textoPlano}`;
  const palabras = contarPalabras(textoPlano);
  const parrafos = textoPlano.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean).length;
  const saltosSimples = (textoPlano.match(/\n/g) || []).length;
  const seg = Math.max(15, Math.round((palabras / 180) * 60));
  const tiempoLectura = seg < 60 ? `${seg} seg de lectura` : '1 min de lectura';

  let claseTono: ClaseTono = 'emotivo';
  let tonoLabel = 'Emotivo y cercano';

  const esDuelo = REGEX_DUELO.test(slugCat) || grupo === 'duelo_recuerdos';
  const esPoema = REGEX_POEMA.test(slugCat) || (saltosSimples >= 4 && parrafos >= 2 && palabras <= 130);
  const esFormalDest = ['formal', 'doctor', 'doctora', 'jefe', 'jefa', 'profesor', 'profesora', 'maestra', 'pastor', 'sacerdote', 'ex-suegra'].includes(
    String((hub && hub.destinatario) || m.destinatario || '')
  );

  if (slugCat === 'motivaciones' || slugCat.includes('motivacion')) {
    claseTono = palabras <= 75 ? 'corto' : 'emotivo';
    tonoLabel = 'Inspiración práctica';
  } else if (esDuelo) {
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
  } else if (grupo === 'profesionales' || esFormalDest) {
    claseTono = 'formal';
    tonoLabel = 'Cordial y formal';
  } else if (palabras <= 75) {
    claseTono = 'corto';
    tonoLabel = 'Breve y directo';
  }

  // Segmentacion multi-etiqueta real basada en el contenido del texto
  const segSet = new Set<SegmentoTono>();
  segSet.add(claseTono);

  if (palabras <= 75) segSet.add('corto');
  if (palabras <= 85 || (parrafos <= 2 && palabras <= 95)) segSet.add('estado');
  if (palabras >= 110 || parrafos >= 4) segSet.add('carta');
  if (esPoema) segSet.add('poema');

  if (
    /\b(recuerd\w*|nostalgi\w*|memori\w*|pasado|extrañ\w*|infancia|ayer|fotos?\b|añor\w*|huella|melancol\w*|triste\w*|ausencia|aquella|aquel|historia)\b/i.test(
      textoYTit
    )
  ) {
    segSet.add('recuerdo');
  }
  if (/\b(gracias|agrade\w*|gratitud|valor\w*|reconoc\w*|atesor\w*)\b/i.test(textoYTit)) {
    segSet.add('gratitud');
  }
  if (
    /\b(aprend\w*|camino|tiempo|vida|silencio|calma|sabidur\w*|etapa|propósito|sentido|paciencia|enseñ\w*|madurez|seren\w*|paso a paso|futuro)\b/i.test(
      textoYTit
    )
  ) {
    segSet.add('reflexivo');
  }
  if (
    /\b(corazón|alma|abrazo|cariño|ternura|emoci\w*|amor|querid\w*|te quiero|te amo|orgullo|hogar|especial|cerca)\b/i.test(
      textoYTit
    )
  ) {
    segSet.add('emotivo');
  }
  if (
    !esDuelo &&
    (/gracioso|humor|divertido|chist|risa/.test(slugCat) ||
      /\b(risas?|reír\w*|chiste|broma|manías|divert\w*|cómplice|sonrisa|alegr\w*)\b/i.test(textoYTit))
  ) {
    segSet.add('divertido');
  }
  if (
    grupo === 'cristiano' ||
    /\b(dios|bendic\w*|bendiga|oración|fe\b|señor|cielo|espiritual|luz divina|gracia divina)\b/i.test(textoYTit)
  ) {
    segSet.add('fe');
  }
  if (
    grupo === 'profesionales' ||
    esFormalDest ||
    /\b(usted|cordial|estimad\w*|profesional|equipo|liderazgo|éxito|vocación|trabajo|proyecto\w*)\b/i.test(textoYTit)
  ) {
    segSet.add('formal');
  }
  if (esDuelo) {
    segSet.add('duelo');
    segSet.delete('divertido');
  }

  const segmentos = ORDEN_SEGMENTOS.filter((s) => segSet.has(s));

  const canalLabel =
    slugCat === 'motivaciones'
      ? 'Estado, Story o nota diaria'
      : palabras <= 75
      ? 'WhatsApp o estado'
      : palabras >= 120 || claseTono === 'carta' || claseTono === 'poema'
      ? 'Carta impresa o lectura larga'
      : 'WhatsApp o tarjeta';

  return {
    claseTono,
    segmentos,
    tonoLabel,
    canalLabel,
    palabras,
    tiempoLectura
  };
}

export function calcularFiltrosHub(mensajes: any[], hub?: any, cantPaginaActual?: number): FiltroSegmentoHub[] {
  const total = mensajes.length;
  const pag = typeof cantPaginaActual === 'number' ? cantPaginaActual : Math.min(12, total);
  const counts = new Map<SegmentoTono, number>();

  for (const m of mensajes) {
    const c = clasificarMensaje(m, hub);
    for (const s of c.segmentos) {
      counts.set(s, (counts.get(s) || 0) + 1);
    }
  }

  const filtros: FiltroSegmentoHub[] = [
    { id: 'todos', label: 'Todos en esta página', count: pag }
  ];

  // Mostrar todos los segmentos con publicaciones reales.
  // Si un segmento cubre el 100% (ej. 'duelo' en condolencias), lo incluimos si hay pocos filtros o lo dejamos util al final.
  const diferenciadores = ORDEN_SEGMENTOS.filter((s) => {
    const n = counts.get(s) || 0;
    return n > 0 && n < total;
  });

  for (const s of diferenciadores) {
    filtros.push({ id: s, label: ETIQUETAS_SEGMENTOS[s], count: counts.get(s) || 0 });
  }

  // Si una categoria muy homogenea tuviera menos de 3 filtros diferenciadores, agregar tambien los de cobertura total
  if (filtros.length < 4) {
    for (const s of ORDEN_SEGMENTOS) {
      const n = counts.get(s) || 0;
      if (n === total && !filtros.some((f) => f.id === s)) {
        filtros.push({ id: s, label: ETIQUETAS_SEGMENTOS[s], count: n });
      }
    }
  }

  return filtros;
}

export function extraerCitaDestacada(m: any): string {
  const bloques = String(m.texto || '')
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)
    .filter((b) => !(b.length < 55 && /[:,]$/.test(b)))
    .map((b) =>
      b
        .replace(/^(Mensaje en inglés|Traducción al español):\s*/i, '')
        .replace(/\s*\n+\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .filter(Boolean);

  for (const b of bloques) {
    const sinComillas =
      (b.startsWith('"') && b.endsWith('"')) || (b.startsWith('«') && b.endsWith('»'))
        ? b.slice(1, -1).trim()
        : b;
    if (sinComillas.length >= 45 && sinComillas.length <= 165) {
      return sinComillas;
    }
  }

  const oraciones: string[] = [];
  for (const b of bloques) {
    const sinExterior =
      (b.startsWith('"') && b.endsWith('"')) || (b.startsWith('«') && b.endsWith('»'))
        ? b.slice(1, -1).trim()
        : b;
    const partes = sinExterior
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.replace(/^["«]+|["»]+$/g, '').trim())
      .filter(Boolean);
    oraciones.push(...partes);
  }

  const ideal = oraciones.find((o) => o.length >= 45 && o.length <= 165);
  if (ideal) return ideal;
  const aceptable = oraciones.find((o) => o.length >= 25 && o.length <= 165);
  if (aceptable) return aceptable;
  const primera = oraciones[0] || bloques[0] || '';
  const limpia = primera.replace(/^["«]+|["»]+$/g, '').trim();
  return limpia.length <= 165 ? limpia : limpia.slice(0, 162).replace(/\s+\S*$/, '') + '…';
}

export function guiaRelacionadaParaHub(hub: any): GuiaEditorial {
  const slug = String((hub && hub.slug) || '');
  const grupo = String((hub && hub.grupo) || '');

  let target = 'como-personalizar-tarjetas-y-dedicatorias-whatsapp';
  if (slug === 'motivaciones') {
    target = 'como-escribir-frases-motivacionales-diarias-que-inspiren';
  } else if (grupo === 'meses' || /^cumpleanos-en-/.test(slug)) {
    target = 'cumpleanos-segun-tu-signo-del-zodiaco-como-felicitar';
  } else if (slug === 'brindis-de-cumpleanos') {
    target = 'como-dar-un-brindis-de-cumpleanos-inolvidable-en-60-segundos';
  } else if (slug === 'feliz-dia-del-padre') {
    target = 'que-regalar-a-papa-que-dice-que-no-quiere-nada-ideas-con-dedicatoria';
  } else if (/30-anos-para-mi|bodas-de-plata/.test(slug)) {
    target = 'frasco-de-los-30-motivos-como-armarlo-paso-a-paso-con-frases';
  } else if (
    hub && (
      hub.grupo === 'fechas_especiales' ||
      /feliz-dia-|jubilacion|cumplemes|nacimiento|navidad|nochebuena|ano-nuevo|san-valentin|pascuas|halloween|primavera/.test(slug)
    )
  ) {
    target = 'regalos-economicos-con-valor-emocional-y-tarjeta-personalizada';
  } else if (slug === 'banderines-de-cumpleanos-para-imprimir') {
    target = 'banderines-de-cumpleanos-para-imprimir-medidas-y-plantillas';
  } else if (
    slug === 'condolencias' ||
    slug === 'frases-tristes-para-recordar-momentos' ||
    slug === 'frases-de-nostalgia-y-recuerdos' ||
    slug === 'mensajes-cuando-extranas-a-alguien'
  ) {
    target = 'como-escribir-condolencias-y-palabras-de-pesame-respetuosas';
  } else if (REGEX_DUELO.test(slug)) {
    target = 'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido';
  } else if (slug === 'frases-para-invitacion-de-cumpleanos' || slug === 'tarjetas-bonitas-para-felicitar-en-un-cumpleanos') {
    target = 'invitaciones-y-postales-de-cumpleanos-para-imprimir-y-editar';
  } else if (REGEX_ANIV.test(slug)) {
    target = 'como-celebrar-meses-de-novios-y-aniversarios-sin-caer-en-cliches';
  } else if (/ingles|english|biling/.test(slug)) {
    target = 'mensajes-de-cumpleanos-en-ingles-y-espanol-bilingues';
  } else if (REGEX_POEMA.test(slug)) {
    target = 'como-escribir-poemas-de-cumpleanos-cortos-que-rimen-bien';
  } else if (/15-anos|quince/.test(slug)) {
    target = 'cumpleanos-de-15-anos-dedicatorias-y-reglas-del-festejo';
  } else if (/18-anos/.test(slug)) {
    target = 'ideas-para-cumpleanos-de-18-anos-regalos-y-dedicatorias';
  } else if (/50-anos/.test(slug)) {
    target = 'como-celebrar-cumpleanos-de-50-anos-homenajes-y-palabras';
  } else if (/abuel/.test(slug)) {
    target = 'que-escribir-en-cumpleanos-de-abuelos-con-ternura';
  } else if (/embaraz/.test(slug)) {
    target = 'como-felicitar-a-una-embarazada-en-su-cumpleanos';
  } else if (/gracioso|divertido|chist|humor|risa/.test(slug)) {
    target = 'frases-de-cumpleanos-graciosas-sin-incomodar';
  } else if (/para-mi\b/.test(slug)) {
    target = 'auto-felicitacion-por-mi-cumpleanos-para-agradecer-y-reflexionar';
  } else if (/whatsapp/.test(slug)) {
    target = 'como-felicitar-por-whatsapp-sin-sonar-automatico';
  } else if (/herman/.test(slug)) {
    target = 'como-escribir-dedicatorias-de-cumpleanos-para-hermanos-complices';
  } else if (grupo === 'cartas' && /(novi|espos|mi-amor|pareja)/.test(slug)) {
    target = 'como-escribir-una-carta-de-cumpleanos-a-tu-pareja';
  } else if (grupo === 'cartas') {
    target = 'como-escribir-una-carta-de-cumpleanos-que-emocione';
  } else if (grupo === 'profesionales') {
    target = 'como-felicitar-en-el-trabajo-jefe-companeros-clientes';
  } else if (grupo === 'distancia') {
    target = 'como-celebrar-un-cumpleanos-a-la-distancia';
  } else if (grupo === 'cristiano') {
    target = 'frases-de-fe-y-agradecimiento-para-cumpleanos-cristianos';
  } else if (/(bebe|primer-anito|nino|nina)/.test(slug)) {
    target = 'cumpleanos-infantiles-entre-amigos-y-companeros-de-colegio';
  } else if (grupo === 'edades') {
    target = 'que-regalar-segun-la-edad-guia-practica';
  } else if (/atrasad/.test(slug)) {
    target = 'etiqueta-digital-cuando-saludar-atrasado-o-por-redes';
  } else if (/invitacion/.test(slug)) {
    target = 'como-organizar-una-fiesta-sorpresa-sin-estres';
  } else if (/(mama|madre|papa|padre|hijo|hija)/.test(slug)) {
    target = 'mensajes-de-cumpleanos-para-padres-e-hijos-por-etapa';
  } else if (/(novi|espos|mi-amor|pareja|crush)/.test(slug)) {
    target = 'como-escribir-una-carta-de-cumpleanos-a-tu-pareja';
  }

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
  const perfil = detectarPerfilEditorial(hub);
  const esDuelo = perfil === 'duelo';
  const esAniv = perfil === 'aniv_meses' || perfil === 'aniv_anos';
  const esMotiv = perfil === 'motivaciones';
  const esBand = perfil === 'banderines';

  const tabla: FilaDecisionHub[] = esBand
    ? [
        {
          formato: 'Frases cortas (6 a 10 piezas · 3-5 hojas A4)',
          cantidad: Math.max(12, cortos),
          idealPara: 'Mesas dulces chicas, puertas de entrada o guirnaldas rápidas',
          consejo: 'Usá 1 sola fila con triángulo clásico o escudo curvo en cartulina de 200 g.'
        },
        {
          formato: 'Frases medias (11 a 16 piezas · 6-8 hojas A4)',
          cantidad: Math.max(16, medios),
          idealPara: 'Pared principal de fotos o fondo detrás de la torta',
          consejo: 'Colgalas en dos filas ordenadas por palabra para que se lean nítidas en fotos.'
        },
        {
          formato: 'Guirnaldas con nombre o edad (17+ piezas · 9+ hojas A4)',
          cantidad: Math.max(12, largos),
          idealPara: 'Festejos familiares, salones, jardines o sorpresas personalizadas',
          consejo: 'Sumá tu foto o logo en las puntas y calculá 70 cm extra de cordón para atar.'
        }
      ]
    : [
    {
      formato: 'Breves (hasta 65 palabras)',
      cantidad: cortos,
      idealPara: esMotiv
        ? 'Primer impulso de la mañana, estado o nota rápida'
        : esDuelo
        ? 'Acompañar en silencio por mensaje directo'
        : perfil === 'profesionales'
        ? 'Correo cordial o saludo temprano en el chat laboral'
        : 'Primer saludo de la mañana por WhatsApp o Instagram',
      consejo: esMotiv
        ? 'Elegí una sola idea accionable y leela antes de abrir notificaciones.'
        : perfil === 'bilingue'
        ? 'Conservá la frase breve en inglés arriba y sumá el nombre abajo.'
        : `Abrí con el trato real que usás con ${dest} antes de pegar el texto.`
    },
    {
      formato: 'Intermedios (66 a 119 palabras)',
      cantidad: medios,
      idealPara: esMotiv
        ? 'Pausa reflexiva de mitad de semana o tarjeta Story'
        : esDuelo
        ? 'Recordar una anécdota familiar con respeto'
        : esAniv
        ? 'Nota junto a una foto impresa o sorpresa de la tarde'
        : 'Tarjeta junto a un regalo o dedicatoria personal',
      consejo: esMotiv
        ? 'Compartila en WhatsApp o descargala en formato Story vertical para guardar.'
        : 'Sumá una escena concreta de este último período en el segundo párrafo.'
    },
    {
      formato: 'Extensos o cartas (120+ palabras)',
      cantidad: largos,
      idealPara: esMotiv
        ? 'Lectura de balance personal o inicio de nuevo ciclo'
        : esAniv
        ? 'Carta íntima para celebrar su historia juntos'
        : perfil === 'mayores'
        ? 'Dedicatoria impresa con letra clara para atesorar en familia'
        : 'Carta escrita a mano o lectura tranquila al final del día',
      consejo: 'Personalizá encabezado, posdata y estilo arriba antes de bajar tu tarjeta PNG.'
    }
  ];

  let subtituloClaves = `Qué suma y qué evitar al escribir ${nombre.toLowerCase()}`;
  let claves: string[];
  let citaClave: string;
  let faqs: FaqItem[];

  switch (perfil) {
    case 'duelo':
      subtituloClaves = `Criterios de respeto al dedicar ${nombre.toLowerCase()}`;
      claves = [
        'Nombrá una escena cotidiana real (un mate compartido, una enseñanza suya, una comida de casa) en vez de frases hechas.',
        'Evitá expresiones festivas que choquen con la fecha sensible y respetá la calma de la familia.',
        'Si escribís a un ser querido que extraña mucho ese día, ofrecé presencia real: escuchar o compartir un café sin apuro.'
      ];
      citaClave = elegirVariante([
        'Recordar con ternura a quien ya no está transforma parte de la nostalgia en gratitud viva.',
        'Las palabras más serenas en una ausencia no intentan explicar el dolor: nombran el legado que sigue cuidando la casa.'
      ], slug);
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
            'Sí. Usá el personalizador superior con el nombre y tu firma para actualizar al instante el texto, el botón de WhatsApp y la tarjeta descargable PNG en tonos sobrios.'
        }
      ];
      break;

    case 'aniv_meses':
      subtituloClaves = `Claves para celebrar ${nombre.toLowerCase()} con frescura`;
      claves = [
        'Nombrá un detalle pequeño de estas últimas semanas —una caminata, una comida casera o un mensaje que te alegró el día— en vez de prometer imposibles.',
        'Mantené el foco en el tiempo juntos y lo bien que se siente compartir lo cotidiano sin presiones exageradas.',
        'Elegí extensión breve para sorprender a la mañana o formato carta si acompañás una foto o merienda especial.'
      ];
      citaClave = 'Los primeros meses se celebran mejor contando qué costumbre linda nació entre ustedes que repitiendo clichés de película.';
      faqs = [
        {
          pregunta: `¿Cómo personalizo un mensaje de "${nombre}" para que no suene exagerado?`,
          respuesta:
            'Usá el apodo con el que se llaman todos los días y sumá una línea recordando la última salida o risa que compartieron este mes.'
        },
        {
          pregunta: '¿Sirven tanto para mandar por chat como para una nota en papel?',
          respuesta:
            'Sí. Tenés versiones breves ideales para WhatsApp temprano y cartas largas pensadas para acompañar una sorpresa o regalo chico.'
        },
        {
          pregunta: '¿Puedo descargar una tarjeta imagen con estos textos?',
          respuesta:
            'Sí, en cada una de las 40 dedicatorias podés elegir el tema visual y descargar tu tarjeta PNG cuadrada 1080×1080 o vertical Story 1080×1920 lista para compartir.'
        }
      ];
      break;

    case 'aniv_anos':
      subtituloClaves = `Claves para que tu mensaje de ${nombre.toLowerCase()} suene verdadero`;
      claves = [
        'Cambiá adjetivos genéricos por historia real: el viaje improvisado, cómo se acompañaron en días difíciles o la rutina del café.',
        'Valorá el equipo que formaron con el paso del tiempo y el cuidado mutuo de todos los días.',
        'Elegí tarjeta breve si va por chat temprano o versión carta extensa para dejar junto a una foto impresa a la noche.'
      ];
      citaClave = 'Las relaciones reales se celebran mejor agradeciendo lo diario compartido que repitiendo promesas grandilocuentes.';
      faqs = [
        {
          pregunta: `¿Cómo personalizo un mensaje de "${nombre}" sin que parezca copiado?`,
          respuesta:
            'Escribí el apodo de tu pareja y tu firma en el personalizador de arriba y sumá una referencia concreta de un momento vivido este último período.'
        },
        {
          pregunta: '¿Estas dedicatorias cuidan el vocabulario propio del aniversario?',
          respuesta:
            'Sí. Todas las opciones de esta sección están pensadas exclusivamente para celebrar meses, años, bodas e historia en pareja.'
        },
        {
          pregunta: '¿Cómo convierto cualquiera de estos textos en tarjeta imagen?',
          respuesta:
            'Al abrir cualquiera de las 40 dedicatorias o usar el personalizador vas a encontrar 6 estilos visuales, tipografías, posdata y descarga PNG cuadrada o Story.'
        }
      ];
      break;

    case 'bilingue':
      subtituloClaves = 'Cómo combinar inglés y español con naturalidad';
      claves = [
        'Dejá la línea en inglés limpia y fiel cuando sea la cita central, y usá la traducción al español para sumar calidez personal.',
        'Evitá mezclar frases sueltas sin sentido: elegí textos cortos si van en un estado o historia y bilingües completos para tarjetas.',
        'Agregá primero el nombre de la persona en el personalizador para que el saludo arranque cercano en cualquiera de los dos idiomas.'
      ];
      citaClave = 'Una frase en inglés suena auténtica cuando conserva el ritmo breve del idioma original y suma una posdata cercana en español.';
      faqs = [
        {
          pregunta: '¿Todas las frases incluyen su traducción clara al español?',
          respuesta:
            'Sí. Cada una de las 40 opciones presenta primero el texto en inglés y debajo su traducción natural al español.'
        },
        {
          pregunta: '¿Conviene copiar solo la parte en inglés o el mensaje bilingüe?',
          respuesta:
            'Para historias de Instagram o estados breves suele lucir mejor solo la línea en inglés; para tarjetas o WhatsApp familiar suma muchísimo incluir ambas partes.'
        },
        {
          pregunta: '¿Se actualiza la tarjeta descargable al poner un nombre arriba?',
          respuesta:
            'Sí, tanto el botón de Copiar como WhatsApp, Instagram y la tarjeta PNG cuadrada o Story incorporan automáticamente el nombre y la firma que indiques.'
        }
      ];
      break;

    case 'invitacion':
      subtituloClaves = 'Qué no puede faltar en una invitación clara y cálida';
      claves = [
        'Dejá claros día, horario de llegada, dirección exacta y si conviene confirmar asistencia antes de cierta fecha.',
        'Aclarará en una línea si hace falta llevar algo o si la mesa ya está resuelta para evitar preguntas repetidas el mismo día.',
        'Si organizás una sorpresa, especificá en negrita o al comienzo del mensaje que quien cumple todavía no lo sabe.'
      ];
      citaClave = 'Una buena invitación entusiasma en la primera línea y resuelve horario, lugar y confirmación en las dos siguientes.';
      faqs = [
        {
          pregunta: '¿Qué datos conviene agregar antes de enviar la invitación por WhatsApp?',
          respuesta:
            'Sumá día, hora de inicio (y si es sorpresa, 30 minutos antes), dirección con referencia sencilla y fecha límite para confirmar asistencia.'
        },
        {
          pregunta: '¿Sirven para armar tarjetas digitales cuadradas?',
          respuesta:
            'Sí. Podés abrir cualquier texto, poner el nombre del agasajado y tu firma, y descargar la tarjeta PNG lista para enviar al grupo.'
        },
        {
          pregunta: '¿Cómo adapto el tono si invito a familiares grandes y amigos juntos?',
          respuesta:
            'Elegí textos intermedios cordiales, evitá códigos internos difíciles de entender y mantené la información práctica visible al final.'
        }
      ];
      break;

    case 'atrasado':
      subtituloClaves = 'Cómo saludar atrasado y dejar mejor impresión todavía';
      claves = [
        'Reconocé el atraso en media línea con sinceridad o humor sano: las excusas largas e inverosímiles se sienten incómodas.',
        'Aprovechá que ya bajó el aluvión de notificaciones del día exacto para escribir algo con más calma y conversar de verdad.',
        'Cerrá con un plan concreto para compensar en la semana (un café, una visita corta o un brindis pendiente).'
      ];
      citaClave = 'Un mensaje sincero 24 horas después se lee con mucha más calma que un saludo apurado entre cien notificaciones.';
      faqs = [
        {
          pregunta: '¿Conviene saludar aunque ya hayan pasado dos o tres días?',
          respuesta:
            'Siempre. Callarse por vergüenza suele doler mucho más que escribir tarde reconociendo el despiste con cariño.'
        },
        {
          pregunta: '¿Es mejor usar humor o disculpa seria si llegué tarde?',
          respuesta:
            'Con amigos o hermanos cercanos funciona bárbaro un guiño simpático; con familiares mayores o jefes conviene una disculpa breve y cordial.'
        },
        {
          pregunta: '¿Qué posdata ayuda a cerrar bien un saludo atrasado?',
          respuesta:
            'Invitar un café, llevar algo dulce o proponer ponerse al día diez minutos por teléfono convierte el retraso en un lindo reencuentro.'
        }
      ];
      break;

    case 'humor':
      subtituloClaves = 'Reglas simples para hacer reír sin pasarse de la raya';
      claves = [
        'Reíte de situaciones compartidas (las velas, los años de amistad, las anécdotas de viaje) y nunca de inseguridades físicas o económicas.',
        'Combiná el chiste inicial con al menos una oración sincera de afecto al cierre para que el mensaje no quede frío.',
        'Si mandás por grupo familiar o laboral, chequeá que la broma sea apta para todos los que leen.'
      ];
      citaClave = 'El mejor humor de cumpleaños hace sonreír en la primera frase y deja un abrazo genuino en la última.';
      faqs = [
        {
          pregunta: `¿Cómo sé si una frase de "${nombre}" va bien con el destinatario?`,
          respuesta:
            'Si ya bromean en persona con ese nivel de confianza, va perfecto; si dudás por la edad o el vínculo, elegí el humor amable sobre la torta y los años compartidos.'
        },
        {
          pregunta: '¿Se puede mezclar humor con un mensaje lindo de verdad?',
          respuesta:
            'Sí, es la mejor fórmula: abrís con un chiste corto y cerrás agradeciendo su amistad o deseándole un gran año.'
        },
        {
          pregunta: '¿Sirven para poner en tarjetas PNG o estados?',
          respuesta:
            'Sí, las opciones breves funcionan excelente en tarjetas visuales descargables con estilo Dorado o Rosa para compartir al instante.'
        }
      ];
      break;

    case 'fe':
      subtituloClaves = 'Equilibrio entre fe, gratitud y cariño cotidiano';
      claves = [
        'Nombrá a la persona primero y agradecé una virtud concreta suya —su entrega, calma o servicio— antes de sumar la bendición.',
        'Elegí palabras de fe cercanas a su manera de vivir la espiritualidad sin recargar de frases solemnes impersonales.',
        'Si dedicás a un pastor, líder o familiar mayor, mantené el respeto en el trato y pedí salud, descanso y paz para su hogar.'
      ];
      citaClave = 'Una bendición conmueve de verdad cuando nace del cariño cotidiano y agradece la huella real de esa persona.';
      faqs = [
        {
          pregunta: `¿Cómo hago que un mensaje de "${nombre}" no suene a cadena repetida?`,
          respuesta:
            'Poné el nombre arriba en el personalizador y sumá en una línea algo concreto que agradecés de su ejemplo durante este último año.'
        },
        {
          pregunta: '¿Sirven estas dedicatorias para tarjetas impresas o iglesia?',
          respuesta:
            'Sí. Tenés mensajes cortos para grupos de WhatsApp y cartas más largas ideales para imprimir o leer en familia.'
        },
        {
          pregunta: '¿Qué tono visual conviene elegir en la tarjeta PNG descargable?',
          respuesta:
            'Los estilos Marfil Sobrio y Celeste Calma acompañan muy bien bendiciones familiares, versículos y saludos a pastores o abuelos.'
        }
      ];
      break;

    case 'profesionales':
      subtituloClaves = `Etiqueta práctica para saludar a ${dest} con equilibrio`;
      claves = [
        'Respetá exactamente el mismo trato de todos los días (vos o usted): cambiar de registro de golpe suena artificial.',
        'Mantené el mensaje claro y cordial por correo o chat laboral sin invadir espacios privados ni meter promociones.',
        'Destacá una cualidad concreta de su trato diario, liderazgo o vocación antes que exageraciones.'
      ];
      citaClave = 'En el trabajo y el estudio, la cordialidad medida y sincera deja mejor recuerdo que cualquier exageración.';
      faqs = [
        {
          pregunta: `¿Trato de vos o de usted al saludar a ${dest}?`,
          respuesta:
            'Seguí siempre el trato que usan a diario en la oficina, escuela o consulta. En esta sección incluimos opciones formales y cordiales adaptables arriba.'
        },
        {
          pregunta: '¿Cuál es el mejor canal y horario en el ámbito laboral?',
          respuesta:
            'Un mensaje breve a media mañana por correo, Slack/Teams o tarjeta firmada entre compañeros funciona mucho mejor que mandar audios fuera de horario.'
        },
        {
          pregunta: '¿Se pueden adaptar para firmar en nombre de todo un equipo?',
          respuesta:
            'Sí. Escribí por ejemplo "Todo el equipo" o "Tus alumnos" en el campo Tu firma arriba para que cada tarjeta salga lista para copiar.'
        }
      ];
      break;

    case 'distancia':
      subtituloClaves = 'Cómo acortar kilómetros el día del cumpleaños';
      claves = [
        'Tené presente su huso horario local: madrugar con el saludo demuestra que estuviste pendiente de su día desde temprano.',
        'Combiná una dedicatoria pensada con una foto vieja divertida o el plan concreto de la próxima vez que se abracen.',
        'Si podés, acompañá el mensaje escrito con un audio tranquilo o una videollamada pactada en un momento sin invitados.'
      ];
      citaClave = 'Cuando hay kilómetros en el medio, recordar la fecha temprano y poner fecha aproximada al próximo abrazo lo cambia todo.';
      faqs = [
        {
          pregunta: `¿Cuál es el mejor momento para enviar "${nombre}" si estamos en otros países?`,
          respuesta:
            'Calculá el desayuno de su hora local para que sea de los primeros mensajes del día, y reservá un audio o llamada corta para la tarde o noche tranquila.'
        },
        {
          pregunta: '¿Conviene texto breve o carta larga a la distancia?',
          respuesta:
            'Podés mandar una frase corta a la mañana para arrancar bien su día y reservar una carta extensa o tarjeta PNG como gesto especial al caer la tarde.'
        },
        {
          pregunta: '¿Qué detalle simple funciona desde lejos sin gastar fortunas?',
          respuesta:
            'Coordinar con amigos cercanos para mandar fotos con carteles caseros a la misma hora o encargar un desayuno en su barrio.'
        }
      ];
      break;

    case 'embarazo':
      subtituloClaves = 'Qué sumar y qué evitar al saludar a una futura mamá';
      claves = [
        'Celebrala primero a ella como persona —su fuerza, alegría y descanso— y no hables únicamente del bebé que viene en camino.',
        'Evitá consejos no pedidos sobre partos, noches sin dormir o crianzas: hoy la fecha es para mimarla y acompañarla.',
        'Ofrecé ayuda práctica real (llevar una comida rica, hacer un mandado o regalar algo cómodo para ella).'
      ];
      citaClave = 'El mejor regalo para una embarazada en su cumpleaños es recordarle que ella también merece mimos, descanso y celebración propia.';
      faqs = [
        {
          pregunta: `¿Qué tono conviene usar en "${nombre}"?`,
          respuesta:
            'Un tono cálido, luminoso y alentador que celebre tanto su nuevo año personal como esta etapa especial que está transitando.'
        },
        {
          pregunta: '¿Qué conviene evitar en dedicatorias a futuras mamás?',
          respuesta:
            'Chistes sobre no dormir nunca más o opiniones médicas sin pedir. Acompañar con afecto y ofrecer ayuda concreta suma muchísimo más.'
        },
        {
          pregunta: '¿Puedo personalizar la tarjeta con su apodo antes de compartir?',
          respuesta:
            'Sí, completá su nombre y tu firma en el personalizador superior para copiar o descargar la tarjeta PNG lista.'
        }
      ];
      break;

    case 'infantil':
      subtituloClaves = `Ideas para escribir ${nombre.toLowerCase()} con ternura real`;
      claves = [
        'Escribí pensando tanto en alegrar a los papás hoy como en el recuerdo que ese chico va a releer dentro de diez años.',
        'Mencioná algún gusto actual suyo —su canción favorita, los juegos en la plaza o su risa contagiosa— para anclar la etapa.',
        'Mantené frases claras y alegres si las van a leer en voz alta o pegar en un regalo.'
      ];
      citaClave = 'Las mejores dedicatorias de la infancia guardan en pocas líneas cómo reía y qué amaba descubrir ese chico hoy.';
      faqs = [
        {
          pregunta: '¿Para quién conviene escribir en el primer añito o edades tempranas?',
          respuesta:
            'Podés hablarle directo al niño con ternura pensando en el álbum familiar, o sumar una línea reconociendo el amor de mamá y papá en este año.'
        },
        {
          pregunta: '¿Qué formato funciona mejor junto a un regalo infantil?',
          respuesta:
            'Una tarjeta corta o intermedia impresa (por ejemplo descargando nuestra tarjeta PNG) adentro de un libro ilustrado queda como recuerdo para toda la vida.'
        },
        {
          pregunta: '¿Cómo adapto la dedicatoria si la firma toda la familia?',
          respuesta:
            'Escribí en Tu firma por ejemplo "La tía Laura y los primos" para que aparezca al pie del mensaje y de la tarjeta.'
        }
      ];
      break;

    case 'jovenes':
      subtituloClaves = `Cómo celebrar ${nombre.toLowerCase()} sin sonar acartonado`;
      claves = [
        'Evitá el tono de sermón o los consejos largos sobre el futuro: reconocé sus logros de hoy y su propia voz.',
        'Sumá un guiño sobre su música, estudios, amigos o proyectos nuevos para mostrar que prestás atención a su mundo.',
        'Si es un hito como los 15 o los 18 años, combiná orgullo familiar o complicidad de amigos con deseos concretos de libertad y alegría.'
      ];
      citaClave = 'A los 15, 18 o 21 años emociona sentirse mirado como quien ya está construyendo su propio camino, no como un nene ni con un sermón.';
      faqs = [
        {
          pregunta: `¿Qué extensiones funcionan mejor para "${nombre}"?`,
          respuesta:
            'Si es para un amigo o compañero, un mensaje breve o con humor sano funciona excelente en WhatsApp e historias; si sos mamá, papá o madrina, una carta intermedia emociona muchísimo.'
        },
        {
          pregunta: '¿Qué conviene evitar al saludar adolescentes y jóvenes?',
          respuesta:
            'Bajar línea con frases como "aprovechá ahora que después todo cuesta" o chistes que los incomoden frente a su grupo.'
        },
        {
          pregunta: '¿Puedo crear una tarjeta linda para acompañar un regalo o sobre?',
          respuesta:
            'Sí, en cada dedicatoria podés elegir entre 6 colores (Rosa, Dorado, Celeste, Marfil, Oliva y Lavanda) y descargar la tarjeta cuadrada o Story 1080×1920 en un clic.'
        }
      ];
      break;

    case 'adultos':
      subtituloClaves = `Qué valorar al saludar en ${nombre.toLowerCase()}`;
      claves = [
        'Celebrá lo vivido, los proyectos elegidos y la calma ganada sin caer en chistes gastados sobre ponerse viejo.',
        'En décadas como los 30 o los 40 suelen sobrar obligaciones y faltar tiempo: deseale descanso, salud y momentos reales sin apuros.',
        'Sumá una referencia a un viaje, asado, charla o logro personal de este último año.'
      ];
      citaClave = 'Pasados los 30 o 40 años, un mensaje que celebra quién sos hoy sin bromas repetidas sobre la edad se agradece el doble.';
      faqs = [
        {
          pregunta: `¿Humor sobre la edad o mensaje emotivo en "${nombre}"?`,
          respuesta:
            'Depende de su carácter: si siempre bromean con las décadas, un guiño liviano funciona bien; si atraviesa un año intenso de trabajo o cambios, un abrazo sincero llega mucho más hondo.'
        },
        {
          pregunta: '¿Qué horario suele funcionar mejor para gente que trabaja mucho?',
          respuesta:
            'Temprano antes de que arranque la jornada o a la noche tranquila, cuando ya cerró pendientes.'
        },
        {
          pregunta: '¿Cómo agrego una dedicatoria personalizada para todo un grupo?',
          respuesta:
            'Completá el nombre del cumpleañero y poné "Tus amigos del club" o el nombre de la familia en el campo Tu firma arriba.'
        }
      ];
      break;

    case 'mayores':
      subtituloClaves = `Cuidado y afecto al escribir ${nombre.toLowerCase()}`;
      claves = [
        'Agradecé la historia vivida, las sobremesas compartidas, los consejos pacientes y el ejemplo que une a la familia.',
        'Si vas a imprimir el texto o mandar tarjeta imagen para abuelos o mayores de 60, elegí diseños contrastados y letras claras como Marfil o Celeste.',
        'Combiná siempre el mensaje escrito con una llamada de cinco minutos o una visita presencial si viven cerca.'
      ];
      citaClave = 'En los 50, 60 años o con los abuelos, recordar una enseñanza concreta de su vida vale más que cualquier regalo costoso.';
      faqs = [
        {
          pregunta: `¿Qué formato prefieren los homenajeados en "${nombre}"?`,
          respuesta:
            'Las dedicatorias cálidas con tono agradecido y las cartas pensadas para leer despacio o imprimir suelen emocionar muchísimo más que los textos llenos de emojis.'
        },
        {
          pregunta: '¿Conviene acompañar el mensaje con una llamada o visita?',
          respuesta:
            'Sí, mandar el texto o la tarjeta temprano y llamar después al mediodía o llevar algo rico a la tarde hace que el gesto sea completo.'
        },
        {
          pregunta: '¿Se puede firmar en nombre de nietos, hijos o toda la familia?',
          respuesta:
            'Sí. Completá el campo Tu firma con "Tus nietos" o los nombres de quienes envían antes de copiar o descargar el PNG.'
        }
      ];
      break;

    case 'poema':
      subtituloClaves = 'Cómo compartir versos para que conmuevan de verdad';
      claves = [
        'Respetá siempre los saltos entre versos y estrofas al copiar o imprimir: la pausa visual le da música al texto.',
        'Leé el poema una vez en voz alta antes de enviarlo y personalizá el nombre arriba para que suene dedicado solo a esa persona.',
        'Queda hermoso en una hoja impresa junto a flores o un libro, o descargado como tarjeta PNG en tono Marfil o Rosa.'
      ];
      citaClave = 'Un poema breve leído con calma o guardado en una tarjeta escrita conserva la emoción intacta mucho después de que pase el día.';
      faqs = [
        {
          pregunta: '¿Los saltos de línea de las estrofas se conservan al copiar?',
          respuesta:
            'Sí. Nuestro botón Copiar conserva intactos los saltos de verso y las separaciones entre estrofas.'
        },
        {
          pregunta: '¿Conviene mandar poemas por WhatsApp o impresos?',
          respuesta:
            'Ambos funcionan excelente: para WhatsApp lucen genial los de 2 o 3 estrofas cortas; los más largos son ideales para imprimir o acompañar un regalo.'
        },
        {
          pregunta: '¿Puedo agregar dedicatoria arriba y mi firma abajo en el verso?',
          respuesta:
            'Sí, usá el personalizador superior y se agregan automáticamente sin romper la estructura de las estrofas.'
        }
      ];
      break;

    case 'carta':
      subtituloClaves = 'Claves para escribir o adaptar una carta larga con ritmo';
      claves = [
        'Respetá la estructura de cuatro tiempos: saludo cercano, recuerdo concreto, agradecimiento genuino y deseo sereno para el nuevo año.',
        'No tengas miedo de mencionar algo chiquito y cotidiano: una charla en auto, una comida o cómo te apoyó en un día difícil.',
        'Enviá la carta en un horario tranquilo (a la mañana temprano o a la noche) para que la pueda leer sin apuros.'
      ];
      citaClave = 'Una carta emocionante nunca necesita palabras rebuscadas: alcanza con nombrar un recuerdo real que solo ustedes entienden.';
      faqs = [
        {
          pregunta: `¿Qué diferencia a "${nombre}" de una frase corta común?`,
          respuesta:
            'Cada texto de esta sección supera las 140 palabras y está estructurado en varios párrafos epistolares con apertura, desarrollo y cierre cálido.'
        },
        {
          pregunta: '¿Puedo editar el saludo inicial y la firma antes de copiar?',
          respuesta:
            'Sí. Ingresá el nombre o apodo y cómo firmás vos en el personalizador superior para actualizar todas las cartas de una vez.'
        },
        {
          pregunta: '¿Conviene mandarla por WhatsApp o pasarla a papel?',
          respuesta:
            'Si vivís cerca y entregás un regalo, copiarla a mano en papel multiplica su valor; si están lejos, mandarla por WhatsApp en un momento calmo funciona bárbaro.'
        }
      ];
      break;

    case 'pareja':
      subtituloClaves = `Cómo expresar amor hacia ${dest} sin caer en frases gastadas`;
      claves = [
        'Cambiá promesas abstractas de telenovela por cosas reales que amás compartir juntos: la risa de entrecasa, los mates o los viajes chicos.',
        'Decile qué admirás hoy de su forma de ser y de acompañar tu vida este último año.',
        'Elegí una dedicatoria corta para el primer mensaje al despertar y guardá una carta o tarjeta impresa para el momento a solas.'
      ];
      citaClave = 'Lo que más emociona a una pareja en su cumpleaños es sentirse vista en lo cotidiano, no escuchar frases repetidas de molde.';
      faqs = [
        {
          pregunta: `¿Cómo evito que mi saludo de "${nombre}" suene parecido al del año pasado?`,
          respuesta:
            'Elegí un texto que destaque algo que vivieron estos últimos doce meses y sumale un recuerdo o plan próximo en el personalizador o al final del mensaje.'
        },
        {
          pregunta: '¿Qué estilo visual luce mejor en la tarjeta descargable?',
          respuesta:
            'Rosa Clásica y Dorado Festivo quedan ideales para dedicatorias románticas; Marfil Sobrio funciona muy bien para cartas íntimas largas.'
        },
        {
          pregunta: '¿Conviene mandarlo a medianoche o al despertar?',
          respuesta:
            'Si conviven, dejar una nota breve junto al desayuno suele sorprender mucho más; si no duermen juntos, un mensaje cálido al despertar inicia el día con una sonrisa.'
        }
      ];
      break;

    case 'amistad':
      subtituloClaves = 'Claves para celebrar una amistad real con calidez y gracia';
      claves = [
        'Nombrá una anécdota puntual —un viaje, una charla hasta tarde o cómo apareció cuando hacía falta— para que el texto tenga alma.',
        'Mezclá buena onda cotidiana con un agradecimiento honesto por estar en las buenas y en las malas.',
        'Cerrá proponiendo juntarse a brindar, comer algo rico o ponerse al día sin excusas.'
      ];
      citaClave = 'Un buen saludo entre amigos combina el chiste de siempre con esa gratitud sincera que no hace falta decir todos los días.';
      faqs = [
        {
          pregunta: `¿Qué largo conviene para felicitar en "${nombre}"?`,
          respuesta:
            'Para WhatsApp rápido o historia de Instagram elegí opciones de menos de 65 palabras; si celebran muchos años de amistad, las cartas e intermedios emocionan mucho más.'
        },
        {
          pregunta: '¿Cómo adapto estas frases al apodo con que nos llamamos?',
          respuesta:
            'Escribí su apodo real en "Nombre o apodo" arriba y se inserta limpio al comienzo de todas las tarjetas.'
        },
        {
          pregunta: '¿Puedo bajar la tarjeta como imagen para subir a estados?',
          respuesta:
            'Sí, cada tarjeta cuenta con descarga instantánea en PNG cuadrado 1080×1080 o vertical Story 1080×1920 en 6 paletas distintas y botón directo para Instagram.'
        }
      ];
      break;

    case 'banderines':
      subtituloClaves = 'Claves prácticas para diseñar, imprimir y colgar tus banderines A4';
      claves = [
        'Elegí primero la plantilla o subí tu foto/logo local y verificá en la vista previa cuántas hojas A4 necesita tu frase (2 banderines de 14 × 19 cm por hoja).',
        'Imprimí sobre cartulina mate u opalina de 180 a 240 gramos con la opción "Gráficos de fondo" activa para que los bordes y colores queden firmes y nítidos.',
        'Perforá los círculos superiores ya marcados y pasá cordón de algodón, hilo rústico o cinta satinada dejando 35 cm extra en cada punta para atar sin tironear.'
      ];
      citaClave = 'Una guirnalda armada con el nombre real y la paleta elegida transforma cualquier pared casera en el mejor fondo de fotos del festejo.';
      faqs = [
        {
          pregunta: '¿Qué tamaño tiene cada banderín al imprimir en hoja A4?',
          respuesta:
            'Cada hoja A4 organiza 2 banderines nítidos de aproximadamente 14 × 19 cm con línea punteada de corte y marcas de perforación superiores, listos para recortar con tijera o guillotina.'
        },
        {
          pregunta: '¿Puedo descargar la guirnalda completa o las hojas A4 en PNG sin instalar programas?',
          respuesta:
            'Sí. Desde el estudio online podés bajar la guirnalda completa en PNG HD para compartir o enviar por WhatsApp, y también descargar una hoja A4 específica o todas las hojas listas para llevar a una imprenta.'
        },
        {
          pregunta: '¿Qué pasa si subo una foto o logo propio a los banderines?',
          respuesta:
            'La imagen se procesa 100% de forma local en tu navegador (no se sube a ningún servidor) y podés ubicarla en los banderines decorativos de las puntas o como medallón en cada letra.'
        }
      ];
      break;

    case 'motivaciones':
      subtituloClaves = 'Cómo convertir frases motivacionales diarias en impulso real';
      claves = [
        'Elegí una sola reflexión corta para hoy y convertila en una micro-acción concreta de cinco minutos.',
        'Sumá la posdata o descargala en formato Story Instagram 1080×1920 en tonos Oliva Cálida o Lavanda Serena para tu fondo o estado.',
        'Activá el aviso diario en la parte superior para recibir cada mañana una frase curada o agendar un recordatorio recurrente.'
      ];
      citaClave = 'La constancia serena de cada mañana construye más cambios reales que los arranques intensos que duran solo dos días.';
      faqs = [
        {
          pregunta: '¿Conviene leer una frase por día o muchas de golpe?',
          respuesta:
            'Leer una sola reflexión tranquila cada mañana y aplicarla a una tarea concreta del día genera muchísima más claridad que recorrer cuarenta frases sin pausa.'
        },
        {
          pregunta: '¿Cómo funciona el aviso de motivación diaria gratuito?',
          respuesta:
            'Dejás tu email, elegís el horario preferido y podés activar las notificaciones del navegador o descargar el recordatorio diario de calendario (.ics) en un clic.'
        },
        {
          pregunta: '¿Puedo compartir estas motivaciones en Instagram Stories?',
          respuesta:
            'Sí. Elegí el formato Story IG (1080×1920) en el personalizador y tocá el botón Instagram para descargar la imagen limpia y copiar el texto.'
        }
      ];
      break;

    case 'meses':
      subtituloClaves = `Cómo aprovechar ${nombre.toLowerCase()} según su signo y temporada`;
      claves = [
        'Conectá el saludo con el clima real de su mes de nacimiento y con la personalidad de los dos signos que comparten esta fecha.',
        'Si cumple cerca del cambio de signo (entre el 19 y el 23), confirmá su signo exacto en nuestro horóscopo antes de elegir tono o regalo.',
        'Sumá una foto opcional y descargá la tarjeta PNG cuadrada o Story IG en la paleta que mejor refleje su estilo.'
      ];
      citaClave = 'Un saludo pensado según la época del año y el temperamento de su signo se siente mucho más personal desde la primera línea.';
      faqs = [
        {
          pregunta: `¿Qué signos del zodiaco celebran su fecha dentro de "${nombre}"?`,
          respuesta:
            'Cada mes abarca dos signos vecinos del zodiaco. Más arriba tenés el enlace directo a las dos fichas de horóscopo correspondientes para ajustar tu saludo y regalo.'
        },
        {
          pregunta: '¿Cómo adapto estas frases si quien cumple vive en otro hemisferio?',
          respuesta:
            'Cuidamos redacciones que funcionan bien tanto en el sur como en el norte, y arriba podés sumar su nombre, posdata y firma en un segundo.'
        },
        {
          pregunta: '¿Puedo agregar una fotografía propia a la tarjeta antes de descargarla?',
          respuesta:
            'Sí. En el personalizador superior cargás una foto desde tu dispositivo sin subirla a ningún servidor para bajar tu tarjeta PNG o imprimir la postal.'
        }
      ];
      break;

    case 'fecha_especial':
      subtituloClaves = `Claves para que tu saludo en ${nombre.toLowerCase()} destaque entre mensajes repetidos`;
      claves = [
        'Nombrá un rasgo o momento cotidiano real compartido este año antes de pegar deseos generales.',
        'En fechas masivas donde llegan decenas de cadenas idénticas, un mensaje limpio de tres o cuatro líneas con apodo vale diez veces más.',
        'Acompañá el texto con tarjeta visual personalizada, foto opcional o modo postal imprimible para entregar en mano.'
      ];
      citaClave = 'En fechas muy celebradas en el calendario, cuatro líneas con un recuerdo verdadero destacan muchísimo más que una imagen reenviada.';
      faqs = [
        {
          pregunta: `¿Cuál es la mejor hora para enviar "${nombre}"?`,
          respuesta:
            'A la mañana temprano junto al desayuno o al mediodía en calma, evitando reenviar las mismas cadenas saturadas de último minuto.'
        },
        {
          pregunta: '¿Sirven para imprimir y entregar junto a un presente o flores?',
          respuesta:
            'Sí. Podés adaptar nombre y firma arriba y tocar Imprimir postal o descargar el PNG cuadrado listo para compartir.'
        },
        {
          pregunta: '¿Puedo firmar en nombre de toda la familia o del curso?',
          respuesta:
            'Claro: escribí por ejemplo "Tus hijos y nietos" o "Las familias del grupo" en el campo Tu firma arriba.'
        }
      ];
      break;

    case 'jubilacion':
      subtituloClaves = 'Cómo equilibrar respeto profesional y alegría en una despedida laboral';
      claves = [
        'Agradecé una contribución concreta —su paciencia para enseñar, su humor de oficina o su ejemplo constante— sin caer en clichés tristes.',
        'Celebrá con optimismo el tiempo libre que empieza ahora: viajes, hobbies, descanso y mañanas sin despertador.',
        'Firmá con claridad si el saludo representa a un compañero o a todo el equipo de trabajo.'
      ];
      citaClave = 'Despedir una etapa laboral con gratitud sincera por lo enseñado y alegría por el descanso merecido deja un recuerdo imborrable.';
      faqs = [
        {
          pregunta: '¿Conviene trato de vos o de usted al saludar por jubilación?',
          respuesta:
            'Respetá exactamente el trato que usaron todos estos años en el trabajo. Arriba podés sumar nombre, posdata y firma del equipo completo.'
        },
        {
          pregunta: '¿Cómo hago para que la tarjeta represente a varios compañeros?',
          respuesta:
            'Ingresá en "Tu firma" algo como "Todo el equipo de Administración" y usá el botón Imprimir postal para entregarla firmada en papel.'
        },
        {
          pregunta: '¿Puedo bajarla como imagen para mandar al grupo de WhatsApp?',
          respuesta:
            'Sí, en cada dedicatoria descargás al instante la tarjeta PNG 1080×1080 en estilo Marfil, Celeste o Dorado.'
        }
      ];
      break;

    case 'nacimiento':
      subtituloClaves = 'Cómo celebrar la llegada o primeros meses de un bebé con ternura';
      claves = [
        'Abrazá tanto al bebé como a mamá y papá, evitando consejos médicos no pedidos u opiniones sobre descanso.',
        'Anotá un detalle concreto de este momento o de su primer año para que la tarjeta sirva como recuerdo familiar.',
        'Podés cargar una foto local en el personalizador superior para armar una postal tierna en formato Story o impresa.'
      ];
      citaClave = 'Las mejores palabras para recibir a un bebé cuidan el descanso de la casa y celebran con suavidad cada primer descubrimiento.';
      faqs = [
        {
          pregunta: '¿Cuándo conviene enviar los mensajes por nacimiento de bebé?',
          respuesta:
            'Un saludo escrito breve y cálido durante los primeros días permite que mamá y papá lo lean tranquilos cuando el bebé duerme, sin presionar visitas.'
        },
        {
          pregunta: '¿Cómo adapto la tarjeta de cumplemes para subir a Instagram Stories?',
          respuesta:
            'Elegí formato Story IG 9:16 arriba, cargá si querés una foto del bebé desde tu teléfono y tocá Instagram para descargarla limpia.'
        },
        {
          pregunta: '¿Se pueden imprimir estas dedicatorias para guardar en el álbum?',
          respuesta:
            'Sí. Con el botón Imprimir postal en cada mensaje obtenés una lámina limpia para sumar al álbum de recuerdos.'
        }
      ];
      break;

    default:
      claves = [
        `Arrancá con el apodo real de ${dest} en lugar de un saludo genérico: cambia al instante cómo se lee la primera línea.`,
        'Sumá una escena concreta compartida este año (una sobremesa, una risa, una charla en auto) para multiplicar el impacto emocional.',
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
            'Completá "Nombre o apodo", "Posdata" y "Tu firma" en el personalizador superior: todos los botones de Copiar, WhatsApp, Instagram y la tarjeta PNG se actualizan automáticamente.'
        },
        {
          pregunta: '¿Es mejor mandar texto por WhatsApp o descargar la tarjeta imagen?',
          respuesta:
            'El texto directo funciona bárbaro para iniciar conversación en chat; la tarjeta PNG (con 6 paletas y formato cuadrado o Story IG) luce ideal en historias, estados o impresa con un regalo.'
        }
      ];
      break;
  }

  return {
    perfil,
    tabla,
    subtituloClaves,
    claves,
    citaClave,
    faqs,
    guia: guiaRelacionadaParaHub(hub)
  };
}

interface VarianteEjemplo {
  generico: string;
  concreto: string;
  posdata: string;
}

export function guiaAdaptacionMensaje(m: any, hub: any): GuiaAdaptacionMensaje {
  const clasificacion = clasificarMensaje(m, hub);
  const guia = guiaRelacionadaParaHub(hub);
  const slugMsg = String(m.slug || '');
  const perfil = detectarPerfilEditorial(hub, m);
  const { frase: dest, vocativo } = destNatural(hub, m);
  const vocComma = vocativo ? `, ${vocativo}` : '';
  const esDuelo = perfil === 'duelo';

  const bancoPorPerfil: Record<PerfilEditorial, VarianteEjemplo[]> = {
    banderines: [
      {
        generico: 'Imprimir banderines genéricos sin revisar el largo de la pared ni el gramaje del papel.',
        concreto: 'Personalizar la frase con el nombre y la edad en el estudio online, imprimir 2 banderines por hoja A4 en opalina de 200 g y colgar en dos filas prolijas.',
        posdata: 'Tip de armado: «Dejá 35 cm extra de cordón a cada lado para atar fácil y combiná el saludo impreso con la tarjeta de mesa.»'
      },
      {
        generico: 'Usar papel común de 75 gramos que se dobla apenas pasás el hilo por las esquinas.',
        concreto: 'Elegir cartulina mate u opalina de 180-240 g, activar las guías punteadas de corte y reforzar el reverso con cinta si la guirnalda va al aire libre.',
        posdata: 'Tip de armado: «Probá sumar una foto del homenajeado en las puntas desde el botón Cargar foto / logo (100% local).»'
      }
    ],
    motivaciones: [
      {
        generico: 'Creé en vos mismo y nunca te rindas porque todo va a salir bien.',
        concreto: 'Tomá un papel ahora: escribí la traba más grande de tu día en una oración y definí la tarea de 15 minutos con la que la empezás antes de cenar.',
        posdata: 'Práctica sugerida: «Anotá el primer micro-paso en tu agenda, cerrá notificaciones 25 minutos y al terminar tachalo con tranquilidad.»'
      },
      {
        generico: 'Hoy es un gran día para empezar con toda la actitud positiva del mundo.',
        concreto: 'Cuidar tus bloques de atención también es avanzar: elegí una prioridad real para la mañana, protegé una pausa corta y soltá lo secundario por hoy.',
        posdata: 'Práctica sugerida: «Guardala como Story 1080×1920 o enviala por WhatsApp a ese amigo que hoy necesita un empujón realista.»'
      }
    ],
    meses: [
      {
        generico: 'Feliz cumpleaños este mes, que la pases muy lindo con tu gente.',
        concreto: 'Qué lindo celebrar tu nueva vuelta al sol en este mes tan tuyo; ojalá el clima de temporada acompañe con buena mesa, descanso real y charlas largas.',
        posdata: 'Posdata sugerida: «Consultá abajo tu signo del zodiaco para sumar un guiño exacto de regalo o brindis.»'
      },
      {
        generico: 'Muchas felicidades en tu mes de nacimiento, éxitos siempre.',
        concreto: 'Quienes nacen en esta época traen energía especial a la mesa; brindamos hoy por tus proyectos nuevos y por muchas mañanas tranquilas.',
        posdata: 'Posdata sugerida: «Sumá una foto tuya en el estudio visual y compartila directo en Stories.»'
      }
    ],
    fecha_especial: [
      {
        generico: 'Feliz día, bendiciones y muchas felicidades para vos y toda tu familia.',
        concreto: 'Hoy paramos un minuto para agradecer tu presencia cercana de todo el año, esa paciencia cotidiana y los momentos lindos compartidos en nuestra mesa.',
        posdata: 'Posdata sugerida: «Guardemos un rato esta semana para vernos sin apuro y brindar juntos.»'
      },
      {
        generico: 'Que pases un hermoso día rodeado de amor y alegría hoy.',
        concreto: 'En medio de las corridas del calendario quería dejarte estas líneas con calma para decirte cuánto valoramos tu compañía leal y tu buen humor.',
        posdata: 'Posdata sugerida: «Imprimí esta postal para entregarla en papel junto a un detalle rico.»'
      }
    ],
    jubilacion: [
      {
        generico: 'Felicitaciones por su jubilación, éxitos en esta nueva etapa.',
        concreto: 'Gracias por tantos años de compromiso honesto, compañerismo diario y paciencia para enseñar oficio; disfrutá ahora cada mañana sin despertador.',
        posdata: 'Posdata sugerida: «Las puertas del equipo y el café de media tarde siempre quedan abiertos para vos.»'
      },
      {
        generico: 'Feliz retiro, descanse mucho después de tanto trabajo.',
        concreto: 'Cerrás un ciclo laboral enorme dejando respeto y afecto genuino en todos los que trabajamos a tu lado; que empiecen los mejores viajes y hobbies.',
        posdata: 'Posdata sugerida: «— Todo el equipo, agradecidos por tu huella diaria.»'
      }
    ],
    nacimiento: [
      {
        generico: 'Felicidades por el bebé, muchas bendiciones para los papás.',
        concreto: 'Qué emoción enorme recibir esta vida nueva en la familia; deseamos que tengan días serenos, abrazos tiernos y ayuda cerquita para descansar.',
        posdata: 'Posdata sugerida: «Cuando necesiten una vianda rica o un mandado, avisame y paso sin molestar.»'
      },
      {
        generico: 'Hermoso el bebé en su cumplemes, sigue creciendo rápido.',
        concreto: 'Cada sonrisa nueva y cada descubrimiento chiquito iluminan este primer año inolvidable; guardemos esta postal en el álbum para cuando crezca.',
        posdata: 'Posdata sugerida: «Anotá atrás de la tarjeta qué canción o juguete ama este mes.»'
      }
    ],
    duelo: [
      {
        generico: 'Te mando un saludo en este día especial, muchas bendiciones para tu familia.',
        concreto: `Hoy volvimos a preparar los mates como te gustaba${vocComma}; tu ejemplo sigue cuidando nuestra casa.`,
        posdata: 'Posdata sugerida: «Hoy pienso mucho en ustedes; si querés que charlemos un rato o tomemos un café en calma, estoy acá.»'
      },
      {
        generico: 'Siempre estarás en nuestros corazones, un beso al cielo en tu día.',
        concreto: `Todavía nos reímos recordando tu paciencia en la cocina y cada consejo sereno que nos dejaste${vocComma}.`,
        posdata: 'Posdata sugerida: «Prendimos una vela linda en casa y repasamos nuestras anécdotas favoritas con vos.»'
      }
    ],
    aniv_meses: [
      {
        generico: 'Felices meses, sos la mejor persona del mundo, te amo muchísimo.',
        concreto: 'Gracias por las caminatas sin apuro de este último mes y por hacer tan livianos los días pesados.',
        posdata: 'Posdata sugerida: «Esta noche llevo algo dulce para celebrar tranquilos este nuevo mes juntos.»'
      },
      {
        generico: 'Feliz mesiversario mi amor, sos todo para mí para siempre.',
        concreto: 'Qué lindo ver cómo en estos meses ya armamos nuestras propias costumbres, desde el café de la tarde hasta las risas en el viaje.',
        posdata: 'Posdata sugerida: «Te guardé una foto de nuestra última salida para que la sumemos a la colección.»'
      }
    ],
    aniv_anos: [
      {
        generico: 'Feliz aniversario, sos la mejor pareja del universo, por mil años más.',
        concreto: 'Gracias por bancar las corridas de este año con tanta calma y por las cenas improvisadas de los miércoles.',
        posdata: 'Posdata sugerida: «Brindemos esta noche por todo lo que construimos juntos y por el próximo viaje pendiente.»'
      },
      {
        generico: 'Feliz aniversario mi vida, te amo con todo mi corazón siempre.',
        concreto: 'Cada año que pasa valoro más el equipo que somos: saber que al volver a casa estás vos transforma cualquier día gris.',
        posdata: 'Posdata sugerida: «Anotá el viernes libre: tengo ganas de repetir aquel lugar donde fuimos al comienzo.»'
      }
    ],
    bilingue: [
      {
        generico: 'Happy birthday to you, many blessings in your day.',
        concreto: 'Me encanta esta frase en inglés porque resume justo cómo iluminás el año; acá seguimos guardando las risas de siempre.',
        posdata: 'Posdata sugerida: «Elegí este mensaje bilingüe porque combina perfecto con tu estilo; ¡pronto brindamos!»'
      },
      {
        generico: 'Wishing you the best birthday ever, enjoy a lot.',
        concreto: 'Ojalá este nuevo año venga lleno de buenos viajes y música; cuando te vea en persona hacemos el brindis completo en español.',
        posdata: 'Posdata sugerida: «P.D.: guardate el sábado libre que nos debemos la charla larga de cierre de año.»'
      }
    ],
    invitacion: [
      {
        generico: 'Te invito a mi fiesta este fin de semana, confirmame si venís.',
        concreto: 'Te esperamos el sábado a las 20:30 hs en casa (Av. Rivadavia 420) para compartir pizzas y buena charla; avisame antes del jueves si venís.',
        posdata: 'Posdata sugerida: «No hace falta traer nada más que ganas de pasarla bien; hay opciones sin TACC/veggie.»'
      },
      {
        generico: 'Venite al cumple este sábado, avisame cualquier cosa.',
        concreto: 'Armamos reunión sorpresa a las 19:30 hs (llegá puntual antes de las 20:00 que llega el homenajeado). ¡Guardá el secreto!',
        posdata: 'Posdata sugerida: «Confirmame por este chat hasta el viernes al mediodía así calculamos bien la mesa.»'
      }
    ],
    atrasado: [
      {
        generico: 'Perdón que colgué, se me re pasó tu día pero feliz cumple igual.',
        concreto: 'Se me pasó el día por un despiste gigante, pero quería mandarte un abrazo tranquilo hoy que ya bajó el ruido y desearte un año enorme.',
        posdata: 'Posdata sugerida: «El café o algo dulce de esta semana corre por mi cuenta para compensar el atraso.»'
      },
      {
        generico: 'Feliz cumple atrasado, mil disculpas estuve a full.',
        concreto: 'Llegué tarde a la fecha del calendario, pero puntual para desear que este año te traiga calma, proyectos lindos y muchas risas juntos.',
        posdata: 'Posdata sugerida: «¿Qué tarde de la semana te queda cómoda para vernos 20 minutos y darte el abrazo en persona?»'
      }
    ],
    humor: [
      {
        generico: 'Feliz cumpleaños, otro año más viejo jaja pasala lindo.',
        concreto: 'No vamos a contar cuántas velitas entran hoy, pero sí cuántas risas nos salvaste este año. ¡Que nunca falten las anécdotas!',
        posdata: 'Posdata sugerida: «Prometo no cantar desafinado tan fuerte si guardás la mejor porción del centro.»'
      },
      {
        generico: 'Feliz cumple, ya estás grande eh, bendiciones.',
        concreto: 'Dicen que con los años viene la sabiduría… en tu caso seguimos esperando, pero igual no te cambio por nadie. ¡Muy feliz día!',
        posdata: 'Posdata sugerida: «P.D.: dejá el teléfono y festejá como se debe que mañana volvemos a la rutina.»'
      }
    ],
    fe: [
      {
        generico: 'Feliz cumple, que Dios te bendiga muchísimo siempre amén.',
        concreto: 'Doy gracias a Dios por tu vida y por esa calma con la que siempre servís y escuchás a los tuyos; que este nuevo año multiplique tu paz.',
        posdata: 'Posdata sugerida: «Hoy oramos en casa dando gracias por vos y pidiendo fuerza y alegría para tus proyectos.»'
      },
      {
        generico: 'Muchas bendiciones en tu cumpleaños, Dios te guarde.',
        concreto: 'Celebramos un año más viendo cómo tu fe y tu buen trato iluminan cada mesa familiar; que nunca te falte salud ni abrigo espiritual.',
        posdata: 'Posdata sugerida: «Que la promesa de paz acompañe cada paso que des en esta nueva etapa.»'
      }
    ],
    profesionales: [
      {
        generico: 'Muy feliz cumpleaños, éxitos totales en todo lo que emprenda.',
        concreto: 'Le deseo una jornada muy serena y un excelente año nuevo personal; siempre se valora muchísimo su claridad y buen trato en el trabajo diario.',
        posdata: 'Posdata sugerida: «Que pueda desconectar y disfrutar mucho hoy junto a su familia y afectos.»'
      },
      {
        generico: 'Feliz cumple compañero/a, bendiciones y felicidades en su día.',
        concreto: 'Gracias por hacer tan llevaderas las mañanas del equipo y por la buena disposición de siempre; que pase un gran día lejos de las planillas.',
        posdata: 'Posdata sugerida: «A la vuelta del descanso celebramos con un buen café en la pausa.»'
      }
    ],
    distancia: [
      {
        generico: 'Feliz cumpleaños aunque estemos lejos, extraño verte, abrazo grande.',
        concreto: 'Calculé tu horario para mandarte este abrazo apenas arranques el día; todavía guardo la foto de nuestro último viaje y ya cuento los días para repetirla.',
        posdata: 'Posdata sugerida: «A la tarde cuando baje el trajín te mando un audio largo o hacemos videollamada con café en mano.»'
      },
      {
        generico: 'Desde acá a la distancia te deseo feliz cumple, ojalá nos veamos pronto.',
        concreto: 'Los kilómetros cambian la mesa donde brindamos, pero no las ganas de festejar cada logro tuyo como si estuviera ahí al lado.',
        posdata: 'Posdata sugerida: «Ya dejé agendado nuestro próximo brindis pendiente apenas coincidamos en la misma ciudad.»'
      }
    ],
    embarazo: [
      {
        generico: 'Feliz cumple futura mamá, muchas bendiciones para la panza.',
        concreto: 'Hoy te celebramos primero a vos, con tu risa y tu fuerza enorme; que tengas un día lleno de mimos antes de que empiece la gran aventura.',
        posdata: 'Posdata sugerida: «Cuando quieras te llevo algo rico para la merienda y nos ponemos al día sin que tengas que moverte de casa.»'
      },
      {
        generico: 'Feliz cumpleaños, que venga con bien el bebé y disfrutes tu día.',
        concreto: 'Qué emocionante verte cumplir años con tanta luz en esta etapa; deseamos que hoy te consientan el doble y descanses todo lo que merecés.',
        posdata: 'Posdata sugerida: «Guardate esta tarjeta como recuerdo del último cumple antes de conocer esa carita nueva.»'
      }
    ],
    infantil: [
      {
        generico: 'Feliz cumpleaños peque, que recibas muchos juguetes hermosos.',
        concreto: 'Que sigas llenando la casa con esa risa contagiosa y esas ganas enormes de descubrir todo lo que ves cada mañana.',
        posdata: 'Posdata sugerida: «Para cuando seas más grande y releas esta tarjeta: este año tu canción y tu juego favorito eran los de hoy.»'
      },
      {
        generico: 'Muchas felicidades al más chiquito de la casa en su día.',
        concreto: 'Cada paso nuevo y cada ocurrencia tuya nos alegra la semana entera; ¡feliz vuelta al sol llena de juegos, abrazos y familia!',
        posdata: 'Posdata sugerida: «Un abrazo gigante también para mamá y papá por este año hermoso viéndote crecer.»'
      }
    ],
    jovenes: [
      {
        generico: 'Feliz cumple, disfrutá tu juventud que pasa volando, éxitos.',
        concreto: 'Qué orgullo ver cómo vas eligiendo tus propios proyectos con tanta personalidad y humor; disfrutá cada etapa a tu ritmo y rodeado de buena gente.',
        posdata: 'Posdata sugerida: «¡Que este nuevo año traiga lindas salidas, música de la buena y metas cumplidas!»'
      },
      {
        generico: 'Felices años, portate bien y estudiá mucho siempre.',
        concreto: 'Celebramos todo lo que creciste este último tiempo sin perder tu esencia; seguí animándote a probar ideas nuevas sabiendo que acá siempre tenés respaldo.',
        posdata: 'Posdata sugerida: «Guardá espacio en el finde que todavía nos queda festejar como corresponde.»'
      }
    ],
    adultos: [
      {
        generico: 'Feliz cumpleaños, que cumplas muchos más con mucha salud y dinero.',
        concreto: 'En medio de tantas corridas de la semana, ojalá hoy te regales una pausa linda, buena mesa y tiempo sin mirar el reloj con la gente que querés.',
        posdata: 'Posdata sugerida: «Que este año traiga proyectos que entusiasmen y fines de semana realmente libres para disfrutar.»'
      },
      {
        generico: 'Otro año más, no te preocupes por la edad jaja felicidades.',
        concreto: 'Qué lindo llegar a esta etapa sabiendo quién sos, qué disfrutás de verdad y con quién vale la pena compartir una buena charla.',
        posdata: 'Posdata sugerida: «Anotemos fecha pronto para cenar tranquilos y brindar sin apuro.»'
      }
    ],
    mayores: [
      {
        generico: 'Feliz cumpleaños, que tenga un muy lindo día lleno de bendiciones.',
        concreto: 'Gracias por tantas sobremesas que siguen reuniendo a toda la familia y por esa forma serena de enseñar siempre con el ejemplo.',
        posdata: 'Posdata sugerida: «Después del mediodía te llamo (o paso a verte) para darte el abrazo grande en persona.»'
      },
      {
        generico: 'Muchas felicidades en este año más de vida junto a los suyos.',
        concreto: 'Cada consejo paciente y cada recuerdo guardado con vos es un tesoro para toda la familia; que este año te abrace con mucha salud y paz.',
        posdata: 'Posdata sugerida: «Imprimimos esta tarjeta con letra grande para dejarla junto al mate o la foto familiar.»'
      }
    ],
    poema: [
      {
        generico: 'Te dedico este poema hermoso porque sos especial en tu cumpleaños.',
        concreto: `Elegí estos versos porque dicen en voz alta lo que a veces cuesta ordenar en una charla rápida${vocComma}: gracias por estar siempre.`,
        posdata: 'Posdata sugerida: «Si acompañás un regalo o flores, pasá estas estrofas a mano en una tarjeta simple.»'
      },
      {
        generico: 'Muchas felicidades en tu día con estas lindas rimas de amor.',
        concreto: 'Que cada estrofa quede guardada como un pequeño abrigo para los días tranquilos del año que hoy empieza para vos.',
        posdata: 'Posdata sugerida: «Podés descargar la tarjeta PNG en tono Marfil para conservar las estrofas intactas.»'
      }
    ],
    carta: [
      {
        generico: 'Te escribo esta carta larga porque te merecés todo lo mejor del mundo.',
        concreto: `Me tomé unos minutos sin apuro para escribirte porque una simple frase quedaba chica frente a todo lo que compartimos este año${vocComma}.`,
        posdata: 'Posdata sugerida: «Leela cuando tengas cinco minutos de calma con un café o al cerrar la noche.»'
      },
      {
        generico: 'Muchas felicidades en tu cumpleaños, acá tenés mis mejores deseos.',
        concreto: 'Todavía recuerdo aquella tarde en que nos reímos hasta tarde y me ayudaste a ver todo más claro; por muchos años más caminando cerca.',
        posdata: 'Posdata sugerida: «El próximo fin de semana celebramos en persona como se debe.»'
      }
    ],
    pareja: [
      {
        generico: 'Feliz cumpleaños amor de mi vida, sos todo para mí siempre.',
        concreto: `Gracias por hacer de los días comunes mi lugar favorito y por cada risa compartida incluso cuando la semana viene cuesta arriba${vocComma}.`,
        posdata: 'Posdata sugerida: «Hoy elegís vos la cena o el plan completo: me toca mimarte todo el día.»'
      },
      {
        generico: 'Feliz cumple mi cielo, te amo muchísimo más que a nada en el mundo.',
        concreto: 'No necesito promesas enormes sino seguir sumando mañanas tranquilas, viajes improvisados y abrazos largos al volver a casa.',
        posdata: 'Posdata sugerida: «A la noche tenemos nuestro brindis a solas para celebrar tu nuevo año.»'
      }
    ],
    amistad: [
      {
        generico: 'Feliz cumple amigo/a, sos lo más grande, que la pases genial.',
        concreto: `Por muchas más charlas sin mirar el reloj y esa amistad leal con la que siempre salvás hasta la peor semana${vocComma}.`,
        posdata: 'Posdata sugerida: «Tirame qué día de esta semana te queda libre y nos juntamos a celebrar sin excusas.»'
      },
      {
        generico: 'Muchas felicidades en tu día, bendiciones y éxitos hoy.',
        concreto: 'Gracias por estar en las lindas y por poner el hombro sin hacer ruido cuando hizo falta; no sabés lo valiosa que es tu amistad.',
        posdata: 'Posdata sugerida: «Guardá porción de torta para el próximo mate que nos debemos.»'
      }
    ],
    familia: [
      {
        generico: `Que pases un día hermoso y especial rodeado de amor, felicidades${vocComma}.`,
        concreto: `Gracias por estar siempre cerca con una palabra justa y por llenar nuestra mesa de calma y buenas charlas${vocComma}.`,
        posdata: 'Posdata sugerida: «Nos vemos pronto en casa para darte el abrazo grande y celebrar juntos.»'
      },
      {
        generico: `Muy feliz cumpleaños, que todos tus deseos se hagan realidad${vocComma}.`,
        concreto: `Ojalá este nuevo año devuelva multiplicada toda la generosidad y paciencia que repartís entre nosotros cada semana${vocComma}.`,
        posdata: 'Posdata sugerida: «Guardame un rato tranquilo hoy para charlar y brindar aunque sea diez minutos.»'
      }
    ]
  };

  const variante = elegirVariante(bancoPorPerfil[perfil], slugMsg);

  const mejorHorario =
    perfil === 'banderines'
      ? 'Imprimí y armá la guirnalda la tarde anterior al festejo para colgarla en 5 minutos antes de que lleguen los invitados.'
      : perfil === 'motivaciones'
      ? 'Temprano antes de abrir correos o redes (entre las 7:00 y las 9:00 hs) para marcar calma y foco.'
      : perfil === 'profesionales'
      ? 'A media mañana (entre las 9:00 y las 11:30 hs) por correo o chat laboral.'
      : perfil === 'distancia'
      ? 'Temprano según su horario local para el saludo inicial, y audio/llamada tranquila a la tarde.'
      : perfil === 'atrasado'
      ? 'A media mañana o tarde tranquila, reconociendo el atraso con buena onda sin excusas largas.'
      : clasificacion.claseTono === 'carta' || perfil === 'carta'
      ? 'Temprano antes del mediodía o a la noche, cuando pueda leer con calma y sin interrupciones.'
      : esDuelo
      ? 'Durante la mañana o tarde tranquila, respetando la intimidad del día.'
      : 'Al despertar con el desayuno o al cierre del día para que se destaque entre el resto.';

  const pasos =
    perfil === 'banderines'
      ? [
          'Ajustá arriba en el estudio online la frase exacta, el nombre o la edad del homenajeado.',
          'Elegí una de las 12 plantillas (o subí tu foto/logo local) y revisá cuántas hojas A4 ocupa.',
          'Tocá "Imprimir / Guardar PDF (solo hojas A4)" o descargá las hojas A4 en PNG HD para llevar a la gráfica.'
        ]
      : perfil === 'motivaciones'
      ? [
          'Leé esta reflexión con calma y elegí una sola acción simple para hoy.',
          'Personalizá arriba un apodo o dedicatoria si la enviás a alguien que necesita aliento.',
          'Descargala como Story IG o compartila por WhatsApp e Instagram en un clic.'
        ]
      : esDuelo
      ? [
          `Escribí arriba cómo llamaban a ${dest} en casa y tu firma familiar.`,
          'Agregá si querés un recuerdo breve y concreto compartido en familia.',
          'Copiá el texto o descargá la tarjeta sobria en estilo Marfil o Celeste.'
        ]
      : perfil === 'profesionales'
      ? [
          `Ingresá arriba el nombre o título de ${dest} y cómo firmás vos o todo el equipo.`,
          'Mantené el mismo trato habitual (vos o usted) revisando las líneas del mensaje.',
          'Copiá para enviar por mail/chat laboral o descargá la tarjeta sobria en Marfil.'
        ]
      : [
          `Completá arriba el apodo de ${dest}, una posdata y cómo firmás habitualmente.`,
          'Elegí paleta, tipografía y proporción cuadrada o Story IG 1080×1920.',
          'Mandalo por WhatsApp, compartilo en Instagram o bajalo como tarjeta PNG completa.'
        ];

  return {
    perfil,
    clasificacion,
    citaDestacada: extraerCitaDestacada(m),
    destinatarioNombre: nombreHub(hub),
    ejemploGenerico: variante.generico,
    ejemploConcreto: variante.concreto,
    posdataSugerida: variante.posdata,
    mejorHorario,
    pasos,
    guia
  };
}
