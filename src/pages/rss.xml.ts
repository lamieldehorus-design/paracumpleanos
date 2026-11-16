import type { APIRoute } from 'astro';
import { hubs, mensajesDe } from '../lib/contenido.ts';
import { GUIAS_EDITORIALES } from '../data/guias.ts';
import { generarRssXml } from '../lib/google-notify.ts';

export const GET: APIRoute = () => {
  const xml = generarRssXml(hubs, mensajesDe, new Date(), GUIAS_EDITORIALES);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
};
