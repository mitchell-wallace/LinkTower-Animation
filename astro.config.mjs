import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { getRequiredIcons } from "./src/lib/getRequiredIcons";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://linktower.mitchellwallace.net",
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: getRequiredIcons(),
    }),
  ],
});
