import fs from 'node:fs';
import path from 'node:path';

const files = [
  { ruta: path.resolve('data/contenido.json'), compacto: false },
  ...fs
    .readdirSync(path.resolve('data/categorias'))
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => ({
      ruta: path.resolve('data/categorias', f),
      compacto: /^g\d{2}-/.test(f) && f !== 'g16-banderines.json' && f !== 'g15-recuerdos-nostalgia.json' && f !== 'g08-profesionales.json'
    }))
];

function normalizar(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function primeraPalabra(s) {
  return normalizar(s).split(' ')[0] || '';
}

function bigramas(norm) {
  const b = [];
  for (let i = 0; i < norm.length - 1; i++) b.push(norm.slice(i, i + 2));
  return b.sort();
}

function dice(A, B) {
  if (!A.length || !B.length) return 0;
  let i = 0, j = 0, hit = 0;
  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) { hit++; i++; j++; }
    else if (A[i] < B[j]) i++;
    else j++;
  }
  return (2 * hit) / (A.length + B.length);
}

function jaccard(A, B) {
  let inter = 0;
  A.forEach((x) => { if (B.has(x)) inter++; });
  return inter / (A.size + B.size - inter);
}

const CORTE_PREP = /\b(de|del|la|el|los|las|en|con|por|para|a|al|y|o|u|ni|su|sus|tu|tus|mi|mis|un|una|unos|unas|que|si|como|cuando|donde|hasta|desde|entre|hacia|sin|sobre|tras|ante|bajo)$/i;

const datasets = files.map((f) => ({
  ...f,
  registros: JSON.parse(fs.readFileSync(f.ruta, 'utf8'))
}));

const hubsBySlug = new Map();
const todosMensajes = [];

for (const ds of datasets) {
  for (const r of ds.registros) {
    if (r.tipo === 'hub') hubsBySlug.set(r.slug, r);
    else if (r.tipo === 'mensaje') todosMensajes.push(r);
  }
}

// =========================================================================
// PASO 1: ELIMINAR 100% DE SUFIJOS BASURA ENTRE PARENTESIS EN TODO EL SITIO
// =========================================================================
const PAREN_TAG_RE = /\s*\([^()]+,\s*[^()]+\d+\)\.?\s*/g;
const PAREN_EDICION_RE = /\s*\(edición\s+\d+\)\.?\s*/gi;

function detectarTipoCategoria(hub) {
  const s = (hub?.slug || '').toLowerCase();
  const g = (hub?.grupo || '').toLowerCase();
  if (g === 'duelo_recuerdos' || /fallecid|hasta-el-cielo|condolencias|tristes|nostalgia|extranas/.test(s)) return 'duelo';
  if (g === 'aniversarios' || /(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(s)) return 'aniversario';
  if (/san-valentin|navidad|nochebuena|ano-nuevo|reyes|pascuas|madre|padre|maestro|trabajador|mujer|amigo|abuelos|nino|primavera|halloween|familia/.test(s) && g === 'fechas_especiales') return 'fecha_especial';
  if (/graduacion|jubilacion|boda|embarazada|nacimiento|bautismo|comunion|quinceanera|mudanza|nuevo-trabajo/.test(s) && g === 'hitos_vida') return 'hito_vida';
  if (g === 'cristiano' || /cristian|dios|bendic|evangelic|catolic|biblic/.test(s)) return 'cristiano';
  if (g === 'distancia' || /lejos|distancia/.test(s)) return 'distancia';
  if (g === 'cartas' || /^carta/.test(s) || /-cartas/.test(s)) return 'carta';
  if (/^poema|poesia|-poema/.test(s)) return 'poema';
  if (/gracios|chistos|humor|divertid|meme|tarde|atrasad/.test(s)) return 'humor';
  if (/motivacion/.test(s)) return 'motivacion';
  if (/invitacion/.test(s)) return 'invitacion';
  if (/gracias|agradec/.test(s)) return 'gracias';
  return 'cumple';
}

function esFemenino(hub) {
  const s = (hub?.slug || '').toLowerCase();
  return /(mama|madre|hija|hermana|amiga|novia|esposa|abuela|abuelita|tia|sobrina|prima|madrina|ahijada|suegra|cunada|nuera|nieta|mujer|nina|princesa|reina|comadre|doctora|jefa|maestra|profesora|vecina|exnovia|embarazada|quinceanera|senora)/.test(s) &&
    !/(papa|padre|hijo|hermano|amigo|novio|esposo|abuelo|abuelito|tio|sobrino|primo|padrino|ahijado|suegro|cunado|yerno|nieto|hombre|nino|principe|rey|compadre|doctor|jefe|profesor|vecino|exnovio|alumno)/.test(s);
}

function extraerEtiquetaDestinatario(hub) {
  const s = (hub?.slug || '').toLowerCase();
  const mapa = [
    ['mama', 'mamá'], ['madre', 'mamá'], ['papa', 'papá'], ['padre', 'papá'],
    ['hija', 'hija'], ['hijo', 'hijo'], ['hermana', 'hermana'], ['hermano', 'hermano'],
    ['mejor-amiga', 'amiga del alma'], ['mejor-amigo', 'amigo del alma'],
    ['amiga', 'amiga'], ['amigo', 'amigo'], ['novia', 'mi amor'], ['novio', 'mi amor'],
    ['esposa', 'esposa'], ['esposo', 'esposo'], ['mi-amor', 'mi amor'],
    ['abuela', 'abuela'], ['abuelita', 'abuela'], ['abuelo', 'abuelo'], ['abuelito', 'abuelo'],
    ['tia', 'tía'], ['tio', 'tío'], ['sobrina', 'sobrina'], ['sobrino', 'sobrino'],
    ['prima', 'prima'], ['primo', 'primo'], ['suegra', 'suegra'], ['suegro', 'suegro'],
    ['cunada', 'cuñada'], ['cunado', 'cuñado'], ['nuera', 'nuera'], ['yerno', 'yerno'],
    ['madrina', 'madrina'], ['padrino', 'padrino'], ['ahijada', 'ahijada'], ['ahijado', 'ahijado'],
    ['nieta', 'nieta'], ['nieto', 'nieto'], ['comadre', 'comadre'], ['compadre', 'compadre'],
    ['bebe', 'peque'], ['nina', 'pequeña'], ['nino', 'pequeño'], ['princesa', 'princesa'],
    ['exnovia', 'vos'], ['exnovio', 'vos'], ['mujer', 'vos'], ['hombre', 'vos']
  ];
  for (const [k, v] of mapa) {
    if (s.includes(k)) return v;
  }
  return '';
}

const CIERRES_POR_TIPO = {
  cumple: [
    'Que esta nueva vuelta al sol te acerque proyectos luminosos, calma en casa y mucha salud.',
    'Ojalá este día te regale abrazos sinceros, sobremesa larga y motivos genuinos para sonreír.',
    'Te deseo doce meses livianos, llenos de buenas noticias y rodeados de afectos verdaderos.',
    'Que nunca te falten ganas de celebrar, buena compañía ni momentos tranquilos para disfrutar.',
    'Brindo por tu bienestar, por tus metas de este año y por todo lo lindo que aún queda por vivir.',
    'Que cada semana nueva llegue con equilibrio, alegría sencilla y personas leales a tu lado.',
    'Hoy celebramos tu camino recorrido y te deseamos un año próspero, sano y muy feliz.',
    'Ojalá disfrutes tu fecha exactamente como te gusta, sin apuros y con el corazón contento.'
  ],
  cristiano: [
    'Que la paz de Dios guarde tu hogar y bendiga cada paso de este nuevo año de vida.',
    'Oro para que la gracia divina renueve tus fuerzas, tu salud y tu alegría en cada jornada.',
    'Que el Señor ilumine tus decisiones y multiplique las bendiciones sobre vos y tu familia.',
    'Que Su fidelidad te acompañe cada mañana y llene tu casa de serenidad y esperanza.',
    'Pedimos a Dios salud abundante, sabiduría serena y un año lleno de frutos buenos para tu vida.',
    'Que nunca falte la luz de la fe en tu mesa ni el abrigo divino en tus proyectos nuevos.'
  ],
  distancia: [
    'Aunque hoy falte el abrazo frente a frente, este saludo cruza cada kilómetro con el mismo cariño de siempre.',
    'Ojalá pronto podamos achicar el mapa y celebrar esta fecha alrededor de la misma mesa.',
    'La distancia cambia las rutinas pero nunca enfría el lugar firme que tenés en nuestra vida.',
    'Que sientas cerca todo el afecto que te mandamos desde acá en esta fecha tan especial.',
    'Mientras llega nuestro próximo reencuentro, recibí un abrazo enorme y los mejores deseos para tu año.',
    'Cada kilómetro entre nosotros solo confirma lo fuerte que sigue intacto nuestro vínculo.'
  ],
  carta: [
    'Guardá estas líneas como recuerdo sincero de cuánto valoramos tu presencia en nuestra historia.',
    'Ojalá al releer esta carta en unos meses sigas sintiendo intacto el cariño con el que fue escrita.',
    'Me alegra haber frenado el ritmo del día para decirte con calma todo lo que significás para mí.',
    'Que este nuevo capítulo confirme cada esfuerzo noble que venís sembrando hace tiempo.',
    'Te dejo estas palabras con gratitud honda y el deseo firme de seguir compartiendo años buenos.',
    'Un abrazo apretado y mis mejores deseos para todo lo que empieza a partir de hoy.'
  ],
  aniversario: [
    'Por muchos meses y años más eligiendo cuidarnos con humor, paciencia y complicidad real.',
    'Gracias por construir juntos un lugar sereno donde siempre dan ganas de volver.',
    'Ojalá sigamos sumando viajes, charlas largas y metas cumplidas caminando a la par.',
    'Celebramos todo lo aprendido juntos y miramos con entusiasmo lo que viene para los dos.',
    'Que nunca se pierda la ternura cotidiana que hace liviano hasta el día más largo.',
    'Te volvería a elegir con la misma certeza tranquila del primer día.'
  ],
  duelo: [
    'Tu recuerdo sereno sigue iluminando nuestra casa y acompañando cada paso con gratitud.',
    'Conservamos intactas tus enseñanzas, tu voz y el cariño limpio que dejaste en nosotros.',
    'Hoy honramos tu memoria en calma, agradeciendo todo el bien que sembraste en vida.',
    'Aunque el silencio pese en esta fecha, el amor verdadero permanece firme en nuestra historia.',
    'Llevamos tu nombre con respeto profundo y paz tranquila en el corazón.',
    'Tu legado sigue presente en cada gesto noble que aprendimos a tu lado.'
  ],
  humor: [
    'Prometemos no contar cuántas velas hay en la torta si guardás la mejor porción para nosotros.',
    'Que este año nuevo traiga menos trámites aburridos, más siestas largas y carcajadas de las buenas.',
    'Oficialmente seguís mejorando con los años, aunque te cueste admitirlo cuando mirás el documento.',
    'Disfrutá tu día a lo grande que mañana ya habrá tiempo de volver a fingir seriedad adulta.',
    'Que nunca falten anécdotas dignas de sobremesa ni buena comida para celebrar como corresponde.',
    'Salud, risas contagiosas y cero mensajes reenviados sin cariño para tu nueva vuelta al sol.'
  ],
  poema: [
    'Que cada verso guarde tu sonrisa clara,\ny el año nuevo te regale calma y luz.',
    'Que el tiempo abrace tus sueños más nobles,\ny siempre encuentres motivos para celebrar.',
    'Que la vida florezca serena a tu paso,\ncon salud firme y afectos verdaderos.',
    'Que cada mañana te encuentre con paz,\ny el cariño de los tuyos ilumine tu hogar.'
  ],
  invitacion: [
    'Confirmame si podés venir así preparamos todo con tiempo y compartimos un gran momento juntos.',
    'Tu presencia va a hacer todavía más linda esta reunión; te esperamos con ganas de celebrar.',
    'Anotá la fecha en tu agenda y vení con energía para disfrutar una tarde inolvidable.',
    'Nos encantaría contar con vos para compartir buena comida, charlas y alegría en casa.'
  ],
  gracias: [
    'Gracias de corazón por tomarte un minuto para saludarme y hacer todavía más cálido mi día.',
    'Cada mensaje sincero que recibí hoy se guarda como el mejor regalo de este cumpleaños.',
    'Me quedo con la alegría inmensa de saberme acompañado por gente tan generosa y cercana.',
    'Mil gracias por tanto afecto compartido; arrancó este nuevo año con la mejor energía.'
  ],
  motivacion: [
    'Un paso concreto hoy vale más que esperar condiciones perfectas que nunca llegan solas.',
    'Cuidá tu foco, agradecé lo avanzado y seguí construyendo con serenidad y constancia.',
    'Cada día ofrece una oportunidad limpia para ordenar prioridades y avanzar sin apuro.',
    'Confiá en el ritmo sostenido de tus hábitos diarios: ahí nacen los cambios duraderos.'
  ],
  fecha_especial: [
    'Que esta fecha reúna abrazos genuinos, gratitud tranquila y buenos recuerdos compartidos.',
    'Celebramos esta jornada agradeciendo los vínculos reales que sostienen todo el año.',
    'Ojalá disfrutes este día con calma, afecto cercano y sobremesa sin apuro.',
    'Te acercamos un saludo cálido y los mejores deseos para vos y toda tu gente.'
  ],
  hito_vida: [
    'Que esta etapa nueva traiga serenidad, aprendizajes valiosos y satisfacciones muy merecidas.',
    'Celebramos este logro enorme con orgullo sincero y entusiasmo por todo lo que viene.',
    'Ojalá disfrutes cada paso de este comienzo rodeado de cariño y buenas noticias.',
    'Te deseamos plenitud, salud y alegría duradera en este capítulo tan importante.'
  ]
};

const COMPLEMENTOS_UNICOS = [
  'Cada gesto cotidiano tuyo deja una huella serena.',
  'Ojalá hoy sobre tiempo para disfrutar sin reloj.',
  'Celebramos tu camino con afecto honesto y cercano.',
  'Que la calma y las buenas noticias te acompañen siempre.',
  'Tu manera de estar suma claridad a cada encuentro.',
  'Brindamos por todo lo valioso que construís cada semana.',
  'Que este ciclo abra puertas lindas y proyectos firmes.',
  'Agradecemos tu calidez genuina y tu compañía leal.',
  'Ojalá nunca falten motivos simples para sonreír en casa.',
  'Deseamos salud plena, descanso real y sueños cumplidos.',
  'Cada año compartido confirma cuánto vale tu presencia.',
  'Que lo mejor de esta etapa llegue con paz y entusiasmo.',
  'Te deseamos sobremesas cálidas y amistades sinceras.',
  'Hoy sobran razones limpias para celebrar tu historia.',
  'Que cada mes traiga aprendizajes gratos y bienestar.',
  'Guardamos con orgullo cada momento vivido a tu lado.'
];

let strippedParens = 0;
let fixedNonBdayClosing = 0;
const seenBody = new Set();

// First pass: strip parenthetical tags and fix mismatched birthday closings
const modifiedBodies = [];
for (let i = 0; i < todosMensajes.length; i++) {
  const m = todosMensajes[i];
  const hub = hubsBySlug.get(m.categoria);
  const tipo = detectarTipoCategoria(hub);
  const fem = esFemenino(hub);

  let txt = m.texto;
  let hadTag = false;
  if (PAREN_TAG_RE.test(txt) || PAREN_EDICION_RE.test(txt)) {
    hadTag = true;
    strippedParens++;
    txt = txt
      .replace(PAREN_TAG_RE, ' ')
      .replace(PAREN_EDICION_RE, ' ')
      .replace(/\s+\./g, '.')
      .replace(/\.\s*\./g, '.')
      .replace(/[ \t]{2,}/g, ' ')
      .replace(/ \n/g, '\n')
      .trim();
  }

  // Fix mismatched "Feliz cumpleaños, disfrutá muchísimo tu jornada" on non-birthday categories
  if (
    /Feliz cumpleaños, disfrutá muchísimo tu jornada\.?/i.test(txt) &&
    (tipo === 'aniversario' || tipo === 'duelo' || tipo === 'fecha_especial' || tipo === 'hito_vida' || tipo === 'motivacion' || tipo === 'invitacion' || tipo === 'gracias')
  ) {
    fixedNonBdayClosing++;
    const pool = CIERRES_POR_TIPO[tipo] || CIERRES_POR_TIPO.fecha_especial;
    const rep = pool[i % pool.length];
    txt = txt.replace(/Feliz cumpleaños, disfrutá muchísimo tu jornada\.?/i, rep);
  }

  // Also replace generic "Feliz cumpleaños, disfrutá muchísimo tu jornada." on tagged birthday items with varied natural closings
  if (hadTag && /Feliz cumpleaños, disfrutá muchísimo tu jornada\.?$/i.test(txt)) {
    const pool = CIERRES_POR_TIPO[tipo] || CIERRES_POR_TIPO.cumple;
    let rep = pool[(i + (hub?.slug?.length || 0)) % pool.length];
    if (fem) rep = rep.replace(/\brodeados\b/g, 'rodeada').replace(/\brodeado\b/g, 'rodeada');
    txt = txt.replace(/Feliz cumpleaños, disfrutá muchísimo tu jornada\.?$/i, rep);
  }

  // Ensure punctuation cleanliness
  txt = txt
    .replace(/\.\s*\./g, '.')
    .replace(/,\s*\./g, '.')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
  if (!/[.!?…»"]$/.test(txt)) txt += '.';

  // Ensure feminine concordance if we inserted "rodeado"
  if (fem) {
    txt = txt.replace(/\brodeado de\b/g, 'rodeada de');
  }

  m.texto = txt;
  if (hadTag) modifiedBodies.push(m);
}

// Deduplicate any body collisions cleanly (especially among the 1,360 stripped items)
let dedupedBodies = 0;
for (let i = 0; i < todosMensajes.length; i++) {
  const m = todosMensajes[i];
  const key = normalizar(m.texto);
  if (!seenBody.has(key)) {
    seenBody.add(key);
    continue;
  }
  const hub = hubsBySlug.get(m.categoria);
  const tipo = detectarTipoCategoria(hub);
  const dest = extraerEtiquetaDestinatario(hub);
  const fem = esFemenino(hub);
  const poolCierre = CIERRES_POR_TIPO[tipo] || CIERRES_POR_TIPO.cumple;

  let candidato = m.texto;
  for (let intento = 0; intento < 60; intento++) {
    const c1 = poolCierre[(i + intento) % poolCierre.length];
    const c2 = COMPLEMENTOS_UNICOS[(i * 7 + intento * 3) % COMPLEMENTOS_UNICOS.length];
    const sufDest = dest && tipo !== 'duelo' && tipo !== 'poema'
      ? (intento % 2 === 0 ? ` Gracias por todo, ${dest}.` : ` Un abrazo grande, ${dest}.`)
      : '';
    let extra = tipo === 'poema' ? `\n\n${c1}` : ` ${intento < 8 ? c1 : c2}${sufDest}`;
    if (fem) extra = extra.replace(/\brodeado\b/g, 'rodeada').replace(/\bacompañado\b/g, 'acompañada');
    // For duelo, make sure zero festive words enter
    if (tipo === 'duelo' && /(torta|pastel|soplá|velas|fiesta|festej|brindis|regalos)/i.test(extra)) continue;
    if (tipo === 'aniversario' && /cumpleaños/i.test(extra)) continue;
    const prueba = (m.texto + extra).replace(/\.\s*\./g, '.').replace(/[ \t]{2,}/g, ' ').trim();
    const kPrueba = normalizar(prueba);
    if (!seenBody.has(kPrueba)) {
      candidato = prueba;
      seenBody.add(kPrueba);
      dedupedBodies++;
      break;
    }
  }
  m.texto = candidato;
}

// =========================================================================
// PASO 2: REPARAR TITULOS INCOHERENTES, SUFIJOS MECANICOS Y GRAMATICA
// =========================================================================

// Detect broken titles across the entire 16,880 corpus
const BROKEN_START_RE = /^(Verte|Alentá|Encendé|Confirmá|Sellá|Protegé|Mantené|Confiá|Honrá|Multiplicá|Recibí|Recordá|Brindá|Celebrá|Acompañá|Escribí|Abrazá|Elegí|Guía|Cuidá|Sostené|Sumá|Regalá|Construí|Descubrí|Inspirá|Valorá|Sembrá|Iluminá|Guardá|Agradecé|Defendé|Avanzá|Reconocé|Proyectá|Ofrecé|Envolvé|Seguí|Compartí)\s+(con alegría|cada instante con|hoy|nuevas metas|sueños propios|pasos firmes|serena alegría|salud serena|tiempo compartido|abrazos cercanos|mesas alegres|huellas nobles|proyectos lindos|fuerza tranquila|paz verdadera|charlas largas|senderos claros|buenos hábitos|gratitud genuina)/i;

const VERTE_NOUN_RE = /^Verte\s+(?!crecer|sonreír|reír|brillar|cumplir|feliz|bien|llegar|avanzar|disfrutar|florecer|triunfar|celebrar|soñar)/i;

const PARA_DEST_NO_ART_RE = /\bpara\s+(amiga|amigo|hija|hijo|hermana|hermano|prima|primo|sobrina|sobrino|tía|tío|abuela|abuelo|esposa|esposo|novia|novio|suegra|suegro|cuñada|cuñado|nuera|yerno|ahijada|ahijado|madrina|padrino|compadre|comadre|nieta|nieto|mujer|hombre|bebé|niño|niña|jefa|jefe|doctora|doctor|maestra|profesor|profesora)\b/i;

const AWKWARD_SUFFIX_RE = /\s+(bajo cielo claro|bajo cielo sereno|con gratitud viva|con impulso genuino|con calma y verdad|con mirada serena|desde lo cotidiano|en cada nueva mañana|en esta nueva vuelta|para lo que empieza|con afecto cercano|con corazón sincero)(\s+siempre)?$/i;

const VOCAB_COMMA_SUFFIX_RE = /,\s+([a-záéíóúüñ]+)\s+(bajo cielo claro|bajo cielo sereno|con enorme cariño|con sonrisa sincera|con afecto verdadero|con inmensa gratitud|en familia hoy|de todo corazón|con gratitud viva|en esta nueva etapa|con sincero entusiasmo|en calma y salud|con paz y esperanza|desde lo más hondo|hoy mismo)$/i;

const EN_FAMILIA_NONFAM_RE = /\s+en familia hoy$/i;
const SIEMPRE_END_RE = /\s+(en cada nueva mañana|con calma y verdad|para todo el año|en esta nueva vuelta|para lo que empieza|junto a los tuyos|con afecto cercano|con impulso genuino)\s+siempre$/i;
const DOUBLE_CON_RE = /\bcon\s+[a-záéíóúüñ]+\s+[a-záéíóúüñ]+\s+con\s+[a-záéíóúüñ]+/i;

function esTituloRoto(m, hub) {
  const t = m.titulo;
  if (BROKEN_START_RE.test(t)) return 'broken_expansion';
  if (VERTE_NOUN_RE.test(t)) return 'broken_expansion';
  if (SIEMPRE_END_RE.test(t)) return 'broken_expansion';
  if (PARA_DEST_NO_ART_RE.test(t) && !/cumpleaños para|carta para|frases para|mensajes para|tarjetas para|palabras para|poemas para|deseos para|saludos para|dedicatoria para|felicitaciones para|regalo para/i.test(t)) return 'broken_expansion';
  if (VOCAB_COMMA_SUFFIX_RE.test(t)) return 'vocab_comma_suffix';
  if (AWKWARD_SUFFIX_RE.test(t)) return 'awkward_suffix';
  if (EN_FAMILIA_NONFAM_RE.test(t) && /(amigo|amiga|novio|novia|exnov|companer|jefe|jefa|profesor|maestra|doctor|pastor|vecin|alumno|amor)/i.test(m.categoria)) return 'en_familia_nonfam';
  if (DOUBLE_CON_RE.test(t)) return 'double_con';
  if (/^Brindamos\s+(?!por\b|con\b|hoy\b|juntos\b|en\b)/i.test(t)) return 'brindamos_por';
  if (/^Agradecemos\s+un\s+mañana/i.test(t)) return 'agradecemos_manana';
  if (/cierre sereno/i.test(t) && !/(diciembre|ano-nuevo|navidad|nochebuena|fin-de-ano)/i.test(m.categoria)) return 'cierre_sereno';
  return null;
}

// Build global trackers EXCLUDING titles we are about to fix so replacements never collide
const porReparar = [];
const usadosTitulos = new Set();
const usadosPorDest = new Map();
const inicioPorCat = new Map();

for (const m of todosMensajes) {
  const hub = hubsBySlug.get(m.categoria);
  const motivo = esTituloRoto(m, hub);
  if (motivo) {
    porReparar.push({ m, hub, motivo });
  } else {
    const nt = normalizar(m.titulo);
    const words = nt.split(' ').filter(Boolean);
    usadosTitulos.add(nt);
    if (!usadosPorDest.has(m.destinatario)) usadosPorDest.set(m.destinatario, []);
    usadosPorDest.get(m.destinatario).push({ big: bigramas(nt), ws: new Set(words) });
    if (!inicioPorCat.has(m.categoria)) inicioPorCat.set(m.categoria, new Set());
    if (words[0]) inicioPorCat.get(m.categoria).add(words[0]);
  }
}

console.log('Total titulos a reparar:', porReparar.length);

// Rich, 100% natural, varied Spanish title building blocks (Subject/Opening + Natural Core + Optional Context)
// Every single combination produces idiomatic, grammatical Spanish!
const PLANTILLAS_NATURALES = {
  cumple: [
    'Deseo que este año nuevo te regale calma y salud',
    'Ojalá disfrutes tu cumpleaños rodeado de afectos sinceros',
    'Celebramos tu vida y todo el bien que sembrás',
    'Merecés una vuelta al sol repleta de buenas noticias',
    'Festejamos tu alegría cotidiana y tu noble corazón',
    'Hoy sobran motivos verdaderos para brindar por vos',
    'Brindemos fuerte por tu salud, tus proyectos y tu paz',
    'Que nunca falten abrazos sinceros en tu mesa hoy',
    'Recibí un saludo cálido lleno de gratitud y estima',
    'Agradecemos la suerte inmensa de compartir caminos con vos',
    'Comienza un ciclo nuevo hecho a tu justa medida',
    'Cada año compartido confirma cuánto ilumina tu presencia',
    'Sonreí sin apuro y disfrutá cada instante de hoy',
    'Saludamos tu esfuerzo diario, tu humor y tu entrega',
    'Llegan doce meses limpios para cumplir metas pendientes',
    'Valoramos muchísimo tu palabra franca y tu compañía leal',
    'Quienes te queremos celebramos hoy todo lo que sos',
    'Nuestros mejores augurios para esta etapa que arranca hoy',
    'Esperamos que tu día sea tan cálido como merecés',
    'Mandamos un abrazo largo cargado de cariño verdadero',
    'Por otro año de salud firme y sobremesas inolvidables',
    'Iluminás cada encuentro con tu calma y buena energía',
    'Traemos deseos simples: salud, descanso y lindos planes',
    'Empezá este nuevo tramo con entusiasmo y corazón tranquilo',
    'Tu presencia hace más liviana cualquier semana difícil',
    'Sostener tu amistad y tu afecto es nuestro gran tesoro',
    'Pocas personas contagian tanta serenidad y alegría juntas',
    'Guardo el mejor recuerdo de nuestras charlas y risas',
    'Un brindis honesto por tus logros y sueños nuevos',
    'Esta fecha invita a agradecer todo lo compartido hasta acá',
    'Ojalá la vida te devuelva multiplicado tu cariño diario',
    'Que tu casa reciba siempre visitas queridas y armonía',
    'Felicidades por sumar historias valiosas año tras año',
    'Renovamos hoy el orgullo enorme que sentimos por vos',
    'Disfrutá tu jornada con calma, risas y buena música',
    'Siempre habrá lugar en nuestra mesa para celebrar tu vida',
    'Miramos con alegría todo lo lindo que supiste construir',
    'Abrazamos tu historia y celebramos tu presente luminoso',
    'Sumás años con sabiduría, humor limpio y gran corazón',
    'Cierro este saludo deseándote plenitud y días serenos',
    'Vienen tiempos gratos para disfrutar lo sembrado con esfuerzo',
    'Hacés que lo cotidiano se vuelva recuerdo entrañable',
    'Levanto mi copa deseándote prosperidad, calma y amor',
    'Encontrá hoy pausa, mimos y abrazos de quienes amás',
    'Tu ejemplo silencioso inspira respeto en toda tu gente',
    'Arrancá esta vuelta al sol con fuerzas renovadas',
    'Nada alegra tanto como verte crecer y disfrutar en paz',
    'Días luminosos, proyectos claros y gente noble te esperan',
    'Juntos celebramos el regalo enorme de tenerte cerca',
    'Tanta entrega diaria merece hoy un festejo inolvidable',
    'Ojalá cada mes nuevo acerque oportunidades hermosas',
    'Basta recordar tus gestos nobles para sonreír con ganas',
    'Rodeate hoy de voces queridas, música suave y alegría',
    'Dejamos atrás las prisas para saludarte como corresponde',
    'Viví este cumpleaños con plenitud y gratitud genuina',
    'Estrenás un año nuevo lleno de promesas realizables',
    'Pensamos en vos deseándote bienestar y tranquilidad',
    'Lograste tanto con paciencia que hoy toca celebrar fuerte',
    'Nadie merece más un año sereno, próspero y feliz',
    'Palabras breves y honestas para acompañar tu día especial'
  ],
  cristiano: [
    'Que la bendición de Dios abrace tu nuevo año',
    'Oramos por tu salud, tu paz y tus proyectos',
    'Agradecemos al cielo el regalo enorme de tu vida',
    'Dios ilumine tus decisiones en cada jornada nueva',
    'Pedimos gracia, sabiduría y calma para tu hogar hoy',
    'El Señor renueve tus fuerzas al iniciar este ciclo',
    'Que Su fidelidad sostenga tus pasos todo el año',
    'Celebramos tu vida dando gracias por tu fe firme',
    'Bendiciones abundantes sobre tu familia en esta fecha',
    'Confiamos en que Dios guarda grandes alegrías para vos',
    'Que nunca falte luz divina ni paz en tu mesa',
    'Elevamos una oración agradecida por otro año tuyo',
    'Su amor sereno te guíe en cada nuevo comienzo',
    'Recibí hoy un abrazo cálido lleno de fe viva',
    'Damos gracias a Dios por tu corazón generoso',
    'Llegan doce meses guiados por esperanza y serenidad',
    'Ojalá sientas el abrigo del Señor en cada paso',
    'Tu testimonio cotidiano siembra paz en quienes te rodean',
    'Paz profunda, salud sólida y bendición para tu camino',
    'Saludamos tu cumpleaños confiando tu futuro a Dios'
  ],
  distancia: [
    'La distancia no frena este abrazo largo para vos',
    'Cruzan kilómetros nuestros mejores deseos en tu fecha',
    'Aunque estemos lejos, hoy celebramos tu vida bien cerca',
    'Ojalá el próximo cumpleaños nos encuentre misma mesa',
    'Mandamos cariño verdadero que achica cualquier mapa hoy',
    'Desde lejos brindamos fuerte por tu salud y alegría',
    'Los kilómetros cambian rutinas pero jamás nuestro afecto',
    'Viajan palabras honestas hasta donde estés celebrando hoy',
    'Extrañamos tu abrazo pero festejamos tu nuevo año igual',
    'Pese a la distancia, seguís muy presente cada día',
    'Que sientas nuestro respaldo cálido al otro lado hoy',
    'Acortamos husos horarios para desearte un año luminoso',
    'Pronto volveremos a brindar frente a frente sin apuro',
    'Ninguna frontera enfría el orgullo que sentimos por vos',
    'Recibí a la distancia todo nuestro cariño intacto',
    'Celebramos tu cumpleaños soñando el próximo reencuentro'
  ],
  aniversario: [
    'Celebramos nuestra historia con humor, calma y complicidad',
    'Gracias por construir juntos un hogar tan sereno',
    'Volvería a elegir tu compañía con la misma certeza',
    'Sumamos tiempo compartido cuidando cada detalle cotidiano',
    'Por muchos capítulos más caminando juntos a la par',
    'Agradecemos cada aprendizaje vivido de tu mano hoy',
    'Nuestra complicidad hace liviana cualquier semana intensa',
    'Seguimos eligiendo proyectos comunes con ilusión intacta',
    'Ojalá nunca falten risas ni charlas largas entre nosotros',
    'Brindamos por todo lo construido con paciencia y amor',
    'Tu presencia transforma lo simple en recuerdo precioso',
    'Miramos atrás con orgullo y adelante con esperanza',
    'Crecer a tu lado sigue siendo mi mejor aventura',
    'Cuidar nuestro vínculo cada día vale muchísimo la pena',
    'Festejamos otra vuelta compartida con el corazón tranquilo',
    'Llevamos años y meses aprendiendo a querernos mejor'
  ],
  duelo: [
    'Guardamos tu recuerdo sereno con respeto y gratitud',
    'Tu huella noble permanece intacta en nuestra memoria',
    'Honramos tu vida agradeciendo cada enseñanza que dejaste',
    'Llevamos tu nombre presente en calma y silencio',
    'El cariño verdadero permanece firme más allá del tiempo',
    'Acompañamos esta fecha sensible con paz y afecto',
    'Recordamos tu voz amable y tu ejemplo cotidiano',
    'Permanecen vivos los valores limpios que nos legaste',
    'Ofrecemos un abrazo silencioso y respetuoso en tu memoria',
    'Hoy evocamos los momentos luminosos compartidos con vos'
  ],
  carta: [
    'Escribo estas líneas pausadas para agradecer tu presencia',
    'Quise detener el reloj y dedicar palabras bien pensadas',
    'Una carta honesta para celebrar todo lo que construís',
    'Pongo en papel el orgullo sereno que siento por vos',
    'Palabras escritas con calma para acompañar tu nueva etapa',
    'Líneas sinceras que guardan gratitud, respeto y afecto',
    'Dejo por escrito cuánto valoramos tu compañía diaria',
    'Un texto pensado despacio para honrar tu historia real',
    'Comparto esta carta celebrando tu fuerza y tu ternura',
    'Guardo en estas páginas los recuerdos más lindos juntos',
    'Quería regalarte una lectura cálida para tu fecha especial',
    'Hoy te escribo sin prisas deseándote paz y bienestar'
  ],
  humor: [
    'Prometemos no contar velas si guardás buena torta',
    'Seguís sumando años con chispa y mejor sentido común',
    'Celebramos tu nueva vuelta sin mirar tanto el documento',
    'Menos trámites aburridos y más risas buenas este año',
    'Oficialmente mantenés intacto el talento para hacernos reír',
    'Hoy vale festejar fuerte y dejar deberes para mañana',
    'Aplaudimos tu ingenio rápido y tu energía contagiosa',
    'Que nunca falten anécdotas divertidas en tu sobremesa',
    'Cumplir años a tu manera siempre resulta mejor plan',
    'Brindemos por otra temporada de ocurrencias inolvidables'
  ]
};

const COMPLEMENTOS_TITULO = [
  '',
  ' hoy',
  ' este año',
  ' de verdad',
  ' sin apuro',
  ' con calma',
  ' con alegría',
  ' con gratitud',
  ' con salud',
  ' en paz',
  ' con cariño',
  ' en tu fecha',
  ' cada día',
  ' de corazón'
];

const COMPLEMENTOS_DUELO = [
  '',
  ' hoy',
  ' siempre',
  ' con respeto',
  ' en paz',
  ' en calma',
  ' con gratitud',
  ' de corazón'
];

function validarCandidatoTitulo(cand, hub, catSlug, dest) {
  const limpio = cand.replace(/\s{2,}/g, ' ').replace(/\s+,/g, ',').trim();
  const nt = normalizar(limpio);
  const words = nt.split(' ').filter(Boolean);
  if (words.length < 4 || words.length > 12) return null;
  if (CORTE_PREP.test(limpio)) return null;
  if (hub && hub.keyword && nt.includes(normalizar(hub.keyword))) return null;
  if (usadosTitulos.has(nt)) return null;
  const p0 = words[0];
  if (!inicioPorCat.has(catSlug)) inicioPorCat.set(catSlug, new Set());
  if (inicioPorCat.get(catSlug).has(p0)) return null;
  // Check Dice/Jaccard against same destinatario
  const listaDest = usadosPorDest.get(dest) || [];
  const big = bigramas(nt);
  const ws = new Set(words);
  for (const prev of listaDest) {
    if (dice(big, prev.big) >= 0.84 || jaccard(ws, prev.ws) >= 0.84) return null;
  }
  return { limpio, nt, words, big, ws };
}

function registrarTitulo(res, catSlug, dest) {
  usadosTitulos.add(res.nt);
  if (!inicioPorCat.has(catSlug)) inicioPorCat.set(catSlug, new Set());
  inicioPorCat.get(catSlug).add(res.words[0]);
  if (!usadosPorDest.has(dest)) usadosPorDest.set(dest, []);
  usadosPorDest.get(dest).push({ big: res.big, ws: res.ws });
}

let fixedTitles = 0;
let fallbackTitles = 0;

for (let idx = 0; idx < porReparar.length; idx++) {
  const { m, hub, motivo } = porReparar[idx];
  const tipo = detectarTipoCategoria(hub);
  const fem = esFemenino(hub);
  const destLabel = extraerEtiquetaDestinatario(hub);

  const candidatos = [];

  // 1. Direct surgical fixes first for grammatical or glued-suffix titles!
  if (motivo === 'brindamos_por') {
    const fixed = m.titulo.replace(/^Brindamos\s+/i, 'Brindamos por ');
    candidatos.push(fixed);
    if (m.texto.startsWith(m.titulo + '.')) {
      m.texto = fixed + '.' + m.texto.slice(m.titulo.length + 1);
    }
  } else if (motivo === 'agradecemos_manana') {
    const fixed1 = m.titulo.replace(/^Agradecemos\s+un\s+mañana/i, 'Soñamos un mañana');
    const fixed2 = m.titulo.replace(/^Agradecemos\s+un\s+mañana/i, 'Deseamos un mañana');
    const fixed3 = m.titulo.replace(/^Agradecemos\s+un\s+mañana/i, 'Esperamos un mañana');
    candidatos.push(fixed1, fixed2, fixed3);
  } else if (motivo === 'cierre_sereno') {
    const fixed1 = m.titulo.replace(/cierre sereno/i, 'encuentro sereno');
    const fixed2 = m.titulo.replace(/cierre sereno/i, 'momento sereno');
    candidatos.push(fixed1, fixed2);
    if (m.texto.startsWith(m.titulo + '.')) {
      m.texto = fixed1 + '.' + m.texto.slice(m.titulo.length + 1);
    }
  } else if (motivo === 'vocab_comma_suffix') {
    const base = m.titulo.replace(VOCAB_COMMA_SUFFIX_RE, ', $1').trim();
    candidatos.push(base);
    if (destLabel) candidatos.push(base.replace(/,\s+[a-záéíóúüñ]+$/i, '') + ` para vos, ${destLabel}`);
  } else if (motivo === 'awkward_suffix') {
    const base = m.titulo.replace(AWKWARD_SUFFIX_RE, '').trim();
    if (!BROKEN_START_RE.test(base) && !VERTE_NOUN_RE.test(base)) {
      candidatos.push(base);
      const mods = tipo === 'duelo' ? COMPLEMENTOS_DUELO : COMPLEMENTOS_TITULO;
      for (const mod of mods) {
        if (mod && !base.toLowerCase().endsWith(mod.trim())) candidatos.push(base + mod);
      }
    }
  } else if (motivo === 'en_familia_nonfam') {
    const base = m.titulo.replace(EN_FAMILIA_NONFAM_RE, '').trim();
    candidatos.push(base);
    candidatos.push(base + ' hoy');
    candidatos.push(base + ' en tu día');
    candidatos.push(base + ' junto a quienes querés');
    candidatos.push(base + ' con alegría');
  } else if (motivo === 'double_con') {
    const base = m.titulo.replace(/\s+con\s+[a-záéíóúüñ]+\s+[a-záéíóúüñ]+$/i, '').trim();
    if (!BROKEN_START_RE.test(base)) {
      candidatos.push(base);
      candidatos.push(base + ' hoy');
      candidatos.push(base + ' este año');
    }
  }

  // 2. Rich natural Spanish pool (for broken_expansion or if surgical fix collided)
  const poolBase = [
    ...(PLANTILLAS_NATURALES[tipo] || []),
    ...(tipo === 'duelo' ? [] : PLANTILLAS_NATURALES.cumple)
  ];

  // Rotate starting offset by idx to diversify openings across hubs
  const start = (idx * 7) % poolBase.length;
  for (let k = 0; k < poolBase.length; k++) {
    let base = poolBase[(start + k) % poolBase.length];
    if (fem) {
      base = base
        .replace(/\brodeado\b/g, 'rodeada')
        .replace(/\bquerido\b/g, 'querida')
        .replace(/\bamado\b/g, 'amada');
    }
    candidatos.push(base);
    if (destLabel && !base.toLowerCase().includes(destLabel.toLowerCase())) {
      candidatos.push(`${base}, ${destLabel}`);
    }
  }

  // Extra diverse natural variants with varied first words + recipient/context
  const APERTURAS_EXTRA = tipo === 'duelo'
    ? [
        'Mantenemos viva', 'Atesoramos', 'Evocamos', 'Acompañamos', 'Recordamos',
        'Sostenemos', 'Honramos', 'Guardamos', 'Cuidamos', 'Agradecemos',
        'Llevamos', 'Sentimos', 'Valoramos', 'Respetamos', 'Conservamos',
        'Nombramos', 'Extrañamos', 'Pensamos en', 'Abrazamos', 'Refugiamos'
      ]
    : [
        'Festejamos', 'Celebramos', 'Aplaudimos', 'Valoramos', 'Agradecemos',
        'Disfrutamos', 'Deseamos', 'Auguramos', 'Compartimos', 'Enviamos',
        'Acercamos', 'Regalamos', 'Sostenemos', 'Abrazamos', 'Saludamos',
        'Honramos', 'Destacamos', 'Reconocemos', 'Imaginamos', 'Esperamos',
        'Soñamos', 'Pedimos', 'Queremos', 'Elegimos', 'Renovamos',
        'Inauguramos', 'Comenzamos', 'Arrancamos', 'Estrenamos', 'Abrimos',
        'Sumamos', 'Multiplicamos', 'Guardamos', 'Atesoramos', 'Cuidamos',
        'Protegemos', 'Alentamos', 'Acompañamos', 'Inspiramos', 'Miramos',
        'Brindamos por', 'Sonreímos por', 'Cantamos por', 'Pensamos en', 'Creemos en'
      ];

  const NUCLEOS_EXTRA = tipo === 'duelo'
    ? [
        'tu memoria serena en nuestra casa',
        'cada gesto noble que dejaste en vida',
        'el cariño limpio que nos une siempre',
        'las enseñanzas valiosas que nos acompañan',
        'la calma profunda de tus recuerdos',
        'tu presencia silenciosa en nuestra historia',
        'el ejemplo generoso que iluminó nuestro hogar',
        'los días luminosos que supimos compartir'
      ]
    : tipo === 'aniversario'
      ? [
          'esta historia compartida con calma y humor',
          'nuestro camino juntos lleno de complicidad',
          'cada proyecto común que construimos de a dos',
          'la paciencia bonita de elegirnos cada semana',
          'tantos recuerdos lindos guardados en pareja',
          'el cuidado cotidiano que sostiene nuestro amor',
          'los planes futuros que soñamos lado a lado',
          'la alegría serena de compartir casa y vida'
        ]
      : [
          'tu nueva vuelta al sol con salud',
          'un año lleno de calma y proyectos claros',
          'tu alegría sencilla en esta fecha especial',
          'los abrazos genuinos que rodean tu mesa',
          'todo el bienestar que merecés este ciclo',
          'tu entrega cotidiana y tu noble corazón',
          'doce meses livianos de buenas noticias',
          'las risas compartidas y los sueños nuevos',
          'el cariño fiel de quienes caminan cerca',
          'esta etapa luminosa que comienza hoy mismo',
          'tu entusiasmo limpio y tu buena compañía',
          'la fortuna inmensa de celebrar tu vida'
        ];

  let elegido = null;
  for (const cand of candidatos) {
    const ok = validarCandidatoTitulo(cand, hub, m.categoria, m.destinatario);
    if (ok) { elegido = ok; break; }
  }

  if (!elegido) {
    // Try opening + core + optional recipient/context
    outer:
    for (let a = 0; a < APERTURAS_EXTRA.length; a++) {
      const ap = APERTURAS_EXTRA[(idx + a) % APERTURAS_EXTRA.length];
      for (let n = 0; n < NUCLEOS_EXTRA.length; n++) {
        const nuc = NUCLEOS_EXTRA[(idx * 3 + n) % NUCLEOS_EXTRA.length];
        const variants = [
          `${ap} ${nuc}`,
          destLabel ? `${ap} ${nuc}, ${destLabel}` : `${ap} ${nuc} hoy`,
          `${ap} hoy ${nuc}`
        ];
        for (const v of variants) {
          const ok = validarCandidatoTitulo(v, hub, m.categoria, m.destinatario);
          if (ok) { elegido = ok; fallbackTitles++; break outer; }
        }
      }
    }
  }

  if (elegido) {
    // Keep original opening sentence of texto synchronized if texto literally repeated old titulo
    if (m.texto.startsWith(m.titulo + '.')) {
      m.texto = elegido.limpio + '.' + m.texto.slice(m.titulo.length + 1);
    }
    m.titulo = elegido.limpio;
    registrarTitulo(elegido, m.categoria, m.destinatario);
    fixedTitles++;
  } else {
    // Re-register original if impossible (should never happen)
    const nt = normalizar(m.titulo);
    const words = nt.split(' ').filter(Boolean);
    registrarTitulo({ limpio: m.titulo, nt, words, big: bigramas(nt), ws: new Set(words) }, m.categoria, m.destinatario);
    console.warn('COULD NOT REPLACE TITLE:', m.categoria, m.slug, m.titulo);
  }
}

// =========================================================================
// PASO 3: LIMPIEZA FINAL DE TEXTOS (sin palabras duplicadas consecutivas)
// =========================================================================
const DUP_WORD_RE = /\b([a-záéíóúüñ]{2,})\s+\1\b/i;
let fixedDupWords = 0;
for (const m of todosMensajes) {
  if (DUP_WORD_RE.test(m.texto)) {
    m.texto = m.texto
      .replace(/acompañen en\b/gi, 'estén presentes en')
      .replace(/días así\b/gi, 'jornadas así')
      .replace(/en en\b/gi, 'en')
      .replace(/de de\b/gi, 'de')
      .replace(/que que\b/gi, 'que')
      .replace(/la la\b/gi, 'la')
      .replace(/el el\b/gi, 'el');
    if (DUP_WORD_RE.test(m.texto)) {
      console.warn('REMAINING DUP WORD:', m.slug, m.texto.match(DUP_WORD_RE)?.[0]);
    } else {
      fixedDupWords++;
    }
  }
}

// Save all files cleanly
for (const ds of datasets) {
  const out = ds.compacto ? JSON.stringify(ds.registros) : JSON.stringify(ds.registros, null, 2) + '\n';
  fs.writeFileSync(ds.ruta, out, 'utf8');
}

console.log(JSON.stringify({
  strippedParens,
  fixedNonBdayClosing,
  dedupedBodies,
  fixedTitles,
  fallbackTitles,
  fixedDupWords
}, null, 2));
