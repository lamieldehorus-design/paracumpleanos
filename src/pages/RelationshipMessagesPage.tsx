import { useState, useMemo } from 'react';
import { RelationshipCollection } from '../types';
import { Link } from '../router';
import { CopyButton } from '../components/CopyButton';
import { VoteButtons } from '../components/VoteButtons';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';

interface RelationshipMessagesPageProps {
  collection: RelationshipCollection;
}

export function RelationshipMessagesPage({ collection }: RelationshipMessagesPageProps) {
  const [visibleCount, setVisibleCount] = useState(10);
  const [filterQuery, setFilterQuery] = useState('');

  const filteredMessages = useMemo(() => {
    const q = filterQuery.trim().toLowerCase();
    if (!q) return collection.messages;
    return collection.messages.filter(
      (m) => m.title.toLowerCase().includes(q) || m.text.toLowerCase().includes(q)
    );
  }, [collection.messages, filterQuery]);

  const displayedMessages = useMemo(() => {
    if (filterQuery.trim()) {
      return filteredMessages;
    }
    return collection.messages.slice(0, visibleCount);
  }, [collection.messages, filteredMessages, visibleCount, filterQuery]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, collection.messages.length));
  };

  const isFiltering = filterQuery.trim().length > 0;
  const totalCount = collection.messages.length;
  const currentShown = isFiltering ? filteredMessages.length : Math.min(visibleCount, totalCount);

  return (
    <div className="wrap article-wrap">
      <SEOHead
        title={collection.title}
        description={collection.lead || collection.intro}
        path={`/${collection.slug}/`}
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Mensajes de cumpleaños', item: '/mensajes-de-cumpleanos/' },
          { name: collection.title, item: `/${collection.slug}/` },
        ]}
      />
      <nav className="breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/mensajes-de-cumpleanos/">Mensajes de cumpleaños</Link>
        <span>/</span>
        <span>{collection.title}</span>
      </nav>

      <header className="article-header">
        <span className="eyebrow">100 dedicatorias completas para elegir</span>
        <h1>{collection.title}: dedicatorias completas para copiar</h1>
        <p className="lead">{collection.lead}</p>
        <div className="button-row">
          <a className="button" href="#lista-de-mensajes">
            Ver los 100 mensajes
          </a>
          <Link className="button-secondary" href="/mensajes-de-cumpleanos/">
            Volver a todos los mensajes
          </Link>
        </div>
      </header>

      <div className="article-content">
        {collection.intro && <p className="article-intro">{collection.intro}</p>}

        <section className="article-section" id="lista-de-mensajes">
          <h2>100 mensajes de cumpleaños para {collection.name.toLowerCase()}, listos para copiar y dedicar</h2>
          <p>
            Elegí el tono que mejor represente lo que querés decir. Podés copiar el mensaje completo y cambiar cualquier detalle para hacerlo más tuyo.
          </p>

          <div style={{ margin: '18px 0 24px' }}>
            <input
              type="search"
              placeholder={`Filtrar entre los 100 mensajes para ${collection.name.toLowerCase()}...`}
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid #dcdce8',
                fontSize: '0.95rem'
              }}
            />
          </div>

          <div className="messages-list">
            {displayedMessages.map((msg, index) => {
              const msgId = msg.id || `mensaje-${index + 1}`;
              const itemId = `${collection.slug}-${msgId}`;
              return (
                <article key={msgId} className="message-example" id={msgId}>
                  <h3>{msg.title}</h3>
                  <p>{msg.text}</p>
                  <div className="message-actions">
                    <CopyButton textToCopy={msg.text} defaultLabel="Copiar mensaje" />
                    <VoteButtons
                      itemId={itemId}
                      title={`${collection.name}: ${msg.title}`}
                      text={msg.text}
                      url={`/${collection.slug}/#${msgId}`}
                    />
                  </div>
                </article>
              );
            })}
          </div>

          {displayedMessages.length === 0 && (
            <p className="empty-state">No se encontraron mensajes con ese criterio.</p>
          )}

          {!isFiltering && (
            <div className="message-load-more">
              <p id="message-load-status">
                Mostrando {currentShown} de {totalCount} mensajes.
              </p>
              {currentShown < totalCount && (
                <button
                  id="show-more-messages"
                  type="button"
                  className="button"
                  onClick={handleShowMore}
                >
                  Mostrar {Math.min(10, totalCount - currentShown)} mensajes más
                </button>
              )}
            </div>
          )}
        </section>
      </div>

      <FAQSection faqs={collection.faqs} title="Preguntas frecuentes" />
    </div>
  );
}
