export interface SignoZodiaco {
  slug: string;
  nombre: string;
  simbolo: string;
  elemento: 'Fuego' | 'Tierra' | 'Aire' | 'Agua';
  planeta: string;
  rangoTexto: string;
  inicioMes: number;
  inicioDia: number;
  finMes: number;
  finDia: number;
  mesesSlugs: [string, string];
  mesesNombres: [string, string];
  rasgos: [string, string, string];
  tonoIdeal: string;
  estiloCelebracion: string;
  comoSaludar: string;
  ideasRegalo: [string, string, string];
  frasesCumpleanos: { titulo: string; texto: string }[];
  faqs: { pregunta: string; respuesta: string }[];
  compatibilidadBrindis: [string, string];
}

export interface MesInfoZodiaco {
  mesNum: number;
  slug: string;
  nombre: string;
  nombreCap: string;
  estacionSurNorte: string;
  signos: [
    { slug: string; nombre: string; simbolo: string; rangoEnMes: string },
    { slug: string; nombre: string; simbolo: string; rangoEnMes: string }
  ];
}

export interface EstadisticasCumpleanos {
  fechaNacimientoIso: string;
  anios: number;
  meses: number;
  dias: number;
  totalDiasVividos: number;
  totalHorasVividas: number;
  diaSemanaNacimiento: string;
  diasParaProximoCumple: number;
  proximoCumpleIso: string;
  edadProximoCumple: number;
  hito10MilDiasIso: string;
  hito10MilDiasPasado: boolean;
  proximoHitoMiles: number;
  proximoHitoMilesIso: string;
  signo: SignoZodiaco;
  mesSlug: string;
  mesNombre: string;
}

export interface LineaAcrostico {
  letra: string;
  verso: string;
}

export type TonoAcrostico = 'emotivo' | 'humor' | 'fe';
export type VinculoArmador = 'familia' | 'pareja' | 'amistad' | 'trabajo';
export type TonoArmador = 'emotivo' | 'breve' | 'humor' | 'fe';

export const NOMBRES_MESES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre'
] as const;

export const DIAS_SEMANA = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado'
] as const;

export const ZODIACOS: SignoZodiaco[] = [
  {
    slug: 'aries',
    nombre: 'Aries',
    simbolo: '♈',
    elemento: 'Fuego',
    planeta: 'Marte',
    rangoTexto: '21 de marzo al 19 de abril',
    inicioMes: 3,
    inicioDia: 21,
    finMes: 4,
    finDia: 19,
    mesesSlugs: ['cumpleanos-en-marzo', 'cumpleanos-en-abril'],
    mesesNombres: ['Marzo', 'Abril'],
    rasgos: ['Iniciativa directa', 'Energía honesta', 'Valentía para empezar'],
    tonoIdeal: 'Directo, entusiasta y sin rodeos',
    estiloCelebracion: 'Planes espontáneos, asado o salida con ritmo activo y cero solemnidad acartonada.',
    comoSaludar: 'Arrancá felicitando su empuje real y nombrando el próximo desafío que ya sabés que va a encarar.',
    ideasRegalo: [
      'Experiencia de aventura o escapada corta de fin de semana',
      'Accesorio deportivo o práctico de uso diario',
      'Botella para brindar con una tarjeta breve y franca'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Fuerza y rumbo nuevo para tu cumpleaños de Aries',
        texto: 'Admiro esa chispa tuya para encender proyectos cuando todos todavía lo están pensando. Que este año nuevo te traiga desafíos a tu medida, gente leal alrededor de la mesa y la energía intacta para disfrutar cada paso.'
      },
      {
        titulo: 'Brindis directo por tu impulso incansable',
        texto: 'No hace falta discurso largo para celebrar a alguien tan frontal y generoso como vos. ¡Muy feliz vuelta al sol! Ojalá sigas abriendo caminos nuevos sin perder nunca tu humor directo.'
      },
      {
        titulo: 'Desafíos lindos y calma para celebrar hoy',
        texto: 'Que este nuevo ciclo premie tu coraje de siempre con victorias claras, tardes de descanso merecido y motivos grandes para festejar con quienes elegís tener cerca.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué fechas abarca exactamente el signo Aries?',
        respuesta: 'Aries comprende a quienes nacieron entre el 21 de marzo y el 19 de abril, cubriendo la transición entre cumpleaños de marzo y cumpleaños de abril.'
      },
      {
        pregunta: '¿Qué tipo de saludo prefiere una persona de Aries?',
        respuesta: 'Agradece mensajes sinceros, enérgicos y al grano que reconozcan su iniciativa sin caer en párrafos melosos ni frases pasivas.'
      },
      {
        pregunta: '¿Qué meses se vinculan con los cumpleaños de Aries?',
        respuesta: 'Los festejos de Aries se reparten entre las colecciones de cumpleaños en marzo y cumpleaños en abril.'
      }
    ],
    compatibilidadBrindis: ['Leo', 'Sagitario']
  },
  {
    slug: 'tauro',
    nombre: 'Tauro',
    simbolo: '♉',
    elemento: 'Tierra',
    planeta: 'Venus',
    rangoTexto: '20 de abril al 20 de mayo',
    inicioMes: 4,
    inicioDia: 20,
    finMes: 5,
    finDia: 20,
    mesesSlugs: ['cumpleanos-en-abril', 'cumpleanos-en-mayo'],
    mesesNombres: ['Abril', 'Mayo'],
    rasgos: ['Lealtad constante', 'Disfrute de lo bueno', 'Calma protectora'],
    tonoIdeal: 'Cálido, pausado y con aprecio por los sentidos',
    estiloCelebracion: 'Mesa larga con comida casera rica, buen vino o café tranquilo y gente de absoluta confianza.',
    comoSaludar: 'Agradecé su presencia firme en tus días difíciles y deseale disfrute sin apuros.',
    ideasRegalo: [
      'Caja gourmet, chocolates artesanales o cena en su lugar preferido',
      'Manta suave, perfume clásico o detalle de calidad duradera',
      'Libro editado con cuidado o planta resistente para su casa'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Sobremesas largas y calma fiel para tu Tauro',
        texto: 'Qué suerte contar con alguien que sabe cuidar los vínculos con hechos y paciencia. Que tu nuevo año llegue lleno de buena mesa, hogar tranquilo, salud firme y abrazos sin reloj.'
      },
      {
        titulo: 'Gratitud honda por tu lealtad de siempre',
        texto: 'Sos de esas personas que dan paz apenas entran en la habitación. Feliz cumpleaños: hoy te toca sentarte tranquilo y dejarte agasajar como correspondía desde hace rato.'
      },
      {
        titulo: 'Disfrute verdadero en esta nueva vuelta al sol',
        texto: 'Deseo que los próximos meses te encuentren cosechando frutos de tu constancia, rodeado de aromas ricos, descanso real y afectos estables.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Entre qué fechas nacen los de Tauro?',
        respuesta: 'Tauro va del 20 de abril al 20 de mayo, abarcando el último tramo de abril y gran parte de mayo.'
      },
      {
        pregunta: '¿Cómo acertar con un regalo o dedicatoria para Tauro?',
        respuesta: 'Elegí calidad antes que cantidad: una buena comida, un objeto noble para el día a día y una tarjeta escrita con calma que agradezca su lealtad.'
      },
      {
        pregunta: '¿Qué categorías de mes corresponden a Tauro?',
        respuesta: 'Podés combinar sus frases con cumpleaños en abril y cumpleaños en mayo.'
      }
    ],
    compatibilidadBrindis: ['Virgo', 'Capricornio']
  },
  {
    slug: 'geminis',
    nombre: 'Géminis',
    simbolo: '♊',
    elemento: 'Aire',
    planeta: 'Mercurio',
    rangoTexto: '21 de mayo al 20 de junio',
    inicioMes: 5,
    inicioDia: 21,
    finMes: 6,
    finDia: 20,
    mesesSlugs: ['cumpleanos-en-mayo', 'cumpleanos-en-junio'],
    mesesNombres: ['Mayo', 'Junio'],
    rasgos: ['Curiosidad viva', 'Humor inteligente', 'Charla inagotable'],
    tonoIdeal: 'Ingenio fresco, complicidad y ritmo ágil',
    estiloCelebracion: 'Juntada animada, juegos de mesa o charla cruzada hasta tarde con amigos de distintos grupos.',
    comoSaludar: 'Meté un guiño divertido sobre alguna charla interminable o idea nueva suya y cerrá con cariño real.',
    ideasRegalo: [
      'Libro atrapante, juego de mesa social o entrada a espectáculo',
      'Auriculares o cuaderno de notas para sus mil proyectos',
      'Dos planes pequeños distintos en vez de un solo regalo rígido'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Ideas frescas y risas largas en tu Géminis',
        texto: 'Con vos nunca falta tema de conversación ni planes inesperados que salvan cualquier semana aburrida. ¡Muy feliz cumpleaños! Que nunca te falten preguntas lindas, viajes cortos y gente que siga tu ritmo.'
      },
      {
        titulo: 'Tu chispa despierta ilumina cada mesa',
        texto: 'Celebramos tu curiosidad, tu humor rápido y esa capacidad única de unir personas distintas en una misma risa. ¡Feliz nueva vuelta al sol llena de novedades buenas!'
      },
      {
        titulo: 'Un año curioso y libre para disfrutar',
        texto: 'Que estos doce meses te regalen libros buenos, charlas hasta la madrugada, proyectos versátiles y tiempo para disfrutar cada ocurrencia.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Cuándo empieza y cuándo termina Géminis?',
        respuesta: 'Géminis comienza el 21 de mayo y termina el 20 de junio, uniendo los cumpleaños de finales de mayo con la mayoría de los cumpleaños de junio.'
      },
      {
        pregunta: '¿Qué tono funciona mejor al felicitar a alguien de Géminis?',
        respuesta: 'Evitá textos pesados y repetitivos; funciona muchísimo mejor un mensaje ágil con humor inteligente, complicidad y una referencia a sus mil intereses.'
      },
      {
        pregunta: '¿Con qué meses del año se vincula Géminis?',
        respuesta: 'Sus cumpleaños caen dentro de cumpleaños en mayo y cumpleaños en junio.'
      }
    ],
    compatibilidadBrindis: ['Libra', 'Acuario']
  },
  {
    slug: 'cancer',
    nombre: 'Cáncer',
    simbolo: '♋',
    elemento: 'Agua',
    planeta: 'Luna',
    rangoTexto: '21 de junio al 22 de julio',
    inicioMes: 6,
    inicioDia: 21,
    finMes: 7,
    finDia: 22,
    mesesSlugs: ['cumpleanos-en-junio', 'cumpleanos-en-julio'],
    mesesNombres: ['Junio', 'Julio'],
    rasgos: ['Memoria afectiva', 'Cuidado genuino', 'Intuición cálida'],
    tonoIdeal: 'Tierno, cercano y con recuerdos compartidos',
    estiloCelebracion: 'Reunión íntima en casa, álbum o fotos de familia y una mesa donde todos se sientan cuidados.',
    comoSaludar: 'Recordá un gesto suyo que te hizo sentir en casa; Cáncer guarda las tarjetas escritas durante años.',
    ideasRegalo: [
      'Foto impresa enmarcada o álbum con dedicatorias de familia',
      'Taza artesanal, té especial o detalle acogedor para el hogar',
      'Carta escrita a mano recordando una escena real juntos'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Refugio y ternura para tu cumpleaños de Cáncer',
        texto: 'Tenés el don raro de convertir cualquier lugar en hogar apenas ponés la pava y preguntás cómo estuvo el día. Que hoy todo ese cuidado vuelva multiplicado hacia vos en forma de abrazos largos.'
      },
      {
        titulo: 'Memoria viva del cariño que sembrás',
        texto: 'Para alguien que recuerda cada fecha importante de los demás, hoy nos toca agasajarte fuerte. ¡Feliz cumpleaños, lleno de familia, paz y anécdotas lindas!'
      },
      {
        titulo: 'Abrazos tibios para esta nueva etapa',
        texto: 'Ojalá este nuevo año cuide tu corazón sensible con gente leal, noches serenas en casa y mucha alegría compartida.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué fechas corresponden al signo Cáncer?',
        respuesta: 'Cáncer abarca desde el 21 de junio hasta el 22 de julio, conectando el cierre de junio con gran parte de julio.'
      },
      {
        pregunta: '¿Por qué emociona tanto una carta impresa a alguien de Cáncer?',
        respuesta: 'Porque valora muchísimo la memoria afectiva y los detalles personales guardados en el tiempo mucho más que un saludo apurado en redes.'
      },
      {
        pregunta: '¿Qué categorías de meses corresponden a Cáncer?',
        respuesta: 'Quienes nacen bajo Cáncer celebran dentro de cumpleaños en junio y cumpleaños en julio.'
      }
    ],
    compatibilidadBrindis: ['Escorpio', 'Piscis']
  },
  {
    slug: 'leo',
    nombre: 'Leo',
    simbolo: '♌',
    elemento: 'Fuego',
    planeta: 'Sol',
    rangoTexto: '23 de julio al 22 de agosto',
    inicioMes: 7,
    inicioDia: 23,
    finMes: 8,
    finDia: 22,
    mesesSlugs: ['cumpleanos-en-julio', 'cumpleanos-en-agosto'],
    mesesNombres: ['Julio', 'Agosto'],
    rasgos: ['Generosidad abierta', 'Presencia solar', 'Corazón leal'],
    tonoIdeal: 'Luminoso, admirativo y celebratorio',
    estiloCelebracion: 'Brindis en grande, buena música, mesa llena y aplauso sincero al soplar las velas.',
    comoSaludar: 'Reconocé explícitamente su generosidad y su brillo propio: a Leo le encanta sentirse valorado con sinceridad.',
    ideasRegalo: [
      'Prenda protagonista, perfume distintivo o accesorio dorado',
      'Invitación a espectáculo, cena especial o experiencia memorable',
      'Tarjeta personalizada en tono Dorado Festivo con dedicatoria franca'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Brillo merecido para celebrar tu Leo',
        texto: 'Cuando llegás vos se nota enseguida: por tu risa franca, tu generosidad enorme y esa fuerza con la que defendés a los tuyos. ¡Feliz cumpleaños! Hoy el centro de la mesa es todo tuyo.'
      },
      {
        titulo: 'Un aplauso fuerte por tu corazón generoso',
        texto: 'Gracias por contagiar entusiasmo cuando el resto se achica y por celebrar siempre los triunfos ajenos como propios. Que tengas un año brillante y muy feliz.'
      },
      {
        titulo: 'Sol y alegrías grandes en tu nuevo ciclo',
        texto: 'Deseo que estos doce meses te devuelvan a lo grande tanta lealtad y calidez como repartís en cada encuentro.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Cuáles son las fechas del signo Leo?',
        respuesta: 'Leo rige del 23 de julio al 22 de agosto, entre los cumpleaños de julio y los cumpleaños de agosto.'
      },
      {
        pregunta: '¿Qué detalle hace brillar el cumpleaños de Leo?',
        respuesta: 'Un brindis sincero delante de su gente, una tarjeta cuidada en diseño dorado y palabras claras reconociendo su generosidad.'
      },
      {
        pregunta: '¿Con qué meses se relaciona el signo Leo?',
        respuesta: 'Sus cumpleaños caen dentro de cumpleaños en julio y cumpleaños en agosto.'
      }
    ],
    compatibilidadBrindis: ['Aries', 'Sagitario']
  },
  {
    slug: 'virgo',
    nombre: 'Virgo',
    simbolo: '♍',
    elemento: 'Tierra',
    planeta: 'Mercurio',
    rangoTexto: '23 de agosto al 22 de septiembre',
    inicioMes: 8,
    inicioDia: 23,
    finMes: 9,
    finDia: 22,
    mesesSlugs: ['cumpleanos-en-agosto', 'cumpleanos-en-septiembre'],
    mesesNombres: ['Agosto', 'Septiembre'],
    rasgos: ['Ojo al detalle', 'Ayuda práctica', 'Mente lúcida'],
    tonoIdeal: 'Cuidado, honesto, sin exageraciones artificiales',
    estiloCelebracion: 'Plan bien pensado, sin caos ni sorpresas incómodas, en un lugar prolijo y agradable.',
    comoSaludar: 'Agradecé un detalle concreto que resolvió por vos: Virgo nota al instante cuando un saludo es auténtico.',
    ideasRegalo: [
      'Agenda bien diseñada, bolígrafo fino o herramienta útil',
      'Organizador artesanal, libro técnico o set de café de especialidad',
      'Tarjeta prolija en tono Marfil u Oliva con mensaje claro'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Cuidado discreto y lucidez en tu Virgo',
        texto: 'Pocos notan cuántos líos acomodás en silencio para que todo salga bien alrededor nuestro. Hoy celebramos tu claridad, tu mano generosa y tu humor fino. ¡Muy feliz cumpleaños!'
      },
      {
        titulo: 'Hoy soltá la lista y dejate agasajar',
        texto: 'Te merecés un cumpleaños donde no tengas que organizar nada ni estar en todos los detalles. ¡Que disfrutes muchísimo tu día con calma y buena compañía!'
      },
      {
        titulo: 'Orden sereno y proyectos lindos este año',
        texto: 'Ojalá esta nueva vuelta al sol te regale equilibrio, salud firme y satisfacciones reales en todo eso que cuidás con tanta dedicación.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Cuándo cumple años una persona de Virgo?',
        respuesta: 'Virgo abarca del 23 de agosto al 22 de septiembre, repartido entre agosto y septiembre.'
      },
      {
        pregunta: '¿Qué evitar al escribirle a alguien de Virgo?',
        respuesta: 'Evitá frases hiperbólicas vacías o tarjetas descuidadas: valora mucho la precisión afectiva y la buena redacción.'
      },
      {
        pregunta: '¿Qué meses enlazan con los cumpleaños de Virgo?',
        respuesta: 'Se vincula directamente con cumpleaños en agosto y cumpleaños en septiembre.'
      }
    ],
    compatibilidadBrindis: ['Tauro', 'Capricornio']
  },
  {
    slug: 'libra',
    nombre: 'Libra',
    simbolo: '♎',
    elemento: 'Aire',
    planeta: 'Venus',
    rangoTexto: '23 de septiembre al 22 de octubre',
    inicioMes: 9,
    inicioDia: 23,
    finMes: 10,
    finDia: 22,
    mesesSlugs: ['cumpleanos-en-septiembre', 'cumpleanos-en-octubre'],
    mesesNombres: ['Septiembre', 'Octubre'],
    rasgos: ['Elegancia amable', 'Sentido de armonía', 'Diálogo justo'],
    tonoIdeal: 'Armónico, estético y afectuoso',
    estiloCelebracion: 'Merienda cuidada, brindis al aire libre o cena linda con música suave y buena compañía.',
    comoSaludar: 'Cuidá la estética de la tarjeta (paletas Lavanda o Rosa) y valorá cómo suaviza tensiones en el grupo.',
    ideasRegalo: [
      'Flores frescas, lámina decorativa o vela aromática fina',
      'Merienda en un café bonito o libro de arte/diseño',
      'Accesorio delicado envuelto con dedicación'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Armonía y belleza cotidiana para tu Libra',
        texto: 'Tenés la virtud de buscar siempre lo justo y hacer más amable cada encuentro. ¡Feliz cumpleaños! Que este año te rodee de música buena, calma y gente que cuide tu paz.'
      },
      {
        titulo: 'Gracias por traer equilibrio a nuestras charlas',
        texto: 'Celebramos tu sonrisa diplomática, tu buen gusto y esa calidez con la que escuchás todas las campanas. ¡Brindemos por una vuelta al sol luminosa!'
      },
      {
        titulo: 'Un ciclo liviano y rodeado de afectos lindos',
        texto: 'Que estos doce meses te regalen encuentros serenos, decisiones claras y muchísimos pequeños momentos hermosos.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Entre qué fechas rige el signo Libra?',
        respuesta: 'Libra comprende del 23 de septiembre al 22 de octubre, cruzando cumpleaños de septiembre y octubre.'
      },
      {
        pregunta: '¿Cómo personalizar una tarjeta ideal para Libra?',
        respuesta: 'Elegí tipografía Editorial clásica, tonos Lavanda o Rosa y una dedicatoria equilibrada que destaque su calidez.'
      },
      {
        pregunta: '¿Qué meses corresponden al signo Libra?',
        respuesta: 'Los nacidos en Libra festejan entre cumpleaños en septiembre y cumpleaños en octubre.'
      }
    ],
    compatibilidadBrindis: ['Géminis', 'Acuario']
  },
  {
    slug: 'escorpio',
    nombre: 'Escorpio',
    simbolo: '♏',
    elemento: 'Agua',
    planeta: 'Plutón',
    rangoTexto: '23 de octubre al 21 de noviembre',
    inicioMes: 10,
    inicioDia: 23,
    finMes: 11,
    finDia: 21,
    mesesSlugs: ['cumpleanos-en-octubre', 'cumpleanos-en-noviembre'],
    mesesNombres: ['Octubre', 'Noviembre'],
    rasgos: ['Intensidad honesta', 'Lealtad inquebrantable', 'Mirada profunda'],
    tonoIdeal: 'Profundo, genuino y sin superficialidades',
    estiloCelebracion: 'Charla profunda de noche, pocos invitados verdaderos y brindis sin protocolo forzado.',
    comoSaludar: 'No mandes obviedades: decí una verdad emocional honesta que muestre que conocés su fortaleza.',
    ideasRegalo: [
      'Novela de suspenso, vinilo favorito o perfume intenso',
      'Cena nocturna íntima o escapada tranquila en pareja',
      'Carta honesta de corazón sin frases de molde'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Fuerza y lealtad verdadera en tu Escorpio',
        texto: 'Cuando vos querés a alguien, lo defendés a muerte y sin caretas. Hoy celebramos tu intensidad honesta y esa capacidad admirable de renacer más fuerte de cada etapa. ¡Feliz cumpleaños!'
      },
      {
        titulo: 'Para quien nunca se queda en lo superficial',
        texto: 'Ojalá este nuevo año te encuentre rodeado únicamente de vínculos reales que estén a la altura de tu lealtad. ¡Feliz vuelta al sol, con paz y pasión intactas!'
      },
      {
        titulo: 'Transformación y calma en tu nuevo ciclo',
        texto: 'Que estos meses traigan verdades lindas, descanso para la mente inquieta y alegrías profundas junto a tus elegidos.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Cuándo nacen las personas de Escorpio?',
        respuesta: 'Escorpio abarca del 23 de octubre al 21 de noviembre, uniendo finales de octubre con noviembre.'
      },
      {
        pregunta: '¿Qué clase de dedicatoria conecta mejor con Escorpio?',
        respuesta: 'Textos profundos, directos y auténticos; detectan enseguida cuando un mensaje está copiado sin emoción real.'
      },
      {
        pregunta: '¿Con qué meses del calendario coincide Escorpio?',
        respuesta: 'Sus cumpleaños caen en cumpleaños en octubre y cumpleaños en noviembre.'
      }
    ],
    compatibilidadBrindis: ['Cáncer', 'Piscis']
  },
  {
    slug: 'sagitario',
    nombre: 'Sagitario',
    simbolo: '♐',
    elemento: 'Fuego',
    planeta: 'Júpiter',
    rangoTexto: '22 de noviembre al 21 de diciembre',
    inicioMes: 11,
    inicioDia: 22,
    finMes: 12,
    finDia: 21,
    mesesSlugs: ['cumpleanos-en-noviembre', 'cumpleanos-en-diciembre'],
    mesesNombres: ['Noviembre', 'Diciembre'],
    rasgos: ['Espíritu viajero', 'Optimismo contagioso', 'Amor por la libertad'],
    tonoIdeal: 'Alegre, expansivo y aventurero',
    estiloCelebracion: 'Juntada al aire libre, música alegre, anécdotas de ruta y planes de próximo viaje.',
    comoSaludar: 'Deseale rutas nuevas, aprendizajes apasionantes y risas hasta quedar sin voz.',
    ideasRegalo: [
      'Mochila de viaje, guía de destino o cámara instantánea',
      'Experiencia al aire libre, taller creativo o entradas de concierto',
      'Libro de crónicas de viaje con dedicatoria optimista'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Horizontes amplios y alegría para tu Sagitario',
        texto: 'Donde haya risa fuerte, valijas listas o ganas de probar algo distinto, seguro estás vos. ¡Feliz cumpleaños! Que este año sume millas lindas, libertad y grandes anécdotas.'
      },
      {
        titulo: 'Gracias por tu optimismo que levanta semanas',
        texto: 'Celebramos tu espíritu libre, tu humor honesto y esa mirada amplia con la que siempre ves salida. ¡Muy feliz vuelta al sol llena de aventuras!'
      },
      {
        titulo: 'Rutas nuevas y brindis largos este año',
        texto: 'Que los próximos doce meses te sorprendan con paisajes nuevos, proyectos que entusiasmen y amigos en cada esquina.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué fechas cubre el signo Sagitario?',
        respuesta: 'Sagitario va del 22 de noviembre al 21 de diciembre, cerrando noviembre y abriendo diciembre.'
      },
      {
        pregunta: '¿Cómo evitar que un cumpleaños de diciembre se mezcle con las fiestas?',
        respuesta: 'Dedicate a celebrar su fecha propia aparte, sin envolver el regalo con motivos navideños ni postergar su brindis.'
      },
      {
        pregunta: '¿Qué meses del año integran Sagitario?',
        respuesta: 'Los cumpleaños de Sagitario corresponden a cumpleaños en noviembre y cumpleaños en diciembre.'
      }
    ],
    compatibilidadBrindis: ['Aries', 'Leo']
  },
  {
    slug: 'capricornio',
    nombre: 'Capricornio',
    simbolo: '♑',
    elemento: 'Tierra',
    planeta: 'Saturno',
    rangoTexto: '22 de diciembre al 19 de enero',
    inicioMes: 12,
    inicioDia: 22,
    finMes: 1,
    finDia: 19,
    mesesSlugs: ['cumpleanos-en-diciembre', 'cumpleanos-en-enero'],
    mesesNombres: ['Diciembre', 'Enero'],
    rasgos: ['Constancia admirable', 'Humor seco', 'Responsabilidad leal'],
    tonoIdeal: 'Respetuoso, cálido y reconociendo logros reales',
    estiloCelebracion: 'Comida excelente con círculo muy cercano, lejos del ruido vacío de compromisos.',
    comoSaludar: 'Recordale descansar y festejar lo que ya construyó: Capricornio suele exigirse mucho y rara vez para a mirar su cima.',
    ideasRegalo: [
      'Reloj sobrio, billetera de cuero o termo de alta gama',
      'Cena tranquila de nivel o café de grano seleccionado',
      'Tarjeta sobria reconociendo su esfuerzo silencioso'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Cimas alcanzadas y descanso para tu Capricornio',
        texto: 'Todo lo que hoy disfrutás te lo ganaste paso a paso y sin atajos. Hoy bajá el ritmo un rato y celebrá lo lejos que llegaste con tu gente. ¡Muy feliz cumpleaños!'
      },
      {
        titulo: 'Admiración genuina por tu firmeza serena',
        texto: 'Detrás de esa calma tuya que resuelve tormentas hay un corazón enorme y leal. Que este nuevo año premie tu constancia con salud, disfrute y tiempo libre real.'
      },
      {
        titulo: 'Año firme para seguir construyendo con alegría',
        texto: 'Ojalá los próximos doce meses traigan metas cumplidas, humor tranquilo y muchas sobremesas sin mirar el reloj.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué días cubre Capricornio entre dos años?',
        respuesta: 'Capricornio inicia el 22 de diciembre y finaliza el 19 de enero, atravesando el cambio de año entre diciembre y enero.'
      },
      {
        pregunta: '¿Qué detalle emociona más a Capricornio en su cumpleaños?',
        respuesta: 'Que reconozcas su esfuerzo concreto del año sin olvidar separarle su propio festejo de Navidad, Año Nuevo o vacaciones de enero.'
      },
      {
        pregunta: '¿Qué meses se asocian con Capricornio?',
        respuesta: 'Combina cumpleaños en diciembre con cumpleaños en enero.'
      }
    ],
    compatibilidadBrindis: ['Tauro', 'Virgo']
  },
  {
    slug: 'acuario',
    nombre: 'Acuario',
    simbolo: '♒',
    elemento: 'Aire',
    planeta: 'Urano',
    rangoTexto: '20 de enero al 18 de febrero',
    inicioMes: 1,
    inicioDia: 20,
    finMes: 2,
    finDia: 18,
    mesesSlugs: ['cumpleanos-en-enero', 'cumpleanos-en-febrero'],
    mesesNombres: ['Enero', 'Febrero'],
    rasgos: ['Mente original', 'Amistad sin prejuicios', 'Mirada al futuro'],
    tonoIdeal: 'Creativo, libre y fuera de clichés',
    estiloCelebracion: 'Plan distinto sin reglas rígidas, con grupo amplio de amigos e ideas originales.',
    comoSaludar: 'Escribí algo fresco o armale un acróstico con su nombre; Acuario ama lo que sale del libreto común.',
    ideasRegalo: [
      'Gadget curioso, libro visionario o pieza de diseño independiente',
      'Taller experimental (cerámica, cocina del mundo o fotografía)',
      'Acróstico personalizado o tarjeta Story fuera de lo estándar'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Originalidad libre para tu cumpleaños de Acuario',
        texto: 'Con vos el mundo siempre tiene una vuelta distinta y mucho más interesante. ¡Feliz cumpleaños! Seguí animándote a pensar afuera de la caja rodeado de amigos que celebren tu autenticidad.'
      },
      {
        titulo: 'Tu amistad sin etiquetas es un regalo enorme',
        texto: 'Gracias por escuchar sin juzgar y por traer siempre aire fresco a nuestras charlas. ¡Muy feliz vuelta al sol llena de proyectos originales!'
      },
      {
        titulo: 'Libertad creativa en este nuevo año',
        texto: 'Que estos doce meses te regalen inventos propios, viajes imprevistos y la alegría de seguir siendo fiel a tu estilo único.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Cuáles son las fechas de Acuario?',
        respuesta: 'Acuario rige del 20 de enero al 18 de febrero, entre la segunda mitad de enero y la primera de febrero.'
      },
      {
        pregunta: '¿Por qué conviene evitar frases demasiado tradicionales con Acuario?',
        respuesta: 'Porque disfrutan lo original y cercano; un texto ingenioso o un acróstico con su nombre les llama muchísimo más la atención.'
      },
      {
        pregunta: '¿Qué meses corresponden al signo Acuario?',
        respuesta: 'Sus cumpleaños caen dentro de cumpleaños en enero y cumpleaños en febrero.'
      }
    ],
    compatibilidadBrindis: ['Géminis', 'Libra']
  },
  {
    slug: 'piscis',
    nombre: 'Piscis',
    simbolo: '♓',
    elemento: 'Agua',
    planeta: 'Neptuno',
    rangoTexto: '19 de febrero al 20 de marzo',
    inicioMes: 2,
    inicioDia: 19,
    finMes: 3,
    finDia: 20,
    mesesSlugs: ['cumpleanos-en-febrero', 'cumpleanos-en-marzo'],
    mesesNombres: ['Febrero', 'Marzo'],
    rasgos: ['Empatía poética', 'Sensibilidad creativa', 'Ternura sin filtro'],
    tonoIdeal: 'Poético, dulce y muy humano',
    estiloCelebracion: 'Atardecer tranquilo, buena música, clima soñador y mensajes sentidos que toquen el corazón.',
    comoSaludar: 'Regalale un poema corto o una dedicatoria sensible que valore su empatía con todos.',
    ideasRegalo: [
      'Playlist curada, libro de poesía o acuarelas / diario lindo',
      'Escapada cerca del agua o tarde de cine y merienda',
      'Poema impreso en postal con foto compartida'
    ],
    frasesCumpleanos: [
      {
        titulo: 'Sensibilidad luminosa para tu cumpleaños de Piscis',
        texto: 'Sentís el mundo con una profundidad hermosa y siempre tenés una palabra compasiva a mano. ¡Feliz cumpleaños! Que hoy la vida te abrace suave y cuide todos tus sueños.'
      },
      {
        titulo: 'Arte, música y paz para tu corazón noble',
        texto: 'Gracias por enseñarnos a mirar con empatía lo que otros pasan de largo. Que esta nueva vuelta al sol esté llena de inspiración, abrazos sinceros y calma bonita.'
      },
      {
        titulo: 'Un ciclo poético y sereno junto a los tuyos',
        texto: 'Ojalá cada mes nuevo te acerque exactamente aquello que anhelás en silencio, con salud y compañía verdadera.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué días abarca exactamente Piscis?',
        respuesta: 'Piscis va del 19 de febrero al 20 de marzo, abarcando el último tramo de febrero (incluido el 29 en años bisiestos) y gran parte de marzo.'
      },
      {
        pregunta: '¿Qué formato de tarjeta prefiere una persona de Piscis?',
        respuesta: 'Un poema breve, tonos Lavanda o Celeste y una dedicatoria sensible escrita desde la empatía real.'
      },
      {
        pregunta: '¿Qué meses se vinculan con los cumpleaños de Piscis?',
        respuesta: 'Quienes nacen en Piscis celebran dentro de cumpleaños en febrero y cumpleaños en marzo.'
      }
    ],
    compatibilidadBrindis: ['Cáncer', 'Escorpio']
  }
];

export const MESES_CON_SIGNOS: MesInfoZodiaco[] = [
  {
    mesNum: 1,
    slug: 'cumpleanos-en-enero',
    nombre: 'enero',
    nombreCap: 'Enero',
    estacionSurNorte: 'pleno verano en el sur / invierno en el norte',
    signos: [
      { slug: 'capricornio', nombre: 'Capricornio', simbolo: '♑', rangoEnMes: '1 al 19 de enero' },
      { slug: 'acuario', nombre: 'Acuario', simbolo: '♒', rangoEnMes: '20 al 31 de enero' }
    ]
  },
  {
    mesNum: 2,
    slug: 'cumpleanos-en-febrero',
    nombre: 'febrero',
    nombreCap: 'Febrero',
    estacionSurNorte: 'verano tardío y carnaval en el sur / invierno en el norte',
    signos: [
      { slug: 'acuario', nombre: 'Acuario', simbolo: '♒', rangoEnMes: '1 al 18 de febrero' },
      { slug: 'piscis', nombre: 'Piscis', simbolo: '♓', rangoEnMes: '19 al 29 de febrero' }
    ]
  },
  {
    mesNum: 3,
    slug: 'cumpleanos-en-marzo',
    nombre: 'marzo',
    nombreCap: 'Marzo',
    estacionSurNorte: 'comienzo de otoño en el sur / primavera en el norte',
    signos: [
      { slug: 'piscis', nombre: 'Piscis', simbolo: '♓', rangoEnMes: '1 al 20 de marzo' },
      { slug: 'aries', nombre: 'Aries', simbolo: '♈', rangoEnMes: '21 al 31 de marzo' }
    ]
  },
  {
    mesNum: 4,
    slug: 'cumpleanos-en-abril',
    nombre: 'abril',
    nombreCap: 'Abril',
    estacionSurNorte: 'otoño dorado en el sur / primavera fresca en el norte',
    signos: [
      { slug: 'aries', nombre: 'Aries', simbolo: '♈', rangoEnMes: '1 al 19 de abril' },
      { slug: 'tauro', nombre: 'Tauro', simbolo: '♉', rangoEnMes: '20 al 30 de abril' }
    ]
  },
  {
    mesNum: 5,
    slug: 'cumpleanos-en-mayo',
    nombre: 'mayo',
    nombreCap: 'Mayo',
    estacionSurNorte: 'otoño sereno en el sur / primavera plena en el norte',
    signos: [
      { slug: 'tauro', nombre: 'Tauro', simbolo: '♉', rangoEnMes: '1 al 20 de mayo' },
      { slug: 'geminis', nombre: 'Géminis', simbolo: '♊', rangoEnMes: '21 al 31 de mayo' }
    ]
  },
  {
    mesNum: 6,
    slug: 'cumpleanos-en-junio',
    nombre: 'junio',
    nombreCap: 'Junio',
    estacionSurNorte: 'inicio de invierno en el sur / inicio de verano en el norte',
    signos: [
      { slug: 'geminis', nombre: 'Géminis', simbolo: '♊', rangoEnMes: '1 al 20 de junio' },
      { slug: 'cancer', nombre: 'Cáncer', simbolo: '♋', rangoEnMes: '21 al 30 de junio' }
    ]
  },
  {
    mesNum: 7,
    slug: 'cumpleanos-en-julio',
    nombre: 'julio',
    nombreCap: 'Julio',
    estacionSurNorte: 'pleno invierno y receso en el sur / pleno verano en el norte',
    signos: [
      { slug: 'cancer', nombre: 'Cáncer', simbolo: '♋', rangoEnMes: '1 al 22 de julio' },
      { slug: 'leo', nombre: 'Leo', simbolo: '♌', rangoEnMes: '23 al 31 de julio' }
    ]
  },
  {
    mesNum: 8,
    slug: 'cumpleanos-en-agosto',
    nombre: 'agosto',
    nombreCap: 'Agosto',
    estacionSurNorte: 'invierno tardío en el sur / verano cálido en el norte',
    signos: [
      { slug: 'leo', nombre: 'Leo', simbolo: '♌', rangoEnMes: '1 al 22 de agosto' },
      { slug: 'virgo', nombre: 'Virgo', simbolo: '♍', rangoEnMes: '23 al 31 de agosto' }
    ]
  },
  {
    mesNum: 9,
    slug: 'cumpleanos-en-septiembre',
    nombre: 'septiembre',
    nombreCap: 'Septiembre',
    estacionSurNorte: 'llegada de la primavera en el sur / inicio de otoño en el norte',
    signos: [
      { slug: 'virgo', nombre: 'Virgo', simbolo: '♍', rangoEnMes: '1 al 22 de septiembre' },
      { slug: 'libra', nombre: 'Libra', simbolo: '♎', rangoEnMes: '23 al 30 de septiembre' }
    ]
  },
  {
    mesNum: 10,
    slug: 'cumpleanos-en-octubre',
    nombre: 'octubre',
    nombreCap: 'Octubre',
    estacionSurNorte: 'primavera luminosa en el sur / otoño en el norte',
    signos: [
      { slug: 'libra', nombre: 'Libra', simbolo: '♎', rangoEnMes: '1 al 22 de octubre' },
      { slug: 'escorpio', nombre: 'Escorpio', simbolo: '♏', rangoEnMes: '23 al 31 de octubre' }
    ]
  },
  {
    mesNum: 11,
    slug: 'cumpleanos-en-noviembre',
    nombre: 'noviembre',
    nombreCap: 'Noviembre',
    estacionSurNorte: 'primavera cálida en el sur / otoño tardío en el norte',
    signos: [
      { slug: 'escorpio', nombre: 'Escorpio', simbolo: '♏', rangoEnMes: '1 al 21 de noviembre' },
      { slug: 'sagitario', nombre: 'Sagitario', simbolo: '♐', rangoEnMes: '22 al 30 de noviembre' }
    ]
  },
  {
    mesNum: 12,
    slug: 'cumpleanos-en-diciembre',
    nombre: 'diciembre',
    nombreCap: 'Diciembre',
    estacionSurNorte: 'cierre de año y fiestas de verano en el sur / invierno en el norte',
    signos: [
      { slug: 'sagitario', nombre: 'Sagitario', simbolo: '♐', rangoEnMes: '1 al 21 de diciembre' },
      { slug: 'capricornio', nombre: 'Capricornio', simbolo: '♑', rangoEnMes: '22 al 31 de diciembre' }
    ]
  }
];

export function signoPorSlug(slug: string): SignoZodiaco | undefined {
  return ZODIACOS.find((s) => s.slug === slug);
}

export function mesInfoPorSlug(slug: string): MesInfoZodiaco | undefined {
  return MESES_CON_SIGNOS.find((m) => m.slug === slug);
}

export function resolverSignoPorDiaMes(mes: number, dia: number): SignoZodiaco {
  if (!Number.isInteger(mes) || mes < 1 || mes > 12) {
    throw new Error(`Mes inválido: ${mes}`);
  }
  if (!Number.isInteger(dia) || dia < 1 || dia > 31) {
    throw new Error(`Día inválido: ${dia}`);
  }

  for (const s of ZODIACOS) {
    if (s.inicioMes <= s.finMes) {
      if (
        (mes === s.inicioMes && dia >= s.inicioDia) ||
        (mes === s.finMes && dia <= s.finDia)
      ) {
        return s;
      }
    } else {
      // Signo que cruza cambio de año (Capricornio: dic 22 - ene 19)
      if (
        (mes === s.inicioMes && dia >= s.inicioDia) ||
        (mes === s.finMes && dia <= s.finDia)
      ) {
        return s;
      }
    }
  }
  return ZODIACOS[0];
}

function crearFechaUtc(anio: number, mes: number, dia: number): Date {
  return new Date(Date.UTC(anio, mes - 1, dia));
}

function fechaUtcAIso(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function esBisiesto(anio: number): boolean {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

function diasEnMesUtc(anio: number, mes1a12: number): number {
  return new Date(Date.UTC(anio, mes1a12, 0)).getUTCDate();
}

export function calcularEstadisticasCumpleanos(
  fechaNacimientoIso: string,
  referenciaIso?: string
): EstadisticasCumpleanos {
  const matchNac = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(fechaNacimientoIso || '').trim());
  if (!matchNac) {
    throw new Error('Ingresá una fecha de nacimiento válida con formato AAAA-MM-DD.');
  }
  const anioNac = Number(matchNac[1]);
  const mesNac = Number(matchNac[2]);
  const diaNac = Number(matchNac[3]);
  const dNac = crearFechaUtc(anioNac, mesNac, diaNac);

  if (
    dNac.getUTCFullYear() !== anioNac ||
    dNac.getUTCMonth() + 1 !== mesNac ||
    dNac.getUTCDate() !== diaNac
  ) {
    throw new Error('La fecha ingresada no existe en el calendario.');
  }

  let dRef: Date;
  if (referenciaIso) {
    const matchRef = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(referenciaIso).trim());
    if (!matchRef) throw new Error('Fecha de referencia inválida.');
    dRef = crearFechaUtc(Number(matchRef[1]), Number(matchRef[2]), Number(matchRef[3]));
  } else {
    const hoy = new Date();
    dRef = crearFechaUtc(hoy.getFullYear(), hoy.getMonth() + 1, hoy.getDate());
  }

  if (dNac.getTime() > dRef.getTime()) {
    throw new Error('La fecha de nacimiento no puede estar en el futuro.');
  }

  const anioRef = dRef.getUTCFullYear();
  const mesRef = dRef.getUTCMonth() + 1;
  const diaRef = dRef.getUTCDate();

  let anios = anioRef - anioNac;
  let meses = mesRef - mesNac;
  let dias = diaRef - diaNac;

  if (dias < 0) {
    meses -= 1;
    const mesPrev = mesRef === 1 ? 12 : mesRef - 1;
    const anioPrev = mesRef === 1 ? anioRef - 1 : anioRef;
    dias += diasEnMesUtc(anioPrev, mesPrev);
  }
  if (meses < 0) {
    anios -= 1;
    meses += 12;
  }

  const msPorDia = 86400000;
  const totalDiasVividos = Math.round((dRef.getTime() - dNac.getTime()) / msPorDia);
  const totalHorasVividas = totalDiasVividos * 24;
  const diaSemanaNacimiento = DIAS_SEMANA[dNac.getUTCDay()];

  // Próximo cumpleaños (ajustando 29 de febrero al 28 de febrero en años no bisiestos)
  function fechaCumpleEnAnio(anioTarget: number): Date {
    const diaAjustado = mesNac === 2 && diaNac === 29 && !esBisiesto(anioTarget) ? 28 : diaNac;
    return crearFechaUtc(anioTarget, mesNac, diaAjustado);
  }

  let proximoCumple = fechaCumpleEnAnio(anioRef);
  if (proximoCumple.getTime() < dRef.getTime()) {
    proximoCumple = fechaCumpleEnAnio(anioRef + 1);
  }
  const diasParaProximoCumple = Math.round((proximoCumple.getTime() - dRef.getTime()) / msPorDia);
  const edadProximoCumple = proximoCumple.getUTCFullYear() - anioNac;

  const d10Mil = new Date(dNac.getTime() + 10000 * msPorDia);
  const hito10MilDiasPasado = d10Mil.getTime() <= dRef.getTime();
  const proximoHitoMiles = Math.max(1000, (Math.floor(totalDiasVividos / 1000) + 1) * 1000);
  const dProxHito = new Date(dNac.getTime() + proximoHitoMiles * msPorDia);

  const signo = resolverSignoPorDiaMes(mesNac, diaNac);
  const mesInfo = MESES_CON_SIGNOS[mesNac - 1];

  return {
    fechaNacimientoIso,
    anios,
    meses,
    dias,
    totalDiasVividos,
    totalHorasVividas,
    diaSemanaNacimiento,
    diasParaProximoCumple,
    proximoCumpleIso: fechaUtcAIso(proximoCumple),
    edadProximoCumple,
    hito10MilDiasIso: fechaUtcAIso(d10Mil),
    hito10MilDiasPasado,
    proximoHitoMiles,
    proximoHitoMilesIso: fechaUtcAIso(dProxHito),
    signo,
    mesSlug: mesInfo.slug,
    mesNombre: mesInfo.nombreCap
  };
}

export const VERSOS_ACROSTICO: Record<TonoAcrostico, Record<string, string[]>> = {
  emotivo: {
    A: ['Abrazos sinceros que cuidan cada paso de tu nuevo año', 'Alegría genuina en las sobremesas junto a los tuyos'],
    B: ['Brindis honestos por lo vivido y lo que recién empieza', 'Bondad tranquila que deja huella en toda la casa'],
    C: ['Calma serena en medio del trajín de cada semana', 'Caminos despejados para cumplir tus metas con paz'],
    D: ['Días luminosos rodeados de afectos que suman verdad', 'Deseos cumplidos paso a paso, sin apuros vacíos'],
    E: ['Encuentros largos sin mirar el reloj con tu gente', 'Esperanza firme incluso cuando toca remar cuesta arriba'],
    F: ['Fuerza serena para cuidar siempre lo que amás de verdad', 'Felicidad cotidiana hecha de gestos simples y reales'],
    G: ['Gratitud honda por compartir tu tiempo con nosotros', 'Ganas intactas de seguir celebrando la vida juntos'],
    H: ['Historias lindas que quedan guardadas en la memoria familiar', 'Hogares tibios donde siempre te esperan con mate o café'],
    I: ['Ilusiones claras que te invitan a mirar hacia adelante', 'Instantes pequeños que con los años valen oro'],
    J: ['Jornadas tranquilas con descanso real y buena compañía', 'Júbilo sincero al ver cómo crecés fiel a tu esencia'],
    K: ['Kilómetros lindos por recorrer en nuevos viajes compartidos', 'Kermeses de risa sincera en cada reunión en casa'],
    L: ['Luz constante en tu manera generosa de acompañar', 'Logros construidos con paciencia, criterio y corazón'],
    M: ['Mañanas serenas con café tibio y cero urgencias', 'Momentos simples que convierten cualquier martes en fiesta'],
    N: ['Noches de descanso profundo y sueños sin peso', 'Noticias lindas tocando la puerta en el momento justo'],
    Ñ: ['Ñapa de ternura en cada gesto diario que regalás', 'Ñandúes de libertad para elegir siempre tu propio rumbo'],
    O: ['Orgullo inmenso por la persona noble en que te convertís', 'Oportunidades nuevas para disfrutar tu talento'],
    P: ['Paz en el corazón y mesas largas llenas de afecto', 'Proyectos con sentido que te entusiasmen los lunes'],
    Q: ['Querer verdadero de quienes caminan a tu lado siempre', 'Quietud amable para disfrutar cada logro alcanzado'],
    R: ['Risas contagiosas que acomodan hasta la tarde más gris', 'Recuerdos nuevos sumándose al álbum compartido'],
    S: ['Salud firme para aprovechar cada proyecto pendiente', 'Sonrisas honestas en cada foto de este nuevo ciclo'],
    T: ['Ternura fiel en los días buenos y en los difíciles', 'Tiempo libre de calidad para hacer eso que amás'],
    U: ['Unión sincera con quienes celebran tu vida sin poses', 'Universos pequeños de calma dentro de la rutina'],
    V: ['Viajes sin apuro hacia lugares que te renueven el aire', 'Valentía serena para defender siempre tu paz'],
    W: ['Waffles o cosas ricas compartidas en mañanas lentas', 'Win de alegría en cada desafío que encarás con alma'],
    X: ['Xilofones de buen ánimo poniendo música a tu año', 'Extraordinaria forma de estar presente cuando hace falta'],
    Y: ['Yuntas leales de amigos que no fallan nunca', 'Yemas de primavera floreciendo en tus planes'],
    Z: ['Zancadas firmes hacia metas que hoy parecen lejanas', 'Zafiros de calma cuidando tu camino todo el año']
  },
  humor: {
    A: ['Asados, pizza y cero dietas al menos durante tu semana de cumple', 'Anécdotas impublicables que igual vamos a repetir brindando'],
    B: ['Batería llena para festejar hasta que echen a los mozos', 'Brindis largos con la promesa dudosa de acostarnos temprano'],
    C: ['Cero reuniones de lunes que arruinen tu mañana festiva', 'Cuotas cómodas en la vida y torta con doble relleno'],
    D: ['Desayunos tardíos sin alarmas sonando a las siete', 'Días libres de audios de cinco minutos sin contexto'],
    E: ['Excusas válidas todo el mes porque es tu temporada natal', 'Entradas gratis o porción doble del centro de la torta'],
    F: ['Fiesta digna donde nadie saque cuentas de cuántas velas van', 'Fotos lindas aunque salgamos con los ojos cerrados'],
    G: ['Ganas de reírnos de las mismas historias de hace diez años', 'Gastos cubiertos mágicamente cuando invites a merendar'],
    H: ['Horas extras de siesta sagrada durante todo el fin de semana', 'Humor intacto incluso cuando falle el pronóstico del clima'],
    I: ['Ideas geniales a las dos de la mañana que después sí cumplamos', 'Invitados puntuales que traigan algo rico para la mesa'],
    J: ['Juntadas improvisadas que terminen siendo las mejores del año', 'Júbilo máximo al recibir mensajes que no sean de bancos'],
    K: ['Kilos de buena onda (y algo dulce) en cada encuentro', 'Karaokes dudosos cantados con total orgullo'],
    L: ['Lunes cortos y viernes que arranquen desde el mediodía', 'Likes sinceros y abrazos que no sean solo emojis'],
    M: ['Mate o café exacto antes de que te pidan ningún favor', 'Memes de altísima calidad compartidos en el chat privado'],
    N: ['Noches de sobremesa eterna donde no falte el chiste fácil', 'Números nuevos que solo sumen experiencia y cero mañas'],
    Ñ: ['Ñoquis de celebración y brindis con risa garantizada', 'Ñaque de excusas simpáticas para estirar el festejo'],
    O: ['Ofertas misteriosas en viajes que por fin podamos aprovechar', 'Ocho horas corridas de sueño profundo sin despertador'],
    P: ['Planes de fin de semana sin tener que explicar nada a nadie', 'Porciones generosas de todo lo rico que haya en la mesa'],
    Q: ['Quinielas de buena suerte y cero multas en el camino', 'Quesos ricos en la picada antes de cortar la torta'],
    R: ['Risas de esas que duelen la panza en medio de la cena', 'Regalos útiles que no terminen olvidados en un cajón'],
    S: ['Sábados eternos con música fuerte y amigos de verdad', 'Sobras deliciosas de tu propia torta para desayunar mañana'],
    T: ['Tardes al sol sin abrir planillas ni correos urgentes', 'Torta casera que alcance para repetir dos veces'],
    U: ['Urgencias cero durante toda la semana de tu cumpleaños', 'Último brindis siempre con promesa de repetir el viernes'],
    V: ['Vacaciones largas aprobadas antes de que las pidas', 'Velitas recicladas si ya no entra ni una más en el bizcochuelo'],
    W: ['Wi-Fi veloz en todas tus escapadas y cero cortes', 'Wink cómplice cada vez que esquivemos un compromiso aburrido'],
    X: ['Xilografías de risa pura en nuestra próxima foto grupal', 'Extras de alegría cada vez que nos juntemos a comer'],
    Y: ['Yapa dulce obligatoria cuando vayas a buscar helado', 'Yes rotundo a cualquier viaje corto que propongas'],
    Z: ['Zapatos cómodos para bailar hasta tarde sin quejarnos mañana', 'Zapping feliz sin obligaciones pendientes en toda la tarde']
  },
  fe: {
    A: ['Amparo divino cubriendo cada paso de tu familia', 'Agradecimiento sincero por el don precioso de tu vida'],
    B: ['Bendiciones abundantes sobre tu hogar, tu mesa y tu descanso', 'Bondad serena multiplicada en cada mano que ayudás'],
    C: ['Certeza de que Dios camina adelante abriendo sendas de paz', 'Consuelo fiel y fortaleza en los momentos exigentes'],
    D: ['Días guiados con sabiduría, humildad y corazón alegre', 'Dicha compartida con quienes oran y agradecen por vos'],
    E: ['Esperanza viva que sostiene la mirada cuando hay niebla', 'Ejemplo noble de servicio y cariño sin condiciones'],
    F: ['Fe firme que da serenidad y esperanza al nuevo ciclo', 'Frutos buenos nacidos de tu paciencia cotidiana'],
    G: ['Gracia diaria para empezar cada jornada con ánimo nuevo', 'Gratitud por tu testimonio cercano lleno de amor'],
    H: ['Hogar cuidado bajo promesas de paz y salud', 'Huellas de luz en cada persona que acompañás con oración'],
    I: ['Inspiración clara para discernir siempre lo que construye', 'Integridad serena en palabras, gestos y decisiones'],
    J: ['Jornadas bendecidas con trabajo digno y descanso en casa', 'Júbilo profundo por celebrar otro año bajo Su cuidado'],
    K: ['Kairós de Dios llegando exacto en tus proyectos pendientes', 'Kilómetros resguardados con salud y compañía fiel'],
    L: ['Luz espiritual que orienta cada decisión importante', 'Lazos familiares fortalecidos en perdón, calma y amor'],
    M: ['Misericordia renovada al abrir los ojos cada mañana', 'Manos sostenidas cuando toque atravesar desafíos'],
    N: ['Noches tranquilas bajo protección divina sobre tu casa', 'Nuevas oportunidades guiadas con sabiduría'],
    Ñ: ['Ñaña de ternura en cada gesto de servicio silencioso', 'Ñapa de bendiciones sobre los tuyos todo este año'],
    O: ['Oraciones agradecidas elevándose hoy por tu nombre', 'Obras buenas que regresan en alegría para tu corazón'],
    P: ['Paz que supera todo entendimiento en tus días ocupados', 'Propósito claro para servir y disfrutar con gozo'],
    Q: ['Quietud del alma para escuchar lo que realmente importa', 'Querer sincero unido a una fe viva y cotidiana'],
    R: ['Respaldo fiel en cada proyecto que emprendas este año', 'Renovación de fuerzas físicas y espirituales cada semana'],
    S: ['Salud cuidada y alegría serena en toda tu casa', 'Sabiduría para sembrar concordia donde estés'],
    T: ['Testimonio cálido que abraza a quienes buscan aliento', 'Tiempo bendecido en familia alrededor de la mesa'],
    U: ['Unión verdadera en el hogar y paz en cada encuentro', 'Unción de calma frente a cualquier preocupación'],
    V: ['Verdad y ternura acompañando cada paso de tu vida', 'Vida plena con motivos cotidianos para dar gracias'],
    W: ['Webs de afecto y fe sosteniéndote siempre cerca', 'Welfare espiritual y serenidad en cada etapa nueva'],
    X: ['Xilofones de alabanza y gratitud hoy en tu mesa', 'Expresión viva de amor cristiano en hechos simples'],
    Y: ['Yugo suave y descanso para tu espíritu en cada pausa', 'Yuntas de fe que caminan y oran junto a vos'],
    Z: ['Zafiros de serenidad cuidando tus mañanas y tus noches', 'Zarpazos de fe venciendo cualquier duda del año']
  }
};

export function normalizarLetraAcrostico(ch: string): string {
  const upper = ch.toUpperCase();
  if (upper === 'Ñ') return 'Ñ';
  return upper.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function generarAcrostico(nombreRaw: string, tono: TonoAcrostico = 'emotivo'): LineaAcrostico[] {
  const limpio = String(nombreRaw || '').trim();
  const letras = Array.from(limpio).filter((ch) => /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(ch));
  if (!letras.length) return [];

  const diccionario = VERSOS_ACROSTICO[tono] || VERSOS_ACROSTICO.emotivo;
  const usados = new Map<string, number>();

  return letras.map((original) => {
    const base = normalizarLetraAcrostico(original);
    const opciones = diccionario[base] || [
      `Alegría sincera y paz duradera en este nuevo año para vos`
    ];
    const indice = usados.get(base) || 0;
    usados.set(base, indice + 1);
    return {
      letra: original.toUpperCase(),
      verso: opciones[indice % opciones.length]
    };
  });
}

export function construirDedicatoriaGuiada(params: {
  vinculo: VinculoArmador;
  tono: TonoArmador;
  nombre?: string;
  detalle?: string;
  firma?: string;
}): string {
  const nombre = String(params.nombre || '').trim();
  const detalle = String(params.detalle || '').trim();
  const firma = String(params.firma || '').trim().replace(/^[—–-]\s*/, '');

  const aperturas: Record<VinculoArmador, Record<TonoArmador, string>> = {
    familia: {
      emotivo: nombre ? `Querido/a ${nombre}, hoy celebramos tu vida agradeciendo todo lo que sumás en nuestra mesa.` : 'Hoy celebramos tu vida agradeciendo todo lo que sumás en nuestra mesa familiar.',
      breve: nombre ? `¡Muy feliz cumpleaños, ${nombre}! Que nunca te falten salud, calma y abrazos cerca de casa.` : '¡Muy feliz cumpleaños! Que nunca te falten salud, calma y abrazos cerca de casa.',
      humor: nombre ? `¡Feliz vuelta al sol, ${nombre}! Prometemos no contar las velas si guardás la mejor porción de torta.` : '¡Feliz vuelta al sol! Prometemos no contar las velas si guardás la mejor porción de torta.',
      fe: nombre ? `${nombre}, damos gracias a Dios por tu vida y pedimos que Su paz abrace cada día de tu año nuevo.` : 'Damos gracias a Dios por tu vida y pedimos que Su paz abrace cada día de tu año nuevo.'
    },
    pareja: {
      emotivo: nombre ? `${nombre}, mi amor: gracias por transformar los días comunes en mi lugar favorito del mundo.` : 'Mi amor, gracias por transformar los días comunes en mi lugar favorito del mundo.',
      breve: nombre ? `¡Feliz cumple, ${nombre}! Qué suerte celebrar otro año caminando codo a codo.` : '¡Feliz cumple! Qué suerte celebrar otro año caminando codo a codo.',
      humor: nombre ? `¡Feliz cumple, ${nombre}! Hoy elegís vos la comida y prometo no discutir ni un minuto.` : '¡Feliz cumple! Hoy elegís vos la comida y prometo no discutir ni un minuto.',
      fe: nombre ? `${nombre}, agradezco a Dios haber cruzado nuestros caminos; que nos siga regalando paz y alegría juntos.` : 'Agradezco a Dios haber cruzado nuestros caminos; que nos siga regalando paz y alegría juntos.'
    },
    amistad: {
      emotivo: nombre ? `${nombre}, gracias por esa amistad leal que salva hasta las semanas más pesadas con una charla sincera.` : 'Gracias por esa amistad leal que salva hasta las semanas más pesadas con una charla sincera.',
      breve: nombre ? `¡Feliz cumple, ${nombre}! Por muchas risas, mates y planes buenos este año nuevo.` : '¡Feliz cumple! Por muchas risas, mates y planes buenos este año nuevo.',
      humor: nombre ? `¡Feliz cumple, ${nombre}! Otro año más fingiendo ser adultos responsables pero riéndonos igual que siempre.` : '¡Feliz cumple! Otro año más fingiendo ser adultos responsables pero riéndonos igual que siempre.',
      fe: nombre ? `${nombre}, que Dios bendiga tu vida generosa y te regale un año sereno rodeado de afectos fieles.` : 'Que Dios bendiga tu vida generosa y te regale un año sereno rodeado de afectos fieles.'
    },
    trabajo: {
      emotivo: nombre ? `Estimado/a ${nombre}, le deseo un muy feliz cumpleaños y un excelente año personal lleno de proyectos serenos.` : 'Le deseo un muy feliz cumpleaños y un excelente año personal lleno de proyectos serenos.',
      breve: nombre ? `¡Muy feliz cumpleaños, ${nombre}! Mis mejores deseos de salud y éxito en este nuevo ciclo.` : '¡Muy feliz cumpleaños! Mis mejores deseos de salud y éxito en este nuevo ciclo.',
      humor: nombre ? `¡Feliz cumpleaños, ${nombre}! Hoy permiso oficial para cerrar planillas temprano y brindar tranquilo.` : '¡Feliz cumpleaños! Hoy permiso oficial para cerrar planillas temprano y brindar tranquilo.',
      fe: nombre ? `${nombre}, que este nuevo año esté lleno de bendiciones, salud firme y satisfacciones en su tarea diaria.` : 'Que este nuevo año esté lleno de bendiciones, salud firme y satisfacciones en su tarea diaria.'
    }
  };

  const bloque1 = aperturas[params.vinculo][params.tono];
  const bloqueDetalle = detalle
    ? params.vinculo === 'trabajo'
      ? `Siempre se valora muchísimo ${detalle.charAt(0).toLowerCase() + detalle.slice(1).replace(/\.$/, '')}.`
      : `Todavía atesoro ${detalle.charAt(0).toLowerCase() + detalle.slice(1).replace(/\.$/, '')}; en esos gestos reales se nota lo grande que sos.`
    : '';

  const cierres: Record<TonoArmador, string> = {
    emotivo: 'Que los próximos doce meses traigan descanso verdadero, salud firme y motivos para brindar sin apuro.',
    breve: '¡Disfrutá muchísimo tu día rodeado de gente buena!',
    humor: 'Guardá porción de torta para el próximo brindis que nos debemos.',
    fe: 'Que nunca falte abrigo espiritual ni alegría en tu hogar.'
  };

  const partes = [bloque1, bloqueDetalle, cierres[params.tono]].filter(Boolean);
  let salida = partes.join('\n\n');
  if (firma) {
    salida += `\n\n— ${firma}`;
  }
  return salida;
}

export function construirIcsCumpleanos(params: {
  nombre: string;
  mes: number;
  dia: number;
  relacion?: string;
  anioBase?: number;
}): string {
  const nombre = String(params.nombre || '').trim();
  if (!nombre) throw new Error('Ingresá un nombre para generar el recordatorio.');
  if (!Number.isInteger(params.mes) || params.mes < 1 || params.mes > 12) {
    throw new Error('Mes inválido para recordatorio.');
  }
  if (!Number.isInteger(params.dia) || params.dia < 1 || params.dia > 31) {
    throw new Error('Día inválido para recordatorio.');
  }

  const anio = params.anioBase || new Date().getFullYear();
  const mm = String(params.mes).padStart(2, '0');
  const dd = String(params.dia).padStart(2, '0');
  const dt = `${anio}${mm}${dd}`;
  const dtEndDate = new Date(Date.UTC(anio, params.mes - 1, params.dia + 1));
  const dtEnd = dtEndDate.toISOString().slice(0, 10).replace(/-/g, '');
  const mesSlug = MESES_CON_SIGNOS[params.mes - 1].slug;
  const signo = resolverSignoPorDiaMes(params.mes, params.dia);
  const relTxt = params.relacion ? ` (${params.relacion})` : '';
  const summary = `Cumpleaños de ${nombre}${relTxt}`;
  const desc = `Recordatorio anual de ParaCumpleanos.com (${signo.nombre} ${signo.simbolo}). Ideas listas en https://paracumpleanos.com/${mesSlug}/ y https://paracumpleanos.com/horoscopo/${signo.slug}/`;
  const uid = `cumple-${nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${mm}${dd}@paracumpleanos.com`;
  const stamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ParaCumpleanos//Agenda Cumpleanos//ES',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${dt}`,
    `DTEND;VALUE=DATE:${dtEnd}`,
    'RRULE:FREQ=YEARLY',
    `SUMMARY:${summary}`,
    `DESCRIPTION:${desc}`,
    'BEGIN:VALARM',
    'TRIGGER:-P2D',
    'ACTION:DISPLAY',
    `DESCRIPTION:Faltan 2 días para el cumpleaños de ${nombre}`,
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:PT9H',
    'ACTION:DISPLAY',
    `DESCRIPTION:Hoy cumple años ${nombre}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}
