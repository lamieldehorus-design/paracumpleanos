import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paracumpleanos.com',
  integrations: [sitemap()],
  trailingSlash: 'always'
});
