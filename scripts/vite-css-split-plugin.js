import path from 'path'

/**
 * Vite plugin that emits per-component CSS files for CSS tree-shaking.
 *
 * Each component's JS chunk gets a CSS import injected, and the corresponding
 * CSS file is emitted alongside it. Consumer bundlers then only include CSS
 * for the components actually imported.
 *
 * The monolithic style.css is still produced for backward compatibility.
 *
 * Consumer usage (tree-shakeable):
 *   import "figma-plugin-preact-ui/dist/themes.css"  // theme variables (required)
 *   import { Button } from "figma-plugin-preact-ui"   // auto-imports Button CSS only
 *
 * Consumer usage (backward compat — all styles at once):
 *   import "figma-plugin-preact-ui/dist/style.css"    // themes + all component CSS
 *   import { Button } from "figma-plugin-preact-ui"
 *
 * Options:
 * - globalScss: array of SCSS file paths (relative to project root) whose CSS
 *   output should be stripped from individual component CSS files to avoid
 *   duplicating global/base styles (e.g. body, #root resets in shared.scss).
 *   Their compiled CSS is appended to themes.css so it's available in the
 *   tree-shakeable flow.
 * - themesFileName: the name of the themes CSS asset to append global styles to
 *   (default: "themes.css").
 */
export function cssSplitPlugin(options = {}) {
  const { globalScss = [], themesFileName = 'themes.css' } = options

  let projectRoot = ''

  // Map: absolute path of source module (.tsx/.ts) → absolute path of its .scss import
  const moduleScssMap = new Map()

  return {
    name: 'css-split',
    apply: 'build',

    configResolved(config) {
      projectRoot = config.root
    },

    /**
     * During transform, record which source modules import SCSS files.
     * We don't modify anything here — Vite's CSS pipeline processes them normally.
     */
    transform(code, id) {
      if (!id.match(/\.(tsx?|jsx?)$/) || id.includes('node_modules')) {
        return null
      }

      const match = code.match(/import\s+["']([^"']+\.scss)["']/)
      if (match) {
        const scssAbsPath = path.resolve(path.dirname(id), match[1])
        moduleScssMap.set(id, scssAbsPath)
      }

      return null
    },

    /**
     * After bundle generation:
     * 1. Compile each tracked SCSS individually with sass
     * 2. Strip global (shared) CSS from each component's output
     * 3. Emit individual CSS files alongside their JS chunks
     * 4. Inject `import "./chunk.css"` into each JS chunk
     */
    async generateBundle(_opts, bundle) {
      let sass
      try {
        sass = await import('sass')
        if (sass.default) sass = sass.default
      } catch {
        console.warn(
          "[css-split] 'sass' package not found. Per-component CSS will not be emitted.\n" +
            '  Install with: npm install -D sass',
        )
        return
      }

      // 1. Compile global SCSS files to get the CSS text that should be stripped
      //    from individual component CSS (e.g. body{} resets from shared.scss)
      const globalCssBlocks = []
      for (const rel of globalScss) {
        const abs = path.resolve(projectRoot, rel)
        try {
          const result = sass.compile(abs, { style: 'compressed' })
          if (result.css && result.css.trim().length > 0) {
            globalCssBlocks.push(result.css.trim())
          }
        } catch {
          // ignore — file may not exist
        }
      }

      // 1b. Append global CSS to themes.css so it's available in the
      //     tree-shakeable flow (import "themes.css" + per-component CSS)
      if (globalCssBlocks.length > 0) {
        const themesAsset = Object.values(bundle).find((asset) => asset.type === 'asset' && asset.fileName === themesFileName)
        if (themesAsset) {
          const sep = themesAsset.source.endsWith('\n') ? '' : '\n'
          themesAsset.source += sep + globalCssBlocks.join('\n') + '\n'
        }
      }

      // 2. Compile each component SCSS individually
      const compiledCss = new Map()
      const uniqueScss = new Set(moduleScssMap.values())

      for (const scssPath of uniqueScss) {
        try {
          const result = sass.compile(scssPath, { style: 'compressed' })
          let css = result.css || ''

          // Strip global CSS blocks to avoid duplicating base/reset styles
          for (const block of globalCssBlocks) {
            css = css.replace(block, '')
          }
          css = css.trim()

          if (css.length > 0) {
            compiledCss.set(scssPath, css)
          }
        } catch (e) {
          console.warn(`[css-split] Failed to compile ${scssPath}: ${e.message}`)
        }
      }

      // 3. For each JS chunk, emit a CSS file and inject the import
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type !== 'chunk' || !chunk.facadeModuleId) continue

        const scssPath = moduleScssMap.get(chunk.facadeModuleId)
        if (!scssPath || !compiledCss.has(scssPath)) continue

        const cssFileName = fileName.replace(/\.js$/, '.css')

        // Emit the individual CSS file
        this.emitFile({
          type: 'asset',
          fileName: cssFileName,
          source: compiledCss.get(scssPath),
        })

        // Inject CSS import into the JS chunk
        // Vite replaces SCSS imports with "/* empty css */" comments — replace that,
        // or prepend the import if the comment isn't found
        const cssBaseName = path.basename(cssFileName)
        if (chunk.code.includes('/* empty css')) {
          chunk.code = chunk.code.replace(/\/\*\s*empty css\s*\*\//, `import "./${cssBaseName}";`)
        } else {
          chunk.code = `import "./${cssBaseName}";\n${chunk.code}`
        }
      }
    },
  }
}

export default cssSplitPlugin
