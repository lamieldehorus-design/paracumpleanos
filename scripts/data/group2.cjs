// Group 2: Hermano, Primo, Tío, Tía, Abuelo, Abuela
// Each category contains 59 rich paragraphs of 3 to 5 sentences with gratitude, shared memories, and life lessons.

const hermano = [
  {
    title: '101. La memoria viva de nuestra infancia',
    text: 'Feliz cumpleaños, hermano. Mirar hacia atrás y recordar las tardes enteras jugando en el patio, las peleas por el control remoto y las complicidades para no ser retados por nuestros padres me hace valorar nuestro lazo más que nada en el mundo. Con vos aprendí lo que significa tener un aliado incondicional que conoce mis raíces y no necesita explicaciones para entender lo que me pasa. Gracias por tu lealtad silenciosa, por tus consejos francos y por estar siempre al pie del cañón. Que este nuevo año te regale salud, proyectos que te apasionen y muchas oportunidades de brindar juntos.'
  },
  {
    title: '102. Un amigo que me regaló la sangre',
    text: 'Dicen que los amigos son la familia que uno elige, pero con vos la vida me bendijo dándome a mi mejor amigo sin que tuviera que buscarlo. Compartimos los mismos valores, las mismas anécdotas que hacen reír a la familia en las sobremesas y esa tranquilidad de saber que nos cubrimos la espalda pase lo que pase. Gracias por haberme defendido de chico y por seguir siendo mi consejero de cabecera de grande. Deseo que este cumpleaños sea el inicio de un año extraordinario para vos, lleno de satisfacciones laborales y paz en tu hogar.'
  },
  {
    title: '103. Tu nobleza y perseverancia en las difíciles',
    text: 'Hermano querido, admiro profundamente la entereza con la que enfrentaste tus momentos más duros sin perder la decencia, la sonrisa ni las ganas de pelearla. Me enseñaste que los tropiezos se superan con trabajo honesto y la cabeza en alto, sin quejarse ni buscar atajos. Sos un ejemplo de superación para todos nosotros y me enorgullece llevar tu misma sangre. Que la vida te recompense con bendiciones infinitas, salud de hierro y la alegría de ver que cada sacrificio tuyo da sus frutos.'
  },
  {
    title: '104. Charlas de sobremesa que arreglan el mundo',
    text: '¡Feliz cumple, bro! No hay nada que disfrute más que quedarme charlando con vos después de un asado, arreglando el mundo entre risas, recuerdos y reflexiones sobre la vida. En esas charlas sencillas encuentro la complicidad más pura y la certeza de que el paso del tiempo solo afianza nuestro cariño de hermanos. Gracias por tu generosidad, por tu sentido del humor y por no cambiar nunca esa esencia noble que tenés. ¡Salud y felicidades en tu día!'
  },
  {
    title: '105. El orgullo de nuestros padres reflejado en vos',
    text: 'Sé cuánto orgullo les dio y les sigue dando a nuestros viejos ver el hombre responsable, trabajador y afectuoso en el que te convertiste con los años. Has sabido honrar nuestro apellido con una conducta intachable y una dedicación admirable hacia los tuyos. Hoy brindo por vos con el pecho hinchado de orgullo fraterno, deseándote un año colmado de proyectos cumplidos, salud y momentos felices con tu gente. ¡Muy feliz cumpleaños, querido hermano!'
  }
];

for (let i = 106; i <= 159; i++) {
  const titles = [
    'Complicidad que no necesita palabras', 'Tu apoyo incondicional en mis dudas', 'Memorias de picados y rodillas raspadas',
    'La tranquilidad de tenerte cerca', 'El valor de la palabra entre hermanos', 'Un lazo que el tiempo no desgasta',
    'Tu generosidad silenciosa con la familia', 'Caminar juntos la vida de igual a igual', 'Por las risas que nos salvaron de la rutina',
    'Un pacto de lealtad indestructible', 'Verte triunfar es mi propia alegría', 'La nobleza de tus convicciones',
    'Siempre en el mismo equipo frente al mundo', 'La herencia moral que compartimos', 'Paz y salud para tus proyectos',
    'Por los desafíos que superamos juntos', 'El privilegio de compartir tu historia', 'Tu alegría contagiosa en cada festejo',
    'Consejos sabios de hermano mayor o menor', 'El refugio de nuestros recuerdos comunes', 'Celebrar quién sos con orgullo',
    'Libertad para forjar tu propio destino', 'La ternura fraterna que abriga el alma', 'Bendiciones en este nuevo año',
    'El fruto de una crianza con amor', 'Sin miedo a lo que venga por delante', 'Tu mirada transparente y leal',
    'Cuidar de nuestro vínculo con devoción', 'Un brindis por la hermandad inquebrantable', 'Siempre hermanos del alma',
    'Gracias por hacerme parecer el hijo ejemplar', 'Devolvé la ropa que me sacaste del placard', 'Culpable de mis traumas infantiles con cariño',
    'El hijo preferido según vos (mentira total)', 'La torta se come entre los dos sin extraños', 'Más arrugas que la semana pasada, viejo',
    'Manual de coartadas perfectas en la adolescencia', 'Pagar el asado te toca a vos por ley', 'Chistes malos garantizados en la sobremesa',
    'El rey de las excusas para no lavar los platos', 'Sobrevivientes de las penitencias de mamá', 'Un brindis bien cargado hasta que nos echen',
    'No cambies nunca esa locura linda que tenés', 'Heredero de las mismas mañas familiares', 'Licencia para tirar la casa por la ventana hoy',
    'Más terco que una mula pero con corazón de oro', 'Secretos bajo siete llaves que no pienso revelar', 'Velitas con extintor para no quemar el mantel', 'Amor de hermanos para toda la eternidad'
  ];
  const idx = i - 106;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, hermano de mi vida. En este día quiero agradecerte por haber sido mi compañero de aventuras desde el primer día, por enseñarme a compartir y por demostrarme que la lealtad entre hermanos es el regalo más valioso que tenemos. Admiro tu fuerza de trabajo, tu nobleza de corazón y tu capacidad para ponerle el hombro a las dificultades. Deseo que este nuevo año te colme de salud vigorosa, prosperidad, amor sincero y motivos constantes para sonreír. ¡Te quiero un montón, bro!`;
  hermano.push({ title, text });
}

const primo = [
  {
    title: '101. La complicidad de la mesa de los primos',
    text: '¡Feliz cumpleaños, primazo querido! Pensar en vos es acordarme de inmediato de los veranos interminables en la casa de los abuelos, las travesuras compartidas en cada fiesta familiar y esas risas cómplices que nos salvaban de las charlas aburridas de los grandes. Con los años esa complicidad infantil se transformó en una amistad madura y leal con la que siempre puedo contar. Gracias por ponerle alegría a cada reunión, por tus consejos francos y por ser un tipo noble con códigos de oro. Que este nuevo ciclo te llene de éxitos laborales, salud de hierro y muchos asados compartidos.'
  },
  {
    title: '102. La misma sangre y los mismos valores',
    text: 'Primo querido, qué orgullo me da compartir con vos la misma sangre y los mismos principios de honradez, trabajo y respeto que nos inculcaron nuestros mayores. Aunque a veces pasen meses sin vernos por las obligaciones de la rutina adulta, basta que nos encontremos para que todo fluya con la naturalidad de siempre. Gracias por tu afecto constante y por estar presente en cada momento importante de la familia. Deseo que pases un cumpleaños sensacional, rodeado de quienes te aprecian y te admiran de verdad.'
  },
  {
    title: '103. Tu empuje para salir adelante',
    text: 'Admiro profundamente la garra con la que encarás tus proyectos, tu capacidad de trabajo y esa buena onda que nunca perdés ante las dificultades cotidianas. Me enseñaste que con simpatía, esfuerzo y honestidad se puede llegar muy lejos sin necesidad de pisarle la cabeza a nadie. Sos un gran referente para toda la camada de primos de la familia. Que este cumpleaños marque el inicio de un año extraordinario, lleno de puertas abiertas y metas alcanzadas. ¡Muy feliz cumpleaños, fiera!'
  }
];

for (let i = 104; i <= 159; i++) {
  const titles = [
    'Hermanos de otra madre en el camino', 'Anécdotas inolvidables de nuestra niñez', 'Siempre firme en las juntadas familiares',
    'El alma y la chispa de cada fiesta', 'El valor de la lealtad entre primos', 'La herencia de nuestros abuelos viva en vos',
    'Compañero de truco y de charlas largas', 'Tu generosidad sin pedir nada a cambio', 'Salud y buen asado para celebrar tu vida',
    'Por los recuerdos que nos unen para siempre', 'Un brindis por el futuro que construís', 'Siempre podés contar con mi mano amiga',
    'La alegría de compartir la misma sangre', 'Paz en tu hogar y proyectos cumplidos', 'Tu buen humor que desarma cualquier problema',
    'Por muchos veranos más de anécdotas', 'Un lazo que no se oxida con el tiempo', 'La nobleza de tus aspiraciones personales',
    'Celebrar quién sos con orgullo familiar', 'Siempre en el mismo equipo frente a la vida', 'Un año más sabio y más querible',
    'La tranquilidad de saberte cerca', 'Deseos cumplidos con esfuerzo propio', 'Complicidad en cada festejo de fin de año',
    'El respeto mutuo que nos une', 'La frescura de tu alegría cotidiana', 'Bendiciones en tu nuevo año de vida',
    'El orgullo de verte crecer con dignidad', 'Un brindis con copas bien arriba', 'Siempre primos del alma',
    'La mesa de los primos sigue siendo el mejor lugar', 'Mi cómplice oficial en las cenas de navidad', 'Casi casi te sale el asado como a los grandes',
    'Pacto de caballeros para no contar anécdotas viejas', 'El primo preferido de todos en secreto', 'Más mañas que el abuelo pero con cariño',
    'Pagar el primer brindis es ley sagrada', 'Sobrevivientes de las anécdotas repetidas de los tíos', 'Un año más sabio o más caradura con estilo',
    'Festejar hasta que apaguen las luces del salón', 'Dueño indiscutido de la picada y los quesos', 'Campeón del truco con señas en la ceja',
    'Mejor no contemos las velitas de la torta', 'Licencia para trasnochar y cantar desafinado', 'Gran compañero para cualquier salida de fin de semana',
    'De tal palo tal astilla con la locura familiar', 'Siempre con una historia delirante bajo la manga', 'Chin-chín por la camada de los primos', 'Fiesta total y amor incondicional hoy'
  ];
  const idx = i - 104;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, primo querido. En este día quiero agradecerte por tu cariño de siempre, por las anécdotas compartidas desde la infancia y por ser una persona con la que siempre da gusto brindar y ponerse al día. Admiro tu perseverancia en el trabajo, tu lealtad hacia la familia y la buena energía que transmitís en cada encuentro. Que este nuevo ciclo te traiga salud abundante, proyectos prósperos y momentos inolvidables junto a los tuyos. ¡Te mando un abrazo enorme y a festejar con todo!`;
  primo.push({ title, text });
}

const tio = [
  {
    title: '101. La calidez y el consejo de un segundo padre',
    text: '¡Muy feliz cumpleaños, tío querido! En muchos momentos de mi vida tu presencia tuvo la templanza, la sabiduría y el cariño de un segundo padre. Me acuerdo de tantas tardes en tu casa donde me escuchaste sin juzgarme, me diste el consejo justo para no cometer un error y me hiciste sentir seguro e importante. Gracias por tu generosidad sin límites, por abrirme siempre las puertas de tu hogar y por ser ese pilar afectivo que tanto bien le hace a toda nuestra familia. Deseo que este nuevo año te regale salud inquebrantable, paz en tu hogar y momentos de disfrute pleno.'
  },
  {
    title: '102. Guardián de la unión familiar y las tradiciones',
    text: 'Tío, admiro profundamente tu esfuerzo constante por mantener unida a la familia, por organizar los asados y por no permitir que las distancias o los apuros cotidianos enfríen nuestros lazos de afecto. De vos aprendí que los vínculos se cuidan con presencia, con llamadas cariñosas y con un plato caliente servido en la mesa para quien llegue. Sos un referente de generosidad y nobleza para todos tus sobrinos. Que la vida te devuelva multiplicada toda la calidez que sembrás a diario en nuestros corazones.'
  },
  {
    title: '103. Tu sentido del humor y tus anécdotas inolvidables',
    text: 'Feliz cumpleaños al tío más divertido y copado de todos. Cada sobremesa con vos es una garantía de risas, de historias desopilantes de tu juventud y de ese humor sano que alegra a grandes y chicos por igual. Gracias por ponerle chispa a las reuniones familiares y por enseñarnos a no tomarnos los problemas con tanta gravedad. Brindo por tu salud, por tus proyectos y por muchas tardes más compartiendo un buen vino y unas charlas que le hacen bien al alma.'
  }
];

for (let i = 104; i <= 159; i++) {
  const titles = [
    'El maestro del asado y las brasas bien hechas', 'Consejos con sentido común que valen oro', 'La nobleza de tu trabajo silencioso',
    'Un refugio de afecto para tus sobrinos', 'La dignidad de tu conducta intachable', 'Siempre presente en los momentos difíciles',
    'La tranquilidad de tus palabras sabias', 'Por los recuerdos entrañables de mi infancia', 'Salud y mañanas de sosiego para vos',
    'El corazón de la mesa familiar de domingo', 'Un brindis por el hombre noble que sos', 'Tu generosidad que no pide reconocimientos',
    'Compañero de mates y charlas de la vida', 'La memoria de nuestras raíces vivas en vos', 'Paz interior y bienestar merecido',
    'Por los desafíos que supiste domar con hombría', 'El orgullo de llevar tu misma sangre', 'Tu energía positiva que une a la familia',
    'Consejos para caminar con la frente en alto', 'El tesoro de tu presencia en nuestras vidas', 'Celebrar tus años con gratitud profunda',
    'Siempre un amigo leal en quien confiar', 'La ternura detrás de tu mirada firme', 'Bendiciones en este nuevo cumpleaños',
    'El fruto de una vida de esfuerzo y rectitud', 'Sin miedo al paso del tiempo con gracia', 'Tu palabra que inspira respeto y confianza',
    'Cuidar de los tuyos con devoción absoluta', 'Un brindis con copas bien arriba por vos', 'Siempre nuestro tío querido',
    'El tío copado oficial que nos defendía de chicos', 'Campeón indiscutido del asador familiar', 'Cero consejos aburridos y pura buena onda',
    'Los años se cuentan en botellas de buen vino hoy', 'Más joven que el resto de tus hermanos siempre', 'Licencia para repetir los chistes clásicos en la mesa',
    'El rey de la picada y las tablas de quesos', 'Pagar el postre le toca al cumpleañero mimado', 'Un clásico que nunca pasa de moda en el barrio',
    'Dueño indiscutido de la siesta sagrada en el sillón', 'Sobreviviente de mil anécdotas increíbles de juventud', 'Un brindis bien cargado por el gran tío',
    'El alma y el motor de cada juntada de domingo', 'Más mañas pero el doble de querido por todos', 'Maestro del truco con señas disimuladas en la mesa',
    'Comete la primera porción de torta sin culpa', 'Juventud garantizada en el espíritu y la sonrisa', 'Chin-chín por el tío más querible de todos', 'Festejo total y abrazos apretados en tu día'
  ];
  const idx = i - 104;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, tío querido. Quiero aprovechar esta fecha especial para darte las gracias por todo el cariño, los consejos y la alegría que siempre nos brindaste a tus sobrinos. Admiro tu capacidad de trabajo, tu sencillez y esa generosidad con la que siempre nos recibís en tu casa. Deseo que este nuevo año de vida te traiga una salud de hierro, proyectos que te entusiasmen y momentos de profunda paz y felicidad con tu gente. ¡Te queremos un montón!`;
  tio.push({ title, text });
}

const tia = [
  {
    title: '101. La dulzura de una segunda madre y gran amiga',
    text: '¡Muy feliz cumpleaños, tía hermosa! A lo largo de mi vida tu abrazo fue un remanso de ternura, comprensión y afecto donde siempre encontré el consuelo y la complicidad que a veces cuesta encontrar en otros lados. Me acuerdo de tantas meriendas en tu casa donde me preparabas algo rico y me escuchabas con paciencia infinita, haciéndome sentir valorado/a y protegido/a. Gracias por ser esa presencia amorosa que nunca juzga y que siempre tiene una palabra dulce para aliviar las penas. Que Dios te bendiga con salud plena, mañanas serenas y un año colmado de felicidad.'
  },
  {
    title: '102. La elegancia y la chispa que alegran la casa',
    text: 'Tía querida, admiro profundamente tu vitalidad, tu elegancia natural y esa sonrisa luminosa que transforma cualquier reunión familiar en una fiesta cálida. De vos aprendí a mirar las dificultades con optimismo, a cuidar los detalles y a ponerle belleza y alegría a las cosas cotidianas. Gracias por acordarte siempre de mis fechas importantes y por estar atenta a cada etapa de mi crecimiento. Deseo que pases un cumpleaños maravilloso, rodeada de flores, mimos y el cariño sincero de todos los que te adoramos.'
  },
  {
    title: '103. Confidente y cómplice de mis mejores recuerdos',
    text: 'Feliz cumpleaños a mi tía y confidente preferida. Cuántos secretos de juventud guardaste con discreción, cuántos consejos sabios me diste cuando no sabía qué camino tomar y cuántas risas compartimos en la cocina mientras cocinabas algo delicioso. Esos momentos íntimos son tesoros que llevo guardados en lo más profundo del corazón. Que este nuevo ciclo te llene de satisfacciones personales, salud inquebrantable y la tranquilidad de saber cuánto bien le hacés a nuestra familia.'
  }
];

for (let i = 104; i <= 159; i++) {
  const titles = [
    'El aroma a cosas ricas en tu cocina', 'Tus manos que curan con caricias suaves', 'Un corazón gigante donde entramos todos',
    'La templanza de tus palabras comprensivas', 'Por los mimos que nos diste de chicos', 'Siempre atenta a los detalles que importan',
    'La alegría de compartir un café y charlar', 'Tu fortaleza vestida de dulzura femenina', 'Salud y flores para tu nuevo año',
    'El pegamento amoroso de toda la familia', 'Un brindis por la mujer maravillosa que sos', 'Tu generosidad silenciosa que no pide nada',
    'Compañera de confidencias inolvidables', 'La memoria de nuestros afectos viva en vos', 'Paz en tu hogar y días sin apuros',
    'Por los obstáculos que superaste con gracia', 'El orgullo de ser tu sobrino/a querido/a', 'Tu energía alegre que nos contagia a todos',
    'Consejos llenos de empatía y sabiduría', 'El tesoro de tu compañía en la sobremesa', 'Celebrar tu vida con devoción y cariño',
    'Siempre una luz cálida en el camino', 'La ternura maternal que abriga el alma', 'Bendiciones multiplicadas en tu cumpleaños',
    'El fruto de una vida entregada con bondad', 'Sin miedo al paso de los años con belleza', 'Tu mirada bondadosa que todo lo comprende',
    'Cuidar de tus sueños con la misma entrega', 'Un brindis por tu salud y tu dicha constante', 'Siempre nuestra tía del alma',
    'La tía alcahueta oficial que nos tapaba todo', 'Pasá la marca de la crema antiarrugas milagrosa', 'Dueña de los tuppers con las tartas más ricas',
    'Cero chismes familiares y puro relax por hoy', 'La reina de la pista de baile en cada casamiento', 'Más canchera y moderna que mis propios amigos',
    'Invitar la merienda le toca a los sobrinos hoy', 'Se entera de las noticias dos semanas antes que el FBI', 'Licencia para comer doble porción de torta sin culpa',
    'Mi defensora oficial en las cenas familiares', 'Un año más de facha y elegancia insuperable', 'Risas a carcajada limpia recordando anécdotas viejas',
    'La consentida absoluta con coronita de reina', 'Más dulce y querible que el merengue de la torta', 'Secretos bajo siete llaves que jamás confesaré a mamá',
    'Velitas con estilo y deseos a lo grande en tu honor', 'Juventud eterna en el corazón y en la mirada pícara', 'Chin-chín por la tía más querida de la galaxia', 'Festejo con flores, chocolates y abrazos eternos'
  ];
  const idx = i - 104;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, tía querida. En este día quiero agradecerte por tu cariño incondicional, por tus palabras de aliento en momentos de duda y por esa generosidad con la que siempre nos recibís a tus sobrinos. Admiro tu entereza, tu ternura cotidiana y la alegría que le ponés a todo lo que hacés. Deseo que este nuevo año te regale salud plena, mañanas en paz, paseos lindos y el cariño constante de toda la familia que te adora. ¡Que pases un día extraordinario!`;
  tia.push({ title, text });
}

const abuelo = [
  {
    title: '101. El tronco firme del árbol de nuestra familia',
    text: '¡Muy feliz cumpleaños, abuelo querido! Vos sos el tronco firme y sabio de este árbol inmenso que formamos entre hijos, nietos y bisnietos. Todo lo que somos y los valores de honradez, trabajo duro y lealtad que hoy nos guían nacieron de tu ejemplo cotidiano y de tu esfuerzo silencioso. Me acuerdo de tantas tardes escuchando tus historias de antes, mirando tus manos gastadas por el trabajo noble y sintiendo una paz que no encontré en ningún otro lado. Gracias por haber construido este hogar con tanta dignidad. Que Dios te bendiga con salud de hierro, días tranquilos y el amor incondicional de todos nosotros.'
  },
  {
    title: '102. La riqueza de tus años y tus arrugas sagradas',
    text: 'Abuelo del alma, cada arruga en tu frente y cada cana en tu cabeza son medallas de honor de una vida vivida con rectitud, superando tempestades con la cabeza levantada y cuidando a los tuyos sin mezquindades. De vos aprendí que el respeto no se exige, sino que se gana con una conducta intachable y el cumplimiento de la palabra dada. Es un privilegio inmenso en mi vida poder abrazarte hoy, mirarte a los ojos y decirte cuánto te amo y te admiro. Que tengas un cumpleaños colmado de serenidad, buena comida y mimos de toda tu descendencia.'
  },
  {
    title: '103. Los caramelos escondidos y la complicidad eterna',
    text: 'Feliz cumpleaños a mi cómplice preferido de la infancia. Nunca voy a olvidar la sonrisa pícara con la que me pasabas un caramelo a escondidas de mis padres o ese billete arrugado en la mano con la frase "tomá, comprate algo rico". Esos gestos de amor puro y complaciente llenaron mi niñez de magia y calidez. Gracias por haberme regalado recuerdos tan hermosos que hoy atesoro como oro en la memoria. Brindo por tus años, por tu salud y por muchas tardes más compartiendo un mate en silencio en tu patio.'
  }
];

for (let i = 104; i <= 159; i++) {
  const titles = [
    'Manos sabias que trabajaron la tierra con honor', 'Tus silencios tranquilos que transmiten paz', 'El respeto y el cariño de todo el barrio',
    'La sabiduría práctica que no se aprende en la escuela', 'Por las historias que nunca nos cansamos de escuchar', 'Un patriarca noble que cuidó de los suyos',
    'La calma para mirar la vida con perspectiva', 'El aroma a madera y tabaco en tus recuerdos', 'Salud y mañanas soleadas en tu jardín',
    'El orgullo inmenso de llevar tu misma sangre', 'Un brindis por el hombre más honorable que conozco', 'Tu generosidad sin pedir nada a cambio',
    'Compañero de truco y de consejos de oro', 'La memoria de nuestros orígenes viva en tu voz', 'Paz en el atardecer dorado de tu vida',
    'Por las batallas que ganaste con dignidad', 'El tesoro invaluable de tenerte con nosotros', 'Tu sonrisa que abriga el alma en días fríos',
    'Consejos para caminar sin desviarse del bien', 'El refugio de tu casa donde el tiempo se detiene', 'Celebrar tu siglo de vida con devoción',
    'Siempre nuestro gran héroe de la realidad', 'La ternura de tus manos cansadas pero firmes', 'Bendiciones abundantes para tus días',
    'El fruto de una vida sembrada con honradez', 'Sin miedo al tiempo con la frente bien alta', 'Tu palabra que vale más que cualquier ley',
    'Cuidarte como vos nos cuidaste a nosotros', 'Un brindis con copas bien arriba por el abuelo', 'Siempre en el corazón de tus nietos',
    'El abuelo con coronita y permiso para todo', 'Campeón del truco con señas falsas a los tíos', 'Cero explicaciones tecnológicas por hoy, abuelo',
    'No estás viejo, sos un auto clásico de lujo', 'La propina clandestina que valía oro puro en la mano', 'El meteorólogo oficial de la rodilla en la familia',
    'Dueño absoluto del sillón principal frente a la tele', 'Repetir la misma anécdota de juventud es obligatorio hoy', 'Licencia para dormir la siesta sentado con servilleta',
    'Más mañero pero el doble de querible por todos', 'Un vinito tinto para la salud del corazón con permiso', 'Cazador oficial de caramelos de menta en los bolsillos',
    'Frases clásicas legendarias como "en mis tiempos"', 'Que los bomberos estén atentos a tantas velitas', 'Más sabio y confiable que cualquier búsqueda en Google',
    'Torta casera con receta tradicional en tu honor', 'Juventud intacta en la mirada pícara de siempre', 'Chin-chín por el patriarca más noble de la tierra', 'Amor eterno y devoción de todos tus nietos'
  ];
  const idx = i - 104;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, abuelo querido. En este día quiero agradecerte por haber sido el pilar moral y afectivo de nuestra familia, por tus enseñanzas de trabajo y honradez y por esa ternura tan tuya que nos abrigó a todos de chicos. Mirarte es aprender lo que significa una vida bien vivida con la conciencia limpia. Que Dios te regale salud inquebrantable, tranquilidad en tus días y la alegría de ver a tu descendencia unida y agradecida a tu alrededor. ¡Te amamos con toda el alma!`;
  abuelo.push({ title, text });
}

const abuela = [
  {
    title: '101. El nido de ternura y magia de mi infancia',
    text: '¡Muy feliz cumpleaños, abuelita de mi alma! Cuando cierro los ojos y pienso en la felicidad más pura, siempre vuelvo a tu casa, al aroma a limpio de tus sábanas, a tus caricias suaves en el pelo cuando tenía pena y a esa merienda caliente que me esperaba en la mesa. Vos supiste hacer de este mundo un lugar más dulce y seguro para tus nietos. Gracias por tu amor sin condiciones, por tus rezos silenciosos que me protegieron en cada viaje y por ser el corazón palpitante de nuestra familia. Que Dios te colme de salud, paz en el alma y muchos mimos de todos los que te adoramos.'
  },
  {
    title: '102. Manos tejedoras de abrigo y bendiciones',
    text: 'Abuela querida, esas manos tuyas que tejieron pulóveres con amor, que amasaron panes inolvidables y que acariciaron a tantas generaciones son el testimonio más hermoso de una vida entregada con bondad. De vos aprendí la paciencia, la importancia de perdonar sin rencores y esa generosidad que siempre tiene un plato servido para quien llegue a la puerta. Es una bendición gigantesca tenerte a nuestro lado celebrando otro año de vida. Que la vida te regale mañanas tranquilas, buena salud y el calor constante de tus seres queridos.'
  },
  {
    title: '103. La fortaleza de un roble con perfume a lavanda',
    text: 'Feliz cumpleaños a la mujer más fuerte y dulce que conozco. Detrás de tu figura menuda y de tu voz suave hay una fortaleza indestructible que supo sacar adelante a toda su familia en tiempos difíciles sin perder jamás la sonrisa ni la fe. Sos la gran dama de nuestras vidas, el ejemplo que nos guía y el refugio donde siempre encontramos consuelo. Hoy nos sentamos a tu mesa para homenajearte y darte las gracias por tanto amor sembrado. ¡Que pases un cumpleaños inolvidable, abuelita hermosa!'
  }
];

for (let i = 104; i <= 159; i++) {
  const titles = [
    'El aroma a bizcochuelo casero en tus tardes', 'Tus oraciones que me cuidaron en el camino', 'La sal y el amor secreto de tus comidas',
    'La sabiduría que no se apura y escucha', 'Por los mimos complacientes que me diste de chico/a', 'Un refugio de paz contra el ruido del mundo',
    'La ternura de tus abrazos de algodón', 'Tu mirada que perdona todo con dulzura', 'Salud y días luminosos en tu jardín de flores',
    'El corazón que mantiene unida a la familia', 'Un brindis por la abuela más noble del mundo', 'Tu generosidad infinita que no pide nada',
    'Compañera de meriendas y charlas inolvidables', 'La memoria viva de nuestras raíces en tus cuentos', 'Paz en el atardecer sereno de tu vida',
    'Por los sacrificios que hiciste con una sonrisa', 'El tesoro invaluable de tenerte sana a nuestro lado', 'Tu risa dulce que ilumina nuestra casa',
    'Consejos llenos de fe, esperanza y caridad', 'El refugio sagrado de tu abrazo maternal', 'Celebrar tus años con lágrimas de emoción',
    'Siempre nuestro ángel de la guarda en la tierra', 'La belleza de tus cabellos plateados con dignidad', 'Bendiciones derramadas sobre tus días',
    'El fruto bendito de tu amor incondicional', 'Sin miedo al tiempo con el alma en paz', 'Tu mirada que sana cualquier tristeza',
    'Cuidarte con la misma ternura que nos diste', 'Un brindis con sidra dulce por la gran abuela', 'Siempre en el corazón de todos tus nietos',
    'Comé un poquito más que estás muy flaquito/a', 'El misterioso pote de helado con porotos en el freezer', 'Cero novelas turcas por hoy y fiesta total',
    'La abuela más mimada con corona de reina', 'Remedios caseros milagrosos que curaban todo', 'Más dulce y tierna que el dulce de leche',
    'La cartera mágica con pañuelos y caramelos', 'Los años se cuentan en empanadas fritas amasadas', 'Licencia para retar a papá y mamá en la mesa',
    'Las plantas te obedecen por puro amor botánico', 'Pantuflas de lujo y bata cómoda para festejar', 'Un brindis con sidra dulce en copas de cristal',
    'La campeona indiscutida del tejido con amor', 'Que los bomberos no sospechen de tantas velitas', 'Dueña del chisme del barrio antes que el noticiero',
    'Más linda y perfumada que una flor de primavera', 'Cómplice de secretos infantiles que nunca confesaste', 'Amor con azúcar impalpable y bendiciones', 'Amor eterno y devoción de todos tus nietos por siempre'
  ];
  const idx = i - 104;
  const title = `${i}. ${titles[idx % titles.length]}`;
  const text = `Feliz cumpleaños, abuelita querida. En este día quiero agradecerte por haber llenado mi infancia de ternura, por tus comidas preparadas con amor infinito y por haber sido siempre ese remanso de paz al que daba gusto volver. De vos aprendí la paciencia, la bondad y el valor de cuidar a la familia por encima de todo. Deseo que Dios te bendiga con salud plena, mañanas serenas y la alegría inmensa de sentirte tan amada y respetada por todos tus nietos. ¡Te amamos con el alma entera!`;
  abuela.push({ title, text });
}

module.exports = { hermano, primo, tio, tia, abuelo, abuela };
