import { useState, useRef, useEffect } from 'react';
import { Link, useRouter } from '../router';
import { categories } from '../data';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { path } = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCategoriesOpen(false);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setCategoriesOpen(false);
    setMobileCategoriesOpen(false);
  };

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCategoriesOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" href="/" onClick={closeAll}>
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
            {menuOpen ? '✕ Cerrar' : '☰ Menú'}
          </button>

          <nav
            id="main-nav"
            className={`main-nav ${menuOpen ? 'open' : ''}`}
            aria-label="Navegación principal"
          >
            <Link
              href="/publicaciones/"
              className={path === '/publicaciones' ? 'active' : ''}
              onClick={closeAll}
            >
              Publicaciones
            </Link>

            <Link
              href="/frases-de-cumpleanos/"
              className={path === '/frases-de-cumpleanos' ? 'active' : ''}
              onClick={closeAll}
            >
              Frases
            </Link>

            <Link
              href="/mensajes-de-cumpleanos/"
              className={path.startsWith('/mensajes-de-cumpleanos') ? 'active' : ''}
              onClick={closeAll}
            >
              Mensajes
            </Link>

            {/* Desktop Categories Clean Dropdown (solo títulos, sin choclo visual) */}
            <div className="nav-dropdown-wrapper" ref={dropdownRef}>
              <button
                type="button"
                className={`nav-dropdown-button ${path.startsWith('/categoria') || categoriesOpen ? 'active' : ''}`}
                aria-expanded={categoriesOpen}
                aria-haspopup="true"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                <span>Categorías</span>
                <span className={`dropdown-chevron ${categoriesOpen ? 'is-open' : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              {categoriesOpen && (
                <div className="categories-simple-menu" role="menu">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categoria/${cat.slug}/`}
                      className="category-menu-item"
                      onClick={closeAll}
                    >
                      <span className="cat-item-icon" aria-hidden="true">{cat.icon}</span>
                      <span className="cat-item-title">{cat.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Categories Accordion (solo títulos directos) */}
            <div className="mobile-categories-section">
              <button
                type="button"
                className="mobile-accordion-toggle"
                onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                aria-expanded={mobileCategoriesOpen}
              >
                <span>📚 Categorías</span>
                <span>{mobileCategoriesOpen ? '▲' : '▼'}</span>
              </button>
              {mobileCategoriesOpen && (
                <div className="mobile-categories-simple-list">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categoria/${cat.slug}/`}
                      className="mobile-category-link"
                      onClick={closeAll}
                    >
                      <span aria-hidden="true">{cat.icon}</span>
                      <span>{cat.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/postales-de-cumpleanos/"
              className={path === '/postales-de-cumpleanos' ? 'active' : ''}
              onClick={closeAll}
            >
              Postales
            </Link>

            <Link
              href="/categoria/ideas-y-tematicas/"
              className={path === '/categoria/ideas-y-tematicas' ? 'active' : ''}
              onClick={closeAll}
            >
              Ideas
            </Link>

            <a
              href="#ranking-top-10"
              className="ranking-nav-link"
              onClick={(e) => {
                closeAll();
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
