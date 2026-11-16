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

  const fechaHoy = new Date().toISOString().slice(0, 10);
  const xml = generarSitemapXml(urls, fechaHoy);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
