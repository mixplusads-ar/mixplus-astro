import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src/', import.meta.url).pathname
      }
    }
  }
});
