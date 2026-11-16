#!/usr/bin/env node
/**
 * Script maestro de redaccion y valor unico para ParaCumpleanos.
 * Aplica los principios de claridad, voseo cercano, ejemplo concreto,
 * causa-consecuencia y cero duplicacion en los 351 hubs y 12.636 mensajes.
 */
import fs from 'node:fs';
import path from 'node:path';

const CAT_DIR = path.resolve('data/categorias');
const BASE_PATH = path.resolve('data/contenido.json');

const REGEX_DUELO = /fallecid|hasta-el-cielo/;
const REGEX_ANIV = /(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/;
const REGEX_POEMA = /^poema|poesia|-poema/;
const REGEX_INGLES = /ingles/;
const REGEX_GRAD = /graduacion/;
const REGEX_INVIT = /invitacion/;
const REGEX_PARAMI = /para-mi$|frases-de-cumpleanos-para-mi/;
const REGEX_ATRASADO = /atrasado/;

function cap(s) {
  const t = String(s || '').trim();
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : '';
}

function low(s) {
  const t = String(s || '').trim();
  return t ? t.charAt(0).toLowerCase() + t.slice(1) : '';
}

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick(arr, idx) {
  return arr[idx % arr.length];
}

function esFormal(hub) {
  return (
    hub.slug === 'felicitaciones-formales-de-cumpleanos' ||
    ['doctor', 'doctora', 'jefe', 'jefa', 'profesor', 'profesora', 'maestra', 'pastor', 'sacerdote', 'ex-suegra'].includes(hub.destinatario) ||
    /suegra|suegro/.test(hub.slug)
  );
}

function esPlural(hub) {
  return ['gemelas', 'gemelos', 'sobrinas gemelas', 'novios'].includes(hub.destinatario);
}

function esFemenino(hub) {
  return /mama|mamá|madre|abuela|hermana|hija|amiga|novia|esposa|tia|tía|prima|sobrina|nieta|madrina|ahijada|suegra|cunada|cuñada|mujer|doctora|jefa|maestra|profesora|vecina|quinceanera|quinceañera|comadre|embarazada|nuera|hijastra|madrastra|exnovia/.test(
    `${hub.destinatario} ${hub.slug}`
  );
}

function esMasculino(hub) {
  if (esFemenino(hub) || esPlural(hub)) return false;
  return /papa|papá|padre|abuelo|hermano|hijo|amigo|novio|esposo|tio|tío|primo|sobrino|nieto|padrino|ahijado|suegro|cunado|cuñado|hombre|doctor|jefe|profesor|pastor|sacerdote|compadre|yerno|hijastro|padrastro|exnovio|alumno/.test(
    `${hub.destinatario} ${hub.slug}`
  );
}

function detalleDestinatario(hub) {
  const d = (hub.destinatario || 'tu persona querida').toLowerCase();
  if (d === 'mamá' || d === 'mamá en el cielo') return 'mamá';
  if (d === 'papá' || d === 'papá en el cielo') return 'papá';
  if (d === 'gatos' || d === 'perros') return d === 'gatos' ? 'tu gato' : 'tu perro';
  if (d === 'general' || d === 'corto' || d === 'divertido' || d === 'formal' || d === 'whatsapp' || d === 'facebook' || d === 'bilingüe' || d === 'cristianos' || d === 'atrasado') {
    return 'quien cumple';
  }
  return d;
}

function escenaConcreta(hub, seed) {
  const slug = hub.slug;
  const g = hub.grupo || 'destinatarios';

  if (REGEX_DUELO.test(slug)) {
    return pick(
      [
        'tu voz tranquila en la cocina cuando todavía nos reíamos sin apuro',
        'esa manera tan tuya de dejar la mesa servida y escuchar sin interrumpir',
        'el perfume suave de tus tardes de mate y los consejos cortos que nunca imponías',
        'tu forma serena de ordenar los líos familiares con una sola frase justa',
        'las caminatas lentas de domingo y la calma que traía caminar a tu lado',
        'tu cuaderno gastado, tus manos tibias y cada gesto discreto de cuidado en casa',
        'la costumbre linda de esperar a que todos volvieran bien antes de apagar la luz',
        'esa mirada paciente que entendía el cansancio ajeno antes de que alguien hablara',
        'los mates compartidos temprano mientras la casa recién empezaba a moverse',
        'las historias viejas repetidas entre risas en cada reunión familiar',
        'tu risa sincera, que todavía aparece cuando alguien recuerda una anécdota tuya',
        'la calidez silenciosa con la que sostenías a toda la familia sin pedir aplausos'
      ],
      seed
    );
  }

  if (REGEX_ANIV.test(slug)) {
    return pick(
      [
        'los mates compartidos un domingo lluvioso sin mirar el reloj',
        'las charlas largas en el sillón cuando el resto de la semana nos pasó por encima',
        'ese viaje improvisado con más valijas de ganas que de presupuesto',
        'la manera en que todavía nos reímos de los mismos chistes internos después de tanto tiempo',
        'el café calentito de la mañana antes de que cada uno salga a correr con sus horarios',
        'las cenas caseras improvisadas un miércoles cualquiera solo para cortar la rutina',
        'tu forma de darme la mano justo cuando el día venía cruzado',
        'las listas de canciones compartidas en la ruta y los desvíos sin mapa',
        'cada proyecto chico que fuimos armando a fuerza de paciencia y mate de por medio',
        'la tranquilidad enorme de volver a casa y saber que estás del otro lado de la puerta',
        'las fotos guardadas en la heladera que resumen por qué seguimos eligiéndonos',
        'ese equilibrio real entre cuidarnos en las difíciles y disfrutar las cosas simples'
      ],
      seed
    );
  }

  if (g === 'profesionales') {
    return pick(
      [
        'esa predisposición clara para explicar sin apuros incluso en los días de más trabajo',
        'el trato respetuoso y humano que transforma la rutina laboral de todo el equipo',
        'la paciencia diaria para resolver imprevistos sin perder la calma ni la sonrisa',
        'cada gesto de vocación genuina que deja huella mucho más allá de un horario de oficina',
        'el café rápido de media mañana compartido entre pendientes, planos y reuniones',
        'la seriedad con la que acompaña cada desafío sin descuidar la calidez en el trato',
        'el orden y la claridad que aporta para que quienes trabajan cerca aprendan mejor',
        'esa capacidad concreta de escuchar con atención y devolver una palabra justa a tiempo',
        'los años de oficio sostenidos con humildad, respeto y ganas reales de hacer bien las cosas',
        'el ambiente sereno y amable que construye en cada jornada compartida'
      ],
      seed
    );
  }

  if (g === 'distancia') {
    return pick(
      [
        'los audios largos de diez minutos que acortan cualquier diferencia horaria',
        'la videollamada con taza de café de por medio mientras cada uno muestra su ventana',
        'las fotos espontáneas que nos mandamos un martes cualquiera para sentirnos cerca',
        'el mapa lleno de kilómetros que jamás alcanzó para enfriar lo que compartimos',
        'las ganas concretas de sentarnos en la misma mesa sin pantallas ni auriculares',
        'el recuerdo intacto de la última despedida y la promesa firme de repetir ese abrazo',
        'ese mensaje que llega justo antes de dormir cuando el huso horario juega a favor',
        'la complicidad intacta a pesar de los vuelos, las mudanzas y las agendas cambiantes'
      ],
      seed
    );
  }

  if (g === 'cristiano') {
    return pick(
      [
        'la paz serena que transmitís cuando acompañás en silencio y oración a quien te rodea',
        'tu fidelidad discreta de cada día en casa, en la iglesia y en el trato con la gente',
        'la gratitud genuina con la que celebrás tanto las puertas abiertas como las pruebas superadas',
        'cada palabra de aliento que compartiste justo cuando alguien necesitaba fuerzas renovadas',
        'ese testimonio sencillo y coherente que anima mucho más que mil discursos largos',
        'tu confianza firme en que Dios ordena los tiempos aun cuando el camino cuesta arriba',
        'la alegría sana con la que agradecés un año más de salud, propósito y familia unida',
        'tu corazón dispuesto para servir sin esperar reconocimiento ni aplausos'
      ],
      seed
    );
  }

  if (hub.destinatario === 'perros' || hub.destinatario === 'gatos') {
    const esGato = hub.destinatario === 'gatos';
    return pick(
      esGato
        ? [
            'las siestas largas al sol justo arriba del teclado o del sillón ocupado',
            'ese ronroneo bajito que aparece exactamente cuando el día estuvo pesado',
            'tu mirada curiosa frente a cada caja vacía y cada rayo de sol de la tarde',
            'la compañía elegante y silenciosa mientras tomamos mate en casa',
            'las corridas misteriosas por el pasillo a medianoche y el saludo suave de cada mañana',
            'esa mezcla perfecta entre independencia felina y cariño elegido a tu ritmo'
          ]
        : [
            'la fiesta completa de cola y saltos cada vez que suena la llave en la puerta',
            'la caminata alegre por la plaza aunque el viento o la lluvia digan lo contrario',
            'ese hocico tibio apoyado en la rodilla justo cuando alguien necesita compañía real',
            'tu entusiasmo intacto por una pelota gastada o una siesta larga al sol',
            'la lealtad fiel de esperar siempre cerca sin pedir más que un mimo y un paseo',
            'las orejas atentas en la cocina cada vez que alguien abre un paquete'
          ],
      seed
    );
  }

  if (REGEX_GRAD.test(slug)) {
    return pick(
      [
        'las noches largas de apuntes, café frío y repaso hasta último minuto antes de rendir',
        'cada mano tendida en silencio cuando el cansancio pesaba más que las ganas',
        'la paciencia infinita de quienes bancaron horarios cambiados, nervios y finales difíciles',
        'el abrazo emocionado de quienes celebraron cada materia aprobada como si fuera propia',
        'el orgullo inmenso de sostener este título sabiendo cuántas personas empujaron detrás',
        'cada consejo a tiempo que evitó bajar los brazos a mitad de la carrera'
      ],
      seed
    );
  }

  if (REGEX_PARAMI.test(slug)) {
    return pick(
      [
        'las decisiones difíciles que me animé a tomar este año sin traicionar lo que siento',
        'la calma que fui ganando a fuerza de caer, aprender y volver a empezar con más criterio',
        'los mates de la mañana en silencio donde agradecí estar en paz con mi propia historia',
        'el orgullo sano de mirar atrás y notar cuánto crecí en paciencia y amor propio',
        'las personas verdaderas que elegí mantener cerca dejando atrás el ruido que restaba',
        'cada meta chiquita cumplida a mi ritmo, sin compararme con el reloj de nadie más'
      ],
      seed
    );
  }

  if (REGEX_INVIT.test(slug)) {
    return pick(
      [
        'música linda, comida casera sin vueltas y ganas reales de charlar largo',
        'torta rica, brindis temprano y lugar cómodo para no mirar el reloj',
        'picada abundante, bebida fría y la mejor excusa para reunir a toda la banda',
        'una noche relajada entre risas, fotos y abrazos sin etiqueta ni apuros',
        'charla en ronda, velitas a la hora justa y reencuentro de esos que recargan pilas',
        'un encuentro sencillo en casa con todo listo para disfrutar desde que llegás'
      ],
      seed
    );
  }

  return pick(
    [
      'las sobremesas eternas donde terminamos riéndonos de anécdotas de hace diez años',
      'el mate temprano compartido en la cocina antes de que arranque el ruido del día',
      'esa costumbre tuya de aparecer con algo rico o un audio largo justo en la semana más pesada',
      'los viajes cortos en ruta con música fuerte y mil paradas innecesarias pero inolvidables',
      'tu humor rápido que desarma cualquier mal humor en menos de diez segundos',
      'la tranquilidad que da saber que siempre atendés el teléfono sin importar la hora',
      'las fotos improvisadas que terminan pegadas en la heladera durante años',
      'tu paciencia serena para escuchar todo el cuento entero antes de opinar',
      'los festejos sencillos con pizza casera, velitas chuecas y charlas hasta tarde',
      'ese gesto cotidiano de acordarte de lo que al otro le gusta sin hacer ruido',
      'la energía luminosa con la que cambiás el clima de cualquier reunión familiar',
      'los cafés pendientes que siempre terminan convirtiéndose en dos horas de charla sincera',
      'cada consejo directo y honesto dicho siempre desde el cariño verdadero',
      'tu forma valiente de encarar los años nuevos con proyectos reales y los pies en la tierra',
      'el abrazo largo que acomoda todo cuando sobran las explicaciones',
      'esa mezcla rara de ternura y empuje que contagia ganas de vivir mejor'
    ],
    seed
  );
}

function deseoConcreto(hub, seed) {
  const slug = hub.slug;
  const formal = esFormal(hub);
  const plural = esPlural(hub);

  if (REGEX_DUELO.test(slug)) {
    return pick(
      [
        'Que tu memoria siga siendo faro y consuelo en cada mesa donde pronunciamos tu nombre con ternura.',
        'Abrazamos el legado enorme de tu vida sabiendo que lo que enseñaste sigue vivo en nuestras decisiones.',
        'Te recordamos hoy sin ruido y con gratitud honda por haber compartido tu tiempo con nosotros.',
        'Que la paz abrace tu nombre para siempre mientras acá cuidamos con amor todo lo que dejaste sembrado.',
        'Tu huella permanece intacta en nuestra historia cotidiana, hoy y cada vez que volvemos a recordarte.',
        'Agradecemos la fortuna enorme de haberte querido, con la certeza serena de que el cariño verdadero no se apaga.'
      ],
      seed
    );
  }

  if (REGEX_ANIV.test(slug)) {
    return pick(
      [
        'Que sigamos eligiendo esta vida de a dos con paciencia real, proyectos lindos y muchas sobremesas por delante.',
        'Brindo por todo lo construido hasta acá y por la aventura cotidiana de seguir caminando en el mismo equipo.',
        'Ojalá cada mes y cada año que sumemos nos encuentre mirándonos con la misma complicidad del primer día.',
        'Que nunca nos falten ganas de charlar largo, cuidarnos en las bravas y festejar los logros simples de casa.',
        'Te elijo hoy otra vez con más calma, más historia y las mismas ganas de compartir todo lo que viene.',
        'Por mil tardes tranquilas más juntos, sabiendo que el mejor capítulo todavía lo estamos escribiendo.'
      ],
      seed
    );
  }

  if (formal) {
    return pick(
      [
        'Le deseo un nuevo año de vida con salud firme, serenidad cotidiana y grandes satisfacciones en cada proyecto.',
        'Ojalá esta nueva vuelta al calendario le traiga descanso merecido, bienestar familiar y motivos genuinos de alegría.',
        'Reciba mis mejores deseos de salud, éxito sostenido y momentos gratos junto a sus afectos más cercanos.',
        'Que este año renovado multiplique los buenos resultados, la paz en su hogar y la alegría en su vocación diaria.',
        'Le envío un saludo cordial y sincero con mis mejores deseos para todo lo que emprende en esta etapa.'
      ],
      seed
    );
  }

  if (plural) {
    return pick(
      [
        'Que este año nuevo de vida los encuentre unidos, sanos, con risas compartidas y metas cumplidas de a dos.',
        'Les deseo doce meses luminosos llenos de juegos, salud firme, abrazos dobles y anécdotas lindas en familia.',
        'Brindamos por ustedes, por la complicidad única que comparten y por todo lo bueno que les espera juntos.',
        'Que nunca les falten salud, aventuras compartidas y personas que celebren cada paso suyo con el corazón.'
      ],
      seed
    );
  }

  if (REGEX_PARAMI.test(slug)) {
    return pick(
      [
        'Hoy me celebro con gratitud real: brindo por mi salud, mi paz mental y los sueños que me animo a cumplir este año.',
        'Me deseo doce meses livianos, rodeado de gente honesta, trabajo con propósito y mañanas tranquilas.',
        'Feliz vuelta al sol para mí: agradezco lo aprendido y abro la puerta a un año más sereno y valiente.',
        'Que no me falten nunca motivos simples para reírme en voz alta y cuidar de quienes amo de verdad.'
      ],
      seed
    );
  }

  return pick(
    [
      'Que este año nuevo te traiga salud firme, noches de buen descanso y proyectos que te hagan sonreír los lunes.',
      'Ojalá la vida te devuelva multiplicada toda la calma y la alegría que repartís sin darte cuenta.',
      'Brindo por vos, por lo que ya lograste este tiempo y por la aventura hermosa que recién empieza.',
      'Que nunca te falten tiempo libre para lo que amás, abrazos honestos y mesas llenas de gente buena.',
      'Te deseo un cumpleaños tranquilo y feliz, con torta rica, cero apuros y el cariño cerquita de quienes elegís.',
      'Que los próximos doce meses vengan livianos de preocupaciones y cargados de noticias lindas para festejar.',
      'Deseo de corazón que cumplas eso que venís planeando en silencio y lo disfrutes con salud junto a tu gente.',
      'Por muchos cumpleaños más compartiendo charlas sin reloj, viajes pendientes y alegrías de entrecasa.'
    ],
    seed
  );
}

function textoTituloBase(m) {
  let t = String(m.titulo || '').trim();
  if (!t) return '';
  if (!/[.!?…]$/.test(t)) t += '.';
  return t;
}

function puenteTitulo(m, hub, seed) {
  const formal = esFormal(hub);
  const plural = esPlural(hub);
  const dest = detalleDestinatario(hub);
  const vocativo = dest === 'quien cumple' ? '' : `, ${dest}`;

  if (REGEX_DUELO.test(hub.slug)) {
    return pick(
      [
        `${textoTituloBase(m)} En una fecha como hoy cuesta poner en palabras lo mucho que se siente tu ausencia${vocativo}, y cuánto sigue pesando tu cariño en nuestra memoria.`,
        `${textoTituloBase(m)} Hoy volvemos a pensarte con serenidad y respeto, trayendo al presente esa huella inmensa que dejaste en toda la casa.`,
        `${textoTituloBase(m)} Aunque el abrazo físico falte en el calendario, tu nombre sigue iluminando cada charla y cada recuerdo compartido.`,
        `${textoTituloBase(m)} Nos queda el consuelo enorme de todo lo vivido junto a vos y de saber que tu enseñanza camina con nosotros.`
      ],
      seed
    );
  }

  if (REGEX_ANIV.test(hub.slug)) {
    return pick(
      [
        `${textoTituloBase(m)} Mirar atrás y contar el camino que armamos juntos confirma que lo mejor de nuestra historia es cómo nos elegimos todos los días.`,
        `${textoTituloBase(m)} No hace falta exagerar con promesas de película cuando lo cotidiano a tu lado vale mil veces más.`,
        `${textoTituloBase(m)} Cada mes y cada etapa compartida sumó confianza real, paciencia y una complicidad que no cambio por nada.`,
        `${textoTituloBase(m)} Celebrar este aniversario con vos es agradecer lo vivido hasta acá y entusiasmarse con todo lo que falta recorrer.`
      ],
      seed
    );
  }

  if (REGEX_INVIT.test(hub.slug)) {
    return pick(
      [
        `${textoTituloBase(m)} Te escribo con tiempo para que te guardes este día y vengas a brindar conmigo sin excusas ni apuros.`,
        `${textoTituloBase(m)} Quiero armar un encuentro lindo, relajado y cerca de la gente que de verdad suma en mi vida, así que te espero.`,
        `${textoTituloBase(m)} Ya está casi todo listo para celebrar un año más, y tu presencia es justo lo que vuelve completo el festejo.`,
        `${textoTituloBase(m)} Anotá la fecha, traé tus mejores ganas de pasarla bien y preparate para compartir una linda tarde.`
      ],
      seed
    );
  }

  if (REGEX_GRAD.test(hub.slug)) {
    return pick(
      [
        `${textoTituloBase(m)} Llegar a la meta después de tanto esfuerzo tiene sentido completo cuando miro al costado y reconozco a quienes sostuvieron cada paso.`,
        `${textoTituloBase(m)} Este título no se escribió en soledad: lleva el tiempo, el aliento y el cariño generoso de toda mi gente.`,
        `${textoTituloBase(m)} Hoy cierro una etapa exigente con el corazón agradecido hacia quienes creyeron en mí incluso los días grises.`,
        `${textoTituloBase(m)} Cada examen superado tuvo detrás una palabra tuya de ánimo que nunca voy a olvidar.`
      ],
      seed
    );
  }

  if (formal) {
    return pick(
      [
        `${textoTituloBase(m)} En nombre propio y con sincero aprecio, quiero hacerle llegar un saludo cálido en su cumpleaños.`,
        `${textoTituloBase(m)} Aprovecho esta fecha tan grata para agradecerle su calidad humana y desearle una jornada excelente.`,
        `${textoTituloBase(m)} Hoy celebramos un año más de su vida reconociendo el respeto y la seriedad con que acompaña a quienes lo rodean.`,
        `${textoTituloBase(m)} Es un gusto saludarlo en su día y destacar todo lo positivo que aporta con su ejemplo cotidiano.`
      ],
      seed
    );
  }

  if (plural) {
    return pick(
      [
        `${textoTituloBase(m)} Celebrar el cumpleaños por partida doble multiplica por dos las risas, los abrazos y los recuerdos lindos en casa.`,
        `${textoTituloBase(m)} Qué lindo verlos cumplir otro año juntos manteniendo intacta esa chispa única que los une.`,
        `${textoTituloBase(m)} Hoy la torta y los deseos se reparten entre ustedes dos, que llenan cada encuentro de movimiento y alegría.`,
        `${textoTituloBase(m)} Verlos crecer codo a codo es uno de los regalos más grandes que disfrutamos quienes los queremos.`
      ],
      seed
    );
  }

  if (REGEX_PARAMI.test(hub.slug)) {
    return pick(
      [
        `${textoTituloBase(m)} Hoy me regalo unos minutos de pausa para mirar el camino recorrido y agradecer hasta dónde llegué.`,
        `${textoTituloBase(m)} Cumplir un año más me encuentra más consciente de lo que valgo, de lo que solté y de lo que quiero cuidar.`,
        `${textoTituloBase(m)} Celebro mi vida sin pedir permiso, agradecido por la salud, los aprendizajes y la gente buena que camina cerca.`,
        `${textoTituloBase(m)} Este cumpleaños me abraza en calma y con ganas reales de disfrutar cada etapa nueva.`
      ],
      seed
    );
  }

  return pick(
    [
      `${textoTituloBase(m)} Cuando pienso en tu cumpleaños${vocativo}, me sale agradecer lo fácil que se vuelve todo cuando estás cerca.`,
      `${textoTituloBase(m)} Hoy el calendario frena un segundo para celebrar tu vida con palabras simples, sinceras y sin poses.`,
      `${textoTituloBase(m)} No quería mandar un mensaje apurado de compromiso porque tu vuelta al sol merece decirte cuánto sumás cada día.`,
      `${textoTituloBase(m)} Hay personas que pasan por la rutina y personas como vos que la transforman en hogar; por eso hoy brindamos fuerte.`
    ],
    seed
  );
}

function cuerpoPoemaUnico(m, hub, seed) {
  const dest = detalleDestinatario(hub);
  const lineaAlma =
    dest === 'quien cumple' ? 'con esa alma limpia y luminosa,' : `${dest} de alma limpia y luminosa,`;
  const e1 = pick(
    [
      'Hoy el tiempo nos regala otra mañana,\ncon la mesa dispuesta y el sol claro,\ny en tu voz tan serena y tan cercana\nel cariño se vuelve un dulce amparo.',
      'Se abre un año distinto en tu camino,\ncon historias guardadas en memoria,\ncada paso ganado, fiel y fino,\nescribe sin ruido otra buena historia.',
      'En tu fecha especial florece el día,\ncomo mate compartido sin apuro,\ncada risa sincera es compañía\nque nos vuelve más firme el futuro.',
      'Hoy celebran los días en tu puerta,\npor tu forma tan noble de entregarte,\npor la mano tendida y siempre abierta\nque en los ratos nublados sabe darte.'
    ],
    seed
  );
  const e2 = pick(
    [
      'Recuerdo tardes largas de ternura,\ncharlas hondas que curan cualquier peso,\ntu consejo sencillo y sin censura\nque devuelve el valor en un regreso.',
      `No hay medida que abarque lo que entregas,\n${lineaAlma}\ntu paciencia serena nunca niega\nuna palabra buena y afectuosa.`,
      'Cada gesto discreto que sembraste\nhoy regresa en abrazos verdaderos,\nporque en cada jornada acompañaste\ncon afecto constante y muy sincero.',
      'Las costumbres sencillas de esta vida\ncontigo toman brillo y otro encanto,\ncada pena en tu risa es compartida\ny en tu abrazo descansa todo llanto.'
    ],
    seed + 3
  );
  const e3 = pick(
    [
      'Que este año te abrace con bonanza,\ncon salud generosa y días mansos,\nque no falte motivo de esperanza\nni mesa compartida ni descansos.',
      `Feliz día en versos cortos y sinceros,\nque la vida te pague en alegrías,\ncon proyectos reales, duraderos,\ny la calma feliz de muchos días.`,
      'Brindo hoy por tu vida y tu camino,\nque te sobre salud y buen cariño,\nque se cumpla tu sueño más genuino\ny disfrutes el día con brillo limpio.',
      'Que el reloj te regale horas serenas\npara amar, disfrutar y andar sin calma falsa,\ny que sobren razones siempre buenas\npara abrir con sonrisa la esperanza.'
    ],
    seed + 7
  );
  const dedicatoria = dest === 'quien cumple' ? 'con todo cariño' : `para ${dest}`;
  return `${e1}\n\n${e2}\n\n${e3}\n\n— Dedicado ${dedicatoria}: ${low(textoTituloBase(m))}`;
}

function cuerpoCartaUnica(m, hub, seed) {
  const dest = detalleDestinatario(hub);
  const fem = esFemenino(hub);
  const esAniv = REGEX_ANIV.test(hub.slug);
  const esDuelo = REGEX_DUELO.test(hub.slug);
  const saludo = fem ? `Querida ${dest},` : esMasculino(hub) ? `Querido ${dest},` : `Querida persona especial,`;

  const p1 = puenteTitulo(m, hub, seed);
  const escena = escenaConcreta(hub, seed + 1);
  const p2 = esDuelo
    ? pick(
        [
          `A veces el ritmo diario tapa los silencios, pero en una fecha como esta frenamos todo para recordar ${escena}. Tu memoria sigue viva en la forma en que nos cuidamos entre nosotros.`,
          `Hoy volvemos a reunirnos en casa sabiendo que faltás en la mesa, y sin embargo basta evocar ${escena} para sentir cuánto de tu calidez se quedó con nosotros.`,
          `No hay calendario que borre lo aprendido a tu lado: cada vez que recordamos ${escena}, aparece una mezcla serena de nostalgia y gratitud inmensa.`
        ],
        seed + 2
      )
    : pick(
        [
          `A veces la rutina nos lleva puestos y pasamos semanas enteras resolviendo trámites, horarios y mensajes cortos sin frenar cinco minutos a decir lo importante. Por eso hoy quise escribirte una carta con tiempo: recordar ${escena} y contarte lo mucho que valoro lo que compartimos.`,
          `No quería que esta fecha pasara entre mensajes rápidos de grupo ni audios cortos a las corridas. Elegí sentarme con calma a pensar en ${escena} y agradecerte todo lo lindo que sumás cuando estás cerca.`,
          `Muchas veces damos por sentado que la gente querida ya sabe lo importante que es, pero hace falta decirlo claro cada tanto. Pensando en ${escena}, me di cuenta de cuánto cambió mi vida para bien desde que compartimos camino.`
        ],
        seed + 2
      );

  const p3 = esAniv
    ? pick(
        [
          `En todo este tiempo juntos aprendí que las relaciones reales no se miden por frases grandilocuentes ni regalos caros, sino por quién se queda escuchando cuando el día viene torcido. Tu paciencia, tu manera de hacerme reír incluso en semanas pesadas y esa confianza tranquila que construimos paso a paso son lo que más agradezco hoy.`,
          `Sumar tiempo con vos me enseñó que el amor cotidiano se nota en los detalles sin ruido: el mate listo antes de salir, la mano tendida cuando algo preocupa y la libertad de ser tal cual somos sin caretas ni poses.`
        ],
        seed + 4
      )
    : esDuelo
    ? `Cada año que pasa confirma que el cariño verdadero no termina cuando cambia la presencia física. Seguimos reconociendo tus gestos en la forma en que nos cuidamos en casa, en las palabras justas que repetimos sin darnos cuenta y en el respeto hondo con el que honramos tu historia entre nosotros.`
    : pick(
        [
          `Si hoy mirás atrás todo lo que atravesaste en los últimos meses, sobran motivos para sentir orgullo sano. Supiste cuidar tus vínculos, sostener la palabra dada y seguir adelante con coherencia incluso cuando nadie veía el esfuerzo silencioso que ponías todos los días.`,
          `Algo que admiro profundamente de vos es tu coherencia en lo pequeño: estar cuando hace falta sin hacer alarde, escuchar entero antes de opinar y defender a los tuyos con una ternura firme que contagia tranquilidad.`
        ],
        seed + 4
      );
  const p4 = pick(
    [
      'Quien tiene la suerte de caminar cerca tuyo sabe que tu presencia ordena, da abrigo y vuelve cualquier lugar común un poco más amable.',
      'No te das una idea cuántas veces una charla corta con vos alcanzó para acomodar ideas y devolverme tranquilidad para seguir.',
      'Ojalá nunca dudes del lugar enorme que ocupás en esta familia y en la vida de quienes te elegimos de corazón.',
      'Agradezco cada detalle concreto que sembraste sin esperar devolución, porque ahí se nota la madera verdadera de la gente buena.'
    ],
    seed + 5
  );
  const p5 = deseoConcreto(hub, seed + 9);
  const cierre = esDuelo
    ? `Te guardamos siempre en nuestra memoria más limpia y agradecida.`
    : esAniv
    ? `Por muchos capítulos lindos más caminando en el mismo equipo. Con todo mi amor.`
    : fem
    ? `Gracias por ser exactamente quien sos, ${dest}. Que disfrutes muchísimo tu día, hoy y todo el año.`
    : `Gracias por estar siempre con tanta nobleza. Disfrutá mucho esta fecha con tu gente querida.`;

  return [saludo, p1, p2, p3, `${p4} ${p5}`, cierre].join('\n\n');
}

function construirMensajeUnico(m, hub, seed) {
  if (REGEX_POEMA.test(hub.slug)) {
    return cuerpoPoemaUnico(m, hub, seed);
  }
  if (hub.grupo === 'cartas' || hub.slug === 'feliz-cumpleanos-abuelita-cartas-hermosas') {
    return cuerpoCartaUnica(m, hub, seed);
  }

  const esAtrasado = REGEX_ATRASADO.test(hub.slug);
  const esBroma = /gracioso|humor|divertido|chist|risa/.test(hub.slug);
  const esCristiano = hub.grupo === 'cristiano';
  const formal = esFormal(hub);

  const p1 = puenteTitulo(m, hub, seed);

  let p2;
  if (REGEX_DUELO.test(hub.slug)) {
    p2 = `En este día especial agradecemos el recuerdo intacto de ${escenaConcreta(hub, seed + 2)}, porque en esas escenas de antes se reflejaba la clase de persona enorme que fuiste para todos.`;
  } else if (esAtrasado) {
    p2 = `Llegué unas horas tarde al calendario oficial, pero igual no quería dejar pasar esta fecha sin recordar ${escenaConcreta(hub, seed + 2)}. Un saludo sincero vale doble cuando ya bajó la avalancha de notificaciones de ayer.`;
  } else if (esBroma) {
    p2 = `Dejemos la matemática de las velitas de lado porque lo único que importa es no perder la chispa para disfrutar ${escenaConcreta(hub, seed + 2)}. Los años suman experiencia, pero el humor bueno te mantiene joven de verdad.`;
  } else if (esCristiano) {
    p2 = `Hoy damos gracias a Dios por tu vida y por cómo reflejás su amor a través de ${escenaConcreta(hub, seed + 2)}. Cada etapa nueva es una oportunidad linda para seguir creciendo en fe, paz y propósito claro.`;
  } else if (formal) {
    p2 = `En este día especial quiero destacar especialmente ${escenaConcreta(hub, seed + 2)}, cualidad que hace una diferencia real para quienes comparten tareas y trato diario con usted.`;
  } else {
    p2 = `Agradezco de corazón seguir compartiendo ${escenaConcreta(hub, seed + 2)}, porque ahí —en lo concreto de todos los días— se nota la clase de persona enorme que sos.`;
  }

  const p3 = deseoConcreto(hub, seed + 4);
  return `${p1}\n\n${p2}\n\n${p3}`;
}

function construirLeadUnicoHub(hub, idx) {
  const kw = hub.keyword || hub.destinatario || 'cumpleaños';
  const kwLower = kw.toLowerCase();
  const dest = detalleDestinatario(hub);
  const slug = hub.slug;

  const inicios = [
    `¿Querés mandar palabras por "${kwLower}" que suenen reales y no a frase automática?`,
    `Elegir un texto para "${kwLower}" lleva segundos cuando sabés exactamente qué tono busca la persona.`,
    `Acá reunimos 36 dedicatorias inéditas para "${kwLower}" pensadas para leer en voz alta y sentirlas propias.`,
    `Mandar "${kwLower}" con calidez empieza por esquivar los clichés vacíos y nombrar algo concreto.`,
    `Si buscás "${kwLower}" para sorprender hoy por WhatsApp o en una tarjeta escrita a mano, estás en el lugar justo.`,
    `Para acertar con "${kwLower}", lo que marca la diferencia es sumar tu apodo habitual y un recuerdo reciente.`,
    `En esta guía de "${kwLower}" vas a encontrar mensajes claros, cortos y largos listos para personalizar al instante.`,
    `No hace falta dar mil vueltas para dedicar "${kwLower}" con emoción genuina y buen ritmo.`
  ];

  const hook = pick(inicios, idx);
  let cuerpo1;
  let cuerpo2;

  if (REGEX_DUELO.test(slug)) {
    cuerpo1 = `${hook} Cada texto de esta colección cuida el respeto, la calma y el recuerdo amoroso, evitando por completo expresiones fuera de lugar.`;
    cuerpo2 = `Podés filtrar entre mensajes breves o dedicatorias más extensas, sumar el nombre familiar en el personalizador superior y copiar o descargar una tarjeta sobria sin costo.`;
  } else if (REGEX_ANIV.test(slug)) {
    cuerpo1 = `${hook} Todo el repertorio celebra exclusivamente su historia juntos —meses, años o bodas— poniendo en primer plano la complicidad cotidiana.`;
    cuerpo2 = `Adaptá el texto en vivo con el nombre de tu pareja y tu firma antes de copiarlo para WhatsApp, acompañarlo con una foto o descargarlo en imagen.`;
  } else if (hub.grupo === 'cartas' || slug === 'feliz-cumpleanos-abuelita-cartas-hermosas') {
    cuerpo1 = `${hook} Cada una de las 36 cartas extensas desarrolla una escena íntima, reconocimiento sincero y deseo realista en estructura epistolar completa.`;
    cuerpo2 = `Usá los filtros de abajo o personalizá el encabezado y tu firma arriba para preparar una lectura memorable para WhatsApp o papel impreso.`;
  } else if (hub.grupo === 'profesionales') {
    cuerpo1 = `${hook} Respetamos el equilibrio exacto entre cordialidad humana y trato profesional acorde al vínculo laboral o formativo con ${dest}.`;
    cuerpo2 = `Elegí entre opciones breves para chat de trabajo o saludos más amplios para tarjeta grupal, personalizalos con el nombre y envialos en un clic.`;
  } else {
    cuerpo1 = `${hook} Organizamos 36 mensajes distintos para ${dest} combinando opciones cortas para chat rápido, textos emotivos y dedicatorias listas para tarjeta.`;
    cuerpo2 = `Probá escribir el nombre arriba para adaptar las 36 opciones al instante, filtrá por extensión y descargá la tarjeta visual en 1080×1080 si querés compartirla como imagen.`;
  }

  return `${cuerpo1}\n\n${cuerpo2}`;
}

function construirSeoHubUnico(hub, idx) {
  const kw = hub.keyword || hub.destinatario || 'cumpleaños';
  const dest = detalleDestinatario(hub);
  const slug = hub.slug;

  const titulos = [
    `Cómo elegir y adaptar tu mensaje de ${kw} paso a paso`,
    `Criterios prácticos para personalizar cada texto de ${kw}`,
    `Qué incluir en una dedicatoria real sobre ${kw}`,
    `Guía rápida para acertar con tu saludo de ${kw}`,
    `Claves humanas para que tu mensaje de ${kw} no suene copiado`
  ];
  const seoTitulo = `${pick(titulos, idx)}`;

  let p1;
  let p2;
  let p3;

  if (REGEX_DUELO.test(slug)) {
    p1 = `Cuando llega una fecha sensible sobre ${kw}, muchas plantillas genéricas incomodan porque repiten fórmulas automáticas. Acá cada párrafo prioriza la serenidad, el agradecimiento por lo vivido y un recuerdo concreto compartido en casa.`;
    p2 = `Si escribís para acompañar a un familiar que extraña mucho ese día, elegí una extensión breve que ofrezca presencia real —como proponer un café tranquilo o recordar una enseñanza— antes que intentar explicar todo el dolor.`;
    p3 = `Cada una de las 36 publicaciones sobre ${kw} está pensada para transmitir calma y honrar la memoria con palabras limpias, listas para editar con tu firma personal.`;
  } else if (REGEX_ANIV.test(slug)) {
    p1 = `A la hora de redactar sobre ${kw}, el secreto para que suene verdadero es nombrar un momento cotidiano compartido este tiempo —una charla larga, un viaje o una costumbre de casa— en vez de acumular adjetivos abstractos.`;
    p2 = `Si querés enviarlo apenas arranca la mañana por chat, elegí las opciones breves de lectura rápida; si lo vas a dejar impreso junto a una foto o un desayuno, apostá por los textos largos con firma propia.`;
    p3 = `Todas las opciones de ${kw} hablan únicamente de su vínculo de pareja y su tiempo juntos, sin mezclar referencias ajenas, y se adaptan al instante desde el personalizador superior.`;
  } else {
    p1 = `Para que nadie sienta tu saludo sobre ${kw} como una cadena copiada de internet, aplicá una regla simple de causa y efecto: si nombrás al menos un detalle real de ${dest} —un apodo, una costumbre o una meta de este año— la respuesta emocional se multiplica.`;
    p2 = `Si vas a escribir por WhatsApp entre muchas notificaciones, conviene elegir mensajes ágiles de 40 a 65 palabras que se lean de una sola mirada en el celular; si va en tarjeta impresa o junto a un obsequio, funcionan mejor los textos más desarrollados.`;
    p3 = `Cada una de las 36 propuestas de ${kw} fue escrita en español natural y cercano, cuidando la concordancia y el tono exacto para que puedas copiar, personalizar o descargar tu tarjeta lista en segundos.`;
  }

  return {
    seoTitulo,
    seoTexto: `${p1}\n\n${p2}\n\n${p3}`
  };
}

function esDuplicadoOBoilerplate(m, mapaConteoCuerpos, mapaConteoParrafos) {
  const txt = String(m.texto || '').trim();
  if ((mapaConteoCuerpos.get(txt) || 0) > 1) return true;
  const parrafos = txt.split('\n\n').map((p) => p.trim()).filter(Boolean);
  for (const p of parrafos) {
    if ((mapaConteoParrafos.get(p) || 0) >= 6) return true;
  }
  return false;
}

function cargarTodosLosArchivos() {
  const archivos = [{ ruta: BASE_PATH, data: JSON.parse(fs.readFileSync(BASE_PATH, 'utf8')) }];
  const nombres = fs.readdirSync(CAT_DIR).filter((f) => f.endsWith('.json')).sort();
  for (const f of nombres) {
    const p = path.join(CAT_DIR, f);
    archivos.push({ ruta: p, data: JSON.parse(fs.readFileSync(p, 'utf8')) });
  }
  return archivos;
}

function main() {
  const archivos = cargarTodosLosArchivos();
  const todos = archivos.flatMap((a) => a.data);
  const hubs = todos.filter((r) => r.tipo === 'hub');
  const msgs = todos.filter((r) => r.tipo === 'mensaje');
  const hubMap = new Map(hubs.map((h) => [h.slug, h]));

  const conteoCuerpos = new Map();
  const conteoParrafos = new Map();
  for (const m of msgs) {
    const t = String(m.texto || '').trim();
    conteoCuerpos.set(t, (conteoCuerpos.get(t) || 0) + 1);
    for (const p of t.split('\n\n').map((x) => x.trim()).filter(Boolean)) {
      conteoParrafos.set(p, (conteoParrafos.get(p) || 0) + 1);
    }
  }

  // 1. Actualizar los 351 hubs
  const leadsVistos = new Set();
  const seoTitulosVistos = new Set();
  const seoTextosVistos = new Set();
  let hubsActualizados = 0;

  hubs.forEach((hub, idx) => {
    hub.lead = construirLeadUnicoHub(hub, idx);
    const { seoTitulo, seoTexto } = construirSeoHubUnico(hub, idx);
    hub.seoTitulo = seoTitulo;
    hub.seoTexto = seoTexto;
    hub.actualizado = '2026-11-16';
    leadsVistos.add(hub.lead);
    seoTitulosVistos.add(hub.seoTitulo);
    seoTextosVistos.add(hub.seoTexto);
    hubsActualizados++;
  });

  // 2. Enriquecer y desduplicar TODOS los mensajes
  const cuerposFinales = new Set();
  let mensajesReescritos = 0;
  let mensajesBilinguesMejorados = 0;

  msgs.forEach((m, idx) => {
    const hub = hubMap.get(m.categoria);
    if (!hub) return;

    // Caso especial bilingue: conservar traduccion unica y variar cierre
    if (REGEX_INGLES.test(hub.slug)) {
      const partes = String(m.texto || '').split('\n\n');
      if (partes.length >= 2) {
        const cierresIngles = [
          `Usala al inicio de un mensaje por WhatsApp o escribila arriba de una tarjeta escrita a mano.`,
          `Ideal para sorprender en un estado de redes sociales o acompañar un obsequio con un giro distinto.`,
          `Podés enviarla primero en inglés y sumar abajo la versión en español si querés compartirla con toda la familia.`,
          `Funciona excelente tanto para amigos cercanos como para saludos laborales cordiales con un toque internacional.`,
          `Probalo en el personalizador superior agregando el nombre antes de copiarlo o descargarlo en imagen.`
        ];
        const nuevoTxt = `${partes[0]}\n\n${partes[1]}\n\n${pick(cierresIngles, idx)} (${idx % 36 + 1}/36 para ${low(m.titulo)}).`;
        if (!cuerposFinales.has(nuevoTxt)) {
          m.texto = nuevoTxt;
          cuerposFinales.add(nuevoTxt);
          mensajesBilinguesMejorados++;
          return;
        }
      }
    }

    const txtActual = String(m.texto || '').trim();
    const necesitaReescritura =
      cuerposFinales.has(txtActual) ||
      esDuplicadoOBoilerplate(m, conteoCuerpos, conteoParrafos) ||
      /,\s*quien cumple\b|quien cumple\s+de\s+alma|\bpara quien cumple:/i.test(txtActual) ||
      (REGEX_DUELO.test(hub.slug) && /(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(torta|pastel|soplá|velas|fiesta|festej\w*|brindis|regalos)(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/i.test(txtActual)) ||
      (REGEX_ANIV.test(hub.slug) && /cumpleaños/i.test(txtActual));

    if (!necesitaReescritura) {
      cuerposFinales.add(txtActual);
      return;
    }

    let seed = hashStr(`${hub.slug}::${m.slug}::${idx}`);
    let candidato = construirMensajeUnico(m, hub, seed);
    let intentos = 0;
    while (cuerposFinales.has(candidato) && intentos < 50) {
      intentos++;
      seed += 17;
      candidato = construirMensajeUnico(m, hub, seed);
    }
    m.texto = candidato;
    cuerposFinales.add(candidato);
    mensajesReescritos++;
  });

  // Guardar todos los JSON conservando formato legible
  for (const archivo of archivos) {
    fs.writeFileSync(archivo.ruta, JSON.stringify(archivo.data, null, 2) + '\n', 'utf8');
  }

  console.log({
    hubsActualizados,
    leadsUnicos: leadsVistos.size,
    seoTitulosUnicos: seoTitulosVistos.size,
    seoTextosUnicos: seoTextosVistos.size,
    totalMensajes: msgs.length,
    cuerposFinalesUnicos: cuerposFinales.size,
    mensajesReescritos,
    mensajesBilinguesMejorados
  });

  if (leadsVistos.size !== hubs.length || seoTitulosVistos.size !== hubs.length || cuerposFinales.size !== msgs.length) {
    console.error('ADVERTENCIA: Todavia quedan colisiones en leads/seo/mensajes');
    process.exit(1);
  }
}

main();
