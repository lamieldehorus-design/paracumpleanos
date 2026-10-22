import { useState, useMemo } from 'react';
import { RelationshipCollection } from '../types';
import { Link } from '../router';
import { CopyButton } from '../components/CopyButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { VoteButtons } from '../components/VoteButtons';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';

interface RelationshipMessagesPageProps {
  collection: RelationshipCollection;
}

type ToneFilter = 'all' | 'whatsapp' | 'emotive' | 'humor';

export function RelationshipMessagesPage({ collection }: RelationshipMessagesPageProps) {
  const [visibleCount, setVisibleCount] = useState(15);
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedTone, setSelectedTone] = useState<ToneFilter>('all');

  const totalCount = collection.messages.length;

  // Filter messages by tone & search query
  const filteredMessages = useMemo(() => {
    let list = collection.messages;

    if (selectedTone === 'whatsapp') {
      list = list.filter((m) => {
        const t = (m.title + ' ' + m.text).toLowerCase();
        return m.text.length <= 165 || t.includes('whatsapp') || t.includes('café') || t.includes('mate') || t.includes('abrazo');
      });
    } else if (selectedTone === 'humor') {
      list = list.filter((m) => {
        const t = (m.title + ' ' + m.text).toLowerCase();
        return (
          t.includes('chiste') ||
          t.includes('humor') ||
          t.includes('torta') ||
          t.includes('complic') ||
          t.includes('maña') ||
          t.includes('viejo') ||
          t.includes('años') ||
          t.includes('permiso') ||
          t.includes('siesta') ||
          t.includes('asado') ||
          t.includes('paciencia') ||
          t.includes('tupper') ||
          t.includes('broma')
        );
      });
    } else if (selectedTone === 'emotive') {
      list = list.filter((m) => {
        const t = (m.title + ' ' + m.text).toLowerCase();
        const isHumorous =
          t.includes('chiste') ||
          t.includes('humor') ||
          t.includes('torta') ||
          t.includes('tupper') ||
          t.includes('broma');
        return !isHumorous && m.text.length > 150;
      });
    }

    const q = filterQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (m) => m.title.toLowerCase().includes(q) || m.text.toLowerCase().includes(q)
      );
    }

    return list;
  }, [collection.messages, filterQuery, selectedTone]);

  const displayedMessages = useMemo(() => {
    return filteredMessages.slice(0, visibleCount);
  }, [filteredMessages, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 15, filteredMessages.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredMessages.length);
  };

  const matchCount = filteredMessages.length;
  const currentShown = Math.min(visibleCount, matchCount);
  const progressPercent = matchCount > 0 ? Math.round((currentShown / matchCount) * 100) : 100;

  // Schema.org structured data for SEO (Romuald Fons Mobile-First SEO: Google discovers all phrases)
  const jsonLd = useMemo(() => {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: collection.title,
        description: collection.lead || collection.intro,
        numberOfItems: collection.messages.length,
        itemListElement: collection.messages.slice(0, 100).map((m, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: m.title,
          description: m.text,
        })),
      },
    ];
  }, [collection]);

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
        jsonLd={jsonLd}
      />
      <nav className="breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/mensajes-de-cumpleanos/">Mensajes de cumpleaños</Link>
        <span>/</span>
        <span>{collection.title}</span>
      </nav>

      <header className="article-header">
        <span className="eyebrow">{totalCount} DEDICATORIAS COMPLETAS PARA ELEGIR</span>
        <h1>{collection.title}: dedicatorias completas para copiar</h1>
        <p className="lead">{collection.lead}</p>
        <div className="button-row">
          <a className="button" href="#lista-de-mensajes">
            Ver los {totalCount} mensajes
          </a>
          <Link className="button-secondary" href="/mensajes-de-cumpleanos/">
            Volver a todos los mensajes
          </Link>
        </div>
      </header>

      <div className="article-content">
        {collection.intro && <p className="article-intro">{collection.intro}</p>}

        <section className="article-section" id="lista-de-mensajes">
          <h2>
            {totalCount} mensajes de cumpleaños para {collection.name.toLowerCase()}, listos para copiar y dedicar
          </h2>
          <p>
            Elegí el tono que mejor represente lo que querés decir. Podés copiar el mensaje completo y cambiar cualquier detalle para hacerlo más tuyo.
          </p>

          {/* Filtros por estilo */}
          <div className="filter-bar" role="tablist" aria-label="Filtrar por estilo">
            <button
              type="button"
              className={`filter-tab ${selectedTone === 'all' ? 'active' : ''}`}
              onClick={() => {
                setSelectedTone('all');
                setVisibleCount(15);
              }}
            >
              Todas ({totalCount})
            </button>
            <button
              type="button"
              className={`filter-tab ${selectedTone === 'whatsapp' ? 'active' : ''}`}
              onClick={() => {
                setSelectedTone('whatsapp');
                setVisibleCount(15);
              }}
            >
              Directas WhatsApp
            </button>
            <button
              type="button"
              className={`filter-tab ${selectedTone === 'emotive' ? 'active' : ''}`}
              onClick={() => {
                setSelectedTone('emotive');
                setVisibleCount(15);
              }}
            >
              Emotivas y profundas
            </button>
            <button
              type="button"
              className={`filter-tab ${selectedTone === 'humor' ? 'active' : ''}`}
              onClick={() => {
                setSelectedTone('humor');
                setVisibleCount(15);
              }}
            >
              Con humor y picardía
            </button>
          </div>

          {/* Buscador */}
          <div className="search-box-wrap">
            <input
              type="search"
              className="search-box-input"
              placeholder={`Filtrar entre los ${totalCount} mensajes para ${collection.name.toLowerCase()}...`}
              value={filterQuery}
              onChange={(e) => {
                setFilterQuery(e.target.value);
                setVisibleCount(15);
              }}
            />
          </div>

          {/* Listado de mensajes en tarjetas nativas */}
          <div className="messages-list">
            {displayedMessages.map((msg, index) => {
              const msgId = msg.id || `mensaje-${index + 1}`;
              const itemId = `${collection.slug}-${msgId}`;
              return (
                <article key={msgId} className="message-example" id={msgId}>
                  <h3>{msg.title}</h3>
                  <p>{msg.text}</p>
                  <div className="message-actions">
                    <WhatsAppButton textToShare={msg.text} />
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
            <p className="empty-state">
              No se encontraron mensajes con ese criterio.{' '}
              <button
                type="button"
                onClick={() => {
                  setFilterQuery('');
                  setSelectedTone('all');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--blue)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  marginLeft: '6px'
                }}
              >
                Ver todos
              </button>
            </p>
          )}

          {/* Carga progresiva */}
          <div className="message-load-more">
            <div className="progress-bar-container">
              <div className="progress-bar-track">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <p id="message-load-status">
              Mostrando {currentShown} de {matchCount} mensajes.
            </p>
            {currentShown < matchCount && (
              <div className="button-row" style={{ justifyContent: 'center' }}>
                <button
                  id="show-more-messages"
                  type="button"
                  className="button"
                  onClick={handleShowMore}
                >
                  Mostrar {Math.min(15, matchCount - currentShown)} mensajes más
                </button>
                <button
                  type="button"
                  className="button-secondary"
                  onClick={handleShowAll}
                >
                  Ver todos ({matchCount})
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <FAQSection faqs={collection.faqs} title="Preguntas frecuentes" />
    </div>
  );
}
