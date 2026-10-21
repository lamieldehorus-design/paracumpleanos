import React from 'react';
import { Link } from '../router';
import { getPostBySlug } from '../data';
import { SEOHead } from '../components/SEOHead';

export function SobreNosotrosPage() {
  return (
    <div className="wrap legal-content">
      <SEOHead
        title="Sobre Nosotros"
        description="Conocé la historia y el propósito de Para Cumpleaños: ideas, frases y recursos para celebrar momentos especiales."
        path="/sobre-nosotros/"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Sobre nosotros', item: '/sobre-nosotros/' },
        ]}
      />
      <nav className="breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <span>Sobre nosotros</span>
      </nav>
      <section className="page-hero">
        <span className="eyebrow">El proyecto</span>
        <h1>Sobre Para Cumpleaños</h1>
        <p className="lead">Un espacio de ideas prácticas para celebrar a las personas importantes de tu vida.</p>
        <p>
          Para Cumpleaños reúne frases para dedicar, propuestas de temáticas, consejos de organización y herramientas sencillas. La intención es ayudarte a pasar de una idea a un mensaje o un plan que puedas adaptar a tu realidad.
        </p>
        <h2>Celebraciones reales, a tu manera</h2>
        <p>
          No hay una sola forma correcta de festejar. Una reunión pequeña, una carta escrita con cariño o una fiesta organizada con tiempo pueden ser igual de significativas.
        </p>
      </section>
    </div>
  );
}

export function ContactoPage() {
  return (
    <div className="wrap legal-content">
      <SEOHead
        title="Contacto y Sugerencias"
        description="Ponete en contacto con el equipo editorial de Para Cumpleaños para sugerencias, consultas o aportes."
        path="/contacto/"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Contacto', item: '/contacto/' },
        ]}
      />
      <nav className="breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <span>Contacto</span>
      </nav>
      <section className="page-hero">
        <span className="eyebrow">Contacto editorial</span>
        <h1>Contacto y sugerencias</h1>
        <p className="lead">¿Encontraste un error o querés sugerir una idea para una guía?</p>
        <p>
          Podés escribirnos o enviarnos tus consultas y aportes para mejorar las guías y colecciones de Para Cumpleaños. Si detectás alguna información o texto para revisar, indicanos qué parte te gustaría que actualicemos.
        </p>
        <h2>Participación y comunidad</h2>
        <p>
          Nuestro compromiso es ofrecer contenido cuidado, cálido y útil para que cada felicitación y celebración sea especial.
        </p>
      </section>
    </div>
  );
}

export function PrivacidadPage() {
  return (
    <div className="wrap legal-content">
      <SEOHead
        title="Política de Privacidad"
        description="Información detallada sobre la política de privacidad y protección de datos en Para Cumpleaños."
        path="/privacidad/"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Privacidad', item: '/privacidad/' },
        ]}
      />
      <nav className="breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <span>Privacidad</span>
      </nav>
      <section className="page-hero">
        <span className="eyebrow">Información del sitio</span>
        <h1>Política de privacidad</h1>
        <p className="lead">Esta página explica qué datos pueden intervenir al visitar Para Cumpleaños.</p>
        <p>
          <strong>Última actualización: 14 de octubre de 2026.</strong>
        </p>
        <h2>Estadísticas de visitas</h2>
        <p>
          El sitio prioriza la privacidad. No se solicitan cuentas de usuario ni datos bancarios para leer artículos ni copiar frases.
        </p>
        <h2>Herramientas en el navegador</h2>
        <p>
          Las herramientas interactivas (como el checklist o la calculadora de presupuesto) funcionan directamente en tu dispositivo y no transmiten información personal a servidores externos.
        </p>
        <h2>Enlaces externos</h2>
        <p>Al abrir otros sitios o enlaces compartidos, pasás a estar sujeto a sus propias políticas y condiciones.</p>
      </section>
    </div>
  );
}

export function BanderinesPrintablePage() {
  const post = getPostBySlug('50-banderines-para-cumpleanos-imprimir-gratis');
  const banderines = post?.banderines || [];

  const handleDownloadHtml = () => {
    const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>50 banderines para cumpleaños para imprimir</title>
<style>
body { font-family: sans-serif; margin: 20px; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.card { text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px; }
.flag { height: 140px; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 6px; }
</style>
</head>
<body>
<h1>50 banderines para cumpleaños</h1>
<div class="grid">
${banderines.map((b, i) => `<div class="card"><div class="flag" style="background:${b.bg}; color:${b.accent};">${b.text}</div><p>${i + 1}. ${b.name}</p></div>`).join('\n')}
</div>
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'banderines-cumpleanos-imprimibles.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="wrap" style={{ padding: '24px 0 60px' }}>
      <SEOHead
        title="50 Banderines de Cumpleaños para Imprimir Gratis"
        description="Descarga e imprime 50 banderines festivos con diseños de banderola, chevron y banderín listos para decorar."
        path="/recursos/banderines-cumpleanos-imprimibles/"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Recursos gratuitos', item: '/categoria/recursos-gratuitos/' },
          { name: '50 banderines imprimibles', item: '/recursos/banderines-cumpleanos-imprimibles/' },
        ]}
      />
      <nav className="breadcrumbs no-print" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/categoria/recursos-gratuitos/">Recursos gratuitos</Link>
        <span>/</span>
        <span>50 banderines imprimibles</span>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
        <h1>50 banderines para cumpleaños para imprimir gratis</h1>
        <p>
          Imprimí esta colección en cartulina liviana o guardala como PDF. Los diseños son ideas para una guirnalda; recortá, perforá y pasá un hilo por la parte superior.
        </p>
        <div className="button-row no-print" style={{ margin: '18px 0' }}>
          <button type="button" className="button" onClick={() => window.print()}>
            Imprimir o guardar como PDF
          </button>
          <button type="button" className="button-secondary" onClick={handleDownloadHtml}>
            Descargar archivo HTML
          </button>
        </div>
      </div>

      <div className="pennant-grid">
        {banderines.map((b, bIdx) => (
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
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="wrap legal-content" style={{ textAlign: 'center', padding: '80px 0' }}>
      <SEOHead
        title="Página no encontrada (404)"
        description="No pudimos encontrar la página que buscas. Explora nuestras frases y mensajes de cumpleaños."
        path="/404"
      />
      <span style={{ fontSize: '5rem', display: 'block' }}>🎈</span>
      <h1>Página no encontrada</h1>
      <p className="lead">No encontramos la sección que estás buscando.</p>
      <p>Es posible que la dirección haya cambiado o que el enlace sea incorrecto.</p>
      <div className="button-row" style={{ justifyContent: 'center', marginTop: '24px' }}>
        <Link className="button" href="/">
          Volver al inicio
        </Link>
        <Link className="button-secondary" href="/frases-de-cumpleanos/">
          Ver frases de cumpleaños
        </Link>
      </div>
    </div>
  );
}
