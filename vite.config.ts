import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'

/** Absolute origin for Open Graph / WhatsApp link previews (no trailing slash). */
function resolveSiteUrl(mode: string): string {
  const env = loadEnv(mode, process.cwd(), '')
  const fromEnv = env.VITE_SITE_URL?.trim().replace(/\/$/, '')
  if (fromEnv) {
    return fromEnv
  }
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim()
  if (vercelHost) {
    return `https://${vercelHost.replace(/^https?:\/\//, '')}`
  }
  return ''
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const siteUrl = resolveSiteUrl(mode)
  // So %VITE_SITE_URL% in index.html is replaced at build (and on Vercel).
  process.env.VITE_SITE_URL = siteUrl

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
