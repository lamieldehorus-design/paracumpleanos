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
import { generarUrlsSitio, generarSitemapXml } from '../lib/catalogo.ts';
import { GUIAS_EDITORIALES } from '../data/guias.ts';

export const GET: APIRoute = () => {
  const urls = generarUrlsSitio(
    {
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
    },
    GUIAS_EDITORIALES.map((g) => g.slug)
  );

  // No se informa lastmod mientras el proyecto no disponga de fechas
  // reales de modificación por URL. Evita simular que todo cambió en cada build.
  const xml = generarSitemapXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
