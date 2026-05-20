import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';
import path from 'path';
import vueDevTools from 'vite-plugin-vue-devtools'
import screenSize from '@greener-games/vite-screen-size'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    checker({
      enableBuild: false,
      typescript: true,
      vueTsc: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint --ext .ts,.tsx,.vue src'
      },
      stylelint: { lintCommand: 'stylelint "./**/*.{css,vue}"' },
    }),
    vueDevTools(),
    screenSize({
      preset: 'tailwind',
      breakpoints: {
        'super-wide': 2000
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
});