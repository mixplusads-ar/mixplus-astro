// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// پیکربندی ساده و پایدار برای Cloudflare + الیاس @ به /src
export default defineConfig({
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    resolve: {
      alias: {
        '@': '/src', // حالا import '@/...' کار می‌کند
      },
    },
  },
});
