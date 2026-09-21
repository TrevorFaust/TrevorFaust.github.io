// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://trevorfaust.github.io",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/alt"),
    }),
  ],
});
