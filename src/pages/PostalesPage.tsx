import { Link } from '../router';
import { postales } from '../data';
import { PostalCard } from '../components/PostalCard';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';

const POSTALES_FAQS = [
  {
    question: '¿Cómo elegir una postal de cumpleaños?',
    answer: 'Pensá primero en la persona y en el tono de la relación. Una postal tierna sirve para familia o pareja; una divertida puede encajar con amigos; una elegante funciona para un saludo más formal.'
  },
  {
    question: '¿Puedo compartir las postales por WhatsApp?',
    answer: 'Sí. Descargá la postal como imagen y adjuntala a tu conversación o compartila desde el dispositivo. También podés copiar el mensaje para enviarlo como texto.'
  },
  {
    question: '¿Qué mensaje conviene poner en una postal?',
    answer: 'Una felicitación clara, un deseo concreto y, si hay espacio, una frase personal. Evitá llenar la imagen de texto para que se lea bien en el teléfono.'
  },
  {
    question: '¿Cómo personalizar una felicitación?',
    answer: 'Copiá el mensaje y agregá el nombre, un recuerdo o una expresión que uses con esa persona. La postal acompaña el saludo, pero el detalle personal es lo que lo vuelve propio.'
  }
];

export function PostalesPage() {
  return (
    <>
      <SEOHead
        title="Postales de Cumpleaños | Diseños para descargar y compartir"
        description="Postales de cumpleaños con dedicatorias listas para descargar como imagen PNG o compartir en redes y WhatsApp."
        path="/postales-de-cumpleanos/"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Postales de cumpleaños', item: '/postales-de-cumpleanos/' },
        ]}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Postales para compartir</span>
            <h1>Postales de cumpleaños para enviar con cariño</h1>
            <p>
              Elegí una postal según la persona y el mensaje que querés transmitir. Hay diseños tiernos, divertidos, elegantes y románticos para felicitar a familiares, amigos, pareja o alguien que está lejos.
            </p>
            <p>
              Podés descargar cada diseño como imagen PNG, compartirlo o copiar el texto para acompañarlo con tus propias palabras.
            </p>
            <div className="button-row">
              <a className="button" href="#galeria-postales">
                Ver todas las postales
              </a>
              <Link className="button-secondary" href="/frases-de-cumpleanos/">
                Buscar una frase
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <span className="floating-note note-one">Un saludo en imagen 💌</span>
            <span className="big-cake">🎂</span>
            <span className="floating-note note-two">Listas para compartir ✨</span>
          </div>
        </div>
      </section>

      <section className="section" id="galeria-postales">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Elegí tu diseño</span>
              <h2>Postales de cumpleaños para distintos estilos</h2>
              <p>Descargá la imagen y enviála por WhatsApp, correo o redes sociales.</p>
            </div>
          </div>

          <div className="postal-grid">
            {postales.map((p) => (
              <PostalCard key={p.id} postal={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap narrow">
          <h2>Cómo elegir una postal que encaje con el saludo</h2>
          <p>
            Para un familiar, suele funcionar una imagen cálida con un mensaje de gratitud o buenos deseos. Para una amistad, podés elegir un tono alegre o divertido. Para tu pareja, una postal romántica puede acompañar una dedicatoria más personal. Si vas a saludar a alguien del trabajo o a una persona con la que no tenés mucha confianza, elegí un diseño simple y un texto amable.
          </p>
          <p>
            Si preferís mandar solo palabras, encontrá <Link href="/frases-de-cumpleanos/">frases de cumpleaños cortas y emotivas</Link> o visitá la colección de <Link href="/mensajes-de-cumpleanos/">mensajes completos para dedicar</Link>. También podés explorar las <Link href="/categoria/ideas-y-tematicas/">ideas para celebrar cumpleaños</Link>.
          </p>

          <h2>Consejos para compartir tu postal</h2>
          <ul>
            <li>Descargá la imagen y revisá cómo se ve en el teléfono antes de enviarla.</li>
            <li>Agregá el nombre de la persona o una línea personal cuando quieras que el saludo sea más cercano.</li>
            <li>Si publicás en redes sociales, elegí una frase que no exponga información privada.</li>
            <li>Para alguien importante, acompañá la postal con una llamada o un mensaje escrito con tus propias palabras.</li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={POSTALES_FAQS} title="Preguntas frecuentes sobre postales de cumpleaños" />
    </>
  );
}
