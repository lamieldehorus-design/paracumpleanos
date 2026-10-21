import { Category } from '../types';
import { getPostsByCategory } from '../data';
import { Link } from '../router';
import { FAQSection } from '../components/FAQSection';
import { PostCard } from '../components/PostCard';
import { SEOHead } from '../components/SEOHead';

interface CategoryPageProps {
  category: Category;
}

const CATEGORY_FAQS = [
  {
    question: '¿Cómo encontrar una idea que encaje con la persona?',
    answer: 'Empezá por el vínculo, los gustos y el tipo de celebración. Elegí una propuesta que puedas adaptar, en lugar de intentar seguir todas las ideas al mismo tiempo.'
  },
  {
    question: '¿Puedo combinar estas ideas con frases o postales?',
    answer: 'Sí. Los mensajes, las invitaciones y las postales ayudan a mantener un mismo tono y a personalizar la celebración.'
  },
  {
    question: '¿Cómo adaptar las propuestas a un presupuesto pequeño?',
    answer: 'Priorizá lo que más se va a notar o disfrutar, reutilizá materiales y elegí una actividad principal. No hace falta comprar todo lo que aparece en una inspiración.'
  }
];

export function CategoryPage({ category }: CategoryPageProps) {
  const categoryPosts = getPostsByCategory(category.slug);

  return (
    <>
      <SEOHead
        title={`${category.title} | Ideas y recursos`}
        description={category.description}
        path={`/categoria/${category.slug}/`}
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: category.title, item: `/categoria/${category.slug}/` },
        ]}
      />
      <nav className="breadcrumbs wrap" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <span>{category.title}</span>
      </nav>

      <section className="page-hero wrap">
        <span className="category-icon">{category.icon}</span>
        <span className="eyebrow">Colección de cumpleaños</span>
        <h1>{category.title}</h1>
        <p className="lead">{category.description}</p>
        <p>{category.intro}</p>

        {category.slug === 'frases-y-mensajes' && (
          <div className="category-feature-links">
            <Link className="button" href="/frases-de-cumpleanos/">
              Explorar frases por persona
            </Link>
            <Link className="button-secondary" href="/mensajes-de-cumpleanos/">
              Ver mensajes completos
            </Link>
          </div>
        )}

        {category.slug === 'ideas-y-tematicas' && (
          <div className="category-feature-links">
            <Link className="button" href="/posts/20-ideas-de-tematicas-para-cumpleanos-que-nadie-mas-tiene/">
              Ver 20 temáticas originales
            </Link>
            <Link className="button-secondary" href="/posts/juegos-para-cumpleanos-infantiles/">
              Ideas de juegos infantiles
            </Link>
          </div>
        )}

        {category.slug === 'recursos-gratuitos' && (
          <div className="category-feature-links">
            <Link className="button" href="/posts/50-banderines-para-cumpleanos-imprimir-gratis/">
              Abrir 50 banderines imprimibles
            </Link>
            <Link className="button-secondary" href="/posts/30-plantillas-de-invitaciones-para-cumpleanos/">
              Ver 30 invitaciones
            </Link>
          </div>
        )}

        {category.slug === 'postales-de-cumpleanos' && (
          <div className="category-feature-links">
            <Link className="button" href="/postales-de-cumpleanos/">
              Ver y descargar postales
            </Link>
          </div>
        )}
      </section>

      {/* Grid of posts */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Explorá por tema</span>
              <h2>Colecciones y guías</h2>
              <p>Elegí una guía concreta y seguí desde ahí.</p>
            </div>
          </div>

          <div className="card-grid">
            {categoryPosts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                kicker={category.title}
                actionLabel="Ver colección →"
              />
            ))}
          </div>

          {categoryPosts.length === 0 && (
            <p className="empty-state">No hay artículos cargados para esta categoría.</p>
          )}
        </div>
      </section>

      <FAQSection faqs={CATEGORY_FAQS} title="Preguntas frecuentes" />
    </>
  );
}
