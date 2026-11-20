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

export default defineConfig({
  site: 'https://paracumpleanos.com',
  trailingSlash: 'always',
  integrations: [asegurarActivosPublicos()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  },
  vite: {
    server: {
      allowedHosts: true
    },
    preview: {
      allowedHosts: true
    }
  }
});
