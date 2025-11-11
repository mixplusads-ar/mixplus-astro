/* Mini reset (چون Tailwind Preflight خاموش است) */
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
ul, ol { list-style: none; margin: 0; padding: 0; }
a { text-decoration: none; color: inherit; }

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  alias: {
    '@': './src',          // <— این خط جدید
  },
});
