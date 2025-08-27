import { promises as fs } from "fs"
import path from "path"
import { glob } from "glob"
import vm from "vm"

/**
 * Vite plugin to generate a CSS file with custom properties from theme token files.
 * - Scans a directory (default: src/themes) for .ts files (excluding index.ts)
 * - Each file should export a constant object with shape: ColorTokenTree
 * - Recursively flattens variables into CSS custom properties: `${prefix}-${path-joined}`
 * - Emits a single CSS asset (default: theme.css) into dist and watches for changes in watch mode
 */
export function themeCssPlugin(options = {}) {
  const {
    themesDir = "src/themes",
    output = "theme.css",
    defaultPrefix = "--pui",
  } = options

  /**
   * Extracts the first object literal assigned in a file after a const declaration.
   * Assumes files follow the pattern: `const NAME: Type = { ... }` and then `export { NAME }`.
   */
  function extractFirstObjectLiteral(source) {
    const eqIndex = source.indexOf("=")
    if (eqIndex === -1) return null
    let i = source.indexOf("{", eqIndex)
    if (i === -1) return null
    let depth = 0
    let start = i
    for (; i < source.length; i++) {
      const ch = source[i]
      if (ch === "{") depth++
      else if (ch === "}") {
        depth--
        if (depth === 0) {
          const end = i
          return source.slice(start, end + 1)
        }
      }
    }
    return null
  }

  function parseThemeObjectFromFileContent(content) {
    // Strip type-only imports/exports to simplify eval
    const cleaned = content
      .replace(/^import\s+type\s+.*$/gm, "")
      .replace(/^export\s+type\s+.*$/gm, "")

    const objectLiteral = extractFirstObjectLiteral(cleaned)
    if (!objectLiteral) return null

    // Evaluate object literal in a sandbox
    try {
      const script = new vm.Script(`(${objectLiteral})`)
      const result = script.runInNewContext({})
      return result
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to parse theme file:", err)
      return null
    }
  }

  function flattenVariables(prefix, obj, pathSegments = []) {
    /** @type {Record<string, string>} */
    const map = {}
    if (!obj || typeof obj !== "object") return map
    for (const key of Object.keys(obj)) {
      const value = obj[key]
      const nextPath = [...pathSegments, String(key)]
      if (value != null && typeof value === "object") {
        Object.assign(map, flattenVariables(prefix, value, nextPath))
      } else {
        const varName = `${prefix}-${nextPath.join("-")}`
        map[varName] = String(value)
      }
    }
    return map
  }

  async function loadAllThemeTokens(dir) {
    const pattern = path.posix.join(dir.replaceAll("\\", "/"), "**/*.ts")
    const files = (await glob(pattern, { windowsPathsNoEscape: true })).filter(
      (p) => !p.endsWith("/index.ts") && !p.endsWith("\\index.ts")
    )

    const results = []
    for (const file of files) {
      try {
        const content = await fs.readFile(file, "utf8")
        const obj = parseThemeObjectFromFileContent(content)
        if (obj && obj.variables && (obj.class || obj.className)) {
          results.push({
            file,
            className: obj.class || obj.className,
            prefix: obj.prefix || defaultPrefix,
            variables: obj.variables,
          })
        }
      } catch (_) {
        // ignore file read errors
      }
    }
    return results
  }

  function generateCssFromTokens(tokenGroups) {
    const blocks = []
    for (const group of tokenGroups) {
      const selector =
        typeof group.className === "string" &&
        (group.className.startsWith(":") || group.className.startsWith("."))
          ? group.className
          : `.${group.className}`
      const map = flattenVariables(
        group.prefix || defaultPrefix,
        group.variables
      )
      const lines = Object.entries(map)
        .map(([name, value]) => `  ${name}: ${value};`)
        .join("\n")
      blocks.push(`${selector} {\n${lines}\n}`)
    }
    return blocks.join("\n\n") + (blocks.length ? "\n" : "")
  }

  return {
    name: "generate-theme-css",
    apply: "build",
    async buildStart() {
      // Watch all theme files so rebuilds happen in --watch
      const pattern = path.posix.join(
        themesDir.replaceAll("\\", "/"),
        "**/*.ts"
      )
      const files = await glob(pattern, { windowsPathsNoEscape: true })
      for (const f of files) this.addWatchFile(f)
    },
    async generateBundle() {
      const tokens = await loadAllThemeTokens(themesDir)
      const css = generateCssFromTokens(tokens)
      this.emitFile({ type: "asset", fileName: output, source: css })
    },
  }
}

export default themeCssPlugin
