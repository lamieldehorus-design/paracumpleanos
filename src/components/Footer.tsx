import { Link } from '../router';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">🎂</span>
            <span>
              <strong>Para Cumpleaños</strong>
              <small>Frases, mensajes y postales</small>
            </span>
          </Link>
          <p>Palabras para dedicar, postales para compartir e ideas para celebrar a las personas importantes.</p>
        </div>
        <div>
          <strong>Encontrá palabras</strong>
          <Link href="/frases-de-cumpleanos/">Frases de cumpleaños</Link>
          <Link href="/mensajes-de-cumpleanos/">Mensajes para dedicar</Link>
          <Link href="/posts/100-frases-de-cumpleanos-que-emocionan/">100 frases emotivas</Link>
          <Link href="/posts/frases-cortas-de-cumpleanos-para-whatsapp/">Frases para WhatsApp</Link>
        </div>
        <div>
          <strong>Compartí y celebrá</strong>
          <Link href="/postales-de-cumpleanos/">Postales de cumpleaños</Link>
          <Link href="/categoria/ideas-y-tematicas/">Ideas para celebrar</Link>
          <Link href="/categoria/organizacion/">Invitaciones</Link>
          <Link href="/categoria/recursos-gratuitos/">Imprimibles y decoración</Link>
        </div>
        <div>
          <strong>El sitio</strong>
          <Link href="/sobre-nosotros/">Sobre nosotros</Link>
          <Link href="/contacto/">Contacto</Link>
          <Link href="/privacidad/">Privacidad</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 Para Cumpleaños</span>
        <span>Un mensaje sincero también es un regalo.</span>
      </div>
    </footer>
  );
}
