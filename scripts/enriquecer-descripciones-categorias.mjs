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

// Overrides hechos a mano para hubs prioritarios de GSC, Bing y verticales flagship (banderines y motivaciones)
const OVERRIDES_PRIORITARIOS = {
  'banderines-de-cumpleanos-para-imprimir': {
    lead:
      'Si buscás banderines de cumpleaños para imprimir gratis en casa sin programas de diseño ni suscripciones, acá tenés el generador interactivo en formato A4 y 40 guías prácticas paso a paso. Podés escribir el nombre exacto del agasajado, combinar letras de «FELIZ CUMPLEAÑOS» o «HAPPY BIRTHDAY» y elegir entre seis paletas listas o una versión en blanco y negro pensada para colorear en familia.\n\nAdemás del creador online en hoja A4, reunimos 40 artículos independientes con medidas exactas de triángulos y colas de golondrina, gramajes recomendados de papel o cartulina, técnicas para colgar guirnaldas sin dañar paredes y combinaciones temáticas para infancia, jóvenes y adultos.',
    seoTitulo: 'Guía completa de banderines de cumpleaños para imprimir en A4: papel, medidas y armado limpio',
    seoTexto:
      'Armar banderines de cumpleaños para imprimir en casa ahorra presupuesto y permite personalizar el festejo con el nombre real y la paleta exacta de la mesa. A diferencia de los kits comprados en cotillón que traen letras genéricas y colores chillones, imprimir tus propias banderolas en hojas A4 te da control total sobre el tamaño, la tipografía y el estilo visual de toda la decoración.\n\nLa elección del papel marca la diferencia entre una guirnalda que se dobla al primer golpe de aire y un banderín prolijo que podés guardar para próximos años. Para uso interior sobre pared o mesa dulce, una cartulina opalina o papel mate de entre 180 y 240 gramos mantiene las puntas firmes y absorbe bien la tinta sin brillos molestos en las fotos; si solo tenés papel común de 80 gramos, conviene pegarlo después sobre cartulina lisa o imprimir dos banderines por hoja para que queden más compactos.\n\nEl error más frecuente al imprimir guirnaldas caseras es escalar el archivo al azar desde el navegador y cortar los márgenes de recorte. Antes de mandar a la impresora, configurá siempre el tamaño en A4 (210 × 297 mm), activá la escala al 100 % sin ajustar a bordes y hacé una prueba en borrador con una sola letra. Dejar un margen superior de dos centímetros te permite doblar una pestaña hacia atrás o perforar dos orificios simétricos a un centímetro del borde superior.\n\nEn esta sección combinamos dos recursos complementarios: arriba tenés el estudio interactivo para diseñar y mandar a imprimir al instante cualquier frase o nombre en seis paletas más modo coloreable, y debajo contás con 40 guías editoriales dedicadas a estilos puntuales (minimalista, pastel, rústico en papel kraft, dinosaurios, flores, fútbol, 15 años, 30 años y festejos al aire libre).\n\nPara colgar la guirnalda sin arrancar pintura ni dejar marcas en la pared, usá cinta de papel de pintor, masilla adhesiva removible o ganchos livianos atados con hilo de algodón, piolín rústico o cinta bebé de raso. Si la frase es larga —por ejemplo «FELIZ CUMPLEAÑOS» más el nombre—, dividirla en dos líneas paralelas genera un efecto visual mucho más equilibrado y legible desde cualquier punto del salón.\n\nCombiná tus banderines A4 con tarjetas de mesa, invitaciones coordinadas y los mensajes descargables de nuestras colecciones para cerrar toda la identidad visual del festejo en pocos minutos, totalmente gratis y sin registro.'
  },
  'motivaciones': {
    lead:
      'Reunimos 50 textos originales de motivación diaria diseñados para despejar la cabeza, ordenar prioridades y pasar del impulso pasajero a una micro-acción concreta antes de que el día se llene de urgencias. Cada publicación evita las consignas vacías de optimismo forzado y propone un enfoque sereno, realista y aplicable desde la primera hora de la mañana.\n\nPodés activar arriba la alerta diaria en tu navegador para recibir un recordatorio tranquilo a la hora que elijas, filtrar entre los 50 textos por estilo reflexivo o práctico, sumar tu nombre o firma si querés dedicárselo a alguien y descargar la tarjeta visual PNG o Story 1080×1920 gratis.',
    seoTitulo: 'Cómo usar textos de motivación diaria con foco sereno y micro-acciones reales',
    seoTexto:
      'La mayoría de las frases motivacionales que circulan en redes fracasan por el mismo motivo: prometen euforia instantánea sin ofrecer un solo paso concreto para la jornada real. Cuando alguien atraviesa cansancio, dudas o una semana cargada de pendientes, una consigna exagerada genera más culpa que impulso. La motivación sostenible funciona al revés: baja el ruido mental y devuelve claridad sobre lo único que importa resolver hoy.\n\nPara transformar una lectura breve en resultados visibles, aplicá la regla de la micro-acción verificable: elegí una sola idea del texto que estás leyendo y traducila en una tarea de diez minutos que puedas completar antes del mediodía. Pasar de «tengo que ordenar mi vida» a «voy a cerrar hoy esa llamada pendiente y ordenar mi escritorio» desbloquea la inercia y construye confianza real.\n\nConviene evitar dos trampas clásicas al compartir o leer mensajes de ánimo: acumular decenas de citas sin detenerte a pensar en ninguna, y enviárselas a alguien que está desbordado como si todo dependiera solo de «ponerle ganas». Cuando compartís un texto de aliento con un amigo, un familiar o un compañero, sumá una línea humana reconociendo su esfuerzo real y sin exigir resultados mágicos.\n\nEsta colección de 50 textos inéditos está calibrada para distintos ritmos de lectura: reúne reflexiones ágiles ideales para leer junto al primer café o compartir en estados de WhatsApp, junto a desarrollos más pausados pensados para momentos de bloqueo, cambios de etapa, estudio exigente o reinicios laborales.\n\nEl horario en que leés tu recordatorio influye mucho en su impacto. Configurar la alerta de esta página para quince minutos antes de empezar tu bloque más importante de trabajo —o al cierre de la tarde para dejar definida la prioridad del día siguiente— convierte la lectura en un ritual simple que sostiene la disciplina sin depender del estado de ánimo.\n\nUsá el buscador y los filtros superiores para guardar tus textos preferidos en el navegador, personalizá el saludo si querés enviárselo a una persona puntual y descargá tu postal PNG en tonos limpios para tenerla a mano como fondo o recordatorio semanal.'
  },
  'feliz-cumpleanos-para-mi-esposa': {
    lead:
      'Para celebrar el cumpleaños de tu esposa con palabras que se sientan verdaderas y no repetidas, reunimos 50 mensajes románticos, tiernos y cotidianos pensados para salir de las frases automáticas. Cada texto combina admiración real, gratitud por la vida que comparten y un tono cercano que podés enviar en WhatsApp, publicar junto a una foto o entregar en mano.\n\nElegí entre saludos de cumpleaños para una esposa breves para la mañana, textos intermedios equilibrados y dedicatorias más profundas; escribí su apodo real y tu firma arriba para adaptar las 50 opciones al instante, guardar tus favoritas y descargar tu tarjeta PNG cuadrada o Story 1080×1920 gratis.',
    seoTitulo: 'Cómo elegir saludos de cumpleaños para una esposa que emocionen de verdad',
    seoTexto:
      'En el cumpleaños de tu esposa, el error más común es repetir promesas grandilocuentes que suenan iguales todos los años. Una dedicatoria memorable se construye al revés: arranca con un gesto concreto que valorás de ella —su risa de entrecasa, cómo sostiene el hogar, su mirada lúcida o el apoyo silencioso en una semana difícil— y cierra con un deseo luminoso centrado en su felicidad personal para este nuevo año.\n\nSi buscás frases de feliz cumpleaños para tu esposa que realmente la hagan detenerse a leer, elegí una micro-escena que solo ustedes dos entiendan. Mencionar el café de la mañana, un viaje chico, una comida que disfrutan juntos o una charla larga después de cenar convierte un buen texto en una carta íntima que va a releer con cariño mucho después de que termine el festejo.\n\nEvitá dos descuidos habituales al escribirle a tu pareja: dejar el saludo a último momento con dos líneas apresuradas cuando ya leyó decenas de mensajes ajenos, o felicitarla únicamente por lo que hace por la casa o los hijos sin celebrarla como mujer con sueños, proyectos y descanso propios. Reconocer quién es ella hoy y qué seguís admirando de su forma de ser multiplica la emoción.\n\nEsta colección de 50 mensajes originales está equilibrada por extensión para acompañar cada instante del día: los textos breves de lectura ágil funcionan excelente apenas se despierta o en un estado de WhatsApp con su foto, mientras que las opciones intermedias y desarrolladas brillan en una tarjeta impresa junto a flores, un desayuno sorpresa o la cena de la noche.\n\nUna estrategia sencilla que siempre emociona es dividir tu saludo en dos tiempos: enviale una frase corta y cálida temprano para ser el primer mensaje que vea en su celular, y dejá una dedicatoria más extensa escrita a mano o impresa en postal limpia para el brindis de la tarde. Si están trabajando en horarios distintos, acompañá el texto con un audio breve nombrando el plan que preparaste para celebrar.\n\nPersonalizá cualquiera de las 50 opciones con el apodo real con que la llamás y tu firma en la barra superior, filtrá por tono emotivo, corto o romántico, guardá tus candidatas para compararlas con calma y descargá gratis la postal PNG cuadrada 1080×1080 o vertical Story 1080×1920 sin marcas molestas.'
  },
  'frases-para-mi-esposa': {
    lead:
      'Si buscás frases de feliz cumpleaños para tu esposa que sean cortas, bonitas y románticas sin caer en lugares comunes, acá tenés 50 textos inéditos listos para copiar en un clic. Son ideales para saludar a primera hora por WhatsApp, acompañar una foto compartida en redes o escribir con letra clara en la tarjeta de un regalo.\n\nUsá los filtros por tono para separar opciones tiernas, agradecidas o ágiles para estados, sumá su nombre o apodo real arriba para adaptar las 50 propuestas en vivo y descargá la tarjeta visual PNG o Story en alta calidad sin registro.',
    seoTitulo: 'Qué hace que una frase corta de cumpleaños para tu esposa deje huella',
    seoTexto:
      'Una frase corta para el cumpleaños de tu esposa no necesita veinte renglones para emocionar: necesita precisión afectiva. Cuando nombrás en dos o tres oraciones claras qué admirás hoy de su forma de ser y cuánto disfrutás compartir tus días con ella, el saludo destaca al instante entre decenas de mensajes genéricos que llegan el mismo día.\n\nEvitá los clichés gastados y apoyate en detalles cotidianos reconocibles: el equipo que forman en casa, la complicidad de las pequeñas rutinas, su manera de iluminar las reuniones o las ganas de seguir sumando planes juntos este año. Esa concreción hace que incluso una frase de cuarenta palabras se sienta escrita exclusivamente para ella.\n\nUn error frecuente con los mensajes breves es reducirlos tanto que terminan sonando fríos o telegráficos. Para evitarlo, asegurate de incluir siempre tres elementos mínimos: el apodo afectuoso con que la llamás en confianza, un motivo real de gratitud del último año y un deseo puntual para su nueva etapa.\n\nEstas 50 frases originales están calibradas para leerse de una sola mirada en la pantalla del celular sin quedar cortadas por el botón de leer más, y para lucirse con excelente legibilidad sobre una fotografía familiar o en nuestras tarjetas descargables con paletas editoriales limpias.\n\nPodés combinar dos momentos a lo largo de la jornada: mandá una frase ágil por WhatsApp o dejala escrita en una nota junto al desayuno apenas arranca la mañana, y reservá una postal visual personalizada o una dedicatoria más extensa para acompañarla con un brindis tranquilo a la noche.\n\nEn las 50 frases románticas de esta sección podés activar el personalizador con su apodo y tu firma, guardar tus favoritas en el navegador para compararlas sin apuro y bajar tu imagen PNG cuadrada 1080×1080 o formato Story 1080×1920 lista para compartir.'
  },
  'feliz-cumpleanos-para-mi-esposo': {
    lead:
      'Encontrá 50 palabras de feliz cumpleaños para tu esposo escritas con calidez, admiración y compañerismo real, lejos de las cadenas frías que circulan por internet. Reunimos saludos cortos para el desayuno, mensajes de gratitud cotidiana y dedicatorias más profundas para celebrar al compañero con quien construís tu vida cada día.\n\nEscribí su apodo real y tu firma en la barra superior para personalizar las 50 opciones en segundos, filtrá por extensión o estilo según el canal que elijas y descargá gratis tu tarjeta PNG cuadrada o Story vertical lista para compartir o imprimir.',
    seoTitulo: 'Cómo escribir palabras de feliz cumpleaños para tu esposo con cercanía real',
    seoTexto:
      'Al buscar palabras de feliz cumpleaños para un esposo, muchas veces cuesta equilibrar romanticismo, respeto y naturalidad sin sonar acartonado. La clave está en valorar al hombre real detrás de la rutina diaria: su paciencia, su sentido del humor, el esfuerzo constante por la familia o la tranquilidad que te da saber que caminan a la par.\n\nUn detalle concreto vale más que cinco adjetivos repetidos. Nombrar cómo te hace reír cuando el día viene pesado, el mate o café compartido, un proyecto que encararon juntos o su manera de cuidarte en los momentos exigentes transforma una felicitación bonita en un mensaje que va a querer releer y guardar.\n\nConviene evitar dos excesos opuestos: caer en textos demasiado solemnes que nunca usarías hablando cara a cara, o hacer todo el saludo en tono de broma sin dejarle al menos una oración sincera de admiración. A muchos hombres rara vez les dicen en voz alta cuánto se valora su entrega diaria; su cumpleaños es el momento perfecto para hacerlo con claridad.\n\nPor la variedad de extensiones de estas 50 dedicatorias inéditas, podés usar un mensaje breve al inicio de su jornada laboral para sacarle una sonrisa rápida en el celular y reservar un texto intermedio o carta larga para la cena, el sobre del regalo o una tarjeta impresa.\n\nEl momento del envío suma intención: saludarlo apenas se despierta con una línea afectuosa o dejar una postal doblada junto a las llaves del auto crea una sorpresa inmediata antes de que arranquen las notificaciones del grupo familiar y del trabajo.\n\nTodas las opciones de esta colección admiten personalización instantánea con su nombre y tu firma, copia limpia en un clic, envío directo por WhatsApp y descarga en postal visual 1080×1080 o Story 1080×1920 totalmente gratis.'
  },
  'frases-para-mi-esposo': {
    lead:
      'Reunimos 50 frases cortas y bonitas de cumpleaños para tu esposo pensadas para enviar por WhatsApp, publicar junto a una foto especial o anotar a mano en la tarjeta de un regalo. Cada dedicatoria cuida un tono auténtico que mezcla amor, complicidad cotidiana y reconocimiento sincero sin exageraciones.\n\nFiltrá las 50 propuestas por estilo breve, emotivo o ideal para estados, personalizalas en vivo con el apodo que usan todos los días y bajá la tarjeta visual PNG o Story en alta calidad cuando quieras compartirla como imagen.',
    seoTitulo: 'Ideas prácticas para adaptar frases cortas de cumpleaños a tu esposo',
    seoTexto:
      'Las frases cortas de feliz cumpleaños para un esposo funcionan mejor cuando van directo al centro del vínculo: agradecer su compañía, celebrar su forma de cuidarte y desearle un año con salud, calma y disfrute propio. En tres o cuatro líneas claras y bien elegidas podés transmitir mucho más que en un discurso recargado.\n\nSi querés que el saludo se sienta irrepetible, sumá al cierre una pequeña posdata personal: el plan de la cena de esta noche, un guiño sobre su película, equipo o comida favorita, o una promesa sencilla para disfrutar el fin de semana sin apuros. Ese anclaje concreto rompe cualquier sensación de mensaje copiado.\n\nEvitá saturar una frase breve con demasiados signos o emojis que distraigan del mensaje central. Un texto sobrio, con su apodo real al comienzo y una sola imagen honesta de lo que significan juntos, se lee con muchísima más fuerza tanto en un chat privado como en una publicación pública.\n\nEstas 50 frases están calibradas para leerse completas de un vistazo en la pantalla del teléfono y lucirse despejadas sobre una fotografía o en nuestras postales descargables sin que la tipografía quede apretada ni pierda elegancia.\n\nSi además preparás un regalo o salida, usá una frase corta para abrir la mañana en WhatsApp o Instagram y anotá otra versión en la tarjeta física que va junto al obsequio; así cada momento del día tiene su propio detalle sin repetir el mismo texto dos veces.\n\nUsá la barra de personalización rápida para sumar su nombre y tu firma de una vez en las 50 tarjetas, probá el botón de guardadas para elegir con calma y compartí por WhatsApp, Instagram o tarjeta impresa sin costo.'
  },
  'feliz-cumpleanos-mama': {
    lead:
      'Celebrá el día de tu mamá con 50 frases de cumpleaños originales llenas de gratitud, ternura y calidez cotidiana, redactadas para emocionar sin caer en lugares comunes. Incluimos opciones cortas ideales para saludar apenas amanece por WhatsApp, mensajes emotivos para dedicar en familia y textos listos para escribir en una tarjeta junto a flores o un regalo.\n\nPersonalizá al instante las 50 dedicatorias escribiendo cómo la llamás («Mami», «Ma» o su nombre) y tu firma arriba, filtrá por extensión o estilo y descargá tu postal PNG cuadrada o Story 1080×1920 sin registro.',
    seoTitulo: 'Qué escribir en las frases de cumpleaños para tu mamá para que se emocione',
    seoTexto:
      'A una mamá no la conmueven las frases grandilocuentes de molde, sino sentirse verdaderamente vista por todo lo que entrega en silencio durante el año. Cuando tu mensaje nombra algo real suyo —una comida que siempre salva el domingo, un consejo oportuno, su paciencia infinita o la calma de sus abrazos— el efecto emocional es inmediato.\n\nPara lograr un saludo inolvidable, combiná gratitud por su historia con un deseo centrado en ella hoy: deseale descanso sin culpas, salud plena, salidas lindas y tiempo propio para disfrutar lo que más le gusta, más allá de cuidar siempre a los demás.\n\nEl error más frecuente en los saludos para mamá es hablar únicamente de sacrificio y cansancio, dejando fuera su alegría, su humor y sus proyectos actuales. Celebrar a la mujer completa detrás del rol de madre vuelve el mensaje luminoso, respetuoso y mucho más disfrutable.\n\nEn estas 50 propuestas originales tenés formatos pensados para cada momento de la jornada: textos ágiles de lectura rápida para ser el primer mensaje de la mañana en WhatsApp, dedicatorias intermedias equilibradas para redes y opciones más amplias si buscás acompañar un presente o leerlas en la mesa familiar.\n\nSi vivís cerca, pasar una frase elegida a una tarjeta de papel o imprimir la postal limpia para dejársela junto al desayuno convierte unas palabras en un recuerdo que suele guardar años enteros; si viven lejos, combiná el saludo temprano con una foto vieja que la haga sonreír y una llamada sin apuros.\n\nCon el personalizador rápido de esta página podés insertar su apodo en las 50 frases en un segundo, copiar limpio en un clic o abrir la vista de tarjeta para elegir paleta de color, sumar una foto propia y descargar o imprimir tu postal gratis.'
  },
  'feliz-cumpleanos-mama-texto-largo': {
    lead:
      'Si querés regalarle a tu mamá una dedicatoria profunda que pueda leer despacio y guardar para siempre, reunimos 50 textos largos y cartas emotivas de feliz cumpleaños escritas con ritmo cálido y sincero. Cada texto evita los lugares comunes y se apoya en la gratitud real de todos los días, los recuerdos compartidos y el cariño que crece con los años.\n\nIngresá cómo llamás a tu mamá y tu firma en la barra superior para adaptar los 50 textos largos al instante, leé cualquiera completo sin salir de la página y descargá la tarjeta editorial imprimible o PNG gratis.',
    seoTitulo: 'Estructura en cuatro tiempos para un texto largo de cumpleaños para mamá',
    seoTexto:
      'Un texto largo de cumpleaños para mamá emociona sin aburrir cuando respeta cuatro tiempos claros: un saludo cercano con su apodo real, un recuerdo concreto vivido junto a ella, un reconocimiento explícito de lo que aprendiste mirándola vivir y un cierre sereno deseándole alegría, salud y descanso propio.\n\nEscribir con párrafos cortos de dos o tres oraciones hace que la carta se lea con fluidez tanto en la pantalla del teléfono como en una hoja escrita a mano. Evitar rodeos solemnes y hablarle con la misma calidez que en una charla de cocina multiplica la autenticidad de cada frase.\n\nUn error habitual al redactar dedicatorias extensas es repetir la misma idea de tres maneras distintas para estirar el texto. En lugar de rellenar renglones, anclá cada párrafo en un momento real distinto: una enseñanza de tu infancia, un gesto reciente que te conmovió y algo lindo que querés compartir con ella este año.\n\nEsta colección reúne 50 cartas desarrolladas con estructura epistolar cuidada y varios párrafos respirables, pensadas para que no tengas que empezar frente a una hoja en blanco y puedas adaptarlas en segundos con tus propios recuerdos.\n\nSi vivís cerca, pasar una de estas dedicatorias a papel o imprimirla como postal limpia para dejarla junto al desayuno convierte tus palabras en el mejor regalo de la jornada; si están en otra ciudad, enviala en un horario tranquilo —cuando pueda leerla sin apuros— acompañada de una foto juntas.\n\nTodas las opciones de esta colección pueden personalizarse con nombre, posdata y firma en vivo para copiar sin perder saltos de párrafo o descargar como tarjeta editorial lista para compartir e imprimir.'
  },
  'feliz-cumpleanos-papa': {
    lead:
      'Si buscás cómo desear feliz cumpleaños a tu papá con palabras honestas y cercanas, reunimos 50 frases y mensajes originales que equilibran admiración, cariño y respeto real. Encontrarás saludos breves para WhatsApp temprano, dedicatorias emotivas y textos con calidez familiar pensados para emocionar sin caer en discursos artificiales.\n\nEscribí el nombre o apodo de tu papá («Papi», «Viejo», «Pa») y tu firma arriba para adaptar los 50 mensajes en vivo, filtrar por tono o largo y descargar gratis una tarjeta PNG cuadrada o Story imprimible.',
    seoTitulo: 'Cómo desear feliz cumpleaños a tu papá con palabras que realmente le lleguen',
    seoTexto:
      'Desear feliz cumpleaños a tu papá puede resultar difícil cuando es un hombre de pocas palabras o cuando querés salir del clásico saludo corto que se repite cada año. La fórmula más efectiva es concreta y directa: nombrá una enseñanza, una costumbre compartida o un esfuerzo suyo que hoy valorás todavía más.\n\nUn detalle real —cómo te enseñó a resolver un problema, las charlas de sobremesa, su humor particular, los viajes en auto o su presencia silenciosa cuando más hizo falta— toca fibras profundas sin necesidad de escribir un discurso melodramático ni exagerado.\n\nEvitá los saludos impersonales que suenan a tarjeta de supermercado y tampoco te limites a chistes sobre la edad sin dejar espacio al afecto. Incluso si en casa no suelen hablar seguido de sentimientos, un reconocimiento claro por su ejemplo y compañía siempre llega hondo y se recuerda durante mucho tiempo.\n\nEn estas 50 opciones inéditas combinamos mensajes cortos de lectura ágil para sorprenderlo apenas empieza el día, textos intermedios equilibrados y dedicatorias más desarrolladas pensadas para acompañar un regalo, un almuerzo familiar o un brindis especial.\n\nSi querés reforzar el gesto, enviá un mensaje breve apenas amanece para acompañarlo en el arranque de su rutina y sumá una nota escrita o postal impresa cuando se encuentren a celebrar; si vive lejos, elegí un texto cálido y cerrá proponiendo una llamada tranquila a la tarde.\n\nUsá el personalizador superior para sumar su apodo y tu firma en todas las tarjetas al mismo tiempo, compará tus favoritas con calma y compartilas por WhatsApp, correo o postal PNG imprimible sin registro.'
  },
  'cumpleanos-para-un-papa': {
    lead:
      'Esta colección reúne 50 saludos de cumpleaños para un padre —ya sea tu propio papá, un amigo que estrenó paternidad, un hermano, un cuñado o tu suegro— redactados con calidez, respeto y naturalidad. Cada texto celebra tanto su entrega familiar como sus sueños, proyectos y tiempo personal.\n\nFiltrá las 50 dedicatorias según el tono y la extensión que mejor encajen con el vínculo, escribí su nombre y cómo firmás arriba para adaptarlas al instante y descargá tu postal personalizada en formato cuadrado o Story gratis.',
    seoTitulo: 'Criterios para felicitar a un padre según el vínculo y el tono del saludo',
    seoTexto:
      'Felicitar a un padre que no es el tuyo —como un amigo cercano, un hermano, un colega o tu suegro— exige un registro distinto: cálido y elogioso, pero medido. Reconocer la entrega con que cuida a sus hijos y al mismo tiempo desearle tiempo de descanso y disfrute personal siempre deja una excelente impresión.\n\nPara que el mensaje suene genuino y nunca de catálogo, anclalo en algo observable: su paciencia, la alegría que contagia en las reuniones, cómo acompaña a su familia o el equilibrio que logra entre trabajo y hogar. Ese reconocimiento específico se agradece muchísimo porque rara vez se dice en voz alta.\n\nConviene evitar frases que invadan la intimidad si la relación es respetuosa o política (como con un suegro o compañero de oficina), manteniendo siempre el trato natural de vos o usted que usan a diario. Ajustar la firma —por ejemplo «De toda la familia» o tu nombre propio— termina de dar el tono exacto.\n\nEsta selección de 50 textos ofrece alternativas breves para grupos de WhatsApp, mensajes intermedios ideales para enviar por privado y dedicatorias más completas para firmar una tarjeta física junto a un obsequio compartido.\n\nUn gran momento para enviar este saludo es a media mañana por mensaje privado, cuando el agasajado ya salió de la corrida inicial y puede leer con atención tus palabras; si van a compartir mesa o asado, llevar la postal impresa suma un detalle cálido que destaca.\n\nPersonalizá el nombre del homenajeado y tu firma arriba de la grilla para actualizar las 50 propuestas de una vez, guardá tus elegidas y descargá la tarjeta visual en tonos sobrios o festivos en un clic.'
  },
  'feliz-cumpleanos-a-distancia': {
    lead:
      'Cuando los kilómetros impiden el abrazo en persona, las palabras justas acortan el mapa al instante. Reunimos 50 mensajes de cumpleaños para alguien que está lejos pensados para enviar con calidez, alegría luminosa y cero tristeza exagerada, ya sea para familia, amigos o pareja en otra ciudad o país.\n\nPersonalizá las 50 dedicatorias a la distancia con su nombre real y tu firma en la barra superior, filtrá por extensión para WhatsApp, estados o carta emotiva y descargá tu postal PNG o Story gratis para acortar distancias hoy mismo.',
    seoTitulo: 'Cómo escribir mensajes de cumpleaños para alguien que está lejos y acortar kilómetros',
    seoTexto:
      'Al saludar en su cumpleaños a alguien que está lejos, el mayor desafío es expresar cuánto lo extrañás sin teñirle el día de melancolía. Los mejores mensajes a la distancia siguen una regla simple: celebran su presente en el lugar donde vive, recuerdan una escena alegre compartida y miran con entusiasmo hacia el próximo reencuentro.\n\nNombrar un detalle concreto devuelve cercanía inmediata: una comida que van a repetir apenas se vean, una anécdota de la última despedida o un logro reciente que te llena de orgullo aunque lo sigas por videollamada. Esa concreción demuestra que seguís atento a su vida real y no mandando un texto automático.\n\nEvitá caer en reproches velados o frases demasiado tristes sobre lo vacío que está todo sin esa persona: quien cumple años lejos de su gente ya siente la nostalgia propia de la fecha y agradece muchísimo un saludo que le lleve energía buena, calma y compañía afectiva.\n\nEn estas 50 dedicatorias inéditas combinamos mensajes cortos ideales para sorprender apenas despierta según su huso horario local, textos intermedios pensados para acompañar una foto compartida y cartas más desarrolladas para leer con pausa.\n\nEl reloj marca una enorme diferencia cuando hay otro país o provincia de por medio. Calcular la mañana de su hora local para que tu saludo sea uno de los primeros que lea al encender el teléfono —y proponer una videollamada corta o brindis simultáneo a la tarde— transforma la distancia en presencia real.\n\nTodas las opciones de esta sección se actualizan con su nombre real y tu firma en un segundo para que copies sin errores o descargues una tarjeta visual cuadrada 1080×1080 o vertical Story 1080×1920 lista para enviar por chat o redes.'
  },
  'frases-para-alguien-especial-que-esta-lejos': {
    lead:
      'Acá encontrás 50 frases de cumpleaños para alguien especial que está lejos, diseñadas para transmitir cercanía real a pesar de las fronteras, las ciudades distintas o los horarios cruzados. Son mensajes cálidos, íntimos y versátiles que podés adaptar tanto para una amistad entrañable como para un amor o familiar querido.\n\nEscribí su nombre y tu firma arriba para ajustar las 50 opciones al instante, elegí entre formatos cortos para WhatsApp o cartas más emotivas y descargá tu tarjeta PNG personalizada gratis sin registro.',
    seoTitulo: 'Claves para dedicar frases a alguien especial a la distancia sin caer en clichés',
    seoTexto:
      'Cuando dedicás un saludo a alguien especial que vive lejos, las frases genéricas sobre que «los kilómetros no importan» suelen quedar vacías si no llevan un detalle verdadero de ustedes. Nombrar una costumbre que todavía te hace acordar a esa persona o una charla inolvidable de la última vez que se vieron devuelve calidez inmediata.\n\nUna gran dedicatoria a la distancia transmite dos certezas al mismo tiempo: que su lugar en tu vida sigue intacto sin importar los meses que pasen, y que te alegrás genuinamente por los pasos y proyectos que está construyendo allá. Ese equilibrio transforma la nostalgia en compañía real.\n\nEvitá dejar pasar el día por miedo a no encontrar las palabras perfectas o pensar que un mensaje no alcanza frente a la ausencia física. Cuando alguien celebra lejos de los suyos, recibir palabras sinceras y personalizadas tiene un valor emocional inmenso.\n\nEsta colección de 50 textos originales abarca desde líneas breves de impacto rápido para enviar temprano por WhatsApp o publicar en una historia, hasta dedicatorias más profundas pensadas para acompañar un audio tranquilo o una foto de ambos.\n\nUn detalle que multiplica la sorpresa es ajustar tu envío al desayuno de su zona horaria y sumar una posdata concreta —una canción que te hizo acordar a esa persona o un plan para el próximo reencuentro— que invite a seguir conversando sin apuro.\n\nCon el personalizador superior podés agregar su apodo y tu firma en un clic, guardar tus frases preferidas para elegir con calma y generar una postal descargable cuadrada o vertical Story lista para compartir.'
  }
};

function construirLead(hub, perfil, stats, dest) {
  const slug = hub.slug;
  const tema = temaLimpio(hub);
  const n = stats.total;

  if (perfil === 'duelo') {
    const p1 = pick([
      `Reunimos ${n} mensajes serenos y respetuosos sobre ${tema}, redactados con sensibilidad para acompañar la memoria, el afecto y la calma de la familia sin recurrir a frases automáticas ni expresiones fuera de lugar. Cada texto prioriza la sobriedad, el tacto humano y la honestidad emocional para llegar con respeto en una fecha sensible.`,
      `Esta colección ofrece ${n} palabras cuidadas sobre ${tema}, pensadas para acompañar a ${dest} con ternura, respeto y presencia real en una jornada que invita al recuerdo. Todos los textos están auditados para mantener un registro calmo, claro y completamente libre de fórmulas superficiales o clichés incómodos.`,
      `Encontrá ${n} dedicatorias sobrias sobre ${tema}, escritas en español natural para expresar cercanía, memoria viva y acompañamiento genuino a ${dest}. Incluimos opciones breves para abrazar en privado sin abrumar y palabras más pausadas para compartir con la familia o conservar en una nota.`
    ], slug, 1);
    const p2 = pick([
      `Podés filtrar arriba entre textos breves para acompañar por WhatsApp y palabras más desarrolladas para una tarjeta o recuerdo familiar; escribí el nombre y tu firma para adaptar las ${n} opciones al instante, guardar tus elegidas y descargar una postal en tonos sobrios gratis.`,
      `Usá los filtros superiores para elegir la extensión más adecuada al momento, sumá el nombre y tu firma para ajustar cada texto en vivo y copiá limpio en un clic o bajá tu imagen en paletas serenas sin registro.`
    ], slug, 2);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'aniv_meses' || perfil === 'aniv_anos') {
    const etapa = perfil === 'aniv_meses' ? 'esta etapa de noviazgo que recién crece' : 'el camino compartido en pareja';
    const p1 = pick([
      `Celebrá ${tema} con ${n} mensajes originales pensados para reflejar ${etapa} con naturalidad y sin sonar a frase repetida. Combinamos dedicatorias breves para sorprender a la mañana por WhatsApp, textos cómplices que celebran lo cotidiano y cartas románticas con historia real para ${dest}.`,
      `Acá tenés ${n} dedicatorias inéditas sobre ${tema}, escritas para agradecer lo compartido en ${etapa} con calidez, humor cómplice y afecto verdadero. Cada propuesta evita promesas de molde y ofrece un promedio de ${stats.promedio} palabras listas para adaptarse al estilo propio de tu pareja.`,
      `Si querés saludar por ${tema} con palabras que se sientan propias, reunimos ${n} textos variados para ${dest}: desde líneas cortas ideales para estados y fotos hasta cartas extensas para acompañar una cena, un desayuno especial o una postal impresa.`
    ], slug, 3);
    const p2 = pick([
      `Escribí el apodo de tu pareja y tu firma en la barra superior para personalizar las ${n} opciones en vivo, filtrá por tono o largo, guardá tus favoritas para compararlas y descargá tu tarjeta PNG cuadrada o Story 1080×1920 gratis.`,
      `Personalizá al instante cualquiera de los ${n} textos con sus nombres arriba de la grilla, copiá limpio en un clic para WhatsApp o generá una postal visual elegante lista para compartir o guardar sin registro.`
    ], slug, 4);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'fecha_especial') {
    const p1 = pick([
      `Reunimos ${n} mensajes originales sobre ${tema} pensados para destacar de inmediato entre las cadenas idénticas que saturan el teléfono en fechas muy celebradas. Incluimos opciones cortas para WhatsApp, saludos cálidos para grupos familiares, textos reflexivos y dedicatorias listas para tarjeta.`,
      `Para saludar por ${tema} con calidez genuina y salir de las imágenes reenviadas, organizamos ${n} dedicatorias inéditas en español claro, ideales para dedicar a ${dest} por WhatsApp, redes sociales o en una nota impresa con un promedio de ${stats.promedio} palabras.`
    ], slug, 5);
    const p2 = pick([
      `Sumá el nombre del destinatario y tu firma arriba para adaptar los ${n} textos al instante, filtrá por formato breve o emotivo, guardá tus preferidos y descargá tu tarjeta visual PNG cuadrada o Story 1080×1920 gratis.`,
      `Elegí el largo que mejor calce con tu canal, personalizá las ${n} opciones en vivo desde la barra superior y compartí en un clic por chat, redes o postal imprimible sin registro.`
    ], slug, 6);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'jubilacion' || perfil === 'nacimiento') {
    const motivo = perfil === 'jubilacion'
      ? 'celebrar el cierre de una trayectoria laboral, reconocer el legado compartido y abrir paso a una etapa de merecido descanso'
      : 'recibir con ternura una nueva vida, abrazar a la familia en estos primeros días y dejar un recuerdo luminoso sin consejos invasivos';
    const p1 = `Reunimos ${n} textos originales sobre ${tema}, redactados con calidez y equilibrio para ${motivo}. Cada opción combina sinceridad, respeto y detalles concretos para que tu saludo a ${dest} deje un recuerdo entrañable tanto en un chat privado como en una tarjeta escrita a mano.`;
    const p2 = `Escribí el nombre del homenajeado y cómo firmás arriba para adaptar las ${n} propuestas al instante, filtrá por tono o extensión según el canal y descargá gratis tu postal PNG cuadrada, Story vertical o tarjeta lista para imprimir.`;
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'bilingue') {
    const p1 = `Descubrí ${n} opciones originales de ${tema}, cada una con su redacción cuidada en el idioma original y su traducción natural al español para que sepas exactamente qué matiz de afecto estás enviando. Evitamos traducciones literales robóticas para conservar la musicalidad, el respeto y la cercanía real de cada saludo dedicado a ${dest}.`;
    const p2 = `Podés filtrar entre líneas breves ideales para historias de Instagram y mensajes más completos para WhatsApp o tarjeta impresa, sumar el nombre real y tu firma arriba para adaptar las ${n} opciones en vivo y descargar tu postal PNG cuadrada o Story gratis en segundos.`;
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'meses') {
    const p1 = `Organizamos ${n} dedicatorias inéditas sobre ${tema}, inspiradas en el clima de esta temporada del año, las celebraciones del calendario y el temperamento de quienes cumplen durante este mes. Incluimos textos cortos para WhatsApp, saludos emotivos, humor sano, bendiciones y cartas listas para dedicar a familia, amigos o pareja.`;
    const p2 = `Arriba podés consultar además los dos signos zodiacales correspondientes al mes y enlazar con el calendario perpetuo, personalizar las ${n} opciones con su nombre y tu firma en vivo, guardar tus favoritas y descargar gratis tu tarjeta PNG cuadrada o Story vertical.`;
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'carta') {
    const p1 = pick([
      `Si buscás dedicar unas palabras profundas que superen el saludo apurado de dos líneas, reunimos ${n} textos extensos sobre ${tema} con estructura epistolar cálida, párrafos respirables y emoción sincera para ${dest}. Cada carta combina recuerdos cotidianos, gratitud real y buenos deseos escritos en español natural.`,
      `Acá encontrás ${n} cartas y textos desarrollados sobre ${tema}, redactados párrafo a párrafo para expresar gratitud, admiración y cariño verdadero hacia ${dest} sin caer en clichés repetidos. Son ideales para entregar en una tarjeta impresa, leer en familia o enviar en un horario tranquilo.`
    ], slug, 7);
    const p2 = pick([
      `Personalizá las ${n} cartas en vivo con su apodo y tu firma desde la barra superior, desplegá el texto completo antes de copiar limpio para WhatsApp y descargá tu postal editorial PNG o imprimila para entregar en mano sin registro.`,
      `Usá los filtros por tono emotivo, reflexivo o de gratitud para elegir rápido entre las ${n} propuestas, adaptá el saludo con su nombre real arriba y guardá tus favoritas para compararlas con calma antes de compartir o imprimir.`
    ], slug, 8);
    return `${p1}\n\n${p2}`;
  }

  if (perfil === 'poema') {
    const p1 = `Reunimos ${n} poemas y versos inéditos sobre ${tema}, escritos con musicalidad clara, imágenes cercanas y estrofas limpias pensadas para conmover a ${dest} tanto en una lectura en voz alta como en una tarjeta impresa o mensaje privado. Cada composición evita rimas forzadas y prioriza la emoción honesta.`;
    const p2 = `Al copiar respetamos cada salto de verso y separación entre estrofas para que no pierda su ritmo en WhatsApp ni en redes; escribí el nombre y tu firma arriba para personalizar las ${n} opciones al instante o descargarlas como postal PNG cuadrada o Story gratis.`;
    return `${p1}\n\n${p2}`;
  }

  // Resto de perfiles de cumpleanos
  const partesExtLead = [
    stats.breves > 0 ? `${stats.breves} en formato breve para chat rápido` : '',
    stats.intermedios > 0 ? `${stats.intermedios} en extensión intermedia` : '',
    stats.largos > 0 ? `${stats.largos} en desarrollo amplio` : ''
  ].filter(Boolean);
  const resumenExtLead =
    partesExtLead.length <= 1
      ? (partesExtLead[0] || `${n} textos equilibrados`)
      : `${partesExtLead.slice(0, -1).join(', ')} y ${partesExtLead[partesExtLead.length - 1]}`;

  const p1 = pick([
    `Encontrá ${n} mensajes originales sobre ${tema} pensados para que tu saludo a ${dest} suene cercano, honesto y lejos de las cadenas genéricas que se repiten cada año. Esta colección reúne ${resumenExtLead}, con un promedio de ${stats.promedio} palabras listas para usar en WhatsApp, redes sociales o tarjeta.`,
    `Reunimos ${n} dedicatorias inéditas sobre ${tema} escritas en español natural para saludar a ${dest} según el momento del día y el nivel de confianza real. Cada propuesta cuida el ritmo, evita clichés vacíos y combina ${resumenExtLead} (promedio de ${stats.promedio} palabras) para que elijas sin vueltas.`,
    `Si querés saludar por ${tema} con palabras que se sientan verdaderas, acá tenés ${n} propuestas variadas para ${dest} (${resumenExtLead}, promedio de ${stats.promedio} palabras). Combinamos calidez cotidiana, gratitud sincera y cierres luminosos que funcionan excelente en celular o postal impresa.`,
    `Seleccionamos ${n} textos originales sobre ${tema} diseñados para conectar de verdad con ${dest}, abarcando ${resumenExtLead} con un promedio de ${stats.promedio} palabras: desde frases ágiles de lectura inmediata para WhatsApp y estados hasta dedicatorias emotivas pensadas para acompañar un regalo o una comida especial.`
  ], slug, 9);

  const p2 = pick([
    `Escribí el nombre o apodo real y tu firma en la barra superior para adaptar las ${n} opciones al instante respetando comas y saludos, filtrá por tono o largo, guardá tus favoritas para compararlas y descargá gratis tu tarjeta PNG cuadrada 1080×1080 o Story 1080×1920.`,
    `Usá el personalizador rápido de esta página para actualizar los ${n} saludos en vivo sin tener que editar manualmente cada línea, guardá tus textos elegidos en el navegador, copiá limpio en un clic para WhatsApp y compartí directo por redes o en postal imprimible sin registro.`,
    `Filtrá las ${n} propuestas por extensión o estilo según el canal que vayas a usar, sumá su apodo real y tu firma arriba para que el mensaje salga listo para enviar al instante y creá una tarjeta visual limpia y descargable en pocos segundos.`
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

  // Parrafo 1: Piramide invertida + psicologia real del vinculo/ocasion
  const p1PorPerfil = {
    duelo: [
      `Al escribir sobre ${tema}, lo que más alivia no es una explicación grandilocuente ni un consuelo forzado, sino la presencia serena y el reconocimiento honesto del vínculo. Un mensaje claro que nombra con respeto a quien se recuerda acompaña mucho mejor que los discursos extensos que intentan llenar el silencio.`,
      `Cuando una fecha despierta ausencia, encontrar palabras sobre ${tema} cuesta porque nadie quiere sonar frío ni invasivo. La regla más cuidada es priorizar la sencillez: validar el recuerdo, honrar la huella dejada por esa persona y ofrecer escucha real sin exigir respuestas inmediatas.`
    ],
    aniv_meses: [
      `En ${tema}, el encanto está en la frescura del presente: celebrar lo que ya disfrutan juntos sin cargar el mensaje de promesas solemnes. Nombrar una costumbre linda que nació en estas semanas —una charla nocturna, una salida espontánea o un gesto tierno— vale mucho más que una cita genérica.`,
      `Dedicar palabras por ${tema} funciona mejor cuando mantiene el tono cómplice del día a día. Hablar de las risas compartidas, el alivio de encontrarse después de una jornada larga o las ganas de seguir conociéndose vuelve el saludo completamente propio e irrepetible.`
    ],
    aniv_anos: [
      `Celebrar ${tema} pide honrar la historia real que construyeron: los proyectos logrados, las conversaciones honestas y la manera en que se sostuvieron en días exigentes. Agradecer el equipo cotidiano emociona mucho más que repetir promesas abstractas de película.`,
      `A medida que suma tiempo una pareja, los textos por ${tema} ganan fuerza cuando combinan memoria agradecida y admiración presente. Contarle a ${dest} qué seguís eligiendo hoy de su forma de ser renueva la emoción desde la primera línea.`
    ],
    bilingue: [
      `Enviar ${tema} suma un guiño original cuando la frase en el idioma extranjero conserva su ritmo natural y va acompañada de un cierre cercano en español. Así evitás errores de traducción literal, respetás la entonación propia de la lengua y mantenés todo el calor humano del saludo.`,
      `La clave para acertar con ${tema} es elegir una línea breve y natural en el idioma original cuando va en historias o tarjetas, y sumar una posdata tuya en español para que ${dest} sienta el mensaje escrito especialmente para la ocasión y no copiado al azar.`
    ],
    invitacion: [
      `Una buena invitación en ${tema} resuelve dos objetivos en pocas líneas: contagia ganas reales de reunirse en la primera oración y deja cristalinos el día, horario, dirección y forma de confirmar asistencia en las siguientes, evitando confusiones a último momento.`,
      `Cuando redactás textos para ${tema}, la claridad ahorra decenas de mensajes repetidos el mismo día. Especificar si la reunión es sorpresa, si hace falta llevar algo o hasta qué fecha confirmar ayuda a que todos se organicen con calma y entusiasmo.`
    ],
    atrasado: [
      `En ${tema}, la honestidad breve desarma cualquier incomodidad al instante: reconocer el retraso en media línea sin excusas rebuscadas y dedicar un deseo pensado con calma deja mucho mejor recuerdo que desaparecer por vergüenza.`,
      `Un saludo de ${tema} tiene una ventaja inesperada: llega cuando ya pasó la lluvia de notificaciones del día exacto y ${dest} puede leerlo con tranquilidad real. Cerrar proponiendo un café o brindis pendiente convierte el atraso en un lindo gesto.`
    ],
    humor: [
      `El secreto de ${tema} es reírse con ${dest} y nunca de sus inseguridades o temas sensibles. Un guiño cómplice sobre anécdotas compartidas, las costumbres de siempre o las velas funciona excelente cuando cierra con al menos una oración sincera de afecto.`,
      `En ${tema}, el ritmo lo es todo: un remate breve y limpio en la primera o segunda oración dispara la sonrisa al instante, y un cierre cálido demuestra que detrás de la broma hay cariño verdadero y admiración real.`
    ],
    fe: [
      `Una dedicatoria de ${tema} conmueve de verdad cuando une fe cercana y reconocimiento personal. Nombrar primero una virtud concreta de ${dest} —su generosidad, calma, alegría o entrega diaria— hace que la bendición posterior suene sentida y no como una cadena reenviada.`,
      `En ${tema}, la espiritualidad brilla más cuando se apoya en deseos concretos para la vida diaria: salud firme, paz en el hogar, claridad en las decisiones y fuerzas renovadas para cada paso de la etapa que comienza.`
    ],
    profesionales: [
      `En el entorno laboral o educativo, acertar con ${tema} depende de respetar exactamente el trato habitual —vos o usted— y elegir un tono cordial sin invadir la esfera privada. La sobriedad cálida construye confianza y deja una excelente impresión duradera.`,
      `Un saludo bien medido de ${tema} destaca una cualidad observable de ${dest} —su criterio, predisposición, compromiso o liderazgo sereno— y desea un gran año personal y profesional en pocas líneas limpias y respetuosas.`
    ],
    distancia: [
      `Al enviar ${tema}, el equilibrio clave consiste en mostrar cuánto pensás en ${dest} sin teñir la fecha de tristeza. Celebrar sus logros en la ciudad donde vive, recordar una escena feliz compartida y mirar hacia el próximo reencuentro mantiene el mensaje luminoso.`,
      `Cuando los kilómetros separan, un saludo de ${tema} cobra doble valor si llega temprano según su huso horario local. Madrugar con unas palabras pensadas demuestra presencia afectiva real aunque hoy no puedan compartir la misma mesa.`
    ],
    embarazo: [
      `En ${tema}, el gesto más valorado es celebrar primero a la mujer por sí misma —su fuerza, alegría, descanso y proyectos— y no reducir todo el saludo únicamente al bebé que viene en camino. Ese detalle de cuidado se agradece enormemente.`,
      `Al dedicar palabras sobre ${tema}, enfocate en mimarla, celebrar la ilusión de esta nueva etapa y ofrecer ayuda concreta que le facilite los próximos meses, manteniendo un tono tierno, respetuoso y luminoso.`
    ],
    infantil: [
      `Escribir ${tema} tiene un encanto doble: alegra hoy a la familia que acompaña la crianza y deja un recuerdo precioso que ese niño va a releer con una sonrisa dentro de varios años, casi como una cápsula de memoria.`,
      `En ${tema}, anclar el mensaje en un gusto real de esta edad —su risa contagiosa, sus juegos favoritos, sus preguntas curiosas o lo nuevo que aprendió este año— guarda una fotografía viva de su infancia en pocas líneas.`
    ],
    jovenes: [
      `Al saludar en ${tema}, el puente más directo es reconocer su personalidad propia, sus intereses actuales y el orgullo de verlo crecer con criterio. Un saludo genuino y sin poses conecta infinitamente mejor que cualquier discurso solemne.`,
      `Las dedicatorias de ${tema} funcionan cuando equilibran calidez real y respeto por su etapa: celebrar su independencia naciente, sus amistades, sus estudios o proyectos hace que ${dest} se sienta verdaderamente escuchado.`
    ],
    adultos: [
      `En ${tema}, salir de los chistes gastados sobre cumplir años marca una diferencia enorme. Celebrar la serenidad ganada, los vínculos elegidos con criterio y los proyectos actuales deja un mensaje maduro, elegante y disfrutable.`,
      `Cuando dedicás ${tema}, deseale aquello que suele escasear en la vida adulta: descanso real sin culpas, salud firme, tiempo sin apuros con su gente querida y motivos propios para disfrutar el año que empieza.`
    ],
    mayores: [
      `En ${tema}, agradecer la historia vivida, las sobremesas largas y el ejemplo paciente que une a la familia emociona mucho más que cualquier fórmula formal. Recordar una enseñanza concreta suya vale oro y llena de alegría el corazón.`,
      `Dedicar ${tema} con respeto y ternura significa celebrar tanto el camino recorrido como la vitalidad del presente: pedir salud, tranquilidad cotidiana, charlas sin apuro y muchos encuentros compartidos en casa.`
    ],
    poema: [
      `Un buen verso en ${tema} conmueve cuando conserva imágenes claras y pausas limpias entre estrofas. Leerlo una vez en voz alta antes de enviarlo permite comprobar que la música del texto encaja con el carácter y la sensibilidad de ${dest}.`,
      `En ${tema}, menos artificio y más sinceridad siempre ganan: dos o tres estrofas bien medidas con un nombre propio arriba dejan una huella poética serena que suele guardarse durante años en una tarjeta o cuaderno.`
    ],
    carta: [
      `Una carta de ${tema} emociona sin sentirse pesada cuando ordena el afecto en cuatro pasos naturales: saludo cercano con apodo real, un recuerdo puntual compartido, agradecimiento genuino por quién es y deseo sereno para la etapa nueva.`,
      `Al elegir un texto largo en ${tema}, el valor está en la profundidad honesta: tomarse unos minutos para decirle a ${dest} aquello que la rutina diaria suele dejar sin nombrar, con párrafos claros que inviten a leer sin apuro.`
    ],
    pareja: [
      `En ${tema}, lo que más emociona es sentirse elegido en lo cotidiano, no escuchar frases repetidas de molde. Nombrar un rasgo concreto que admirás de ${dest} este último año hace que el mensaje cobre vida desde la primera oración.`,
      `Dedicar ${tema} con autenticidad implica mezclar ternura, complicidad real y gratitud por la vida diaria compartida: esa combinación honesta siempre supera a las promesas abstractas que podrían dedicarse a cualquiera.`
    ],
    amistad: [
      `Un gran saludo en ${tema} combina el humor cómplice de siempre con esa gratitud sincera que entre amigos pocas veces se dice de frente. Nombrar una charla larga o cómo apareció cuando hacía falta le da alma inmediata al texto.`,
      `En ${tema}, celebrar la lealtad cotidiana y cerrar proponiendo un encuentro concreto —un café, una cena o un brindis pendiente— transforma un buen mensaje en una excusa real para volver a verse.`
    ],
    meses: [
      `Al escribir ${tema}, conectar el saludo con la atmósfera del mes, el cambio de estación y el temperamento de quienes nacieron en esta época vuelve el mensaje mucho más personal desde el primer renglón.`,
      `Quienes celebran en ${tema} agradecen un saludo que salga de la tarjeta genérica y sume un guiño a la temporada del año, sus proyectos del trimestre y su manera particular de compartir la fecha.`
    ],
    fecha_especial: [
      `En ${tema}, los teléfonos se llenan de imágenes idénticas reenviadas en cadena que casi nadie termina de leer. Cuatro líneas claras con el nombre real de ${dest} y un gesto de gratitud verdadero destacan de inmediato.`,
      `Acertar con ${tema} consiste en mantener el mensaje cálido, humano y específico: reconocer el vínculo compartido este año vale muchísimo más que reenviar un saludo recargado sin firma.`
    ],
    jubilacion: [
      `Despedir una trayectoria en ${tema} pide equilibrar reconocimiento profesional y alegría genuina por la libertad que comienza. Destacar lo que enseñó con su ejemplo y celebrar sus mañanas sin despertador siempre emociona.`,
      `En ${tema}, el mejor homenaje recuerda una contribución real —su paciencia, criterio, oficio o buen humor en el equipo— y abre paso con entusiasmo a los viajes, hobbies y descansos merecidos.`
    ],
    nacimiento: [
      `Acompañar ${tema} con tacto significa abrazar tanto al bebé como a mamá y papá, celebrando la llegada con suavidad, cariño y palabras breves que puedan leer entre descansos.`,
      `Un mensaje cuidado en ${tema} guarda la emoción de los primeros días en palabras simples y luminosas que la familia puede releer tranquila cuando el bebé duerme y conservar en su álbum de recuerdos.`
    ],
    familia: [
      `En ${tema}, el ingrediente que transforma una felicitación correcta en un recuerdo emotivo es la concreción: nombrar un gesto real de ${dest}, una sobremesa compartida o algo puntual que agradecés de este último año.`,
      `Al buscar palabras sobre ${tema}, el mejor filtro es preguntarte si eso mismo se lo dirías cara a cara. Cuando el lenguaje es natural y cercano, ${dest} nota enseguida que pensaste de verdad en su día.`
    ]
  };

  const p1 = pick(p1PorPerfil[perfil] || p1PorPerfil.familia, slug, 21);

  // Parrafo 2: Principio SUCCESs (Concrecion + micro-escena verificable)
  const p2 = perfil === 'duelo'
    ? pick([
        `Para ofrecer consuelo genuino, elegí una imagen concreta y serena: un consejo suyo que todavía aplicás, una comida familiar que traía paz o un rasgo luminoso de su carácter que sigue presente en casa. Esos detalles reales honran la memoria mucho más que las frases abstractas y le muestran a ${dest} que el vínculo permanece vivo.`,
        `Un recuerdo específico y cuidado —una sonrisa, una enseñanza cotidiana o una costumbre compartida— le demuestra a ${dest} que esa vida sigue siendo recordada con amor verdadero y respeto profundo. Nombrar con sencillez ese legado convierte unas pocas líneas en un abrazo honesto.`
      ], slug, 22)
    : perfil === 'aniv_meses' || perfil === 'aniv_anos'
    ? pick([
        `El truco editorial que diferencia una dedicatoria memorable de un texto genérico es reemplazar adjetivos repetidos por una micro-escena real: la caminata bajo la lluvia, el café compartido o cómo se ríen de lo mismo incluso en días cansados. Cuando ${dest} lee un detalle que solo ustedes dos vivieron, el mensaje se vuelve inolvidable.`,
        `Si querés que el saludo se quede grabado, agregá una línea breve con un plan cercano para ustedes dos o una anécdota de estas últimas semanas. Combinar memoria concreta de lo vivido con ilusión por lo que viene multiplica la calidez de cualquier texto y lo aleja de las frases de molde.`
      ], slug, 23)
    : perfil === 'profesionales'
    ? pick([
        `Un detalle concreto —agradecer la claridad en un proyecto, la buena disposición diaria, la paciencia al explicar o el trato respetuoso con todo el equipo— evita que el saludo suene protocolar y construye aprecio genuino sin perder profesionalismo ni cruzar límites personales.`,
        `Sumar una mención puntual a un logro reciente o a la buena sintonía de trabajo durante el último año diferencia tu saludo en segundos y lo aleja por completo de los mensajes corporativos en serie. Esa atención específica siempre fortalece la relación cotidiana con ${dest}.`
      ], slug, 24)
    : pick([
        `Para salir del saludo automático, aplicá una regla práctica: sumá una escena concreta que compartieron —una charla en auto, un café, un consejo útil o una risa reciente— al inicio o como posdata. Ese detalle verificable convierte un buen texto en un mensaje irrepetible que ${dest} va a leer con una sonrisa real.`,
        `Las dedicatorias que más emocionan evitan las palabras rebuscadas y nombran lo que de verdad valorás de ${dest} hoy. Un apodo afectuoso en la apertura, una memoria concreta del último año y un deseo puntual para sus proyectos actuales hacen toda la diferencia frente a las cadenas genéricas.`,
        `Pensá en una cualidad específica que admirás hoy en ${dest} —su paciencia, su humor, su creatividad o su forma de estar presente— y dejala asomar en tu cierre. Ese anclaje concreto vuelve cercano, creíble y humano incluso el mensaje más breve.`
      ], slug, 25);

  // Parrafo 3: Errores comunes a evitar en esta categoria
  const p3PorPerfil = {
    duelo: [
      `Conviene evitar las frases hechas que intentan explicar el dolor o apurar el duelo («todo pasa por algo», «hay que ser fuerte»): suelen sonar distantes aunque nazcan con buena intención. También evitá exigir respuesta inmediata; cerrar aclarando que no hace falta contestar alivia muchísimo a quien recibe el mensaje.`,
      `El error más común en ${tema} es caer en consejos no pedidos o buscar consuelos rápidos que minimizan la ausencia. Acompañar con humildad —admitir que no hay palabras suficientes y ofrecer un gesto práctico concreto esta semana— siempre se recibe con gratitud serena.`
    ],
    aniv_meses: [
      `Al escribir por ${tema}, evitá las promesas desmedidas que suenan artificiales en una etapa temprana y tampoco dejes pasar la fecha como si fuera un día cualquiera. Un mensaje honesto, tierno y a escala real de lo que están construyendo resulta mucho más atractivo y creíble.`,
      `Evitá copiar frases que podrían haber sido escritas para otra persona sin ningún guiño a ustedes dos. Borrar clichés solemnes y sumar una pequeña broma interna, un lugar favorito o una referencia a su primera salida marca toda la diferencia.`
    ],
    aniv_anos: [
      `Evitá caer en la inercia de mandar dos palabras apuradas por costumbre o repetir el mismo texto genérico de años anteriores. A esta altura del camino, ${dest} valora especialmente sentir que seguís mirando con atención quién es hoy y todo lo que construyeron juntos.`,
      `Otro descuido habitual en ${tema} es centrar el texto solo en el pasado lejano y olvidarse del presente. Dedicar al menos una oración a los planes que los ilusionan este año mantiene vivo el entusiasmo y la complicidad de la pareja.`
    ],
    profesionales: [
      `Evitá mezclar asuntos laborales pendientes, reclamos o recordatorios de agenda en el mismo mensaje del saludo: dejar la felicitación completamente limpia y dedicada solo a desearle un excelente nuevo año transmite criterio, respeto y educación en cualquier entorno.`,
      `Tampoco conviene improvisar confianza de golpe cambiando de «usted» a «vos» ni usar bromas internas de oficina que puedan malinterpretarse por escrito. En ${tema}, la cordialidad medida, clara y puntual siempre construye la mejor imagen profesional.`
    ],
    distancia: [
      `El error más frecuente en ${tema} es llenar el mensaje de lamentos sobre la distancia hasta contagiar angustia en pleno festejo. Expresar cuánto extrañás a ${dest} desde el cariño y cerrar con energía positiva hace que tus palabras abracen en vez de entristecer.`,
      `Evitá esperar al final del día por dudar qué escribir: cuando hay otro huso horario, llegar tarde deja pasar el mejor momento emocional. Preparar tu saludo la noche anterior asegura estar presente apenas arranca su mañana.`
    ],
    fe: [
      `Evitá las cadenas impersonales que solo encadenan citas sin nombrar a ${dest} ni reflejar ningún vínculo real. Una bendición breve y personal, ligada a los sueños o desafíos concretos de este año, conmueve infinitamente más.`,
      `Cuidá también que el tono de fe sea cálido y acogedor, nunca sermoneador. Desear paz, salud, sabiduría y alegría junto a su familia mantiene un mensaje luminoso que se lee con gratitud y cercanía.`
    ],
    humor: [
      `Evitá bromas sobre el peso, la apariencia, problemas económicos o temas que sepas que incomodan a ${dest}. El buen humor celebra la complicidad compartida y deja a quien cumple con ganas de reírse y guardar tu mensaje.`,
      `Un segundo error es terminar la broma sin ningún guiño afectuoso: sumar una frase final sincera deseándole un año hermoso equilibra la risa con cariño real y demuestra que detrás del chiste hay aprecio verdadero.`
    ],
    embarazo: [
      `Evitá consejos no pedidos sobre el parto, la lactancia o advertencias cansadoras sobre futuras noches sin dormir: en su cumpleaños, ${dest} necesita mimos, calma, escucha amable y celebración propia.`,
      `Tampoco reduzcas toda la felicitación únicamente al bebé: recordarle cuánto la admirás como mujer y desearle momentos de disfrute personal hace que se sienta cuidada y reconocida de verdad.`
    ],
    jovenes: [
      `Evitá el tono de sermón, los reproches disfrazados de consejo o las comparaciones con otras edades. En ${tema}, hablar de igual a igual con respeto y orgullo genuino logra que ${dest} lea cada línea con una sonrisa.`,
      `Tampoco fuerces expresiones juveniles que no usás en tu vida cotidiana ni exageres la formalidad: la autenticidad con tu propia voz siempre suena más cercana, creíble y memorable.`
    ],
    adultos: [
      `Evitá reducir todo el saludo a chistes gastados sobre envejecer o sobre la cantidad de velas. A esta edad se valora muchísimo más un reconocimiento honesto por el recorrido, la compañía cotidiana y los proyectos vigentes.`,
      `Tampoco te quedes en fórmulas secas de compromiso: nombrar algo puntual que admirás de su presente hace que tu mensaje destaque entre decenas de notificaciones idénticas que llegan durante el día.`
    ],
    mayores: [
      `Evitá el tono condescendiente o hablar de ${dest} únicamente en pasado. Reconocer su lucidez, su humor actual y el lugar vital que ocupa hoy en la familia llena de orgullo y emoción genuina.`,
      `Cuidá también la claridad y el tamaño visual si enviás una tarjeta o imagen: un texto limpio, con buen contraste, letras legibles y frases directas se lee mucho más cómodo en el teléfono o en papel.`
    ],
    nacimiento: [
      `Evitá dar recomendaciones sobre crianza, horarios o visitas sin avisar en el mismo mensaje de bienvenida. Ofrecer ayuda concreta sin invadir —como acercar comida o simplemente mandar un abrazo sin exigir respuesta— es el mejor gesto posible.`,
      `Mantené el mensaje breve, luminoso y cálido: en los primeros días con un recién nacido, la familia agradece palabras tiernas que pueda leer en segundos y releer con calma más adelante.`
    ],
    jubilacion: [
      `Evitá frases nostálgicas que hagan sentir la jubilación como un final triste o vacío. Celebrar el cierre de etapa con orgullo por la huella dejada y entusiasmo por el tiempo libre que empieza ilumina todo el homenaje.`,
      `Tampoco conviertas el saludo en un resumen frío de currículum: recordar un gesto humano, una charla valiosa o una enseñanza diaria suya emociona muchísimo más.`
    ],
    default: [
      `El descuido más común en ${tema} es copiar una cadena genérica sin nombre y enviarla a las apuradas, igual a otras veinte notificaciones del mismo día. Revisar el apodo real y sumar un detalle concreto de este último año evita por completo esa sensación impersonal.`,
      `Evitá también los textos excesivamente rebuscados que nunca pronunciarías en voz alta: cuando escribís con el mismo tono natural con que hablás con ${dest}, el cariño se percibe de inmediato sin necesidad de exagerar.`
    ]
  };
  const p3 = pick(p3PorPerfil[perfil] || p3PorPerfil.default, slug, 26);

  // Parrafo 4: Datos reales del catalogo + guia de canal y extension
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

  const p4 = perfil === 'duelo'
    ? `Pensando en el canal y el momento, ${detalleExtension}. Los textos más breves funcionan con tacto para un mensaje privado por WhatsApp sin abrumar, mientras que los más pausados acompañan con serenidad una nota escrita a mano, un recuerdo impreso o una fecha conmemorativa familiar.`
    : perfil === 'aniv_meses' || perfil === 'aniv_anos'
    ? `Para elegir según el canal que vayas a usar, ${detalleExtension}. Un saludo breve temprano sorprende antes de empezar la rutina o luce limpio sobre una foto en historias de Instagram, mientras que los textos más extensos brillan junto a un desayuno especial, un regalo o la cena de la noche.`
    : `Según el canal que vayas a usar, ${detalleExtension}. Si enviás por WhatsApp entre muchas notificaciones o subís un estado de Instagram, elegí las opciones ágiles que se leen de una sola mirada; si acompañás un presente, imprimís una postal o escribís en horario tranquilo, aprovechá las versiones más amplias.`;

  // Parrafo 5: Momento ideal de envio y como sumar un gesto real
  const p5 = perfil === 'duelo'
    ? pick([
        `El mejor momento para enviar palabras en ${tema} es en privado, evitando los grupos concurridos y respetando el ritmo emocional de ${dest}. Acompañar el texto con una oferta concreta y sin presión —como acercar algo práctico o simplemente dejar abierta una llamada cuando tenga ganas— multiplica el valor humano del mensaje.`,
        `Si el recuerdo corresponde a una fecha que se repite cada año, agendarla en tu calendario personal te permite estar presente con discreción y cariño cuando otros ya se olvidaron. Un mensaje breve y cálido enviado a media mañana demuestra memoria real y acompañamiento sincero.`
      ], slug, 27)
    : perfil === 'aniv_meses' || perfil === 'aniv_anos'
    ? pick([
        `El horario también construye sorpresa en ${tema}: enviar un mensaje corto apenas empieza la mañana predispone el día con una sonrisa, y guardar una tarjeta impresa o una carta más larga para el encuentro de la noche hace que el gesto se disfrute en dos tiempos bien distintos.`,
        `Acompañar tu dedicatoria elegida con una foto significativa que no hayan publicado antes —o con una nota escrita a mano junto al café de la mañana— convierte unas buenas palabras en un recuerdo tangible que ambos van a atesorar con el paso de los meses.`
      ], slug, 28)
    : perfil === 'profesionales'
    ? pick([
        `En cuanto al momento oportuno, enviar tu saludo durante la mañana laboral —por correo electrónico o mensaje privado sin interrumpir reuniones— refleja atención y respeto. Si saludás en nombre de un área o equipo completo, firmar con claridad al cierre ordena la comunicación y evita olvidos.`,
        `Para entregas presenciales en oficina, escuela o consultorio, imprimir una postal sobria y limpia con margen para las firmas del grupo eleva el gesto sin perder sencillez, elegancia ni coherencia con el trato diario.`
      ], slug, 29)
    : pick([
        `El momento de envío potencia muchísimo el impacto: llegar en las primeras horas de la mañana —o apenas arranca su horario local si están en otra ciudad— garantiza que tu saludo a ${dest} se lea con atención real antes del aluvión de notificaciones del mediodía.`,
        `Si querés ir un paso más allá del chat, combiná el mensaje elegido con un gesto simple pero memorable: una foto vieja que despierte una sonrisa inmediata, un audio corto de veinte segundos o la postal descargable impresa junto al regalo o el desayuno.`
      ], slug, 30);

  // Parrafo 6: Accionabilidad + personalizacion + formatos visuales
  const p6 = perfil === 'duelo'
    ? `Todas las opciones de ${tema} fueron revisadas para mantener un tono respetuoso, claro y sereno en cada párrafo. Escribí el nombre y tu firma en la barra superior para personalizar los ${n} textos al instante, guardá tus elegidos en el navegador para revisarlos con calma y copiá limpio en un clic o descargá una postal visual en tonos Marfil o Celeste sin registro.`
    : perfil === 'aniv_meses' || perfil === 'aniv_anos'
    ? `Cada una de las ${n} propuestas sobre ${tema} está redactada en español natural y cercano para que puedas personalizarla con el apodo de tu pareja, sumar una posdata breve, guardar tus favoritas en el navegador para compararlas y descargar gratis tu tarjeta PNG cuadrada 1080×1080 o vertical Story 1080×1920 sin registro ni marcas invasivas.`
    : `Cada una de las ${n} propuestas sobre ${tema} está escrita en español natural y lista para adaptar en segundos: completá nombre y firma arriba para actualizar toda la colección en vivo, compará tus favoritas con el botón de guardado y compartí directo por WhatsApp, Instagram o tarjeta PNG cuadrada y Story imprimible sin costo.`;

  return `${p1}\n\n${p2}\n\n${p3}\n\n${p4}\n\n${p5}\n\n${p6}`;
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
