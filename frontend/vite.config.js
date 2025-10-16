import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <-- Esto es lo correcto para Render con dominio propio
  build: {
    outDir: 'dist'
  }
})
