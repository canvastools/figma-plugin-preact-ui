import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

export default defineConfig(({ command }) => ({
  plugins: [preact()],
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
