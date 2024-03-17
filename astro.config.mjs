import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import Icons from "unplugin-icons/vite";
import million from "million/compiler";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
      million.vite({
        mode: "react",
        server: true,
        auto: {
          threshold: 0.01,
          skip: ["useBadHook", /badVariable/g],
        },
      }),
    ],
  },
});
