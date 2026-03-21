/**
 * Vite/Rollup plugin that appends the contents of one CSS asset
 * (default: themes.css) to another CSS asset (default: style.css)
 * during the build. Works in watch mode as it runs per build.
 */
import { promises as fs } from 'fs'
import path from 'path'

export function appendThemesCssPlugin(options = {}) {
  const { themesFile = 'themes.css', styleFile = 'style.css' } = options
  let outDir = 'dist'

  return {
    name: 'append-themes-to-style',
    apply: 'build',
    configResolved(config) {
      outDir = (config.build && config.build.outDir) || outDir
    },
    async writeBundle() {
      const themesPath = path.join(outDir, themesFile)
      const stylePath = path.join(outDir, styleFile)
      try {
        const themesCss = await fs.readFile(themesPath, 'utf8')
        let styleCss = ''
        try {
          styleCss = await fs.readFile(stylePath, 'utf8')
        } catch (_) {
          // style.css might not exist yet; we'll create it
          styleCss = ''
        }
        const sep1 = themesCss.endsWith('\n') ? '' : '\n'
        const sep2 = styleCss.length === 0 || styleCss.startsWith('\n') ? '' : '\n'
        // Prepend themes first, then existing style.css content
        const combined = `${themesCss}${sep1}${sep2}${styleCss}`
        await fs.writeFile(stylePath, combined, 'utf8')
      } catch (_) {
        // If themes.css doesn't exist, skip silently
      }
    },
  }
}

export default appendThemesCssPlugin
