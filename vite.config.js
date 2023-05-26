import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
// import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
      // '@/': `${__dirname}/src`
      // '@/': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
