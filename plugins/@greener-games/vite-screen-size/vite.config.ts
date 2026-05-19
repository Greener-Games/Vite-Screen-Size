import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({ 
      entryRoot: 'src',
      outDir: 'dist',
      staticImport: true,
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ViteScreenSize',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: ['vite'],
      output: {
        globals: {
          vite: 'Vite'
        }
      }
    }
  }
});
