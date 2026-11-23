import fs from 'node:fs';
import path from 'node:path';

/**
 * Reparación de valor unitario (Ultra Guía Cósmica v3.0):
 * 1. Completa 70 títulos truncados en preposición/artículo (g14, g15, g17) respetando R0-R7 y sin alterar slugs.
 * 2. Elimina la contaminación de "cumpleaños" / "vuelta al sol" en cartas-de-amor-para-un-mes-de-novios.
 * 3. Reescribe los 64 cuerpos duplicados con textos originales (>=42 palabras, anatomía de 5 capas) específicos de cada categoría.
 */

const TITULOS_COMPLETOS = {
  // g14-bing-imprimibles-tematicas.json (5)
  'desde-mi-celular-hasta-el-tuyo-viaja-carino-del-bueno-en-tu':
    'Desde mi celular hasta el tuyo viaja cariño del bueno',
  'tu-presencia-en-cualquier-grupo-mejora-el-animo-al-instante-todos-los':
    'Tu presencia en cualquier grupo mejora el ánimo al instante',
  'para-vos-que-haces-mas-livianos-incluso-los-lunes-mas-largos-de':
    'Para vos que hacés más livianos incluso los lunes más largos',
  'hace-tiempo-veniamos-esperando-la-excusa-linda-de-juntar-a-toda-la':
    'Hace tiempo veníamos esperando la excusa de juntar a toda la familia',
  'compartir-esta-mesa-celebrando-tu-vida-es-el-mejor-plan-de-la':
    'Compartir esta mesa celebrando tu vida es el mejor plan',

  // g15-condolencias.json (50)
  'acompanamos-con-profundo-respeto-este-duelo-enorme-por-la-partida-de-tu':
    'Acompañamos con profundo respeto este duelo enorme por tu mamá',
  'con-todo-respeto-acercamos-un-abrazo-calmo-en-estas-horas-sensibles-para':
    'Con todo respeto acercamos un abrazo calmo en estas horas sensibles',
  'desde-la-distancia-o-bien-cerca-pensamos-en-vos-y-en-tu':
    'Desde la distancia o bien cerca pensamos en vos y tu familia',
  'pensamos-en-tu-mama-con-ternura-y-en-ustedes-deseando-descanso-y':
    'Pensamos en tu mamá con ternura deseando descanso y calma',
  'su-recuerdo-habita-cada-consejo-amable-y-cada-cuidado-cotidiano-en-el':
    'Su recuerdo habita cada consejo amable y cada cuidado cotidiano',
  'recordamos-su-sonrisa-mansa-y-la-paciencia-hermosa-con-que-recibia-a':
    'Recordamos su sonrisa mansa y la paciencia con que recibía visitas',
  'cada-ensenanza-sencilla-de-su-vida-sigue-viva-en-el-corazon-de':
    'Cada enseñanza sencilla de su vida sigue viva en el corazón familiar',
  'nombramos-con-mucho-afecto-todo-lo-que-ella-construyo-cuidando-siempre-a':
    'Nombramos con afecto todo lo que ella construyó cuidando a los suyos',
  'la-ausencia-de-una-madre-pesa-hondo-recibi-todo-nuestro-respaldo-y':
    'La ausencia de una madre pesa hondo; recibí todo nuestro respaldo',
  'sin-presiones-ni-discursos-largos-te-acerco-mi-abrazo-mas-verdadero-y':
    'Sin presiones ni discursos largos te acerco mi abrazo más verdadero',
  'frente-al-duelo-por-una-madre-solo-queda-ofrecer-presencia-humilde-y':
    'Frente al duelo por una madre solo queda ofrecer presencia humilde',
  'cuenta-conmigo-esta-semana-para-lo-que-haga-falta-resolver-en-la':
    'Contá conmigo esta semana para lo que haga falta resolver en casa',
  'descansa-en-paz-quien-tanto-cuido-a-su-gente-nuestro-abrazo-para':
    'Descansa en paz quien tanto cuidó a su gente; nuestro abrazo',
  'acompanamos-en-silencio-y-respeto-profundo-este-dolor-tan-grande-por-tu':
    'Acompañamos en silencio y respeto profundo este dolor tan grande',
  'te-mando-un-abrazo-enorme-deseando-calma-frente-a-la-perdida-de':
    'Te mando un abrazo enorme deseando calma frente a esta pérdida',
  'lamento-muchisimo-la-partida-de-tu-padre-fue-un-hombre-digno-y':
    'Lamento muchísimo la partida de tu padre; fue un hombre digno',
  'con-profundo-respeto-acercamos-nuestra-compania-serena-a-vos-y-toda-la':
    'Con profundo respeto acercamos nuestra compañía serena a toda tu familia',
  'quienes-lo-tratamos-sabemos-cuanto-respetaba-su-trabajo-y-cuidaba-a-los':
    'Quienes lo tratamos sabemos cuánto respetaba su trabajo y su familia',
  'hoy-se-siente-un-vacio-hondo-en-la-familia-te-acompano-de':
    'Hoy se siente un vacío hondo en la familia; te acompaño sinceramente',
  'cada-ensenanza-practica-de-tu-papa-sigue-viva-en-tu-forma-de':
    'Cada enseñanza práctica de tu papá sigue viva en tu caminar',
  'tu-padre-supo-sembrar-respeto-donde-iba-y-amor-firme-dentro-de':
    'Tu padre supo sembrar respeto donde iba y amor firme en casa',
  'llevamos-en-alto-la-memoria-buena-de-quien-cumplio-su-deber-con':
    'Llevamos en alto la memoria buena de quien cumplió con nobleza',
  'descansa-en-paz-un-padre-querido-y-ejemplar-nuestro-abrazo-sincero-a':
    'Descansa en paz un padre querido y ejemplar; nuestro abrazo sincero',
  'amigo-querido-estoy-aca-cerca-para-acompanar-este-momento-tan-duro-con':
    'Amigo querido, estoy acá cerca para acompañar este momento tan duro',
  'te-mando-un-abrazo-largo-sabiendo-lo-mucho-que-querias-a-tu':
    'Te mando un abrazo largo sabiendo cuánto querías a tu familiar',
  'aca-sigue-tu-amigo-de-siempre-listo-para-escuchar-o-acompanar-en':
    'Acá sigue tu amigo de siempre, listo para escuchar o acompañar',
  'acompano-tu-tristeza-de-cerca-respetando-tus-silencios-y-acompanando-a-t':
    'Acompaño tu tristeza de cerca, respetando tus silencios y tus tiempos',
  'abrazamos-de-todo-corazon-a-vos-y-los-tuyos-deseando-calma-y':
    'Abrazamos de todo corazón a vos y los tuyos deseando calma',
  'desde-lejos-o-en-la-misma-ciudad-seguis-muy-presente-en-mi':
    'Desde lejos o en la misma ciudad, seguís muy presente siempre',
  'para-vos-no-hacen-falta-discursos-elegantes-sabes-cuanto-te-quiero-y':
    'Para vos no hacen falta discursos largos: sabés cuánto te quiero',
  'pensando-en-vos-todo-el-dia-deseando-que-tengas-contencion-tranquila-en':
    'Pensando en vos todo el día, deseando que tengas contención tranquila',
  'vengo-a-caminar-a-tu-lado-en-estas-semanas-tan-pesadas-sin':
    'Vengo a caminar a tu lado en estas semanas tan pesadas',
  'caminamos-en-esta-tristeza-junto-a-vos-con-toda-la-lealtad-de':
    'Caminamos en esta tristeza junto a vos con toda nuestra lealtad',
  'recibi-todo-mi-apoyo-de-amigo-fiel-para-vos-y-toda-tu':
    'Recibí todo mi apoyo de amigo fiel para vos y tu casa',
  'con-el-corazon-apretado-acompano-tu-duelo-esperando-que-encuentres-algo':
    'Con el corazón apretado acompaño tu duelo deseando algo de alivio',
  'frente-a-esta-ausencia-tan-grande-estoy-cerca-para-sostenerte-paso-a':
    'Frente a esta ausencia tan grande estoy cerca para sostenerte siempre',
  'descanse-en-paz-quien-tanto-quisiste-te-abrazo-fuerte-hoy-y-los':
    'Descanse en paz quien tanto quisiste; te abrazo fuerte estos días',
  'mandamos-fuerza-serena-deseando-que-el-descanso-y-el-afecto-abracen-tu':
    'Mandamos fuerza serena deseando que el descanso abrace tu corazón',
  'junto-a-vos-camino-estas-semanas-para-que-no-cargues-todo-de':
    'Junto a vos camino estas semanas para que no cargues solo',
  'acompanamos-tu-duelo-con-sincero-aprecio-deseando-serenidad-para-vos-y-l':
    'Acompañamos tu duelo con sincero aprecio deseando serenidad para tu familia',
  'recibi-un-saludo-calido-de-parte-de-quienes-compartimos-cada-semana-con':
    'Recibí un saludo cálido de quienes compartimos cada semana laboral',
  'hoy-pesamos-mucho-esta-ausencia-y-te-enviamos-fuerzas-serenas-desde-el':
    'Sentimos mucho esta ausencia y te enviamos fuerzas serenas del equipo',
  'deseamos-paz-y-contencion-real-rodeado-de-tus-afectos-mas-cercanos-en':
    'Deseamos paz y contención real rodeado de tus afectos más cercanos',
  'de-parte-de-cada-colega-del-sector-va-un-deseo-honesto-de':
    'De parte de cada colega del sector va nuestro respeto sincero',
  'la-oficina-queda-en-buenas-manos-dedicale-todo-el-tiempo-a-tu':
    'La oficina queda en buenas manos; dedicale todo el tiempo familiar',
  'por-el-trabajo-esperara-ahora-lo-unico-importante-es-estar-junto-a':
    'Por ahora el trabajo espera; lo único importante es tu familia',
  'tu-calma-personal-y-salud-valen-primero-siempre-en-situaciones-asi-de':
    'Tu calma personal y salud valen primero en momentos así difíciles',
  'cuando-vuelvas-a-conectarte-estaremos-listos-para-ayudarte-a-retomar-de':
    'Cuando vuelvas a conectarte estaremos listos para ayudarte a retomar',
  'acompano-tu-tristeza-con-inmenso-respeto-deseando-paz-y-calma-para-tu':
    'Acompaño tu tristeza con inmenso respeto deseando paz para tu hogar',
  'oramos-en-silencio-pidiendo-a-dios-que-abrace-con-paz-a-tu':
    'Oramos en silencio pidiendo a Dios que abrace con paz tu casa',
  'elevamos-una-oracion-humilde-por-su-alma-y-por-la-fortaleza-de':
    'Elevamos una oración humilde por su alma y por tu fortaleza',
  'paz-divina-para-el-hogar-que-hoy-siente-el-silencio-de-su':
    'Paz divina para el hogar que siente el silencio de su partida',

  // g17-keyword-expansion.json (15)
  'desperta-con-el-sol-bonito-y-una-cancion-hecha-para-alegrarte-el':
    'Despertá con el sol bonito y una canción para alegrarte',
  'celebramos-tus-65-anos-admirando-el-ejemplo-generoso-que-construiste-pas':
    'Celebramos tus 65 años admirando el ejemplo generoso que construiste',
  'que-esta-nueva-etapa-tras-los-65-anos-traiga-descanso-rico-y':
    'Que esta nueva etapa tras los 65 años traiga descanso merecido',
  'frente-a-tus-65-anos-sos-referencia-segura-de-carino-respeto-y':
    'Frente a tus 65 años sos referencia segura de cariño sincero',
  'celebramos-con-el-alma-tus-90-anos-rodeados-de-hijos-nietos-y':
    'Celebramos con el alma tus 90 años rodeados de familia',
  'tu-presencia-serena-a-los-90-anos-sigue-siendo-el-corazon-del':
    'Tu presencia serena a los 90 años sigue siendo nuestro pilar',
  'raices-firmes-de-todo-el-arbol-familiar-que-hoy-celebramos-a-los':
    'Raíces firmes de todo el árbol familiar en tus 90 años',
  'brindamos-con-emocion-por-la-dicha-enorme-de-tenerte-hoy-a-los':
    'Brindamos con emoción por la dicha de abrazarte a los noventa',
  'respetamos-tu-voz-mansa-tu-dulzura-y-tus-historias-lindas-a-los':
    'Respetamos tu voz mansa, tu dulzura y tus historias a los noventa',
  'por-todo-lo-que-no-se-ve-me-sostuve-en-pie-con':
    'Por todo lo que no se ve me sostuve en pie',
  'honro-en-el-corazon-cada-llamada-que-llego-desde-otra-provincia-o':
    'Honro en el corazón cada llamada que llegó desde otra provincia',
  'recuerdo-en-que-pronto-volveran-las-mesas-llenas-y-las-risas-en':
    'Recuerdo con esperanza que pronto volverán las mesas llenas y risas',
  'agradecemos-cada-aporte-valioso-con-el-que-mejoras-nuestros-procesos-dia':
    'Agradecemos cada aporte valioso con el que mejorás nuestros procesos diarios',
  'compartir-jornadas-con-alguien-tan-confiable-resulta-un-verdadero-gusto':
    'Compartir jornadas con alguien tan confiable resulta un verdadero gusto siempre',
  'firme-equipo-construido-paso-a-paso-celebra-hoy-la-vida-de-su':
    'Firme equipo construido paso a paso celebra tu vida con gratitud'
};

// 64 cuerpos únicos (>=43 palabras, anatomía de 5 capas) para reemplazar duplicados en g05, g07 y g10
const CUERPOS_UNICOS = {
  // g05-tono.json (12)
  'alenta-hoy-abrazos-cercanos-junto-a-los-tuyos-siempre':
    '¡Feliz cumpleaños! Que este año te encuentre con salud liviana, mates ricos sin apuro y la gente justa alrededor de tu mesa. Gracias por sumar buena energía a cada charla cotidiana; ojalá hoy recibas el doble del cariño que regalás durante todo el año y brindes a lo grande.',
  'multiplica-motivos-reales-de-corazon-desde-lo-cotidiano':
    '¡Muy feliz vuelta al sol! Ojalá recibas abrazos sinceros, noticias lindas y un año entero con motivos claros para sonreír sin apuro. Que nunca falten planes simples que te renueven el ánimo ni tiempo libre para disfrutar lo que más te gusta con tu gente querida.',
  'sembra-tiempo-compartido-de-corazon-desde-lo-cotidiano':
    'Cumplir años invita a frenar un minuto y mirar lo construido con calma: cada paso honesto, cada conversación franca y cada vínculo leal te trajeron hasta acá con más claridad. Que este ciclo nuevo profundice tu paz interior y multiplique tus proyectos con verdadero sentido.',
  'ofrece-hoy-charlas-largas-en-cada-nueva-manana-siempre':
    'Apenas clarea la mañana\ny tu nombre vuelve a brillar,\ncon tu risa que desarma\ncualquier sombra del andar.\nSos la calma de mis días\ny el impulso al despertar,\nla certeza más sencilla\nque elegí para cuidar.\n\nBrindo por tu nuevo ciclo,\npor tu boca y tu mirar,\nporque elegirte cada día\nes mi forma de celebrar.',
  'dibuja-cada-instante-con-serena-alegria-para-todo-el-ano':
    'No hace falta un gran discurso\ncuando alcanza con tu voz,\npara hacer que una jornada\nse transforme entre los dos.\nCada tarde que comparto\ncon tu gesto protector,\nme confirma que tu abrazo\nes mi refugio mejor.\n\nQue tus sueños se encaminen\ncon abrigo y claridad,\nfeliz cumpleaños, vida mía,\ngracias por tu lealtad.',
  'construi-con-alegria-buenos-habitos-con-impulso-genuino':
    'Si me piden un deseo\npara el año que estrenás,\npido tardes de sobremesa\ndonde nunca faltes más.\nPido viajes improvisados,\nmates tibios al pasar,\ny mirarnos en silencio\nsin tener que explicar.\n\nPido abrazos sin relojes,\nproyectos que hagan bien,\ny caminar a tu costado\nen lo que venga también.',
  'segui-salud-serena-de-corazon-desde-lo-cotidiano':
    '¡Feliz cumpleaños! Gracias por tu calidez constante y por esa forma sencilla de mejorar cualquier conversación con solo aparecer. Te deseo un año hermoso, con salud tranquila, trabajo que te entusiasme y muchos encuentros reales alrededor de la mesa con quienes te quieren bien.',
  'abraza-hoy-huellas-nobles-con-corazon-sincero-siempre':
    'Te mando un saludo grande lleno de cariño genuino para este nuevo año de vida: ojalá te regale descanso verdadero, buena salud y proyectos que disfrutes de punta a punta. Que hoy tengas un festejo a tu medida y una sobremesa repleta de risas sinceras.',
  'recorda-calma-diaria-de-corazon-junto-a-los-tuyos':
    'Hay personas que no necesitan levantar la voz para dejar huella honda en la vida de los demás, y vos sos una de ellas. Gracias por sostener con hechos cuando más importa y por escuchar sin apuro cada vez que alguien te necesita. ¡Feliz cumpleaños!',
  'sella-con-alegria-gratitud-genuina-para-todo-el-ano':
    'Hoy celebro tu vida con el corazón agradecido por todo lo compartido hasta acá y por la nobleza con la que tratás a tu gente en cualquier circunstancia. Ojalá te vuelva multiplicado cada gesto silencioso que entregás sin hacer ruido. ¡Muy feliz cumpleaños y excelente año!',
  'sembra-pasos-firmes-de-corazon-en-esta-nueva-vuelta':
    '¡Feliz cumple! Pasaba por WhatsApp para dejarte un abrazo gigante y desearte un día espectacular con torta rica, cero obligaciones urgentes y mensajes de los que alegran la mañana. Cuando quieras coordinamos un café tranquilo esta semana para brindar en persona como corresponde.',
  'cuida-hoy-calma-diaria-junto-a-los-tuyos-siempre':
    '¡Feliz cumpleaños! Entre tanta rutina acelerada, encontrarte y conversar con vos se volvió mi parte favorita de la semana. Admiro cómo hacés fácil cualquier charla y ojalá este nuevo año nos regale varias excusas lindas para seguir brindando juntos sin mirar el reloj.',

  // g07-familia.json (14)
  'mantene-cada-instante-con-huellas-nobles-para-lo-que-empieza':
    '¡Feliz cumpleaños! Gracias por sumarte a nuestra familia con respeto, escucha tranquila y gestos concretos que hacen más cálida cada reunión en casa. Te deseo un año repleto de salud firme, proyectos lindos y sobremesas largas rodeada de afecto verdadero y buenas charlas.',
  'destaca-con-alegria-nuevas-metas-desde-lo-cotidiano':
    'En tu cumpleaños quiero agradecerte la paciencia, el buen humor en las sobremesas y el lugar cuidado que supiste construir en nuestra familia sin forzar nada. ¡Muy feliz día! Que este nuevo año te traiga descanso real, viajes disfrutados y muchísimas alegrías compartidas.',
  'recibi-suenos-propios-de-corazon-con-corazon-sincero':
    '¡Muy feliz cumpleaños! Admiro la naturalidad con la que tendiste puentes y aportaste armonía cotidiana a esta casa desde el primer encuentro. Que este nuevo año te regale salud plena, proyectos entusiasmantes y el reconocimiento sincero de todos nosotros en cada fecha especial.',
  'multiplica-con-alegria-senderos-claros-con-corazon-sincero':
    '¡Feliz cumpleaños! Gracias por estar presente con hechos concretos, consejos prácticos y una calma que suma muchísimo en nuestra vida familiar de cada semana. ¡A festejar como merecés, con buena comida casera, charla distendida y un año excelente por delante lleno de salud!',
  'sella-abrazos-cercanos-de-corazon-en-cada-nueva-manana':
    'No siempre alcanzan las palabras para reconocer a quien elige acompañar todos los días con respeto, buen trato y cariño firme. Gracias por todo lo que aportás a esta familia con tanta generosidad; te deseo un muy feliz cumpleaños y un año sereno.',
  'segui-hoy-proyectos-lindos-para-todo-el-ano-siempre':
    '¡Feliz vuelta al sol! Ojalá disfrutes un día lleno de buena comida, risas familiares y el reconocimiento sincero de todos los que valoramos tu compañía cotidiana. Que el año que abrís te encuentre con salud firme, descansos merecidos y planes que te entusiasmen.',
  'cultiva-hoy-vinculos-honestos-para-lo-que-empieza-siempre':
    '¡Feliz cumpleaños por partida doble! Qué alegría verlas crecer compartiendo una complicidad única mientras cada una brilla con su propia personalidad, sus gustos y sus metas personales. Que este año les traiga salud, risas largas y sueños cumplidos a las dos por igual.',
  'desea-cada-instante-con-pasos-firmes-desde-lo-cotidiano':
    'Doble vela, doble torta y el doble de motivos para abrazarlas fuerte en este día especial. Que este año les regale aventuras compartidas hermosas y también caminos propios llenos de libertad, amigas leales y proyectos que las hagan felices todos los días.',
  'renova-con-alegria-motivos-reales-con-corazon-sincero':
    '¡Muy feliz cumple a las dos! Comparten fecha y una mirada cómplice inconfundible que nadie más descifra, pero cada una aporta su chispa irrepetible y su talento propio a esta familia. Que festejen a lo grande y tengan un año brillante y saludable.',
  'escucha-paz-verdadera-de-corazon-en-cada-nueva-manana':
    'Celebrar el cumpleaños de ustedes dos siempre convierte la casa en fiesta asegurada y sobremesa larga llena de chistes internos. Que nunca les falten salud firme, anécdotas nuevas para reír juntas ni el entusiasmo intacto para perseguir cada meta que se propongan.',
  'recorda-cada-instante-con-buenos-habitos-desde-lo-cotidiano':
    '¡Feliz cumpleaños para los dos! Qué lindos recuerdos se arman alrededor de una fecha que duplica abrazos, bromas compartidas y orgullo familiar desde siempre. Que este nuevo año los encuentre sanos, unidos y festejando logros propios y también en equipo con toda la familia.',
  'sella-hoy-mesas-alegres-con-calma-y-verdad-siempre':
    'Dos formas distintas de ver el mundo y un mismo equipo inquebrantable desde el primer día. ¡Feliz cumpleaños, gemelos! Que vengan grandes aventuras, buena salud, amistades firmes y motivos de sobra para seguir brindando lado a lado en cada nueva etapa.',
  'tenerte-charlas-largas-de-corazon-en-cada-nueva-manana':
    '¡Muy feliz cumple a este dúo imparable! Ojalá cada uno reciba lo que sueña para este año, disfrute su propio ritmo sin comparaciones y sigan celebrando metas codo a codo con esa lealtad que siempre se nota en cada reunión familiar.',
  'cuida-cada-instante-con-motivos-reales-con-calma-y-verdad':
    'Soplar las velas de a dos tiene un encanto especial: multiplica la alegría de la mesa, duplica las risas y deja anécdotas que recordamos durante todo el año. ¡Que tengan un cumpleaños muy celebrado, salud abundante y un ciclo lleno de proyectos lindos!',

  // g10-especiales.json (38)
  'recorda-salud-serena-de-corazon-en-cada-nueva-manana':
    '¡Feliz cumpleaños! No sé si ya te lo dijeron hoy, pero tenés una sonrisa que desordena cualquier agenda y mejora el día apenas aparecés. Ojalá tengas un festejo a la altura de tu buena energía y un año espectacular lleno de planes lindos.',
  'sella-con-alegria-serena-alegria-con-gratitud-viva':
    '¡Muy feliz cumple! Que recibas muchos mensajes lindos y abrazos cálidos durante todo el día, aunque confieso que me encantaría que el mío te saque una sonrisa distinta y abra una buena excusa para compartir un café pronto y conversar sin apuro.',
  'recibi-con-alegria-abrazos-cercanos-con-mirada-serena':
    '¡Feliz vuelta al sol! Cada charla con vos pasa demasiado rápido y deja ganas reales de seguir conversando un rato más. Ojalá este nuevo año te traiga proyectos geniales, salud plena y varias tardes libres para cruzarnos y brindar tranquilos.',
  'sembra-con-alegria-suenos-propios-con-calma-y-verdad':
    'Quería saludarte por tu cumpleaños y desearte un año a la altura de tu buena onda y tu manera tan auténtica de ver las cosas. Si falta un brindis pendiente esta semana o un café de festejo, avisame y lo organizamos con gusto.',
  'cultiva-hoy-senderos-claros-para-todo-el-ano-siempre':
    '¡Feliz cumpleaños! Este año se celebra con doble latido y una ilusión enorme que ilumina toda la casa desde la mañana. Ojalá disfrutes cada semana de esta espera con calma, mimos merecidos, noches de buen descanso y salud plena para los dos.',
  'reconoce-paz-verdadera-de-corazon-en-esta-nueva-vuelta':
    'Qué cumpleaños tan especial te toca vivir mientras esperás la llegada de tu bebé. Te deseo descanso real, manos dispuestas cerca para ayudarte en lo cotidiano y muchísima ternura alrededor tuyo para disfrutar cada capítulo de este año irrepetible en familia.',
  'honra-fuerza-tranquila-de-corazon-con-gratitud-viva':
    '¡Muy feliz cumpleaños, futura mamá! Hoy brindamos por vos, por tu fortaleza serena y por la etapa luminosa que ya empieza a asomar en tu hogar. Que nunca te falten abrazos pacientes, risas lindas y el cuidado cercano de toda tu gente.',
  'protege-hoy-proyectos-lindos-con-afecto-cercano-siempre':
    '¡Feliz cumpleaños! Paso por tu muro para dejarte un abrazo enorme y desearte un año cargado de salud firme, viajes lindos y buenas noticias de esas que alegran la semana. Que hoy disfrutes tu día a pleno rodeado de quienes te quieren bien.',
  'ofrece-con-alegria-charlas-largas-desde-lo-cotidiano':
    '¡Muy feliz día! Aunque nos crucemos más seguido por redes que en persona, siempre da gusto leerte, ver tus novedades y celebrar una nueva vuelta al sol. Que tengas un cumpleaños excelente, buena compañía alrededor de la mesa y un año lleno de alegría.',
  'dibuja-serena-alegria-de-corazon-con-corazon-sincero':
    '¡Feliz cumple! Que este muro se llene de buenos deseos sinceros y que la vida te sorprenda con días tranquilos, proyectos cumplidos y sobremesas largas con tu gente favorita. Te mando un saludo muy cálido y mis mejores deseos desde acá.',
  'mantene-hoy-gratitud-genuina-con-impulso-genuino-siempre':
    '¡Feliz cumpleaños al dueño absoluto del sillón y de cada rayo de sol que entra por la ventana! Que hoy haya lata húmeda doble, siestas interminables, cajas nuevas para investigar y cero visitas al veterinario durante todo el año entero.',
  'guia-motivos-reales-de-corazon-con-afecto-cercano':
    '¡Felices bigotes y feliz vuelta al sol para este michi experto en elegir una caja de cartón por encima de cualquier cama nueva! Gracias por tu ronroneo diario, tus carreras nocturnas por el pasillo y tu compañía silenciosa tan fiel en casa.',
  'cuida-proyectos-lindos-de-corazon-con-gratitud-viva':
    'Hoy cumple años la compañía más elegante, curiosa y silenciosa de toda la casa: que nunca te falten caricias detrás de las orejas, ventanas soleadas para mirar la calle durante horas y premios ricos cada vez que nos recibís al volver.',
  'escribi-cada-instante-con-tiempo-compartido-para-todo-el-ano':
    '¡Feliz cumpleaños al mejor recibidor de puertas del mundo! Gracias por mover la cola con la misma alegría contagiosa cada vez que vuelvo a casa, aunque haya salido apenas cinco minutos. Hoy tenés paseo largo por la plaza y galleta extra merecida.',
  'forja-hoy-senderos-claros-en-esta-nueva-vuelta-siempre':
    '¡Feliz cumple, compañero de cuatro patas! Ojalá sigamos sumando tardes de plaza sin apuro, siestas cómodas a los pies de la cama y esa lealtad limpia y alegre que solo vos sabés regalar cada mañana apenas escuchás abrirse la puerta.',
  'inaugura-cada-instante-con-abrazos-cercanos-con-afecto-cercano':
    'Un año más celebrando tus saltos de alegría, tus ojos atentos apenas agarro la correa y el cariño incondicional que llena cada rincón de nuestra casa. ¡Muy feliz cumpleaños, perrito querido, que tengas salud fuerte, juguetes nuevos y muchísimos juegos al sol!',
  'estrena-cada-instante-con-mesas-alegres-con-corazon-sincero':
    '¡Feliz cumpleaños para mí! Hoy celebro haber atravesado meses exigentes sin perder mi esencia ni mi buen humor, agradeciendo a quienes me acompañan con verdad. Recibo este nuevo año con salud, calma mental y ganas reales de disfrutar cada etapa.',
  'inspira-con-alegria-calma-diaria-en-cada-nueva-manana':
    'Hoy me regalo un rato de calma para agradecer todo lo vivido en este año: aprendí a poner límites sanos, cuidar mi energía y valorar las charlas simples que sí suman bienestar. ¡Feliz cumpleaños para mí y por lo bueno que viene!',
  'honra-tiempo-compartido-de-corazon-para-todo-el-ano':
    'Un año más de vida, de historias nuevas y de aprendizaje propio que llevo con gratitud. Me deseo salud firme, paciencia conmigo en los días difíciles y el coraje tranquilo de seguir eligiendo vínculos honestos y proyectos que me hagan bien.',
  'confia-hoy-risa-compartida-con-impulso-genuino-siempre':
    '¡Feliz vuelta al sol para mí! Brindo por los proyectos que salieron adelante, por los tropezones que me enseñaron a mirar mejor y por las personas leales que hacen más liviano cualquier camino. A celebrar este comienzo sin prisa y con alegría.',
  'descubri-hoy-vinculos-honestos-con-gratitud-viva-siempre':
    '¡Feliz cumpleaños para mí! Me abrazo con orgullo por cada decisión valiente que tomé este año y por la mujer más serena y honesta en la que me estoy convirtiendo. Que este ciclo nuevo llegue lleno de paz, salud y encuentros verdaderos.',
  'forja-con-alegria-calma-diaria-junto-a-los-tuyos':
    'Hoy me celebro sin apuro ni exigencias de más: agradezco mi historia completa, mis afectos genuinos y la libertad tranquila de disfrutar mi propia compañía. Me deseo un año saludable, liviano y lleno de pequeñas alegrías cotidianas que me renueven las ganas.',
  'inaugura-tiempo-compartido-de-corazon-para-lo-que-empieza':
    'Brindo por mí en este nuevo año de vida: que siga eligiendo vínculos recíprocos, proyectos con sentido real y mañanas tranquilas para tomar un buen café sin mirar el celular. Gracias de corazón a quienes celebran conmigo este comienzo de ciclo.',
  'elegi-hoy-risa-compartida-desde-lo-cotidiano-siempre':
    '¡Muy feliz cumple para mí! Llego a esta fecha más liviana, más respetuosa de mis propios tiempos y agradecida por cada paso recorrido hasta hoy. Que no falten risas largas, salud cuidada ni sueños en marcha durante estos doce meses nuevos.',
  'protege-con-alegria-nuevas-metas-para-todo-el-ano':
    'En mi cumpleaños elijo agradecer antes que pedir: gracias por la salud que me sostiene, por la mesa compartida y por las personas leales que suman calma en los días movidos. ¡Feliz nuevo año de vida para mí y a seguir creciendo!',
  'reconoce-suenos-propios-de-corazon-con-impulso-genuino':
    'Hoy sumo un año más con menos apuro y mucha más claridad sobre lo que quiero sostener cerca de mi vida. ¡Feliz cumpleaños para mí! Que vengan proyectos honestos, viajes lindos y tiempo de calidad real con quienes quiero bien.',
  'impulsa-hoy-salud-serena-con-calma-y-verdad-siempre':
    'No busco un año perfecto ni libre de tropiezos, sino un año verdadero, con salud cuidada, trabajo honesto y sobremesas largas con la gente que quiero. ¡Feliz cumpleaños para mí y gracias a todos por los saludos tan cariñosos de hoy!',
  'abri-cada-instante-con-huellas-nobles-con-mirada-serena':
    'Celebro llegar a un nuevo cumpleaños con ganas intactas de aprender, curiosear y disfrutar lo cotidiano sin postergar lo importante para después. Que este ciclo traiga calma mental, buenos hábitos diarios y abrazos sinceros de los que recargan el ánimo.',
  'construi-cada-instante-con-calma-diaria-con-impulso-genuino':
    'Cumplir un año más me recuerda que el tiempo bien vivido no se mide en velocidad ni en listas tachadas, sino en paz mental y vínculos honestos. Recibo esta nueva etapa agradecido por lo caminado y con los pies en la tierra.',
  'festeja-salud-serena-de-corazon-con-gratitud-viva':
    'Hoy me detengo a reconocer cuánto crecí en silencio durante estos últimos doce meses, incluso en las semanas donde parecía que nada avanzaba. Sigo adelante más liviano, agradecido por todo lo aprendido y con el corazón abierto a lo bueno que llega.',
  'envolve-risa-compartida-de-corazon-con-mirada-serena':
    'En esta nueva vuelta al sol elijo soltar lo que ya cumplió su ciclo y hacer espacio para hábitos tranquilos, lecturas nuevas, viajes pensados y conversaciones sinceras sin prisa. Feliz cumpleaños para mí y profunda gratitud por seguir aprendiendo cada día.',
  'guarda-hoy-mesas-alegres-con-gratitud-viva-siempre':
    'Mi balance de cumpleaños cabe en una idea simple y serena: agradecer a quienes estuvieron en las difíciles, perdonarme los errores pasados y celebrar cada pequeño logro cotidiano que me trajo hasta este día nuevo con más claridad, salud y calma.',
  'sonrei-hoy-mesas-alegres-con-impulso-genuino-siempre':
    'Hoy cumplo años mirando atrás con gratitud serena y hacia adelante con entusiasmo tranquilo: cada acierto y cada tropiezo afinaron mi brújula personal. Que este año nuevo me traiga salud firme, buenas charlas y proyectos que realmente valgan la pena.',
  'protege-proyectos-lindos-de-corazon-con-afecto-cercano':
    'Me deseo un año con menos ruido innecesario y más presencia real en lo que importa: salud cuidada, amistades firmes y proyectos que entusiasmen cada lunes. Gracias sinceras a quienes caminan a mi lado y celebran conmigo esta nueva etapa.',
  'inspira-salud-serena-de-corazon-en-esta-nueva-vuelta':
    'Llegar a otro cumpleaños en paz con mis decisiones y rodeado de afectos sinceros ya es motivo suficiente para brindar con una sonrisa tranquila. Recibo este nuevo capítulo de vida con los ojos abiertos, curiosidad activa, salud agradecida y mucha serenidad interior.',
  'renova-risa-compartida-de-corazon-con-gratitud-viva':
    'Hoy me reconozco el esfuerzo silencioso que nadie vio durante el año y renuevo el compromiso de cuidarme con la misma lealtad diaria con la que cuido a los míos. ¡Feliz cumpleaños para mí, excelente comienzo de ciclo y salud abundante!',
  'transmiti-fuerza-tranquila-de-corazon-con-corazon-sincero':
    '¡Felices 15 años! Que esta noche y todo el año que abrís te encuentren rodeada de tus amigas, música linda y sueños que recién empiezan a tomar vuelo. Nunca pierdas tu curiosidad despierta ni tu forma tan genuina y luminosa de sonreír.',
  'guarda-cada-instante-con-pasos-firmes-con-impulso-genuino':
    '¡Muy felices quince! Disfrutá cada abrazo, cada foto y esta etapa hermosa en la que empezás a descubrir con libertad quién querés ser. Que nunca te falten salud plena, alegría cotidiana y el respaldo firme de todos quienes te queremos tanto.'
};

// Variantes únicas para reemplazar la frase contaminada en cartas-de-amor-para-un-mes-de-novios
const ANIV_UN_MES_REEMPLAZOS = [
  'Celebrar este primer mes de novios confirma cuánto disfruto descubrir nuestras costumbres nuevas sin apuro y con sonrisa franca.',
  'Cumplir treinta días caminando juntos demuestra que la calma, la risa compartida y la escucha honesta se sienten como hogar desde el principio.',
  'Este primer mes de pareja dejó claro que hasta los planes simples de entre semana ganan otro color cuando los compartimos.',
  'Treinta días de novios alcanzaron para acumular charlas largas, mensajes inesperados y la certeza serena de querer seguir conociéndonos.',
  'Brindar por este primer mes juntos es agradecer lo fácil que resulta conversar, reírnos y cuidarnos sin forzar nada.',
  'Al cerrar nuestros primeros treinta días de noviazgo guardo cada caminata tranquila y cada mirada cómplice como señal de un comienzo hermoso.',
  'Este primer mes de amor nos regaló tardes sin reloj y la alegría genuina de sentirnos acompañados con respeto y ternura.',
  'Celebrar nuestro primer mes juntos me recuerda cuánto vale elegirnos cada día con gestos sencillos y palabra sincera.',
  'Treinta días como novios nos mostraron que la buena sintonía aparece en los detalles chiquitos: un mensaje a tiempo, un café y un abrazo largo.',
  'En este primer mes compartido aprendí que el cariño tranquilo se nota en cómo nos escuchamos y celebramos las pequeñas victorias diarias.',
  'Festejar un mes de novios tiene un encanto único: conserva la ilusión del comienzo y ya suma la confianza cálida de caminar a la par.',
  'Al completar nuestro primer mes juntos solo quiero agradecer tu calidez constante y brindar por todas las páginas nuevas que todavía nos esperan.'
];

const files = [
  'data/contenido.json',
  ...fs
    .readdirSync('data/categorias')
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => path.join('data/categorias', f))
];

let stats = { filesChanged: 0, titulos: 0, dups: 0, aniv1Mes: 0, vocativos: 0, markers: 0 };
let anivIdx = 0;
const VOC_REP_RE = /(,\s+(hija|hijo|mamá|papá|hermana|hermano|amiga|amigo|novia|novio|esposa|esposo|abuela|abuelo|prima|primo)\.\s+Cuando pienso en tu cumpleaños),\s+\2,/gi;
const TEXTO_MARKER_RE = /\s*\([^)\n]{4,100},\s*texto\s+(\d+)\)\.?/i;
const CIERRES_NATURALES = [
  ' con abrazos sinceros y buena charla.',
  ' con mesa llena y risa franca.',
  ' junto a quienes más querés.',
  ' con un brindis a tu medida.'
];

for (const file of files) {
  const arr = JSON.parse(fs.readFileSync(file, 'utf8'));
  let dirty = false;

  for (const r of arr) {
    if (r.tipo !== 'mensaje') continue;

    if (TEXTO_MARKER_RE.test(r.texto)) {
      r.texto = r.texto.replace(TEXTO_MARKER_RE, (_m, n) => {
        const idx = (Math.max(1, Number(n)) - 1) % CIERRES_NATURALES.length;
        return CIERRES_NATURALES[idx];
      });
      stats.markers++;
      dirty = true;
    }

    if (VOC_REP_RE.test(r.texto)) {
      r.texto = r.texto.replace(VOC_REP_RE, '$1,');
      stats.vocativos++;
      dirty = true;
    }

    if (TITULOS_COMPLETOS[r.slug] && r.titulo !== TITULOS_COMPLETOS[r.slug]) {
      r.titulo = TITULOS_COMPLETOS[r.slug];
      stats.titulos++;
      dirty = true;
    }

    if (CUERPOS_UNICOS[r.slug] && r.texto !== CUERPOS_UNICOS[r.slug]) {
      r.texto = CUERPOS_UNICOS[r.slug];
      stats.dups++;
      dirty = true;
    }

    if (r.categoria === 'cartas-de-amor-para-un-mes-de-novios') {
      let txt = String(r.texto || '');
      const origTxt = txt;
      const origTit = r.titulo;

      if (/Celebrar el cumpleaños por partida doble/i.test(txt)) {
        const rep = ANIV_UN_MES_REEMPLAZOS[anivIdx % ANIV_UN_MES_REEMPLAZOS.length];
        anivIdx++;
        txt = txt.replace(
          /Celebrar el cumpleaños por partida doble multiplica por dos[^.\n]*\./gi,
          rep
        );
      }
      if (/¡Muy feliz cumpleaños!/i.test(txt)) {
        const repSaludo =
          anivIdx % 2 === 0
            ? '¡Feliz primer mes de novios!'
            : '¡Muy feliz primer mes juntos!';
        anivIdx++;
        txt = txt.replace(/¡Muy feliz cumpleaños!/gi, repSaludo);
      }
      if (/¡feliz nueva vuelta al sol!/i.test(txt)) {
        const repVuelta =
          anivIdx % 2 === 0
            ? '¡feliz primer mes de noviazgo!'
            : '¡felices primeros treinta días juntos!';
        anivIdx++;
        txt = txt.replace(/¡feliz nueva vuelta al sol!/gi, repVuelta);
      }
      if (/vuelta al sol/i.test(r.titulo)) {
        r.titulo = 'Fuerza para estrenar un primer mes juntos luminoso';
      }
      if (/cumpleaños/i.test(txt)) {
        txt = txt.replace(/cumpleaños/gi, 'primer mes');
      }

      if (txt !== origTxt || r.titulo !== origTit) {
        r.texto = txt;
        stats.aniv1Mes++;
        dirty = true;
      }
    }
  }

  if (dirty) {
    fs.writeFileSync(file, JSON.stringify(arr, null, 2) + '\n', 'utf8');
    stats.filesChanged++;
  }
}

console.log('Reparación calidad v3 completada:', stats);
