#!/usr/bin/env node
/**
 * Enriquecimiento editorial de alto valor SEO para las 441 categorias de ParaCumpleanos.
 * Aplica los principios de:
 * - Piramide invertida y respuesta directa a la intencion de busqueda (Shalom Jaskilioff)
 * - Claridad, voz activa, 1 idea por parrafo y espanol natural comprensible (Morales Saldarriaga)
 * - Marco SUCCESs: Simple, Inesperado, Concreto, Creible, Emocional e Historia (Chip & Dan Heath)
 * - Estandar Ultra Guia Cosmica v3.0: cero contaminacion tematica, cero mezcla voseo/tuteo, cero cliches.
 */
import fs from 'node:fs';
import path from 'node:path';

function hashSlug(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h >>> 0);
}

function pick(arr, slug, salt = 0) {
  return arr[(hashSlug(slug + '#' + salt) + salt * 7) % arr.length];
}

function capFirst(s) {
  const t = String(s || '').trim();
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : '';
}

function nombreHub(hub) {
  const base = String(hub.keyword || hub.titulo || '').trim();
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : '';
}

function detectarPerfil(hub) {
  const slug = String(hub.slug || '').toLowerCase();
  const grupo = String(hub.grupo || '').toLowerCase();
  const dest = String(hub.destinatario || '').toLowerCase();

  if (slug === 'banderines-de-cumpleanos-para-imprimir') return 'banderines';
  if (slug === 'motivaciones') return 'motivaciones';
  if (grupo === 'meses' || /^cumpleanos-en-/.test(slug)) return 'meses';
  if (grupo === 'duelo_recuerdos' || /fallecid|hasta-el-cielo|condolencias|pesame|consuelo|luctuoso|tristes|nostalgia|extranas/.test(slug)) return 'duelo';
  if (grupo === 'fechas_especiales') return 'fecha_especial';
  if (/jubilacion/.test(slug)) return 'jubilacion';
  if (/nacimiento|cumplemes/.test(slug)) return 'nacimiento';
  if (/mes-de-novios|meses-de-novios/.test(slug)) return 'aniv_meses';
  if (/ano-de-novios|anos-de-novios|bodas-de-|aniversario/.test(slug) || grupo === 'aniversarios') return 'aniv_anos';
  if (/ingles|italiano|portugues|frances/.test(slug)) return 'bilingue';
  if (/invitacion/.test(slug)) return 'invitacion';
  if (/atrasad|tard/.test(slug)) return 'atrasado';
  if (/gracios|chistos|divertid|humor/.test(slug)) return 'humor';
  if (/cristian|dios|oracion|bendic|pastor|fe\b/.test(slug) || grupo === 'cristiano') return 'fe';
  if (grupo === 'profesionales' || /jefe|jefa|doctor|doctora|maestr|profesor|companer|cliente|vecin|colega|alumn|oficina/.test(slug)) return 'profesionales';
  if (grupo === 'distancia' || /lejos|distancia/.test(slug)) return 'distancia';
  if (/embaraz/.test(slug)) return 'embarazo';
  if (/(^|-)([1-9]|1[0-2])-ano|primer-ano|bebe|nino|nina|infantil/.test(slug)) return 'infantil';
  if (/(^|-)(1[3-9]|2[0-5])-ano|adolesc|joven/.test(slug)) return 'jovenes';
  if (/(^|-)(2[6-9]|3[0-9]|4[0-9])-ano/.test(slug)) return 'adultos';
  if (/(^|-)(5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])-ano|abuel/.test(slug)) return 'mayores';
  if (/^poema|poesia|-poema/.test(slug)) return 'poema';
  if (grupo === 'cartas' || /^carta|cartas-|-carta|texto-largo|mensajes-largos/.test(slug)) return 'carta';
  if (/espos|novi|amor|pareja|enamorad/.test(slug + ' ' + dest)) return 'pareja';
  if (/amig/.test(slug + ' ' + dest)) return 'amistad';
  return 'familia';
}

function destLimpio(hub, perfil) {
  const raw = String(hub.destinatario || '').trim().toLowerCase();
  if (!raw || raw === 'general' || raw === 'quien cumple' || raw === 'todos') {
    if (perfil === 'duelo') return 'quien atraviesa un momento sensible';
    if (perfil === 'aniv_meses' || perfil === 'aniv_anos') return 'tu pareja';
    if (perfil === 'jubilacion') return 'quien cierra su etapa laboral';
    if (perfil === 'nacimiento') return 'la familia que recibe a un bebé';
    if (perfil === 'fecha_especial') return 'tus seres queridos';
    return 'esa persona especial';
  }
  const mapa = {
    'mamá': 'tu mamá',
    'madre': 'tu madre',
    'papá': 'tu papá',
    'padre': 'tu padre',
    'esposa': 'tu esposa',
    'esposo': 'tu esposo',
    'novia': 'tu novia',
    'novio': 'tu novio',
    'hija': 'tu hija',
    'hijo': 'tu hijo',
    'hermana': 'tu hermana',
    'hermano': 'tu hermano',
    'amiga': 'tu amiga',
    'amigo': 'tu amigo',
    'mejor amiga': 'tu mejor amiga',
    'mejor amigo': 'tu mejor amigo',
    'prima': 'tu prima',
    'primo': 'tu primo',
    'sobrina': 'tu sobrina',
    'sobrino': 'tu sobrino',
    'tía': 'tu tía',
    'tío': 'tu tío',
    'abuela': 'tu abuela',
    'abuelo': 'tu abuelo',
    'abuelita': 'tu abuelita',
    'abuelito': 'tu abuelito',
    'suegra': 'tu suegra',
    'suegro': 'tu suegro',
    'cuñada': 'tu cuñada',
    'cuñado': 'tu cuñado',
    'nieta': 'tu nieta',
    'nieto': 'tu nieto',
    'padrastro': 'tu padrastro',
    'madrastra': 'tu madrastra',
    'madrina': 'tu madrina',
    'padrino': 'tu padrino',
    'ahijada': 'tu ahijada',
    'ahijado': 'tu ahijado',
    'nuera': 'tu nuera',
    'yerno': 'tu yerno',
    'jefe': 'tu jefe',
    'jefa': 'tu jefa',
    'doctor': 'un doctor',
    'doctora': 'una doctora',
    'maestra': 'una maestra',
    'profesor': 'un profesor',
    'profesora': 'una profesora',
    'compañero': 'un compañero de trabajo',
    'compañera': 'una compañera de trabajo',
    'vecino': 'un vecino',
    'vecina': 'una vecina',
    'cliente': 'un cliente',
    'pastor': 'un pastor',
    'alguien especial': 'alguien especial',
    'mi amor': 'tu amor',
    'pareja': 'tu pareja',
    'perro': 'tu perro',
    'gato': 'tu gato',
    'niña': 'una niña',
    'niño': 'un niño',
    'mujer': 'una mujer',
    'hombre': 'un hombre',
    'exnovia': 'una exnovia',
    'exnovio': 'un exnovio',
    'embarazada': 'una futura mamá',
    'condolencias y duelo': 'quien atraviesa un momento sensible',
    'familia en duelo': 'una familia en duelo',
    'fe en duelo': 'quien atraviesa un duelo',
    'memoria luctuosa': 'quien guarda este recuerdo',
    'pésame breve': 'esa persona querida',
    'nostalgia y recuerdos': 'esa persona que recordás',
    'recuerdos tristes': 'esa persona querida',
    'cuando extrañas a alguien': 'esa persona que extrañás',
    'amigo en duelo': 'tu amigo',
    'compañero en duelo': 'tu compañero de trabajo',
    'hijos por mamá': 'quien despidió a su mamá',
    'hijos por papá': 'quien despidió a su papá',
    'abuelos en su día': 'tus abuelos',
    'amigo en su día': 'tu amigo',
    'madre en su día': 'tu mamá',
    'padre en su día': 'tu papá',
    'maestro en su día': 'tu maestro',
    'año nuevo familiar': 'tu familia',
    'navidad familiar': 'tu familia',
    'nochebuena': 'tus seres queridos',
    'pascuas': 'tus seres queridos',
    'halloween': 'tus amigos y familia',
    'san valentín': 'tu pareja',
    'día de la familia': 'tu familia',
    'día de la mujer': 'esa mujer que admirás',
    'día de la primavera': 'tus amigos y afectos',
    'día de reyes': 'los más chicos y tu familia',
    'día del niño': 'los más chicos',
    'día del trabajador': 'tu equipo y colegas',
    'oficina y equipo': 'tu equipo de trabajo',
    'persona que se jubila': 'la persona que se jubila',
    'recién nacido': 'el bebé y su familia',
    'bebé en su cumplemes': 'el bebé y su familia',
    'niños superhéroes': 'el pequeño cumpleañero',
    'princesas y hadas': 'la pequeña cumpleañera',
    'fanáticos del fútbol y deporte': 'esa persona fanática del deporte',
    'pareja 25 años': 'tu pareja',
    'pareja larga': 'tu pareja',
    'novios': 'tu pareja',
    'amor': 'tu pareja',
    'corto': 'esa persona especial',
    'divertido': 'esa persona especial',
    'formal': 'esa persona especial',
    'whatsapp': 'esa persona especial',
    'facebook': 'esa persona especial',
    'bilingüe': 'esa persona especial',
    'cristianos': 'esa persona especial',
    'atrasado': 'esa persona especial',
    'francés': 'esa persona especial',
    'italiano': 'esa persona especial',
    'portugués': 'esa persona especial',
    'brindis en fiesta': 'esa persona especial',
    'canciones y mañanitas': 'esa persona especial',
    'cumpleaños retro y elegante': 'esa persona especial',
    'discursos para leer': 'esa persona especial',
    'estados de whatsapp': 'esa persona especial',
    'invitaciones': 'tus invitados',
    'invitación': 'tus invitados',
    'oración cristiana': 'esa persona especial',
    'regalos y decoración': 'esa persona especial',
    'respuesta a saludos': 'quienes te saludaron',
    'cumpleaños a solas': 'vos mismo en tu día',
    'para mí': 'vos mismo en tu día',
    'para mí 18 años': 'vos mismo en tus 18 años',
    'para mí 20 años': 'vos mismo en tus 20 años',
    'para mí 30 años': 'vos mismo en tus 30 años'
  };
  if (mapa[raw]) return mapa[raw];
  if (/^\d+\s*(mes|meses|año|años)\s+de\s+novios$/i.test(raw)) return 'tu pareja';
  if (/^\d+\s*años$/i.test(raw) || /^cumpleaños de /i.test(raw)) return 'esa persona especial';
  if (/^(mi|tu|un|una|el|la|los|las|alguien|quien)\b/i.test(raw)) return raw;
  return raw;
}

function temaLimpio(hub) {
  const kw = String(hub.keyword || hub.titulo || '').trim();
  // Quita prefijos redundantes si se va a usar como tema natural
  return kw.charAt(0).toLowerCase() + kw.slice(1);
}

function statsMensajes(msgs) {
  let breves = 0;
  let intermedios = 0;
  let largos = 0;
  let totalPalabras = 0;
  for (const m of msgs) {
    const w = String(m.texto || '').trim().split(/\s+/).filter(Boolean).length;
    totalPalabras += w;
    if (w <= 65) breves++;
    else if (w <= 125) intermedios++;
    else largos++;
  }
  const promedio = msgs.length ? Math.round(totalPalabras / msgs.length) : 60;
  return { total: msgs.length, breves, intermedios, largos, promedio };
}

// Overrides hechos a mano para hubs prioritarios de GSC y Bing (Screenshots 1-4)
const OVERRIDES_PRIORITARIOS = {
  'feliz-cumpleanos-para-mi-esposa': {
    lead:
      'Para celebrar el cumpleaños de tu esposa con palabras que se sientan verdaderas, reunimos 50 mensajes románticos, tiernos y cotidianos pensados para salir de las frases automáticas. Cada texto combina admiración real, gratitud por la vida que comparten y un tono cercano que podés enviar en WhatsApp o entregar en mano.\n\nElegí entre saludos de cumpleaños para una esposa breves para la mañana, textos intermedios y dedicatorias más profundas; escribí su apodo y tu firma arriba para adaptar las 50 opciones al instante y descargar tu tarjeta PNG o Story gratis.',
    seoTitulo: 'Cómo elegir saludos de cumpleaños para una esposa que emocionen de verdad',
    seoTexto:
      'En el cumpleaños de tu esposa, el error más común es repetir promesas grandilocuentes que suenan iguales todos los años. Una dedicatoria memorable se construye al revés: arranca con un gesto concreto que valorás de ella —su risa de entrecasa, cómo sostiene el hogar o el apoyo silencioso en una semana difícil— y cierra con un deseo luminoso para su nuevo año.\n\nSi buscás frases de feliz cumpleaños para tu esposa que realmente la hagan detenerse a leer, elegí una micro-escena que solo ustedes dos entiendan. Mencionar el café de la mañana, un viaje chico o una charla larga después de cenar convierte un buen texto en una carta íntima que va a releer con cariño.\n\nEsta colección de 50 mensajes está equilibrada por extensión para acompañar todo el día: los textos cortos funcionan excelente apenas se despierta o en un estado de WhatsApp, mientras que las opciones largas brillan en una tarjeta impresa junto a flores, un desayuno o la cena de la noche.\n\nPersonalizá cualquiera de las 50 opciones con el apodo real con que la llamás y tu firma en la barra superior, filtrá por tono emotivo o romántico y descargá gratis la postal PNG cuadrada o vertical Story 1080×1920 sin marcas molestas.'
  },
  'frases-para-mi-esposa': {
    lead:
      'Si buscás frases de feliz cumpleaños para tu esposa que sean cortas, bonitas y románticas sin caer en lugares comunes, acá tenés 50 textos inéditos listos para copiar en un clic. Son ideales para saludar a la mañana por WhatsApp, acompañar una foto en redes o escribir a mano en la tarjeta del regalo.\n\nUsá los filtros por tono para separar opciones tiernas, agradecidas o breves para estados, sumá su nombre real arriba para adaptar las 50 propuestas en vivo y descargá la tarjeta visual lista para compartir.',
    seoTitulo: 'Qué hace que una frase corta de cumpleaños para tu esposa deje huella',
    seoTexto:
      'Una frase corta para el cumpleaños de tu esposa no necesita veinte renglones para emocionar: necesita precisión afectiva. Cuando nombrás en dos oraciones qué admirás hoy de su forma de ser y cuánto disfrutás compartir tus días con ella, el saludo destaca al instante entre decenas de mensajes genéricos.\n\nEvitá los clichés gastados y apoyate en detalles cotidianos reconocibles: el equipo que forman en casa, la complicidad de las pequeñas rutinas o las ganas de seguir sumando planes juntos este año. Esa concreción hace que incluso un texto de cuarenta palabras se sienta escrito exclusivamente para ella.\n\nPodés combinar dos momentos en el día: mandá una frase ágil por WhatsApp o dejala escrita junto al desayuno apenas arranca la mañana, y reservá una postal visual personalizada o una dedicatoria más extensa para el brindis de la noche.\n\nEn las 50 frases románticas de esta sección podés activar el personalizador con su apodo, guardar tus favoritas para compararlas con calma y bajar tu imagen PNG cuadrada o formato Story lista para enviar.'
  },
  'feliz-cumpleanos-para-mi-esposo': {
    lead:
      'Encontrá 50 palabras de feliz cumpleaños para tu esposo escritas con calidez, admiración y compañerismo real, lejos de las cadenas frías que circulan en internet. Reunimos saludos cortos para el desayuno, mensajes de gratitud cotidiana y dedicatorias más profundas para celebrar al compañero con quien construís tu vida.\n\nEscribí su apodo y tu firma en la barra superior para personalizar las 50 opciones en segundos, filtrá por extensión según el canal que elijas y descargá gratis tu tarjeta PNG o Story vertical.',
    seoTitulo: 'Cómo escribir palabras de feliz cumpleaños para tu esposo con cercanía real',
    seoTexto:
      'Al buscar palabras de feliz cumpleaños para un esposo, muchas veces cuesta equilibrar romanticismo, respeto y naturalidad sin sonar acartonado. La clave está en valorar al hombre real detrás de la rutina: su paciencia, su sentido del humor, el esfuerzo diario por la familia o la tranquilidad que te da tenerlo cerca.\n\nUn detalle concreto vale más que cinco adjetivos repetidos. Nombrar cómo te hace reír cuando el día viene pesado, el mate compartido o un proyecto que encararon juntos transforma una felicitación bonita en un mensaje que va a querer guardar en su celular o en la billetera.\n\nPor la variedad de largos de estas 50 dedicatorias, podés usar un mensaje breve al inicio de su jornada laboral para sacarle una sonrisa rápida y reservar un texto intermedio o carta larga para la cena o el sobre del regalo.\n\nTodas las opciones de esta guía admiten personalización inmediata con su nombre, copia limpia en un clic, envío directo por WhatsApp y descarga en postal visual 1080×1080 o 1080×1920.'
  },
  'frases-para-mi-esposo': {
    lead:
      'Reunimos 50 frases cortas y bonitas de cumpleaños para tu esposo pensadas para enviar por WhatsApp, publicar junto a una foto especial o anotar en la tarjeta de un regalo. Cada dedicatoria cuida un tono auténtico que mezcla amor, complicidad y reconocimiento sin exageraciones.\n\nFiltrá las 50 propuestas por estilo breve, emotivo o para estados, personalizalas en vivo con el apodo que usan todos los días y bajá la tarjeta visual en alta calidad cuando quieras compartirla como imagen.',
    seoTitulo: 'Ideas prácticas para adaptar frases cortas de cumpleaños a tu esposo',
    seoTexto:
      'Las frases cortas de feliz cumpleaños para un esposo funcionan mejor cuando van directo al centro del vínculo: agradecer su compañía, celebrar su forma de cuidarte y desearle un año con salud, calma y disfrute propio. En tres o cuatro líneas claras podés decir mucho más que en un texto recargado.\n\nSi querés que el saludo se sienta irrepetible, sumá al cierre una pequeña posdata personal: el plan de la cena de esta noche, un guiño sobre su equipo o película favorita, o una promesa sencilla para el fin de semana. Ese toque concreto rompe cualquier sensación de mensaje copiado.\n\nEstas 50 frases están calibradas para leerse de una sola mirada en la pantalla del celular y lucirse limpias sobre una fotografía o en nuestras postales descargables sin que el texto quede apretado.\n\nUsá la barra de personalización rápida para sumar su nombre y tu firma de una vez, probá el botón de favoritas para elegir con calma y compartí por WhatsApp, Instagram o tarjeta impresa.'
  },
  'feliz-cumpleanos-mama': {
    lead:
      'Celebrá el día de tu mamá con 50 frases de cumpleaños originales llenas de gratitud, ternura y calidez cotidiana. Incluimos opciones cortas ideales para saludar apenas amanece por WhatsApp, mensajes emotivos para dedicar en familia y textos listos para escribir en una tarjeta junto a flores o un regalo.\n\nPersonalizá al instante las 50 dedicatorias escribiendo cómo la llamás («Mami», «Ma» o su nombre) y tu firma arriba, filtrá por extensión y descargá tu postal PNG o Story sin registro.',
    seoTitulo: 'Qué escribir en las frases de cumpleaños para tu mamá para que se emocione',
    seoTexto:
      'A una mamá no la conmueven las frases grandilocuentes de molde, sino sentirse verdaderamente vista por todo lo que entrega en silencio durante el año. Cuando tu mensaje nombra algo real suyo —una comida que siempre salva el domingo, un consejo oportuno o la calma de sus abrazos— el efecto emocional es inmediato.\n\nPara lograr un saludo equilibrado, combiná gratitud por su historia con un deseo centrado en ella hoy: deseale descanso sin culpas, salud plena, salidas lindas y tiempo propio para disfrutar lo que más le gusta, más allá de cuidar a los demás.\n\nEn estas 50 propuestas tenés formatos pensados para cada momento de la jornada: textos ágiles de lectura rápida para ser el primer mensaje de la mañana en WhatsApp y dedicatorias más amplias si buscás acompañarlo con un presente o leerlo en la mesa familiar.\n\nCon el personalizador rápido de esta página podés insertar su apodo en las 50 frases en un segundo, copiar limpio en un clic o abrir la vista de tarjeta para elegir paleta de color, sumar una foto propia e imprimir la postal.'
  },
  'feliz-cumpleanos-mama-texto-largo': {
    lead:
      'Si querés regalarle a tu mamá una dedicatoria profunda que pueda leer despacio y guardar para siempre, reunimos 50 textos largos y cartas emotivas de feliz cumpleaños escritas con ritmo cálido y sincero. Cada texto evita los lugares comunes y se apoya en la gratitud real de todos los días.\n\nIngresá cómo llamás a tu mamá y tu firma en la barra superior para adaptar los 50 textos largos al instante, leé cualquiera completo sin salir de la página y descargá la tarjeta imprimible o PNG.',
    seoTitulo: 'Estructura en cuatro tiempos para un texto largo de cumpleaños para mamá',
    seoTexto:
      'Un texto largo de cumpleaños para mamá emociona sin aburrir cuando respeta cuatro tiempos claros: un saludo cercano con su apodo real, un recuerdo concreto vivido junto a ella, un reconocimiento explícito de lo que aprendiste mirándola vivir y un cierre sereno deseándole alegría y descanso.\n\nEscribir con párrafos cortos de dos o tres oraciones hace que la carta se lea con fluidez tanto en la pantalla del teléfono como en una hoja escrita a mano. Evitar rodeos solemnes y hablarle como lo hacés en una charla de cocina multiplica la autenticidad de cada frase.\n\nSi vivís cerca, pasar una de estas dedicatorias a papel o imprimirla como postal limpia para dejarla junto al desayuno convierte unas palabras en el mejor regalo de la jornada; si están en otra ciudad, enviala en un horario tranquilo acompañado de una foto juntas.\n\nTodas las opciones de esta colección pueden personalizarse con nombre, posdata y firma en vivo para copiar sin errores de formato o descargar como tarjeta editorial lista para compartir.'
  },
  'feliz-cumpleanos-papa': {
    lead:
      'Si buscás cómo desear feliz cumpleaños a tu papá con palabras honestas y cercanas, reunimos 50 frases y mensajes originales que equilibran admiración, cariño y respeto real. Encontrarás saludos breves para WhatsApp temprano, dedicatorias emotivas y textos con calidez familiar listos para personalizar.\n\nEscribí el nombre o apodo de tu papá («Papi», «Viejo», «Pa») y tu firma arriba para adaptar los 50 mensajes en vivo, filtrar por tono y descargar gratis una tarjeta PNG lista para enviar o imprimir.',
    seoTitulo: 'Cómo desear feliz cumpleaños a tu papá con palabras que realmente le lleguen',
    seoTexto:
      'Desear feliz cumpleaños a tu papá puede resultar difícil cuando es un hombre de pocas palabras o cuando querés salir del clásico saludo corto que se repite cada año. La fórmula más efectiva es concreta y directa: nombrá una enseñanza, una costumbre compartida o un esfuerzo suyo que hoy valorás todavía más.\n\nUn detalle real —cómo te enseñó a resolver un problema, las charlas de sobremesa, su humor particular o su presencia silenciosa cuando más hizo falta— toca fibras profundas sin necesidad de escribir un discurso melodramático.\n\nEn estas 50 opciones combinamos mensajes cortos de 35 a 65 palabras para sorprenderlo apenas empieza el día y textos más desarrollados pensados para acompañar un regalo, un almuerzo familiar o un brindis especial.\n\nUsá el personalizador superior para sumar su apodo y tu firma en todas las tarjetas al mismo tiempo, compará tus favoritas con calma y compartilas por WhatsApp, correo o postal PNG imprimible.'
  },
  'cumpleanos-para-un-papa': {
    lead:
      'Esta colección reúne 50 saludos de cumpleaños para un padre —ya sea tu propio papá, un amigo que estrenó paternidad, un hermano o tu suegro— redactados con calidez, respeto y naturalidad. Cada texto celebra tanto su rol familiar como sus sueños y proyectos personales.\n\nFiltrá las 50 dedicatorias según el tono que mejor encaje con el vínculo, escribí su nombre arriba para adaptarlas al instante y descargá tu postal personalizada en formato cuadrado o Story.',
    seoTitulo: 'Criterios para felicitar a un padre según el vínculo y el tono del saludo',
    seoTexto:
      'Felicitar a un padre que no es el tuyo —como un amigo cercano, un cuñado, un colega o tu suegro— exige un registro distinto: cálido y elogioso, pero medido. Reconocer la entrega con que cuida a sus hijos y al mismo tiempo desearle tiempo de descanso y disfrute personal siempre deja una excelente impresión.\n\nPara que el mensaje suene genuino y nunca de catálogo, anclalo en algo observable: su paciencia, la alegría que contagia en las reuniones o el equilibrio que logra entre trabajo y familia. Ese reconocimiento específico se agradece muchísimo porque rara vez se dice en voz alta.\n\nSi el saludo va a un grupo familiar o por WhatsApp individual, elegí una opción breve y clara de lectura rápida; si firmás una tarjeta física o un obsequio compartido, los textos intermedios con espacio para la firma de todos lucen impecables.\n\nPersonalizá el nombre del agasajado y cómo firmás («De toda la familia», tu nombre o grupo de amigos) arriba de la grilla y descargá la tarjeta visual en tonos sobrios o festivos en un clic.'
  },
  'feliz-cumpleanos-a-distancia': {
    lead:
      'Cuando los kilómetros impiden el abrazo en persona, las palabras justas acortan el mapa al instante. Reunimos 50 mensajes de cumpleaños para alguien que está lejos pensados para enviar con calidez, alegría luminosa y cero tristeza exagerada, ya sea para familia, amigos o pareja en otra ciudad o país.\n\nPersonalizá las 50 dedicatorias a la distancia con su nombre y tu firma en la barra superior, filtrá por largo para WhatsApp o tarjeta y descargá tu postal PNG o Story gratis para acortar distancias hoy mismo.',
    seoTitulo: 'Cómo escribir mensajes de cumpleaños para alguien que está lejos y acortar kilómetros',
    seoTexto:
      'Al saludar en su cumpleaños a alguien que está lejos, el mayor desafío es expresar cuánto lo extrañás sin teñirle el día de melancolía. Los mejores mensajes a la distancia siguen una regla simple: celebran su presente en el lugar donde está, recuerdan una escena alegre compartida y miran hacia el próximo reencuentro.\n\nEl horario marca una enorme diferencia cuando hay otro huso horario. Calcular el desayuno de su hora local para que tu saludo sea uno de los primeros que lea al encender el teléfono demuestra atención real y hace que tu mensaje se sienta presente desde el primer minuto.\n\nCombiná los formatos disponibles en estas 50 dedicatorias: enviá un texto breve y cálido temprano por WhatsApp junto a una foto vieja que los haga reír, y proponé una videollamada corta o un brindis simultáneo a la tarde cuando ya haya menos apuro.\n\nTodas las opciones de esta sección se actualizan con su nombre real y tu firma en un segundo para que copies sin errores o descargues una tarjeta visual lista para mandar por chat o redes.'
  },
  'frases-para-alguien-especial-que-esta-lejos': {
    lead:
      'Acá encontrás 50 frases de cumpleaños para alguien especial que está lejos, diseñadas para transmitir cercanía real a pesar de las fronteras, las ciudades distintas o los horarios cruzados. Son mensajes cálidos, íntimos y versátiles que podés adaptar tanto para una amistad querida como para un amor o familiar.\n\nEscribí su nombre y tu firma arriba para ajustar las 50 opciones al instante, elegí entre formatos cortos para WhatsApp o cartas más emotivas y descargá tu tarjeta PNG personalizada gratis.',
    seoTitulo: 'Claves para dedicar frases a alguien especial a la distancia sin caer en clichés',
    seoTexto:
      'Cuando dedicás un saludo a alguien especial que vive lejos, las frases genéricas sobre «los kilómetros no importan» suelen quedar vacías si no llevan un detalle verdadero de ustedes. Nombrar una costumbre que todavía te hace acordar a esa persona o una anécdota de la última vez que se vieron devuelve calidez inmediata.\n\nUna buena dedicatoria a la distancia transmite dos certezas: que su lugar en tu vida sigue intacto y que te alegrás genuinamente por los pasos que está dando allá. Ese equilibrio transforma la nostalgia en compañía afectiva real.\n\nUsá los textos breves de esta colección para sorprender temprano según su reloj local o publicar una historia dedicada, y elegí las opciones más desarrolladas si querés enviar una nota profunda acompañada de un audio tranquilo.\n\nCon el personalizador superior podés agregar su apodo, guardar tus frases preferidas para elegir sin apuro y generar una postal descargable cuadrada o vertical Story en pocos segundos.'
  }
};

function construirLead(hub, perfil, stats, dest) {
  const slug = hub.slug;
  const tema = temaLimpio(hub);
  const n = stats.total;

  if (perfil === 'duelo') {
    const p1 = pick([
      `Reunimos ${n} mensajes serenos y respetuosos sobre ${tema}, redactados con sensibilidad para acompañar la memoria, el afecto y la calma de la familia sin recurrir a frases automáticas.`,
      `Esta colección ofrece ${n} palabras cuidadas sobre ${tema}, pensadas para acompañar a ${dest} con ternura, respeto y honestidad emocional en una fecha que invita al recuerdo.`,
      `Encontrá ${n} dedicatorias sobrias sobre ${tema}, escritas en español claro para expresar cercanía, memoria viva y acompañamiento genuino sin caer en lugares comunes.`
    ], slug, 1);
    const p2 = pick([
      `Podés filtrar entre textos breves para acompañar por WhatsApp y palabras más pausadas para una tarjeta o recuerdo familiar; escribí el nombre arriba para adaptar las ${n} opciones al instante y descargar una postal en tonos sobrios.`,
      `Usá los filtros superiores para elegir la extensión más adecuada al momento, sumá el nombre y tu firma para ajustar cada texto en vivo y copiá limpio en un clic o bajá tu imagen en paletas serenas.`
    ], slug, 2);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'aniv_meses' || perfil === 'aniv_anos') {
    const etapa = perfil === 'aniv_meses' ? 'esta etapa de noviazgo que recién crece' : 'el camino compartido en pareja';
    const p1 = pick([
      `Celebrá ${tema} con ${n} mensajes originales pensados para reflejar ${etapa} sin sonar a frase repetida. Combinamos dedicatorias breves para sorprender a la mañana, textos cómplices y cartas románticas con historia real.`,
      `Acá tenés ${n} dedicatorias inéditas sobre ${tema}, escritas para agradecer lo cotidiano de ${etapa} con naturalidad y afecto verdadero. Cada propuesta evita clichés vacíos y se adapta a vínculos reales.`,
      `Si querés saludar por ${tema} con palabras que se sientan propias, reunimos ${n} textos variados para ${dest}: desde líneas cortas para WhatsApp hasta cartas extensas para acompañar una foto o cena especial.`
    ], slug, 3);
    const p2 = pick([
      `Escribí el apodo de tu pareja y tu firma en la barra superior para personalizar las ${n} opciones en vivo, filtrá por tono o largo y descargá tu tarjeta PNG cuadrada o Story 1080×1920 gratis.`,
      `Personalizá al instante cualquiera de los ${n} textos con sus nombres arriba de la grilla, guardá tus favoritos para compararlos y enviá directo por WhatsApp o como postal visual lista para guardar.`
    ], slug, 4);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'fecha_especial') {
    const p1 = pick([
      `Reunimos ${n} mensajes originales sobre ${tema} pensados para destacar entre las cadenas reenviadas que saturan el teléfono en fechas muy celebradas. Incluimos opciones cortas, cálidas, reflexivas y listas para tarjeta.`,
      `Para saludar por ${tema} con calidez genuina, organizamos ${n} dedicatorias inéditas en español claro, ideales para dedicar a ${dest} por WhatsApp, redes sociales o en una nota impresa.`
    ], slug, 5);
    const p2 = pick([
      `Sumá el nombre del destinatario y tu firma arriba para adaptar los ${n} textos al instante, filtrá por formato breve o emotivo y descargá tu tarjeta visual PNG o Story gratis.`,
      `Elegí el largo que mejor calce con tu canal, personalizá las ${n} opciones en vivo desde la barra superior y compartí en un clic por chat o en postal imprimible.`
    ], slug, 6);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'jubilacion' || perfil === 'nacimiento') {
    const motivo = perfil === 'jubilacion'
      ? 'celebrar el cierre de una trayectoria laboral y el comienzo de una etapa de merecido descanso'
      : 'recibir con ternura una nueva vida y abrazar a la familia en estos primeros momentos';
    const p1 = `Reunimos ${n} textos originales sobre ${tema}, redactados con calidez y equilibrio para ${motivo}. Cada opción combina sinceridad, respeto y detalles concretos para que tu saludo deje un lindo recuerdo.`;
    const p2 = `Escribí el nombre del homenajeado y cómo firmás arriba para adaptar las ${n} propuestas al instante, filtrá por tono o extensión y descargá gratis la postal PNG o lista para imprimir.`;
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'bilingue') {
    const p1 = `Descubrí ${n} opciones originales de ${tema}, cada una con su redacción cuidada en el idioma original y su traducción natural al español para que sepas exactamente qué tono estás enviando.`;
    const p2 = `Podés filtrar entre líneas breves ideales para historias de Instagram y mensajes más completos para WhatsApp o tarjeta, sumar el nombre arriba y descargar tu postal PNG en segundos.`;
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'meses') {
    const p1 = `Organizamos ${n} dedicatorias inéditas sobre ${tema}, inspiradas en el clima de esta temporada del año y en los rasgos de quienes celebran su vuelta al sol durante este mes. Incluimos textos cortos, emotivos, con humor y cartas listas para dedicar.`;
    const p2 = `Arriba podés consultar además los dos signos zodiacales correspondientes al mes, personalizar las ${n} opciones con su nombre y tu firma en vivo y descargar gratis tu tarjeta PNG o Story vertical.`;
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'carta') {
    const p1 = pick([
      `Si buscás dedicar unas palabras profundas que superen el saludo apurado, reunimos ${n} textos extensos sobre ${tema} con estructura epistolar cálida, ritmo fluido y emoción sincera para ${dest}.`,
      `Acá encontrás ${n} cartas y textos desarrollados sobre ${tema}, redactados párrafo a párrafo para expresar gratitud, recuerdos reales y buenos deseos hacia ${dest} sin caer en frases repetidas.`
    ], slug, 7);
    const p2 = pick([
      `Personalizá las ${n} cartas en vivo con su apodo y tu firma desde la barra superior, desplegá el texto completo antes de copiar y descargá la postal editorial o imprimila para entregar en mano.`,
      `Usá los filtros por tono emotivo, reflexivo o de gratitud para elegir rápido, adaptá el saludo con su nombre real arriba y compartí por WhatsApp o en tarjeta visual lista para guardar.`
    ], slug, 8);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'poema') {
    const p1 = `Reunimos ${n} poemas y versos inéditos sobre ${tema}, escritos con musicalidad clara y estrofas limpias pensadas para conmover a ${dest} tanto en una lectura en voz alta como en una tarjeta impresa.`;
    const p2 = `Al copiar respetamos cada salto de verso y separación entre estrofas; escribí el nombre y tu firma arriba para personalizar las ${n} opciones al instante o descargarlas como postal PNG.`;
    return `${p1}\n\n${p2}`;
  }

  // Resto de perfiles de cumpleanos (profesionales, fe, humor, distancia, edades, pareja, amistad, familia, invitacion, atrasado, embarazo)
  const p1 = pick([
    `Encontrá ${n} mensajes originales sobre ${tema} pensados para que tu saludo a ${dest} suene cercano, honesto y lejos de las cadenas genéricas. Reunimos ${stats.breves} opciones breves para chat rápido, ${stats.intermedios} intermedias y ${stats.largos} más desarrolladas.`,
    `Reunimos ${n} dedicatorias inéditas sobre ${tema} escritas en español natural para saludar a ${dest} según el momento y el nivel de confianza. Cada texto cuida el ritmo y el tono para leerse con frescura en celular o tarjeta.`,
    `Si querés saludar por ${tema} sin repetir lo mismo de cada año, acá tenés ${n} propuestas variadas para ${dest} con un promedio de ${stats.promedio} palabras, combinando calidez cotidiana, gratitud y estilo listo para personalizar.`,
    `Seleccionamos ${n} textos originales sobre ${tema} diseñados para conectar de verdad con ${dest}, abarcando desde frases ágiles para WhatsApp y estados hasta dedicatorias emotivas pensadas para acompañar un regalo.`
  ], slug, 9);

  const p2 = pick([
    `Escribí el nombre o apodo real y tu firma en la barra superior para adaptar las ${n} opciones al instante, filtrá por tono o largo y descargá gratis tu tarjeta PNG cuadrada o Story 1080×1920.`,
    `Usá el personalizador rápido de esta página para actualizar los ${n} saludos en vivo, guardá tus favoritos para comparar con calma y compartí directo por WhatsApp, Instagram o postal imprimible.`,
    `Filtrá las ${n} propuestas por extensión o estilo, sumá su apodo arriba para que el mensaje salga listo para copiar en un clic y creá una tarjeta visual limpia sin registro.`
  ], slug, 10);

  return `${p1}\n\n${p2}`;
}

function construirSeoTitulo(hub, perfil, dest) {
  const slug = hub.slug;
  const nombre = nombreHub(hub);
  const tema = temaLimpio(hub);

  if (perfil === 'duelo') {
    return pick([
      `Cómo expresar cercanía y respeto en ${tema}`,
      `Criterios humanos al elegir palabras sobre ${tema}`,
      `Qué conviene decir y qué evitar en ${tema}`
    ], slug, 11);
  }
  if (perfil === 'aniv_meses' || perfil === 'aniv_anos') {
    return pick([
      `Cómo celebrar ${tema} con palabras que reflejen su historia`,
      `Claves concretas para dedicar ${tema} sin clichés`,
      `Qué detalles vuelven inolvidable un saludo por ${tema}`
    ], slug, 12);
  }
  if (perfil === 'profesionales') {
    return pick([
      `Etiqueta y tono adecuado al dedicar ${tema}`,
      `Cómo equilibrar cordialidad y respeto en ${tema}`,
      `Guía práctica de trato y canal para ${tema}`
    ], slug, 13);
  }
  if (perfil === 'distancia') {
    return pick([
      `Cómo acortar kilómetros con tus palabras en ${tema}`,
      `Claves de horario y calidez al enviar ${tema}`,
      `Cómo hacer presente tu abrazo a través de ${tema}`
    ], slug, 14);
  }
  if (perfil === 'fe') {
    return pick([
      `Cómo combinar fe sincera y afecto cotidiano en ${tema}`,
      `Claves para dedicar bendiciones auténticas en ${tema}`,
      `Qué hace conmovedora una dedicatoria de ${tema}`
    ], slug, 15);
  }
  if (perfil === 'humor') {
    return pick([
      `Cómo usar el humor con acierto y calidez en ${tema}`,
      `Claves para hacer reír sin perder afecto en ${tema}`
    ], slug, 16);
  }
  if (perfil === 'carta') {
    return pick([
      `Estructura en cuatro tiempos para dedicar ${tema}`,
      `Cómo elegir y adaptar una carta emotiva en ${tema}`
    ], slug, 17);
  }
  if (perfil === 'poema') {
    return pick([
      `Cómo compartir versos de ${tema} conservando su ritmo`,
      `Claves para emocionar al dedicar ${tema}`
    ], slug, 18);
  }
  if (perfil === 'fecha_especial' || perfil === 'jubilacion' || perfil === 'nacimiento') {
    return pick([
      `Cómo lograr que tu mensaje de ${tema} destaque con sinceridad`,
      `Claves prácticas para personalizar saludos de ${tema}`
    ], slug, 19);
  }

  return pick([
    `Cómo hacer que tu dedicatoria de ${tema} suene genuina`,
    `Claves concretas para adaptar ${tema} a ${dest}`,
    `Qué funciona mejor al enviar ${tema} según el canal`,
    `Guía de estilo y personalización para ${tema}`
  ], slug, 20)
    .replace(/\bde\s+(frases|mensajes|palabras|dedicatorias|saludos|felicitaciones|cartas|poemas)\s+/i, 'en $1 ')
    .replace(/\bpara\s+(frases|mensajes|palabras|dedicatorias|saludos|felicitaciones|cartas|poemas)\s+/i, 'en $1 ')
    || `Guía editorial y criterios prácticos sobre ${nombre}`;
}

function construirSeoTexto(hub, perfil, stats, dest) {
  const slug = hub.slug;
  const tema = temaLimpio(hub);
  const n = stats.total;

  // Parrafo 1: Piramide invertida + foco psicologico del vinculo/ocasion
  const p1PorPerfil = {
    duelo: [
      `Al escribir sobre ${tema}, lo que más alivia no es una explicación grandilocuente, sino la presencia serena y el reconocimiento honesto del vínculo. Un mensaje breve que nombra con respeto a quien se recuerda acompaña mucho mejor que los discursos forzados.`,
      `Cuando una fecha despierta ausencia, encontrar palabras sobre ${tema} cuesta porque nadie quiere sonar frío ni invasivo. La regla más cuidada es priorizar la sencillez: validar el recuerdo, honrar el legado vivido y ofrecer escucha real sin apuros.`
    ],
    aniv_meses: [
      `En ${tema}, el encanto está en la frescura del presente: celebrar lo que ya disfrutan juntos sin cargar el mensaje de promesas solemnes. Nombrar una costumbre linda que nació en estas semanas vale mucho más que una cita genérica.`,
      `Dedicar palabras por ${tema} funciona mejor cuando mantiene el tono cómplice del día a día. Hablar de las risas compartidas, el alivio de encontrarse después del trabajo o la última salida espontánea vuelve el saludo completamente propio.`
    ],
    aniv_anos: [
      `Celebrar ${tema} pide honrar la historia real que construyeron: los proyectos logrados, las charlas honestas y la manera en que se sostuvieron en días exigentes. Agradecer el equipo cotidiano emociona mucho más que repetir frases de película.`,
      `A medida que suma tiempo una pareja, los textos por ${tema} ganan fuerza cuando combinan memoria y admiración presente. Contarle qué seguís eligiendo hoy de su forma de ser renueva la emoción desde la primera línea.`
    ],
    bilingue: [
      `Enviar ${tema} suma un guiño original cuando la frase en el idioma extranjero conserva su ritmo natural y va acompañada de un cierre cercano en español. Así evitás errores de traducción literal y mantenés el calor humano del saludo.`,
      `La clave para acertar con ${tema} es elegir una línea breve y clara en el idioma original cuando va en historias o tarjetas, y sumar una posdata tuya en español para que ${dest} sienta el mensaje escrito especialmente para la ocasión.`
    ],
    invitacion: [
      `Una buena invitación en ${tema} resuelve dos objetivos en pocas líneas: contagia ganas de reunirse en la primera oración y deja cristalinos el día, horario, dirección y forma de confirmar asistencia en las siguientes.`,
      `Cuando redactás textos para ${tema}, la claridad ahorra decenas de consultas el mismo día. Especificar si hace falta llevar algo, si la reunión es sorpresa o hasta qué fecha confirmar ayuda a que todos se organicen sin estrés.`
    ],
    atrasado: [
      `En ${tema}, la honestidad breve desarma cualquier incomodidad al instante: reconocer el retraso en media línea y dedicar un deseo pensado con calma deja mucho mejor recuerdo que desaparecer por vergüenza.`,
      `Un saludo de ${tema} tiene una ventaja inesperada: llega cuando ya pasó la lluvia de notificaciones del día exacto y ${dest} puede leerlo con tranquilidad real. Cerrar proponiendo un café o brindis pendiente convierte el atraso en un lindo gesto.`
    ],
    humor: [
      `El secreto de ${tema} es reírse con ${dest} y nunca de sus inseguridades. Un guiño cómplice sobre anécdotas compartidas, las velas o las costumbres de siempre funciona excelente cuando cierra con al menos una oración sincera de afecto.`,
      `En ${tema}, el ritmo lo es todo: un remate breve en la primera o segunda oración dispara la sonrisa, y un cierre cálido demuestra que detrás de la broma hay cariño verdadero.`
    ],
    fe: [
      `Una dedicatoria de ${tema} conmueve de verdad cuando une fe cercana y reconocimiento personal. Nombrar primero una virtud concreta de ${dest} —su generosidad, calma o entrega— hace que la bendición posterior suene sentida y no como una cadena reenviada.`,
      `En ${tema}, la espiritualidad brilla más cuando se apoya en deseos concretos para la vida diaria: salud, paz en el hogar, claridad en las decisiones y fuerzas renovadas para la etapa que comienza.`
    ],
    profesionales: [
      `En el entorno laboral o educativo, acertar con ${tema} depende de respetar exactamente el trato habitual —vos o usted— y elegir un tono cordial sin invadir la esfera privada. La sobriedad cálida siempre construye confianza.`,
      `Un saludo bien medido de ${tema} destaca una cualidad observable de ${dest} —su criterio, predisposición o liderazgo sereno— y desea un gran año personal y profesional en pocas líneas limpias.`
    ],
    distancia: [
      `Al enviar ${tema}, el equilibrio clave consiste en mostrar cuánto pensás en ${dest} sin teñir la fecha de tristeza. Celebrar sus logros en la ciudad donde vive y mirar hacia el próximo reencuentro mantiene el mensaje luminoso.`,
      `Cuando los kilómetros separan, un saludo de ${tema} cobra doble valor si llega temprano según su huso horario local. Madrugar con unas palabras pensadas demuestra presencia real aunque no puedan compartir la mesa.`
    ],
    embarazo: [
      `En ${tema}, el gesto más valorado es celebrar primero a la mujer por sí misma —su fuerza, alegría y descanso— y no reducir todo el saludo únicamente al bebé que viene en camino.`,
      `Al dedicar palabras sobre ${tema}, evitá consejos no pedidos sobre crianza o noches sin dormir: enfocate en mimarla, celebrar su nueva etapa y ofrecer ayuda concreta que le facilite los próximos meses.`
    ],
    infantil: [
      `Escribir ${tema} tiene un encanto doble: alegra hoy a la familia que acompaña la crianza y deja un recuerdo precioso que ese niño va a releer con sonrisa dentro de varios años.`,
      `En ${tema}, anclar el mensaje en un gusto real de esta edad —su risa contagiosa, sus juegos favoritos o lo nuevo que aprendió este año— guarda una fotografía viva de su infancia en pocas líneas.`
    ],
    jovenes: [
      `Al saludar en ${tema}, evitá el tono de sermón o las advertencias largas sobre el futuro. Reconocer su personalidad propia, sus intereses de hoy y el orgullo de verlo crecer conecta infinitamente mejor.`,
      `Las dedicatorias de ${tema} funcionan cuando equilibran calidez genuina y respeto por su etapa: celebrar su independencia naciente, sus amistades y sus proyectos hace que se sienta verdaderamente escuchado.`
    ],
    adultos: [
      `En ${tema}, salir de los chistes gastados sobre cumplir años marca una diferencia enorme. Celebrar la serenidad ganada, los vínculos elegidos y los proyectos actuales deja un mensaje maduro y disfrutable.`,
      `Cuando dedicás ${tema}, deseale aquello que suele escasear en la vida adulta: descanso real, salud, tiempo sin apuros con su gente y motivos propios para disfrutar el año que empieza.`
    ],
    mayores: [
      `En ${tema}, agradecer la historia vivida, las sobremesas largas y el ejemplo paciente que une a la familia emociona mucho más que cualquier fórmula formal. Cada enseñanza recordada vale oro.`,
      `Dedicar ${tema} con respeto y ternura significa celebrar tanto el camino recorrido como el presente: pedir salud, tranquilidad cotidiana y muchos encuentros compartidos en casa.`
    ],
    poema: [
      `Un buen verso en ${tema} conmueve cuando conserva imágenes claras y pausas limpias entre estrofas. Leerlo una vez en voz alta antes de enviarlo permite comprobar que la música del texto encaja con el carácter de ${dest}.`,
      `En ${tema}, menos artificio y más sinceridad siempre ganan: dos o tres estrofas bien medidas con un nombre propio arriba dejan una huella poética que se guarda durante años.`
    ],
    carta: [
      `Una carta de ${tema} emociona sin sentirse pesada cuando ordena el afecto en cuatro pasos naturales: saludo cercano, un recuerdo puntual, agradecimiento genuino y deseo sereno para la etapa nueva.`,
      `Al elegir un texto largo en ${tema}, el valor está en la profundidad honesta: tomarse unos minutos para decirle a ${dest} aquello que la rutina diaria suele dejar sin nombrar.`
    ],
    pareja: [
      `En ${tema}, lo que más emociona es sentirse elegido en lo cotidiano, no escuchar frases repetidas de molde. Nombrar un rasgo concreto que admirás de ${dest} este último año hace que el mensaje cobre vida inmediata.`,
      `Dedicar ${tema} con autenticidad implica mezclar ternura, complicidad real y gratitud por la vida diaria compartida: esa combinación siempre supera a las promesas abstractas.`
    ],
    amistad: [
      `Un gran saludo en ${tema} combina el humor cómplice de siempre con esa gratitud sincera que entre amigos pocas veces se dice de frente. Nombrar una charla larga o cómo apareció cuando hacía falta le da alma al texto.`,
      `En ${tema}, celebrar la lealtad cotidiana y cerrar proponiendo un encuentro concreto —un café, una cena o un brindis pendiente— transforma un buen mensaje en una excusa real para verse.`
    ],
    meses: [
      `Al escribir ${tema}, conectar el saludo con la atmósfera del mes y el temperamento de quienes nacieron en esta época vuelve el mensaje mucho más personal desde el primer renglón.`,
      `Quienes celebran en ${tema} agradecen un saludo que salga de la tarjeta genérica y sume un guiño a la temporada del año, sus proyectos del trimestre y su forma particular de festejar.`
    ],
    fecha_especial: [
      `En ${tema}, los teléfonos se llenan de imágenes idénticas reenviadas en cadena. Cuatro líneas claras con el nombre real de ${dest} y un gesto de gratitud verdadero destacan de inmediato.`,
      `Acertar con ${tema} consiste en mantener el mensaje cálido, breve y humano: reconocer el vínculo compartido este año vale mucho más que un saludo recargado.`
    ],
    jubilacion: [
      `Despedir una trayectoria en ${tema} pide equilibrar reconocimiento profesional y alegría genuina por la libertad que comienza. Destacar lo que enseñó y celebrar sus mañanas sin despertador siempre emociona.`,
      `En ${tema}, el mejor homenaje recuerda una contribución real —su paciencia, criterio o buen humor en el equipo— y abre paso con entusiasmo a los viajes, hobbies y descansos merecidos.`
    ],
    nacimiento: [
      `Acompañar ${tema} con tacto significa abrazar tanto al bebé como a mamá y papá, celebrando la llegada con suavidad y evitando consejos no pedidos sobre rutinas o descanso.`,
      `Un mensaje cuidado en ${tema} guarda la emoción de los primeros días en palabras simples y luminosas que la familia puede releer tranquila cuando el bebé duerme.`
    ],
    familia: [
      `En ${tema}, el ingrediente que transforma una felicitación correcta en un recuerdo emotivo es la concreción: nombrar un gesto real de ${dest}, una sobremesa compartida o algo que agradecés de este último año.`,
      `Al buscar palabras sobre ${tema}, el mejor filtro es preguntarte si eso mismo se lo dirías cara a cara. Cuando el lenguaje es natural y cercano, ${dest} nota enseguida que pensaste de verdad en su día.`
    ]
  };

  const p1 = pick(p1PorPerfil[perfil] || p1PorPerfil.familia, slug, 21);

  // Parrafo 2: Principio SUCCESs (Concreto + Historia / Contraste contra cliches)
  const p2 = perfil === 'duelo'
    ? pick([
        `Evitá frases automáticas que intentan explicar el dolor y elegí en cambio una imagen concreta: un consejo suyo que todavía aplicás, una comida familiar que traía alegría o un rasgo de su carácter que sigue presente en casa.`,
        `Para dar consuelo real sin caer en lugares comunes, sumá un recuerdo sereno y específico. Nombrar una cualidad auténtica o ofrecer compañía concreta en los próximos días vale más que cualquier frase hecha.`
      ], slug, 22)
    : perfil === 'aniv_meses' || perfil === 'aniv_anos'
    ? pick([
        `El truco editorial que diferencia una dedicatoria memorable de un texto genérico es reemplazar adjetivos repetidos por una micro-escena real: la caminata bajo la lluvia, el café compartido o cómo se ríen de lo mismo incluso en días cansados.`,
        `Si querés que el saludo se quede grabado, agregá una línea breve con un plan cercano para ustedes dos. Combinar memoria concreta con ilusión por lo que viene multiplica la calidez de cualquier texto.`
      ], slug, 23)
    : perfil === 'profesionales'
    ? pick([
        `Un detalle concreto —agradecer la claridad en un proyecto, la buena disposición diaria o el trato respetuoso con el equipo— evita que el saludo suene protocolar y construye aprecio genuino sin perder profesionalismo.`,
        `Antes de enviar, revisá que el saludo no mezcle asuntos laborales pendientes ni reclamos: dejar el mensaje limpio y dedicado únicamente a desearle un excelente nuevo año siempre deja mejor imagen.`
      ], slug, 24)
    : pick([
        `Para salir del saludo automático, aplicá una regla práctica: sumá una escena concreta que compartieron —una charla en auto, un café, un consejo útil o una risa reciente— al inicio o como posdata. Ese detalle convierte un buen texto en un mensaje irrepetible.`,
        `Las dedicatorias que más emocionan evitan las palabras rebuscadas y nombran lo que de verdad valorás de ${dest}. Un apodo afectuoso en la apertura y un deseo puntual para sus planes de este año hacen toda la diferencia.`,
        `Pensá en una cualidad específica que admirás hoy en ${dest} —su paciencia, su humor o su forma de estar presente— y dejala asomar en tu posdata. Ese anclaje concreto vuelve cercano incluso el mensaje más breve.`
      ], slug, 25);

  // Parrafo 3: Datos reales del catalogo + guia de canal/extension/horario
  const partesExt = [
    stats.breves > 0 ? `${stats.breves} ${stats.breves === 1 ? 'texto breve' : 'textos breves'} (hasta 65 palabras)` : '',
    stats.intermedios > 0 ? `${stats.intermedios} ${stats.intermedios === 1 ? 'intermedio' : 'intermedios'}` : '',
    stats.largos > 0 ? `${stats.largos} ${stats.largos === 1 ? 'desarrollado' : 'desarrollados'}` : ''
  ].filter(Boolean);
  const listaExt =
    partesExt.length <= 1 ? (partesExt[0] || '') : `${partesExt.slice(0, -1).join(', ')} y ${partesExt[partesExt.length - 1]}`;
  const detalleExtension =
    stats.breves > 0 && stats.largos > 0
      ? `esta colección reúne ${listaExt} (promedio de ${stats.promedio} palabras)`
      : stats.largos > 0
      ? `cada una de las ${n} propuestas cuenta con un desarrollo amplio (promedio de ${stats.promedio} palabras) pensado para leerse con pausa`
      : `las ${n} opciones promedian ${stats.promedio} palabras para ofrecer lectura ágil sin perder calidez`;

  const p3 = perfil === 'duelo'
    ? `Pensando en el canal y el momento, ${detalleExtension}. Los textos más breves funcionan con tacto para un mensaje privado por WhatsApp sin abrumar, mientras que los más pausados acompañan bien una nota escrita, un recuerdo impreso o una fecha conmemorativa.`
    : perfil === 'aniv_meses' || perfil === 'aniv_anos'
    ? `Para elegir según el momento del día, ${detalleExtension}. Un saludo breve temprano sorprende antes de empezar la rutina, mientras que los textos más extensos brillan junto a una foto, un desayuno especial o la cena de la noche.`
    : `Según el canal que vayas a usar, ${detalleExtension}. Si enviás por WhatsApp entre muchas notificaciones o subís un estado de Instagram, elegí las opciones ágiles; si acompañás un presente, imprimís una postal o escribís en horario tranquilo, aprovechá las versiones más amplias.`;

  // Parrafo 4: Accionabilidad + personalizacion + formatos visuales
  const p4 = perfil === 'duelo'
    ? `Todas las opciones de ${tema} fueron revisadas para mantener un tono respetuoso y sereno. Escribí el nombre y tu firma en la barra superior para personalizar los ${n} textos al instante, copiar limpio en un clic o descargar una postal visual en tonos Marfil o Celeste.`
    : perfil === 'aniv_meses' || perfil === 'aniv_anos'
    ? `Cada una de las ${n} propuestas sobre ${tema} está redactada en español claro y cercano para que puedas personalizarla con el apodo de tu pareja, sumar una posdata breve y descargar gratis tu tarjeta PNG cuadrada 1080×1080 o vertical Story 1080×1920.`
    : `Cada una de las ${n} propuestas sobre ${tema} está escrita en español natural y lista para adaptar en segundos: completá nombre y firma arriba, compará tus favoritas con el botón de guardado y compartí por WhatsApp, Instagram o tarjeta PNG imprimible sin costo.`;

  return `${p1}\n\n${p2}\n\n${p3}\n\n${p4}`;
}

function main() {
  const files = [
    path.resolve('data/contenido.json'),
    ...fs
      .readdirSync(path.resolve('data/categorias'))
      .filter((f) => f.endsWith('.json'))
      .sort()
      .map((f) => path.resolve('data/categorias', f))
  ];

  // Cargar todo primero para calcular estadisticas reales por hub
  const datosPorArchivo = files.map((f) => ({ file: f, items: JSON.parse(fs.readFileSync(f, 'utf8')) }));
  const msgsPorCat = new Map();
  for (const { items } of datosPorArchivo) {
    for (const r of items) {
      if (r.tipo === 'mensaje') {
        if (!msgsPorCat.has(r.categoria)) msgsPorCat.set(r.categoria, []);
        msgsPorCat.get(r.categoria).push(r);
      }
    }
  }

  const leadsVistos = new Set();
  const seoTitulosVistos = new Set();
  const seoTextosVistos = new Set();
  let actualizados = 0;

  for (const entry of datosPorArchivo) {
    let modificado = false;
    for (const r of entry.items) {
      if (r.tipo !== 'hub') continue;
      // Preservar los 2 hubs flagship ya redactados artesanalmente a medida
      if (r.slug === 'banderines-de-cumpleanos-para-imprimir' || r.slug === 'motivaciones') {
        leadsVistos.add(r.lead);
        seoTitulosVistos.add(r.seoTitulo);
        seoTextosVistos.add(r.seoTexto);
        continue;
      }

      const override = OVERRIDES_PRIORITARIOS[r.slug];
      if (override) {
        r.lead = override.lead;
        r.seoTitulo = override.seoTitulo;
        r.seoTexto = override.seoTexto;
      } else {
        const perfil = detectarPerfil(r);
        const msgs = msgsPorCat.get(r.slug) || [];
        const stats = statsMensajes(msgs);
        const dest = destLimpio(r, perfil);

        r.lead = construirLead(r, perfil, stats, dest);
        r.seoTitulo = construirSeoTitulo(r, perfil, dest);
        r.seoTexto = construirSeoTexto(r, perfil, stats, dest);
      }

      // Garantia de unicidad absoluta entre los 441 hubs
      if (seoTitulosVistos.has(r.seoTitulo)) {
        r.seoTitulo = `${r.seoTitulo} (${nombreHub(r)})`;
      }
      if (leadsVistos.has(r.lead)) {
        r.lead = `${r.lead}\n\nExplorá las opciones de ${nombreHub(r)} y elegí el tono exacto para tu saludo.`;
      }
      if (seoTextosVistos.has(r.seoTexto)) {
        r.seoTexto = `${r.seoTexto}\n\nColección editorial revisada para ${nombreHub(r)}.`;
      }

      leadsVistos.add(r.lead);
      seoTitulosVistos.add(r.seoTitulo);
      seoTextosVistos.add(r.seoTexto);
      actualizados++;
      modificado = true;
    }
    if (modificado) {
      fs.writeFileSync(entry.file, JSON.stringify(entry.items, null, 2) + '\n', 'utf8');
    }
  }

  console.log(`Descripciones enriquecidas en ${actualizados} categorias (unicidad leads=${leadsVistos.size}, seoTitulos=${seoTitulosVistos.size}, seoTextos=${seoTextosVistos.size}).`);
}

main();
