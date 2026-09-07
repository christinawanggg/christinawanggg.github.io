// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thechristinawang.com',
  integrations: [mdx()],
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
