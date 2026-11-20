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
import { PAISES_HITOS } from '../data/hitos-historicos.ts';
import { ZODIACOS } from '../lib/horoscopo.ts';

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
    GUIAS_EDITORIALES.map((g) => g.slug),
    ZODIACOS.map((s) => s.slug),
    PAISES_HITOS.map((p) => p.slug)
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
