import React, { useState } from 'react';
import { Post } from '../types';
import { Link } from '../router';
import { getCategoryBySlug, getPostBySlug, categories } from '../data';
import { CopyButton } from '../components/CopyButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { VoteButtons } from '../components/VoteButtons';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';

const RELATIONSHIPS_LIST = [
  { slug: 'mensajes-de-cumpleanos-para-mama', name: 'Mamá', emoji: '🌸', desc: 'Amor incondicional y gratitud diaria' },
  { slug: 'mensajes-de-cumpleanos-para-papa', name: 'Papá', emoji: '👔', desc: 'Sabiduría, esfuerzo y guía de vida' },
  { slug: 'mensajes-de-cumpleanos-para-mi-novio', name: 'Mi Novio', emoji: '💖', desc: 'Complicidad, romance y proyectos juntos' },
  { slug: 'mensajes-de-cumpleanos-para-mi-novia', name: 'Mi Novia', emoji: '🌹', desc: 'Ternura, cariño sincero y futuro' },
  { slug: 'mensajes-de-cumpleanos-para-mi-esposo', name: 'Mi Esposo', emoji: '💍', desc: 'Compañero de vida, lealtad y hogar' },
  { slug: 'mensajes-de-cumpleanos-para-mi-esposa', name: 'Mi Esposa', emoji: '💫', desc: 'Amor maduro, admiración y respeto' },
  { slug: 'mensajes-de-cumpleanos-para-un-amigo', name: 'Un Amigo', emoji: '🌟', desc: 'Lealtad incondicional y risas compartidas' },
  { slug: 'mensajes-de-cumpleanos-para-una-amiga', name: 'Una Amiga', emoji: '👭', desc: 'Apoyo mutuo, confidencias y anécdotas' },
  { slug: 'mensajes-de-cumpleanos-para-mi-hijo', name: 'Mi Hijo', emoji: '👦', desc: 'Orgullo, crecimiento y bendición familiar' },
  { slug: 'mensajes-de-cumpleanos-para-mi-hija', name: 'Mi Hija', emoji: '👧', desc: 'Luz del hogar, valentía y ternura' },
  { slug: 'mensajes-de-cumpleanos-para-mi-hermano', name: 'Mi Hermano', emoji: '🤜', desc: 'Recuerdos de infancia y unión fraterna' },
  { slug: 'mensajes-de-cumpleanos-para-mi-hermana', name: 'Mi Hermana', emoji: '🌺', desc: 'Complicidad de vida y abrazo sincero' },
];

const DIRECT_RELATIONSHIP_BY_POST_SLUG: Record<string, { slug: string; name: string; emoji: string }> = {
  'frases-de-cumpleanos-para-mi-mama': { slug: 'mensajes-de-cumpleanos-para-mama', name: 'mamá', emoji: '🌸' },
  'frases-de-cumpleanos-para-mi-papa': { slug: 'mensajes-de-cumpleanos-para-papa', name: 'papá', emoji: '👔' },
  'frases-de-cumpleanos-para-mi-esposo': { slug: 'mensajes-de-cumpleanos-para-mi-esposo', name: 'tu esposo', emoji: '💍' },
  'frases-de-cumpleanos-para-mi-esposa': { slug: 'mensajes-de-cumpleanos-para-mi-esposa', name: 'tu esposa', emoji: '💫' },
  'frases-de-cumpleanos-para-mi-amor': { slug: 'mensajes-de-cumpleanos-para-mi-novio', name: 'tu pareja o novio/a', emoji: '💖' },
  'frases-de-cumpleanos-para-amigos': { slug: 'mensajes-de-cumpleanos-para-un-amigo', name: 'un amigo o amiga', emoji: '🌟' },
  'frases-de-cumpleanos-para-mi-hijo': { slug: 'mensajes-de-cumpleanos-para-mi-hijo', name: 'tu hijo', emoji: '👦' },
  'feliz-cumpleanos-querida-hija': { slug: 'mensajes-de-cumpleanos-para-mi-hija', name: 'tu hija', emoji: '👧' },
  'frases-de-cumpleanos-para-hermanos': { slug: 'mensajes-de-cumpleanos-para-mi-hermano', name: 'tu hermano o hermana', emoji: '🤜' },
};

interface PostDetailPageProps {
  post: Post;
}

export function PostDetailPage({ post }: PostDetailPageProps) {
  const category = getCategoryBySlug(post.category);
  const directRel = DIRECT_RELATIONSHIP_BY_POST_SLUG[post.slug];

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

          {/* Contextual Interlink Callout Banner */}
          {directRel ? (
            <aside className="contextual-interlink-banner">
              <div className="banner-left">
                <span className="banner-badge">✨ Colección ampliada con 159 dedicatorias</span>
                <h3>¿Buscás una dedicatoria profunda y personal para {directRel.name}?</h3>
                <p>
                  Si querés un mensaje con mayor desarrollo emocional, recuerdos cotidianos y reflexiones de vida, leé nuestra colección completa de <strong>159 mensajes narrativos para {directRel.name}</strong>, estructurados en párrafos de 3 a 5 oraciones.
                </p>
              </div>
              <Link href={`/${directRel.slug}/`} className="button banner-action-btn">
                Ver 159 mensajes para {directRel.name} →
              </Link>
            </aside>
          ) : (
            <aside className="contextual-interlink-banner">
              <div className="banner-left">
                <span className="banner-badge">💌 Dedicatorias por vínculo</span>
                <h3>Personalizá este saludo con un mensaje para alguien especial</h3>
                <p>
                  Una gran celebración se acompaña con palabras que conmuevan. Explorá nuestras <strong>12 colecciones con más de 1.900 dedicatorias narrativas</strong> creadas para mamá, papá, pareja, amigos, hijos y hermanos.
                </p>
              </div>
              <Link href="/mensajes-de-cumpleanos/" className="button banner-action-btn">
                Explorar frases por vínculo →
              </Link>
            </aside>
          )}

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
            <p>Elegí las frases e ideas que mejor encajen con tu celebración y adaptalas con recuerdos propios.</p>
            <div className="button-row">
              {category && (
                <Link className="button" href={`/categoria/${category.slug}/`}>
                  Más artículos de {category.title.toLowerCase()}
                </Link>
              )}
              <Link className="button-secondary" href="/mensajes-de-cumpleanos/">
                Ver mensajes por vínculo
              </Link>
              <Link className="button-secondary" href="/frases-de-cumpleanos/">
                Ver frases cortas
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Comprehensive 12-Relationship Interlink Grid Section */}
      <section className="section section-soft relationship-interlink-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Red de dedicatorias</span>
              <h2>Mensajes y frases según el vínculo especial</h2>
              <p>Descubrí más de 1.900 dedicatorias narrativas escritas con gratitud, anécdotas y aprendizajes de vida:</p>
            </div>
            <Link href="/mensajes-de-cumpleanos/" className="text-link">
              Ver índice completo de vínculos →
            </Link>
          </div>

          <div className="relationship-interlink-grid">
            {RELATIONSHIPS_LIST.map((rel) => (
              <Link key={rel.slug} href={`/${rel.slug}/`} className="rel-interlink-card">
                <span className="rel-interlink-icon" aria-hidden="true">{rel.emoji}</span>
                <div className="rel-interlink-info">
                  <strong>{rel.name}</strong>
                  <p>{rel.desc}</p>
                  <span className="rel-count-badge">159 frases redactadas</span>
                </div>
                <span className="rel-interlink-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          <div className="interlink-quick-bar">
            <span>Explorá otras colecciones de Para Cumpleaños:</span>
            <div className="quick-links-group">
              <Link href="/frases-de-cumpleanos/">✨ Frases célebres y originales</Link>
              <Link href="/postales-de-cumpleanos/">💌 Postales para WhatsApp</Link>
              <Link href="/recursos/banderines-cumpleanos-imprimibles/">🎨 Banderines imprimibles gratis</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation Hub: All 6 categories explicitly linked at the foot of the post */}
      <section className="section section-categories-hub">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Navegación por categorías</span>
              <h2>Explorá todas las categorías del sitio</h2>
              <p>Accedé a guías organizadas, ideas de celebración, imprimibles y dedicatorias:</p>
            </div>
          </div>
          <div className="category-footer-grid">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categoria/${cat.slug}/`} className="category-footer-card">
                <span className="cat-footer-icon" aria-hidden="true">{cat.icon}</span>
                <div className="cat-footer-info">
                  <strong>{cat.title}</strong>
                  <p>{cat.description}</p>
                </div>
                <span className="cat-footer-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section section-muted">
          <div className="wrap">
            <div className="section-heading">
              <h2>Artículos y guías relacionados</h2>
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
                    Ver colección completa →
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
