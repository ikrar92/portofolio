import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // <-- Pastikan pakai slash / bukan titik .
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  base: '/',
})