import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MUMU',
        short_name: 'PWA',
        description: '3C配件批發網站',
        theme_color: '#e3e8db',
        background_color: '#455c35',
        display: 'standalone',
        icons: [
          {
            src: '/app-icon/196.png',
            sizes: '196x196',
            type: 'image/png'
          },
          {
            src: '/p512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
