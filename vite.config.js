import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['fsevents'] // Prevents Rollup from trying to bundle it
    }
  },
  optimizeDeps: {
    exclude: ['fsevents']
  }
});
