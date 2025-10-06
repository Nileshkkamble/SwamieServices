// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://Nileshkkamble.github.io/SwamieServices/',
    outDir: './dist',
    server: {
        host: true, // This makes the server listen on all network interfaces
        port: 4321, // You can specify a port, or it defaults to 4321
      },
});
