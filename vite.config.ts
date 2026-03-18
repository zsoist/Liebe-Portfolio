import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Liebe-Portfolio/',
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
})
