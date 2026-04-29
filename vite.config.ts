import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import screenSize from '@greener-games/vite-plugin-screen-size'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    screenSize({
      preset: 'tailwind',
      breakpoints: {
        'super-wide': 2000
      }
    })
  ],
})
