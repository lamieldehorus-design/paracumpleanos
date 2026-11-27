export interface ArcanoBase {
  numero: number;
  romano?: string;
  slug?: string;
  nombre: string;
  tipo: 'mayor' | 'menor';
  astrologia: string;
  deidadOPlaneta: string;
  numerologia: number;
  derecho: string;
  invertido: string;
  consejo: string;
  aforismo?: string;
}

export interface PosicionTiradaTarot {
  indice: number;
  etiqueta: string;
  guia: string;
  esRegente?: boolean;
}

export interface EsquemaTiradaTarot {
  id: string;
  nombre: string;
  cantidadCartas: number;
  referenciaTradicional: string;
  resumen: string;
  comoLeer: string;
  posiciones: PosicionTiradaTarot[];
}

export interface ArcanoMayorResumen {
  numero: number;
  romano: string;
  slug: string;
  nombre: string;
  deidad: string;
  astrologia: string;
  numerologia: number;
  esencia: string;
  aforismo: string;
  consejo: string;
}

export interface DedicatoriaTarot {
  tono: string;
  palabrasLabel: string;
  titulo: string;
  texto: string;
}

export interface ArcanoMayorCompleto extends ArcanoMayorResumen {
  glyph: string;
  derechoResumen: string;
  invertidoResumen: string;
  signoBadge: string;
  signoSlug: string;
  titleTag: string;
  metaDesc: string;
  h1: string;
  lead: string;
  fichaDl: { label: string; valor: string }[];
  zodiacoIntro: string;
  enlacesZodiaco: { href: string; nombre: string; rango: string }[];
  derechoDetalle: string;
  invertidoDetalle: string;
  planos: { nombre: string; texto: string }[];
  filosofiaParrafos: string[];
  dedicatorias: DedicatoriaTarot[];
  faqs: { pregunta: string; respuesta: string }[];
}

export const TAROT_78_ARCANOS: ArcanoBase[] = [
  {
    "numero": 1,
    "romano": "I",
    "slug": "el-mago",
    "nombre": "El Mago",
    "tipo": "mayor",
    "astrologia": "Sol en Leo",
    "deidadOPlaneta": "Osiris y Thot",
    "numerologia": 1,
    "derecho": "Señala el arranque de una etapa fértil donde contás con los recursos, la mente despierta y el impulso necesarios para materializar un proyecto. Habla de destreza, iniciativa personal, habilidad comunicativa y valentía para dar el primer paso sin esperar permisos externos.",
    "invertido": "Advierte indecisión, voluntad dispersa o exceso de duda frente a tus propias capacidades. También invita a revisar si estás postergando una elección importante por miedo a equivocarte o buscando atajos donde hace falta disciplina serena.",
    "consejo": "Ideal para saludar a alguien que arranca un año lleno de proyectos propios, emprendimientos o decisiones valientes. Reconocé su talento real y animá ese primer paso que viene postergando.",
    "aforismo": "Sé en tus obras como eres en tus pensamientos."
  },
  {
    "numero": 2,
    "romano": "II",
    "slug": "la-suma-sacerdotisa",
    "nombre": "La Suma Sacerdotisa",
    "tipo": "mayor",
    "astrologia": "Luna en Cáncer",
    "deidadOPlaneta": "Isis",
    "numerologia": 2,
    "derecho": "Invita a confiar en tu percepción serena, observar antes de apurarte y honrar los tiempos internos. Habla de sentido común, compenetración emocional, prudencia sabia y comprensión profunda de aquello que no siempre se dice en voz alta.",
    "invertido": "Señala superficialidad pasajera, ruido mental que tapa la intuición o resistencia a escuchar una verdad sencilla que ya conocés por dentro. Sugiere bajar el ritmo y evitar juicios apresurados.",
    "consejo": "Perfecto para dedicar a personas intuitivas, reservadas y leales que sostienen a su entorno con calma y buen consejo. Valorá su escucha silenciosa y deseales paz genuina.",
    "aforismo": "El viento y las olas van siempre a favor de quien sabe navegar."
  },
  {
    "numero": 3,
    "romano": "III",
    "slug": "la-emperatriz",
    "nombre": "La Emperatriz",
    "tipo": "mayor",
    "astrologia": "Júpiter en Sagitario",
    "deidadOPlaneta": "Neftis",
    "numerologia": 3,
    "derecho": "Anuncia una etapa expansiva de fertilidad creativa, progreso material y bienestar en el hogar. Favorece nacimientos de proyectos, belleza cotidiana, acuerdos generosos y vínculos cálidos que crecen con naturalidad.",
    "invertido": "Habla de estancamiento pasajero, fatiga creativa o exceso de preocupación por resultados que todavía están madurando. Pide volver al disfrute sencillo y nutrir primero tu propia energía.",
    "consejo": "Ideal para madres, artistas, anfitrionas, emprendedores creativos o personas de Sagitario que disfrutan expandirse y compartir alegría alrededor de una mesa abundante.",
    "aforismo": "Tejiendo está tu telar, telas para tu uso y telas que no has de usar."
  },
  {
    "numero": 4,
    "romano": "IV",
    "slug": "el-emperador",
    "nombre": "El Emperador",
    "tipo": "mayor",
    "astrologia": "Urano en Acuario",
    "deidadOPlaneta": "Horus",
    "numerologia": 4,
    "derecho": "Marca consolidación, orden práctico, liderazgo confiable y frutos seguros gracias al esfuerzo sostenido. Habla de proteger lo logrado, tomar decisiones claras y sostener compromisos con palabra firme.",
    "invertido": "Avisa sobre rigidez excesiva, dificultad para delegar o, en el polo opuesto, falta de orden para sostener un objetivo. Propone firmeza flexible sin perder humanidad.",
    "consejo": "Muy adecuado para padres, referentes familiares, colegas confiables o personas que sostienen la casa y el trabajo con responsabilidad constante.",
    "aforismo": "Al trabajo de tus manos da bendición, y en el del pensamiento pon corazón."
  },
  {
    "numero": 5,
    "romano": "V",
    "slug": "el-hierofante",
    "nombre": "El Hierofante",
    "tipo": "mayor",
    "astrologia": "Mercurio en Virgo",
    "deidadOPlaneta": "Seth y la Ley Sagrada",
    "numerologia": 5,
    "derecho": "Señala aprendizaje valioso, mentoría oportuna, acuerdos respetuosos y claridad ética. Anuncia el encuentro con un buen consejo, una enseñanza útil o el momento de compartir con otros la experiencia que ya maduraste.",
    "invertido": "Invita a cuestionar costumbres vacías o dogmas que ya no te representan, evitando tanto la susceptibilidad defensiva como aceptar normas sin reflexión propia.",
    "consejo": "Excelente para docentes, abuelos, mentores, amigos de buen criterio o personas de Virgo cuya experiencia práctica siempre aclara dudas.",
    "aforismo": "De oídas te había conocido; mas ahora mis ojos te ven y mi corazón te siente."
  },
  {
    "numero": 6,
    "romano": "VI",
    "slug": "la-indecision",
    "nombre": "La Indecisión",
    "tipo": "mayor",
    "astrologia": "Venus en Tauro",
    "deidadOPlaneta": "Amón",
    "numerologia": 6,
    "derecho": "Habla del momento luminoso en que elegís con conciencia: un vínculo que se afirma, una vocación que se decide o una alianza basada en afecto genuino y respeto mutuo. Celebra la belleza de comprometerse sin perder libertad.",
    "invertido": "Refleja dudas prolongadas, miedo a soltar una opción o decisiones tomadas solo por complacer a terceros. Pide honestidad afectiva para elegir lo que realmente resuena con vos.",
    "consejo": "Hermoso para dedicar a parejas, amigos que arrancan una nueva etapa o personas de Tauro que valoran los vínculos estables, la belleza y la calma compartida.",
    "aforismo": "Trabajos me das, Señor, mas con ellos fortaleza."
  },
  {
    "numero": 7,
    "romano": "VII",
    "slug": "el-carro",
    "nombre": "El Carro",
    "tipo": "mayor",
    "astrologia": "Neptuno en Piscis",
    "deidadOPlaneta": "Anubis",
    "numerologia": 7,
    "derecho": "Anuncia triunfo logrado con temple, avances rápidos, viajes favorables y dominio sereno sobre impulsos contradictorios. Confirma que sos capaz de conducir tus propios proyectos hacia buen puerto.",
    "invertido": "Advierte demoras temporales, dispersión de energía o intento de forzar un resultado sin revisar antes la dirección. Recomienda ajustar las riendas antes de acelerar.",
    "consejo": "Ideal para felicitar a quien egresa, se muda, emprende un viaje o celebra un año de conquistas personales tras haber sostenido el timón con paciencia.",
    "aforismo": "Cuando la ciencia entra en tu corazón y la sabiduría es dulce a tu alma, pide y te será dado."
  },
  {
    "numero": 8,
    "romano": "VIII",
    "slug": "la-justicia",
    "nombre": "La Justicia",
    "tipo": "mayor",
    "astrologia": "Saturno en Capricornio",
    "deidadOPlaneta": "Maat",
    "numerologia": 8,
    "derecho": "Habla de acuerdos limpios, reconocimientos merecidos, orden legal o personal y tranquilidad de conciencia. Confirma que lo sembrado con rectitud encuentra su justa retribución.",
    "invertido": "Alerta sobre desequilibrios, exceso de autoexigencia severa o demoras por asuntos pendientes que necesitan aclararse con transparencia y calma.",
    "consejo": "Especial para personas íntegras, responsables y rectas —muy afín a Capricornio— a quienes conviene agradecer su honestidad y desearles cosecha justa sin sobreexigencia.",
    "aforismo": "Edifica un altar en tu corazón, mas no hagas de tu corazón un altar."
  },
  {
    "numero": 9,
    "romano": "IX",
    "slug": "el-ermitano",
    "nombre": "El Ermitaño",
    "tipo": "mayor",
    "astrologia": "Marte en Aries",
    "deidadOPlaneta": "Khonsu (Konsu)",
    "numerologia": 9,
    "derecho": "Invita a la pausa fecunda, a estudiar con calma y a confiar en tu propia linterna interior antes de tomar un compromiso nuevo. Habla de prudencia, experiencia ganada, discreción y respuestas profundas.",
    "invertido": "Avisa sobre aislamiento excesivo, testarudez solitaria o precipitación por no haber reflexionado un minuto más. Sugiere aceptar buena compañía sin perder tu criterio.",
    "consejo": "Muy significativo para cumpleaños de cambio de década (30, 40, 50, 60 o más) o para personas reflexivas que valoran la profundidad por encima del ruido.",
    "aforismo": "Sube al monte y contempla la tierra prometida; mas no te digo que entrarás en ella."
  },
  {
    "numero": 10,
    "romano": "X",
    "slug": "la-rueda-de-la-fortuna",
    "nombre": "La Rueda de la Fortuna",
    "tipo": "mayor",
    "astrologia": "Plutón en Escorpio",
    "deidadOPlaneta": "Horus, Anubis y Mut",
    "numerologia": 1,
    "derecho": "Anuncia un cambio afortunado, movimiento inesperado que destraba situaciones y apertura de una nueva vuelta de ciclo. Invita a recibir las novedades con flexibilidad y confianza.",
    "invertido": "Marca altibajos pasajeros, monotonía o resistencia a aceptar que una etapa ya giró. Recuerda que nada se queda quieto para siempre y que la calma en el centro estabiliza cualquier vaivén.",
    "consejo": "Perfecto para el día del cumpleaños, que es literalmente una vuelta completa de la rueda solar: deseá giros lindos, sorpresas a favor y frescura para disfrutar lo nuevo.",
    "aforismo": "Costoso es el saber que compras con la experiencia, y más costoso el que te falta comprar."
  },
  {
    "numero": 11,
    "romano": "XI",
    "slug": "la-fuerza",
    "nombre": "La Fuerza",
    "tipo": "mayor",
    "astrologia": "Aries y el Sol",
    "deidadOPlaneta": "Sekmet",
    "numerologia": 2,
    "derecho": "Representa fortaleza interior que no necesita gritar para imponerse. Habla de valentía ética, recuperación de vitalidad, paciencia firme ante pruebas y poder de persuasión amable.",
    "invertido": "Advierte cansancio acumulado, impulsividad momentánea o pérdida de confianza en tu propia resistencia. Invita a descansar y recuperar el eje sin culpa.",
    "consejo": "Ideal para celebrar a personas valientes que atravesaron un año exigente con entereza, así como a nacidos bajo Aries y Leo.",
    "aforismo": "Gozoso en la esperanza, sufrido en la tribulación, sé constante en la oración."
  },
  {
    "numero": 12,
    "romano": "XII",
    "slug": "el-apostolado",
    "nombre": "El Apostolado",
    "tipo": "mayor",
    "astrologia": "Tauro y la Luna",
    "deidadOPlaneta": "Ptah",
    "numerologia": 3,
    "derecho": "Invita a soltar la urgencia y observar un asunto desde otro punto de vista. Habla de generosidad sin cálculo, vocación de servicio, desapego sano y descubrimientos valiosos que nacen cuando dejás de empujar a la fuerza.",
    "invertido": "Advierte rigidez mental, sacrificio innecesario por quedar bien o miedo a cambiar una costumbre que ya agotó su sentido. Propone soltar cargas que no te corresponden.",
    "consejo": "Conmovedor para quienes cuidan a otros con vocación sincera o atraviesan un cambio de mirada profundo: deseales libertad, descanso y reciprocidad afectiva.",
    "aforismo": "Aunque el sol te fatigue de día y la luna te contriste de noche, no lleves tu pie al resbaladero ni duermas cuando haces guardia."
  },
  {
    "numero": 13,
    "romano": "XIII",
    "slug": "la-muerte",
    "nombre": "La Muerte",
    "tipo": "mayor",
    "astrologia": "Géminis y Mercurio",
    "deidadOPlaneta": "Amón-Ra",
    "numerologia": 4,
    "derecho": "Lejos de cualquier presagio fatalista, anuncia la transformación necesaria que cierra una etapa gastada para dar paso a un renacimiento real. Habla de soltar hábitos viejos, cambiar de piel y amanecer más liviano.",
    "invertido": "Refleja resistencia a aceptar un cambio evidente, inercia o apego a situaciones que ya cumplieron su ciclo. Invita a soltar con gratitud para poder avanzar.",
    "consejo": "Especial para alguien que deja atrás un año complejo y estrena un capítulo completamente nuevo: deseá alivio, aire fresco y un amanecer luminoso.",
    "aforismo": "La noche ha pasado y llegó el nuevo día. Vístete pues con las armas de la luz."
  },
  {
    "numero": 14,
    "romano": "XIV",
    "slug": "la-templanza",
    "nombre": "La Templanza",
    "tipo": "mayor",
    "astrologia": "Cáncer y Júpiter",
    "deidadOPlaneta": "Neferten",
    "numerologia": 5,
    "derecho": "Anuncia armonía, recuperación emocional, diálogo conciliador y equilibrio saludable en la rutina. Sugiere combinar paciencia con acción medida para lograr acuerdos duraderos.",
    "invertido": "Advierte impaciencia, extremos innecesarios o desgaste por querer acelerar procesos que necesitan tiempo. Invita a respirar hondo y recuperar la medida justa.",
    "consejo": "Maravilloso para personas conciliadoras, sensibles y cálidas —en especial Cáncer— o para quien necesita un año más sereno, saludable y equilibrado.",
    "aforismo": "No seas como paja delante del viento ni como viento delante de paja."
  },
  {
    "numero": 15,
    "romano": "XV",
    "slug": "el-mal",
    "nombre": "El Mal",
    "tipo": "mayor",
    "astrologia": "Leo y Neptuno",
    "deidadOPlaneta": "Menkeret y Tifón",
    "numerologia": 6,
    "derecho": "Habla de deseo intenso, magnetismo, ambición fuerte y atracción poderosa, al mismo tiempo que pide lucidez para distinguir pasión sana de apego o exceso. Recordá cuidar tu propia viña: tu energía y tus límites.",
    "invertido": "Anuncia liberación de una atadura, tregua frente a una preocupación obsesiva o recuperación de autonomía emocional. Es una señal positiva de despertar y soltar dependencias.",
    "consejo": "Adecuado para desear libertad interior, límites sanos, pasión bien dirigida y cuidado personal a quien suele entregarse de más o vive todo con intensidad.",
    "aforismo": "Hicieronme guarda de viñas, y mi viña, que era mía, no guardé."
  },
  {
    "numero": 16,
    "romano": "XVI",
    "slug": "la-fragilidad",
    "nombre": "La Fragilidad",
    "tipo": "mayor",
    "astrologia": "Virgo y Mercurio",
    "deidadOPlaneta": "Ra (el rayo solar)",
    "numerologia": 7,
    "derecho": "Señala un despertar súbito que derriba lo que ya era frágil o artificial. Aunque al principio sacuda la rutina, despeja el panorama para reconstruir tu vida sobre bases mucho más honestas y duraderas.",
    "invertido": "Indica resistencia a soltar una rutina agotada o demora en aceptar un cambio necesario. Propone abrir ventanas voluntariamente antes de que el cansancio obligue a frenar.",
    "consejo": "Muy valioso para acompañar a quien atravesó un cimbronazo o reinvención reciente: celebrá su lucidez para volver a empezar sobre tierra firme.",
    "aforismo": "Luz de amanecer, luz de mediodía, luz de atardecer: lo que importa es que sea luz."
  },
  {
    "numero": 17,
    "romano": "XVII",
    "slug": "la-esperanza",
    "nombre": "La Esperanza",
    "tipo": "mayor",
    "astrologia": "Libra y Saturno",
    "deidadOPlaneta": "Khunum y Nut",
    "numerologia": 8,
    "derecho": "Es una de las cartas más luminosas del Tarot Egipcio. Anuncia alivio, inspiración artística o afectiva, recuperación de confianza y la certeza serena de que el horizonte vuelve a abrirse con bondad.",
    "invertido": "Refleja desaliento pasajero, fatiga anímica o dudas sobre el futuro. Recuerda que las estrellas siguen ahí aunque una nube cruce la noche: basta cuidar la pequeña llama de hoy.",
    "consejo": "Hermosísimo para regalar a cualquier persona querida —en especial de Libra— cuando querés transmitir aliento sincero, calma, belleza y confianza en el año que arranca.",
    "aforismo": "Unos hombres piden señales para creer, y otros piden sabiduría para obrar; mas el corazón esperanzado lo tiene todo en su esperanza."
  },
  {
    "numero": 18,
    "romano": "XVIII",
    "slug": "el-crepusculo",
    "nombre": "El Crepúsculo",
    "tipo": "mayor",
    "astrologia": "Escorpio y Urano",
    "deidadOPlaneta": "Khepri",
    "numerologia": 9,
    "derecho": "Abre la puerta al mundo de la intuición, la imaginación creadora y los sentimientos profundos. Pide caminar con atención serena cuando no todo está todavía a plena luz, distinguiendo intuición genuina de fantasía temerosa.",
    "invertido": "Señala disipación de confusiones, escepticismo práctico que aclara una duda o necesidad de verificar hechos concretos antes de sacar conclusiones emotivas.",
    "consejo": "Ideal para personas profundas, artísticas o nacidas bajo Escorpio que valoran las charlas nocturnas honestas y la comprensión real.",
    "aforismo": "Sea tu caridad granero inagotable y tu paciencia no menos inagotable que tu caridad."
  },
  {
    "numero": 19,
    "romano": "XIX",
    "slug": "la-inspiracion",
    "nombre": "La Inspiración",
    "tipo": "mayor",
    "astrologia": "Sagitario y Plutón",
    "deidadOPlaneta": "Geb y Ra solar",
    "numerologia": 1,
    "derecho": "Es el emblema de la plenitud luminosa: alegría sincera, relaciones claras, reconocimiento, buena salud y proyectos que brillan a la luz del día. Invita a celebrar sin culpa y compartir el calor de lo vivido.",
    "invertido": "Habla solo de un desánimo temporal, un retraso breve o cansancio que opaca momentáneamente el disfrute. El sol sigue intacto: alcanza con descansar y volver a mirar lo bueno ya logrado.",
    "consejo": "El arcano perfecto por excelencia para cumpleaños luminosos, nacidos bajo Sagitario o personas que irradian optimismo y calidez en cada reunión.",
    "aforismo": "Toma el escudo de tu fe y avanza con paso decidido, ya sea en favor del viento o contra todos los vientos."
  },
  {
    "numero": 20,
    "romano": "XX",
    "slug": "la-resurreccion",
    "nombre": "La Resurrección",
    "tipo": "mayor",
    "astrologia": "Capricornio y Marte",
    "deidadOPlaneta": "Atón (Ba y Ka)",
    "numerologia": 2,
    "derecho": "Anuncia un despertar claro: volver a elegir tu vocación, reconciliarte con tu historia, recibir una noticia liberadora o sentir un renacer de entusiasmo maduro. Todo lo sembrado empieza a mostrar su sentido.",
    "invertido": "Señala postergación, excesiva autocrítica o apego a errores viejos que ya merecen perdón. Invita a escuchar el llamado del presente y avanzar sin culpa.",
    "consejo": "Muy especial para cumpleaños de madurez, reencuentros familiares o personas que están recuperando un sueño postergado con renovada claridad.",
    "aforismo": "Flor en el manzano, fruto en la viña, sembrado en madurez."
  },
  {
    "numero": 21,
    "romano": "XXI",
    "slug": "la-transmutacion",
    "nombre": "La Transmutación",
    "tipo": "mayor",
    "astrologia": "Acuario y Neptuno",
    "deidadOPlaneta": "Shu",
    "numerologia": 3,
    "derecho": "Corona el recorrido con realización plena, éxito consolidado, viajes importantes y sensación profunda de estar en tu lugar. Confirma que los cuatro planos de tu vida encuentran armonía gracias a tu evolución.",
    "invertido": "Señala un cierre todavía incompleto o el último tramo antes de festejar un logro. Pide dar ese paso final sin bajar los brazos justo frente a la meta.",
    "consejo": "Extraordinario para celebrar grandes logros, aniversarios redondos, graduaciones o cumpleaños de Acuario llenos de horizontes amplios.",
    "aforismo": "En su secreto no entre mi alma, ni en su puerto mi navío."
  },
  {
    "numero": 22,
    "romano": "XXII",
    "slug": "el-loco",
    "nombre": "El Loco",
    "tipo": "mayor",
    "astrologia": "Piscis y Venus",
    "deidadOPlaneta": "Neith",
    "numerologia": 4,
    "derecho": "Celebra la espontaneidad lúcida, los comienzos frescos, el deseo de explorar y la libertad de animarte a algo nuevo sin cargar miedos viejos. Invita a confiar en el aprendizaje vivo del camino.",
    "invertido": "Advierte decisiones apresuradas sin mirar dónde pisás, dispersión o apatía para dar un salto que venís deseando. Combina entusiasmo libre con un mínimo de prudencia práctica.",
    "consejo": "Ideal para espíritus libres, creativos, viajeros, jóvenes que inician una etapa o personas de Piscis que conservan intacta la capacidad de soñar y sorprenderse.",
    "aforismo": "En su secreto no entre mi alma, ni en su puerto mi navío; camina despierto hacia el horizonte nuevo."
  },
  {
    "numero": 23,
    "nombre": "El Labrador",
    "tipo": "menor",
    "astrologia": "Mercurio · Inteligencia y actuación práctica",
    "deidadOPlaneta": "Mercurio",
    "numerologia": 5,
    "derecho": "Inteligencia aplicada, experiencia, trabajo constante y consecución concreta de resultados.",
    "invertido": "Breve contrariedad práctica que se destraba aceptando apoyo sincero.",
    "consejo": "Sostené la siembra diaria con método: lo que trabajás hoy con cuidado da fruto seguro."
  },
  {
    "numero": 24,
    "nombre": "La Laboriosidad",
    "tipo": "menor",
    "astrologia": "Venus · Dedicación y alegría en el oficio",
    "deidadOPlaneta": "Venus",
    "numerologia": 6,
    "derecho": "Hacendosidad, orden económico, dedicación prolija y cumplimiento sereno de compromisos.",
    "invertido": "Malestar interior o intranquilidad por sobrecarga de tareas pendientes.",
    "consejo": "Cuidá los pequeños detalles con gusto, pero reservá también descanso para que el esfuerzo siga siendo alegre."
  },
  {
    "numero": 25,
    "nombre": "El Viajero",
    "tipo": "menor",
    "astrologia": "Neptuno · Espíritu viajero y aventurero",
    "deidadOPlaneta": "Neptuno",
    "numerologia": 7,
    "derecho": "Afrontar desafíos nuevos con éxito, viajes provechosos y vínculos con el extranjero.",
    "invertido": "Mudanzas apuradas, cambios laborales inesperados o tensiones domésticas pasajeras.",
    "consejo": "Abrite a cambiar de paisaje o de mirada: salir de lo habitual hoy despeja respuestas."
  },
  {
    "numero": 26,
    "nombre": "La Fortuna",
    "tipo": "menor",
    "astrologia": "Saturno · Premio y solución de un problema",
    "deidadOPlaneta": "Saturno",
    "numerologia": 8,
    "derecho": "Sorpresas agradables, ideas rentables, nuevo afecto y prosperidad merecida.",
    "invertido": "Contratiempo menor que pide cautela antes de comprometer recursos.",
    "consejo": "Aprovechá el impulso a favor con los pies en la tierra para que el buen momento perdure."
  },
  {
    "numero": 27,
    "nombre": "Lo Imprevisto",
    "tipo": "menor",
    "astrologia": "Marte · Fuerza y empuje repentino",
    "deidadOPlaneta": "Marte",
    "numerologia": 9,
    "derecho": "Triunfo alcanzado tras un giro inesperado, hallazgo tardío o sorpresa oportuna.",
    "invertido": "Sorpresa incómoda o promesa poco clara que conviene verificar a tiempo.",
    "consejo": "Mantené flexibilidad: un cambio fuera de libreto puede abrirte una puerta mejor que el plan original."
  },
  {
    "numero": 28,
    "nombre": "La Desesperación",
    "tipo": "menor",
    "astrologia": "Plutón · Olvido sano del pasado",
    "deidadOPlaneta": "Plutón",
    "numerologia": 1,
    "derecho": "Misterio que empieza a aclararse cuando usás el conocimiento que ya tenés a mano.",
    "invertido": "Retraso, prueba emocional o adversidad pasajera que pide calma y acompañamiento.",
    "consejo": "No te quedes mirando ayer: pedí claridad, respirá hondo y resolvé primero el paso más cercano."
  },
  {
    "numero": 29,
    "nombre": "La Tranquilidad",
    "tipo": "menor",
    "astrologia": "Luna · Pasividad fértil y reflexión",
    "deidadOPlaneta": "Luna",
    "numerologia": 2,
    "derecho": "Alegría serena, acuerdo ventajoso, recompensa justa al esfuerzo y calma en casa.",
    "invertido": "Indecisión prolongada o exceso de acomodamiento que frena una mejora.",
    "consejo": "Disfrutá el momento de paz ganado y aprovechalo para pensar con cabeza despejada."
  },
  {
    "numero": 30,
    "nombre": "El Comercio",
    "tipo": "menor",
    "astrologia": "Júpiter · Conocimiento e intercambio",
    "deidadOPlaneta": "Júpiter",
    "numerologia": 3,
    "derecho": "Intercambios complejos que prosperan cuando ponés condiciones claras sobre la mesa.",
    "invertido": "Sensibilidad alta en acuerdos; relaciones comerciales que piden trato amable y prolijo.",
    "consejo": "Hablá con transparencia sobre tiempos y expectativas: un buen acuerdo siempre beneficia a las dos partes."
  },
  {
    "numero": 31,
    "nombre": "Las Dificultades",
    "tipo": "menor",
    "astrologia": "Urano · Tardanzas y ajustes de ritmo",
    "deidadOPlaneta": "Urano",
    "numerologia": 4,
    "derecho": "Expectativas en maduración y promesas que requieren paciencia antes de concretarse.",
    "invertido": "Restricciones pasajeras o demoras administrativas que exigen revisar trámites.",
    "consejo": "Usá la espera para pulir tu propuesta en vez de desgastarte peleando contra el reloj."
  },
  {
    "numero": 32,
    "nombre": "La Generosidad",
    "tipo": "menor",
    "astrologia": "Mercurio · Distribución inteligente",
    "deidadOPlaneta": "Mercurio",
    "numerologia": 5,
    "derecho": "Cooperación genuina, altruismo, alianzas leales y cumplimiento de compromisos.",
    "invertido": "Egoísmo o desacuerdos materiales por falta de reciprocidad clara.",
    "consejo": "Compartir lo que sabés o tenés multiplica vínculos valiosos cuando también cuidás tus propios límites."
  },
  {
    "numero": 33,
    "nombre": "Los Acuerdos",
    "tipo": "menor",
    "astrologia": "Venus · Unión y alianzas duraderas",
    "deidadOPlaneta": "Venus",
    "numerologia": 6,
    "derecho": "Alianza afectiva o laboral sólida, prosperidad compartida y progreso en equipo.",
    "invertido": "Papeles pendientes o inversión apresurada que conviene leer dos veces.",
    "consejo": "Celebrá los acuerdos que unen voluntades y dejá por escrito todo lo que importe cuidar."
  },
  {
    "numero": 34,
    "nombre": "El Cambio",
    "tipo": "menor",
    "astrologia": "Neptuno · Profundidad y transformación",
    "deidadOPlaneta": "Neptuno",
    "numerologia": 7,
    "derecho": "Ideas renovadoras, nuevo emprendimiento y encuentro afortunado que abre camino.",
    "invertido": "Miedo a dar el paso o dudas frente a una novedad que ya toca tu puerta.",
    "consejo": "Animarte a renovar un hábito viejo hoy puede destrabar toda la segunda mitad del año."
  },
  {
    "numero": 35,
    "nombre": "La Tristeza",
    "tipo": "menor",
    "astrologia": "Saturno · Templanza ante la pena",
    "deidadOPlaneta": "Saturno",
    "numerologia": 8,
    "derecho": "Fortaleza de espíritu que emerge frente a una noticia o cambio imprevisto.",
    "invertido": "Melancolía pasajera o desánimo que mejora al compartirlo con gente de confianza.",
    "consejo": "Honrá lo que sentís sin encerrarte: la calma vuelve más rápido cuando dejás entrar afecto cercano."
  },
  {
    "numero": 36,
    "nombre": "La Guerra",
    "tipo": "menor",
    "astrologia": "Marte · Conflicto y conquista decidida",
    "deidadOPlaneta": "Marte",
    "numerologia": 9,
    "derecho": "Nacimiento de una etapa firme, empuje ganador, buenos negocios y defensa justa de tus metas.",
    "invertido": "Desgaste innecesario en discusiones que te quitan impulso para lo importante.",
    "consejo": "Elegí bien qué batallas valen tu energía y reservá tu empuje para construir algo duradero."
  },
  {
    "numero": 37,
    "nombre": "El Arte",
    "tipo": "menor",
    "astrologia": "Sol · Amistad, creatividad y placer",
    "deidadOPlaneta": "Sol",
    "numerologia": 1,
    "derecho": "Amistad sincera, ayuda oportuna, reconocimiento público e ingenio creativo.",
    "invertido": "Malentendidos pequeños o críticas ajenas que no reflejan el valor real de tu obra.",
    "consejo": "Sumá belleza y creatividad a lo que hacés: tu toque personal hoy marca toda la diferencia."
  },
  {
    "numero": 38,
    "nombre": "La Infidelidad",
    "tipo": "menor",
    "astrologia": "Luna · Pruebas de lealtad",
    "deidadOPlaneta": "Luna",
    "numerologia": 2,
    "derecho": "Presencia de personas decididas, sabias y honradas que sostienen la verdad sin vueltas.",
    "invertido": "Falta de transparencia o promesas incumplidas que piden poner límites claros.",
    "consejo": "Rodeate de vínculos donde las palabras coincidan con los hechos cotidianos."
  },
  {
    "numero": 39,
    "nombre": "La Herencia",
    "tipo": "menor",
    "astrologia": "Júpiter · Verdad y legado familiar",
    "deidadOPlaneta": "Júpiter",
    "numerologia": 3,
    "derecho": "Legado valioso, herencia material o simbólica y celebraciones que reúnen a la familia.",
    "invertido": "Tensiones afectivas o repartos complejos que requieren diálogo sereno.",
    "consejo": "Agradecé lo mejor que recibiste de tus raíces y elegí qué legado lindo querés dejar hoy."
  },
  {
    "numero": 40,
    "nombre": "El Presentimiento",
    "tipo": "menor",
    "astrologia": "Urano · Alerta intuitiva súbita",
    "deidadOPlaneta": "Urano",
    "numerologia": 4,
    "derecho": "Trabajo bien valorado, simpatía inmediata y atracción hacia una oportunidad real.",
    "invertido": "Pérdida de foco o descuido afectivo por andar con la cabeza en demasiadas cosas.",
    "consejo": "Prestá atención a esa corazonada clara y confirmala con datos concretos antes de avanzar."
  },
  {
    "numero": 41,
    "nombre": "La Angustia",
    "tipo": "menor",
    "astrologia": "Mercurio · Revisión interior lúcida",
    "deidadOPlaneta": "Mercurio",
    "numerologia": 5,
    "derecho": "Vínculos intensos, familia numerosa y recuerdos afectivos que piden lugar y calma.",
    "invertido": "Agitación externa o enojo acumulado por cargar problemas que no te pertenecen.",
    "consejo": "Poné en palabras lo que te preocupa: apenas lo nombrás con orden, deja de parecer gigante."
  },
  {
    "numero": 42,
    "nombre": "La Constancia",
    "tipo": "menor",
    "astrologia": "Venus · Presencia afectuosa e insistencia",
    "deidadOPlaneta": "Venus",
    "numerologia": 6,
    "derecho": "Ventajas sostenidas, triunfos por perseverancia, vínculos sorprendentes y viaje productivo.",
    "invertido": "Distracción afectiva pasajera que se corrige retomando lo que te importa.",
    "consejo": "Tu constancia tranquila vence cualquier apuro: seguí un paso más sin aflojar."
  },
  {
    "numero": 43,
    "nombre": "La Alucinación",
    "tipo": "menor",
    "astrologia": "Neptuno · Sensibilidad extrema e imaginación",
    "deidadOPlaneta": "Neptuno",
    "numerologia": 7,
    "derecho": "Alegría inesperada, satisfacción sencilla, modestia y buen resultado en un proyecto.",
    "invertido": "Confusión en pareja o suposiciones sin confirmar que generan ruido innecesario.",
    "consejo": "Antes de imaginar escenarios difíciles, preguntá directo con calidez y claridad."
  },
  {
    "numero": 44,
    "nombre": "El Pensamiento",
    "tipo": "menor",
    "astrologia": "Saturno · Solución metódica de problemas",
    "deidadOPlaneta": "Saturno",
    "numerologia": 8,
    "derecho": "Proyecto bien pensado, intención firme y decisión madura que ordena el panorama.",
    "invertido": "Objetivo alcanzable aceptando una mirada externa o asesoramiento puntual.",
    "consejo": "Anotá tu plan en tres pasos simples: la claridad mental es la mitad del resultado."
  },
  {
    "numero": 45,
    "nombre": "La Regeneración",
    "tipo": "menor",
    "astrologia": "Marte · Cambio drástico y renovación",
    "deidadOPlaneta": "Marte",
    "numerologia": 9,
    "derecho": "Influencia familiar importante en decisiones afectivas y renovación de acuerdos.",
    "invertido": "Cierre de una etapa o vínculo que ya cumplió su ciclo para dar paso a mayor paz.",
    "consejo": "No temas recomenzar: cada renovación honesta te devuelve vitalidad."
  },
  {
    "numero": 46,
    "nombre": "El Patrimonio",
    "tipo": "menor",
    "astrologia": "Sol · Recogida de lo sembrado",
    "deidadOPlaneta": "Sol",
    "numerologia": 1,
    "derecho": "Legado firme, donación, reconocimiento económico y afinidad estable en pareja.",
    "invertido": "Cautela frente a promesas ajenas exageradas sobre dinero o negocios.",
    "consejo": "Administrá con gratitud y prudencia lo que construiste durante años."
  },
  {
    "numero": 47,
    "nombre": "La Conjetura",
    "tipo": "menor",
    "astrologia": "Luna · Sueños e intuición afectiva",
    "deidadOPlaneta": "Luna",
    "numerologia": 2,
    "derecho": "Alegría venidera, amor puro y duradero, comprensión profunda dentro de la familia.",
    "invertido": "Aflicción pasajera nacida de suposiciones que no se corresponden con la realidad.",
    "consejo": "Confiá en lo que se demuestra con cariño constante y soltá las dudas imaginarias."
  },
  {
    "numero": 48,
    "nombre": "El Logro",
    "tipo": "menor",
    "astrologia": "Júpiter · Poder de concretar metas",
    "deidadOPlaneta": "Júpiter",
    "numerologia": 3,
    "derecho": "Victoria limpia, consumación de un esfuerzo largo y conocimiento consolidado.",
    "invertido": "Meta afectiva o personal cercana que solo pide un poco más de paciencia.",
    "consejo": "Tomate un momento para celebrar lo que ya concretaste antes de correr detrás del siguiente objetivo."
  },
  {
    "numero": 49,
    "nombre": "La Duplicidad",
    "tipo": "menor",
    "astrologia": "Urano · Caminos distintos en paralelo",
    "deidadOPlaneta": "Urano",
    "numerologia": 4,
    "derecho": "Traslado favorable, ampliación de círculos y nuevas amistades enriquecedoras.",
    "invertido": "Encrucijada afectiva o competencia que se resuelve eligiendo con transparencia.",
    "consejo": "Integrá tus distintas facetas sin dividir tu lealtad: la coherencia da tranquilidad."
  },
  {
    "numero": 50,
    "nombre": "La Compenetración",
    "tipo": "menor",
    "astrologia": "Mercurio · Capacidad mental y sintonía",
    "deidadOPlaneta": "Mercurio",
    "numerologia": 5,
    "derecho": "Ilusión viva, amor correspondido, pasión y discernimiento claro frente a engaños.",
    "invertido": "Temor a trámites complejos o cautela excesiva ante riesgos manejables.",
    "consejo": "Escuchá con empatía sin apagar tu sentido común: corazón y cabeza trabajan mejor juntos."
  },
  {
    "numero": 51,
    "nombre": "El Asesoramiento",
    "tipo": "menor",
    "astrologia": "Venus · Seguridad y buen consejo",
    "deidadOPlaneta": "Venus",
    "numerologia": 6,
    "derecho": "Éxito en responsabilidades nuevas y trato favorable con personas experimentadas.",
    "invertido": "Rivalidades fuertes o discusiones que conviene mediar con diplomacia.",
    "consejo": "Consultar a quien ya recorrió el camino te ahorra tropiezos y fortalece tu decisión."
  },
  {
    "numero": 52,
    "nombre": "La Previsión",
    "tipo": "menor",
    "astrologia": "Neptuno · Elegancia y estrategia serena",
    "deidadOPlaneta": "Neptuno",
    "numerologia": 7,
    "derecho": "Orden inteligente, disciplina suave y defensa serena ante posibles conflictos.",
    "invertido": "Apariencias engañosas o celos que se disuelven con hechos claros.",
    "consejo": "Anticiparte con calma a lo que viene te permite disfrutar el presente sin sobresaltos."
  },
  {
    "numero": 53,
    "nombre": "La Venganza",
    "tipo": "menor",
    "astrologia": "Saturno · Cautela ante el temor o el rencor",
    "deidadOPlaneta": "Saturno",
    "numerologia": 8,
    "derecho": "Llamado a actuar con prudencia fría y no responder desde el impulso herido.",
    "invertido": "Críticas, rumores o discusiones innecesarias de las que conviene correrse a tiempo.",
    "consejo": "Soltar el rencor libera tu paz: responder con altura siempre protege mejor tu camino."
  },
  {
    "numero": 54,
    "nombre": "El Estudio",
    "tipo": "menor",
    "astrologia": "Marte · Observación atenta y rigor",
    "deidadOPlaneta": "Marte",
    "numerologia": 9,
    "derecho": "Analizar a fondo, investigar con rigor y dominar un tema antes de decidir.",
    "invertido": "Rumores o distracciones externas que intentan sacarte de tu foco.",
    "consejo": "Invertir una hora en entender bien el asunto hoy vale más que diez intentos apresurados."
  },
  {
    "numero": 55,
    "nombre": "El Arrepentimiento",
    "tipo": "menor",
    "astrologia": "Plutón · Desafío interior y revisión",
    "deidadOPlaneta": "Plutón",
    "numerologia": 1,
    "derecho": "Recogimiento honesto, humildad y pausa reflexiva que corrige el rumbo a tiempo.",
    "invertido": "Pruebas espirituales o presiones externas que exigen perdonarte y seguir.",
    "consejo": "Aprender de un error ya es victoria: corregí lo necesario y seguí liviano hacia adelante."
  },
  {
    "numero": 56,
    "nombre": "La Búsqueda",
    "tipo": "menor",
    "astrologia": "Luna · Distanciamiento reflexivo",
    "deidadOPlaneta": "Luna",
    "numerologia": 2,
    "derecho": "Logros materiales que invitan a revisar qué valores querés priorizar ahora.",
    "invertido": "Lamentaciones por lo postergado que se transforman en acción apenas empezás hoy.",
    "consejo": "Preguntate qué te da verdadero sentido y ajustá tu agenda en esa dirección."
  },
  {
    "numero": 57,
    "nombre": "La Rivalidad",
    "tipo": "menor",
    "astrologia": "Júpiter · Defensa firme del propio valor",
    "deidadOPlaneta": "Júpiter",
    "numerologia": 3,
    "derecho": "Asuntos delicados que se resuelven bien combinando cautela y seguridad propia.",
    "invertido": "Oposición o críticas externas que ponen a prueba tu serenidad.",
    "consejo": "Enfocate en hacer excelente tu parte en lugar de compararte con la carrera ajena."
  },
  {
    "numero": 58,
    "nombre": "La Recapacitación",
    "tipo": "menor",
    "astrologia": "Urano · Estrategia y reconsideración lúcida",
    "deidadOPlaneta": "Urano",
    "numerologia": 4,
    "derecho": "Deseo firme de superación, esfuerzo renovado y lucidez para ajustar planes.",
    "invertido": "Aviso de descuidos o comentarios injustos que se aclaran con calma y pruebas.",
    "consejo": "Cambiar de opinión cuando descubrís algo mejor es señal de inteligencia, no de debilidad."
  },
  {
    "numero": 59,
    "nombre": "El Descubrimiento",
    "tipo": "menor",
    "astrologia": "Mercurio · Hallazgo y noticias clave",
    "deidadOPlaneta": "Mercurio",
    "numerologia": 5,
    "derecho": "Autorizaciones aprobadas, viajes, mensajes esperados y hallazgos que abren puertas.",
    "invertido": "Contradicciones menores o demoras breves en una noticia que ya está en camino.",
    "consejo": "Mantené los ojos curiosos: una conversación sencilla hoy puede traerte el dato que buscabas."
  },
  {
    "numero": 60,
    "nombre": "El Progreso",
    "tipo": "menor",
    "astrologia": "Venus · Mejora continua y evolución",
    "deidadOPlaneta": "Venus",
    "numerologia": 6,
    "derecho": "Aprender, evolucionar, crecer de forma sostenida y mejorar tu bienestar cotidiano.",
    "invertido": "Tropiezos materiales pequeños o cansancio pasajero que se supera sin apuro.",
    "consejo": "Celebrá cada mejora concreta del camino: avanzar un poco cada semana cambia todo el año."
  },
  {
    "numero": 61,
    "nombre": "La Soledad",
    "tipo": "menor",
    "astrologia": "Neptuno · Retraimiento fértil y autocuidado",
    "deidadOPlaneta": "Neptuno",
    "numerologia": 7,
    "derecho": "Economía cuidada, comportamiento recto, prudencia y espacio propio reparador.",
    "invertido": "Aislamiento excesivo que pide volver a abrir la puerta a un café con amigos.",
    "consejo": "Disfrutá tu tiempo a solas para recargarte, sin olvidar a quienes disfrutan tu compañía."
  },
  {
    "numero": 62,
    "nombre": "La Autoridad",
    "tipo": "menor",
    "astrologia": "Saturno · Autoridad justa y mediación",
    "deidadOPlaneta": "Saturno",
    "numerologia": 8,
    "derecho": "Mediador amable, equilibrio en acuerdos y liderazgo que ordena sin lastimar.",
    "invertido": "Rigidez o rupturas evitables si se escucha primero a la otra parte.",
    "consejo": "Ejercé tu criterio con serenidad y respeto: la autoridad genuina siempre construye confianza."
  },
  {
    "numero": 63,
    "nombre": "La Comunión",
    "tipo": "menor",
    "astrologia": "Marte · Unión y afinidad activa",
    "deidadOPlaneta": "Marte",
    "numerologia": 9,
    "derecho": "Afecto recíproco, cariño sincero, ayuda mutua e ideales compartidos en armonía.",
    "invertido": "Frialdad pasajera que se derrite dando el primer paso hacia la reconciliación.",
    "consejo": "Cuidá los espacios compartidos: caminar acompañado vuelve más liviana cualquier cuesta."
  },
  {
    "numero": 64,
    "nombre": "La Condescendencia",
    "tipo": "menor",
    "astrologia": "Sol · Gentileza y trato noble",
    "deidadOPlaneta": "Sol",
    "numerologia": 1,
    "derecho": "Superar una empresa difícil con tacto y disfrutar un momento amoroso cálido.",
    "invertido": "Presión excesiva o enojo contenido que pide expresarse con claridad respetuosa.",
    "consejo": "La gentileza sincera abre más puertas que la dureza, siempre que no signifique callar lo justo."
  },
  {
    "numero": 65,
    "nombre": "El Aprendizaje",
    "tipo": "menor",
    "astrologia": "Luna · Enseñanza y acompañamiento",
    "deidadOPlaneta": "Luna",
    "numerologia": 2,
    "derecho": "Progreso real gracias a la guía, protección y experiencia de alguien generoso.",
    "invertido": "Baja momentánea de ritmo que invita a practicar con paciencia antes de rendir.",
    "consejo": "Mantené mente de aprendiz: siempre hay un oficio o hábito nuevo capaz de alegrarte la etapa."
  },
  {
    "numero": 66,
    "nombre": "La Perplejidad",
    "tipo": "menor",
    "astrologia": "Júpiter · Sorpresas y apoyo inesperado",
    "deidadOPlaneta": "Júpiter",
    "numerologia": 3,
    "derecho": "Bienestar que llega de la mano de alguien influyente o un gesto generoso inesperado.",
    "invertido": "Duda momentánea o asunto temporalmente detenido hasta contar con más claridad.",
    "consejo": "No te paralices si algo sorprende tus planes: preguntá, observá y aceptá ayuda valiosa."
  },
  {
    "numero": 67,
    "nombre": "La Amistad",
    "tipo": "menor",
    "astrologia": "Urano · Espiritualidad y lazo fraterno",
    "deidadOPlaneta": "Urano",
    "numerologia": 4,
    "derecho": "Amistad sincera, afectos leales, calma compartida y conversaciones que sanan.",
    "invertido": "Malentendido menor con alguien querido que se aclara rápido con un mensaje franco.",
    "consejo": "Escribile hoy a ese amigo que hace días tenés presente: los buenos lazos se riegan con gestos simples."
  },
  {
    "numero": 68,
    "nombre": "La Inversión",
    "tipo": "menor",
    "astrologia": "Mercurio · Prosperidad e inteligencia financiera",
    "deidadOPlaneta": "Mercurio",
    "numerologia": 5,
    "derecho": "Riqueza material bien ganada, generosidad, acierto e inteligencia práctica.",
    "invertido": "Descuido económico por confiar sin revisar en propuestas interesadas.",
    "consejo": "Invertí tiempo, afecto y recursos donde veas transparencia, cuidado y horizonte real."
  },
  {
    "numero": 69,
    "nombre": "El Azar",
    "tipo": "menor",
    "astrologia": "Venus · Sincronicidad favorable",
    "deidadOPlaneta": "Venus",
    "numerologia": 6,
    "derecho": "Retribución justa, mejora inesperada, recompensa, cambio favorable y acierto oportuno.",
    "invertido": "Demora temporal en un proyecto útil que igual sigue bien encaminado.",
    "consejo": "Estate atento a las coincidencias lindas: la buena suerte suele favorecer a quien ya está en movimiento."
  },
  {
    "numero": 70,
    "nombre": "La Ayuda",
    "tipo": "menor",
    "astrologia": "Neptuno · Profundidad y apoyo solidario",
    "deidadOPlaneta": "Neptuno",
    "numerologia": 7,
    "derecho": "Afecto concreto, promesa cumplida, mano tendida y progreso compartido.",
    "invertido": "Expectativas demoradas o beneficio que llega por una vía distinta a la imaginada.",
    "consejo": "Tanto pedir ayuda como ofrecerla con humildad fortalece el puente entre las personas."
  },
  {
    "numero": 71,
    "nombre": "La Codicia",
    "tipo": "menor",
    "astrologia": "Saturno · Conservadurismo y medida",
    "deidadOPlaneta": "Saturno",
    "numerologia": 8,
    "derecho": "Cuidar con prudencia tu trabajo, tus ahorros y la estabilidad de tu casa.",
    "invertido": "Exceso de apego material o apuro por acumular descuidando el disfrute del presente.",
    "consejo": "Valorá lo que ya construiste: la seguridad real nace de administrar bien sin perder generosidad."
  },
  {
    "numero": 72,
    "nombre": "La Purificación",
    "tipo": "menor",
    "astrologia": "Marte · Belleza y claridad renovada",
    "deidadOPlaneta": "Marte",
    "numerologia": 9,
    "derecho": "Sencillez luminosa, buena adquisición, alivio y noticia agradable en camino.",
    "invertido": "Esfuerzo intenso de orden que termina desembocando en buena suerte y paz.",
    "consejo": "Simplificá tu espacio y tus compromisos: sacar lo que sobra deja entrar aire limpio."
  },
  {
    "numero": 73,
    "nombre": "El Amor y el Deseo",
    "tipo": "menor",
    "astrologia": "Sol · Enamoramiento y vitalidad afectiva",
    "deidadOPlaneta": "Sol",
    "numerologia": 1,
    "derecho": "Enamoramiento vivo, pasión correspondida, alegría compartida y bienes esperados.",
    "invertido": "Entorno poco sincero o desorden afectivo que pide cuidar primero tu dignidad.",
    "consejo": "Expresá tu cariño con hechos claros: el amor crece cuando se celebra todos los días."
  },
  {
    "numero": 74,
    "nombre": "La Ofrenda",
    "tipo": "menor",
    "astrologia": "Luna · Comienzo, nacimiento y dedicación",
    "deidadOPlaneta": "Luna",
    "numerologia": 2,
    "derecho": "Dedicación noble, equilibrio, inspiración afectiva y amor expresado con gestos.",
    "invertido": "Enfriamiento del interés o esfuerzo no correspondido que conviene reequilibrar.",
    "consejo": "Un detalle sincero hecho con dedicación vale infinitamente más que cualquier regalo costoso sin alma."
  },
  {
    "numero": 75,
    "nombre": "El Reparto",
    "tipo": "menor",
    "astrologia": "Júpiter · Reparto equitativo y abundancia",
    "deidadOPlaneta": "Júpiter",
    "numerologia": 3,
    "derecho": "Ascenso merecido, legado justo, reconocimiento económico y prosperidad compartida.",
    "invertido": "Cuidado atento de nuevos comienzos o asuntos familiares que piden equidad.",
    "consejo": "Cuando repartís crédito, tiempo y frutos con justicia, todo tu equipo y tu casa prosperan."
  },
  {
    "numero": 76,
    "nombre": "El Dispensador",
    "tipo": "menor",
    "astrologia": "Urano · Dar suerte y abrir caminos",
    "deidadOPlaneta": "Urano",
    "numerologia": 4,
    "derecho": "Trabajo abundante, reconocimiento merecido y nacimiento de un proyecto valioso.",
    "invertido": "Humor cambiante o dispersión que se ordena volviendo a tus prioridades.",
    "consejo": "Agradecé las puertas que se abren hoy y devolvé el gesto abriendo paso a alguien más."
  },
  {
    "numero": 77,
    "nombre": "El Desconcierto",
    "tipo": "menor",
    "astrologia": "Mercurio · Indecisión antes de la claridad",
    "deidadOPlaneta": "Mercurio",
    "numerologia": 5,
    "derecho": "Augurios de buena suerte que aparecen apenas atravesás un momento de duda.",
    "invertido": "Confusión breve o imprevisto menor que se ordena tomando distancia un día.",
    "consejo": "No decidas apurado en medio del ruido: dormilo una noche y mañana la respuesta se ve limpia."
  },
  {
    "numero": 78,
    "nombre": "El Renacimiento",
    "tipo": "menor",
    "astrologia": "Venus · Razón de vivir y plenitud renovada",
    "deidadOPlaneta": "Venus",
    "numerologia": 6,
    "derecho": "Placer genuino, honradez, fortuna serena y satisfacción profunda con la vida.",
    "invertido": "Objetivos finalmente logrados tras haber atravesado una etapa exigente.",
    "consejo": "Celebrá este nuevo comienzo con gratitud abierta: la vida siempre guarda capítulos hermosos por estrenar."
  }
];

export const TAROT_TIRADAS: EsquemaTiradaTarot[] = [
  {
    "id": "carta-del-dia",
    "nombre": "Carta del Día o Consejo de Cumpleaños",
    "referenciaTradicional": "Lectura sintética de enfoque diario",
    "cantidadCartas": 1,
    "resumen": "Una sola lámina para enfocar tu intención del día, inspirar una dedicatoria o recibir un consejo sereno.",
    "comoLeer": "Leé primero la esencia de la carta y luego su consejo práctico para aplicarlo hoy mismo sin sobrecargar la mente.",
    "posiciones": [
      {
        "indice": 1,
        "etiqueta": "Consejo central del momento",
        "guia": "Energía principal que conviene honrar hoy o regalar en una dedicatoria.",
        "esRegente": true
      }
    ]
  },
  {
    "id": "pasado-presente-futuro",
    "nombre": "Pasado, Presente y Futuro",
    "referenciaTradicional": "Versión ágil del Esquema III",
    "cantidadCartas": 3,
    "resumen": "Tres láminas que conectan lo que traés aprendido, la escena actual y la tendencia más fértil hacia adelante.",
    "comoLeer": "Observá cómo evoluciona el hilo entre las tres cartas: el presente siempre es el puente que transforma lo vivido en horizonte.",
    "posiciones": [
      {
        "indice": 1,
        "etiqueta": "1 · Raíz del pasado",
        "guia": "Aprendizaje reciente o causa que explica dónde estás hoy."
      },
      {
        "indice": 2,
        "etiqueta": "2 · Clave del presente",
        "guia": "Actitud central y recurso disponible en este momento.",
        "esRegente": true
      },
      {
        "indice": 3,
        "etiqueta": "3 · Tendencia futura",
        "guia": "Camino probable si sostenés esta dirección con conciencia."
      }
    ]
  },
  {
    "id": "cuadrado-corazon",
    "nombre": "Cuadrado del Corazón",
    "referenciaTradicional": "Sistema 2 tradicional (4 cartas + mentora)",
    "cantidadCartas": 5,
    "resumen": "Cuatro láminas dedicadas a vínculos, afectos y reciprocidad, coronadas por una quinta carta mentora que resume la respuesta.",
    "comoLeer": "Revisá los cuatro ángulos del vínculo (cómo estás vos, qué aporta la otra persona, el lazo común y el cuidado necesario) y cerrá con la carta mentora.",
    "posiciones": [
      {
        "indice": 1,
        "etiqueta": "1 · Tu corazón hoy",
        "guia": "Lo que sentís y ofrecés en este vínculo o etapa afectiva."
      },
      {
        "indice": 2,
        "etiqueta": "2 · La otra mirada",
        "guia": "Energía del entorno o de la persona por la que consultás."
      },
      {
        "indice": 3,
        "etiqueta": "3 · Puente que une",
        "guia": "Afinidad real y punto de encuentro que sostiene el afecto."
      },
      {
        "indice": 4,
        "etiqueta": "4 · Cuidado necesario",
        "guia": "Desafío o detalle a cuidar con diálogo sereno."
      },
      {
        "indice": 5,
        "etiqueta": "5 · Carta Mentora",
        "guia": "Síntesis orientadora del corazón para decidir con paz.",
        "esRegente": true
      }
    ]
  },
  {
    "id": "respuesta-destino",
    "nombre": "La Respuesta del Destino",
    "referenciaTradicional": "Esquema I clásico (7 cartas con eje regente #4)",
    "cantidadCartas": 7,
    "resumen": "La tirada emblema del Tarot Egipcio: siete cartas en fila donde la carta 4 actúa como regente y los pares extremos (1-7, 2-6, 3-5) dialogan entre sí.",
    "comoLeer": "Empezá observando la carta 4 (eje central), luego combiná los extremos 1 con 7 (origen y desenlace), 2 con 6 (recursos y obstáculos) y 3 con 5 (entorno y acción inmediata).",
    "posiciones": [
      {
        "indice": 1,
        "etiqueta": "1 · Origen de la consulta",
        "guia": "Punto de partida real del tema que traés (dialoga con la 7)."
      },
      {
        "indice": 2,
        "etiqueta": "2 · Recurso a favor",
        "guia": "Fortaleza interna o apoyo disponible (dialoga con la 6)."
      },
      {
        "indice": 3,
        "etiqueta": "3 · Entorno inmediato",
        "guia": "Clima familiar, afectivo o laboral cercano (dialoga con la 5)."
      },
      {
        "indice": 4,
        "etiqueta": "4 · Carta Regente Central",
        "guia": "Corazón de la tirada: la clave maestra que ordena todo el cuadro.",
        "esRegente": true
      },
      {
        "indice": 5,
        "etiqueta": "5 · Acción oportuna",
        "guia": "Paso concreto que conviene dar pronto (dialoga con la 3)."
      },
      {
        "indice": 6,
        "etiqueta": "6 · Prueba a superar",
        "guia": "Hábito o traba que pide atención serena (dialoga con la 2)."
      },
      {
        "indice": 7,
        "etiqueta": "7 · Síntesis y desenlace",
        "guia": "Fruto natural hacia el que tiende la consulta (dialoga con la 1)."
      }
    ]
  }
];

export const TAROT_MAYORES_RESUMEN: ArcanoMayorResumen[] = [
  {
    "numero": 1,
    "romano": "I",
    "slug": "el-mago",
    "nombre": "El Mago",
    "deidad": "Osiris y Thot",
    "astrologia": "Sol en Leo",
    "numerologia": 1,
    "esencia": "Voluntad consciente, destreza práctica y capacidad de convertir una idea en realidad concreta.",
    "aforismo": "Sé en tus obras como eres en tus pensamientos.",
    "consejo": "Ideal para saludar a alguien que arranca un año lleno de proyectos propios, emprendimientos o decisiones valientes. Reconocé su talento real y animá ese primer paso que viene postergando."
  },
  {
    "numero": 2,
    "romano": "II",
    "slug": "la-suma-sacerdotisa",
    "nombre": "La Suma Sacerdotisa",
    "deidad": "Isis",
    "astrologia": "Luna en Cáncer",
    "numerologia": 2,
    "esencia": "Intuición profunda, prudencia afectiva, memoria sabia y escucha interior antes de actuar.",
    "aforismo": "El viento y las olas van siempre a favor de quien sabe navegar.",
    "consejo": "Perfecto para dedicar a personas intuitivas, reservadas y leales que sostienen a su entorno con calma y buen consejo. Valorá su escucha silenciosa y deseales paz genuina."
  },
  {
    "numero": 3,
    "romano": "III",
    "slug": "la-emperatriz",
    "nombre": "La Emperatriz",
    "deidad": "Neftis",
    "astrologia": "Júpiter en Sagitario",
    "numerologia": 3,
    "esencia": "Creatividad fértil, alegría vital, prosperidad compartida y cuidado armonioso del entorno.",
    "aforismo": "Tejiendo está tu telar, telas para tu uso y telas que no has de usar.",
    "consejo": "Ideal para madres, artistas, anfitrionas, emprendedores creativos o personas de Sagitario que disfrutan expandirse y compartir alegría alrededor de una mesa abundante."
  },
  {
    "numero": 4,
    "romano": "IV",
    "slug": "el-emperador",
    "nombre": "El Emperador",
    "deidad": "Horus",
    "astrologia": "Urano en Acuario",
    "numerologia": 4,
    "esencia": "Estructura sólida, autoridad serena, responsabilidad cumplida y estabilidad construida paso a paso.",
    "aforismo": "Al trabajo de tus manos da bendición, y en el del pensamiento pon corazón.",
    "consejo": "Muy adecuado para padres, referentes familiares, colegas confiables o personas que sostienen la casa y el trabajo con responsabilidad constante."
  },
  {
    "numero": 5,
    "romano": "V",
    "slug": "el-hierofante",
    "nombre": "El Hierofante",
    "deidad": "Seth y la Ley Sagrada",
    "astrologia": "Mercurio en Virgo",
    "numerologia": 5,
    "esencia": "Transmisión de saber, autoridad moral, buen consejo y respeto por los valores que ordenan la vida.",
    "aforismo": "De oídas te había conocido; mas ahora mis ojos te ven y mi corazón te siente.",
    "consejo": "Excelente para docentes, abuelos, mentores, amigos de buen criterio o personas de Virgo cuya experiencia práctica siempre aclara dudas."
  },
  {
    "numero": 6,
    "romano": "VI",
    "slug": "la-indecision",
    "nombre": "La Indecisión",
    "deidad": "Amón",
    "astrologia": "Venus en Tauro",
    "numerologia": 6,
    "esencia": "Libre albedrío, elección desde el corazón, amor responsable y armonía entre caminos distintos.",
    "aforismo": "Trabajos me das, Señor, mas con ellos fortaleza.",
    "consejo": "Hermoso para dedicar a parejas, amigos que arrancan una nueva etapa o personas de Tauro que valoran los vínculos estables, la belleza y la calma compartida."
  },
  {
    "numero": 7,
    "romano": "VII",
    "slug": "el-carro",
    "nombre": "El Carro",
    "deidad": "Anubis",
    "astrologia": "Neptuno en Piscis",
    "numerologia": 7,
    "esencia": "Avance decidido, victoria merecida, autonomía personal y equilibrio de fuerzas opuestas en movimiento.",
    "aforismo": "Cuando la ciencia entra en tu corazón y la sabiduría es dulce a tu alma, pide y te será dado.",
    "consejo": "Ideal para felicitar a quien egresa, se muda, emprende un viaje o celebra un año de conquistas personales tras haber sostenido el timón con paciencia."
  },
  {
    "numero": 8,
    "romano": "VIII",
    "slug": "la-justicia",
    "nombre": "La Justicia",
    "deidad": "Maat",
    "astrologia": "Saturno en Capricornio",
    "numerologia": 8,
    "esencia": "Verdad serena, recompensa justa al esfuerzo, disciplina honesta y equilibrio en los acuerdos.",
    "aforismo": "Edifica un altar en tu corazón, mas no hagas de tu corazón un altar.",
    "consejo": "Especial para personas íntegras, responsables y rectas —muy afín a Capricornio— a quienes conviene agradecer su honestidad y desearles cosecha justa sin sobreexigencia."
  },
  {
    "numero": 9,
    "romano": "IX",
    "slug": "el-ermitano",
    "nombre": "El Ermitaño",
    "deidad": "Khonsu (Konsu)",
    "astrologia": "Marte en Aries",
    "numerologia": 9,
    "esencia": "Madurez reflexiva, faro propio en la noche, prudencia sabia y claridad para cerrar un ciclo antes de abrir otro.",
    "aforismo": "Sube al monte y contempla la tierra prometida; mas no te digo que entrarás en ella.",
    "consejo": "Muy significativo para cumpleaños de cambio de década (30, 40, 50, 60 o más) o para personas reflexivas que valoran la profundidad por encima del ruido."
  },
  {
    "numero": 10,
    "romano": "X",
    "slug": "la-rueda-de-la-fortuna",
    "nombre": "La Rueda de la Fortuna",
    "deidad": "Horus, Anubis y Mut",
    "astrologia": "Plutón en Escorpio",
    "numerologia": 1,
    "esencia": "Giro oportuno de la suerte, ciclos que se renuevan y habilidad para aprovechar el cambio a favor.",
    "aforismo": "Costoso es el saber que compras con la experiencia, y más costoso el que te falta comprar.",
    "consejo": "Perfecto para el día del cumpleaños, que es literalmente una vuelta completa de la rueda solar: deseá giros lindos, sorpresas a favor y frescura para disfrutar lo nuevo."
  },
  {
    "numero": 11,
    "romano": "XI",
    "slug": "la-fuerza",
    "nombre": "La Fuerza",
    "deidad": "Sekmet",
    "astrologia": "Aries y el Sol",
    "numerologia": 2,
    "esencia": "Coraje sereno, persuasión cálida, vitalidad íntegra y capacidad de domar desafíos sin brusquedad.",
    "aforismo": "Gozoso en la esperanza, sufrido en la tribulación, sé constante en la oración.",
    "consejo": "Ideal para celebrar a personas valientes que atravesaron un año exigente con entereza, así como a nacidos bajo Aries y Leo."
  },
  {
    "numero": 12,
    "romano": "XII",
    "slug": "el-apostolado",
    "nombre": "El Apostolado",
    "deidad": "Ptah",
    "astrologia": "Tauro y la Luna",
    "numerologia": 3,
    "esencia": "Mirar la realidad desde un ángulo nuevo, entrega generosa y pausa consciente que revela soluciones inesperadas.",
    "aforismo": "Aunque el sol te fatigue de día y la luna te contriste de noche, no lleves tu pie al resbaladero ni duermas cuando haces guardia.",
    "consejo": "Conmovedor para quienes cuidan a otros con vocación sincera o atraviesan un cambio de mirada profundo: deseales libertad, descanso y reciprocidad afectiva."
  },
  {
    "numero": 13,
    "romano": "XIII",
    "slug": "la-muerte",
    "nombre": "La Muerte",
    "deidad": "Amón-Ra",
    "astrologia": "Géminis y Mercurio",
    "numerologia": 4,
    "esencia": "Transformación auténtica, despedida sana de etapas cumplidas y renacimiento hacia una vida más verdadera.",
    "aforismo": "La noche ha pasado y llegó el nuevo día. Vístete pues con las armas de la luz.",
    "consejo": "Especial para alguien que deja atrás un año complejo y estrena un capítulo completamente nuevo: deseá alivio, aire fresco y un amanecer luminoso."
  },
  {
    "numero": 14,
    "romano": "XIV",
    "slug": "la-templanza",
    "nombre": "La Templanza",
    "deidad": "Neferten",
    "astrologia": "Cáncer y Júpiter",
    "numerologia": 5,
    "esencia": "Conciliación serena, medida justa, paciencia sanadora y armonía entre emoción y razón.",
    "aforismo": "No seas como paja delante del viento ni como viento delante de paja.",
    "consejo": "Maravilloso para personas conciliadoras, sensibles y cálidas —en especial Cáncer— o para quien necesita un año más sereno, saludable y equilibrado."
  },
  {
    "numero": 15,
    "romano": "XV",
    "slug": "el-mal",
    "nombre": "El Mal",
    "deidad": "Menkeret y Tifón",
    "astrologia": "Leo y Neptuno",
    "numerologia": 6,
    "esencia": "Energía vital intensa, magnetismo creativo y conciencia lúcida para no quedar atado a miedos ni excesos.",
    "aforismo": "Hicieronme guarda de viñas, y mi viña, que era mía, no guardé.",
    "consejo": "Adecuado para desear libertad interior, límites sanos, pasión bien dirigida y cuidado personal a quien suele entregarse de más o vive todo con intensidad."
  },
  {
    "numero": 16,
    "romano": "XVI",
    "slug": "la-fragilidad",
    "nombre": "La Fragilidad",
    "deidad": "Ra (el rayo solar)",
    "astrologia": "Virgo y Mercurio",
    "numerologia": 7,
    "esencia": "Caída de estructuras rígidas, verdad liberadora y oportunidad de reconstruir sobre cimientos más auténticos.",
    "aforismo": "Luz de amanecer, luz de mediodía, luz de atardecer: lo que importa es que sea luz.",
    "consejo": "Muy valioso para acompañar a quien atravesó un cimbronazo o reinvención reciente: celebrá su lucidez para volver a empezar sobre tierra firme."
  },
  {
    "numero": 17,
    "romano": "XVII",
    "slug": "la-esperanza",
    "nombre": "La Esperanza",
    "deidad": "Khunum y Nut",
    "astrologia": "Libra y Saturno",
    "numerologia": 8,
    "esencia": "Inspiración limpia, esperanza serena, confianza en el porvenir y sanación suave del ánimo.",
    "aforismo": "Unos hombres piden señales para creer, y otros piden sabiduría para obrar; mas el corazón esperanzado lo tiene todo en su esperanza.",
    "consejo": "Hermosísimo para regalar a cualquier persona querida —en especial de Libra— cuando querés transmitir aliento sincero, calma, belleza y confianza en el año que arranca."
  },
  {
    "numero": 18,
    "romano": "XVIII",
    "slug": "el-crepusculo",
    "nombre": "El Crepúsculo",
    "deidad": "Khepri",
    "astrologia": "Escorpio y Urano",
    "numerologia": 9,
    "esencia": "Mundo interior rico, sensibilidad intuitiva, lectura de símbolos y valentía para cruzar la penumbra hacia el alba.",
    "aforismo": "Sea tu caridad granero inagotable y tu paciencia no menos inagotable que tu caridad.",
    "consejo": "Ideal para personas profundas, artísticas o nacidas bajo Escorpio que valoran las charlas nocturnas honestas y la comprensión real."
  },
  {
    "numero": 19,
    "romano": "XIX",
    "slug": "la-inspiracion",
    "nombre": "La Inspiración",
    "deidad": "Geb y Ra solar",
    "astrologia": "Sagitario y Plutón",
    "numerologia": 1,
    "esencia": "Alegría transparente, éxito merecido, amor puro, salud vital y entusiasmo que ilumina a toda la mesa.",
    "aforismo": "Toma el escudo de tu fe y avanza con paso decidido, ya sea en favor del viento o contra todos los vientos.",
    "consejo": "El arcano perfecto por excelencia para cumpleaños luminosos, nacidos bajo Sagitario o personas que irradian optimismo y calidez en cada reunión."
  },
  {
    "numero": 20,
    "romano": "XX",
    "slug": "la-resurreccion",
    "nombre": "La Resurrección",
    "deidad": "Atón (Ba y Ka)",
    "astrologia": "Capricornio y Marte",
    "numerologia": 2,
    "esencia": "Llamado interior a renovarse, reconciliación sana con el pasado, lucidez y segundo aire lleno de propósito.",
    "aforismo": "Flor en el manzano, fruto en la viña, sembrado en madurez.",
    "consejo": "Muy especial para cumpleaños de madurez, reencuentros familiares o personas que están recuperando un sueño postergado con renovada claridad."
  },
  {
    "numero": 21,
    "romano": "XXI",
    "slug": "la-transmutacion",
    "nombre": "La Transmutación",
    "deidad": "Shu",
    "astrologia": "Acuario y Neptuno",
    "numerologia": 3,
    "esencia": "Cumplimiento feliz de un gran ciclo, mérito reconocido, integración plena y apertura al mundo.",
    "aforismo": "En su secreto no entre mi alma, ni en su puerto mi navío.",
    "consejo": "Extraordinario para celebrar grandes logros, aniversarios redondos, graduaciones o cumpleaños de Acuario llenos de horizontes amplios."
  },
  {
    "numero": 22,
    "romano": "XXII",
    "slug": "el-loco",
    "nombre": "El Loco",
    "deidad": "Neith",
    "astrologia": "Piscis y Venus",
    "numerologia": 4,
    "esencia": "Comienzo libre sin prejuicios, asombro intacto, aventura creadora y confianza para abrir rutas inéditas.",
    "aforismo": "En su secreto no entre mi alma, ni en su puerto mi navío; camina despierto hacia el horizonte nuevo.",
    "consejo": "Ideal para espíritus libres, creativos, viajeros, jóvenes que inician una etapa o personas de Piscis que conservan intacta la capacidad de soñar y sorprenderse."
  }
];

export const TAROT_SIGNOS_LOOKUP = [
  {
    "slug": "aries",
    "nombre": "Aries",
    "simbolo": "♈",
    "elemento": "Fuego",
    "rangoTexto": "21 de marzo al 19 de abril",
    "inicioMes": 3,
    "inicioDia": 21,
    "finMes": 4,
    "finDia": 19,
    "mesesSlugs": [
      "cumpleanos-en-marzo",
      "cumpleanos-en-abril"
    ],
    "mesesNombres": [
      "Marzo",
      "Abril"
    ]
  },
  {
    "slug": "tauro",
    "nombre": "Tauro",
    "simbolo": "♉",
    "elemento": "Tierra",
    "rangoTexto": "20 de abril al 20 de mayo",
    "inicioMes": 4,
    "inicioDia": 20,
    "finMes": 5,
    "finDia": 20,
    "mesesSlugs": [
      "cumpleanos-en-abril",
      "cumpleanos-en-mayo"
    ],
    "mesesNombres": [
      "Abril",
      "Mayo"
    ]
  },
  {
    "slug": "geminis",
    "nombre": "Géminis",
    "simbolo": "♊",
    "elemento": "Aire",
    "rangoTexto": "21 de mayo al 20 de junio",
    "inicioMes": 5,
    "inicioDia": 21,
    "finMes": 6,
    "finDia": 20,
    "mesesSlugs": [
      "cumpleanos-en-mayo",
      "cumpleanos-en-junio"
    ],
    "mesesNombres": [
      "Mayo",
      "Junio"
    ]
  },
  {
    "slug": "cancer",
    "nombre": "Cáncer",
    "simbolo": "♋",
    "elemento": "Agua",
    "rangoTexto": "21 de junio al 22 de julio",
    "inicioMes": 6,
    "inicioDia": 21,
    "finMes": 7,
    "finDia": 22,
    "mesesSlugs": [
      "cumpleanos-en-junio",
      "cumpleanos-en-julio"
    ],
    "mesesNombres": [
      "Junio",
      "Julio"
    ]
  },
  {
    "slug": "leo",
    "nombre": "Leo",
    "simbolo": "♌",
    "elemento": "Fuego",
    "rangoTexto": "23 de julio al 22 de agosto",
    "inicioMes": 7,
    "inicioDia": 23,
    "finMes": 8,
    "finDia": 22,
    "mesesSlugs": [
      "cumpleanos-en-julio",
      "cumpleanos-en-agosto"
    ],
    "mesesNombres": [
      "Julio",
      "Agosto"
    ]
  },
  {
    "slug": "virgo",
    "nombre": "Virgo",
    "simbolo": "♍",
    "elemento": "Tierra",
    "rangoTexto": "23 de agosto al 22 de septiembre",
    "inicioMes": 8,
    "inicioDia": 23,
    "finMes": 9,
    "finDia": 22,
    "mesesSlugs": [
      "cumpleanos-en-agosto",
      "cumpleanos-en-septiembre"
    ],
    "mesesNombres": [
      "Agosto",
      "Septiembre"
    ]
  },
  {
    "slug": "libra",
    "nombre": "Libra",
    "simbolo": "♎",
    "elemento": "Aire",
    "rangoTexto": "23 de septiembre al 22 de octubre",
    "inicioMes": 9,
    "inicioDia": 23,
    "finMes": 10,
    "finDia": 22,
    "mesesSlugs": [
      "cumpleanos-en-septiembre",
      "cumpleanos-en-octubre"
    ],
    "mesesNombres": [
      "Septiembre",
      "Octubre"
    ]
  },
  {
    "slug": "escorpio",
    "nombre": "Escorpio",
    "simbolo": "♏",
    "elemento": "Agua",
    "rangoTexto": "23 de octubre al 21 de noviembre",
    "inicioMes": 10,
    "inicioDia": 23,
    "finMes": 11,
    "finDia": 21,
    "mesesSlugs": [
      "cumpleanos-en-octubre",
      "cumpleanos-en-noviembre"
    ],
    "mesesNombres": [
      "Octubre",
      "Noviembre"
    ]
  },
  {
    "slug": "sagitario",
    "nombre": "Sagitario",
    "simbolo": "♐",
    "elemento": "Fuego",
    "rangoTexto": "22 de noviembre al 21 de diciembre",
    "inicioMes": 11,
    "inicioDia": 22,
    "finMes": 12,
    "finDia": 21,
    "mesesSlugs": [
      "cumpleanos-en-noviembre",
      "cumpleanos-en-diciembre"
    ],
    "mesesNombres": [
      "Noviembre",
      "Diciembre"
    ]
  },
  {
    "slug": "capricornio",
    "nombre": "Capricornio",
    "simbolo": "♑",
    "elemento": "Tierra",
    "rangoTexto": "22 de diciembre al 19 de enero",
    "inicioMes": 12,
    "inicioDia": 22,
    "finMes": 1,
    "finDia": 19,
    "mesesSlugs": [
      "cumpleanos-en-diciembre",
      "cumpleanos-en-enero"
    ],
    "mesesNombres": [
      "Diciembre",
      "Enero"
    ]
  },
  {
    "slug": "acuario",
    "nombre": "Acuario",
    "simbolo": "♒",
    "elemento": "Aire",
    "rangoTexto": "20 de enero al 18 de febrero",
    "inicioMes": 1,
    "inicioDia": 20,
    "finMes": 2,
    "finDia": 18,
    "mesesSlugs": [
      "cumpleanos-en-enero",
      "cumpleanos-en-febrero"
    ],
    "mesesNombres": [
      "Enero",
      "Febrero"
    ]
  },
  {
    "slug": "piscis",
    "nombre": "Piscis",
    "simbolo": "♓",
    "elemento": "Agua",
    "rangoTexto": "19 de febrero al 20 de marzo",
    "inicioMes": 2,
    "inicioDia": 19,
    "finMes": 3,
    "finDia": 20,
    "mesesSlugs": [
      "cumpleanos-en-febrero",
      "cumpleanos-en-marzo"
    ],
    "mesesNombres": [
      "Febrero",
      "Marzo"
    ]
  }
];

export const TAROT_MESES_LOOKUP = [
  {
    "mesNum": 1,
    "slug": "cumpleanos-en-enero",
    "nombre": "enero",
    "nombreCap": "Enero"
  },
  {
    "mesNum": 2,
    "slug": "cumpleanos-en-febrero",
    "nombre": "febrero",
    "nombreCap": "Febrero"
  },
  {
    "mesNum": 3,
    "slug": "cumpleanos-en-marzo",
    "nombre": "marzo",
    "nombreCap": "Marzo"
  },
  {
    "mesNum": 4,
    "slug": "cumpleanos-en-abril",
    "nombre": "abril",
    "nombreCap": "Abril"
  },
  {
    "mesNum": 5,
    "slug": "cumpleanos-en-mayo",
    "nombre": "mayo",
    "nombreCap": "Mayo"
  },
  {
    "mesNum": 6,
    "slug": "cumpleanos-en-junio",
    "nombre": "junio",
    "nombreCap": "Junio"
  },
  {
    "mesNum": 7,
    "slug": "cumpleanos-en-julio",
    "nombre": "julio",
    "nombreCap": "Julio"
  },
  {
    "mesNum": 8,
    "slug": "cumpleanos-en-agosto",
    "nombre": "agosto",
    "nombreCap": "Agosto"
  },
  {
    "mesNum": 9,
    "slug": "cumpleanos-en-septiembre",
    "nombre": "septiembre",
    "nombreCap": "Septiembre"
  },
  {
    "mesNum": 10,
    "slug": "cumpleanos-en-octubre",
    "nombre": "octubre",
    "nombreCap": "Octubre"
  },
  {
    "mesNum": 11,
    "slug": "cumpleanos-en-noviembre",
    "nombre": "noviembre",
    "nombreCap": "Noviembre"
  },
  {
    "mesNum": 12,
    "slug": "cumpleanos-en-diciembre",
    "nombre": "diciembre",
    "nombreCap": "Diciembre"
  }
];

export const TAROT_MAYORES_22: ArcanoMayorCompleto[] = [
  {
    "numero": 1,
    "romano": "I",
    "slug": "el-mago",
    "nombre": "El Mago",
    "glyph": "☉",
    "deidad": "Osiris y Thot",
    "astrologia": "Sol en Leo",
    "numerologia": 1,
    "esencia": "Voluntad consciente, destreza práctica y capacidad de convertir una idea en realidad concreta.",
    "aforismo": "Sé en tus obras como eres en tus pensamientos.",
    "consejo": "Ideal para saludar a alguien que arranca un año lleno de proyectos propios, emprendimientos o decisiones valientes. Reconocé su talento real y animá ese primer paso que viene postergando.",
    "derechoResumen": "Señala el arranque de una etapa fértil donde contás con los recursos, la mente despierta y el impulso necesarios para materializar un proyecto. Habla de destreza, iniciativa personal, habilidad comunicativa y valentía para dar el primer paso sin esperar permisos externos.",
    "invertidoResumen": "Advierte indecisión, voluntad dispersa o exceso de duda frente a tus propias capacidades. También invita a revisar si estás postergando una elección importante por miedo a equivocarte o buscando atajos donde hace falta disciplina serena.",
    "signoBadge": "♌ Leo",
    "signoSlug": "leo",
    "titleTag": "El Mago (I) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Mago (Arcano I) en el Tarot Egipcio, sus 3 planos, vínculo con Sol en Leo y 8 dedicatorias.",
    "h1": "El Mago (I): significado, simbolismo y dedicatorias",
    "lead": "El Mago · Principio de la Voluntad Creadora. Voluntad consciente, destreza práctica y capacidad de convertir una idea en realidad concreta. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "I (N.º 1)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Osiris y Thot"
      },
      {
        "label": "Astrología",
        "valor": "Sol en Leo"
      },
      {
        "label": "Letra hebrea",
        "valor": "Aleph (א)"
      },
      {
        "label": "Numerología (1)",
        "valor": "Principio creador y voluntad"
      },
      {
        "label": "Claves esenciales",
        "valor": "Iniciativa creadora · Dominio de herramientas · Confianza lúcida"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano I resuena directamente con Sol en Leo . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/leo/",
        "nombre": "♌ Horóscopo de Leo",
        "rango": "23 de julio al 22 de agosto · Elemento Fuego · 12 frases"
      },
      {
        "href": "/cumpleanos-en-julio/",
        "nombre": "🎂 Cumpleaños en Julio",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-agosto/",
        "nombre": "🎂 Cumpleaños en Agosto",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Señala el arranque de una etapa fértil donde contás con los recursos, la mente despierta y el impulso necesarios para materializar un proyecto. Habla de destreza, iniciativa personal, habilidad comunicativa y valentía para dar el primer paso sin esperar permisos externos.",
    "invertidoDetalle": "Advierte indecisión, voluntad dispersa o exceso de duda frente a tus propias capacidades. También invita a revisar si estás postergando una elección importante por miedo a equivocarte o buscando atajos donde hace falta disciplina serena.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El uraeus solar y el disco alado evocan la inteligencia despierta que baja del cielo hacia la obra humana: toda transformación empieza primero como intención clara."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "El mago sostiene la vara de mando hacia lo alto y señala la mesa con los cuatro elementos simbólicos, recordando que la mente ordenada canaliza energía sin dispersarse."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El ibis sagrado de Thot en la base ancla la sabiduría en el gesto cotidiano: aprender un oficio, escribir con verdad y sostener compromisos concretos."
      }
    ],
    "filosofiaParrafos": [
      "Representa la unidad primordial del número 1 y el puente entre lo invisible y lo tangible. En la tradición del Tarot Egipcio, El Mago recuerda que no sos espectador pasivo de tu destino: cada palabra, decisión y hábito moldea el ciclo que inaugurás.",
      "Ideal para saludar a alguien que arranca un año lleno de proyectos propios, emprendimientos o decisiones valientes. Reconocé su talento real y animá ese primer paso que viene postergando."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu capacidad de crear caminos nuevos hoy se celebra",
        "texto": "Admiro cómo convertís ideas sueltas en hechos reales sin perder la calidez. Que este nuevo año te encuentre con el pulso firme de El Mago, rodeado de personas que valoran tu ingenio y celebran cada paso que das."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Todo lo que necesitás ya vive en tus manos",
        "texto": "Ojalá esta nueva vuelta al sol te confirme lo que quienes te queremos ya vemos hace rato: tenés criterio, corazón y talento de sobra para abrir puertas grandes sin dejar de ser vos."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumpleaños! Voluntad clara y metas en marcha",
        "texto": "Que este ciclo traiga ideas lúcidas, proyectos que avancen sin trabas y alegría en cada comienzo. ¡Muy feliz vuelta al sol!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu iniciativa incansable",
        "texto": "Cuando te proponés algo, hacés que suceda. ¡Feliz cumpleaños y un año brillante lleno de logros propios!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Alineá lo que pensás con lo que construís",
        "texto": "Como enseña el Arcano I del Tarot Egipcio, el verdadero arte está en ser en tus obras lo mismo que sos en tus pensamientos. Que este año nuevo te regale coherencia, foco y satisfacción genuina."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "El primer paso siempre ordena el horizonte",
        "texto": "No hace falta tener todo resuelto para empezar un ciclo hermoso: alcanza con elegir con claridad hacia dónde mirar hoy. Que este cumpleaños sea el inicio de una etapa serena y creadora."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Sabiduría y manos guiadas en este nuevo comienzo",
        "texto": "Damos gracias por tu vida despierta y pedimos a Dios que bendiga tu ingenio, tu trabajo diario y cada decisión que emprendas en este nuevo año."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Luz clara para cada proyecto de tu hogar",
        "texto": "Que nunca te falte paz interior, salud firme ni discernimiento sereno para construir con amor todo lo que soñás para vos y los tuyos."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué significa El Mago en el Tarot Egipcio?",
        "respuesta": "Es el Arcano I y representa el principio de la voluntad creadora, la destreza mental y la capacidad de llevar una idea al plano concreto mediante acción consciente."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se vincula El Mago?",
        "respuesta": "Según la correspondencia tradicional del Tarot Egipcio, El Mago se asocia con el Sol y el signo Leo, compartiendo liderazgo cálido, iniciativa y brillo propio."
      },
      {
        "pregunta": "¿Qué mensaje conviene dedicar cuando sale El Mago en un cumpleaños?",
        "respuesta": "Conviene celebrar la iniciativa de la persona homenajeada, reconocer un talento concreto que demostró en el último año y desearle claridad para los proyectos que inicia."
      }
    ]
  },
  {
    "numero": 2,
    "romano": "II",
    "slug": "la-suma-sacerdotisa",
    "nombre": "La Suma Sacerdotisa",
    "glyph": "☽",
    "deidad": "Isis",
    "astrologia": "Luna en Cáncer",
    "numerologia": 2,
    "esencia": "Intuición profunda, prudencia afectiva, memoria sabia y escucha interior antes de actuar.",
    "aforismo": "El viento y las olas van siempre a favor de quien sabe navegar.",
    "consejo": "Perfecto para dedicar a personas intuitivas, reservadas y leales que sostienen a su entorno con calma y buen consejo. Valorá su escucha silenciosa y deseales paz genuina.",
    "derechoResumen": "Invita a confiar en tu percepción serena, observar antes de apurarte y honrar los tiempos internos. Habla de sentido común, compenetración emocional, prudencia sabia y comprensión profunda de aquello que no siempre se dice en voz alta.",
    "invertidoResumen": "Señala superficialidad pasajera, ruido mental que tapa la intuición o resistencia a escuchar una verdad sencilla que ya conocés por dentro. Sugiere bajar el ritmo y evitar juicios apresurados.",
    "signoBadge": "♋ Cáncer",
    "signoSlug": "cancer",
    "titleTag": "La Suma Sacerdotisa (II) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Suma Sacerdotisa (Arcano II) en el Tarot Egipcio, sus 3 planos, vínculo con Luna en Cáncer y 8 dedicatorias.",
    "h1": "La Suma Sacerdotisa (II): significado, simbolismo y dedicatorias",
    "lead": "La Suma Sacerdotisa · Sabiduría e Intuición Serena. Intuición profunda, prudencia afectiva, memoria sabia y escucha interior antes de actuar. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "II (N.º 2)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Isis"
      },
      {
        "label": "Astrología",
        "valor": "Luna en Cáncer"
      },
      {
        "label": "Letra hebrea",
        "valor": "Beth (ב)"
      },
      {
        "label": "Numerología (2)",
        "valor": "Dualidad fértil y receptividad"
      },
      {
        "label": "Claves esenciales",
        "valor": "Intuición serena · Sabiduría interior · Cuidado silencioso"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano II resuena directamente con Luna en Cáncer . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/cancer/",
        "nombre": "♋ Horóscopo de Cáncer",
        "rango": "21 de junio al 22 de julio · Elemento Agua · 12 frases"
      },
      {
        "href": "/cumpleanos-en-junio/",
        "nombre": "🎂 Cumpleaños en Junio",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-julio/",
        "nombre": "🎂 Cumpleaños en Julio",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Invita a confiar en tu percepción serena, observar antes de apurarte y honrar los tiempos internos. Habla de sentido común, compenetración emocional, prudencia sabia y comprensión profunda de aquello que no siempre se dice en voz alta.",
    "invertidoDetalle": "Señala superficialidad pasajera, ruido mental que tapa la intuición o resistencia a escuchar una verdad sencilla que ya conocés por dentro. Sugiere bajar el ritmo y evitar juicios apresurados.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "Isis coronada entre los cuernos lunares representa el conocimiento que madura en silencio y la luz receptiva que protege el umbral del templo."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Las dos columnas del templo simbolizan la armonía entre razón y sensibilidad: ni frialdad extrema ni impulso ciego, sino discernimiento equilibrado."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El papiro semiabierto recuerda que cada etapa revela su sentido a su debido tiempo y que aprender a esperar también es una forma de sabiduría práctica."
      }
    ],
    "filosofiaParrafos": [
      "El Arcano II encarna la dualidad fecunda del número 2: la mente que observa, la sensibilidad que comprende y la calma que sostiene los vínculos verdaderos. Enseña que escuchar en profundidad ahorra conflictos innecesarios.",
      "Perfecto para dedicar a personas intuitivas, reservadas y leales que sostienen a su entorno con calma y buen consejo. Valorá su escucha silenciosa y deseales paz genuina."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu calma sabia abriga cada charla que compartimos",
        "texto": "Tenés ese don tan poco común de entender lo importante sin necesidad de levantar la voz. ¡Feliz cumpleaños! Que este nuevo año te regale descanso sereno, afectos sinceros y mucha paz en casa."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Gratitud honda por tu intuición y tu cuidado fiel",
        "texto": "Siempre sabés cuándo hablar y cuándo abrazar en silencio. Ojalá esta nueva vuelta al sol te devuelva multiplicada toda la ternura lúcida que entregás a quienes te rodean."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Claridad interior y mesa tranquila",
        "texto": "Que nunca falten las tardes serenas, los libros lindos ni la gente de confianza alrededor tuyo. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu sabiduría discreta",
        "texto": "Gracias por mirar siempre un poco más hondo que el resto. ¡Que tengas un año luminoso y en calma!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Quien sabe navegar lee las aguas con serenidad",
        "texto": "Bajo la luz de La Suma Sacerdotisa, este nuevo año te invita a confiar en tu voz interior sin dejarte apurar por el ruido de afuera. Que cada decisión llegue madura y en paz."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "La sabiduría también florece en las pausas",
        "texto": "No todo se resuelve corriendo: muchas respuestas verdaderas aparecen cuando te regalás silencio y escucha honesta. Feliz cumpleaños y buen rumbo para esta etapa."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Discernimiento y paz divina sobre tu hogar",
        "texto": "Pedimos a Dios que guarde tu corazón sensible, ilumine tus decisiones con prudencia y llene tu casa de serenidad durante todo este año nuevo."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Abrigo espiritual para cada paso que elijas",
        "texto": "Agradecemos tu presencia serena en nuestras vidas y deseamos que la bendición diaria cuide tu salud, tus sueños y a cada persona que amás."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué representa La Suma Sacerdotisa en el Tarot Egipcio?",
        "respuesta": "Es el Arcano II, asociado a la diosa Isis, y simboliza la sabiduría serena, la intuición confiable, la prudencia y la profundidad emocional."
      },
      {
        "pregunta": "¿Qué signo zodiacal corresponde a La Suma Sacerdotisa?",
        "respuesta": "Se vincula directamente con la Luna y el signo Cáncer, resonando con la memoria afectiva, el hogar cuidado y la sensibilidad protectora."
      },
      {
        "pregunta": "¿Cómo interpretar La Suma Sacerdotisa cuando aparece invertida?",
        "respuesta": "Indica que conviene frenar el apuro, evitar decisiones superficiales y volver a escuchar tu propio criterio con calma antes de responder."
      }
    ]
  },
  {
    "numero": 3,
    "romano": "III",
    "slug": "la-emperatriz",
    "nombre": "La Emperatriz",
    "glyph": "♃",
    "deidad": "Neftis",
    "astrologia": "Júpiter en Sagitario",
    "numerologia": 3,
    "esencia": "Creatividad fértil, alegría vital, prosperidad compartida y cuidado armonioso del entorno.",
    "aforismo": "Tejiendo está tu telar, telas para tu uso y telas que no has de usar.",
    "consejo": "Ideal para madres, artistas, anfitrionas, emprendedores creativos o personas de Sagitario que disfrutan expandirse y compartir alegría alrededor de una mesa abundante.",
    "derechoResumen": "Anuncia una etapa expansiva de fertilidad creativa, progreso material y bienestar en el hogar. Favorece nacimientos de proyectos, belleza cotidiana, acuerdos generosos y vínculos cálidos que crecen con naturalidad.",
    "invertidoResumen": "Habla de estancamiento pasajero, fatiga creativa o exceso de preocupación por resultados que todavía están madurando. Pide volver al disfrute sencillo y nutrir primero tu propia energía.",
    "signoBadge": "♐ Sagitario",
    "signoSlug": "sagitario",
    "titleTag": "La Emperatriz (III) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Emperatriz (Arcano III) en el Tarot Egipcio, sus 3 planos, vínculo con Júpiter en Sagitario y 8 dedicatorias.",
    "h1": "La Emperatriz (III): significado, simbolismo y dedicatorias",
    "lead": "La Emperatriz · Fecundidad, Creatividad y Abundancia. Creatividad fértil, alegría vital, prosperidad compartida y cuidado armonioso del entorno. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "III (N.º 3)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Neftis"
      },
      {
        "label": "Astrología",
        "valor": "Júpiter en Sagitario"
      },
      {
        "label": "Letra hebrea",
        "valor": "Ghimel (ג)"
      },
      {
        "label": "Numerología (3)",
        "valor": "Triplicidad y creación viva"
      },
      {
        "label": "Claves esenciales",
        "valor": "Abundancia viva · Creatividad fértil · Armonía afectiva"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano III resuena directamente con Júpiter en Sagitario . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/sagitario/",
        "nombre": "♐ Horóscopo de Sagitario",
        "rango": "22 de noviembre al 21 de diciembre · Elemento Fuego · 12 frases"
      },
      {
        "href": "/cumpleanos-en-noviembre/",
        "nombre": "🎂 Cumpleaños en Noviembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-diciembre/",
        "nombre": "🎂 Cumpleaños en Diciembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Anuncia una etapa expansiva de fertilidad creativa, progreso material y bienestar en el hogar. Favorece nacimientos de proyectos, belleza cotidiana, acuerdos generosos y vínculos cálidos que crecen con naturalidad.",
    "invertidoDetalle": "Habla de estancamiento pasajero, fatiga creativa o exceso de preocupación por resultados que todavía están madurando. Pide volver al disfrute sencillo y nutrir primero tu propia energía.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "Las doce estrellas coronan la escena simbolizando los ciclos completos del año y la abundancia ordenada de la naturaleza."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "El cetro de loto y el águila o ave sagrada evocan la mente creativa que transforma materia prima simple en obras duraderas y bellas."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "La luna bajo sus pies y los frutos de la tierra confirman que la verdadera prosperidad se nota en una mesa compartida, salud y trabajo que da fruto."
      }
    ],
    "filosofiaParrafos": [
      "El número 3 representa la síntesis creadora: cuando la voluntad (1) y la sabiduría receptiva (2) se unen, nace la obra viva (3). La Emperatriz celebra la generosidad de la vida y el placer de cuidar lo que crece.",
      "Ideal para madres, artistas, anfitrionas, emprendedores creativos o personas de Sagitario que disfrutan expandirse y compartir alegría alrededor de una mesa abundante."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Todo lo que tocás con cariño florece a tu alrededor",
        "texto": "Tenés la virtud luminosa de hacer crecer lo bueno donde pasás: proyectos, charlas, plantas y afectos. ¡Muy feliz cumpleaños! Que este año te encuentre cosechando abundancia, salud y muchísima alegría."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Un ciclo fértil para disfrutar tus frutos con calma",
        "texto": "Después de tanto sembrar para los demás, ojalá esta nueva vuelta al sol te regale cosecha generosa, mesa llena de gente querida y tiempo para disfrutar tus propios sueños."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Abundancia, arte y risas compartidas",
        "texto": "Que nunca falten ideas fértiles, buena comida ni motivos lindos para brindar fuerte. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Prosperidad cálida para tu nuevo año",
        "texto": "Celebramos tu generosidad vital y esa chispa creativa que alegra cada encuentro. ¡Feliz vuelta al sol!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Lo que tejés con constancia siempre vuelve en fruto",
        "texto": "La Emperatriz del Tarot Egipcio recuerda que cada gesto generoso suma a una trama más grande. Que este cumpleaños confirme que tu siembra paciente vale cada esfuerzo."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Crear con disfrute vale más que producir con apuro",
        "texto": "Que estos doce meses te inviten a cuidar tus proyectos con placer y sin agotarte, celebrando el proceso tanto como cada logro."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Bendición abundante sobre tu casa y tus manos",
        "texto": "Damos gracias a Dios por tu corazón generoso y pedimos que multiplique el pan compartido, la salud y la paz en cada rincón de tu hogar."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Cosecha serena y gozo en familia este año",
        "texto": "Que la gracia acompañe cada proyecto nuevo que nace en tu vida y te regale un año fecundo, agradecido y sereno."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué simboliza La Emperatriz en el Tarot Egipcio?",
        "respuesta": "Es el Arcano III y encarna la fertilidad creativa, el progreso, la armonía en el hogar y la capacidad de dar vida y forma a proyectos duraderos."
      },
      {
        "pregunta": "¿Con qué signo zodiacal y planeta se relaciona La Emperatriz?",
        "respuesta": "Se vincula con Júpiter y Sagitario, reflejando expansión generosa, optimismo vital y horizontes abiertos."
      },
      {
        "pregunta": "¿Qué consejo deja el aforismo de La Emperatriz?",
        "respuesta": "Recuerda que toda obra humana teje frutos tanto para uno mismo como para quienes vendrán después, invitando a crear con generosidad y constancia."
      }
    ]
  },
  {
    "numero": 4,
    "romano": "IV",
    "slug": "el-emperador",
    "nombre": "El Emperador",
    "glyph": "⛢",
    "deidad": "Horus",
    "astrologia": "Urano en Acuario",
    "numerologia": 4,
    "esencia": "Estructura sólida, autoridad serena, responsabilidad cumplida y estabilidad construida paso a paso.",
    "aforismo": "Al trabajo de tus manos da bendición, y en el del pensamiento pon corazón.",
    "consejo": "Muy adecuado para padres, referentes familiares, colegas confiables o personas que sostienen la casa y el trabajo con responsabilidad constante.",
    "derechoResumen": "Marca consolidación, orden práctico, liderazgo confiable y frutos seguros gracias al esfuerzo sostenido. Habla de proteger lo logrado, tomar decisiones claras y sostener compromisos con palabra firme.",
    "invertidoResumen": "Avisa sobre rigidez excesiva, dificultad para delegar o, en el polo opuesto, falta de orden para sostener un objetivo. Propone firmeza flexible sin perder humanidad.",
    "signoBadge": "♒ Acuario",
    "signoSlug": "acuario",
    "titleTag": "El Emperador (IV) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Emperador (Arcano IV) en el Tarot Egipcio, sus 3 planos, vínculo con Urano en Acuario y 8 dedicatorias.",
    "h1": "El Emperador (IV): significado, simbolismo y dedicatorias",
    "lead": "El Emperador · Orden, Firmeza y Estabilidad Real. Estructura sólida, autoridad serena, responsabilidad cumplida y estabilidad construida paso a paso. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "IV (N.º 4)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Horus"
      },
      {
        "label": "Astrología",
        "valor": "Urano en Acuario"
      },
      {
        "label": "Letra hebrea",
        "valor": "Daleth (ד)"
      },
      {
        "label": "Numerología (4)",
        "valor": "Estabilidad y los cuatro elementos"
      },
      {
        "label": "Claves esenciales",
        "valor": "Estabilidad firme · Autoridad serena · Logro concreto"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano IV resuena directamente con Urano en Acuario . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/acuario/",
        "nombre": "♒ Horóscopo de Acuario",
        "rango": "20 de enero al 18 de febrero · Elemento Aire · 12 frases"
      },
      {
        "href": "/cumpleanos-en-enero/",
        "nombre": "🎂 Cumpleaños en Enero",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-febrero/",
        "nombre": "🎂 Cumpleaños en Febrero",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Marca consolidación, orden práctico, liderazgo confiable y frutos seguros gracias al esfuerzo sostenido. Habla de proteger lo logrado, tomar decisiones claras y sostener compromisos con palabra firme.",
    "invertidoDetalle": "Avisa sobre rigidez excesiva, dificultad para delegar o, en el polo opuesto, falta de orden para sostener un objetivo. Propone firmeza flexible sin perder humanidad.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El disco y el ankh en lo alto recuerdan que la autoridad auténtica no nace de imponer miedo, sino de cuidar el orden y la vida."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "El gobernante sentado de perfil sobre la piedra cúbica muestra claridad de criterio: mirar lejos mientras se mantienen los pies bien apoyados."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El gato o guardián simbólico en el basamento alude a la vigilancia serena de los asuntos domésticos y materiales."
      }
    ],
    "filosofiaParrafos": [
      "El número 4 simboliza los cuatro puntos cardinales y la solidez del cuadrado. En el Tarot Egipcio, El Emperador enseña que las ideas valiosas necesitan estructura diaria para sostenerse en el tiempo.",
      "Muy adecuado para padres, referentes familiares, colegas confiables o personas que sostienen la casa y el trabajo con responsabilidad constante."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu palabra firme nos da tranquilidad todos los días",
        "texto": "Qué enorme fortuna contar con alguien que cumple lo que promete y cuida a los suyos con hechos concretos. ¡Muy feliz cumpleaños! Que este año te regale estabilidad, salud y tiempo para descansar sin cargas."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Orgullo real por todo lo que construiste con esfuerzo",
        "texto": "Nada de lo que lograste fue casualidad: detrás de cada paso hubo constancia, criterio y corazón noble. ¡Feliz vuelta al sol, rodeado del cariño que merecés!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Rumbo claro y logros merecidos",
        "texto": "Por un año sólido, tranquilo y lleno de satisfacciones bien ganadas. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Firmeza serena y buenos proyectos este ciclo",
        "texto": "Gracias por ser siempre punto de apoyo cuando hace falta ordenar el camino. ¡Brindemos fuerte por vos!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "El orden verdadero nace cuando ponés corazón en el pensamiento",
        "texto": "El Emperador del Tarot Egipcio enseña que la firmeza más valiosa une manos trabajadoras con criterio compasivo. Que este nuevo ciclo consolide tus metas con serenidad."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Cimientos firmes para disfrutar la vida sin urgencias",
        "texto": "Construir estabilidad también sirve para abrir espacio al descanso y al afecto. Ojalá estos doce meses te encuentren disfrutando lo logrado con liviandad."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Bendición sobre el trabajo honrado de tus manos",
        "texto": "Pedimos a Dios que prospere tu esfuerzo diario, proteja a tu familia y te conceda sabiduría serena en cada responsabilidad que asumís."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Fortaleza y paz duradera para tu hogar",
        "texto": "Damos gracias por tu guía fiel y deseamos que la salud firme y la calma habiten tu mesa durante todo este nuevo año."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué indica El Emperador en una lectura de Tarot Egipcio?",
        "respuesta": "Representa estabilidad, autoridad serena, orden material, responsabilidad y la concreción de metas gracias a la constancia."
      },
      {
        "pregunta": "¿Qué correspondencia astrológica tiene El Emperador?",
        "respuesta": "En la tradición del Tarot Egipcio corresponde a Urano y Acuario, uniendo visión clara de futuro con estructura concreta."
      },
      {
        "pregunta": "¿Cómo aplicar el mensaje de El Emperador en la vida cotidiana?",
        "respuesta": "Invita a ordenar prioridades, sostener la palabra dada y combinar rigor práctico con calidez humana hacia quienes dependen de vos."
      }
    ]
  },
  {
    "numero": 5,
    "romano": "V",
    "slug": "el-hierofante",
    "nombre": "El Hierofante",
    "glyph": "☿",
    "deidad": "Seth y la Ley Sagrada",
    "astrologia": "Mercurio en Virgo",
    "numerologia": 5,
    "esencia": "Transmisión de saber, autoridad moral, buen consejo y respeto por los valores que ordenan la vida.",
    "aforismo": "De oídas te había conocido; mas ahora mis ojos te ven y mi corazón te siente.",
    "consejo": "Excelente para docentes, abuelos, mentores, amigos de buen criterio o personas de Virgo cuya experiencia práctica siempre aclara dudas.",
    "derechoResumen": "Señala aprendizaje valioso, mentoría oportuna, acuerdos respetuosos y claridad ética. Anuncia el encuentro con un buen consejo, una enseñanza útil o el momento de compartir con otros la experiencia que ya maduraste.",
    "invertidoResumen": "Invita a cuestionar costumbres vacías o dogmas que ya no te representan, evitando tanto la susceptibilidad defensiva como aceptar normas sin reflexión propia.",
    "signoBadge": "♍ Virgo",
    "signoSlug": "virgo",
    "titleTag": "El Hierofante (V) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Hierofante (Arcano V) en el Tarot Egipcio, sus 3 planos, vínculo con Mercurio en Virgo y 8 dedicatorias.",
    "h1": "El Hierofante (V): significado, simbolismo y dedicatorias",
    "lead": "El Hierofante · Enseñanza, Consejo y Puente Ético. Transmisión de saber, autoridad moral, buen consejo y respeto por los valores que ordenan la vida. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "V (N.º 5)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Seth y la Ley Sagrada"
      },
      {
        "label": "Astrología",
        "valor": "Mercurio en Virgo"
      },
      {
        "label": "Letra hebrea",
        "valor": "He (ה)"
      },
      {
        "label": "Numerología (5)",
        "valor": "Espíritu consciente y cambio activo"
      },
      {
        "label": "Claves esenciales",
        "valor": "Buen consejo · Sabiduría compartida · Coherencia ética"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano V resuena directamente con Mercurio en Virgo . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/virgo/",
        "nombre": "♍ Horóscopo de Virgo",
        "rango": "23 de agosto al 22 de septiembre · Elemento Tierra · 12 frases"
      },
      {
        "href": "/cumpleanos-en-agosto/",
        "nombre": "🎂 Cumpleaños en Agosto",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-septiembre/",
        "nombre": "🎂 Cumpleaños en Septiembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Señala aprendizaje valioso, mentoría oportuna, acuerdos respetuosos y claridad ética. Anuncia el encuentro con un buen consejo, una enseñanza útil o el momento de compartir con otros la experiencia que ya maduraste.",
    "invertidoDetalle": "Invita a cuestionar costumbres vacías o dogmas que ya no te representan, evitando tanto la susceptibilidad defensiva como aceptar normas sin reflexión propia.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El triángulo y la luz superior representan la ley que une cielo y tierra cuando la palabra nace de la experiencia vivida y no de la mera repetición."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La figura erguida con el báculo de tres niveles alude a la mente que instruye, escucha y tiende puentes entre generaciones."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "La balanza en la base recuerda que toda enseñanza se verifica en la equidad cotidiana y en el trato respetuoso hacia los demás."
      }
    ],
    "filosofiaParrafos": [
      "El número 5 evoca al ser humano consciente (el pentagrama) por encima de los cuatro elementos. El Hierofante recuerda que el verdadero maestro nunca presume: acompaña con ejemplo coherente.",
      "Excelente para docentes, abuelos, mentores, amigos de buen criterio o personas de Virgo cuya experiencia práctica siempre aclara dudas."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tus consejos honestos siempre llegan en el momento justo",
        "texto": "Hay personas que hablan mucho y personas que, con dos frases claras, te acomodan la semana entera. Vos sos de las segundas. ¡Muy feliz cumpleaños y gracias por tu lucidez generosa!"
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Aprender a tu lado siempre hace más liviano el camino",
        "texto": "Celebramos tu coherencia, tu paciencia para explicar y esa integridad tranquila con la que te manejás en la vida. ¡Que tengas un año lleno de salud y afectos reales!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Sabiduría serena y buenas charlas",
        "texto": "Por otro año compartiendo criterio claro, libros buenos y mesas tranquilas con tu gente. ¡Muy feliz vuelta al sol!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu ejemplo cotidiano",
        "texto": "Enseñás mucho más con cómo vivís que con cualquier discurso. ¡Feliz cumpleaños y un año en paz!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "El conocimiento verdadero se vuelve experiencia viva",
        "texto": "El Hierofante del Tarot Egipcio nos recuerda la diferencia entre saber algo de oídas y sentirlo con el corazón despierto. Que este nuevo año te regale descubrimientos profundos."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Honrar las raíces sin perder la mirada libre",
        "texto": "Ojalá este ciclo combine lo mejor de la experiencia aprendida con la frescura de seguir aprendiendo cada semana."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Sabiduría y palabra justa para iluminar a los tuyos",
        "texto": "Agradecemos a Dios por tu vocación de consejo y pedimos que siga guiando tu criterio con humildad, salud y paz familiar."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Gracia diaria y hogar en armonía este año",
        "texto": "Que nunca falte luz espiritual para discernir lo justo ni gratitud alrededor de tu mesa en este nuevo ciclo."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué significa El Hierofante en el Tarot Egipcio?",
        "respuesta": "Es el Arcano V y simboliza la enseñanza genuina, la autoridad moral, el buen consejo, la tradición viva y el puente entre conocimiento y práctica."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se asocia El Hierofante?",
        "respuesta": "Corresponde a Mercurio y Virgo, signos de claridad analítica, vocación de servicio y cuidado honesto por hacer bien las cosas."
      },
      {
        "pregunta": "¿Qué sugiere El Hierofante cuando aparece en una tirada?",
        "respuesta": "Recomienda escuchar un consejo confiable, estudiar a fondo antes de decidir y actuar en coherencia con tus valores."
      }
    ]
  },
  {
    "numero": 6,
    "romano": "VI",
    "slug": "la-indecision",
    "nombre": "La Indecisión",
    "glyph": "♀",
    "deidad": "Amón",
    "astrologia": "Venus en Tauro",
    "numerologia": 6,
    "esencia": "Libre albedrío, elección desde el corazón, amor responsable y armonía entre caminos distintos.",
    "aforismo": "Trabajos me das, Señor, mas con ellos fortaleza.",
    "consejo": "Hermoso para dedicar a parejas, amigos que arrancan una nueva etapa o personas de Tauro que valoran los vínculos estables, la belleza y la calma compartida.",
    "derechoResumen": "Habla del momento luminoso en que elegís con conciencia: un vínculo que se afirma, una vocación que se decide o una alianza basada en afecto genuino y respeto mutuo. Celebra la belleza de comprometerse sin perder libertad.",
    "invertidoResumen": "Refleja dudas prolongadas, miedo a soltar una opción o decisiones tomadas solo por complacer a terceros. Pide honestidad afectiva para elegir lo que realmente resuena con vos.",
    "signoBadge": "♉ Tauro",
    "signoSlug": "tauro",
    "titleTag": "La Indecisión (VI) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Indecisión (Arcano VI) en el Tarot Egipcio, sus 3 planos, vínculo con Venus en Tauro y 8 dedicatorias.",
    "h1": "La Indecisión (VI): significado, simbolismo y dedicatorias",
    "lead": "La Indecisión (Los Enamorados) · Elección Libre y Amor Consciente. Libre albedrío, elección desde el corazón, amor responsable y armonía entre caminos distintos. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "VI (N.º 6)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Amón"
      },
      {
        "label": "Astrología",
        "valor": "Venus en Tauro"
      },
      {
        "label": "Letra hebrea",
        "valor": "Vau (ו)"
      },
      {
        "label": "Numerología (6)",
        "valor": "Equilibrio de fuerzas y afecto"
      },
      {
        "label": "Claves esenciales",
        "valor": "Libre elección · Amor verdadero · Equilibrio afectivo"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano VI resuena directamente con Venus en Tauro . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/tauro/",
        "nombre": "♉ Horóscopo de Tauro",
        "rango": "20 de abril al 20 de mayo · Elemento Tierra · 12 frases"
      },
      {
        "href": "/cumpleanos-en-abril/",
        "nombre": "🎂 Cumpleaños en Abril",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-mayo/",
        "nombre": "🎂 Cumpleaños en Mayo",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Habla del momento luminoso en que elegís con conciencia: un vínculo que se afirma, una vocación que se decide o una alianza basada en afecto genuino y respeto mutuo. Celebra la belleza de comprometerse sin perder libertad.",
    "invertidoDetalle": "Refleja dudas prolongadas, miedo a soltar una opción o decisiones tomadas solo por complacer a terceros. Pide honestidad afectiva para elegir lo que realmente resuena con vos.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El arquero solar en lo alto recuerda que toda elección auténtica apunta hacia un propósito claro y no se deja llevar solo por la inercia."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La figura central entre dos caminos simboliza la madurez del libre albedrío: elegir implica renunciar a lo accesorio para cuidar lo valioso."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El horizonte abierto en la base invita a dar el paso en lo concreto: expresar afecto, confirmar acuerdos y sostener lo elegido con hechos."
      }
    ],
    "filosofiaParrafos": [
      "El número 6 encarna la armonía de los opuestos y la belleza de Venus. Aunque su nombre egipcio clásico sea La Indecisión, su enseñanza profunda es la responsabilidad gozosa de elegir bien a quién amar y hacia dónde caminar.",
      "Hermoso para dedicar a parejas, amigos que arrancan una nueva etapa o personas de Tauro que valoran los vínculos estables, la belleza y la calma compartida."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Elegir compartir la vida con vos sigue siendo mi mejor acierto",
        "texto": "En un mundo lleno de apuros y dudas, tener un vínculo claro y luminoso es un regalo enorme. ¡Feliz cumpleaños! Que este año multiplique nuestros buenos ratos, la calma y las ganas de seguir eligiéndonos."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Que cada elección de este año nazca desde la paz",
        "texto": "Deseo que esta nueva vuelta al sol te encuentre seguro de tus pasos, rodeado de afectos recíprocos y con el corazón liviano para disfrutar cada día."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Amor claro y caminos que suman",
        "texto": "Que este año te traiga decisiones livianas, buena compañía y muchísimos motivos para sonreír. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por los afectos elegidos con el corazón",
        "texto": "Gracias por caminar cerca con tanta lealtad y belleza cotidiana. ¡Feliz nueva vuelta al sol!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Elegir con conciencia transforma la duda en rumbo",
        "texto": "El Arcano VI enseña que la incertidumbre se disuelve cuando escuchás qué es lo verdaderamente valioso para vos. Que este cumpleaños traiga claridad afectiva y armonía."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "La fortaleza llega junto con cada decisión honesta",
        "texto": "No temas a las encrucijadas: cada paso elegido con verdad te acerca a una vida más tuya. Feliz cumpleaños y excelente nuevo ciclo."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Discernimiento y amor fiel para tu nuevo año",
        "texto": "Pedimos a Dios claridad en tus encrucijadas, paz en tus vínculos queridos y la fortaleza serena que siempre acompaña las decisiones justas."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Armonía y bendición sobre tus afectos más cercanos",
        "texto": "Damos gracias por tu corazón noble y deseamos que la unidad, la salud y el cariño sincero abracen tu casa todo el año."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Por qué el Arcano VI se llama La Indecisión en el Tarot Egipcio?",
        "respuesta": "Porque pone el foco en el libre albedrío y el instante decisivo de elegir entre dos caminos con conciencia, ética y afecto verdadero."
      },
      {
        "pregunta": "¿Con qué signo del zodíaco se conecta el Arcano VI?",
        "respuesta": "Se vincula con Venus y Tauro, resaltando la lealtad afectiva, el disfrute de la belleza y los acuerdos duraderos."
      },
      {
        "pregunta": "¿Tiene significado amoroso La Indecisión?",
        "respuesta": "Sí: en posición derecha augura unión armoniosa, afinidad real y decisiones tomadas desde el cariño genuino."
      }
    ]
  },
  {
    "numero": 7,
    "romano": "VII",
    "slug": "el-carro",
    "nombre": "El Carro",
    "glyph": "♆",
    "deidad": "Anubis",
    "astrologia": "Neptuno en Piscis",
    "numerologia": 7,
    "esencia": "Avance decidido, victoria merecida, autonomía personal y equilibrio de fuerzas opuestas en movimiento.",
    "aforismo": "Cuando la ciencia entra en tu corazón y la sabiduría es dulce a tu alma, pide y te será dado.",
    "consejo": "Ideal para felicitar a quien egresa, se muda, emprende un viaje o celebra un año de conquistas personales tras haber sostenido el timón con paciencia.",
    "derechoResumen": "Anuncia triunfo logrado con temple, avances rápidos, viajes favorables y dominio sereno sobre impulsos contradictorios. Confirma que sos capaz de conducir tus propios proyectos hacia buen puerto.",
    "invertidoResumen": "Advierte demoras temporales, dispersión de energía o intento de forzar un resultado sin revisar antes la dirección. Recomienda ajustar las riendas antes de acelerar.",
    "signoBadge": "♓ Piscis",
    "signoSlug": "piscis",
    "titleTag": "El Carro (VII) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Carro (Arcano VII) en el Tarot Egipcio, sus 3 planos, vínculo con Neptuno en Piscis y 8 dedicatorias.",
    "h1": "El Carro (VII): significado, simbolismo y dedicatorias",
    "lead": "El Carro (El Triunfo) · Victoria, Viaje y Dominio Propio. Avance decidido, victoria merecida, autonomía personal y equilibrio de fuerzas opuestas en movimiento. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "VII (N.º 7)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Anubis"
      },
      {
        "label": "Astrología",
        "valor": "Neptuno en Piscis"
      },
      {
        "label": "Letra hebrea",
        "valor": "Zhain (ז)"
      },
      {
        "label": "Numerología (7)",
        "valor": "Armonía mística y superación"
      },
      {
        "label": "Claves esenciales",
        "valor": "Victoria merecida · Rumbo propio · Viajes y avance"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano VII resuena directamente con Neptuno en Piscis . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/piscis/",
        "nombre": "♓ Horóscopo de Piscis",
        "rango": "19 de febrero al 20 de marzo · Elemento Agua · 12 frases"
      },
      {
        "href": "/cumpleanos-en-febrero/",
        "nombre": "🎂 Cumpleaños en Febrero",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-marzo/",
        "nombre": "🎂 Cumpleaños en Marzo",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Anuncia triunfo logrado con temple, avances rápidos, viajes favorables y dominio sereno sobre impulsos contradictorios. Confirma que sos capaz de conducir tus propios proyectos hacia buen puerto.",
    "invertidoDetalle": "Advierte demoras temporales, dispersión de energía o intento de forzar un resultado sin revisar antes la dirección. Recomienda ajustar las riendas antes de acelerar.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El baldaquino estrellado sobre el auriga señala protección en el viaje y guía alta cuando el propósito es limpio."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Las dos esfinges —clara y oscura— representan fuerzas contrarias que solo avanzan en línea recta cuando la mente las conduce con serenidad."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Las ruedas del carro en marcha anuncian movimiento concreto: traslados, mudanzas, proyectos que despegan y metas cumplidas."
      }
    ],
    "filosofiaParrafos": [
      "El número 7 simboliza la armonía mística en acción. El Carro enseña que el verdadero triunfo no consiste en aplastar obstáculos a la fuerza, sino en alinear cabeza, emoción y propósito en una misma dirección.",
      "Ideal para felicitar a quien egresa, se muda, emprende un viaje o celebra un año de conquistas personales tras haber sostenido el timón con paciencia."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Qué orgullo ver cómo conducís tu vida con frente alta",
        "texto": "Superaste curvas difíciles sin perder la dulzura ni el norte, y hoy celebramos cada avance tuyo con el corazón lleno. ¡Muy feliz cumpleaños! Que este año traiga rutas abiertas y victorias limpias."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Buen viento y camino despejado para esta nueva vuelta al sol",
        "texto": "Ojalá los próximos doce meses te regalen viajes lindos, proyectos que avancen con fluidez y la satisfacción serena de llegar adonde venís soñando."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Rumbo firme y horizonte abierto",
        "texto": "Que el viento acompañe cada plan nuevo y nunca te falten ganas de avanzar. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tus conquistas de este año",
        "texto": "Llevás las riendas con temple y corazón grande. ¡Que sea un año de grandes alegrías!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "El triunfo verdadero empieza en el dominio sereno de uno mismo",
        "texto": "El Carro del Tarot Egipcio recuerda que las fuerzas contrarias se vuelven impulso cuando el corazón sabe hacia dónde va. Feliz cumpleaños y gran viaje en este nuevo ciclo."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Avanzar sin perder la calma es la mejor velocidad",
        "texto": "Que este año te encuentre moviéndote hacia tus metas con claridad, disfrutando el paisaje y celebrando cada kilómetro recorrido."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Pasos cuidados en cada viaje y proyecto nuevo",
        "texto": "Pedimos a Dios que guarde tus salidas y tus regresos, bendiga tu esfuerzo y te conceda victorias llenas de paz y gratitud."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Dirección sabia y protección fiel este año",
        "texto": "Que la luz divina despeje el camino delante tuyo y acompañe a tu familia en cada meta nueva que inicien."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué anuncia El Carro en el Tarot Egipcio?",
        "respuesta": "Anuncia triunfo merecido, progreso firme, viajes positivos y la capacidad de coordinar emociones e ideas para avanzar sin desviarte."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se vincula El Carro?",
        "respuesta": "Se relaciona con Neptuno y Piscis, uniendo sensibilidad imaginativa con la fuerza serena para materializar sueños."
      },
      {
        "pregunta": "¿Qué simbolizan las dos esfinges de El Carro?",
        "respuesta": "Representan los impulsos opuestos —luz y sombra, acción y pausa— que deben armonizarse mediante el autocontrol para llegar a destino."
      }
    ]
  },
  {
    "numero": 8,
    "romano": "VIII",
    "slug": "la-justicia",
    "nombre": "La Justicia",
    "glyph": "♄",
    "deidad": "Maat",
    "astrologia": "Saturno en Capricornio",
    "numerologia": 8,
    "esencia": "Verdad serena, recompensa justa al esfuerzo, disciplina honesta y equilibrio en los acuerdos.",
    "aforismo": "Edifica un altar en tu corazón, mas no hagas de tu corazón un altar.",
    "consejo": "Especial para personas íntegras, responsables y rectas —muy afín a Capricornio— a quienes conviene agradecer su honestidad y desearles cosecha justa sin sobreexigencia.",
    "derechoResumen": "Habla de acuerdos limpios, reconocimientos merecidos, orden legal o personal y tranquilidad de conciencia. Confirma que lo sembrado con rectitud encuentra su justa retribución.",
    "invertidoResumen": "Alerta sobre desequilibrios, exceso de autoexigencia severa o demoras por asuntos pendientes que necesitan aclararse con transparencia y calma.",
    "signoBadge": "♑ Capricornio",
    "signoSlug": "capricornio",
    "titleTag": "La Justicia (VIII) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Justicia (Arcano VIII) en el Tarot Egipcio, sus 3 planos, vínculo con Saturno en Capricornio y 8 dedicatorias.",
    "h1": "La Justicia (VIII): significado, simbolismo y dedicatorias",
    "lead": "La Justicia · Equidad, Verdad y Balanza de Maat. Verdad serena, recompensa justa al esfuerzo, disciplina honesta y equilibrio en los acuerdos. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "VIII (N.º 8)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Maat"
      },
      {
        "label": "Astrología",
        "valor": "Saturno en Capricornio"
      },
      {
        "label": "Letra hebrea",
        "valor": "Heth (ח)"
      },
      {
        "label": "Numerología (8)",
        "valor": "Equilibrio cósmico y retribución"
      },
      {
        "label": "Claves esenciales",
        "valor": "Equidad clara · Verdad honesta · Cosecha justa"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano VIII resuena directamente con Saturno en Capricornio . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/capricornio/",
        "nombre": "♑ Horóscopo de Capricornio",
        "rango": "22 de diciembre al 19 de enero · Elemento Tierra · 12 frases"
      },
      {
        "href": "/cumpleanos-en-diciembre/",
        "nombre": "🎂 Cumpleaños en Diciembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-enero/",
        "nombre": "🎂 Cumpleaños en Enero",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Habla de acuerdos limpios, reconocimientos merecidos, orden legal o personal y tranquilidad de conciencia. Confirma que lo sembrado con rectitud encuentra su justa retribución.",
    "invertidoDetalle": "Alerta sobre desequilibrios, exceso de autoexigencia severa o demoras por asuntos pendientes que necesitan aclararse con transparencia y calma.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La pluma de Maat representa la verdad liviana como una pluma: vivir sin dobles discursos permite dormir con paz."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La balanza en una mano y la espada en la otra simbolizan discernimiento objetivo: evaluar con claridad y cortar lo que daña sin rencor."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El orden firme del trono expresa compromisos cumplidos, cuentas claras y respeto mutuo en la familia y el trabajo."
      }
    ],
    "filosofiaParrafos": [
      "El número 8 remite al equilibrio cósmico de causa y efecto. En el antiguo Egipto, Maat sostenía la armonía del universo; en tu vida diaria, La Justicia invita a tratarte con la misma equidad con la que tratás a los demás.",
      "Especial para personas íntegras, responsables y rectas —muy afín a Capricornio— a quienes conviene agradecer su honestidad y desearles cosecha justa sin sobreexigencia."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu honestidad limpia hace más confiable cada vínculo",
        "texto": "En tiempos donde tantos dan rodeos, tu rectitud y tu palabra justa valen oro. ¡Muy feliz cumpleaños! Que este año te devuelva con creces todo el bien que hacés sin hacer ruido."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Merecés cosechar paz y reconocimiento real este año",
        "texto": "Trabajaste con constancia y corazón derecho; ojalá esta nueva vuelta al sol te encuentre celebrando recompensas justas y descanso merecido junto a los tuyos."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Equilibrio, verdad y calma",
        "texto": "Que la balanza se incline siempre hacia tu salud, tu tranquilidad y tus afectos más fieles. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu integridad de siempre",
        "texto": "Con vos las cuentas emocionales siempre están claras. ¡Que tengas un año justo y luminoso!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Ser justo también significa ser amable con vos mismo",
        "texto": "La Justicia de Maat nos recuerda que el equilibrio real no es rigidez sino armonía. Que este cumpleaños te invite a reconocer tus logros con la misma generosidad con que valorás a otros."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "La paz de conciencia es la mayor riqueza de cualquier ciclo",
        "texto": "Caminar con verdad liviana despeja dudas y fortalece acuerdos. ¡Muy feliz cumpleaños y excelente etapa nueva!"
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Justicia serena y recompensa bendecida este año",
        "texto": "Damos gracias a Dios por tu corazón recto y pedimos que bendiga tus acuerdos, tu trabajo y la paz de toda tu familia."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Verdad, salud y equilibrio en cada jornada",
        "texto": "Que la sabiduría divina sostenga tus decisiones y te regale un año sereno lleno de frutos buenos y honestos."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué diosa egipcia representa el Arcano VIII La Justicia?",
        "respuesta": "Representa a Maat, diosa de la verdad, el orden cósmico y la equidad, cuyo símbolo esencial es la pluma de la verdad en la balanza."
      },
      {
        "pregunta": "¿Qué signo del horóscopo se vincula con La Justicia?",
        "respuesta": "Se corresponde con Saturno y Capricornio, compartiendo sentido de responsabilidad, disciplina y respeto por los compromisos."
      },
      {
        "pregunta": "¿Qué sugiere La Justicia en asuntos laborales o personales?",
        "respuesta": "Sugiere transparencia, acuerdos escritos claros y la tranquilidad de saber que la constancia honesta recibe su justa retribución."
      }
    ]
  },
  {
    "numero": 9,
    "romano": "IX",
    "slug": "el-ermitano",
    "nombre": "El Ermitaño",
    "glyph": "♂",
    "deidad": "Khonsu (Konsu)",
    "astrologia": "Marte en Aries",
    "numerologia": 9,
    "esencia": "Madurez reflexiva, faro propio en la noche, prudencia sabia y claridad para cerrar un ciclo antes de abrir otro.",
    "aforismo": "Sube al monte y contempla la tierra prometida; mas no te digo que entrarás en ella.",
    "consejo": "Muy significativo para cumpleaños de cambio de década (30, 40, 50, 60 o más) o para personas reflexivas que valoran la profundidad por encima del ruido.",
    "derechoResumen": "Invita a la pausa fecunda, a estudiar con calma y a confiar en tu propia linterna interior antes de tomar un compromiso nuevo. Habla de prudencia, experiencia ganada, discreción y respuestas profundas.",
    "invertidoResumen": "Avisa sobre aislamiento excesivo, testarudez solitaria o precipitación por no haber reflexionado un minuto más. Sugiere aceptar buena compañía sin perder tu criterio.",
    "signoBadge": "♈ Aries",
    "signoSlug": "aries",
    "titleTag": "El Ermitaño (IX) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Ermitaño (Arcano IX) en el Tarot Egipcio, sus 3 planos, vínculo con Marte en Aries y 8 dedicatorias.",
    "h1": "El Ermitaño (IX): significado, simbolismo y dedicatorias",
    "lead": "El Ermitaño · Luz Interior, Prudencia y Búsqueda Sabia. Madurez reflexiva, faro propio en la noche, prudencia sabia y claridad para cerrar un ciclo antes de abrir otro. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "IX (N.º 9)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Khonsu (Konsu)"
      },
      {
        "label": "Astrología",
        "valor": "Marte en Aries"
      },
      {
        "label": "Letra hebrea",
        "valor": "Teth (ט)"
      },
      {
        "label": "Numerología (9)",
        "valor": "Madurez, fruto y cierre de ciclo"
      },
      {
        "label": "Claves esenciales",
        "valor": "Luz propia · Paciencia sabia · Madurez serena"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano IX resuena directamente con Marte en Aries . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/aries/",
        "nombre": "♈ Horóscopo de Aries",
        "rango": "21 de marzo al 19 de abril · Elemento Fuego · 12 frases"
      },
      {
        "href": "/cumpleanos-en-marzo/",
        "nombre": "🎂 Cumpleaños en Marzo",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-abril/",
        "nombre": "🎂 Cumpleaños en Abril",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Invita a la pausa fecunda, a estudiar con calma y a confiar en tu propia linterna interior antes de tomar un compromiso nuevo. Habla de prudencia, experiencia ganada, discreción y respuestas profundas.",
    "invertidoDetalle": "Avisa sobre aislamiento excesivo, testarudez solitaria o precipitación por no haber reflexionado un minuto más. Sugiere aceptar buena compañía sin perder tu criterio.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La lámpara encendida que porta el sabio muestra que no necesitás ver el camino entero: basta iluminar con claridad el paso siguiente."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "El manto protector simboliza la discreción: cuidar tus proyectos mientras maduran protege su fuerza."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El cayado de apoyo recuerda que la experiencia vivida sostiene tu caminar y te permite avanzar con seguridad sobre terreno desconocido."
      }
    ],
    "filosofiaParrafos": [
      "El número 9 culmina la serie simple del 1 al 9: simboliza gestación completa, sabiduría que se destila de los años y lucidez para despedir lo que ya cumplió su tiempo.",
      "Muy significativo para cumpleaños de cambio de década (30, 40, 50, 60 o más) o para personas reflexivas que valoran la profundidad por encima del ruido."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu luz serena siempre ayuda a ver más claro",
        "texto": "Cuando todo alrededor se acelera, charlar con vos devuelve perspectiva y calma. ¡Muy feliz cumpleaños! Que este año te regale tiempo propio, lecturas lindas y afectos que respeten tu paz."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Celebramos la sabiduría que fuiste ganando paso a paso",
        "texto": "Cada año vivido te sumó hondura, paciencia y una calidez tranquila que quienes te conocemos admiramos muchísimo. ¡Feliz vuelta al sol llena de luz!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Faro propio y caminar sereno",
        "texto": "Que nunca se apague tu claridad interior ni falten buenas charlas a fuego lento. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Pausa linda, salud y buenas respuestas este año",
        "texto": "Brindamos hoy por tu criterio tranquilo y por doce meses llenos de bienestar genuino."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Alcanza con iluminar con verdad el próximo paso",
        "texto": "El Ermitaño del Tarot Egipcio enseña que la prisa confunde y la pausa aclara. Que este nuevo año te encuentre avanzando a tu propio ritmo, con lucidez y paz."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Cerrar un ciclo con gratitud prepara el terreno nuevo",
        "texto": "Honrá todo lo aprendido hasta acá sin apurar lo que viene: la madurez es el mejor regalo de cada vuelta al sol. ¡Feliz cumpleaños!"
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Lámpara encendida y guía serena en tu camino",
        "texto": "Pedimos a Dios que ilumine tus pasos con discernimiento, cuide tu salud y te regale descanso profundo en el corazón."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Sabiduría y paz duradera para esta nueva etapa",
        "texto": "Damos gracias por tu vida reflexiva y deseamos que la gracia acompañe cada proyecto que guardás con cuidado en el alma."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué significa El Ermitaño en el Tarot Egipcio?",
        "respuesta": "Es el Arcano IX y simboliza la búsqueda interior, la prudencia, la madurez ganada con la experiencia y la capacidad de guiarse con luz propia."
      },
      {
        "pregunta": "¿Qué correspondencia astrológica tiene El Ermitaño?",
        "respuesta": "En el sistema egipcio se asocia con Marte y Aries, canalizando la energía del guerrero hacia el autodominio y la búsqueda consciente."
      },
      {
        "pregunta": "¿Es negativa la soledad que muestra El Ermitaño?",
        "respuesta": "No: en posición derecha es una pausa elegida, fértil y serena para ordenar ideas y ganar claridad antes de iniciar un nuevo ciclo."
      }
    ]
  },
  {
    "numero": 10,
    "romano": "X",
    "slug": "la-rueda-de-la-fortuna",
    "nombre": "La Rueda de la Fortuna",
    "glyph": "♇",
    "deidad": "Horus, Anubis y Mut",
    "astrologia": "Plutón en Escorpio",
    "numerologia": 1,
    "esencia": "Giro oportuno de la suerte, ciclos que se renuevan y habilidad para aprovechar el cambio a favor.",
    "aforismo": "Costoso es el saber que compras con la experiencia, y más costoso el que te falta comprar.",
    "consejo": "Perfecto para el día del cumpleaños, que es literalmente una vuelta completa de la rueda solar: deseá giros lindos, sorpresas a favor y frescura para disfrutar lo nuevo.",
    "derechoResumen": "Anuncia un cambio afortunado, movimiento inesperado que destraba situaciones y apertura de una nueva vuelta de ciclo. Invita a recibir las novedades con flexibilidad y confianza.",
    "invertidoResumen": "Marca altibajos pasajeros, monotonía o resistencia a aceptar que una etapa ya giró. Recuerda que nada se queda quieto para siempre y que la calma en el centro estabiliza cualquier vaivén.",
    "signoBadge": "♏ Escorpio",
    "signoSlug": "escorpio",
    "titleTag": "La Rueda de la Fortuna (X) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Rueda de la Fortuna (Arcano X) en el Tarot Egipcio, sus 3 planos, vínculo con Plutón en Escorpio y 8 dedicatorias.",
    "h1": "La Rueda de la Fortuna (X): significado, simbolismo y dedicatorias",
    "lead": "La Rueda de la Fortuna · Ciclos, Cambio Favorable y Renovación. Giro oportuno de la suerte, ciclos que se renuevan y habilidad para aprovechar el cambio a favor. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "X (N.º 10)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Horus, Anubis y Mut"
      },
      {
        "label": "Astrología",
        "valor": "Plutón en Escorpio"
      },
      {
        "label": "Letra hebrea",
        "valor": "Iod (י)"
      },
      {
        "label": "Numerología (1)",
        "valor": "Principio creador y voluntad"
      },
      {
        "label": "Claves esenciales",
        "valor": "Giro favorable · Ciclos vivos · Renovación oportuna"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano X resuena directamente con Plutón en Escorpio . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/escorpio/",
        "nombre": "♏ Horóscopo de Escorpio",
        "rango": "23 de octubre al 21 de noviembre · Elemento Agua · 12 frases"
      },
      {
        "href": "/cumpleanos-en-octubre/",
        "nombre": "🎂 Cumpleaños en Octubre",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-noviembre/",
        "nombre": "🎂 Cumpleaños en Noviembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Anuncia un cambio afortunado, movimiento inesperado que destraba situaciones y apertura de una nueva vuelta de ciclo. Invita a recibir las novedades con flexibilidad y confianza.",
    "invertidoDetalle": "Marca altibajos pasajeros, monotonía o resistencia a aceptar que una etapa ya giró. Recuerda que nada se queda quieto para siempre y que la calma en el centro estabiliza cualquier vaivén.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La esfinge coronando el eje superior simboliza el centro inmóvil que permanece sereno mientras la rueda exterior gira."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Anubis ascendiendo y el ciclo que desciende recuerdan que toda subida y toda pausa enseñan algo necesario para la madurez."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El movimiento circular encarna oportunidades concretas, encuentros fortuitos y giros felices en el trabajo o los afectos."
      }
    ],
    "filosofiaParrafos": [
      "El número 10 reduce al 1 (1 + 0 = 1): tras completar el ciclo del 9, la vida abre una octava superior. La Rueda de la Fortuna enseña a no aferrarse al miedo cuando el viento cambia.",
      "Perfecto para el día del cumpleaños, que es literalmente una vuelta completa de la rueda solar: deseá giros lindos, sorpresas a favor y frescura para disfrutar lo nuevo."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Que esta nueva vuelta gire toda a tu favor",
        "texto": "Cumplir años es celebrar que la rueda vuelve a abrir oportunidades lindas. ¡Muy feliz cumpleaños! Ojalá este ciclo te sorprenda con buenas noticias, encuentros inesperados y mucha alegría."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu centro sereno siempre te permite disfrutar cada cambio",
        "texto": "Aunque el año tenga vueltas inesperadas, sabés adaptarte con gracia y humor. Que estos doce meses giren hacia la salud, la prosperidad y los abrazos largos."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz vuelta al sol! Buena fortuna y novedades lindas",
        "texto": "Que la rueda de este año te traiga sorpresas alegres y puertas que se abren solas. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Giro favorable y brindis en alto hoy",
        "texto": "Cerramos lo pesado y celebramos lo nuevo que empieza a girar hoy mismo. ¡Feliz cumple!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Cuando cuidás tu centro, ningún giro del año te desordena",
        "texto": "La Rueda de la Fortuna en el Tarot Egipcio recuerda que la vida es movimiento continuo. Que este cumpleaños te encuentre liviano para soltar lo viejo y despierto para abrazar lo nuevo."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "La experiencia aprendida es la brújula de cada nueva vuelta",
        "texto": "Cada ciclo suma lucidez: que esta etapa nueva aproveche todo lo vivido con libertad y entusiasmo."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Tiempos buenos y providencia fiel en tu nuevo año",
        "texto": "Pedimos a Dios que ordene los tiempos de tu vida para bien, renueve tus fuerzas y bendiga cada novedad que llegue a tu puerta."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Esperanza renovada para una etapa llena de gracia",
        "texto": "Damos gracias por todo lo vivido hasta hoy y confiamos en que este nuevo giro del calendario traiga salud, paz y alegrías abundantes."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué significa La Rueda de la Fortuna en el Tarot Egipcio?",
        "respuesta": "Es el Arcano X y simboliza los ciclos de la vida, los giros afortunados, el destino en movimiento y la oportunidad de renovarse."
      },
      {
        "pregunta": "¿Por qué la numerología de La Rueda de la Fortuna se reduce al 1?",
        "respuesta": "Porque 10 equivale a 1 + 0 = 1: marca el final de una etapa completa y el arranque de un ciclo nuevo en un nivel más consciente."
      },
      {
        "pregunta": "¿Con qué signo zodiacal se asocia La Rueda de la Fortuna?",
        "respuesta": "Se vincula con Plutón y Escorpio, compartiendo la capacidad de transformarse y renacer en cada giro importante de la vida."
      }
    ]
  },
  {
    "numero": 11,
    "romano": "XI",
    "slug": "la-fuerza",
    "nombre": "La Fuerza",
    "glyph": "♌",
    "deidad": "Sekmet",
    "astrologia": "Aries y el Sol",
    "numerologia": 2,
    "esencia": "Coraje sereno, persuasión cálida, vitalidad íntegra y capacidad de domar desafíos sin brusquedad.",
    "aforismo": "Gozoso en la esperanza, sufrido en la tribulación, sé constante en la oración.",
    "consejo": "Ideal para celebrar a personas valientes que atravesaron un año exigente con entereza, así como a nacidos bajo Aries y Leo.",
    "derechoResumen": "Representa fortaleza interior que no necesita gritar para imponerse. Habla de valentía ética, recuperación de vitalidad, paciencia firme ante pruebas y poder de persuasión amable.",
    "invertidoResumen": "Advierte cansancio acumulado, impulsividad momentánea o pérdida de confianza en tu propia resistencia. Invita a descansar y recuperar el eje sin culpa.",
    "signoBadge": "♈ Aries",
    "signoSlug": "aries",
    "titleTag": "La Fuerza (XI) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Fuerza (Arcano XI) en el Tarot Egipcio, sus 3 planos, vínculo con Aries y el Sol y 8 dedicatorias.",
    "h1": "La Fuerza (XI): significado, simbolismo y dedicatorias",
    "lead": "La Fuerza (La Persuasión) · Coraje Moral y Dominio Sin Violencia. Coraje sereno, persuasión cálida, vitalidad íntegra y capacidad de domar desafíos sin brusquedad. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XI (N.º 11)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Sekmet"
      },
      {
        "label": "Astrología",
        "valor": "Aries y el Sol"
      },
      {
        "label": "Letra hebrea",
        "valor": "Khaph (כ)"
      },
      {
        "label": "Numerología (2)",
        "valor": "Dualidad fértil y receptividad"
      },
      {
        "label": "Claves esenciales",
        "valor": "Coraje sereno · Vitalidad firme · Persuasión noble"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XI resuena directamente con Aries y el Sol . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/aries/",
        "nombre": "♈ Horóscopo de Aries",
        "rango": "21 de marzo al 19 de abril · Elemento Fuego · 12 frases"
      },
      {
        "href": "/horoscopo/leo/",
        "nombre": "♌ Horóscopo de Leo",
        "rango": "23 de julio al 22 de agosto · Elemento Fuego · 12 frases"
      },
      {
        "href": "/cumpleanos-en-marzo/",
        "nombre": "🎂 Cumpleaños en Marzo",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-abril/",
        "nombre": "🎂 Cumpleaños en Abril",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-julio/",
        "nombre": "🎂 Cumpleaños en Julio",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-agosto/",
        "nombre": "🎂 Cumpleaños en Agosto",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Representa fortaleza interior que no necesita gritar para imponerse. Habla de valentía ética, recuperación de vitalidad, paciencia firme ante pruebas y poder de persuasión amable.",
    "invertidoDetalle": "Advierte cansancio acumulado, impulsividad momentánea o pérdida de confianza en tu propia resistencia. Invita a descansar y recuperar el eje sin culpa.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La energía solar de Sekmet transformada en calma recuerda que el fuego bien encauzado abriga y sana en vez de quemar."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La figura que cierra suavemente las fauces del león muestra que la templanza y el afecto logran más que la imposición rígida."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Anuncia salud que se afirma, empuje sostenido en proyectos exigentes y valentía cotidiana para cuidar a los propios."
      }
    ],
    "filosofiaParrafos": [
      "El número 11 reduce al 2 (1 + 1 = 2), uniendo potencia con sensibilidad. En el Tarot Egipcio, La Fuerza se conoce también como La Persuasión porque demuestra que el verdadero poder nace del equilibrio interior.",
      "Ideal para celebrar a personas valientes que atravesaron un año exigente con entereza, así como a nacidos bajo Aries y Leo."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Admiro tu coraje sereno para sostener lo que amás",
        "texto": "No hace falta hacer ruido para ser fuerte, y vos lo demostrás cada semana con tu templanza y tu ternura firme. ¡Muy feliz cumpleaños! Que este año te regale vitalidad intacta y descansos merecidos."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu entereza noble inspira a todos los que te rodeamos",
        "texto": "Incluso en los días cuesta arriba mantuviste el corazón abierto y la frente alta. ¡Feliz vuelta al sol llena de salud, alegría y victorias tranquilas!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Coraje limpio y alegría firme",
        "texto": "Que nunca falten la vitalidad, el buen humor ni la fuerza suave con la que abrís camino. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu valentía de todos los días",
        "texto": "Sos prueba viva de que la calma y la nobleza siempre pueden más. ¡Que tengas un año enorme!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "La persuasión amable conquista lo que la fuerza bruta rompe",
        "texto": "El Arcano XI del Tarot Egipcio recuerda que el verdadero poder vive en el dominio tranquilo de uno mismo. Que este nuevo año te encuentre firme y sereno."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Cuidar tu energía también es una forma de valentía",
        "texto": "En esta nueva vuelta al sol, permitite tanto el empuje que te caracteriza como las pausas que renuevan el alma. ¡Feliz cumpleaños!"
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Fortaleza interior y esperanza constante en tu nuevo ciclo",
        "texto": "Pedimos a Dios que renueve tus fuerzas cada mañana, te guarde en salud y llene tu hogar de paz y alegría duradera."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Corazón valiente sostenido por la gracia diaria",
        "texto": "Damos gracias por tu vida íntegra y deseamos que nunca falten consuelo, ánimo firme y motivos claros para celebrar en familia."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué simboliza La Fuerza en el Tarot Egipcio?",
        "respuesta": "Es el Arcano XI, vinculado a Sekmet, y representa el dominio sereno de los impulsos, la persuasión amable, la salud y el coraje ético."
      },
      {
        "pregunta": "¿Qué signos del horóscopo se vinculan con La Fuerza?",
        "respuesta": "Conecta directamente con Aries y Leo, uniendo el fuego valiente de Aries con el corazón solar y noble de Leo."
      },
      {
        "pregunta": "¿Por qué también se la llama La Persuasión?",
        "respuesta": "Porque demuestra que la templanza, la firmeza afectuosa y la ética vencen obstáculos mayores que cualquier gesto violento."
      }
    ]
  },
  {
    "numero": 12,
    "romano": "XII",
    "slug": "el-apostolado",
    "nombre": "El Apostolado",
    "glyph": "♉",
    "deidad": "Ptah",
    "astrologia": "Tauro y la Luna",
    "numerologia": 3,
    "esencia": "Mirar la realidad desde un ángulo nuevo, entrega generosa y pausa consciente que revela soluciones inesperadas.",
    "aforismo": "Aunque el sol te fatigue de día y la luna te contriste de noche, no lleves tu pie al resbaladero ni duermas cuando haces guardia.",
    "consejo": "Conmovedor para quienes cuidan a otros con vocación sincera o atraviesan un cambio de mirada profundo: deseales libertad, descanso y reciprocidad afectiva.",
    "derechoResumen": "Invita a soltar la urgencia y observar un asunto desde otro punto de vista. Habla de generosidad sin cálculo, vocación de servicio, desapego sano y descubrimientos valiosos que nacen cuando dejás de empujar a la fuerza.",
    "invertidoResumen": "Advierte rigidez mental, sacrificio innecesario por quedar bien o miedo a cambiar una costumbre que ya agotó su sentido. Propone soltar cargas que no te corresponden.",
    "signoBadge": "♉ Tauro",
    "signoSlug": "tauro",
    "titleTag": "El Apostolado (XII) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Apostolado (Arcano XII) en el Tarot Egipcio, sus 3 planos, vínculo con Tauro y la Luna y 8 dedicatorias.",
    "h1": "El Apostolado (XII): significado, simbolismo y dedicatorias",
    "lead": "El Apostolado (El Colgado) · Cambio de Mirada y Pausa Fértil. Mirar la realidad desde un ángulo nuevo, entrega generosa y pausa consciente que revela soluciones inesperadas. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XII (N.º 12)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Ptah"
      },
      {
        "label": "Astrología",
        "valor": "Tauro y la Luna"
      },
      {
        "label": "Letra hebrea",
        "valor": "Lamed (ל)"
      },
      {
        "label": "Numerología (3)",
        "valor": "Triplicidad y creación viva"
      },
      {
        "label": "Claves esenciales",
        "valor": "Nueva perspectiva · Entrega noble · Pausa lúcida"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XII resuena directamente con Tauro y la Luna . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/tauro/",
        "nombre": "♉ Horóscopo de Tauro",
        "rango": "20 de abril al 20 de mayo · Elemento Tierra · 12 frases"
      },
      {
        "href": "/cumpleanos-en-abril/",
        "nombre": "🎂 Cumpleaños en Abril",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-mayo/",
        "nombre": "🎂 Cumpleaños en Mayo",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Invita a soltar la urgencia y observar un asunto desde otro punto de vista. Habla de generosidad sin cálculo, vocación de servicio, desapego sano y descubrimientos valiosos que nacen cuando dejás de empujar a la fuerza.",
    "invertidoDetalle": "Advierte rigidez mental, sacrificio innecesario por quedar bien o miedo a cambiar una costumbre que ya agotó su sentido. Propone soltar cargas que no te corresponden.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "Las columnas de la prueba enmarcan una mente despejada: cuando el mundo parece al revés, la serenidad interior descubre la salida."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La postura invertida simboliza voluntariamente mirar distinto: lo que parecía traba se vuelve aprendizaje clave."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El triángulo y el nudo desatándose sugieren pausar trámites o disputas para resolverlos con creatividad en el momento oportuno."
      }
    ],
    "filosofiaParrafos": [
      "El número 12 (1 + 2 = 3) evoca los doce meses del año y la maduración creativa. En el Tarot Egipcio, El Apostolado dignifica la entrega voluntaria y la libertad interior de quien no se deja dominar por el apuro.",
      "Conmovedor para quienes cuidan a otros con vocación sincera o atraviesan un cambio de mirada profundo: deseales libertad, descanso y reciprocidad afectiva."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu entrega generosa deja huella en cada persona que ayudás",
        "texto": "Siempre estás dispuesto a mirar desde el lugar del otro y tender una mano sin pedir aplausos. ¡Muy feliz cumpleaños! Hoy nos toca cuidarte a vos y desearte un año liviano y pleno."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Cambiar de mirada siempre abre caminos inesperados",
        "texto": "Que esta nueva vuelta al sol te regale respuestas frescas, descansos verdaderos y la alegría de recibir todo el cariño que sembrás."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Mirada nueva y corazón liviano",
        "texto": "Que este año sueltes pesos ajenos y disfrutes cada día con calma y alegría propia. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu generosidad sin medida",
        "texto": "Gracias por tu vocación de estar cerca de verdad. ¡Que tengas un año en paz y muy feliz!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Ver la vida desde otro ángulo destraba lo que parecía quieto",
        "texto": "El Apostolado del Tarot Egipcio enseña que una pausa consciente vale más que mil pasos apurados. Que este nuevo año te regale claridad serena y libertad interior."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Dar con amor también incluye saber cuidarte",
        "texto": "Que estos doce meses equilibren tu vocación generosa con tiempo propio, salud firme y satisfacciones personales."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Fidelidad recompensada y paz profunda en tu alma",
        "texto": "Agradecemos a Dios por tu corazón servicial y pedimos que cuide tus pasos, aliviane tus cargas y bendiga cada día de este nuevo año."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Luz nueva y descanso verdadero para tu hogar",
        "texto": "Que la providencia renueve tu alegría y te rodee siempre de afectos agradecidos y sinceros."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué significa El Apostolado en el Tarot Egipcio?",
        "respuesta": "Es el Arcano XII (correspondiente a El Colgado en otros mazos) y simboliza el cambio voluntario de perspectiva, la pausa fecunda y la entrega generosa."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se vincula El Apostolado?",
        "respuesta": "Se relaciona con Tauro y la Luna, evocando paciencia profunda, lealtad constante y sensibilidad afectiva."
      },
      {
        "pregunta": "¿Es una carta negativa si sale en una tirada?",
        "respuesta": "No: en posición derecha sugiere que pausar y cambiar de enfoque te permitirá encontrar una solución mucho más sabia que insistir por el mismo camino."
      }
    ]
  },
  {
    "numero": 13,
    "romano": "XIII",
    "slug": "la-muerte",
    "nombre": "La Muerte",
    "glyph": "♊",
    "deidad": "Amón-Ra",
    "astrologia": "Géminis y Mercurio",
    "numerologia": 4,
    "esencia": "Transformación auténtica, despedida sana de etapas cumplidas y renacimiento hacia una vida más verdadera.",
    "aforismo": "La noche ha pasado y llegó el nuevo día. Vístete pues con las armas de la luz.",
    "consejo": "Especial para alguien que deja atrás un año complejo y estrena un capítulo completamente nuevo: deseá alivio, aire fresco y un amanecer luminoso.",
    "derechoResumen": "Lejos de cualquier presagio fatalista, anuncia la transformación necesaria que cierra una etapa gastada para dar paso a un renacimiento real. Habla de soltar hábitos viejos, cambiar de piel y amanecer más liviano.",
    "invertidoResumen": "Refleja resistencia a aceptar un cambio evidente, inercia o apego a situaciones que ya cumplieron su ciclo. Invita a soltar con gratitud para poder avanzar.",
    "signoBadge": "♊ Géminis",
    "signoSlug": "geminis",
    "titleTag": "La Muerte (XIII) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Muerte (Arcano XIII) en el Tarot Egipcio, sus 3 planos, vínculo con Géminis y Mercurio y 8 dedicatorias.",
    "h1": "La Muerte (XIII): significado, simbolismo y dedicatorias",
    "lead": "La Muerte (La Inmortalidad) · Cierre de Ciclo y Renovación Profunda. Transformación auténtica, despedida sana de etapas cumplidas y renacimiento hacia una vida más verdadera. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XIII (N.º 13)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Amón-Ra"
      },
      {
        "label": "Astrología",
        "valor": "Géminis y Mercurio"
      },
      {
        "label": "Letra hebrea",
        "valor": "Mem (מ)"
      },
      {
        "label": "Numerología (4)",
        "valor": "Estabilidad y los cuatro elementos"
      },
      {
        "label": "Claves esenciales",
        "valor": "Renovación profunda · Fin de ciclo · Renacimiento claro"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XIII resuena directamente con Géminis y Mercurio . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/geminis/",
        "nombre": "♊ Horóscopo de Géminis",
        "rango": "21 de mayo al 20 de junio · Elemento Aire · 12 frases"
      },
      {
        "href": "/cumpleanos-en-mayo/",
        "nombre": "🎂 Cumpleaños en Mayo",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-junio/",
        "nombre": "🎂 Cumpleaños en Junio",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Lejos de cualquier presagio fatalista, anuncia la transformación necesaria que cierra una etapa gastada para dar paso a un renacimiento real. Habla de soltar hábitos viejos, cambiar de piel y amanecer más liviano.",
    "invertidoDetalle": "Refleja resistencia a aceptar un cambio evidente, inercia o apego a situaciones que ya cumplieron su ciclo. Invita a soltar con gratitud para poder avanzar.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La flor que brota de la tierra arada enseña el principio egipcio de la inmortalidad: nada valioso se pierde, todo se transforma."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La guadaña limpia el terreno mental de preocupaciones vencidas para dejar espacio a ideas frescas y decisiones claras."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Anuncia cierres ordenados, cambios de trabajo, mudanzas liberadoras o renovación de rutinas que devuelven vitalidad."
      }
    ],
    "filosofiaParrafos": [
      "En el Tarot Egipcio el Arcano XIII recibe también el nombre de La Inmortalidad y se reduce al 4 (1 + 3 = 4): lo que termina prepara cimientos más honestos y firmes para la nueva etapa.",
      "Especial para alguien que deja atrás un año complejo y estrena un capítulo completamente nuevo: deseá alivio, aire fresco y un amanecer luminoso."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Qué lindo verte estrenar una etapa más liviana y tuya",
        "texto": "Cerraste capítulos exigentes con valentía y hoy el horizonte vuelve a abrirse limpio delante tuyo. ¡Muy feliz cumpleaños! Que este nuevo día traiga aire fresco, paz y alegrías reales."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Renacer más fuerte es uno de tus mayores dones",
        "texto": "Cada cambio que atravesaste te dejó más sabio y más auténtico. Brindamos hoy por tu nueva etapa, llena de salud, calma y comienzos luminosos."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Aire fresco y capítulo nuevo",
        "texto": "Lo que pesaba queda atrás: hoy arranca un ciclo renovado y lleno de luz. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por los cierres sanos y los nuevos comienzos",
        "texto": "Que esta vuelta al sol te encuentre más libre, liviano y feliz que nunca. ¡Felicidades!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "La noche pasa y siempre llega el nuevo día",
        "texto": "El Arcano XIII del Tarot Egipcio recuerda que cerrar una etapa no es pérdida sino renovación. Que este cumpleaños te vista de luz clara y proyectos frescos."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Soltar lo vencido hace lugar para lo que merece crecer",
        "texto": "Ojalá este nuevo año te permita despedir con gratitud lo que ya cumplió su tiempo y abrazar lo nuevo con serenidad."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Renovación de fuerzas y amanecer de paz",
        "texto": "Pedimos a Dios que transforme cada cansancio del año pasado en esperanza viva, salud firme y un comienzo lleno de bendición para vos."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Vida nueva y gratitud clara en este cumpleaños",
        "texto": "Que la luz divina renueve tu casa, ordene tus caminos y te regale un año sereno, limpio y fecundo."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Significa algo malo que salga La Muerte en el Tarot Egipcio?",
        "respuesta": "No. En el Tarot Egipcio simboliza la transformación natural, el cierre de una etapa que ya cumplió su ciclo y el renacimiento hacia un nuevo día."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se vincula el Arcano XIII?",
        "respuesta": "En la correspondencia tradicional del Tarot Egipcio se asocia con Géminis y Mercurio, señalando cambio mental ágil y renovación de ideas."
      },
      {
        "pregunta": "¿Por qué también se conoce a este arcano como La Inmortalidad?",
        "respuesta": "Porque la tradición egipcia veía cada cierre como semilla de una nueva vida: cuando soltás lo gastado, nace una etapa más plena."
      }
    ]
  },
  {
    "numero": 14,
    "romano": "XIV",
    "slug": "la-templanza",
    "nombre": "La Templanza",
    "glyph": "♋",
    "deidad": "Neferten",
    "astrologia": "Cáncer y Júpiter",
    "numerologia": 5,
    "esencia": "Conciliación serena, medida justa, paciencia sanadora y armonía entre emoción y razón.",
    "aforismo": "No seas como paja delante del viento ni como viento delante de paja.",
    "consejo": "Maravilloso para personas conciliadoras, sensibles y cálidas —en especial Cáncer— o para quien necesita un año más sereno, saludable y equilibrado.",
    "derechoResumen": "Anuncia armonía, recuperación emocional, diálogo conciliador y equilibrio saludable en la rutina. Sugiere combinar paciencia con acción medida para lograr acuerdos duraderos.",
    "invertidoResumen": "Advierte impaciencia, extremos innecesarios o desgaste por querer acelerar procesos que necesitan tiempo. Invita a respirar hondo y recuperar la medida justa.",
    "signoBadge": "♋ Cáncer",
    "signoSlug": "cancer",
    "titleTag": "La Templanza (XIV) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Templanza (Arcano XIV) en el Tarot Egipcio, sus 3 planos, vínculo con Cáncer y Júpiter y 8 dedicatorias.",
    "h1": "La Templanza (XIV): significado, simbolismo y dedicatorias",
    "lead": "La Templanza · Armonía, Moderación y Paz Interior. Conciliación serena, medida justa, paciencia sanadora y armonía entre emoción y razón. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XIV (N.º 14)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Neferten"
      },
      {
        "label": "Astrología",
        "valor": "Cáncer y Júpiter"
      },
      {
        "label": "Letra hebrea",
        "valor": "Nun (נ)"
      },
      {
        "label": "Numerología (5)",
        "valor": "Espíritu consciente y cambio activo"
      },
      {
        "label": "Claves esenciales",
        "valor": "Paz interior · Medida justa · Conciliación cálida"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XIV resuena directamente con Cáncer y Júpiter . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/cancer/",
        "nombre": "♋ Horóscopo de Cáncer",
        "rango": "21 de junio al 22 de julio · Elemento Agua · 12 frases"
      },
      {
        "href": "/cumpleanos-en-junio/",
        "nombre": "🎂 Cumpleaños en Junio",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-julio/",
        "nombre": "🎂 Cumpleaños en Julio",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Anuncia armonía, recuperación emocional, diálogo conciliador y equilibrio saludable en la rutina. Sugiere combinar paciencia con acción medida para lograr acuerdos duraderos.",
    "invertidoDetalle": "Advierte impaciencia, extremos innecesarios o desgaste por querer acelerar procesos que necesitan tiempo. Invita a respirar hondo y recuperar la medida justa.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El disco solar sobre la figura angélica evoca la alquimia serena que transforma tensiones en entendimiento."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Las dos ánforas vertiendo agua sin derramar una gota simbolizan la comunicación fluida entre lo que sentís y lo que decidís."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Anuncia bienestar físico, acuerdos familiares armoniosos y un ritmo diario sostenible sin sobresaltos."
      }
    ],
    "filosofiaParrafos": [
      "El número 14 reduce al 5 (1 + 4 = 5): el espíritu equilibrando los elementos. La Templanza es el arte cotidiano de templar el acero con fuego y agua para volverlo flexible y resistente.",
      "Maravilloso para personas conciliadoras, sensibles y cálidas —en especial Cáncer— o para quien necesita un año más sereno, saludable y equilibrado."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu serenidad sabe convertir cualquier tensión en calma",
        "texto": "Estar cerca tuyo baja el ruido del mundo y recuerda lo que importa de verdad. ¡Muy feliz cumpleaños! Que este año te regale salud plena, acuerdos suaves y tardes tranquilas en casa."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Deseo un año en equilibrio hermoso para tu corazón",
        "texto": "Ni apuros que agoten ni silencios que pesen: ojalá esta nueva vuelta al sol te encuentre en la medida justa entre proyectos lindos, descanso real y abrazos sinceros."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Paz serena y armonía cotidiana",
        "texto": "Que estos doce meses fluyan suaves, saludables y llenos de buena compañía. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis tranquilo por tu calidez equilibrada",
        "texto": "Gracias por traer armonía a cada mesa donde te sentás. ¡Feliz nueva vuelta al sol!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "La medida justa convierte el tiempo en aliado",
        "texto": "La Templanza del Tarot Egipcio nos enseña a no ser ni paja ante el viento ni viento desmedido. Que este cumpleaños inaugure un año de equilibrio luminoso."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Sanar y armonizar también es avanzar",
        "texto": "Que este ciclo te regale paciencia fértil, charlas que acercan y bienestar sostenido cada semana."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Paz profunda y consuelo sereno sobre tu vida",
        "texto": "Pedimos a Dios que derrame calma sobre tu mente, salud sobre tu cuerpo y concordia duradera dentro de toda tu familia."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Armonía bendecida en cada paso de este año",
        "texto": "Damos gracias por tu espíritu conciliador y deseamos que la paz verdadera custodie tu hogar cada mañana."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué simboliza La Templanza en el Tarot Egipcio?",
        "respuesta": "Es el Arcano XIV y simboliza la moderación sabia, la paz interior, la sanación gradual y la armonía entre fuerzas opuestas."
      },
      {
        "pregunta": "¿Qué signo del horóscopo corresponde a La Templanza?",
        "respuesta": "Se vincula con Cáncer y Júpiter, uniendo calidez afectiva y cuidado familiar con expansión serena."
      },
      {
        "pregunta": "¿Qué consejo práctico ofrece La Templanza?",
        "respuesta": "Recomienda evitar los extremos, sostener hábitos saludables y resolver diferencias mediante diálogo paciente y respetuoso."
      }
    ]
  },
  {
    "numero": 15,
    "romano": "XV",
    "slug": "el-mal",
    "nombre": "El Mal",
    "glyph": "☉",
    "deidad": "Menkeret y Tifón",
    "astrologia": "Leo y Neptuno",
    "numerologia": 6,
    "esencia": "Energía vital intensa, magnetismo creativo y conciencia lúcida para no quedar atado a miedos ni excesos.",
    "aforismo": "Hicieronme guarda de viñas, y mi viña, que era mía, no guardé.",
    "consejo": "Adecuado para desear libertad interior, límites sanos, pasión bien dirigida y cuidado personal a quien suele entregarse de más o vive todo con intensidad.",
    "derechoResumen": "Habla de deseo intenso, magnetismo, ambición fuerte y atracción poderosa, al mismo tiempo que pide lucidez para distinguir pasión sana de apego o exceso. Recordá cuidar tu propia viña: tu energía y tus límites.",
    "invertidoResumen": "Anuncia liberación de una atadura, tregua frente a una preocupación obsesiva o recuperación de autonomía emocional. Es una señal positiva de despertar y soltar dependencias.",
    "signoBadge": "♌ Leo",
    "signoSlug": "leo",
    "titleTag": "El Mal (XV) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Mal (Arcano XV) en el Tarot Egipcio, sus 3 planos, vínculo con Leo y Neptuno y 8 dedicatorias.",
    "h1": "El Mal (XV): significado, simbolismo y dedicatorias",
    "lead": "El Mal (La Pasión) · Deseo Intenso, Magnetismo y Conciencia de Límites. Energía vital intensa, magnetismo creativo y conciencia lúcida para no quedar atado a miedos ni excesos. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XV (N.º 15)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Menkeret y Tifón"
      },
      {
        "label": "Astrología",
        "valor": "Leo y Neptuno"
      },
      {
        "label": "Letra hebrea",
        "valor": "Samekh (ס)"
      },
      {
        "label": "Numerología (6)",
        "valor": "Equilibrio de fuerzas y afecto"
      },
      {
        "label": "Claves esenciales",
        "valor": "Magnetismo vital · Lucidez ante ataduras · Pasión encauzada"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XV resuena directamente con Leo y Neptuno . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/leo/",
        "nombre": "♌ Horóscopo de Leo",
        "rango": "23 de julio al 22 de agosto · Elemento Fuego · 12 frases"
      },
      {
        "href": "/cumpleanos-en-julio/",
        "nombre": "🎂 Cumpleaños en Julio",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-agosto/",
        "nombre": "🎂 Cumpleaños en Agosto",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Habla de deseo intenso, magnetismo, ambición fuerte y atracción poderosa, al mismo tiempo que pide lucidez para distinguir pasión sana de apego o exceso. Recordá cuidar tu propia viña: tu energía y tus límites.",
    "invertidoDetalle": "Anuncia liberación de una atadura, tregua frente a una preocupación obsesiva o recuperación de autonomía emocional. Es una señal positiva de despertar y soltar dependencias.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La antorcha encendida recuerda que la misma energía que puede desbordar también ilumina cuando se la gobierna con conciencia."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Invita a mirar de frente los propios miedos, celos o exigencias ocultas: lo que se nombra con honestidad pierde poder sobre vos."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Sugiere encauzar el entusiasmo hacia proyectos concretos, cuidar el descanso y elegir vínculos libres donde nadie pierda su identidad."
      }
    ],
    "filosofiaParrafos": [
      "El número 15 reduce al 6 (1 + 5 = 6), recordando que incluso las pruebas de la pasión buscan devolvernos al equilibrio del amor libre. En el Tarot Egipcio, este arcano llama a ser dueño de tu propia energía.",
      "Adecuado para desear libertad interior, límites sanos, pasión bien dirigida y cuidado personal a quien suele entregarse de más o vive todo con intensidad."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Que tu intensidad hermosa brille siempre con libertad",
        "texto": "Vivís cada afecto y cada proyecto con el corazón entero, y eso te vuelve inolvidable. ¡Muy feliz cumpleaños! Que este año cuides tu propia energía y disfrutes solo vínculos que te hagan bien."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Deseo un año libre de pesos y lleno de entusiasmo sano",
        "texto": "Ojalá esta nueva vuelta al sol te encuentre soltando lo que ata, celebrando lo que te apasiona y rodeado de gente genuina."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Pasión lúcida y límites sanos",
        "texto": "Que tu chispa nunca se apague y siempre juegue a favor de tu paz y tu alegría. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Libertad interior y disfrute real este ciclo",
        "texto": "Por doce meses eligiendo lo que te suma y cuidando tu propia viña con amor. ¡Feliz vuelta al sol!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Cuidar tu propia viña es el primer acto de sabiduría",
        "texto": "El Arcano XV del Tarot Egipcio recuerda que cuidar a otros nunca debe hacerte olvidar de cuidarte a vos. Que este nuevo año te regale lucidez, límites claros y pasión serena."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Conocer tus sombras te vuelve verdaderamente libre",
        "texto": "Cuando mirás tus miedos sin escapar, descubrís una fuerza enorme para elegir mejor. Feliz cumpleaños y excelente etapa nueva."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Libertad verdadera y protección sobre tu corazón",
        "texto": "Pedimos a Dios discernimiento claro para alejar todo lo que quita paz y abrazar con gratitud lo que edifica tu vida y tu hogar."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Luz limpia para tus decisiones de este año",
        "texto": "Que la gracia guarde tu mente en calma, ordene tus anhelos y te conceda un año libre, saludable y bendecido."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué significa realmente el Arcano XV (El Mal o La Pasión) en el Tarot Egipcio?",
        "respuesta": "Representa la fuerza del deseo, el magnetismo vital y la invitación a tomar conciencia de apegos, miedos o excesos para vivir con libertad real."
      },
      {
        "pregunta": "¿Qué enseña el aforismo de cuidar tu propia viña?",
        "respuesta": "Advierte sobre descuidar tu propio bienestar por ocuparte en exceso de asuntos ajenos o por quedar atrapado en presiones externas."
      },
      {
        "pregunta": "¿Qué signo del horóscopo se vincula con el Arcano XV?",
        "respuesta": "Corresponde a Leo y Neptuno, uniendo magnetismo personal e intensidad creativa con la necesidad de claridad emocional."
      }
    ]
  },
  {
    "numero": 16,
    "romano": "XVI",
    "slug": "la-fragilidad",
    "nombre": "La Fragilidad",
    "glyph": "♍",
    "deidad": "Ra (el rayo solar)",
    "astrologia": "Virgo y Mercurio",
    "numerologia": 7,
    "esencia": "Caída de estructuras rígidas, verdad liberadora y oportunidad de reconstruir sobre cimientos más auténticos.",
    "aforismo": "Luz de amanecer, luz de mediodía, luz de atardecer: lo que importa es que sea luz.",
    "consejo": "Muy valioso para acompañar a quien atravesó un cimbronazo o reinvención reciente: celebrá su lucidez para volver a empezar sobre tierra firme.",
    "derechoResumen": "Señala un despertar súbito que derriba lo que ya era frágil o artificial. Aunque al principio sacuda la rutina, despeja el panorama para reconstruir tu vida sobre bases mucho más honestas y duraderas.",
    "invertidoResumen": "Indica resistencia a soltar una rutina agotada o demora en aceptar un cambio necesario. Propone abrir ventanas voluntariamente antes de que el cansancio obligue a frenar.",
    "signoBadge": "♍ Virgo",
    "signoSlug": "virgo",
    "titleTag": "La Fragilidad (XVI) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Fragilidad (Arcano XVI) en el Tarot Egipcio, sus 3 planos, vínculo con Virgo y Mercurio y 8 dedicatorias.",
    "h1": "La Fragilidad (XVI): significado, simbolismo y dedicatorias",
    "lead": "La Fragilidad (La Torre) · Despertar Lúcido y Reconstrucción Verdadera. Caída de estructuras rígidas, verdad liberadora y oportunidad de reconstruir sobre cimientos más auténticos. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XVI (N.º 16)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Ra (el rayo solar)"
      },
      {
        "label": "Astrología",
        "valor": "Virgo y Mercurio"
      },
      {
        "label": "Letra hebrea",
        "valor": "Ain (ע)"
      },
      {
        "label": "Numerología (7)",
        "valor": "Armonía mística y superación"
      },
      {
        "label": "Claves esenciales",
        "valor": "Verdad liberadora · Despertar claro · Nueva base firme"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XVI resuena directamente con Virgo y Mercurio . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/virgo/",
        "nombre": "♍ Horóscopo de Virgo",
        "rango": "23 de agosto al 22 de septiembre · Elemento Tierra · 12 frases"
      },
      {
        "href": "/cumpleanos-en-agosto/",
        "nombre": "🎂 Cumpleaños en Agosto",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-septiembre/",
        "nombre": "🎂 Cumpleaños en Septiembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Señala un despertar súbito que derriba lo que ya era frágil o artificial. Aunque al principio sacuda la rutina, despeja el panorama para reconstruir tu vida sobre bases mucho más honestas y duraderas.",
    "invertidoDetalle": "Indica resistencia a soltar una rutina agotada o demora en aceptar un cambio necesario. Propone abrir ventanas voluntariamente antes de que el cansancio obligue a frenar.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El rayo de Ra no destruye lo verdadero: ilumina de golpe aquello que necesitaba verdad para dejar de apretar."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Romper un esquema rígido libera creatividad y te devuelve el alivio de vivir sin sostener apariencias pesadas."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Llama a revisar cimientos concretos —salud, orden financiero o acuerdos claros— para edificar con solidez real."
      }
    ],
    "filosofiaParrafos": [
      "El número 16 reduce al 7 (1 + 6 = 7), número de armonía superior. En el Tarot Egipcio, La Fragilidad recuerda que reconocer nuestros límites humanos nos vuelve más sabios, humildes y libres.",
      "Muy valioso para acompañar a quien atravesó un cimbronazo o reinvención reciente: celebrá su lucidez para volver a empezar sobre tierra firme."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Volver a construir con verdad te dejó más libre que antes",
        "texto": "Cuando caen las cosas que ya no sostenían, queda espacio limpio para lo auténtico. ¡Feliz cumpleaños! Celebro tu valentía para reinventarte y te deseo un año firme, claro y en paz."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Siempre hay luz nueva después de cada sacudida",
        "texto": "Admiro cómo supiste aprender de los imprevistos sin perder tu calidez. Ojalá esta nueva vuelta al sol te regale cimientos serenos y alegrías duraderas."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Cimientos claros y aire nuevo",
        "texto": "Que este año edifiques solo aquello que te da paz verdadera y disfrute real. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Luz en cada hora de tu nuevo ciclo",
        "texto": "Lo auténtico siempre permanece en pie. ¡Brindemos por un año limpio, firme y feliz!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Lo que importa es que sea luz en cada etapa del día",
        "texto": "El Arcano XVI del Tarot Egipcio enseña que los quiebres inesperados también despejan el cielo. Que este cumpleaños confirme que tus nuevas bases son más honestas y libres."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Soltar las apariencias alivia la espalda para siempre",
        "texto": "Que estos doce meses te regalen sencillez, verdad cotidiana y la calma de construir a tu propia medida."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Roca firme y luz nueva sobre tu hogar",
        "texto": "Pedimos a Dios que sostenga tus pasos, convierta cada prueba en aprendizaje fecundo y bendiga todo lo nuevo que edificás este año."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Claridad y reconstrucción llena de paz",
        "texto": "Que nunca falte la luz del amanecer sobre tu mesa ni el abrigo fiel de quienes te aman de verdad."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué mensaje constructivo trae La Fragilidad en el Tarot Egipcio?",
        "respuesta": "Invita a dejar caer estructuras rígidas o apariencias que ya no te sostienen para reconstruir tu vida con mayor honestidad y liviandad."
      },
      {
        "pregunta": "¿Con qué signo zodiacal se vincula el Arcano XVI?",
        "respuesta": "Se relaciona con Virgo y Mercurio, aportando discernimiento lúcido para detectar fallas a tiempo y ordenar lo esencial."
      },
      {
        "pregunta": "¿Cómo interpretar el aforismo de la luz en La Fragilidad?",
        "respuesta": "Recuerda que la claridad puede llegar temprano, al mediodía o al atardecer: nunca es tarde para ver la verdad y elegir mejor."
      }
    ]
  },
  {
    "numero": 17,
    "romano": "XVII",
    "slug": "la-esperanza",
    "nombre": "La Esperanza",
    "glyph": "♎",
    "deidad": "Khunum y Nut",
    "astrologia": "Libra y Saturno",
    "numerologia": 8,
    "esencia": "Inspiración limpia, esperanza serena, confianza en el porvenir y sanación suave del ánimo.",
    "aforismo": "Unos hombres piden señales para creer, y otros piden sabiduría para obrar; mas el corazón esperanzado lo tiene todo en su esperanza.",
    "consejo": "Hermosísimo para regalar a cualquier persona querida —en especial de Libra— cuando querés transmitir aliento sincero, calma, belleza y confianza en el año que arranca.",
    "derechoResumen": "Es una de las cartas más luminosas del Tarot Egipcio. Anuncia alivio, inspiración artística o afectiva, recuperación de confianza y la certeza serena de que el horizonte vuelve a abrirse con bondad.",
    "invertidoResumen": "Refleja desaliento pasajero, fatiga anímica o dudas sobre el futuro. Recuerda que las estrellas siguen ahí aunque una nube cruce la noche: basta cuidar la pequeña llama de hoy.",
    "signoBadge": "♎ Libra",
    "signoSlug": "libra",
    "titleTag": "La Esperanza (XVII) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Esperanza (Arcano XVII) en el Tarot Egipcio, sus 3 planos, vínculo con Libra y Saturno y 8 dedicatorias.",
    "h1": "La Esperanza (XVII): significado, simbolismo y dedicatorias",
    "lead": "La Esperanza (La Estrella) · Fe Viva, Inspiración y Estrella Guía. Inspiración limpia, esperanza serena, confianza en el porvenir y sanación suave del ánimo. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XVII (N.º 17)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Khunum y Nut"
      },
      {
        "label": "Astrología",
        "valor": "Libra y Saturno"
      },
      {
        "label": "Letra hebrea",
        "valor": "Phe (פ)"
      },
      {
        "label": "Numerología (8)",
        "valor": "Equilibrio cósmico y retribución"
      },
      {
        "label": "Claves esenciales",
        "valor": "Estrella guía · Inspiración serena · Fe renovada"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XVII resuena directamente con Libra y Saturno . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/libra/",
        "nombre": "♎ Horóscopo de Libra",
        "rango": "23 de septiembre al 22 de octubre · Elemento Aire · 12 frases"
      },
      {
        "href": "/cumpleanos-en-septiembre/",
        "nombre": "🎂 Cumpleaños en Septiembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-octubre/",
        "nombre": "🎂 Cumpleaños en Octubre",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Es una de las cartas más luminosas del Tarot Egipcio. Anuncia alivio, inspiración artística o afectiva, recuperación de confianza y la certeza serena de que el horizonte vuelve a abrirse con bondad.",
    "invertidoDetalle": "Refleja desaliento pasajero, fatiga anímica o dudas sobre el futuro. Recuerda que las estrellas siguen ahí aunque una nube cruce la noche: basta cuidar la pequeña llama de hoy.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La gran estrella rodeada de astros menores evoca el cielo de Nut, la bóveda protectora que orienta al viajero en la calma nocturna."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La mente inspirada descubre caminos creativos donde antes solo veía cansancio: la esperanza lúcida siempre abre opciones."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El agua vertida sobre tierra y río anuncia salud que florece, proyectos que reciben apoyo y vínculos transparentes."
      }
    ],
    "filosofiaParrafos": [
      "El número 17 reduce al 8 (1 + 7 = 8), uniendo esperanza con equilibrio duradero. En el Tarot Egipcio, La Esperanza no es ingenuidad pasiva, sino confianza activa que ilumina cada gesto cotidiano.",
      "Hermosísimo para regalar a cualquier persona querida —en especial de Libra— cuando querés transmitir aliento sincero, calma, belleza y confianza en el año que arranca."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Que nunca se apague la estrella linda que te guía",
        "texto": "Incluso en los días nublados sabés encontrar un motivo para sonreír y acompañar a los demás. ¡Muy feliz cumpleaños! Que este año traiga alivio, inspiración y sueños que empiecen a tomar forma."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Un horizonte despejado y sereno para tu nueva vuelta al sol",
        "texto": "Deseo de corazón que estos doce meses te regalen noticias buenas, proyectos que entusiasmen y la certeza tranquila de que lo mejor todavía tiene mucho por dar."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Esperanza viva y cielo despejado",
        "texto": "Que cada mañana de este nuevo año te encuentre con ilusión fresca y gente que te quiere de verdad. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis luminoso por todo lo bueno que viene",
        "texto": "Tu calma y tu esperanza contagian alegría a toda la mesa. ¡Feliz nueva vuelta al sol!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "El corazón esperanzado lleva su propia brújula",
        "texto": "La Esperanza del Tarot Egipcio nos enseña que la confianza serena vale más que cualquier pronóstico. Que este cumpleaños renueve tu inspiración y tu paz."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Confiar paso a paso hace más amable todo el viaje",
        "texto": "Ojalá este nuevo ciclo te encuentre cuidando tus sueños con ternura, belleza y cero apuro."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Estrella guía y esperanza fiel sobre tu casa",
        "texto": "Damos gracias a Dios por tu vida luminosa y pedimos que la esperanza viva sostenga tu corazón, tu salud y los proyectos de toda tu familia."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Bendición serena para un año lleno de inspiración",
        "texto": "Que la gracia ilumine cada decisión tuya y llene tus días de consuelo, gratitud y alegrías compartidas."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué anuncia La Esperanza (Arcano XVII) en el Tarot Egipcio?",
        "respuesta": "Anuncia renovación de la fe, inspiración creativa, paz emocional, alivio tras momentos exigentes y perspectivas luminosas para el futuro."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se vincula La Esperanza?",
        "respuesta": "Corresponde a Libra y Saturno, armonizando la búsqueda de belleza y paz con la constancia para sostener los sueños."
      },
      {
        "pregunta": "¿Qué diferencia a La Esperanza de una ilusión pasajera?",
        "respuesta": "Que une confianza del corazón con serenidad práctica: ilumina el camino y te anima a obrar con calma y transparencia."
      }
    ]
  },
  {
    "numero": 18,
    "romano": "XVIII",
    "slug": "el-crepusculo",
    "nombre": "El Crepúsculo",
    "glyph": "♏",
    "deidad": "Khepri",
    "astrologia": "Escorpio y Urano",
    "numerologia": 9,
    "esencia": "Mundo interior rico, sensibilidad intuitiva, lectura de símbolos y valentía para cruzar la penumbra hacia el alba.",
    "aforismo": "Sea tu caridad granero inagotable y tu paciencia no menos inagotable que tu caridad.",
    "consejo": "Ideal para personas profundas, artísticas o nacidas bajo Escorpio que valoran las charlas nocturnas honestas y la comprensión real.",
    "derechoResumen": "Abre la puerta al mundo de la intuición, la imaginación creadora y los sentimientos profundos. Pide caminar con atención serena cuando no todo está todavía a plena luz, distinguiendo intuición genuina de fantasía temerosa.",
    "invertidoResumen": "Señala disipación de confusiones, escepticismo práctico que aclara una duda o necesidad de verificar hechos concretos antes de sacar conclusiones emotivas.",
    "signoBadge": "♏ Escorpio",
    "signoSlug": "escorpio",
    "titleTag": "El Crepúsculo (XVIII) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Crepúsculo (Arcano XVIII) en el Tarot Egipcio, sus 3 planos, vínculo con Escorpio y Urano y 8 dedicatorias.",
    "h1": "El Crepúsculo (XVIII): significado, simbolismo y dedicatorias",
    "lead": "El Crepúsculo (La Luna) · Intuición Profunda, Sueños y Sensibilidad. Mundo interior rico, sensibilidad intuitiva, lectura de símbolos y valentía para cruzar la penumbra hacia el alba. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XVIII (N.º 18)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Khepri"
      },
      {
        "label": "Astrología",
        "valor": "Escorpio y Urano"
      },
      {
        "label": "Letra hebrea",
        "valor": "Tzade (צ)"
      },
      {
        "label": "Numerología (9)",
        "valor": "Madurez, fruto y cierre de ciclo"
      },
      {
        "label": "Claves esenciales",
        "valor": "Intuición honda · Sueños lúcidos · Sensibilidad viva"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XVIII resuena directamente con Escorpio y Urano . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/escorpio/",
        "nombre": "♏ Horóscopo de Escorpio",
        "rango": "23 de octubre al 21 de noviembre · Elemento Agua · 12 frases"
      },
      {
        "href": "/cumpleanos-en-octubre/",
        "nombre": "🎂 Cumpleaños en Octubre",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-noviembre/",
        "nombre": "🎂 Cumpleaños en Noviembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Abre la puerta al mundo de la intuición, la imaginación creadora y los sentimientos profundos. Pide caminar con atención serena cuando no todo está todavía a plena luz, distinguiendo intuición genuina de fantasía temerosa.",
    "invertidoDetalle": "Señala disipación de confusiones, escepticismo práctico que aclara una duda o necesidad de verificar hechos concretos antes de sacar conclusiones emotivas.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La luna entre las dos torres recuerda que incluso en el crepúsculo el camino continúa trazado hacia el horizonte."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Los dos guardianes a la orilla simbolizan la convivencia entre instinto y razón: escuchar ambos sin dejarse asustar por sombras."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El escarabajo Khepri emergiendo del agua anuncia la gestación silenciosa del amanecer: lo que hoy madura en reserva pronto saldrá a la luz."
      }
    ],
    "filosofiaParrafos": [
      "El número 18 reduce al 9 (1 + 8 = 9), conectando sensibilidad profunda con maduración emocional. En el Tarot Egipcio, El Crepúsculo enseña paciencia compasiva con los propios procesos internos.",
      "Ideal para personas profundas, artísticas o nacidas bajo Escorpio que valoran las charlas nocturnas honestas y la comprensión real."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu sensibilidad profunda ve bellezas que otros pasan de largo",
        "texto": "Tenés una mirada honesta capaz de leer lo que nadie dice y acompañar desde el alma. ¡Muy feliz cumpleaños! Que este año cuide tus sueños, tu descanso y tus afectos más verdaderos."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Que la claridad abrace cada noche y cada amanecer tuyo",
        "texto": "Deseo que esta nueva vuelta al sol disipe cualquier duda vieja y te regale calma interior, inspiración linda y vínculos transparentes."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Intuición clara y noches en paz",
        "texto": "Que tus sueños encuentren tierra fértil y tu corazón descanse sereno todo el año. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu mirada profunda y leal",
        "texto": "Gracias por no quedarte nunca en lo superficial. ¡Que tengas un año luminoso y muy feliz!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Paciencia y ternura son la mejor linterna en la penumbra",
        "texto": "El Arcano XVIII del Tarot Egipcio recuerda que cada amanecer se gesta primero en silencio. Que este cumpleaños honre tu intuición y te acerque claridad serena."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Escuchar tu mundo interior sin miedo ordena el rumbo",
        "texto": "Ojalá estos doce meses combinen tu imaginación viva con pasos concretos hacia todo lo que deseás construir."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Paz para tus pensamientos y descanso en tus noches",
        "texto": "Pedimos a Dios que calme cualquier inquietud oculta, guarde tus sueños y te regale amaneceres llenos de claridad y consuelo."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Caridad generosa y paciencia bendecida este año",
        "texto": "Que la luz divina acompañe tu corazón sensible y proteja siempre a las personas que más amás."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué simboliza El Crepúsculo (La Luna) en el Tarot Egipcio?",
        "respuesta": "Es el Arcano XVIII y representa la intuición profunda, los sueños, la sensibilidad emocional y la gestación silenciosa de una nueva etapa."
      },
      {
        "pregunta": "¿Por qué aparece el escarabajo Khepri en este arcano?",
        "respuesta": "En el antiguo Egipto, Khepri simbolizaba el sol naciente que se prepara durante la noche para volver a brillar al alba."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se relaciona el Arcano XVIII?",
        "respuesta": "Corresponde a Escorpio y Urano, uniendo intensidad emocional e intuición penetrante con lucidez transformadora."
      }
    ]
  },
  {
    "numero": 19,
    "romano": "XIX",
    "slug": "la-inspiracion",
    "nombre": "La Inspiración",
    "glyph": "♐",
    "deidad": "Geb y Ra solar",
    "astrologia": "Sagitario y Plutón",
    "numerologia": 1,
    "esencia": "Alegría transparente, éxito merecido, amor puro, salud vital y entusiasmo que ilumina a toda la mesa.",
    "aforismo": "Toma el escudo de tu fe y avanza con paso decidido, ya sea en favor del viento o contra todos los vientos.",
    "consejo": "El arcano perfecto por excelencia para cumpleaños luminosos, nacidos bajo Sagitario o personas que irradian optimismo y calidez en cada reunión.",
    "derechoResumen": "Es el emblema de la plenitud luminosa: alegría sincera, relaciones claras, reconocimiento, buena salud y proyectos que brillan a la luz del día. Invita a celebrar sin culpa y compartir el calor de lo vivido.",
    "invertidoResumen": "Habla solo de un desánimo temporal, un retraso breve o cansancio que opaca momentáneamente el disfrute. El sol sigue intacto: alcanza con descansar y volver a mirar lo bueno ya logrado.",
    "signoBadge": "♐ Sagitario",
    "signoSlug": "sagitario",
    "titleTag": "La Inspiración (XIX) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Inspiración (Arcano XIX) en el Tarot Egipcio, sus 3 planos, vínculo con Sagitario y Plutón y 8 dedicatorias.",
    "h1": "La Inspiración (XIX): significado, simbolismo y dedicatorias",
    "lead": "La Inspiración (El Sol) · Alegría Plena, Claridad y Amor Compartido. Alegría transparente, éxito merecido, amor puro, salud vital y entusiasmo que ilumina a toda la mesa. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XIX (N.º 19)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Geb y Ra solar"
      },
      {
        "label": "Astrología",
        "valor": "Sagitario y Plutón"
      },
      {
        "label": "Letra hebrea",
        "valor": "Quoph (ק)"
      },
      {
        "label": "Numerología (1)",
        "valor": "Principio creador y voluntad"
      },
      {
        "label": "Claves esenciales",
        "valor": "Claridad solar · Alegría compartida · Éxito limpio"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XIX resuena directamente con Sagitario y Plutón . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/sagitario/",
        "nombre": "♐ Horóscopo de Sagitario",
        "rango": "22 de noviembre al 21 de diciembre · Elemento Fuego · 12 frases"
      },
      {
        "href": "/cumpleanos-en-noviembre/",
        "nombre": "🎂 Cumpleaños en Noviembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-diciembre/",
        "nombre": "🎂 Cumpleaños en Diciembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Es el emblema de la plenitud luminosa: alegría sincera, relaciones claras, reconocimiento, buena salud y proyectos que brillan a la luz del día. Invita a celebrar sin culpa y compartir el calor de lo vivido.",
    "invertidoDetalle": "Habla solo de un desánimo temporal, un retraso breve o cansancio que opaca momentáneamente el disfrute. El sol sigue intacto: alcanza con descansar y volver a mirar lo bueno ya logrado.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El disco solar irradiando gotas de luz simboliza la verdad sin sombras y la bendición visible sobre la vida cotidiana."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "Dos figuras tomadas de la mano bajo el sol reflejan amistad transparente, pareja en sintonía y acuerdos donde ambos crecen."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Las flores abiertas en la tierra confirman vitalidad, festejos felices y prosperidad que se disfruta en compañía."
      }
    ],
    "filosofiaParrafos": [
      "El número 19 reduce al 10 y al 1 (1 + 9 = 10 → 1): la luz plena que inaugura una etapa radiante. En el Tarot Egipcio, La Inspiración (El Sol) celebra la gratitud abierta y el entusiasmo genuino.",
      "El arcano perfecto por excelencia para cumpleaños luminosos, nacidos bajo Sagitario o personas que irradian optimismo y calidez en cada reunión."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Tu alegría sincera ilumina cada lugar donde llegás",
        "texto": "Hay personas que son como abrir las persianas a la mañana, y vos tenés esa luz solar todo el año. ¡Muy feliz cumpleaños! Que la vida te devuelva hoy el doble de alegría, salud y abrazos."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Que este año brille claro y sin sombras para vos",
        "texto": "Celebramos tu corazón generoso, tu sonrisa franca y las ganas lindas que le ponés a cada proyecto. ¡Muy feliz vuelta al sol llena de logros y amor compartido!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Sol pleno, salud y risas largas",
        "texto": "Que estos doce meses te regalen días claros, éxitos limpios y sobremesas inolvidables. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis solar por tu entusiasmo contagioso",
        "texto": "Gracias por traer calidez y optimismo a nuestras vidas. ¡Que tengas un año radiante!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Avanzar con paso decidido convierte el optimismo en realidad",
        "texto": "La Inspiración (El Sol) del Tarot Egipcio recuerda que la claridad del corazón despeja cualquier incertidumbre. Que este cumpleaños celebre tus logros y abra un ciclo luminoso."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Compartir la alegría la multiplica sin agotarla",
        "texto": "Ojalá este nuevo año te encuentre disfrutando cada pequeña victoria con gratitud y buena compañía."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Luz abundante y gozo verdadero sobre tu hogar",
        "texto": "Damos gracias a Dios por tu vida alegre y pedimos que Su luz siga alumbrando tus pasos con salud, fe firme y abundancia en familia."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Bendición clara para un año lleno de gratitud",
        "texto": "Que cada mañana despierte tu corazón con paz, propósito luminoso y motivos reales para dar gracias."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué significa el Arcano XIX (La Inspiración / El Sol) en el Tarot Egipcio?",
        "respuesta": "Representa la claridad plena, la alegría compartida, el amor transparente, la vitalidad y el éxito logrado con autenticidad."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se vincula El Sol en el Tarot Egipcio?",
        "respuesta": "Se relaciona con Sagitario y Plutón, uniendo optimismo expansivo y espíritu libre con una vitalidad transformadora."
      },
      {
        "pregunta": "¿Qué indica cuando aparece invertido?",
        "respuesta": "Nunca anuncia desgracia: solo señala una nube pasajera, fatiga o una pequeña demora antes de volver a disfrutar con claridad."
      }
    ]
  },
  {
    "numero": 20,
    "romano": "XX",
    "slug": "la-resurreccion",
    "nombre": "La Resurrección",
    "glyph": "♑",
    "deidad": "Atón (Ba y Ka)",
    "astrologia": "Capricornio y Marte",
    "numerologia": 2,
    "esencia": "Llamado interior a renovarse, reconciliación sana con el pasado, lucidez y segundo aire lleno de propósito.",
    "aforismo": "Flor en el manzano, fruto en la viña, sembrado en madurez.",
    "consejo": "Muy especial para cumpleaños de madurez, reencuentros familiares o personas que están recuperando un sueño postergado con renovada claridad.",
    "derechoResumen": "Anuncia un despertar claro: volver a elegir tu vocación, reconciliarte con tu historia, recibir una noticia liberadora o sentir un renacer de entusiasmo maduro. Todo lo sembrado empieza a mostrar su sentido.",
    "invertidoResumen": "Señala postergación, excesiva autocrítica o apego a errores viejos que ya merecen perdón. Invita a escuchar el llamado del presente y avanzar sin culpa.",
    "signoBadge": "♑ Capricornio",
    "signoSlug": "capricornio",
    "titleTag": "La Resurrección (XX) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Resurrección (Arcano XX) en el Tarot Egipcio, sus 3 planos, vínculo con Capricornio y Marte y 8 dedicatorias.",
    "h1": "La Resurrección (XX): significado, simbolismo y dedicatorias",
    "lead": "La Resurrección (El Juicio Final) · Despertar Consciente y Reconciliación. Llamado interior a renovarse, reconciliación sana con el pasado, lucidez y segundo aire lleno de propósito. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XX (N.º 20)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Atón (Ba y Ka)"
      },
      {
        "label": "Astrología",
        "valor": "Capricornio y Marte"
      },
      {
        "label": "Letra hebrea",
        "valor": "Resch (ר)"
      },
      {
        "label": "Numerología (2)",
        "valor": "Dualidad fértil y receptividad"
      },
      {
        "label": "Claves esenciales",
        "valor": "Despertar consciente · Reconciliación sana · Propósito renovado"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XX resuena directamente con Capricornio y Marte . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/capricornio/",
        "nombre": "♑ Horóscopo de Capricornio",
        "rango": "22 de diciembre al 19 de enero · Elemento Tierra · 12 frases"
      },
      {
        "href": "/cumpleanos-en-diciembre/",
        "nombre": "🎂 Cumpleaños en Diciembre",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-enero/",
        "nombre": "🎂 Cumpleaños en Enero",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Anuncia un despertar claro: volver a elegir tu vocación, reconciliarte con tu historia, recibir una noticia liberadora o sentir un renacer de entusiasmo maduro. Todo lo sembrado empieza a mostrar su sentido.",
    "invertidoDetalle": "Señala postergación, excesiva autocrítica o apego a errores viejos que ya merecen perdón. Invita a escuchar el llamado del presente y avanzar sin culpa.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El Ba alado sobre el cuerpo evoca la unión del espíritu despierto con la vida cotidiana: vivir presente y con sentido."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "El toque de clarín simboliza la lucidez que despeja distracciones y te recuerda qué es lo verdaderamente importante."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Anuncia reencuentros valiosos, perdones que alivian, recuperación de proyectos postergados y madurez fecunda."
      }
    ],
    "filosofiaParrafos": [
      "El número 20 reduce al 2 (2 + 0 = 2): reconciliación entre pasado y futuro, entre razón y corazón. En el Tarot Egipcio, La Resurrección celebra el arte de volver a florecer en madurez.",
      "Muy especial para cumpleaños de madurez, reencuentros familiares o personas que están recuperando un sueño postergado con renovada claridad."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Qué hermoso verte florecer con tanta lucidez y paz",
        "texto": "Cada experiencia que viviste te dio una claridad serena que hoy se nota en tu sonrisa. ¡Muy feliz cumpleaños! Que este año renueve tus ilusiones y acerque reencuentros llenos de cariño."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Nunca es tarde para un segundo aire lleno de alegría",
        "texto": "Ojalá esta nueva vuelta al sol despierte proyectos que te entusiasmen de verdad y deje atrás cualquier culpa o peso viejo."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Despertar claro y propósito vivo",
        "texto": "Que este año traiga buenas noticias, paz con el ayer y entusiasmo fresco por lo que viene. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu madurez luminosa",
        "texto": "Todo lo sembrado con amor siempre vuelve a dar fruto. ¡Feliz nueva vuelta al sol!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Flor en el manzano y fruto maduro a su debido tiempo",
        "texto": "El Arcano XX del Tarot Egipcio enseña que nada de lo vivido fue en vano cuando lo mirás con comprensión. Que este cumpleaños celebre tu despertar más sereno."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Reconciliarte con tu camino multiplica tu libertad",
        "texto": "Que estos doce meses te regalen liviandad, decisiones claras y la alegría de escuchar tu verdadera vocación."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Renovación espiritual y paz verdadera en tu casa",
        "texto": "Damos gracias a Dios por cada nueva oportunidad que regala y pedimos que este año despierte alegría fresca, salud y armonía en tu familia."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Gracia nueva para celebrar el presente con gratitud",
        "texto": "Que la paz divina sane el pasado, fortalezca tus pasos hoy y bendiga cada fruto maduro de tu vida."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué representa el Arcano XX (La Resurrección / El Juicio Final) en el Tarot Egipcio?",
        "respuesta": "Representa el despertar consciente, la renovación de propósito, la reconciliación con la propia historia y las buenas noticias que abren una nueva etapa."
      },
      {
        "pregunta": "¿Con qué signo zodiacal se asocia el Arcano XX?",
        "respuesta": "Se vincula con Capricornio y Marte, combinando madurez sostenida y determinación práctica para concretar una vocación."
      },
      {
        "pregunta": "¿Qué significan el Ba y el Ka en la iconografía egipcia de esta lámina?",
        "respuesta": "El Ba (alma libre) y el Ka (energía vital) simbolizan la integración armoniosa entre tu propósito interior y tu vida cotidiana."
      }
    ]
  },
  {
    "numero": 21,
    "romano": "XXI",
    "slug": "la-transmutacion",
    "nombre": "La Transmutación",
    "glyph": "♒",
    "deidad": "Shu",
    "astrologia": "Acuario y Neptuno",
    "numerologia": 3,
    "esencia": "Cumplimiento feliz de un gran ciclo, mérito reconocido, integración plena y apertura al mundo.",
    "aforismo": "En su secreto no entre mi alma, ni en su puerto mi navío.",
    "consejo": "Extraordinario para celebrar grandes logros, aniversarios redondos, graduaciones o cumpleaños de Acuario llenos de horizontes amplios.",
    "derechoResumen": "Corona el recorrido con realización plena, éxito consolidado, viajes importantes y sensación profunda de estar en tu lugar. Confirma que los cuatro planos de tu vida encuentran armonía gracias a tu evolución.",
    "invertidoResumen": "Señala un cierre todavía incompleto o el último tramo antes de festejar un logro. Pide dar ese paso final sin bajar los brazos justo frente a la meta.",
    "signoBadge": "♒ Acuario",
    "signoSlug": "acuario",
    "titleTag": "La Transmutación (XXI) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de La Transmutación (Arcano XXI) en el Tarot Egipcio, sus 3 planos, vínculo con Acuario y Neptuno y 8 dedicatorias.",
    "h1": "La Transmutación (XXI): significado, simbolismo y dedicatorias",
    "lead": "La Transmutación (El Mundo) · Plenitud, Logro Total y Armonía. Cumplimiento feliz de un gran ciclo, mérito reconocido, integración plena y apertura al mundo. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XXI (N.º 21)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Shu"
      },
      {
        "label": "Astrología",
        "valor": "Acuario y Neptuno"
      },
      {
        "label": "Letra hebrea",
        "valor": "Shin (ש)"
      },
      {
        "label": "Numerología (3)",
        "valor": "Triplicidad y creación viva"
      },
      {
        "label": "Claves esenciales",
        "valor": "Plenitud lograda · Mérito reconocido · Horizontes amplios"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XXI resuena directamente con Acuario y Neptuno . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/acuario/",
        "nombre": "♒ Horóscopo de Acuario",
        "rango": "20 de enero al 18 de febrero · Elemento Aire · 12 frases"
      },
      {
        "href": "/cumpleanos-en-enero/",
        "nombre": "🎂 Cumpleaños en Enero",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-febrero/",
        "nombre": "🎂 Cumpleaños en Febrero",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Corona el recorrido con realización plena, éxito consolidado, viajes importantes y sensación profunda de estar en tu lugar. Confirma que los cuatro planos de tu vida encuentran armonía gracias a tu evolución.",
    "invertidoDetalle": "Señala un cierre todavía incompleto o el último tramo antes de festejar un logro. Pide dar ese paso final sin bajar los brazos justo frente a la meta.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "La corona ovalada rodeada por los cuatro símbolos elementales representa el universo integrado en equilibrio."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "La danza serena en el centro muestra que cuando dominás el miedo, el aprendizaje se vuelve liviandad y celebración."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "Anuncia metas concretadas, títulos, reconocimientos, viajes soñados y estabilidad lograda con mérito propio."
      }
    ],
    "filosofiaParrafos": [
      "El número 21 reduce al 3 (2 + 1 = 3): creación culminada y gozosa. En el Tarot Egipcio, La Transmutación enseña que cada experiencia previa —fácil o difícil— se integró en una obra más completa.",
      "Extraordinario para celebrar grandes logros, aniversarios redondos, graduaciones o cumpleaños de Acuario llenos de horizontes amplios."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Qué orgullo celebrar esta plenitud que te ganaste a pulso",
        "texto": "Mirar tu recorrido emociona porque supiste transformar cada etapa en crecimiento real. ¡Muy feliz cumpleaños! Que este año disfrutes a fondo tus logros, tus afectos y los horizontes nuevos que se abren."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "El mundo queda chico para las cosas lindas que merecés",
        "texto": "Ojalá esta nueva vuelta al sol te encuentre en paz con todo lo alcanzado y con entusiasmo fresco para viajar, crear y celebrar junto a tu gente."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Plenitud, logros y horizonte amplio",
        "texto": "Por un año redondo, luminoso y lleno de metas cumplidas con alegría. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis alto por un ciclo extraordinario",
        "texto": "Transformaste esfuerzo en armonía y hoy celebramos tu camino. ¡Feliz vuelta al sol!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Integrar todo lo vivido te devuelve a tu mejor lugar",
        "texto": "La Transmutación del Tarot Egipcio corona el viaje recordando que la plenitud se construye sumando experiencia, afecto y libertad. Feliz cumpleaños y gran celebración."
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Celebrar los cierres felices prepara nuevas aventuras",
        "texto": "Tomate un momento hoy para reconocer cuánto creciste y disfrutar el paisaje antes de elegir la próxima cima."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Plenitud bendecida y gratitud honda por tu camino",
        "texto": "Damos gracias a Dios por cada logro de tu vida y pedimos que Su paz corone tu hogar con salud, viajes guardados y alegría compartida."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Armonía completa para tu nuevo ciclo de vida",
        "texto": "Que nunca falten motivos para agradecer ni brazos cercanos para celebrar cada bendición que llegue este año."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Qué representa La Transmutación (Arcano XXI) en el Tarot Egipcio?",
        "respuesta": "Equivalente a El Mundo, simboliza la culminación exitosa de un ciclo, la plenitud interior, el reconocimiento merecido y la apertura de nuevos horizontes."
      },
      {
        "pregunta": "¿Con qué signo zodiacal se vincula La Transmutación?",
        "respuesta": "Corresponde a Acuario y Neptuno, uniendo visión amplia, libertad creativa y sentido de pertenencia universal."
      },
      {
        "pregunta": "¿Qué aconseja cuando aparece invertida?",
        "respuesta": "Anima a terminar ese detalle pendiente que falta para cerrar la etapa con satisfacción completa antes de saltar al siguiente proyecto."
      }
    ]
  },
  {
    "numero": 22,
    "romano": "XXII",
    "slug": "el-loco",
    "nombre": "El Loco",
    "glyph": "♓",
    "deidad": "Neith",
    "astrologia": "Piscis y Venus",
    "numerologia": 4,
    "esencia": "Comienzo libre sin prejuicios, asombro intacto, aventura creadora y confianza para abrir rutas inéditas.",
    "aforismo": "En su secreto no entre mi alma, ni en su puerto mi navío; camina despierto hacia el horizonte nuevo.",
    "consejo": "Ideal para espíritus libres, creativos, viajeros, jóvenes que inician una etapa o personas de Piscis que conservan intacta la capacidad de soñar y sorprenderse.",
    "derechoResumen": "Celebra la espontaneidad lúcida, los comienzos frescos, el deseo de explorar y la libertad de animarte a algo nuevo sin cargar miedos viejos. Invita a confiar en el aprendizaje vivo del camino.",
    "invertidoResumen": "Advierte decisiones apresuradas sin mirar dónde pisás, dispersión o apatía para dar un salto que venís deseando. Combina entusiasmo libre con un mínimo de prudencia práctica.",
    "signoBadge": "♓ Piscis",
    "signoSlug": "piscis",
    "titleTag": "El Loco (XXII) en el Tarot Egipcio: significado y dedicatorias - ParaCumpleanos",
    "metaDesc": "Descubrí el significado derecho e invertido de El Loco (Arcano XXII) en el Tarot Egipcio, sus 3 planos, vínculo con Piscis y Venus y 8 dedicatorias.",
    "h1": "El Loco (XXII): significado, simbolismo y dedicatorias",
    "lead": "El Loco (El Regreso) · Nuevo Comienzo, Espontaneidad y Libertad. Comienzo libre sin prejuicios, asombro intacto, aventura creadora y confianza para abrir rutas inéditas. En esta guía editorial de alto valor recorremos su lectura al derecho e invertida, su estructura en tres planos, su relación directa con el horóscopo y 8 dedicatorias originales listas para personalizar en tarjeta PNG o compartir por WhatsApp.",
    "fichaDl": [
      {
        "label": "Arcano y número",
        "valor": "XXII (N.º 22)"
      },
      {
        "label": "Deidad egipcia",
        "valor": "Neith"
      },
      {
        "label": "Astrología",
        "valor": "Piscis y Venus"
      },
      {
        "label": "Letra hebrea",
        "valor": "Thaw (ת)"
      },
      {
        "label": "Numerología (4)",
        "valor": "Estabilidad y los cuatro elementos"
      },
      {
        "label": "Claves esenciales",
        "valor": "Comienzo libre · Asombro vivo · Aventura creativa"
      }
    ],
    "zodiacoIntro": "En la tradición astrológica del Tarot Egipcio, el Arcano XXII resuena directamente con Piscis y Venus . Explorá su guía zodiacal y las colecciones mensuales asociadas:",
    "enlacesZodiaco": [
      {
        "href": "/horoscopo/piscis/",
        "nombre": "♓ Horóscopo de Piscis",
        "rango": "19 de febrero al 20 de marzo · Elemento Agua · 12 frases"
      },
      {
        "href": "/cumpleanos-en-febrero/",
        "nombre": "🎂 Cumpleaños en Febrero",
        "rango": "Colección completa con 70 dedicatorias originales"
      },
      {
        "href": "/cumpleanos-en-marzo/",
        "nombre": "🎂 Cumpleaños en Marzo",
        "rango": "Colección completa con 70 dedicatorias originales"
      }
    ],
    "derechoDetalle": "Celebra la espontaneidad lúcida, los comienzos frescos, el deseo de explorar y la libertad de animarte a algo nuevo sin cargar miedos viejos. Invita a confiar en el aprendizaje vivo del camino.",
    "invertidoDetalle": "Advierte decisiones apresuradas sin mirar dónde pisás, dispersión o apatía para dar un salto que venís deseando. Combina entusiasmo libre con un mínimo de prudencia práctica.",
    "planos": [
      {
        "nombre": "Plano Superior (Espiritual)",
        "texto": "El sol naciente sobre el viajero recuerda que toda sabiduría profunda vuelve a la sencillez curiosa de quien sabe que siempre tiene algo por descubrir."
      },
      {
        "nombre": "Plano Central (Mental)",
        "texto": "El pequeño atado al hombro simboliza viajar liviano: llevar solo la experiencia útil y soltar el equipaje innecesario."
      },
      {
        "nombre": "Plano Inferior (Físico y cotidiano)",
        "texto": "El paso abierto hacia terreno nuevo anuncia aventuras, proyectos originales, cambios refrescantes y encuentros sorpresivos."
      }
    ],
    "filosofiaParrafos": [
      "En el Tarot Egipcio, El Loco ocupa el lugar 22 (también leído como el 0 que reinicia el círculo) y reduce al 4 (2 + 2 = 4): la libertad más fecunda sabe caminar por la tierra sin perder la capacidad de asombro.",
      "Ideal para espíritus libres, creativos, viajeros, jóvenes que inician una etapa o personas de Piscis que conservan intacta la capacidad de soñar y sorprenderse."
    ],
    "dedicatorias": [
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Que nunca se pierda tu capacidad hermosa de asombrarte",
        "texto": "Admiro cómo te animás a empezar cosas nuevas con una frescura que contagia ganas de vivir. ¡Muy feliz cumpleaños! Que este año te regale aventuras lindas, libertad y gente que acompañe tus sueños."
      },
      {
        "tono": "Emotivo y cercano",
        "palabrasLabel": "",
        "titulo": "Equipaje liviano y caminos nuevos para esta vuelta al sol",
        "texto": "Ojalá estos doce meses te sorprendan con paisajes nuevos, ideas originales y la alegría inmensa de animarte a ser fiel a vos mismo."
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "¡Feliz cumple! Libertad, asombro y rutas nuevas",
        "texto": "Que nunca falten planes espontáneos, risas limpias y ganas de descubrir el mundo. ¡Muy feliz cumpleaños!"
      },
      {
        "tono": "Breve para WhatsApp",
        "palabrasLabel": "",
        "titulo": "Brindis por tu espíritu curioso y libre",
        "texto": "Empezar liviano siempre lleva más lejos. ¡Que sea un año increíble!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Volver a empezar con mirada limpia es una forma de sabiduría",
        "texto": "El Arcano XXII del Tarot Egipcio cierra y reinicia toda la baraja recordando que la vida siempre ofrece comienzos frescos. ¡Feliz cumpleaños y gran aventura!"
      },
      {
        "tono": "Reflexivo y simbólico",
        "palabrasLabel": "",
        "titulo": "Animarse con curiosidad vence cualquier rutina gris",
        "texto": "Que este nuevo ciclo una tu espontaneidad linda con pasos cuidados hacia todo lo que te entusiasma."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Pasos cuidados en cada nuevo comienzo de tu vida",
        "texto": "Pedimos a Dios que cuide tus caminos nuevos, conserve tu alegría limpia y bendiga cada proyecto original que pongas en marcha."
      },
      {
        "tono": "Con fe y gratitud",
        "palabrasLabel": "",
        "titulo": "Confianza serena y cielo abierto para este año",
        "texto": "Damos gracias por tu corazón libre y deseamos que la gracia acompañe siempre tu andar con salud, paz y buena compañía."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Por qué El Loco es el número 22 en el Tarot Egipcio?",
        "respuesta": "Porque completa la rueda de los 22 Arcanos Mayores y al mismo tiempo simboliza el regreso y el nuevo comienzo libre que reinicia todo el ciclo."
      },
      {
        "pregunta": "¿Con qué signo del horóscopo se vincula El Loco?",
        "respuesta": "Se asocia con Piscis y Venus, resonando con imaginación abierta, sensibilidad creativa y amor libre de ataduras rígidas."
      },
      {
        "pregunta": "¿Qué consejo da El Loco en una tirada?",
        "respuesta": "Anima a abrirte a una experiencia nueva con equipaje liviano y entusiasmo honesto, sin descuidar la atención en el primer paso."
      }
    ]
  }
];

export const TAROT_FAQS_INDEX = [
  {
    "pregunta": "¿En qué se diferencia el Tarot Egipcio de otros mazos tradicionales?",
    "respuesta": "El Tarot Egipcio reúne 78 láminas simbólicas divididas en 22 Arcanos Mayores y 56 Arcanos Menores completamente ilustrados e individuales, sin dividirse en los cuatro palos europeos clásicos. Además, cada carta organiza su lectura en tres planos claros: Espiritual (causas), Mental (actitud creadora) y Físico (hechos cotidianos)."
  },
  {
    "pregunta": "¿Cómo se calcula el Arcano de cumpleaños o Arcano natal?",
    "respuesta": "Sumás el día y el mes de nacimiento (y opcionalmente los dígitos del año) y reducís el resultado a un número entre 1 y 22. Si la suma supera 22, se suman nuevamente sus dígitos hasta obtener tu Arcano Mayor de referencia, que en ParaCumpleanos conectamos con tu signo zodiacal y tu mes de cumpleaños."
  },
  {
    "pregunta": "¿El Tarot Egipcio predice un destino fijo o sirve para reflexionar?",
    "respuesta": "En el enfoque psicológico y reflexivo que seguimos en ParaCumpleanos, el Tarot Egipcio es una brújula de autoconocimiento y claridad personal, nunca un oráculo fatalista. Sus símbolos ayudan a ordenar pensamientos, mirar una situación desde otro ángulo y elegir con mayor serenidad."
  },
  {
    "pregunta": "¿Qué significa que una carta salga invertida en una tirada?",
    "respuesta": "Una carta invertida no indica mala suerte inevitable: señala que la energía de ese arcano está en pausa, bloqueada por apuro o pidiendo una revisión interior antes de manifestarse con fluidez."
  },
  {
    "pregunta": "¿Cómo se vinculan los 22 Arcanos Mayores con el Horóscopo de cumpleaños?",
    "respuesta": "Cada Arcano Mayor del Tarot Egipcio tiene una correspondencia astrológica clásica con planetas y signos del zodíaco —por ejemplo, El Mago con Sol en Leo, La Suma Sacerdotisa con Luna en Cáncer o La Esperanza con Libra—. Por eso cada ficha del Tarot enlaza directamente con su signo en /horoscopo/ y con sus meses de nacimiento."
  },
  {
    "pregunta": "¿Puedo usar las lecturas y dedicatorias del Tarot Egipcio gratis y sin registro?",
    "respuesta": "Sí. Tanto el estudio interactivo de tiradas como la calculadora de Arcano natal, el archivo de los 78 arcanos y las dedicatorias personalizables con descarga PNG y Story funcionan 100 % gratis en tu navegador, sin crear cuenta ni enviar tus datos a ningún servidor."
  }
];

export function clasificarMenorPlaneta(astrologia: string): string {
  return String(astrologia || '').split('·')[0].trim();
}

export function notaMenor(astrologia: string): string {
  const partes = String(astrologia || '').split('·');
  return (partes[1] || partes[0] || '').trim();
}

export function clasificarTonoTarot(tonoLabel: string): string {
  const t = String(tonoLabel || '').toLowerCase();
  if (t.includes('breve') || t.includes('whatsapp') || t.includes('corto')) return 'breve';
  if (t.includes('reflexivo')) return 'reflexivo';
  if (t.includes('fe') || t.includes('gratitud') || t.includes('espiritual')) return 'fe';
  return 'emotivo';
}
