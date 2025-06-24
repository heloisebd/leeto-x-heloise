import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      'design-tokens': path.resolve(__dirname, 'src/design-tokens'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      requests: path.resolve(__dirname, 'src/requests'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
});
