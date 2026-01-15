import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import config from './config.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    watch: {
       usePolling: true
    },
    allowedHosts: config.ALLOWED_HOSTS
  }
})
