import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5299",
        changeOrigin: true,
      },
      "/actions": {
        target: "http://localhost:5299",
        changeOrigin: true,
      },
      "/j": {
        target: "http://localhost:5299",
        changeOrigin: true,
        bypass(req) {
          return req.url?.endsWith(".json") ? undefined : "/index.html";
        },
      },
    },
  },
  worker: {
    format: "es",
  },
});
