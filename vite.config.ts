import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const SITE_URL = 'https://zimka.com.br'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'html-site-url',
      transformIndexHtml(html) {
        return html.replaceAll('%SITE_URL%', SITE_URL)
      },
    },
  ],
})
