export interface SeccionGuia {
  subtitulo: string;
  parrafos: string[];
  lista?: string[];
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
    tiempoLectura: '6 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Estructurá cualquier carta larga en cuatro bloques simples: apertura cercana, recuerdo concreto, reconocimiento genuino y deseo para el año nuevo.',
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
          'Para que el texto tenga ritmo y no quede como una lista suelta de adjetivos repetidos, ordenalo en cuatro párrafos claros:'
        ],
        lista: [
          '1. Saludo y motivo real: arrancá nombrando a la persona por su apodo habitual y explicando por qué hoy querías tomarte unos minutos más que para un simple mensaje rápido.',
          '2. Un recuerdo concreto: describí brevemente un momento vivido juntos o una costumbre que los une. Lo específico emociona diez veces más que lo general.',
          '3. Lo que admirás hoy: mencioná una cualidad concreta de su carácter —su paciencia, su humor en las difíciles, su forma de escuchar— y agradecela.',
          '4. Deseo mirando adelante y firma cálida: cerrá con un deseo realista de salud, tranquilidad o proyectos cumplidos, y firmá como lo hacés siempre.'
        ]
      },
      {
        subtitulo: 'Errores comunes que conviene evitar',
        parrafos: [
          'Evitá copiar frases grandilocuentes que jamás dirías en persona, prometer cosas imposibles o llenar la carta de clichés como "sos un ser de luz incomparable". Si al leerla en voz alta sentís que no parece tu voz, cambiá dos o tres palabras por tu forma cotidiana de hablar.',
          'Tampoco pidas perdón por escribir largo ni cierres con un "no soy bueno con las palabras". Si te sentaste a dedicar tiempo de verdad, eso ya habla por vos.'
        ]
      },
      {
        subtitulo: 'Cuándo enviarla y cómo presentarla',
        parrafos: [
          'Si la mandás por WhatsApp, elegí una hora tranquila de la mañana o la noche para que pueda leerla sin ruido entre mensajes grupales. Si va impresa junto a un regalo, escribila a mano en una hoja simple: la letra propia multiplica el valor emocional aunque no sea prolija.'
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
    tiempoLectura: '7 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Una guía clara por etapa vital para que el regalo y la tarjeta acompañen lo que realmente disfruta quien cumple años.',
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
          'En los primeros años los chicos reciben decenas de juguetes que duran una semana, mientras los padres valoran los objetos útiles o emotivos. Libros ilustrados con dedicatoria fechada adentro, ropa cómoda, juegos de mesa familiares o un álbum de fotos del primer año suelen convertirse en tesoros a largo plazo.',
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
          'Cuando alguien cumple 50 o 60 años, ya sabe lo que necesita y valora profundamente los gestos colectivos. Armar un cuaderno o video corto con saludos de hijos, hermanos y amigos de toda la vida emociona más que cualquier objeto caro. Combiná ese gesto grupal con algo simple para disfrutar hoy, como una comida en familia o una planta linda para la casa.'
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
    tiempoLectura: '5 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Encontrá el equilibrio exacto entre cordialidad genuina y respeto profesional según el vínculo laboral.',
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
          'Elegir bien el medio evita invadir espacios privados:'
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
          'Nunca hagas bromas sobre la edad, el sueldo, el cansancio de trabajar o la apariencia física en un entorno profesional, ni siquiera cuando hay buena onda. Agradecer el buen trato diario y desear un año sereno, con salud y buenos proyectos, siempre deja una excelente imagen.'
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
    tiempoLectura: '5 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Palabras serenas que honran la memoria, acompañan a la familia y evitan expresiones festivas que chocan con el duelo.',
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
          'Recordá que el apoyo vale doble en esa fecha puntual del calendario, cuando mucha gente teme mencionar el nombre por miedo a entristecer. Nombrar a la persona querida con ternura casi siempre alivia a quien atraviesa la ausencia.'
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
    tiempoLectura: '5 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Pequeñas acciones coordinadas desde lejos hacen que tu saludo llegue distinto y se sienta en la mesa.',
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
    tiempoLectura: '6 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Organizá invitaciones, coartada y presupuesto con tres reglas simples para que todos disfruten incluido quien organiza.',
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
          'Mandá una invitación escrita con dirección, hora límite de llegada y si hace falta llevar algo o no. Cuanto más claro seas en el mensaje inicial, menos preguntas individuales vas a responder el mismo día.'
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
    tiempoLectura: '4 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Tres ajustes mínimos convierten cualquier base bien escrita en un mensaje único con sello propio.',
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
    tiempoLectura: '5 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Uní el afecto cotidiano con la acción de gracias sincera para celebrar otro año caminando con fe.',
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
          'Pegar únicamente un versículo suelto sin nombrar a la persona puede sentirse distante. Acompañá esa palabra de fe con dos líneas tuyas reconociendo lo que Dios viene haciendo en su hogar durante el último año.'
        ],
        lista: [
          'Para mamá, papá o abuelos: agradecé su fe constante, su ejemplo en casa y pedí fuerza renovada para esta etapa.',
          'Para jóvenes y amigos: uní deseos de propósito claro, alegría diaria y compañía cercana en cada proyecto.',
          'Para pastores o líderes: reconocé su entrega silenciosa y rogá descanso, discernimiento y paz para toda su familia.'
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
    tiempoLectura: '5 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Las relaciones reales se celebran mejor hablando de lo diario compartido que repitiendo promesas de película.',
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
          'Revisar siempre que el texto hable de su historia en pareja y nunca repita frases genéricas pensadas para cumpleaños.'
        ]
      },
      {
        subtitulo: 'Recordar sin confundir fechas ni contextos',
        parrafos: [
          'Por eso en ParaCumpleanos separamos cuidadosamente cada categoría de aniversario con redacción dedicada: desde cartas de un mes o seis meses hasta mensajes sobrios y emotivos para bodas de plata y de oro.'
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
    tiempoLectura: '4 min de lectura',
    fechaPublicacion: '2026-11-16',
    autor: 'Equipo Editorial de ParaCumpleanos',
    resumen: 'Un saludo genuino al día siguiente vale muchísimo más que callarse por vergüenza.',
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
