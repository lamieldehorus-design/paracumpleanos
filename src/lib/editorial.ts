import { GUIAS_EDITORIALES, guiaPorSlug, type GuiaEditorial } from '../data/guias.ts';
import { nombreHub, metaDe } from './catalogo.ts';

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

const REGEX_DUELO = /fallecid|hasta-el-cielo|condolencias|pesame|consuelo|luctuoso|duelo|tristes|nostalgia|extranas/;
const REGEX_ANIV = /^(?!.*luctuoso).*(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/;
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
  'banderines',
  'italiano',
  'inglés',
  'portugués',
  'francés'
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
  'sobrinas gemelas': { frase: 'tus sobrinas gemelas', vocativo: '' },
  'cumpleaños a solas': { frase: 'quien celebra su día a solas o lejos', vocativo: '' },
  'regalos y decoración': { frase: 'acompañar un regalo o tarjeta de mesa', vocativo: '' },
  'regalos': { frase: 'quien abre este regalo', vocativo: '' },
  'redes sociales': { frase: 'quien saludás en redes o estados', vocativo: '' },
  'canciones y mañanitas': { frase: 'quien recibe música y mañanitas en su cumpleaños', vocativo: '' }
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
  if (/^\d+\s*(años|año|meses|mes)\b/.test(lower) || /\b(años|meses|aniversario|bodas|cumplemes)\b/.test(lower)) {
    return { frase: `quien celebra ${lower}`, vocativo: '' };
  }
  if (/^cumpleaños\b/.test(lower)) {
    return { frase: `quien celebra su ${lower}`, vocativo: '' };
  }
  if (/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|san valentín|navidad|nochebuena|año nuevo|pascuas|halloween|primavera|día del|jubilación|nacimiento)/.test(lower)) {
    return { frase: `esta ocasión especial (${raw})`, vocativo: '' };
  }
  if (/^(reflexiones|motivaciones|condolencias|nostalgia|recuerdos|discursos|tarjetas|dedicatorias|mensajes|frases)/.test(lower)) {
    return { frase: 'quien recibe estas palabras', vocativo: '' };
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
  if (REGEX_DUELO.test(slug) || grupo === 'duelo_recuerdos') return 'duelo';
  if (/meses-de-novios/.test(slug)) return 'aniv_meses';
  if (REGEX_ANIV.test(slug)) return 'aniv_anos';
  if (/ingles|english|biling|italiano|portugues|frances/.test(slug)) return 'bilingue';
  if (/invitacion/.test(slug)) return 'invitacion';
  if (/atrasad|tarde/.test(slug)) return 'atrasado';
  if (/gracioso|divertido|chist|humor|risa/.test(slug)) return 'humor';
  if (grupo === 'cristiano' || /cristian|dios-te-bendiga|oracion/.test(slug)) return 'fe';
  if (
    grupo === 'profesionales' ||
    /oficina-y-equipo/.test(slug) ||
    ['formal', 'doctor', 'doctora', 'jefe', 'jefa', 'profesor', 'profesora', 'maestra', 'pastor', 'sacerdote', 'ex-suegra'].includes(dest)
  ) {
    return 'profesionales';
  }
  if (grupo === 'distancia' || /lejos|distancia/.test(slug)) return 'distancia';
  if (/embaraz/.test(slug)) return 'embarazo';
  if (/(bebe|primer-anito|superheroes|princesas|(?:^|-)[1-9]-anos?\b|(?:^|-)10-anos?\b|-nino\b|-nina\b)/.test(slug)) return 'infantil';
  if (/(?:^|-)(12|13|14|15|16|17|18|19|20|21)-anos?\b|quince/.test(slug)) return 'jovenes';
  if (/(?:^|-)(25|30|35|40|45)-anos?\b/.test(slug)) return 'adultos';
  if (/(?:^|-)(50|60|65|70|80|90)-anos?\b|abuel/.test(slug)) return 'mayores';
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
        .replace(/^(Mensaje en (inglés|italiano|portugués|francés)|Traducción al español):\s*/i, '')
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
  } else if (slug === 'brindis-de-cumpleanos' || slug === 'discursos-cortos-de-cumpleanos-para-leer') {
    target = 'como-dar-un-brindis-de-cumpleanos-inolvidable-en-60-segundos';
  } else if (slug === 'canciones-y-mananitas-de-cumpleanos') {
    target = 'canciones-de-cumpleanos-las-mananitas-feliz-cumpleanos-y-tradiciones';
  } else if (slug === 'decoracion-y-regalos-de-cumpleanos') {
    target = 'que-regalar-y-como-decorar-un-cumpleanos-con-presupuesto-inteligente';
  } else if (/superheroes|princesas|futbol|retro-vintage/.test(slug)) {
    target = 'tematicas-de-cumpleanos-ideas-originales-para-fiestas';
  } else if (slug === 'agradecimiento-por-saludos-cumpleanos') {
    target = 'como-agradecer-los-mensajes-de-cumpleanos-por-whatsapp-y-redes';
  } else if (slug === 'feliz-cumpleanos-para-mi-si-estoy-lejos-o-solo') {
    target = 'cumpleanos-solo-o-en-momentos-dificiles-ideas-para-pasar-el-dia-con-calma';
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
    slug.startsWith('condolencias') ||
    /pesame|consuelo|luctuoso|duelo-recuerdos|acompanar-a-una-familia-en-duelo/.test(slug) ||
    slug === 'frases-tristes-para-recordar-momentos' ||
    slug === 'frases-de-nostalgia-y-recuerdos' ||
    slug === 'mensajes-cuando-extranas-a-alguien'
  ) {
    target = 'como-escribir-condolencias-y-palabras-de-pesame-respetuosas';
  } else if (REGEX_DUELO.test(slug)) {
    target = 'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido';
  } else if (
    slug === 'frases-para-invitacion-de-cumpleanos' ||
    slug === 'tarjetas-bonitas-para-felicitar-en-un-cumpleanos' ||
    slug === 'invitaciones-de-cumpleanos-para-editar-e-imprimir'
  ) {
    target = 'invitaciones-y-postales-de-cumpleanos-para-imprimir-y-editar';
  } else if (REGEX_ANIV.test(slug)) {
    target = 'como-celebrar-meses-de-novios-y-aniversarios-sin-caer-en-cliches';
  } else if (/italiano|portugues|frances/.test(slug)) {
    target = 'feliz-cumpleanos-en-otros-idiomas-ingles-italiano-frances-y-portugues';
  } else if (/ingles|english|biling/.test(slug)) {
    target = 'mensajes-de-cumpleanos-en-ingles-y-espanol-bilingues';
  } else if (REGEX_POEMA.test(slug)) {
    target = 'como-escribir-poemas-de-cumpleanos-cortos-que-rimen-bien';
  } else if (/15-anos|quince/.test(slug)) {
    target = 'cumpleanos-de-15-anos-dedicatorias-y-reglas-del-festejo';
  } else if (/18-anos/.test(slug)) {
    target = 'ideas-para-cumpleanos-de-18-anos-regalos-y-dedicatorias';
  } else if (/50-anos|65-anos/.test(slug)) {
    target = 'como-celebrar-cumpleanos-de-50-anos-homenajes-y-palabras';
  } else if (/90-anos|abuel/.test(slug)) {
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
  } else if (grupo === 'profesionales' || /oficina-y-equipo/.test(slug)) {
    target = 'como-felicitar-en-el-trabajo-jefe-companeros-clientes';
  } else if (grupo === 'distancia') {
    target = 'como-celebrar-un-cumpleanos-a-la-distancia';
  } else if (grupo === 'cristiano' || /oracion/.test(slug)) {
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
        : esDuelo
        ? 'Abrí con el nombre de la persona o el vínculo real antes de copiar el mensaje.'
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
      consejo: 'Abrí la dedicatoria elegida para personalizar encabezado, posdata y estilo antes de bajar tu tarjeta PNG.'
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
            'Sí. Al abrir cualquier dedicatoria accedés al personalizador de esa tarjeta para sumar el nombre y tu firma, actualizar los botones de envío y descargar tu PNG en tonos sobrios.'
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
            `Sí, al abrir cualquiera de las ${mensajes.length} dedicatorias podés personalizar la tarjeta, elegir el tema visual y descargar el PNG cuadrado 1080×1080 o vertical Story 1080×1920.`
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
            'Abrí el texto que más te identifique, escribí el apodo de tu pareja y tu firma en el personalizador de la publicación y sumá una referencia concreta de un momento vivido este último período.'
        },
        {
          pregunta: '¿Estas dedicatorias cuidan el vocabulario propio del aniversario?',
          respuesta:
            'Sí. Todas las opciones de esta sección están pensadas exclusivamente para celebrar meses, años, bodas e historia en pareja.'
        },
        {
          pregunta: '¿Cómo convierto cualquiera de estos textos en tarjeta imagen?',
          respuesta:
            `Al abrir cualquiera de las ${mensajes.length} dedicatorias encontrás el estudio de tarjeta con 6 estilos visuales, tipografías, posdata y descarga PNG cuadrada o Story.`
        }
      ];
      break;

    case 'bilingue': {
      const idiomaLabel = slug.includes('italiano')
        ? 'italiano'
        : slug.includes('portugues')
        ? 'portugués'
        : slug.includes('frances')
        ? 'francés'
        : 'inglés';
      subtituloClaves = `Cómo combinar ${idiomaLabel} y español con naturalidad`;
      claves = [
        `Dejá la línea en ${idiomaLabel} limpia y fiel cuando sea la cita central, y usá la traducción al español para sumar calidez personal.`,
        'Evitá mezclar palabras sueltas sin sentido: elegí textos cortos si van en un estado o historia y bilingües completos para tarjetas.',
        'Abrí el mensaje que prefieras para agregar el nombre en el personalizador de la tarjeta y mantener un saludo cercano en ambos idiomas.'
      ];
      citaClave = `Una frase en ${idiomaLabel} suena auténtica cuando conserva el ritmo breve del idioma original y suma una posdata cercana en español.`;
      faqs = [
        {
          pregunta: '¿Todas las frases incluyen su traducción clara al español?',
          respuesta:
            `Sí. Cada una de las ${mensajes.length} opciones presenta primero el texto en ${idiomaLabel} y debajo su traducción natural al español.`
        },
        {
          pregunta: `¿Conviene copiar solo la parte en ${idiomaLabel} o el mensaje bilingüe?`,
          respuesta:
            `Para historias de Instagram o estados breves suele lucir mejor solo la línea en ${idiomaLabel}; para tarjetas o WhatsApp familiar suma muchísimo incluir ambas partes.`
        },
        {
          pregunta: '¿Se actualiza la tarjeta descargable al poner un nombre?',
          respuesta:
            'Sí. Al entrar a cada publicación, el botón de Copiar, WhatsApp, Instagram y la tarjeta PNG cuadrada o Story incorporan automáticamente el nombre y la firma que indiques.'
        }
      ];
      break;
    }

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
            'Abrí el mensaje que más te guste, poné el nombre en el personalizador de la tarjeta y sumá en una línea algo concreto que agradecés de su ejemplo durante este último año.'
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
            'Seguí siempre el trato que usan a diario en la oficina, escuela o consulta. En esta sección incluimos opciones formales y cordiales adaptables dentro de cada publicación.'
        },
        {
          pregunta: '¿Cuál es el mejor canal y horario en el ámbito laboral?',
          respuesta:
            'Un mensaje breve a media mañana por correo, Slack/Teams o tarjeta firmada entre compañeros funciona mucho mejor que mandar audios fuera de horario.'
        },
        {
          pregunta: '¿Se pueden adaptar para firmar en nombre de todo un equipo?',
          respuesta:
            'Sí. Al entrar a la dedicatoria elegida, escribí por ejemplo "Todo el equipo" o "Tus alumnos" en el campo Tu firma para que la tarjeta salga lista para copiar.'
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
            'Sí, abrí cualquier dedicatoria para completar su nombre y tu firma en el personalizador de la tarjeta antes de copiar o bajar el PNG.'
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
            'Abrí el texto elegido, completá el nombre del cumpleañero y poné "Tus amigos del club" o el nombre de la familia en el campo Tu firma de la tarjeta.'
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
            'Sí, al abrir el poema elegido encontrás el personalizador para sumar nombre y firma sin romper la estructura de las estrofas.'
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
            'Sí. Al entrar a la carta que elijas podés ingresar el nombre o apodo y cómo firmás vos para adaptar tanto el texto como la tarjeta descargable.'
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
            'Abrí el mensaje elegido y escribí su apodo real en "Nombre o apodo" para que se inserte limpio al comienzo del texto y de la tarjeta.'
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
            'Cuidamos redacciones que funcionan bien tanto en el sur como en el norte, y dentro de cada texto podés sumar su nombre, posdata y firma en un segundo.'
        },
        {
          pregunta: '¿Puedo agregar una fotografía propia a la tarjeta antes de descargarla?',
          respuesta:
            'Sí. Al abrir cualquier dedicatoria podés cargar una foto desde tu dispositivo sin subirla a ningún servidor para bajar tu tarjeta PNG o imprimir la postal.'
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
            'Sí. Abrí la dedicatoria elegida, adaptá nombre y firma, y tocá Imprimir postal o descargá el PNG cuadrado listo para compartir.'
        },
        {
          pregunta: '¿Puedo firmar en nombre de toda la familia o del curso?',
          respuesta:
            'Claro: dentro de cada tarjeta escribí por ejemplo "Tus hijos y nietos" o "Las familias del grupo" en el campo Tu firma.'
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
            'Respetá exactamente el trato que usaron todos estos años en el trabajo. Al abrir cualquier publicación podés sumar nombre, posdata y firma del equipo completo.'
        },
        {
          pregunta: '¿Cómo hago para que la tarjeta represente a varios compañeros?',
          respuesta:
            'Entrá en la dedicatoria elegida, ingresá en "Tu firma" algo como "Todo el equipo de Administración" y usá el botón Imprimir postal para entregarla firmada en papel.'
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
        'Al abrir cualquier publicación podés cargar una foto local para armar una postal tierna en formato Story o impresa.'
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
            'Abrí el mensaje, elegí formato Story IG 9:16, cargá si querés una foto del bebé desde tu teléfono y tocá Instagram para descargarla limpia.'
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
            'Abrí el texto que más te guste y completá "Nombre o apodo", "Posdata" y "Tu firma" en su personalizador de tarjeta: todos los botones de Copiar, WhatsApp, Instagram y PNG se actualizan automáticamente.'
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
    bilingue: String((hub && hub.slug) || '').includes('italiano')
      ? [
          {
            generico: 'Buon compleanno a te, tante benedizioni oggi.',
            concreto: 'Elegí esta fórmula en italiano porque conserva la calidez cotidiana; al sumar el nombre de la persona y tu firma suena escrita especialmente para ella.',
            posdata: 'Posdata sugerida: «Tanti auguri di cuore! Prometto di festeggiare insieme prestissimo.»'
          },
          {
            generico: 'Auguri per il tuo giorno, felicità sempre.',
            concreto: 'Podés dejar el saludo en italiano arriba en la tarjeta y cerrar abajo con un deseo breve en español sobre un recuerdo compartido.',
            posdata: 'Posdata sugerida: «P.D.: guardate el fin de semana para nuestro brindis en familia.»'
          }
        ]
      : String((hub && hub.slug) || '').includes('portugues')
      ? [
          {
            generico: 'Parabéns pra você, muitas bênçãos no seu dia.',
            concreto: 'Usá esta expresión natural en portugués y sumá en tu posdata una escena real compartida para evitar que parezca una frase copiada.',
            posdata: 'Posdata sugerida: «Parabéns! O próximo café ou brinde já está marcado por minha conta.»'
          },
          {
            generico: 'Feliz aniversário, tudo de bom sempre.',
            concreto: 'Combiná el saludo cálido en portugués con tu firma habitual arriba para enviar por WhatsApp o bajar la tarjeta limpia en PNG.',
            posdata: 'Posdata sugerida: «P.D.: te mando un abrazo gigante desde acá hasta nuestro próximo encuentro.»'
          }
        ]
      : String((hub && hub.slug) || '').includes('frances')
      ? [
          {
            generico: 'Joyeux anniversaire à toi, plein de bonheur.',
            concreto: 'Mantené intacta la cadencia elegante del francés y sumá arriba el nombre de quien cumple para que la dedicatoria respire cercanía.',
            posdata: 'Posdata sugerida: «Joyeux anniversaire ! A muy pronto para brindar como corresponde.»'
          },
          {
            generico: 'Bon anniversaire, passe une bonne journée.',
            concreto: 'Podés usar solo la frase en francés para Story IG o conservar el bloque bilingüe completo si la persona disfruta ambos idiomas.',
            posdata: 'Posdata sugerida: «P.D.: ojalá este nuevo año venga cargado de viajes y mesas lindas.»'
          }
        ]
      : [
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

export interface ExplicacionCosmicaMensaje {
  titulo: string;
  parrafos: string[];
  enfoqueLabel: string;
  canalSugerido: string;
}

interface EspectroHumano {
  id: string;
  regex: RegExp;
  lecturaNormal: string[];
  lecturaDuelo?: string[];
  impactoNormal: string[];
  impactoDuelo?: string[];
}

const ESPECTRO_HUMANO: EspectroHumano[] = [
  {
    id: 'duelo_alivio_respuesta',
    regex: /\b(no\s+hace\s+falta\s+(?:que\s+)?respond|sin\s+compromiso|sin\s+prisa|no\s+respondas|ni\s+que\s+expliques|descans[aá]\s+tranquil|exigir\s+conversaci[oó]n)\b/i,
    lecturaNormal: [
      'pone por delante el alivio de quien atraviesa un momento pesado, quitándole la obligación de responder o dar explicaciones',
      'demuestra tacto genuino al ofrecer cercanía sin exigir atención inmediata ni respuestas de cortesía'
    ],
    lecturaDuelo: [
      'le quita a quien atraviesa la pérdida el peso de tener que contestar mensajes o sostener formalidades cuando apenas tiene aire',
      'libera a la familia de responder por compromiso y ofrece un acompañamiento que no invade el silencio del duelo'
    ],
    impactoNormal: [
      'Para quien recibe estas palabras, saber que no debe dar explicaciones convierte el mensaje en un verdadero respiro.',
      'Ese gesto de no apurar respuestas suele sentirse mucho más humano y considerado que cualquier discurso largo.'
    ],
    impactoDuelo: [
      'Quien atraviesa un duelo reciente suele quedar agotado de atender teléfonos; por eso liberar de responder es una de las formas más respetuosas de cuidar.',
      'Transmite que el cariño sigue firme sin pedir nada a cambio en horas donde cada mensaje cuesta energía.'
    ]
  },
  {
    id: 'duelo_ayuda_practica',
    regex: /\b(tr[aá]mite|tr[aá]mites|vianda|viandas|compras|recado|alcance\s+comida|caminar\s+diez\s+minutos|ayuda\s+en\s+lo\s+pr[aá]ctico|disposici[oó]n\s+para\s+ayudar)\b/i,
    lecturaNormal: [
      'pasa de las buenas intenciones al ofrecimiento concreto de ayuda en lo diario',
      'convierte el afecto en disposición real para resolver pendientes cuando hace falta una mano'
    ],
    lecturaDuelo: [
      'pasa de la condolencia abstracta al gesto concreto: acercar comida, hacerse cargo de un trámite o salir a caminar en silencio',
      'resuelve una necesidad real del duelo ofreciendo ayuda cotidiana específica en lugar de un “avisame cualquier cosa” impreciso'
    ],
    impactoNormal: [
      'Ofrecer acciones concretas facilita muchísimo que la otra persona acepte apoyo sin sentir vergüenza ni carga.',
      'En momentos sensibles, proponer una mano puntual dice mucho más sobre la lealtad del vínculo que mil adjetivos.'
    ],
    impactoDuelo: [
      'Cuando falta alguien querido, resolver las tareas chicas del día pesa el doble; ofrecer ayuda puntual alivia de verdad.',
      'Le da a la familia una puerta clara y cercana para apoyarse sin tener que pensar qué pedir.'
    ]
  },
  {
    id: 'duelo_legado_casa',
    regex: /\b(huella|ense[ñn]anz|ejemplo\s+noble|sembr[oó]|sigue\s+viv[ao]|abrir\s+la\s+puerta|hospitalidad|mano\s+atenta|memoria\s+buena|recuerdo\s+limpio|bien\s+sembr[oó]|nostalgia\s+dulce|cansancio\s+f[ií]sico\s+y\s+emocional)\b/i,
    lecturaNormal: [
      'recoge las enseñanzas sencillas y la huella cotidiana que una persona deja en quienes la rodean',
      'celebra la coherencia silenciosa de alguien cuya manera de cuidar y recibir en casa marca a todos'
    ],
    lecturaDuelo: [
      'honra lo que esa persona sembró en vida —su manera de abrir la puerta, escuchar o cuidar sin poses— como algo que sigue vivo en los suyos',
      'pone nombre concreto a las virtudes diarias y la huella serena que permanecen en la casa más allá de la ausencia física'
    ],
    impactoNormal: [
      'Reconocer la huella real de alguien confirma que su entrega diaria dejó raíces hondas en su entorno.',
      'Quien lee estas palabras siente que su forma de cuidar y enseñar no pasó inadvertida.'
    ],
    impactoDuelo: [
      'Recordar gestos precisos de quien partió ayuda a que el dolor dialogue con la gratitud y mantenga viva su presencia en lo cotidiano.',
      'Le devuelve a la familia la certeza de que su ejemplo bueno continúa habitando la memoria compartida de la casa.'
    ]
  },
  {
    id: 'hogar_sosten_silencioso',
    regex: /\b(sost[eé]n\s+silencioso|columna\s+y\s+abrigo|sin\s+esperar\s+reconocimiento|entrega\s+discreta|un[ia]ndo\s+generaciones|cuidado\s+diario|orden\s+invisible|poner\s+el\s+hombro|demostr[aá]s\s+en\s+hechos|sacrificios)\b/i,
    lecturaNormal: [
      'agradece esa fuerza discreta que sostiene la casa y la familia todos los días sin buscar aplausos ni protagonismo',
      'hace visible el trabajo afectivo y el amor demostrado en hechos de quien cuida lo cotidiano sin reclamar nada a cambio'
    ],
    impactoNormal: [
      'Muchas veces quienes sostienen el hogar dan tanto en silencio que rara vez escuchan un gracias a la altura; esta frase repara ese olvido con justicia y ternura.',
      'Al nombrar esa entrega silenciosa, quien la recibe se siente realmente vista, valorada y abrazada por los suyos.'
    ]
  },
  {
    id: 'legado_ejemplo_familiar',
    regex: /\b(orgullo|de\s+tu\s+sangre|marca\s+caminos|no\s+seamos\s+muy\s+de\s+decirlo|todo\s+lo\s+que\s+somos|consejos|sabidur[ií]a|ejemplo)\b/i,
    lecturaNormal: [
      'pone en palabras el orgullo y la admiración hacia un ejemplo familiar que a veces cuesta decir de frente en la rutina',
      'reconoce que mucho de lo bueno que hoy somos viene de sus consejos, su coherencia y su forma de acompañar'
    ],
    lecturaDuelo: [
      'abraza el orgullo sereno por su ejemplo y sus consejos, que siguen orientando a quienes quedan en casa',
      'honra esa enseñanza cotidiana que dejó huella firme en toda la familia'
    ],
    impactoNormal: [
      'Decir en voz alta el orgullo que da alguien de la propia familia suele emocionar mucho más que cualquier regalo material.',
      'Abre un espacio sincero para expresar afecto que tal vez no se dice todos los días.'
    ],
    impactoDuelo: [
      'Nombrar el orgullo y la gratitud por su ejemplo da sostén y serenidad en los momentos de mayor nostalgia.',
      'Mantiene viva la voz de sus consejos dentro de la historia familiar.'
    ]
  },
  {
    id: 'detalles_atencion_hogar',
    regex: /\b(transforman\s+en\s+hogar|acordarte\s+de\s+lo\s+que\s+al\s+otro|sin\s+hacer\s+ruido|contar\s+con\s+alguien\s+tan\s+genuino|encuentros\s+verdaderos|tal\s+cual\s+sos)\b/i,
    lecturaNormal: [
      'agradece esa sensibilidad cotidiana de estar atento a lo que el otro necesita sin buscar protagonismo',
      'pone en primer plano la paz de sentirse querido tal cual uno es, sin máscaras ni exigencias raras'
    ],
    impactoNormal: [
      'Reconocer a alguien por los pequeños cuidados que hace sin alardear genera una emoción genuina y muy cercana.',
      'Recuerda que la verdadera calidez de una relación se nota en cómo nos conocemos y cuidamos en lo simple.'
    ]
  },
  {
    id: 'pausa_valorar_esencial',
    regex: /\b(rutina\s+corre|damos\s+por\s+sentado|frenamos\s+con\s+gusto|quienes\s+te\s+conocen|alrededor\s+de\s+la\s+mesa|ma[ñn]anas\s+ordenadas)\b/i,
    lecturaNormal: [
      'invita a frenar el piloto automático de la rutina para decir en voz alta todo eso valioso que suele darse por sentado',
      'rescata la importancia de parar un momento a valorar la presencia del otro en medio de agendas cargadas'
    ],
    impactoNormal: [
      'Rompe la inercia de los días apurados y le regala a quien recibe el mensaje un momento honesto de reconocimiento.',
      'Transmite que su presencia y su lugar en el entorno nunca pasan desapercibidos.'
    ]
  },
  {
    id: 'gratitud_saludos_mesa',
    regex: /\b(sentirse\s+acompa[ñn]ado|tantas\s+etapas\s+distintas|mesas\s+compartidas|buena\s+m[uú]sica\s+en\s+casa|rodeado\s+de\s+afecto|mejor\s+regalo)\b/i,
    lecturaNormal: [
      'devuelve el cariño recibido agradeciendo la presencia de personas de distintas etapas de la vida en un mismo abrazo',
      'celebra el privilegio de sentirse acompañado con música, mesa compartida y afecto sincero sin mirar el reloj'
    ],
    impactoNormal: [
      'Expresar gratitud sincera multiplica el sentido del encuentro y deja a quienes acompañaron con una linda sensación de hogar.',
      'Recuerda que lo mejor de cualquier fecha importante es la red real de afectos que se hace presente.'
    ]
  },
  {
    id: 'invertir_cuidado_descanso',
    regex: /\b(dejarte\s+cuidar|apagar\s+pendientes|porci[oó]n\s+favorita|descanso\s+verdadero|mimos|hoy\s+te\s+mimen|soltar\s+cargas)\b/i,
    lecturaNormal: [
      'invierte los papeles habituales para recordarle a quien siempre resuelve todo que hoy le toca descansar y dejarse mimar',
      'corre el foco de las obligaciones diarias para invitar a soltar pendientes y disfrutar un momento genuino de cuidado'
    ],
    impactoNormal: [
      'Quienes están acostumbrados a cuidar a todos suelen olvidarse de sí mismos; recibir permiso explícito para descansar emociona profundamente.',
      'Transmite el deseo sincero de devolver en tranquilidad y mimos una parte del cuidado recibido.'
    ]
  },
  {
    id: 'escucha_sin_juicio',
    regex: /\b(escuchan\s+sin\s+juzgar|escuchar\s+todo\s+el\s+cuento|antes\s+de\s+opinar|escuchados\s+sin\s+apuro|paciencia\s+serena)\b/i,
    lecturaNormal: [
      'pone en primer plano una virtud cada vez más escasa: saber escuchar de verdad, sin apuro y sin juzgar',
      'valora esa presencia calma que ofrece oídos atentos y paciencia genuina antes de sacar conclusiones'
    ],
    impactoNormal: [
      'Sentirse escuchado con respeto genera un refugio emocional difícil de reemplazar, y nombrarlo refuerza muchísimo la confianza mutua.',
      'Es una manera honesta de decirle al otro que su calma y su atención hacen bien a quienes lo tratan.'
    ]
  },
  {
    id: 'evitar_cliches_poses',
    regex: /\b(sin\s+poses|promesas\s+de\s+pel[ií]cula|mensaje\s+apurado\s+de\s+compromiso|gr[aá]ndes\s+discursos|lugares\s+comunes|c[oó]mo\s+sos\s+en\s+lo\s+concreto)\b/i,
    lecturaNormal: [
      'toma distancia de los elogios artificiales o de compromiso para decir algo creíble y pegado a la vida real',
      'prefiere la cercanía honesta por encima de frases hechas, mostrando que el afecto se prueba en lo diario'
    ],
    impactoNormal: [
      'Cuando un saludo renuncia a exagerar y habla desde lo cotidiano, suena mucho más verdadero y difícil de olvidar.',
      'Quien lo lee percibe enseguida que detrás no hay formalidad automática sino aprecio real.'
    ]
  },
  {
    id: 'risa_complicidad',
    regex: /\b(humor\s+r[aá]pido|desarma\s+cualquier\s+mal\s+humor|chistes\s+internos|c[oó]digos\s+secretos|ocurrencia|risas?\s+largas|complicidad|momentos\s+torpes)\b/i,
    lecturaNormal: [
      'rescata la complicidad compartida: esa chispa y esos códigos propios capaces de descomprimir hasta el día más cruzado',
      'celebra el humor compartido y los chistes internos que solo existen cuando dos personas se conocen de verdad'
    ],
    impactoNormal: [
      'Recordar cómo se ríen juntos confirma que la relación conserva frescura, confianza y alegría más allá del paso del tiempo.',
      'Saca una sonrisa inmediata porque apela a momentos reales vividos entre los dos.'
    ]
  },
  {
    id: 'mesa_mate_sobremesa',
    regex: /\b(mate|mates|caf[eé]|desayuno|sobremesa|mesa\s+c[aá]lida|pizza\s+casera|velitas\s+chuecas|comida\s+casera|rosca|asado|comidas\s+c[aá]lidas|misma\s+mesa)\b/i,
    lecturaNormal: [
      'sitúa el afecto en escenas reales de casa: una mesa sin apuro, unos mates, café compartido o charlas que se estiran',
      'identifica lo sagrado dentro de lo simple —compartir la mesa, reírse alrededor de algo casero y conversar sin mirar el reloj'
    ],
    impactoNormal: [
      'Anclar los buenos deseos en rituales cotidianos vuelve cercano el sentimiento y evoca el calor del encuentro presencial.',
      'Hace sentir que la verdadera celebración pasa por compartir tiempo tranquilo con quienes importan.'
    ]
  },
  {
    id: 'distancia_puente',
    regex: /\b(audios\s+largos|diferencia\s+horaria|fotos\s+espont[aá]neas|vuelos|mudanzas|kil[oó]metros|distancia|lejos|frente\s+a\s+frente|pr[oó]ximo\s+abrazo|cruzando\s+cualquier\s+distancia)\b/i,
    lecturaNormal: [
      'demuestra que los kilómetros, mudanzas o cambios de horario no enfrían un vínculo sostenido con gestos chicos y constantes',
      'pone en valor esos puentes diarios —un audio largo, una foto mandada al pasar— que mantienen intacta la cercanía a la distancia'
    ],
    lecturaDuelo: [
      'hace sentir presencia leal aunque la distancia física impida estar ahí en persona en una jornada tan sensible',
      'acorta kilómetros con cercanía honesta y respetuosa para acompañar a la familia a pesar de estar lejos'
    ],
    impactoNormal: [
      'Quien vive lejos suele temer volverse invisible en las rutinas ajenas; escuchar que sigue presente disuelve esa distancia al instante.',
      'Reafirma que el cariño maduro sabe adaptarse al mapa y mantiene vivo el deseo de volver a abrazarse.'
    ],
    impactoDuelo: [
      'Aunque no se pueda estar físicamente en la sala o la casa, hacer presente el abrazo sincero acompaña de verdad.',
      'Le recuerda a quien sufre que la distancia geográfica no disminuye el respeto ni el apoyo.'
    ]
  },
  {
    id: 'pareja_cotidiano',
    regex: /\b(elegirnos|acuerdos\s+peque[ñn]os|detalles\s+invisibles|esperar\s+despierto|hogar\s+compartido|persona\s+favorita|mirada\s+c[oó]mplice|decisiones\s+tomadas\s+de\s+a\s+dos|mejor\s+equipo)\b/i,
    lecturaNormal: [
      'define el amor desde la elección diaria y los detalles discretos: cuidar acuerdos, acompañar semanas intensas y construirse como equipo',
      'muestra madurez afectiva al agradecer lo pequeño compartido antes que grandes gestos espectaculares pero pasajeros'
    ],
    impactoNormal: [
      'Le confirma a la pareja que los gestos invisibles de todos los días son vistos, agradecidos y valorados como el verdadero sostén del vínculo.',
      'Transmite seguridad tranquila, ternura y ganas genuinas de seguir caminando juntos.'
    ]
  },
  {
    id: 'autocuidado_propio_cumple',
    regex: /\b(compa[ñn][ií]a\s+un\s+lugar\s+amable|me\s+perdono|a\s+mi\s+ritmo\s+real|para\s+m[ií]|mi\s+propia\s+constancia|sostenerme\s+firme|semanas\s+exigentes|cero\s+culpas)\b/i,
    lecturaNormal: [
      'propone tratarse a uno mismo con la misma compasión que se ofrece a los demás, soltando culpas y exigencias ajenas en un día propio',
      'agradece la propia constancia en meses exigentes y convierte la pausa personal en un lugar amable de paz y descanso'
    ],
    impactoNormal: [
      'Validar el propio ritmo cuando toca celebrar a solas o hacer balance interior trae mucho alivio emocional.',
      'Recuerda que cuidarse y agradecer el camino recorrido también merece espacio propio.'
    ]
  },
  {
    id: 'graduacion_puentes',
    regex: /\b(graduaci[oó]n|tendieron\s+puentes|llegar\s+hasta\s+la\s+meta|etapa\s+laboral|t[ií]tulo\s+universitario|recibirse)\b/i,
    lecturaNormal: [
      'une la alegría del logro personal con la gratitud hacia quienes acompañaron en silencio durante el esfuerzo del estudio',
      'mira hacia el nuevo capítulo profesional sin olvidar las manos que ayudaron a cruzar la meta'
    ],
    impactoNormal: [
      'Reconocer el apoyo compartido hace que el triunfo sea todavía más luminoso y humano para todo el entorno.',
      'Expresa orgullo sano y gratitud limpia hacia quienes creyeron desde el comienzo.'
    ]
  },
  {
    id: 'memoria_raices',
    regex: /\b(patio|vereda|sillas\s+de\s+pl[aá]stico|heladera|fotos\s+improvisadas|infancia|veranos|ni[ñn]ez|barrio|recuerdos)\b/i,
    lecturaNormal: [
      'despierta imágenes sensoriales de raíces comunes y momentos sencillos que el paso de los años vuelve todavía más valiosos',
      'recupera escenas concretas de la memoria compartida para recordarle al otro cuánto significó ese tiempo vivido juntos'
    ],
    lecturaDuelo: [
      'guarda con ternura las escenas simples de la vida compartida, transformando la nostalgia en gratitud viva',
      'recupera pequeños cuadros familiares llenos de calidez que mantienen presente a quien se extraña'
    ],
    impactoNormal: [
      'Volver sobre recuerdos cotidianos tiene una fuerza emotiva enorme porque recuerda de dónde venimos y con quién construimos historia.',
      'Invita a sonreír con nostalgia amable al reconocer que aquellas escenas siguen intactas en la memoria.'
    ],
    impactoDuelo: [
      'Nombrar recuerdos concretos y cotidianos acompaña la nostalgia sin herir, recordando la calidez vivida juntos.',
      'Ofrece un refugio sereno donde extrañar también es seguir agradeciendo lo compartido.'
    ]
  },
  {
    id: 'atrasado_sin_excusas',
    regex: /\b(pasaron\s+unos\s+d[ií]as|tarde\s+al\s+calendario|atrasad|vale\s+el\s+doble|fuera\s+de\s+fecha)\b/i,
    lecturaNormal: [
      'transforma la demora en una oportunidad de cariño genuino: asume con franqueza haber pasado la fecha y elige saludar igual con más calma',
      'muestra que el afecto verdadero no caduca cuando cambia la hoja del calendario y prefiere aparecer tarde con sinceridad antes que callar'
    ],
    impactoNormal: [
      'Quien recibe un saludo unos días después percibe enseguida que no fue compromiso automático, sino ganas reales de estar presente.',
      'Saca incomodidad al atraso y deja abierta la puerta para encontrarse o ponerse al día sin apuro.'
    ]
  },
  {
    id: 'oficio_vocacion',
    regex: /\b(consultorio|explicaciones\s+claras|incertidumbre|alumnos|chicos\s+miran|coherencia\s+diaria|vocaci[oó]n|sector|imprevistos|vecina|oficina|en\s+remoto|informe|compa[ñn]ero)\b/i,
    lecturaNormal: [
      'reconoce el costado humano detrás de una tarea, oficio o trato diario: la serenidad, la coherencia y la paciencia hacia quienes acompañan',
      'valora el respeto y la calidez profesional o laboral sin caer en halagos forzados ni perder naturalidad'
    ],
    impactoNormal: [
      'Agradecer la calidad humana con la que alguien desempeña su trabajo o comparte el día suele emocionar más que cualquier formalidad.',
      'Combina aprecio auténtico con un deseo honesto de descanso y bienestar fuera de la rutina.'
    ]
  },
  {
    id: 'fe_cercana',
    regex: /\b(dios|se[ñn]or|cristo|oraci[oó]n|or[aá]s|bendici[oó]n|bendiga|gracia\s+de\s+dios|ordena\s+los\s+tiempos|esperanza)\b/i,
    lecturaNormal: [
      'une el cariño cotidiano con una fe serena que agradece la vida y pide paz, fortaleza y guía sobre el camino que empieza',
      'refleja confianza espiritual cercana, reconociendo cómo la fe del otro sostiene a quienes tiene alrededor en tiempos difíciles'
    ],
    lecturaDuelo: [
      'ofrece consuelo espiritual silencioso, oración y paz para el hogar en medio del dolor por la partida',
      'acompaña desde la fe serena, pidiendo descanso y alivio para quienes atraviesan la ausencia'
    ],
    impactoNormal: [
      'Le recuerda a la persona que su fe se vuelve visible en cómo anima, cuida y transmite paz a su entorno.',
      'Transmite amparo espiritual y gratitud profunda sin solemnidad distante.'
    ],
    impactoDuelo: [
      'Cuando las explicaciones humanas no alcanzan, una oración sencilla y respetuosa ofrece sosiego real a la familia.',
      'Envuelve el recuerdo en paz espiritual y respeto profundo por el momento íntimo del hogar.'
    ]
  },
  {
    id: 'cansancio_habitos',
    regex: /\b(se[ñn]ales\s+de\s+cansancio|energ[ií]a\s+mental|una\s+sola\s+tarea|distracciones|di[aá]logo\s+interno|tropiezo|constancia\s+silenciosa|postergaci[oó]n|frustraci[oó]n|metas\s+enormes|cerrar\s+ciclos\s+diarios)\b/i,
    lecturaNormal: [
      'baja la exigencia irreal del día a día y propone un gesto concreto de cuidado personal, foco tranquilo y trato amable hacia uno mismo',
      'detecta un desgaste cotidiano muy común —postergar por abarcar demasiado o hablarse con dureza— y lo reemplaza por un paso posible hoy'
    ],
    impactoNormal: [
      'Resulta aliviadora en jornadas cargadas porque convierte la motivación en calma práctica en vez de presión vacía.',
      'Ayuda a recuperar aire mental y confianza diaria cumpliendo metas concretas sin agotarse.'
    ]
  },
  {
    id: 'poesia_calidez',
    regex: /\b(dulce\s+amparo|costumbres\s+sencillas|ratos\s+nublados|mano\s+tendida|abrazos\s+verdaderos|mesa\s+dispuesta|sol\s+claro|versos)\b/i,
    lecturaNormal: [
      'recurre a imágenes cálidas y delicadas —el sol claro, la mesa dispuesta, la mano abierta en días grises— para expresar afecto con profundidad',
      'honra la ternura constante de quien acompaña en los ratos nublados y vuelve más amable la vida cotidiana'
    ],
    impactoNormal: [
      'Su tono poético eleva sentimientos diarios para que suenen memorables y dignos de guardarse.',
      'Transmite refugio emocional, admiración serena y gratitud sincera.'
    ]
  },
  {
    id: 'humor_ligero',
    regex: /\b(risa|re[ií]r|broma|arrugas|edad|juventud|chiste|velas|soplar)\b/i,
    lecturaNormal: [
      'elige el humor amable y la sonrisa compartida para celebrar la fecha sin solemnidad excesiva y con mucha cercanía',
      'combina guiños simpáticos sobre el paso del tiempo con un cariño genuino que desarma cualquier seriedad'
    ],
    lecturaDuelo: [
      'recuerda con ternura la sonrisa buena y la calidez que dejó en quienes compartieron días juntos',
      'rescata la alegría luminosa de sus gestos diarios como parte viva del cariño en casa'
    ],
    impactoNormal: [
      'Despierta una sonrisa espontánea mientras deja claro cuánto aprecio real hay detrás de la broma.',
      'Mantiene el encuentro liviano, cómplice y cercano.'
    ],
    impactoDuelo: [
      'Recordar una sonrisa buena ayuda a mantener cerca lo luminoso de su paso sin herir el respeto del momento.',
      'Abraza la memoria desde la calidez de los buenos ratos compartidos.'
    ]
  },
  {
    id: 'banderin_practico',
    regex: /\b(bander[ií]n|guirnalda|mesa\s+dulce|cartulina|gramos|hoja\s+a4|encuadre|fotos\s+verticales|altura\s+ideal|luz\s+c[aá]lida)\b/i,
    lecturaNormal: [
      'resuelve un problema concreto de armado y visibilidad para que la decoración luzca prolija tanto en persona como en las fotos del encuentro',
      'traduce experiencia práctica de montaje, medidas y contraste de materiales en decisiones claras que ahorran pruebas fallidas'
    ],
    impactoNormal: [
      'Tener presente este criterio antes de imprimir o colgar evita que el cartel quede tapado, torcido o apagado bajo la luz del lugar.',
      'Hace más simple lograr un resultado limpio y armonioso sin gastar tiempo ni papel de más.'
    ]
  },
  {
    id: 'regalo_atencion',
    regex: /\b(obsequio|comentario\s+al\s+pasar|gustos\s+reales|envuelto|sorpresa)\b/i,
    lecturaNormal: [
      'pone en palabras el verdadero sentido de regalar: haber prestado atención meses atrás a un gusto dicho al pasar',
      'acompaña el detalle material explicando el pensamiento y el cariño que guiaron la elección'
    ],
    impactoNormal: [
      'Hace sentir a quien abre el presente que es verdaderamente conocida en sus gustos y rutinas tranquilas.',
      'Convierte cualquier objeto sencillo en una prueba tangible de atención y cercanía.'
    ]
  },
  {
    id: 'infancia_crecer',
    regex: /\b(curiosidad|juegos\s+en\s+el\s+patio|dibujos|escuela|primer\s+a[ñn]ito|crecer\s+sano|risa\s+chica)\b/i,
    lecturaNormal: [
      'celebra el asombro de crecer rodeado de juegos, curiosidad y afecto familiar, atesorando una etapa irrepetible de la infancia',
      'traduce la emoción de los adultos al ver crecer sano y feliz a alguien tan chico dentro de la casa'
    ],
    impactoNormal: [
      'Guarda una foto emocional de esta edad exacta que cobra todavía más ternura cuando se relee años después.',
      'Transmite protección, orgullo dulce y alegría compartida alrededor de toda la familia.'
    ]
  },
  {
    id: 'juventud_alas',
    regex: /\b(15\s+a[ñn]os|quince|18\s+a[ñn]os|proyectos\s+propios|alas|empezar\s+a\s+elegir|camino\s+nuevo)\b/i,
    lecturaNormal: [
      'acompaña el paso hacia nuevas libertades con orgullo y confianza, celebrando que aparezcan sueños propios sin perder el abrazo de casa',
      'equilibra el entusiasmo por los desafíos nuevos con el respaldo sereno de quienes creen en su capacidad'
    ],
    impactoNormal: [
      'Le da seguridad a quien empieza una etapa bisagra saber que puede desplegar sus proyectos sintiéndose acompañado.',
      'Reconoce madurez creciente sin soltar la calidez del afecto cercano.'
    ]
  },
  {
    id: 'madurez_cosecha',
    regex: /\b(cincuenta|50\s+a[ñn]os|60\s+a[ñn]os|70\s+a[ñn]os|80\s+a[ñn]os|90\s+a[ñn]os|pies\s+en\s+la\s+tierra|balance\s+amable|proyectos\s+reales)\b/i,
    lecturaNormal: [
      'valora la serenidad de quien mira el camino recorrido con los pies en la tierra, celebrando lo sembrado y los proyectos que siguen vivos',
      'pone en primer plano la experiencia real, los vínculos cuidados en el tiempo y el equilibrio ganado con los años'
    ],
    impactoNormal: [
      'En lugar de mirar la edad desde la nostalgia pesada, la celebra como cosecha de afectos reales y claridad personal.',
      'Reafirma que cada etapa adulta conserva intacta la capacidad de proyectar y disfrutar con gente leal.'
    ]
  },
  {
    id: 'esperanza_estacion',
    regex: /\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|primavera|invierno|mitad\s+de\s+a[ñn]o|abrir\s+ventanas|pascuas|navidad|reyes)\b/i,
    lecturaNormal: [
      'conecta el sentir personal con la atmósfera propia de este momento del año, invitando a frenar, hacer balance amable y renovar aire',
      'enmarca el afecto dentro de una fecha especial del calendario, destacando el valor de reunirse y empezar con buena energía'
    ],
    impactoNormal: [
      'Aprovecha la pausa simbólica de esa estación o fecha para decir lo que muchas veces queda tapado por el apuro semanal.',
      'Deja una sensación luminosa de encuentro, descanso y esperanza compartida.'
    ]
  },
  {
    id: 'embarazo_espera',
    regex: /\b(embaraz|futura\s+mam[aá]|dulce\s+espera|beb[eé]\s+en\s+camino|nueva\s+vida)\b/i,
    lecturaNormal: [
      'abraza con ternura tanto a la mujer que transita esta espera como a la vida nueva que se prepara para llegar',
      'celebra este momento irrepetible deseando serenidad, mimos y acompañamiento real para la futura mamá'
    ],
    impactoNormal: [
      'Le recuerda a ella que sigue siendo protagonista de su propio día y merece cuidado especial mientras espera.',
      'Contagia alegría serena y calidez familiar alrededor de la llegada próxima.'
    ]
  }
];

function extraerTextoInterpretado(texto: string): {
  cuerpo: string;
  idioma?: string;
} {
  const raw = String(texto || '').trim();
  const mTrad = raw.match(/Mensaje en\s+([a-záéíóúñ]+):\s*[\s\S]*?Traducción al español:\s*\n*\s*[“"]?([\s\S]+?)[”"]?(?:\n|$)/i);
  if (mTrad) {
    return {
      idioma: mTrad[1].toLowerCase(),
      cuerpo: mTrad[2].replace(/[“”"]/g, '').trim()
    };
  }
  const limpio = raw
    .split(/\n+/)
    .filter((ln) => !/(personalizador|copiarlo o descargarlo|estilo visual)/i.test(ln))
    .join('\n')
    .trim();
  return { cuerpo: limpio || raw };
}

function normalizarGestoSegundaAPose(gesto: string): string {
  return gesto
    .replace(/\b(tu|tus)\b/gi, (m) => (m[0] === m[0].toUpperCase() ? 'Su' : m.toLowerCase() === 'tus' ? 'esos' : 'ese'))
    .replace(/\bacordarte\b/gi, 'acordarse')
    .replace(/\bcompartiste\b/gi, 'supo regalar')
    .replace(/\btransmitís\b/gi, 'transmite')
    .replace(/\s+/g, ' ')
    .trim();
}

function extraerGestoConcreto(cuerpo: string, esDuelo: boolean): string | null {
  const plano = cuerpo.replace(/\s+/g, ' ').trim();
  const patrones: RegExp[] = [
    /(?:seguir compartiendo|compartir)\s+([^.;!\n]{18,135})/i,
    /(?:agradecerte por|agradecemos(?:\s+también)?)\s+([^.;!\n]{18,135})/i,
    /destacar(?:\s+especialmente|\s+lo bien que hace)?\s+([^.;!\n]{18,135})/i,
    /valoramos(?:\s+con\s+el\s+corazón)?\s+([^.;!\n]{18,135})/i,
    /a través de\s+([^.;!\n]{18,135})/i,
    /gestos nobles[^:]*:\s*([^.;!\n]{18,135})/i,
    /se demuestra en lo pequeño:\s*en\s+([^.;!\n]{18,135})/i,
    /sabemos cuánto alivia\s+([^.;!\n]{18,135})/i,
    /huella profunda hecha de\s+([^.;!\n]{18,135})/i,
    /alrededor de\s+(la paz de[^.;!\n]{14,125})/i
  ];

  for (const rx of patrones) {
    const m = plano.match(rx);
    if (!m || !m[1]) continue;
    let frag = m[1]
      .replace(/,\s*(porque\s+ahí|cualidad\s+que|porque\s+en|y\s+en\s+la\s+manera|que\s+hoy\s+siento)[\s\S]*$/i, '')
      .replace(/\s*[—–-]+\s*$/, '')
      .trim();
    if (frag.length < 18 || frag.length > 130) continue;
    if (esDuelo && /torta|pastel|sopl[aá]|velas|fiesta|festej|brindis|regalos/i.test(frag)) continue;
    if (/^\b(tu|tus)\b/i.test(frag) || /\bacordarte\b/i.test(frag)) {
      frag = normalizarGestoSegundaAPose(frag);
    }
    return frag.replace(/[,:;]+$/, '');
  }
  return null;
}

const PROPIOS_INICIO = /^(Dios|Señor|Cristo|Navidad|Nochebuena|Pascuas|Reyes|San\s+Valent[ií]n|Halloween|Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)\b/;

function bajarInicialTitulo(titulo: string): string {
  const limpio = String(titulo || '').replace(/\s+/g, ' ').replace(/[“”"«»]+/g, '').replace(/[.!]+$/, '').trim();
  if (!limpio) return '';
  if (PROPIOS_INICIO.test(limpio)) return limpio;
  return limpio.charAt(0).toLowerCase() + limpio.slice(1);
}

function esTituloExtranjero(titulo: string): boolean {
  return /\b(buon|auguri|felice|compleanno|tanti|cuore|sempre|gioia|giorni|festa|gioiosa|celebrare|insieme|bello|verr[aà]|parab[eé]ns|anivers[aá]rio|felicidade|joyeux|anniversaire|journ[eé]e|lumineuse|bonheur|wishing|birthday|smiles|heart|warmth)\b/i.test(
    titulo
  );
}

function integrarNucleoTitulo(
  titulo: string,
  dest: string,
  perfil: PerfilEditorial,
  idioma: string | undefined,
  semilla: string,
  esNostalgia = false
): string {
  const esDuelo = perfil === 'duelo' && !esNostalgia;
  const esMotiv = perfil === 'motivaciones';
  const esAniv = perfil === 'aniv_meses' || perfil === 'aniv_anos';
  const esBanderin = perfil === 'banderines';

  const limpio = String(titulo || '').replace(/\s+/g, ' ').replace(/[“”"«»]+/g, '').replace(/[.!]+$/, '').trim();
  const lower = bajarInicialTitulo(limpio);

  if (idioma || esTituloExtranjero(limpio)) {
    const idLabel = idioma || (
      /\b(buon|auguri|felice|compleanno|cuore|festa|gioiosa)\b/i.test(limpio)
        ? 'italiano'
        : /\b(parab[eé]ns|anivers[aá]rio|voc[eê]|sua)\b/i.test(limpio)
        ? 'portugués'
        : /\b(joyeux|anniversaire|journ[eé]e|lumineuse)\b/i.test(limpio)
        ? 'francés'
        : 'inglés'
    );
    const conjIdioma = idLabel === 'italiano' || idLabel === 'inglés' ? 'e' : 'y';
    if (esTituloExtranjero(limpio)) {
      return elegirVariante(
        [
          `Este saludo en ${idLabel} (“${limpio}”) condensa buenos deseos sinceros hacia ${dest} más allá del idioma`,
          `La dedicatoria en ${idLabel} —“${limpio}”— expresa un deseo cercano de luz, calma y afecto real hacia ${dest}`
        ],
        semilla,
        1
      );
    }
    return elegirVariante(
      [
        `Este saludo bilingüe (español ${conjIdioma} ${idLabel}) nace de una intención muy cercana hacia ${dest}: ${lower}`,
        `La propuesta en ${idLabel} con su sentido en español transmite un deseo genuino de alegría y calidez: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (esNostalgia) {
    return elegirVariante(
      [
        `Esta frase nace desde la memoria afectiva y el cariño que perdura: ${lower}`,
        `Pone en palabras esa nostalgia luminosa que sigue viva con el paso del tiempo: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (esBanderin) {
    return elegirVariante(
      [
        `Este consejo se centra en un punto concreto de la decoración: ${lower}`,
        `La recomendación explica el porqué de una decisión visual clave: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (esMotiv) {
    return elegirVariante(
      [
        `Esta reflexión diaria parte de una idea práctica y amable: ${lower}`,
        `El mensaje invita a mirar el día desde un criterio concreto: ${lower}`,
        `En el centro de esta pausa cotidiana aparece una invitación clara: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (esDuelo) {
    return elegirVariante(
      [
        `Estas palabras nacen de un gesto sereno y respetuoso: ${lower}`,
        `El sentido más hondo de este acompañamiento se resume en una intención limpia: ${lower}`,
        `Quien envía este mensaje busca sostener desde la calma: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (esAniv) {
    return elegirVariante(
      [
        `Esta dedicatoria celebra la historia en pareja desde una certeza sencilla: ${lower}`,
        `En el corazón de este aniversario aparece un sentimiento genuino: ${lower}`,
        `El mensaje pone en palabras lo que sostiene la relación día tras día: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (/^(que|ojal[aá])\b/i.test(limpio)) {
    return elegirVariante(
      [
        `Esta frase nace de un deseo directo hacia ${dest}: ${lower}`,
        `El núcleo emocional del saludo está en anhelar algo concreto y bueno: ${lower}`,
        `Lo que busca transmitir este mensaje de corazón es sencillo y sincero: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (/^(gracias|agradezco|agradecemos)\b/i.test(limpio)) {
    return elegirVariante(
      [
        `La dedicatoria parte de un agradecimiento honesto y sin rodeos: ${lower}`,
        `Todo el mensaje gira alrededor de reconocer con gratitud lo compartido: ${lower}`
      ],
      semilla,
      1
    );
  }

  if (/^[a-záéíóúñ]+(ar|er|ir)(te|se|nos|le|lo|la)?\b/i.test(limpio)) {
    return elegirVariante(
      [
        `Pone en primer plano una manera real de querer y estar cerca de ${dest}: ${lower}`,
        `Resume en una imagen concreta el valor de este vínculo: ${lower}`,
        `Invita a mirar la fecha desde algo tangible y cercano: ${lower}`
      ],
      semilla,
      1
    );
  }

  return elegirVariante(
    [
      `El sentido de esta frase hacia ${dest} se condensa en una idea cercana: ${lower}`,
      `Esta dedicatoria pone en palabras un sentimiento muy reconocible: ${lower}`,
      `La intención detrás del mensaje busca expresar algo verdadero sin exagerar: ${lower}`,
      `Transmite un gesto afectuoso claro y humano hacia ${dest}: ${lower}`
    ],
    semilla,
    1
  );
}

function defaultLecturaPerfil(perfil: PerfilEditorial): { lectura: string; impacto: string } {
  switch (perfil) {
    case 'duelo':
      return {
        lectura: 'acompaña el dolor desde la discreción, sin apurar consuelos ni recurrir a frases hechas frías',
        impacto: 'Sirve para hacer sentir cercanía verdadera en horas difíciles, respetando los tiempos íntimos de quien extraña.'
      };
    case 'motivaciones':
      return {
        lectura: 'ofrece un punto de apoyo concreto y sereno para ordenar la cabeza sin exigirse de más',
        impacto: 'Ayuda a frenar la inercia del apuro diario y retomar lo importante con claridad y calma.'
      };
    case 'aniv_meses':
    case 'aniv_anos':
      return {
        lectura: 'valora la historia construida paso a paso, destacando la complicidad y el cuidado cotidiano por encima de promesas grandilocuentes',
        impacto: 'Le recuerda a la otra persona que la magia del vínculo está en seguir eligiéndose en lo simple de todos los días.'
      };
    case 'banderines':
      return {
        lectura: 'detalla criterios visuales y de armado pensados para evitar imprevistos el día de la reunión',
        impacto: 'Permite preparar una guirnalda legible, bien proporcionada y acorde al espacio donde se va a sacar las fotos.'
      };
    case 'atrasado':
      return {
        lectura: 'asume con naturalidad haber pasado la fecha y convierte el saludo posterior en una muestra sincera de atención',
        impacto: 'Demuestra que el cariño pesa más que el reloj y abre un lindo puente para ponerse al día sin incomodidades.'
      };
    case 'profesionales':
      return {
        lectura: 'mantiene respeto y cordialidad equilibrada, reconociendo la dedicación y el trato humano en el ámbito laboral o de estudio',
        impacto: 'Deja una impresión cálida y agradecida sin cruzar límites ni sonar distante.'
      };
    default:
      return {
        lectura: 'pone el afecto genuino por delante de cualquier formalidad, rescatando lo que hace valioso el vínculo en la vida diaria',
        impacto: 'Le hace sentir a quien lo recibe que es recordado con atención real y no con un saludo automático de compromiso.'
      };
  }
}

export function explicacionCosmicaMensaje(m: any, hub: any): ExplicacionCosmicaMensaje {
  const slug = String(m.slug || '');
  const catSlug = String((hub && hub.slug) || m.categoria || '');
  const textoOrig = String(m.texto || '');
  const tituloOrig = String(m.titulo || '');
  const perfil = detectarPerfilEditorial(hub, m);
  const clasif = clasificarMensaje(m, hub);
  const { frase: dest } = destNatural(hub, m);
  const esNostalgia = /nostalgia|tristes|extranas/.test(catSlug);
  const esDuelo = perfil === 'duelo';
  const esDueloEstricto = esDuelo && !esNostalgia;
  const esAniv = perfil === 'aniv_meses' || perfil === 'aniv_anos';
  const esMotiv = perfil === 'motivaciones';
  const esBanderin = perfil === 'banderines';

  const { cuerpo, idioma } = extraerTextoInterpretado(textoOrig);
  const gestoConcreto = extraerGestoConcreto(cuerpo, esDuelo);

  const bloqueAnalisis = `${tituloOrig} ${cuerpo}`;
  const espectroCoincidente = ESPECTRO_HUMANO.filter((e) => {
    if (esBanderin && e.id === 'memoria_raices') return false;
    if (esAniv && e.id === 'legado_ejemplo_familiar') return false;
    return e.regex.test(bloqueAnalisis);
  });
  if (esBanderin) {
    espectroCoincidente.sort((a, b) => (a.id === 'banderin_practico' ? -1 : b.id === 'banderin_practico' ? 1 : 0));
  }
  const espectroPrincipal = espectroCoincidente[0];
  const espectroSecundario = espectroCoincidente[1];

  const tituloLimpio =
    esDuelo && /torta|pastel|sopl[aá]|velas|fiesta|festej|brindis|regalos/i.test(tituloOrig)
      ? `${nombreHub(hub)} (${slug.replace(/-/g, ' ')})`
      : tituloOrig;

  const h2Opciones = esNostalgia
    ? [
        'Qué evoca este recuerdo compartido',
        'El sentimiento detrás de estas memorias',
        'Por qué sigue vivo este lazo en la memoria'
      ]
    : esDueloEstricto
    ? [
        'Sentido humano detrás de este abrazo escrito',
        'Qué transmite este acompañamiento sereno',
        'El gesto de respeto que guarda este mensaje'
      ]
    : esMotiv
    ? [
        'La idea de fondo para atravesar hoy',
        'Qué invita a mirar con calma esta reflexión',
        'El mensaje humano detrás de este recordatorio'
      ]
    : esAniv
    ? [
        'Lo que celebra realmente esta dedicatoria',
        'El valor de lo compartido en esta historia',
        'Qué expresa sobre su camino este mensaje'
      ]
    : esBanderin
    ? [
        'Qué resuelve esta recomendación práctica',
        'El criterio clave detrás de este consejo',
        'Por qué funciona este detalle de armado'
      ]
    : [
        `Qué expresa esta dedicatoria para ${dest}`,
        'El sentido humano de este saludo',
        'Qué busca transmitir de corazón este mensaje',
        `Por qué toca una fibra real para ${dest}`
      ];

  const h2Titulo = elegirVariante(h2Opciones, slug, 0);
  const aperturaSentido = integrarNucleoTitulo(tituloLimpio, dest, perfil, idioma, slug, esNostalgia);

  const fallback = esNostalgia
    ? {
        lectura: 'rescata la nostalgia luminosa de lo vivido sin encerrarse en tristeza ni perder gratitud por lo compartido',
        impacto: 'Sirve para decirle al otro o recordar en voz alta que las etapas lindas dejan una huella que ni la distancia ni los años borran.'
      }
    : defaultLecturaPerfil(perfil);
  const usaModoDuelo = (e?: EspectroHumano) =>
    Boolean(e && (esDueloEstricto || (esNostalgia && e.id === 'humor_ligero')));

  const lecturaEspectro = espectroPrincipal
    ? elegirVariante(
        usaModoDuelo(espectroPrincipal) && espectroPrincipal.lecturaDuelo
          ? espectroPrincipal.lecturaDuelo
          : espectroPrincipal.lecturaNormal,
        slug,
        3
      )
    : fallback.lectura;

  let p1 = '';
  if (gestoConcreto) {
    const puenteGesto = esDueloEstricto
      ? `Al nombrar ${gestoConcreto}, el mensaje`
      : esAniv
      ? `Lejos de promesas irreales, recuerda ${gestoConcreto} y`
      : `Cuando trae a escena ${gestoConcreto}, la dedicatoria`;
    p1 = `${aperturaSentido}. ${puenteGesto} ${lecturaEspectro}.`;
  } else if (idioma) {
    const tradLimpia = cuerpo.replace(/\s+/g, ' ').trim();
    p1 = `${aperturaSentido}. Su significado en español apunta a un deseo muy cálido —“${tradLimpia}”— y ${lecturaEspectro}.`;
  } else {
    const conectorLectura = esDueloEstricto
      ? 'Además, el mensaje'
      : esMotiv
      ? 'En su trasfondo,'
      : 'En su sentido profundo,';
    p1 = `${aperturaSentido}. ${conectorLectura} ${lecturaEspectro}.`;
  }

  let p2 = '';
  if (espectroPrincipal) {
    const listaImpacto =
      usaModoDuelo(espectroPrincipal) && espectroPrincipal.impactoDuelo
        ? espectroPrincipal.impactoDuelo
        : espectroPrincipal.impactoNormal;
    p2 = elegirVariante(listaImpacto, slug, 5);
    if (espectroSecundario) {
      const matizSec =
        usaModoDuelo(espectroSecundario) && espectroSecundario.lecturaDuelo
          ? espectroSecundario.lecturaDuelo[0]
          : espectroSecundario.lecturaNormal[0];
      p2 += ` Al mismo tiempo, ${matizSec}.`;
    }
  } else {
    p2 = fallback.impacto;
  }

  if (esAniv) {
    p1 = p1.replace(/cumpleaños/gi, 'aniversario');
    p2 = p2.replace(/cumpleaños/gi, 'aniversario');
  }

  const enfoqueLabel = esNostalgia
    ? `Memoria y cercanía · ${nombreHub(hub)}`
    : esDueloEstricto
    ? `Acompañamiento sereno · ${nombreHub(hub)}`
    : esMotiv
    ? 'Sentido de la reflexión diaria'
    : esBanderin
    ? 'Criterio práctico de diseño'
    : esAniv
    ? `Sentido del aniversario · ${nombreHub(hub)}`
    : `Sentido del mensaje · ${clasif.tonoLabel}`;

  return {
    titulo: h2Titulo,
    parrafos: [p1, p2],
    enfoqueLabel,
    canalSugerido: clasif.canalLabel
  };
}

export interface EditorialPaginaHub {
  metaDescripcion: string;
  leadParrafos: string[];
  guiaSubtitulo: string;
  guiaParrafos: string[];
}

export function editorialPaginaHub(
  hub: any,
  lote: any[],
  pagina: number,
  total: number
): EditorialPaginaHub {
  const nombre = nombreHub(hub);
  const { frase: dest } = destNatural(hub);
  const perfil = detectarPerfilEditorial(hub);
  const esDuelo = perfil === 'duelo';
  const esAniv = perfil === 'aniv_meses' || perfil === 'aniv_anos';
  const esMotiv = perfil === 'motivaciones';

  const inicioIdx = (pagina - 1) * 12 + 1;
  const finIdx = inicioIdx + Math.max(0, lote.length - 1);

  let breves = 0;
  let extensos = 0;
  let totalPalabras = 0;
  const titulosMuestra: string[] = [];
  const segCounts: Record<string, number> = {};

  for (const item of lote) {
    const c = clasificarMensaje(item, hub);
    totalPalabras += c.palabras;
    if (c.palabras <= 65) breves++;
    if (c.claseTono === 'carta' || c.palabras >= 130) extensos++;
    for (const s of c.segmentos) {
      segCounts[s] = (segCounts[s] || 0) + 1;
    }
    if (item?.titulo && titulosMuestra.length < 2) {
      titulosMuestra.push(String(item.titulo).trim());
    }
  }

  const promedio = lote.length ? Math.round(totalPalabras / lote.length) : 55;
  const segDominantes = Object.entries(segCounts)
    .filter(([k]) => k !== 'estado')
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([k]) => ETIQUETAS_SEGMENTOS[k as SegmentoTono]?.toLowerCase() || k);

  const enfoqueSeg = segDominantes.length ? segDominantes.join(' y ') : 'varios registros cuidados';
  const muestraTxt = titulosMuestra.length ? `“${titulosMuestra[0]}”` : nombre;

  let metaBase = '';
  if (esDuelo) {
    metaBase = `${nombre} (pág. ${pagina}/${total}): textos ${inicioIdx} al ${finIdx} con acompañamiento respetuoso para ${dest}. Listos para copiar o bajar en tarjeta sobria.`;
  } else if (esAniv) {
    metaBase = `${nombre} (pág. ${pagina}/${total}): dedicatorias ${inicioIdx} a ${finIdx} de ${enfoqueSeg}. Editables con nombres, fecha y postal PNG gratis.`;
  } else if (esMotiv) {
    metaBase = `${nombre} (pág. ${pagina}/${total}): reflexiones ${inicioIdx} a ${finIdx} (${promedio} palabras promedio) listas para aplicar hoy y bajar en Story IG.`;
  } else {
    metaBase = `${nombre} (pág. ${pagina}/${total}): mensajes ${inicioIdx} al ${finIdx} con estilos ${enfoqueSeg} para ${dest}. Personalizá y copiá gratis.`;
  }

  const metaDescripcion = metaDe(metaBase, 160);

  const lead1 = esDuelo
    ? `Este tramo (${inicioIdx} al ${finIdx} de ${total} páginas) reúne ${lote.length} mensajes adicionales de ${nombre.toLowerCase()} centrados en ${enfoqueSeg}, con promedio de ${promedio} palabras por texto.`
    : esMotiv
    ? `Recorrés la página ${pagina} de ${total} de ${nombre.toLowerCase()} (piezas ${inicioIdx} a ${finIdx}). Este bloque promedia ${promedio} palabras y combina enfoques de ${enfoqueSeg}.`
    : `En esta página ${pagina} de ${total} encontrás las dedicatorias ${inicioIdx} a ${finIdx} de ${nombre.toLowerCase()}, destacando tonos ${enfoqueSeg} para ${dest}.`;

  const lead2 =
    breves >= Math.ceil(lote.length / 2)
      ? `Predominan formatos ágiles (${breves} de ${lote.length} piezas entran completas en WhatsApp sin cortes), como ${muestraTxt}. Abrí cualquiera para sumar apodo y descargar su tarjeta.`
      : extensos >= 4
      ? `Este lote incluye ${extensos} textos de mayor desarrollo y lectura pausada (promedio ${promedio} palabras), empezando por ${muestraTxt}. Entrá en tu favorito para personalizar firma y postal.`
      : `Cada tarjeta abajo (desde ${muestraTxt}) promedia ${promedio} palabras e incluye su contexto previo, personalizador completo en vivo y exportación limpia a WhatsApp o PNG.`;

  const guiaSubtitulo = `Qué distingue este lote (página ${pagina} de ${total}) en ${nombre}`;
  const guiaP1 = esDuelo
    ? `Mientras la primera página presenta las opciones iniciales de ${nombre.toLowerCase()}, este bloque #${pagina} profundiza en alternativas discretas para quienes prefieren expresar cercanía sin repetir fórmulas conocidas (${breves} opciones breves y ${lote.length - breves} de desarrollo sereno).`
    : esAniv
    ? `Esta selección del bloque #${pagina} alterna ${breves} dedicatorias breves ideales para el primer saludo del día y ${lote.length - breves} textos más amplios pensados para celebrar la historia en pareja sin sonar repetitivos.`
    : `Si ya recorriste las primeras opciones de ${nombre.toLowerCase()}, esta página ${pagina} amplía el abanico con ${lote.length} piezas inéditas que oscilan alrededor de las ${promedio} palabras y priorizan matices de ${enfoqueSeg}.`;

  const guiaP2 = `Todas las publicaciones de esta vista enlazan a su página individual con explicación contextual antes de la frase, personalización de nombre y firma en el acto y descarga en formato cuadrado o Story IG.`;

  return {
    metaDescripcion,
    leadParrafos: [lead1, lead2],
    guiaSubtitulo,
    guiaParrafos: [guiaP1, guiaP2]
  };
}

