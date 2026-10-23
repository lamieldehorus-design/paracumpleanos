const fs = require('fs');
const path = require('path');

const postsPath = path.resolve(__dirname, '../data/posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

// Helper to find and update post
function updatePost(slug, updater) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    console.error(`Post not found: ${slug}`);
    return;
  }
  updater(post);
  console.log(`Updated post: ${slug}`);
}

// 1. COMO CALCULAR PRESUPUESTO
updatePost('como-calcular-presupuesto-de-cumpleanos', (p) => {
  p.intro = 'Planificar el presupuesto de un cumpleaños suele ser el mayor generador de estrés en cualquier festejo. Entre la tentación de sumar detalles de último momento y la falta de claridad en las cantidades por invitado, es habitual terminar gastando hasta un 40% más de lo previsto. En esta guía completa aprenderás el método de distribución porcentual, las fórmulas exactas para calcular comida y bebida sin desperdiciar dinero, y una lista de costos ocultos que casi todo el mundo olvida incluir.';
  p.sections = [
    {
      h2: '1. La regla del 50-20-15-15: Cómo distribuir tu presupuesto total',
      paragraphs: [
        'El error más frecuente al comenzar a planificar es salir a cotizar salones o comprar cotillón sin haber fijado un techo financiero absoluto. Antes de elegir un lugar o reservar servicios, definí el monto máximo que podés y querés desembolsar sin comprometer tus finanzas mensuales.',
        'Los organizadores profesionales de eventos utilizan una regla de distribución porcentual que garantiza equilibrio y evita sorpresas desagradables al final de la fiesta:',
        '• Comida y bebida (45% a 50%): Es el rubro troncal del evento y lo que los invitados recordarán con mayor nitidez. Abarca el plato principal, aperitivos, torta de cumpleaños, barra de bebidas, hielo y café final.',
        '• Espacio, alquiler y mobiliario (20% a 25%): Incluye el salón, quinchos comunitarios o, si festejás en tu casa, el alquiler de mesas, sillas plegables, vajilla, mantelería y gazebos.',
        '• Ambientación, detalles e imprimibles (10% a 15%): Flores, banderines impresos, iluminación cálida, guirnaldas, velas y cartel de bienvenida. Priorizá siempre dos o tres rincones focales antes que dispersar adornos en todo el ambiente.',
        '• Fondo de reserva e imprevistos (10% a 15%): NUNCA planifiques al 100% de tu dinero disponible. Las bolsas de hielo extra, una botella de licor que se agota antes de tiempo, propinas o roturas accidentales deben salir de este fondo de contingencia.'
      ],
      bullets: [
        'Fijá un presupuesto tope por escrito antes de realizar la primera seña o compra.',
        'Asigná el 50% a comida y bebida, 20% a lugar/mobiliario, 15% a decoración y 15% a imprevistos.',
        'Llevá un registro diario en una planilla compartida con cada ticket y comprobante de pago.',
        'Consultá siempre el costo por comensal dividiendo el presupuesto estimado entre la cantidad de confirmados.'
      ]
    },
    {
      h2: '2. Fórmulas exactas para calcular comida y bebida por persona',
      paragraphs: [
        'Comprar de más por miedo a que "falte comida" es el motivo número uno por el cual los presupuestos se disparan sin sentido. La comida sobrante suele terminar desperdiciada o en tu freezer durante meses. Utilizá estas cantidades promedio probadas en celebraciones de 4 a 6 horas de duración:',
        'Para el menú salado tipo cocktail o finger food (pizza party, empanadas, cazuelas o picadas): calculá entre 12 y 16 bocados salados por adulto si no habrá plato principal formal. Si vas a servir asado o carne al plato, calculá 350 a 400 gramos de carne cruda por hombre, 250 gramos por mujer y 150 gramos por niño, acompañados por 150 gramos de ensaladas o guarnición.',
        'En cuanto a la bebida sin alcohol: calculá entre 1 y 1.5 litros por persona (entre gaseosas, aguas saborizadas y agua mineral con y sin gas). En días calurosos de verano o eventos con pista de baile intensa, aumentá un 25% esta cifra.',
        'Para bebidas alcohólicas: en fiestas nocturnas, estimá 1 botella de vino cada 2 o 3 adultos bebedores, 1 litro de cerveza por persona si es la bebida principal, y 1 botella de espumante para el brindis cada 5 o 6 invitados.',
        'Para la torta de cumpleaños: calculá entre 100 y 120 gramos por persona si hay mesa dulce complementaria; si la torta es el único postre, estimá 150 gramos por porción.'
      ],
      bullets: [
        'Adultos en cena informal: 14 a 16 bocados salados por persona.',
        'Asado o comida al plato: 350g carne vacuna/pollo + 150g ensaladas por comensal.',
        'Bebidas sin alcohol: 1.2 litros por comensal (fundamental duplicar agua fresca).',
        'Cerveza: 1 litro por adulto bebedor; Vino: 1 botella cada 2.5 adultos.',
        'Torta principal: 100g a 120g por persona si contás con alfajorcitos o bocados dulces extra.'
      ]
    },
    {
      h2: '3. Costos ocultos que casi todo el mundo olvida presupuestar',
      paragraphs: [
        'Al cerrar acuerdos con proveedores, hay renglones pequeños que no figuran en las cotizaciones iniciales y que, sumados, pueden agregar entre un 15% y un 25% de costo imprevisto a tu celebración. Tenerlos en cuenta de antemano te da poder de negociación:',
        '• El hielo: En una fiesta de 30 personas se necesitan entre 20 y 30 kilos de hielo para enfriar botellas y abastecer los vasos. Comprarlo a último momento en estaciones de servicio cuesta hasta el triple que encargarlo en una fábrica de hielo o distribuidora mayorista.',
        '• Descorche y canon de limpieza: Si alquilás un salón o espacio privado, consultá si te cobran por ingresar tus propias botellas o si el servicio de limpieza final está incluido en la tarifa de alquiler.',
        '• Descartables y servilletas de buena calidad: Los vasos de plástico muy fino se rompen fácil y hacen que los invitados usen tres o cuatro vasos por noche. Invertí en vasos reutilizables de plástico rígido (ecovasos) que además sirven como souvenir conmemorativo.',
        '• Fletes y traslados: Si contratás mobiliario, sonido o torta en locales lejanos, el flete puede representar hasta un 30% del valor del servicio. Priorizá siempre proveedores de tu barrio o cercanía.'
      ],
      bullets: [
        'Hielo en cantidad: 1 kilo por persona en verano; encargalo en bolsas grandes con anticipación.',
        'Vasos rígidos reutilizables: reducen el desorden a la mitad y recortan el gasto de descartables.',
        'Costos de flete y entrega: consultá siempre si el traslado y retiro están bonificados.',
        'Vajilla básica de emergencia: cubiertos, destapadores, encendedores para las velas y servilletas de papel absorbente.'
      ]
    },
    {
      h2: '4. Tres niveles de presupuesto: Cómo optimizar según tu bolsillo',
      paragraphs: [
        'No necesitás una fortuna para lograr una fiesta memorable. Lo que define el éxito de una reunión no es el lujo de la vajilla, sino la calidez de la bienvenida, la buena música y una propuesta gastronómica sabrosa y abundante.',
        '• Presupuesto Económico / En Casa: Optá por una reunión a la tarde o tapeo nocturno informal tipo pizza party casera o empanadas. La decoración se resuelve con banderines imprimibles gratuitos, guirnaldas de luces navideñas y flores silvestres. Las bebidas se compran en supermercados mayoristas con descuento de tarjeta.',
        '• Presupuesto Medio: Alquiler de quincho con parrilla o SUM de edificio. Contratación de un servicio de pizzas o perniles listos para armar sandwiches. Torta de pastelería artesanal y DJ contratado o playlist colaborativa en Spotify con altavoces potentes.',
        '• Presupuesto Alto / Salón Completo: Servicio de catering integral con camareros, barra de coctelería de autor libre, fotógrafo profesional, iluminación perimetral y ambientación temática completa.'
      ],
      bullets: [
        'En casa: maximizá el impacto con luces cálidas, música agradable y comida casera rendidora.',
        'En SUM: aprovechá las instalaciones para abaratar alquiler y contratá comida lista para servir.',
        'Aprovechá promociones bancarias y descuentos en bebidas durante los meses previos al festejo.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Con cuánta anticipación debo empezar a comprar los elementos del presupuesto?',
      answer: 'Para bebidas alcohólicas y elementos secos (descartables, velas, servilletas), conviene comprar con 2 o 3 meses de anticipación aprovechando ofertas. Los alimentos frescos y el hielo se reservan 2 semanas antes y se retiran el día previo.'
    },
    {
      question: '¿Cómo calcular el presupuesto si no sé la cantidad exacta de invitados?',
      answer: 'Hacé una estimación con un margen de 20% de inasistencia (tasa estándar en eventos informales). Si invitás a 50 personas, presupuestá comida y bebida para 40 a 42 confirmados.'
    },
    {
      question: '¿Conviene contratar servicio de catering o cocinar en casa?',
      answer: 'Si son más de 25 invitados, cocinar en casa suele sobrecargar al anfitrión e impedirle disfrutar la fiesta. Un servicio intermedio como empanadas para hornear o pizzas a la parrilla te libera de tareas a un costo muy accesible.'
    }
  ];
});

// 2. CHECKLIST ORGANIZAR CUMPLEAÑOS
updatePost('checklist-organizar-cumpleanos', (p) => {
  p.intro = 'Organizar un cumpleaños exitoso no depende de la suerte ni de improvisar sobre la marcha: es una cuestión de método y cronograma. Cuando intentás resolver todo durante los últimos tres días, los olvidos y el agotamiento arruinan la experiencia antes de que empiece la música. Este checklist cronológico paso a paso te guía desde dos meses antes hasta el minuto en que soplan las velitas.';
  p.sections = [
    {
      h2: '1. Cronograma de 8 a 4 semanas antes: Las decisiones estructurales',
      paragraphs: [
        'En esta etapa se toman las decisiones que condicionan todo lo demás: fecha, presupuesto y lugar. postergar estas elecciones reduce drásticamente las opciones disponibles de salones y proveedores.',
        'Lo primero es definir la fecha exacta y considerar posibles feriados o fines de semana largos que puedan complicar la asistencia de tus seres queridos. Si el cumpleaños cae en día de semana laboral, decidí si harás una cena íntima ese día o si trasladarás el gran festejo al viernes o sábado inmediato.',
        'El segundo paso ineludible es armar la lista preliminar de invitados. No te limites a un número en el aire: escribí nombres y apellidos. Dividí la lista en "imprescindibles" y "opcionales". Esta cifra define si tu living alcanza, si necesitás un quincho o si amerita alquilar un salón.'
      ],
      bullets: [
        'Fijar fecha, horario de inicio y hora estimada de finalización.',
        'Armar la lista de invitados con nombres y teléfonos para el grupo o difusión.',
        'Definir el presupuesto total disponible y el lugar del festejo.',
        'Enviar un "Save the Date" informal a los amigos y familiares más cercanos.',
        'Reservar salón, quincho o chequear disponibilidad del SUM del edificio.'
      ]
    },
    {
      h2: '2. Cronograma de 3 a 2 semanas antes: Contrataciones, temática y menú',
      paragraphs: [
        'Con el lugar asegurado y la lista de invitados depurada, es momento de coordinar el menú, la ambientación y las invitaciones formales.',
        'Enviá las invitaciones digitales o impresas con al menos dos o tres semanas de anticipación. Es fundamental incluir un plazo límite de confirmación (RSVP) fijado a 5 o 7 días antes del evento. Esto te permitirá comprar las cantidades exactas de comida y bebida sin malgastar dinero.',
        'Definí la temática o paleta de colores. Esto no significa que deba ser una fiesta de disfraces: una simple combinación de dos tonos (como dorado y verde bosque, o terracota y blanco crema) simplifica la elección de servilletas, flores, banderines y torta.'
      ],
      bullets: [
        'Enviar invitaciones con fecha límite de confirmación (RSVP).',
        'Definir el menú (platos principales, opciones vegetarianas/celíacas y postres).',
        'Encargar la torta de cumpleaños en una pastelería de confianza.',
        'Preparar la lista de reproducción de música (calculá mínimo 5 horas sin repeticiones).',
        'Descargar e imprimir banderines decorativos, carteles y recuerdos.'
      ]
    },
    {
      h2: '3. Cronograma de 7 a 2 días antes: Compras, logística y confirmaciones',
      paragraphs: [
        'Durante la semana previa el objetivo es dejar resueltas todas las compras no perecederas y coordinar la ayuda de tu círculo íntimo. No intentes ser héroe: delegar pequeñas tareas (alguien que traiga el hielo, alguien que maneje la música) reduce tu nivel de ansiedad a cero.',
        'Hacé el recuento final de invitados confirmados. Llamá o enviá un mensaje cariñoso a quienes aún no hayan respondido. Con el número cerrado en mano, hacé las compras de bebidas, descartables, aderezos y elementos de limpieza.',
        'Revisá el estado del mobiliario: ¿alcanzan las sillas? ¿hay suficientes abridores de botellas, repasadores y enchufes para la música? Si festejás al aire libre, chequeá el pronóstico del clima y tené a mano un plan B bajo techo.'
      ],
      bullets: [
        'Revisar confirmaciones finales y ajustar cantidades de compras.',
        'Comprar bebidas no alcohólicas, vinos, licores y descartables.',
        'Reservar las bolsas de hielo en fábrica o distribuidora para retirar el día del evento.',
        'Preparar un botiquín básico y elementos de limpieza rápida (trapos, bolsas de basura grandes).',
        'Chequear funcionamiento de parlantes bluetooth, alargues y cables de audio.'
      ]
    },
    {
      h2: '4. El día del evento: Rutina sin estrés hora por hora',
      paragraphs: [
        'El día del cumpleaños tu única misión debe ser recibir a los invitados relajado y con una sonrisa. Si seguiste el cronograma, hoy solo quedan tareas de montaje y calentamiento de comida.',
        'Por la mañana: armá la disposición del salón o living, colgá los banderines y colocá las bebidas en heladeras o conservadoras con hielo para que estén a temperatura óptima al llegar la gente.',
        'Dos horas antes: prendé luces decorativas, poné música ambiental a volumen medio, cortá rodajas de limón y prepará las jarras de agua fresca. Date una ducha tranquila y cambiate con tiempo de sobra para no recibir a los primeros invitados a las apuradas.'
      ],
      bullets: [
        'Mañana: colocar hielo y bebidas a enfriar con 4 a 6 horas de anticipación.',
        'Mediodía: ambientar el espacio, colocar banderines y rincón de fotos.',
        '2 horas antes: preparar mesa de comida, platos y servilletas.',
        '1 hora antes: estar listo y cambiado, encender música y disfrutar el inicio de la fiesta.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Qué hago si llueve y mi fiesta era al aire libre?',
      answer: 'Siempre planificá desde la semana previa un espacio cerrado alternativo (un living despejado, un garage limpio o un gazebo impermeable). Si tenés que cambiar de locación, avisá a los invitados por mensaje de difusión con 24 horas de antelación.'
    },
    {
      question: '¿Cómo calcular cuántos invitados realmente van a asistir?',
      answer: 'La regla general es que asiste entre el 80% y el 85% de los convocados. Si alguien no confirmó 4 días antes, asumí que no vendrá para el cálculo de comida fresca.'
    }
  ];
});

// 3. COMO ESCRIBIR UNA CARTA DE CUMPLEAÑOS
updatePost('como-escribir-una-carta-de-cumpleanos-inolvidable', (p) => {
  p.intro = 'En una época donde los saludos de cumpleaños se reducen a un emoji rápido por WhatsApp o una historia de Instagram que desaparece a las 24 horas, recibir una carta manuscrita sincera es uno de los regalos más conmovedores y duraderos que existen. Una buena carta no necesita palabras rebuscadas ni métrica poética: lo que emociona es la autenticidad, el rescate de anécdotas compartidas y el agradecimiento genuino por la presencia de esa persona en tu vida.';
  p.sections = [
    {
      h2: '1. La estructura en 4 actos que nunca falla',
      paragraphs: [
        'El mayor bloqueo frente a la hoja en blanco surge de no saber por dónde empezar. Para evitar frases cliché como "espero que la pases lindo", seguí esta estructura narrativa que capta el interés y construye emoción gradualmente:',
        '• Acto I: El anclaje temporal o recuerdo inicial. En lugar de arrancar con un frío "Feliz cumple", empezá evocando una imagen concreta: "Me acordaba hoy de cuando nos conocimos...", "Pensaba esta mañana en cuántas veces nos reímos hasta llorar aquel verano...", o "Cada vez que llega esta fecha, recuerdo tu abrazo cuando...". Conectar con una escena real transporta al lector de inmediato.',
        '• Acto II: El reconocimiento de sus cualidades únicas. Destacá rasgos de su personalidad que no todo el mundo ve o que vos valorás especialmente: su generosidad silenciosa, su capacidad de escuchar sin juzgar, su sentido del humor en momentos difíciles o su perseverancia cuando las cosas se complican.',
        '• Acto III: El agradecimiento por lo compartido. Decile explícitamente cómo su presencia mejoró tu vida. Las personas necesitan saber que su existencia hace una diferencia en quienes las rodean. Este es el corazón emocional de la carta.',
        '• Acto IV: La bendición hacia el futuro. Concluía con deseos claros y profundos para su nuevo año de vida: no solo salud y felicidad, sino proyectos cumplidos, serenidad interior, viajes soñados y la certeza de que siempre vas a estar a su lado.'
      ],
      bullets: [
        'Comenzá con una memoria o anécdota vívida en lugar de un saludo genérico.',
        'Mencioná dos o tres rasgos personales que admires sinceramente de la persona.',
        'Agradecé momentos específicos de apoyo, lealtad o alegría compartida.',
        'Cerrá con una promesa de presencia y deseos concretos para su nueva etapa.'
      ]
    },
    {
      h2: '2. Consejos de redacción para evitar la cursilería forzada',
      paragraphs: [
        'Escribir desde el corazón no significa usar palabras pomposas que no forman parte de tu vocabulario habitual. La emoción más pura se transmite a través de la sencillez.',
        'Escribí tal como hablás. Si con esa persona tenés un vínculo cómplice y con humor, tu carta debe reflejar esos chistes internos y apodos cariñosos. La solemnidad excesiva suena distante y postiza.',
        'Cuidá los detalles físicos del mensaje: elegí un papel de buen gramaje, una lapicera que no manche y tomate el tiempo de escribir a mano. Las pequeñas imperfecciones de la caligrafía humana tienen una calidez que ninguna tipografía digital puede igualar.'
      ],
      bullets: [
        'Usá tu voz natural: no intentes sonar solemne si tu vínculo es descontracturado.',
        'Escribí un borrador previo en tu celular o libreta para corregir antes de pasar a la tarjeta final.',
        'Evitá reproches pasados o temas polémicos; una carta de cumpleaños es un espacio 100% luminoso.',
        'Cuidá la presentación: una linda tarjeta o sobre perfumado eleva el valor del detalle.'
      ]
    },
    {
      h2: '3. Modelos de carta para inspirarte y adaptar',
      paragraphs: [
        'A continuación te presentamos ejemplos completos redactados con la estructura de 4 actos para que puedas utilizarlos como punto de partida:',
        'Carta para Mamá o Papá: "Querida mamá, hoy que el calendario marca tu día, me quedé pensando en todas las veces que tus manos silenciosas resolvieron cosas gigantes en casa sin pedir nada a cambio. Te miro hoy y siento un orgullo inmenso de haber crecido bajo tu cobijo. Gracias por enseñarme que la ternura no es debilidad sino la mayor de las fuerzas. En este nuevo año de vida deseo que te regales tiempo para vos, que descanses, que viajes y que sientas cada día lo profundamente amada que sos por todos nosotros. Feliz cumpleaños."',
        'Carta para tu Pareja: "Amor mío, qué lindo es celebrar un año más de tu vida y tener el privilegio de ser testigo de tu crecimiento. Me enamora tu risa espontánea, tu forma de entusiasmarte con los proyectos pequeños y la calma que traés a mis días agitados. Gracias por elegirme como compañero de ruta. Que esta nueva vuelta al sol te encuentre con salud, sueños cumplidos y la certeza de que mi amor por vos se renueva cada mañana. Brindo por tu vida hoy y siempre."',
        'Carta para un Gran Amigo: "Hermano de la vida, hoy brindamos por otro año compartido. Desde aquellas primeras charlas interminables hasta las batallas cotidianas de hoy, tu amistad ha sido un refugio seguro donde siempre pude ser yo mismo sin caretas. Gracias por estar en las buenas y sobre todo en las malas. Te deseo un año demoledoramente exitoso, lleno de risas, salud y nuevos desafíos. ¡Feliz cumple!"'
      ],
      bullets: [
        'Modelo familiar: enfocado en gratitud filial y reconocimiento de sacrificios.',
        'Modelo romántico: enfocado en complicidad, admiración mutua y proyectos juntos.',
        'Modelo de amistad: enfocado en lealtad, códigos compartidos y honestidad brutal.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Qué extensión ideal debe tener una carta de cumpleaños?',
      answer: 'Entre 200 y 400 palabras es la extensión óptima. Permite desarrollar un recuerdo, expresar gratitud y dejar deseos profundos sin volverse densa ni abrumadora.'
    },
    {
      question: '¿Qué hago si no se me ocurre ninguna anécdota?',
      answer: 'Pensá en una cualidad simple: cómo te hace sentir cuando te saluda, una comida que prepara rico o una frase que repite siempre. Partir de un detalle cotidiano es la mejor forma de desbloquear las ideas.'
    }
  ];
});

// 4. QUE PONER EN UNA INVITACION
updatePost('que-poner-en-una-invitacion-de-cumpleanos', (p) => {
  p.intro = 'La invitación de cumpleaños es mucho más que un aviso formal de fecha y hora: es la primera impresión de tu fiesta, la que establece el tono, genera entusiasmo y responde todas las dudas prácticas de los invitados. Una invitación incompleta o confusa genera un aluvión interminable de preguntas por WhatsApp ("¿qué llevo?", "¿puedo ir con los chicos?", "¿dónde queda?"). En esta guía encontrarás los datos obligatorios, cómo abordar temas delicados como regalos y vestimenta, y textos redactados listos para copiar.';
  p.sections = [
    {
      h2: '1. Los datos imprescindibles que no pueden faltar jamás',
      paragraphs: [
        'Antes de ponerte creativo con el diseño o la frase inicial, asegurate de que la estructura básica contenga estos seis datos esenciales sin ambigüedades:',
        '• Nombre del agasajado y qué cumple: Aclarar quién cumple y la edad si es un hito especial (18, 30, 50, etc.). En fiestas sorpresa, indicar con letras claras y mayúsculas: "¡FIESTA SORPRESA! LLEGAR PUNTUAL".',
        '• Fecha exacta y día de la semana: No pongas solo "Viernes 14". Escribí "Viernes 14 de Noviembre". La repetición del día de la semana y la fecha evita que la gente se equivoque de mes o día laboral.',
        '• Horario de convocatoria y horario límite: Si la fiesta tiene cena o show, indicá un horario de recepción ("Te esperamos desde las 21:00 hs - Cena a las 22:00 hs"). Si el salón tiene horario estricto de cierre, mencionalo con delicadeza.',
        '• Dirección completa y enlace de ubicación: Incluí calle, número, barrio y localidad. Si es en un departamento, aclará piso y timbre. En invitaciones digitales, agregá un botón o enlace directo a Google Maps.',
        '• Plazo límite de confirmación (RSVP): Indicá con fecha concreta: "Por favor confirmar asistencia antes del 5 de Noviembre". Dejar la confirmación abierta hace imposible calcular la comida.'
      ],
      bullets: [
        'Quién festeja (y si es sorpresa, destacarlo en el encabezado).',
        'Día de la semana, fecha y mes completos.',
        'Horario de inicio (y de cena/show si corresponde).',
        'Dirección exacta con enlace interactivo a Google Maps.',
        'Fecha tope de confirmación (RSVP) con teléfono o contacto.'
      ]
    },
    {
      h2: '2. Cómo comunicar regalos, vestimenta y acompañantes sin incomodar',
      paragraphs: [
        'Hay detalles prácticos que a menudo generan vergüenza al redactar. La clave está en comunicarlos con naturalidad, cordialidad y claridad:',
        '• El tema de los regalos: Si preferís dinero en lugar de objetos físicos (para un viaje o proyecto), la fórmula más elegante es sugerir una alcancía o transferencia con una frase simpática: "Tu presencia es nuestro mejor regalo, pero si deseás colaborar con nuestro viaje/proyecto, podés hacerlo en... (CBU/Alias)". Si no querés regalos bajo ningún concepto: "No traer regalo, ¡solo ganas de bailar y pasarla bien!".',
        '• Código de vestimenta (Dress code): Si hay pileta, poné "Traé traje de baño y toalla". Si es una fiesta elegante de noche: "Elegante sport". Si es al aire libre con pasto: "Calzado cómodo para jardín". Evitá términos confusos como "semi-casual chic".',
        '• Acompañantes y niños: Si el evento es solo para adultos por espacio o presupuesto, es fundamental expresarlo con cariño: "Por razones de espacio del salón, esta celebración será exclusiva para adultos". La claridad temprana previene situaciones incómodas en la puerta.'
      ],
      bullets: [
        'Regalo económico: explicar el destino (viaje, reforma) y dejar Alias/CBU de forma optativa.',
        'Vestimenta: ser concreto (ropa cómoda, pileta, abrigo para la noche).',
        'Niños o solo adultos: aclararlo amablemente en el cuerpo de la invitación.',
        'Menús especiales: solicitar que avisen celiaquía o vegetarianismo al confirmar.'
      ]
    },
    {
      h2: '3. Textos de invitación listos para copiar según el estilo',
      paragraphs: [
        'Elegí el modelo que mejor encaje con la personalidad de tu celebración:',
        '• Modelo Informal y Canchero (WhatsApp): "¡Se festeja! 🎂 Cumplo años y quiero brindar con vos. Nos juntamos este sábado 24 a las 21:30 hs en casa (Av. Libertador 1450). Hay pizzas, buena música y barra abierta. Confirmame antes del miércoles así calculamos las bebidas. ¡Te espero!"',
        '• Modelo Cumpleaños Infantil: "¡Llegaron los 5 de Mateo! 🎈 Te invitamos a una tarde llena de juegos, pelotero y merienda rica. Te esperamos el domingo 15 de 16:30 a 19:30 hs en Salón Rinconcito Feliz (calle San Martín 820). Confirmar asistencia con mami/papi al 11-XXXX-XXXX antes del viernes 10."',
        '• Modelo Elegante para Adultos (40, 50, 60 años): "Porque los hitos de la vida se celebran rodeado de las personas que hacen el camino más luminoso, tengo el placer de invitarte a celebrar mis 50 años. Sábado 12 de Octubre a las 21:00 hs en Espacio Los Robles. RSVP antes del 1 de Octubre. Dress code: Elegante."'
      ],
      bullets: [
        'Opción WhatsApp: directa, cálida y con foco en comida y confirmación.',
        'Opción Infantil: clara para padres, con horarios de inicio y retiro de los chicos.',
        'Opción Celebración Hito: tono emotivo, formal y elegante.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Con qué anticipación se debe enviar una invitación?',
      answer: 'Para cumpleaños informales de adultos o infantiles, entre 2 y 3 semanas antes es perfecto. Para grandes hitos (15 o 50 años) con alquiler de salón, enviá un Save the Date 2 meses antes y la invitación formal 4 semanas antes.'
    },
    {
      question: '¿Conviene armar un grupo de WhatsApp o enviar mensajes individuales?',
      answer: 'Para grupos grandes, los grupos de WhatsApp suelen ser ruidosos y generar cancelaciones en cadena. Lo más profesional y efectivo es usar listas de difusión o enviar un mensaje individual personalizado a cada invitado.'
    }
  ];
});

// 5. IDEAS DE TEMATICAS PARA CUMPLEAÑOS
updatePost('ideas-tematicas-para-cumpleanos', (p) => {
  p.intro = 'Elegir una temática para tu cumpleaños no significa transformar el evento en un parque de diversiones artificial: significa darle un hilo conductor a la celebración que inspire a los invitados, facilite las decisiones de decoración y haga que las fotos tengan una identidad visual inolvidable. En esta guía completa exploramos las temáticas más exitosas clasificadas por etapa de la vida y cómo llevarlas a la práctica sin gastar de más.';
  p.sections = [
    {
      h2: '1. Temáticas para adultos que buscan originalidad y elegancia',
      paragraphs: [
        'En los cumpleaños de adultos (desde los 25 hasta los 60+), las temáticas más celebradas son aquellas basadas en experiencias compartidas, épocas musicales o culturas gastronómicas más que en personajes de ficción:',
        '• Noche de Pizza & Vinilos Retro: Una propuesta íntima y cálida. Se arma una estación de pizzas caseras o masa madre con aderezos variados, acompañada por una bandeja giradiscos donde los propios invitados pueden llevar sus discos de vinilo o elegir canciones de una época dorada (años 70, 80 o 90). El ambiente se ilumina con velas y luces cálidas.',
        '• Noche Mexicana / Taco Bar: Fácil de organizar, económica y sumamente vistosa. Se monta una mesa buffet con cazuelas de carnes desmechadas, frijoles, pico de gallo, guacamole y nachos, permitiendo que cada comensal arme sus tacos a su ritmo. Se acompaña con margaritas frescas y música festiva.',
        '• Feria de Vinos & Degustación Casera: Ideal para amantes de la buena mesa. Se organiza una cata a ciegas donde cada invitado o pareja trae una botella de vino tapada con papel kraft para evaluar sabor, aroma y maridar con tablas de quesos y panes de campo.'
      ],
      bullets: [
        'Pizza & Vinilos: experiencia analógica, cálida y de costo moderado.',
        'Taco Bar: autoservicio dinámico que libera al anfitrión de servir platos.',
        'Cata de vinos: lúdica, elegante e interactiva para grupos de 10 a 25 personas.',
        'Fiesta White Party / Total White: todos de blanco, decoración minimalista y fotos espectaculares.'
      ]
    },
    {
      h2: '2. Temáticas infantiles y juveniles con impacto visual',
      paragraphs: [
        'Para los más chicos y adolescentes, el éxito de la temática reside en la inmersión: que desde la invitación hasta los juegos se respire el mismo universo:',
        '• Safari & Pequeños Exploradores: Tonos tierra, verde musgo, sombreros de explorador, hojas de palmera artificiales y juegos de pistas buscando "animales escondidos" en el jardín o living.',
        '• Fiesta Neón / Glow in the Dark: Una de las favoritas indiscutidas entre 8 y 16 años. Se oscurece el ambiente con luz negra (luz UV), y se entregan pulseras de neón, pinturas fluorescentes para el rostro y vasos luminosos. Es súper económica y visualmente impactante.',
        '• Tarde de Campamento / Glamping: Si tenés espacio al aire libre o un living amplio, armar carpitas tipo tipi con guirnaldas de luces, fogón simbólico (o real con malvaviscos) y narración de historias crea un recuerdo imborrable.'
      ],
      bullets: [
        'Fiesta Neón: altísimo impacto con baja inversión (tubos UV y pinturas glow).',
        'Safari de aventuras: estimula la imaginación y permite juegos activos sin pantallas.',
        'Taller de minichefs: los chicos decoran sus propios cupcakes o pizzas personales.'
      ]
    },
    {
      h2: '3. Cómo cohesionar la temática sin caer en el exceso visual',
      paragraphs: [
        'El error más habitual es sobrecargar el espacio con objetos temáticos de plástico barato que generan contaminación visual. Los decoradores profesionales siguen la regla de los tres pilares:',
        '• Rincón focal principal: Concentrá el 70% de la decoración en un solo punto: la pared detrás de la torta de cumpleaños. Con un fondo limpio, un banderín con tipografía elegante y un par de plantas o globos bien colocados, tenés el marco perfecto para todas las fotos del brindis.',
        '• Paleta cromática estricta: Elegí dos colores dominantes y uno de acento. Si tu temática es "Naturaleza", usá blanco crema y verde eucalipto como base, con toques dorados en las velas. Mantener la paleta en servilletas, guirnaldas y flores genera orden y sofisticación.',
        '• Sonido y aromas: La temática no solo entra por los ojos. Una playlist adecuada al tono del evento y un aroma agradable (como velas de vainilla o café recién hecho) completan la experiencia multisensorial.'
      ],
      bullets: [
        'Concentrá la decoración en el rincón de la torta para optimizar las fotos.',
        'Definí una paleta de 3 colores y respetala en todos los elementos.',
        'Alineá la música con la temática para lograr una ambientación envolvente.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Es obligatorio pedir a los invitados que vengan disfrazados?',
      answer: 'No. Exigir disfraces complejos suele generar incomodidad o ausencias. Si querés que participen, sugerí algo sencillo ("un detalle en color rojo", "sombrero divertido" o "camisas floreadas").'
    },
    {
      question: '¿Cómo elegir una temática si el cumpleañero no tiene un hobby muy marcado?',
      answer: 'Optá por temáticas sensoriales o de estilo de vida: una cena bajo las estrellas, un picnic de día en el pasto, un brunch de domingo o una noche de juegos de mesa y tapeo.'
    }
  ];
});

// 6. JUEGOS PARA CUMPLEAÑOS INFANTILES
updatePost('juegos-para-cumpleanos-infantiles', (p) => {
  p.intro = 'El éxito de una fiesta infantil no se mide por la cantidad de souvenirs ni por la sofisticación del cotillón, sino por las risas compartidas y el nivel de diversión de los chicos. Sin embargo, dejar a un grupo de niños sin una guía estructurada suele derivar en descontrol, llantos o aburrimiento. En esta guía te presentamos juegos probados por animadores profesionales, divididos por rangos de edad y sin necesidad de comprar materiales caros.';
  p.sections = [
    {
      h2: '1. Juegos para niños pequeños (3 a 6 años): Coordinación y diversión sin frustración',
      paragraphs: [
        'A esta edad los chicos aún están desarrollando habilidades de juego compartido y toleran muy mal la eliminación o la competencia estricta. Los juegos deben ser colaborativos, dinámicos y de reglas muy simples:',
        '• El baile de las estatuas con burbujas: La clásica música que se frena, pero enriquecida: cuando la música para, un adulto lanza burbujas de jabón y los chicos deben quedarse inmóviles sin tocar ninguna. Quien se mueva no queda eliminado, sino que pasa a ser el "ayudante de soplado de burbujas".',
        '• Búsqueda del tesoro de colores: Se esconden por el jardín o la casa objetos seguros de diferentes colores (cintas, pelotitas de plástico o figuras de cartón). Se divide a los chicos en pequeños equipos y cada grupo debe recolectar elementos de su color asignado.',
        '• Cruzar el río de lava: Se colocan almohadones o pedazos de cartón en el suelo simulando piedras sobre un "río de fuego". Todos los niños deben colaborar para cruzar de una orilla a otra sin pisar el piso.'
      ],
      bullets: [
        'Evitá juegos con eliminación directa que dejen niños llorando a un costado.',
        'Mantené explicaciones de menos de 60 segundos con demostraciones prácticas.',
        'Tené siempre música alegre de fondo que acompañe la energía del juego.'
      ]
    },
    {
      h2: '2. Juegos para niños medianos y grandes (7 a 11 años): Desafíos y equipo',
      paragraphs: [
        'A partir de los 7 años los niños buscan retos intelectuales, velocidad y competencia sana por equipos:',
        '• Pictionary o Dígalo con Mímica gigante: Utilizando una pizarra blanca grande o cartulinas pegadas en la pared, un participante de cada equipo debe dibujar o actuar una película, dibujo animado o canción en 60 segundos mientras su equipo adivina.',
        '• La carrera de las preguntas locas (Trivia física): Se arman dos filas. El coordinador hace una pregunta de ingenio o cultura pop. Para poder responder, el participante debe primero completar un pequeño circuito físico (dar tres vueltas a un cono, saltar en un pie). Fomenta risas y quema energía de manera controlada.',
        '• El desafío del escape room casero: Se arma una misión en una habitación: abrir una caja con candado de números encontrando pistas escondidas en crucigramas, mensajes al revés para leer en un espejo y llaves ocultas.'
      ],
      bullets: [
        'Fomentá la rotación de roles para que todos tengan su momento de protagonismo.',
        'Establecé reglas claras desde el primer minuto y premia el juego limpio.',
        'Tené a mano pequeños premios simbólicos (stickers, sellitos) para todos los participantes.'
      ]
    },
    {
      h2: '3. El ritmo de la fiesta: Cuándo jugar, cuándo comer y cómo descomprimir',
      paragraphs: [
        'Manejar la energía del grupo es el gran secreto de los animadores exitosos. Una fiesta infantil de 3 horas debe seguir una curva de energía planificada:',
        '• Primera hora (Bienvenida y juegos libres): Los chicos llegan a distintos ritmos. Es momento para actividades abiertas: mesa de dibujo, maquillaje artístico o juegos de encastre.',
        '• Segunda hora (Juegos activos y pico de energía): Juegos grupales, carreras, música y búsqueda del tesoro. Es el momento donde más se mueven y descargan tensiones.',
        '• Hora y media (Comida y descanso): Los chicos se sientan a comer y tomar agua. Es vital frenar la actividad física para evitar accidentes digestivos.',
        '• Cierre (Torta, velitas y juego de relajación): Tras cantar el feliz cumpleaños, se hace un juego tranquilo (como el teléfono descompuesto o bingo temático) antes de entregar las bolsitas y despedirse.'
      ],
      bullets: [
        '0 a 45 min: bienvenida, tatuajes temporales y adaptación al espacio.',
        '45 a 90 min: bloque de juegos intensos y competencias por equipos.',
        '90 a 120 min: comida, descanso e hidratación abundante.',
        '120 a 180 min: torta, fotos familiares y actividades de relajación antes del retiro.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Qué hacer si un niño no quiere participar de los juegos?',
      answer: 'Nunca lo obligues. Dale un rol de ayudante especial (como encargado de parar la música o sostener el cronómetro). En el 90% de los casos, al ver a sus amigos reírse, se sumará solo al siguiente juego.'
    },
    {
      question: '¿Cuántos juegos se necesitan para una fiesta de 3 horas?',
      answer: 'Con 4 a 6 juegos bien planificados alcanza y sobra. Es preferible que un juego divertido se extienda si los chicos lo están pasando bien, antes que apurarlos para cumplir una lista rígida.'
    }
  ];
});

// 7. DECORACION DE CUMPLEAÑOS ECONOMICA
updatePost('decoracion-de-cumpleanos-economica', (p) => {
  p.intro = 'Existe el mito de que para tener una fiesta estética digna de revista se necesita contratar una decoradora profesional y gastar fortunas en alquiler de mobiliario. La realidad es que las ambientaciones más cálidas y elogiadas se logran aplicando principios de diseño inteligente: focalización del espacio, iluminación cálida, materiales reciclables y detalles gráficos personalizados que podés imprimir en casa sin costo.';
  p.sections = [
    {
      h2: '1. El principio del "Rincón Estrella": Dónde poner tu dinero y esfuerzo',
      paragraphs: [
        'Intentar decorar cada pared, mesa y rincón de una casa o salón con presupuesto acotado produce un efecto visual disperso y pobre. El secreto de los decoradores profesionales es la focalización:',
        'Elegí un único espacio protagonista: la mesa donde se cortará la torta de cumpleaños. Ese será el fondo del 90% de las fotos que los invitados conservarán y compartirán en redes sociales.',
        'Para armar un fondo de impacto por menos de lo que cuesta una pizza: utilizá una sábana o cortina blanca lisa como base, pegá guirnaldas de banderines de papel con tipografía cuidada y colocá a los lados dos plantas de interior que ya tengas en casa (monstera, helechos, ficus) para aportar frescura viva y volumen tridimensional.'
      ],
      bullets: [
        'Concentrá el 80% de tus adornos en el fondo de la mesa de la torta.',
        'Usá telas neutras de fondo para tapar imperfecciones de la pared.',
        'Incorporá plantas naturales del hogar para darle vida y sofisticación al espacio.'
      ]
    },
    {
      h2: '2. Iluminación: El truco mágico que transforma cualquier ambiente',
      paragraphs: [
        'La luz blanca directa de tubo o plafón de techo arruina cualquier clima festivo y hace que los espacios se sientan fríos como consultorios. La iluminación es el recurso de mayor impacto y menor costo:',
        'Apagá la luz principal del techo y utilizá fuentes de luz cálida difusa: guirnaldas de luces navideñas cálidas (tipo kermesse o microleds), lámparas de pie estratégicamente ubicadas y velas protegidas en frascos de mermelada reciclados.',
        'Las luces cálidas disimulan rayones de la pared, generan intimidad inmediata y hacen que la piel de las personas luzca mucho mejor en las fotografías.'
      ],
      bullets: [
        'Apagá luces centrales frías y apostá por iluminación cálida y tenue.',
        'Reutilizá luces de Navidad o guirnaldas de microleds sobre cortinas o mesas.',
        'Frascos de vidrio con velas flotantes o arena como centros de mesa económicos.'
      ]
    },
    {
      h2: '3. Papelería e imprimibles: Personalización con costo casi cero',
      paragraphs: [
        'El papel es el material decorativo más versátil, noble y ecológico que existe. En lugar de globos metalizados que contaminan y duran pocas horas, la papelería ofrece texturas elegantes y personalización total:',
        'Descargá e imprimí banderines con letras limpias, carteles de bienvenida y señalética para las bebidas en cartulina opalina de 180 a 220 gramos. Podés recortarlos en familia y enhebrarlos con hilo de yute o cinta de raso.',
        'Para los centros de mesa: botellas de vino o frascos de conserva limpios con flores secas (eucalipto, lavanda o paniculata) duran semanas y cuestan una fracción de un arreglo floral de florería tradicional.'
      ],
      bullets: [
        'Imprimí en cartulinas resistentes de 180g para un acabado mate profesional.',
        'Usá hilo de yute rústico o cintas finas para colgar banderines.',
        'Botellas de vidrio recicladas con ramas verdes como centros de mesa minimalistas.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Conviene inflar globos o reemplazarlos?',
      answer: 'Si vas a usar globos, hacé un arco orgánico pequeño combinando tres tamaños distintos en lugar de repartir globos sueltos por el techo. Si querés ahorrar aún más, reemplazalos por banderines de papel y luces cálidas, que son reutilizables.'
    },
    {
      question: '¿Cómo decorar mesas largas de invitados sin gastar en vajilla cara?',
      answer: 'Colocá caminos de mesa de papel kraft en rollo (económico y reciclable). Podés escribir nombres de los invitados o frases con marcador blanco o negro directamente sobre el papel kraft.'
    }
  ];
});

// 8. REGALOS ORIGINALES PARA CUMPLEAÑOS
updatePost('regalos-originales-para-cumpleanos', (p) => {
  p.intro = 'Elegir un regalo de cumpleaños que realmente conmueva y no termine arrumbado en un placard es un desafío constante. En un mundo saturado de objetos de consumo rápido, los regalos más memorables son aquellos que demuestran escucha atenta, regalan tiempo compartido o resuelven un deseo que la persona no se animaba a concretar por sí misma. Esta guía te brinda ideas clasificadas por perfil y presupuesto.';
  p.sections = [
    {
      h2: '1. Regalos de experiencia: Regalar recuerdos que no ocupan espacio',
      paragraphs: [
        'Diversos estudios sobre bienestar coinciden en que las personas recuerdan con mayor felicidad y gratitud las experiencias vividas que las posesiones materiales acumuladas. Para cumpleaños significativos, una experiencia compartida es un acierto rotundo:',
        '• Experiencias gastronómicas especiales: Una reserva para dos en un restaurante temático que siempre quiso conocer, una cata guiada de café de especialidad o un curso intensivo de sushi o coctelería.',
        '• Escapadas y naturaleza: Una entrada para un día de spa o termas, un día de campo en una estancia cercana o entradas para un recital de su banda favorita.',
        '• Clases de hobbies pendientes: Dos meses de clases de cerámica, pintura, instrumentos musicales o escalada deportiva. Es una forma de decirle: "te presto atención y apoyo lo que te apasiona".'
      ],
      bullets: [
        'Elegí actividades que puedan disfrutarse de a dos para sumar tiempo compartido.',
        'Armá una tarjeta o voucher casero explicando la experiencia con emoción.',
        'Asegurate de que las fechas sean flexibles o con opción a cambio sin penalidad.'
      ]
    },
    {
      h2: '2. Regalos sentimentales y personalizados: Emoción pura con bajo presupuesto',
      paragraphs: [
        'Cuando el presupuesto es ajustado, el tiempo y la dedicación manual multiplican el valor emocional de un regalo por mil:',
        '• El Frasco de los 52 Recuerdos: Un frasco de vidrio decorado que contiene 52 papelitos doblados, uno para abrir cada semana del año. Cada papelito cuenta una anécdota divertida, una cualidad que admirás de esa persona o una razón por la que estás agradecido de su amistad.',
        '• Álbum de fotos narrativo: No un simple álbum de fotos impresas, sino un cuaderno donde al lado de cada fotografía escribas qué estaban haciendo ese día, qué música sonaba o qué aprendiste de ese momento juntos.',
        '• Caja de rescate para días difíciles: Una caja personalizada con su golosina favorita, un libro entrañable, una playlist armada especialmente en Spotify con código QR escaneable y una carta manuscrita reconfortante.'
      ],
      bullets: [
        'Frasco de 52 recuerdos: regalo que acompaña a la persona durante todo el año.',
        'Álbum con textos: el valor reside en la historia detrás de cada imagen.',
        'Playlist personalizada en Spotify: musicalizá los momentos que marcaron su vida.'
      ]
    },
    {
      h2: '3. El arte del "Regalo Grupal": Cómo organizarlo sin conflictos',
      paragraphs: [
        'Muchas veces la persona homenajeada sueña con un objeto de valor importante (una bicicleta, una notebook, una cámara de fotos o un pasaje de avión) que escapa al presupuesto individual de cualquiera de sus amigos.',
        'El regalo grupal o "vaquita" es la solución ideal, siempre que se organice con transparencia y delicadeza. Creá un grupo temporal de WhatsApp donde se explique claramente la propuesta y el monto sugerido.',
        'Dejá siempre abierta la opción de que cada quien aporte lo que esté a su alcance sin juzgar montos diferentes. Para la entrega, armá un packaging creativo: una caja gigante dentro de otra caja o una tarjeta firmada por todos los participantes con mensajes personales.'
      ],
      bullets: [
        'Designá a un solo encargado de recibir transferencias y comprar el producto.',
        'Compartí comprobantes de compra en el grupo para total claridad.',
        'Acompañá el regalo grande con una tarjeta física firmada a mano por todos.'
      ]
    }
  ];
  p.faqs = [
    {
      question: '¿Está mal regalar dinero si no sé qué comprar?',
      answer: 'No está mal, pero debe entregarse con calidez. En lugar de una transferencia fría, regalá una linda billetera con el dinero adentro o un cheque simbólico explicando en qué te gustaría que lo disfrute (ej: "un almuerzo rico a mi salud").'
    },
    {
      question: '¿Cómo envolver un regalo para que luzca el doble de lindo?',
      answer: 'Usá papel kraft liso, una rama de pino o lavanda fresca atada con hilo de yute y una tarjeta con caligrafía cuidada. Es mucho más elegante, sustentable y cálido que las bolsas plásticas brillantes comerciales.'
    }
  ];
});

// Save updated posts back to file
fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), 'utf-8');
console.log('✅ Todos los posts de planificación y organización fueron enriquecidos con calidad editorial profunda.');
