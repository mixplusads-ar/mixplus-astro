import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.js'; // ← حتما .js

export default defineConfig({
  site: site.domain,              // خیلی مهم برای sitemap و canonical
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  vite: {
    resolve: { alias: { '@': '/src' } },
  },
});
