import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
        hello: "/hello-world.html",
        todo: "/todolist.html",
        table: "/table.html",
        contact: "/contact.html",
        task: "/task.html",
      },
    },
  },
});
