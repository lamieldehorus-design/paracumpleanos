import React, { useState, useMemo } from 'react';
import { posts } from '../data';
import { Post } from '../types';
import { PostCard } from './PostCard';

export function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];

    return posts.filter((post: Post) => {
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchDesc = post.description.toLowerCase().includes(q);
      const matchIntro = post.intro?.toLowerCase().includes(q);
      const matchCategory = post.category.toLowerCase().includes(q);
      const matchKeywords = (post.keywords || []).some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchIntro || matchCategory || matchKeywords;
    });
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resultsEl = document.getElementById('search-results');
    if (resultsEl) {
      resultsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasSearched = searchTerm.trim().length > 0;

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Encontrá un tema específico</span>
            <h2>Buscá entre frases, mensajes e ideas</h2>
            <p>Escribí una persona, un estilo o una ocasión para encontrar una colección relacionada.</p>
          </div>
        </div>

        <form className="search-panel" id="site-search-form" onSubmit={handleSubmit}>
          <label htmlFor="site-search">¿Qué necesitás para este cumpleaños?</label>
          <div className="search-line">
            <input
              id="site-search"
              type="search"
              placeholder="Ej.: mamá, gracioso, WhatsApp, invitación"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </div>
          <p className="search-hint" id="search-count">
            {hasSearched
              ? `${searchResults.length} colecciones encontradas`
              : 'Escribí una palabra para ver las colecciones relacionadas.'}
          </p>
        </form>

        <div id="search-results" className="card-grid" style={{ marginTop: '22px' }}>
          {searchResults.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {hasSearched && searchResults.length === 0 && (
          <p id="search-empty" className="empty-state">
            No encontramos coincidencias. Probá con otra palabra, como “mamá”, “amigos”, “postal”, “invitación” o “decoración”.
          </p>
        )}
      </div>
    </section>
  );
}
