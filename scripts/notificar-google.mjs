#!/usr/bin/env node
import crypto from 'node:crypto';

const SITIO = 'https://paracumpleanos.com';
const SITEMAP_URL = `${SITIO}/sitemap.xml`;
const FEED_URL = `${SITIO}/rss.xml`;
const WEBSUB_HUB = 'https://pubsubhubbub.appspot.com/';
const GSC_SCOPE = 'https://www.googleapis.com/auth/webmasters';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';

function parseArgs(argv) {
  const opts = {
    dryRun: false,
    waitLiveSeconds: 0
  };
  for (const arg of argv) {
    if (arg === '--dry-run') opts.dryRun = true;
    else if (arg.startsWith('--wait-live=')) opts.waitLiveSeconds = Number(arg.slice('--wait-live='.length)) || 0;
  }
  return opts;
}

function base64UrlEncode(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function construirJwt(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64UrlEncode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64UrlEncode(
    JSON.stringify({
      iss: creds.client_email,
      scope: GSC_SCOPE,
      aud: creds.token_uri || GOOGLE_TOKEN_URL,
      iat: now,
      exp: now + 3600
    })
  );
  const unsigned = `${header}.${payload}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();
  const signature = base64UrlEncode(signer.sign(creds.private_key.replace(/\\n/g, '\n')));
  return `${unsigned}.${signature}`;
}

async function esperarSitioEnLinea(maxSeconds) {
  if (maxSeconds <= 0) return;
  const deadline = Date.now() + maxSeconds * 1000;
  let intento = 0;
  while (true) {
    intento++;
    try {
      const bust = `?t=${Date.now()}`;
      const [resMap, resRss] = await Promise.all([
        fetch(`${SITEMAP_URL}${bust}`),
        fetch(`${FEED_URL}${bust}`)
      ]);
      if (resMap.ok && resRss.ok) {
        console.log(`Sitio verificado en vivo: sitemap.xml y rss.xml responden HTTP 200 (intento ${intento}).`);
        return;
      }
      console.log(`Esperando propagacion en vivo (sitemap=${resMap.status}, rss=${resRss.status}, intento ${intento}).`);
    } catch (err) {
      console.log(`Error consultando en vivo (intento ${intento}): ${err.message}`);
    }
    if (Date.now() >= deadline) {
      console.log('Tiempo de espera agotado; continuando con notificaciones.');
      return;
    }
    await new Promise((r) => setTimeout(r, 5000));
  }
}

async function notificarWebSub(dryRun) {
  if (dryRun) {
    console.log(`[dry-run] WebSub POST ${WEBSUB_HUB} -> hub.mode=publish&hub.url=${FEED_URL}`);
    return;
  }
  const body = new URLSearchParams({
    'hub.mode': 'publish',
    'hub.url': FEED_URL
  });
  const res = await fetch(WEBSUB_HUB, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`WebSub HTTP ${res.status}: ${text}`);
  }
  console.log(`Google WebSub notificado (${FEED_URL}) -> HTTP ${res.status}`);
}

async function notificarSearchConsole(dryRun) {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  const endpoints = [`${SITIO}/`, 'sc-domain:paracumpleanos.com'].map(
    (prop) =>
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(prop)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`
  );

  if (dryRun) {
    console.log(`[dry-run] Google Search Console Sitemaps API PUT (${raw ? 'credencial detectada' : 'sin GSC_SERVICE_ACCOUNT_JSON'}):`);
    endpoints.forEach((e) => console.log(`  ${e}`));
    return;
  }

  if (!raw || !raw.trim()) {
    console.log(
      'Aviso GSC: no esta configurado el secreto GSC_SERVICE_ACCOUNT_JSON en GitHub Actions. ' +
      'Para enviar sitemap.xml automaticamente a Google Search Console en cada deploy, agrega el JSON de una cuenta de servicio como secreto GSC_SERVICE_ACCOUNT_JSON y dale permisos completos en Search Console.'
    );
    return;
  }

  const creds = JSON.parse(raw);
  const jwt = construirJwt(creds);
  const tokenRes = await fetch(creds.token_uri || GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString()
  });
  const tokenJson = await tokenRes.json();
  if (!tokenRes.ok || !tokenJson.access_token) {
    throw new Error(`Error OAuth2 Google (${tokenRes.status}): ${JSON.stringify(tokenJson)}`);
  }

  let enviado = false;
  for (const url of endpoints) {
    const putRes = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenJson.access_token}`,
        'Content-Length': '0'
      }
    });
    if (putRes.ok || putRes.status === 204) {
      console.log(`Google Search Console Sitemap reenviado: ${url} -> HTTP ${putRes.status}`);
      enviado = true;
      break;
    } else {
      const errBody = await putRes.text();
      console.log(`Intento GSC ${url} -> HTTP ${putRes.status}: ${errBody}`);
    }
  }
  if (!enviado) {
    throw new Error('No se pudo reenviar sitemap.xml en ninguna propiedad de Google Search Console.');
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  await esperarSitioEnLinea(opts.dryRun ? 0 : opts.waitLiveSeconds);
  await notificarWebSub(opts.dryRun);
  await notificarSearchConsole(opts.dryRun);
}

main().catch((err) => {
  console.error('Error notificando a Google:', err.message);
  process.exit(1);
});
