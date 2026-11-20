import type { EjemploGuia } from './guias-tipos.ts';

// Plantillas adicionales especificas por tema para las guias 1 a 20
// (completan >= 10 plantillas copiables unicas por guia junto a las existentes)
export const PLANTILLAS_EXTRA_GUIAS_1: Record<string, EjemploGuia[]> = {
  'como-escribir-una-carta-de-cumpleanos-que-emocione': [
    {
      etiqueta: 'Carta para hermana o hermano cómplice',
      texto:
        '[Nombre], crecer con vos me dejó las mejores anécdotas y la tranquilidad de saber que siempre tengo equipo. Todavía me río cuando pienso en [recuerdo compartido de infancia o viaje]. En este nuevo año te deseo paz, salud y tardes sin apuro. Te quiero muchísimo. — [Tu firma]'
    },
    {
      etiqueta: 'Carta para hijo o hija en etapa adulta',
      texto:
        'Hijo/a querido/a, verte construir tu camino con tanta honestidad me llena de orgullo cada día. Admiro cómo resolviste [logro o desafío reciente] sin perder tu calidez. Ojalá este cumpleaños te regale descanso, proyectos lindos y abrazos sinceros. Siempre estoy acá. — [Tu firma]'
    },
    {
      etiqueta: 'Carta para pareja en convivencia',
      texto:
        'Mi amor, más allá de las fechas grandes, hoy quiero agradecerte nuestra vida cotidiana: [gesto diario que valorás] y la calma de volver a casa sabiendo que estás. Que este nuevo año nos encuentre sanos, cómplices y cumpliendo [plan pendiente juntos]. Feliz cumpleaños. — [Tu firma]'
    },
    {
      etiqueta: 'Carta serena para abuela o abuelo',
      texto:
        'Abue [Nombre], gracias por abrir siempre la puerta con una sonrisa y por enseñarme [enseñanza o receta querida]. Cada charla en tu mesa es un tesoro que guardo para siempre. Que cumplas muchos años más rodeado/a de salud y mimos. — [Tu firma]'
    },
    {
      etiqueta: 'Carta de gratitud para mentor, madrina o padrino',
      texto:
        'Querido/a [Nombre], aprovecho tu cumpleaños para decirte cuánto significó tu apoyo cuando [situación en la que te orientó]. Tener referentes generosos como vos cambia la manera de mirar la vida. Te deseo un año luminoso, sereno y lleno de satisfacciones. — [Tu firma]'
    },
    {
      etiqueta: 'Carta breve para acompañar un álbum o foto impresa',
      texto:
        'Elegí esta foto de [momento o lugar] porque resume exactamente lo que me alegra celebrar hoy: tu risa real y el cariño que sembrás en quienes te rodean. Que el próximo capítulo sume muchas escenas tan lindas como esta. Feliz cumpleaños, [Nombre]. — [Tu firma]'
    },
    {
      etiqueta: 'Carta para reencuentro después de un año exigente',
      texto:
        '[Nombre], sé que los últimos meses trajeron pruebas pesadas, y por eso hoy celebro todavía más tu entereza y tu forma noble de seguir adelante. Merecés un año más liviano, con descanso verdadero y noticias buenas en [área importante para esa persona]. — [Tu firma]'
    }
  ],
  'que-regalar-segun-la-edad-guia-practica': [
    {
      etiqueta: 'Tarjeta para regalo de primer añito o bebés (1 a 3 años)',
      texto:
        '¡Feliz primer año, [Nombre]! Trajimos este detalle pensado para acompañar tus juegos, tus siestas y cada descubrimiento nuevo. Que crezcas siempre sano/a, curioso/a y rodeado/a de abrazos. — [Tu firma]'
    },
    {
      etiqueta: 'Dedicatoria para regalo de preadolescente (11 a 14 años)',
      texto:
        '¡Felices [edad], [Nombre]! Sabemos cuánto te entusiasma [hobbie o interés actual], así que elegimos esto para que lo disfrutes a tu manera. Seguí explorando tus ideas con esa chispa propia. — [Tu firma]'
    },
    {
      etiqueta: 'Nota para regalo de 20 a 29 años (independencia y proyectos)',
      texto:
        '¡Felices [edad], [Nombre]! Un pequeño empujón para esta etapa llena de proyectos, mudanzas y planes nuevos. Que lo uses muchísimo y que este año traiga libertad y buenos viajes. — [Tu firma]'
    },
    {
      etiqueta: 'Tarjeta para regalo de experiencia (cena, spa o escapada)',
      texto:
        '[Nombre], en lugar de otro objeto para el placard elegimos regalarte tiempo de calidad: vale por [experiencia elegida] cuando vos dispongas. Porque descansar y disfrutar también es parte de celebrar. — [Tu firma]'
    },
    {
      etiqueta: 'Dedicatoria para regalo de 60 o 70 años (comodidad y disfrute)',
      texto:
        'Querido/a [Nombre], elegimos este detalle pensando en tus tardes tranquilas de [actividad favorita: lectura, jardín, mate o paseos]. Que tus [edad] lleguen con salud firme y momentos muy disfrutados. — [Tu firma]'
    },
    {
      etiqueta: 'Tarjeta para regalo grupal entre amigos o familia',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Entre todos nos pusimos de acuerdo para regalarte [regalo] porque sabemos cuánto lo querías. Gracias por unirnos siempre con tan buena energía. Con cariño, [Nombres].'
    },
    {
      etiqueta: 'Nota para libro regalado con dedicatoria en la primera página',
      texto:
        'Para [Nombre], en su cumpleaños [edad]: pensé en vos apenas leí la primera página de este libro sobre [tema]. Ojalá te acompañe en tardes de café tranquilo y te deje buenas ideas. — [Tu firma]'
    }
  ],
  'como-felicitar-en-el-trabajo-jefe-companeros-clientes': [
    {
      etiqueta: 'Mensaje breve en Slack, Teams o chat interno',
      texto:
        '¡Muy feliz cumpleaños, [Nombre]! Que tengas una excelente jornada y un gran nuevo año personal. Gracias por la buena onda y el empuje diario en el equipo.'
    },
    {
      etiqueta: 'Correo profesional para cliente de confianza (trato cordial)',
      texto:
        'Estimado/a [Nombre], desde todo el equipo de [Empresa/Estudio] le enviamos un saludo muy cordial en el día de su cumpleaños. Le deseamos salud, bienestar y un año lleno de buenos proyectos compartidos. Saludos cordiales, [Tu nombre].'
    },
    {
      etiqueta: 'Saludo para proveedor o socio comercial',
      texto:
        'Hola [Nombre], ¡feliz cumpleaños! Aprovecho la ocasión para agradecerte la seriedad y el compromiso con el que trabajamos durante todo el año. Que pases un excelente día junto a los tuyos.'
    },
    {
      etiqueta: 'Tarjeta firmada por el equipo para un líder o gerente',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Valoramos muchísimo tu claridad para guiar al equipo y el respeto con el que acompañás cada desafío. Te deseamos un gran año personal y profesional. — Todo el equipo de [Área].'
    },
    {
      etiqueta: 'Saludo cálido para compañero que trabaja en modalidad remota',
      texto:
        '¡Feliz cumple, [Nombre]! Aunque estemos a kilómetros y nos veamos por cámara, se nota cada día tu buena predisposición en [proyecto]. Ojalá hoy cierres la compu temprano para festejar como corresponde.'
    },
    {
      etiqueta: 'Mensaje para nuevo integrante del equipo',
      texto:
        '¡Muy feliz cumpleaños, [Nombre]! Qué alegría celebrar tu primer cumple formando parte del equipo. Que tengas un día genial y un año lleno de lindos aprendizajes acá y afuera.'
    },
    {
      etiqueta: 'Nota formal para director, rector o autoridad institucional',
      texto:
        'Estimado/a [Cargo y Apellido], le hago llegar mis más cordiales deseos en el día de su cumpleaños, deseándole salud, tranquilidad y renovada energía en su gestión. Atentamente, [Tu nombre].'
    }
  ],
  'que-decir-en-un-cumpleanos-cuando-falta-un-ser-querido': [
    {
      etiqueta: 'Mensaje sereno para un hermano o hermana en una fecha sensible',
      texto:
        '[Nombre], hoy pienso mucho en vos y en [nombre de quien partió]. No hace falta disimular que la fecha pesa: te mando un abrazo quieto, sin apuro, agradeciendo todo el amor que nos dejó en común.'
    },
    {
      etiqueta: 'Palabras para recordar a un abuelo o abuela en su cumpleaños',
      texto:
        'Hoy sería tu cumpleaños, abue [Nombre], y en casa sigue vivo tu recuerdo en [costumbre, comida o dicho suyo]. Gracias por la huella serena que dejaste en toda la familia; siempre vas con nosotros.'
    },
    {
      etiqueta: 'Texto breve para encender una vela o brindar en silencio',
      texto:
        'En tu fecha, [Nombre], elegimos recordarte con gratitud limpia por todo lo vivido. Tu ausencia se siente, pero el cariño y las enseñanzas que sembraste permanecen intactos en nuestra mesa.'
    },
    {
      etiqueta: 'Acompañamiento para mamá o papá en el primer cumpleaños sin su pareja',
      texto:
        '[Nombre], sé que este cumpleaños tiene un sabor distinto y a veces cuesta encontrar ánimo. No tenés que fingir nada hoy: solo quiero estar cerca, escucharte si querés charlar y cuidar tu día con calma.'
    },
    {
      etiqueta: 'Nota sobria para una amiga que cumple años durante un duelo',
      texto:
        'Querida [Nombre], en tu cumpleaños te deseo sobre todo paz, abrigo y gente buena alrededor. Pensando con mucho cariño en vos hoy; cuando quieras, paso a tomar un té tranquilo sin compromiso.'
    },
    {
      etiqueta: 'Dedicatoria breve para estado o publicación respetuosa',
      texto:
        'Hoy te nombramos con ternura y memoria agradecida, [Nombre]. El tiempo pasa, pero lo que construimos juntos sigue iluminando nuestra historia. Hasta siempre.'
    },
    {
      etiqueta: 'Carta corta para guardar en un álbum familiar de homenaje',
      texto:
        'Querido/a [Nombre], en esta fecha recordamos tu risa y tu forma generosa de cuidar a los tuyos. Aunque falte tu abrazo físico, cada vez que repetimos [gesto heredado] sentimos que seguís presente en casa.'
    }
  ],
  'como-celebrar-un-cumpleanos-a-la-distancia': [
    {
      etiqueta: 'Mensaje para acompañar un desayuno o pedido a domicilio',
      texto:
        '¡Sorpresa desde [tu ciudad], [Nombre]! Como hoy no puedo cruzar la puerta para abrazarte, te mandé este desayuno para arrancar el cumple con algo rico. Apenas termines, avisame y brindamos por cámara.'
    },
    {
      etiqueta: 'Saludo para familiar que emigró al exterior',
      texto:
        '¡Muy feliz cumpleaños, [Nombre]! Aunque los kilómetros y las horas de diferencia se sientan en fechas como hoy, celebramos con orgullo todo lo que estás construyendo en [país/ciudad]. Te abrazamos fuerte desde casa.'
    },
    {
      etiqueta: 'Mensaje para pareja a distancia con cuenta regresiva',
      texto:
        'Mi amor, feliz cumpleaños a la distancia. Hoy te mando mil besos por pantalla mientras tacho días para [próximo reencuentro]. Gracias por sostener este cariño con tanta verdad sin importar el mapa.'
    },
    {
      etiqueta: 'Texto para enviar junto a una playlist o video sorpresa',
      texto:
        '[Nombre], preparé esta [playlist / compilado de audios] pensando en nuestras charlas y viajes juntos para que me sientas un poco más cerca hoy. Ponelo fuerte y disfrutá tu día como te merecés.'
    },
    {
      etiqueta: 'Saludo para amiga en otro huso horario (noche allá / tarde acá)',
      texto:
        '¡Feliz cumple en horario oficial de [ciudad], [Nombre]! Quería ser de los primeros en saludarte antes de que arranque tu día allá. Que tengas un año hermoso y pronto nos pongamos al día en persona.'
    },
    {
      etiqueta: 'Dedicatoria para regalo comprado online con entrega en su casa',
      texto:
        'Llegó este paquete directo hasta tu puerta con un abrazo gigante viajando adentro. Ojalá te guste mucho y te recuerde que la distancia nunca enfriará nuestro vínculo. ¡Feliz cumpleaños, [Nombre]!'
    },
    {
      etiqueta: 'Cierre breve después de una videollamada de cumpleaños',
      texto:
        'Qué lindo verte sonreír aunque sea por pantalla, [Nombre]. Me quedo con la alegría de haber brindado juntos a la distancia. Guardá energías que el abrazo pendiente lo cobramos apenas nos veamos.'
    }
  ],
  'como-organizar-una-fiesta-sorpresa-sin-estres': [
    {
      etiqueta: 'Mensaje para crear el grupo secreto sin levantar sospechas',
      texto:
        '¡Hola a todos! Armé este grupo 100% secreto para organizar el cumple sorpresa de [Nombre] el [día] a las [hora] en [lugar]. Por favor silencien notificaciones si lo ven seguido y confirmen acá antes del [fecha].'
    },
    {
      etiqueta: 'Mensaje de coartada para el cómplice principal',
      texto:
        'Plan confirmado con [Cómplice]: le decís a [Nombre] que salen solo ustedes dos a [excusa creíble] a las [hora]. Nosotros recibimos a todos 45 minutos antes para que a las [hora llegada] ya esté todo listo y en silencio.'
    },
    {
      etiqueta: 'Recordatorio de logística (estacionamiento y puntualidad)',
      texto:
        'Equipo sorpresa: hoy es el gran día. Recuerden estacionar a una cuadra sobre [calle] para que [Nombre] no reconozca autos conocidos al llegar. Puerta abierta desde las [hora] puntual.'
    },
    {
      etiqueta: 'Consigna rápida para coordinar comida o bebida a la canasta',
      texto:
        'Para que nadie se sobrecargue, dividimos así: nosotros nos encargamos de la torta y lo salado principal; quien quiera sumar bebida o algo dulce anótese respondiendo este mensaje así no repetimos.'
    },
    {
      etiqueta: 'Aviso de 5 minutos antes de la llegada',
      texto:
        '¡Atención todos! [Cómplice] avisó que están doblando la esquina. Bajamos música, guardamos celulares en silencio y nos ubicamos en [sector] listos para el grito cuando abra la puerta.'
    },
    {
      etiqueta: 'Mensaje para invitar a alguien a enviar un video si no puede asistir',
      texto:
        '¡Hola [Nombre]! Si el [día] no llegás a venir a la sorpresa de [Homenajeado], mandame un video horizontal de 15 segundos antes del [fecha] así lo proyectamos justo después de la torta.'
    },
    {
      etiqueta: 'Agradecimiento al grupo al día siguiente de la sorpresa',
      texto:
        '¡Gracias totales a todos por guardar el secreto y sumarse ayer! La cara de emoción de [Nombre] pagó cada detalle. Acá les dejo la carpeta con las fotos del momento para que las descarguen.'
    }
  ],
  'como-personalizar-tarjetas-y-dedicatorias-whatsapp': [
    {
      etiqueta: 'Personalización con anécdota de viaje o salida reciente',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Todavía me acuerdo de [anécdota concreta del viaje o cena] y me saca una sonrisa. Que este nuevo año nos regale muchos planes igual de buenos. — [Tu firma]'
    },
    {
      etiqueta: 'Personalización resaltando una virtud concreta',
      texto:
        '[Nombre], en tu día quiero agradecerte especialmente esa [virtud real: paciencia, escucha, humor] con la que hacés más livianos los días de quienes te rodean. ¡Muy feliz vuelta al sol! — [Tu firma]'
    },
    {
      etiqueta: 'Tarjeta con encabezado personalizado para década redonda',
      texto:
        'Encabezado: FELICES [30/40/50], [NOMBRE] · Cuerpo: Llegás a esta etapa con una historia hermosa y proyectos que inspiran. Que nunca te falten salud, buena música y mesas rodeadas de afecto. — [Tu firma]'
    },
    {
      etiqueta: 'Personalización breve para estado o WhatsApp con posdata',
      texto:
        '¡Muy feliz cumple, [Nombre]! Por un año sereno, lleno de risas honestas y noticias buenas en [proyecto]. P.D.: Esta semana el café corre por mi cuenta. — [Tu firma]'
    },
    {
      etiqueta: 'Tarjeta visual Story 9:16 para foto compartida',
      texto:
        'Arriba de la foto: ¡Feliz cumple, [Nombre]! · Debajo: Gracias por estar en las buenas y en las difíciles sin hacer ruido. Que este año te devuelva multiplicado todo lo bueno que das.'
    },
    {
      etiqueta: 'Adaptación respetuosa para familiar mayor (tía, tío, padrino)',
      texto:
        'Querido/a [Vínculo y Nombre], le deseamos un cumpleaños muy feliz y tranquilo, celebrando su salud y todas las tardes lindas compartidas en familia. Le mandamos un abrazo grande. — [Tu firma]'
    },
    {
      etiqueta: 'Personalización para acompañar una tarjeta impresa en papel',
      texto:
        'Para [Nombre]: elegí escribirte esto en papel porque los saludos que importan merecen quedarse guardados. Gracias por tu amistad fiel durante tantos años; que disfrutes muchísimo tu día. — [Tu firma]'
    }
  ],
  'frases-de-fe-y-agradecimiento-para-cumpleanos-cristianos': [
    {
      etiqueta: 'Bendición para hijo o hija en su cumpleaños',
      texto:
        'Hijo/a amado/a, damos gracias a Dios por el regalo de tu vida. Pedimos que Su mano te guarde en cada decisión, que te llene de sabiduría y que nunca falte paz en tu corazón. ¡Feliz cumpleaños!'
    },
    {
      etiqueta: 'Saludo cristiano para esposo o esposa',
      texto:
        'Amor mío, en tu cumpleaños agradezco al Señor por haber unido nuestros caminos. Oro para que Dios bendiga tu salud, renueve tus fuerzas cada mañana y siga guiando nuestro hogar con amor y armonía.'
    },
    {
      etiqueta: 'Bendición breve para WhatsApp con cita bíblica (Números 6:24)',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Que el Señor te bendiga y te guarde, haga resplandecer Su rostro sobre vos y ponga Su paz en cada paso de este nuevo año de vida.'
    },
    {
      etiqueta: 'Mensaje de fe para quien atraviesa un tiempo de prueba',
      texto:
        '[Nombre], en tu cumpleaños oro especialmente para que Dios renueve tu esperanza y abrace tu corazón con serenidad. No caminás solo/a: que este nuevo ciclo traiga alivio, consuelo y puertas abiertas.'
    },
    {
      etiqueta: 'Saludo para hermano o hermana de la iglesia o comunidad',
      texto:
        '¡Muy feliz cumpleaños, querido/a [Nombre]! Gracias por tu servicio generoso y tu testimonio sencillo en nuestra comunidad. Que el Señor multiplique tu alegría y bendiga abundantemente a tu familia.'
    },
    {
      etiqueta: 'Bendición para abuela o abuelo de fe firme',
      texto:
        'Abue [Nombre], le damos gracias a Dios por tus años de vida y por habernos transmitido una fe tan serena y práctica. Que el Señor siga cuidando tu salud y llenando tus días de consuelo y alegría.'
    },
    {
      etiqueta: 'Tarjeta cristiana para cumpleaños infantil o bautismal',
      texto:
        '¡Feliz cumpleaños, pequeño/a [Nombre]! Que Dios cuide siempre tus pasos, ilumine tu sonrisa y te haga crecer en salud, bondad y alegría rodeado/a del amor de tu familia.'
    }
  ],
  'como-celebrar-meses-de-novios-y-aniversarios-sin-caer-en-cliches': [
    {
      etiqueta: 'Mensaje fresco para 1 a 3 meses de novios',
      texto:
        '¡Felices [N] meses, [Nombre]! Me encanta lo natural que se siente compartir el tiempo con vos, desde [plan sencillo juntos] hasta las charlas eternas. Qué lindo seguir descubriéndonos sin apuro.'
    },
    {
      etiqueta: 'Dedicatoria para 6 meses (medio año juntos)',
      texto:
        'Medio año caminando juntos, [Nombre], y ya acumulamos recuerdos que valen oro. Gracias por tu escucha real, tu humor y por hacer que cualquier tarde común sea mi plan favorito. ¡Felices 6 meses!'
    },
    {
      etiqueta: 'Carta breve para el primer año de novios',
      texto:
        '¡Feliz primer año, mi amor! Doce meses en los que aprendimos a ser equipo en lo lindo y en lo exigente. Agradezco cada abrazo, cada viaje chico y la paz de elegirnos todos los días.'
    },
    {
      etiqueta: 'Dedicatoria para 2 a 5 años de relación consolidada',
      texto:
        'Cumplir [N] años con vos confirma que el amor verdadero vive en los detalles diarios: en [costumbre compartida] y en cómo nos cuidamos el respeto. Gracias por ser hogar y aventura a la vez.'
    },
    {
      etiqueta: 'Mensaje personalizable para más de 10 años juntos',
      texto:
        'Hoy celebramos [N] años de historia compartida, [Nombre]. Miro todo lo que superamos y construimos a la par y solo siento orgullo sano y ternura. Por muchos capítulos más eligiendo caminar de la mano.'
    },
    {
      etiqueta: 'Saludo breve con humor cómplice para aniversario',
      texto:
        '¡Felices [N] años aguantándonos las manías con estilo, [Nombre]! Entre discusiones sobre qué pedir de cena y risas que solo nosotros entendemos, queda claro que somos equipo imbatible. Te amo.'
    },
    {
      etiqueta: 'Nota breve para dejar junto a flores o cena casera de aniversario',
      texto:
        'Para [Nombre], en nuestro aniversario: gracias por hacer que volver a vos sea siempre un alivio. Hoy brindamos por nuestra historia real y por todo lo lindo que vamos a seguir armando juntos.'
    }
  ],
  'etiqueta-digital-cuando-saludar-atrasado-o-por-redes': [
    {
      etiqueta: 'Saludo atrasado por 1 o 2 días con naturalidad',
      texto:
        '¡Hola [Nombre]! Llego un par de días tarde pero con las mismas ganas de desearte un gran nuevo año. ¿Cómo pasaste tu cumple? Contame cuando tengas un ratito así nos ponemos al día.'
    },
    {
      etiqueta: 'Mensaje atrasado para amigo cercano con invitación concreta',
      texto:
        '[Nombre], perdón por el cuelgue con la fecha: ¡muy feliz cumple atrasado! Para compensar como corresponde, esta semana invito yo [café/cerveza/almuerzo]. Decime qué día te queda cómodo.'
    },
    {
      etiqueta: 'Saludo atrasado respetuoso para familiar mayor',
      texto:
        'Querido/a [Vínculo], le pido disculpas por la demora en escribirle, pero no quería dejar pasar su cumpleaños sin mandarle un abrazo grande y desearle mucha salud y alegría en este nuevo año.'
    },
    {
      etiqueta: 'Comentario elegante en publicación de redes sociales',
      texto:
        '¡Muy feliz vuelta al sol, [Nombre]! Qué linda foto; te deseo un año lleno de salud, calma y proyectos que te entusiasmen.'
    },
    {
      etiqueta: 'Mensaje directo después de ver una historia de cumpleaños',
      texto:
        '¡Recién veo tu historia, [Nombre]! Muy feliz cumpleaños; se nota lo bien que la pasaste. Te mando un abrazo enorme y los mejores deseos para esta nueva etapa.'
    },
    {
      etiqueta: 'Saludo atrasado para excompañero o contacto lejano',
      texto:
        'Hola [Nombre], aunque llego unos días después quería desearte un muy feliz cumpleaños y un excelente año personal y laboral. ¡Ojalá ande todo muy bien por allá!'
    },
    {
      etiqueta: 'Mensaje honesto si te olvidaste por una semana difícil',
      texto:
        '[Nombre], tuve unos días muy revueltos y se me pasó escribirte justo en tu fecha, pero te tengo muy presente. ¡Feliz cumpleaños atrasado! Te deseo un año sereno y lleno de alegrías.'
    }
  ],
  'como-escribir-frases-motivacionales-diarias-que-inspiren': [
    {
      etiqueta: 'Mensaje de lunes para arrancar la semana sin presión',
      texto:
        'No hace falta resolver toda la semana hoy lunes: elegí una sola tarea clave, terminala bien y dejá que ese impulso ordene el resto del día.'
    },
    {
      etiqueta: 'Aliento concreto para alguien que rinde un examen o entrevista',
      texto:
        '[Nombre], ya hiciste el trabajo serio de prepararte. Hoy respirá hondo, confiá en lo que sabés y enfocate en responder una pregunta a la vez. ¡Éxitos reales hoy!'
    },
    {
      etiqueta: 'Nota breve para emprendedor o trabajador independiente',
      texto:
        'Construir algo propio lleva días lentos que nadie aplaude todavía. Cada paso prolijo que das hoy suma cimientos reales para mañana; seguí firme a tu ritmo.'
    },
    {
      etiqueta: 'Recordatorio de autocuidado para mitad de semana',
      texto:
        'Descansar a tiempo también es parte de rendir bien. Frená diez minutos, tomá agua, soltá hombros y retomá con la cabeza fresca.'
    },
    {
      etiqueta: 'Mensaje de apoyo tras un tropiezo o mal resultado',
      texto:
        '[Nombre], un resultado que no salió como esperabas no borra tu capacidad ni tu esfuerzo. Tomate el día para digerirlo tranquilo/a y mañana revisamos juntos el próximo paso.'
    },
    {
      etiqueta: 'Frase serena para cerrar la jornada con gratitud',
      texto:
        'Antes de apagar el día, anotá una cosa concreta que hoy sí salió bien —por chica que parezca—. Entrenar la mirada hacia lo avanzado devuelve energía real.'
    },
    {
      etiqueta: 'Impulso para empezar un hábito nuevo sin perfeccionismo',
      texto:
        'Diez minutos hechos hoy valen mucho más que la hora perfecta que postergás desde hace un mes. Empezá chico, pero empezá hoy.'
    }
  ],
  'mensajes-de-cumpleanos-en-ingles-y-espanol-bilingues': [
    {
      etiqueta: 'Saludo bilingüe cálido para familia bicultural',
      texto:
        'Happy Birthday, [Nombre]! Que este nuevo año te regale salud, alegría y muchos momentos lindos junto a quienes más querés. Wishing you a wonderful year ahead!'
    },
    {
      etiqueta: 'Mensaje corto en inglés + español para Instagram Story',
      texto:
        'Cheers to another bright trip around the sun! 🥂 ¡Feliz vuelta al sol, [Nombre], por muchos planes juntos este año!'
    },
    {
      etiqueta: 'Correo profesional bilingüe para equipo internacional',
      texto:
        'Hi [Nombre], wishing you a very happy birthday and a rewarding year ahead! ¡Muy feliz cumpleaños y gracias por el excelente trabajo compartido!'
    },
    {
      etiqueta: 'Dedicatoria divertida bilingüe para mejor amigo/a',
      texto:
        'Happy Birthday to my favorite partner in crime! Gracias por todas las risas y por aguantar mis ocurrencias otro año más. Let’s celebrate soon!'
    },
    {
      etiqueta: 'Tarjeta infantil bilingüe para escuela o amigos',
      texto:
        'Happy Birthday, [Nombre]! ¡Que tengas un día súper divertido lleno de juegos, torta rica y muchos regalos! Have the best day ever!'
    },
    {
      etiqueta: 'Mensaje bilingüe para alguien que vive en el exterior',
      texto:
        'Sending you the warmest birthday hug across the miles, [Nombre]. Te extrañamos mucho por acá y celebramos tu vida desde lejos. Enjoy your special day!'
    },
    {
      etiqueta: 'Bendición bilingüe para cumpleaños cristiano',
      texto:
        'Happy Birthday, [Nombre]! May God bless your steps with peace, health, and joy. ¡Que el Señor bendiga abundantemente tu nuevo año de vida!'
    }
  ],
  'como-escribir-poemas-de-cumpleanos-cortos-que-rimen-bien': [
    {
      etiqueta: 'Cuarteta breve para WhatsApp (4 versos con ritmo claro)',
      texto:
        'Hoy brilla el calendario con tu nombre,\nporque suma otro año tu alegría;\nque la salud y el cariño te acompañen\nen cada amanecer de cada día.'
    },
    {
      etiqueta: 'Poema tierno para hija o hijo en su cumpleaños',
      texto:
        'Te vi crecer de paso en paso firme,\nllenando nuestra casa de horizonte;\nque nunca falte viento a tus proyectos\nni abrazo fiel que cuide lo que afrontes.'
    },
    {
      etiqueta: 'Versos alegres con humor suave para hermano o amigo',
      texto:
        'Sumamos otra vela a nuestra historia,\nmás charlas largas, risas y café;\nno importa cuántos años hoy se cuenten,\nsi el equipo sigue firme como ayer.'
    },
    {
      etiqueta: 'Poema cálido para abuela o abuelo',
      texto:
        'Tus manos guardan cuentos y ternura,\ntu mesa es el refugio del hogar;\npor eso hoy brindamos por tu vida\ny todo lo que sabes regalar.'
    },
    {
      etiqueta: 'Dedicatoria poética para pareja en aniversario o cumple',
      texto:
        'No busco grandes frases de novela,\nme basta ver tu risa al despertar;\nfeliz cumpleaños, luz de mis jornadas,\nqué suerte caminar a tu compás.'
    },
    {
      etiqueta: 'Poema corto con fe y gratitud para tarjeta impresa',
      texto:
        'Damos gracias al cielo por tu vida,\npor la bondad serena que sembrás;\nque Dios bendiga siempre tu camino\ncon salud firme, gozo y mucha paz.'
    },
    {
      etiqueta: 'Estrofa corta para acompañar un ramo o regalo sencillo',
      texto:
        'Un gesto simple envuelto con cariño\npara celebrar hoy tu vuelta al sol;\nque el año nuevo traiga calma buena\ny mil motivos para estar mejor.'
    }
  ],
  'discurso-de-cumpleanos-para-brindis-sin-nervios': [
    {
      etiqueta: 'Brindis de pareja en cena íntima o familiar',
      texto:
        'Quiero pedir un segundo para brindar por [Nombre]. Quienes compartimos la vida diaria con vos sabemos la paciencia y la alegría que ponés en cada detalle. Gracias por ser hogar y compañero/a; ¡salud por tu nuevo año!'
    },
    {
      etiqueta: 'Brindis de padres en el cumpleaños de un hijo o hija',
      texto:
        'Hoy levantamos la copa por [Nombre], agradeciendo la persona noble y valiente en la que te convertiste. No importa cuántos años cumplas, verte feliz sigue siendo nuestro mayor orgullo. ¡Muy feliz cumpleaños, salud!'
    },
    {
      etiqueta: 'Brindis para abuela o abuelo en reunión multigeneracional',
      texto:
        'Si hoy estamos todos sentados alrededor de esta mesa es gracias a [Nombre], que nos enseñó a cuidar a la familia y a recibir siempre con afecto. Brindamos por tu salud y por muchos almuerzos más juntos. ¡Salud!'
    },
    {
      etiqueta: 'Brindis de hermano o hermana (mezcla de humor y emoción)',
      texto:
        'Crecimos discutiendo por el control remoto, pero hoy no cambiaría por nada tenerte como hermano/a. Gracias por aparecer siempre cuando hace falta de verdad. ¡Feliz cumple, [Nombre], levantemos las copas!'
    },
    {
      etiqueta: 'Brindis laboral breve en almuerzo de oficina',
      texto:
        'Dos palabras rápidas para celebrar a [Nombre]: gracias por el profesionalismo y por hacer más ameno el día a día del equipo. Te deseamos un gran año personal y muchos éxitos. ¡Salud!'
    },
    {
      etiqueta: 'Brindis para cumpleaños de 30 o 40 años con amigos',
      texto:
        'Llegar a los [30/40] con esta mesa llena de gente que te quiere dice todo sobre quién sos, [Nombre]. Por lo que ya lograste, por las risas que nos quedan y por un año liviano y feliz. ¡Salud!'
    },
    {
      etiqueta: 'Cierre de brindis ultracorto (15 segundos para tímidos)',
      texto:
        'Solo quiero decir gracias por estar hoy celebrando a [Nombre]. Te queremos mucho y deseamos que este año te traiga salud, paz y planes hermosos. ¡Arriba las copas!'
    }
  ],
  'como-felicitar-por-whatsapp-sin-sonar-automatico': [
    {
      etiqueta: 'WhatsApp para amigo con propuesta de plan concreto',
      texto:
        '¡Muy feliz cumple, [Nombre]! 🎂 Que tengas un día tremendo. Cuando pase el festejo avisame qué tarde te queda libre así te invito un café y brindamos como corresponde.'
    },
    {
      etiqueta: 'WhatsApp de mediodía si no pudiste escribir temprano',
      texto:
        '¡Hola [Nombre], feliz cumpleaños! Espero que ya hayas arrancado el día con mimos y buena comida. Te mando un abrazo grande y mis mejores deseos para este año nuevo tuyo.'
    },
    {
      etiqueta: 'WhatsApp para familiar con quien hablás poco en el año',
      texto:
        '¡Hola [Nombre]! Qué alegría saludarte hoy en tu cumpleaños. Ojalá estés muy bien junto a [familia/hijos]; te deseo mucha salud y un lindo festejo. ¡Abrazo grande!'
    },
    {
      etiqueta: 'WhatsApp para acompañar un audio corto de 20 segundos',
      texto:
        '¡Feliz vuelta al sol, [Nombre]! Te dejé un audio cortito arriba porque hoy merecías saludo con voz y no solo texto. ¡Disfrutá mucho tu día!'
    },
    {
      etiqueta: 'WhatsApp para cumpleaños de compañero de facultad o curso',
      texto:
        '¡Feliz cumple, [Nombre]! Que hoy desconectes un poco de los apuntes y festejes a lo grande. ¡Éxitos totales en las materias y en este nuevo año!'
    },
    {
      etiqueta: 'WhatsApp nocturno para cerrar el día del agasajado',
      texto:
        'Antes de que termine tu día quería pasar a saludarte con calma, [Nombre]: ¡muy feliz cumpleaños! Ojalá hoy te hayas sentido súper querido/a. Que empieces un gran año.'
    },
    {
      etiqueta: 'WhatsApp breve para vecino o conocido cordial',
      texto:
        '¡Muy feliz cumpleaños, [Nombre]! Que pases un excelente día junto a tu familia y que este nuevo año venga con mucha salud y buenas noticias.'
    }
  ],
  'ideas-para-cumpleanos-de-18-anos-regalos-y-dedicatorias': [
    {
      etiqueta: 'Mensaje de hermano mayor o hermana mayor por los 18',
      texto:
        '¡Bienvenida la mayoría de edad, [Nombre]! Qué orgullo ver en quién te estás convirtiendo. Ahora vienen decisiones nuevas, viajes y libertad: acordate siempre que contás conmigo para festejar y para pensar en voz alta.'
    },
    {
      etiqueta: 'Dedicatoria de abuelos para nieto o nieta de 18 años',
      texto:
        'Querido/a [Nombre], parece ayer que te llevábamos de la mano y hoy cumplís 18 años. Deseamos que nunca pierdas tu corazón noble, tu curiosidad y las ganas de aprender. Te abrazamos con todo orgullo.'
    },
    {
      etiqueta: 'Saludo para acompañar regalo de viaje o valija a los 18',
      texto:
        '¡Felices 18, [Nombre]! Este regalo es una invitación a animarte a conocer lugares nuevos y abrir tus propios caminos. Buen viaje en esta nueva etapa de tu vida.'
    },
    {
      etiqueta: 'Tarjeta de pareja joven en los 18 años',
      texto:
        '¡Felices 18, amor! Qué lindo acompañarte justo en este comienzo lleno de proyectos, facultad y sueños nuevos. Gracias por hacer cada plan más divertido; vamos por todo este año.'
    },
    {
      etiqueta: 'Mensaje de docente, entrenador o mentor por sus 18',
      texto:
        '¡Feliz cumpleaños número 18, [Nombre]! Fue un gusto ver tu crecimiento y constancia en estos años. Que esta nueva etapa te encuentre valiente, curioso/a y fiel a tus valores.'
    },
    {
      etiqueta: 'Frase corta para foto o historia de 18 años',
      texto:
        '¡Llegaron los 18, [Nombre]! 🎉 Brindo por tu libertad, tus proyectos nuevos y todas las risas que nos quedan por vivir.'
    },
    {
      etiqueta: 'Dedicatoria junto a llaves, agenda o detalle de independencia',
      texto:
        'Cumplir 18 es estrenar alas con responsabilidad y entusiasmo. Que cada puerta que abras a partir de hoy te acerque a la vida que soñás, [Nombre]. ¡Feliz cumpleaños!'
    }
  ],
  'como-celebrar-cumpleanos-de-50-anos-homenajes-y-palabras': [
    {
      etiqueta: 'Dedicatoria de pareja en los 50 años',
      texto:
        '¡Felices 50 años, mi amor! Llegás a medio siglo con una historia llena de esfuerzo, ternura y logros reales. Qué privilegio celebrar esta década redonda a tu lado y seguir planeando viajes y domingos tranquilos.'
    },
    {
      etiqueta: 'Saludo de hermano o hermana por sus 50',
      texto:
        '¡Medio siglo juntos en esta vida, [Nombre]! Entre recuerdos de la casa de la infancia y los desafíos de hoy, sos uno de mis pilares más firmes. Que tus 50 traigan salud, calma y mucho disfrute.'
    },
    {
      etiqueta: 'Palabras para placa o video homenaje de 50 años',
      texto:
        'Cincuenta años se miden mejor en abrazos que en calendario: en las personas que ayudaste, las mesas que llenaste de risas y el ejemplo honesto que dejás cada día. ¡Felices 50, [Nombre]!'
    },
    {
      etiqueta: 'Mensaje breve con humor amable para los 50',
      texto:
        '¡Bienvenido/a al club de los 50, [Nombre]! La edad exacta en la que ya sabés qué te hace bien, con quién vale la pena brindar y dónde está el mejor vino. ¡A festejar sin apuro!'
    },
    {
      etiqueta: 'Dedicatoria de sobrinos o familia extendida',
      texto:
        'Querido/a [Tío/Tía Nombre], ¡felices 50 años! Gracias por tu generosidad constante y por tener siempre una anécdota o consejo justo. Deseamos que esta nueva década sea la más disfrutada de todas.'
    },
    {
      etiqueta: 'Nota para libro de firmas en fiesta de 50 años',
      texto:
        '[Nombre], gracias por invitarnos a celebrar tus 50. Me llevo guardado el recuerdo de [anécdota compartida] y el deseo sincero de que los próximos cincuenta sigan llenos de salud y buena compañía.'
    },
    {
      etiqueta: 'Saludo con fe y gratitud para los 50 años',
      texto:
        'Damos gracias a Dios por tus 50 años de vida, [Nombre], y por la huella generosa que sembraste en tu familia y amigos. Que el Señor te conceda salud firme y serenidad en esta hermosa etapa.'
    }
  ],
  'que-escribir-en-cumpleanos-de-abuelos-con-ternura': [
    {
      etiqueta: 'Mensaje de hijo o hija a su mamá/papá en rol de abuelo',
      texto:
        '¡Feliz cumpleaños, [Mamá/Papá]! Verte disfrutar a tus nietos con esa paciencia y esa sonrisa me emociona todos los días. Gracias por ser raíz firme para toda nuestra familia.'
    },
    {
      etiqueta: 'Dedicatoria corta de nieto chico (para escribir con letra grande)',
      texto:
        '¡Feliz cumple, abue [Nombre]! Te quiero hasta el cielo gracias por jugar conmigo y hacer la mejor [comida favorita]. Te mando mil besos. — [Nombre del nieto]'
    },
    {
      etiqueta: 'Saludo a la distancia para abuela o abuelo',
      texto:
        'Abue querido/a, aunque hoy estemos lejos físicamente, en tu cumpleaños pienso en tus abrazos y en nuestras charlas en la cocina. Apenas viaje, nos debemos una tarde entera de mates y fotos.'
    },
    {
      etiqueta: 'Tarjeta para acompañar flores o comida casera para abuelos',
      texto:
        'Trajimos este detalle pensado para mimarte un poquito en tu día, abue [Nombre]. Gracias por haber cuidado siempre de todos nosotros; hoy te toca descansar y disfrutar.'
    },
    {
      etiqueta: 'Dedicatoria para abuelo o abuela que cumple 80 o 90 años',
      texto:
        '¡Felices [80/90] años, abue [Nombre]! Celebrar tu vida es celebrar la historia entera de nuestra familia. Gracias por tu ejemplo, tu humor y la calidez con la que nos reunís siempre.'
    },
    {
      etiqueta: 'Mensaje con bendición cristiana para abuelos',
      texto:
        'Abue [Nombre], le pedimos a Dios que cuide cada día tu salud, te regale tranquilidad y nos permita seguir disfrutando de tus cuentos y tu cariño por muchos años más. ¡Feliz cumpleaños!'
    },
    {
      etiqueta: 'Texto para regalar un portarretratos familiar',
      texto:
        'Para que nos tengas siempre cerquita en tu mesa de luz: gracias por enseñarnos lo que significa querer bien en familia. ¡Muy feliz cumpleaños, abue [Nombre]!'
    }
  ],
  'como-felicitar-a-una-embarazada-en-su-cumpleanos': [
    {
      etiqueta: 'Mensaje de mamá o hermana celebrando su nueva etapa',
      texto:
        '¡Feliz cumpleaños, [Nombre]! Qué hermoso verte brillar en este año tan especial. Antes que nada, hoy celebramos la mujer maravillosa que sos; deseamos que recibas mimos, descanso y mucha calma.'
    },
    {
      etiqueta: 'Saludo breve de compañera de trabajo o amiga',
      texto:
        '¡Muy feliz cumple, [Nombre]! Hoy el festejo es 100% para vos: que te consientan mucho, comas tu torta favorita sin apuro y disfrutes esta etapa tan única con tranquilidad.'
    },
    {
      etiqueta: 'Tarjeta para acompañar un regalo de autocuidado (crema, bata, masaje)',
      texto:
        'Para [Nombre], pensado exclusivamente para vos: un ratito de descanso y mimo propio en medio de tantos preparativos. ¡Feliz cumpleaños y un año lleno de amor!'
    },
    {
      etiqueta: 'Saludo con humor tierno para amiga embarazada',
      texto:
        '¡Feliz cumple, [Nombre]! Este año tenés permiso oficial de comer doble porción de torta y elegir vos el plan sentado más cómodo de todos. ¡Te queremos mucho!'
    },
    {
      etiqueta: 'Dedicatoria de tíos, suegros o familia política',
      texto:
        'Querida [Nombre], ¡muy feliz cumpleaños! Celebramos tu vida con enorme cariño y te deseamos un año sereno, lleno de salud y alegría mientras esperamos juntos la llegada del bebé.'
    },
    {
      etiqueta: 'Mensaje con bendición para embarazada en su día',
      texto:
        '[Nombre], en tu cumpleaños pedimos a Dios que te cubra de paz, cuide tu salud y bendiga este nuevo capítulo que estás gestando con tanto amor. ¡Muy feliz vuelta al sol!'
    },
    {
      etiqueta: 'Nota breve para desayuno o merienda sorpresa en casa',
      texto:
        'Hoy no movés un dedo, [Nombre]: desayuno listo, flores frescas y todo el día para disfrutar a tu ritmo. ¡Muy feliz cumpleaños a la futura mamá más luminosa!'
    }
  ],
  'frases-de-cumpleanos-graciosas-sin-incomodar': [
    {
      etiqueta: 'Humor blanco sobre la torta y los deseos',
      texto:
        '¡Feliz cumpleaños, [Nombre]! No vamos a contar las velas porque no tenemos presupuesto para extintor, pero sí vamos a celebrar en grande. ¡Guardame la porción con más dulce de leche!'
    },
    {
      etiqueta: 'Chiste cómplice para pareja en su día',
      texto:
        '¡Feliz cumple, amor! Como regalo oficial de hoy tenés derecho a elegir película, comida y temperatura del aire sin negociación. Aprovechá que vence a medianoche. Te amo.'
    },
    {
      etiqueta: 'Humor liviano para hermano o hermana',
      texto:
        '¡Feliz cumple, [Nombre]! Otro año confirmando que sos casi tan genial como tu hermano/a (casi). Gracias por las risas de siempre; hoy invito el brindis.'
    },
    {
      etiqueta: 'Frase graciosa apta para papá o mamá con buena onda',
      texto:
        '¡Feliz cumple, [Papá/Mamá]! Dicen que con los años uno gana sabiduría y se vuelve más paciente... ¡qué suerte que vos ya venías con ventaja! Te queremos muchísimo.'
    },
    {
      etiqueta: 'Humor amable para cumpleañero fanático del café o mate',
      texto:
        '¡Feliz vuelta al sol, [Nombre]! Que este año nuevo traiga salud, paz mental y que nunca se te enfríe el [café/mate] ni se corte el Wi-Fi en medio de una serie buena.'
    },
    {
      etiqueta: 'Saludo chispeante para amigo que cumple 30 o 40',
      texto:
        '¡Felices [30/40], [Nombre]! Oficialmente entraste en la edad en la que estrenar una buena almohada emociona más que salir hasta las 6 AM. ¡Igual hoy brindamos como campeones!'
    },
    {
      etiqueta: 'Mensaje divertido para colega de oficina con confianza',
      texto:
        '¡Feliz cumple, [Nombre]! Hoy el equipo vota por unanimidad cero reuniones innecesarias y permiso legal para cortar antes con factura y café. ¡Que tengas un gran año!'
    }
  ]
};
