import { Link } from '../router';
import { SearchSection } from '../components/SearchSection';
import { FAQSection } from '../components/FAQSection';
import { PostCard } from '../components/PostCard';
import { SEOHead } from '../components/SEOHead';
import { posts } from '../data';

const HOME_FAQS = [
  {
    question: '¿Dónde encuentro frases de cumpleaños para una persona específica?',
    answer: 'Entrá en la colección de frases y elegí por vínculo: mamá, papá, hermanos, pareja, hijos, amigos o abuelos. También hay opciones cortas y emotivas para WhatsApp.'
  },
  {
    question: '¿Puedo encontrar mensajes completos y no solo frases cortas?',
    answer: 'Sí. La sección de mensajes reúne ejemplos más desarrollados para adaptar a una tarjeta, una carta o un saludo personal.'
  },
  {
    question: '¿Hay postales de cumpleaños para compartir?',
    answer: 'Sí. La galería ofrece diseños con mensajes para distintos estilos, con opción para descargar la imagen, copiar el texto o compartirlo.'
  },
  {
    question: '¿Qué hago si ninguna frase expresa exactamente lo que quiero decir?',
    answer: 'Tomá una opción como punto de partida y agregá un recuerdo, una cualidad o un deseo propio. Ese detalle suele hacer que el mensaje suene auténtico.'
  }
];

export function HomePage() {
  // Select featured posts for the homepage
  const featuredSlugs = [
    'frases-de-cumpleanos-para-mi-mama',
    'frases-de-cumpleanos-para-mi-papa',
    'frases-de-cumpleanos-para-hermanos',
    'frases-de-cumpleanos-para-amigos',
    'frases-de-cumpleanos-para-mi-amor',
    'frases-cortas-de-cumpleanos-para-whatsapp',
    'feliz-cumpleanos-querida-hija',
    'frases-de-cumpleanos-para-mi-hijo'
  ];

  const featuredPosts = featuredSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof posts;

  return (
    <>
      <SEOHead
        title="Para Cumpleaños | Frases, mensajes y postales para dedicar"
        description="Frases de cumpleaños, mensajes para cada persona y postales para compartir. Encontrá felicitaciones emotivas, divertidas y originales con ideas para celebrar."
        path="/"
        type="website"
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Todo para felicitar y celebrar</span>
            <h1>Frases, mensajes y postales de cumpleaños para cada persona</h1>
            <p>
              Encontrá las palabras para decir feliz cumpleaños a tu manera: frases emotivas, saludos divertidos, mensajes para alguien especial y postales listas para compartir.
            </p>
            <p>
              También reunimos ideas para fiestas, invitaciones, decoración y pequeños detalles que ayudan a que una celebración se sienta personal. Elegí por persona, por tono o por lo que necesitás preparar.
            </p>
            <div className="button-row">
              <Link className="button" href="/frases-de-cumpleanos/">
                Encontrar frases
              </Link>
              <Link className="button-secondary" href="/postales-de-cumpleanos/">
                Ver postales
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <span className="floating-note note-one">Una frase que llega 💌</span>
            <span className="big-cake">🎂</span>
            <span className="floating-note note-two">Un recuerdo para guardar ✨</span>
          </div>
        </div>
      </section>

      {/* Category paths */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Entrá por lo que buscás</span>
              <h2>Palabras e ideas para cada cumpleaños</h2>
              <p>Cuatro caminos principales para encontrar un saludo, compartir una postal o preparar una celebración.</p>
            </div>
          </div>
          <div className="category-grid">
            <Link className="category-card" href="/frases-de-cumpleanos/">
              <span className="icon">💌</span>
              <h3>Frases de cumpleaños</h3>
              <p>Frases cortas, emotivas, divertidas y originales para familiares, amigos, pareja y otras personas importantes.</p>
            </Link>
            <Link className="category-card" href="/mensajes-de-cumpleanos/">
              <span className="icon">✍️</span>
              <h3>Mensajes para dedicar</h3>
              <p>Dedicatorias completas, textos para tarjetas y ejemplos que podés adaptar para expresar lo que sentís.</p>
            </Link>
            <Link className="category-card" href="/postales-de-cumpleanos/">
              <span className="icon">🎨</span>
              <h3>Postales para compartir</h3>
              <p>Diseños tiernos, románticos, divertidos y elegantes para descargar y enviar por WhatsApp o redes.</p>
            </Link>
            <Link className="category-card" href="/categoria/ideas-y-tematicas/">
              <span className="icon">🎈</span>
              <h3>Ideas para celebrar</h3>
              <p>Temáticas, juegos, decoración, invitaciones y propuestas para distintos estilos y presupuestos.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured articles with live vote buttons */}
      <section className="section section-muted">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Elegí por persona</span>
              <h2>Frases de cumpleaños para alguien especial</h2>
              <p>Votá tus favoritas con 👍 o 👎 y encontrá los saludos más recomendados por la comunidad.</p>
            </div>
            <Link className="text-link" href="/frases-de-cumpleanos/">
              Ver todas las frases →
            </Link>
          </div>
          <div className="card-grid">
            {featuredPosts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                kicker="Para dedicar"
                actionLabel="Ver frases →"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Postales preview */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Una imagen también habla</span>
              <h2>Postales de cumpleaños para compartir</h2>
              <p>Un saludo en imagen puede acompañar tus palabras y hacer que el mensaje sea fácil de guardar o reenviar.</p>
            </div>
          </div>
          <div className="postal-preview-grid">
            <Link
              className="postal-preview"
              href="/postales-de-cumpleanos/"
              style={
                {
                  '--postal-a': '#fff0e5',
                  '--postal-b': '#f5d7ff',
                  '--postal-accent': '#8a4eb3',
                } as React.CSSProperties
              }
            >
              <span>✦ Clásica y alegre</span>
              <strong>¡Feliz cumpleaños!</strong>
              <small>Que este año te regale razones para sonreír.</small>
            </Link>
            <Link
              className="postal-preview"
              href="/postales-de-cumpleanos/"
              style={
                {
                  '--postal-a': '#ffe7ef',
                  '--postal-b': '#fff5c8',
                  '--postal-accent': '#b12f68',
                } as React.CSSProperties
              }
            >
              <span>✦ Tierna</span>
              <strong>Para alguien especial</strong>
              <small>Hoy celebro tu vida y la alegría de tenerte cerca.</small>
            </Link>
            <Link
              className="postal-preview"
              href="/postales-de-cumpleanos/"
              style={
                {
                  '--postal-a': '#dff5ef',
                  '--postal-b': '#e4ecff',
                  '--postal-accent': '#277a65',
                } as React.CSSProperties
              }
            >
              <span>✦ Inspiradora</span>
              <strong>Un año de sueños</strong>
              <small>Coraje para empezar y alegría para disfrutar el camino.</small>
            </Link>
          </div>
          <p>
            <Link className="button" href="/postales-de-cumpleanos/">
              Ver y descargar postales
            </Link>
          </p>
        </div>
      </section>

      {/* Advice section */}
      <section className="section section-soft">
        <div className="wrap narrow">
          <span className="eyebrow">Más que un saludo</span>
          <h2>Una buena felicitación empieza por pensar en la persona</h2>
          <p>
            La misma frase no funciona para todo el mundo. A alguien cercano quizá quieras hacerlo reír; a una persona que te acompañó durante años, agradecerle; a tu pareja, contarle qué valorás del vínculo; y a un familiar que está lejos, recordarle que lo tenés presente.
          </p>
          <p>
            Si no encontrás las palabras exactas, elegí una frase de la colección, cambiá alguna expresión por una que usarías al hablar y agregá un recuerdo real. No hace falta que suene perfecto: hace falta que se sienta sincero.
          </p>
          <div className="button-row">
            <Link className="button" href="/mensajes-de-cumpleanos/">
              Ver ejemplos de mensajes
            </Link>
            <Link className="button-secondary" href="/categoria/ideas-y-tematicas/">
              Buscar ideas para festejar
            </Link>
          </div>
        </div>
      </section>

      {/* Search interactive component */}
      <SearchSection />

      {/* FAQs */}
      <FAQSection faqs={HOME_FAQS} title="Preguntas frecuentes sobre cumpleaños" />
    </>
  );
}
