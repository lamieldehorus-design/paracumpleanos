import { useMemo, useState } from 'react';
import { posts } from '../data';
import { Link } from '../router';
import { PostCard } from '../components/PostCard';
import { SEOHead } from '../components/SEOHead';

const PAGE_SIZE = 12;

export function PublicationsPage() {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('es');
    if (!normalized) return posts;
    return posts.filter((post) =>
      `${post.title} ${post.description} ${post.category}`.toLocaleLowerCase('es').includes(normalized)
    );
  }, [query]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <>
      <SEOHead
        title="Publicaciones de cumpleaños: mensajes, frases e ideas"
        description="Explorá publicaciones de cumpleaños con mensajes originales, frases para dedicar, postales e ideas para celebrar. Encontrá contenido relacionado con lo que necesitás."
        path="/publicaciones/"
        type="website"
      />
      <section className="section">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link><span aria-hidden="true">›</span><span>Publicaciones</span>
          </nav>
          <header className="page-hero">
            <span className="eyebrow">Ideas para encontrar las palabras justas</span>
            <h1>Publicaciones de cumpleaños</h1>
            <p className="lead">
              Recopilaciones de mensajes, felicitaciones, frases y recursos para distintas personas y ocasiones.
              Buscá por tema y descubrí contenidos relacionados, sin perder tiempo entre páginas que no necesitás.
            </p>
          </header>

          <div className="search-panel" role="search">
            <label htmlFor="publications-search">Buscar publicaciones</label>
            <div className="search-line">
              <input
                id="publications-search"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                placeholder="Ej.: amiga, hermana, mensajes cortos…"
                autoComplete="off"
              />
            </div>
            <p className="search-hint" aria-live="polite">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'publicación encontrada' : 'publicaciones encontradas'}
            </p>
          </div>

          {visiblePosts.length > 0 ? (
            <div className="card-grid" style={{ marginTop: 28 }}>
              {visiblePosts.map((post) => (
                <PostCard key={post.slug} post={post} kicker="Publicación" actionLabel="Leer publicación →" />
              ))}
            </div>
          ) : (
            <div className="empty-state" style={{ marginTop: 28 }}>
              <h2>No encontramos publicaciones con esa búsqueda</h2>
              <p>Probá con otra palabra, como «cumpleaños», «amiga» o «frases».</p>
            </div>
          )}

          {visibleCount < filteredPosts.length && (
            <div className="button-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <button className="button-secondary" type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
                Mostrar 12 publicaciones más
              </button>
            </div>
          )}

          <section className="section" aria-labelledby="explore-related" style={{ paddingBottom: 0 }}>
            <div className="section-heading">
              <div>
                <span className="eyebrow">Seguí explorando</span>
                <h2 id="explore-related">Encontrá el contenido que necesitás</h2>
                <p>Accesos directos a las secciones principales, relacionados con la búsqueda de cumpleaños.</p>
              </div>
            </div>
            <div className="category-grid">
              <Link className="category-card" href="/mensajes-de-cumpleanos/">
                <span className="icon" aria-hidden="true">✍️</span>
                <h3>Mensajes de cumpleaños</h3>
                <p>Dedicatorias para adaptar, copiar y compartir.</p>
              </Link>
              <Link className="category-card" href="/frases-de-cumpleanos/">
                <span className="icon" aria-hidden="true">💬</span>
                <h3>Frases de cumpleaños</h3>
                <p>Saludos cortos, emotivos y originales.</p>
              </Link>
              <Link className="category-card" href="/postales-de-cumpleanos/">
                <span className="icon" aria-hidden="true">🎨</span>
                <h3>Postales de cumpleaños</h3>
                <p>Imágenes y diseños para compartir.</p>
              </Link>
              <Link className="category-card" href="/categoria/ideas-y-tematicas/">
                <span className="icon" aria-hidden="true">🎈</span>
                <h3>Ideas para celebrar</h3>
                <p>Decoración, invitaciones y propuestas para fiestas.</p>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
