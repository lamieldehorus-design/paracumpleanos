import { useState, useRef, useEffect } from 'react';
import { Link, useRouter } from '../router';
import { categories, getPostsByCategory } from '../data';

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

  // Close dropdown on click outside
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

            {/* Desktop Categories Dropdown */}
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
                <div className="categories-mega-menu" role="menu">
                  <div className="mega-menu-header">
                    <strong>Categorías y guías recomendadas</strong>
                    <Link href="/" className="mega-menu-home-link" onClick={closeAll}>
                      Ver todas las guías →
                    </Link>
                  </div>
                  <div className="mega-menu-grid">
                    {categories.map((cat) => {
                      const catPosts = getPostsByCategory(cat.slug);
                      return (
                        <div key={cat.slug} className="mega-menu-col">
                          <Link
                            href={`/categoria/${cat.slug}/`}
                            className="mega-menu-cat-title"
                            onClick={closeAll}
                          >
                            <span className="cat-icon" aria-hidden="true">{cat.icon}</span>
                            <span>{cat.title}</span>
                          </Link>
                          {catPosts.length > 0 && (
                            <ul className="mega-menu-post-list">
                              {catPosts.slice(0, 4).map((p) => (
                                <li key={p.slug}>
                                  <Link
                                    href={`/posts/${p.slug}/`}
                                    className="mega-menu-post-link"
                                    onClick={closeAll}
                                  >
                                    {p.title.length > 45 ? `${p.title.slice(0, 42)}...` : p.title}
                                  </Link>
                                </li>
                              ))}
                              {catPosts.length > 4 && (
                                <li className="mega-menu-more-item">
                                  <Link
                                    href={`/categoria/${cat.slug}/`}
                                    className="mega-menu-more-link"
                                    onClick={closeAll}
                                  >
                                    +{catPosts.length - 4} más en {cat.title.split(' ')[0]} →
                                  </Link>
                                </li>
                              )}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Categories Accordion (Only visible in mobile nav open state) */}
            <div className="mobile-categories-section">
              <button
                type="button"
                className="mobile-accordion-toggle"
                onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                aria-expanded={mobileCategoriesOpen}
              >
                <span>📚 Categorías y artículos</span>
                <span>{mobileCategoriesOpen ? '▲' : '▼'}</span>
              </button>
              {mobileCategoriesOpen && (
                <div className="mobile-categories-content">
                  {categories.map((cat) => {
                    const catPosts = getPostsByCategory(cat.slug);
                    return (
                      <div key={cat.slug} className="mobile-cat-group">
                        <Link
                          href={`/categoria/${cat.slug}/`}
                          className="mobile-cat-heading"
                          onClick={closeAll}
                        >
                          <span aria-hidden="true">{cat.icon}</span> {cat.title}
                        </Link>
                        {catPosts.length > 0 && (
                          <div className="mobile-post-links">
                            {catPosts.slice(0, 3).map((p) => (
                              <Link
                                key={p.slug}
                                href={`/posts/${p.slug}/`}
                                className="mobile-post-link"
                                onClick={closeAll}
                              >
                                • {p.title.length > 40 ? `${p.title.slice(0, 38)}...` : p.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
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
