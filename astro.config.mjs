// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const projectId = env.PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = env.PUBLIC_SANITY_DATASET || 'production';

// Domínio canônico dos absolutos (og:image, canonical, sitemap).
// Preferir SITE no ambiente; em Vercel usa a production URL do projeto.
// TODO: quando DNS de elvafonseca.org apontar p/ este site, setar
// SITE=https://elvafonseca.org (ou o www) no projeto Vercel.
const site =
  process.env.SITE ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://elva-fonseca.vercel.app');

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: false,
      studioBasePath: '/admin'
    }),
    react(),
    sitemap({ filter: (page) => !page.includes('/admin') })
  ]
});