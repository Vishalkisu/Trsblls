import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-icons/fa', 'react-icons/md', 'react-icons/gi'],
  },
  server: {
    fs: {
      strict: false
    },
    middlewareMode: false
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
