const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const SITEMAP_PATH = path.resolve(ROOT_DIR, 'sitemap.xml');
const TEMPLATE_PATH = path.resolve(DIST_DIR, 'index.html');

// Load data sources
const categories = JSON.parse(fs.readFileSync(path.resolve(ROOT_DIR, 'data/categories.json'), 'utf-8'));
const posts = JSON.parse(fs.readFileSync(path.resolve(ROOT_DIR, 'data/posts.json'), 'utf-8'));
const relationships = JSON.parse(fs.readFileSync(path.resolve(ROOT_DIR, 'data/relationship_messages.json'), 'utf-8'));

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function parseSitemapUrls() {
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locMatches = [...sitemapXml.matchAll(/<loc>(https:\/\/paracumpleanos\.com\/?.*?)<\/loc>/g)];
  return locMatches.map((m) => m[1]);
}

function getPageMetadata(urlStr) {
  const url = new URL(urlStr);
  const pathname = url.pathname.replace(/\/$/, '') || '/';

  // 1. Home
  if (pathname === '/') {
    return {
      title: 'Para Cumpleaños | Frases, mensajes y postales para dedicar',
      description: 'Frases de cumpleaños, mensajes para cada persona y postales para compartir. Encontrá felicitaciones emotivas, divertidas y originales, además de ideas para celebrar.',
      canonical: 'https://paracumpleanos.com/',
      type: 'website',
      breadcrumbs: [{ name: 'Inicio', item: 'https://paracumpleanos.com/' }],
      schemas: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Para Cumpleaños',
          url: 'https://paracumpleanos.com/',
          inLanguage: 'es-AR',
          description: 'Frases de cumpleaños, mensajes y postales para dedicar.'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Para Cumpleaños',
          url: 'https://paracumpleanos.com/'
        }
      ],
      heading: 'Para Cumpleaños: Frases, mensajes y postales para dedicar',
      lead: 'Encontrá la dedicatoria perfecta para cada persona importante en su día especial. Frases emotivas, breves y con humor para enviar por WhatsApp.',
      contentHtml: `
        <section class="intro-section">
          <h2>Mensajes y frases para cada persona</h2>
          <p>Explorá más de 1.900 dedicatorias organizadas para mamá, papá, pareja, hijos, hermanos, tíos, abuelos y amigos. Cada mensaje fue redactado con calidez y cercanía para compartir momentos inolvidables.</p>
        </section>
      `
    };
  }

  // 2. Hub pages
  if (pathname === '/frases-de-cumpleanos') {
    return {
      title: 'Frases de Cumpleaños | Felicitaciones para cada persona y estilo | Para Cumpleaños',
      description: 'Colección de frases de cumpleaños emotivas, cortas, divertidas y profundas para dedicar a mamá, papá, hermanos, pareja y amigos.',
      canonical: 'https://paracumpleanos.com/frases-de-cumpleanos/',
      type: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: 'https://paracumpleanos.com/' },
        { name: 'Frases de cumpleaños', item: 'https://paracumpleanos.com/frases-de-cumpleanos/' }
      ],
      heading: 'Frases de cumpleaños para cada persona y cada estilo',
      lead: 'Colección organizada de frases emotivas, breves, divertidas y profundas para enviar por WhatsApp o escribir en una tarjeta.',
      contentHtml: `
        <section class="hub-intro">
          <p>Una dedicatoria no necesita ser extensa para ser sentida. Encontrá felicitaciones agrupadas por vínculo y estilo, listas para copiar y personalizar.</p>
        </section>
      `
    };
  }

  if (pathname === '/mensajes-de-cumpleanos') {
    return {
      title: 'Mensajes de Cumpleaños | Textos y dedicatorias para cada ocasión | Para Cumpleaños',
      description: 'Mensajes de cumpleaños completos y emotivos para mamá, papá, pareja, hijos y amigos listos para personalizar y enviar.',
      canonical: 'https://paracumpleanos.com/mensajes-de-cumpleanos/',
      type: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: 'https://paracumpleanos.com/' },
        { name: 'Mensajes de cumpleaños', item: 'https://paracumpleanos.com/mensajes-de-cumpleanos/' }
      ],
      heading: 'Mensajes de cumpleaños que expresan lo que sentís',
      lead: 'Colección de 12 relaciones con más de 1.900 dedicatorias completas para mamá, papá, pareja, hijos y seres queridos.',
      contentHtml: `
        <section class="hub-intro">
          <p>Encontrá textos que combinan agradecimiento, aprendizajes compartidos y buenos deseos, adaptados tanto para un mensaje rápido de WhatsApp como para una tarjeta inolvidable.</p>
        </section>
      `
    };
  }

  if (pathname === '/postales-de-cumpleanos') {
    return {
      title: 'Postales de Cumpleaños | Diseños para descargar y compartir | Para Cumpleaños',
      description: 'Postales de cumpleaños con dedicatorias listas para descargar como imagen PNG o compartir en redes y WhatsApp.',
      canonical: 'https://paracumpleanos.com/postales-de-cumpleanos/',
      type: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: 'https://paracumpleanos.com/' },
        { name: 'Postales de cumpleaños', item: 'https://paracumpleanos.com/postales-de-cumpleanos/' }
      ],
      heading: 'Postales de cumpleaños para enviar con cariño',
      lead: 'Elegí una postal ilustrada según la persona y el mensaje que querés transmitir. Diseños descargables en alta calidad.',
      contentHtml: `
        <section class="hub-intro">
          <p>Tarjetas visuales con frases seleccionadas para mamá, papá, amigos, pareja y seres queridos que están lejos.</p>
        </section>
      `
    };
  }

  if (pathname === '/recursos/banderines-cumpleanos-imprimibles') {
    return {
      title: 'Banderines de cumpleaños para imprimir gratis | Para Cumpleaños',
      description: 'Descargá e imprimí banderines decorativos de feliz cumpleaños con diseños únicos y listos para recortar en casa.',
      canonical: 'https://paracumpleanos.com/recursos/banderines-cumpleanos-imprimibles/',
      type: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: 'https://paracumpleanos.com/' },
        { name: 'Recursos gratuitos', item: 'https://paracumpleanos.com/categoria/recursos-gratuitos/' },
        { name: 'Banderines imprimibles', item: 'https://paracumpleanos.com/recursos/banderines-cumpleanos-imprimibles/' }
      ],
      heading: 'Banderines de cumpleaños para imprimir gratis',
      lead: '50 modelos y plantillas imprimibles listas para armar guirnaldas festivas en casa con tijera e hilo.',
      contentHtml: `<p>Plantillas gratuitas de banderines de cumpleaños con letras grandes y colores festivos para celebrar en familia.</p>`
    };
  }

  if (pathname === '/sobre-nosotros') {
    return {
      title: 'Sobre Nosotros | Para Cumpleaños',
      description: 'Conocé la historia y el propósito de Para Cumpleaños: ideas, frases y recursos para celebrar momentos especiales.',
      canonical: 'https://paracumpleanos.com/sobre-nosotros/',
      type: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: 'https://paracumpleanos.com/' },
        { name: 'Sobre nosotros', item: 'https://paracumpleanos.com/sobre-nosotros/' }
      ],
      heading: 'Sobre Para Cumpleaños',
      lead: 'Un espacio de ideas prácticas para celebrar a las personas importantes de tu vida.',
      contentHtml: `<p>Para Cumpleaños reúne dedicatorias humanas, temáticas creativas, consejos de organización y recursos sencillos para festejar con calidez.</p>`
    };
  }

  if (pathname === '/contacto') {
    return {
      title: 'Contacto y Sugerencias | Para Cumpleaños',
      description: 'Ponete en contacto con el equipo editorial de Para Cumpleaños para sugerencias, consultas o aportes.',
      canonical: 'https://paracumpleanos.com/contacto/',
      type: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: 'https://paracumpleanos.com/' },
        { name: 'Contacto', item: 'https://paracumpleanos.com/contacto/' }
      ],
      heading: 'Contacto y sugerencias',
      lead: '¿Encontraste un error o querés sugerir una nueva temática o dedicatoria?',
      contentHtml: `<p>Escribinos a contacto@paracumpleanos.com para sugerencias editoriales, colaboraciones o consultas sobre el sitio.</p>`
    };
  }

  if (pathname === '/privacidad') {
    return {
      title: 'Política de Privacidad | Para Cumpleaños',
      description: 'Información detallada sobre la política de privacidad y protección de datos en Para Cumpleaños.',
      canonical: 'https://paracumpleanos.com/privacidad/',
      type: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: 'https://paracumpleanos.com/' },
        { name: 'Privacidad', item: 'https://paracumpleanos.com/privacidad/' }
      ],
      heading: 'Política de Privacidad',
      lead: 'Transparencia y respeto por la privacidad de todos nuestros visitantes.',
      contentHtml: `<p>En Para Cumpleaños respetamos tu privacidad. No almacenamos datos sensibles ni requerimos registro para consultar o copiar frases y postales.</p>`
    };
  }

  // 3. Relationship collection pages (12 main relations)
  if (pathname.startsWith('/mensajes-de-cumpleanos-para-')) {
    const slug = pathname.replace(/^\//, '');
    const rel = relationships[slug];
    if (rel) {
      const topMessages = rel.messages.slice(0, 30);
      const itemListElements = topMessages.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: m.title,
        description: m.text.slice(0, 150) + (m.text.length > 150 ? '...' : '')
      }));

      const faqs = [
        {
          question: `¿Cómo elegir el mejor mensaje de cumpleaños para ${rel.name.toLowerCase()}?`,
          answer: `Elegí un mensaje que refleje el tono real de tu vínculo: emotivo con agradecimiento, breve para WhatsApp o con humor si comparten anécdotas cotidianas.`
        },
        {
          question: `¿Puedo enviar estos mensajes por WhatsApp?`,
          answer: `Sí, cada frase cuenta con botón directo para compartir en WhatsApp o copiar con un clic para personalizarla antes de enviarla.`
        },
        {
          question: `¿Cuántos mensajes de cumpleaños para ${rel.name.toLowerCase()} incluye esta guía?`,
          answer: `Esta colección cuenta con ${rel.messages.length} dedicatorias originales, abarcando mensajes emotivos, familiares, profundos y divertidos.`
        }
      ];

      const schemas = [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${rel.title} | Para Cumpleaños`,
          description: rel.lead,
          url: `https://paracumpleanos.com/${slug}/`,
          inLanguage: 'es-AR',
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: rel.messages.length,
            itemListElement: itemListElements
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer
            }
          }))
        }
      ];

      const messagesHtml = rel.messages
        .map(
          (m) => `
            <article class="message-card" id="${escapeHtml(m.id)}">
              <header class="message-card-header">
                <h3>${escapeHtml(m.title)}</h3>
              </header>
              <p class="message-text">${escapeHtml(m.text)}</p>
            </article>`
        )
        .join('\n');

      return {
        title: `${rel.title} | Para Cumpleaños`,
        description: rel.lead.length > 160 ? rel.lead.slice(0, 157) + '...' : rel.lead,
        canonical: `https://paracumpleanos.com/${slug}/`,
        type: 'website',
        breadcrumbs: [
          { name: 'Inicio', item: 'https://paracumpleanos.com/' },
          { name: 'Mensajes de cumpleaños', item: 'https://paracumpleanos.com/mensajes-de-cumpleanos/' },
          { name: rel.name, item: `https://paracumpleanos.com/${slug}/` }
        ],
        schemas,
        heading: rel.title,
        lead: rel.lead,
        contentHtml: `
          <div class="collection-intro">
            <p>${escapeHtml(rel.intro)}</p>
          </div>
          <div class="messages-container">
            ${messagesHtml}
          </div>
        `
      };
    }
  }

  // 4. Category Pages (/categoria/...)
  if (pathname.startsWith('/categoria/')) {
    const catSlug = pathname.replace('/categoria/', '');
    const cat = categories.find((c) => c.slug === catSlug);
    if (cat) {
      const catPosts = posts.filter((p) => p.category === cat.slug);
      const schemas = [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${cat.title} | Para Cumpleaños`,
          description: cat.description,
          url: `https://paracumpleanos.com/categoria/${cat.slug}/`,
          inLanguage: 'es-AR'
        }
      ];

      const postsHtml = catPosts
        .map(
          (p) => `
            <article class="post-preview-card">
              <h3><a href="/posts/${escapeHtml(p.slug)}/">${escapeHtml(p.title)}</a></h3>
              <p>${escapeHtml(p.description)}</p>
            </article>
          `
        )
        .join('\n');

      return {
        title: `${cat.title} | Para Cumpleaños`,
        description: cat.description.length > 160 ? cat.description.slice(0, 157) + '...' : cat.description,
        canonical: `https://paracumpleanos.com/categoria/${cat.slug}/`,
        type: 'website',
        breadcrumbs: [
          { name: 'Inicio', item: 'https://paracumpleanos.com/' },
          { name: cat.title, item: `https://paracumpleanos.com/categoria/${cat.slug}/` }
        ],
        schemas,
        heading: cat.title,
        lead: cat.intro || cat.description,
        contentHtml: `
          <div class="category-posts-grid">
            ${postsHtml}
          </div>
        `
      };
    }
  }

  // 5. Posts (/posts/...)
  if (pathname.startsWith('/posts/')) {
    const postSlug = pathname.replace('/posts/', '');
    const post = posts.find((p) => p.slug === postSlug);
    if (post) {
      const cat = categories.find((c) => c.slug === post.category);
      const schemas = [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          url: `https://paracumpleanos.com/posts/${post.slug}/`,
          inLanguage: 'es-AR',
          mainEntityOfPage: `https://paracumpleanos.com/posts/${post.slug}/`,
          publisher: {
            '@type': 'Organization',
            name: 'Para Cumpleaños',
            url: 'https://paracumpleanos.com/'
          },
          author: {
            '@type': 'Organization',
            name: 'Redacción Para Cumpleaños'
          }
        }
      ];

      // Add FAQ schema if post has faqs
      if (post.faqs && post.faqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer
            }
          }))
        });
      }

      // Generate post body text
      let postBodyHtml = `<p class="article-lead">${escapeHtml(post.intro || post.description)}</p>`;

      const directRel = {
        'frases-de-cumpleanos-para-mi-mama': { slug: 'mensajes-de-cumpleanos-para-mama', name: 'mamá' },
        'frases-de-cumpleanos-para-mi-papa': { slug: 'mensajes-de-cumpleanos-para-papa', name: 'papá' },
        'frases-de-cumpleanos-para-mi-esposo': { slug: 'mensajes-de-cumpleanos-para-mi-esposo', name: 'tu esposo' },
        'frases-de-cumpleanos-para-mi-esposa': { slug: 'mensajes-de-cumpleanos-para-mi-esposa', name: 'tu esposa' },
        'frases-de-cumpleanos-para-mi-amor': { slug: 'mensajes-de-cumpleanos-para-mi-novio', name: 'tu pareja o novio/a' },
        'frases-de-cumpleanos-para-amigos': { slug: 'mensajes-de-cumpleanos-para-un-amigo', name: 'un amigo o amiga' },
        'frases-de-cumpleanos-para-mi-hijo': { slug: 'mensajes-de-cumpleanos-para-mi-hijo', name: 'tu hijo' },
        'feliz-cumpleanos-querida-hija': { slug: 'mensajes-de-cumpleanos-para-mi-hija', name: 'tu hija' },
        'frases-de-cumpleanos-para-hermanos': { slug: 'mensajes-de-cumpleanos-para-mi-hermano', name: 'tu hermano o hermana' }
      }[post.slug];

      if (directRel) {
        postBodyHtml += `
          <aside class="contextual-interlink-banner">
            <h3>¿Buscás una dedicatoria profunda y personal para ${escapeHtml(directRel.name)}?</h3>
            <p>Descubrí nuestra colección exclusiva con <strong>159 mensajes narrativos de 3 a 5 oraciones</strong> con anécdotas, agradecimiento sincero y aprendizajes de vida.</p>
            <p><a href="/${directRel.slug}/" class="button">Ver 159 mensajes para ${escapeHtml(directRel.name)} →</a></p>
          </aside>
        `;
      } else {
        postBodyHtml += `
          <aside class="contextual-interlink-banner">
            <h3>Personalizá este saludo según la persona especial a felicitar</h3>
            <p>Accedé a nuestras <strong>12 colecciones con más de 1.900 dedicatorias narrativas</strong> creadas para mamá, papá, pareja, amigos, hijos y hermanos.</p>
            <p><a href="/mensajes-de-cumpleanos/" class="button">Explorar frases por vínculo →</a></p>
          </aside>
        `;
      }

      if (post.sections && post.sections.length > 0) {
        postBodyHtml += post.sections
          .map((s) => `
            <section class="post-section">
              <h2>${escapeHtml(s.heading || s.h2 || s.title || '')}</h2>
              ${s.paragraphs ? s.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('') : ''}
              ${s.bullets ? `<ul>${s.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>` : ''}
            </section>
          `)
          .join('\n');
      }

      if (post.messages && post.messages.length > 0) {
        postBodyHtml += `
          <section class="post-messages">
            <h2>Mensajes destacados</h2>
            ${post.messages.map((m) => `<blockquote class="message-quote"><p>${escapeHtml(m)}</p></blockquote>`).join('\n')}
          </section>
        `;
      }

      // 12-Relationship Interlinks Grid
      const relLinks = [
        { slug: 'mensajes-de-cumpleanos-para-mama', name: 'Mamá', emoji: '🌸' },
        { slug: 'mensajes-de-cumpleanos-para-papa', name: 'Papá', emoji: '👔' },
        { slug: 'mensajes-de-cumpleanos-para-mi-novio', name: 'Mi Novio', emoji: '💖' },
        { slug: 'mensajes-de-cumpleanos-para-mi-novia', name: 'Mi Novia', emoji: '🌹' },
        { slug: 'mensajes-de-cumpleanos-para-mi-esposo', name: 'Mi Esposo', emoji: '💍' },
        { slug: 'mensajes-de-cumpleanos-para-mi-esposa', name: 'Mi Esposa', emoji: '💫' },
        { slug: 'mensajes-de-cumpleanos-para-un-amigo', name: 'Un Amigo', emoji: '🌟' },
        { slug: 'mensajes-de-cumpleanos-para-una-amiga', name: 'Una Amiga', emoji: '👭' },
        { slug: 'mensajes-de-cumpleanos-para-mi-hijo', name: 'Mi Hijo', emoji: '👦' },
        { slug: 'mensajes-de-cumpleanos-para-mi-hija', name: 'Mi Hija', emoji: '👧' },
        { slug: 'mensajes-de-cumpleanos-para-mi-hermano', name: 'Mi Hermano', emoji: '🤜' },
        { slug: 'mensajes-de-cumpleanos-para-mi-hermana', name: 'Mi Hermana', emoji: '🌺' }
      ];

      postBodyHtml += `
        <section class="relationship-interlink-section">
          <h2>Dedicatorias y frases por vínculo especial</h2>
          <p>Explorá más de 1.900 mensajes narrativos únicos con anécdotas y aprendizajes de vida:</p>
          <div class="relationship-interlink-grid">
            ${relLinks.map((r) => `<a href="/${r.slug}/" class="rel-interlink-card"><span>${r.emoji} ${escapeHtml(r.name)}</span> (159 frases)</a>`).join('\n')}
          </div>
          <p><a href="/mensajes-de-cumpleanos/">Ver índice de todos los vínculos →</a> · <a href="/frases-de-cumpleanos/">Ver frases cortas</a></p>
        </section>

        <section class="section-categories-hub">
          <h2>Explorá todas las categorías del sitio</h2>
          <p>Accedé a guías organizadas, ideas de celebración, imprimibles y dedicatorias:</p>
          <div class="category-footer-grid">
            ${categories.map((c) => `<a href="/categoria/${c.slug}/" class="category-footer-card"><strong>${c.icon} ${escapeHtml(c.title)}</strong><p>${escapeHtml(c.description)}</p></a>`).join('\n')}
          </div>
        </section>
      `;

      return {
        title: `${post.title} | Para Cumpleaños`,
        description: post.description.length > 160 ? post.description.slice(0, 157) + '...' : post.description,
        canonical: `https://paracumpleanos.com/posts/${post.slug}/`,
        type: 'article',
        breadcrumbs: [
          { name: 'Inicio', item: 'https://paracumpleanos.com/' },
          { name: cat ? cat.title : 'Artículos', item: cat ? `https://paracumpleanos.com/categoria/${cat.slug}/` : '/' },
          { name: post.title, item: `https://paracumpleanos.com/posts/${post.slug}/` }
        ],
        schemas,
        heading: post.title,
        lead: post.intro || post.description,
        contentHtml: postBodyHtml
      };
    }
  }

  // Default fallback
  return null;
}

function renderHtml(templateHtml, meta) {
  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}">`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}">`
  );

  // Replace OG Tags
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(meta.title)}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonical}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:type["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:type" content="${meta.type || 'website'}">`
  );

  // Replace Twitter Tags
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}">`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`
  );

  // Build JSON-LD Structured Data
  const allSchemas = [];

  // Breadcrumbs schema
  if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
    allSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: meta.breadcrumbs.map((bc, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: bc.name,
        item: bc.item
      }))
    });
  }

  if (meta.schemas && meta.schemas.length > 0) {
    allSchemas.push(...meta.schemas);
  }

  // Inject or replace script JSON-LD
  const schemasJson = allSchemas.map((s) => `  <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n  </script>`).join('\n');

  // Replace existing json-ld in template with updated schemas
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  html = html.replace('</head>', `${schemasJson}\n</head>`);

  // Build Semantic Crawlable Body Fallback inside <div id="root">
  const breadcrumbItems = (meta.breadcrumbs || [])
    .map((b, i, arr) => (i < arr.length - 1 ? `<a href="${b.item}">${escapeHtml(b.name)}</a> <span>/</span> ` : `<span>${escapeHtml(b.name)}</span>`))
    .join('');

  const crawlableFallback = `
    <header class="header">
      <div class="wrap header-inner">
        <a href="/" class="brand">
          <span class="brand-badge">🎂</span>
          <span>Para Cumpleaños</span>
        </a>
        <nav class="nav">
          <a href="/frases-de-cumpleanos/">Frases</a>
          <a href="/mensajes-de-cumpleanos/">Mensajes</a>
          <a href="/postales-de-cumpleanos/">Postales</a>
          <a href="/categoria/frases-y-mensajes/">Frases y mensajes</a>
          <a href="/categoria/ideas-y-tematicas/">Ideas</a>
          <a href="/categoria/organizacion/">Organización</a>
          <a href="/categoria/recursos-gratuitos/">Recursos</a>
          <a href="/categoria/tendencias-2026/">Tendencias</a>
        </nav>
      </div>
    </header>
    <main class="main-content">
      <div class="wrap">
        <nav class="breadcrumbs" aria-label="Ruta de navegación">
          ${breadcrumbItems}
        </nav>
        <article class="prerender-article">
          <header class="page-header">
            <h1>${escapeHtml(meta.heading || meta.title)}</h1>
            ${meta.lead ? `<p class="lead">${escapeHtml(meta.lead)}</p>` : ''}
          </header>
          <div class="prerender-body">
            ${meta.contentHtml || ''}
          </div>
        </article>
      </div>
    </main>
    <footer class="footer">
      <div class="wrap footer-bottom">
        <p>© 2026 Para Cumpleaños. Todos los derechos reservados.</p>
        <p><a href="/sobre-nosotros/">Sobre nosotros</a> · <a href="/contacto/">Contacto</a> · <a href="/privacidad/">Privacidad</a></p>
      </div>
    </footer>
  `.trim();

  html = html.replace('<div id="root"></div>', `<div id="root">${crawlableFallback}</div>`);

  return html;
}

function prerender() {
  console.log('🚀 Iniciando Pre-renderizado SSG para paracumpleanos.com...');

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`❌ Error: No se encontró la plantilla en ${TEMPLATE_PATH}. Ejecutá el build de Vite primero.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const urls = parseSitemapUrls();
  console.log(`📋 Se encontraron ${urls.length} rutas en sitemap.xml para pre-renderizar.`);

  let generatedCount = 0;

  for (const urlStr of urls) {
    const meta = getPageMetadata(urlStr);
    if (!meta) {
      console.warn(`⚠️ Aviso: No se encontró metadata para la URL: ${urlStr}`);
      continue;
    }

    const url = new URL(urlStr);
    const pathname = url.pathname.replace(/^\//, '').replace(/\/$/, '');
    const pageHtml = renderHtml(templateHtml, meta);

    if (pathname === '') {
      // Root index.html
      fs.writeFileSync(path.resolve(DIST_DIR, 'index.html'), pageHtml, 'utf-8');
      console.log(`✅ [200 OK] Pre-renderizado raíz: / -> dist/index.html`);
    } else {
      const targetDir = path.resolve(DIST_DIR, pathname);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.resolve(targetDir, 'index.html'), pageHtml, 'utf-8');
      console.log(`✅ [200 OK] Pre-renderizado ruta: /${pathname}/ -> dist/${pathname}/index.html`);
    }

    generatedCount++;
  }

  // Also create dist/404.html from root template for graceful client fallback
  fs.copyFileSync(path.resolve(DIST_DIR, 'index.html'), path.resolve(DIST_DIR, '404.html'));
  console.log(`✅ [404 Fallback] Generado dist/404.html`);

  console.log(`\n🎉 ¡Pre-renderizado completado con éxito! ${generatedCount} páginas estáticas listas para HTTP 200 en GitHub Pages.`);
}

prerender();
