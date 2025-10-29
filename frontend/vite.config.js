import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, 
  },
  preview: {
    port: 4173, 
    strictPort: true,
  },

  resolve: {
    alias: {},
  },
})
