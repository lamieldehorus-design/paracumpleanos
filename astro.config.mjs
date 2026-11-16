import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://paracumpleanos.com',
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
