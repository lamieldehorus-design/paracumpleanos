import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paracumpleanos.com',
  integrations: [
    sitemap({
      entryLimit: 1000,
      lastmod: new Date('2026-11-15')
    })
  ],
  trailingSlash: 'always',
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
