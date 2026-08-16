import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://xingt-tang.github.io",
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
});
