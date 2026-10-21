import { useState } from 'react';
import { Link, useRouter } from '../router';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { path } = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" href="/" onClick={closeMenu}>
            <span className="brand-mark">🎂</span>
            <span>
              <strong>Para Cumpleaños</strong>
              <small>Frases, mensajes y postales</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={toggleMenu}
          >
            ☰ Menú
          </button>
          <nav
            id="main-nav"
            className={`main-nav ${menuOpen ? 'open' : ''}`}
            aria-label="Navegación principal"
          >
            <Link
              href="/frases-de-cumpleanos/"
              className={path === '/frases-de-cumpleanos' ? 'active' : ''}
              onClick={closeMenu}
            >
              Frases
            </Link>
            <Link
              href="/mensajes-de-cumpleanos/"
              className={path.startsWith('/mensajes-de-cumpleanos') ? 'active' : ''}
              onClick={closeMenu}
            >
              Mensajes
            </Link>
            <Link
              href="/postales-de-cumpleanos/"
              className={path === '/postales-de-cumpleanos' ? 'active' : ''}
              onClick={closeMenu}
            >
              Postales
            </Link>
            <Link
              href="/categoria/ideas-y-tematicas/"
              className={path === '/categoria/ideas-y-tematicas' ? 'active' : ''}
              onClick={closeMenu}
            >
              Ideas para celebrar
            </Link>
            <a
              href="#ranking-top-10"
              className="ranking-nav-link"
              onClick={(e) => {
                closeMenu();
                const el = document.getElementById('ranking-top-10');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              🏆 Top 10
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
