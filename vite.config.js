import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Public URL of the deployed site, used for canonical and social tags.
// Set SITE_URL when building, e.g. SITE_URL=https://example.com npm run build
const SITE_URL = (process.env.SITE_URL || 'https://TODO-SITE-URL').replace(/\/+$/, '')

// "/" for Vercel or a custom domain, "/<repo>/" for GitHub Pages project sites,
// e.g. BASE_PATH=/Said-El-Fariss-3d-portfolio/ npm run build
const BASE_PATH = process.env.BASE_PATH || '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_PATH,
  plugins: [
    react(),
    {
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    },
  ],
  build: {
    // three.js and drei are big but only loaded lazily, after first paint.
    chunkSizeWarningLimit: 1100,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            // React gets its own chunk first, so the three.js group (which
            // pulls in its dependencies) cannot capture it and make the
            // main bundle depend on three.js.
            {
              name: 'react',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 20,
            },
            {
              name: 'three',
              test: /node_modules[\\/](three|@react-three|three-stdlib|three-mesh-bvh|maath)[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})
