import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/renewlegal/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
