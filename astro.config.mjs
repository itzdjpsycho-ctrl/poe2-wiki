import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://itzdjpsycho-ctrl.github.io',
  base: '/poe2-wiki/',
  integrations: [tailwind()],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
