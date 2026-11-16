import crypto from 'node:crypto';
import { SITIO, MARCA, nombreHub } from './catalogo';

export const WEBSUB_HUB = 'https://pubsubhubbub.appspot.com/';
export const SITEMAP_URL = `${SITIO}/sitemap.xml`;
export const FEED_URL = `${SITIO}/rss.xml`;
export const GSC_SCOPE = 'https://www.googleapis.com/auth/webmasters';
export const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';

export interface ServiceAccountCreds {
  client_email: string;
  private_key: string;
  token_uri?: string;
}

function escaparXml(valor: string): string {
  return String(valor || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function base64UrlEncode(input: string | Buffer): string {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

export function generarRssXml(
  hubs: any[],
  mensajesDe: (slug: string) => any[],
  fechaBuild: Date = new Date(),
  guias: any[] = []
): string {
  const pubDate = fechaBuild.toUTCString();
  const destacados = hubs.slice(0, 60);

  const itemsGuias = guias.slice(0, 10).map((g) => {
    const enlace = `${SITIO}/guias/${g.slug}/`;
    const fechaItem = g.fechaPublicacion ? new Date(`${g.fechaPublicacion}T12:00:00Z`) : fechaBuild;
    const pubItem = Number.isNaN(fechaItem.getTime()) ? pubDate : fechaItem.toUTCString();
    return (
      '    <item>\n' +
      `      <title>${escaparXml(g.titulo || g.h1)}</title>\n` +
      `      <link>${escaparXml(enlace)}</link>\n` +
      `      <guid isPermaLink="true">${escaparXml(enlace)}</guid>\n` +
      `      <pubDate>${escaparXml(pubItem)}</pubDate>\n` +
      `      <description>${escaparXml(g.descripcion || g.resumen || '')}</description>\n` +
      '    </item>'
    );
  });

  const itemsHubs = destacados.map((h) => {
    const msgs = mensajesDe(h.slug) || [];
    const ultimo = msgs[msgs.length - 1];
    const enlace = `${SITIO}/${h.slug}/`;
    const titulo = h.titulo || nombreHub(h);
    const resumen = ultimo
      ? `${h.meta || h.lead || ''} — Ejemplo destacado: "${ultimo.titulo}"`
      : h.meta || h.lead || '';
    const fechaItem = h.actualizado ? new Date(`${h.actualizado}T12:00:00Z`) : fechaBuild;
    const pubItem = Number.isNaN(fechaItem.getTime()) ? pubDate : fechaItem.toUTCString();
    return (
      '    <item>\n' +
      `      <title>${escaparXml(titulo)}</title>\n` +
      `      <link>${escaparXml(enlace)}</link>\n` +
      `      <guid isPermaLink="true">${escaparXml(enlace)}</guid>\n` +
      `      <pubDate>${escaparXml(pubItem)}</pubDate>\n` +
      `      <description>${escaparXml(resumen)}</description>\n` +
      '    </item>'
    );
  });

  const items = itemsGuias.concat(itemsHubs).join('\n');

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n' +
    '  <channel>\n' +
    `    <title>${MARCA} - Felicitaciones de cumpleaños originales</title>\n` +
    `    <link>${SITIO}/</link>\n` +
    `    <description>Últimas categorías actualizadas y mensajes originales en ${MARCA}.</description>\n` +
    '    <language>es-AR</language>\n' +
    `    <lastBuildDate>${escaparXml(pubDate)}</lastBuildDate>\n` +
    `    <atom:link rel="self" type="application/rss+xml" href="${FEED_URL}" />\n` +
    `    <atom:link rel="hub" href="${WEBSUB_HUB}" />\n` +
    items +
    '\n  </channel>\n' +
    '</rss>\n'
  );
}

export function parsearCredencialesGsc(rawJson: string): ServiceAccountCreds {
  const parsed = JSON.parse(rawJson);
  if (!parsed || typeof parsed.client_email !== 'string' || typeof parsed.private_key !== 'string') {
    throw new Error('GSC_SERVICE_ACCOUNT_JSON invalido: faltan client_email o private_key');
  }
  return {
    client_email: parsed.client_email,
    private_key: parsed.private_key.replace(/\\n/g, '\n'),
    token_uri: typeof parsed.token_uri === 'string' ? parsed.token_uri : GOOGLE_TOKEN_URL
  };
}

export function construirJwtGsc(
  creds: ServiceAccountCreds,
  nowSeconds: number = Math.floor(Date.now() / 1000)
): string {
  const header = base64UrlEncode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64UrlEncode(
    JSON.stringify({
      iss: creds.client_email,
      scope: GSC_SCOPE,
      aud: creds.token_uri || GOOGLE_TOKEN_URL,
      iat: nowSeconds,
      exp: nowSeconds + 3600
    })
  );
  const sinFirma = `${header}.${payload}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(sinFirma);
  signer.end();
  const firma = base64UrlEncode(signer.sign(creds.private_key));
  return `${sinFirma}.${firma}`;
}

export function construirEndpointsGsc(sitemapUrl: string = SITEMAP_URL): string[] {
  const propiedades = [`${SITIO}/`, 'sc-domain:paracumpleanos.com'];
  const feedPath = encodeURIComponent(sitemapUrl);
  return propiedades.map(
    (prop) => `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(prop)}/sitemaps/${feedPath}`
  );
}
