import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import dts from 'vite-plugin-dts'
import themeCssPlugin from './scripts/vite-theme-css-plugin.js'
import appendThemesCssPlugin from './scripts/vite-append-themes-plugin.js'
import cssSplitPlugin from './scripts/vite-css-split-plugin.js'

export default defineConfig(({ command }) => ({
  plugins: [
    preact(),
    dts({
      tsconfigPath: './tsconfig.types.json',
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content: content.replace(/^\s*import\s+['"][^'"]+\.scss['"];?\s*$/gm, ''),
      }),
    }),
    themeCssPlugin({
      themesDir: 'src/themes',
      output: 'themes.css',
      defaultPrefix: '--pui',
    }),
    appendThemesCssPlugin({ themesFile: 'themes.css', styleFile: 'style.css' }),
    cssSplitPlugin({ globalScss: ['src/shared.scss'] }),
  ],
  build: {
    target: 'es2020',
    minify: true,
    lib: {
      entry: 'src/index.ts',
      name: 'figma-plugin-preact-ui',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['preact', 'preact/compat', 'preact/hooks'],
      output: {
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
}))
