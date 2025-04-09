import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: { usePolling: true },
    open: true, // Abre automáticamente el navegador
  },
  plugins: [react()],
  base: "project-promo-48-module-3-team-2",
});
