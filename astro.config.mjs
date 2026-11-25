import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';

function asegurarActivosPublicos() {
  const archivos = [
    'logopc.png',
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png',
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'site.webmanifest'
  ];
  return {
    name: 'asegurar-activos-publicos',
    hooks: {
      'astro:config:setup': () => {
        const dirPublico = path.resolve('public');
        if (!fs.existsSync(dirPublico)) fs.mkdirSync(dirPublico, { recursive: true });
        for (const archivo of archivos) {
          const origen = path.resolve(archivo);
          const destino = path.resolve(dirPublico, archivo);
          if (!fs.existsSync(origen)) continue;
          const mtimeOrigen = fs.statSync(origen).mtimeMs;
          const mtimeDestino = fs.existsSync(destino) ? fs.statSync(destino).mtimeMs : 0;
          if (!fs.existsSync(destino) || mtimeOrigen > mtimeDestino) {
            fs.copyFileSync(origen, destino);
          }
        }
      }
    }
  };
}

const REDES_COMPARTIR = ['whatsapp', 'instagram', 'facebook', 'copiar'];
const MAX_HISTORIAL = 500;

function crearArchivoCompartidosVacio() {
  return {
    version: 1,
    actualizado: '',
    totales: { whatsapp: 0, instagram: 0, facebook: 0, copiar: 0 },
    totalGlobal: 0,
    items: {},
    historial: []
  };
}

function limpiarTextoApi(v, maxLen, fallback = '') {
  const s = String(v ?? '').replace(/\s+/g, ' ').trim();
  if (!s) return fallback;
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function limpiarUrlRelativaApi(v, slug) {
  const raw = String(v ?? '').trim();
  if (raw.startsWith('/') && !raw.startsWith('//')) return raw.slice(0, 220);
  const s = String(slug || '').replace(/^\/+|\/+$/g, '');
  return s ? `/${s}/` : '/';
}

function leerArchivoCompartidos(ruta) {
  try {
    if (!fs.existsSync(ruta)) {
      const vacio = crearArchivoCompartidosVacio();
      fs.mkdirSync(path.dirname(ruta), { recursive: true });
      fs.writeFileSync(ruta, JSON.stringify(vacio, null, 2) + '\n', 'utf8');
      return vacio;
    }
    const parsed = JSON.parse(fs.readFileSync(ruta, 'utf8'));
    if (!parsed || typeof parsed !== 'object') return crearArchivoCompartidosVacio();
    const base = crearArchivoCompartidosVacio();
    const rawItems = parsed.items && typeof parsed.items === 'object' ? parsed.items : {};
    for (const [clave, valor] of Object.entries(rawItems)) {
      if (!valor || typeof valor !== 'object') continue;
      const slug = limpiarTextoApi(valor.slug || clave, 140);
      if (!slug) continue;
      const r = valor.redes && typeof valor.redes === 'object' ? valor.redes : {};
      const redes = {
        whatsapp: Math.max(0, Math.floor(Number(r.whatsapp) || 0)),
        instagram: Math.max(0, Math.floor(Number(r.instagram) || 0)),
        facebook: Math.max(0, Math.floor(Number(r.facebook) || 0)),
        copiar: Math.max(0, Math.floor(Number(r.copiar) || 0))
      };
      const total = redes.whatsapp + redes.instagram + redes.facebook + redes.copiar;
      if (total <= 0) continue;
      base.items[slug] = {
        slug,
        titulo: limpiarTextoApi(valor.titulo, 180, slug),
        url: limpiarUrlRelativaApi(valor.url, slug),
        emoji: limpiarTextoApi(valor.emoji, 12, '🎂'),
        redes,
        total,
        ultimo: limpiarTextoApi(valor.ultimo, 40)
      };
      base.totales.whatsapp += redes.whatsapp;
      base.totales.instagram += redes.instagram;
      base.totales.facebook += redes.facebook;
      base.totales.copiar += redes.copiar;
    }
    base.totalGlobal =
      base.totales.whatsapp +
      base.totales.instagram +
      base.totales.facebook +
      base.totales.copiar;
    if (Array.isArray(parsed.historial)) {
      const vistos = new Set();
      for (const ev of parsed.historial) {
        if (!ev || typeof ev !== 'object') continue;
        if (!REDES_COMPARTIR.includes(ev.red)) continue;
        const slug = limpiarTextoApi(ev.slug, 140);
        if (!slug) continue;
        const id = limpiarTextoApi(ev.id, 80, `${slug}_${ev.red}_${ev.fecha || ''}`);
        if (vistos.has(id)) continue;
        vistos.add(id);
        base.historial.push({
          id,
          red: ev.red,
          slug,
          titulo: limpiarTextoApi(ev.titulo, 180, slug),
          url: limpiarUrlRelativaApi(ev.url, slug),
          emoji: limpiarTextoApi(ev.emoji, 12, '🎂'),
          pagina: limpiarUrlRelativaApi(ev.pagina, slug),
          fecha: limpiarTextoApi(ev.fecha, 40)
        });
      }
      base.historial.sort((a, b) => b.fecha.localeCompare(a.fecha));
      base.historial = base.historial.slice(0, MAX_HISTORIAL);
    }
    base.actualizado = limpiarTextoApi(parsed.actualizado, 40) || (base.historial[0]?.fecha ?? '');
    return base;
  } catch {
    return crearArchivoCompartidosVacio();
  }
}

function crearMiddlewareCompartidos() {
  const rutaArchivo = path.resolve('public', 'compartidos-historial.json');
  let cola = Promise.resolve();

  return function middlewareCompartidos(req, res, next) {
    const pathname = (req.url || '').split('?')[0];
    const esApi = pathname === '/api/compartidos' || pathname === '/api/compartidos/';

    if (req.method === 'GET' && (esApi || pathname === '/compartidos-historial.json')) {
      const datos = leerArchivoCompartidos(rutaArchivo);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.end(JSON.stringify(datos, null, 2));
      return;
    }

    if (req.method === 'POST' && esApi) {
      let body = '';
      let excedido = false;
      req.on('data', (chunk) => {
        body += chunk;
        if (body.length > 8192) {
          excedido = true;
          req.destroy();
        }
      });
      req.on('end', () => {
        if (excedido) {
          res.statusCode = 413;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: false, error: 'Payload demasiado grande' }));
          return;
        }
        let payload;
        try {
          payload = JSON.parse(body || '{}');
        } catch {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: false, error: 'JSON inválido' }));
          return;
        }
        const red = String(payload?.red || '').trim();
        const slug = limpiarTextoApi(payload?.slug, 140);
        if (!REDES_COMPARTIR.includes(red) || !slug) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: false, error: 'Red o slug inválido' }));
          return;
        }

        const fecha = new Date().toISOString();
        const id = limpiarTextoApi(
          payload?.id,
          80,
          `sh_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`
        );
        const titulo = limpiarTextoApi(payload?.titulo, 180, slug);
        const url = limpiarUrlRelativaApi(payload?.url, slug);
        const emoji = limpiarTextoApi(payload?.emoji, 12, '🎂');
        const pagina = limpiarUrlRelativaApi(payload?.pagina, slug);

        cola = cola
          .then(() => {
            const actual = leerArchivoCompartidos(rutaArchivo);
            if (!actual.historial.some((ev) => ev.id === id)) {
              const prev = actual.items[slug] || {
                slug,
                titulo,
                url,
                emoji,
                redes: { whatsapp: 0, instagram: 0, facebook: 0, copiar: 0 },
                total: 0,
                ultimo: ''
              };
              prev.titulo = titulo || prev.titulo;
              prev.url = url || prev.url;
              prev.emoji = emoji || prev.emoji;
              prev.redes[red] += 1;
              prev.total =
                prev.redes.whatsapp +
                prev.redes.instagram +
                prev.redes.facebook +
                prev.redes.copiar;
              prev.ultimo = fecha;
              actual.items[slug] = prev;
              actual.totales[red] += 1;
              actual.totalGlobal =
                actual.totales.whatsapp +
                actual.totales.instagram +
                actual.totales.facebook +
                actual.totales.copiar;
              actual.actualizado = fecha;
              actual.historial.unshift({ id, red, slug, titulo, url, emoji, pagina, fecha });
              actual.historial = actual.historial.slice(0, MAX_HISTORIAL);
              fs.mkdirSync(path.dirname(rutaArchivo), { recursive: true });
              fs.writeFileSync(rutaArchivo, JSON.stringify(actual, null, 2) + '\n', 'utf8');
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.setHeader('Cache-Control', 'no-store');
            res.end(JSON.stringify(actual));
          })
          .catch(() => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ ok: false, error: 'Error al guardar historial' }));
          });
      });
      return;
    }

    next();
  };
}

function archivoCompartidosIntegracion() {
  const handle = crearMiddlewareCompartidos();
  let devServer = null;
  return {
    name: 'pc-archivo-compartidos-api',
    hooks: {
      'astro:server:setup': ({ server }) => {
        devServer = server;
        server.middlewares.stack.unshift({ route: '', handle });
      },
      'astro:server:start': () => {
        if (devServer && devServer.middlewares && Array.isArray(devServer.middlewares.stack)) {
          const idx = devServer.middlewares.stack.findIndex((layer) => layer && layer.handle === handle);
          if (idx > 0) devServer.middlewares.stack.splice(idx, 1);
          if (idx !== 0) devServer.middlewares.stack.unshift({ route: '', handle });
        }
      }
    }
  };
}

function archivoCompartidosPreviewPlugin() {
  const handle = crearMiddlewareCompartidos();
  return {
    name: 'pc-archivo-compartidos-preview',
    configurePreviewServer(server) {
      server.middlewares.stack.unshift({ route: '', handle });
    }
  };
}

export default defineConfig({
  site: 'https://paracumpleanos.com',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false
  },
  integrations: [asegurarActivosPublicos(), archivoCompartidosIntegracion()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  },
  vite: {
    plugins: [archivoCompartidosPreviewPlugin()],
    server: {
      allowedHosts: true
    },
    preview: {
      allowedHosts: true
    }
  }
});
