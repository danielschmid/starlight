// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

const NETLIFY_PREVIEW_SITE =
  process.env.CONTEXT !== "production" && process.env.DEPLOY_PRIME_URL;
const site = NETLIFY_PREVIEW_SITE || "https://edhea.netlify.app/";

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Starlight",
      locales: {
        root: {
          label: "Français",
          lang: "fr",
        },
      },
      social: {
        github: "https://github.com/danielschmid/starlight",
      },
      sidebar: [
        {
          label: "WEB",
          collapsed: false,
          autogenerate: { directory: "web", collapsed: true },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
