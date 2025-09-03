// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   base : "/"
// });

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    // allow your Render domain
    allowedHosts: ['portfolio-frontend-vu2z.onrender.com'],
    port: Number(process.env.PORT) || 4173, // keep $PORT
    host: true, // allow 0.0.0.0
  },
})
