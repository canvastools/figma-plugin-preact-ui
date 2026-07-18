import type { StorybookConfig } from "@storybook/preact-vite"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import type { Plugin } from "vite"

const storybookDir = path.dirname(fileURLToPath(import.meta.url))
const distStyleCssPath = path.resolve(storybookDir, "../dist/style.css")
const distDir = path.dirname(distStyleCssPath)

/**
 * Storybook stubs component SCSS and loads the built dist/style.css instead.
 * When `npm run watch` rewrites that file, notify the preview so it can bust
 * the stylesheet <link> — same live feel as TSX HMR.
 */
function watchDistStyleCssPlugin(): Plugin {
  const EVENT = "pui:dist-style-update"

  return {
    name: "watch-dist-style-css",
    configureServer(server) {
      // Serve built CSS from disk so updates from vite build --watch are not
      // masked by Vite's CSS transform/cache for /dist/*.css.
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0]
        if (url !== "/dist/style.css") {
          next()
          return
        }

        fs.readFile(distStyleCssPath, (err, data) => {
          if (err) {
            next()
            return
          }
          res.setHeader("Content-Type", "text/css; charset=utf-8")
          res.setHeader("Cache-Control", "no-store")
          res.end(data)
        })
      })

      let debounce: ReturnType<typeof setTimeout> | undefined
      const notify = () => {
        clearTimeout(debounce)
        debounce = setTimeout(() => {
          server.ws.send({ type: "custom", event: EVENT, data: { t: Date.now() } })
        }, 50)
      }

      // Watch the dist directory: build --watch often replaces style.css via rename.
      let dirWatcher: fs.FSWatcher | undefined
      let retryTimer: ReturnType<typeof setInterval> | undefined

      const startDirWatcher = () => {
        if (dirWatcher) return
        try {
          if (!fs.existsSync(distDir)) return
          dirWatcher = fs.watch(distDir, (_event, filename) => {
            if (filename && filename !== "style.css") return
            notify()
          })
          dirWatcher.on("error", () => {
            dirWatcher?.close()
            dirWatcher = undefined
          })
        } catch {
          // dist may appear later after the first watch build
        }
      }

      startDirWatcher()
      retryTimer = setInterval(startDirWatcher, 2000)

      server.httpServer?.once("close", () => {
        clearTimeout(debounce)
        clearInterval(retryTimer)
        dirWatcher?.close()
      })
    },
  }
}

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
  viteFinal: async (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH
    }

    // Ignore all SCSS imports by mapping them to a virtual JS module
    config.plugins = config.plugins || []
    const VIRTUAL_PREFIX = "\0virtual-empty-scss:"
    config.plugins.push({
      name: "ignore-all-scss",
      enforce: "pre",
      resolveId(id) {
        if (id.includes(".scss")) return VIRTUAL_PREFIX + id
        return null
      },
      load(id) {
        if (id.startsWith(VIRTUAL_PREFIX)) return "export default {}\n"
        return null
      },
    })
    config.plugins.push(watchDistStyleCssPlugin())

    return config
  },
}
export default config
