import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Blog/',
  plugins: [react(), svgr(),
  ],
  build: {
    chunkSizeWarningLimit: 1000
},
})
