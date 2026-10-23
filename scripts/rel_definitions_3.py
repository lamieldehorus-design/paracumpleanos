# -*- coding: utf-8 -*-
from scripts.generator_core import build_relationship

def get_tio():
    titles = [
        "El asado de domingo y tus trucos con el fuego", "Tus consejos descontracturados de la vida", "El tío divertido que siempre traía sorpresas",
        "Nuestras charlas sinceras sin el tono de reto", "Tu sentido del humor que alegraba las fiestas familiares", "Aprender de tu generosidad desinteresada",
        "El primer partido de fútbol que fuimos a ver juntos", "Tu apoyo incondicional cuando necesité una mano", "Las anécdotas de juventud con papá o mamá",
        "Saber que siempre puedo contar con tu oído atento", "Tu manera de escucharme sin juzgar mis dudas", "El mate compartido en el taller o en el patio",
        "Tus historias de viajes y aventuras de antes", "La tranquilidad de tener un segundo padre en vos", "Tus bromas que desarmaban cualquier tensión",
        "El valor de tu palabra y tu nobleza de carácter", "Los recuerdos dorados de las vacaciones en familia", "Tu complicidad en los cumpleaños y reuniones",
        "Verte disfrutar de tus pasiones y tus pasatiempos", "El orgullo de tener un tío tan querido por todos", "Tu corazón abierto para recibir a cualquiera en tu casa",
        "Tus consejos de trabajo y de sentido común", "La lealtad familiar que siempre defendiste", "Un abrazo de tío que abriga el alma",
        "Celebrar tu cumpleaños con la copa bien alta", "Tu espíritu joven que nunca pierde la chispa", "Los momentos compartidos que guardo en la memoria",
        "Tu humildad para tratar a todo el mundo por igual", "La alegría de verte llegar con tu sonrisa franca", "Tu ejemplo de trabajador honesto y perseverante",
        "Nuestras sobremesas largas hablando de proyectos", "Tu cariño fiel que no pide nada a cambio", "Saberte siempre cerca a pesar de las rutinas",
        "Tus enseñanzas prácticas que todavía hoy me sirven", "La bendición de contar con tu sabiduría y afecto", "Tu risa contagiosa que llena cualquier espacio",
        "El respeto mutuo que supimos construir con los años", "Tus anécdotas que nunca pasan de moda", "Un nuevo año de vida para celebrar tus virtudes",
        "La tranquilidad de saberte sano y bien acompañado", "Tu generosidad al abrir las puertas de tu hogar", "Los recuerdos entrañables de nuestra infancia contigo",
        "Tu mano firme en los momentos difíciles", "La alegría de compartir un buen vino y una charla", "Tu presencia que siempre suma calidez a la mesa",
        "El honor de llevar tu apellido o tu sangre", "Tus palabras justas que traían calma", "Celebrar tu vida con gratitud y alegría",
        "Tu lealtad a los afectos de siempre", "Un tío ejemplar que merece lo mejor del mundo"
    ]
    memories = [
        "¡Feliz cumpleaños, tío querido! Me acuerdo como si fuera ayer de cuando llegabas a casa los domingos con facturas o golosinas y nos sacabas una sonrisa a todos.",
        "¡Muy feliz cumple, tío! Todavía me río acordándome de cuando me enseñabas a prender el carbón para el asado y me decías que el secreto está en la paciencia y no en el viento.",
        "Tío de mi corazón, qué lindo es recordar nuestras primeras charlas donde me dabas consejos de grande sin juzgarme ni retarme como hacían mis viejos.",
        "Feliz cumpleaños a mi tío favorito. Nunca voy a olvidar aquellas tardes en las que nos llevabas a pasear o a la cancha y nos hacías sentir los sobrinos más afortunados del mundo.",
        "Tío querido, verte llegar a cada reunión familiar con tu energía positiva y tus chistes de siempre ha sido una de las mayores alegrías de mi niñez y juventud.",
        "¡Feliz cumpleaños, compinche! Me acuerdo de cuando necesité una mano para reparar algo o tomar una decisión difícil y fuiste el primero en decir presente sin dudarlo.",
        "Tío querido, admiro profundamente la forma en que siempre mantuviste la alegría y la generosidad con toda la familia a lo largo de los años.",
        "Feliz cumpleaños. En cada sobremesa familiar busco tu mirada cómplice para reírnos juntos de las mismas historias que conocemos desde siempre."
    ]
    lessons = [
        "De vos aprendí que se puede ser un adulto responsable sin perder el sentido del humor ni la capacidad de divertirse con las cosas simples.",
        "Tu generosidad espontánea para dar una mano a quien lo necesita me enseñó lo que significa la solidaridad real, esa que se hace de corazón y sin esperar aplausos.",
        "Me enseñaste que en la familia un tío es como un segundo padre con el que se puede hablar de todo con confianza y libertad.",
        "A tu lado comprendí la importancia de disfrutar de la buena mesa, de la sobremesa compartida y de cultivar la amistad sincera entre parientes.",
        "Tu actitud relajada y sabia ante los problemas me demostró que muchas veces nos hacemos mala sangre por cosas que tienen solución sencilla.",
        "De vos aprendí a ser agradecido con los buenos momentos y a ponerle el hombro a los malos tiempos sin perder la compostura.",
        "Tu respeto y lealtad hacia tus hermanos y hacia nuestros abuelos fueron un ejemplo hermoso de devoción familiar que llevo grabado en el alma.",
        "Tu capacidad para escucharme con paciencia me enseñó que el cariño verdadero sabe acompañar sin imponer mandatos."
    ]
    grats = [
        "Gracias por haber sido ese tío compinche, protector y alegre que hizo de mi infancia una etapa mucho más divertida y luminosa.",
        "Agradezco cada consejo que me diste en momentos clave, cada asado compartido y esa manera tan tuya de hacerme sentir querido y valorado.",
        "Gracias por tu nobleza de espíritu, por cuidar a la familia con tanta entrega y por ser esa persona entrañable a la que siempre da gusto visitar.",
        "Te doy las gracias por tus anécdotas inolvidables, por tu oído atento cuando necesité un consejo y por tu afecto constante a lo largo de los años.",
        "Gracias por no haber faltado a ningún cumpleaños importante de mi vida y por celebrar cada uno de mis logros con tanta alegría sincera.",
        "Agradezco con toda mi alma tener un tío como vos, íntegro, trabajador y bueno, que honra todos los días las raíces de nuestra familia.",
        "Gracias por abrirme siempre las puertas de tu casa con una sonrisa y por tener siempre un mate o un café listo para charlar de la vida.",
        "Te agradezco infinitamente por tu cariño incondicional y por el orgullo inmenso que siento al decir que sos mi tío."
    ]
    wishes = [
        "Deseo que este nuevo año te traiga salud de hierro, asados compartidos y la tranquilidad profunda que tanto te merecés.",
        "Que la vida te abra caminos amables, te libre de preocupaciones y te devuelva con creces toda la alegría que siempre regalás.",
        "Brindo por tu vida, por tus proyectos y para que nunca te falte la risa franca ni la compañía de los que de verdad te queremos.",
        "Que este cumpleaños marque el inicio de una etapa llena de satisfacciones personales, descanso merecido y momentos dorados.",
        "Te quiero un montón, tío querido, y deseo que hoy disfrutes de tu día rodeado de todo el afecto que supiste cosechar.",
        "Que la salud, la serenidad y la buena estrella te acompañen en cada paso de este nuevo ciclo que estás comenzando.",
        "Deseo que hoy pases un día extraordinario, agasajado por tu familia y sabiendo lo importante que sos para todos nosotros.",
        "Que la vida nos regale muchos años más para seguir compartiendo sobremesas, brindis y la dicha inmensa de tenerte como tío."
    ]
    return build_relationship("Un tío", "tío querido", memories, lessons, grats, wishes, titles)

def get_tia():
    titles = [
        "Tus tortas y delicias caseras en cada visita", "Tu casa que siempre tenía olor a cosas ricas y flores", "Las charlas íntimas en el sillón de tu living",
        "La tía compinche que guardaba mis secretos", "Tus consejos con dulzura cuando me sentía triste", "Aprender de tu bondad y tu ternura maternal",
        "Los mimos especiales que solo una tía sabe dar", "Tu alegría contagiosa al recibirnos en tu casa", "Tus anécdotas de infancia recordando a mamá o papá",
        "El abrazo cálido que me reiniciaba el corazón", "Saber que con vos siempre tuve un refugio seguro", "Tus regalos pensados con tanto amor y detalle",
        "Tu risa que iluminaba cualquier fiesta familiar", "La generosidad de tu tiempo para escucharme siempre", "El orgullo de tener una tía tan sabia y cariñosa",
        "Tus recetas secretas que compartiste con paciencia", "La lealtad incondicional que tenés con los tuyos", "Los recuerdos dorados de pasar las tardes con vos",
        "Tu apoyo silencioso en mis momentos más difíciles", "Celebrar tu cumpleaños con la emoción de agradecerte tanto", "Tu elegancia y tu presencia llena de gracia",
        "Aprender a cuidar a los afectos viéndote a vos", "Tu complicidad en los cumpleaños familiares", "La tranquilidad de saberte bien y rodeada de amor",
        "Tus palabras suaves que curaban cualquier enojo", "El amor desinteresado que sembraste en mi vida", "Nuestras meriendas largas charlando de todo",
        "Tu corazón noble que nunca supo de rencores", "La bendición de haber crecido cerca de tu cariño", "Tus manualidades y detalles hechos con amor",
        "La certeza de tener una segunda madre en vos", "Tus anécdotas que nos hacen sonreír a todos", "El respeto y la admiración que siento por tu camino",
        "Tu constancia para mantener unida a la familia", "Un año nuevo lleno de salud y serenidad para vos", "Tus abrazos que huelen a hogar y a infancia",
        "La alegría de verte disfrutar de tus pasatiempos", "Tu generosidad que no conoce de límites ni medidas", "Celebrar tu vida con un brindis lleno de emoción",
        "Tus consejos de mujer sabia y experimentada", "El valor de tu presencia dulce en nuestra historia", "La dicha de saber que siempre puedo llamarte",
        "Tus fotos viejas compartidas con tanta nostalgia", "La paz que transmite tu compañía sincera", "Un cumpleaños mágico para mi tía del alma",
        "Tu sonrisa dulce que nunca pasa de moda", "El cariño eterno que une a tía y sobrino", "Tus deseos cumplidos que festejo de corazón",
        "La gratitud infinita por tus cuidados de siempre", "Brindo por tu felicidad, por tu salud y por tu vida"
    ]
    memories = [
        "¡Feliz cumpleaños, tía querida! Me acuerdo de cuando iba a tu casa de chico y siempre tenías una torta recién horneada o algo rico esperándome con todo tu amor.",
        "¡Muy feliz cumpleaños, tía de mi corazón! Todavía recuerdo esas tardes en tu sillón contándote mis dudas de adolescente y recibiendo tus palabras llenas de dulzura y sin reproches.",
        "Tía linda, qué hermoso es recordar cómo nos consentías en los cumpleaños y cómo nos hacías sentir los sobrinos más especiales del mundo.",
        "Feliz cumpleaños a mi tía favorita. Nunca voy a olvidar cuando estaba triste y bastaba una caricia tuya en la cabeza para que todo pareciera tener solución.",
        "Tía querida, verte sonreír y llenar la casa de alegría con tus historias y tu calidez ha sido una de las mayores bendiciones de mi vida.",
        "¡Feliz cumpleaños, reina! Me acuerdo de cómo me ayudabas a elegir ropa o me dabas esos consejos de vida que no me animaba a pedirle a mis padres.",
        "Tía querida, en cada reunión familiar tu presencia es la que aporta armonía, dulzura y esa sensación hermosa de que todo está en su lugar.",
        "Feliz cumpleaños. Qué tesoro tan grande es tener una tía que te quiere como una segunda madre y te acompaña con tanta generosidad y alegría."
    ]
    lessons = [
        "De vos aprendí que la ternura y la escucha paciente tienen un poder transformador mucho más fuerte que cualquier sermón o discusión.",
        "Tu generosidad para brindar afecto sin pedir nada a cambio me enseñó el verdadero significado del amor familiar desinteresado.",
        "Me enseñaste que en la vida hay que ponerle dedicación y cariño a los pequeños detalles cotidianos para hacer felices a los que nos rodean.",
        "A tu lado comprendí que una tía es un puente de confianza único en la familia, alguien con quien se puede ser uno mismo con total tranquilidad.",
        "Tu entereza serena para atravesar los momentos difíciles me demostró que la dulzura no es debilidad, sino una fortaleza interior indestructible.",
        "De vos aprendí a valorar la calidez de un hogar bien cuidado, donde siempre hay una taza de té y una sonrisa para el que llega.",
        "Tu nobleza para perdonar y no guardar rencores familiares me enseñó el valor de la armonía y la paz en el corazón.",
        "Tu capacidad para celebrar las alegrías ajenas como propias es una de las virtudes más hermosas que aprendí de tu ejemplo."
    ]
    grats = [
        "Gracias por haber sido mi refugio dulce en la infancia y por seguir siendo esa tía compinche y comprensiva que siempre está presente.",
        "Agradezco cada consejo lleno de sabiduría, cada abrazo apretado y esa manera tan especial que tenés de hacerme sentir querido y cuidado.",
        "Gracias por tu corazón noble, por tus mimos inolvidables y por haber llenado mi niñez de recuerdos tan cálidos y luminosos.",
        "Te doy las gracias por ser una tía tan comprensiva, por tu oído siempre abierto y por el orgullo inmenso de tenerte en mi familia.",
        "Gracias por no haber faltado nunca en las fechas importantes y por tener siempre una palabra de aliento cuando las cosas se pusieron difíciles.",
        "Agradezco con toda el alma tu ternura constante, tu paciencia infinita y esa alegría sana que contagiás a todos los que te rodean.",
        "Gracias por abrirme siempre las puertas de tu casa y de tu corazón con una generosidad que no tiene comparación.",
        "Te agradezco infinitamente por tu amor incondicional y por haber sido un pilar afectivo fundamental en mi vida."
    ]
    wishes = [
        "Deseo que este nuevo año te regale salud de hierro, tardes apacibles y toda la alegría que tu corazón generoso se merece.",
        "Que la vida te colme de bendiciones, te libre de tristezas y te devuelva con creces todo el cariño que sembraste en nuestras vidas.",
        "Brindo por tu vida, por tus sueños y para que nunca te falte la sonrisa dulce ni la compañía de los que de verdad te queremos.",
        "Que este cumpleaños marque el inicio de una etapa llena de satisfacciones, proyectos lindos y merecido descanso.",
        "Te quiero con todo mi corazón, tía hermosa, y deseo que hoy pases un día maravilloso, mimada y celebrada como te merecés.",
        "Que la salud, la paz interior y la buena fortuna te acompañen en cada paso de este nuevo ciclo que estás comenzando.",
        "Deseo que hoy disfrutes de tu día al máximo, rodeada de tus afectos y sabiendo lo profundamente amada que sos por todos nosotros.",
        "Que la vida nos regale muchos años más para seguir compartiendo charlas, risas y la dicha inmensa de tenerte como tía."
    ]
    return build_relationship("Una tía", "tía querida", memories, lessons, grats, wishes, titles)

def get_abuelo():
    titles = [
        "Tus manos sabias marcadas por el trabajo", "Sentarme a tu lado en el banco del patio", "Las historias de tu juventud y tus antepasados",
        "El reloj de bolsillo o la boina que te caracterizaba", "Tu voz pausada que transmitía tanta paz", "Aprender el valor del esfuerzo honesto viéndote",
        "La moneda o el caramelo que me dabas en secreto", "Tu mirada orgullosa al ver a la familia reunida", "El mate que me convidabas con paciencia de chico",
        "Las enseñanzas de la tierra y del trabajo duro", "Tu rectitud moral que no se negociaba por nada", "El refugio de tu casa donde el tiempo parecía detenerse",
        "Tus silencios llenos de sabiduría y experiencia", "El orgullo inmenso de llevar tu sangre y tu legado", "Tus anécdotas de otras épocas que escuché mil veces",
        "La templanza con la que encaraste las dificultades", "Tus consejos sencillos que valían más que libros enteros", "El amor silencioso y protector que nos diste a todos",
        "Verte caminar con paso firme a pesar de los años", "El respeto unánime que te ganaste en tu comunidad", "Celebrar tu cumpleaños como la fiesta del patriarca",
        "Tus herramientas cuidadas como reliquias sagradas", "La dicha de haber crecido escuchando tus vivencias", "Tu generosidad sin aspavientos ni reclamos",
        "El abrazo huesudo y apretado que me llenaba el alma", "Aprender a no desesperarse ante las malas rachas", "Tu sonrisa serena bajo el sol de la mañana",
        "La memoria viva de nuestras raíces que late en vos", "Tus dichos sabios que siempre tenían razón", "El ejemplo de una vida intachable y honorable",
        "La bendición de tus manos sobre mi cabeza", "Verte disfrutar de tus nietos con infinita ternura", "Tus paseos matinales saludando a los vecinos",
        "El honor de escuchar tus consejos de vida", "Un cumpleaños inolvidable para el roble de la familia", "Tu constancia para levantarte temprano toda la vida",
        "La gratitud de tenerte todavía entre nosotros", "Tus risas tranquilas al recordar anécdotas viejas", "El faro ético que ilumina a todas las generaciones",
        "Tu humildad frente a todo lo que supiste construir", "El valor de la palabra empeñada que nos transmitiste", "Tus ojos que vieron pasar casi un siglo de historia",
        "La serenidad de haber cumplido con tu deber", "El cariño incondicional que nunca pidió nada a cambio", "Celebrar tu longevidad con admiración y devoción",
        "Tu corazón noble que albergó a toda la familia", "Los recuerdos entrañables de mi niñez a tu lado", "Un brindis por tu vida venerable y hermosa",
        "La paz que se respira cuando estás cerca", "Brindo por tu salud, abuelo querido, y por tu ejemplo eterno"
    ]
    memories = [
        "¡Feliz cumpleaños, abuelo querido! Me acuerdo de cuando me sentaba en tus rodillas y me mostrabas tus manos gastadas por el trabajo contándome cómo construiste tu vida desde abajo.",
        "¡Muy feliz cumpleaños, abuelo de mi vida! Todavía me acuerdo de cuando me pasabas un caramelo o una monedita a escondidas de mis viejos, guiñándome el ojo con complicidad.",
        "Abuelo querido, qué emoción me da recordar las mañanas de domingo en el patio, viendo cómo regabas la quinta y me enseñabas los nombres de los árboles y las plantas.",
        "Feliz cumpleaños al patriarca noble de nuestra familia. Nunca voy a olvidar tus historias de cuando llegaste de joven y todo lo que tuviste que remar para sacarnos adelante.",
        "Abuelo, verte sentado en la cabecera de la mesa mirando a tus hijos y nietos con los ojos llenos de orgullo es la imagen más hermosa de nuestra historia familiar.",
        "¡Feliz cumpleaños, viejo sabio! Me acuerdo de cuando me enseñaste a afilar un cuchillo o a arreglar una madera, transmitiéndome la paciencia de los antiguos artesanos.",
        "Abuelo de mi corazón, en cada reunión familiar tu presencia firme y serena ha sido el pilar de tranquilidad y respeto que nos mantuvo siempre unidos.",
        "Feliz cumpleaños. Qué privilegio tan grande ha sido haber crecido escuchando tus consejos de vida, llenos de sensatez, experiencia y afecto puro."
    ]
    lessons = [
        "De vos aprendí que la honestidad no es una opción, sino la única manera digna de caminar por la vida con la frente alta.",
        "Tu serenidad para atravesar las crisis y las pérdidas me enseñó que la verdadera fortaleza reside en la templanza y en la fe en el porvenir.",
        "Me enseñaste que las cosas valiosas se construyen despacio, con paciencia, sudor honesto y sin tomar atajos dudosos.",
        "A tu lado comprendí que el respeto no se exige a los gritos, sino que se gana con una conducta intachable a lo largo de las décadas.",
        "Tu amor por la tierra y por el trabajo me demostró que el hombre que ama lo que hace jamás se siente vencido por el cansancio.",
        "De vos aprendí a ser austero, a no necesitar lujos para ser feliz y a valorar la riqueza infinita de tener una familia unida alrededor de una mesa.",
        "Tu lealtad incondicional hacia tus afectos y tu honorabilidad son la mayor herencia moral que pude recibir en la vida.",
        "Tu capacidad para escuchar en silencio y dar una sentencia sabia en dos palabras me enseñó el valor inmenso de la prudencia."
    ]
    grats = [
        "Gracias por haber sido el tronco firme de nuestro árbol familiar y por haber cuidado de todos nosotros con tanto sacrificio silencioso.",
        "Agradezco cada historia que me contaste, cada consejo en el patio y esa ternura serena con la que siempre me recibiste en tu casa.",
        "Gracias por tu ejemplo de rectitud moral, por no haberte rendido jamás y por habernos dejado un nombre respetado y limpio.",
        "Te doy las gracias por tus caricias en mis manos de chico, por tus silencios protectores y por el orgullo infinito de ser tu nieto.",
        "Gracias por haberme enseñado a valorar el pan sobre la mesa, el trabajo de cada día y el amor incondicional a los míos.",
        "Agradezco con toda el alma cada minuto compartido a tu lado, porque en tu mirada encuentro las raíces más nobles de mi existencia.",
        "Gracias por ser ese faro de decencia y sabiduría que sigue guiando mis pasos cada vez que me toca tomar una decisión difícil.",
        "Te agradezco infinitamente por tu vida noble, por tu amor desinteresado y por el privilegio inmenso de celebrar otro año con vos."
    ]
    wishes = [
        "Deseo que este nuevo año te regale salud de roble, mañanas soleadas y toda la paz que te ganaste con una vida de trabajo honorable.",
        "Que la vida te colme de días amables, te libre de dolores y te permita seguir disfrutando del cariño inmenso de tus hijos y nietos.",
        "Brindo por tu vida venerable, por tus años llenos de historia y para que nunca te falte la tranquilidad ni el respeto de todos los tuyos.",
        "Que este cumpleaños sea una fiesta inolvidable en tu corazón, sabiendo que tu siembra dio los frutos más hermosos del mundo.",
        "Te amo con toda mi alma, abuelo querido, y deseo que hoy te sientas honrado, querido y profundamente agradecido por tu vida.",
        "Que Dios bendiga tus pasos cansados, te llene de vitalidad y te conserve lúcido y sereno por muchísimos años más entre nosotros.",
        "Deseo que hoy disfrutes de tu día al máximo, rodeado del amor de tu familia y con la certeza del deber cumplido.",
        "Que la vida nos regale mucho tiempo más para seguir aprendiendo de tu ejemplo, de tu bondad y de tu sabiduría eterna."
    ]
    return build_relationship("Un abuelo", "abuelo querido", memories, lessons, grats, wishes, titles)

def get_abuela():
    titles = [
        "El olor a galletitas recién horneadas y a hogar", "Tus manos suaves acariciando mi frente para dormir", "Las historias de tu niñez y de cómo conociste al abuelo",
        "El delantal que era sinónimo de mimos y comida rica", "Tus oraciones y bendiciones antes de salir de viaje", "El mate dulce que preparabas en las tardes de invierno",
        "Tu sabiduría para desarmar cualquier tristeza con un abrazo", "Aprender de tu fe inquebrantable y tu paciencia infinita", "El cuaderno viejo con tus recetas escritas a mano",
        "Tus plantas en el patio que cuidabas con tanta devoción", "El cariño incondicional que nunca nos juzgó por nada", "Tus caricias que curaban los raspones de la niñez",
        "La calidez de tu casa donde siempre había un plato más", "Tus palabras sabias que calmaban cualquier tormenta familiar", "El orgullo inmenso de ser tu nieto ante el mundo",
        "Tus tejidos llenos de colores hechos para abrigarnos", "La dulzura de tu voz cuando me llamabas por mi apodo", "Celebrar tu cumpleaños como la fiesta del alma familiar",
        "Tus anécdotas de juventud que nos hacían reír a todos", "El ejemplo de una vida entregada con amor a los suyos", "Tus ojos tiernos que leían mis penas al instante",
        "La generosidad de repartir lo poco que había con alegría", "Saber que tus oraciones siempre fueron mi mejor escudo", "Tus consejos de mujer sabia que atravesó mil batallas",
        "El aroma a café con leche y tostadas en tus mañanas", "La dicha de haber crecido envuelto en tus abrazos de algodón", "Tu sonrisa radiante al vernos a todos sentados a tu mesa",
        "El refugio seguro que siempre encontré en tu regazo", "Aprender de tu humildad y tu corazón limpio de rencores", "Tus manos cansadas que nunca dejaron de acariciarnos",
        "La bendición de tenerte lúcida, alegre y presente", "Tus chistes de entrecasa y tus mañas entrañables", "El amor más puro y desinteresado que conocí en la vida",
        "Tus caminatas cortitas disfrutando del sol en la vereda", "La memoria viva de nuestras tradiciones que cuidás con amor", "Un cumpleaños mágico para el ángel de nuestra familia",
        "Tus besos suaves que quedan grabados en el corazón", "La paz profunda que se siente al estar a tu lado", "El tesoro invaluable de tus consejos de vida",
        "Tus rezos en voz baja pidiendo por la salud de todos", "Celebrar tus años como un milagro de amor y entrega", "La ternura infinita que nunca envejece en tu mirada",
        "Tu fortaleza serena para sostenernos a todos en el dolor", "El agradecimiento eterno por tu cariño sin condiciones", "Tus comidas que nadie en el mundo logra igualar jamás",
        "La alegría de seguir sumando recuerdos dorados con vos", "El respeto y la devoción que toda la familia siente por vos", "Un nuevo ciclo de vida para honrar tu existencia hermosa",
        "Tus bendiciones que me acompañan en cada paso que doy", "Brindo por tu salud, abuela de mi alma, y por tu amor eterno"
    ]
    memories = [
        "¡Feliz cumpleaños, abuelita querida! Me acuerdo como si fuera ayer de cuando me quedaba a dormir en tu casa y me tapabas hasta las orejas cantándome bajito.",
        "¡Muy feliz cumpleaños, abuela de mi alma! Todavía siento el olor a tostadas con manteca y a café con leche que preparabas en tu cocina tibia en las mañanas de invierno.",
        "Abuela linda, qué emoción me da recordar cómo me curabas los raspones con agua oxigenada y un beso mágico que hacía desaparecer cualquier dolor al instante.",
        "Feliz cumpleaños al corazón más dulce de nuestra familia. Nunca voy a olvidar tus delantales floreados, tus recetas secretas y la sonrisa con la que me recibías en la puerta.",
        "Abuelita mía, verte sentada en tu sillón tejiendo o rezando por cada uno de nosotros con tanta devoción es la imagen más sagrada y tierna de mi infancia.",
        "¡Feliz cumpleaños, reina hermosa! Me acuerdo de cuando me dabas la masa sobrante de las empanadas para que hiciera mis propias tortitas en la mesada de la cocina.",
        "Abuela de mi vida, en cada Navidad tu presencia amorosa y tus bendiciones han sido el centro de gravedad que mantuvo unida a toda nuestra gran familia.",
        "Feliz cumpleaños. Qué regalo inmenso de Dios ha sido tener una abuela tan comprensiva, que siempre tuvo un plato de comida y una caricia para darme."
    ]
    lessons = [
        "De vos aprendí que el amor verdadero no hace ruido ni exige nada, sino que se demuestra cuidando a los demás con infinita paciencia y ternura.",
        "Tu capacidad para perdonar y no guardar jamás una pizca de rencor me enseñó lo que significa tener un corazón puro y libre de amarguras.",
        "Me enseñaste que una casa humilde puede ser el palacio más cálido del mundo si está llena de afecto, aroma a comida casera y brazos abiertos.",
        "A tu lado comprendí que la fe y la oración no son palabras vacías, sino un refugio de paz que sostiene el alma en las noches más oscuras.",
        "Tu generosidad para compartir lo que tenías, aunque fuera poco, me demostró que la verdadera riqueza está en dar con alegría al que necesita.",
        "De vos aprendí a tratar a las personas con dulzura y respeto, comprendiendo que una palabra amable puede salvarle el día a cualquiera.",
        "Tu fortaleza para sobreponerte a las pérdidas y seguir adelante con una sonrisa me dio la lección más grande de resiliencia y esperanza.",
        "Tu ternura inagotable me enseñó que los afectos verdaderos son los únicos que perduran intactos a través del tiempo y de los años."
    ]
    grats = [
        "Gracias por haber sido mi segundo hogar en la niñez y por haberme mimado con tanto amor desinteresado y puro.",
        "Agradezco cada bendición que susurraste sobre mi cabeza, cada comida deliciosa y esa mirada llena de orgullo con la que siempre me mirás.",
        "Gracias por tu nobleza de alma, por tus rezos silenciosos que me protegieron en los momentos difíciles y por ser el ángel guardián de nuestra familia.",
        "Te doy las gracias por tus caricias suaves en las manos, por tus historias de antes y por el orgullo inmenso de llevar tus enseñanzas en el corazón.",
        "Gracias por haberme hecho sentir tan especial y querido desde el primer instante en que llegué a este mundo.",
        "Agradezco con toda mi alma cada minuto que la vida me regala a tu lado, porque tu compañía es la paz más hermosa que puedo experimentar.",
        "Gracias por ser esa abuela sabia, dulce y paciente que convirtió mi infancia en un recuerdo dorado que nunca se va a apagar.",
        "Te agradezco infinitamente por tu vida maravillosa, por tu entrega incondicional y por el amor inmenso que siempre derramaste sobre nosotros."
    ]
    wishes = [
        "Deseo que este nuevo año te regale salud de hierro, días luminosos y toda la paz que tu corazón bondadoso se merece con creces.",
        "Que la vida te colme de mimos, te libre de dolores y te permita seguir disfrutando del amor y la gratitud de todos tus hijos y nietos.",
        "Brindo por tu vida hermosa, por tus años llenos de amor y para que nunca te falte la sonrisa dulce ni la ternura de los que te amamos.",
        "Que este cumpleaños sea una fiesta inolvidable en tu corazón, sabiendo que sos el tesoro más grande y sagrado de toda nuestra familia.",
        "Te amo con toda mi alma, abuelita querida, y deseo que hoy te sientas inmensamente mimada y celebrada como la reina que sos.",
        "Que Dios bendiga cada uno de tus días, te dé fuerzas y te conserve con esa dulzura intacta que tanto bien nos hace a todos.",
        "Deseo que hoy disfrutes de tu día al máximo, comiendo algo rico y recibiendo todos los besos y abrazos que te tenemos guardados.",
        "Que la vida nos conceda muchos años más para seguir disfrutando de tu presencia, de tus historias y de tu amor bendito e infinito."
    ]
    return build_relationship("Una abuela", "abuelita querida", memories, lessons, grats, wishes, titles)
