# -*- coding: utf-8 -*-
from scripts.generator_core import build_relationship

def get_hijo():
    titles = [
        "Nuestras tardes jugando al fútbol en el patio", "Verte tomar tus propias decisiones con madurez", "El orgullo de verte convertido en un hombre de bien",
        "Nuestras charlas de hombre a hombre en el auto", "Tu sentido del humor que desarma cualquier mal día", "Aprender a respetar tus tiempos y tus silencios",
        "Tu perseverancia cuando algo te costaba aprenderlo", "El valor de tu palabra y tu nobleza de carácter", "Tus primeros logros escolares celebrados con abrazos",
        "Verte cuidar y proteger a los tuyos con lealtad", "La complicidad en los arreglos de la casa", "Saber que siempre tenés un hogar al que regresar",
        "Tu generosidad con tus amigos y compañeros", "El brillo de tus ojos cuando descubrís una pasión", "Aprender de tu energía y tus ganas de comerte el mundo",
        "Tu honestidad para decir la verdad sin rodeos", "El orgullo inmenso de llevar mi sangre y mi apellido", "Verte superar caídas y levantarte con dignidad",
        "Nuestros asados compartidos junto al fuego", "Tu lealtad inquebrantable a los valores de la familia", "Los recuerdos dorados de tus carreras de chiquito",
        "Tu paciencia para explicarme cosas de tecnología", "La satisfacción de verte trabajar por tus sueños", "Tu temple sereno en los momentos complicados",
        "El abrazo apretado con el que me saludás siempre", "Verte forjar tu propio destino con honestidad", "Tu respeto por los mayores y por el trabajo ajeno",
        "Nuestras charlas sobre el futuro y la vida", "La alegría de recibir tus mensajes y tus fotos", "Tu vocación que ejercés con tanta dedicación",
        "Aprender a soltarte para que descubras tu camino", "Tu hombría de bien demostrada en los hechos", "La paz de saber que sos un hombre íntegro",
        "Tus sueños que son mi mayor motivo de orgullo", "El recuerdo de cuando te enseñaba a andar en bici", "Tu humildad frente al éxito y a los logros",
        "Celebrar tu cumpleaños como la mayor bendición", "Tu risa franca que ilumina cualquier reunión", "El lazo indestructible que une a padre e hijo",
        "Verte construir tu vida paso a paso con esfuerzo", "Tu capacidad para superar adversidades con calma", "El valor de tu esfuerzo diario en tus proyectos",
        "Nuestras tardes de cancha gritando los goles", "Tu corazón noble que siempre busca ayudar", "La dicha de haberte visto nacer y crecer",
        "Tus metas alcanzadas que festejo como propias", "El respeto mutuo que supimos construir con los años", "Tu generosidad sin pedir nada a cambio",
        "Verte independiente, seguro y plantado en la vida", "Tu sensibilidad que nunca escondés con soberbia", "El orgullo de llamarme tu padre ante el mundo",
        "Tus anécdotas de juventud que me hacen reír", "El apoyo incondicional que siempre vas a tener de mí", "Tu rectitud moral en cada negocio o trabajo",
        "La emoción de verte superar a tus maestros", "Tus manos trabajadoras que construyen futuro", "La tranquilidad de verte feliz con tus elecciones",
        "Nuestras sobremesas largas hablando de proyectos", "Tu espíritu aventurero que no se conforma con poco", "El regalo más grande que la vida me dio",
        "Tu nobleza para pedir disculpas si te equivocás", "Verte ser un compañero leal y un amigo fiel", "El amor más profundo que un corazón puede guardar",
        "Tus triunfos que son el premio a mis desvelos", "La sabiduría que fuiste ganando con los años", "El refugio seguro de mi abrazo paternal",
        "Tus risas compartidas con tus hermanos", "Tu valentía para decir que no a lo que no te suma", "El orgullo de verte caminar con la frente en alto",
        "Nuestras caminatas matinales charlando sin prisa", "Tu compromiso con todo lo que emprendés", "La bendición de tener un hijo tan extraordinario",
        "Tus proyectos que despegan con fuerza y talento", "Tu fidelidad a tus raíces y a tu historia", "La calma de verte en paz con tu conciencia",
        "Tus abrazos que me devuelven las fuerzas", "Celebrar cada año de tu vida con infinita gratitud", "Tu corazón generoso que siempre tiene un lugar para otro",
        "Verte convertir los tropiezos en aprendizajes", "Tu ejemplo de disciplina y esfuerzo constante", "El honor inmenso de ser tu guía y tu amigo",
        "Tus palabras de aliento en mis días difíciles", "La madurez de tus pensamientos y tus actos", "Tu luz propia que brilla donde sea que vayas",
        "El orgullo imborrable que siento por vos", "La alegría de compartir un nuevo año a tu lado", "Un cumpleaños inolvidable para mi gran orgullo",
        "Brindo por tu felicidad eterna y tus éxitos"
    ]
    memories = [
        "Feliz cumpleaños, hijo querido. Me acuerdo con una sonrisa imborrable de aquellas tardes en el patio jugando al fútbol hasta que no se veía la pelota por la noche.",
        "¡Muy feliz cumpleaños, campeón! Todavía recuerdo el día que te pusiste la mochila por primera vez y me miraste con timidez pero decidido a entrar a la escuela.",
        "Hijo de mi alma, me emociona recordar nuestras primeras charlas de hombre a hombre en el auto, cuando empezabas a hacerme preguntas difíciles sobre el mundo.",
        "Feliz cumpleaños a mi gran orgullo. Nunca voy a olvidar tus nervios antes de tu primer partido oficial y el abrazo que nos dimos cuando saliste a la cancha.",
        "Hijo mío, verte crecer, madurar y asumir responsabilidades con tanta dignidad ha sido la experiencia más maravillosa y conmovedora de mi vida.",
        "¡Feliz cumpleaños, querido hijo! Me acuerdo de tus primeros intentos por reparar algo en casa y cómo no parabas hasta que las cosas quedaban bien hechas.",
        "Hijo querido, admiro profundamente la entereza con la que enfrentaste los momentos difíciles de tu adolescencia y cómo supiste forjar tu propio carácter.",
        "Feliz cumpleaños, mi orgullo. Cada vez que te veo sonreír y defender tus convicciones con respeto, reconozco la huella de los mejores valores de nuestra familia."
    ]
    lessons = [
        "De vos aprendí que la juventud no es solo una etapa biológica, sino una fuerza arrolladora capaz de desafiar límites y construir cosas hermosas.",
        "Tu capacidad para levantarte después de una frustración me enseñó el verdadero valor de la resiliencia y el coraje sereno.",
        "Verte tratar con respeto a todo el mundo y no creerte superior a nadie me demostró que la verdadera hombría radica en la nobleza y la decencia.",
        "Me enseñaste que educar a un hijo es aprender a escuchar más y juzgar menos, dándole espacio para que descubra quién quiere ser.",
        "A tu lado comprendí que el éxito no se mide por lo que se acumula, sino por la tranquilidad de caminar con la conciencia limpia y el corazón en paz.",
        "Tu pasión por aprender y superarte constantemente fue siempre el mayor estímulo para que yo fuera un mejor padre y una persona más paciente.",
        "De vos aprendí a mirar hacia adelante sin rencores y a ponerle buena cara y entusiasmo a los nuevos desafíos de la vida.",
        "Tu lealtad incondicional con tus amigos me demostró el valor inmenso de la palabra y el compromiso hacia los afectos verdaderos."
    ]
    grats = [
        "Gracias por haberme hecho el padre más orgulloso del planeta y por llenar cada rincón de mi vida con tu alegría y tu afecto.",
        "Agradezco cada mate compartido, cada charla sincera en la mesa y esa manera tan tuya de estar pendiente de mí cuando lo necesito.",
        "Gracias por tu nobleza de espíritu, por tu honestidad intachable y por haber honrado siempre el nombre de nuestra familia.",
        "Te doy las gracias por ser un hijo tan bueno, por tus abrazos sinceros y por la complicidad hermosa que supimos construir con los años.",
        "Gracias por haberme tenido paciencia en mis errores de crianza y por brindarme un cariño tan generoso, libre y respetuoso.",
        "Agradezco con toda mi alma tus mensajes diarios, tu sentido del humor y esa fuerza contagiosa con la que encaras cada proyecto.",
        "Gracias por ser un hombre de bien, trabajador y solidario, que no se olvida jamás de sus raíces ni de la gente que lo quiere.",
        "Te agradezco por permitirme ser testigo de tu crecimiento y por la satisfacción infinita de verte triunfar a tu manera."
    ]
    wishes = [
        "Deseo que este nuevo año te regale salud de hierro, proyectos exitosos y la alegría profunda de ver cumplidos tus mayores anhelos.",
        "Que la vida te abra caminos anchos, te proteja de las malas compañías y te premie con creces por tu esfuerzo constante.",
        "Brindo por tu hombría de bien, por tu futuro brillante y para que nunca olvides que en mi corazón siempre vas a tener un puerto seguro.",
        "Que este cumpleaños marque el inicio de una etapa llena de satisfacciones, madurez plena y momentos inolvidables junto a los tuyos.",
        "Te amo con todo mi corazón y deseo que seas inmensamente feliz, viviendo con dignidad y orgullo de la persona extraordinaria que sos.",
        "Que la salud, la sabiduría y la buena fortuna te acompañen en cada paso que des en este nuevo ciclo que empieza.",
        "Deseo que hoy disfrutes de tu día al máximo, rodeado de tus afectos y sabiendo que tu papá te admira y te quiere profundamente.",
        "Que nunca te falte la sonrisa franca en el rostro ni la seguridad de que tu familia siempre estará en primera fila aplaudiendo tus logros."
    ]
    return build_relationship("Un hijo", "hijo querido", memories, lessons, grats, wishes, titles)

def get_lejos():
    titles = [
        "Nuestras videollamadas que acortan los kilómetros", "El recuerdo de nuestras charlas en el banco de la plaza", "La nostalgia de los domingos compartidos en familia",
        "Saber que el cariño no depende de los husos horarios", "Tus audios de WhatsApp que me alegran la semana", "El aeropuerto y ese abrazo apretado en la despedida",
        "La valentía que tuviste para salir a buscar tu futuro", "Nuestros brindis a la distancia mirando la pantalla", "El mate solitario pensando en los momentos compartidos",
        "La certeza de que nuestra complicidad sigue intacta", "Las fotos que me mandás de tu nueva vida allá", "El orgullo de verte crecer y abrirte camino lejos",
        "Los recuerdos de la infancia que viajan en la memoria", "Aprender a querer sin la presencia física cotidiana", "El festejo a la distancia con una copa en la mano",
        "La emoción de contar los días para el próximo reencuentro", "Tus historias y anécdotas de adaptarte a otra cultura", "El amor que no se desgasta con las fronteras",
        "Saber que en mi casa siempre tenés tu lugar reservado", "Tu perseverancia para superar los momentos de soledad", "Nuestras risas por mensajes recordando viejas épocas",
        "La calidez de tu voz que borra cualquier lejanía", "El deseo profundo de darte ese abrazo postergado", "El valor de las raíces que nos mantienen unidos",
        "Tus logros en el exterior que festejo como propios", "La lealtad de un vínculo que trasciende los mapas", "Los paquetes y cartas con sabores que te hacen acordar a casa",
        "La admiración por tu coraje y tu espíritu pionero", "El pacto de encontrarnos y ponernos al día sin apuros", "Saber que estás presente en cada brindis familiar",
        "Tus consejos desde lejos que me ayudan a pensar", "El tiempo que vuela cuando nos ponemos a hablar", "La esperanza encendida de verte cruzar la puerta pronto",
        "La ternura que no conoce de fronteras ni aduanas", "Celebrar tu cumpleaños sintiéndote al lado mío", "Tu capacidad de construir hogar donde sea que vayas",
        "Nuestras charlas nocturnas coordinando los horarios", "El orgullo que me da hablar de vos a los amigos de acá", "La certeza de que la distancia nos unió todavía más",
        "Tus abrazos que guardo en la memoria para cuando vuelvas", "El recuerdo de tus comidas y tus chistes de entrecasa", "La fortaleza para bancar los días difíciles sin aflojar",
        "Un cumpleaños compartido con el corazón en la mano", "Los planes que ya estamos armando para cuando nos veamos", "Tu generosidad para estar presente a pesar de los miles de kilómetros",
        "El cariño fiel que no necesita explicaciones", "Verte triunfar en tierras lejanas con humildad", "Nuestras tradiciones familiares que mantenés vivas allá",
        "La emoción de recibir un mensaje tuyo en un día especial", "El puente invisible de amor que cruza cualquier océano", "La tranquilidad de saberte bien, seguro y querido",
        "Tus sueños que van tomando forma paso a paso", "El valor de la palabra que no se olvida con el tiempo", "Celebrar tu cumpleaños levantando una copa por vos",
        "La complicidad que se retoma en el primer segundo", "Tu nobleza que brilla en cualquier rincón del planeta", "La nostalgia dulce de los buenos momentos vividos",
        "El compromiso de no dejar que la rutina nos aleje", "Tu risa que suena tan cerca a través del parlante", "La bendición de tenerte en mi vida aunque no estés acá",
        "Los mates que nos vamos a tomar apenas llegues", "Tu madurez para enfrentar la vida lejos del nido", "El orgullo de verte representar nuestras raíces con altura",
        "Nuestras bromas internas que no necesitan traducción", "La certeza de que la distancia es solo geográfica y no afectiva", "El afecto profundo que se renueva en cada mensaje",
        "Tus historias de viaje y de gente nueva que conocés", "El refugio de los recuerdos compartidos en los días grises", "La alegría sincera por cada paso firme que das allá",
        "Un brindis con los ojos cerrados pensando en tu abrazo", "La constancia para cuidar este vínculo con tanto amor", "El valor de extrañar como prueba de un amor verdadero",
        "Tus llamadas sorpresa que me cambian el humor", "La entereza de tu corazón que no se deja quebrar", "Celebrar tu cumpleaños con la certeza del amor mutuo",
        "Los asados y sobremesas que nos esperan a tu regreso", "Tu generosidad para compartir tus experiencias lejanas", "La gratitud por tener un afecto tan leal y auténtico",
        "El orgullo de tu trayectoria valiente y honesta", "Nuestros silencios cómodos en la pantalla compartida", "La alegría inmensa de celebrar tu existencia hoy",
        "Un cumpleaños lleno de bendiciones y buenos augurios", "El abrazo que traspasa cualquier pantalla y frontera", "La promesa de festejar juntos muy pronto",
        "Brindo por vos, por tus sueños y por nuestro reencuentro"
    ]
    memories = [
        "Feliz cumpleaños, hermano del alma. Me acuerdo de nuestras tardes interminables charlando de todo y de ese último café antes de que te subieras al avión.",
        "¡Muy feliz cumpleaños a la distancia! Todavía recuerdo el abrazo apretado en la terminal y la promesa mutua de que los kilómetros jamás iban a enfriar nuestro cariño.",
        "Querido amigo, me vienen a la memoria tantos asados y reuniones compartidas que hoy me parece increíble tener que saludarte a través de una pantalla.",
        "Feliz cumpleaños a alguien que extraño todos los días. Nunca voy a olvidar tus palabras de despedida y el coraje con el que armaste tus valijas para buscar tu propio destino.",
        "A pesar de los husos horarios y las fronteras, hoy celebro tu cumpleaños recordando las risas y las complicidades que hicieron única nuestra historia.",
        "¡Feliz cumpleaños, querido mío! Me acuerdo de cuando soñábamos con viajar y conocer el mundo, y verte hoy establecido allá me llena de orgullo y emoción.",
        "Querida mía, cada vez que veo una foto de los lugares hermosos donde estás viviendo, me alegro de corazón por tu valentía para empezar de nuevo.",
        "Feliz cumpleaños. No hay reunión familiar en la que no te nombremos, no contemos una anécdota tuya y no brindemos pensando en tu regreso."
    ]
    lessons = [
        "De vos aprendí que los lazos verdaderos no dependen de la cercanía física, sino de la lealtad y la constancia con la que se cuida el recuerdo del otro.",
        "Tu coraje para salir de la zona de confort y construirte una vida desde cero en un lugar nuevo me demostró lo que significa la verdadera valentía.",
        "Me enseñaste que la distancia es una prueba de fuego que purifica los afectos y nos hace valorar los momentos sencillos que antes dábamos por sentado.",
        "A tu lado comprendí que la nostalgia no tiene por qué ser amarga si se transforma en el combustible para soñar con el próximo abrazo.",
        "Tu perseverancia para sobreponerte a la soledad de los primeros meses me dio una lección inolvidable de entereza, temple y madurez.",
        "De vos aprendí a mantener viva la memoria de nuestras raíces y a sentirme orgulloso de lo que somos sin importar el lugar donde estemos parados.",
        "Nuestras charlas a la distancia me demostraron que cuando hay cariño sincero, dos personas pueden retomar la conversación exactamente donde la dejaron.",
        "Tu generosidad para seguir presente en la vida de los tuyos a pesar de tus propias obligaciones me enseñó el verdadero valor de la lealtad familiar."
    ]
    grats = [
        "Gracias por seguir siendo ese refugio incondicional al que siempre puedo acudir con un mensaje o un audio cuando necesito desahogarme.",
        "Agradezco cada videollamada compartida, cada foto de tu día a día y esa manera tan tuya de hacerme sentir que estás acá a la vuelta de la esquina.",
        "Gracias por tu amistad leal, por no haberte olvidado de tus amigos de siempre y por el amor con el que cuidás nuestras raíces comunes.",
        "Te doy las gracias por inspirarme con tu ejemplo de lucha cotidiana y por demostrarme que con esfuerzo y decencia se pueden conquistar nuevos horizontes.",
        "Gracias por los recuerdos entrañables de nuestra infancia compartida que atesoro como un amuleto contra los malos días.",
        "Agradezco de todo corazón que te hagas un tiempo en tu rutina para saber cómo estoy y para compartir conmigo tus alegrías y preocupaciones.",
        "Gracias por ser una persona tan noble, honesta y transparente que deja bien alto el nombre de nuestra tierra donde sea que camina.",
        "Te agradezco por ese abrazo invisible que me mandás en cada mensaje y por la certeza de saber que contamos el uno con el otro sin condiciones."
    ]
    wishes = [
        "Deseo que este nuevo año te traiga salud de hierro, estabilidad plena y la concreción de cada una de las metas por las que tanto trabajás.",
        "Que la vida en tu nuevo hogar sea amable, te rodee de personas buenas y te recompense con creces por todo el sacrificio de estar lejos.",
        "Brindo a la distancia por tu felicidad, por tu paz interior y para que el calendario nos regale muy pronto ese reencuentro tan soñado.",
        "Que este cumpleaños esté colmado de llamadas afectuosas, mensajes llenos de amor y la certeza absoluta de que acá se te extraña y se te ama.",
        "Te mando un abrazo que cruza mares y continentes y deseo que hoy sientas en el pecho todo el calor de quienes nunca te olvidamos.",
        "Que nunca te falten la salud, el trabajo digno ni la sonrisa esperanzada que siempre te caracterizó frente a cualquier desafío.",
        "Deseo que hoy disfrutes de tu día al máximo, que te des un gusto grande y que sepas que en cada mesa familiar hay una copa levantada por vos.",
        "Que la vida te conceda un año brillante, lleno de buenas noticias y con la promesa firme de fundirnos pronto en un abrazo interminable."
    ]
    return build_relationship("Alguien que está lejos", "querido mío", memories, lessons, grats, wishes, titles)

def get_hermano():
    titles = [
        "Nuestras peleas por el control remoto de chicos", "El pacto de silencio para que mamá no se enterara", "Compartir la misma pieza y las charlas nocturnas",
        "El orgullo de verte crecer y defender lo tuyo", "Saber que ante cualquier problema siempre estás ahí", "Nuestros códigos que nadie más en el mundo entiende",
        "Los recuerdos imborrables de nuestras vacaciones familiares", "Tu sentido del humor que desarma cualquier drama", "La lealtad indestructible que nos une como hermanos",
        "Aprender a compartir lo poco que teníamos en casa", "Nuestras salidas de adolescentes cuidándonos las espaldas", "El respeto mutuo que supimos construir como adultos",
        "Tus consejos sinceros que me bajaron a la tierra", "La tranquilidad de tener un aliado de sangre incondicional", "Reírnos de las mismas anécdotas en cada fiesta familiar",
        "Tu perseverancia para alcanzar tus metas con esfuerzo", "El agradecimiento por haber sido mi primer compañero de juegos", "Verte armar tu propia familia con tanta nobleza",
        "Nuestros mates compartidos hablando de la vida", "La complicidad en las miradas cuando alguien dice una tontería", "Tu valentía para encarar los momentos difíciles",
        "Los juguetes compartidos y las tardes en la vereda", "Saber que con vos no necesito poner caretas ni fingir nada", "Tu corazón generoso que siempre tiene una mano para mí",
        "El orgullo de llamarme tu hermano ante quien sea", "Nuestras charlas sobre papá y mamá con tanto cariño", "La seguridad de que nuestro lazo no se desgasta con nada",
        "Tus logros personales que festejo con el alma", "La memoria viva de nuestra niñez que late en vos", "Aprender a pedirnos perdón y darnos un abrazo",
        "Tu hombría de bien y tu conducta intachable", "Celebrar tu cumpleaños como la fiesta de nuestra historia", "Los partidos de fútbol o videojuegos gritados con pasión",
        "Tu oído paciente cuando necesité desahogarme", "El refugio seguro que siempre representás en mi vida", "Tu madurez para manejar los problemas familiares",
        "Las risas compartidas que nos hacen llorar de alegría", "La certeza de que pase lo que pase somos equipo", "Tus palabras justas en los momentos de confusión",
        "El afecto sincero que no necesita de protocolos", "Verte triunfar en tu trabajo con tanta dedicación", "Nuestras diferencias que nos enseñaron a respetarnos",
        "El mate amargo de las mañanas recordando viejas épocas", "Tu protección silenciosa en los años difíciles", "La dicha de saber que envejeceremos con esta complicidad",
        "Tus sueños que sigo de cerca con admiración", "El valor de la palabra empeñada que heredamos en casa", "Un abrazo de hermano que vale más que mil discursos",
        "La alegría de verte disfrutar de tus pasiones", "Nuestras sobremesas largas riéndonos de nosotros mismos", "El honor inmenso de compartir el mismo origen",
        "Tu generosidad para compartir tus cosas con desinterés", "La calma que me da saberte sano y bien acompañado", "Tus anécdotas que nunca faltan en ninguna reunión",
        "La complicidad intacta a pesar del paso de los años", "El cariño de sangre que trasciende cualquier discusión", "Celebrar tu vida con una copa bien en alto",
        "Tus bromas que me cambian el humor en un minuto", "La certeza de que siempre seremos los chicos de mamá", "Tu fortaleza serena ante las tormentas de la vida",
        "El orgullo de ver la clase de hombre recto que sos", "Nuestros viajes juntos que guardo como tesoros", "La lealtad que no se compra ni se vende con nada",
        "Tus abrazos apretados en los momentos importantes", "Aprender de tu practicidad para resolver situaciones", "La bendición de haber nacido en la misma casa que vos",
        "Tus éxitos que me llenan el pecho de satisfacción", "El pacto de cuidarnos siempre sin importar la edad", "La alegría de verte sonreír con tranquilidad",
        "Nuestras caminatas poniéndonos al día de todo", "Tu nobleza que no conoce de mezquindades ni envidias", "El cariño incondicional que nos une para siempre",
        "Tus proyectos que despegan con talento y empuje", "La memoria compartida que nadie nos puede sacar", "Celebrar tu cumpleaños con la gratitud de ser hermanos",
        "Tu apoyo silencioso que nunca me faltó jamás", "La dicha de saber que siempre puedo tocar tu puerta", "Un año nuevo lleno de bendiciones para mi hermano",
        "Brindo por vos, por nuestra sangre y por nuestra historia"
    ]
    memories = [
        "Feliz cumpleaños, hermano querido. Me acuerdo como si fuera ayer de cuando nos peleábamos por el control remoto de la tele y a los cinco minutos estábamos jugando juntos a la pelota.",
        "¡Muy feliz cumpleaños, hermano de mi vida! Todavía me río recordando nuestras complicidades para que papá y mamá no se enteraran de las macanas que nos mandábamos en el barrio.",
        "Hermano, cuántas noches nos quedamos despiertos en la misma pieza hablando de música, de sueños y de cómo nos imaginábamos el futuro cuando fuéramos grandes.",
        "Feliz cumpleaños a mi primer y mejor amigo. Nunca voy a olvidar aquellas tardes de lluvia en las que armábamos fuertes con frazadas en el living y nos sentíamos invencibles.",
        "Hermano querido, verte crecer, madurar y encarar la vida con tanta entereza me llena de un orgullo tan grande que no cabe en palabras.",
        "¡Feliz cumpleaños, compinche de toda la vida! Me acuerdo de nuestras salidas de adolescentes, cuidándonos las espaldas y compartiendo hasta las monedas para el colectivo.",
        "Hermano del alma, qué emoción me da mirar hacia atrás y darnos cuenta de que a pesar de los años y las responsabilidades, seguimos siendo los mismos compinches de siempre.",
        "Feliz cumpleaños. No hay nadie en este mundo que entienda mejor mis silencios, mis mañas y mi historia que vos, porque compartimos las mismas raíces y el mismo hogar."
    ]
    lessons = [
        "De vos aprendí que la hermandad es el único pacto que no se vence con el tiempo, con la distancia ni con las diferencias de opiniones.",
        "Tu manera frontal de decirme las verdades cuando me equivoqué me enseñó el valor de la lealtad honesta, esa que cuida y no adula.",
        "Verte trabajar con constancia para superarte día a día me dio una lección imborrable sobre el valor del esfuerzo y la perseverancia.",
        "Me enseñaste que perdonar rápido y no guardar rencores familiares es el secreto para vivir en paz y mantener unida la mesa de los domingos.",
        "A tu lado comprendí que tener un hermano es tener un cómplice para toda la vida, alguien con quien no hace falta fingir para ser aceptado.",
        "Tu sentido del humor ante los problemas cotidianos me enseñó a no ahogarme en un vaso de agua y a buscarle siempre el lado amable a las cosas.",
        "De vos aprendí la generosidad de compartir lo propio sin mezquindades, una virtud que heredamos en casa y que vos practicás a la perfección.",
        "Tu valentía para encarar tus propios proyectos me demostró que nunca hay que conformarse con lo fácil y que vale la pena apostar por los sueños."
    ]
    grats = [
        "Gracias por haber sido mi compañero incondicional desde la cuna y por estar siempre listo para bancarme en cualquier parada difícil.",
        "Agradezco cada risa compartida, cada asado juntos y esa certeza absoluta de que puedo llamarte a cualquier hora sabiendo que vas a estar ahí.",
        "Gracias por tu nobleza de corazón, por cuidar a la familia con tanta entrega y por ser un hermano con el que da gusto caminar la vida.",
        "Te doy las gracias por haberme defendido de chico, por tus consejos de grande y por el orgullo inmenso de compartir tu sangre y tu apellido.",
        "Gracias por tus abrazos apretados en las despedidas, por tu alegría contagiosa y por hacer de nuestra relación un refugio seguro y sincero.",
        "Agradezco con toda mi alma que seas mi hermano, mi compinche y ese cable a tierra que siempre me ayuda a recordar de dónde vengo.",
        "Gracias por no juzgarme jamás, por escuchar mis penas con respeto y por festejar cada uno de mis logros como si fueran tuyos.",
        "Te agradezco infinitamente por ser ese hombre recto, trabajador y generoso que honra todos los días las enseñanzas de nuestros padres."
    ]
    wishes = [
        "Deseo que este nuevo año te regale salud de roble, éxitos merecidos en tu trabajo y la alegría profunda de ver crecer tus proyectos.",
        "Que la vida te abra puertas generosas, te libre de malos tragos y te devuelva con creces toda la nobleza que sembrás a tu paso.",
        "Brindo por tu vida, por tus metas cumplidas y para que nunca te falte la sonrisa en la cara ni la paz en el corazón.",
        "Que este cumpleaños marque el inicio de una etapa llena de satisfacciones, buenos encuentros y momentos inolvidables junto a los que amás.",
        "Te quiero con todo mi corazón, hermano, y deseo que hoy te sientas tan querido, festejado y valorado como verdaderamente merecés.",
        "Que la salud, la tranquilidad mental y la buena estrella te acompañen en cada paso de este nuevo ciclo que estás comenzando.",
        "Deseo que hoy disfrutes de tu día al máximo, comiendo algo rico y brindando por todo lo hermoso que construiste con tu esfuerzo.",
        "Que la vida nos conceda muchos años más para seguir compartiendo sobremesas, anécdotas viejas y la alegría inmensa de sabernos hermanos."
    ]
    return build_relationship("Un hermano", "hermano querido", memories, lessons, grats, wishes, titles)

def get_primo():
    titles = [
        "Las vacaciones de verano en la casa de los abuelos", "La mesa de los chicos en las fiestas de fin de año", "Nuestras complicidades y secretos familiares",
        "El primer amigo que la sangre me regaló", "Las travesuras en el patio durante las sobremesas", "Saber que al vernos el tiempo no pasó",
        "Nuestras risas por las manías de los tíos", "El valor de crecer juntos compartiendo la infancia", "Tus consejos sinceros en momentos de duda",
        "La alegría de encontrarnos en cada reunión familiar", "Nuestras escapadas y salidas de juventud", "La complicidad generacional que nos une para siempre",
        "Tu sentido del humor que alegra cualquier asado", "El orgullo de verte crecer y armar tu camino", "Los recuerdos dorados de nuestras navidades de antes",
        "Compartir anécdotas que solo nosotros entendemos", "Tu generosidad y tu buena onda constante", "La certeza de tener un hermano de otra casa",
        "Celebrar tus logros personales como propios", "Nuestras charlas poniéndonos al día sin apuros", "El lazo de sangre fortalecido por la amistad elegida",
        "Los juegos en la vereda hasta que caía la noche", "Tu nobleza que brilla en tu forma de ser", "El abrazo apretado al volver a vernos",
        "Tus bromas que siempre descontracturan las reuniones", "La memoria familiar viva en nuestras historias", "Saber que siempre puedo contar con tu apoyo",
        "Verte triunfar en tus proyectos con tanta dedicación", "Nuestras sobremesas largas con café y anécdotas", "El afecto sincero que no necesita de protocolos",
        "Aprender de tu energía positiva y tu empuje", "La tranquilidad de tener un primo leal y presente", "Los veranos en la pileta o en el río",
        "Tu corazón noble que no guarda rencores", "Celebrar tu cumpleaños con una copa en alto", "Nuestras salidas compartiendo amigos y música",
        "El respeto mutuo que construimos con los años", "Tu madurez para encarar los desafíos de la vida", "La alegría de ver crecer a nuestras familias a la par",
        "Tus palabras de aliento cuando las cosas se complican", "El pacto silencioso de cuidarnos entre primos", "Los recuerdos entrañables de nuestros abuelos",
        "Tu capacidad para hacer amigos donde sea que vayas", "La dicha de saber que esta complicidad es para siempre", "Tus éxitos que festejo con el corazón abierto",
        "El mate compartido en una tarde de domingo", "Tu fidelidad a la familia y a tus orígenes", "Un cumpleaños especial para un primo de oro",
        "Nuestras risas por fotos viejas con peinados raros", "La certeza de que la distancia no enfría nuestro cariño", "Tu lealtad inquebrantable en las buenas y en las malas",
        "Aprender a valorar los momentos sencillos de familia", "Tu presencia que siempre suma alegría a la mesa", "El orgullo de compartir la misma sangre y valores",
        "Tus anécdotas que nunca fallan en hacernos reír", "La complicidad para escaparnos a charlar tranquilos", "Un lazo de afecto puro que resiste el paso del tiempo",
        "Tus metas cumplidas que me llenan de satisfacción", "El valor de mantener vivas las tradiciones familiares", "Celebrar tu vida con un brindis lleno de cariño",
        "Tu empuje para salir adelante ante cualquier tropiezo", "La tranquilidad de saberte feliz y bien plantado", "Nuestros abrazos que resumen años de historia común",
        "Tu sentido de la responsabilidad y el trabajo honesto", "La dicha de haber compartido una infancia tan feliz", "Tus chistes de entrecasa que nunca pasan de moda",
        "El respeto y la admiración que siento por tu camino", "Saber que siempre hay un lugar para vos en mi casa", "Tu corazón generoso que siempre piensa en los demás",
        "Nuestras charlas sobre el paso de los años y el futuro", "El agradecimiento a la vida por tenerte como primo", "Un año nuevo repleto de proyectos luminosos para vos",
        "La alegría de seguir sumando anécdotas juntos", "Tu bondad natural que se nota en cada gesto", "Celebrar tu cumpleaños como se festeja a los grandes",
        "El lazo fraterno que supimos cultivar con cariño", "Tu ejemplo de perseverancia y optimismo diario", "Brindo por tu salud, por tus sueños y por nuestra unión"
    ]
    memories = [
        "¡Feliz cumpleaños, primo querido! Me acuerdo como si fuera ayer de aquellos veranos interminables en la casa de los abuelos, jugando en el patio hasta que nos llamaban a cenar.",
        "¡Muy feliz cumple, compinche! Todavía me río acordándome de cuando nos sentaban en la mesa de los chicos en las fiestas familiares y nos complotábamos para hacer travesuras.",
        "Primo de mi corazón, qué lindo es recordar nuestras tardes de bicicleta en el barrio y esas charlas donde nos contábamos los primeros secretos y proyectos de juventud.",
        "Feliz cumpleaños a mi primer amigo de la vida. Nunca voy a olvidar las tardes de pileta, los partidos improvisados y la alegría pura que teníamos cuando nos encontrábamos.",
        "Primo querido, verte crecer, formar tu propio camino y encarar la vida con tanta garra es un motivo de orgullo inmenso para toda la familia.",
        "¡Feliz cumpleaños, hermano de otra casa! Me acuerdo de nuestras salidas de adolescentes, compartiendo amigos, anécdotas y cuidándonos las espaldas en todo momento.",
        "Primo, no hay reunión familiar en la que no busque tu mirada cómplice para reírnos de las mismas manías de los tíos que conocemos desde que tenemos memoria.",
        "Feliz cumpleaños. Qué tesoro tan grande es tener un primo con el que no hace falta hablar todos los días para saber que el cariño y la confianza siguen intactos."
    ]
    lessons = [
        "De vos aprendí que la familia no es solo una obligación de sangre, sino un espacio hermoso de complicidad y lealtad elegida día a día.",
        "Tu buena onda constante y tu capacidad para ponerle humor a las situaciones difíciles me enseñaron a encarar los problemas con liviandad y optimismo.",
        "Verte trabajar con tanta constancia por tus metas personales me demostró que el esfuerzo honesto siempre da sus frutos a largo plazo.",
        "Me enseñaste que la verdadera amistad entre primos es la que resiste los años, las mudanzas y las responsabilidades adultas sin perder la frescura.",
        "A tu lado comprendí que los recuerdos compartidos de la infancia son un ancla dorada que nos mantiene siempre conectados con lo que de verdad importa.",
        "Tu generosidad para compartir tus cosas y tu lealtad incondicional con los tuyos son virtudes hermosas que admiro profundamente de vos.",
        "De vos aprendí a no hacerme problema por tonterías y a celebrar los encuentros familiares con el corazón abierto y sin rencores.",
        "Tu empatía y tu capacidad de escuchar sin juzgar me demostraron que en vos siempre tengo un aliado sincero para cualquier etapa de la vida."
    ]
    grats = [
        "Gracias por haber sido mi compañero de aventuras desde la niñez y por seguir siendo ese compinche fiel con el que da gusto compartir una charla.",
        "Agradezco cada risa en los asados de domingo, cada consejo sincero en momentos de duda y la alegría que siempre traés a cada reunión familiar.",
        "Gracias por tu nobleza, por tu cariño incondicional y por hacer que nuestra historia compartida sea uno de mis mejores recuerdos de vida.",
        "Te doy las gracias por ser un primo tan presente, por tu lealtad a prueba de todo y por el afecto mutuo que supimos construir a través de los años.",
        "Gracias por los abrazos sinceros al reencontrarnos, por preocuparte siempre por los míos y por ser una persona tan noble y querida por todos.",
        "Agradezco con toda el alma haber crecido al lado tuyo y tener la certeza de que siempre puedo contar con vos para lo que haga falta.",
        "Gracias por tus chistes oportunos, por no perder nunca la humildad y por ser ese hermano de la vida con el que comparto raíces y afectos.",
        "Te agradezco infinitamente por tu amistad franca y por honrar siempre el lazo que nos une con tu conducta intachable y generosa."
    ]
    wishes = [
        "Deseo que este nuevo año te traiga salud de hierro, éxitos rotundos en lo que emprendas y la felicidad plena que tanto te merecés.",
        "Que la vida te abra caminos despejados, te premie por tu esfuerzo cotidiano y te regale momentos inolvidables junto a los que más amás.",
        "Brindo por tu vida, por tus proyectos y para que nunca falten los asados compartidos, las charlas largas y las risas que nos hacen bien.",
        "Que este cumpleaños marque el inicio de una etapa llena de satisfacciones personales, prosperidad y mucha paz en el corazón.",
        "Te quiero un montón, primo querido, y deseo que hoy pases un día extraordinario, rodeado de todo el afecto que te ganaste con tu calidez.",
        "Que la buena estrella, la serenidad y la salud te acompañen en cada paso de este nuevo ciclo que estás comenzando.",
        "Deseo que hoy disfrutes de tu día al máximo, comiendo rico y brindando por el camino hermoso que estás construyendo con tus propias manos.",
        "Que la vida nos regale muchos años más para seguir celebrando juntos y brindando por la dicha inmensa de tenernos como primos y amigos."
    ]
    return build_relationship("Un primo", "primo querido", memories, lessons, grats, wishes, titles)
