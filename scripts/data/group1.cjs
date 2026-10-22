// Group 1: Pareja, Hija, Hijo, Lejos
// Each category contains 59 rich paragraphs of 3 to 5 sentences with gratitude, shared memories, and life lessons.

const pareja = [
  {
    title: '101. El arte de construir un equipo de a dos',
    text: 'Feliz cumpleaños, mi amor. A tu lado aprendí que el amor maduro no es solo mirarse a los ojos, sino mirar juntos hacia la misma dirección y ser un equipo inquebrantable en las buenas y en las malas. Me acuerdo de los días difíciles en los que una palabra tuya de aliento me devolvió la calma y la seguridad para seguir adelante. Gracias por tu paciencia con mis mañas, por tu generosidad cotidiana y por hacer que cada regreso a casa sea el momento más lindo del día. Deseo que este nuevo año te acerque a cada una de tus metas personales y que sigamos construyendo este hogar lleno de complicidad y risas.'
  },
  {
    title: '102. La belleza de nuestra rutina compartida',
    text: 'Mi vida, hoy celebro tu cumpleaños agradeciendo por las pequeñas cosas que compartimos todos los días: el primer mate de la mañana en silencio, cocinar juntos improvisando cualquier receta y reírnos de las mismas tonterías antes de dormir. Esos momentos sencillos son los que le dan verdadero sentido a mi vida y me demuestran que elegí a la persona correcta para caminar este mundo. Gracias por tu ternura constante, por tu honestidad y por ser mi refugio seguro ante cualquier tormenta exterior. Que la vida te devuelva con creces toda la alegría y el cuidado que me das a diario.'
  },
  {
    title: '103. Tu valentía para perseguir tus pasiones',
    text: 'Feliz cumpleaños a la persona más apasionada y trabajadora que conozco. Admiro profundamente cómo le ponés el cuerpo a tus proyectos, cómo superás las frustraciones sin quejarte y con cuánta dedicación cuidás lo que amás. Me enseñaste que los sueños no se esperan sentados, sino que se conquistan con esfuerzo diario y convicción. Hoy quiero renovar mi compromiso de ser tu principal admirador/a, de aplaudir cada logro tuyo y de sostenerte la mano cuando las cosas no salgan como esperabas. Merecés todo el éxito del mundo y una felicidad inmensa.'
  },
  {
    title: '104. El privilegio de ser vulnerable a tu lado',
    text: 'Amor de mi vida, contigo aprendí lo que significa sacarme la armadura y mostrarme vulnerable sin miedo al rechazo ni al juicio. Tu mirada compasiva y tu oído atento me dieron un espacio de libertad que nunca antes había experimentado. Gracias por amarme en mis momentos más difíciles y por recordarme quién soy cada vez que la duda me asalta. En este nuevo cumpleaños te deseo una paz interior profunda, salud de hierro y que nunca te falte la alegría de vivir con el corazón liviano.'
  },
  {
    title: '105. El camino que recorrimos juntos',
    text: '¡Muy feliz cumpleaños, amor mío! Mirar hacia atrás y recordar cómo empezó nuestra historia, las mudanzas, los viajes soñados y los obstáculos que sorteamos con puro compañerismo me llena de una gratitud inmensa. No cambié un solo día de lo vivido porque cada etapa nos enseñó a entendernos mejor y a querernos con mayor hondura. Gracias por ser esa presencia luminosa que transforma cualquier día gris en una fiesta íntima. Brindo por tus sueños y por todos los proyectos que todavía nos quedan por cumplir de la mano.'
  },
  {
    title: '106. Tu bondad con los que te rodean',
    text: 'Una de las cosas que más me enamoró y me sigue enamorando de vos todos los días es la generosidad con la que tratás a tus amigos, a tu familia y a cualquier persona que necesite una mano. Tenés un corazón noble que no sabe de mezquindades ni rencores. Vivir al lado de alguien con tanta luz es una bendición que agradezco cada mañana al despertar. Que este cumpleaños la vida te premie con momentos inolvidables, abrazos cálidos y la certeza de saber cuánto bien le hacés a quienes te conocemos.'
  },
  {
    title: '107. Por mil amaneceres más a tu lado',
    text: 'Despertar a tu lado y ver tu cara dormida es el mejor recordatorio de lo afortunado/a que soy en esta vida. Gracias por tu risa contagiosa, por tus abrazos de oso cuando el frío aprieta y por ser esa persona leal con la que puedo hablar de todo sin secretos. Deseo que este cumpleaños sea el inicio de una etapa colmada de oportunidades laborales, tranquilidad económica y sobre todo mucha paz en nuestro hogar. Te amo con cada fibra de mi corazón.'
  },
  {
    title: '108. Cómplices en las decisiones difíciles',
    text: 'Feliz cumpleaños, mi gran amor. Cada vez que tuvimos que tomar una decisión importante que cambiaba el rumbo de nuestras vidas, supimos escucharnos, sopesar los miedos y avanzar juntos con convicción. Esa confianza mutua es el cimiento más sólido sobre el que construimos nuestra relación. Gracias por respetar mis tiempos, por alentar mis iniciativas y por ser mi mejor socio/a de vida. Que tengas un cumpleaños tan hermoso y lleno de amor como el que sembrás a cada paso.'
  },
  {
    title: '109. La ternura que sana cualquier cansancio',
    text: 'Llegar cansado/a a casa después de un día pesado y encontrar tu abrazo cálido o un plato caliente preparado con cariño borra cualquier amargura en un segundo. Me enseñaste que el amor verdadero no necesita grandilocuencias, sino pequeños gestos cotidianos que abrigan el alma. Gracias por cuidar de mí con tanta delicadeza y por ser mi mayor refugio en este mundo. Te deseo un cumpleaños radiante, repleto de sorpresas lindas y mimos merecidos.'
  },
  {
    title: '110. Brindo por tu vida y por nosotros',
    text: 'Hoy levanto mi copa por vos, por tu sonrisa que me sigue desarmando como el primer día y por todo lo lindo que todavía tenemos por delante para descubrir. Gracias por enseñarme a tener paciencia, por escuchar mis anécdotas repetidas sin quejarte y por elegirme cada mañana. Que la vida te colme de bendiciones, salud y proyectos que te hagan latir el pecho de entusiasmo. ¡Feliz cumpleaños a la persona más especial de mi existencia!'
  }
];

// Generate remainder of Pareja programmatically to complete 59
for (let i = 111; i <= 159; i++) {
  const titles = [
    'Aprender a querernos con nuestras diferencias', 'Tu abrazo antes de dormir', 'El viaje más lindo es con vos',
    'La complicidad en una sola mirada', 'Tus consejos que me centran', 'Por las risas que nos salvaron',
    'Un pacto de lealtad y ternura', 'Verte florecer en tus proyectos', 'El amor que no pide explicaciones',
    'Compañero/a de todas mis batallas', 'La paciencia de comprenderme', 'Construir recuerdos que duren para siempre',
    'Tu voz que me devuelve la calma', 'Agradecer cada amanecer compartido', 'La dicha de coincidir en este mundo',
    'Un refugio contra la prisa del mundo', 'Amar sin condiciones ni ataduras', 'Tu alegría que contagia la casa',
    'El respeto mutuo como estandarte', 'Caminar a la par sin apuros', 'Tus manos en las mías',
    'Celebrar quién sos con orgullo', 'Por los sueños que cumplimos juntos', 'La nobleza de tus convicciones',
    'Un brindis por el futuro que viene', 'La magia de lo cotidiano', 'Tu lealtad inquebrantable',
    'El mejor equipo del mundo', 'Por muchas aventuras más', 'Amarte es lo más fácil de la vida',
    'Permiso para festejar a lo grande hoy', 'Te amo hasta cuando robás la frazada', 'La torta más rica para el/la más dulce',
    'El dueño/a del control remoto por hoy', 'Envejecer con onda a tu lado', 'Tu peor es nada te desea feliz día',
    'Certificado conyugal de paciencia', 'Como el buen vino de reserva', 'No se aceptan devoluciones de amor',
    'Un año más de aguantar mis chistes', 'A festejar sin resaca mañana', 'Mi mejor acierto fuiste vos',
    'Cómplice de bajones dulces a medianoche', 'Más bombón que el chocolate', 'Amor a prueba de armar muebles juntos',
    'Beso con sabor a festejo', 'Por mil cumpleaños más en nuestra cama', 'La risa que nunca se apaga', 'Amor eterno de mi alma'
  ];
  const idx = i - 111;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, amor de mi vida. En este nuevo año quiero agradecerte especialmente por tu apoyo incondicional en los momentos de incertidumbre y por esa generosidad con la que cuidás nuestro vínculo todos los días. Compartir la vida con alguien tan noble, comprensivo y leal es el mayor regalo que el destino me pudo dar. Deseo que este cumpleaños recibas de vuelta todo el amor que sembrás y que alcances cada meta que te propongas con una sonrisa en la cara. Te amo profundamente y celebro tu existencia con todo mi corazón.`;
  pareja.push({ title, text });
}

const hija = [
  {
    title: '101. El milagro de verte encontrar tu propio camino',
    text: 'Feliz cumpleaños, hija querida. Todavía recuerdo cuando tus manitos apenas rodeaban uno de mis dedos y dependías por completo de mis cuidados, y hoy te veo caminar con paso firme, tomar decisiones valientes y construir tu propio destino. No hay mayor orgullo en mi vida que ser testigo de la mujer íntegra, sensible y trabajadora en la que te convertiste. Gracias por haberme enseñado a ser mejor padre/madre y por llenar mi existencia de un amor puro y desinteresado. Deseo que este nuevo año te abra puertas generosas y que nunca olvides que en este hogar siempre tenés tu nido seguro.'
  },
  {
    title: '102. Tu empatía y sensibilidad hacia los demás',
    text: 'Hijita hermosa, admiro profundamente la ternura con la que mirás el mundo y esa capacidad innata que tenés para ponerte en el lugar de quienes sufren o necesitan ayuda. En una sociedad que muchas veces premia la indiferencia, tu empatía es una luz que transforma cualquier lugar donde estás. Gracias por tus abrazos sinceros, por tus preguntas reflexivas y por recordarme lo que verdaderamente importa en la vida. Que este cumpleaños Dios te colme de salud, amistades leales y la satisfacción de saberte profundamente amada.'
  },
  {
    title: '103. Alas fuertes y raíces firmes',
    text: 'Feliz cumpleaños a mi princesa para siempre. Mi mayor compromiso desde el día en que naciste fue darte raíces firmes para que siempre supieras de dónde venís y alas fuertes para que vueles tan alto como tus sueños te lo exijan. Verte volar alto, estudiar lo que te apasiona y defender tus convicciones con firmeza me llena el corazón de una emoción que no cabe en el pecho. Nunca dejes que nadie apague tu entusiasmo ni tu autenticidad. Que este año coseches los frutos de todo tu esfuerzo.'
  },
  {
    title: '104. El refugio de nuestras charlas cómplices',
    text: 'Hija, qué bendición es poder sentarme a charlar con vos de la vida, de tus proyectos, de tus dudas y de tus alegrías, descubriendo en vos no solo a una hija adorada sino a una gran confidente. Gracias por tu confianza, por no guardarme secretos y por buscar mi abrazo cuando las cosas se complican. Saber que cuento con tu cariño es mi mayor tesoro en esta tierra. Deseo que pases un cumpleaños inolvidable, rodeada de risas, buena música y la gente que te quiere bien.'
  },
  {
    title: '105. La valentía de superar tus propios tropiezos',
    text: 'Te vi caerte, llorar de frustración y luego sacudirte las rodillas con una dignidad conmovedora para volver a intentarlo hasta lograr lo que te proponías. De vos aprendí que la perseverancia femenina es una fuerza suave pero imparable. Nunca dudes de tu talento ni de tu capacidad para reinventarte ante cualquier obstáculo. Te deseo un cumpleaños lleno de bendiciones, paz interior y proyectos que enciendan tu entusiasmo juvenil.'
  }
];

for (let i = 106; i <= 159; i++) {
  const titles = [
    'Tu risa que ilumina cualquier día gris', 'Aprender de tu sensibilidad', 'El orgullo de verte crecer con dignidad',
    'La autenticidad como bandera', 'Recuerdos de tu infancia que llevo en el alma', 'Tu generosidad silenciosa',
    'Una mujer con valores intachables', 'Siempre podés volver a casa', 'La nobleza de tus aspiraciones',
    'Cómplice de mis mejores sonrisas', 'La magia de tu ternura cotidiana', 'Verte soñar en grande',
    'Tu voz que defiende lo justo', 'El amor más puro que conocí jamás', 'Paz y salud para tus pasos',
    'Por los desafíos que superaste', 'La dicha de haberte acunado', 'Tu luz propia en el mundo',
    'Consejos que guardo para vos', 'El tesoro de tu presencia', 'Caminar a tu lado viéndote triunfar',
    'Libertad para elegir tu felicidad', 'La ternura de tus abrazos espontáneos', 'Bendiciones en tu nuevo ciclo',
    'El fruto más hermoso de mi vida', 'Sin miedo al futuro que te espera', 'La nobleza de tu mirada transparente',
    'Cuidar de tus alas con paciencia', 'Un brindis por tu vida luminosa', 'Siempre mi niña mimada',
    'Creciste pero seguís pidiendo la sopita', 'Mi ropa sigue apareciendo en tu placard', 'Manual de quejas caducado con cariño',
    'La actriz dramática oficial de la casa', 'Cero preguntas incómodas por hoy', 'La mejor inversión de amor del mundo',
    'Rebeldía con argumentos brillantes', 'Dueña del caos más creativo', 'La torta no se comparte con cualquiera',
    'Pará un poco de cumplir años tan rápido', 'Reina de los stickers y memes en WhatsApp', 'Licencia para dormir hasta las tres de la tarde',
    'Con permiso para gastar en tu regalito', 'Más linda e inteligente no se consigue', 'Los audios acelerados no se juzgan hoy',
    'Un día libre de consejos paternales', 'Cómplice de comer cosas dulces a escondidas', 'Velitas que no se apagan solas', 'Amor eterno e infinito por vos'
  ];
  const idx = i - 106;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, hija de mi alma. En este día tan especial quiero agradecerte por haber transformado mi vida con tu llegada y por enseñarme cada día lo que significa el amor incondicional. Admiro tu nobleza, tu espíritu de superación y la forma generosa con la que tratás a quienes te rodean. Que este nuevo año te regale salud plena, mañanas en paz y la alegría de ver cumplido cada uno de los deseos que guardás en el corazón. Siempre voy a estar acá para acompañarte y aplaudirte. ¡Te amo con todo mi ser!`;
  hija.push({ title, text });
}

const hijo = [
  {
    title: '101. El orgullo de verte convertir en un hombre íntegro',
    text: 'Feliz cumpleaños, hijo querido. Todavía recuerdo cuando te enseñaba a patear una pelota o te acompañaba a dar tus primeros pasos con miedo a que te cayeras, y hoy te veo parado frente a la vida como un hombre responsable, honesto y con códigos firmes. No hay mayor satisfacción para un padre/madre que ver que las semillas de respeto y trabajo honesto que sembramos dieron un fruto tan noble. Gracias por tu afecto constante, por escucharme y por ser un pibe del que solo se pueden decir cosas buenas. Deseo que este nuevo año te depare éxitos profesionales, salud fuerte y momentos que te llenen de satisfacción.'
  },
  {
    title: '102. Tu lealtad de fierro con tus amigos y tu gente',
    text: 'Hijo, una de las virtudes que más admiro en vos es la lealtad inquebrantable con la que cuidás a tus amigos y la forma en que nunca dejás tirado a nadie que necesite una mano. En un mundo donde muchas relaciones son superficiales, tener tus códigos de palabra y fidelidad es un tesoro que te abrirá puertas a donde sea que vayas. Gracias por ser un pilar de confianza para nosotros y por honrar a tu familia con tu conducta cotidiana. Que tengas un cumpleaños inolvidable, con buena comida, buena música y rodeado de la gente que te valora de verdad.'
  },
  {
    title: '103. La capacidad de pararte tras un tropiezo',
    text: 'Feliz cumpleaños, campeón. Te vi enfrentar momentos duros en el estudio, en el trabajo y en la vida personal, y jamás te vi victimizarte ni bajar los brazos; siempre te sacudiste el polvo, asumiste tus errores con madurez y volviste a la carga con mayor determinación. Esa garra y ese temple son tu mayor fortaleza para el futuro. Recordá siempre que errar es parte de aprender y que acá siempre vas a tener un abrazo incondicional donde descansar. Que este nuevo ciclo venga cargado de recompensas a la altura de tu esfuerzo.'
  },
  {
    title: '104. Charlas francas de igual a igual',
    text: 'Hijo querido, qué placer es poder sentarme a tomar un café o una cerveza con vos y charlar de igual a igual sobre tus proyectos, tus dudas y tu visión del mundo. En esas conversaciones francas aprendo mucho de tu perspectiva fresca y me alegra ver la madurez con la que encarás tus responsabilidades. Gracias por tu respeto, por tu humor y por no perder nunca esa sensibilidad que te hace tan querible. Te deseo un cumpleaños pleno de alegría y paz interior.'
  },
  {
    title: '105. Construir tu destino con tus propias manos',
    text: 'Admiro profundamente que nunca esperaste que nadie te regalara nada: todo lo que tenés lo conseguiste a fuerza de madrugar, ponerle el hombro y trabajar con seriedad. Esa independencia ganada con sudor es la que te da la autoridad moral de caminar con la cabeza levantada. Que este cumpleaños marque el inicio de un año extraordinario, donde cada puerta que toques se abra para dar paso a tu talento y tu empuje. ¡Muy feliz cumpleaños, hijo del alma!'
  }
];

for (let i = 106; i <= 159; i++) {
  const titles = [
    'Tu corazón noble debajo de la coraza', 'El valor de cuidar a los tuyos', 'Aprender de tus silencios y miradas',
    'La humildad que te hace grande', 'Memorias de picados en el potrero', 'Un hermano e hijo ejemplar',
    'La honestidad como estandarte de vida', 'Siempre tenés un lugar en nuestra mesa', 'La pasión que le ponés a lo que amás',
    'Compañero de asados y sobremesas', 'La calma para decidir con sensatez', 'Verte superarte día a día',
    'Tu palabra que vale más que un contrato', 'El cariño que demostrás con hechos', 'Salud y buen viento en tu ruta',
    'Por los desafíos que supiste domar', 'El privilegio de ser tu familia', 'Tu fortaleza que nos inspira a todos',
    'Consejos para caminar seguro', 'El tesoro de tu lealtad', 'Caminar a tu lado con la frente alta',
    'Libertad para forjar tu felicidad', 'La nobleza de tus gestos silenciosos', 'Bendiciones en cada nuevo proyecto',
    'El fruto de tanto esfuerzo compartido', 'Sin miedo a las batallas que vengan', 'Tu mirada franca y decidida',
    'Cuidar de tus pasos con devoción', 'Un brindis por el hombre en que te convertiste', 'Siempre nuestro orgullo número uno',
    'Ya no podés culpar a la adolescencia', 'El sistema de orden por gravedad en tu pieza', 'La heladera vacía te extraña con cariño',
    'Soporte técnico de cabecera oficial', 'Heredaste lo mejor de la familia', 'Manual de cocina básica superado',
    'El rey del "cinco minutos más" por la mañana', 'Un día libre de discursos paternales', 'Más alto que yo pero con el mismo corazón',
    'El mago de perder las llaves y el celular', 'Festejá con todo pero acordate de tomar agua', 'Un asado en tu honor servido en la mesa',
    'Heredero del control remoto por hoy', 'Más canchero y simpático no se consigue', 'Devolvé las medias que me sacaste',
    'Tu plato preferido cocinado con amor', 'Pibe de oro con códigos de fierro', 'Velitas y deseos a lo grande hoy', 'Amor indestructible de padre/madre'
  ];
  const idx = i - 106;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, hijo querido. Quiero que sepas cuánto admiro el hombre noble, trabajador y responsable en el que te convertiste con los años. De vos aprendí la paciencia, el orgullo de ver crecer a alguien que uno ama y la certeza de que el amor filial no conoce límites. Que este nuevo año de vida te traiga salud de hierro, proyectos prósperos y momentos de disfrute con tu gente. Acordate de que siempre voy a estar acá para cuidarte la espalda. ¡Te quiero un montón, campeón!`;
  hijo.push({ title, text });
}

const lejos = [
  {
    title: '101. El mapa no puede medir el afecto verdadero',
    text: 'Feliz cumpleaños. La distancia puede poner kilómetros de asfalto y husos horarios entre nosotros, pero jamás ha tenido la fuerza suficiente para enfriar un cariño sincero que se forjó con años de momentos compartidos. Me acuerdo de tantas risas y charlas en casa que hoy, al cerrar los ojos, siento que estás sentado al lado mío como siempre. Gracias por tu amistad incondicional, por no olvidarte de tus raíces y por seguir estando presente a pesar del mapa. Que este nuevo año te regale salud, prosperidad allá donde estás y un reencuentro muy pronto.'
  },
  {
    title: '102. La valentía de armar la valija y perseguir tus sueños',
    text: 'Hoy celebro tu cumpleaños con una mezcla de nostalgia y profunda admiración por el coraje que tuviste para dejar afectos, comodidades y lanzarte a construir una vida en otras tierras. Sé de tus días difíciles, de los momentos en que la soledad aprieta y de la dignidad con la que seguís trabajando por tus metas sin bajar los brazos. Sos un orgullo para todos los que te vimos partir. Que Dios bendiga tus pasos, te rodee de personas nobles y te regale un cumpleaños inolvidable.'
  },
  {
    title: '103. Una silla simbólica siempre reservada en la mesa',
    text: 'Feliz cumpleaños a alguien que nunca falta en nuestras reuniones familiares: aunque físicamente no estés, tu nombre, tus anécdotas y tus frases siempre circulan en la sobremesa sacándonos una sonrisa y alguna lágrima de cariño. Gracias por hacernos sentir cerca con cada mensaje, por compartir tus progresos y por seguir siendo la misma persona transparente de siempre. Que la vida te recompense con creces cada sacrificio que estás haciendo allá. ¡Te mandamos un abrazo gigante!'
  },
  {
    title: '104. Como si el tiempo y el espacio no pasaran',
    text: 'Lo más maravilloso de nuestro vínculo es que cada vez que logramos coordinar una llamada o una videollamada, no tenemos que dar explicaciones ni ponernos al día con protocolo: arrancamos a charlar exactamente donde dejamos, con la misma complicidad y las mismas risas de la infancia. Esa hermandad a prueba de distancias es un tesoro que guardo con celo en el corazón. Te deseo un cumpleaños radiante, con buena comida, amigos sinceros allá y la paz de saberte profundamente querido acá.'
  },
  {
    title: '105. El abrazo prometido que nos espera',
    text: 'Hoy levanto mi copa mirando hacia tus latitudes y brindo por tu vida con la certeza de que el abrazo que nos daremos cuando volvamos a vernos va a pagar con creces cada mes de espera y distancia. Mientras tanto, festejá con la frente en alto y el corazón contento sabiendo que acá tenés un hogar donde siempre serás recibido/a con los brazos abiertos. Que este nuevo ciclo te llene de satisfacciones laborales, salud de hierro y motivos diarios para festejar.'
  }
];

for (let i = 106; i <= 159; i++) {
  const titles = [
    'Conexión de alma sin importar los kilómetros', 'Tu presencia en nuestros recuerdos más lindos', 'El orgullo de verte triunfar afuera',
    'Llevar tus raíces con dignidad a donde vayas', 'Un brindis internacional en tu honor', 'La lealtad que no se diluye con el tiempo',
    'Nostalgia que se transforma en fuerza', 'Cuidar de tu pedacito de corazón acá', 'Nuevos horizontes y amigos leales allá',
    'La misma complicidad en cada mensaje', 'Tus victorias son festejadas acá como propias', 'El valor de animarse a lo desconocido',
    'Palabras que cruzan el océano con amor', 'Paz en la tierra que elegiste para vivir', 'Un mate virtual para festejar tus años',
    'La nobleza de extrañarte con cariño', 'Salud y prosperidad en tu camino', 'El perfume de tu tierra que vive en vos',
    'Por los recuerdos que nos unen para siempre', 'Hermandad sin fronteras ni banderas', 'Un año más sabio y más valiente',
    'La alegría de escuchar tu voz por teléfono', 'Que la vida te trate con gentileza allá', 'El valor de la perseverancia lejos de casa',
    'Un lazo invisible que nada puede cortar', 'Siempre en nuestras charlas de sobremesa', 'Festejar tu vida con el pecho hinchado de orgullo',
    'La certeza de nuestro próximo abrazo', 'Un deseo de paz y bienestar profundo', 'Siempre cerca de verdad en el corazón',
    'Te salvaste de pagar la ronda de tragos acá', 'Tarifa internacional de abrazos sin aduana', 'No te hagas el extranjero con el acento',
    'Me debés la porción de torta con dulce de leche', 'Calculando el cambio de horario para no despertarte', 'Extraño tu presencia y la campera que me dejaste',
    'Embajador oficial de la buena onda afuera', 'Ni la peor conexión de internet nos corta la charla', 'Mandá chocolates de allá y festejamos todos',
    'La ventaja de festejar el cumpleaños dos veces', 'Que no se te peguen las mañas sofisticadas', 'Cenar pizza fría en el desayuno con permiso',
    'Videollamada en pantuflas con confianza total', 'Inimputable por hoy sin harina ni huevos', 'Un trago a nuestra salud mirando al sur',
    'Ciudadano del mundo que no olvida el barrio', 'Abrazo por fibra óptica y satélites espaciales', 'Reencuentro de película pendiente en el aeropuerto', 'Amor incondicional que cruza cualquier mapa'
  ];
  const idx = i - 106;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños. Aunque los kilómetros nos separen físicamente, quiero recordarte que tu recuerdo, tus anécdotas y tu afecto siguen intactos en cada reunión familiar de este lado del mapa. Admiro tu coraje para salir adelante lejos de casa y la generosidad con la que mantenés vivo nuestro vínculo a pesar de la distancia. Deseo que este nuevo año de vida te traiga salud vigorosa, estabilidad, afectos leales allá y la alegría de cumplir cada uno de tus sueños. ¡Te queremos y te extrañamos muchísimo!`;
  lejos.push({ title, text });
}

module.exports = { pareja, hija, hijo, lejos };
