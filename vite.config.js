import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: './', // IMPORTANT: relative paths for Chrome
  build: {
    outDir: 'dist', // or "build" if you prefer
    emptyOutDir: true
  }
})
