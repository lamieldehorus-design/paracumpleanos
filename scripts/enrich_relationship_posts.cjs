const fs = require('fs');
const path = require('path');

const postsPath = path.resolve(__dirname, '../data/posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

function enrichSections(slug, extraParagraphsBySection) {
  const post = posts.find((p) => p.slug === slug);
  if (!post || !post.sections) return;

  post.sections.forEach((sec, idx) => {
    if (extraParagraphsBySection[idx]) {
      sec.paragraphs = [...(sec.paragraphs || []), ...extraParagraphsBySection[idx]];
    }
  });
  console.log(`Enriched relationship post: ${slug}`);
}

enrichSections('frases-de-cumpleanos-para-mi-mama', [
  [
    'Felicitar a una madre es una de las tareas emocionales más significativas del año. A menudo nos cuesta salir del clásico "gracias por todo lo que hacés" para encontrar palabras que realmente hagan justicia a su entrega y dedicación diaria.',
    'Una buena dedicatoria para mamá debe reconocerla no solo en su rol materno de servicio, sino como mujer íntegra con sus propios sueños, pasiones y aprendizajes. Mencioná un recuerdo concreto donde su mirada o consejo te haya cambiado el rumbo.'
  ],
  [
    'Si tu mamá es de las personas que no disfrutan de discursos largos ni demostraciones pomposas, una frase corta pero certera en una nota junto al desayuno o en WhatsApp a primera hora de la mañana tiene un impacto imborrable.',
    'El secreto de los mensajes breves es la precisión: una sola frase que encierre gratitud sincera y le desee salud y paz interior vale más que diez líneas de lugares comunes.'
  ],
  [
    'Para las tarjetas manuscritas que acompañan un regalo o un ramo de flores, tomate el tiempo de escribir con caligrafía pausada. Las madres guardan estas notas durante décadas en cajones y libros de cabecera.',
    'No temas mostrar vulnerabilidad: recordale cuánto valorás su tiempo, pedile que hoy se deje cuidar y consentir, y asegurale que su ejemplo de vida es el faro que guía a toda la familia.'
  ]
]);

enrichSections('frases-de-cumpleanos-para-mi-papa', [
  [
    'Con los padres, la comunicación afectiva muchas veces ha estado marcada por silencios compartidos, gestos de trabajo constante y miradas de aprobación más que por declaraciones efusivas.',
    'Su cumpleaños es la oportunidad perfecta para romper esa barrera y verbalizar lo que tantas veces damos por sentado: el agradecimiento por sus sacrificios silenciosos, su protección incondicional y la seguridad que siempre brindó a nuestro hogar.'
  ],
  [
    'Si tu papá tiene un perfil práctico o reservado, los mensajes que mejor conectan con él son aquellos que valoran sus enseñanzas: cómo afrontar los problemas con entereza, el valor de la palabra empeñada o la paciencia frente a la adversidad.',
    'Acompañá tu saludo con una propuesta de tiempo juntos: un almuerzo a solas, un café tranquilo o una tarde compartiendo su hobby favorito. Para un padre, tu tiempo es el mayor homenaje.'
  ]
]);

enrichSections('frases-de-cumpleanos-para-hermanos', [
  [
    'El vínculo entre hermanos es único: son los testigos privilegiados de nuestra infancia, los cómplices de nuestras primeras travesuras y quienes conocen nuestras raíces como nadie más en el mundo.',
    'En sus cumpleaños, una dedicatoria que combine cariño genuino con un toque de humor cómplice rescata esa complicidad que resiste el paso de los años y la distancia física.'
  ],
  [
    'Recordá en tu mensaje una anécdota que solo ustedes dos entiendan: aquel juego secreto de chicos, un viaje accidentado o una comida compartida. Celebrar a un hermano es celebrar la historia compartida de tu propia vida.'
  ]
]);

enrichSections('frases-de-cumpleanos-para-mi-esposo', [
  [
    'En el matrimonio, la rutina cotidiana, las responsabilidades laborales y los compromisos familiares a veces postergan las palabras de amor y admiración mutua.',
    'El cumpleaños de tu esposo es el momento ideal para reconectar con el romance de los primeros días, agradecer su compañerismo incondicional y recordarle por qué lo seguís eligiendo como tu amor y compañero de vida.'
  ],
  [
    'Hacé foco en sus virtudes como compañero: su generosidad, su humor en días difíciles, su apoyo constante a tus metas y el esfuerzo diario por construir un hogar cálido y seguro.'
  ]
]);

enrichSections('frases-de-cumpleanos-para-mi-esposa', [
  [
    'Celebrar a tu esposa es honrar a la persona que llena de luz y sentido cada rincón de tus días. Una dedicatoria inolvidable debe ir más allá de los halagos superficiales para destacar su fortaleza interior y su bondad.',
    'Decile cuánto admirás su evolución personal, cómo su risa transforma tus tardes y qué agradecido te sentís de caminar juntos frente a cualquier desafío que presente la vida.'
  ],
  [
    'Prepará el ambiente: dejale una tarjeta escrita a mano en su mesa de luz antes de que despierte o enviale un mensaje a mitad del día para recordarle lo especial que es este día para ambos.'
  ]
]);

enrichSections('frases-de-cumpleanos-para-amigos', [
  [
    'La amistad verdadera es la familia que uno elige por afinidad del alma. Un amigo incondicional es aquel que conoce tus peores caídas y aún así celebra tus victorias con alegría auténtica.',
    'En su día, brindale un mensaje que celebre la lealtad que no exige explicaciones, las risas hasta la madrugada y la certeza de que, sin importar cuánto tiempo pase sin verse, la complicidad permanece intacta.'
  ],
  [
    'Evitá los saludos genéricos de tres palabras en redes sociales. Un mensaje privado y detallado que rescate lo mucho que valorás su presencia en tu vida tiene un poder transformador.'
  ]
]);

enrichSections('frases-de-cumpleanos-para-mi-hijo', [
  [
    'Ver crecer a un hijo es un viaje emocionante que combina orgullo, nostalgia y amor infinito. Cada cumpleaños es un mojón que nos recuerda lo rápido que pasa el tiempo y lo valioso de cada etapa.',
    'En tu mensaje, recordale que no importa cuántos años cumpla ni qué tan lejos vuele: tu abrazo y tu casa siempre serán su refugio seguro. Alentalo a seguir sus sueños con valentía y bondad.'
  ]
]);

enrichSections('feliz-cumpleanos-querida-hija', [
  [
    'Una hija trae una ternura y una fuerza incomparables a la vida de sus padres. Verla convertirse en una mujer independiente, sensible y decidida es el mayor regalo que el tiempo puede brindar.',
    'Dedicale palabras que fortalezcan su autoestima, celebren su autenticidad y le recuerden que su felicidad y bienestar son el mayor anhelo de tu corazón.'
  ]
]);

fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), 'utf-8');
console.log('✅ Posts de vínculos enriquecidos con contexto y profundidad editorial.');
