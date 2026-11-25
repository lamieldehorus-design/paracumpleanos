import type { APIRoute } from 'astro';
import {
  contenido,
  hubs,
  todosMensajes,
  hubsPorSlug,
  mensajesPorCategoria,
  hubsPorGrupo,
  hubsPorDestinatario,
  hubsPrincipales,
  mensajesDe,
  hubDe,
  relacionadasDe,
  hermanasDe
} from '../lib/contenido.ts';
import { generarUrlsSitio, construirMapaLastmodSitemap, generarSitemapXml } from '../lib/catalogo.ts';
import { GUIAS_EDITORIALES } from '../data/guias.ts';
import { PAISES_HITOS } from '../data/hitos-historicos.ts';
import { ZODIACOS } from '../lib/horoscopo.ts';
import { ARCANOS_MAYORES } from '../lib/tarot-egipcio.ts';

export const GET: APIRoute = () => {
  const catalogo = {
    contenido,
    hubs,
    todosMensajes,
    hubsPorSlug,
    mensajesPorCategoria,
    hubsPorGrupo,
    hubsPorDestinatario,
    hubsPrincipales,
    mensajesDe,
    hubDe,
    relacionadasDe,
    hermanasDe
  };
  const slugsGuias = GUIAS_EDITORIALES.map((g) => g.slug);
  const slugsSignos = ZODIACOS.map((s) => s.slug);
  const slugsPaises = PAISES_HITOS.map((p) => p.slug);
  const slugsTarot = ARCANOS_MAYORES.map((a) => a.slug);

  const urls = generarUrlsSitio(catalogo, slugsGuias, slugsSignos, slugsPaises, slugsTarot);
  const lastmodPorUrl = construirMapaLastmodSitemap(
    catalogo,
    GUIAS_EDITORIALES,
    slugsSignos,
    slugsPaises,
    '2026-11-25',
    slugsTarot
  );
  const xml = generarSitemapXml(urls, lastmodPorUrl);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
