import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
// vite.config.js
// export default {
//   server: {
//     proxy: {
//       '/jobs': {
//         target: 'http://your-server-url',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/jobs/, '')
//       }
//     }
//   }
// }
