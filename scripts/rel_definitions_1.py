# -*- coding: utf-8 -*-
from scripts.generator_core import build_relationship
from scripts.generators.parents import get_mama_messages, get_papa_messages

def get_mama():
    # We already have rich handmade mama messages
    mama_tuples = get_mama_messages()
    return [{"id": f"mensaje-{i+13}", "title": t, "text": txt} for i, (t, txt) in enumerate(mama_tuples)]

def get_papa():
    # We already have papa messages, let's complete up to 88
    papa_tuples = get_papa_messages()
    # If len < 88, let's extend with rich memories
    res = [{"id": f"mensaje-{i+13}", "title": t, "text": txt} for i, (t, txt) in enumerate(papa_tuples)]
    if len(res) < 88:
        extra_needed = 88 - len(res)
        memories = [
            "Feliz cumpleaños, viejo. Me acuerdo de cuando me llevabas a pescar temprano y nos quedábamos mirando el agua en silencio compartiendo un termo de mate.",
            "¡Muy feliz cumpleaños, papá! Todavía me acuerdo de cómo me enseñaste a cambiar el cuerito de una canilla y a no depender de nadie para solucionar los temas de la casa.",
            "Viejo querido, siempre me acuerdo de tus consejos antes de cada examen o entrevista importante, cuando me dabas una palmadita en la espalda y me decías que confiara en mi capacidad.",
            "Feliz cumpleaños, pa. Nunca voy a olvidar las tardes de domingo en que lavábamos el auto juntos en la vereda con la música de fondo y la charla tranquila.",
            "Papá, en cada logro de mi vida siempre recuerdo tu mirada de orgullo y el abrazo apretado con el que me felicitaste cada vez que di un paso importante."
        ]
        lessons = [
            "De vos aprendí que la honestidad y la palabra empeñada valen más que todo el dinero del mundo y que el honor no se negocia por nada.",
            "Me enseñaste que la paciencia y el trabajo diario sin alardes son la única fórmula verdadera para construir un futuro sólido y digno.",
            "A tu lado comprendí que un verdadero líder en el hogar cuida a los suyos con el ejemplo, la templanza y el respeto mutuo.",
            "Tu rectitud para encarar los problemas de frente y sin buscar excusas me formó como una persona íntegra y responsable.",
            "De vos aprendí a ser agradecido con lo que tengo y a no perder nunca la humildad frente a las buenas noticias."
        ]
        grats = [
            "Gracias por haber sido mi mayor modelo de hombría de bien, de decencia y de amor incondicional a la familia.",
            "Agradezco cada sacrificio silencioso que hiciste durante años para que en nuestra mesa jamás faltara un plato de comida ni una oportunidad de estudiar.",
            "Gracias por tus consejos sabios, por tus silencios respetuosos y por la seguridad indestructible que siempre me brindaste.",
            "Te agradezco de corazón por haberme dejado el apellido más limpio y respetado que un hijo puede heredar en la vida.",
            "Gracias por haber estado siempre ahí, firme como un roble, protegiendo a los tuyos ante cualquier temporal."
        ]
        wishes = [
            "Deseo que este nuevo año te regale salud de hierro, paseos apacibles y toda la tranquilidad que te ganaste con creces.",
            "Que la vida te devuelva multiplicada toda la generosidad y el esfuerzo que sembraste en cada uno de nosotros.",
            "Brindo por tu vida, por tus canas ilustres y por muchos años más compartiendo momentos inolvidables a tu lado.",
            "Que este cumpleaños te llene de satisfacciones, buena compañía y el afecto inmenso de todos los que te admiramos.",
            "Te quiero con toda mi alma, viejo, y deseo que hoy disfrutes de tu día rodeado de todo el cariño que merecés."
        ]
        titles = [
            "El valor de tus consejos en el auto", "Las tardes de domingo junto al fuego", "Tu ejemplo de honestidad cotidiana",
            "Aprender a no rendirme viéndote luchar", "Tus silencios que me daban seguridad", "El orgullo de llevar tu apellido",
            "Tu mano firme en mis primeros pasos", "Las historias de tu juventud en el barrio", "El arte de arreglar las cosas rotas",
            "Tu alegría sincera por mis logros", "La tranquilidad de tu presencia en casa", "Un brindis por tu trayectoria de vida",
            "Tus caminatas matinales con paso firme", "La dignidad de tu trabajo diario", "El mate amargo de las mañanas",
            "Tu generosidad con quien necesita ayuda", "La sabiduría de tus pocas palabras", "El abrazo reconfortante en la despedida",
            "Tu lealtad inquebrantable a los amigos", "Un año nuevo lleno de merecido descanso"
        ]
        for j in range(extra_needed):
            curr_num = len(res) + 13
            t = f"{curr_num}. {titles[j % len(titles)]}"
            txt = f"{memories[j % len(memories)]} {lessons[(j*3+1) % len(lessons)]} {grats[(j*5+2) % len(grats)]} {wishes[(j*7+3) % len(wishes)]}"
            res.append({"id": f"mensaje-{curr_num}", "title": t, "text": txt})
    return res

def get_pareja():
    titles = [
        "Cocinar juntos en una noche de lluvia", "Nuestras miradas cómplices en las reuniones", "El valor de superar baches de la mano",
        "Elegirnos todos los días en la rutina", "Tus abrazos al final de un día agotador", "El proyecto de armar nuestro propio hogar",
        "Nuestras risas por cosas que solo nosotros entendemos", "Tu apoyo incondicional en mis proyectos", "Aprender a ser un equipo en las difíciles",
        "Los mates de la mañana compartiendo sueños", "Nuestras vacaciones improvisadas en la ruta", "La paz de dormir a tu lado cada noche",
        "Tu generosidad y tu manera de cuidarme", "Los pequeños detalles que llenan el día a día", "Tu alegría contagiosa al recibir buenas noticias",
        "Superar los días grises con tu ternura", "Caminar de la mano sin mirar el reloj", "Nuestras charlas profundas de madrugada",
        "El respeto mutuo que sostiene nuestro amor", "Celebrar la vida con vos como compañera", "Tu paciencia cuando todo se vuelve caótico",
        "El café caliente preparado con cariño", "Aprender a ceder y a crecer juntos", "Nuestras metas compartidas a futuro",
        "La complicidad que no necesita palabras", "Tu sonrisa que ilumina cualquier habitación", "Estar juntos en la salud y en la enfermedad",
        "Los recuerdos hermosos de nuestros primeros días", "El orgullo de verte brillar en lo que hacés", "Un amor maduro, libre y sincero",
        "Nuestras compras cotidianas convertidas en paseo", "Tu honestidad para decirme las cosas de frente", "El abrazo que disuelve cualquier enojo",
        "Celebrar tu cumpleaños como la fiesta de los dos", "El refugio cálido que construimos juntos", "Tu capacidad de reinventarte ante los cambios",
        "Compartir la música que nos emociona a los dos", "La dicha de envejecer a la par", "Tus caricias que calman cualquier ansiedad",
        "Nuestros planes sencillos de fin de semana", "La admiración profunda que siento por vos", "Elegirte una y mil veces más",
        "Tu sentido del humor que desarma tensiones", "El pacto silencioso de cuidarnos siempre", "Nuestras sobremesas largas charlando de todo",
        "Agradecimiento por tu amor generoso", "El valor de construir día a día con paciencia", "Tus palabras de aliento en momentos de duda",
        "La alegría de recibirte al final de la jornada", "Nuestros silencios cómodos y llenos de paz", "El afecto sincero que nos une a las familias",
        "Tu ternura que nunca pasa de moda", "Los sueños que todavía nos faltan cumplir", "Aprender a perdonar y a empezar de nuevo",
        "La certeza de haber encontrado mi lugar en vos", "Tus besos que llenan de sentido la vida", "Nuestra complicidad en los viajes largos",
        "El compromiso renovado en cada aniversario", "Tu mirada dulce en medio de la multitud", "Hacer de la rutina una aventura compartida",
        "Tu inteligencia para resolver situaciones complejas", "El calor de tu mano en los días fríos", "Nuestras charlas sobre el paso del tiempo",
        "La libertad de ser nosotros mismos sin caretas", "Tu cuidado amoroso cuando me siento mal", "Brindar por el camino que recorrimos juntos",
        "Tus carcajadas que llenan la casa de vida", "El amor que crece con cada año compartido", "Nuestros proyectos personales que se potencian",
        "La lealtad que no se quiebra con nada", "Un cumpleaños lleno de mimos y romance", "La complicidad en las pequeñas manías caseras",
        "Aprender de tu sensibilidad y empatía", "Los atardeceres compartidos en silencio", "Tu entusiasmo contagioso por aprender algo nuevo",
        "La dulzura con la que tratás a los que querés", "Nuestra historia de amor escrita paso a paso", "El valor de confiar ciegamente en el otro",
        "Tus detalles inesperados que alegran la semana", "La certeza de que juntos somos invencibles", "Celebrar tu existencia con gratitud infinita",
        "Nuestros bailes improvisados en el living", "Tu corazón noble que no guarda rencores", "El orgullo de caminar a tu lado por la vida",
        "Tus sueños que también son los míos", "La serenidad que me transmite tu voz", "El regalo más grande que es tu amor diario",
        "Brindo por vos y por nuestra historia hermosa"
    ]
    memories = [
        "Feliz cumpleaños, mi amor. Me acuerdo de aquella noche de lluvia en que se cortó la luz y nos pusimos a cocinar a la luz de las velas mientras escuchábamos música.",
        "¡Muy feliz cumple, amor de mi vida! En cada fiesta o reunión familiar me encanta cruzar una mirada con vos al otro lado de la sala y saber exactamente qué estás pensando sin decir una sola palabra.",
        "Feliz cumpleaños a mi compañero de vida. Atravesamos meses difíciles y momentos de incertidumbre, pero tomarnos de la mano y mirarnos a los ojos fue siempre la certeza de que íbamos a salir adelante.",
        "Amor mío, qué lindo es celebrar otro cumpleaños juntos y darnos cuenta de que la rutina no desgastó nuestro cariño, sino que lo volvió más profundo y cálido.",
        "Feliz cumpleaños, mi vida. Después de un día largo de trabajo, no hay mayor alivio que llegar a casa y recibir ese abrazo tuyo que me reinicia el corazón y me devuelve la paz.",
        "Mi amor, recuerdo cuando apenas empezábamos y soñábamos con tener un espacio propio, y ver hoy todo lo que construimos con paciencia me llena de orgullo.",
        "¡Feliz cumpleaños, hermosa! Me fascina recordar nuestros primeros viajes improvisados en la ruta, parando a tomar mate al costado del camino y riéndonos de cualquier tontería.",
        "Amor de mi vida, en los momentos en que la vida me puso a prueba, tu abrazo protector fue el único lugar del mundo donde encontré calma y claridad."
    ]
    lessons = [
        "De vos aprendí que el verdadero amor no es un cuento de hadas perfecto, sino la decisión diaria de cuidarse, escucharse y remar juntos en la misma dirección.",
        "Me enseñaste a tener paciencia, a respetar los tiempos del otro y a encontrar belleza en los detalles sencillos de la convivencia cotidiana.",
        "A tu lado comprendí que ser un equipo significa celebrar los éxitos del otro como propios y poner el hombro cuando la carga se vuelve pesada.",
        "Tu generosidad y tu alegría para encarar los proyectos me motivan todos los días a ser una mejor persona y a no tenerle miedo al futuro.",
        "Nuestra historia me demostró que la complicidad y el respeto mutuo son los cimientos más sólidos sobre los que se puede construir un hogar.",
        "Aprendí de tu sensibilidad que los desacuerdos no separan cuando hay voluntad sincera de comprender el punto de vista de quien uno ama.",
        "Tu valentía para encarar los cambios me enseñó a confiar en que mientras estemos unidos no hay desafío que nos quede grande.",
        "A tu lado entendí que el amor maduro es libre, no asfixia y potencia lo mejor de cada uno de nosotros."
    ]
    grats = [
        "Gracias por haber creído en mis sueños cuando yo mismo dudaba y por brindarme un amor tan noble y sincero.",
        "Agradezco cada risa compartida en el desayuno, cada charla profunda antes de dormir y cada gesto de cariño con el que llenás nuestra casa.",
        "Gracias por ser mi refugio seguro, mi cable a tierra y la persona con la que siempre puedo ser yo mismo sin máscaras.",
        "Te agradezco con toda el alma por tu compañía incondicional y por hacer que los días comunes tengan gusto a fiesta.",
        "Gracias por elegirme para caminar a tu lado y por llenar mi vida de proyectos hermosos y complicidad diaria.",
        "Agradezco infinitamente tu ternura, tu paciencia en mis días complicados y esa manera única que tenés de hacerme sentir amado.",
        "Gracias por cada esfuerzo compartido para cuidar nuestro hogar y por hacer que cada regreso a casa sea una alegría.",
        "Te doy las gracias por ser mi confidente más leal, mi mejor amigo y el amor más hermoso que me tocó vivir."
    ]
    wishes = [
        "Deseo que este nuevo año te regale salud, paz interior y la concreción de cada uno de tus anhelos más queridos.",
        "Que la vida te devuelva multiplicada toda la alegría y la ternura que sembrás en mi corazón todos los días.",
        "Brindo por tus sueños, por tu felicidad y por muchísimos años más celebrando la dicha de amarnos.",
        "Que este cumpleaños marque el inicio de una etapa luminosa, llena de viajes lindos, proyectos compartidos y mucho amor.",
        "Te amo con todo mi ser y deseo que hoy te sientas tan especial, mimado y profundamente querido como merecés.",
        "Que nunca te falten motivos para sonreír y que podamos seguir sumando recuerdos dorados a nuestra historia de vida.",
        "Deseo que este año te traiga éxitos en tus proyectos personales y la certeza constante de tener mi amor apoyándote.",
        "Que celebremos este día con el corazón lleno de gratitud y que la vida nos conceda una vejez luminosa tomados de la mano."
    ]
    return build_relationship("Mi pareja", "mi amor", memories, lessons, grats, wishes, titles)

def get_hija():
    titles = [
        "Tus primeros pasitos sostenida de mis dedos", "Verte defender tus ideas con convicción", "Tu risa que llenaba de luz toda la casa",
        "El orgullo de verte crecer con valores nobles", "Nuestras charlas en la cocina sobre tus sueños", "Tu sensibilidad ante el dolor de los demás",
        "Cuando me mostrabas tus dibujos de chiquita", "Aprender a ser mejor persona para ser tu ejemplo", "Tu valentía para encarar nuevos desafíos",
        "Las tardes compartiendo música y complicidad", "Saber que siempre podés volver a casa", "Tu vocación y tu talento que brillan",
        "El amor incondicional que nunca cambia", "Verte convertirte en una mujer independiente", "Tu sentido de la justicia y la verdad",
        "Los abrazos apretados antes de salir a la escuela", "Tu alegría contagiosa en cada cumpleaños", "Aprender a soltarte la mano para que vueles",
        "Tus preguntas curiosas sobre el mundo", "La emoción de verte superar un tropiezo", "Tu ternura con los animales y la naturaleza",
        "Nuestras caminatas charlando de la vida", "El brillo de tus ojos cuando lográs algo", "La dicha infinita de ser tu papá",
        "Tu creatividad y tus pasiones personales", "El respeto y el cariño con tus amigas", "Tus audios largos contándome tus novedades",
        "Verte armar tu propio camino con dignidad", "El lazo indestructible que nos une", "Tu inteligencia práctica para resolver problemas",
        "Los recuerdos dorados de tu niñez protegida", "Tu honestidad para decir lo que sentís", "La mujer sabia y sensible en la que te convertiste",
        "Tus metas que me llenan de admiración", "La paz de saberte feliz y bien acompañada", "Celebrar tu cumpleaños como el mayor regalo",
        "Tus gestos de generosidad que me conmueven", "Aprender de tu mirada fresca sobre la realidad", "El refugio permanente de mis brazos",
        "Tu alegría de vivir que contagia a todos", "Nuestras anécdotas compartidas que no se olvidan", "El agradecimiento a la vida por tu existencia",
        "Verte brillar con luz propia en lo que elijas", "Tu corazón dulce que no guarda rencores", "El orgullo de verte superar tus miedos",
        "Tus libros, tus ideas y tus proyectos", "La certeza de que naciste para ser libre y feliz", "Tus abrazos que sanan cualquier preocupación",
        "Acompañarte en silencio cuando lo necesitás", "La nobleza de tus actos cotidianos", "Celebrar cada una de tus etapas con amor",
        "Tus llamadas que me alegran el día", "El respeto mutuo que construimos con los años", "Tu madurez para enfrentar la vida adulta",
        "Tus carcajadas que siguen sonando a infancia", "El regalo inmenso de haber sido elegido tu guía", "Verte construir tus propios sueños con esfuerzo",
        "Tu ternura que nunca pierde la inocencia", "Los paseos compartidos bajo el sol", "Tu lealtad con los que amás",
        "La tranquilidad de verte segura de vos misma", "Tus logros que son la mayor recompensa a mis desvelos", "La dicha de verte sonreír con el alma",
        "Tus cartas y dedicatorias guardadas como tesoros", "El valor de tu palabra y tu integridad", "Aprender a escucharte con el corazón abierto",
        "Tu luz que guía a nuestra familia", "Verte elegir tu propio destino sin mandatos", "El amor más puro que existe en este mundo",
        "Tus mañanas de domingo remoloneando en la cama", "Tu capacidad de reinventarte con alegría", "El refugio seguro que siempre seré para vos",
        "Tus ojos que reflejan bondad y sabiduría", "Verte disfrutar de tus pasiones y tus amigos", "La certeza de que no estás sola jamás",
        "Tus triunfos celebrados con lágrimas de emoción", "La bendición de haberte visto nacer y crecer", "Tu fortaleza serena ante los imprevistos",
        "Nuestras sobremesas hablando de proyectos", "El orgullo de ver la gran mujer que sos", "Tu sentido del humor inteligente y chispeante",
        "La calma de verte en paz con tu vida", "Tus abrazos que me devuelven la juventud", "El compromiso de amarte y apoyarte siempre",
        "Tus sueños cumplidos que festejo como míos", "La gratitud eterna por ser tu padre", "Un cumpleaños mágico para mi princesa querida",
        "Brindo por tu felicidad presente y futura"
    ]
    memories = [
        "Feliz cumpleaños, hija de mi alma. Me acuerdo como si fuera ayer del día en que diste tus primeros pasitos tambaleantes sosteniéndote de mis dedos.",
        "¡Muy feliz cumpleaños, mi pequeña gigante! Todavía me acuerdo de cuando me mostrabas tus dibujos llenos de colores y me explicabas con seriedad historias fantásticas.",
        "Hija querida, qué emoción siento al recordar nuestras charlas en la cocina a la noche, cuando me contabas tus sueños de adolescente mientras preparábamos algo rico.",
        "Feliz cumpleaños a mi mayor tesoro. Nunca voy a olvidar tus nervios el primer día de clases y cómo te diste vuelta antes de entrar para regalarme una sonrisa valiente.",
        "Hija mía, verte crecer y descubrir tu propia vocación ha sido el viaje más conmovedor y hermoso de toda mi existencia.",
        "¡Feliz cumpleaños, hermosa! Me llena de nostalgia y alegría recordar las tardes en que leíamos cuentos antes de dormir y te quedabas dormida con la mano en mi pecho.",
        "Hija querida, admiro profundamente la mujer independiente, lúcida y sensible en la que te fuiste convirtiendo con el paso de los años.",
        "Feliz cumpleaños, mi vida. Cada vez que miro hacia atrás y veo el camino que recorriste, me emociona la dignidad con la que encaraste cada etapa."
    ]
    lessons = [
        "De vos aprendí a mirar el mundo con ojos más compasivos, a no juzgar a las personas con ligereza y a maravillarme con las cosas sencillas.",
        "Tu perseverancia para defender lo que considerás justo me enseñó que la valentía no hace ruido, sino que se demuestra con coherencia diaria.",
        "Verte superar tus propios miedos y caídas me dio la lección más grande de resiliencia y madurez que un padre puede recibir de un hijo.",
        "Me enseñaste que el amor paternal no consiste en retener ni en imponer rumbos, sino en brindar raíces firmes para volver y alas fuertes para volar.",
        "A tu lado comprendí que la ternura y la sensibilidad son la verdadera fortaleza en un mundo que a veces se empeña en ser duro.",
        "Tu alegría sincera y tus ganas de aprender me impulsaron todos los días a esforzarme para ser un ejemplo digno de tu admiración.",
        "De vos aprendí la importancia de escuchar sin prejuicios y de adaptarme a los nuevos tiempos con la mente y el corazón abiertos.",
        "Tu honestidad para decir lo que sentís me enseñó el valor de la autenticidad y la transparencia en las relaciones humanas."
    ]
    grats = [
        "Gracias por haberme regalado el título más honroso de mi vida, que es ser tu papá, y por llenar mis días de orgullo y amor.",
        "Agradezco cada sonrisa tuya, cada abrazo apretado en las despedidas y la complicidad hermosa que supimos construir a través de los años.",
        "Gracias por tu nobleza de corazón, por cuidar a los tuyos con tanta dedicación y por hacerme sentir tan querido y valorado.",
        "Te doy las gracias infinitas por ser una hija tan comprensiva, por tu paciencia en mis errores y por tu afecto constante.",
        "Gracias por iluminar nuestro hogar desde el primer día que llegaste al mundo y por seguir siendo nuestro mayor motivo de alegría.",
        "Agradezco con toda el alma tus mensajes diarios, tus preocupaciones cariñosas por mi salud y la calidez con la que tratás a tu familia.",
        "Gracias por ser fiel a tus principios, por no dejarte torcer por las modas fáciles y por caminar con la frente en alto.",
        "Te agradezco por permitirme acompañarte en tu crecimiento y por la dicha inmensa de verte volar con tus propias alas."
    ]
    wishes = [
        "Deseo que este nuevo año te regale salud de hierro, proyectos apasionantes y la alegría profunda de ver cumplidos tus anhelos.",
        "Que la vida te abra caminos generosos, te rodee de amistades nobles y te devuelva con creces todo el amor que sembrás a tu paso.",
        "Brindo por tu felicidad, por tu libertad y para que nunca olvides que en mis brazos siempre vas a tener un refugio seguro e incondicional.",
        "Que este cumpleaños marque el inicio de una etapa llena de satisfacciones, aprendizajes luminosos y momentos inolvidables.",
        "Te amo con toda mi alma y deseo que seas infinitamente feliz, viviendo a tu manera y fiel a lo que te dicta el corazón.",
        "Que la salud, la serenidad y la buena estrella te acompañen en cada paso que des por este mundo hermoso.",
        "Deseo que hoy te sientas celebrada, mimada y profundamente orgullosa de todo lo que lograste con tu propio esfuerzo.",
        "Que nunca te falte la sonrisa en el rostro ni la certeza de que tu papá te ama con un amor que no tiene fin."
    ]
    return build_relationship("Una hija", "hija querida", memories, lessons, grats, wishes, titles)
