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

export const GET: APIRoute = () => {
  const urls = generarUrlsSitio({
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
  });

  const fechaHoy = new Date().toISOString().slice(0, 10);
  const xml = generarSitemapXml(urls, fechaHoy);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
