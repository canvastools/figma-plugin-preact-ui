import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import dts from "vite-plugin-dts"

export default defineConfig(({ command }) => ({
  plugins: [
    preact(),
    command === "build" &&
      dts({
        exclude: ["**/*.stories.ts", "**/*.stories.tsx", "**/*.scss"],
      }),
  ].filter(Boolean),
  build: {
    lib: {
      entry: "src/index.ts",
      name: "figma-plugin-preact-ui",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["preact", "preact/compat", "preact/hooks"],
    },
  },
}))
