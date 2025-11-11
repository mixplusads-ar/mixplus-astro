import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { site as siteData } from './src/data/site.js'; // اگر TS داری از .ts به .js transpile می‌شود

export default defineConfig({
  site: siteData.domain, // ← خیلی مهم برای ساخت صحیح URLها
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  vite: {
    resolve: { alias: { '@': '/src' } },
  },
});
