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

export interface GuiaEditorial {
  slug: string;
  titulo: string;
  h1: string;
  descripcion: string;
  emoji: string;
  tiempoLectura: string;
  fechaPublicacion: string;
  autor: string;
  resumen: string;
  citaDestacada: string;
  comparacionPractica: ComparacionGuia;
  tablaComparativa: TablaGuia;
  ejemplosAdaptables: EjemploGuia[];
  faqs: FaqGuia[];
  categoriasRelacionadas: { slug: string; nombre: string }[];
  secciones: SeccionGuia[];
}

export const GUIAS_EDITORIALES: GuiaEditorial[] = [
  {
    slug: 'como-escribir-una-carta-de-cumpleanos-que-emocione',
    titulo: 'Cómo escribir una carta de cumpleaños que emocione paso a paso',
    h1: 'Cómo escribir una carta de cumpleaños que emocione (sin quedarte en blanco)',
    descripcion: 'Guía práctica en 4 pasos para redactar una carta de cumpleaños sincera, humana y memorable para mamá, pareja, hijos o mejores amigos.',
    emoji: '✉️',
    tiempoLectura: '8 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Estructurá cualquier carta larga en cuatro bloques simples: apertura cercana, recuerdo concreto, reconocimiento genuino y deseo para el año nuevo.',
    citaDestacada: 'Las cartas que terminan guardadas en un cajón durante años nunca son las más rebuscadas: son las que suenan exactamente como hablás vos cuando estás cómodo.',
    comparacionPractica: {
      titulo: 'Diferencia entre un párrafo de molde y una carta personal real',
      evitar: 'En este día tan especial quiero desearte todas las bendiciones del universo porque sos un ser de luz incomparable que ilumina nuestras vidas siempre.',
      mejor: 'Todavía me río pensando en la tarde que improvisamos mate bajo la lluvia en la ruta. Gracias por esa calma tuya con la que siempre salvás hasta los días más cruzados.'
    },
    tablaComparativa: {
      titulo: 'Cómo ajustar tono y extensión según a quién le escribís',
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
    categoriasRelacionadas: [
      { slug: 'cartas-para-mi-madre', nombre: 'Cartas para mi madre' },
      { slug: 'carta-para-mi-hija', nombre: 'Carta para mi hija' },
      { slug: 'carta-para-mi-mejor-amiga', nombre: 'Carta para mi mejor amiga' },
      { slug: 'carta-para-mi-novio', nombre: 'Carta para mi novio' }
    ],
    secciones: [
      {
        subtitulo: 'Por qué una buena carta no necesita palabras difíciles',
        parrafos: [
          'El bloqueo frente a la hoja en blanco aparece casi siempre por el mismo error: creer que escribir algo lindo exige sonar poético, solemne o recargado. En la vida real pasa justo lo contrario. Las cartas que terminan guardadas en un cajón o releídas en días grises son las que suenan exactamente como hablás vos cuando estás cómodo.',
          'Antes de escribir una sola línea, pensá en una escena real que compartieron en los últimos doce meses. Puede ser una sobremesa, una charla en auto, un mate a las apuradas o la forma en que esa persona te calmó cuando estabas preocupado. Con ese recuerdo en mente ya tenés el corazón de tu carta resuelto.'
        ]
      },
      {
        subtitulo: 'La estructura de 4 bloques que nunca falla',
        parrafos: [
          'Para que el texto tenga ritmo, respire bien visualmente y no quede como una lista suelta de adjetivos repetidos, ordenalo en cuatro párrafos claros:'
        ],
        lista: [
          '1. Saludo y motivo real: arrancá nombrando a la persona por su apodo habitual y explicando por qué hoy querías tomarte unos minutos más que para un simple mensaje rápido.',
          '2. Un recuerdo concreto: describí brevemente un momento vivido juntos o una costumbre que los une. Lo específico emociona diez veces más que lo general.',
          '3. Lo que admirás hoy: mencioná una cualidad concreta de su carácter —su paciencia, su humor en las difíciles, su forma de escuchar— y agradecela sin solemnidad.',
          '4. Deseo mirando adelante y firma cálida: cerrá con un deseo realista de salud, tranquilidad o proyectos cumplidos, y firmá como lo hacés siempre.'
        ]
      },
      {
        subtitulo: 'Errores comunes que conviene evitar',
        parrafos: [
          'Evitá copiar frases grandilocuentes que jamás dirías en persona, prometer cosas imposibles o llenar la carta de clichés como "sos un ser de luz incomparable". Si al leerla en voz alta sentís que no parece tu voz, cambiá dos o tres palabras por tu forma cotidiana de hablar.',
          'Tampoco pidas perdón por escribir largo ni cierres con un "no soy bueno con las palabras". Si te sentaste a dedicar tiempo de verdad, eso ya habla por vos. También conviene revisar concordancia (sobre todo si adaptás un texto pensándolo en mamá, hermana o hija) y dejar una línea en blanco entre párrafo y párrafo.'
        ]
      },
      {
        subtitulo: 'Cuándo enviarla y cómo presentarla',
        parrafos: [
          'Si la mandás por WhatsApp, elegí una hora tranquila de la mañana o la noche para que pueda leerla sin ruido entre mensajes grupales. Si va impresa junto a un regalo, escribila a mano en una hoja simple: la letra propia multiplica el valor emocional aunque no sea prolija. También podés descargar la tarjeta en PNG desde nuestro personalizador si querés sumar un detalle visual rápido.'
        ]
      }
    ]
  },
  {
    slug: 'que-regalar-segun-la-edad-guia-practica',
    titulo: 'Qué regalar en un cumpleaños según la edad sin gastar de más',
    h1: 'Qué regalar según la edad: ideas reales de 1 a 60 años',
    descripcion: 'Ideas prácticas y cuidadas para elegir regalo y dedicatoria desde el primer añito hasta los 50 y 60 años según cada etapa de la vida.',
    emoji: '🎁',
    tiempoLectura: '9 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Una guía clara por etapa vital para que el regalo y la tarjeta acompañen lo que realmente disfruta quien cumple años.',
    citaDestacada: 'Un buen regalo nunca se mide por cuánto costó, sino por cuánto demuestra que prestaste atención a lo que esa persona disfruta hoy.',
    comparacionPractica: {
      titulo: 'Regalo genérico de apuro vs. detalle pensado para la etapa',
      evitar: 'Comprar a último momento un adorno o perfume al azar sin tarjeta, solo para no llegar con las manos vacías.',
      mejor: 'Elegir algo cotidiano que use de verdad (un libro, café de especialidad o experiencia compartida) acompañado de una tarjeta escrita con nombre y una escena real.'
    },
    tablaComparativa: {
      titulo: 'Resumen rápido: qué priorizar según la etapa vital',
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
        pregunta: '¿Cómo acerto con un regalo para alguien de 60 años o más que dice "no necesito nada"?',
        respuesta: 'Juntá saludos escritos de hijos, nietos y amigos en un álbum simple o frasco de recuerdos, y acompañalo con una comida resuelta en familia.'
      }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-a-mi-nieta-en-su-primer-anito', nombre: 'Primer añito' },
      { slug: 'feliz-cumpleanos-15-anos', nombre: '15 años' },
      { slug: 'feliz-cumpleanos-30-anos', nombre: '30 años' },
      { slug: 'feliz-cumpleanos-50-anos', nombre: '50 años' }
    ],
    secciones: [
      {
        subtitulo: 'Infancia temprana (1 a 10 años): menos cosas, más recuerdo',
        parrafos: [
          'En los primeros años los chicos reciben decenas de juguetes plásticos que duran una semana, mientras los padres valoran los objetos útiles o emotivos. Libros ilustrados con dedicatoria fechada adentro, ropa cómoda, juegos de mesa familiares o un álbum de fotos del primer año suelen convertirse en tesoros a largo plazo.',
          'Si regalás a un bebé de 1 o 2 años, escribí la tarjeta pensando en cuando la lea más grande: contale qué canción le gustaba o cómo hacía reír a toda la mesa.'
        ]
      },
      {
        subtitulo: 'Adolescencia e hitos (13, 15, 18 y 21 años): respetar su mundo',
        parrafos: [
          'Entre los 13 y los 21 años cambian rápido los gustos y pesa mucho sentirse escuchado como alguien autónomo. Antes de comprar ropa al azar, preguntá qué hobby o plan tiene hoy: auriculares cómodos, una entrada a un recital o partido, un voucher de su tienda preferida o un detalle vinculado a su estudio o deporte rinden muchísimo mejor.',
          'En la dedicatoria, evitá el tono de sermón o los chistes sobre "ya estás viejo". Reconocé su crecimiento con respeto y humor sano.'
        ]
      },
      {
        subtitulo: 'Adultez plena (30 y 40 años): tiempo, descanso y experiencias',
        parrafos: [
          'A los 30 y 40 suelen sobrar obligaciones y faltar horas libres. Por eso los mejores regalos regalan tiempo o bienestar: un desayuno sorpresa sin apuros, un buen café de especialidad, una cena resuelta, una escapada corta o un libro elegido pensando en sus intereses reales.'
        ],
        lista: [
          'Experiencias compartidas: valen más que otro adorno juntando polvo.',
          'Regalos prácticos de calidad diaria: termo, mochila, manta liviana o agenda buena.',
          'Detalle escrito personal: a esta edad casi nadie recibe tarjetas pensadas con calma.'
        ]
      },
      {
        subtitulo: '50, 60 años y más: celebrar la historia vivida',
        parrafos: [
          'Cuando alguien cumple 50 o 60 años, ya sabe lo que necesita y valora profundamente los gestos colectivos. Armar un cuaderno o video corto con saludos de hijos, hermanos y amigos de toda la vida emociona más que cualquier objeto caro. Combiná ese gesto grupal con algo simple para disfrutar hoy, como una comida en familia o una planta linda para la casa.',
          'Recordá escribir o imprimir la tarjeta con tipografía nítida y buen contraste —nuestros estilos Marfil y Celeste ayudan muchísimo— para que puedan leerla cómodos.'
        ]
      }
    ]
  },
  {
    slug: 'como-felicitar-en-el-trabajo-jefe-companeros-clientes',
    titulo: 'Cómo saludar por cumpleaños en el trabajo sin quedar frío ni pasarse',
    h1: 'Etiqueta laboral: cómo felicitar a un jefe, compañero o cliente',
    descripcion: 'Claves para elegir entre tuteo y usted, qué largo conviene por WhatsApp o mail y cómo redactar saludos profesionales cálidos pero medidos.',
    emoji: '💼',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Encontrá el equilibrio exacto entre cordialidad genuina y respeto profesional según el vínculo laboral.',
    citaDestacada: 'En el ámbito laboral, la cordialidad breve y respetuosa deja mucho mejor recuerdo que cualquier exageración forzada.',
    comparacionPractica: {
      titulo: 'Cómo suena un exceso laboral frente a un saludo equilibrado',
      evitar: '¡Feliz cumple jefe querido!! Que la rompa toda hoy con mucha fiesta y descanso total del trabajo agotador jajaja!!',
      mejor: 'Estimado [Nombre], le deseamos un muy feliz cumpleaños y un excelente nuevo año personal. Que pueda disfrutar una gran jornada junto a los suyos. Saludos cordiales, [Tu firma].'
    },
    tablaComparativa: {
      titulo: 'Canal, trato y horario recomendado según el vínculo laboral',
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
    secciones: [
      {
        subtitulo: 'La regla de oro: respetá el trato que usan todos los días',
        parrafos: [
          'Si a tu jefe o a un cliente siempre los tratás de usted, un saludo de cumpleaños que cambia de golpe al voseo o mete emojis excesivos queda incómodo y forzado. Mantené exactamente el mismo registro de confianza que existe en la oficina o en los mails diarios.',
          'En cambio, con un compañero cercano podés sumar calidez y un guiño simpático sobre el café de la mañana o el alivio de que el cumpleaños caiga en semana laboral.'
        ]
      },
      {
        subtitulo: 'Qué canal conviene usar en cada caso',
        parrafos: [
          'Elegir bien el medio evita invadir espacios privados fuera de hora:'
        ],
        lista: [
          'Jefes o directivos: mensaje breve por Slack/Teams o correo cordial a primera hora, salvo que exista trato habitual por WhatsApp.',
          'Clientes: saludo breve y respetuoso por email o WhatsApp corporativo, sin aprovechar el saludo para meter una venta o promoción agresiva.',
          'Compañeros de equipo: mensaje directo cercano o tarjeta firmada entre todos junto a algo dulce para la pausa.'
        ]
      },
      {
        subtitulo: 'Qué temas evitar en saludos laborales',
        parrafos: [
          'Nunca hagas bromas sobre la edad, el sueldo, el cansancio de trabajar o la apariencia física en un entorno profesional, ni siquiera cuando hay buena onda. Agradecer el buen trato diario y desear un año sereno, con salud y buenos proyectos, siempre deja una excelente imagen.',
          'Si firmás en nombre de todo un área o estudio, escribí un nombre colectivo claro al final ("Todo el equipo de Administración") y enviá durante la mañana laboral.'
        ]
      }
    ]
  },
  {
    slug: 'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido',
    titulo: 'Qué escribir en un aniversario o cumpleaños cuando falta alguien querido',
    h1: 'Cómo escribir con respeto y ternura cuando alguien ya no está',
    descripcion: 'Orientación humana para dedicar palabras a una madre, padre o ser querido fallecido sin caer en frases hechas ni tonos fuera de lugar.',
    emoji: '🕊️',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Palabras serenas que honran la memoria, acompañan a la familia y evitan expresiones festivas que chocan con el duelo.',
    citaDestacada: 'Nombrar con ternura a quien ya no está alivia el silencio de las fechas difíciles y transforma parte de la nostalgia en gratitud viva.',
    comparacionPractica: {
      titulo: 'Qué evitar vs. cómo acompañar con respeto verdadero',
      evitar: '¡Feliz cumpleaños hasta el cielo!! Hoy es día de festejar con alegría y celebrar arriba en tu día especial!!',
      mejor: 'Hoy vuelve tu fecha en el calendario y en casa preparamos los mates recordando tu risa tranquila. Gracias por el ejemplo que sigue cuidando cada paso nuestro.'
    },
    tablaComparativa: {
      titulo: 'Guía de tono según para quién escribís ese día',
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
    secciones: [
      {
        subtitulo: 'Por qué muchas frases de internet hieren en fechas sensibles',
        parrafos: [
          'Cuando llega el cumpleaños de una mamá, un papá o un amigo que falleció, el calendario pesa distinto. Un error frecuente en internet es copiar plantillas genéricas que hablan de fiestas, brindis alegres o regalos sin notar lo inadecuado del contexto.',
          'Las palabras en duelo necesitan calma, honestidad y respeto por el silencio. No hace falta explicar todo el dolor ni sonar perfecto: recordar una enseñanza suya o nombrar un gesto bueno que quedó en casa basta para dar abrigo.'
        ]
      },
      {
        subtitulo: 'Tres elementos que dan consuelo real',
        parrafos: [
          'Si querés escribir algo para recordar su fecha o acompañar a un familiar que extraña mucho ese día, apoyate en tres ideas sencillas:'
        ],
        lista: [
          'Nombrar una huella concreta: su risa en la cocina, la paciencia para escuchar o una frase suya que siguen repitiendo en casa.',
          'Agradecer el legado: valorar lo aprendido a su lado transforma parte de la nostalgia en gratitud viva.',
          'Ofrecer presencia silenciosa: si escribís a un amigo que perdió a alguien, decir "hoy pienso en vos y estoy cerca si querés charlar o tomar un café" ayuda mucho más que un sermón.'
        ]
      },
      {
        subtitulo: 'Acompañar también en las semanas siguientes',
        parrafos: [
          'Recordá que el apoyo vale doble en esa fecha puntual del calendario, cuando mucha gente teme mencionar el nombre por miedo a entristecer. Nombrar a la persona querida con ternura casi siempre alivia a quien atraviesa la ausencia.',
          'Si usás nuestras tarjetas descargables en esta categoría, elegí siempre las paletas sobrias Marfil o Celeste Calma para mantener una estética respetuosa y serena.'
        ]
      }
    ]
  },
  {
    slug: 'como-celebrar-un-cumpleanos-a-la-distancia',
    titulo: 'Ideas reales para celebrar un cumpleaños a distancia y acortar kilómetros',
    h1: 'Cómo estar presente en un cumpleaños aunque estés lejos',
    descripcion: 'Consejos y detalles sencillos para sorprender a un amigo, pareja o familiar que vive en otra ciudad o país el día de su cumpleaños.',
    emoji: '🌍',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Pequeñas acciones coordinadas desde lejos hacen que tu saludo llegue distinto y se sienta en la mesa.',
    citaDestacada: 'Cuando hay kilómetros en el medio, acordarse del huso horario correcto y proponer cuándo se van a abrazar de nuevo achica cualquier mapa.',
    comparacionPractica: {
      titulo: 'Saludo aislado vs. presencia real a kilómetros de distancia',
      evitar: 'Mandar un simple "feliz cumple a la distancia!" a las cinco de la tarde cuando ya está ocupado con otra gente.',
      mejor: 'Calcular su hora local del desayuno para ser de los primeros en saludar con una foto vieja, una carta pensada y horario de llamada tranquilo.'
    },
    tablaComparativa: {
      titulo: 'Opciones reales según tu presupuesto y tiempo disponible',
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
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-a-distancia', nombre: 'Cumpleaños a distancia' },
      { slug: 'carta-para-amiga-que-esta-lejos', nombre: 'Carta para amiga lejos' },
      { slug: 'carta-para-mi-novio-que-esta-lejos', nombre: 'Carta para novio lejos' },
      { slug: 'carta-para-novia-que-esta-lejos', nombre: 'Carta para novia lejos' }
    ],
    secciones: [
      {
        subtitulo: 'Cuidar el huso horario y la intención del primer mensaje',
        parrafos: [
          'Cuando viven en países o provincias distintas, madrugar un poco con el saludo según su horario local demuestra que estuviste atento al calendario. Más que mandar un sticker apurado, funciona muchísimo combinar una tarjeta o carta pensada con una foto vieja que los haga reír.'
        ]
      },
      {
        subtitulo: 'Detalles concretos que cruzan fronteras sin complicaciones',
        parrafos: [
          'No siempre hace falta pagar envíos internacionales caros para dar una sorpresa linda:'
        ],
        lista: [
          'Encargar un desayuno o algo dulce en una panadería cercana a su casa pagando online.',
          'Grabar un video corto de un minuto con varias personas queridas diciendo algo breve pero real.',
          'Acordar una videollamada de 20 minutos con un café o una copa en mano en lugar de interrumpir cuando está con invitados.',
          'Escribir una carta extensa para que la lea tranquila al final del día.'
        ]
      },
      {
        subtitulo: 'Prometer un encuentro concreto y acompañar el día completo',
        parrafos: [
          'Cerrar tu dedicatoria recordando cuándo se vuelven a ver —o dejando abierta la promesa de brindar apenas coincidan— convierte la nostalgia de la distancia en entusiasmo compartido. Un detalle simple que funciona muy bien es mandar un audio tranquilo a la tarde contando qué estaban haciendo o qué comida pedirías para festejar juntos.',
          'Si tienen amigos o familiares en común en varias ciudades, coordinar una hora exacta para que todos manden su foto sosteniendo un cartel casero logra una sorpresa enorme con costo cero.'
        ]
      }
    ]
  },
  {
    slug: 'como-organizar-una-fiesta-sorpresa-sin-estres',
    titulo: 'Cómo organizar una fiesta o reunión sorpresa paso a paso sin estrés',
    h1: 'Guía práctica para organizar una sorpresa de cumpleaños inolvidable',
    descripcion: 'Checklist sencillo para coordinar invitados, invitación, horario, comida y dedicatoria grupal sin que se filtre la sorpresa.',
    emoji: '🎈',
    tiempoLectura: '8 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Organizá invitaciones, coartada y presupuesto con tres reglas simples para que todos disfruten incluido quien organiza.',
    citaDestacada: 'Una gran sorpresa no depende de gastar una fortuna ni de un guion de cine: depende de cuidar a quien cumple y de mandar invitaciones claras.',
    comparacionPractica: {
      titulo: 'Invitación confusa que filtra todo vs. mensaje organizador impecable',
      evitar: 'Hola chicos el sábado hacemos algo para Pedro, vengan tipo 8 a casa pero no le digan nada, después vemos qué comer.',
      mejor: '¡Operación sorpresa para Pedro! Sábado 19:30 hs (llegá puntual antes de las 20:00 que llega él). En Av. Roca 310. Resolvemos pizzas y empanadas; confirmá antes del jueves acá y guardá el secreto.'
    },
    tablaComparativa: {
      titulo: 'Cronograma práctico de organización sin corridas',
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
    categoriasRelacionadas: [
      { slug: 'frases-para-invitacion-de-cumpleanos', nombre: 'Invitación de cumpleaños' },
      { slug: 'feliz-cumpleanos-amigo', nombre: 'Para un amigo' },
      { slug: 'feliz-cumpleanos-hermana', nombre: 'Para hermana' },
      { slug: 'feliz-cumpleanos-amiga', nombre: 'Para una amiga' }
    ],
    secciones: [
      {
        subtitulo: 'Antes de armar nada: pensá si la persona disfruta las sorpresas',
        parrafos: [
          'Parece obvio, pero no todo el mundo ama llegar cansado a un lugar lleno de gente gritando sorpresa. Si tu homenajeado prefiere reuniones íntimas, armá una cena chica sorpresa con seis personas muy cercanas en vez de un salón enorme. El festejo es para su comodidad, no para la foto.'
        ]
      },
      {
        subtitulo: 'Los 5 puntos clave de organización con dos semanas de margen',
        parrafos: [
          'Una buena reunión no depende de gastar fortunas sino de evitar corridas de último minuto:'
        ],
        lista: [
          '1. Armar un grupo aparte silencioso con los invitados confirmados, aclarando explícitamente que es sorpresa.',
          '2. Fijar dos horarios: uno para los invitados (30 minutos antes) y la coartada creíble para quien cumple.',
          '3. Resolver comida práctica (pizzas, picada, empanadas o mesa compartida) para que nadie quede atrapado en la cocina.',
          '4. Preparar una tarjeta grande o frasco con dedicatorias escritas de todos los presentes.',
          '5. Confirmar música y un brindis breve que cierre el momento de emoción sin discursos eternos.'
        ]
      },
      {
        subtitulo: 'El valor de la invitación clara',
        parrafos: [
          'Mandá una invitación escrita con dirección, hora límite de llegada y si hace falta llevar algo o no. Cuanto más claro seas en el mensaje inicial, menos preguntas individuales vas a responder el mismo día. Podés usar nuestras opciones en la sección de invitaciones de cumpleaños para ahorrar tiempo.'
        ]
      }
    ]
  },
  {
    slug: 'como-personalizar-tarjetas-y-dedicatorias-whatsapp',
    titulo: 'Cómo personalizar tarjetas y mensajes de WhatsApp para que no suenen copiados',
    h1: 'El arte de adaptar una dedicatoria en 30 segundos',
    descripcion: 'Trucos simples para transformar cualquier frase de cumpleaños en un saludo auténtico usando el personalizador de tarjetas de ParaCumpleanos.',
    emoji: '✨',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Tres ajustes mínimos convierten cualquier base bien escrita en un mensaje único con sello propio.',
    citaDestacada: 'No hace falta inventar la rueda desde cero: una buena base combinada con un apodo real y un recuerdo de diez palabras ya es cien por ciento tuya.',
    comparacionPractica: {
      titulo: 'Copia en piloto automático vs. personalización en 30 segundos',
      evitar: '✨🎂🥳 ¡¡FELIZ CUMPLEAÑOS!! Que Dios colme de infinitas bendiciones tu hermoso sendero de luz y alegría!! 🎈🎁🎉',
      mejor: 'Pao, feliz vuelta al sol. Gracias por salvarme la semana pasada con esa charla larga; el sábado brindamos como se debe con algo rico. — Sofi.'
    },
    tablaComparativa: {
      titulo: 'Qué formato visual y canal elegir según cómo saludás',
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
        respuesta: 'Se genera al instante en tu dispositivo en formato PNG cuadrado de alta definición (1080×1080 píxeles), sin marcas molestas ni registros.'
      },
      {
        pregunta: '¿Qué hago si la frase ya empieza con el nombre de alguien?',
        respuesta: 'Nuestro personalizador detecta automáticamente si el nombre ya está al principio para no repetir saludos duplicados ni romper los saltos de línea.'
      }
    ],
    categoriasRelacionadas: [
      { slug: 'feliz-cumpleanos-mama', nombre: 'Para mamá' },
      { slug: 'feliz-cumpleanos-papa', nombre: 'Para papá' },
      { slug: 'frases-cortas-las-mas-bonitas', nombre: 'Frases cortas' },
      { slug: 'tarjetas-bonitas-para-felicitar-en-un-cumpleanos', nombre: 'Tarjetas bonitas' }
    ],
    secciones: [
      {
        subtitulo: 'Por qué se nota enseguida cuando un mensaje es copia directa',
        parrafos: [
          'Todos recibimos alguna vez una cadena genérica llena de adornos o signos que jamás usaría quien la manda. En cambio, cuando partís de un buen texto base pero le sumás tres señales de cercanía, el mensaje se vuelve completamente tuyo.'
        ]
      },
      {
        subtitulo: 'La regla del 1 + 1 + 1',
        parrafos: [
          'Antes de tocar enviar o descargar tu tarjeta:'
        ],
        lista: [
          '1 nombre o apodo real al comienzo (ej.: "Pao", "Viejo", "Cami").',
          '1 guiño o recuerdo compartido en el medio (una comida, una serie, un viaje o una charla pendiente).',
          '1 firma tuya al final que suene natural.'
        ]
      },
      {
        subtitulo: 'Texto directo vs. tarjeta PNG para estados y regalo',
        parrafos: [
          'Usá texto directo cuando querés iniciar una charla linda por chat, y descargá la tarjeta en formato imagen cuando vayas a subirla a una historia, mandarla junto a una foto familiar o imprimirla para acompañar un paquete.',
          'Con nuestro personalizador podés elegir además entre cuatro paletas visuales —rosa clásica, dorado festivo, celeste calma o marfil sobria— según el carácter de la persona: tonos suaves y marfil funcionan excelente para adultos mayores, jefes o cartas emotivas, mientras que rosa o dorado levantan enseguida cualquier saludo festivo para amigos o hermanos.'
        ]
      },
      {
        subtitulo: 'El horario también comunica afecto',
        parrafos: [
          'Si buscás destacar entre docenas de notificaciones iguales, elegí saludar bien temprano con el desayuno o al caer la tarde cuando baja el ruido del día. Un mensaje personalizado con nombre y firma enviado en un momento tranquilo casi siempre genera una respuesta larga y sincera del otro lado.'
        ]
      }
    ]
  },
  {
    slug: 'frases-de-fe-y-agradecimiento-para-cumpleanos-cristianos',
    titulo: 'Cómo redactar bendiciones y mensajes cristianos sinceros en un cumpleaños',
    h1: 'Cómo compartir fe, gratitud y cariño en un cumpleaños cristiano',
    descripcion: 'Ideas equilibradas para escribir bendiciones bíblicas y oraciones cercanas para amigos, hermanos, hijos o pastores sin sonar acartonado.',
    emoji: '🙏',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Uní el afecto cotidiano con la acción de gracias sincera para celebrar otro año caminando con fe.',
    citaDestacada: 'Una bendición de cumpleaños conmueve de verdad cuando agradece cómo la vida de esa persona reflejó el amor de Dios durante el año.',
    comparacionPractica: {
      titulo: 'Cadena impersonal vs. oración cercana con nombre y gratitud',
      evitar: 'Dios te bendiga feliz cumpleaños muchas felicidades salmos y bendiciones mil.',
      mejor: 'Mauri, damos gracias a Dios por tu vida y por esa calma con la que siempre servís y escuchás a los tuyos. Que este nuevo año multiplique tu paz y fuerza en casa.'
    },
    tablaComparativa: {
      titulo: 'Cómo adaptar el mensaje cristiano según el vínculo',
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
    secciones: [
      {
        subtitulo: 'Cercanía humana y espiritualidad en el mismo mensaje',
        parrafos: [
          'Una buena bendición de cumpleaños no reemplaza al cariño personal, lo abraza. Cuando felicitás a un hermano en la fe, un amigo o una mamá creyente, agradecé primero lo concreto que valorás de su vida —su servicio, su alegría, su escucha— y luego pedí paz, sabiduría y salud bajo el cuidado de Dios.',
          'Nombrar a la persona por su nombre y recordar cómo su ejemplo bendijo a otros durante el último año vuelve la oración mucho más auténtica que cualquier fórmula repetida.'
        ]
      },
      {
        subtitulo: 'Cómo equilibrar versículo, oración y trato cotidiano',
        parrafos: [
          'Pegar únicamente un versículo suelto sin nombrar a la persona puede sentirse distante. Acompañá esa palabra de fe con dos líneas tuyas reconociendo lo que Dios viene haciendo en su hogar durante el último año:'
        ],
        lista: [
          'Para mamá, papá o abuelos: agradecé su fe constante, su ejemplo en casa y pedí fuerza renovada para esta etapa.',
          'Para jóvenes y amigos: uní deseos de propósito claro, alegría diaria y compañía cercana en cada proyecto.',
          'Para pastores o líderes: reconocé su entrega silenciosa y rogá descanso, discernimiento y paz para toda su familia.'
        ]
      },
      {
        subtitulo: 'Cuándo mandar una bendición corta y cuándo una carta de gratitud',
        parrafos: [
          'Por la mañana temprano funciona excelente una oración breve por WhatsApp que marque un inicio sereno del día. Si se trata de un cumpleaños redondo de mamá, papá o un pastor muy querido, pasá una carta más extensa a papel o descargá nuestra tarjeta PNG para entregarla junto a un detalle.'
        ]
      }
    ]
  },
  {
    slug: 'como-celebrar-meses-de-novios-y-aniversarios-sin-caer-en-cliches',
    titulo: 'Cómo celebrar meses de novios y aniversarios con palabras verdaderas',
    h1: 'Mensajes y detalles para meses de novios y aniversarios reales',
    descripcion: 'Consejos para escribir dedicatorias de 1 mes, 6 meses, 1 año o bodas de oro hablando de lo cotidiano sin frases exageradas.',
    emoji: '💑',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Las relaciones reales se celebran mejor hablando de lo diario compartido que repitiendo promesas de película.',
    citaDestacada: 'El amor duradero se nota menos en los grandes discursos y mucho más en quien recuerda cómo te gusta el café y banca tus días grises.',
    comparacionPractica: {
      titulo: 'Frase de telenovela vs. dedicatoria real de pareja',
      evitar: 'Sos la única razón de mi existir, sin vos no respiro, feliz fecha especial mi media naranja eterna.',
      mejor: 'Gracias por estos meses juntos: por las charlas largas en el colectivo, por cómo hacés livianos los miércoles pesados y por seguir eligiéndonos todos los días.'
    },
    tablaComparativa: {
      titulo: 'Cómo cambia la dedicatoria según el tiempo juntos',
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
      { slug: 'carta-de-6-meses-de-novios', nombre: '6 meses de novios' },
      { slug: 'carta-por-primer-aniversario-de-novios', nombre: 'Primer aniversario' },
      { slug: 'carta-de-aniversario-para-mi-novio', nombre: 'Aniversario para mi novio' },
      { slug: 'frases-de-bodas-de-oro-para-50-anos-de-amor', nombre: 'Bodas de oro' }
    ],
    secciones: [
      {
        subtitulo: 'Cada etapa pide un tono distinto',
        parrafos: [
          'No se escribe igual en el primer mes de novios que al cumplir cinco años o unas bodas de oro. En los primeros meses alcanza con celebrar la ilusión, las charlas interminables y lo lindo de ir conociéndose. Con el paso de los años cobra más fuerza agradecer la paciencia mutua, el equipo en los días complicados y las costumbres chiquitas de casa.',
          'También conviene adaptar la extensión al momento: una nota breve en la mesita de luz antes de salir a trabajar puede emocionar tanto como una carta larga escrita con calma para leer juntos a la noche.'
        ]
      },
      {
        subtitulo: 'Tres ideas concretas para acompañar tu dedicatoria',
        parrafos: [
          'Si querés que el texto brille sin gastar de más, sumalo a un gesto chico cargado de memoria:'
        ],
        lista: [
          'Imprimir una foto de un viaje o salida reciente y escribir detrás tres agradecimientos reales de este tiempo.',
          'Preparar su comida o merienda favorita dejando la tarjeta personalizada al lado de la taza.',
          'Revisar siempre que el texto hable de su historia en pareja y nunca repita frases genéricas ajenas a la relación.'
        ]
      },
      {
        subtitulo: 'Recordar sin confundir fechas ni contextos',
        parrafos: [
          'Por eso en ParaCumpleanos separamos cuidadosamente cada categoría de aniversario con redacción dedicada: desde cartas de un mes o seis meses hasta mensajes sobrios y emotivos para bodas de plata y de oro. Además podés elegir el tema visual de la tarjeta descargable antes de guardarla en tu celular.'
        ]
      }
    ]
  },
  {
    slug: 'etiqueta-digital-cuando-saludar-atrasado-o-por-redes',
    titulo: 'Qué decir cuando saludás tarde por cumpleaños (y cómo quedar bien igual)',
    h1: 'Cómo mandar un feliz cumpleaños atrasado con gracia y sinceridad',
    descripcion: 'Ideas concretas para disculparte con humor o calidez si se te pasó la fecha, sin excusas largas ni incomodidad.',
    emoji: '⏰',
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Un saludo genuino al día siguiente vale muchísimo más que callarse por vergüenza.',
    citaDestacada: 'Cuando ya pasaron las cien notificaciones del mismo día, tu mensaje atrasado pero sincero es el que realmente se lee despacio y abre charla.',
    comparacionPractica: {
      titulo: 'Excusa larga incómoda vs. saludo atrasado que suma buena onda',
      evitar: 'Perdón mil millones de disculpas es que tuve un problema enorme en el trabajo, el celular se quedó sin batería y no dormí nada por eso recién te escribo.',
      mejor: '¡Llegué tarde a las velas pero puntual para desearte un año enorme! Perdón por el despiste de ayer; ¿qué tarde de esta semana nos vemos y te invito un café para compensar?'
    },
    tablaComparativa: {
      titulo: 'Cómo encarar el atraso según quién cumple años',
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
    secciones: [
      {
        subtitulo: 'Nunca dejes de saludar solo porque pasó el día',
        parrafos: [
          'Muchísima gente no escribe por vergüenza cuando se da cuenta 24 o 48 horas después. Error total: a casi todo el mundo le alegra recibir un saludo real incluso tarde, especialmente cuando ya pasó la avalancha de mensajes automáticos del mismo día.',
          'De hecho, un mensaje escrito al día siguiente o dos días después suele leerse con mucha más calma y da pie a ponerse al día de verdad, algo imposible en medio del aluvión de notificaciones de la fecha exacta.'
        ]
      },
      {
        subtitulo: 'Cuatro reglas simples para salir airoso',
        parrafos: [
          'Aplicá estas ideas simples al escribir tarde para que el saludo sume buena energía en lugar de excusas pesadas:'
        ],
        lista: [
          'Reconocelo breve y con buena onda, sin inventar excusas enrevesadas ni historias poco creíbles.',
          'Sumale un toque simpático ("llegué tarde a la torta, pero puntual para desear lo mejor de tu nuevo año").',
          'Si es un familiar mayor o alguien muy cercano, elegí llamar por teléfono cinco minutos en vez de mandar solo dos palabras.',
          'Acompañalo con una propuesta real para enmendar el atraso: invitar un café, llevar algo rico o armar un brindis en la semana.'
        ]
      },
      {
        subtitulo: 'Cómo evitar que se repita el año que viene',
        parrafos: [
          'Apenas termines de mandar tu mensaje, agendá la fecha en el calendario del celular con dos recordatorios —uno tres días antes por si querés preparar regalo o tarjeta impresa, y otro a la mañana del mismo día— para llegar tranquilo el próximo año.'
        ]
      }
    ]
  }
];

export function guiaPorSlug(slug: string): GuiaEditorial | undefined {
  return GUIAS_EDITORIALES.find((g) => g.slug === slug);
}
