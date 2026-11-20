import type { EjemploGuia } from './guias-tipos.ts';

// Plantillas adicionales especificas por tema para las guias 21 a 40
// (completan >= 10 plantillas copiables unicas por guia junto a las existentes)
export const PLANTILLAS_EXTRA_GUIAS_2: Record<string, EjemploGuia[]> = {
  'como-responder-mensajes-de-cumpleanos-con-calidez': [
    {
      etiqueta: 'Respuesta cariñosa para mamá, papá o hermanos',
      texto:
        '¡Gracias infinitas, [Nombre]! Tus palabras me emocionaron un montón. Qué suerte tenerte en mi vida; pronto nos vemos para dar el abrazo pendiente.'
    },
    {
      etiqueta: 'Respuesta breve para grupo familiar de WhatsApp',
      texto:
        '¡Muchas gracias a toda la familia por tantos saludos lindos y buena onda hoy! Me hicieron sentir súper acompañado/a. ¡Abrazo grande para cada uno!'
    },
    {
      etiqueta: 'Respuesta cordial para conocidos o contactos de redes',
      texto:
        '¡Muchas gracias por el saludo y los buenos deseos, [Nombre]! Te mando un abrazo y espero que andes muy bien.'
    },
    {
      etiqueta: 'Respuesta cálida si contestás al día siguiente',
      texto:
        '¡Hola [Nombre]! Recién hoy me siento a responder tranquilo/a: muchísimas gracias por haberte acordado de mi cumple y por ese mensaje tan lindo. ¡Nos debemos un café!'
    },
    {
      etiqueta: 'Respuesta con humor para un amigo que te hizo reír',
      texto:
        'Jaja ¡gracias totales, [Nombre]! Con un saludo así ya valió la pena sumar otra vela. Esta semana coordinamos para brindar como corresponde.'
    },
    {
      etiqueta: 'Respuesta para alguien que te envió un regalo o flores',
      texto:
        '¡[Nombre], me encantó el regalo! Qué detalle tan pensado y lindo; ya lo estrené/ubiqué en casa. Gracias de corazón por tomarte el tiempo y por el cariño.'
    },
    {
      etiqueta: 'Respuesta agradecida para mensaje de fe o bendición',
      texto:
        '¡Amén y muchas gracias, [Nombre]! Recibo con mucha gratitud tu bendición y tus buenos deseos. Que Dios bendiga también tu semana y la de tu familia.'
    }
  ],
  'mensajes-de-cumpleanos-para-padres-e-hijos-por-etapa': [
    {
      etiqueta: 'De padres a bebé o niño pequeño (1 a 5 años)',
      texto:
        '¡Felices [edad] añitos, mi amor! Llenás cada rincón de risas, preguntas curiosas y abrazos gigantes. Que sigas creciendo sano/a, feliz y rodeado/a de juegos lindos.'
    },
    {
      etiqueta: 'De padres a hijo o hija adolescente (13 a 17 años)',
      texto:
        '¡Felices [edad], [Nombre]! Aunque hoy ya tengas tus propios gustos y planes, seguís siendo nuestro mayor orgullo. Admiro tu personalidad y sabé que siempre tenés lugar abierto para charlar sin apuro.'
    },
    {
      etiqueta: 'De hijo adolescente a mamá o papá',
      texto:
        '¡Feliz cumple, [Ma/Pa]! Capaz no lo digo todos los días, pero valoro un montón todo lo que hacés por mí y cómo siempre estás ahí. Que pases un día genial.'
    },
    {
      etiqueta: 'De padres a hijo o hija que ya vive solo/a',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Qué orgullo verte armar tu propio hogar y tus proyectos con tanta garra. La mesa de casa siempre tiene tu lugar y tu comida favorita esperando cuando quieras volver.'
    },
    {
      etiqueta: 'De hijo o hija a padres mayores (65+ años)',
      texto:
        '¡Muy feliz cumpleaños, [Mamá/Papá]! Gracias por todo el camino recorrido, por las enseñanzas silenciosas y por el amor que hoy también disfrutan tus nietos. Que este año te regale salud y mucha paz.'
    },
    {
      etiqueta: 'De padres a hijo o hija que acaba de ser padre/madre',
      texto:
        '¡Feliz cumpleaños, hijo/a! Verte ahora cuidando a tu propia familia con tanta ternura nos llena el corazón. Deseamos que este nuevo año te traiga descanso, salud y alegría en casa.'
    },
    {
      etiqueta: 'Dedicatoria breve de padres para carta guardada del futuro',
      texto:
        'Querido/a [Nombre], hoy cumplís [edad] y te escribimos esto para que recuerdes cuánto disfrutamos verte crecer en esta etapa de [gusto o momento actual]. Te amamos hoy y siempre.'
    }
  ],
  'como-organizar-video-sorpresa-de-cumpleanos-familiar': [
    {
      etiqueta: 'Mensaje de invitación al video para amigos de distintas ciudades',
      texto:
        '¡Hola [Nombre]! Estamos armando un video sorpresa para el cumple de [Homenajeado]. ¿Nos mandás un clip horizontal de 15 segundos con buena luz antes del [fecha]? Contale un recuerdo lindo o un deseo breve.'
    },
    {
      etiqueta: 'Guía técnica de 3 reglas para que todos graben bien',
      texto:
        'Tips rápidos para grabar tu saludo: 1) Celular en horizontal si va para tele (o vertical si va para celular). 2) Frente a una ventana y en un lugar silencioso. 3) Dejá 2 segundos de sonrisa al final antes de cortar.'
    },
    {
      etiqueta: 'Recordatorio amable 48 horas antes del cierre',
      texto:
        '¡Hola equipo! Últimas 48 horas para mandar el video cortito para [Nombre]. Con 10 a 15 segundos alcanza y suma un montón para sorprenderlo/a. ¡Gracias por coparse!'
    },
    {
      etiqueta: 'Consigna divertida para grupos de amigos (pregunta única)',
      texto:
        'Para que el video sea dinámico, respondé en 10 segundos esta sola consigna: «¿Qué es lo primero que se te viene a la mente cuando pensás en [Nombre] y qué le deseás este año?».'
    },
    {
      etiqueta: 'Mensaje guía para niños o abuelos participantes',
      texto:
        'Grabalo sentado cómodo con buena luz y haceles una pregunta simple fuera de cámara como «¿Qué le querés decir a [Nombre] por su cumple?»: las respuestas espontáneas son las que más emocionan.'
    },
    {
      etiqueta: 'Placa de apertura escrita para el inicio del compilado',
      texto:
        '«[Nombre]: juntamos a personas que te quieren desde distintos rincones para recordarte hoy, en tus [edad], la huella hermosa que dejás en cada uno de nosotros. Subí el volumen.»'
    },
    {
      etiqueta: 'Mensaje para entregar el enlace del video después del festejo',
      texto:
        '¡Feliz cumple otra vez, [Nombre]! Acá te dejo el enlace para descargar y guardar para siempre el video sorpresa que armamos entre todos. Ojalá lo vuelvas a ver cada vez que necesites una sonrisa.'
    }
  ],
  'cumpleanos-de-15-anos-dedicatorias-y-reglas-del-festejo': [
    {
      etiqueta: 'Dedicatoria de hermano o hermana para la quinceañera',
      texto:
        '¡Felices 15, [Nombre]! Aunque a veces discutamos por pavadas, verte disfrutar esta noche con esa sonrisa me llena de orgullo. Que nunca pierdas tu frescura ni tus ganas de soñar en grande.'
    },
    {
      etiqueta: 'Mensaje de abuelos para los 15 años',
      texto:
        'Querida [Nombre], celebramos tus 15 años con el corazón lleno de gratitud. Te deseamos una juventud alegre, rodeada de amigas sinceras y caminos llenos de luz. Te amamos siempre, tus abuelos.'
    },
    {
      etiqueta: 'Tarjeta corta para acompañar un sobre o regalo de 15',
      texto:
        '¡Felices 15, [Nombre]! Que esta noche sea inolvidable y que este detalle te sirva para darte un gusto o acercarte a ese proyecto que tenés en mente. ¡A disfrutar!'
    },
    {
      etiqueta: 'Invitación clara por WhatsApp para fiesta de 15 años',
      texto:
        '¡Te invito a festejar mis 15! ✨ Te espero el [día] a las [hora] en [salón/lugar]. Vestimenta: [código]. Por favor confirmame asistencia antes del [fecha] y avisame si tenés menú especial. — [Nombre]'
    },
    {
      etiqueta: 'Saludo de tíos o padrinos para tarjeta impresa',
      texto:
        '[Nombre], qué alegría acompañarte desde chiquita hasta verte brillar hoy en tus 15 años. Seguí siendo fiel a tu alegría y a tus valores; siempre vas a contar con nuestro apoyo.'
    },
    {
      etiqueta: 'Texto para ceremonia de velas o agradecimiento a una amiga',
      texto:
        'Esta vela es para vos, [Amiga], porque estuviste en cada charla eterna, en cada risa y en los momentos en que más necesitaba un abrazo. Gracias por hacer estos 15 mucho más felices.'
    },
    {
      etiqueta: 'Mensaje de agradecimiento de la quinceañera al día siguiente',
      texto:
        '¡Gracias de corazón a cada persona que vino, bailó, me abrazó y compartió mis 15 conmigo! Me guardo esta noche para toda la vida. Apenas tenga las fotos las comparto con todos.'
    }
  ],
  'como-felicitar-a-alguien-que-no-le-gusta-cumplir-anos': [
    {
      etiqueta: 'Mensaje breve sin palabras festivas para pareja',
      texto:
        '[Nombre], sé que hoy preferís un día tranquilo sin alboroto, así que solo te digo que te amo y que agradezco compartir la vida con vos. Si te pinta, esta noche pedimos tu comida favorita y miramos algo en calma.'
    },
    {
      etiqueta: 'Saludo sin presión de respuesta para colega o conocido',
      texto:
        'Hola [Nombre], paso solo a desearte un buen día y un gran año por delante. No hace falta responder ni hacer nada especial hoy; ¡abrazo!'
    },
    {
      etiqueta: 'Propuesta de plan uno a uno para evitar fiestas grupales',
      texto:
        '[Nombre], prometo cero canto, cero globos y cero mesas de veinte personas. Solo te escribo para mandarte un abrazo y decirte que cuando quieras salimos a tomar un café tranquilos nosotros dos.'
    },
    {
      etiqueta: 'Mensaje empático para quien cumple una década que lo incomoda',
      texto:
        'Sé que los cambios de número a veces ponen reflexivo, [Nombre], pero desde afuera se ve todo lo valioso que construiste. Ojalá tengas un día sereno y a tu ritmo, sin presiones.'
    },
    {
      etiqueta: 'Saludo de hijo o hija a un papá/mamá reservado',
      texto:
        '[Papá/Mamá], sé que no te gustan los festejos grandes, así que respeto tu calma hoy. Solo quería agradecerte todo lo que hacés y decirte que te quiero mucho. Paso a dejarte [detalle sencillo].'
    },
    {
      etiqueta: 'Frase de humor cómplice para anti-cumpleaños',
      texto:
        'Oficialmente respeto tu derecho a ignorar la fecha hoy, [Nombre]. Tomá este mensaje solo como un recordatorio aleatorio de que sos una gran persona y que te deseo un buen año.'
    },
    {
      etiqueta: 'Mensaje breve de cierre del día sin insistencia',
      texto:
        'Ojalá hoy hayas tenido una jornada tranquila y a tu medida, [Nombre]. Te mando un abrazo grande para este nuevo ciclo.'
    }
  ],
  'frases-para-estados-de-whatsapp-e-instagram-de-cumpleanos': [
    {
      etiqueta: 'Estado minimalista para Story con foto vertical (1 línea)',
      texto:
        'Feliz vuelta al sol, [Nombre] ✨ Por mil planes más juntos.'
    },
    {
      etiqueta: 'Story emotiva para pareja con foto espontánea',
      texto:
        'Hoy cumple años mi persona favorita en el mundo. Gracias por las risas y la calma diaria, [Nombre]. ¡Feliz vida!'
    },
    {
      etiqueta: 'Estado alegre para felicitar a un hijo o hija',
      texto:
        'Felices [edad], [Nombre] 🎂 Ver cómo crecés y brillás es el mejor regalo de todos los días. ¡Te amamos!'
    },
    {
      etiqueta: 'Story divertida para mejor amigo con foto vieja',
      texto:
        'Podría subir una foto peor pero hoy es tu día 😂 ¡Muy feliz cumple, [Nombre]! Gracias por bancar todas.'
    },
    {
      etiqueta: 'Pie de foto para posteo familiar de cumpleaños',
      texto:
        'Celebrando los [edad] de [Nombre] como más nos gusta: mesa larga, torta casera y abrazos verdaderos. ¡Salud por un nuevo año lleno de alegría!'
    },
    {
      etiqueta: 'Estado sobrio para cumpleaños de abuela o abuelo',
      texto:
        'Hoy brindamos por la vida de [Abue Nombre] 💛 Gracias por tu ternura infinita y por mantenernos siempre unidos.'
    },
    {
      etiqueta: 'Story con cuenta regresiva o sticker de pregunta para cumpleaños',
      texto:
        '¡Hoy se festeja a [Nombre]! 🎉 Dejale acá abajo un deseo lindo para su nuevo año 👇'
    }
  ],
  'como-escribir-una-carta-de-cumpleanos-a-tu-pareja': [
    {
      etiqueta: 'Carta para novio o novia en su primer cumpleaños juntos',
      texto:
        '[Nombre], este es el primer cumpleaños tuyo que celebramos juntos y no puedo estar más feliz de estar acá. Gracias por llegar con esa energía honesta, por nuestras charlas eternas y por hacerme sonreír incluso en días largos. ¡Muy feliz vuelta al sol!'
    },
    {
      etiqueta: 'Carta profunda para esposo o esposa después de varios años',
      texto:
        'Amor mío, en tu cumpleaños miro nuestra casa, nuestra historia y todo lo que construimos codo a codo y siento una gratitud inmensa. Admiro tu entrega y tu manera serena de cuidarnos. Ojalá este nuevo año te regale tiempo para tus sueños y mucha salud.'
    },
    {
      etiqueta: 'Carta breve para esconder en su valija, mochila o billetera',
      texto:
        'Sorpresa de cumpleaños en medio del día: solo quería recordarte que sos mi compañero/a favorito/a y que hoy a la noche te espera un brindis especial. Te amo muchísimo, [Nombre].'
    },
    {
      etiqueta: 'Carta con humor y ternura para pareja cómplice',
      texto:
        '¡Feliz cumple, [Nombre]! Gracias por aguantar mis manías, compartir el último bocado de postre y transformar cualquier trámite aburrido en una charla divertida. Qué suerte habernos encontrado.'
    },
    {
      etiqueta: 'Carta para pareja que atraviesa un año laboral intenso',
      texto:
        'Mi amor, sé cuánto esfuerzo pusiste este año en [proyecto/trabajo] y estoy muy orgulloso/a de vos. En tu cumpleaños deseo sobre todo que descanses, disfrutes sin culpa y recibas todo lo bueno que sembraste.'
    },
    {
      etiqueta: 'Carta romántica para pareja a distancia en su cumpleaños',
      texto:
        'Aunque hoy nos separen kilómetros, mi primer pensamiento al despertar fue celebrar tu vida, [Nombre]. Gracias por cuidar lo nuestro con paciencia y verdad; ya falta menos para festejar abrazados.'
    },
    {
      etiqueta: 'Carta de cumpleaños con mirada a proyectos futuros',
      texto:
        'Feliz cumpleaños, [Nombre]. Me ilusiona tanto lo que ya vivimos como lo que todavía tenemos por estrenar: [viaje o meta común]. Que este nuevo año te encuentre pleno/a, sano/a y rodeado/a de amor.'
    }
  ],
  'auto-felicitacion-por-mi-cumpleanos-para-agradecer-y-reflexionar': [
    {
      etiqueta: 'Auto-saludo breve y sereno para WhatsApp o Instagram',
      texto:
        'Un año más de vida, aprendizajes reales y gente buena cerca. Gracias a quienes me acompañaron en cada paso del camino; hoy brindo por lo vivido y por todo lo que viene. 🎂✨'
    },
    {
      etiqueta: 'Publicación de gratitud al cumplir una década redonda (20, 30, 40 o 50)',
      texto:
        '¡Bienvenidos los [edad]! Llego a esta nueva década con menos apuro, más claridad sobre lo que importa y un agradecimiento enorme hacia quienes suman luz a mis días. ¡Salud por esta nueva etapa!'
    },
    {
      etiqueta: 'Reflexión honesta tras un año desafiante',
      texto:
        'Hoy sumo una vuelta al sol después de un año que me enseñó a ser más paciente y más fuerte. Me celebro por no haberme rendido y agradezco de corazón a quienes sostuvieron mi mano cuando hizo falta.'
    },
    {
      etiqueta: 'Auto-felicitación con humor liviano para redes',
      texto:
        'Nivel [edad] desbloqueado oficialmente 🎮 Gracias por los mensajes, los abrazos y la torta. Prometo seguir sumando anécdotas buenas y café rico este año.'
    },
    {
      etiqueta: 'Mensaje personal de fe y gratitud en mi cumpleaños',
      texto:
        'Gracias a Dios por regalarme un año más de vida, salud y familia. Recibo este nuevo ciclo con el corazón agradecido y en paz, confiando en cada paso que viene.'
    },
    {
      etiqueta: 'Texto corto para foto de cumpleaños sin exceso de texto',
      texto:
        'Agradecido/a por los [edad], por la calma que encontré este año y por el cariño que me rodea. ¡Feliz cumple para mí! 🥂'
    },
    {
      etiqueta: 'Propósito breve para abrir mi diario o nota personal',
      texto:
        'En mi cumpleaños número [edad] elijo agradecer lo que construí, soltar lo que ya cumplió su ciclo y dedicarle más tiempo a [actividad o afectos prioritarios]. Que sea un año vivido con presencia.'
    }
  ],
  'cumpleanos-infantiles-entre-amigos-y-companeros-de-colegio': [
    {
      etiqueta: 'Invitación con aviso de alergias y horario de retiro',
      texto:
        '¡Hola familias! [Nombre] cumple [edad] y lo festejamos el [día] de [hora inicio] a [hora fin] en [lugar]. Si algún chico tiene alergia alimentaria o restricción, avisenme por privado así preparamos opción segura. ¡Gracias!'
    },
    {
      etiqueta: 'Mensaje para confirmar asistencia en el grupo escolar',
      texto:
        '¡Hola [Mamá/Papá del cumpleañero]! ¡Qué lindo plan! Confirmamos que [Nombre del niño] va feliz el [día]. ¡Gracias por la invitación!'
    },
    {
      etiqueta: 'Tarjeta alegre para acompañar un regalo de compañero de grado',
      texto:
        '¡Muy feliz cumpleaños, [Nombre]! Que tengas una fiesta súper divertida, juegues un montón y disfrutes tus [edad] años. Con cariño, tu compañero/a [Tu hijo/a].'
    },
    {
      etiqueta: 'Mensaje para organizar regalo grupal entre padres del aula',
      texto:
        '¡Hola familias! Para el cumple de [Nombre] propusimos hacer un regalo grupal así elegimos algo que realmente le encante ([idea]). Quien quiera sumarse con $[monto] avise hasta el [día] y anotamos el nombre de todos los chicos en la tarjeta.'
    },
    {
      etiqueta: 'Saludo breve si tu hijo no puede asistir a la fiesta',
      texto:
        '¡Hola! Muchísimas gracias por invitar a [Mi hijo/a] al cumple de [Cumpleañero]. Justo ese día tenemos un compromiso familiar y no llegamos, pero le mandamos un abrazo enorme y muy felices [edad].'
    },
    {
      etiqueta: 'Recordatorio 24 h antes con dirección y qué llevar (pileta/parque)',
      texto:
        '¡Hola familias! Mañana los esperamos a las [hora] en [dirección] para el cumple de [Nombre]. Como vamos a hacer juegos al aire libre, traigan ropa cómoda [y protector/malla si aplica]. ¡Nos vemos!'
    },
    {
      etiqueta: 'Nota breve para bolsita souvenir al despedir a los chicos',
      texto:
        '¡Gracias por venir a festejar mis [edad] años y compartir una tarde llena de juegos y risas! — [Nombre del cumpleañero]'
    }
  ],
  'como-escribir-dedicatorias-de-cumpleanos-para-hermanos-complices': [
    {
      etiqueta: 'Saludo para hermano menor celebrando cuánto creció',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Aunque para mí siempre vas a ser mi hermano/a chico/a, me da un orgullo enorme ver tus logros y tu forma noble de andar por la vida. ¡Contás conmigo siempre!'
    },
    {
      etiqueta: 'Dedicatoria para hermana mayor referente',
      texto:
        '¡Muy feliz vuelta al sol, hermana! Gracias por abrir camino, por tus consejos sin vueltas y por estar siempre del otro lado del teléfono cuando necesito ordenar ideas. Que este año te regale mucha paz.'
    },
    {
      etiqueta: 'Mensaje para hermano o hermana que vive lejos',
      texto:
        '¡Feliz cumple a la distancia, [Nombre]! Extraño nuestras charlas espontáneas en la cocina y reírnos de las historias de familia. Te mando un abrazo enorme esperando el próximo reencuentro.'
    },
    {
      etiqueta: 'Tarjeta con humor sobre anécdotas de la infancia',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Sobrevivimos a las peleas de chicos y terminamos siendo mejores aliados de grandes. Gracias por guardar mis secretos y por hacerme reír como nadie.'
    },
    {
      etiqueta: 'Saludo cálido para hermano o hermana que acaba de formar familia',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Qué alegría verte disfrutar esta etapa tan linda con tu familia y seguir encontrando ratitos para nosotros. Te deseo salud, descanso y muchas risas.'
    },
    {
      etiqueta: 'Mensaje breve para WhatsApp de hermana a hermano',
      texto:
        '¡Muy feliz cumple, [Nombre]! Gracias por ser ese hermano fiel que siempre aparece con una solución y buena onda. Hoy te toca festejar a lo grande, ¡te quiero mucho!'
    },
    {
      etiqueta: 'Dedicatoria para acompañar una foto de chicos juntos',
      texto:
        'Mirando esta foto de cuando éramos chicos me doy cuenta de la suerte gigante que tuve de crecer con vos, [Nombre]. Por muchos años más de complicidad intacta. ¡Feliz cumpleaños!'
    }
  ],
  'cumpleanos-segun-tu-signo-del-zodiaco-como-felicitar': [
    {
      etiqueta: 'Saludo personalizado para Aries o Sagitario (impulso y aventura)',
      texto:
        '¡Feliz vuelta al sol, [Nombre]! Que este nuevo ciclo traiga rutas nuevas, proyectos desafiantes y esa energía arrolladora con la que contagiás entusiasmo a todos.'
    },
    {
      etiqueta: 'Dedicatoria para Leo (brillo y generosidad)',
      texto:
        '¡Muy feliz cumpleaños, [Nombre]! Hoy el escenario es todo tuyo: gracias por tu corazón generoso y por iluminar cada reunión con tu presencia. ¡A celebrar en grande!'
    },
    {
      etiqueta: 'Mensaje para Tauro o Virgo (calma y disfrute concreto)',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Te deseo un año estable, con buena mesa, tiempo sin apuro y la satisfacción de ver crecer cada proyecto que cuidás con tanta dedicación.'
    },
    {
      etiqueta: 'Saludo para Capricornio (constancia y logros)',
      texto:
        '¡Feliz vuelta al sol, [Nombre]! Admiro tu disciplina y la serenidad con la que alcanzás metas difíciles. Ojalá este nuevo año te regale éxitos claros y también ratos merecidos de descanso.'
    },
    {
      etiqueta: 'Mensaje fresco para Géminis o Acuario (ideas y libertad)',
      texto:
        '¡Feliz cumple, [Nombre]! Que nunca te falten conversaciones interesantes, viajes inesperados ni proyectos creativos para seguir reinventando tu año a tu manera.'
    },
    {
      etiqueta: 'Dedicatoria armónica para Libra (belleza y afectos)',
      texto:
        '¡Muy feliz cumpleaños, [Nombre]! Gracias por traer equilibrio, buen gusto y calidez a cada charla. Que tus próximos doce meses estén llenos de paz y buena compañía.'
    },
    {
      etiqueta: 'Mensaje emotivo para Cáncer o Piscis (sensibilidad y hogar)',
      texto:
        '¡Feliz vuelta al sol, [Nombre]! Que este nuevo año te abrace con la misma ternura y empatía que vos regalás a diario a quienes amás. Mucha calma y sueños lindos.'
    },
    {
      etiqueta: 'Saludo intenso y honesto para Escorpio (profundidad y lealtad)',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Gracias por tu lealtad a prueba de todo y por esa mirada auténtica que no se conforma con lo superficial. Que sea un año transformador y pleno.'
    }
  ],
  'como-dar-un-brindis-de-cumpleanos-inolvidable-en-60-segundos': [
    {
      etiqueta: 'Brindis de 30 segundos para cumpleaños de mamá',
      texto:
        'Quiero levantar mi copa por mamá: gracias por ser nuestro refugio, por enseñarnos con paciencia y por llenar cada reunión de calidez. Que este nuevo año te devuelva en salud y descanso todo lo que nos das. ¡Salud!'
    },
    {
      etiqueta: 'Brindis de 30 segundos para cumpleaños de papá',
      texto:
        'Brindemos por papá, que nos mostró con hechos lo que significan la palabra cumplida y el buen humor en días difíciles. Gracias por estar siempre firme, viejo. ¡Feliz cumpleaños y salud!'
    },
    {
      etiqueta: 'Brindis emotivo para el cumpleaños de un hijo o hija',
      texto:
        'Hoy brindamos por [Nombre] y por la alegría enorme de acompañarte un año más. Ver cómo perseguís tus proyectos con honestidad nos llena de orgullo. ¡Por muchos sueños cumplidos, salud!'
    },
    {
      etiqueta: 'Brindis para pareja en cena con amigos o familia',
      texto:
        'Gracias a todos por venir a celebrar a [Nombre]. Quienes compartimos el día a día con vos sabemos la suerte que es tenerte cerca. Por un año lleno de viajes, calma y risas compartidas. ¡Salud, mi amor!'
    },
    {
      etiqueta: 'Brindis con anécdota breve para cumpleaños de 18 o 20 años',
      texto:
        'Hace un par de años [anécdota de 1 línea], y hoy te vemos cumpliendo [18/20] con una fuerza increíble. Brindamos por tu libertad, tus amigos y todo lo lindo que recién empieza. ¡Salud!'
    },
    {
      etiqueta: 'Brindis respetuoso para cumpleaños laboral o jefe',
      texto:
        'Un segundo para levantar la copa por [Nombre]: gracias por el empuje, la escucha y el buen clima que generás en el equipo. Te deseamos un gran año personal y profesional. ¡Salud!'
    },
    {
      etiqueta: 'Brindis de agradecimiento del cumpleañero a sus invitados',
      texto:
        'Solo quiero decir gracias por hacerse el tiempo de venir hoy. Cumplir años rodeado de esta mesa es el mejor regalo que podría pedir. ¡Arriba las copas por todos nosotros, salud!'
    },
    {
      etiqueta: 'Brindis para cumpleaños de 60, 70 u 80 años',
      texto:
        'Celebrar tus [edad] años, [Nombre], es celebrar una vida generosa que dejó huella en cada persona de esta sala. Gracias por tu ejemplo y tu cariño incondicional. ¡Salud por muchos años más!'
    }
  ],
  'juegos-trivias-y-libro-de-firmas-para-fiestas-de-cumpleanos': [
    {
      etiqueta: 'Tarjetas de trivia: bloque "Infancia y escuela"',
      texto:
        '1) ¿Cuál era el dibujo o programa favorito de [Nombre] a los 8 años? · 2) ¿Qué apodo tuvo en la escuela? · 3) ¿Cuál fue su primera mascota? · 4) ¿Qué comida odiaba de chico y hoy ama?'
    },
    {
      etiqueta: 'Tarjetas de trivia: bloque "Viajes y gustos actuales"',
      texto:
        '1) ¿Qué destino soñado todavía tiene pendiente [Nombre]? · 2) ¿Café, mate o té a la mañana? · 3) ¿Qué canción canta siempre en el auto? · 4) ¿Playa tranquila o montaña?'
    },
    {
      etiqueta: 'Consigna de libro de firmas para cumpleaños de 30, 40 o 50',
      texto:
        '«Completá en 2 líneas: 1) El mejor recuerdo que tengo con [Nombre] es... · 2) Mi deseo concreto para esta nueva década suya es...»'
    },
    {
      etiqueta: 'Consigna de libro de firmas para fiesta de 15 o 18 años',
      texto:
        '«Dejale a [Nombre] un consejo real para los próximos cinco años y un plan divertido que prometés compartir con él/ella pronto.»'
    },
    {
      etiqueta: 'Dinámica "Dos verdades y una mentira" sobre el homenajeado',
      texto:
        'Leé 3 frases sobre [Nombre] (dos anécdotas reales y una inventada) y que cada mesa vote cuál es la falsa. Ejemplo: «A) Se perdió en un aeropuerto · B) Ganó un torneo de ajedrez · C) Sabe cocinar sushi».'
    },
    {
      etiqueta: 'Cartel de bienvenida para la mesa del libro de firmas',
      texto:
        '«¡Dejá tu huella antes del brindis! ✍️ Elegí una tarjeta, escribí un deseo o recuerdo para [Nombre] y guardala en la caja para que la lea mañana con el desayuno.»'
    },
    {
      etiqueta: 'Juego rápido "Quién conoce mejor al cumpleañero" (desempate)',
      texto:
        'Pregunta desempate sin empate posible: «¿A qué hora exacta nació [Nombre]?» o «¿Cuántos días de vida cumple hoy?» (podés calcularlo en nuestra herramienta de edad exacta).'
    },
    {
      etiqueta: 'Consigna de cápsula del tiempo para abrir en 5 años',
      texto:
        '«Escribí un mensaje para el [Nombre] del año [año + 5]: contale dónde te imaginás que va a estar festejando y qué esperás que nunca cambie de su forma de ser.»'
    }
  ],
  'que-regalar-a-papa-que-dice-que-no-quiere-nada-ideas-con-dedicatoria': [
    {
      etiqueta: 'Dedicatoria para vale por asado, almuerzo o desayuno casero',
      texto:
        'Papá, como dijiste que "no necesitás nada", te regalamos lo que sí disfrutás de verdad: vale por [asado/almuerzo] hecho por nosotros el día que elijas, sin que toques un plato. ¡Feliz cumpleaños!'
    },
    {
      etiqueta: 'Nota para acompañar un buen vino, café de especialidad o yerba',
      texto:
        'Para tus sobremesas largas y tus mañanas tranquilas, pa. Gracias por enseñarnos a disfrutar las cosas simples hechas con ganas. ¡Salud y muy feliz cumpleaños!'
    },
    {
      etiqueta: 'Tarjeta para herramienta práctica, termo o accesorio útil',
      texto:
        'Sabemos que preferís regalos útiles y duraderos antes que adornos, así que elegimos esto pensando en tus proyectos y salidas. Que lo estrenes pronto, ¡feliz cumple, papá!'
    },
    {
      etiqueta: 'Dedicatoria para entrada de recital, partido o salida juntos',
      texto:
        'Este cumpleaños no hay paquete para guardar en el placard: nos vamos juntos a [salida/partido/teatro] el [fecha]. Porque el mejor regalo siempre es compartir tiempo con vos, viejo.'
    },
    {
      etiqueta: 'Tarjeta para prenda cómoda (campera, buzo o pantuflas)',
      texto:
        'Para que estés abrigado y cómodo en tus días de descanso, papá. Gracias por cuidar siempre de todos nosotros; hoy te toca dejarte mimar un poco.'
    },
    {
      etiqueta: 'Dedicatoria para libro de historia, biografía o cocina',
      texto:
        'Pensé en vos apenas vi este libro sobre [tema que le interesa]. Ojalá te regale varias tardes de lectura tranquila con un buen mate o café al lado. ¡Feliz cumple, pa!'
    },
    {
      etiqueta: 'Nota breve para papá que vive lejos (envío sorpresa)',
      texto:
        'Papá, aunque digas que no hacía falta nada, quería que hoy llegara un mimo hasta tu puerta desde [tu ciudad]. Te mando un abrazo enorme y pronto brindamos en persona.'
    },
    {
      etiqueta: 'Tarjeta firmada por hijos y nietos para papá/abuelo',
      texto:
        '¡Feliz cumpleaños al mejor papá y abuelo! Entre todos elegimos este detalle con muchísimo cariño para agradecerte tus consejos, tus chistes y tu presencia incondicional.'
    }
  ],
  'frasco-de-los-30-motivos-como-armarlo-paso-a-paso-con-frases': [
    {
      etiqueta: 'Etiqueta exterior para pegar en el frente del frasco',
      texto:
        '«30 motivos reales por los que celebro tu vida, [Nombre] · Abrí uno cada mañana o cada vez que necesites una sonrisa. Con todo mi cariño, [Tu firma].»'
    },
    {
      etiqueta: 'Cuatro motivos para el frasco de mamá',
      texto:
        '1) Por cómo convertís cualquier comida sencilla en mesa de fiesta. · 2) Por escuchar sin juzgar cuando necesito desahogarme. · 3) Por tus abrazos que acomodan cualquier día difícil. · 4) Por tu fuerza serena de todos los días.'
    },
    {
      etiqueta: 'Cuatro motivos para el frasco de papá',
      texto:
        '1) Por estar siempre a un llamado cuando se rompe algo o surge un imprevisto. · 2) Por tus consejos cortos que terminan teniendo razón. · 3) Por tu sentido del humor en la mesa. · 4) Por enseñarme el valor de cumplir la palabra.'
    },
    {
      etiqueta: 'Cuatro motivos para el frasco de un hijo o hija',
      texto:
        '1) Por tu curiosidad y las preguntas inteligentes que hacés. · 2) Por la nobleza con la que tratás a tus amigos. · 3) Por cómo te esforzás cuando algo te importa. · 4) Por la alegría enorme que trajiste a nuestra familia.'
    },
    {
      etiqueta: 'Cuatro motivos para el frasco de un hermano o hermana',
      texto:
        '1) Por nuestros chistes internos que nadie más entiende. · 2) Por defenderme incluso cuando no estoy presente. · 3) Por guardar intactos los recuerdos de nuestra infancia. · 4) Por ser equipo incondicional.'
    },
    {
      etiqueta: 'Cuatro papelitos "Vale por..." para mezclar dentro del frasco',
      texto:
        '1) Vale por una tarde de mates y torta elegida por vos. · 2) Vale por elegir película sin discusión. · 3) Vale por una cena casera cocinada por mí. · 4) Vale por un paseo sin celular el fin de semana.'
    },
    {
      etiqueta: 'Cuatro motivos con recuerdos concretos (completar fecha/lugar)',
      texto:
        '1) Nunca voy a olvidar cómo nos reímos en [lugar/viaje]. · 2) Todavía agradezco cómo me acompañaste el día de [hito]. · 3) Amo nuestra costumbre de [ritual compartido]. · 4) Me emociona recordar aquella charla de [mes/año].'
    },
    {
      etiqueta: 'Nota de cierre para el fondo del frasco (papelito #30)',
      texto:
        '«Motivo #30: porque treinta papelitos quedan cortos para todo lo bueno que sumás a mi vida. Cuando termines este frasco, empezamos a escribir el próximo capítulo juntos. ¡Feliz cumpleaños!»'
    }
  ],
  'regalos-economicos-con-valor-emocional-y-tarjeta-personalizada': [
    {
      etiqueta: 'Tarjeta para frasco de galletas, mermelada o pan casero',
      texto:
        'Hecho en casa especialmente para tu cumpleaños, [Nombre]: sin conservantes y con mucho cariño. Ojalá te acompañe en un desayuno rico esta semana. ¡Muy feliz vuelta al sol!'
    },
    {
      etiqueta: 'Nota para regalar una plantita o gajo en maceta pintada',
      texto:
        'Te regalo esta plantita para que crezca a la par de tus proyectos nuevos este año, [Nombre]. Pide poca agua, buena luz y calma —igual que una buena vida—. ¡Feliz cumpleaños!'
    },
    {
      etiqueta: 'Dedicatoria para playlist curada con código QR impreso',
      texto:
        'Armé esta lista con canciones que me hacen acordar a vos y a momentos lindos que compartimos. Escaneá el código, ponela fuerte mientras cocinás o viajás y disfrutá tu día, [Nombre].'
    },
    {
      etiqueta: 'Tarjeta para talonario casero de 5 vales de tiempo',
      texto:
        'Cinco vales sin fecha de vencimiento para canjear cuando quieras: un café sin apuro, una ayuda con trámites, una comida casera, una caminata larga y un abrazo largo. ¡Feliz cumple!'
    },
    {
      etiqueta: 'Nota para regalar una receta familiar escrita a mano',
      texto:
        'Te copié a mano la receta original de [plato/postre] junto a los ingredientes base para prepararla juntos pronto. Los mejores regalos también se comparten en la cocina.'
    },
    {
      etiqueta: 'Dedicatoria para marcapáginas artesanal o cuaderno sencillo',
      texto:
        'Para que anotes ideas, viajes pendientes y momentos buenos de este nuevo año que arrancás hoy, [Nombre]. ¡Que se llene de páginas felices!'
    },
    {
      etiqueta: 'Tarjeta para caja de recuerdos ("kit de mimos de tarde")',
      texto:
        'Un pequeño kit de rescate para tardes largas: té rico, algo dulce y esta nota para recordarte cuánto te valoramos. ¡Muy feliz cumpleaños, [Nombre]!'
    },
    {
      etiqueta: 'Dedicatoria para carta larga entregada en sobre sellado',
      texto:
        'Elegí regalarte palabras honestas que puedas releer cuando quieras, porque los objetos pasan pero saber que alguien te quiere bien queda para siempre. ¡Feliz cumpleaños, [Nombre]!'
    }
  ],
  'banderines-de-cumpleanos-para-imprimir-medidas-y-plantillas': [
    {
      etiqueta: 'Frase corta para departamentos o espacios chicos (9 piezas)',
      texto:
        'Texto en banderines: A CELEBRAR (con estrellas en las puntas: 11 piezas = 6 hojas A4 · largo armado ~1,80 m). Ideal sobre desayunadores o mesas chicas.'
    },
    {
      etiqueta: 'Frase emotiva "Feliz vuelta al sol" (16 letras)',
      texto:
        'Texto en banderines: FELIZ VUELTA AL SOL (18 piezas con extremos florales = 9 hojas A4 · sugerencia: colgar en dos filas de 9 piezas con cordón de yute).'
    },
    {
      etiqueta: 'Guirnalda personalizada para mamá o papá (15 letras)',
      texto:
        'Texto en banderines: FELIZ CUMPLE MAMÁ / FELIZ CUMPLE PAPÁ (17 piezas con corazones = 9 hojas A4 · papel recomendado: cartulina opalina de 220 g).'
    },
    {
      etiqueta: 'Banderín para cumpleaños de 15, 18, 30, 40 o 50 años',
      texto:
        'Texto en banderines: FELICES 30 (11 piezas con destellos = 6 hojas A4 · paleta recomendada: Gala Negra & Oro o Marino & Champagne en forma cola de golondrina).'
    },
    {
      etiqueta: 'Banderín infantil en blanco y negro para colorear (actividad)',
      texto:
        'Texto en banderines: PINTÁ TU CUMPLE (15 piezas con contorno negro limpio = 8 hojas A4 en papel dibujo 180 g · ahorra hasta 85 % de tinta y entretiene a los chicos).'
    },
    {
      etiqueta: 'Cartel rápido de fiesta sorpresa (10 piezas)',
      texto:
        'Texto en banderines: ¡SORPRESA! (12 piezas con extremos = 6 hojas A4 · se imprime, recorta y cuelga con cinta de pintor en menos de diez minutos).'
    },
    {
      etiqueta: 'Banderín para mesa dulce o rincón de torta (9 letras)',
      texto:
        'Texto en banderines: MESA DULCE (11 piezas con extremos = 6 hojas A4 · formato escudo curvo en tonos pastel o coral confeti, reutilizable en varios festejos).'
    }
  ],
  'tematicas-de-cumpleanos-ideas-originales-para-fiestas': [
    {
      etiqueta: 'Temática "Café y merienda artesanal" para tardes tranquilas',
      texto:
        'Ambientación: tonos kraft y crema, banderines "MERIENDA FESTIVA", budines caseros, café de filtro y mates. Ideal para cumpleaños de 25 a 65 años en casa sin gastar en salón.'
    },
    {
      etiqueta: 'Temática "Noche de pizzas caseras y brindis" para amigos',
      texto:
        'Cada invitado arma su porción con ingredientes sobre tabla, playlist colaborativa en Spotify y guirnalda roja y crema. Bajo costo, cero estrés en la cocina y gran clima grupal.'
    },
    {
      etiqueta: 'Temática "Botánica y jardín natural" para almuerzos de día',
      texto:
        'Mantel claro, frascos reciclados con romero o eucalipto, banderines verde salvia y tarjetas en papel texturado. Funciona perfecto en patios, galerías o quintas.'
    },
    {
      etiqueta: 'Temática "Taller de arte y colores" para chicos de 4 a 9 años',
      texto:
        'Mesa cubierta con papel madera, crayones, témperas lavables y banderines en blanco y negro para que cada niño pinte una letra de la guirnalda antes de la torta.'
    },
    {
      etiqueta: 'Temática "Cine bajo las estrellas / living" para adolescentes',
      texto:
        'Almohadones en el piso, proyector o tele grande, baldes caseros de pochoclo con etiqueta personalizada y votación previa de la película entre los invitados.'
    },
    {
      etiqueta: 'Temática "Gala negra y dorada" para 40, 50 o 60 años',
      texto:
        'Iluminación cálida con velas o microleds, banderines cola de golondrina negro y oro, rincón de fotos con marco de cartulina y libro de firmas con anécdotas.'
    },
    {
      etiqueta: 'Temática "Vuelta al mundo en sabores" para viajeros',
      texto:
        'Mesa con 3 o 4 platos simples de destinos que el cumpleañero ama (empanadas, tacos, bruschettas o tapas), mapa con pines de viajes soñados y música internacional.'
    }
  ],
  'invitaciones-y-postales-de-cumpleanos-para-imprimir-y-editar': [
    {
      etiqueta: 'Invitación formal para cumpleaños de 50, 60 o 70 años',
      texto:
        'Con mucha alegría te invitamos a celebrar los [edad] años de [Nombre]. Te esperamos el [día y fecha] a las [hora] en [salón/dirección]. Confirmar asistencia hasta el [fecha] al [teléfono].'
    },
    {
      etiqueta: 'Invitación para merienda o mateada casera sin protocolos',
      texto:
        '¡Cumplo años y quiero festejar tranquilo/a! ☕🍰 Te espero el [día] desde las [hora] en casa ([dirección]) para tomar mates, comer torta y charlar sin apuro. ¡Avisame si venís!'
    },
    {
      etiqueta: 'Invitación para cumpleaños sorpresa (con alerta de secreto)',
      texto:
        '🤫 ¡Shhh! Fiesta sorpresa para [Nombre]. Día: [fecha] · Llegada puntual invitados: [hora] · Lugar: [dirección]. Por favor no comentar nada fuera de este chat y confirmar antes del [fecha].'
    },
    {
      etiqueta: 'Invitación para cumpleaños temático o dress code',
      texto:
        '¡Se viene mi cumple temático «[Temática]»! 🎉 Nos vemos el [día] a las [hora] en [lugar]. Consigna opcional para divertirnos: [detalle de vestimenta/color]. Confirmame así calculo todo.'
    },
    {
      etiqueta: 'Postal de cumpleaños para imprimir en 10 × 15 cm y pegar al regalo',
      texto:
        'Para [Nombre]: que este nuevo año te encuentre sano/a, rodeado/a de gente leal y con tiempo para disfrutar lo que amás. Gracias por compartir tu camino con nosotros. — [Tu firma]'
    },
    {
      etiqueta: 'Postal imprimible para cumpleaños infantil',
      texto:
        '¡Felices [edad] añitos, [Nombre]! Que nunca falten juegos nuevos, risas contagiosas y abrazos gigantes en tu nuevo año. ¡A soplar las velas! — [Tu firma]'
    },
    {
      etiqueta: 'Postal de agradecimiento para entregar o enviar post-fiesta',
      texto:
        '¡Gracias por haber compartido mi cumpleaños conmigo! Tu presencia, tu abrazo y tu buena energía hicieron de este día un recuerdo que me guardo para siempre. — [Tu nombre]'
    }
  ],
  'como-escribir-condolencias-y-palabras-de-pesame-respetuosas': [
    {
      etiqueta: 'Condolencia cercana para una amiga o amigo que perdió a su mamá/papá',
      texto:
        '[Nombre], lamento profundamente la partida de tu [mamá/papá]. No hay palabras que alcancen en un momento así, pero sabé que estoy cerca para lo que necesites hoy y en las semanas que siguen. Te abrazo fuerte.'
    },
    {
      etiqueta: 'Pésame respetuoso para un familiar por la pérdida de un abuelo',
      texto:
        'Querido/a [Nombre], te acompaño de corazón en este dolor por la partida de [Nombre del abuelo/a]. Siempre vamos a recordar su calidez y la huella buena que dejó en todos. Un abrazo sereno para toda la familia.'
    },
    {
      etiqueta: 'Mensaje de pésame con fe y consuelo cristiano',
      texto:
        'Lamento mucho esta pérdida tan dolorosa, [Nombre]. Pido a Dios que abrace tu corazón con paz, fortalezca a tu familia en estos días difíciles y reciba con luz a [Nombre]. Estamos orando por ustedes.'
    },
    {
      etiqueta: 'Condolencia breve para tarjeta de flores o corona',
      texto:
        'Acompañamos con profundo respeto y cariño a la familia [Apellido] en este momento de dolor. Deseamos paz y consuelo en la memoria de [Nombre]. — [Tu firma/Familia]'
    },
    {
      etiqueta: 'Mensaje de ofrecimiento práctico de ayuda (sin abrumar)',
      texto:
        '[Nombre], pienso mucho en vos hoy. No hace falta que me contestes este mensaje: si esta semana te sirve que te acerque comida lista o te ayude con algún trámite, avisame con una sola palabra y voy.'
    },
    {
      etiqueta: 'Condolencia a la distancia cuando no podés asistir al velorio',
      texto:
        'Querido/a [Nombre], me duele mucho no poder estar ahí hoy para darte un abrazo en persona tras la partida de [Nombre]. Desde la distancia acompaño a toda tu familia con todo mi respeto y afecto.'
    },
    {
      etiqueta: 'Mensaje de acompañamiento semanas después del duelo',
      texto:
        'Hola [Nombre], paso solo a mandarte un abrazo tranquilo hoy que ya bajó el movimiento de los primeros días. Seguimos pensando en vos y en [Nombre]; cuando quieras charlar o caminar en silencio, acá estoy.'
    }
  ]
};
