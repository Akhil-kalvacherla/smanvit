import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Don't hash images to avoid Cloudflare deployment issues
          if (assetInfo.name && /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return assetInfo.name;
          }
          return '[name]-[hash][extname]';
        },
      },
    },
  },
});
