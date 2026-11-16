export const INDEXNOW_HOST = 'paracumpleanos.com';
export const INDEXNOW_KEY = 'e7b49c1a6d024f839c5b2e1d84a70f63';
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
export const INDEXNOW_ENDPOINT_BING = 'https://www.bing.com/indexnow';
export const INDEXNOW_ENDPOINT_GLOBAL = 'https://api.indexnow.org/indexnow';
export const INDEXNOW_MAX_BATCH = 10000;

export interface PayloadIndexNow {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export function extraerUrlsDeSitemap(xml: string, host: string = INDEXNOW_HOST): string[] {
  const prefijo = `https://${host}/`;
  const vistos = new Set<string>();
  const urls: string[] = [];

  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = m[1]
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .trim();

    if (url.startsWith(prefijo) && !vistos.has(url)) {
      vistos.add(url);
      urls.push(url);
    }
  }

  return urls;
}

export function dividirEnLotesIndexNow(urls: string[], maxPorLote: number = INDEXNOW_MAX_BATCH): string[][] {
  if (!Number.isInteger(maxPorLote) || maxPorLote < 1 || maxPorLote > INDEXNOW_MAX_BATCH) {
    throw new Error(`Tamano de lote invalido para IndexNow: ${maxPorLote}`);
  }
  const lotes: string[][] = [];
  for (let i = 0; i < urls.length; i += maxPorLote) {
    lotes.push(urls.slice(i, i + maxPorLote));
  }
  return lotes;
}

export function construirPayloadsIndexNow(
  urls: string[],
  opciones: { host?: string; key?: string; keyLocation?: string; maxPorLote?: number } = {}
): PayloadIndexNow[] {
  const host = opciones.host ?? INDEXNOW_HOST;
  const key = opciones.key ?? INDEXNOW_KEY;
  const keyLocation = opciones.keyLocation ?? `https://${host}/${key}.txt`;
  const maxPorLote = opciones.maxPorLote ?? INDEXNOW_MAX_BATCH;

  return dividirEnLotesIndexNow(urls, maxPorLote).map((urlList) => ({
    host,
    key,
    keyLocation,
    urlList
  }));
}
