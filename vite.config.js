import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    // No source maps in production: smaller deploys and no readable source for visitors.
    sourcemap: false,
  },
})
