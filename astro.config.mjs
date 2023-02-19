import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8080,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
            @use "astro-scroll-observer/scss" as *;
          `,
        },
      },
    },
  },
});
