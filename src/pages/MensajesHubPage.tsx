import { Link } from '../router';
import { CopyButton } from '../components/CopyButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { VoteButtons } from '../components/VoteButtons';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';

const MENSAJES_PREVIEWS = [
  {
    slug: 'mensajes-de-cumpleanos-para-mama',
    name: 'Mamá',
    title: 'Para mamá',
    text: 'Feliz cumpleaños, mamá. Hoy quiero agradecerte por tantas cosas que a veces doy por sentadas: tus consejos, tu preocupación, tu paciencia y esa forma de estar presente incluso cuando no te lo pido. Deseo que este nuevo año te devuelva algo de todo el cariño que compartiste, con salud, tranquilidad, momentos lindos y tiempo para disfrutar de vos misma. Te quiero muchísimo y espero que hoy te sientas tan querida como merecés.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-papa',
    name: 'Papá',
    title: 'Para papá',
    text: 'Feliz cumpleaños, papá. Gracias por las cosas que me enseñaste con palabras y por muchas otras que aprendí simplemente viéndote actuar. Con el tiempo fui entendiendo el valor de tus consejos, de tu esfuerzo y de esos gestos que quizá parecían pequeños. Te deseo un año con salud, tranquilidad, buenos proyectos y tiempo para disfrutar lo que te gusta. Espero que hoy recibas mucho cariño y sepas cuánto te valoro.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-mi-pareja',
    name: 'Mi pareja',
    title: 'Para mi pareja',
    text: 'Feliz cumpleaños, mi amor. Me encanta celebrar tu vida y todo lo que sos, incluso esas pequeñas costumbres tuyas que hacen que los días comunes tengan algo especial. Deseo que este año te acerque a tus sueños, te regale tranquilidad y te dé motivos para sentir orgullo de vos. Quiero seguir acompañándote, escucharte y compartir tanto los planes grandes como los momentos sencillos. Te amo y espero que hoy te sientas profundamente querido.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-una-hija',
    name: 'Una hija',
    title: 'Para una hija',
    text: 'Feliz cumpleaños, hija querida. Verte crecer, aprender y descubrir quién sos es uno de los regalos más grandes de mi vida. Me llena de orgullo tu manera de enfrentar desafíos, tus ideas y la sensibilidad con la que mirás el mundo. Deseo que este nuevo año te encuentre rodeada de personas que te respeten y te impulsen a crecer. Nunca olvides que no tenés que ser perfecta para ser profundamente amada. Siempre voy a estar para vos.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-un-hijo',
    name: 'Un hijo',
    title: 'Para un hijo',
    text: 'Feliz cumpleaños, hijo querido. Verte crecer y encontrar tu propio camino me llena de orgullo. No porque tengas que hacerlo todo perfecto, sino porque cada año aprendés algo nuevo y descubrís un poco más quién sos. Deseo que tengas salud, amistades sinceras y oportunidades para acercarte a tus sueños. Recordá que siempre podés hablar conmigo, celebrar tus logros o pedir ayuda cuando la necesites. Te quiero muchísimo.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-alguien-lejos',
    name: 'Alguien que está lejos',
    title: 'Para alguien que está lejos',
    text: 'Feliz cumpleaños. Me encantaría estar cerca para darte un abrazo, compartir algo rico y celebrar como se merece tu día. Aunque hoy nos separen los kilómetros, quiero que sepas que te tengo muy presente y te mando todo mi cariño. Deseo que este nuevo año te traiga salud, buenas noticias y momentos que te hagan sonreír. Ojalá pronto podamos encontrarnos y convertir este saludo a la distancia en un abrazo de verdad.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-un-hermano',
    name: 'Un hermano',
    title: 'Para un hermano',
    text: 'Feliz cumpleaños, hermano. Compartimos una historia llena de momentos que nadie más entendería del todo: juegos, discusiones, secretos y recuerdos que vuelven con una sola palabra. Me alegra que, más allá de cómo cambien nuestras vidas, sigamos teniendo ese vínculo único. Te deseo salud, oportunidades y personas que te hagan bien. Ojalá este año te acerque a tus sueños y nos regale nuevas anécdotas para recordar y contar una y otra vez.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-un-primo',
    name: 'Un primo',
    title: 'Para un primo',
    text: '¡Feliz cumpleaños, primo! Me encanta que compartamos tantos recuerdos familiares y que, aunque pasen los años, algunas charlas sigan llevándonos directo a la infancia. Te deseo un año con salud, oportunidades, buenos encuentros y proyectos que te entusiasmen. Ojalá sigamos sumando anécdotas para contar en cada reunión y encontrando excusas para vernos más seguido. Te mando un abrazo enorme y espero que disfrutes mucho tu día.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-un-tio',
    name: 'Un tío',
    title: 'Para un tío',
    text: '¡Feliz cumpleaños, tío! Te deseo un año lleno de salud, tranquilidad y momentos que te hagan disfrutar de verdad. Gracias por las charlas, los consejos y esas ocasiones en las que tu presencia hizo que todo fuera más fácil o más divertido. Ojalá hoy te rodeen personas que te quieren y puedas hacer algo que te guste mucho. Te mando un abrazo enorme y espero que se te cumplan varios deseos.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-una-tia',
    name: 'Una tía',
    title: 'Para una tía',
    text: 'Feliz cumpleaños, tía querida. Gracias por tu cariño, tus palabras y esa forma tan tuya de hacerme sentir bienvenido. Me alegra tenerte en mi vida y guardar recuerdos que siempre me sacan una sonrisa. Deseo que este nuevo año te traiga salud, tranquilidad, buenos encuentros y muchas oportunidades para disfrutar de las cosas que te gustan. Ojalá hoy te mimen mucho y puedas sentir todo el afecto que despertás en quienes te queremos.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-un-abuelo',
    name: 'Un abuelo',
    title: 'Para un abuelo',
    text: 'Feliz cumpleaños, abuelo. Gracias por tu cariño, tus historias y esa forma especial de hacer que el tiempo compartido se vuelva un recuerdo para toda la vida. Deseo que tengas salud, tranquilidad y muchos días rodeado de las personas que te quieren. Ojalá podamos seguir compartiendo charlas, comidas y momentos sencillos que terminan siendo los más valiosos. Te quiero muchísimo y espero que hoy sientas todo el amor que sembraste en nuestra familia.'
  },
  {
    slug: 'mensajes-de-cumpleanos-para-una-abuela',
    name: 'Una abuela',
    title: 'Para una abuela',
    text: 'Feliz cumpleaños, abuela querida. Gracias por tu cariño, por tus abrazos y por esa forma tuya de hacer que uno se sienta en casa. Guardo con mucho amor los momentos que compartimos y las pequeñas cosas que aprendí a tu lado. Deseo que este año te traiga salud, tranquilidad, visitas lindas y muchas razones para sonreír. Ojalá hoy recibas todo el amor que tantas veces diste. Te quiero muchísimo.'
  }
];

const MENSAJES_FAQS = [
  {
    question: '¿Cómo escribir un mensaje de cumpleaños personal?',
    answer: 'Empezá por el vínculo, mencioná una cualidad o un recuerdo real y cerrá con un deseo concreto. Es mejor escribir como hablás habitualmente que intentar sonar solemne.'
  },
  {
    question: '¿Qué debería incluir un mensaje largo?',
    answer: 'Una felicitación, una idea personal sobre la persona, un recuerdo o agradecimiento y un deseo para el año que empieza. No hace falta llenar el texto de adjetivos.'
  },
  {
    question: '¿Cómo felicitar a alguien con quien no tengo mucha confianza?',
    answer: 'Elegí un saludo amable y respetuoso, deseale un buen año y evitá referencias demasiado íntimas o bromas que no sabés si va a disfrutar.'
  },
  {
    question: '¿Puedo enviar el mismo mensaje por WhatsApp o en una tarjeta?',
    answer: 'Sí, aunque podés ajustar el largo. En WhatsApp suele funcionar un texto más directo; una tarjeta permite desarrollar un recuerdo o una dedicatoria más personal.'
  }
];

export function MensajesHubPage() {
  return (
    <>
      <SEOHead
        title="Mensajes de Cumpleaños | Textos y dedicatorias para cada ocasión"
        description="Mensajes de cumpleaños completos y emotivos para mamá, papá, pareja, hijos y amigos listos para personalizar y enviar."
        path="/mensajes-de-cumpleanos/"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Mensajes de cumpleaños', item: '/mensajes-de-cumpleanos/' },
        ]}
      />
      <nav className="breadcrumbs wrap" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <span>Mensajes de cumpleaños</span>
      </nav>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Palabras para dedicar</span>
            <h1>Mensajes de cumpleaños que expresan lo que sentís</h1>
            <p>
              Si no querés mandar un simple “feliz cumpleaños”, encontrá mensajes completos para agradecer, emocionar, hacer reír o acompañar a alguien importante. Hay ejemplos para familiares, pareja, amistades y personas que están lejos.
            </p>
            <p>
              Usalos como base: cambiar una frase por un recuerdo verdadero suele hacer que el saludo se sienta mucho más cercano.
            </p>
            <div className="button-row">
              <a className="button" href="#ejemplos-de-mensajes">
                Ver ejemplos
              </a>
              <Link className="button-secondary" href="/frases-de-cumpleanos/">
                Buscar frases cortas
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <span className="floating-note note-one">Decilo a tu manera 💌</span>
            <span className="big-cake">🎁</span>
            <span className="floating-note note-two">Un recuerdo, un deseo ✨</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <span className="eyebrow">Una estructura sencilla</span>
          <h2>Cómo escribir un mensaje de cumpleaños propio</h2>
          <p>
            Un mensaje personal no necesita palabras difíciles. Podés construirlo en cuatro pasos: felicitar, reconocer algo de la persona, expresar un deseo y cerrar con una frase que suene natural en tu voz.
          </p>

          <h3>1. Empezá con una felicitación clara</h3>
          <p>Usá el nombre, el apodo o la forma en que suelen hablarse. El comienzo no tiene que ser ingenioso; tiene que sentirse cercano.</p>

          <h3>2. Nombrá algo verdadero</h3>
          <p>Puede ser una cualidad, una ayuda que recibiste, un recuerdo, una costumbre o algo que admirás. Ese detalle diferencia el mensaje de un texto genérico.</p>

          <h3>3. Deseá algo concreto</h3>
          <p>En vez de acumular “salud, amor y felicidad”, pensá qué puede hacerle bien a esa persona en esta etapa: confianza, descanso, oportunidades, nuevos encuentros o tiempo para sus proyectos.</p>

          <h3>4. Cerrá con naturalidad</h3>
          <p>Un “te quiero”, “te mando un abrazo” o “ojalá nos veamos pronto” puede ser suficiente. La mejor frase es la que podrías decir en persona.</p>
        </div>
      </section>

      <section className="section section-muted" id="ejemplos-de-mensajes">
        <div className="wrap narrow">
          <div className="section-heading">
            <div>
              <span className="eyebrow">159 mensajes por persona</span>
              <h2>Mensajes de cumpleaños completos para dedicar</h2>
              <p>Encontrá una dedicatoria para copiar, enviar por WhatsApp o adaptar a una tarjeta. Debajo de cada ejemplo tenés un acceso a una colección completa con 159 mensajes listos para esa persona.</p>
            </div>
          </div>

          <div className="category-feature-links">
            {MENSAJES_PREVIEWS.map((item) => (
              <a key={item.slug} href={`#preview-${item.slug}`}>
                {item.name}
              </a>
            ))}
          </div>

          {MENSAJES_PREVIEWS.map((item) => (
            <article key={item.slug} className="message-example" id={`preview-${item.slug}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="button-row" style={{ alignItems: 'center' }}>
                <CopyButton textToCopy={item.text} defaultLabel="Copiar mensaje" />
                <WhatsAppButton textToShare={item.text} />
                <VoteButtons
                  itemId={`preview-${item.slug}`}
                  title={item.title}
                  text={item.text}
                  url={`/mensajes-de-cumpleanos/#preview-${item.slug}`}
                />
                <Link className="button-secondary" href={`/${item.slug}/`}>
                  159 mensajes para {item.name.toLowerCase()} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <h2>Elegí el mensaje según la persona</h2>
          <p>
            Para una dedicatoria familiar, nombrá una enseñanza o un gesto que recuerdes. Para una amistad, podés incluir una anécdota o un deseo compartido. En una pareja, expresá qué valorás del vínculo sin convertir el mensaje en una declaración que no se parezca a vos. Si el saludo es para el trabajo o una persona con la que no tenés tanta confianza, mantené un tono cordial y cálido.
          </p>
          <p>
            También podés combinar estos ejemplos con nuestras <Link href="/frases-de-cumpleanos/">frases de cumpleaños</Link> o acompañar el mensaje con una <Link href="/postales-de-cumpleanos/">postal lista para compartir</Link>.
          </p>

          <h2>Qué conviene evitar</h2>
          <ul>
            <li>No copies un mensaje demasiado íntimo si no refleja la relación.</li>
            <li>No hagas bromas sobre la edad o temas personales si no sabés que serán bien recibidas.</li>
            <li>No agregues promesas que no podés cumplir.</li>
            <li>No te preocupes por escribir mucho: una idea verdadera vale más que varios párrafos vacíos.</li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={MENSAJES_FAQS} title="Preguntas frecuentes sobre mensajes de cumpleaños" />
    </>
  );
}
