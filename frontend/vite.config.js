import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ Required for correct paths when hosted on Vercel
  build: {
    outDir: 'dist'
  }
});
