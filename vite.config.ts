import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  server: {
    watch: {
      ignored: ['**/postgres-data/**']
    }
  }
});
