import { Link } from '../router';
import { CopyButton } from '../components/CopyButton';
import { VoteButtons } from '../components/VoteButtons';
import { FAQSection } from '../components/FAQSection';
import { PostCard } from '../components/PostCard';
import { SEOHead } from '../components/SEOHead';
import { posts } from '../data';

const FRASES_SLUGS = [
  'frases-de-cumpleanos-para-hermanos',
  'frases-de-cumpleanos-para-mi-esposo',
  'frases-de-cumpleanos-para-mi-esposa',
  'frases-de-cumpleanos-para-mi-papa',
  'frases-de-cumpleanos-para-mi-mama',
  'frases-de-cumpleanos-para-amigos',
  'frases-de-cumpleanos-para-mi-amor',
  'frases-de-cumpleanos-para-abuelos',
  'feliz-cumpleanos-querida-hija',
  'frases-de-cumpleanos-para-mi-hijo',
  'frases-cortas-de-cumpleanos-para-whatsapp',
  '100-frases-de-cumpleanos-que-emocionan'
];

const FRASES_EJEMPLO = [
  'Que este nuevo año te acerque a las cosas que te hacen bien y a las personas con quienes podés ser vos.',
  'Feliz cumpleaños. Que nunca te falten motivos para reír, descansar en paz y volver a empezar con ganas.',
  'Hoy celebro tu vida y la alegría de tenerte cerca. Ojalá se te cumplan los deseos que de verdad importan.',
  'Un año más para descubrir, aprender, disfrutar y elegir con más claridad lo que te hace feliz.',
  'Que la vida te sorprenda para bien y que tengas con quién compartir cada buena noticia.',
  'Feliz cumpleaños a alguien que hace más lindo el mundo de las personas que lo rodean.'
];

const FRASES_FAQS = [
  {
    question: '¿Cómo elegir una frase de cumpleaños que no suene genérica?',
    answer: 'Elegí el tono según la relación y agregá un detalle real: un recuerdo, una cualidad o un deseo concreto. Una sola línea personal puede hacer que una frase conocida se sienta propia.'
  },
  {
    question: '¿Qué diferencia hay entre una frase y un mensaje de cumpleaños?',
    answer: 'Una frase suele expresar una idea breve y puede acompañar una foto o tarjeta. Un mensaje desarrolla un poco más el saludo, reconoce el vínculo y puede incluir recuerdos o deseos específicos.'
  },
  {
    question: '¿Qué puedo enviar por WhatsApp?',
    answer: 'Un saludo breve, un mensaje cercano o una postal. Si no sabés qué tono elegir, empezá con una felicitación sincera y agregá una línea que tenga relación con esa persona.'
  },
  {
    question: '¿Puedo copiar las frases y adaptarlas?',
    answer: 'Sí. Podés cambiar palabras, agregar nombres y sumar experiencias propias para que la dedicatoria refleje tu manera de hablar.'
  }
];

export function FrasesPage() {
  return (
    <>
      <SEOHead
        title="Frases de Cumpleaños | Felicitaciones para cada persona y estilo"
        description="Colección de frases de cumpleaños emotivas, cortas, divertidas y profundas para dedicar a mamá, papá, hermanos, pareja y amigos."
        path="/frases-de-cumpleanos/"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Frases de cumpleaños', item: '/frases-de-cumpleanos/' },
        ]}
      />
      <nav className="breadcrumbs wrap" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <span>Frases de cumpleaños</span>
      </nav>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Colección de cumpleaños</span>
            <h1>Frases de cumpleaños para cada persona y cada estilo</h1>
            <p>
              Encontrá palabras para felicitar a mamá, papá, hermanos, hijos, pareja y amigos. Reunimos frases emotivas, cortas, divertidas y profundas para dedicar en una tarjeta, enviar por WhatsApp o acompañar una foto.
            </p>
            <p>
              Una buena frase no tiene que ser complicada: tiene que encajar con el vínculo y decir algo que quieras transmitir de verdad.
            </p>
            <div className="button-row">
              <a className="button" href="#frases-por-persona">
                Buscar por persona
              </a>
              <Link className="button-secondary" href="/mensajes-de-cumpleanos/">
                Ver mensajes completos
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <span className="floating-note note-one">Palabras que llegan 💌</span>
            <span className="big-cake">🎂</span>
            <span className="floating-note note-two">Un deseo sincero ✨</span>
          </div>
        </div>
      </section>

      <section className="section" id="frases-por-persona">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Elegí el vínculo</span>
              <h2>Frases de cumpleaños según la persona</h2>
              <p>Buscá un saludo que se adapte a la relación y a lo que querés decir.</p>
            </div>
          </div>

          <div className="card-grid">
            {FRASES_SLUGS.map((slug) => {
              const post = posts.find((p) => p.slug === slug);
              if (!post) return null;
              return (
                <PostCard
                  key={slug}
                  post={post}
                  kicker="Frases de cumpleaños"
                  actionLabel="Ver colección →"
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap narrow">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Elegí el tono</span>
              <h2>Una frase para cada manera de felicitar</h2>
            </div>
          </div>
          <h3>Frases emotivas</h3>
          <p>Sirven cuando querés expresar gratitud, cariño o admiración. Funcionan especialmente bien para una persona importante, una tarjeta o un mensaje que querés que recuerde.</p>
          <h3>Frases cortas</h3>
          <p>Son ideales para WhatsApp, estados, fotos y saludos rápidos. Lo importante es que el deseo sea claro y no se pierda entre muchas palabras.</p>
          <h3>Frases divertidas</h3>
          <p>Un guiño de humor puede hacer que el saludo sea más cercano, siempre que conozcas a la persona y sepas que va a disfrutar la broma.</p>
          <h3>Frases profundas y personales</h3>
          <p>Reconocé algo concreto: una cualidad, un esfuerzo, una etapa superada o un recuerdo compartido. La especificidad vale más que una frase grandilocuente.</p>

          <h2>Ejemplos de frases de cumpleaños</h2>
          <ul className="phrase-list">
            {FRASES_EJEMPLO.map((phrase, idx) => (
              <li key={idx}>
                <span>{phrase}</span>
                <div className="phrase-item-actions">
                  <CopyButton textToCopy={phrase} defaultLabel="Copiar frase" />
                  <VoteButtons
                    itemId={`frase-ejemplo-${idx + 1}`}
                    title={phrase.length > 55 ? phrase.slice(0, 52) + '...' : phrase}
                    text={phrase}
                    url="/frases-de-cumpleanos/"
                  />
                </div>
              </li>
            ))}
          </ul>

          <p>
            Si querés un mensaje más desarrollado, visitá la{' '}
            <Link href="/mensajes-de-cumpleanos/">colección de mensajes de cumpleaños</Link>. Para acompañar el saludo con una imagen, elegí una de las{' '}
            <Link href="/postales-de-cumpleanos/">postales para compartir</Link>.
          </p>
        </div>
      </section>

      <FAQSection faqs={FRASES_FAQS} title="Preguntas frecuentes sobre frases de cumpleaños" />
    </>
  );
}
