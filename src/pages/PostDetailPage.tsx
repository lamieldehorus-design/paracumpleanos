import React, { useState } from 'react';
import { Post } from '../types';
import { Link } from '../router';
import { getCategoryBySlug, getPostBySlug } from '../data';
import { CopyButton } from '../components/CopyButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { VoteButtons } from '../components/VoteButtons';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';

interface PostDetailPageProps {
  post: Post;
}

export function PostDetailPage({ post }: PostDetailPageProps) {
  const category = getCategoryBySlug(post.category);

  // Budget Calculator state for budget post
  const [guestCount, setGuestCount] = useState<number>(20);
  const [foodCost, setFoodCost] = useState<number>(30000);
  const [venueCost, setVenueCost] = useState<number>(15000);
  const [decorCost, setDecorCost] = useState<number>(10000);
  const [miscCost, setMiscCost] = useState<number>(5000);

  // Checklist state for checklist post
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const totalBudget = foodCost + venueCost + decorCost + miscCost;
  const costPerGuest = guestCount > 0 ? Math.round(totalBudget / guestCount) : 0;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(`${post.title} ${currentUrl}`)}`;

  const relatedPosts = (post.related || [])
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== undefined);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        path={`/posts/${post.slug}/`}
        type="article"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          ...(category ? [{ name: category.title, item: `/categoria/${category.slug}/` }] : []),
          { name: post.title, item: `/posts/${post.slug}/` },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          mainEntityOfPage: `https://paracumpleanos.com/posts/${post.slug}/`,
          publisher: {
            '@type': 'Organization',
            name: 'Para Cumpleaños',
            url: 'https://paracumpleanos.com/',
          },
        }}
      />
      <nav className="breadcrumbs wrap" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span aria-hidden="true">/</span>
        {category && (
          <>
            <Link href={`/categoria/${category.slug}/`}>{category.title}</Link>
            <span aria-hidden="true">/</span>
          </>
        )}
        <span aria-current="page">{post.title}</span>
      </nav>

      <article className="wrap article-wrap">
        <header className="article-header">
          <span className="eyebrow">{category ? category.title : 'Cumpleaños'}</span>
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <div className="article-meta">
            <span>Guía práctica</span>
            <span>Ideas para adaptar</span>
          </div>
          <div className="share-row">
            <a className="share-button" href={waShareUrl} target="_blank" rel="noopener noreferrer">
              Compartir por WhatsApp
            </a>
            <CopyButton textToCopy={currentUrl} defaultLabel="Copiar enlace" copiedLabel="Enlace copiado" isUrl />
          </div>
        </header>

        <div className="article-content">
          {post.intro && <p className="article-intro">{post.intro}</p>}

          {/* Interactive Calculator for Budget post */}
          {post.slug === 'como-calcular-presupuesto-de-cumpleanos' && (
            <div className="tool-box">
              <h3>Calculadora interactiva de presupuesto</h3>
              <p>Estimá los costos de tu festejo y calculá el valor por invitado:</p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="input-guests">Cantidad de invitados</label>
                  <input
                    id="input-guests"
                    type="number"
                    min="1"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Math.max(1, Number(e.target.value) || 1))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="input-food">Comida y bebida ($)</label>
                  <input
                    id="input-food"
                    type="number"
                    min="0"
                    value={foodCost}
                    onChange={(e) => setFoodCost(Math.max(0, Number(e.target.value) || 0))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="input-venue">Lugar o alquiler ($)</label>
                  <input
                    id="input-venue"
                    type="number"
                    min="0"
                    value={venueCost}
                    onChange={(e) => setVenueCost(Math.max(0, Number(e.target.value) || 0))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="input-decor">Decoración e imprimibles ($)</label>
                  <input
                    id="input-decor"
                    type="number"
                    min="0"
                    value={decorCost}
                    onChange={(e) => setDecorCost(Math.max(0, Number(e.target.value) || 0))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="input-misc">Extras e imprevistos ($)</label>
                  <input
                    id="input-misc"
                    type="number"
                    min="0"
                    value={miscCost}
                    onChange={(e) => setMiscCost(Math.max(0, Number(e.target.value) || 0))}
                  />
                </div>
              </div>
              <div className="budget-summary">
                <div className="budget-number">
                  <span>Costo total estimado</span>
                  <strong>${totalBudget.toLocaleString('es-AR')}</strong>
                </div>
                <div className="budget-number">
                  <span>Costo por invitado</span>
                  <strong>${costPerGuest.toLocaleString('es-AR')}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Checklist for Checklist post */}
          {post.slug === 'checklist-organizar-cumpleanos' && (
            <div className="tool-box">
              <h3>Checklist interactivo para tu evento</h3>
              <p>Marcá los pasos a medida que los vayas completando:</p>
              <div className="checklist">
                {[
                  'Fijar fecha, hora y lista estimada de invitados',
                  'Elegir lugar: en casa, parque o salón',
                  'Definir temática o paleta de colores',
                  'Preparar y enviar las invitaciones con tiempo',
                  'Planificar menú, torta y bebidas',
                  'Preparar decoración, banderines y música',
                  'Confirmar asistencia final y compras de último momento'
                ].map((item, idx) => (
                  <label key={idx}>
                    <input
                      type="checkbox"
                      checked={!!checkedItems[idx]}
                      onChange={() => toggleCheck(idx)}
                    />
                    <span style={{ textDecoration: checkedItems[idx] ? 'line-through' : 'none', color: checkedItems[idx] ? '#888' : 'inherit' }}>
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Post Content Sections */}
          {post.sections &&
            post.sections.map((section, sIdx) => (
              <section key={sIdx} className="article-section">
                {section.h2 && <h2>{section.h2}</h2>}
                {section.title && <h2>{section.title}</h2>}

                {section.paragraphs &&
                  section.paragraphs.map((p, pIdx) => <p key={pIdx}>{p}</p>)}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="phrase-list">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <span>{bullet}</span>
                        <div className="phrase-item-actions">
                          <CopyButton textToCopy={bullet} defaultLabel="Copiar" copiedLabel="Copiado" />
                          <WhatsAppButton textToShare={bullet} />
                          <VoteButtons
                            itemId={`post-${post.slug}-s${sIdx}-b${bIdx}`}
                            title={bullet.length > 55 ? bullet.slice(0, 52) + '...' : bullet}
                            text={bullet}
                            url={`/posts/${post.slug}/`}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

          {/* Invitation Templates Grid if post has templates */}
          {post.templates && post.templates.length > 0 && (
            <section className="article-section">
              <h2>Plantillas de invitación para adaptar</h2>
              <div className="invite-grid">
                {post.templates.map((tpl, tIdx) => (
                  <article
                    key={tIdx}
                    className="invite-template"
                    style={
                      {
                        '--invite-bg': tpl.bg || '#fff',
                        '--invite-accent': tpl.accent || '#3c5bd6',
                      } as React.CSSProperties
                    }
                  >
                    <span className="invite-label">{tpl.label}</span>
                    <p>{tpl.text}</p>
                    <div className="button-row" style={{ alignItems: 'center' }}>
                      <CopyButton textToCopy={tpl.text} defaultLabel="Copiar texto" copiedLabel="Copiado" />
                      <WhatsAppButton textToShare={tpl.text} />
                      <VoteButtons
                        itemId={`post-${post.slug}-tpl-${tIdx}`}
                        title={`${tpl.label}: ${tpl.text.slice(0, 45)}...`}
                        text={tpl.text}
                        url={`/posts/${post.slug}/`}
                      />
                    </div>
                  </article>
                ))}
              </div>
              <div className="resource-callout no-print">
                <h2>Imprimí o guardá tus plantillas</h2>
                <p>Podés imprimir esta página o guardarla en PDF con formato limpio.</p>
                <button type="button" className="button" onClick={() => window.print()}>
                  Imprimir plantillas
                </button>
              </div>
            </section>
          )}

          {/* Banderines Grid if post has banderines */}
          {post.banderines && post.banderines.length > 0 && (
            <section className="article-section">
              <h2>Diseños de banderines para imprimir</h2>
              <p>Hacé clic en el botón para ver la plantilla imprimible o imprimí directamente:</p>
              <div style={{ marginBottom: '20px' }}>
                <Link className="button" href="/recursos/banderines-cumpleanos-imprimibles/">
                  Abrir vista imprimible completa (50 banderines)
                </Link>
              </div>
              <div className="pennant-grid">
                {post.banderines.slice(0, 16).map((b, bIdx) => (
                  <article
                    key={bIdx}
                    className="pennant-card"
                    style={
                      {
                        '--flag-bg': b.bg,
                        '--flag-accent': b.accent,
                      } as React.CSSProperties
                    }
                  >
                    <div className={`pennant pennant-shape-${bIdx % 5}`}>
                      <span>{b.text}</span>
                    </div>
                    <small>{bIdx + 1}. {b.name}</small>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="article-end">
            <p>Elegí las ideas que mejor encajen con tu celebración y adaptalas a tu manera.</p>
            {category && (
              <Link className="button" href={`/categoria/${category.slug}/`}>
                Ver más de {category.title.toLowerCase()}
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section section-muted">
          <div className="wrap">
            <div className="section-heading">
              <h2>También te puede servir</h2>
            </div>
            <div className="card-grid">
              {relatedPosts.map((rel) => (
                <article key={rel.slug} className="post-card">
                  <div className="card-kicker">Recomendado</div>
                  <h3>
                    <Link href={`/posts/${rel.slug}/`}>{rel.title}</Link>
                  </h3>
                  <p>{rel.description}</p>
                  <Link className="text-link" href={`/posts/${rel.slug}/`}>
                    Ver colección →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <FAQSection faqs={post.faqs} title="Preguntas frecuentes" />
    </>
  );
}
