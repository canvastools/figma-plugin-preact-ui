import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import themeCssPlugin from "./scripts/vite-theme-css-plugin.js"
import appendThemesCssPlugin from "./scripts/vite-append-themes-plugin.js"

export default defineConfig(({ command }) => ({
  plugins: [
    preact(),
    themeCssPlugin({
      themesDir: "src/themes",
      output: "themes.css",
      defaultPrefix: "--pui",
    }),
    appendThemesCssPlugin({ themesFile: "themes.css", styleFile: "style.css" }),
  ],
  build: {
    minify: true,
    lib: {
      entry: "src/index.ts",
      name: "figma-plugin-preact-ui",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["preact", "preact/compat", "preact/hooks"],
      output: {
        exports: "named",
      },
    },
  },
}))
