import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   host: true, // Escucha en todas las interfaces de red
  //   port: 5173, // O cualquier puerto que prefieras
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@axios": fileURLToPath(new URL("./src/config/axios", import.meta.url)),
    },
  },
});
