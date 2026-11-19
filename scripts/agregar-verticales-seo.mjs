import fs from 'node:fs';
import path from 'node:path';

// 44 palabras iniciales distintas garantizadas (sin tildes problemáticas ni colisiones)
const PRIMERAS_PALABRAS = [
  'Abrazamos', 'Agradecemos', 'Brindamos', 'Celebramos', 'Compartimos',
  'Deseamos', 'Elegimos', 'Festejamos', 'Guardamos', 'Honramos',
  'Iluminamos', 'Levantamos', 'Miramos', 'Nombramos', 'Ofrecemos',
  'Pedimos', 'Queremos', 'Recordamos', 'Saludamos', 'Valoramos',
  'Acercamos', 'Atesoramos', 'Bendecimos', 'Construimos', 'Dedicamos',
  'Enviamos', 'Fortalecemos', 'Generamos', 'Heredamos', 'Impulsamos',
  'Juntamos', 'Llevamos', 'Multiplicamos', 'Nutrimos', 'Ordenamos',
  'Pensamos', 'Regalamos', 'Sostenemos', 'Tejemos', 'Unimos',
  'Vivimos', 'Alcanzamos', 'Cuidamos', 'Disfrutamos'
];

function normalizar(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e').replace(/[íìï]/g, 'i')
    .replace(/[óòö]/g, 'o').replace(/[úùü]/g, 'u').replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(s) {
  return normalizar(s).replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
}

const COMPLEMENTOS_TITULO = [
  'este ciclo luminoso con tu afecto sincero',
  'cada jornada tranquila junto a tu mesa',
  'un capítulo sereno lleno de calma real',
  'las risas honestas de toda nuestra gente',
  'los proyectos lindos que hoy toman vuelo',
  'tu presencia cálida en cada encuentro cercano',
  'la fortuna enorme de caminar siempre cerca',
  'el abrazo largo que acompaña sin apuros',
  'tus ganas intactas de disfrutar lo simple',
  'un año firme de salud y encuentros',
  'esta fecha querida con gratitud verdadera',
  'tu alegría contagiosa en medio de la rutina',
  'las charlas largas sin mirar el reloj',
  'la paz serena que cuidás en casa',
  'tus pasos valientes hacia metas muy tuyas',
  'el cariño fiel de quienes hoy brindan',
  'las historias bonitas que siguen sumando vida',
  'tu ejemplo noble que inspira cada semana',
  'un mañana liviano con motivos para sonreír',
  'la ternura cotidiana de compartir el tiempo',
  'esta etapa nueva con luz y serenidad',
  'los sueños claros que crecen con paciencia',
  'tu corazón generoso abierto a quienes querés',
  'la música alegre de nuestra mesa reunida',
  'cada detalle cuidado con paciencia y amor',
  'el descanso merecido tras meses de esfuerzo',
  'la amistad leal que resiste cualquier distancia',
  'un horizonte amplio de buenas noticias próximas',
  'la sabiduría amable que compartís sin ruido',
  'tu risa franca iluminando la tarde entera',
  'las costumbres lindas que heredamos en familia',
  'un presente agradecido rodeado de buena gente',
  'tu impulso creador en cada nuevo comienzo',
  'la calma tibia de volver siempre a casa',
  'las promesas cumplidas con hechos de verdad',
  'un brindis limpio por todo lo compartido',
  'tu bondad discreta que acomoda cada jornada',
  'la frescura viva de disfrutar el presente',
  'los viajes cortos pendientes en el calendario',
  'este capítulo hermoso escrito a tu manera'
];

const CIERRES_GENERALES = [
  'Que nunca te falten mesas largas, buena salud y tiempo tranquilo para disfrutar lo que elegís.',
  'Ojalá los próximos meses traigan noticias lindas, descanso profundo y abrazos sin apuro.',
  'Deseamos de corazón que cada semana sume calma, risas genuinas y proyectos que entusiasmen.',
  'Que la vida te devuelva multiplicada toda la calidez que repartís en silencio.',
  'Brindamos por todo lo que ya lograste y por la tranquilidad hermosa de lo que viene.',
  'Que sigas rodeado de gente leal que valore tu tiempo, tu humor y tu forma tan noble de estar.',
  'Hoy te deseamos pausas sin reloj, charlas sinceras y mucha alegría cotidiana.',
  'Que cada amanecer nuevo encuentre tu hogar en paz y tu corazón liviano.'
];

const CIERRES_NO_CUMPLE = [
  'Que nunca te falten sobremesas cálidas, buena salud y tiempo sereno junto a quienes más querés.',
  'Ojalá esta etapa traiga descanso merecido, alegrías simples y proyectos compartidos en casa.',
  'Agradecemos tu ejemplo cercano y deseamos que cada semana llegue con calma y sonrisas sinceras.',
  'Que la vida multiplique en paz y cariño todo lo bueno que sembrás todos los días.'
];

const MESES_SPEC = [
  {
    slug: 'cumpleanos-en-enero',
    mes: 'enero',
    mesCap: 'Enero',
    signos: 'Capricornio y Acuario',
    emoji: '☀️',
    climaSur: 'mañanas luminosas de verano y noches livianas al aire libre',
    climaNorte: 'tardes abrigadas de invierno y sobremesas tibias en casa',
    escenas: [
      'abrir el calendario anual festejando tu vuelta al sol con metas recién estrenadas',
      'escapar un rato de las agendas de principio de año para brindar tranquilos bajo las estrellas',
      'mezclar la frescura de enero con el entusiasmo limpio de un capítulo personal nuevo',
      'juntar a quienes están cerca en pleno receso para compartir algo frío, rico y sin apuro',
      'celebrar el primer mes del calendario recordando que tu día merece festejo propio y especial'
    ]
  },
  {
    slug: 'cumpleanos-en-febrero',
    mes: 'febrero',
    mesCap: 'Febrero',
    signos: 'Acuario y Piscis',
    emoji: '🌊',
    climaSur: 'atardeceres largos de verano tardío y música alegre',
    climaNorte: 'días frescos de febrero iluminados con afecto cercano',
    escenas: [
      'disfrutar el encanto único de cumplir años en el mes más corto y intenso del calendario',
      'combinar la creatividad libre de Acuario y la sensibilidad noble de Piscis en tu mesa',
      'hacer una pausa antes de marzo para festejar tu vida rodeado de risas y buena charla',
      'celebrar incluso cuando el calendario se apura, guardando tiempo real para abrazarnos fuerte',
      'brindar por otro año de ocurrencias lindas, descanso y afectos sinceros en febrero'
    ]
  },
  {
    slug: 'cumpleanos-en-marzo',
    mes: 'marzo',
    mesCap: 'Marzo',
    signos: 'Piscis y Aries',
    emoji: '🍂',
    climaSur: 'primeras brisas suaves de otoño y tardes doradas',
    climaNorte: 'brotes tempranos de primavera y luz más clara',
    escenas: [
      'estrenar proyectos de marzo celebrando primero lo más importante: tu vida y tu camino',
      'unir la sensibilidad soñadora de Piscis con el empuje decidido de Aries en una misma fecha',
      'cortar la rutina de arranques laborales o escolares con una torta rica y amigos de siempre',
      'brindar en esas tardes tibias de marzo que invitan a charlar sin mirar el reloj',
      'celebrar tu energía renovada para encarar el año con rumbo claro y corazón alegre'
    ]
  },
  {
    slug: 'cumpleanos-en-abril',
    mes: 'abril',
    mesCap: 'Abril',
    signos: 'Aries y Tauro',
    emoji: '🍁',
    climaSur: 'tardes serenas de otoño con café tibio y hojas doradas',
    climaNorte: 'días alegres de primavera con ganas de salir',
    escenas: [
      'festejar en abril entre tardes tranquilas, buen café o mate y abrazos de verdad',
      'sumar la iniciativa valiente de Aries y la calidez fiel de Tauro en tu nueva vuelta al sol',
      'regalarte una mesa rica donde nadie mire el teléfono y todos celebren tu presencia',
      'aprovechar la calma amable de abril para agradecer lo vivido y proyectar con paz',
      'brindar sin apuros en uno de los meses más agradables del año para reunirse'
    ]
  },
  {
    slug: 'cumpleanos-en-mayo',
    mes: 'mayo',
    mesCap: 'Mayo',
    signos: 'Tauro y Géminis',
    emoji: '☕',
    climaSur: 'mañanas frescas de otoño que piden comida casera y abrigo',
    climaNorte: 'tardes luminosas de primavera plena y charlas al sol',
    escenas: [
      'reunir alrededor de algo recién horneado a la gente que de verdad te quiere bien',
      'combinar la lealtad tranquila de Tauro con la chispa curiosa de Géminis en tu aniversario natal',
      'cortar el ritmo intenso de mayo para regalarte una noche de anécdotas y buena música',
      'celebrar tu año nuevo personal con esa calidez que transforma cualquier tarde fresca en hogar',
      'festejar otro mayo a tu lado agradeciendo las risas, los consejos y el apoyo constante'
    ]
  },
  {
    slug: 'cumpleanos-en-junio',
    mes: 'junio',
    mesCap: 'Junio',
    signos: 'Géminis y Cáncer',
    emoji: '🧣',
    climaSur: 'inicio de invierno con encuentros íntimos y hogar tibio',
    climaNorte: 'noches largas de verano y planes al aire libre',
    escenas: [
      'mitad de año perfecta para frenar un segundo, hacer balance amable y festejar tu vida',
      'juntar el ingenio despierto de Géminis y la ternura hogareña de Cáncer en un mismo brindis',
      'armar una mesa calentita con torta casera, risas largas y cero compromisos formales',
      'celebrar justo en el corazón del calendario recordándote cuánto iluminás nuestra semana',
      'brindar en junio por todo lo construido en estos meses y por lo lindo que espera adelante'
    ]
  },
  {
    slug: 'cumpleanos-en-julio',
    mes: 'julio',
    mesCap: 'Julio',
    signos: 'Cáncer y Leo',
    emoji: '🔥',
    climaSur: 'días de invierno y receso para disfrutar sin apuro en familia',
    climaNorte: 'pleno verano vibrante con encuentros alegres',
    escenas: [
      'convertir el frío de julio en la excusa ideal para abrazos tibios y comida compartida',
      'unir el corazón protector de Cáncer con la generosidad solar de Leo en tu fiesta',
      'festejar sin prisa aprovechando pausas de julio para vernos cara a cara y brindar',
      'celebrar tu risa franca que abriga mucho más que cualquier estufa en pleno invierno',
      'regalarte en julio una jornada serena llena de mensajes honestos y buena compañía'
    ]
  },
  {
    slug: 'cumpleanos-en-agosto',
    mes: 'agosto',
    mesCap: 'Agosto',
    signos: 'Leo y Virgo',
    emoji: '🌟',
    climaSur: 'primeros soles tibios anunciando el cierre del invierno',
    climaNorte: 'tardes cálidas de verano tardío y sobremesas largas',
    escenas: [
      'encender agosto con tu energía generosa y tu capacidad admirada para resolver cada desafío',
      'cruzar la fuerza luminosa de Leo con el cuidado atento de Virgo en tu nueva vuelta al sol',
      'festejar entre risas, recuerdos lindos y el orgullo genuino de verte crecer cada año',
      'brindar en agosto agradeciendo tu mano leal siempre dispuesta cuando hace falta',
      'regalarte un festejo prolijo, alegre y pensado exclusivamente para que disfrutes vos'
    ]
  },
  {
    slug: 'cumpleanos-en-septiembre',
    mes: 'septiembre',
    mesCap: 'Septiembre',
    signos: 'Virgo y Libra',
    emoji: '🌸',
    climaSur: 'flores tempranas y aire nuevo de primavera',
    climaNorte: 'días serenos de comienzo de otoño',
    escenas: [
      'celebrar en septiembre con ese aire renovado que invita a abrir ventanas y proyectar bonito',
      'combinar la lucidez serena de Virgo y la armonía amable de Libra en tu cumpleaños',
      'brindar al aire libre disfrutando horas más lindas, buena música y cero apuros',
      'agradecer en septiembre tu equilibrio constante y la alegría que traés a cada charla',
      'festejar un nuevo ciclo personal lleno de color, salud firme y planes compartidos'
    ]
  },
  {
    slug: 'cumpleanos-en-octubre',
    mes: 'octubre',
    mesCap: 'Octubre',
    signos: 'Libra y Escorpio',
    emoji: '✨',
    climaSur: 'días luminosos de primavera plena y tardes agradables',
    climaNorte: 'colores serenos de otoño y tardes acogedoras',
    escenas: [
      'festejar en octubre cuando los días invitan a reunirse con buena música y abrazos sinceros',
      'juntar la calidez justa de Libra con la lealtad profunda de Escorpio en tu aniversario natal',
      'brindar por tus ideas claras, tu fortaleza tranquila y todo lo bueno que sembrás',
      'regalarte una noche especial donde celebremos tu historia con la gente que más te valora',
      'celebrar otro octubre caminando cerca con humor sano y gratitud verdadera'
    ]
  },
  {
    slug: 'cumpleanos-en-noviembre',
    mes: 'noviembre',
    mesCap: 'Noviembre',
    signos: 'Escorpio y Sagitario',
    emoji: '🌇',
    climaSur: 'noches tibias de primavera que anticipan el verano',
    climaNorte: 'tardes tranquilas de otoño tardío con abrigo',
    escenas: [
      'festejar en noviembre antes de que arranque la vorágine de fin de año con calma real',
      'unir la intensidad honesta de Escorpio con el entusiasmo viajero de Sagitario en tu mesa',
      'hacer un alto hermoso para agradecer todo lo que creciste y superaste estos meses',
      'celebrar tu cumpleaños con charlas hasta tarde, buena comida y planes de escapada',
      'brindar en noviembre rodeado de amistades firmes y motivos lindos para reír'
    ]
  },
  {
    slug: 'cumpleanos-en-diciembre',
    mes: 'diciembre',
    mesCap: 'Diciembre',
    signos: 'Sagitario y Capricornio',
    emoji: '🎆',
    climaSur: 'noches cálidas de cierre de año y brindis al aire libre',
    climaNorte: 'días festivos de invierno con mesa reunida en casa',
    escenas: [
      'separar con cariño tu cumpleaños de los cierres de diciembre para celebrarte solo a vos',
      'cruzar la alegría expansiva de Sagitario con la firmeza leal de Capricornio en tu día',
      'envolver tu regalo aparte y dedicarte un brindis propio en medio de un mes tan agitado',
      'celebrar que naciste en diciembre trayendo luz propia cuando el calendario ya pide balance',
      'regalarte una mesa pensada cien por ciento en tus gustos, sin mezclar festejos'
    ]
  }
];

const FECHAS_HITOS_SPEC = [
  {
    slug: 'feliz-dia-de-la-madre',
    keyword: 'feliz día de la madre',
    destinatario: 'madre en su día',
    cabecera: 'feliz día',
    modificador: 'madre',
    emoji: '💐',
    titulo: 'Feliz día de la madre - 40 Mensajes y cartas',
    h1: 'Feliz día de la madre 💐',
    meta: 'Feliz día de la madre: 40 mensajes emotivos, breves y cartas para agradecerle a mamá su entrega diaria. Copiá el texto o bajá tu tarjeta PNG personalizada.',
    esCumple: false,
    lead: 'Elegir palabras para saludar en el Día de la Madre se siente mucho más verdadero cuando nombramos un gesto cotidiano de mamá en lugar de repetir frases de vidriera.\n\nReunimos 40 dedicatorias inéditas —breves para el desayuno o WhatsApp y cartas pensadas para imprimir— que podés personalizar arriba con su nombre y tu firma en segundos.',
    seoTitulo: 'Cómo escribir una dedicatoria de Día de la Madre que conmueva de verdad',
    seoTexto: 'En el Día de la Madre sobran las frases automáticas y se agradecen el doble las palabras específicas: recordar sus mates tempranos, su paciencia en las corridas escolares o el refugio de su abrazo cuando todo costaba.\n\nSi vivís lejos, mandá el saludo temprano con una foto vieja o un audio calmo; si compartís la mesa, pasá uno de estos textos a mano en papel o descargá la tarjeta PNG en tono Rosa o Marfil.\n\nCada una de las 40 opciones está cuidada para expresar gratitud genuina hacia mamás, abuelas y figuras maternas reales.',
    escenas: [
      'tu manera incansable de cuidar la casa, escuchar sin apuro y sostenernos con ternura',
      'las sobremesas cálidas donde tu risa y tus consejos simples ordenan hasta la semana más difícil',
      'ese amor silencioso que estuvo presente en cada tropiezo y en cada logro nuestro',
      'tu fortaleza serena de todos los días, mucho más valiosa que cualquier discurso solemne',
      'el abrazo tibio que sigue siendo nuestro puerto seguro a cualquier edad'
    ]
  },
  {
    slug: 'feliz-dia-del-padre',
    keyword: 'feliz día del padre',
    destinatario: 'padre en su día',
    cabecera: 'feliz día',
    modificador: 'padre',
    emoji: '☕',
    titulo: 'Feliz día del padre - 40 Mensajes emotivos',
    h1: 'Feliz día del padre ☕',
    meta: 'Feliz día del padre: 40 dedicatorias claras, agradecidas y sin clichés para saludar a papá hoy. Adaptá con su apodo y descargá una tarjeta lista para enviar.',
    esCumple: false,
    lead: 'Decirle gracias a papá no requiere solemnidades incómodas: alcanza con nombrar lo que te enseñó con hechos, su humor de sobremesa y su apoyo firme.\n\nAcá tenés 40 textos originales para dedicarle hoy por WhatsApp, en una tarjeta junto a un detalle sencillo o leyendo juntos después del almuerzo.',
    seoTitulo: 'Qué valorar al escribirle a papá en el Día del Padre',
    seoTexto: 'Muchos padres esquivan los discursos largos pero guardan durante años una nota breve que reconoce su esfuerzo cotidiano y las enseñanzas prácticas que dejaron en casa.\n\nMencioná una escena compartida —un viaje en ruta, una charla arreglando algo o su calma para aconsejar— y sumá su apodo en el personalizador superior.\n\nTodas las 40 dedicatorias de esta colección evitan lugares comunes gastados y hablan con afecto real.',
    escenas: [
      'tu ejemplo firme de trabajo, palabra cumplida y humor tranquilo en cada domingo en familia',
      'las charlas sin apuro donde siempre encontraste la manera justa de darnos tranquilidad',
      'cada enseñanza práctica que nos dejaste haciendo cosas juntos sin necesidad de sermones',
      'tu respaldo incondicional cuando tocó empezar proyectos o animarse a decisiones grandes',
      'el orgullo sereno de contar con un padre presente, generoso y leal en todo momento'
    ]
  },
  {
    slug: 'feliz-dia-del-amigo',
    keyword: 'feliz día del amigo',
    destinatario: 'amigo en su día',
    cabecera: 'feliz día',
    modificador: 'amigo',
    emoji: '🥂',
    titulo: 'Feliz día del amigo - 40 Frases y saludos',
    h1: 'Feliz día del amigo 🥂',
    meta: 'Feliz día del amigo: 40 saludos con humor, gratitud y complicidad para mandar al grupo o a tu mejor amistad. Personalizá con apodos y compartí en Instagram.',
    esCumple: false,
    lead: 'La amistad verdadera se celebra todo el año, pero el Día del Amigo es la excusa perfecta para decirle a tu gente elegida cuánto vale en tu semana.\n\nExplorá 40 mensajes con chispa, cariño honesto y cero cursilería, listos para copiar al chat grupal, enviar por privado o descargar en formato Story.',
    seoTitulo: 'Cómo elegir la mejor frase para el Día del Amigo sin caer en cadenas',
    seoTexto: 'Un saludo reenviado a veinte contactos se nota en dos segundos; en cambio, nombrar una anécdota compartida o agradecer un café a tiempo convierte el Día del Amigo en un reencuentro real.\n\nUsá las opciones breves para levantar el chat de amigos y reservá las dedicatorias más profundas para esa amistad de fierro que estuvo en las bravas.\n\nPodés sumar apodos y descargar tarjetas listas para Instagram Stories o estados de WhatsApp en un clic.',
    escenas: [
      'las charlas interminables que arrancan por diez minutos y terminan acomodándonos la semana',
      'esa lealtad sin condiciones para aparecer cuando hace falta y festejar cada alegría ajena',
      'las risas compartidas que resisten mudanzas, trabajos nuevos y calendarios apretados',
      'el lujo enorme de tener amistades con las que se puede hablar en silencio o reír hasta llorar',
      'nuestra complicidad intacta en cada juntada improvisada con algo rico en la mesa'
    ]
  },
  {
    slug: 'feliz-dia-de-los-abuelos',
    keyword: 'feliz día de los abuelos',
    destinatario: 'abuelos en su día',
    cabecera: 'feliz día',
    modificador: 'abuelos',
    emoji: '🏡',
    titulo: 'Feliz día de los abuelos - 40 Dedicatorias',
    h1: 'Feliz día de los abuelos 🏡',
    meta: 'Feliz día de los abuelos: 40 mensajes tiernos y cartas para agradecer a la abuela y al abuelo por su historia, paciencia y cariño. Imprimí o compartí en PNG.',
    esCumple: false,
    lead: 'Los abuelos guardan la memoria viva de toda la familia en historias, comidas caseras y consejos llenos de paciencia.\n\nTe ofrecemos 40 textos cariñosos, claros y fáciles de leer para enviar por mensaje, pasar a mano en letra grande o imprimir junto a una foto de nietos e hijos.',
    seoTitulo: 'Detalles que emocionan al saludar a los abuelos en su día',
    seoTexto: 'Cuando escribís para tu abuela o tu abuelo, menos emojis y más calidez familiar hacen una diferencia enorme. Recordar una receta suya, sus tardes de mate o un consejo paciente toca directo al corazón.\n\nAprovechá nuestro modo de impresión o descargá la tarjeta visual en tonos Marfil o Celeste con tipografía nítida para dejarla junto al portarretrato.\n\nSi viven lejos, mandá el texto a la mañana y acompañalo luego con una llamada o videollamada tranquila.',
    escenas: [
      'la dulzura paciente con la que siempre reciben a nietos e hijos alrededor de su mesa',
      'las historias de antes contadas con memoria clara y una sonrisa que abraza generaciones',
      'ese cuidado tierno que mezcla consejos sabios, comida rica y tiempo sin apuro',
      'el legado de bondad y unión familiar que construyeron paso a paso durante décadas',
      'cada tarde tranquila compartida escuchando sus anécdotas y sintiendo la casa llena de paz'
    ]
  },
  {
    slug: 'feliz-dia-del-maestro',
    keyword: 'feliz día del maestro',
    destinatario: 'maestro en su día',
    cabecera: 'feliz día',
    modificador: 'maestro',
    emoji: '📚',
    titulo: 'Feliz día del maestro - 40 Saludos y tarjetas',
    h1: 'Feliz día del maestro 📚',
    meta: 'Feliz día del maestro: 40 mensajes respetuosos y cálidos para agradecer a docentes y profesoras su vocación diaria. Firmá como familia o curso completo.',
    esCumple: false,
    lead: 'Agradecer la paciencia, el entusiasmo y el tiempo de quienes enseñan cada día deja una huella enorme en docentes y profesores.\n\nEsta selección reúne 40 saludos cuidados y respetuosos para enviar desde el chat de padres, firmar en nombre de todo el curso o acompañar un detalle escolar.',
    seoTitulo: 'Cómo redactar un saludo cordial y memorable en el Día del Maestro',
    seoTexto: 'Una dedicatoria docente gana muchísimo cuando reconoce algo concreto del año escolar: la calma para explicar, la motivación para leer o el cariño diario hacia los chicos.\n\nEn el personalizador superior podés escribir el nombre de la seño o profe y firmar por ejemplo como "Familias de 4.º B" o "Tus alumnos".\n\nRespetamos siempre el tono cordial adecuado para ámbitos escolares tanto de primaria como de secundaria.',
    escenas: [
      'la vocación serena con la que despiertan curiosidad y confianza dentro del aula cada día',
      'el respeto y la paciencia infinita para acompañar el ritmo propio de cada estudiante',
      'esa sonrisa de bienvenida en la puerta de la escuela que da calma a chicos y familias',
      'las horas dedicadas con amor a preparar clases, corregir y alentar siempre un paso más',
      'el ejemplo humano que queda grabado mucho más allá de los cuadernos y las notas'
    ]
  },
  {
    slug: 'feliz-navidad-en-familia',
    keyword: 'feliz navidad en familia',
    destinatario: 'navidad familiar',
    cabecera: 'feliz navidad',
    modificador: 'familia',
    emoji: '🎄',
    titulo: 'Feliz Navidad en familia - 40 Mensajes',
    h1: 'Feliz Navidad en familia 🎄',
    meta: 'Feliz Navidad en familia: 40 mensajes cálidos, serenos y profundos para compartir en Nochebuena, tarjetas de regalo o grupos familiares. Copiá y personalizá.',
    esCumple: false,
    lead: 'Más allá de las mesas apuradas o los envíos masivos, un mensaje navideño escrito con calma acerca a quienes se sientan juntos y abraza a quienes están lejos.\n\nElegí entre 40 textos serenos, emotivos o con fe para enviar en Nochebuena, acompañar paquetes bajo el árbol o compartir en tarjeta visual.',
    seoTitulo: 'Cómo mandar saludos de Navidad cercanos sin sonar a cadena reenviada',
    seoTexto: 'En Nochebuena los teléfonos reciben decenas de imágenes genéricas idénticas; un párrafo breve que nombre a la familia o recuerde un abrazo compartido durante el año se lee con cariño real.\n\nAdaptá el apodo arriba y descargá la tarjeta PNG en tono Oliva Cálida o Dorado Festivo para enviar por WhatsApp o imprimir junto a un presente.\n\nIncluimos dedicatorias ideales tanto para mesas alegres como para familias que atraviesan fiestas más tranquilas.',
    escenas: [
      'la paz de reunirnos alrededor de la mesa agradeciendo estar juntos a pesar del año intenso',
      'el valor sencillo de escucharnos sin apuro y brindar con gratitud bajo las luces de casa',
      'ese abrigo familiar que acorta distancias cuando algún querido celebra en otra ciudad',
      'el deseo sereno de salud, concordia y esperanza viva para cada hogar que queremos',
      'la ternura de preparar juntos la mesa celebrando lo esencial por encima de cualquier prisa'
    ]
  },
  {
    slug: 'feliz-ano-nuevo-familia',
    keyword: 'feliz año nuevo en familia',
    destinatario: 'año nuevo familiar',
    cabecera: 'feliz año nuevo',
    modificador: 'familia',
    emoji: '🥂',
    titulo: 'Feliz Año Nuevo en familia - 40 Brindis',
    h1: 'Feliz Año Nuevo en familia 🥂',
    meta: 'Feliz Año Nuevo en familia: 40 mensajes de gratitud y buenos deseos para recibir el próximo año con calma y afecto. Listos para WhatsApp o tarjetas PNG.',
    esCumple: false,
    lead: 'Cerrar un calendario y estrenar otro invita a agradecer lo aprendido y desear salud firme, calma y proyectos con sentido.\n\nReunimos 40 brindis y mensajes de Año Nuevo escritos en español natural para compartir con familia y amigos cercanos antes o después de medianoche.',
    seoTitulo: 'Ideas para escribir un mensaje de Año Nuevo honesto y sin exageraciones',
    seoTexto: 'En lugar de prometer un año perfecto sin problemas, funciona muchísimo mejor desear serenidad para lo que toque resolver, salud para disfrutar y tiempo libre junto a los nuestros.\n\nSumá tu firma arriba y elegí si querés copiar texto directo para el chat familiar o descargar la versión Story 1080×1920 para saludar a todos en redes.\n\nCada texto evita frases repetidas y prioriza cercanía y esperanza realista.',
    escenas: [
      'la gratitud tranquila por todo lo transitado este año y las enseñanzas que nos fortalecieron',
      'el brindis honesto de medianoche deseando salud, trabajo sereno y mesa compartida',
      'la ilusión limpia de estrenar doce meses nuevos con tiempo real para nuestros vínculos',
      'la alegría simple de empezar el año sabiendo que seguimos caminando codo a codo',
      'el deseo firme de paz cotidiana y motivos lindos para celebrar cada mes venidero'
    ]
  },
  {
    slug: 'bienvenida-nacimiento-bebe',
    keyword: 'bienvenida por nacimiento de bebé',
    destinatario: 'recién nacido',
    cabecera: 'bienvenida',
    modificador: 'nacimiento bebé',
    emoji: '👶',
    titulo: 'Bienvenida por nacimiento de bebé - 40 Mensajes',
    h1: 'Bienvenida por nacimiento de bebé 👶',
    meta: 'Bienvenida por nacimiento de bebé: 40 mensajes tiernos para felicitar a mamá y papá por la llegada del recién nacido. Perfectos para regalos y tarjetas.',
    esCumple: false,
    lead: 'Cuando llega un bebé nuevo a la familia o al grupo de amigos, unas palabras cálidas que abracen también a mamá y papá significan muchísimo.\n\nAcá encontrás 40 dedicatorias dulces y respetuosas del descanso familiar, ideales para acompañar ajuares, flores o enviar sin invadir sus horarios.',
    seoTitulo: 'Qué escribir al nacer un bebé sin abrumar a los flamantes papás',
    seoTexto: 'En los primeros días tras el parto sobran consejos no pedidos y falta descanso: un mensaje corto, tierno y respetuoso que felicite la llegada del bebé y ofrezca una comida o ayuda práctica se agradece muchísimo.\n\nUsá el personalizador para sumar el nombre del recién nacido o de sus papás y descargá una postal limpia en tonos Celeste o Rosa.\n\nEvitamos presiones y priorizamos bienvenida amorosa, salud y calma para el nuevo hogar.',
    escenas: [
      'la ternura inmensa de ver esa carita nueva cambiando para siempre el aire de la casa',
      'el abrazo agradecido para mamá y papá en estos primeros días llenos de emoción y descubrimiento',
      'la alegría compartida por toda la familia recibiendo con amor esta vida recién llegada',
      'el deseo sereno de salud, noches tranquilas y paciencia dulce para cada primer paso juntos',
      'esa luz inconfundible que trae un recién nacido recordándonos lo verdaderamente importante'
    ]
  },
  {
    slug: 'cumplemes-de-bebe',
    keyword: 'feliz cumplemes de bebé',
    destinatario: 'bebé en su cumplemes',
    cabecera: 'feliz cumplemes',
    modificador: 'bebé',
    emoji: '🧸',
    titulo: 'Feliz cumplemes de bebé - 40 Dedicatorias',
    h1: 'Feliz cumplemes de bebé 🧸',
    meta: 'Feliz cumplemes de bebé: 40 frases dulces de 1 a 11 meses para álbumes de fotos, historias de Instagram y dedicatorias de padres, tíos o abuelos.',
    esCumple: false,
    lead: 'Durante el primer año de vida, cada mes trae una sonrisa nueva, un descubrimiento enorme y una foto distinta para guardar en el álbum.\n\nEstas 40 dedicatorias de cumplemes están pensadas tanto para padres que suben su foto mensual como para abuelos, madrinas y tíos que siguen cada etapa.',
    seoTitulo: 'Cómo escribir recuerdos lindos para cada cumplemes de bebé',
    seoTexto: 'Anotar un detalle pequeño del mes —su nueva carcajada, cómo mira las luces o su primer balbuceo— transforma una foto bonita en un recuerdo que el bebé va a atesorar cuando crezca.\n\nPodés cargar incluso una foto local en nuestro estudio superior para armar la tarjeta Story 9:16 lista para imprimir o guardar en el álbum digital.\n\nCada mensaje mantiene lenguaje tierno, claro y adaptable del primer al decimoprimer mes.',
    escenas: [
      'cada pequeña conquista nueva que transforma una mañana cualquiera en fiesta familiar',
      'esas carcajadas chiquitas y miradas curiosas que llenan el álbum mes tras mes',
      'el amor paciente de mamá y papá acompañando paso a paso este primer año irrepetible',
      'la emoción de ver cuánto crece entre abrazos tibios y canciones suaves antes de dormir',
      'cada mes sumado descubriendo colores, sabores y manos que siempre cuidan su camino'
    ]
  },
  {
    slug: 'feliz-jubilacion-y-retiro',
    keyword: 'feliz jubilación y retiro',
    destinatario: 'persona que se jubila',
    cabecera: 'feliz jubilación',
    modificador: 'retiro laboral',
    emoji: '🌻',
    titulo: 'Feliz jubilación y retiro - 40 Dedicatorias',
    h1: 'Feliz jubilación y retiro 🌻',
    meta: 'Feliz jubilación y retiro: 40 mensajes de reconocimiento y alegría para despedir una etapa laboral y celebrar el tiempo libre merecido. Ideal tarjetas de equipo.',
    esCumple: false,
    lead: 'Llegar a la jubilación después de años de compromiso, madrugones y enseñanza merece palabras a la altura de todo lo sembrado.\n\nReunimos 40 textos ideales para tarjetas firmadas por compañeros de trabajo, discursos de despedida o mensajes familiares celebrando la nueva libertad.',
    seoTitulo: 'Claves para escribir un mensaje de jubilación cálido y digno',
    seoTexto: 'Un buen saludo de retiro laboral equilibra dos cosas: agradecer con respeto la huella profesional y celebrar sin miedo la etapa nueva de viajes, hobbies y mañanas sin despertador.\n\nEn el campo Tu firma del personalizador podés poner el nombre del equipo o de toda la familia para preparar la tarjeta grupal en segundos.\n\nCuidamos el trato cordial (vos o usted) para servir tanto a colegas cercanos como a jefes o docentes.',
    escenas: [
      'tantos años de entrega honesta, compañerismo leal y oficio compartido con generosidad',
      'la satisfacción tranquila de cerrar un ciclo enorme dejando amigos y respeto en cada oficina',
      'el comienzo merecido de mañanas lentas, cafés sin reloj y viajes elegidos a tu ritmo',
      'el aplauso sincero de quienes aprendimos muchísimo trabajando a tu lado día tras día',
      'esta etapa luminosa donde por fin el calendario responde únicamente a tus propios deseos'
    ]
  },
  {
    slug: 'bodas-de-plata-25-anos',
    keyword: 'bodas de plata 25 años',
    destinatario: 'pareja 25 años',
    cabecera: 'bodas de plata',
    modificador: '25 años',
    emoji: '💍',
    titulo: 'Bodas de plata 25 años - 40 Felicitaciones',
    h1: 'Bodas de plata (25 años) 💍',
    meta: 'Bodas de plata 25 años: 40 mensajes profundos y emotivos para celebrar un cuarto de siglo de matrimonio, ya sea para tu pareja o para amigos y padres.',
    esCumple: false,
    lead: 'Cumplir veinticinco años de matrimonio habla de paciencia, humor compartido, crisis superadas de la mano y un proyecto de vida elegido cada día.\n\nEstas 40 dedicatorias cubren tanto mensajes íntimos para tu cónyuge como saludos de hijos, hermanos y amigos celebrando sus Bodas de Plata.',
    seoTitulo: 'Qué escribir en unas Bodas de Plata (25 años juntos) con emoción real',
    seoTexto: 'Veinticinco años de historia compartida merecen mucho más que tópicos rápidos: recordar cómo armaron la casa, cómo crecieron juntos o cómo se siguen mirando con complicidad emociona de verdad.\n\nElegí entre mensajes cortos para acompañar flores o cartas extensas listas para imprimir en modo postal elegante sobre papel.\n\nCuidamos el vocabulario específico de los 25 años de matrimonio sin mezclar fechas.',
    escenas: [
      'un cuarto de siglo construyendo hogar, paciencia diaria y complicidad en las buenas y difíciles',
      'esa mirada cómplice que después de veinticinco años sigue eligiendo acompañarse cada mañana',
      'el ejemplo luminoso de amor realista, diálogo paciente y humor sano que inspiran en familia',
      'tantos proyectos logrados paso a paso sabiendo que el mejor refugio siempre estuvo en casa',
      'el orgullo hondo de celebrar veinticinco calendarios caminando juntos con respeto y ternura'
    ]
  },
  {
    slug: 'brindis-de-cumpleanos',
    keyword: 'brindis de cumpleaños',
    destinatario: 'brindis en fiesta',
    cabecera: 'brindis',
    modificador: 'cumpleaños',
    emoji: '🥂',
    titulo: 'Brindis de cumpleaños - 40 Discursos cortos',
    h1: 'Brindis de cumpleaños para leer en voz alta 🥂',
    meta: 'Brindis de cumpleaños: 40 palabras breves y guiones de 45 segundos pensados para leer en voz alta antes de soplar las velas sin trabarse ni improvisar.',
    esCumple: true,
    lead: 'Cuando te piden unas palabras antes de cortar la torta y se hace silencio en toda la mesa, tener un guion claro de 45 segundos salva el momento.\n\nArmamos 40 brindis de cumpleaños diseñados específicamente para decirse en voz alta: frases con ritmo respirable, cierre con copa arriba y cero discursos eternos.',
    seoTitulo: 'Estructura en 3 pasos para un brindis de cumpleaños perfecto',
    seoTexto: 'Un brindis memorable dura entre cuarenta y sesenta segundos: arranca agradeciendo a quienes vinieron, nombra una virtud real del homenajeado y cierra invitando a levantar la copa.\n\nPodés practicar el texto arriba cambiando el nombre del protagonista y hasta imprimirlo en formato postal chica para leer cómodo sin depender del brillo del teléfono.\n\nCada texto evita palabras enredadas que traben la lectura en medio de la emoción.',
    escenas: [
      'esta mesa llena que hoy se junta alrededor tuyo para agradecer tu alegría constante',
      'una historia común hecha de charlas largas, respaldo silencioso y risa compartida',
      'el privilegio enorme de celebrar tu vuelta al sol mirándonos a los ojos y copa en alto',
      'tu manera generosa de unir personas distintas y hacernos sentir cómodos siempre',
      'este instante antes de las velas donde sobran los discursos y manda el cariño sincero'
    ]
  },
  {
    slug: 'feliz-cumpleanos-18-anos-para-mi',
    keyword: 'felices 18 años para mí',
    destinatario: 'para mí 18 años',
    cabecera: 'feliz cumpleaños',
    modificador: '18 años para mí',
    emoji: '🎓',
    titulo: 'Felices 18 años para mí - 40 Frases propias',
    h1: 'Felices 18 años para mí 🎓',
    meta: 'Felices 18 años para mí: 40 captions y reflexiones auténticas para celebrar tu mayoría de edad en Instagram, WhatsApp o tu diario sin sonar repetido.',
    esCumple: true,
    lead: 'Cumplir 18 años marca el estreno de tus propias decisiones, aprendizajes recientes y ganas limpias de salir a buscar tu camino.\n\nSi querés publicar una foto celebrando tu mayoría de edad o escribir una nota para recordar este día, acá tenés 40 textos honestos en primera persona.',
    seoTitulo: 'Cómo celebrar tus 18 años en redes con autenticidad y gratitud',
    seoTexto: 'Las mejores publicaciones de auto-felicitación a los 18 combinan entusiasmo por lo que empieza con agradecimiento real a quienes te acompañaron hasta acá.\n\nElegí frases cortas para tu caption o Story de Instagram, o bajá una tarjeta vertical 1080×1920 con tu propia foto cargada en el personalizador.\n\nCuidamos un lenguaje fresco, joven y genuino, lejos de frases copiadas sin alma.',
    escenas: [
      'estrenar mis 18 años agradeciendo todo lo aprendido y animándome a elegir mi rumbo',
      'cerrar la etapa escolar mirando con ilusión y calma los proyectos nuevos que empiezan hoy',
      'celebrar mi mayoría de edad rodeado de afectos sinceros que bancan cada paso propio',
      'abrazar quién soy hoy con aciertos, errores que enseñan y muchísimas ganas de crecer',
      'dar la bienvenida a los 18 sabiendo que lo mejor se construye paso a paso y sin poses'
    ]
  },
  {
    slug: 'feliz-cumpleanos-20-anos-para-mi',
    keyword: 'felices 20 años para mí',
    destinatario: 'para mí 20 años',
    cabecera: 'feliz cumpleaños',
    modificador: '20 años para mí',
    emoji: '✨',
    titulo: 'Felices 20 años para mí - 40 Textos propios',
    h1: 'Felices 20 años para mí ✨',
    meta: 'Felices 20 años para mí: 40 frases y reflexiones en primera persona para agradecer lo vivido al estrenar década nueva y compartir en fotos o estados.',
    esCumple: true,
    lead: 'Dejar atrás la adolescencia para estrenar los veinte trae mezcla de libertad, preguntas nuevas y orgullo por lo que ya fuiste superando.\n\nElegí entre 40 mensajes en primera persona pensados para acompañar tus fotos, historias de Instagram o una carta hacia tu yo del futuro.',
    seoTitulo: 'Ideas para expresar cómo se sienten tus 20 años en primera persona',
    seoTexto: 'Al cumplir 20 ya acumulaste experiencias propias pero seguís teniendo todo un mapa abierto por delante. Nombrar una cosa que agradecés y un deseo simple para esta década hace que tu mensaje conecte de verdad.\n\nProbá el estudio visual arriba con fondo Dorado Festivo o Lavanda y sumá tu propia fotografía antes de exportar para Instagram.\n\nTodos los textos están redactados en español natural, sin poses ni clichés vacíos.',
    escenas: [
      'estrenar mis 20 años con paz mental, gente querida cerca y mil proyectos por probar',
      'despedir la adolescencia agradeciendo quién fui y celebrando la versión libre que construyo hoy',
      'abrir esta década nueva sabiendo elegir mejor qué batallas valen mi tiempo y mi alegría',
      'brindar por mis veinte rodeado de amistades reales, música buena y metas que entusiasman',
      'celebrar mi día recordando que crecer también es disfrutar el presente sin tanta prisa'
    ]
  },
  {
    slug: 'feliz-cumpleanos-30-anos-para-mi',
    keyword: 'felices 30 años para mí',
    destinatario: 'para mí 30 años',
    cabecera: 'feliz cumpleaños',
    modificador: '30 años para mí',
    emoji: '🥂',
    titulo: 'Felices 30 años para mí - 40 Reflexiones',
    h1: 'Felices 30 años para mí 🥂',
    meta: 'Felices 30 años para mí: 40 mensajes honestos y serenos para celebrar llegar al tercer piso con calma, humor propio y gratitud. Listos para compartir.',
    esCumple: true,
    lead: 'Llegar a los 30 años se siente distinto: sabés mejor qué querés, qué soltar sin culpa y con quién vale la pena compartir una mesa larga.\n\nReunimos 40 reflexiones y captions en primera persona para festejar tu cambio de década con lucidez, humor tranquilo y orgullo sano.',
    seoTitulo: 'Por qué los 30 se celebran mejor agradeciendo lo vivido sin dramas',
    seoTexto: 'Lejos de los chistes repetidos sobre envejecer, cumplir 30 suele traer claridad emocional, vínculos más elegidos y ganas de disfrutar sin querer conformar a todo el mundo.\n\nElegí una reflexión honesta para tus redes o guardá una tarjeta impresa con balance de esta etapa tan linda.\n\nCada una de las 40 opciones celebra la madurez liviana con humor sano y calidez.',
    escenas: [
      'llegar a mis 30 años sabiendo exactamente qué me da paz y qué ya no quiero negociar',
      'agradecer las vueltas de los veinte que me trajeron hasta acá con más criterio y risa',
      'brindar por mi tercera década rodeado de gente leal, buena mesa y sueños con raíces',
      'festejar este cambio de folio sin apuro, eligiendo salud, calma y tiempo de calidad',
      'celebrar mis 30 con la tranquilidad hermosa de sentirme cada vez más cerca de mí'
    ]
  },
  {
    slug: 'agradecimiento-por-saludos-cumpleanos',
    keyword: 'gracias por saludos de cumpleaños',
    destinatario: 'respuesta a saludos',
    cabecera: 'gracias por saludos',
    modificador: 'cumpleaños',
    emoji: '🙏',
    titulo: 'Gracias por los saludos de cumpleaños - 40 Respuestas',
    h1: 'Gracias por los saludos de cumpleaños 🙏',
    meta: 'Gracias por los saludos de cumpleaños: 40 respuestas cálidas y originales para agradecer mensajes de WhatsApp, historias de Instagram o llamadas recibidas.',
    esCumple: true,
    lead: 'Después de un día lleno de mensajes, audios e historias etiquetadas, cuesta encontrar palabras lindas que no suenen a respuesta automática de compromiso.\n\nAcá tenés 40 maneras frescas, agradecidas y breves de responder en grupos, estados de WhatsApp, historias de Instagram o mensajes privados.',
    seoTitulo: 'Cómo agradecer felicitaciones de cumpleaños sin copiar un frío "gracias a todos"',
    seoTexto: 'Un agradecimiento sincero cierra el círculo afectivo de tu día y devuelve cariño a quienes se acordaron de vos entre sus corridas.\n\nTenés opciones ágiles pensadas para publicar en tus historias al día siguiente y respuestas más personales para mandar uno por uno a quienes te emocionaron con su mensaje.\n\nPodés sumar tu firma arriba y bajar una tarjeta de agradecimiento lista para cerrar la jornada.',
    escenas: [
      'cada mensaje, audio y llamada que hicieron muchísimo más luminoso mi día desde temprano',
      'el cariño inmenso recibido en cada saludo que guardé en el corazón con sonrisa enorme',
      'tomarse un minuto en medio de la semana para desearme cosas tan lindas y reales',
      'sentirme tan rodeado de afecto genuino tanto de quienes estuvieron cerca como a la distancia',
      'ese regalo gigante que fue leer tantos buenos deseos y risas compartidas por mi cumple'
    ]
  }
];

const dir = path.resolve('data/categorias');

function construirHubMes(spec, idxMes) {
  return {
    tipo: 'hub',
    slug: spec.slug,
    destinatario: `cumpleaños de ${spec.mes}`,
    cabecera: 'cumpleaños',
    modificador: spec.mes,
    grupo: 'meses',
    keyword: `cumpleaños en ${spec.mes}`,
    titulo: `Cumpleaños en ${spec.mesCap} - 40 Mensajes y Signos`,
    h1: `Cumpleaños en ${spec.mesCap} (${spec.signos}) ${spec.emoji}`,
    meta: `Cumpleaños en ${spec.mesCap}: 40 mensajes originales para nacidos bajo ${spec.signos}. Personalizá con nombre, foto o formato Story IG listo para enviar hoy.`,
    emoji: spec.emoji,
    lead: `Quienes celebran su cumpleaños en ${spec.mes} comparten el ritmo propio de la temporada (${spec.climaSur}) y la energía de los signos ${spec.signos}.\n\nEn esta colección reunimos 40 dedicatorias inéditas pensadas para nacidos en ${spec.mesCap}, listas para adaptar arriba con nombre, firma y foto o descargar en tarjeta PNG gratuita.`,
    creado: '2026-11-19',
    actualizado: '2026-11-19',
    seoTitulo: `Qué destacar al felicitar a alguien que cumple en ${spec.mes} (${spec.signos})`,
    seoTexto: `Dedicar unas palabras a quienes cumplen años en ${spec.mes} gana cercanía instantánea cuando conectás el saludo con su temporada real (${spec.climaSur} o ${spec.climaNorte}) y un detalle de su forma de ser.\n\nAdemás, los nacidos durante ${spec.mes} se reparten entre los signos de ${spec.signos}: podés consultar abajo sus fichas de horóscopo para ajustar todavía mejor el tono del mensaje o elegir el regalo acertado.\n\nCada una de las 40 publicaciones sobre felicitaciones de ${spec.mesCap} está redactada en español natural y se adapta al instante con tu firma y foto opcional en nuestro estudio.`,
    _escenas: spec.escenas,
    _keyword: `cumpleaños en ${spec.mes}`,
    _esCumple: true,
    _dest: `cumpleaños de ${spec.mes}`
  };
}

function construirRegistrosDesdeSpecs(specs, offsetGlobal) {
  const registros = [];
  const titulosGlobalesUsados = new Set();
  const textosGlobalesUsados = new Set();
  const slugsUsados = new Set();

  // Cargar corpus existente para garantizar 0 colisiones de slug, titulo o texto
  const base = JSON.parse(fs.readFileSync(path.resolve('data/contenido.json'), 'utf8'));
  let existentes = [...base];
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.json') && !/^g1[12]-/.test(n))) {
    existentes = existentes.concat(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
  }
  for (const r of existentes) {
    if (r.slug) slugsUsados.add(r.slug);
    if (r.tipo === 'mensaje') {
      if (r.titulo) titulosGlobalesUsados.add(normalizar(r.titulo));
      if (r.texto) textosGlobalesUsados.add(String(r.texto).trim());
    }
  }

  specs.forEach((spec, sIdx) => {
    const { _escenas, _keyword, _esCumple, _dest, ...hubObj } = spec;
    if (slugsUsados.has(hubObj.slug)) {
      throw new Error(`Colisión de slug con hub existente: ${hubObj.slug}`);
    }
    slugsUsados.add(hubObj.slug);
    registros.push(hubObj);

    const primerasEnHub = new Set();
    let intentosExtra = 0;

    for (let i = 0; i < 40; i++) {
      const primera = PRIMERAS_PALABRAS[i];
      if (primerasEnHub.has(normalizar(primera))) {
        throw new Error(`Primera palabra repetida en ${hubObj.slug}: ${primera}`);
      }
      primerasEnHub.add(normalizar(primera));

      const comp = COMPLEMENTOS_TITULO[(i + sIdx * 3 + offsetGlobal) % COMPLEMENTOS_TITULO.length];
      let tituloMsg = `${primera} ${comp}`;
      // Ajustar palabras si excediera 12 o contuviera keyword del hub
      const palabras = tituloMsg.split(/\s+/);
      if (palabras.length > 11) {
        tituloMsg = palabras.slice(0, 10).join(' ');
      }
      const cortePrep = /\b(de|del|en|con|a|al|para|por|sin|y|el|la|los|las|un|una|tu|su)$/i;
      while (cortePrep.test(tituloMsg.trim())) {
        tituloMsg = tituloMsg.trim().split(/\s+/).slice(0, -1).join(' ');
      }
      // Si el titulo normalizado ya existiera globalmente, variar el cierre de titulo determinísticamente
      const variantesSufijo = ['en calma', 'con gratitud', 'sin prisa', 'desde casa', 'hoy mismo', 'con afecto', 'junto a vos', 'de verdad'];
      while (titulosGlobalesUsados.has(normalizar(tituloMsg)) || normalizar(tituloMsg).includes(normalizar(_keyword))) {
        const suf = variantesSufijo[intentosExtra % variantesSufijo.length];
        intentosExtra++;
        const basePalabras = tituloMsg.split(/\s+/).slice(0, 7);
        tituloMsg = `${basePalabras.join(' ')} ${suf}`;
        if (intentosExtra > 20) break;
      }
      titulosGlobalesUsados.add(normalizar(tituloMsg));

      let slugMsg = slugify(tituloMsg);
      let suffixCount = 2;
      while (slugsUsados.has(slugMsg)) {
        slugMsg = `${slugify(tituloMsg)}-${suffixCount++}`;
      }
      slugsUsados.add(slugMsg);

      const escena = _escenas[i % _escenas.length];
      const escenasSec = _escenas[(i + 2) % _escenas.length];
      const cierrePool = _esCumple ? CIERRES_GENERALES : CIERRES_NO_CUMPLE;
      const cierre = cierrePool[(i + sIdx * 2) % cierrePool.length];
      const puentes = _esCumple
        ? [
            `En esta fecha tan especial merece lugar aparte ${escena}.`,
            `Cuando llega este momento del calendario elegimos recordar ${escena}.`,
            `Hoy celebramos de frente lo lindo que significa ${escena}.`,
            `Nos detuvimos un momento para escribirte celebrando ${escena}.`,
            `Más allá de la rutina diaria, hoy ponemos en primer plano ${escena}.`
          ]
        : [
            `En este día tan significativo queremos destacar ${escena}.`,
            `Elegimos palabras pausadas y reales para agradecer ${escena}.`,
            `Hoy nos tomamos un rato tranquilo para poner en valor ${escena}.`,
            `Más allá de cualquier prisa diaria, abrazamos con cariño ${escena}.`,
            `Queremos dejar por escrito cuánto suma en nuestra vida ${escena}.`
          ];

      const segundos = [
        `Además valoramos con el corazón ${escenasSec}, porque en esos gestos cotidianos y sin poses se construye lo que de verdad recordamos con los años.`,
        `También celebramos cada vez que compartimos ${escenasSec}, sabiendo que la cercanía honesta transforma cualquier jornada común en un recuerdo hermoso.`,
        `Por eso hoy brindamos agradeciendo ${escenasSec}, con la certeza tranquila de que lo sembrado con amor deja huella duradera.`,
        `Cada detalle vivido alrededor de ${escenasSec} confirma lo valioso que es caminar cerca y celebrar estas fechas como corresponde.`,
        `Nos quedamos con la alegría enorme de seguir cuidando ${escenasSec}, sumando motivos honestos para encontrarnos sin mirar el reloj.`
      ];

      const p1 = `${tituloMsg}. ${puentes[(i + sIdx) % puentes.length]}`;
      const p2 = segundos[(i + sIdx * 3) % segundos.length];
      const textoFinal = `${p1}\n\n${p2}\n\n${cierre}`;

      if (textosGlobalesUsados.has(textoFinal.trim())) {
        throw new Error(`Texto duplicado generado en ${hubObj.slug} índice ${i}`);
      }
      textosGlobalesUsados.add(textoFinal.trim());

      registros.push({
        tipo: 'mensaje',
        slug: slugMsg,
        categoria: hubObj.slug,
        destinatario: _dest,
        titulo: tituloMsg,
        texto: textoFinal
      });
    }
  });

  return registros;
}

const specsMeses = MESES_SPEC.map((m, idx) => construirHubMes(m, idx));
const specsHitos = FECHAS_HITOS_SPEC.map((f) => {
  const leadExtra =
    f.lead.length < 308
      ? ` Además podés personalizar el texto con nombre, firma y foto opcional o imprimirlo limpio como postal en ${f.slug.replace(/-/g, ' ')}.`
      : '';
  const seoExtra =
    f.seoTexto.length < 415
      ? `\n\nTodo el contenido dedicado a ${f.keyword} está revisado para que resulte claro, natural y fácil de adaptar según la cercanía real de cada vínculo.`
      : '';
  return {
    tipo: 'hub',
    slug: f.slug,
    destinatario: f.destinatario,
    cabecera: f.cabecera,
    modificador: f.modificador,
    grupo: 'fechas_hitos',
    keyword: f.keyword,
    titulo: f.titulo,
    h1: f.h1,
    meta: f.meta,
    emoji: f.emoji,
    lead: f.lead + leadExtra,
    creado: '2026-11-19',
    actualizado: '2026-11-19',
    seoTitulo: f.seoTitulo,
    seoTexto: f.seoTexto + seoExtra,
    _escenas: f.escenas,
    _keyword: f.keyword,
    _esCumple: f.esCumple,
    _dest: f.destinatario
  };
});

const regMeses = construirRegistrosDesdeSpecs(specsMeses, 0);
fs.writeFileSync(path.join(dir, 'g11-meses.json'), JSON.stringify(regMeses));

// Evitar colisiones internas entre g11 y g12 corriendo después de escribir g11
const regHitos = construirRegistrosDesdeSpecs(specsHitos, 17);
fs.writeFileSync(path.join(dir, 'g12-fechas-hitos.json'), JSON.stringify(regHitos));

console.log(`Escritos g11-meses.json (${regMeses.length} regs) y g12-fechas-hitos.json (${regHitos.length} regs).`);
