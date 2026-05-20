import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const gaId = env.VITE_GA_MEASUREMENT_ID

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
    plugins: [
      react(),
      {
        name: 'inject-google-analytics',
        transformIndexHtml(html) {
          if (mode !== 'production' || !gaId) return html

          const snippet = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', { anonymize_ip: true });
    </script>`

          return html.replace('</head>', `${snippet}\n  </head>`)
        },
      },
    ],
  }
})
