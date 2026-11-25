export type TonoDedicatoriaTarot = 'emotivo' | 'breve' | 'reflexivo' | 'fe';

export interface DedicatoriaTarot {
  tono: TonoDedicatoriaTarot;
  titulo: string;
  texto: string;
}

export interface FaqTarot {
  pregunta: string;
  respuesta: string;
}

export interface ArcanoMayor {
  numero: number;
  romano: string;
  slug: string;
  nombre: string;
  tituloTradicional: string;
  deidad: string;
  astrologiaTexto: string;
  signosSlugs: string[];
  letraHebrea: string;
  numerologia: number;
  simboloGlyph: string;
  esencia: string;
  palabrasClave: [string, string, string];
  aforismo: string;
  significadoDerecho: string;
  significadoInvertido: string;
  planoEspiritual: string;
  planoMental: string;
  planoFisico: string;
  filosofiaEsoterica: string;
  consejoCumpleanos: string;
  dedicatorias: DedicatoriaTarot[];
  faqs: FaqTarot[];
}

export const ARCANOS_MAYORES: ArcanoMayor[] = [
  {
    numero: 1,
    romano: 'I',
    slug: 'el-mago',
    nombre: 'El Mago',
    tituloTradicional: 'El Mago · Principio de la Voluntad Creadora',
    deidad: 'Osiris y Thot',
    astrologiaTexto: 'Sol en Leo',
    signosSlugs: ['leo'],
    letraHebrea: 'Aleph (א)',
    numerologia: 1,
    simboloGlyph: '☉',
    esencia: 'Voluntad consciente, destreza práctica y capacidad de convertir una idea en realidad concreta.',
    palabrasClave: ['Iniciativa creadora', 'Dominio de herramientas', 'Confianza lúcida'],
    aforismo: 'Sé en tus obras como eres en tus pensamientos.',
    significadoDerecho:
      'Señala el arranque de una etapa fértil donde contás con los recursos, la mente despierta y el impulso necesarios para materializar un proyecto. Habla de destreza, iniciativa personal, habilidad comunicativa y valentía para dar el primer paso sin esperar permisos externos.',
    significadoInvertido:
      'Advierte indecisión, voluntad dispersa o exceso de duda frente a tus propias capacidades. También invita a revisar si estás postergando una elección importante por miedo a equivocarte o buscando atajos donde hace falta disciplina serena.',
    planoEspiritual:
      'El uraeus solar y el disco alado evocan la inteligencia despierta que baja del cielo hacia la obra humana: toda transformación empieza primero como intención clara.',
    planoMental:
      'El mago sostiene la vara de mando hacia lo alto y señala la mesa con los cuatro elementos simbólicos, recordando que la mente ordenada canaliza energía sin dispersarse.',
    planoFisico:
      'El ibis sagrado de Thot en la base ancla la sabiduría en el gesto cotidiano: aprender un oficio, escribir con verdad y sostener compromisos concretos.',
    filosofiaEsoterica:
      'Representa la unidad primordial del número 1 y el puente entre lo invisible y lo tangible. En la tradición del Tarot Egipcio, El Mago recuerda que no sos espectador pasivo de tu destino: cada palabra, decisión y hábito moldea el ciclo que inaugurás.',
    consejoCumpleanos:
      'Ideal para saludar a alguien que arranca un año lleno de proyectos propios, emprendimientos o decisiones valientes. Reconocé su talento real y animá ese primer paso que viene postergando.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu capacidad de crear caminos nuevos hoy se celebra',
        texto: 'Admiro cómo convertís ideas sueltas en hechos reales sin perder la calidez. Que este nuevo año te encuentre con el pulso firme de El Mago, rodeado de personas que valoran tu ingenio y celebran cada paso que das.'
      },
      {
        tono: 'emotivo',
        titulo: 'Todo lo que necesitás ya vive en tus manos',
        texto: 'Ojalá esta nueva vuelta al sol te confirme lo que quienes te queremos ya vemos hace rato: tenés criterio, corazón y talento de sobra para abrir puertas grandes sin dejar de ser vos.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumpleaños! Voluntad clara y metas en marcha',
        texto: 'Que este ciclo traiga ideas lúcidas, proyectos que avancen sin trabas y alegría en cada comienzo. ¡Muy feliz vuelta al sol!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu iniciativa incansable',
        texto: 'Cuando te proponés algo, hacés que suceda. ¡Feliz cumpleaños y un año brillante lleno de logros propios!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Alineá lo que pensás con lo que construís',
        texto: 'Como enseña el Arcano I del Tarot Egipcio, el verdadero arte está en ser en tus obras lo mismo que sos en tus pensamientos. Que este año nuevo te regale coherencia, foco y satisfacción genuina.'
      },
      {
        tono: 'reflexivo',
        titulo: 'El primer paso siempre ordena el horizonte',
        texto: 'No hace falta tener todo resuelto para empezar un ciclo hermoso: alcanza con elegir con claridad hacia dónde mirar hoy. Que este cumpleaños sea el inicio de una etapa serena y creadora.'
      },
      {
        tono: 'fe',
        titulo: 'Sabiduría y manos guiadas en este nuevo comienzo',
        texto: 'Damos gracias por tu vida despierta y pedimos a Dios que bendiga tu ingenio, tu trabajo diario y cada decisión que emprendas en este nuevo año.'
      },
      {
        tono: 'fe',
        titulo: 'Luz clara para cada proyecto de tu hogar',
        texto: 'Que nunca te falte paz interior, salud firme ni discernimiento sereno para construir con amor todo lo que soñás para vos y los tuyos.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué significa El Mago en el Tarot Egipcio?',
        respuesta: 'Es el Arcano I y representa el principio de la voluntad creadora, la destreza mental y la capacidad de llevar una idea al plano concreto mediante acción consciente.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se vincula El Mago?',
        respuesta: 'Según la correspondencia tradicional del Tarot Egipcio, El Mago se asocia con el Sol y el signo Leo, compartiendo liderazgo cálido, iniciativa y brillo propio.'
      },
      {
        pregunta: '¿Qué mensaje conviene dedicar cuando sale El Mago en un cumpleaños?',
        respuesta: 'Conviene celebrar la iniciativa de la persona homenajeada, reconocer un talento concreto que demostró en el último año y desearle claridad para los proyectos que inicia.'
      }
    ]
  },
  {
    numero: 2,
    romano: 'II',
    slug: 'la-suma-sacerdotisa',
    nombre: 'La Suma Sacerdotisa',
    tituloTradicional: 'La Suma Sacerdotisa · Sabiduría e Intuición Serena',
    deidad: 'Isis',
    astrologiaTexto: 'Luna en Cáncer',
    signosSlugs: ['cancer'],
    letraHebrea: 'Beth (ב)',
    numerologia: 2,
    simboloGlyph: '☽',
    esencia: 'Intuición profunda, prudencia afectiva, memoria sabia y escucha interior antes de actuar.',
    palabrasClave: ['Intuición serena', 'Sabiduría interior', 'Cuidado silencioso'],
    aforismo: 'El viento y las olas van siempre a favor de quien sabe navegar.',
    significadoDerecho:
      'Invita a confiar en tu percepción serena, observar antes de apurarte y honrar los tiempos internos. Habla de sentido común, compenetración emocional, prudencia sabia y comprensión profunda de aquello que no siempre se dice en voz alta.',
    significadoInvertido:
      'Señala superficialidad pasajera, ruido mental que tapa la intuición o resistencia a escuchar una verdad sencilla que ya conocés por dentro. Sugiere bajar el ritmo y evitar juicios apresurados.',
    planoEspiritual:
      'Isis coronada entre los cuernos lunares representa el conocimiento que madura en silencio y la luz receptiva que protege el umbral del templo.',
    planoMental:
      'Las dos columnas del templo simbolizan la armonía entre razón y sensibilidad: ni frialdad extrema ni impulso ciego, sino discernimiento equilibrado.',
    planoFisico:
      'El papiro semiabierto recuerda que cada etapa revela su sentido a su debido tiempo y que aprender a esperar también es una forma de sabiduría práctica.',
    filosofiaEsoterica:
      'El Arcano II encarna la dualidad fecunda del número 2: la mente que observa, la sensibilidad que comprende y la calma que sostiene los vínculos verdaderos. Enseña que escuchar en profundidad ahorra conflictos innecesarios.',
    consejoCumpleanos:
      'Perfecto para dedicar a personas intuitivas, reservadas y leales que sostienen a su entorno con calma y buen consejo. Valorá su escucha silenciosa y deseales paz genuina.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu calma sabia abriga cada charla que compartimos',
        texto: 'Tenés ese don tan poco común de entender lo importante sin necesidad de levantar la voz. ¡Feliz cumpleaños! Que este nuevo año te regale descanso sereno, afectos sinceros y mucha paz en casa.'
      },
      {
        tono: 'emotivo',
        titulo: 'Gratitud honda por tu intuición y tu cuidado fiel',
        texto: 'Siempre sabés cuándo hablar y cuándo abrazar en silencio. Ojalá esta nueva vuelta al sol te devuelva multiplicada toda la ternura lúcida que entregás a quienes te rodean.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Claridad interior y mesa tranquila',
        texto: 'Que nunca falten las tardes serenas, los libros lindos ni la gente de confianza alrededor tuyo. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu sabiduría discreta',
        texto: 'Gracias por mirar siempre un poco más hondo que el resto. ¡Que tengas un año luminoso y en calma!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Quien sabe navegar lee las aguas con serenidad',
        texto: 'Bajo la luz de La Suma Sacerdotisa, este nuevo año te invita a confiar en tu voz interior sin dejarte apurar por el ruido de afuera. Que cada decisión llegue madura y en paz.'
      },
      {
        tono: 'reflexivo',
        titulo: 'La sabiduría también florece en las pausas',
        texto: 'No todo se resuelve corriendo: muchas respuestas verdaderas aparecen cuando te regalás silencio y escucha honesta. Feliz cumpleaños y buen rumbo para esta etapa.'
      },
      {
        tono: 'fe',
        titulo: 'Discernimiento y paz divina sobre tu hogar',
        texto: 'Pedimos a Dios que guarde tu corazón sensible, ilumine tus decisiones con prudencia y llene tu casa de serenidad durante todo este año nuevo.'
      },
      {
        tono: 'fe',
        titulo: 'Abrigo espiritual para cada paso que elijas',
        texto: 'Agradecemos tu presencia serena en nuestras vidas y deseamos que la bendición diaria cuide tu salud, tus sueños y a cada persona que amás.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué representa La Suma Sacerdotisa en el Tarot Egipcio?',
        respuesta: 'Es el Arcano II, asociado a la diosa Isis, y simboliza la sabiduría serena, la intuición confiable, la prudencia y la profundidad emocional.'
      },
      {
        pregunta: '¿Qué signo zodiacal corresponde a La Suma Sacerdotisa?',
        respuesta: 'Se vincula directamente con la Luna y el signo Cáncer, resonando con la memoria afectiva, el hogar cuidado y la sensibilidad protectora.'
      },
      {
        pregunta: '¿Cómo interpretar La Suma Sacerdotisa cuando aparece invertida?',
        respuesta: 'Indica que conviene frenar el apuro, evitar decisiones superficiales y volver a escuchar tu propio criterio con calma antes de responder.'
      }
    ]
  },
  {
    numero: 3,
    romano: 'III',
    slug: 'la-emperatriz',
    nombre: 'La Emperatriz',
    tituloTradicional: 'La Emperatriz · Fecundidad, Creatividad y Abundancia',
    deidad: 'Neftis',
    astrologiaTexto: 'Júpiter en Sagitario',
    signosSlugs: ['sagitario'],
    letraHebrea: 'Ghimel (ג)',
    numerologia: 3,
    simboloGlyph: '♃',
    esencia: 'Creatividad fértil, alegría vital, prosperidad compartida y cuidado armonioso del entorno.',
    palabrasClave: ['Abundancia viva', 'Creatividad fértil', 'Armonía afectiva'],
    aforismo: 'Tejiendo está tu telar, telas para tu uso y telas que no has de usar.',
    significadoDerecho:
      'Anuncia una etapa expansiva de fertilidad creativa, progreso material y bienestar en el hogar. Favorece nacimientos de proyectos, belleza cotidiana, acuerdos generosos y vínculos cálidos que crecen con naturalidad.',
    significadoInvertido:
      'Habla de estancamiento pasajero, fatiga creativa o exceso de preocupación por resultados que todavía están madurando. Pide volver al disfrute sencillo y nutrir primero tu propia energía.',
    planoEspiritual:
      'Las doce estrellas coronan la escena simbolizando los ciclos completos del año y la abundancia ordenada de la naturaleza.',
    planoMental:
      'El cetro de loto y el águila o ave sagrada evocan la mente creativa que transforma materia prima simple en obras duraderas y bellas.',
    planoFisico:
      'La luna bajo sus pies y los frutos de la tierra confirman que la verdadera prosperidad se nota en una mesa compartida, salud y trabajo que da fruto.',
    filosofiaEsoterica:
      'El número 3 representa la síntesis creadora: cuando la voluntad (1) y la sabiduría receptiva (2) se unen, nace la obra viva (3). La Emperatriz celebra la generosidad de la vida y el placer de cuidar lo que crece.',
    consejoCumpleanos:
      'Ideal para madres, artistas, anfitrionas, emprendedores creativos o personas de Sagitario que disfrutan expandirse y compartir alegría alrededor de una mesa abundante.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Todo lo que tocás con cariño florece a tu alrededor',
        texto: 'Tenés la virtud luminosa de hacer crecer lo bueno donde pasás: proyectos, charlas, plantas y afectos. ¡Muy feliz cumpleaños! Que este año te encuentre cosechando abundancia, salud y muchísima alegría.'
      },
      {
        tono: 'emotivo',
        titulo: 'Un ciclo fértil para disfrutar tus frutos con calma',
        texto: 'Después de tanto sembrar para los demás, ojalá esta nueva vuelta al sol te regale cosecha generosa, mesa llena de gente querida y tiempo para disfrutar tus propios sueños.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Abundancia, arte y risas compartidas',
        texto: 'Que nunca falten ideas fértiles, buena comida ni motivos lindos para brindar fuerte. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Prosperidad cálida para tu nuevo año',
        texto: 'Celebramos tu generosidad vital y esa chispa creativa que alegra cada encuentro. ¡Feliz vuelta al sol!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Lo que tejés con constancia siempre vuelve en fruto',
        texto: 'La Emperatriz del Tarot Egipcio recuerda que cada gesto generoso suma a una trama más grande. Que este cumpleaños confirme que tu siembra paciente vale cada esfuerzo.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Crear con disfrute vale más que producir con apuro',
        texto: 'Que estos doce meses te inviten a cuidar tus proyectos con placer y sin agotarte, celebrando el proceso tanto como cada logro.'
      },
      {
        tono: 'fe',
        titulo: 'Bendición abundante sobre tu casa y tus manos',
        texto: 'Damos gracias a Dios por tu corazón generoso y pedimos que multiplique el pan compartido, la salud y la paz en cada rincón de tu hogar.'
      },
      {
        tono: 'fe',
        titulo: 'Cosecha serena y gozo en familia este año',
        texto: 'Que la gracia acompañe cada proyecto nuevo que nace en tu vida y te regale un año fecundo, agradecido y sereno.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué simboliza La Emperatriz en el Tarot Egipcio?',
        respuesta: 'Es el Arcano III y encarna la fertilidad creativa, el progreso, la armonía en el hogar y la capacidad de dar vida y forma a proyectos duraderos.'
      },
      {
        pregunta: '¿Con qué signo zodiacal y planeta se relaciona La Emperatriz?',
        respuesta: 'Se vincula con Júpiter y Sagitario, reflejando expansión generosa, optimismo vital y horizontes abiertos.'
      },
      {
        pregunta: '¿Qué consejo deja el aforismo de La Emperatriz?',
        respuesta: 'Recuerda que toda obra humana teje frutos tanto para uno mismo como para quienes vendrán después, invitando a crear con generosidad y constancia.'
      }
    ]
  },
  {
    numero: 4,
    romano: 'IV',
    slug: 'el-emperador',
    nombre: 'El Emperador',
    tituloTradicional: 'El Emperador · Orden, Firmeza y Estabilidad Real',
    deidad: 'Horus',
    astrologiaTexto: 'Urano en Acuario',
    signosSlugs: ['acuario'],
    letraHebrea: 'Daleth (ד)',
    numerologia: 4,
    simboloGlyph: '⛢',
    esencia: 'Estructura sólida, autoridad serena, responsabilidad cumplida y estabilidad construida paso a paso.',
    palabrasClave: ['Estabilidad firme', 'Autoridad serena', 'Logro concreto'],
    aforismo: 'Al trabajo de tus manos da bendición, y en el del pensamiento pon corazón.',
    significadoDerecho:
      'Marca consolidación, orden práctico, liderazgo confiable y frutos seguros gracias al esfuerzo sostenido. Habla de proteger lo logrado, tomar decisiones claras y sostener compromisos con palabra firme.',
    significadoInvertido:
      'Avisa sobre rigidez excesiva, dificultad para delegar o, en el polo opuesto, falta de orden para sostener un objetivo. Propone firmeza flexible sin perder humanidad.',
    planoEspiritual:
      'El disco y el ankh en lo alto recuerdan que la autoridad auténtica no nace de imponer miedo, sino de cuidar el orden y la vida.',
    planoMental:
      'El gobernante sentado de perfil sobre la piedra cúbica muestra claridad de criterio: mirar lejos mientras se mantienen los pies bien apoyados.',
    planoFisico:
      'El gato o guardián simbólico en el basamento alude a la vigilancia serena de los asuntos domésticos y materiales.',
    filosofiaEsoterica:
      'El número 4 simboliza los cuatro puntos cardinales y la solidez del cuadrado. En el Tarot Egipcio, El Emperador enseña que las ideas valiosas necesitan estructura diaria para sostenerse en el tiempo.',
    consejoCumpleanos:
      'Muy adecuado para padres, referentes familiares, colegas confiables o personas que sostienen la casa y el trabajo con responsabilidad constante.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu palabra firme nos da tranquilidad todos los días',
        texto: 'Qué enorme fortuna contar con alguien que cumple lo que promete y cuida a los suyos con hechos concretos. ¡Muy feliz cumpleaños! Que este año te regale estabilidad, salud y tiempo para descansar sin cargas.'
      },
      {
        tono: 'emotivo',
        titulo: 'Orgullo real por todo lo que construiste con esfuerzo',
        texto: 'Nada de lo que lograste fue casualidad: detrás de cada paso hubo constancia, criterio y corazón noble. ¡Feliz vuelta al sol, rodeado del cariño que merecés!'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Rumbo claro y logros merecidos',
        texto: 'Por un año sólido, tranquilo y lleno de satisfacciones bien ganadas. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Firmeza serena y buenos proyectos este ciclo',
        texto: 'Gracias por ser siempre punto de apoyo cuando hace falta ordenar el camino. ¡Brindemos fuerte por vos!'
      },
      {
        tono: 'reflexivo',
        titulo: 'El orden verdadero nace cuando ponés corazón en el pensamiento',
        texto: 'El Emperador del Tarot Egipcio enseña que la firmeza más valiosa une manos trabajadoras con criterio compasivo. Que este nuevo ciclo consolide tus metas con serenidad.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Cimientos firmes para disfrutar la vida sin urgencias',
        texto: 'Construir estabilidad también sirve para abrir espacio al descanso y al afecto. Ojalá estos doce meses te encuentren disfrutando lo logrado con liviandad.'
      },
      {
        tono: 'fe',
        titulo: 'Bendición sobre el trabajo honrado de tus manos',
        texto: 'Pedimos a Dios que prospere tu esfuerzo diario, proteja a tu familia y te conceda sabiduría serena en cada responsabilidad que asumís.'
      },
      {
        tono: 'fe',
        titulo: 'Fortaleza y paz duradera para tu hogar',
        texto: 'Damos gracias por tu guía fiel y deseamos que la salud firme y la calma habiten tu mesa durante todo este nuevo año.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué indica El Emperador en una lectura de Tarot Egipcio?',
        respuesta: 'Representa estabilidad, autoridad serena, orden material, responsabilidad y la concreción de metas gracias a la constancia.'
      },
      {
        pregunta: '¿Qué correspondencia astrológica tiene El Emperador?',
        respuesta: 'En la tradición del Tarot Egipcio corresponde a Urano y Acuario, uniendo visión clara de futuro con estructura concreta.'
      },
      {
        pregunta: '¿Cómo aplicar el mensaje de El Emperador en la vida cotidiana?',
        respuesta: 'Invita a ordenar prioridades, sostener la palabra dada y combinar rigor práctico con calidez humana hacia quienes dependen de vos.'
      }
    ]
  },
  {
    numero: 5,
    romano: 'V',
    slug: 'el-hierofante',
    nombre: 'El Hierofante',
    tituloTradicional: 'El Hierofante · Enseñanza, Consejo y Puente Ético',
    deidad: 'Seth y la Ley Sagrada',
    astrologiaTexto: 'Mercurio en Virgo',
    signosSlugs: ['virgo'],
    letraHebrea: 'He (ה)',
    numerologia: 5,
    simboloGlyph: '☿',
    esencia: 'Transmisión de saber, autoridad moral, buen consejo y respeto por los valores que ordenan la vida.',
    palabrasClave: ['Buen consejo', 'Sabiduría compartida', 'Coherencia ética'],
    aforismo: 'De oídas te había conocido; mas ahora mis ojos te ven y mi corazón te siente.',
    significadoDerecho:
      'Señala aprendizaje valioso, mentoría oportuna, acuerdos respetuosos y claridad ética. Anuncia el encuentro con un buen consejo, una enseñanza útil o el momento de compartir con otros la experiencia que ya maduraste.',
    significadoInvertido:
      'Invita a cuestionar costumbres vacías o dogmas que ya no te representan, evitando tanto la susceptibilidad defensiva como aceptar normas sin reflexión propia.',
    planoEspiritual:
      'El triángulo y la luz superior representan la ley que une cielo y tierra cuando la palabra nace de la experiencia vivida y no de la mera repetición.',
    planoMental:
      'La figura erguida con el báculo de tres niveles alude a la mente que instruye, escucha y tiende puentes entre generaciones.',
    planoFisico:
      'La balanza en la base recuerda que toda enseñanza se verifica en la equidad cotidiana y en el trato respetuoso hacia los demás.',
    filosofiaEsoterica:
      'El número 5 evoca al ser humano consciente (el pentagrama) por encima de los cuatro elementos. El Hierofante recuerda que el verdadero maestro nunca presume: acompaña con ejemplo coherente.',
    consejoCumpleanos:
      'Excelente para docentes, abuelos, mentores, amigos de buen criterio o personas de Virgo cuya experiencia práctica siempre aclara dudas.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tus consejos honestos siempre llegan en el momento justo',
        texto: 'Hay personas que hablan mucho y personas que, con dos frases claras, te acomodan la semana entera. Vos sos de las segundas. ¡Muy feliz cumpleaños y gracias por tu lucidez generosa!'
      },
      {
        tono: 'emotivo',
        titulo: 'Aprender a tu lado siempre hace más liviano el camino',
        texto: 'Celebramos tu coherencia, tu paciencia para explicar y esa integridad tranquila con la que te manejás en la vida. ¡Que tengas un año lleno de salud y afectos reales!'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Sabiduría serena y buenas charlas',
        texto: 'Por otro año compartiendo criterio claro, libros buenos y mesas tranquilas con tu gente. ¡Muy feliz vuelta al sol!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu ejemplo cotidiano',
        texto: 'Enseñás mucho más con cómo vivís que con cualquier discurso. ¡Feliz cumpleaños y un año en paz!'
      },
      {
        tono: 'reflexivo',
        titulo: 'El conocimiento verdadero se vuelve experiencia viva',
        texto: 'El Hierofante del Tarot Egipcio nos recuerda la diferencia entre saber algo de oídas y sentirlo con el corazón despierto. Que este nuevo año te regale descubrimientos profundos.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Honrar las raíces sin perder la mirada libre',
        texto: 'Ojalá este ciclo combine lo mejor de la experiencia aprendida con la frescura de seguir aprendiendo cada semana.'
      },
      {
        tono: 'fe',
        titulo: 'Sabiduría y palabra justa para iluminar a los tuyos',
        texto: 'Agradecemos a Dios por tu vocación de consejo y pedimos que siga guiando tu criterio con humildad, salud y paz familiar.'
      },
      {
        tono: 'fe',
        titulo: 'Gracia diaria y hogar en armonía este año',
        texto: 'Que nunca falte luz espiritual para discernir lo justo ni gratitud alrededor de tu mesa en este nuevo ciclo.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué significa El Hierofante en el Tarot Egipcio?',
        respuesta: 'Es el Arcano V y simboliza la enseñanza genuina, la autoridad moral, el buen consejo, la tradición viva y el puente entre conocimiento y práctica.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se asocia El Hierofante?',
        respuesta: 'Corresponde a Mercurio y Virgo, signos de claridad analítica, vocación de servicio y cuidado honesto por hacer bien las cosas.'
      },
      {
        pregunta: '¿Qué sugiere El Hierofante cuando aparece en una tirada?',
        respuesta: 'Recomienda escuchar un consejo confiable, estudiar a fondo antes de decidir y actuar en coherencia con tus valores.'
      }
    ]
  },
  {
    numero: 6,
    romano: 'VI',
    slug: 'la-indecision',
    nombre: 'La Indecisión',
    tituloTradicional: 'La Indecisión (Los Enamorados) · Elección Libre y Amor Consciente',
    deidad: 'Amón',
    astrologiaTexto: 'Venus en Tauro',
    signosSlugs: ['tauro'],
    letraHebrea: 'Vau (ו)',
    numerologia: 6,
    simboloGlyph: '♀',
    esencia: 'Libre albedrío, elección desde el corazón, amor responsable y armonía entre caminos distintos.',
    palabrasClave: ['Libre elección', 'Amor verdadero', 'Equilibrio afectivo'],
    aforismo: 'Trabajos me das, Señor, mas con ellos fortaleza.',
    significadoDerecho:
      'Habla del momento luminoso en que elegís con conciencia: un vínculo que se afirma, una vocación que se decide o una alianza basada en afecto genuino y respeto mutuo. Celebra la belleza de comprometerse sin perder libertad.',
    significadoInvertido:
      'Refleja dudas prolongadas, miedo a soltar una opción o decisiones tomadas solo por complacer a terceros. Pide honestidad afectiva para elegir lo que realmente resuena con vos.',
    planoEspiritual:
      'El arquero solar en lo alto recuerda que toda elección auténtica apunta hacia un propósito claro y no se deja llevar solo por la inercia.',
    planoMental:
      'La figura central entre dos caminos simboliza la madurez del libre albedrío: elegir implica renunciar a lo accesorio para cuidar lo valioso.',
    planoFisico:
      'El horizonte abierto en la base invita a dar el paso en lo concreto: expresar afecto, confirmar acuerdos y sostener lo elegido con hechos.',
    filosofiaEsoterica:
      'El número 6 encarna la armonía de los opuestos y la belleza de Venus. Aunque su nombre egipcio clásico sea La Indecisión, su enseñanza profunda es la responsabilidad gozosa de elegir bien a quién amar y hacia dónde caminar.',
    consejoCumpleanos:
      'Hermoso para dedicar a parejas, amigos que arrancan una nueva etapa o personas de Tauro que valoran los vínculos estables, la belleza y la calma compartida.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Elegir compartir la vida con vos sigue siendo mi mejor acierto',
        texto: 'En un mundo lleno de apuros y dudas, tener un vínculo claro y luminoso es un regalo enorme. ¡Feliz cumpleaños! Que este año multiplique nuestros buenos ratos, la calma y las ganas de seguir eligiéndonos.'
      },
      {
        tono: 'emotivo',
        titulo: 'Que cada elección de este año nazca desde la paz',
        texto: 'Deseo que esta nueva vuelta al sol te encuentre seguro de tus pasos, rodeado de afectos recíprocos y con el corazón liviano para disfrutar cada día.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Amor claro y caminos que suman',
        texto: 'Que este año te traiga decisiones livianas, buena compañía y muchísimos motivos para sonreír. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por los afectos elegidos con el corazón',
        texto: 'Gracias por caminar cerca con tanta lealtad y belleza cotidiana. ¡Feliz nueva vuelta al sol!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Elegir con conciencia transforma la duda en rumbo',
        texto: 'El Arcano VI enseña que la incertidumbre se disuelve cuando escuchás qué es lo verdaderamente valioso para vos. Que este cumpleaños traiga claridad afectiva y armonía.'
      },
      {
        tono: 'reflexivo',
        titulo: 'La fortaleza llega junto con cada decisión honesta',
        texto: 'No temas a las encrucijadas: cada paso elegido con verdad te acerca a una vida más tuya. Feliz cumpleaños y excelente nuevo ciclo.'
      },
      {
        tono: 'fe',
        titulo: 'Discernimiento y amor fiel para tu nuevo año',
        texto: 'Pedimos a Dios claridad en tus encrucijadas, paz en tus vínculos queridos y la fortaleza serena que siempre acompaña las decisiones justas.'
      },
      {
        tono: 'fe',
        titulo: 'Armonía y bendición sobre tus afectos más cercanos',
        texto: 'Damos gracias por tu corazón noble y deseamos que la unidad, la salud y el cariño sincero abracen tu casa todo el año.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Por qué el Arcano VI se llama La Indecisión en el Tarot Egipcio?',
        respuesta: 'Porque pone el foco en el libre albedrío y el instante decisivo de elegir entre dos caminos con conciencia, ética y afecto verdadero.'
      },
      {
        pregunta: '¿Con qué signo del zodíaco se conecta el Arcano VI?',
        respuesta: 'Se vincula con Venus y Tauro, resaltando la lealtad afectiva, el disfrute de la belleza y los acuerdos duraderos.'
      },
      {
        pregunta: '¿Tiene significado amoroso La Indecisión?',
        respuesta: 'Sí: en posición derecha augura unión armoniosa, afinidad real y decisiones tomadas desde el cariño genuino.'
      }
    ]
  },
  {
    numero: 7,
    romano: 'VII',
    slug: 'el-carro',
    nombre: 'El Carro',
    tituloTradicional: 'El Carro (El Triunfo) · Victoria, Viaje y Dominio Propio',
    deidad: 'Anubis',
    astrologiaTexto: 'Neptuno en Piscis',
    signosSlugs: ['piscis'],
    letraHebrea: 'Zhain (ז)',
    numerologia: 7,
    simboloGlyph: '♆',
    esencia: 'Avance decidido, victoria merecida, autonomía personal y equilibrio de fuerzas opuestas en movimiento.',
    palabrasClave: ['Victoria merecida', 'Rumbo propio', 'Viajes y avance'],
    aforismo: 'Cuando la ciencia entra en tu corazón y la sabiduría es dulce a tu alma, pide y te será dado.',
    significadoDerecho:
      'Anuncia triunfo logrado con temple, avances rápidos, viajes favorables y dominio sereno sobre impulsos contradictorios. Confirma que sos capaz de conducir tus propios proyectos hacia buen puerto.',
    significadoInvertido:
      'Advierte demoras temporales, dispersión de energía o intento de forzar un resultado sin revisar antes la dirección. Recomienda ajustar las riendas antes de acelerar.',
    planoEspiritual:
      'El baldaquino estrellado sobre el auriga señala protección en el viaje y guía alta cuando el propósito es limpio.',
    planoMental:
      'Las dos esfinges —clara y oscura— representan fuerzas contrarias que solo avanzan en línea recta cuando la mente las conduce con serenidad.',
    planoFisico:
      'Las ruedas del carro en marcha anuncian movimiento concreto: traslados, mudanzas, proyectos que despegan y metas cumplidas.',
    filosofiaEsoterica:
      'El número 7 simboliza la armonía mística en acción. El Carro enseña que el verdadero triunfo no consiste en aplastar obstáculos a la fuerza, sino en alinear cabeza, emoción y propósito en una misma dirección.',
    consejoCumpleanos:
      'Ideal para felicitar a quien egresa, se muda, emprende un viaje o celebra un año de conquistas personales tras haber sostenido el timón con paciencia.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Qué orgullo ver cómo conducís tu vida con frente alta',
        texto: 'Superaste curvas difíciles sin perder la dulzura ni el norte, y hoy celebramos cada avance tuyo con el corazón lleno. ¡Muy feliz cumpleaños! Que este año traiga rutas abiertas y victorias limpias.'
      },
      {
        tono: 'emotivo',
        titulo: 'Buen viento y camino despejado para esta nueva vuelta al sol',
        texto: 'Ojalá los próximos doce meses te regalen viajes lindos, proyectos que avancen con fluidez y la satisfacción serena de llegar adonde venís soñando.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Rumbo firme y horizonte abierto',
        texto: 'Que el viento acompañe cada plan nuevo y nunca te falten ganas de avanzar. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tus conquistas de este año',
        texto: 'Llevás las riendas con temple y corazón grande. ¡Que sea un año de grandes alegrías!'
      },
      {
        tono: 'reflexivo',
        titulo: 'El triunfo verdadero empieza en el dominio sereno de uno mismo',
        texto: 'El Carro del Tarot Egipcio recuerda que las fuerzas contrarias se vuelven impulso cuando el corazón sabe hacia dónde va. Feliz cumpleaños y gran viaje en este nuevo ciclo.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Avanzar sin perder la calma es la mejor velocidad',
        texto: 'Que este año te encuentre moviéndote hacia tus metas con claridad, disfrutando el paisaje y celebrando cada kilómetro recorrido.'
      },
      {
        tono: 'fe',
        titulo: 'Pasos cuidados en cada viaje y proyecto nuevo',
        texto: 'Pedimos a Dios que guarde tus salidas y tus regresos, bendiga tu esfuerzo y te conceda victorias llenas de paz y gratitud.'
      },
      {
        tono: 'fe',
        titulo: 'Dirección sabia y protección fiel este año',
        texto: 'Que la luz divina despeje el camino delante tuyo y acompañe a tu familia en cada meta nueva que inicien.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué anuncia El Carro en el Tarot Egipcio?',
        respuesta: 'Anuncia triunfo merecido, progreso firme, viajes positivos y la capacidad de coordinar emociones e ideas para avanzar sin desviarte.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se vincula El Carro?',
        respuesta: 'Se relaciona con Neptuno y Piscis, uniendo sensibilidad imaginativa con la fuerza serena para materializar sueños.'
      },
      {
        pregunta: '¿Qué simbolizan las dos esfinges de El Carro?',
        respuesta: 'Representan los impulsos opuestos —luz y sombra, acción y pausa— que deben armonizarse mediante el autocontrol para llegar a destino.'
      }
    ]
  },
  {
    numero: 8,
    romano: 'VIII',
    slug: 'la-justicia',
    nombre: 'La Justicia',
    tituloTradicional: 'La Justicia · Equidad, Verdad y Balanza de Maat',
    deidad: 'Maat',
    astrologiaTexto: 'Saturno en Capricornio',
    signosSlugs: ['capricornio'],
    letraHebrea: 'Heth (ח)',
    numerologia: 8,
    simboloGlyph: '♄',
    esencia: 'Verdad serena, recompensa justa al esfuerzo, disciplina honesta y equilibrio en los acuerdos.',
    palabrasClave: ['Equidad clara', 'Verdad honesta', 'Cosecha justa'],
    aforismo: 'Edifica un altar en tu corazón, mas no hagas de tu corazón un altar.',
    significadoDerecho:
      'Habla de acuerdos limpios, reconocimientos merecidos, orden legal o personal y tranquilidad de conciencia. Confirma que lo sembrado con rectitud encuentra su justa retribución.',
    significadoInvertido:
      'Alerta sobre desequilibrios, exceso de autoexigencia severa o demoras por asuntos pendientes que necesitan aclararse con transparencia y calma.',
    planoEspiritual:
      'La pluma de Maat representa la verdad liviana como una pluma: vivir sin dobles discursos permite dormir con paz.',
    planoMental:
      'La balanza en una mano y la espada en la otra simbolizan discernimiento objetivo: evaluar con claridad y cortar lo que daña sin rencor.',
    planoFisico:
      'El orden firme del trono expresa compromisos cumplidos, cuentas claras y respeto mutuo en la familia y el trabajo.',
    filosofiaEsoterica:
      'El número 8 remite al equilibrio cósmico de causa y efecto. En el antiguo Egipto, Maat sostenía la armonía del universo; en tu vida diaria, La Justicia invita a tratarte con la misma equidad con la que tratás a los demás.',
    consejoCumpleanos:
      'Especial para personas íntegras, responsables y rectas —muy afín a Capricornio— a quienes conviene agradecer su honestidad y desearles cosecha justa sin sobreexigencia.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu honestidad limpia hace más confiable cada vínculo',
        texto: 'En tiempos donde tantos dan rodeos, tu rectitud y tu palabra justa valen oro. ¡Muy feliz cumpleaños! Que este año te devuelva con creces todo el bien que hacés sin hacer ruido.'
      },
      {
        tono: 'emotivo',
        titulo: 'Merecés cosechar paz y reconocimiento real este año',
        texto: 'Trabajaste con constancia y corazón derecho; ojalá esta nueva vuelta al sol te encuentre celebrando recompensas justas y descanso merecido junto a los tuyos.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Equilibrio, verdad y calma',
        texto: 'Que la balanza se incline siempre hacia tu salud, tu tranquilidad y tus afectos más fieles. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu integridad de siempre',
        texto: 'Con vos las cuentas emocionales siempre están claras. ¡Que tengas un año justo y luminoso!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Ser justo también significa ser amable con vos mismo',
        texto: 'La Justicia de Maat nos recuerda que el equilibrio real no es rigidez sino armonía. Que este cumpleaños te invite a reconocer tus logros con la misma generosidad con que valorás a otros.'
      },
      {
        tono: 'reflexivo',
        titulo: 'La paz de conciencia es la mayor riqueza de cualquier ciclo',
        texto: 'Caminar con verdad liviana despeja dudas y fortalece acuerdos. ¡Muy feliz cumpleaños y excelente etapa nueva!'
      },
      {
        tono: 'fe',
        titulo: 'Justicia serena y recompensa bendecida este año',
        texto: 'Damos gracias a Dios por tu corazón recto y pedimos que bendiga tus acuerdos, tu trabajo y la paz de toda tu familia.'
      },
      {
        tono: 'fe',
        titulo: 'Verdad, salud y equilibrio en cada jornada',
        texto: 'Que la sabiduría divina sostenga tus decisiones y te regale un año sereno lleno de frutos buenos y honestos.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué diosa egipcia representa el Arcano VIII La Justicia?',
        respuesta: 'Representa a Maat, diosa de la verdad, el orden cósmico y la equidad, cuyo símbolo esencial es la pluma de la verdad en la balanza.'
      },
      {
        pregunta: '¿Qué signo del horóscopo se vincula con La Justicia?',
        respuesta: 'Se corresponde con Saturno y Capricornio, compartiendo sentido de responsabilidad, disciplina y respeto por los compromisos.'
      },
      {
        pregunta: '¿Qué sugiere La Justicia en asuntos laborales o personales?',
        respuesta: 'Sugiere transparencia, acuerdos escritos claros y la tranquilidad de saber que la constancia honesta recibe su justa retribución.'
      }
    ]
  },
  {
    numero: 9,
    romano: 'IX',
    slug: 'el-ermitano',
    nombre: 'El Ermitaño',
    tituloTradicional: 'El Ermitaño · Luz Interior, Prudencia y Búsqueda Sabia',
    deidad: 'Khonsu (Konsu)',
    astrologiaTexto: 'Marte en Aries',
    signosSlugs: ['aries'],
    letraHebrea: 'Teth (ט)',
    numerologia: 9,
    simboloGlyph: '♂',
    esencia: 'Madurez reflexiva, faro propio en la noche, prudencia sabia y claridad para cerrar un ciclo antes de abrir otro.',
    palabrasClave: ['Luz propia', 'Paciencia sabia', 'Madurez serena'],
    aforismo: 'Sube al monte y contempla la tierra prometida; mas no te digo que entrarás en ella.',
    significadoDerecho:
      'Invita a la pausa fecunda, a estudiar con calma y a confiar en tu propia linterna interior antes de tomar un compromiso nuevo. Habla de prudencia, experiencia ganada, discreción y respuestas profundas.',
    significadoInvertido:
      'Avisa sobre aislamiento excesivo, testarudez solitaria o precipitación por no haber reflexionado un minuto más. Sugiere aceptar buena compañía sin perder tu criterio.',
    planoEspiritual:
      'La lámpara encendida que porta el sabio muestra que no necesitás ver el camino entero: basta iluminar con claridad el paso siguiente.',
    planoMental:
      'El manto protector simboliza la discreción: cuidar tus proyectos mientras maduran protege su fuerza.',
    planoFisico:
      'El cayado de apoyo recuerda que la experiencia vivida sostiene tu caminar y te permite avanzar con seguridad sobre terreno desconocido.',
    filosofiaEsoterica:
      'El número 9 culmina la serie simple del 1 al 9: simboliza gestación completa, sabiduría que se destila de los años y lucidez para despedir lo que ya cumplió su tiempo.',
    consejoCumpleanos:
      'Muy significativo para cumpleaños de cambio de década (30, 40, 50, 60 o más) o para personas reflexivas que valoran la profundidad por encima del ruido.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu luz serena siempre ayuda a ver más claro',
        texto: 'Cuando todo alrededor se acelera, charlar con vos devuelve perspectiva y calma. ¡Muy feliz cumpleaños! Que este año te regale tiempo propio, lecturas lindas y afectos que respeten tu paz.'
      },
      {
        tono: 'emotivo',
        titulo: 'Celebramos la sabiduría que fuiste ganando paso a paso',
        texto: 'Cada año vivido te sumó hondura, paciencia y una calidez tranquila que quienes te conocemos admiramos muchísimo. ¡Feliz vuelta al sol llena de luz!'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Faro propio y caminar sereno',
        texto: 'Que nunca se apague tu claridad interior ni falten buenas charlas a fuego lento. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Pausa linda, salud y buenas respuestas este año',
        texto: 'Brindamos hoy por tu criterio tranquilo y por doce meses llenos de bienestar genuino.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Alcanza con iluminar con verdad el próximo paso',
        texto: 'El Ermitaño del Tarot Egipcio enseña que la prisa confunde y la pausa aclara. Que este nuevo año te encuentre avanzando a tu propio ritmo, con lucidez y paz.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Cerrar un ciclo con gratitud prepara el terreno nuevo',
        texto: 'Honrá todo lo aprendido hasta acá sin apurar lo que viene: la madurez es el mejor regalo de cada vuelta al sol. ¡Feliz cumpleaños!'
      },
      {
        tono: 'fe',
        titulo: 'Lámpara encendida y guía serena en tu camino',
        texto: 'Pedimos a Dios que ilumine tus pasos con discernimiento, cuide tu salud y te regale descanso profundo en el corazón.'
      },
      {
        tono: 'fe',
        titulo: 'Sabiduría y paz duradera para esta nueva etapa',
        texto: 'Damos gracias por tu vida reflexiva y deseamos que la gracia acompañe cada proyecto que guardás con cuidado en el alma.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué significa El Ermitaño en el Tarot Egipcio?',
        respuesta: 'Es el Arcano IX y simboliza la búsqueda interior, la prudencia, la madurez ganada con la experiencia y la capacidad de guiarse con luz propia.'
      },
      {
        pregunta: '¿Qué correspondencia astrológica tiene El Ermitaño?',
        respuesta: 'En el sistema egipcio se asocia con Marte y Aries, canalizando la energía del guerrero hacia el autodominio y la búsqueda consciente.'
      },
      {
        pregunta: '¿Es negativa la soledad que muestra El Ermitaño?',
        respuesta: 'No: en posición derecha es una pausa elegida, fértil y serena para ordenar ideas y ganar claridad antes de iniciar un nuevo ciclo.'
      }
    ]
  },
  {
    numero: 10,
    romano: 'X',
    slug: 'la-rueda-de-la-fortuna',
    nombre: 'La Rueda de la Fortuna',
    tituloTradicional: 'La Rueda de la Fortuna · Ciclos, Cambio Favorable y Renovación',
    deidad: 'Horus, Anubis y Mut',
    astrologiaTexto: 'Plutón en Escorpio',
    signosSlugs: ['escorpio'],
    letraHebrea: 'Iod (י)',
    numerologia: 1,
    simboloGlyph: '♇',
    esencia: 'Giro oportuno de la suerte, ciclos que se renuevan y habilidad para aprovechar el cambio a favor.',
    palabrasClave: ['Giro favorable', 'Ciclos vivos', 'Renovación oportuna'],
    aforismo: 'Costoso es el saber que compras con la experiencia, y más costoso el que te falta comprar.',
    significadoDerecho:
      'Anuncia un cambio afortunado, movimiento inesperado que destraba situaciones y apertura de una nueva vuelta de ciclo. Invita a recibir las novedades con flexibilidad y confianza.',
    significadoInvertido:
      'Marca altibajos pasajeros, monotonía o resistencia a aceptar que una etapa ya giró. Recuerda que nada se queda quieto para siempre y que la calma en el centro estabiliza cualquier vaivén.',
    planoEspiritual:
      'La esfinge coronando el eje superior simboliza el centro inmóvil que permanece sereno mientras la rueda exterior gira.',
    planoMental:
      'Anubis ascendiendo y el ciclo que desciende recuerdan que toda subida y toda pausa enseñan algo necesario para la madurez.',
    planoFisico:
      'El movimiento circular encarna oportunidades concretas, encuentros fortuitos y giros felices en el trabajo o los afectos.',
    filosofiaEsoterica:
      'El número 10 reduce al 1 (1 + 0 = 1): tras completar el ciclo del 9, la vida abre una octava superior. La Rueda de la Fortuna enseña a no aferrarse al miedo cuando el viento cambia.',
    consejoCumpleanos:
      'Perfecto para el día del cumpleaños, que es literalmente una vuelta completa de la rueda solar: deseá giros lindos, sorpresas a favor y frescura para disfrutar lo nuevo.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Que esta nueva vuelta gire toda a tu favor',
        texto: 'Cumplir años es celebrar que la rueda vuelve a abrir oportunidades lindas. ¡Muy feliz cumpleaños! Ojalá este ciclo te sorprenda con buenas noticias, encuentros inesperados y mucha alegría.'
      },
      {
        tono: 'emotivo',
        titulo: 'Tu centro sereno siempre te permite disfrutar cada cambio',
        texto: 'Aunque el año tenga vueltas inesperadas, sabés adaptarte con gracia y humor. Que estos doce meses giren hacia la salud, la prosperidad y los abrazos largos.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz vuelta al sol! Buena fortuna y novedades lindas',
        texto: 'Que la rueda de este año te traiga sorpresas alegres y puertas que se abren solas. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Giro favorable y brindis en alto hoy',
        texto: 'Cerramos lo pesado y celebramos lo nuevo que empieza a girar hoy mismo. ¡Feliz cumple!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Cuando cuidás tu centro, ningún giro del año te desordena',
        texto: 'La Rueda de la Fortuna en el Tarot Egipcio recuerda que la vida es movimiento continuo. Que este cumpleaños te encuentre liviano para soltar lo viejo y despierto para abrazar lo nuevo.'
      },
      {
        tono: 'reflexivo',
        titulo: 'La experiencia aprendida es la brújula de cada nueva vuelta',
        texto: 'Cada ciclo suma lucidez: que esta etapa nueva aproveche todo lo vivido con libertad y entusiasmo.'
      },
      {
        tono: 'fe',
        titulo: 'Tiempos buenos y providencia fiel en tu nuevo año',
        texto: 'Pedimos a Dios que ordene los tiempos de tu vida para bien, renueve tus fuerzas y bendiga cada novedad que llegue a tu puerta.'
      },
      {
        tono: 'fe',
        titulo: 'Esperanza renovada para una etapa llena de gracia',
        texto: 'Damos gracias por todo lo vivido hasta hoy y confiamos en que este nuevo giro del calendario traiga salud, paz y alegrías abundantes.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué significa La Rueda de la Fortuna en el Tarot Egipcio?',
        respuesta: 'Es el Arcano X y simboliza los ciclos de la vida, los giros afortunados, el destino en movimiento y la oportunidad de renovarse.'
      },
      {
        pregunta: '¿Por qué la numerología de La Rueda de la Fortuna se reduce al 1?',
        respuesta: 'Porque 10 equivale a 1 + 0 = 1: marca el final de una etapa completa y el arranque de un ciclo nuevo en un nivel más consciente.'
      },
      {
        pregunta: '¿Con qué signo zodiacal se asocia La Rueda de la Fortuna?',
        respuesta: 'Se vincula con Plutón y Escorpio, compartiendo la capacidad de transformarse y renacer en cada giro importante de la vida.'
      }
    ]
  },
  {
    numero: 11,
    romano: 'XI',
    slug: 'la-fuerza',
    nombre: 'La Fuerza',
    tituloTradicional: 'La Fuerza (La Persuasión) · Coraje Moral y Dominio Sin Violencia',
    deidad: 'Sekmet',
    astrologiaTexto: 'Aries y el Sol',
    signosSlugs: ['aries', 'leo'],
    letraHebrea: 'Khaph (כ)',
    numerologia: 2,
    simboloGlyph: '♌',
    esencia: 'Coraje sereno, persuasión cálida, vitalidad íntegra y capacidad de domar desafíos sin brusquedad.',
    palabrasClave: ['Coraje sereno', 'Vitalidad firme', 'Persuasión noble'],
    aforismo: 'Gozoso en la esperanza, sufrido en la tribulación, sé constante en la oración.',
    significadoDerecho:
      'Representa fortaleza interior que no necesita gritar para imponerse. Habla de valentía ética, recuperación de vitalidad, paciencia firme ante pruebas y poder de persuasión amable.',
    significadoInvertido:
      'Advierte cansancio acumulado, impulsividad momentánea o pérdida de confianza en tu propia resistencia. Invita a descansar y recuperar el eje sin culpa.',
    planoEspiritual:
      'La energía solar de Sekmet transformada en calma recuerda que el fuego bien encauzado abriga y sana en vez de quemar.',
    planoMental:
      'La figura que cierra suavemente las fauces del león muestra que la templanza y el afecto logran más que la imposición rígida.',
    planoFisico:
      'Anuncia salud que se afirma, empuje sostenido en proyectos exigentes y valentía cotidiana para cuidar a los propios.',
    filosofiaEsoterica:
      'El número 11 reduce al 2 (1 + 1 = 2), uniendo potencia con sensibilidad. En el Tarot Egipcio, La Fuerza se conoce también como La Persuasión porque demuestra que el verdadero poder nace del equilibrio interior.',
    consejoCumpleanos:
      'Ideal para celebrar a personas valientes que atravesaron un año exigente con entereza, así como a nacidos bajo Aries y Leo.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Admiro tu coraje sereno para sostener lo que amás',
        texto: 'No hace falta hacer ruido para ser fuerte, y vos lo demostrás cada semana con tu templanza y tu ternura firme. ¡Muy feliz cumpleaños! Que este año te regale vitalidad intacta y descansos merecidos.'
      },
      {
        tono: 'emotivo',
        titulo: 'Tu entereza noble inspira a todos los que te rodeamos',
        texto: 'Incluso en los días cuesta arriba mantuviste el corazón abierto y la frente alta. ¡Feliz vuelta al sol llena de salud, alegría y victorias tranquilas!'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Coraje limpio y alegría firme',
        texto: 'Que nunca falten la vitalidad, el buen humor ni la fuerza suave con la que abrís camino. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu valentía de todos los días',
        texto: 'Sos prueba viva de que la calma y la nobleza siempre pueden más. ¡Que tengas un año enorme!'
      },
      {
        tono: 'reflexivo',
        titulo: 'La persuasión amable conquista lo que la fuerza bruta rompe',
        texto: 'El Arcano XI del Tarot Egipcio recuerda que el verdadero poder vive en el dominio tranquilo de uno mismo. Que este nuevo año te encuentre firme y sereno.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Cuidar tu energía también es una forma de valentía',
        texto: 'En esta nueva vuelta al sol, permitite tanto el empuje que te caracteriza como las pausas que renuevan el alma. ¡Feliz cumpleaños!'
      },
      {
        tono: 'fe',
        titulo: 'Fortaleza interior y esperanza constante en tu nuevo ciclo',
        texto: 'Pedimos a Dios que renueve tus fuerzas cada mañana, te guarde en salud y llene tu hogar de paz y alegría duradera.'
      },
      {
        tono: 'fe',
        titulo: 'Corazón valiente sostenido por la gracia diaria',
        texto: 'Damos gracias por tu vida íntegra y deseamos que nunca falten consuelo, ánimo firme y motivos claros para celebrar en familia.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué simboliza La Fuerza en el Tarot Egipcio?',
        respuesta: 'Es el Arcano XI, vinculado a Sekmet, y representa el dominio sereno de los impulsos, la persuasión amable, la salud y el coraje ético.'
      },
      {
        pregunta: '¿Qué signos del horóscopo se vinculan con La Fuerza?',
        respuesta: 'Conecta directamente con Aries y Leo, uniendo el fuego valiente de Aries con el corazón solar y noble de Leo.'
      },
      {
        pregunta: '¿Por qué también se la llama La Persuasión?',
        respuesta: 'Porque demuestra que la templanza, la firmeza afectuosa y la ética vencen obstáculos mayores que cualquier gesto violento.'
      }
    ]
  },
  {
    numero: 12,
    romano: 'XII',
    slug: 'el-apostolado',
    nombre: 'El Apostolado',
    tituloTradicional: 'El Apostolado (El Colgado) · Cambio de Mirada y Pausa Fértil',
    deidad: 'Ptah',
    astrologiaTexto: 'Tauro y la Luna',
    signosSlugs: ['tauro'],
    letraHebrea: 'Lamed (ל)',
    numerologia: 3,
    simboloGlyph: '♉',
    esencia: 'Mirar la realidad desde un ángulo nuevo, entrega generosa y pausa consciente que revela soluciones inesperadas.',
    palabrasClave: ['Nueva perspectiva', 'Entrega noble', 'Pausa lúcida'],
    aforismo: 'Aunque el sol te fatigue de día y la luna te contriste de noche, no lleves tu pie al resbaladero ni duermas cuando haces guardia.',
    significadoDerecho:
      'Invita a soltar la urgencia y observar un asunto desde otro punto de vista. Habla de generosidad sin cálculo, vocación de servicio, desapego sano y descubrimientos valiosos que nacen cuando dejás de empujar a la fuerza.',
    significadoInvertido:
      'Advierte rigidez mental, sacrificio innecesario por quedar bien o miedo a cambiar una costumbre que ya agotó su sentido. Propone soltar cargas que no te corresponden.',
    planoEspiritual:
      'Las columnas de la prueba enmarcan una mente despejada: cuando el mundo parece al revés, la serenidad interior descubre la salida.',
    planoMental:
      'La postura invertida simboliza voluntariamente mirar distinto: lo que parecía traba se vuelve aprendizaje clave.',
    planoFisico:
      'El triángulo y el nudo desatándose sugieren pausar trámites o disputas para resolverlos con creatividad en el momento oportuno.',
    filosofiaEsoterica:
      'El número 12 (1 + 2 = 3) evoca los doce meses del año y la maduración creativa. En el Tarot Egipcio, El Apostolado dignifica la entrega voluntaria y la libertad interior de quien no se deja dominar por el apuro.',
    consejoCumpleanos:
      'Conmovedor para quienes cuidan a otros con vocación sincera o atraviesan un cambio de mirada profundo: deseales libertad, descanso y reciprocidad afectiva.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu entrega generosa deja huella en cada persona que ayudás',
        texto: 'Siempre estás dispuesto a mirar desde el lugar del otro y tender una mano sin pedir aplausos. ¡Muy feliz cumpleaños! Hoy nos toca cuidarte a vos y desearte un año liviano y pleno.'
      },
      {
        tono: 'emotivo',
        titulo: 'Cambiar de mirada siempre abre caminos inesperados',
        texto: 'Que esta nueva vuelta al sol te regale respuestas frescas, descansos verdaderos y la alegría de recibir todo el cariño que sembrás.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Mirada nueva y corazón liviano',
        texto: 'Que este año sueltes pesos ajenos y disfrutes cada día con calma y alegría propia. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu generosidad sin medida',
        texto: 'Gracias por tu vocación de estar cerca de verdad. ¡Que tengas un año en paz y muy feliz!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Ver la vida desde otro ángulo destraba lo que parecía quieto',
        texto: 'El Apostolado del Tarot Egipcio enseña que una pausa consciente vale más que mil pasos apurados. Que este nuevo año te regale claridad serena y libertad interior.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Dar con amor también incluye saber cuidarte',
        texto: 'Que estos doce meses equilibren tu vocación generosa con tiempo propio, salud firme y satisfacciones personales.'
      },
      {
        tono: 'fe',
        titulo: 'Fidelidad recompensada y paz profunda en tu alma',
        texto: 'Agradecemos a Dios por tu corazón servicial y pedimos que cuide tus pasos, aliviane tus cargas y bendiga cada día de este nuevo año.'
      },
      {
        tono: 'fe',
        titulo: 'Luz nueva y descanso verdadero para tu hogar',
        texto: 'Que la providencia renueve tu alegría y te rodee siempre de afectos agradecidos y sinceros.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué significa El Apostolado en el Tarot Egipcio?',
        respuesta: 'Es el Arcano XII (correspondiente a El Colgado en otros mazos) y simboliza el cambio voluntario de perspectiva, la pausa fecunda y la entrega generosa.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se vincula El Apostolado?',
        respuesta: 'Se relaciona con Tauro y la Luna, evocando paciencia profunda, lealtad constante y sensibilidad afectiva.'
      },
      {
        pregunta: '¿Es una carta negativa si sale en una tirada?',
        respuesta: 'No: en posición derecha sugiere que pausar y cambiar de enfoque te permitirá encontrar una solución mucho más sabia que insistir por el mismo camino.'
      }
    ]
  },
  {
    numero: 13,
    romano: 'XIII',
    slug: 'la-muerte',
    nombre: 'La Muerte',
    tituloTradicional: 'La Muerte (La Inmortalidad) · Cierre de Ciclo y Renovación Profunda',
    deidad: 'Amón-Ra',
    astrologiaTexto: 'Géminis y Mercurio',
    signosSlugs: ['geminis'],
    letraHebrea: 'Mem (מ)',
    numerologia: 4,
    simboloGlyph: '♊',
    esencia: 'Transformación auténtica, despedida sana de etapas cumplidas y renacimiento hacia una vida más verdadera.',
    palabrasClave: ['Renovación profunda', 'Fin de ciclo', 'Renacimiento claro'],
    aforismo: 'La noche ha pasado y llegó el nuevo día. Vístete pues con las armas de la luz.',
    significadoDerecho:
      'Lejos de cualquier presagio fatalista, anuncia la transformación necesaria que cierra una etapa gastada para dar paso a un renacimiento real. Habla de soltar hábitos viejos, cambiar de piel y amanecer más liviano.',
    significadoInvertido:
      'Refleja resistencia a aceptar un cambio evidente, inercia o apego a situaciones que ya cumplieron su ciclo. Invita a soltar con gratitud para poder avanzar.',
    planoEspiritual:
      'La flor que brota de la tierra arada enseña el principio egipcio de la inmortalidad: nada valioso se pierde, todo se transforma.',
    planoMental:
      'La guadaña limpia el terreno mental de preocupaciones vencidas para dejar espacio a ideas frescas y decisiones claras.',
    planoFisico:
      'Anuncia cierres ordenados, cambios de trabajo, mudanzas liberadoras o renovación de rutinas que devuelven vitalidad.',
    filosofiaEsoterica:
      'En el Tarot Egipcio el Arcano XIII recibe también el nombre de La Inmortalidad y se reduce al 4 (1 + 3 = 4): lo que termina prepara cimientos más honestos y firmes para la nueva etapa.',
    consejoCumpleanos:
      'Especial para alguien que deja atrás un año complejo y estrena un capítulo completamente nuevo: deseá alivio, aire fresco y un amanecer luminoso.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Qué lindo verte estrenar una etapa más liviana y tuya',
        texto: 'Cerraste capítulos exigentes con valentía y hoy el horizonte vuelve a abrirse limpio delante tuyo. ¡Muy feliz cumpleaños! Que este nuevo día traiga aire fresco, paz y alegrías reales.'
      },
      {
        tono: 'emotivo',
        titulo: 'Renacer más fuerte es uno de tus mayores dones',
        texto: 'Cada cambio que atravesaste te dejó más sabio y más auténtico. Brindamos hoy por tu nueva etapa, llena de salud, calma y comienzos luminosos.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Aire fresco y capítulo nuevo',
        texto: 'Lo que pesaba queda atrás: hoy arranca un ciclo renovado y lleno de luz. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por los cierres sanos y los nuevos comienzos',
        texto: 'Que esta vuelta al sol te encuentre más libre, liviano y feliz que nunca. ¡Felicidades!'
      },
      {
        tono: 'reflexivo',
        titulo: 'La noche pasa y siempre llega el nuevo día',
        texto: 'El Arcano XIII del Tarot Egipcio recuerda que cerrar una etapa no es pérdida sino renovación. Que este cumpleaños te vista de luz clara y proyectos frescos.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Soltar lo vencido hace lugar para lo que merece crecer',
        texto: 'Ojalá este nuevo año te permita despedir con gratitud lo que ya cumplió su tiempo y abrazar lo nuevo con serenidad.'
      },
      {
        tono: 'fe',
        titulo: 'Renovación de fuerzas y amanecer de paz',
        texto: 'Pedimos a Dios que transforme cada cansancio del año pasado en esperanza viva, salud firme y un comienzo lleno de bendición para vos.'
      },
      {
        tono: 'fe',
        titulo: 'Vida nueva y gratitud clara en este cumpleaños',
        texto: 'Que la luz divina renueve tu casa, ordene tus caminos y te regale un año sereno, limpio y fecundo.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Significa algo malo que salga La Muerte en el Tarot Egipcio?',
        respuesta: 'No. En el Tarot Egipcio simboliza la transformación natural, el cierre de una etapa que ya cumplió su ciclo y el renacimiento hacia un nuevo día.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se vincula el Arcano XIII?',
        respuesta: 'En la correspondencia tradicional del Tarot Egipcio se asocia con Géminis y Mercurio, señalando cambio mental ágil y renovación de ideas.'
      },
      {
        pregunta: '¿Por qué también se conoce a este arcano como La Inmortalidad?',
        respuesta: 'Porque la tradición egipcia veía cada cierre como semilla de una nueva vida: cuando soltás lo gastado, nace una etapa más plena.'
      }
    ]
  },
  {
    numero: 14,
    romano: 'XIV',
    slug: 'la-templanza',
    nombre: 'La Templanza',
    tituloTradicional: 'La Templanza · Armonía, Moderación y Paz Interior',
    deidad: 'Neferten',
    astrologiaTexto: 'Cáncer y Júpiter',
    signosSlugs: ['cancer'],
    letraHebrea: 'Nun (נ)',
    numerologia: 5,
    simboloGlyph: '♋',
    esencia: 'Conciliación serena, medida justa, paciencia sanadora y armonía entre emoción y razón.',
    palabrasClave: ['Paz interior', 'Medida justa', 'Conciliación cálida'],
    aforismo: 'No seas como paja delante del viento ni como viento delante de paja.',
    significadoDerecho:
      'Anuncia armonía, recuperación emocional, diálogo conciliador y equilibrio saludable en la rutina. Sugiere combinar paciencia con acción medida para lograr acuerdos duraderos.',
    significadoInvertido:
      'Advierte impaciencia, extremos innecesarios o desgaste por querer acelerar procesos que necesitan tiempo. Invita a respirar hondo y recuperar la medida justa.',
    planoEspiritual:
      'El disco solar sobre la figura angélica evoca la alquimia serena que transforma tensiones en entendimiento.',
    planoMental:
      'Las dos ánforas vertiendo agua sin derramar una gota simbolizan la comunicación fluida entre lo que sentís y lo que decidís.',
    planoFisico:
      'Anuncia bienestar físico, acuerdos familiares armoniosos y un ritmo diario sostenible sin sobresaltos.',
    filosofiaEsoterica:
      'El número 14 reduce al 5 (1 + 4 = 5): el espíritu equilibrando los elementos. La Templanza es el arte cotidiano de templar el acero con fuego y agua para volverlo flexible y resistente.',
    consejoCumpleanos:
      'Maravilloso para personas conciliadoras, sensibles y cálidas —en especial Cáncer— o para quien necesita un año más sereno, saludable y equilibrado.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu serenidad sabe convertir cualquier tensión en calma',
        texto: 'Estar cerca tuyo baja el ruido del mundo y recuerda lo que importa de verdad. ¡Muy feliz cumpleaños! Que este año te regale salud plena, acuerdos suaves y tardes tranquilas en casa.'
      },
      {
        tono: 'emotivo',
        titulo: 'Deseo un año en equilibrio hermoso para tu corazón',
        texto: 'Ni apuros que agoten ni silencios que pesen: ojalá esta nueva vuelta al sol te encuentre en la medida justa entre proyectos lindos, descanso real y abrazos sinceros.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Paz serena y armonía cotidiana',
        texto: 'Que estos doce meses fluyan suaves, saludables y llenos de buena compañía. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis tranquilo por tu calidez equilibrada',
        texto: 'Gracias por traer armonía a cada mesa donde te sentás. ¡Feliz nueva vuelta al sol!'
      },
      {
        tono: 'reflexivo',
        titulo: 'La medida justa convierte el tiempo en aliado',
        texto: 'La Templanza del Tarot Egipcio nos enseña a no ser ni paja ante el viento ni viento desmedido. Que este cumpleaños inaugure un año de equilibrio luminoso.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Sanar y armonizar también es avanzar',
        texto: 'Que este ciclo te regale paciencia fértil, charlas que acercan y bienestar sostenido cada semana.'
      },
      {
        tono: 'fe',
        titulo: 'Paz profunda y consuelo sereno sobre tu vida',
        texto: 'Pedimos a Dios que derrame calma sobre tu mente, salud sobre tu cuerpo y concordia duradera dentro de toda tu familia.'
      },
      {
        tono: 'fe',
        titulo: 'Armonía bendecida en cada paso de este año',
        texto: 'Damos gracias por tu espíritu conciliador y deseamos que la paz verdadera custodie tu hogar cada mañana.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué simboliza La Templanza en el Tarot Egipcio?',
        respuesta: 'Es el Arcano XIV y simboliza la moderación sabia, la paz interior, la sanación gradual y la armonía entre fuerzas opuestas.'
      },
      {
        pregunta: '¿Qué signo del horóscopo corresponde a La Templanza?',
        respuesta: 'Se vincula con Cáncer y Júpiter, uniendo calidez afectiva y cuidado familiar con expansión serena.'
      },
      {
        pregunta: '¿Qué consejo práctico ofrece La Templanza?',
        respuesta: 'Recomienda evitar los extremos, sostener hábitos saludables y resolver diferencias mediante diálogo paciente y respetuoso.'
      }
    ]
  },
  {
    numero: 15,
    romano: 'XV',
    slug: 'el-mal',
    nombre: 'El Mal',
    tituloTradicional: 'El Mal (La Pasión) · Deseo Intenso, Magnetismo y Conciencia de Límites',
    deidad: 'Menkeret y Tifón',
    astrologiaTexto: 'Leo y Neptuno',
    signosSlugs: ['leo'],
    letraHebrea: 'Samekh (ס)',
    numerologia: 6,
    simboloGlyph: '☉',
    esencia: 'Energía vital intensa, magnetismo creativo y conciencia lúcida para no quedar atado a miedos ni excesos.',
    palabrasClave: ['Magnetismo vital', 'Lucidez ante ataduras', 'Pasión encauzada'],
    aforismo: 'Hicieronme guarda de viñas, y mi viña, que era mía, no guardé.',
    significadoDerecho:
      'Habla de deseo intenso, magnetismo, ambición fuerte y atracción poderosa, al mismo tiempo que pide lucidez para distinguir pasión sana de apego o exceso. Recordá cuidar tu propia viña: tu energía y tus límites.',
    significadoInvertido:
      'Anuncia liberación de una atadura, tregua frente a una preocupación obsesiva o recuperación de autonomía emocional. Es una señal positiva de despertar y soltar dependencias.',
    planoEspiritual:
      'La antorcha encendida recuerda que la misma energía que puede desbordar también ilumina cuando se la gobierna con conciencia.',
    planoMental:
      'Invita a mirar de frente los propios miedos, celos o exigencias ocultas: lo que se nombra con honestidad pierde poder sobre vos.',
    planoFisico:
      'Sugiere encauzar el entusiasmo hacia proyectos concretos, cuidar el descanso y elegir vínculos libres donde nadie pierda su identidad.',
    filosofiaEsoterica:
      'El número 15 reduce al 6 (1 + 5 = 6), recordando que incluso las pruebas de la pasión buscan devolvernos al equilibrio del amor libre. En el Tarot Egipcio, este arcano llama a ser dueño de tu propia energía.',
    consejoCumpleanos:
      'Adecuado para desear libertad interior, límites sanos, pasión bien dirigida y cuidado personal a quien suele entregarse de más o vive todo con intensidad.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Que tu intensidad hermosa brille siempre con libertad',
        texto: 'Vivís cada afecto y cada proyecto con el corazón entero, y eso te vuelve inolvidable. ¡Muy feliz cumpleaños! Que este año cuides tu propia energía y disfrutes solo vínculos que te hagan bien.'
      },
      {
        tono: 'emotivo',
        titulo: 'Deseo un año libre de pesos y lleno de entusiasmo sano',
        texto: 'Ojalá esta nueva vuelta al sol te encuentre soltando lo que ata, celebrando lo que te apasiona y rodeado de gente genuina.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Pasión lúcida y límites sanos',
        texto: 'Que tu chispa nunca se apague y siempre juegue a favor de tu paz y tu alegría. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Libertad interior y disfrute real este ciclo',
        texto: 'Por doce meses eligiendo lo que te suma y cuidando tu propia viña con amor. ¡Feliz vuelta al sol!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Cuidar tu propia viña es el primer acto de sabiduría',
        texto: 'El Arcano XV del Tarot Egipcio recuerda que cuidar a otros nunca debe hacerte olvidar de cuidarte a vos. Que este nuevo año te regale lucidez, límites claros y pasión serena.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Conocer tus sombras te vuelve verdaderamente libre',
        texto: 'Cuando mirás tus miedos sin escapar, descubrís una fuerza enorme para elegir mejor. Feliz cumpleaños y excelente etapa nueva.'
      },
      {
        tono: 'fe',
        titulo: 'Libertad verdadera y protección sobre tu corazón',
        texto: 'Pedimos a Dios discernimiento claro para alejar todo lo que quita paz y abrazar con gratitud lo que edifica tu vida y tu hogar.'
      },
      {
        tono: 'fe',
        titulo: 'Luz limpia para tus decisiones de este año',
        texto: 'Que la gracia guarde tu mente en calma, ordene tus anhelos y te conceda un año libre, saludable y bendecido.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué significa realmente el Arcano XV (El Mal o La Pasión) en el Tarot Egipcio?',
        respuesta: 'Representa la fuerza del deseo, el magnetismo vital y la invitación a tomar conciencia de apegos, miedos o excesos para vivir con libertad real.'
      },
      {
        pregunta: '¿Qué enseña el aforismo de cuidar tu propia viña?',
        respuesta: 'Advierte sobre descuidar tu propio bienestar por ocuparte en exceso de asuntos ajenos o por quedar atrapado en presiones externas.'
      },
      {
        pregunta: '¿Qué signo del horóscopo se vincula con el Arcano XV?',
        respuesta: 'Corresponde a Leo y Neptuno, uniendo magnetismo personal e intensidad creativa con la necesidad de claridad emocional.'
      }
    ]
  },
  {
    numero: 16,
    romano: 'XVI',
    slug: 'la-fragilidad',
    nombre: 'La Fragilidad',
    tituloTradicional: 'La Fragilidad (La Torre) · Despertar Lúcido y Reconstrucción Verdadera',
    deidad: 'Ra (el rayo solar)',
    astrologiaTexto: 'Virgo y Mercurio',
    signosSlugs: ['virgo'],
    letraHebrea: 'Ain (ע)',
    numerologia: 7,
    simboloGlyph: '♍',
    esencia: 'Caída de estructuras rígidas, verdad liberadora y oportunidad de reconstruir sobre cimientos más auténticos.',
    palabrasClave: ['Verdad liberadora', 'Despertar claro', 'Nueva base firme'],
    aforismo: 'Luz de amanecer, luz de mediodía, luz de atardecer: lo que importa es que sea luz.',
    significadoDerecho:
      'Señala un despertar súbito que derriba lo que ya era frágil o artificial. Aunque al principio sacuda la rutina, despeja el panorama para reconstruir tu vida sobre bases mucho más honestas y duraderas.',
    significadoInvertido:
      'Indica resistencia a soltar una rutina agotada o demora en aceptar un cambio necesario. Propone abrir ventanas voluntariamente antes de que el cansancio obligue a frenar.',
    planoEspiritual:
      'El rayo de Ra no destruye lo verdadero: ilumina de golpe aquello que necesitaba verdad para dejar de apretar.',
    planoMental:
      'Romper un esquema rígido libera creatividad y te devuelve el alivio de vivir sin sostener apariencias pesadas.',
    planoFisico:
      'Llama a revisar cimientos concretos —salud, orden financiero o acuerdos claros— para edificar con solidez real.',
    filosofiaEsoterica:
      'El número 16 reduce al 7 (1 + 6 = 7), número de armonía superior. En el Tarot Egipcio, La Fragilidad recuerda que reconocer nuestros límites humanos nos vuelve más sabios, humildes y libres.',
    consejoCumpleanos:
      'Muy valioso para acompañar a quien atravesó un cimbronazo o reinvención reciente: celebrá su lucidez para volver a empezar sobre tierra firme.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Volver a construir con verdad te dejó más libre que antes',
        texto: 'Cuando caen las cosas que ya no sostenían, queda espacio limpio para lo auténtico. ¡Feliz cumpleaños! Celebro tu valentía para reinventarte y te deseo un año firme, claro y en paz.'
      },
      {
        tono: 'emotivo',
        titulo: 'Siempre hay luz nueva después de cada sacudida',
        texto: 'Admiro cómo supiste aprender de los imprevistos sin perder tu calidez. Ojalá esta nueva vuelta al sol te regale cimientos serenos y alegrías duraderas.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Cimientos claros y aire nuevo',
        texto: 'Que este año edifiques solo aquello que te da paz verdadera y disfrute real. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Luz en cada hora de tu nuevo ciclo',
        texto: 'Lo auténtico siempre permanece en pie. ¡Brindemos por un año limpio, firme y feliz!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Lo que importa es que sea luz en cada etapa del día',
        texto: 'El Arcano XVI del Tarot Egipcio enseña que los quiebres inesperados también despejan el cielo. Que este cumpleaños confirme que tus nuevas bases son más honestas y libres.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Soltar las apariencias alivia la espalda para siempre',
        texto: 'Que estos doce meses te regalen sencillez, verdad cotidiana y la calma de construir a tu propia medida.'
      },
      {
        tono: 'fe',
        titulo: 'Roca firme y luz nueva sobre tu hogar',
        texto: 'Pedimos a Dios que sostenga tus pasos, convierta cada prueba en aprendizaje fecundo y bendiga todo lo nuevo que edificás este año.'
      },
      {
        tono: 'fe',
        titulo: 'Claridad y reconstrucción llena de paz',
        texto: 'Que nunca falte la luz del amanecer sobre tu mesa ni el abrigo fiel de quienes te aman de verdad.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué mensaje constructivo trae La Fragilidad en el Tarot Egipcio?',
        respuesta: 'Invita a dejar caer estructuras rígidas o apariencias que ya no te sostienen para reconstruir tu vida con mayor honestidad y liviandad.'
      },
      {
        pregunta: '¿Con qué signo zodiacal se vincula el Arcano XVI?',
        respuesta: 'Se relaciona con Virgo y Mercurio, aportando discernimiento lúcido para detectar fallas a tiempo y ordenar lo esencial.'
      },
      {
        pregunta: '¿Cómo interpretar el aforismo de la luz en La Fragilidad?',
        respuesta: 'Recuerda que la claridad puede llegar temprano, al mediodía o al atardecer: nunca es tarde para ver la verdad y elegir mejor.'
      }
    ]
  },
  {
    numero: 17,
    romano: 'XVII',
    slug: 'la-esperanza',
    nombre: 'La Esperanza',
    tituloTradicional: 'La Esperanza (La Estrella) · Fe Viva, Inspiración y Estrella Guía',
    deidad: 'Khunum y Nut',
    astrologiaTexto: 'Libra y Saturno',
    signosSlugs: ['libra'],
    letraHebrea: 'Phe (פ)',
    numerologia: 8,
    simboloGlyph: '♎',
    esencia: 'Inspiración limpia, esperanza serena, confianza en el porvenir y sanación suave del ánimo.',
    palabrasClave: ['Estrella guía', 'Inspiración serena', 'Fe renovada'],
    aforismo: 'Unos hombres piden señales para creer, y otros piden sabiduría para obrar; mas el corazón esperanzado lo tiene todo en su esperanza.',
    significadoDerecho:
      'Es una de las cartas más luminosas del Tarot Egipcio. Anuncia alivio, inspiración artística o afectiva, recuperación de confianza y la certeza serena de que el horizonte vuelve a abrirse con bondad.',
    significadoInvertido:
      'Refleja desaliento pasajero, fatiga anímica o dudas sobre el futuro. Recuerda que las estrellas siguen ahí aunque una nube cruce la noche: basta cuidar la pequeña llama de hoy.',
    planoEspiritual:
      'La gran estrella rodeada de astros menores evoca el cielo de Nut, la bóveda protectora que orienta al viajero en la calma nocturna.',
    planoMental:
      'La mente inspirada descubre caminos creativos donde antes solo veía cansancio: la esperanza lúcida siempre abre opciones.',
    planoFisico:
      'El agua vertida sobre tierra y río anuncia salud que florece, proyectos que reciben apoyo y vínculos transparentes.',
    filosofiaEsoterica:
      'El número 17 reduce al 8 (1 + 7 = 8), uniendo esperanza con equilibrio duradero. En el Tarot Egipcio, La Esperanza no es ingenuidad pasiva, sino confianza activa que ilumina cada gesto cotidiano.',
    consejoCumpleanos:
      'Hermosísimo para regalar a cualquier persona querida —en especial de Libra— cuando querés transmitir aliento sincero, calma, belleza y confianza en el año que arranca.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Que nunca se apague la estrella linda que te guía',
        texto: 'Incluso en los días nublados sabés encontrar un motivo para sonreír y acompañar a los demás. ¡Muy feliz cumpleaños! Que este año traiga alivio, inspiración y sueños que empiecen a tomar forma.'
      },
      {
        tono: 'emotivo',
        titulo: 'Un horizonte despejado y sereno para tu nueva vuelta al sol',
        texto: 'Deseo de corazón que estos doce meses te regalen noticias buenas, proyectos que entusiasmen y la certeza tranquila de que lo mejor todavía tiene mucho por dar.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Esperanza viva y cielo despejado',
        texto: 'Que cada mañana de este nuevo año te encuentre con ilusión fresca y gente que te quiere de verdad. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis luminoso por todo lo bueno que viene',
        texto: 'Tu calma y tu esperanza contagian alegría a toda la mesa. ¡Feliz nueva vuelta al sol!'
      },
      {
        tono: 'reflexivo',
        titulo: 'El corazón esperanzado lleva su propia brújula',
        texto: 'La Esperanza del Tarot Egipcio nos enseña que la confianza serena vale más que cualquier pronóstico. Que este cumpleaños renueve tu inspiración y tu paz.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Confiar paso a paso hace más amable todo el viaje',
        texto: 'Ojalá este nuevo ciclo te encuentre cuidando tus sueños con ternura, belleza y cero apuro.'
      },
      {
        tono: 'fe',
        titulo: 'Estrella guía y esperanza fiel sobre tu casa',
        texto: 'Damos gracias a Dios por tu vida luminosa y pedimos que la esperanza viva sostenga tu corazón, tu salud y los proyectos de toda tu familia.'
      },
      {
        tono: 'fe',
        titulo: 'Bendición serena para un año lleno de inspiración',
        texto: 'Que la gracia ilumine cada decisión tuya y llene tus días de consuelo, gratitud y alegrías compartidas.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué anuncia La Esperanza (Arcano XVII) en el Tarot Egipcio?',
        respuesta: 'Anuncia renovación de la fe, inspiración creativa, paz emocional, alivio tras momentos exigentes y perspectivas luminosas para el futuro.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se vincula La Esperanza?',
        respuesta: 'Corresponde a Libra y Saturno, armonizando la búsqueda de belleza y paz con la constancia para sostener los sueños.'
      },
      {
        pregunta: '¿Qué diferencia a La Esperanza de una ilusión pasajera?',
        respuesta: 'Que une confianza del corazón con serenidad práctica: ilumina el camino y te anima a obrar con calma y transparencia.'
      }
    ]
  },
  {
    numero: 18,
    romano: 'XVIII',
    slug: 'el-crepusculo',
    nombre: 'El Crepúsculo',
    tituloTradicional: 'El Crepúsculo (La Luna) · Intuición Profunda, Sueños y Sensibilidad',
    deidad: 'Khepri',
    astrologiaTexto: 'Escorpio y Urano',
    signosSlugs: ['escorpio'],
    letraHebrea: 'Tzade (צ)',
    numerologia: 9,
    simboloGlyph: '♏',
    esencia: 'Mundo interior rico, sensibilidad intuitiva, lectura de símbolos y valentía para cruzar la penumbra hacia el alba.',
    palabrasClave: ['Intuición honda', 'Sueños lúcidos', 'Sensibilidad viva'],
    aforismo: 'Sea tu caridad granero inagotable y tu paciencia no menos inagotable que tu caridad.',
    significadoDerecho:
      'Abre la puerta al mundo de la intuición, la imaginación creadora y los sentimientos profundos. Pide caminar con atención serena cuando no todo está todavía a plena luz, distinguiendo intuición genuina de fantasía temerosa.',
    significadoInvertido:
      'Señala disipación de confusiones, escepticismo práctico que aclara una duda o necesidad de verificar hechos concretos antes de sacar conclusiones emotivas.',
    planoEspiritual:
      'La luna entre las dos torres recuerda que incluso en el crepúsculo el camino continúa trazado hacia el horizonte.',
    planoMental:
      'Los dos guardianes a la orilla simbolizan la convivencia entre instinto y razón: escuchar ambos sin dejarse asustar por sombras.',
    planoFisico:
      'El escarabajo Khepri emergiendo del agua anuncia la gestación silenciosa del amanecer: lo que hoy madura en reserva pronto saldrá a la luz.',
    filosofiaEsoterica:
      'El número 18 reduce al 9 (1 + 8 = 9), conectando sensibilidad profunda con maduración emocional. En el Tarot Egipcio, El Crepúsculo enseña paciencia compasiva con los propios procesos internos.',
    consejoCumpleanos:
      'Ideal para personas profundas, artísticas o nacidas bajo Escorpio que valoran las charlas nocturnas honestas y la comprensión real.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu sensibilidad profunda ve bellezas que otros pasan de largo',
        texto: 'Tenés una mirada honesta capaz de leer lo que nadie dice y acompañar desde el alma. ¡Muy feliz cumpleaños! Que este año cuide tus sueños, tu descanso y tus afectos más verdaderos.'
      },
      {
        tono: 'emotivo',
        titulo: 'Que la claridad abrace cada noche y cada amanecer tuyo',
        texto: 'Deseo que esta nueva vuelta al sol disipe cualquier duda vieja y te regale calma interior, inspiración linda y vínculos transparentes.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Intuición clara y noches en paz',
        texto: 'Que tus sueños encuentren tierra fértil y tu corazón descanse sereno todo el año. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu mirada profunda y leal',
        texto: 'Gracias por no quedarte nunca en lo superficial. ¡Que tengas un año luminoso y muy feliz!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Paciencia y ternura son la mejor linterna en la penumbra',
        texto: 'El Arcano XVIII del Tarot Egipcio recuerda que cada amanecer se gesta primero en silencio. Que este cumpleaños honre tu intuición y te acerque claridad serena.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Escuchar tu mundo interior sin miedo ordena el rumbo',
        texto: 'Ojalá estos doce meses combinen tu imaginación viva con pasos concretos hacia todo lo que deseás construir.'
      },
      {
        tono: 'fe',
        titulo: 'Paz para tus pensamientos y descanso en tus noches',
        texto: 'Pedimos a Dios que calme cualquier inquietud oculta, guarde tus sueños y te regale amaneceres llenos de claridad y consuelo.'
      },
      {
        tono: 'fe',
        titulo: 'Caridad generosa y paciencia bendecida este año',
        texto: 'Que la luz divina acompañe tu corazón sensible y proteja siempre a las personas que más amás.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué simboliza El Crepúsculo (La Luna) en el Tarot Egipcio?',
        respuesta: 'Es el Arcano XVIII y representa la intuición profunda, los sueños, la sensibilidad emocional y la gestación silenciosa de una nueva etapa.'
      },
      {
        pregunta: '¿Por qué aparece el escarabajo Khepri en este arcano?',
        respuesta: 'En el antiguo Egipto, Khepri simbolizaba el sol naciente que se prepara durante la noche para volver a brillar al alba.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se relaciona el Arcano XVIII?',
        respuesta: 'Corresponde a Escorpio y Urano, uniendo intensidad emocional e intuición penetrante con lucidez transformadora.'
      }
    ]
  },
  {
    numero: 19,
    romano: 'XIX',
    slug: 'la-inspiracion',
    nombre: 'La Inspiración',
    tituloTradicional: 'La Inspiración (El Sol) · Alegría Plena, Claridad y Amor Compartido',
    deidad: 'Geb y Ra solar',
    astrologiaTexto: 'Sagitario y Plutón',
    signosSlugs: ['sagitario'],
    letraHebrea: 'Quoph (ק)',
    numerologia: 1,
    simboloGlyph: '♐',
    esencia: 'Alegría transparente, éxito merecido, amor puro, salud vital y entusiasmo que ilumina a toda la mesa.',
    palabrasClave: ['Claridad solar', 'Alegría compartida', 'Éxito limpio'],
    aforismo: 'Toma el escudo de tu fe y avanza con paso decidido, ya sea en favor del viento o contra todos los vientos.',
    significadoDerecho:
      'Es el emblema de la plenitud luminosa: alegría sincera, relaciones claras, reconocimiento, buena salud y proyectos que brillan a la luz del día. Invita a celebrar sin culpa y compartir el calor de lo vivido.',
    significadoInvertido:
      'Habla solo de un desánimo temporal, un retraso breve o cansancio que opaca momentáneamente el disfrute. El sol sigue intacto: alcanza con descansar y volver a mirar lo bueno ya logrado.',
    planoEspiritual:
      'El disco solar irradiando gotas de luz simboliza la verdad sin sombras y la bendición visible sobre la vida cotidiana.',
    planoMental:
      'Dos figuras tomadas de la mano bajo el sol reflejan amistad transparente, pareja en sintonía y acuerdos donde ambos crecen.',
    planoFisico:
      'Las flores abiertas en la tierra confirman vitalidad, festejos felices y prosperidad que se disfruta en compañía.',
    filosofiaEsoterica:
      'El número 19 reduce al 10 y al 1 (1 + 9 = 10 → 1): la luz plena que inaugura una etapa radiante. En el Tarot Egipcio, La Inspiración (El Sol) celebra la gratitud abierta y el entusiasmo genuino.',
    consejoCumpleanos:
      'El arcano perfecto por excelencia para cumpleaños luminosos, nacidos bajo Sagitario o personas que irradian optimismo y calidez en cada reunión.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Tu alegría sincera ilumina cada lugar donde llegás',
        texto: 'Hay personas que son como abrir las persianas a la mañana, y vos tenés esa luz solar todo el año. ¡Muy feliz cumpleaños! Que la vida te devuelva hoy el doble de alegría, salud y abrazos.'
      },
      {
        tono: 'emotivo',
        titulo: 'Que este año brille claro y sin sombras para vos',
        texto: 'Celebramos tu corazón generoso, tu sonrisa franca y las ganas lindas que le ponés a cada proyecto. ¡Muy feliz vuelta al sol llena de logros y amor compartido!'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Sol pleno, salud y risas largas',
        texto: 'Que estos doce meses te regalen días claros, éxitos limpios y sobremesas inolvidables. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis solar por tu entusiasmo contagioso',
        texto: 'Gracias por traer calidez y optimismo a nuestras vidas. ¡Que tengas un año radiante!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Avanzar con paso decidido convierte el optimismo en realidad',
        texto: 'La Inspiración (El Sol) del Tarot Egipcio recuerda que la claridad del corazón despeja cualquier incertidumbre. Que este cumpleaños celebre tus logros y abra un ciclo luminoso.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Compartir la alegría la multiplica sin agotarla',
        texto: 'Ojalá este nuevo año te encuentre disfrutando cada pequeña victoria con gratitud y buena compañía.'
      },
      {
        tono: 'fe',
        titulo: 'Luz abundante y gozo verdadero sobre tu hogar',
        texto: 'Damos gracias a Dios por tu vida alegre y pedimos que Su luz siga alumbrando tus pasos con salud, fe firme y abundancia en familia.'
      },
      {
        tono: 'fe',
        titulo: 'Bendición clara para un año lleno de gratitud',
        texto: 'Que cada mañana despierte tu corazón con paz, propósito luminoso y motivos reales para dar gracias.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué significa el Arcano XIX (La Inspiración / El Sol) en el Tarot Egipcio?',
        respuesta: 'Representa la claridad plena, la alegría compartida, el amor transparente, la vitalidad y el éxito logrado con autenticidad.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se vincula El Sol en el Tarot Egipcio?',
        respuesta: 'Se relaciona con Sagitario y Plutón, uniendo optimismo expansivo y espíritu libre con una vitalidad transformadora.'
      },
      {
        pregunta: '¿Qué indica cuando aparece invertido?',
        respuesta: 'Nunca anuncia desgracia: solo señala una nube pasajera, fatiga o una pequeña demora antes de volver a disfrutar con claridad.'
      }
    ]
  },
  {
    numero: 20,
    romano: 'XX',
    slug: 'la-resurreccion',
    nombre: 'La Resurrección',
    tituloTradicional: 'La Resurrección (El Juicio Final) · Despertar Consciente y Reconciliación',
    deidad: 'Atón (Ba y Ka)',
    astrologiaTexto: 'Capricornio y Marte',
    signosSlugs: ['capricornio'],
    letraHebrea: 'Resch (ר)',
    numerologia: 2,
    simboloGlyph: '♑',
    esencia: 'Llamado interior a renovarse, reconciliación sana con el pasado, lucidez y segundo aire lleno de propósito.',
    palabrasClave: ['Despertar consciente', 'Reconciliación sana', 'Propósito renovado'],
    aforismo: 'Flor en el manzano, fruto en la viña, sembrado en madurez.',
    significadoDerecho:
      'Anuncia un despertar claro: volver a elegir tu vocación, reconciliarte con tu historia, recibir una noticia liberadora o sentir un renacer de entusiasmo maduro. Todo lo sembrado empieza a mostrar su sentido.',
    significadoInvertido:
      'Señala postergación, excesiva autocrítica o apego a errores viejos que ya merecen perdón. Invita a escuchar el llamado del presente y avanzar sin culpa.',
    planoEspiritual:
      'El Ba alado sobre el cuerpo evoca la unión del espíritu despierto con la vida cotidiana: vivir presente y con sentido.',
    planoMental:
      'El toque de clarín simboliza la lucidez que despeja distracciones y te recuerda qué es lo verdaderamente importante.',
    planoFisico:
      'Anuncia reencuentros valiosos, perdones que alivian, recuperación de proyectos postergados y madurez fecunda.',
    filosofiaEsoterica:
      'El número 20 reduce al 2 (2 + 0 = 2): reconciliación entre pasado y futuro, entre razón y corazón. En el Tarot Egipcio, La Resurrección celebra el arte de volver a florecer en madurez.',
    consejoCumpleanos:
      'Muy especial para cumpleaños de madurez, reencuentros familiares o personas que están recuperando un sueño postergado con renovada claridad.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Qué hermoso verte florecer con tanta lucidez y paz',
        texto: 'Cada experiencia que viviste te dio una claridad serena que hoy se nota en tu sonrisa. ¡Muy feliz cumpleaños! Que este año renueve tus ilusiones y acerque reencuentros llenos de cariño.'
      },
      {
        tono: 'emotivo',
        titulo: 'Nunca es tarde para un segundo aire lleno de alegría',
        texto: 'Ojalá esta nueva vuelta al sol despierte proyectos que te entusiasmen de verdad y deje atrás cualquier culpa o peso viejo.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Despertar claro y propósito vivo',
        texto: 'Que este año traiga buenas noticias, paz con el ayer y entusiasmo fresco por lo que viene. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu madurez luminosa',
        texto: 'Todo lo sembrado con amor siempre vuelve a dar fruto. ¡Feliz nueva vuelta al sol!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Flor en el manzano y fruto maduro a su debido tiempo',
        texto: 'El Arcano XX del Tarot Egipcio enseña que nada de lo vivido fue en vano cuando lo mirás con comprensión. Que este cumpleaños celebre tu despertar más sereno.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Reconciliarte con tu camino multiplica tu libertad',
        texto: 'Que estos doce meses te regalen liviandad, decisiones claras y la alegría de escuchar tu verdadera vocación.'
      },
      {
        tono: 'fe',
        titulo: 'Renovación espiritual y paz verdadera en tu casa',
        texto: 'Damos gracias a Dios por cada nueva oportunidad que regala y pedimos que este año despierte alegría fresca, salud y armonía en tu familia.'
      },
      {
        tono: 'fe',
        titulo: 'Gracia nueva para celebrar el presente con gratitud',
        texto: 'Que la paz divina sane el pasado, fortalezca tus pasos hoy y bendiga cada fruto maduro de tu vida.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué representa el Arcano XX (La Resurrección / El Juicio Final) en el Tarot Egipcio?',
        respuesta: 'Representa el despertar consciente, la renovación de propósito, la reconciliación con la propia historia y las buenas noticias que abren una nueva etapa.'
      },
      {
        pregunta: '¿Con qué signo zodiacal se asocia el Arcano XX?',
        respuesta: 'Se vincula con Capricornio y Marte, combinando madurez sostenida y determinación práctica para concretar una vocación.'
      },
      {
        pregunta: '¿Qué significan el Ba y el Ka en la iconografía egipcia de esta lámina?',
        respuesta: 'El Ba (alma libre) y el Ka (energía vital) simbolizan la integración armoniosa entre tu propósito interior y tu vida cotidiana.'
      }
    ]
  },
  {
    numero: 21,
    romano: 'XXI',
    slug: 'la-transmutacion',
    nombre: 'La Transmutación',
    tituloTradicional: 'La Transmutación (El Mundo) · Plenitud, Logro Total y Armonía',
    deidad: 'Shu',
    astrologiaTexto: 'Acuario y Neptuno',
    signosSlugs: ['acuario'],
    letraHebrea: 'Shin (ש)',
    numerologia: 3,
    simboloGlyph: '♒',
    esencia: 'Cumplimiento feliz de un gran ciclo, mérito reconocido, integración plena y apertura al mundo.',
    palabrasClave: ['Plenitud lograda', 'Mérito reconocido', 'Horizontes amplios'],
    aforismo: 'En su secreto no entre mi alma, ni en su puerto mi navío.',
    significadoDerecho:
      'Corona el recorrido con realización plena, éxito consolidado, viajes importantes y sensación profunda de estar en tu lugar. Confirma que los cuatro planos de tu vida encuentran armonía gracias a tu evolución.',
    significadoInvertido:
      'Señala un cierre todavía incompleto o el último tramo antes de festejar un logro. Pide dar ese paso final sin bajar los brazos justo frente a la meta.',
    planoEspiritual:
      'La corona ovalada rodeada por los cuatro símbolos elementales representa el universo integrado en equilibrio.',
    planoMental:
      'La danza serena en el centro muestra que cuando dominás el miedo, el aprendizaje se vuelve liviandad y celebración.',
    planoFisico:
      'Anuncia metas concretadas, títulos, reconocimientos, viajes soñados y estabilidad lograda con mérito propio.',
    filosofiaEsoterica:
      'El número 21 reduce al 3 (2 + 1 = 3): creación culminada y gozosa. En el Tarot Egipcio, La Transmutación enseña que cada experiencia previa —fácil o difícil— se integró en una obra más completa.',
    consejoCumpleanos:
      'Extraordinario para celebrar grandes logros, aniversarios redondos, graduaciones o cumpleaños de Acuario llenos de horizontes amplios.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Qué orgullo celebrar esta plenitud que te ganaste a pulso',
        texto: 'Mirar tu recorrido emociona porque supiste transformar cada etapa en crecimiento real. ¡Muy feliz cumpleaños! Que este año disfrutes a fondo tus logros, tus afectos y los horizontes nuevos que se abren.'
      },
      {
        tono: 'emotivo',
        titulo: 'El mundo queda chico para las cosas lindas que merecés',
        texto: 'Ojalá esta nueva vuelta al sol te encuentre en paz con todo lo alcanzado y con entusiasmo fresco para viajar, crear y celebrar junto a tu gente.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Plenitud, logros y horizonte amplio',
        texto: 'Por un año redondo, luminoso y lleno de metas cumplidas con alegría. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis alto por un ciclo extraordinario',
        texto: 'Transformaste esfuerzo en armonía y hoy celebramos tu camino. ¡Feliz vuelta al sol!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Integrar todo lo vivido te devuelve a tu mejor lugar',
        texto: 'La Transmutación del Tarot Egipcio corona el viaje recordando que la plenitud se construye sumando experiencia, afecto y libertad. Feliz cumpleaños y gran celebración.'
      },
      {
        tono: 'reflexivo',
        titulo: 'Celebrar los cierres felices prepara nuevas aventuras',
        texto: 'Tomate un momento hoy para reconocer cuánto creciste y disfrutar el paisaje antes de elegir la próxima cima.'
      },
      {
        tono: 'fe',
        titulo: 'Plenitud bendecida y gratitud honda por tu camino',
        texto: 'Damos gracias a Dios por cada logro de tu vida y pedimos que Su paz corone tu hogar con salud, viajes guardados y alegría compartida.'
      },
      {
        tono: 'fe',
        titulo: 'Armonía completa para tu nuevo ciclo de vida',
        texto: 'Que nunca falten motivos para agradecer ni brazos cercanos para celebrar cada bendición que llegue este año.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué representa La Transmutación (Arcano XXI) en el Tarot Egipcio?',
        respuesta: 'Equivalente a El Mundo, simboliza la culminación exitosa de un ciclo, la plenitud interior, el reconocimiento merecido y la apertura de nuevos horizontes.'
      },
      {
        pregunta: '¿Con qué signo zodiacal se vincula La Transmutación?',
        respuesta: 'Corresponde a Acuario y Neptuno, uniendo visión amplia, libertad creativa y sentido de pertenencia universal.'
      },
      {
        pregunta: '¿Qué aconseja cuando aparece invertida?',
        respuesta: 'Anima a terminar ese detalle pendiente que falta para cerrar la etapa con satisfacción completa antes de saltar al siguiente proyecto.'
      }
    ]
  },
  {
    numero: 22,
    romano: 'XXII',
    slug: 'el-loco',
    nombre: 'El Loco',
    tituloTradicional: 'El Loco (El Regreso) · Nuevo Comienzo, Espontaneidad y Libertad',
    deidad: 'Neith',
    astrologiaTexto: 'Piscis y Venus',
    signosSlugs: ['piscis'],
    letraHebrea: 'Thaw (ת)',
    numerologia: 4,
    simboloGlyph: '♓',
    esencia: 'Comienzo libre sin prejuicios, asombro intacto, aventura creadora y confianza para abrir rutas inéditas.',
    palabrasClave: ['Comienzo libre', 'Asombro vivo', 'Aventura creativa'],
    aforismo: 'En su secreto no entre mi alma, ni en su puerto mi navío; camina despierto hacia el horizonte nuevo.',
    significadoDerecho:
      'Celebra la espontaneidad lúcida, los comienzos frescos, el deseo de explorar y la libertad de animarte a algo nuevo sin cargar miedos viejos. Invita a confiar en el aprendizaje vivo del camino.',
    significadoInvertido:
      'Advierte decisiones apresuradas sin mirar dónde pisás, dispersión o apatía para dar un salto que venís deseando. Combina entusiasmo libre con un mínimo de prudencia práctica.',
    planoEspiritual:
      'El sol naciente sobre el viajero recuerda que toda sabiduría profunda vuelve a la sencillez curiosa de quien sabe que siempre tiene algo por descubrir.',
    planoMental:
      'El pequeño atado al hombro simboliza viajar liviano: llevar solo la experiencia útil y soltar el equipaje innecesario.',
    planoFisico:
      'El paso abierto hacia terreno nuevo anuncia aventuras, proyectos originales, cambios refrescantes y encuentros sorpresivos.',
    filosofiaEsoterica:
      'En el Tarot Egipcio, El Loco ocupa el lugar 22 (también leído como el 0 que reinicia el círculo) y reduce al 4 (2 + 2 = 4): la libertad más fecunda sabe caminar por la tierra sin perder la capacidad de asombro.',
    consejoCumpleanos:
      'Ideal para espíritus libres, creativos, viajeros, jóvenes que inician una etapa o personas de Piscis que conservan intacta la capacidad de soñar y sorprenderse.',
    dedicatorias: [
      {
        tono: 'emotivo',
        titulo: 'Que nunca se pierda tu capacidad hermosa de asombrarte',
        texto: 'Admiro cómo te animás a empezar cosas nuevas con una frescura que contagia ganas de vivir. ¡Muy feliz cumpleaños! Que este año te regale aventuras lindas, libertad y gente que acompañe tus sueños.'
      },
      {
        tono: 'emotivo',
        titulo: 'Equipaje liviano y caminos nuevos para esta vuelta al sol',
        texto: 'Ojalá estos doce meses te sorprendan con paisajes nuevos, ideas originales y la alegría inmensa de animarte a ser fiel a vos mismo.'
      },
      {
        tono: 'breve',
        titulo: '¡Feliz cumple! Libertad, asombro y rutas nuevas',
        texto: 'Que nunca falten planes espontáneos, risas limpias y ganas de descubrir el mundo. ¡Muy feliz cumpleaños!'
      },
      {
        tono: 'breve',
        titulo: 'Brindis por tu espíritu curioso y libre',
        texto: 'Empezar liviano siempre lleva más lejos. ¡Que sea un año increíble!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Volver a empezar con mirada limpia es una forma de sabiduría',
        texto: 'El Arcano XXII del Tarot Egipcio cierra y reinicia toda la baraja recordando que la vida siempre ofrece comienzos frescos. ¡Feliz cumpleaños y gran aventura!'
      },
      {
        tono: 'reflexivo',
        titulo: 'Animarse con curiosidad vence cualquier rutina gris',
        texto: 'Que este nuevo ciclo una tu espontaneidad linda con pasos cuidados hacia todo lo que te entusiasma.'
      },
      {
        tono: 'fe',
        titulo: 'Pasos cuidados en cada nuevo comienzo de tu vida',
        texto: 'Pedimos a Dios que cuide tus caminos nuevos, conserve tu alegría limpia y bendiga cada proyecto original que pongas en marcha.'
      },
      {
        tono: 'fe',
        titulo: 'Confianza serena y cielo abierto para este año',
        texto: 'Damos gracias por tu corazón libre y deseamos que la gracia acompañe siempre tu andar con salud, paz y buena compañía.'
      }
    ],
    faqs: [
      {
        pregunta: '¿Por qué El Loco es el número 22 en el Tarot Egipcio?',
        respuesta: 'Porque completa la rueda de los 22 Arcanos Mayores y al mismo tiempo simboliza el regreso y el nuevo comienzo libre que reinicia todo el ciclo.'
      },
      {
        pregunta: '¿Con qué signo del horóscopo se vincula El Loco?',
        respuesta: 'Se asocia con Piscis y Venus, resonando con imaginación abierta, sensibilidad creativa y amor libre de ataduras rígidas.'
      },
      {
        pregunta: '¿Qué consejo da El Loco en una tirada?',
        respuesta: 'Anima a abrirte a una experiencia nueva con equipaje liviano y entusiasmo honesto, sin descuidar la atención en el primer paso.'
      }
    ]
  }
];
