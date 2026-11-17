import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';

function asegurarLogoPublico() {
  return {
    name: 'asegurar-logo-publico',
    hooks: {
      'astro:config:setup': () => {
        const origen = path.resolve('logopc.png');
        const destino = path.resolve('public', 'logopc.png');
        if (fs.existsSync(origen) && !fs.existsSync(destino)) {
          fs.copyFileSync(origen, destino);
        }
      }
    }
  };
}

export default defineConfig({
  site: 'https://paracumpleanos.com',
  trailingSlash: 'always',
  integrations: [asegurarLogoPublico()],
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
