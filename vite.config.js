import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Ganti 'nama-repository-anda' sesuai nama repo di GitHub nanti (misal: 'portfolio')
export default defineConfig({
  plugins: [vue()],
  base: '/portofolio/', 
})