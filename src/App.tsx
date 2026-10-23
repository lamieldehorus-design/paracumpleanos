import { useEffect } from 'react';
import { useRouter, normalizePath } from './router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FrasesPage } from './pages/FrasesPage';
import { MensajesHubPage } from './pages/MensajesHubPage';
import { RelationshipMessagesPage } from './pages/RelationshipMessagesPage';
import { PostalesPage } from './pages/PostalesPage';
import { CategoryPage } from './pages/CategoryPage';
import { PostDetailPage } from './pages/PostDetailPage';
import {
  SobreNosotrosPage,
  ContactoPage,
  PrivacidadPage,
  BanderinesPrintablePage,
  NotFoundPage,
} from './pages/StaticPages';
import {
  getCategoryBySlug,
  getPostBySlug,
  getRelationshipCollection,
} from './data';
import { TopRankedBlock } from './components/TopRankedBlock';

export function App() {
  const { path, navigate } = useRouter();
  const currentPath = normalizePath(path);

  // Handle redirects for old routes
  useEffect(() => {
    if (currentPath === '/herramientas/generador-de-frases') {
      navigate('/frases-de-cumpleanos/', { replace: true });
    } else if (currentPath === '/herramientas/planificador-de-cumpleanos') {
      navigate('/categoria/ideas-y-tematicas/', { replace: true });
    }
  }, [currentPath, navigate]);

  const renderContent = () => {
    if (currentPath === '' || currentPath === '/') {
      return <HomePage />;
    }

    if (currentPath === '/frases-de-cumpleanos') {
      return <FrasesPage />;
    }

    if (currentPath === '/mensajes-de-cumpleanos') {
      return <MensajesHubPage />;
    }

    if (currentPath === '/postales-de-cumpleanos') {
      return <PostalesPage />;
    }

    if (currentPath === '/recursos/banderines-cumpleanos-imprimibles') {
      return <BanderinesPrintablePage />;
    }

    if (currentPath === '/sobre-nosotros') {
      return <SobreNosotrosPage />;
    }

    if (currentPath === '/contacto') {
      return <ContactoPage />;
    }

    if (currentPath === '/privacidad') {
      return <PrivacidadPage />;
    }

    // Check relationship collections e.g. /mensajes-de-cumpleanos-para-mama
    if (currentPath.startsWith('/mensajes-de-cumpleanos-para-')) {
      const slug = currentPath.replace(/^\//, '').replace(/\/+$/, '');
      const collection = getRelationshipCollection(slug);
      if (collection) {
        return <RelationshipMessagesPage collection={collection} />;
      }
    }

    // Check category pages e.g. /categoria/ideas-y-tematicas
    if (currentPath.startsWith('/categoria')) {
      const slug = currentPath.replace(/^\/categoria\/?/, '').replace(/\/+$/, '');
      const category = slug ? getCategoryBySlug(slug) : getCategoryBySlug('frases-y-mensajes');
      if (category) {
        return <CategoryPage category={category} />;
      }
    }

    // Check post pages e.g. /posts/frases-de-cumpleanos-para-amigos
    if (currentPath.startsWith('/posts/')) {
      const slug = currentPath.replace(/^\/posts\/?/, '').replace(/\/+$/, '');
      const post = getPostBySlug(slug);
      if (post) {
        return <PostDetailPage post={post} />;
      }
    }

    return <NotFoundPage />;
  };

  return (
    <div className="site-wrapper">
      <Header />
      <main id="contenido">{renderContent()}</main>
      <TopRankedBlock />
      <Footer />
    </div>
  );
}
export default App;
