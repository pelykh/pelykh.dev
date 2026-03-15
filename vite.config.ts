import { devtools } from "@tanstack/devtools-vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { fileURLToPath, URL } from "node:url";

const coolodenkaStaticPlugin = {
	name: "coolodenka-static",
	configureServer(server: import("vite").ViteDevServer) {
		server.middlewares.use((req, _res, next) => {
			if (req.url === "/coolodenka" || req.url === "/coolodenka/") {
				req.url = "/coolodenka.html";
			}
			next();
		});
	},
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    coolodenkaStaticPlugin,
    devtools(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
