// Generador determinista de las 25 nuevas categorias (1000 publicaciones unicas):
// - 21 categorias completas de aniversarios y meses de novios (2..11 meses, 1..10 anos, +10 anos personalizable)
// - 3 categorias de nostalgia, recuerdos y momentos tristes (grupo duelo_recuerdos)
// - 1 categoria de banderines de cumpleanos para imprimir (Bing Clicks / AI)
// Tambien migra condolencias + 5 hubs de duelo existentes al grupo duelo_recuerdos.

import fs from 'node:fs';
import path from 'node:path';

const FECHA_HOY = '2026-11-20';

function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function normalizar(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[áàä]/g, 'a')
    .replace(/[éèë]/g, 'e')
    .replace(/[íìï]/g, 'i')
    .replace(/[óòö]/g, 'o')
    .replace(/[úùü]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cargarSlugsYTitulosExistentes() {
  const slugs = new Set();
  const titulosNorm = new Set();
  const textosNorm = new Set();
  const files = ['data/contenido.json'];
  const dir = 'data/categorias';
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
    if (['g14-aniversarios-completo.json', 'g15-recuerdos-nostalgia.json', 'g16-banderines.json'].includes(f)) continue;
    files.push(path.join(dir, f));
  }
  for (const f of files) {
    const arr = JSON.parse(fs.readFileSync(f, 'utf8'));
    for (const r of arr) {
      if (r.slug) slugs.add(r.slug);
      if (r.tipo === 'mensaje') {
        titulosNorm.add(normalizar(r.titulo));
        textosNorm.add(String(r.texto || '').normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('es'));
      }
    }
  }
  return { slugs, titulosNorm, textosNorm };
}

// 40 palabras iniciales distintas para garantizar R3 en cada categoria (sin repetir primera palabra)
const APERTURAS_40 = [
  'Hoy', 'Gracias', 'Cada', 'Celebrar', 'Contigo', 'Mirar', 'Compartir', 'Elegirte',
  'Sumar', 'Cuando', 'Nuestra', 'Siempre', 'Juntos', 'Desde', 'Guardar', 'Caminar',
  'Tenerte', 'Brindemos', 'Querer', 'Volver', 'Agradecer', 'Seguir', 'Recordar', 'Pensar',
  'Sentir', 'Vivir', 'Abrazarte', 'Soñar', 'Construir', 'Valorar', 'Descubrir', 'Sostener',
  'Reír', 'Cuidar', 'Mantener', 'Honrar', 'Llevar', 'Escribirte', 'Despertar', 'Festejar'
];

// 40 palabras iniciales serenas (sin palabras festivas) para duelo_recuerdos
const APERTURAS_SERENAS_40 = [
  'Hoy', 'A veces', 'Recordar', 'Guardar', 'Cuando', 'Extrañar', 'Llevar', 'Volver',
  'Nombrar', 'Sentir', 'Caminar', 'Mirar', 'Escribir', 'Pensar', 'Abrazar', 'Sostener',
  'Escuchar', 'Respirar', 'Aceptar', 'Conservar', 'Evocar', 'Honrar', 'Buscar', 'Encontrar',
  'Dejar', 'Agradecer', 'Cuidar', 'Atesorar', 'Revivir', 'Reconocer', 'Permitir', 'Entender',
  'Descubrir', 'Mantener', 'Despertar', 'Contemplar', 'Sentarse', 'Transitar', 'Permanecer', 'Silenciar'
];

// 40 palabras iniciales para banderines
const APERTURAS_BANDERINES_40 = [
  'Colgá', 'Armá', 'Imprimí', 'Recortá', 'Combiná', 'Decorá', 'Elegí', 'Prepará',
  'Sumá', 'Personalizá', 'Creá', 'Diseñá', 'Guirnalda', 'Letras', 'Colores', 'Banderín',
  'Mesa', 'Fondo', 'Cartel', 'Paleta', 'Papel', 'Hilo', 'Cinta', 'Triángulos',
  'Estrellas', 'Detalles', 'Ideas', 'Frase', 'Nombre', 'Estilo', 'Sorpresa', 'Rincón',
  'Fiesta', 'Brillo', 'Toque', 'Tarde', 'Mañana', 'Abrazo', 'Recuerdo', 'Celebración'
];

const ESCENAS_PAREJA = [
  'nuestros mates sin apuro al caer la tarde',
  'las charlas largas en la cocina mientras cocinamos algo sencillo',
  'esa caminata improvisada que terminó siendo el mejor plan del fin de semana',
  'las risas cómplices cuando nadie más entiende nuestro chiste interno',
  'la tranquilidad de apoyarnos sin decir demasiadas palabras en días pesados',
  'los mensajes inesperados a mitad de la jornada que cambian el ánimo',
  'cada viaje chico o grande que planeamos con más entusiasmo que equipaje',
  'la costumbre de mirar series abrazados aunque alguno se duerma primero',
  'el café compartido temprano antes de que arranque el ruido del mundo',
  'la manera honesta en que resolvemos diferencias cuidando siempre el respeto',
  'las fotos espontáneas que guardamos para recordar de dónde venimos',
  'la calma que aparece apenas escucho tu voz al final de un día largo',
  'los proyectos sencillos que vamos cumpliendo paso a paso sin perder ternura',
  'las sobremesas que se estiran hasta tarde entre planes y anécdotas',
  'la paciencia cálida con la que me acompañás cuando dudo o me canso',
  'esos domingos de lluvia donde quedarse adentro es el mejor refugio',
  'cada abrazo largo que ordena la semana entera en diez segundos',
  'la complicidad real que hace liviano hasta el trámite más aburrido',
  'el orgullo sano de ver cómo crecemos sin dejar de ser equipo',
  'la memoria viva de aquel comienzo tímido que se volvió hogar cotidiano'
];

const CIERRES_PAREJA_TONO = [
  // 0: breve whatsapp
  (etiqueta) => `Te elijo otra vez en ${etiqueta} con la misma ilusión y todavía más paz.`,
  // 1: emotivo
  (etiqueta) => `Que ${etiqueta} sean apenas un capítulo luminoso de todo el cariño real que nos espera por delante.`,
  // 2: gratitud
  (etiqueta) => `Gracias por hacerme sentir en casa en cada gesto pequeño durante ${etiqueta}.`,
  // 3: recuerdo / nostalgia bonita
  (etiqueta) => `Al mirar las fotos del principio y vernos hoy en ${etiqueta}, me emociona recordar cuánto aprendimos juntos.`,
  // 4: reflexivo
  (etiqueta) => `El tiempo enseña que amar bien es cuidar lo simple; por eso valoro tanto la madurez que construimos en ${etiqueta}.`,
  // 5: humor calido
  (etiqueta) => `Después de ${etiqueta} seguimos riéndonos de las mismas tonterías y discutiendo qué pedir de cena: señal clarísima de equipo imbatible.`,
  // 6: fe y bendicion
  (etiqueta) => `Pido a Dios que bendiga nuestro camino en ${etiqueta} con salud, paciencia serena y alegría compartida.`,
  // 7: carta larga / profundo
  (etiqueta) => `No hace falta prometer perfecciones imposibles: me alcanza con seguir cuidándonos así, con respeto, escucha y ternura diaria, celebrando ${etiqueta} y cada paso que decidamos caminar mano a mano.`
];

const MESES_NOVIOS_META = [
  { n: 2, slug: 'felices-2-meses-de-novios', kw: 'felices 2 meses de novios', label: '2 meses de novios', frase: 'estos 2 meses de novios', etapa: 'las primeras costumbres lindas y la chispa del comienzo' },
  { n: 3, slug: 'felices-3-meses-de-novios', kw: 'felices 3 meses de novios', label: '3 meses de novios', frase: 'estos 3 meses de novios', etapa: 'el primer trimestre de confianza, salidas y complicidad' },
  { n: 4, slug: 'felices-4-meses-de-novios', kw: 'felices 4 meses de novios', label: '4 meses de novios', frase: 'estos 4 meses de novios', etapa: 'la soltura de conocernos mejor sin perder las mariposas' },
  { n: 5, slug: 'felices-5-meses-de-novios', kw: 'felices 5 meses de novios', label: '5 meses de novios', frase: 'estos 5 meses de novios', etapa: 'casi medio año de risas, planes y cuidado mutuo' },
  { n: 6, slug: 'felices-6-meses-de-novios', kw: 'felices 6 meses de novios', label: '6 meses de novios', frase: 'estos 6 meses de novios', etapa: 'medio año caminando juntos con afecto y proyectos reales' },
  { n: 7, slug: 'felices-7-meses-de-novios', kw: 'felices 7 meses de novios', label: '7 meses de novios', frase: 'estos 7 meses de novios', etapa: 'siete meses donde la confianza ya se volvió refugio diario' },
  { n: 8, slug: 'felices-8-meses-de-novios', kw: 'felices 8 meses de novios', label: '8 meses de novios', frase: 'estos 8 meses de novios', etapa: 'ocho meses de historias propias, apoyo y ternura cotidiana' },
  { n: 9, slug: 'felices-9-meses-de-novios', kw: 'felices 9 meses de novios', label: '9 meses de novios', frase: 'estos 9 meses de novios', etapa: 'nueve meses consolidando un vínculo sereno y sincero' },
  { n: 10, slug: 'felices-10-meses-de-novios', kw: 'felices 10 meses de novios', label: '10 meses de novios', frase: 'estos 10 meses de novios', etapa: 'diez meses compartiendo metas, charlas y calma' },
  { n: 11, slug: 'felices-11-meses-de-novios', kw: 'felices 11 meses de novios', label: '11 meses de novios', frase: 'estos 11 meses de novios', etapa: 'la antesala del primer año llena de gratitud e ilusión' }
];

const ANOS_NOVIOS_META = [
  { n: 1, slug: 'feliz-1-ano-de-novios', kw: 'feliz 1 año de novios', label: '1 año de novios', frase: 'este 1 año de novios', etapa: 'nuestro primer aniversario completo lleno de descubrimientos' },
  { n: 2, slug: 'felices-2-anos-de-novios', kw: 'felices 2 años de novios', label: '2 años de novios', frase: 'estos 2 años de novios', etapa: 'dos años de equipo real, calma y planes compartidos' },
  { n: 3, slug: 'felices-3-anos-de-novios', kw: 'felices 3 años de novios', label: '3 años de novios', frase: 'estos 3 años de novios', etapa: 'tres años de historia firme, risas y aprendizaje mutuo' },
  { n: 4, slug: 'felices-4-anos-de-novios', kw: 'felices 4 años de novios', label: '4 años de novios', frase: 'estos 4 años de novios', etapa: 'cuatro años eligiendo cuidar lo cotidiano con amor' },
  { n: 5, slug: 'felices-5-anos-de-novios', kw: 'felices 5 años de novios', label: '5 años de novios', frase: 'estos 5 años de novios', etapa: 'media década de compañerismo, viajes y confianza plena' },
  { n: 6, slug: 'felices-6-anos-de-novios', kw: 'felices 6 años de novios', label: '6 años de novios', frase: 'estos 6 años de novios', etapa: 'seis años creciendo a la par con respeto y ternura' },
  { n: 7, slug: 'felices-7-anos-de-novios', kw: 'felices 7 años de novios', label: '7 años de novios', frase: 'estos 7 años de novios', etapa: 'siete años demostrando que el amor maduro se construye cada día' },
  { n: 8, slug: 'felices-8-anos-de-novios', kw: 'felices 8 años de novios', label: '8 años de novios', frase: 'estos 8 años de novios', etapa: 'ocho años de complicidad, hogar emocional y proyectos' },
  { n: 9, slug: 'felices-9-anos-de-novios', kw: 'felices 9 años de novios', label: '9 años de novios', frase: 'estos 9 años de novios', etapa: 'nueve años de vida compartida rumbo a la primera década' },
  { n: 10, slug: 'felices-10-anos-de-novios', kw: 'felices 10 años de novios', label: '10 años de novios', frase: 'estos 10 años de novios', etapa: 'una década entera eligiéndonos con historia, risa y paz' }
];

function generarHubAniversario(meta, esPersonalizable, existentes) {
  const registros = [];
  const emoji = esPersonalizable ? '💞' : meta.slug.includes('meses') ? '💑' : '💍';
  const tituloHub = esPersonalizable
    ? 'Más de 10 años de novios - 40 Frases Personalizables'
    : `${meta.kw.charAt(0).toUpperCase() + meta.kw.slice(1)} - 40 Frases`;
  const h1Hub = esPersonalizable
    ? 'Más de 10 años de novios: dedicatorias personalizables 💞'
    : `${meta.kw.charAt(0).toUpperCase() + meta.kw.slice(1)} ${emoji}`;
  const metaDesc = esPersonalizable
    ? 'Más de 10 años de novios: elegí la cantidad exacta de años (11, 15, 20, 25 o más) y adaptá al instante 40 frases y cartas únicas de aniversario.'
    : `${meta.kw.charAt(0).toUpperCase() + meta.kw.slice(1)}: 40 frases, mensajes cortos de WhatsApp y cartas románticas para celebrar ${meta.label} con nombre y tarjeta PNG.`;

  const hub = {
    tipo: 'hub',
    slug: meta.slug,
    destinatario: esPersonalizable ? 'pareja larga' : meta.label,
    cabecera: esPersonalizable ? 'más de 10 años' : meta.slug.includes('meses') ? `felices ${meta.n} meses` : meta.n === 1 ? 'feliz 1 año' : `felices ${meta.n} años`,
    modificador: 'de novios',
    grupo: 'aniversarios',
    keyword: meta.kw,
    titulo: tituloHub,
    h1: h1Hub,
    meta: metaDesc,
    emoji,
    lead: esPersonalizable
      ? `Celebrar más de 10 años de novios o de pareja merece palabras a la altura de una historia larga y verdadera. Acá podés elegir la cantidad exacta de años que cumplen —11, 12, 15, 18, 20, 25 o el número que quieras— para que las 40 publicaciones se adapten automáticamente a su aniversario.\n\nAdemás de ajustar los años en vivo, podés sumar el apodo de tu pareja, tu firma y filtrar por tono (breves para WhatsApp, emotivos, nostalgia y recuerdos, humor o cartas largas) antes de copiar o bajar la tarjeta PNG.`
      : `¿Buscás palabras auténticas para celebrar ${meta.label} que suenen a ustedes y no a frase repetida? Reunimos 40 textos inéditos pensados específicamente para ${meta.etapa}, abarcando saludos breves para WhatsApp, recuerdos compartidos, humor cómplice y cartas extensas.\n\nUsá el personalizador superior para sumar el nombre de tu pareja y tu firma en segundos, filtrar según el tono que mejor encaje y compartir por chat o en tarjeta visual descargable.`,
    creado: FECHA_HOY,
    actualizado: FECHA_HOY,
    seoTitulo: esPersonalizable
      ? 'Cómo dedicar un aniversario de más de 10 años de novios con historia real'
      : `Cómo elegir y adaptar tu mensaje por ${meta.label}`,
    seoTexto: esPersonalizable
      ? `Cuando una pareja supera los 10 años juntos, los clichés genéricos quedan chicos: lo que emociona de verdad es reconocer las etapas atravesadas, los aprendizajes cotidianos y la decisión serena de seguir eligiéndose año tras año.\n\nCon nuestro selector superior podés indicar la cifra exacta de su aniversario (por ejemplo 12, 14, 18 o 25 años) y ver cómo cada dedicatoria, el botón de copiar, el enlace de WhatsApp y la tarjeta PNG reflejan automáticamente ese número sin errores.\n\nElegí textos cortos si querés sorprender temprano en el celular, opciones reflexivas o de nostalgia si van a repasar fotos de sus inicios, o cartas largas para entregar impresas junto a una cena tranquila.`
      : `Al celebrar ${meta.label}, el mejor recurso para que la dedicatoria conmueva es anclar el mensaje en un recuerdo real de ${meta.etapa}: una charla larga, un viaje chico o una costumbre nueva que nació entre ustedes.\n\nEn esta colección sobre ${meta.kw} combinamos textos breves listos para enviar al despertar por WhatsApp, mensajes reflexivos, dedicatorias con humor cálido, opciones con fe y cartas largas para acompañar una foto o sorpresa.\n\nTodas las publicaciones hablan exclusivamente de su vínculo de pareja y su tiempo compartido, listas para personalizar con nombre, posdata, firma y descarga inmediata en formato cuadrado o Story.`
  };

  if (hub.titulo.length > 60) throw new Error(`Titulo hub > 60: ${hub.slug} (${hub.titulo.length})`);
  if (hub.meta.length < 120 || hub.meta.length > 165) throw new Error(`Meta hub fuera de rango: ${hub.slug} (${hub.meta.length})`);

  registros.push(hub);

  const etiquetaTexto = esPersonalizable ? '12 años de novios' : meta.frase;
  const etiquetaCorta = esPersonalizable ? '12 años juntos' : meta.label;
  const subtemas = [
    'la calma de elegirnos todos los días',
    'el cariño sencillo que sostiene nuestra rutina',
    'la complicidad que vuelve especial cualquier tarde',
    'el orgullo de todo lo que construimos a la par',
    'la ternura genuina detrás de cada gesto diario',
    'la alegría de mirar atrás y sonreír por lo vivido',
    'el respeto sereno con el que cuidamos este amor',
    'la ilusión limpia por los proyectos que vienen'
  ];

  const PLANTILLAS_TITULO_ANIV = [
    (ap, et) => `${ap} celebramos ${et} con abrazo largo y paz`,
    (ap, et) => `${ap} por elegirnos durante ${et} sin soltarnos`,
    (ap, et) => `${ap} mañana de café celebrando ${et}`,
    (ap, et) => `${ap} nuestra historia sencilla en ${et}`,
    (ap, et) => `${ap} todo brilla mejor tras ${et}`,
    (ap, et) => `${ap} hacia atrás al cumplir ${et}`,
    (ap, et) => `${ap} mates y risas por ${et}`,
    (ap, et) => `${ap} otra vez al llegar a ${et}`,
    (ap, et) => `${ap} proyectos nuevos en ${et}`,
    (ap, et) => `${ap} el cariño madura en ${et}`,
    (ap, et) => `${ap} casa emocional después de ${et}`,
    (ap, et) => `${ap} cómplices y equipo en ${et}`,
    (ap, et) => `${ap} en calma al festejar ${et}`,
    (ap, et) => `${ap} aquel primer día hasta ${et}`,
    (ap, et) => `${ap} fotos y anécdotas de ${et}`,
    (ap, et) => `${ap} de la mano cumpliendo ${et}`,
    (ap, et) => `${ap} cerca hace mágicos ${et}`,
    (ap, et) => `${ap} por el amor real de ${et}`,
    (ap, et) => `${ap} lo cotidiano en ${et}`,
    (ap, et) => `${ap} al inicio recordando ${et}`,
    (ap, et) => `${ap} tu paciencia fiel en ${et}`,
    (ap, et) => `${ap} sumando viajes tras ${et}`,
    (ap, et) => `${ap} las charlas largas de ${et}`,
    (ap, et) => `${ap} en nuestro futuro tras ${et}`,
    (ap, et) => `${ap} tu ternura diaria en ${et}`,
    (ap, et) => `${ap} sin apuro celebrando ${et}`,
    (ap, et) => `${ap} fuerte al llegar a ${et}`,
    (ap, et) => `${ap} metas compartidas por ${et}`,
    (ap, et) => `${ap} hogar paso a paso en ${et}`,
    (ap, et) => `${ap} lo simple vivido en ${et}`,
    (ap, et) => `${ap} motivos para sonreír en ${et}`,
    (ap, et) => `${ap} nuestro refugio durante ${et}`,
    (ap, et) => `${ap} con chistes internos tras ${et}`,
    (ap, et) => `${ap} cada detalle pequeño en ${et}`,
    (ap, et) => `${ap} viva la ilusión en ${et}`,
    (ap, et) => `${ap} la lealtad sincera de ${et}`,
    (ap, et) => `${ap} tu sonrisa grabada en ${et}`,
    (ap, et) => `${ap} una carta honesta por ${et}`,
    (ap, et) => `${ap} con gratitud al cumplir ${et}`,
    (ap, et) => `${ap} nuestro vínculo fiel en ${et}`
  ];

  for (let i = 0; i < 40; i++) {
    const apertura = APERTURAS_40[i];
    const escena = ESCENAS_PAREJA[i % ESCENAS_PAREJA.length];
    const escena2 = ESCENAS_PAREJA[(i + 7) % ESCENAS_PAREJA.length];
    const subtema = subtemas[i % subtemas.length];
    const tonoIdx = i % 8;

    const etiquetaTit = esPersonalizable
      ? '12 años juntos'
      : meta.slug.includes('meses')
      ? `${meta.n} meses juntos`
      : meta.n === 1
      ? '1 año juntos'
      : `${meta.n} años juntos`;

    let tituloMsg = PLANTILLAS_TITULO_ANIV[i](apertura, etiquetaTit);
    const baseSlug = slugify(tituloMsg + '-' + (esPersonalizable ? 'aniv-12' : meta.slug.replace(/^felices?-|^feliz-/, '')));
    let slugMsg = baseSlug;
    let salt = 2;
    while (existentes.slugs.has(slugMsg)) {
      slugMsg = `${baseSlug}-${salt++}`;
    }
    const sufijosUnicos = ['siempre', 'hoy', 'juntos', 'amor', 'corazón', 'vida', 'equipo', 'hogar'];
    if (existentes.titulosNorm.has(normalizar(tituloMsg))) {
      tituloMsg = `${tituloMsg} ${sufijosUnicos[i % sufijosUnicos.length]}`;
    }
    if (normalizar(tituloMsg).includes(normalizar(hub.keyword))) {
      tituloMsg = `${apertura} celebramos nuestro vínculo tras ${etiquetaTit}`;
    }

    existentes.slugs.add(slugMsg);
    existentes.titulosNorm.add(normalizar(tituloMsg));

    const cierre = CIERRES_PAREJA_TONO[tonoIdx](esPersonalizable ? 'estos 12 años juntos' : etiquetaTexto);

    const iniciosNaturales = [
      'Hoy',
      'En esta fecha tan nuestra',
      'Al llegar a este día',
      'Con el corazón tranquilo',
      'Desde la calma de lo vivido',
      'En este nuevo aniversario',
      'Con enorme cariño',
      'Sin apuro y con verdad'
    ];
    const inicioFrase = iniciosNaturales[i % iniciosNaturales.length];

    let texto;
    if (tonoIdx === 0) {
      // Breve WhatsApp (~48-55 palabras)
      texto = `${inicioFrase} quiero decirte cuánto valoro ${etiquetaTexto}, porque en ${escena} descubro todos los días por qué sos mi persona favorita.\n\nNo necesito grandes discursos para celebrar ${subtema}: me basta tu abrazo y esa mirada cómplice que me ordena el día. ${cierre}`;
    } else if (tonoIdx === 7) {
      // Carta extensa (~125-140 palabras)
      texto = `Mi amor,\n\n${inicioFrase} me detengo a pensar en ${etiquetaTexto} y siento una gratitud inmensa por cómo fuimos tejiendo ${meta.etapa}. Todavía recuerdo con nitidez cómo empezamos, entre charlas tímidas y ganas de vernos un rato más, sin imaginar lo bien que se sentiría construir este refugio.\n\nEn el medio hubo jornadas tranquilas y otras desafiantes, pero siempre elegimos cuidar ${subtema}. Atesoro ${escena}, y también ${escena2}, porque ahí vive la verdad de lo que somos cuando nadie nos mira.\n\n${cierre}`;
    } else if (tonoIdx === 3) {
      // Nostalgia y recuerdos (~75-85 palabras)
      texto = `${inicioFrase} miro hacia atrás al llegar a ${etiquetaTexto} y me invade una nostalgia hermosa al recordar nuestros primeros encuentros, las fotos guardadas y todo lo que soñábamos entonces.\n\nAgradezco conservar viva la memoria de ${escena}, porque cada recuerdo compartido nos recuerda cuánto crecimos sin perder la esencia ni la ternura. ${cierre}`;
    } else if (tonoIdx === 5) {
      // Humor cálido (~65-75 palabras)
      texto = `${inicioFrase} confirmamos oficialmente que superar ${etiquetaTexto} con tanto humor y paciencia merece premio mayor. Entre ${escena} y nuestras charlas interminables, queda claro que elegí al mejor cómplice posible.\n\nGracias por bancar mis manías con una sonrisa y mantener viva ${subtema}. ${cierre}`;
    } else if (tonoIdx === 6) {
      // Con fe y bendición (~72-82 palabras)
      texto = `${inicioFrase} doy gracias a Dios por ${etiquetaTexto} y por la paz que trajo tu presencia a mi vida. En ${escena} veo una bendición cotidiana que nunca quiero dar por sentada.\n\nQue la fe, la paciencia y el respeto sigan guiando ${subtema} en cada paso que demos. ${cierre}`;
    } else {
      // Emotivo / Gratitud / Reflexivo (~75-95 palabras)
      texto = `${inicioFrase} celebramos ${etiquetaTexto} con el corazón lleno por ${subtema}. A lo largo de ${meta.etapa} confirmé que el amor real se demuestra en lo pequeño: en ${escena} y en la manera serena en que nos cuidamos.\n\nCuando pienso en todo lo que compartimos, siento orgullo por el equipo honesto que formamos y por ${escena2}. ${cierre}`;
    }

    if (esPersonalizable && !texto.includes('12 años')) {
      texto = texto.replace(/12 años/g, '12 años');
    }

    const textoClave = texto.normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('es');
    if (existentes.textosNorm.has(textoClave)) {
      throw new Error(`Texto duplicado en ${slugMsg}`);
    }
    existentes.textosNorm.add(textoClave);

    registros.push({
      tipo: 'mensaje',
      slug: slugMsg,
      categoria: hub.slug,
      destinatario: hub.destinatario,
      titulo: tituloMsg,
      texto,
      creado: FECHA_HOY,
      actualizado: FECHA_HOY,
      ...(esPersonalizable ? { aniosBase: 12 } : {})
    });
  }

  return registros;
}

function generarHubsRecuerdosTristes(existentes) {
  const specs = [
    {
      slug: 'frases-tristes-para-recordar-momentos',
      kw: 'frases tristes para recordar momentos',
      dest: 'recuerdos tristes',
      cab: 'frases tristes',
      mod: 'para recordar momentos',
      titulo: 'Frases tristes para recordar momentos - 40 Textos',
      h1: 'Frases tristes para recordar momentos que marcaron el alma 🌧️',
      meta: 'Frases tristes para recordar momentos vividos con sensibilidad y honestidad: 40 textos serenos sobre nostalgia, etapas que pasaron y huellas del corazón.',
      emoji: '🌧️',
      lead: 'Hay días en los que la nostalgia pesa un poco más y necesitamos poner en palabras lo que quedó guardado en la memoria. Reunimos 40 frases tristes y serenas para recordar momentos que ya pasaron, personas que dejaron huella y capítulos que todavía duelen pero también enseñan.\n\nPodés leerlas con calma, copiarlas para un estado sobrio o personalizarlas con un nombre y descarga en tonos marfil o grises suaves.',
      seoTitulo: 'Cómo expresar la tristeza y la nostalgia al recordar momentos vividos',
      seoTexto: 'Poner palabras honestas a un momento triste no significa quedarse atrapado en el pasado, sino reconocer que aquello que se vivió importó de verdad y merece un espacio respetuoso en la memoria.\n\nEn esta colección evitamos clichés vacíos o frases forzadas de optimismo rápido: ofrecemos reflexiones breves para estados, textos profundos de recuerdo y cartas íntimas pensadas para aliviar el nudo en la garganta.\n\nPodés filtrar entre mensajes breves para WhatsApp, recuerdos profundos, textos reflexivos o cartas largas y adaptarlos con el personalizador superior según a quién o qué etapa quieras evocar.',
      enfoque: 'aquellos momentos que pasaron y siguen vivos en la memoria'
    },
    {
      slug: 'frases-de-nostalgia-y-recuerdos',
      kw: 'frases de nostalgia y recuerdos',
      dest: 'nostalgia y recuerdos',
      cab: 'frases de nostalgia',
      mod: 'y recuerdos',
      titulo: 'Frases de nostalgia y recuerdos - 40 Textos Serenos',
      h1: 'Frases de nostalgia y recuerdos del pasado 🍂',
      meta: 'Frases de nostalgia y recuerdos: 40 mensajes sensibles y profundos para evocar la infancia, personas queridas, etapas pasadas y memorias inolvidables.',
      emoji: '🍂',
      lead: 'La nostalgia mezcla una tristeza suave con la gratitud de haber vivido instantes irrepetibles. Esta colección de 40 frases de nostalgia y recuerdos acompaña esos ratos en que una canción, una foto vieja o una tarde tranquila nos devuelven a otro tiempo.\n\nElegí textos cortos para compartir en redes o estados, reflexiones serenas y cartas breves listas para guardar o dedicar.',
      seoTitulo: 'Por qué las palabras de nostalgia ayudan a honrar nuestra historia',
      seoTexto: 'Recordar con nostalgia permite mirar nuestra propia historia con ternura: las casas de la infancia, las amistades de otra época, los afectos que partieron o las tardes simples que solo aprendimos a valorar con el tiempo.\n\nCada texto de esta sección está redactado en español cercano y literario, cuidando un tono sobrio y humano ideal tanto para compartir con alguien que formó parte de esa etapa como para guardar en un cuaderno personal.\n\nUsá los filtros por extensión y estilo para encontrar desde una línea breve para estado hasta una reflexión más extensa.',
      enfoque: 'la nostalgia dulce y melancólica de las etapas que formaron quienes somos'
    },
    {
      slug: 'mensajes-cuando-extranas-a-alguien',
      kw: 'mensajes cuando extrañas a alguien',
      dest: 'alguien que extrañas',
      cab: 'mensajes cuando extrañas',
      mod: 'a alguien',
      titulo: 'Mensajes cuando extrañas a alguien - 40 Textos',
      h1: 'Mensajes cuando extrañas a alguien con el corazón 🕊️',
      meta: 'Mensajes cuando extrañas a alguien: 40 textos sinceros y sensibles para decir te extraño por distancia, ausencia o recuerdo profundo, listos para copiar.',
      emoji: '🕊️',
      lead: 'Extrañar a alguien —sea por kilómetros de distancia, por un silencio largo o por una ausencia definitiva— deja un vacío que cuesta explicar. Acá reunimos 40 mensajes honestos y delicados para decir cuánto hace falta esa presencia sin caer en frases automáticas.\n\nAdaptá el nombre arriba, elegí el tono adecuado (breve para chat, emotivo, melancólico o reflexivo) y compartilo con serenidad.',
      seoTitulo: 'Qué decir cuando extrañás profundamente a una persona importante',
      seoTexto: 'Decir "te extraño" adquiere un peso distinto cuando nombrás el detalle cotidiano que despierta esa falta: un café compartido, una costumbre de los domingos, una voz al teléfono o un consejo que hoy vendría bien.\n\nPreparamos esta selección de 40 textos cuidando un lenguaje sobrio y adaptable tanto para personas que viven lejos como para recuerdos silenciosos de quienes ya no están físicamente.\n\nPodés explorar las distintas segmentaciones del filtro superior y también acceder al selector de fecha de duelo si necesitás recordar un aniversario sensible.',
      enfoque: 'la ausencia silenciosa de esa persona que hoy hace tanta falta'
    }
  ];

  const escenasMemoria = [
    'una fotografía guardada en el fondo de un cajón que vuelve a doler y a abrigar al mismo tiempo',
    'esa canción antigua que suena sin aviso y devuelve una tarde entera en segundos',
    'el silencio de las horas quietas cuando los recuerdos hablan más claro que el ruido del día',
    'la silla vacía o el mensaje que ya no llega pero sigue resonando en la memoria',
    'las charlas largas que tuvimos sin imaginar que algún día serían un tesoro del pasado',
    'el aroma simple de una casa o de un café que transporta directo a otro capítulo de la vida',
    'los pequeños gestos cotidianos que en su momento parecían comunes y hoy valen oro',
    'esas tardes grises en que mirar atrás enseña cuánto amamos y cuánto aprendimos',
    'la mezcla de melancolía y gratitud al recorrer los lugares donde fuimos felices',
    'las palabras que quedaron pendientes y que hoy se vuelven pensamiento sereno',
    'el paso silencioso del tiempo que cambia los escenarios pero deja intactas las huellas profundas',
    'esa costumbre querida que seguimos repitiendo casi sin darnos cuenta para mantener cerca el recuerdo',
    'la calma frágil que aparece después de aceptar que algunas etapas solo viven en la memoria',
    'el eco de una risa conocida que todavía ilumina los días nublados',
    'las cartas viejas y notas breves que guardan la calidez de otro tiempo',
    'la necesidad sincera de detenerse un minuto y reconocer que todavía se extraña',
    'el consuelo tranquilo de saber que lo vivido con verdad nunca se borra del todo',
    'la mirada serena hacia quienes caminaron a nuestro lado y dejaron marca en nuestra historia',
    'ese nudo suave en el pecho que aparece en fechas marcadas del calendario',
    'la promesa íntima de conservar vivo lo bueno que dejó aquella etapa irrepetible'
  ];

  const registros = [];
  for (let sIdx = 0; sIdx < specs.length; sIdx++) {
    const sp = specs[sIdx];
    const hub = {
      tipo: 'hub',
      slug: sp.slug,
      destinatario: sp.dest,
      cabecera: sp.cab,
      modificador: sp.mod,
      grupo: 'duelo_recuerdos',
      keyword: sp.kw,
      titulo: sp.titulo,
      h1: sp.h1,
      meta: sp.meta,
      emoji: sp.emoji,
      lead: sp.lead,
      creado: FECHA_HOY,
      actualizado: FECHA_HOY,
      seoTitulo: sp.seoTitulo,
      seoTexto: sp.seoTexto
    };
    registros.push(hub);

    const PLANTILLAS_SERENAS = [
      (ap, m) => `${ap} pesa el silencio ${m}`,
      (ap, m) => `${ap} duele mirar fotos viejas ${m}`,
      (ap, m) => `${ap} aquella canción antigua ${m}`,
      (ap, m) => `${ap} una huella que no borra el tiempo ${m}`,
      (ap, m) => `${ap} llega la tarde gris ${m}`,
      (ap, m) => `${ap} una voz querida ${m}`,
      (ap, m) => `${ap} abrazos guardados en la memoria ${m}`,
      (ap, m) => `${ap} a lugares de otra etapa ${m}`,
      (ap, m) => `${ap} lo que todavía se siente ${m}`,
      (ap, m) => `${ap} un nudo sereno en el pecho ${m}`,
      (ap, m) => `${ap} despacio con la tristeza honesta ${m}`,
      (ap, m) => `${ap} el cielo buscando calma ${m}`,
      (ap, m) => `${ap} líneas sinceras desde el alma ${m}`,
      (ap, m) => `${ap} en charlas que quedaron atrás ${m}`,
      (ap, m) => `${ap} la ausencia con ternura ${m}`,
      (ap, m) => `${ap} el corazón en días nublados ${m}`,
      (ap, m) => `${ap} el eco de risas pasadas ${m}`,
      (ap, m) => `${ap} hondo para seguir adelante ${m}`,
      (ap, m) => `${ap} capítulos que ya cerraron ${m}`,
      (ap, m) => `${ap} intacto el cariño vivido ${m}`,
      (ap, m) => `${ap} domingos simples de ayer ${m}`,
      (ap, m) => `${ap} enseñanzas que siguen vivas ${m}`,
      (ap, m) => `${ap} consuelo en la memoria limpia ${m}`,
      (ap, m) => `${ap} paz entre tantos recuerdos ${m}`,
      (ap, m) => `${ap} ir sin olvidar lo bueno ${m}`,
      (ap, m) => `${ap} el tiempo que sí compartimos ${m}`,
      (ap, m) => `${ap} la herida con paciencia ${m}`,
      (ap, m) => `${ap} cartas viejas del cajón ${m}`,
      (ap, m) => `${ap} tardes de café y charla ${m}`,
      (ap, m) => `${ap} que la melancolía también ama ${m}`,
      (ap, m) => `${ap} las lágrimas sin esconderlas ${m}`,
      (ap, m) => `${ap} por qué ciertas fechas duelen ${m}`,
      (ap, m) => `${ap} luz suave dentro del duelo ${m}`,
      (ap, m) => `${ap} vivo un nombre querido ${m}`,
      (ap, m) => `${ap} pensando en tu ausencia ${m}`,
      (ap, m) => `${ap} la lluvia en ventana quieta ${m}`,
      (ap, m) => `${ap} en silencio junto al recuerdo ${m}`,
      (ap, m) => `${ap} el vacío con serenidad ${m}`,
      (ap, m) => `${ap} fiel a nuestra historia ${m}`,
      (ap, m) => `${ap} el ruido para recordar mejor ${m}`
    ];

    const marcaSpec = sIdx === 0 ? 'en momentos tristes' : sIdx === 1 ? 'entre nostalgias' : 'cuando se extraña';

    for (let i = 0; i < 40; i++) {
      const ap = APERTURAS_SERENAS_40[i];
      const esc1 = escenasMemoria[(i + sIdx * 5) % escenasMemoria.length];
      const esc2 = escenasMemoria[(i + sIdx * 5 + 9) % escenasMemoria.length];

      let tituloMsg = PLANTILLAS_SERENAS[i](ap, marcaSpec);

      const baseSlug = slugify(tituloMsg);
      let slugMsg = baseSlug;
      let salt = 2;
      while (existentes.slugs.has(slugMsg)) {
        slugMsg = `${baseSlug}-${salt++}`;
      }
      if (existentes.titulosNorm.has(normalizar(tituloMsg))) {
        tituloMsg = `${tituloMsg} siempre`;
      }
      existentes.slugs.add(slugMsg);
      existentes.titulosNorm.add(normalizar(tituloMsg));

      const iniciosSerenos = [
        'Hoy',
        'A veces',
        'En medio del silencio',
        'Cuando cae la tarde',
        'Sin apuro y con respeto',
        'Desde la memoria tranquila',
        'Al volver la mirada atrás',
        'Con el corazón sereno'
      ];
      const inicioSereno = iniciosSerenos[i % iniciosSerenos.length];

      const modo = i % 5;
      let texto;
      if (modo === 0) {
        // Breve / Estado (~50 palabras)
        texto = `${inicioSereno} duele un poco pensar en ${sp.enfoque}, especialmente al cruzarse con ${esc1}.\n\nAun en la tristeza tranquila, agradecer que haya existido transforma parte del vacío en una memoria serena que acompaña sin hacer ruido.`;
      } else if (modo === 1) {
        // Emotivo / Nostalgia (~75 palabras)
        texto = `${inicioSereno} vuelve a la mente ${esc1}, y resulta imposible no sentir esa melancolía honda propia de ${sp.enfoque}.\n\nQuien deja huella verdadera no desaparece del todo: permanece en las costumbres que heredamos, en las frases que repetimos y en el cariño silencioso que todavía nos sostiene cuando el día pesa.`;
      } else if (modo === 2) {
        // Reflexivo (~80 palabras)
        texto = `${inicioSereno} aprendemos que la nostalgia no es debilidad, sino la prueba más honesta de que algo valió la pena. Al evocarse ${esc1}, comprendemos mejor ${sp.enfoque}.\n\nDarle lugar a la tristeza sin apuro y mirar también ${esc2} ayuda a caminar con más paz y respeto por nuestra propia historia.`;
      } else if (modo === 3) {
        // Con fe / consuelo (~75 palabras)
        texto = `${inicioSereno} pido serenidad y luz para transitar ${sp.enfoque}, sobre todo cuando regresa ${esc1}.\n\nQue la paz interior y la fe acompañen este recuerdo con suavidad, convirtiendo la ausencia en abrigo espiritual y gratitud profunda por cada instante vivido.`;
      } else {
        // Carta serena larga (~125 palabras)
        texto = `${inicioSereno} me tomo unos minutos en silencio para escribir sobre ${sp.enfoque}, porque hay emociones que solo descansan cuando encuentran palabras sinceras.\n\nHoy volvió a aparecer ${esc1}, y junto con esa imagen regresó también ${esc2}. No intento borrar la tristeza ni apurar el alivio: prefiero reconocer cuánto significó cada instante compartido y aceptar que extrañar forma parte del amor verdadero.\n\nGuardaré este recuerdo con respeto y calma, agradeciendo lo aprendido y permitiendo que la memoria siga acompañando mis pasos con ternura honesta.`;
      }

      // Guardrail estricto: cero palabras festivas
      if (/(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(torta|pastel|soplá|velas|fiesta|festej\w*|brindis|regalos)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i.test(tituloMsg + ' ' + texto)) {
        throw new Error(`Palabra festiva detectada en duelo_recuerdos: ${slugMsg}`);
      }

      const clave = texto.normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('es');
      if (existentes.textosNorm.has(clave)) throw new Error(`Texto duplicado en ${slugMsg}`);
      existentes.textosNorm.add(clave);

      registros.push({
        tipo: 'mensaje',
        slug: slugMsg,
        categoria: hub.slug,
        destinatario: hub.destinatario,
        titulo: tituloMsg,
        texto,
        creado: FECHA_HOY,
        actualizado: FECHA_HOY
      });
    }
  }
  return registros;
}

function generarHubBanderines(existentes) {
  const hub = {
    tipo: 'hub',
    slug: 'banderines-de-cumpleanos-para-imprimir',
    destinatario: 'banderines',
    cabecera: 'banderines de cumpleaños',
    modificador: 'para imprimir',
    grupo: 'tono',
    keyword: 'banderines de cumpleaños para imprimir',
    titulo: 'Banderines de cumpleaños para imprimir - 40 Ideas',
    h1: 'Banderines de cumpleaños para imprimir: 40 frases y textos 🎏',
    meta: 'Banderines de cumpleaños para imprimir en A4: 40 textos listos para guirnaldas, medidas recomendadas y acceso al generador gratis con bordes de recorte.',
    emoji: '🎏',
    lead: '¿Buscás frases cortas y originales para armar banderines de cumpleaños para imprimir en casa? Reunimos 40 propuestas listas para guirnaldas, mesas dulces, carteles con nombre y saludos complementarios para tarjetas.\n\nAdemás, podés abrir nuestro creador gratuito de banderines A4 en Herramientas para escribir cualquier frase, elegir colores o versión para colorear e imprimir dos banderines por hoja con bordes punteados.',
    creado: FECHA_HOY,
    actualizado: FECHA_HOY,
    seoTitulo: 'Cómo elegir medidas, papel y frases para banderines de cumpleaños',
    seoTexto: 'El tamaño clásico más cómodo para imprimir en casa es de 14 × 19 cm, lo que permite ubicar dos banderines nítidos por cada hoja A4 y recortarlos rápido con tijera o guillotina.\n\nPara que la guirnalda no se doble al colgarla conviene usar cartulina mate u opalina de entre 180 y 240 gramos, perforar las dos esquinas superiores a 1,5 cm del borde y pasar cordón de algodón o cinta satinada.\n\nEn estas 40 ideas combinamos títulos breves de alto impacto visual para los banderines junto con mensajes cálidos de cumpleaños para copiar en invitaciones, sobres o tarjetas de mesa.'
  };

  const registros = [hub];
  const estilos = [
    'en tonos rosa fiesta y crema editorial',
    'con paleta dorada y negra elegante',
    'en versión pastel cielo y menta para mesas infantiles',
    'en estilo botánico verde salvia y terracota',
    'con arcoíris vivo ideal para patios y jardines',
    'en blanco y negro listo para que los chicos coloreen',
    'en formato cola de golondrina con doble punta decorativa',
    'en triángulo clásico de 14 × 19 cm sobre cartulina opalina'
  ];
  const usos = [
    'sobre la mesa principal de la torta',
    'como fondo luminoso para las fotos del festejo',
    'en la puerta de entrada para recibir a los invitados',
    'en una guirnalda corta junto a la ventana del comedor',
    'combinado con fotos impresas de cada año vivido',
    'en un festejo sorpresa armado en diez minutos',
    'en un picnic al aire libre con cordón de yute',
    'para acompañar una tarjeta impresa con el mismo diseño'
  ];
  const lemas = [
    'FELIZ CUMPLEAÑOS',
    'HAPPY BIRTHDAY',
    'FELIZ DÍA',
    'BIENVENIDO NUEVO AÑO',
    'A CELEBRAR',
    'FELIZ VUELTA AL SOL',
    'HOY SE FESTEJA',
    'QUE SEAN MUCHOS MÁS'
  ];

  const PLANTILLAS_BANDERIN = [
    (ap) => `${ap} tu guirnalda rosa sobre la mesa dulce`,
    (ap) => `${ap} un cartel dorado elegante en papel grueso`,
    (ap) => `${ap} dos triángulos nítidos por hoja A4`,
    (ap) => `${ap} bordes punteados prolijos en minutos`,
    (ap) => `${ap} tonos pastel cielo y menta infantil`,
    (ap) => `${ap} el comedor con letras grandes visibles`,
    (ap) => `${ap} estilo botánico verde salvia y crema`,
    (ap) => `${ap} la pared de fotos familiares en casa`,
    (ap) => `${ap} el nombre del homenajeado en grande`,
    (ap) => `${ap} versión blanco y negro para colorear`,
    (ap) => `${ap} formato cola de golondrina con cinta`,
    (ap) => `${ap} arcoíris luminoso para patio o jardín`,
    (ap) => `${ap} festiva con cordón de yute natural`,
    (ap) => `${ap} tipográficas clásicas en cartulina mate`,
    (ap) => `${ap} vibrantes para celebrar a lo grande`,
    (ap) => `${ap} recortable de catorce por diecinueve centímetros`,
    (ap) => `${ap} principal lista con guirnalda coordinada`,
    (ap) => `${ap} fotográfico económico y lleno de encanto`,
    (ap) => `${ap} de bienvenida junto a la puerta`,
    (ap) => `${ap} terracota y arena para adultos`,
    (ap) => `${ap} opalina de doscientos gramos firme`,
    (ap) => `${ap} de algodón trenzado para colgar derecho`,
    (ap) => `${ap} satinada combinada con servilletas festivas`,
    (ap) => `${ap} alternados con corazones y estrellas`,
    (ap) => `${ap} separadoras entre cada palabra clave`,
    (ap) => `${ap} caseros que transforman cualquier merienda`,
    (ap) => `${ap} rápidas para organizar sorpresa en casa`,
    (ap) => `${ap} corta con feliz vuelta al sol`,
    (ap) => `${ap} protagonista en el centro del salón`,
    (ap) => `${ap} minimalista negro y oro para cenas`,
    (ap) => `${ap} matutina colgada sobre el desayuno`,
    (ap) => `${ap} cálido armado sin gastar de más`,
    (ap) => `${ap} infantil con plantillas listas para pintar`,
    (ap) => `${ap} sutil en cartulina perlada o kraft`,
    (ap) => `${ap} artesanal hecho a mano con cariño`,
    (ap) => `${ap} de picnic decorada entre árboles`,
    (ap) => `${ap} especial anunciada desde la entrada`,
    (ap) => `${ap} visual que acompaña la torta casera`,
    (ap) => `${ap} reutilizable guardado para futuros festejos`,
    (ap) => `${ap} familiar con guirnalda hecha a medida`
  ];

  for (let i = 0; i < 40; i++) {
    const ap = APERTURAS_BANDERINES_40[i];
    const est = estilos[i % estilos.length];
    const uso = usos[(i + 3) % usos.length];
    const lema = lemas[i % lemas.length];

    let tituloMsg = PLANTILLAS_BANDERIN[i](ap);
    if (normalizar(tituloMsg).includes(normalizar(hub.keyword))) {
      tituloMsg = `${ap} cartel festivo con letras recortables para tu mesa`;
    }
    const baseSlug = slugify(`${tituloMsg}-${i + 1}`);
    let slugMsg = baseSlug;
    let salt = 2;
    while (existentes.slugs.has(slugMsg)) slugMsg = `${baseSlug}-${salt++}`;
    if (existentes.titulosNorm.has(normalizar(tituloMsg))) {
      tituloMsg = `${tituloMsg} ${i + 1}`;
    }
    existentes.slugs.add(slugMsg);
    existentes.titulosNorm.add(normalizar(tituloMsg));

    const texto = `${ap} una guirnalda con la frase "${lema}" ${est}, pensada especialmente para lucirse ${uso}. Al imprimir dos banderines por hoja A4 en papel de 200 gramos lográs un acabado prolijo, firme y económico.\n\n¡Muy feliz cumpleaños! Que cada detalle preparado con cariño en este festejo refleje lo especial que sos y traiga un año nuevo repleto de alegría, salud y abrazos compartidos.`;

    const clave = texto.normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('es');
    if (existentes.textosNorm.has(clave)) throw new Error(`Texto duplicado en ${slugMsg}`);
    existentes.textosNorm.add(clave);

    registros.push({
      tipo: 'mensaje',
      slug: slugMsg,
      categoria: hub.slug,
      destinatario: hub.destinatario,
      titulo: tituloMsg,
      texto,
      creado: FECHA_HOY,
      actualizado: FECHA_HOY
    });
  }
  return registros;
}

function migrarDueloAGrupoPropio() {
  const dueloSlugs = new Set([
    'condolencias',
    'felicitaciones-a-madre-fallecida',
    'feliz-cumpleanos-hasta-el-cielo',
    'frases-para-una-persona-fallecida',
    'frases-lindas-para-mi-padre-fallecido-que-esta-en-el-cielo',
    'frases-para-una-hermana-fallecida-en-su-cumpleanos'
  ]);
  for (const archivo of ['data/categorias/condolencias.json', 'data/categorias/g10-especiales.json']) {
    const arr = JSON.parse(fs.readFileSync(archivo, 'utf8'));
    let cambios = 0;
    for (const r of arr) {
      if (r.tipo === 'hub' && dueloSlugs.has(r.slug) && r.grupo !== 'duelo_recuerdos') {
        r.grupo = 'duelo_recuerdos';
        cambios++;
      }
    }
    if (cambios > 0) {
      fs.writeFileSync(archivo, JSON.stringify(arr, null, 2) + '\n', 'utf8');
      console.log(`Migrados ${cambios} hubs de duelo a grupo "duelo_recuerdos" en ${archivo}`);
    }
  }
}

const existentes = cargarSlugsYTitulosExistentes();

// 1. Aniversarios completo (21 hubs)
let anivRegistros = [];
for (const m of MESES_NOVIOS_META) {
  anivRegistros = anivRegistros.concat(generarHubAniversario(m, false, existentes));
}
for (const a of ANOS_NOVIOS_META) {
  anivRegistros = anivRegistros.concat(generarHubAniversario(a, false, existentes));
}
anivRegistros = anivRegistros.concat(
  generarHubAniversario(
    {
      n: 12,
      slug: 'mas-de-10-anos-de-novios',
      kw: 'más de 10 años de novios',
      label: '12 años de novios',
      frase: 'estos 12 años de novios',
      etapa: 'más de una década de vida compartida, apoyo y cariño real'
    },
    true,
    existentes
  )
);
fs.writeFileSync('data/categorias/g14-aniversarios-completo.json', JSON.stringify(anivRegistros, null, 2) + '\n', 'utf8');
console.log(`Generado g14-aniversarios-completo.json: ${anivRegistros.length} registros (21 hubs + 840 mensajes)`);

// 2. Recuerdos, nostalgia y momentos tristes (3 hubs)
const recuerdosRegistros = generarHubsRecuerdosTristes(existentes);
fs.writeFileSync('data/categorias/g15-recuerdos-nostalgia.json', JSON.stringify(recuerdosRegistros, null, 2) + '\n', 'utf8');
console.log(`Generado g15-recuerdos-nostalgia.json: ${recuerdosRegistros.length} registros (3 hubs + 120 mensajes)`);

// 3. Banderines para imprimir (1 hub)
const banderinesRegistros = generarHubBanderines(existentes);
fs.writeFileSync('data/categorias/g16-banderines.json', JSON.stringify(banderinesRegistros, null, 2) + '\n', 'utf8');
console.log(`Generado g16-banderines.json: ${banderinesRegistros.length} registros (1 hub + 40 mensajes)`);

// 4. Migrar condolencias + 5 hubs de duelo existentes al grupo duelo_recuerdos
migrarDueloAGrupoPropio();
