import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      try {
        const distIndex = path.resolve(__dirname, 'dist', 'index.html');
        const dist404 = path.resolve(__dirname, 'dist', '404.html');
        if (fs.existsSync(distIndex)) {
          fs.copyFileSync(distIndex, dist404);
        }
      } catch (e) {}
    }
  };
}

export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
