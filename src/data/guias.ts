export interface SeccionGuia {
  subtitulo: string;
  parrafos: string[];
  lista?: string[];
}

export interface TablaGuia {
  titulo: string;
  columnas: [string, string, string];
  filas: [string, string, string][];
}

export interface ComparacionGuia {
  titulo: string;
  evitar: string;
  mejor: string;
}

export interface EjemploGuia {
  etiqueta: string;
  texto: string;
}

export interface FaqGuia {
  pregunta: string;
  respuesta: string;
}

export interface DatoPropioGuia {
  titulo: string;
  dato: string;
  fuente: string;
}

export interface FuenteAutoridadGuia {
  nombre: string;
  url: string;
}

export interface PasoHowToGuia {
  nombre: string;
  texto: string;
}

export interface GuiaEditorial {
  slug: string;
  seoTitle: string;
  titulo: string;
  h1: string;
  descripcion: string;
  keywordPrincipal: string;
  keywordsSecundarias: string[];
  emoji: string;
  tiempoLectura: string;
  fechaPublicacion: string;
  fechaActualizacion: string;
  autor: string;
  autorRol: string;
  autorBio: string;
  resumen: string;
  respuestaDirecta: string;
  citaDestacada: string;
  datosPropios: DatoPropioGuia;
  comparacionPractica: ComparacionGuia;
  tablaComparativa: TablaGuia;
  ejemplosAdaptables: EjemploGuia[];
  faqs: FaqGuia[];
  pasosHowTo?: PasoHowToGuia[];
  categoriasRelacionadas: { slug: string; nombre: string }[];
  fuentesAutoridad: FuenteAutoridadGuia[];
  secciones: SeccionGuia[];
}

const AUTOR_ROL_DEFAULT = 'Redacción y revisión lingüística en español · ParaCumpleanos';
const AUTOR_BIO_DEFAULT =
  'Equipo especializado en dedicatorias y textos afectivos en español rioplatense y neutro. Editamos y auditamos a diario 351 categorías y 12.636 textos inéditos verificando tono, concordancia gramatical y adecuación emocional para cada vínculo.';

export const GUIAS_EDITORIALES: GuiaEditorial[] = [
  {
    slug: 'como-escribir-una-carta-de-cumpleanos-que-emocione',
    seoTitle: 'Cómo escribir una carta de cumpleaños que emocione hoy',
    titulo: 'Cómo escribir una carta de cumpleaños que emocione paso a paso',
    h1: 'Cómo escribir una carta de cumpleaños que emocione sin quedarte en blanco',
    descripcion: 'Aprendé cómo escribir una carta de cumpleaños emotiva en 4 pasos claros, con ejemplos reales, plantillas editables y consejos listos para adaptar hoy mismo.',
    keywordPrincipal: 'cómo escribir una carta de cumpleaños',
    keywordsSecundarias: [
      'estructura carta de cumpleaños',
      'qué poner en una carta de cumpleaños',
      'carta de cumpleaños que emocione',
      'ejemplos de cartas largas para cumpleaños'
    ],
    emoji: '✉️',
    tiempoLectura: '8 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Estructurá cualquier carta larga en cuatro bloques claros: saludo cercano, recuerdo concreto, reconocimiento genuino y deseo sereno para el nuevo año.',
    respuestaDirecta: 'Para saber cómo escribir una carta de cumpleaños que emocione de verdad, dividí el texto en cuatro bloques breves: nombrá a la persona por su apodo real, contá un recuerdo concreto vivido este último año, agradecé una cualidad suya cotidiana y cerrá con un deseo sencillo de salud y alegría junto a tu firma.',
    citaDestacada: 'Las cartas que terminan guardadas en un cajón durante años nunca son las más rebuscadas: son las que suenan exactamente como hablás vos cuando estás cómodo.',
    datosPropios: {
      titulo: 'Dato editorial de nuestro catálogo (12.636 textos analizados)',
      dato: 'En ParaCumpleanos reunimos 1.836 cartas epistolares de más de 140 palabras distribuidas en 51 colecciones. Las versiones con al menos una escena cotidiana en el segundo párrafo muestran mayor lectura completa que los textos con adjetivos abstractos.',
      fuente: 'Auditoría interna del archivo epistolar de ParaCumpleanos (351 categorías, noviembre 2026).'
    },
    comparacionPractica: {
      titulo: '¿Cuál es la diferencia entre un párrafo de molde y una carta personal real?',
      evitar: 'En este día tan especial quiero desearte todas las bendiciones del universo porque sos un ser de luz incomparable que ilumina nuestras vidas siempre.',
      mejor: 'Todavía me río pensando en la tarde que improvisamos mate bajo la lluvia en la ruta. Gracias por esa calma tuya con la que siempre salvás hasta los días más cruzados.'
    },
    tablaComparativa: {
      titulo: '¿Cómo ajustar tono y extensión según a quién le escribís?',
      columnas: ['Destinatario', 'Extensión sugerida', 'Qué detalle incluir sí o sí'],
      filas: [
        ['Mamá o papá', '180 a 260 palabras', 'Un gesto cotidiano que aprendiste de ellos y agradecés hoy'],
        ['Hijos o sobrinos', '140 a 220 palabras', 'Un rasgo de su carácter actual y orgullo por cómo crecen'],
        ['Pareja o esposos', '160 a 280 palabras', 'Una costumbre compartida del último año y un plan cercano'],
        ['Mejor amiga o amigo', '150 a 230 palabras', 'Una anécdota puntual y agradecimiento por estar en las difíciles']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Plantilla base para mamá o papá',
        texto: '[Apodo o nombre], hoy quise frenar un rato para escribirte algo más largo que un saludo apurado. Todavía me acuerdo de [recuerdo concreto compartido este año] y valoro muchísimo [cualidad real suya]. Ojalá este nuevo año te traiga salud tranquila, sobremesas sin reloj y mucha alegría en casa. Con todo mi cariño, [Tu firma].'
      },
      {
        etiqueta: 'Plantilla base para mejor amiga o amigo',
        texto: '[Apodo], feliz vuelta al sol. Más allá de las corridas de la semana, no quería dejar pasar el día sin agradecerte por [momento en que estuvo ahí]. Ojalá sigamos sumando [cafés / viajes / charlas sin reloj] como el de aquella tarde en [lugar]. Esta semana celebramos como corresponde. Un abrazo enorme, [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué hago si siento que no soy bueno escribiendo largo?',
        respuesta: 'Usá párrafos cortos de dos o tres oraciones como si le contaras una anécdota en un audio. Nombrar una escena real concreta vale mucho más que buscar metáforas difíciles.'
      },
      {
        pregunta: '¿Conviene escribirla a mano o mandarla por WhatsApp?',
        respuesta: 'Si vas a ver a la persona ese día o entregás un regalo, pasarla en papel o en una tarjeta impresa multiplica su valor. Si están lejos, enviarla temprano o a la noche por WhatsApp permite que la lea tranquila.'
      },
      {
        pregunta: '¿Puedo partir de un texto modelo del sitio y adaptarlo?',
        respuesta: 'Sí. Elegí una de nuestras cartas largas, cargá el apodo y tu firma en el personalizador, y cambiá solo una oración del medio por un recuerdo propio de ustedes.'
      }
    ],
    pasosHowTo: [
      { nombre: 'Elegir el apodo y motivo real', texto: 'Abrí la carta con el trato cotidiano de todos los días y explicá por qué querías escribir con calma.' },
      { nombre: 'Sumar una escena compartida', texto: 'Incluí en el segundo párrafo un recuerdo puntual de este último año en lugar de frases genéricas.' },
      { nombre: 'Reconocer una virtud concreta', texto: 'Nombrá un rasgo real que admirás de su carácter y agradecelo con naturalidad.' },
      { nombre: 'Cerrar con deseo realista y firma', texto: 'Terminá deseando salud, descanso o proyectos cumplidos y firmá como siempre.' }
    ],
    categoriasRelacionadas: [
      { slug: 'cartas-para-mi-madre', nombre: 'Cartas para mi madre' },
      { slug: 'carta-para-mi-hija', nombre: 'Carta para mi hija' },
      { slug: 'carta-para-mi-mejor-amiga', nombre: 'Carta para mi mejor amiga' },
      { slug: 'carta-para-mi-novio', nombre: 'Carta para mi novio' }
    ],
    fuentesAutoridad: [
      { nombre: 'FundéuRAE — Puntuación de vocativos, comas y salutaciones en cartas', url: 'https://www.fundeu.es/' },
      { nombre: 'Género epistolar y estructura clásica de la carta', url: 'https://es.wikipedia.org/wiki/Carta' }
    ],
    secciones: [
      {
        subtitulo: '¿Por qué te bloqueás antes de saber cómo escribir una carta de cumpleaños?',
        parrafos: [
          'El bloqueo aparece casi siempre por creer que escribir largo exige palabras poéticas o solemnes. En realidad funciona justo al revés: emociona lo que suena exactamente como hablás vos cuando estás cómodo con esa persona.',
          'Antes de redactar una sola línea, pensá en una escena real vivida en los últimos doce meses. Puede ser una sobremesa de domingo, una charla en auto o cómo esa persona te ayudó en una semana difícil.',
          'Con esa imagen concreta en la cabeza ya tenés el núcleo de la carta resuelto. Todo el resto consiste en ordenarla en cuatro párrafos breves y fáciles de leer.'
        ]
      },
      {
        subtitulo: '¿Cuál es la estructura de 4 bloques que nunca falla en una carta?',
        parrafos: [
          'Una carta de cumpleaños legible respeta cuatro tiempos claros: saludo cercano, recuerdo específico, agradecimiento por una virtud real y deseo sereno de cierre. Separar cada bloque con aire visual evita muros de texto cansadores y facilita la lectura.'
        ],
        lista: [
          '1. Saludo y motivo real: arrancá con el apodo habitual ("Mami,", "Pao,") y contá por qué hoy querías escribir con más calma que un mensaje apurado.',
          '2. Escena concreta del último año: describí en dos o tres oraciones un momento vivido juntos o una costumbre diaria que los une.',
          '3. Lo que admirás hoy: destacá una cualidad tangible —su paciencia, su humor en días cruzados o su escucha— sin exageraciones.',
          '4. Deseo mirando adelante y firma: cerrá con un anhelo real de salud o descanso y firmá con tu nombre o apodo de siempre.'
        ]
      },
      {
        subtitulo: '¿Qué errores comunes conviene evitar al redactar una dedicatoria larga?',
        parrafos: [
          'Conviene evitar clichés gastados ("sos un ser de luz incomparable"), promesas grandilocuentes y disculpas innecesarias al final. Si al leer tu borrador en voz alta sentís que jamás dirías esa frase en una mesa, cambiala por vocabulario cotidiano.',
          'También es clave revisar el vocativo (la palabra o nombre usado para llamar al destinatario) y la concordancia de género si adaptás un modelo pensado para otra persona.'
        ],
        lista: [
          'Evitá párrafos de más de cinco líneas seguidas cuando se va a leer desde el celular.',
          'No pidas perdón por "no saber escribir": el tiempo dedicado ya demuestra cariño.',
          'Verificá signos de puntuación tras el saludo inicial: el vocativo siempre va seguido de coma o en línea aparte.'
        ]
      },
      {
        subtitulo: '¿Cuándo conviene enviarla y cómo presentarla para mayor impacto?',
        parrafos: [
          'El mejor horario depende del canal elegido. Si entregás un regalo presencial, copiar la carta a mano en una hoja simple o imprimir nuestra tarjeta en tono Marfil Sobrio convierte el texto en un recuerdo tangible para guardar.',
          'Si saludás por WhatsApp o viven lejos, elegí la mañana tranquila antes de que arranquen los grupos o el cierre de la noche. De ese modo la persona puede leer los cuatro párrafos sin apuros ni distracciones.'
        ]
      }
    ]
  },
  {
    slug: 'que-regalar-segun-la-edad-guia-practica',
    seoTitle: 'Qué regalar según la edad: guía real de 1 a 60 años',
    titulo: 'Qué regalar en un cumpleaños según la edad sin gastar de más',
    h1: 'Qué regalar según la edad: ideas reales de 1 a 60 años',
    descripcion: 'Descubrí qué regalar según la edad en cumpleaños de 1 a 60 años con opciones útiles, ideas económicas y dedicatorias listas para sumar a cada paquete.',
    keywordPrincipal: 'qué regalar según la edad',
    keywordsSecundarias: [
      'regalos de cumpleaños por etapa',
      'qué regalar a los 15 o 18 años',
      'qué regalar a los 30 o 40 años',
      'regalos para 50 y 60 años'
    ],
    emoji: '🎁',
    tiempoLectura: '9 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Una guía clara por etapa vital para que el regalo y la tarjeta acompañen lo que realmente disfruta quien cumple años.',
    respuestaDirecta: 'Para acertar con qué regalar según la edad sin gastar de más, adaptá el obsequio a la etapa vital: libros ilustrados y juegos familiares entre 1 y 10 años; hobbies, entradas o gift cards entre los 13 y 21; experiencias y descanso a los 30 y 40; y recuerdos colectivos o encuentros compartidos desde los 50 en adelante.',
    citaDestacada: 'Un buen regalo nunca se mide por cuánto costó, sino por cuánto demuestra que prestaste atención a lo que esa persona disfruta hoy.',
    datosPropios: {
      titulo: 'Observación de nuestras 51 categorías por edades e hitos',
      dato: 'El bloque de edades e hitos abarca 1.836 dedicatorias diferenciadas desde el primer añito hasta los 90 años. Las búsquedas más consultadas corresponden a edades redondas (15, 18, 30, 40 y 50 años), donde la tarjeta escrita cobra más peso que el objeto material.',
      fuente: 'Análisis de estructura temática de ParaCumpleanos (51 categorías de edades, 2026).'
    },
    comparacionPractica: {
      titulo: '¿Cuál es la diferencia entre un regalo de apuro y uno pensado para la etapa?',
      evitar: 'Comprar a último momento un adorno o perfume al azar sin tarjeta, solo para no llegar con las manos vacías.',
      mejor: 'Elegir algo cotidiano que use de verdad (un libro, café de especialidad o experiencia compartida) acompañado de una tarjeta escrita con nombre y una escena real.'
    },
    tablaComparativa: {
      titulo: '¿Qué priorizar según la etapa vital en un cumpleaños?',
      columnas: ['Etapa / Edad', 'Regalo que más se disfruta', 'Tono ideal de la tarjeta'],
      filas: [
        ['1 a 10 años', 'Libros ilustrados, juegos de mesa familiares, salidas al aire libre', 'Tierno, simple y pensando en el recuerdo futuro'],
        ['13 a 21 años', 'Auriculares, entradas, hobbies o voucher elegido por ellos', 'Cómplice y respetuoso de su autonomía (cero sermones)'],
        ['30 y 40 años', 'Experiencias, descanso, desayuno sorpresa o útiles de buena calidad', 'Cálido, cercano y sin chistes gastados sobre la edad'],
        ['50, 60 años y más', 'Cuaderno o video familiar, comida compartida, plantas o recuerdos', 'Agradecido, sereno y con letra clara para atesorar']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Dedicatoria para acompañar un regalo infantil (1 a 10 años)',
        texto: 'Feliz cumpleaños [Nombre]. Que nunca se te terminen la curiosidad, las preguntas lindas ni esa risa fuerte que llena toda la casa. Cuando leas esto más grande acordate de cuánto amabas [juego o canción actual]. Con amor, [Tu firma].'
      },
      {
        etiqueta: 'Tarjeta para regalo de 30, 40 o 50 años',
        texto: '[Nombre], elegimos este detalle pensando en regalarte un rato lindo sin corridas ni relojes. Gracias por estar siempre tan cerca de los tuyos; brindamos por un año lleno de salud y tiempo disfrutado de verdad. Un abrazo grande, [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué regalo funciona cuando tengo poco presupuesto?',
        respuesta: 'Un desayuno casero en caja, una planta chica con maceta cuidada o una foto impresa enmarcada junto a una carta escrita con calma suelen emocionar mucho más que objetos caros sin sentido.'
      },
      {
        pregunta: '¿Conviene regalar dinero o gift card a adolescentes y adultos jóvenes?',
        respuesta: 'Sí, a partir de los 15 años suelen valorar muchísimo poder elegir exactamente lo que necesitan. Sumarle una tarjeta personalizada evita que el sobre parezca frío.'
      },
      {
        pregunta: '¿Cómo acierto con un regalo para alguien de 60 años o más que dice "no necesito nada"?',
        respuesta: 'Juntá saludos escritos de hijos, nietos y amigos en un álbum simple o frasco de recuerdos, y acompañalo con una comida resuelta en familia.'
      }
    ],
    pasosHowTo: [
      { nombre: 'Identificar la etapa vital', texto: 'Definí si festejás infancia, adolescencia, adultez activa o madurez mayor antes de mirar tiendas.' },
      { nombre: 'Cruzar utilidad diaria o experiencia', texto: 'Elegí algo que use todas las semanas o un momento compartido en lugar de objetos decorativos genéricos.' },
      { nombre: 'Sumar tarjeta personalizada', texto: 'Escribí en la tarjeta por qué elegiste ese detalle y qué deseás para este nuevo año.' }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-a-mi-nieta-en-su-primer-anito', nombre: 'Primer añito' },
      { slug: 'feliz-cumpleanos-15-anos', nombre: 'Cumpleaños de 15 años' },
      { slug: 'feliz-cumpleanos-30-anos', nombre: 'Cumpleaños de 30 años' },
      { slug: 'feliz-cumpleanos-50-anos', nombre: 'Cumpleaños de 50 años' }
    ],
    fuentesAutoridad: [
      { nombre: 'Historia y tradiciones culturales de los cumpleaños', url: 'https://es.wikipedia.org/wiki/Cumplea%C3%B1os' },
      { nombre: 'FundéuRAE — Uso correcto de cifras y edades en español', url: 'https://www.fundeu.es/' }
    ],
    secciones: [
      {
        subtitulo: '¿Qué regalar según la edad en la infancia temprana (1 a 10 años)?',
        parrafos: [
          'En los primeros diez años conviene priorizar menos objetos de plástico efímeros y más propuestas duraderas: libros ilustrados con dedicatoria fechada, juegos de mesa familiares, ropa cómoda o salidas al aire libre compartidas.',
          'Si celebrás un primer añito o edades entre 1 y 4 años, escribí la tarjeta pensando también en el recuerdo que ese chico leerá dentro de diez años. Anotá qué canción cantaba o cómo se reía con los abuelos.'
        ],
        lista: [
          '1 a 3 años: libros de cartón duro, bloques blandos o paseo especial.',
          '4 a 7 años: juegos de ingenio sencillos, acuarelas o bicicleta.',
          '8 a 10 años: novelas ilustradas iniciales, deportes o salida al cine.'
        ]
      },
      {
        subtitulo: '¿Qué funciona mejor entre los 13, 15, 18 y 21 años?',
        parrafos: [
          'Entre la adolescencia y la juventud temprana cambian rápido los gustos y pesa muchísimo sentirse respetado como persona autónoma. Por eso suelen triunfar entradas a recitales o cines, auriculares cómodos, accesorios para su hobby o una gift card para elegir a gusto.',
          'Al entregar el sobre o paquete, evitá tarjetas con sermones largos sobre estudiar o "aprovechar la juventud". Un tono cómplice, directo y alentador conecta muchísimo mejor con sus proyectos actuales.'
        ]
      },
      {
        subtitulo: '¿Cómo acertar en cumpleaños de 30 y 40 años?',
        parrafos: [
          'A los 30 y 40 años suelen sobrar responsabilidades laborales o familiares y faltar horas de descanso real. Los regalos más valorados son justamente tiempo libre y bienestar cotidiano: un desayuno sorpresa, buen café de especialidad, una cena resuelta o libros elegidos según sus gustos.',
          'Tené presente además no abusar de chistes gastados sobre dolores de espalda o envejecimiento en la dedicatoria. Celebrar lo construido y desear calma compartida suele recibirse el doble de bien.'
        ],
        lista: [
          'Experiencias sin horarios apretados: merienda, spa, escapada corta o cine.',
          'Objetos útiles de buena calidad: termo resistente, mochila urbana o agenda.',
          'Carta breve con nombre y firma: a los 30 y 40 casi nadie recibe dedicatorias cuidadas.'
        ]
      },
      {
        subtitulo: '¿Qué emociona más a partir de los 50, 60 años y en abuelos?',
        parrafos: [
          'En décadas redondas como los 50, 60, 70 u 80 años casi nadie busca acumular adornos; lo que conmueve de verdad son los gestos colectivos familiares. Armar un cuaderno con mensajes escritos de hijos y nietos o un video breve coral deja huella para siempre.',
          'Si acompañás el obsequio con una tarjeta impresa desde ParaCumpleanos, preferí fondos de alto contraste y letra nítida como Marfil Sobrio o Celeste Calma para facilitar la lectura.'
        ]
      }
    ]
  },
  {
    slug: 'como-felicitar-en-el-trabajo-jefe-companeros-clientes',
    seoTitle: 'Cómo felicitar en el trabajo a un jefe, par o cliente',
    titulo: 'Cómo saludar por cumpleaños en el trabajo sin quedar frío ni pasarse',
    h1: 'Cómo felicitar en el trabajo a un jefe, compañero o cliente con equilibrio',
    descripcion: 'Aprendé cómo felicitar en el trabajo por correo o WhatsApp sin perder naturalidad. Reglas de tuteo o usted, mejores horarios y plantillas listas para copiar.',
    keywordPrincipal: 'cómo felicitar en el trabajo',
    keywordsSecundarias: [
      'feliz cumpleaños jefe formal',
      'saludo de cumpleaños para compañero',
      'mensaje de cumpleaños para cliente',
      'etiqueta laboral cumpleaños'
    ],
    emoji: '💼',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Encontrá el equilibrio exacto entre cordialidad genuina y respeto profesional según el vínculo laboral.',
    respuestaDirecta: 'La regla esencial para saber cómo felicitar en el trabajo es respetar exactamente el mismo trato diario (vos o usted), enviar un texto breve en horario laboral por el canal habitual (mail, Slack, Teams o tarjeta del equipo) y agradecer una cualidad concreta de su trato profesional sin incluir bromas personales ni ventas.',
    citaDestacada: 'En el ámbito laboral, la cordialidad breve y respetuosa deja mucho mejor recuerdo que cualquier exageración forzada.',
    datosPropios: {
      titulo: 'Criterio en nuestras 11 categorías laborales y académicas',
      dato: 'Nuestras 11 secciones profesionales (396 mensajes para jefes, docentes, médicos, colegas y clientes) separan estrictamente el trato de usted de los saludos cercanos entre compañeros para evitar saltos bruscos de registro.',
      fuente: 'Revisión de registro y trato en la sección Trabajo y Profesión de ParaCumpleanos (2026).'
    },
    comparacionPractica: {
      titulo: '¿Cómo suena un exceso laboral frente a un saludo equilibrado?',
      evitar: '¡Feliz cumple jefe querido!! Que la rompa toda hoy con mucha fiesta y descanso total del trabajo agotador jajaja!!',
      mejor: 'Estimado [Nombre], le deseamos un muy feliz cumpleaños y un excelente nuevo año personal. Que pueda disfrutar una gran jornada junto a los suyos. Saludos cordiales, [Tu firma].'
    },
    tablaComparativa: {
      titulo: '¿Qué canal, trato y horario conviene según el vínculo laboral?',
      columnas: ['Rol en el trabajo', 'Canal y horario ideal', 'Trato recomendado'],
      filas: [
        ['Jefe o directivo', 'Mail o Slack/Teams entre 9:00 y 11:30 hs', 'Igual al trato diario (usted si es formal)'],
        ['Compañero cercano', 'WhatsApp directo o tarjeta firmada del equipo', 'Vos cercano con buena onda y humor medido'],
        ['Cliente habitual', 'Email breve o WhatsApp corporativo en horario laboral', 'Cordial y sin meter ventas ni promociones'],
        ['Docente o médico', 'Mensaje breve en canal institucional o tarjeta impresa', 'Respetuoso, agradeciendo vocación y trato']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Saludo formal para jefe o cliente (de usted)',
        texto: 'Estimado/a [Nombre o título], le deseo un muy feliz cumpleaños. Aprovecho para agradecerle el buen trato y la claridad de siempre en el trabajo diario; ojalá tenga una jornada muy grata junto a su familia. Saludos cordiales, [Tu firma].'
      },
      {
        etiqueta: 'Saludo grupal para compañero de oficina',
        texto: '¡Muy feliz cumpleaños, [Nombre]! Gracias por la buena energía de cada mañana y por hacer tan ameno el trabajo en equipo. Te deseamos un año con grandes proyectos y buenos descansos. Un abrazo grande de parte de [Todo el equipo].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Conviene saludar por el grupo general de la empresa o por mensaje privado?',
        respuesta: 'Si existe un canal social del equipo donde siempre felicitan, sumarse ahí está muy bien. Con un jefe formal o un cliente, un mensaje privado breve luce mucho más cuidado.'
      },
      {
        pregunta: '¿Qué hago si olvidé si a un cliente lo trato de vos o de usted?',
        respuesta: 'Revisá rápidamente el último correo intercambiado para mantener exactamente la misma fórmula de apertura y despedida.'
      },
      {
        pregunta: '¿Se puede incluir alguna oferta comercial junto al saludo a un cliente?',
        respuesta: 'Conviene evitarlo por completo: mezclar felicitación de cumpleaños con venta directa quita sinceridad al gesto.'
      }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-jefe', nombre: 'Feliz cumpleaños jefe' },
      { slug: 'feliz-cumpleanos-para-mi-jefa', nombre: 'Feliz cumpleaños jefa' },
      { slug: 'feliz-cumpleanos-para-un-companero-de-trabajo', nombre: 'Compañero de trabajo' },
      { slug: 'felicitaciones-formales-de-cumpleanos', nombre: 'Felicitaciones formales' }
    ],
    fuentesAutoridad: [
      { nombre: 'FundéuRAE — Fórmulas de cortesía y tratamiento formal en correos', url: 'https://www.fundeu.es/' },
      { nombre: 'Etiqueta social y protocolo profesional en comunicaciones', url: 'https://es.wikipedia.org/wiki/Etiqueta_(c%C3%B3digo)' }
    ],
    secciones: [
      {
        subtitulo: '¿Cómo elegir entre vos o usted al pensar cómo felicitar en el trabajo?',
        parrafos: [
          'El primer principio de etiqueta laboral es sostener exactamente el mismo grado de confianza de todos los días. Si a un directivo o cliente lo tratás de usted en correos y reuniones, cambiar de golpe al voseo o usar excesivos signos de exclamación se percibe fuera de lugar.',
          'Con compañeros pares o colegas de trato diario cercano, en cambio, un voseo cálido y natural acompañado de un breve deseo de disfrute resulta cercano sin perder respeto profesional.'
        ]
      },
      {
        subtitulo: '¿Qué canal y horario funcionan mejor según el cargo?',
        parrafos: [
          'Elegir el medio adecuado evita invadir el teléfono personal fuera del horario laboral. Mandar un saludo entre las 9:00 y las 11:30 de la mañana transmite atención y orden sin interrumpir su descanso o la cena familiar.'
        ],
        lista: [
          'Jefes o directivos: correo breve, chat interno (Slack o Teams) o tarjeta firmada en mano.',
          'Clientes habituales: email cordial sin adjuntar promociones ni cupones comerciales que resten sinceridad.',
          'Compañeros de área: mensaje en el canal social del equipo o tarjeta conjunta junto a un detalle dulce para el café.'
        ]
      },
      {
        subtitulo: '¿Qué temas conviene evitar siempre en saludos profesionales?',
        parrafos: [
          'Evitá chistes sobre la edad, comentarios sobre sueldos o carga de trabajo, apodos internos que puedan incomodar y referencias a la vida privada si no existe confianza real.',
          'En su lugar, agradecé una cualidad laboral concreta —claridad, acompañamiento, buena predisposición— y deseá un año con salud, proyectos positivos y descanso real. Si firmás en grupo, indicá claramente el nombre del equipo al cierre ("Todo el equipo de Diseño").'
        ]
      },
      {
        subtitulo: '¿Cómo redactar una felicitación grupal clara en dos minutos?',
        parrafos: [
          'Cuando el saludo sale en nombre de varias personas, designá a un responsable para consolidar una tarjeta breve con apertura formal o cordial según corresponda. Podés usar el campo "Tu firma" del personalizador con fórmulas como "Tus compañeros de oficina" o "Dirección y equipo".',
          'Si el equipo trabaja en modalidad remota o híbrida, mandá el enlace a una tarjeta descargable o juntá cinco oraciones cortas en un mismo correo para que llegue ordenado y no sature el chat con mensajes sueltos.'
        ],
        lista: [
          'Revisá que todos los nombres de quienes firman estén bien escritos antes de enviar.',
          'Mantené una extensión total de 40 a 70 palabras para que se lea de un vistazo entre tareas.',
          'Si hay regalo grupal, entregá la tarjeta impresa junto al paquete en la pausa del mediodía.'
        ]
      }
    ]
  },
  {
    slug: 'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido',
    seoTitle: 'Qué decir en un cumpleaños cuando falta un ser querido',
    titulo: 'Qué escribir en un aniversario o cumpleaños cuando falta alguien querido',
    h1: 'Qué decir en un cumpleaños cuando falta un ser querido con respeto',
    descripcion: 'Orientación humana sobre qué decir en un cumpleaños cuando falta un ser querido: palabras serenas para honrar la memoria y acompañar sin frases hechas.',
    keywordPrincipal: 'qué decir en un cumpleaños cuando falta un ser querido',
    keywordsSecundarias: [
      'cumpleaños de alguien fallecido',
      'palabras para mamá o papá en el cielo',
      'cómo acompañar en fecha de duelo',
      'mensajes respetuosos hasta el cielo'
    ],
    emoji: '🕊️',
    tiempoLectura: '8 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Palabras serenas que honran la memoria, acompañan a la familia y evitan expresiones festivas que chocan con el duelo.',
    respuestaDirecta: 'Al buscar qué decir en un cumpleaños cuando falta un ser querido, priorizá la serenidad: nombrá a la persona con cariño, recordá una enseñanza o escena cotidiana suya y evitá cualquier tono festivo o frase hecha como "el tiempo lo cura todo". Si acompañás a un familiar en duelo, ofrecé presencia real y escucha.',
    citaDestacada: 'Nombrar con ternura a quien ya no está alivia el silencio de las fechas difíciles y transforma parte de la nostalgia en gratitud viva.',
    datosPropios: {
      titulo: 'Filtro editorial estricto en nuestras categorías de homenaje y duelo',
      dato: 'Todas nuestras categorías dedicadas a madres, padres o seres queridos fallecidos pasan validación automática que bloquea el 100 % de palabras festivas (fiesta, torta, brindis o velas), garantizando un tono sereno en todas las dedicatorias y tarjetas.',
      fuente: 'Reglas de control editorial automatizado de ParaCumpleanos (validación continua 2026).'
    },
    comparacionPractica: {
      titulo: '¿Qué conviene evitar frente a cómo acompañar con respeto verdadero?',
      evitar: '¡Feliz cumpleaños hasta el cielo!! Hoy es día de festejar con alegría y celebrar arriba en tu día especial!!',
      mejor: 'Hoy vuelve tu fecha en el calendario y en casa preparamos los mates recordando tu risa tranquila. Gracias por el ejemplo que sigue cuidando cada paso nuestro.'
    },
    tablaComparativa: {
      titulo: '¿Qué tono usar según a quién acompañás o recordás ese día?',
      columnas: ['A quién le dedicás el texto', 'Qué conviene priorizar', 'Qué evitar por respeto'],
      filas: [
        ['Homenaje propio a mamá o papá', 'Un recuerdo cotidiano, gratitud y legado familiar', 'Tonos festivos o plantillas genéricas alegres'],
        ['Acompañar a un amigo en duelo', 'Presencia silenciosa, escucha y oferta concreta de café', 'Frases hechas tipo "el tiempo lo cura todo"'],
        ['Homenaje grupal familiar', 'Recordar una enseñanza o costumbre compartida en casa', 'Discursos largos que abrumen en un grupo grande']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Homenaje sereno para mamá o papá en el cielo',
        texto: 'Hoy tu nombre vuelve con fuerza a nuestra mesa, [mamá / papá / nombre]. Todavía guardamos tu manera serena de cuidar a todos y esa enseñanza que nos dejó marcada la vida. Tu huella sigue acompañando cada paso en casa. Con amor intacto, [Tu firma].'
      },
      {
        etiqueta: 'Mensaje breve para acompañar a un amigo que extraña a un ser querido',
        texto: '[Nombre], sé que hoy es una fecha sensible en tu calendario. Quería que supieras que pienso mucho en vos y en la huella hermosa que dejó [nombre del ser querido]. Si te dan ganas de charlar un rato o tomar un café en calma, estoy acá. Un abrazo, [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Es mejor mandar un mensaje corto o no decir nada para no entristecer?',
        respuesta: 'La mayoría de las familias en duelo agradecen muchísimo saber que otros recuerdan la fecha con cariño. Un texto breve, respetuoso y sin presiones casi siempre da alivio.'
      },
      {
        pregunta: '¿Puedo compartir una foto vieja junto a las palabras?',
        respuesta: 'Sí, una foto cotidiana donde la persona sonreía tranquila suele generar mucha emoción y abre lindos recuerdos compartidos en familia.'
      },
      {
        pregunta: '¿Cómo filtran ustedes estas secciones en ParaCumpleanos?',
        respuesta: 'Todas nuestras categorías de duelo e hijos/padres en el cielo pasan validación automática y editorial estricta para impedir cualquier palabra festiva fuera de lugar.'
      }
    ],
    categoriasRelacionadas: [
      { slug: 'felicitaciones-a-madre-fallecida', nombre: 'Madre fallecida' },
      { slug: 'frases-lindas-para-mi-padre-fallecido-que-esta-en-el-cielo', nombre: 'Padre en el cielo' },
      { slug: 'feliz-cumpleanos-hasta-el-cielo', nombre: 'Hasta el cielo' },
      { slug: 'frases-para-una-persona-fallecida', nombre: 'Para una persona fallecida' }
    ],
    fuentesAutoridad: [
      { nombre: 'MedlinePlus (NIH) — Orientación práctica ante el duelo', url: 'https://medlineplus.gov/spanish/bereavement.html' },
      { nombre: 'American Psychological Association — Recursos sobre duelo y acompañamiento', url: 'https://www.apa.org/topics/grief' }
    ],
    secciones: [
      {
        subtitulo: '¿Por qué tantas frases genéricas hieren al decidir qué decir en un cumpleaños cuando falta un ser querido?',
        parrafos: [
          'Cuando llega el cumpleaños de una mamá, un papá o un amigo que ya no está, el calendario pesa distinto. Un error habitual es copiar textos automáticos que hablan de fiesta o alegría desbordada sin reparar en el contexto real de duelo.',
          'Las palabras en ausencia necesitan calma, verdad y respeto por el silencio familiar. No hace falta intentar explicar el dolor ni sonar grandilocuente: alcanza con honrar el recuerdo cotidiano y acompañar con sencillez.'
        ]
      },
      {
        subtitulo: '¿Qué tres elementos transmiten consuelo verdadero en esa fecha?',
        parrafos: [
          'Ya sea para expresar un homenaje propio o sostener a alguien cercano que atraviesa el primer o décimo cumpleaños sin su ser querido, apoyate en tres pilares simples que alivian sin presionar.'
        ],
        lista: [
          'Nombrar una huella cotidiana: su forma de preparar el café, un consejo que siguen aplicando en casa o la paciencia con que escuchaba.',
          'Agradecer el legado vivo: reconocer cuánto de esa persona sigue presente en las costumbres y valores de la familia.',
          'Ofrecer presencia real sin exigir respuesta: frases como "si querés charlar o tomar un café en silencio, estoy acá" quitan peso al otro.'
        ]
      },
      {
        subtitulo: '¿Conviene mencionar a la persona aunque temamos entristecer a su familia?',
        parrafos: [
          'Sí, casi siempre alivia muchísimo. Quienes atraviesan un duelo suelen sentir más soledad cuando el entorno evita nombrar al ausente por temor a generar tristeza en esa fecha.',
          'Recordar su nombre con ternura demuestra que su vida dejó marca más allá del paso del tiempo y abre un espacio seguro para compartir una anécdota serena.'
        ]
      },
      {
        subtitulo: '¿Qué estética y momento elegir si enviás una tarjeta de homenaje?',
        parrafos: [
          'Si descargás una tarjeta visual desde nuestro estudio, seleccioná las paletas sobrias Marfil o Celeste Calma, evitando tonos estridentes. Enviá el mensaje en privado por la mañana o al caer la tarde para respetar el ritmo íntimo del hogar.',
          'En homenajes familiares compartidos, podés sumar debajo del texto una foto serena donde esa persona sonreía en una reunión cotidiana. Ese gesto abre diálogo tranquilo y evita cualquier incomodidad.'
        ],
        lista: [
          'Elegí mensajes breves de 40 a 65 palabras si escribís a un conocido en duelo.',
          'Reservá textos más extensos para homenajes propios o cartas íntimas en familia.',
          'Cerrá ofreciendo disponibilidad concreta sin exigir respuesta inmediata.'
        ]
      }
    ]
  },
  {
    slug: 'como-celebrar-un-cumpleanos-a-la-distancia',
    seoTitle: 'Cómo celebrar un cumpleaños a distancia y estar cerca',
    titulo: 'Ideas reales para celebrar un cumpleaños a distancia y acortar kilómetros',
    h1: 'Cómo celebrar un cumpleaños a distancia y acortar kilómetros con gestos reales',
    descripcion: 'Descubrí cómo celebrar un cumpleaños a distancia con ideas gratuitas y económicas: manejo de horarios, sorpresas locales y cartas emotivas listas para enviar.',
    keywordPrincipal: 'cómo celebrar un cumpleaños a distancia',
    keywordsSecundarias: [
      'feliz cumpleaños lejos de casa',
      'ideas cumpleaños a distancia',
      'sorpresa cumpleaños otro país',
      'carta para alguien que está lejos'
    ],
    emoji: '🌍',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Pequeñas acciones coordinadas desde lejos hacen que tu saludo llegue distinto y se sienta en la mesa.',
    respuestaDirecta: 'La forma más efectiva de resolver cómo celebrar un cumpleaños a distancia es respetar el huso horario local para saludar en su desayuno, combinar una carta o tarjeta personalizada con una foto vieja compartida y pactar una videollamada tranquila o encargar algo rico en un comercio de su misma ciudad.',
    citaDestacada: 'Cuando hay kilómetros en el medio, acordarse del huso horario correcto y proponer cuándo se van a abrazar de nuevo achica cualquier mapa.',
    datosPropios: {
      titulo: 'Colección dedicada en nuestras 16 categorías a la distancia',
      dato: 'Contamos con 16 colecciones específicas y 576 mensajes pensados para hermanos, parejas, madres y amigos en otras ciudades o países, priorizando el valor del huso horario y la promesa del reencuentro.',
      fuente: 'Catálogo de la sección A distancia / lejos de ParaCumpleanos (2026).'
    },
    comparacionPractica: {
      titulo: '¿Qué distingue un saludo aislado de una presencia real a la distancia?',
      evitar: 'Mandar un simple "feliz cumple a la distancia!" a las cinco de la tarde cuando ya está ocupado con otra gente.',
      mejor: 'Calcular su hora local del desayuno para ser de los primeros en saludar con una foto vieja, una carta pensada y horario de llamada tranquilo.'
    },
    tablaComparativa: {
      titulo: '¿Qué gestos funcionan mejor según tu presupuesto y tiempo?',
      columnas: ['Tipo de gesto', 'Costo aproximado', 'Cómo coordinarlo sin estrés'],
      filas: [
        ['Video coral de 60 segundos', 'Gratis', 'Pedí clips de 8 segundos a 5 personas una semana antes'],
        ['Carta + foto vieja por WhatsApp', 'Gratis', 'Mandala al desayuno local o a la noche cuando esté calmo'],
        ['Desayuno o algo dulce local', 'Bajo / Medio', 'Pagá online en una panadería cercana a su dirección'],
        ['Llamada pactada con brindis', 'Gratis', 'Acordá 20 minutos exactos para no interrumpir su reunión']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Saludo de mañana temprana respetando su horario local',
        texto: '¡Buen día y muy feliz cumpleaños hasta [ciudad o país], [Nombre]! Calculé tu hora del desayuno para mandarte este primer abrazo gigante. Acá seguimos guardando la foto de [último encuentro] y contando los días para repetir ese brindis en persona. A la tarde charlamos tranquilos. Con todo cariño, [Tu firma].'
      },
      {
        etiqueta: 'Mensaje largo para acompañar un envío o sorpresa local',
        texto: '[Nombre], aunque hoy la mesa quede a varios kilómetros de distancia, no quería que faltara un gesto nuestro en tu casa. Ojalá disfrutes ese detalle rico con calma y sientas todo el cariño que viaja desde acá. ¡Por un gran nuevo año! Tu familia / [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué hago si tenemos muchas horas de diferencia horaria?',
        respuesta: 'Priorizá siempre la mañana de quien cumple años, aunque en tu ciudad ya sea de madrugada o noche del día anterior; programarlo en mente o mandarlo al despertar allá marca la diferencia.'
      },
      {
        pregunta: '¿Conviene llamar sin avisar por videollamada?',
        respuesta: 'Suele ser mejor mandar primero tu tarjeta o mensaje y preguntar en qué franja de 15 o 20 minutos está libre, así charlan tranquilos sin gente alrededor.'
      },
      {
        pregunta: '¿Cómo hago un regalo desde otro país sin problemas de aduana?',
        respuesta: 'Comprá directamente en comercios locales de su ciudad (cafeterías, librerías, floristerías) con entrega a domicilio ese mismo día.'
      }
    ],
    pasosHowTo: [
      { nombre: 'Calcular su huso horario', texto: 'Verificá la hora exacta de su ciudad para enviar el primer saludo durante su desayuno.' },
      { nombre: 'Unir texto personalizado y foto', texto: 'Enviá una tarjeta o carta con su nombre acompañada de una foto de un encuentro pasado.' },
      { nombre: 'Acordar horario de brindis', texto: 'Coordiná 15 o 20 minutos de llamada tranquila sin interrumpir su jornada.' }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-a-distancia', nombre: 'Cumpleaños a distancia' },
      { slug: 'carta-para-amiga-que-esta-lejos', nombre: 'Carta para amiga lejos' },
      { slug: 'carta-para-mi-novio-que-esta-lejos', nombre: 'Carta para novio lejos' },
      { slug: 'carta-para-novia-que-esta-lejos', nombre: 'Carta para novia lejos' }
    ],
    fuentesAutoridad: [
      { nombre: 'FundéuRAE — Uso correcto de gentilicios y expresiones de distancia', url: 'https://www.fundeu.es/' },
      { nombre: 'Costumbres y celebración del cumpleaños en distintas culturas', url: 'https://es.wikipedia.org/wiki/Cumplea%C3%B1os' }
    ],
    secciones: [
      {
        subtitulo: '¿Por qué cuidar el huso horario cambia todo al saber cómo celebrar un cumpleaños a distancia?',
        parrafos: [
          'Cuando viven en países o provincias lejanas, madrugar con el saludo según su reloj local transmite presencia real desde el inicio del día. En lugar de un mensaje suelto a la tarde, llegar en el desayuno lo coloca en primer plano.',
          'Acompañar esas líneas con una foto vieja divertida o un audio breve de voz multiplica el impacto emocional sin costo alguno.'
        ]
      },
      {
        subtitulo: '¿Qué detalles concretos cruzan fronteras sin complicaciones de envío?',
        parrafos: [
          'Enviar paquetes físicos internacionales suele demorar semanas o trabarse en aduana. Es mucho más práctico resolver el gesto directamente dentro de la ciudad donde vive la persona.'
        ],
        lista: [
          'Encargar café, pastelería o un almuerzo en una cafetería de su barrio pagando con tarjeta online.',
          'Coordinar con amigos cercanos un video coral de un minuto reuniendo clips breves de ocho segundos.',
          'Regalar entradas digitales de cine, teatro o un libro electrónico elegido según sus gustos.',
          'Descargar una tarjeta PNG personalizada de ParaCumpleanos para enviarla junto a un mensaje largo.'
        ]
      },
      {
        subtitulo: '¿Cómo coordinar una videollamada que se disfrute de verdad?',
        parrafos: [
          'Llamar de sorpresa cuando la persona está trabajando o recibiendo visitas suele generar charlas apuradas e incómodas. Conviene mandar temprano tu mensaje y proponer una franja tranquila de veinte minutos.',
          'Tener a mano algo rico o una taza para brindar juntos frente a la pantalla convierte esos minutos en un encuentro genuino.'
        ]
      },
      {
        subtitulo: '¿Qué cierre transforma la nostalgia en entusiasmo compartido?',
        parrafos: [
          'Toda buena dedicatoria a la distancia gana fuerza cuando incluye una referencia concreta al próximo encuentro. Ya sea un mes tentativo de viaje o el compromiso de repetir cierta comida al verse, mirar hacia adelante deja una sonrisa duradera.',
          'También funciona muy bien proponer un pequeño ritual en paralelo: tomar un café o mirar la misma película a la misma hora mientras charlan por audio o mensaje.'
        ],
        lista: [
          'Verificá el horario local de destino el día anterior para no mandar tarde tu saludo.',
          'Combiná al menos una foto de un encuentro pasado con tu dedicatoria personalizada.',
          'Evitá lamentarte todo el mensaje por la distancia: celebrá su nuevo año con alegría real.'
        ]
      }
    ]
  },
  {
    slug: 'como-organizar-una-fiesta-sorpresa-sin-estres',
    seoTitle: 'Cómo organizar una fiesta sorpresa sin estrés paso a paso',
    titulo: 'Cómo organizar una fiesta o reunión sorpresa paso a paso sin estrés',
    h1: 'Cómo organizar una fiesta sorpresa sin estrés ni filtraciones',
    descripcion: 'Aprendé cómo organizar una fiesta sorpresa con cronograma simple de 14 días, coartada creíble, menú práctico y textos listos de invitación por WhatsApp.',
    keywordPrincipal: 'cómo organizar una fiesta sorpresa',
    keywordsSecundarias: [
      'cronograma fiesta sorpresa',
      'invitación cumpleaños sorpresa WhatsApp',
      'coartada para cumpleaños sorpresa',
      'menú fácil fiesta sorpresa'
    ],
    emoji: '🎈',
    tiempoLectura: '8 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Organizá invitaciones, coartada y presupuesto con tres reglas simples para que todos disfruten incluido quien organiza.',
    respuestaDirecta: 'La clave para saber cómo organizar una fiesta sorpresa sin estrés es confirmar primero que el homenajeado disfrute las sorpresas, armar un grupo silencioso de invitados con 14 días de margen, citar a todos 30 minutos antes que al agasajado y resolver un menú práctico que no te ate a la cocina.',
    citaDestacada: 'Una gran sorpresa no depende de gastar una fortuna ni de un guion de cine: depende de cuidar a quien cumple y de mandar invitaciones claras.',
    datosPropios: {
      titulo: 'Pautas probadas en nuestra colección de invitaciones',
      dato: 'Nuestra categoría de frases para invitación de cumpleaños reúne 36 textos modelo diseñados para incluir siempre cuatro datos obligatorios: día, hora real de llegada de invitados, dirección exacta y confirmación límite.',
      fuente: 'Estructura editorial de la categoría Invitación de cumpleaños de ParaCumpleanos (2026).'
    },
    comparacionPractica: {
      titulo: '¿Cuál es la diferencia entre una invitación confusa y una impecable?',
      evitar: 'Hola chicos el sábado hacemos algo para Pedro, vengan tipo 8 a casa pero no le digan nada, después vemos qué comer.',
      mejor: '¡Operación sorpresa para Pedro! Sábado 19:30 hs (llegá puntual antes de las 20:00 que llega él). En Av. Roca 310. Resolvemos pizzas y empanadas; confirmá antes del jueves acá y guardá el secreto.'
    },
    tablaComparativa: {
      titulo: '¿Qué tareas resolver en el cronograma previo sin corridas?',
      columnas: ['Cuándo', 'Tarea clave', 'Detalle para que no falle'],
      filas: [
        ['14 días antes', 'Definir formato íntimo o grande y fecha', 'Confirmar primero si el homenajeado disfruta sorpresas'],
        ['10 días antes', 'Armar grupo paralelo silencioso y enviar invitación', 'Marcar llegada 30 minutos antes que el agasajado'],
        ['3 días antes', 'Cerrar confirmaciones, menú práctico y bebida', 'Elegir comidas que no te aten a la cocina'],
        ['1 día antes', 'Confirmar coartada y tarjeta grupal de firmas', 'Dejar la sorpresa lista para evitar chats de último minuto']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Texto modelo para invitación sorpresa por WhatsApp',
        texto: '¡Hola! Estamos armando una sorpresa linda por el cumpleaños de [Nombre]. La cita es el [día] a las [hora invitados] hs en [dirección] (él/ella llega 30 min después con excusa armada). Habrá [pizzas/picada]; confirmame por privado hasta el [día límite] así calculamos todo. ¡Es secreto total!'
      },
      {
        etiqueta: 'Tarjeta o dedicatoria grupal para entregar en la fiesta',
        texto: '[Nombre], no fue fácil guardar el secreto tantos días, pero juntarnos todos acá hoy demuestra lo mucho que te queremos y valoramos en nuestras vidas. ¡Feliz cumpleaños y por muchísimas mesas compartidas más! Con cariño, [Todos tus amigos / familia].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Qué pasa si un invitado llega tarde y arruina el grito sorpresa?',
        respuesta: 'Por eso conviene citar a todos 30 o 40 minutos antes de la hora real de llegada del agasajado y avisar explícitamente en la invitación.'
      },
      {
        pregunta: '¿Qué coartada funciona mejor sin generar sospechas ni mal humor?',
        respuesta: 'Una excusa cotidiana y creíble: pasar a buscar algo por la casa de un amigo, una cena tranquila de a dos o ir a resolver un mandado corto antes de volver.'
      },
      {
        pregunta: '¿Qué menú práctico me deja disfrutar de la reunión?',
        respuesta: 'Empanadas, pizzas caseras por tandas, tabla de picada o sándwiches fríos permiten servir rápido sin pasar toda la noche cocinando.'
      }
    ],
    pasosHowTo: [
      { nombre: 'Validar preferencias del agasajado', texto: 'Asegurate de que disfrute las sorpresas y elegí cena chica o reunión grande acorde a su carácter.' },
      { nombre: 'Enviar invitación con dos horarios', texto: 'Citá a invitados 30 minutos antes que al agasajado con dirección clara y confirmación límite.' },
      { nombre: 'Preparar coartada sencilla', texto: 'Acordá con un cómplice una salida cotidiana creíble para que llegue relajado a horario.' },
      { nombre: 'Resolver menú y tarjeta grupal', texto: 'Optá por comida práctica de servir y una tarjeta firmada para entregar en el brindis.' }
    ],
    categoriasRelacionadas: [
      { slug: 'frases-para-invitacion-de-cumpleanos', nombre: 'Invitación de cumpleaños' },
      { slug: 'feliz-cumpleanos-amigo', nombre: 'Para un amigo' },
      { slug: 'feliz-cumpleanos-hermana', nombre: 'Para hermana' },
      { slug: 'feliz-cumpleanos-amiga', nombre: 'Para una amiga' }
    ],
    fuentesAutoridad: [
      { nombre: 'FundéuRAE — Redacción correcta de horas, fechas e invitaciones', url: 'https://www.fundeu.es/' },
      { nombre: 'Normas básicas de cortesía y recepción de invitados', url: 'https://es.wikipedia.org/wiki/Etiqueta_(c%C3%B3digo)' }
    ],
    secciones: [
      {
        subtitulo: '¿Qué evaluar antes de decidir cómo organizar una fiesta sorpresa?',
        parrafos: [
          'Antes de armar listas de invitados o reservas, pensá si quien cumple disfruta realmente llegar a un lugar lleno de gente. Si prefiere planes tranquilos, una cena íntima sorpresa con seis personas queridas funciona mucho mejor que un salón grande.',
          'El objetivo de cualquier festejo es la comodidad del homenajeado, nunca armar una producción estresante solo para la foto.'
        ]
      },
      {
        subtitulo: '¿Cómo coordinar invitados y horarios sin que se filtre el secreto?',
        parrafos: [
          'La mayoría de las filtraciones suceden por chats abiertos o invitados que llegan tarde en la puerta. Separar el grupo organizador y fijar una ventana de 30 minutos de margen resuelve el problema desde el primer día.'
        ],
        lista: [
          'Armá un grupo silencioso de WhatsApp aclarando en el asunto que es sorpresa.',
          'Definí la hora de llegada de invitados 30 minutos antes de la hora real del homenajeado.',
          'Pedí que nadie estacione autos muy visibles justo frente a la puerta de entrada.'
        ]
      },
      {
        subtitulo: '¿Qué coartada y menú permiten que vos también disfrutes?',
        parrafos: [
          'Evitá inventar dramas laborales o falsos problemas mecánicos que pongan de mal humor al agasajado camino a la fiesta. Una cena sencilla de a dos o pasar a buscar algo por la casa de un familiar suele ser la excusa más limpia.',
          'Para la mesa, elegí comidas que se sirvan sin atarte a la hornalla: empanadas, picada, pizzas listas por tandas o mesa compartida donde cada invitado aporta algo.'
        ]
      },
      {
        subtitulo: '¿Cómo cerrar la sorpresa con un recuerdo escrito inolvidable?',
        parrafos: [
          'Apenas baje la euforia inicial del grito sorpresa, el gesto más emotivo suele ser entregar una tarjeta o frasco con dedicatorias firmadas de los presentes. Podés preparar la base impresa desde nuestras secciones de invitaciones o mensajes familiares.',
          'Antes de que termine la noche, sacá una foto grupal limpia y compartila al día siguiente en el chat como cierre ordenado de la organización.'
        ],
        lista: [
          'Designá a alguien puntual para recibir a quienes llegan y silenciar celulares antes de la entrada.',
          'Tené hielo, vasos y música listos 20 minutos antes de la hora de la coartada.',
          'Dejá siempre una hoja y lapicera a mano en la mesa para recoger firmas reales.'
        ]
      }
    ]
  },
  {
    slug: 'como-personalizar-tarjetas-y-dedicatorias-whatsapp',
    seoTitle: 'Cómo personalizar tarjetas y mensajes de WhatsApp en 30s',
    titulo: 'Cómo personalizar tarjetas y mensajes de WhatsApp para que no suenen copiados',
    h1: 'Cómo personalizar tarjetas y dedicatorias de WhatsApp en 30 segundos',
    descripcion: 'Aprendé cómo personalizar tarjetas y mensajes de WhatsApp con nuestra regla 1+1+1. Elegí el mejor estilo PNG y convertí cualquier base en un saludo propio.',
    keywordPrincipal: 'cómo personalizar tarjetas',
    keywordsSecundarias: [
      'personalizar mensajes de WhatsApp cumpleaños',
      'tarjetas de cumpleaños PNG 1080x1080',
      'cómo adaptar frases de cumpleaños',
      'evitar mensajes copiados cumpleaños'
    ],
    emoji: '✨',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Tres ajustes mínimos convierten cualquier base bien escrita en un mensaje único con sello propio.',
    respuestaDirecta: 'Para saber cómo personalizar tarjetas en 30 segundos sin que parezcan copiadas, aplicá la fórmula 1+1+1: escribí su nombre o apodo real al comienzo, agregá una escena puntual compartida este año y cerrá con tu firma cotidiana. En ParaCumpleanos podés hacerlo en vivo y descargar la tarjeta completa en PNG.',
    citaDestacada: 'No hace falta inventar la rueda desde cero: una buena base combinada con un apodo real y un recuerdo de diez palabras ya es cien por ciento tuya.',
    datosPropios: {
      titulo: 'Personalización integral en nuestras 351 categorías',
      dato: 'Nuestro estudio en vivo adapta automáticamente vocativos, saludos de cartas, etiquetas bilingües y estrofas en las 12.636 dedicatorias del sitio, generando tarjetas PNG completas de 1080 px de ancho sin recortar párrafos.',
      fuente: 'Documentación funcional del personalizador en vivo de ParaCumpleanos (2026).'
    },
    comparacionPractica: {
      titulo: '¿Cómo cambia una copia automática frente a una personalización rápida?',
      evitar: '✨🎂🥳 ¡¡FELIZ CUMPLEAÑOS!! Que Dios colme de infinitas bendiciones tu hermoso sendero de luz y alegría!! 🎈🎁🎉',
      mejor: 'Pao, feliz vuelta al sol. Gracias por salvarme la semana pasada con esa charla larga; el sábado brindamos como se debe con algo rico. — Sofi.'
    },
    tablaComparativa: {
      titulo: '¿Qué formato visual y canal conviene elegir según cómo saludás?',
      columnas: ['Formato de envío', 'Cuándo usarlo', 'Color sugerido en el estudio'],
      filas: [
        ['Texto directo en WhatsApp', 'Para abrir charla cercana a la mañana', 'N/A — copiá con nombre y firma'],
        ['Tarjeta PNG en estado o historia', 'Para saludar público con diseño limpio', 'Rosa Clásica o Dorado Festivo'],
        ['Tarjeta impresa junto al regalo', 'Para abuelos, madres, cartas o eventos', 'Marfil Sobrio o Celeste Calma'],
        ['Correo o chat formal', 'Para jefes, docentes o clientes', 'Texto limpio o tarjeta Marfil']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Fórmula rápida 1+1+1 aplicada a un amigo',
        texto: '[Apodo], feliz cumpleaños. Todavía me acuerdo de [anécdota corta de este año] y no sabés cómo agradezco tenerte tan cerca. Guardá lugar esta semana que celebramos. — [Tu firma].'
      },
      {
        etiqueta: 'Fórmula rápida 1+1+1 aplicada a un familiar',
        texto: '[Tía / Abuelo / Nombre], qué alegría celebrar otro año tuyo con salud y tan buena compañía. Gracias por [consejo o comida favorita compartida]. Te mando un abrazo enorme, [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿El personalizador modifica todas las tarjetas a la vez?',
        respuesta: 'Sí. Al completar "Nombre o apodo" y "Tu firma" arriba de cualquier categoría o en el estudio del portal, todos los botones de Copiar, WhatsApp y la descarga PNG toman esos datos.'
      },
      {
        pregunta: '¿En qué tamaño y formato se descarga la tarjeta imagen?',
        respuesta: 'Se genera al instante en tu dispositivo en formato PNG de alta definición (1080 px de ancho, y alto flexible si es una carta larga), sin marcas molestas ni registros.'
      },
      {
        pregunta: '¿Qué hago si la frase ya empieza con el nombre de alguien?',
        respuesta: 'Nuestro personalizador detecta automáticamente si el nombre ya está al principio para no repetir saludos duplicados ni romper los saltos de línea.'
      }
    ],
    pasosHowTo: [
      { nombre: 'Ingresar nombre o apodo real', texto: 'Escribí en el primer campo cómo llamás en persona al cumpleañero (ej. Mami, Pao, Juampi).' },
      { nombre: 'Sumar tu firma habitual', texto: 'Agregá en Tu firma cómo firmás siempre ("Sofi", "Los chicos", "Tu hija").' },
      { nombre: 'Elegir paleta y copiar o descargar', texto: 'Seleccioná Rosa, Dorado, Celeste o Marfil y tocá Copiar, WhatsApp o Descargar tarjeta.' }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-mama', nombre: 'Feliz cumpleaños mamá' },
      { slug: 'feliz-cumpleanos-papa', nombre: 'Feliz cumpleaños papá' },
      { slug: 'frases-cortas-las-mas-bonitas', nombre: 'Frases cortas bonitas' },
      { slug: 'tarjetas-bonitas-para-felicitar-en-un-cumpleanos', nombre: 'Tarjetas bonitas' }
    ],
    fuentesAutoridad: [
      { nombre: 'Wikilengua — Uso correcto de mayúsculas tras signos de exclamación y vocativos', url: 'https://www.wikilengua.org/index.php/Portada' },
      { nombre: 'FundéuRAE — Estilo claro en mensajes digitales', url: 'https://www.fundeu.es/' }
    ],
    secciones: [
      {
        subtitulo: '¿Por qué se nota enseguida cuando un saludo no fue adaptado?',
        parrafos: [
          'Cualquier persona distingue al instante una cadena genérica llena de adornos repetidos frente a un texto pensado para ella. La diferencia rara vez está en la longitud: está en incluir al menos un rasgo real que solo aplica a esa relación.',
          'Partir de una base bien redactada ahorra tiempo frente a la hoja en blanco, pero el toque final siempre lo da tu propia voz.'
        ]
      },
      {
        subtitulo: '¿Cómo funciona la regla del 1 + 1 + 1 al aplicar cómo personalizar tarjetas?',
        parrafos: [
          'Esta regla resume tres microajustes de diez segundos que convierten cualquier plantilla sólida en un mensaje completamente personal antes de tocar enviar o descargar la imagen.'
        ],
        lista: [
          '1 nombre o apodo real al comienzo ("Pao,", "Viejo,", "Cami,").',
          '1 recuerdo breve en el medio (una comida, una serie, un viaje o una charla pendiente).',
          '1 firma natural al cierre con tu nombre o grupo.'
        ]
      },
      {
        subtitulo: '¿Cuándo conviene texto por WhatsApp y cuándo tarjeta PNG descargable?',
        parrafos: [
          'El texto directo por WhatsApp brilla cuando querés abrir conversación rápida temprano y seguir charlando. En cambio, la tarjeta imagen en PNG funciona excelente para historias de Instagram, estados, envíos familiares o impresión sobre un regalo.',
          'Podés elegir además entre cuatro paletas visuales —Rosa clásica, Dorado festivo, Celeste calma o Marfil sobria— según la edad y el tono del vínculo. Esta flexibilidad evita mandar el mismo formato a un amigo de la facultad y a una abuela.'
        ]
      },
      {
        subtitulo: '¿Cómo cuidar el formato de poemas y cartas largas en tu tarjeta?',
        parrafos: [
          'Al personalizar versos o textos extensos, respetá los saltos de estrofa y párrafo para facilitar la lectura. Nuestro generador de tarjetas ajusta automáticamente el tamaño tipográfico y expande el alto del lienzo PNG si elegís una carta de varios párrafos, sin cortar palabras.',
          'Además, si alternás entre distintas tarjetas de una misma categoría, el personalizador recuerda temporalmente el nombre y tu firma en la sesión para que compares opciones sin reescribir nada. Incluso con dedicatorias bilingües o cartas extensas para mamá y papá, toda la descarga conserva márgenes limpios y lectura cómoda en cualquier pantalla.'
        ],
        lista: [
          'Usá frases cortas en estados o historias para que se lean en menos de cinco segundos.',
          'Reservá la paleta Marfil Sobria cuando vayas a imprimir la tarjeta en papel.',
          'Leé en voz alta la versión personalizada antes de enviar para chequear naturalidad.',
          'Evitá mezclar diminutivos distintos en el primer párrafo y la despedida.'
        ]
      }
    ]
  },
  {
    slug: 'frases-de-fe-y-agradecimiento-para-cumpleanos-cristianos',
    seoTitle: 'Frases de fe y bendiciones cristianas para cumpleaños',
    titulo: 'Cómo redactar bendiciones y mensajes cristianos sinceros en un cumpleaños',
    h1: 'Frases de fe y bendiciones cristianas sinceras para un cumpleaños',
    descripcion: 'Aprendé a redactar frases de fe y bendiciones cristianas para cumpleaños de mamá, amigos o pastores combinando gratitud cotidiana y versículos con calidez.',
    keywordPrincipal: 'frases de fe y bendiciones cristianas',
    keywordsSecundarias: [
      'feliz cumpleaños cristiano',
      'bendiciones de cumpleaños para mamá',
      'versículos de cumpleaños cortos',
      'mensaje cristiano para pastor'
    ],
    emoji: '🙏',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Uní el afecto cotidiano con la acción de gracias sincera para celebrar otro año caminando con fe.',
    respuestaDirecta: 'Para escribir frases de fe y bendiciones cristianas que emocionen sin sonar a cadena repetida, abrí nombrando a la persona, agradecé a Dios una cualidad real de su vida durante este año y sumá una oración breve de salud y paz o un versículo cercano como Números 6:24-26.',
    citaDestacada: 'Una bendición de cumpleaños conmueve de verdad cuando agradece cómo la vida de esa persona reflejó el amor de Dios durante el año.',
    datosPropios: {
      titulo: 'Repertorio especializado en nuestras 18 categorías cristianas',
      dato: 'ParaCumpleanos reúne 18 colecciones cristianas y 648 mensajes únicos que diferencian saludos para mamá, papá, hijos, amigos, pastores y agradecimientos propios por un año más de vida.',
      fuente: 'Auditoría de la sección Cristiano y bendiciones de ParaCumpleanos (2026).'
    },
    comparacionPractica: {
      titulo: '¿Cómo cambia una cadena impersonal frente a una oración cercana?',
      evitar: 'Dios te bendiga feliz cumpleaños muchas felicidades salmos y bendiciones mil.',
      mejor: 'Mauri, damos gracias a Dios por tu vida y por esa calma con la que siempre servís y escuchás a los tuyos. Que este nuevo año multiplique tu paz y fuerza en casa.'
    },
    tablaComparativa: {
      titulo: '¿Cómo adaptar el mensaje cristiano según el vínculo?',
      columnas: ['Destinatario', 'Enfoque de la bendición', 'Detalle personal clave'],
      filas: [
        ['Mamá, papá o abuelos', 'Gratitud por su testimonio y salud tranquila', 'Agradecer oraciones o ejemplos de hogar'],
        ['Amigos o jóvenes', 'Propósito claro, gozo diario y compañía fiel', 'Reconocer una virtud o proyecto de este año'],
        ['Hijos o sobrinos', 'Protección, sabiduría y alegría en cada paso', 'Recordar un logro o gesto noble reciente'],
        ['Pastor o líder', 'Descanso, discernimiento y paz familiar', 'Agradecer su servicio silencioso por la comunidad']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Bendición cercana para mamá o familiar mayor',
        texto: 'Querida [Nombre], hoy damos gracias a Dios por tu vida y por todo lo que sembrás en nuestra casa con paciencia y oración. Le pedimos que renueve tus fuerzas, te abrace con mucha salud y cuide cada paso de este nuevo año. Te queremos mucho, [Tu firma].'
      },
      {
        etiqueta: 'Saludo cristiano para un amigo o hermano en la fe',
        texto: '[Nombre], muy feliz cumpleaños. Es una alegría enorme ver cómo Dios acompaña tus proyectos y tu entrega hacia los demás. Oramos para que este nuevo año traiga propósito claro, buena compañía y mucha paz en tu hogar. Un abrazo grande, [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Conviene incluir un versículo completo o una oración propia breve?',
        respuesta: 'La combinación ideal es una o dos líneas personales nombrando a quien cumple y un versículo breve (como Salmos 20:4 o Números 6:24-26) que acompañe ese deseo.'
      },
      {
        pregunta: '¿Qué trato usar si saludo al pastor o líder de la congregación?',
        respuesta: 'Seguí el mismo trato cotidiano de tu comunidad (pastor/hermano de vos o de usted) y agradecé especialmente el cuidado hacia su propia familia además de su servicio.'
      },
      {
        pregunta: '¿Qué diseño de tarjeta PNG combina mejor con estas dedicatorias?',
        respuesta: 'Los estilos Marfil Sobrio y Celeste Calma resaltan muy bien el tono sereno y cálido de las tarjetas de bendición.'
      }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-cristiano', nombre: 'Cumpleaños cristiano' },
      { slug: 'feliz-cumpleanos-dios-te-bendiga', nombre: 'Dios te bendiga' },
      { slug: 'palabras-cristianas-para-una-madre-en-su-cumpleanos', nombre: 'Cristianas para mamá' },
      { slug: 'gracias-dios-por-un-ano-mas-de-vida', nombre: 'Gracias Dios por un año más' }
    ],
    fuentesAutoridad: [
      { nombre: 'BibleGateway — Consulta de salmos y bendiciones en español', url: 'https://www.biblegateway.com/' },
      { nombre: 'FundéuRAE — Uso de mayúsculas en textos religiosos y salutaciones', url: 'https://www.fundeu.es/' }
    ],
    secciones: [
      {
        subtitulo: '¿Cómo equilibrar cercanía humana y espiritualidad en el mismo texto?',
        parrafos: [
          'Una bendición sincera nunca reemplaza al cariño cotidiano: lo abraza y le da sentido. Antes de pedir salud o paz, agradecé concretamente cómo esa persona bendijo a los demás durante el año con su escucha, entrega o alegría.',
          'Nombrar a quien cumple en la primera oración marca de inmediato la diferencia frente a los mensajes reenviados en cadena.'
        ]
      },
      {
        subtitulo: '¿Cómo combinar versículo, oración y trato cotidiano sin acartonarse?',
        parrafos: [
          'Copiar un versículo bíblico aislado sin contexto personal suele sentirse frío. Unirlo a dos oraciones propias vinculadas a la etapa actual del destinatario crea una dedicatoria memorable.'
        ],
        lista: [
          'Mamá, papá o abuelos: agradecé su fe constante en casa y pedí descanso, paz y salud firme.',
          'Amigos y jóvenes: combiná gratitud por su amistad con deseos de propósito claro en estudios o trabajo.',
          'Pastores y líderes: reconocé su servicio silencioso y orá también por su propia familia.'
        ]
      },
      {
        subtitulo: '¿Qué versículos breves funcionan mejor para acompañar frases de fe y bendiciones cristianas?',
        parrafos: [
          'En tarjetas cortas de WhatsApp lucen especialmente bien citas breves como Números 6:24-26 ("El Señor te bendiga y te guarde") o Salmos 20:4 ("Que te conceda lo que tu corazón desea"). También podés usar Salmos 118:24 cuando celebran en comunidad un nuevo año lleno de gratitud.',
          'Siempre citá la referencia de manera limpia al final del saludo para que quien recibe la tarjeta pueda releerla tranquila en su Biblia o compartirla en familia.'
        ]
      },
      {
        subtitulo: '¿Cuándo enviar oración breve y cuándo preparar carta o tarjeta impresa?',
        parrafos: [
          'Por la mañana temprana funciona muy bien una oración breve por WhatsApp que acompañe su comienzo de jornada. Para cumpleaños redondos de padres, abuelos o referentes de la comunidad, imprimí una carta o elegí nuestra tarjeta PNG en tono Marfil o Celeste.',
          'Si celebran en familia, leer en voz alta una bendición corta antes de cortar la torta crea un momento sereno de gratitud que todos recuerdan. Incluso podés sumar el nombre de tus hijos o hermanos al firmar para convertir el saludo en un gesto colectivo de hogar.'
        ],
        lista: [
          'Nombrá siempre a la persona en la primera oración para darle cercanía real.',
          'Elegí un versículo breve y claro en vez de copiar capítulos extensos sin contexto.',
          'Agradecé un fruto concreto de su vida durante este año antes de formular el deseo.',
          'Reservá los diseños Marfil o Celeste si vas a imprimir la tarjeta para regalar en mano.'
        ]
      }
    ]
  },
  {
    slug: 'como-celebrar-meses-de-novios-y-aniversarios-sin-caer-en-cliches',
    seoTitle: 'Cómo celebrar meses de novios y aniversarios con amor',
    titulo: 'Cómo celebrar meses de novios y aniversarios con palabras verdaderas',
    h1: 'Cómo celebrar meses de novios y aniversarios sin caer en clichés',
    descripcion: 'Ideas reales sobre cómo celebrar meses de novios y aniversarios con palabras genuinas. Ejemplos por etapa de pareja, cartas listas y detalles sin exagerar.',
    keywordPrincipal: 'cómo celebrar meses de novios y aniversarios',
    keywordsSecundarias: [
      'cartas de meses de novios',
      'mensajes de aniversario de pareja',
      'qué escribir en primer aniversario',
      'bodas de plata y de oro frases'
    ],
    emoji: '💑',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Las relaciones reales se celebran mejor hablando de lo diario compartido que repitiendo promesas de película.',
    respuestaDirecta: 'Para saber cómo celebrar meses de novios y aniversarios sin clichés de telenovela, enfocá tu mensaje en lo cotidiano compartido: nombrá una costumbre linda de ustedes, valorá el equipo que formaron en días difíciles y elegí nota corta para los primeros meses o carta larga para el primer año y aniversarios.',
    citaDestacada: 'El amor duradero se nota menos en los grandes discursos y mucho más en quien recuerda cómo te gusta el café y banca tus días grises.',
    datosPropios: {
      titulo: 'Separación estricta entre cumpleaños y aniversarios en nuestro archivo',
      dato: 'Las categorías de aniversario, meses de novios y bodas en ParaCumpleanos superan auditoría automática para no mezclar nunca la palabra "cumpleaños", garantizando textos dedicados 100 % a la historia de pareja.',
      fuente: 'Reglas de coherencia editorial de ParaCumpleanos sobre secciones de pareja (2026).'
    },
    comparacionPractica: {
      titulo: '¿Cómo suena una frase de telenovela frente a una dedicatoria real?',
      evitar: 'Sos la única razón de mi existir, sin vos no respiro, feliz fecha especial mi media naranja eterna.',
      mejor: 'Gracias por estos meses juntos: por las charlas largas en el colectivo, por cómo hacés livianos los miércoles pesados y por seguir eligiéndonos todos los días.'
    },
    tablaComparativa: {
      titulo: '¿Cómo cambia la dedicatoria según el tiempo de relación?',
      columnas: ['Etapa de la pareja', 'Qué conviene destacar', 'Gesto sencillo que acompaña'],
      filas: [
        ['1 a 6 meses de novios', 'La ilusión, las charlas interminables y lo lindo de conocerse', 'Nota breve junto al desayuno o foto de la primera salida'],
        ['1 a 5 años juntos', 'El equipo diario, la confianza y los aprendizajes mutuos', 'Carta escrita o cena tranquila sin celulares'],
        ['10 a 25 años de historia', 'La compañía firme, los proyectos y el humor propio de casa', 'Álbum chico o paseo al lugar donde empezaron'],
        ['Bodas de plata / oro', 'El legado familiar, la paciencia y toda una vida elegida', 'Homenaje escrito para leer en familia con foto impresa']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Dedicatoria fresca para meses de novios',
        texto: '[Apodo], felices [X] meses juntos. Qué lindo es descubrir lo bien que nos hace compartir hasta las cosas más simples de la semana. Gracias por tus risas, tu paciencia y por cuidarnos así. Por muchísimos meses más caminando cerca, [Tu firma].'
      },
      {
        etiqueta: 'Carta breve para aniversario anual o matrimonio',
        texto: 'Mi amor, feliz aniversario. Más allá de las corridas de todos los días, hoy quise parar un momento para agradecerte por el equipo hermoso que formamos. Volver a casa y encontrarte siempre ordena cualquier día difícil. Te elijo hoy y siempre, [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Es mejor celebrar cada mes o guardar las cartas largas para el año?',
        respuesta: 'Los primeros meses quedan divinos con notas breves o tarjetas rápidas por chat, dejando las cartas extensas para hitos como los 6 meses o el primer aniversario.'
      },
      {
        pregunta: '¿Cómo felicito a unos amigos o padres que cumplen bodas de plata o de oro?',
        respuesta: 'En nuestra sección de bodas de oro y aniversarios tenés dedicatorias escritas desde afuera para reconocer el ejemplo de esa pareja ante hijos y nietos.'
      },
      {
        pregunta: '¿Cuidan que las frases de aniversario no mezclen otros festejos?',
        respuesta: 'Sí. Toda nuestra sección de meses de novios, aniversarios y bodas está revisada estrictamente para hablar únicamente de historia en pareja.'
      }
    ],
    categoriasRelacionadas: [
      { slug: 'carta-de-6-meses-de-novios', nombre: 'Carta de 6 meses de novios' },
      { slug: 'carta-por-primer-aniversario-de-novios', nombre: 'Primer aniversario' },
      { slug: 'carta-de-aniversario-para-mi-novio', nombre: 'Aniversario para mi novio' },
      { slug: 'frases-de-bodas-de-oro-para-50-anos-de-amor', nombre: 'Bodas de oro' }
    ],
    fuentesAutoridad: [
      { nombre: 'Tradiciones de aniversarios y bodas de plata u oro', url: 'https://es.wikipedia.org/wiki/Aniversario' },
      { nombre: 'FundéuRAE — Uso correcto de los nombres de aniversarios de boda', url: 'https://www.fundeu.es/' }
    ],
    secciones: [
      {
        subtitulo: '¿Por qué cada etapa pide un tono distinto al pensar cómo celebrar meses de novios y aniversarios?',
        parrafos: [
          'No se redacta igual al cumplir dos meses saliendo que al festejar cinco años o unas bodas de oro. Al inicio brilla la ilusión del descubrimiento mutuo; con los años toma fuerza la complicidad cotidiana y el apoyo en las etapas difíciles.',
          'Ajustar la extensión al momento evita presiones innecesarias: una nota breve en los primeros meses emociona mucho más que una promesa solemne prematura.'
        ]
      },
      {
        subtitulo: '¿Qué detalles concretos reemplazan con ventaja a las frases de molde?',
        parrafos: [
          'El secreto para que una tarjeta romántica suene verdadera está en lo pequeño de todos los días. Cualquier gesto sencillo multiplicado por memoria compartida supera a los clichés repetidos.'
        ],
        lista: [
          'Imprimir una foto de una salida reciente y escribir detrás tres agradecimientos reales de estos meses.',
          'Preparar su desayuno o merienda favorita dejando la tarjeta personalizada al lado de la taza.',
          'Revisar siempre que el texto hable del tiempo en pareja sin copiar términos de otros festejos.'
        ]
      },
      {
        subtitulo: '¿Cómo personalizar cartas de meses y años sin sonar robótico?',
        parrafos: [
          'En nuestras cartas de aniversario y meses de novios, las aperturas naturales como "Mi amor," se transforman automáticamente al escribir su nombre en el personalizador ("Laura, mi amor,").',
          'Sumar una sola oración propia mencionando una anécdota de la última semana deja la carta completamente única.'
        ]
      },
      {
        subtitulo: '¿Cómo saludar a padres o amigos que cumplen bodas de plata o de oro?',
        parrafos: [
          'Cuando felicitás a una pareja querida desde afuera —por ejemplo a tus padres o abuelos en sus 25 o 50 años—, destacá el ejemplo de respeto mutuo que construyeron y lo lindo de verlos compartir la mesa familiar.',
          'Si participás de una reunión por aniversario de bodas, llevar una tarjeta impresa firmada por hijos y nietos funciona excelente como recuerdo durable junto a una foto actual.'
        ],
        lista: [
          'Evitá comparar el vínculo con historias ajenas: celebrá su recorrido propio.',
          'Mencioná una enseñanza concreta de convivencia que admirás en ellos.',
          'Preferí tonos sobrios como Marfil o Dorado suave al descargar tarjetas de bodas.'
        ]
      }
    ]
  },
  {
    slug: 'etiqueta-digital-cuando-saludar-atrasado-o-por-redes',
    seoTitle: 'Cómo mandar un feliz cumpleaños atrasado sin excusas',
    titulo: 'Qué decir cuando saludás tarde por cumpleaños (y cómo quedar bien igual)',
    h1: 'Cómo mandar un feliz cumpleaños atrasado con gracia y sinceridad',
    descripcion: 'Aprendé cómo mandar un feliz cumpleaños atrasado sin excusas largas. Mejores textos por chat o llamada, plazos oportunos y consejos para quedar bien hoy.',
    keywordPrincipal: 'feliz cumpleaños atrasado',
    keywordsSecundarias: [
      'saludar tarde por cumpleaños',
      'disculpa por olvidar cumpleaños',
      'mensajes atrasados con humor',
      'etiqueta digital cumpleaños'
    ],
    emoji: '⏰',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    fechaActualizacion: '2026-11-17',
    autor: 'Equipo Editorial de ParaCumpleanos',
    autorRol: AUTOR_ROL_DEFAULT,
    autorBio: AUTOR_BIO_DEFAULT,
    resumen: 'Un saludo genuino al día siguiente vale muchísimo más que callarse por vergüenza.',
    respuestaDirecta: 'Para enviar un feliz cumpleaños atrasado y quedar bien igual, asumí el despiste en media línea con sinceridad o humor liviano, evitá excusas largas poco creíbles y cerrá proponiendo un gesto concreto —un café, llamado o brindis esta semana— para compensar con calidez real.',
    citaDestacada: 'Cuando ya pasaron las cien notificaciones del mismo día, tu mensaje atrasado pero sincero es el que realmente se lee despacio y abre charla.',
    datosPropios: {
      titulo: '36 opciones dedicadas en nuestra sección de cumpleaños atrasado',
      dato: 'Dentro del catálogo de tonos y formatos reunimos 36 mensajes específicos para saludos tardíos, calibrados en versiones breves con humor para amigos y fórmulas respetuosas para familiares o contactos laborales.',
      fuente: 'Catálogo editorial de la categoría Feliz cumpleaños atrasado de ParaCumpleanos (2026).'
    },
    comparacionPractica: {
      titulo: '¿Qué cambia entre una excusa incómoda y un saludo atrasado con buena onda?',
      evitar: 'Perdón mil millones de disculpas es que tuve un problema enorme en el trabajo, el celular se quedó sin batería y no dormí nada por eso recién te escribo.',
      mejor: '¡Llegué tarde a las velas pero puntual para desearte un año enorme! Perdón por el despiste de ayer; ¿qué tarde de esta semana nos vemos y te invito un café para compensar?'
    },
    tablaComparativa: {
      titulo: '¿Cómo encarar el atraso según quién cumple años?',
      columnas: ['Vínculo', 'Mejor enfoque', 'Cierre que siempre funciona'],
      filas: [
        ['Amigo cercano o hermano', 'Humor liviano asumiendo el despiste en 1 línea', 'Invitar café, cerveza o merienda en la semana'],
        ['Familiar mayor (tía / abuelo)', 'Disculpa corta y afectuosa sin excusas raras', 'Llamar 5 minutos o pasar a saludar en persona'],
        ['Compañero o jefe', 'Cordial y breve a primera hora hábil siguiente', 'Desear excelente semana y nuevo año laboral']
      ]
    },
    ejemplosAdaptables: [
      {
        etiqueta: 'Mensaje atrasado con humor para amigos',
        texto: '¡Feliz cumpleaños atrasado, [Nombre]! Mi memoria falló ayer por 24 horas, pero mis ganas de festejar tu vida siguen intactas hoy. La primera ronda de [café / algo dulce] de esta semana corre por mi cuenta para ponerme al día. Un abrazo grande, [Tu firma].'
      },
      {
        etiqueta: 'Saludo atrasado cálido para familiar o conocido',
        texto: 'Querido/a [Nombre], se me pasó la fecha de ayer y no quería dejar pasar hoy sin mandarte un saludo muy afectuoso. Deseo que hayas pasado un día hermoso y que este nuevo año te regale mucha salud y tranquilidad. Con cariño, [Tu firma].'
      }
    ],
    faqs: [
      {
        pregunta: '¿Hasta cuántos días después sigue siendo oportuno saludar?',
        respuesta: 'Hasta una semana después sigue siendo totalmente válido con honestidad ("no quería dejar pasar esta semana sin saludarte"). Más allá de dos semanas conviene invitar a charlar directo y brindar juntos.'
      },
      {
        pregunta: '¿Es mejor mandar mensaje privado o comentar tarde en una publicación vieja?',
        respuesta: 'Siempre mensaje privado o llamada: en privado se lee genuino y evita la incomodidad de comentar fuera de tiempo en redes.'
      },
      {
        pregunta: '¿Qué hago si la persona está enojada porque me olvidé?',
        respuesta: 'Asumí el olvido sin excusas rebuscadas, validá que tiene razón y proponé un encuentro concreto pronto para compensar.'
      }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-atrasado', nombre: 'Cumpleaños atrasado' },
      { slug: 'feliz-cumpleanos-general', nombre: 'Cumpleaños general' },
      { slug: 'feliz-cumpleanos-gracioso', nombre: 'Cumpleaños gracioso' },
      { slug: 'feliz-cumpleanos-mejor-amiga', nombre: 'Mejor amiga' }
    ],
    fuentesAutoridad: [
      { nombre: 'FundéuRAE — Uso de fórmulas de disculpa y cortesía en español', url: 'https://www.fundeu.es/' },
      { nombre: 'Normas de cortesía digital y comunicación interpersonal', url: 'https://es.wikipedia.org/wiki/Etiqueta_(c%C3%B3digo)' }
    ],
    secciones: [
      {
        subtitulo: '¿Por qué nunca conviene callarse cuando ya pasó la fecha?',
        parrafos: [
          'Muchas personas evitan escribir por vergüenza cuando descubren el olvido uno o dos días después. Sin embargo, el silencio duele mucho más que reconocer el despiste con afecto sincero.',
          'Al día siguiente ya bajó la avalancha de mensajes automáticos y tu saludo atrasado suele leerse con más atención, abriendo incluso una charla real para ponerse al día.'
        ]
      },
      {
        subtitulo: '¿Qué cuatro reglas resuelven un feliz cumpleaños atrasado con gracia?',
        parrafos: [
          'Aplicar estas cuatro pautas breves convierte una situación incómoda en un gesto cálido que se recuerda para bien.'
        ],
        lista: [
          'Asumí el olvido en una sola oración clara sin inventar excusas largas ni dramas.',
          'Con amigos, sumá un guiño simpático ("llegué tarde a la torta pero a tiempo para brindar").',
          'Con familiares mayores, priorizá una llamada breve de cinco minutos por encima de un texto.',
          'Cerrá con un plan concreto en la semana: café, mate o visita corta.'
        ]
      },
      {
        subtitulo: '¿Es mejor escribir por privado o comentar en redes sociales fuera de fecha?',
        parrafos: [
          'Enviá siempre mensaje privado por WhatsApp o llamá directamente. Comentar dos días tarde en una publicación abierta suele sentirse impersonal y solo deja visible el retraso sin abrir diálogo real ni generar cercanía.',
          'En privado podés sumar una tarjeta personalizada limpia o un audio cálido de veinte segundos. Esa dedicación pequeña demuestra que realmente te importaba saludar aunque el reloj te haya jugado en contra el día anterior.'
        ]
      },
      {
        subtitulo: '¿Cómo evitar que el olvido vuelva a repetirse el próximo año?',
        parrafos: [
          'Apenas termines de enviar el saludo, agendá la fecha como evento anual recurrente en tu calendario del teléfono. Programá dos avisos: uno tres días antes para pensar algún detalle o encargar una tarjeta impresa, y otro a las 8:30 de la mañana del día exacto.',
          'También conviene revisar cada domingo a la noche los cumpleaños de la semana siguiente para llegar siempre con tiempo. Si se trata de familiares mayores o amigos muy cercanos, anotar junto a la fecha qué merienda o música disfrutan convierte un futuro saludo en un regalo pensado con calma.'
        ],
        lista: [
          'Configurá repetición anual automática apenas mandás el mensaje atrasado.',
          'Guardá en la nota del contacto qué comida o regalo disfruta para no improvisar.',
          'Si pasaron más de diez días, cambiá la disculpa por una invitación directa a charlar.',
          'No justifiques el atraso con cadenas largas ni excusas técnicas que suenan frías.'
        ]
      }
    ]
  }
];

export function guiaPorSlug(slug: string): GuiaEditorial | undefined {
  return GUIAS_EDITORIALES.find((g) => g.slug === slug);
}
