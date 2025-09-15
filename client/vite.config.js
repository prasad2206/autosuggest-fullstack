import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000", // .NET backend default (change later if needed)
        changeOrigin: true,
        secure: false
      }
    }
  }
});
