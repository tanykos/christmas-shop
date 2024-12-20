import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true, // enable production source maps
    rollupOptions: {
      input: {
        index: './index.html',
        gifts: './gifts.html'
      }
    }
  },
  css: {
    devSourcemap: true // enable CSS source maps during development
  },
  base: "/tanykos/christmas-shop/"
})
