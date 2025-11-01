import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
    visualizer({ filename: 'dist/stats.html', open: false })
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});