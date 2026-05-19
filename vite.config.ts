import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';
import path from 'path';
import { cspString } from './csp.config';
import vueDevTools from 'vite-plugin-vue-devtools'
import screenSize from '@greener-games/vite-screen-size'

function cspPlugin(): Plugin {
  return {
    name: 'vite-plugin-csp',
    transformIndexHtml() {
      return [
        {
          tag: 'meta',
          attrs: {
            'http-equiv': 'Content-Security-Policy',
            content: cspString,
          },
          injectTo: 'head-prepend',
        },
      ];
    },
  };
}

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    cspPlugin(),
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
