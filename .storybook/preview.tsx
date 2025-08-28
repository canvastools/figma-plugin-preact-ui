// @ts-nocheck

import type { Preview } from "@storybook/preact"

import "./fonts.css"
import "./viewport.css"
import "./docs.css"

// Load dist/style.css via a dynamic <link> and live-reload it when the file changes
if (typeof window !== "undefined") {
  const LINK_ID = "dist-style-css-link"
  const baseCssUrl = new URL("../dist/style.css", import.meta.url).pathname

  function setLinkHref(version) {
    let link = document.getElementById(LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement("link")
      link.id = LINK_ID
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }
    link.href = `${baseCssUrl}?v=${version}`
  }

  async function fetchSignature() {
    try {
      // Try lightweight HEAD first
      const head = await fetch(`${baseCssUrl}?sig=${Date.now()}`, {
        method: "HEAD",
        cache: "no-store",
      })
      const len = head.headers.get("content-length") || ""
      const mod = head.headers.get("last-modified") || ""
      const sigHead = `${len}:${mod}`
      if (sigHead !== ":") return sigHead
      // Fallback to GET and hash if headers are absent
      const res = await fetch(`${baseCssUrl}?sig=${Date.now()}`, {
        cache: "no-store",
      })
      const text = await res.text()
      let hash = 0
      for (let i = 0; i < text.length; i++)
        hash = (hash * 31 + text.charCodeAt(i)) | 0
      return `${text.length}:${hash}`
    } catch (_) {
      return null
    }
  }

  ;(async () => {
    setLinkHref(Date.now())
    let lastSig = await fetchSignature()
    if (import.meta.env.DEV) {
      setInterval(async () => {
        const sig = await fetchSignature()
        if (sig && lastSig && sig !== lastSig) {
          setLinkHref(Date.now())
        }
        if (sig) lastSig = sig
      }, 1000)
    }
  })()
}

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Overview", "Components", "Docs"],
      },
    },
    backgrounds: { disable: true, grid: { disable: true } },
    viewport: {
      viewports: {
        small: {
          name: "360",
          styles: {
            width: "360px",
            height: "400px",
          },
        },
        medium: {
          name: "480",
          styles: {
            width: "480px",
            height: "400px",
          },
        },
        large: {
          name: "800",
          styles: {
            width: "800px",
            height: "400px",
          },
        },
      },
      defaultViewport: "large",
    },
  },
  globalTypes: {
    theme: {
      description: "Figma theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
    padding: {
      description: "Viewport padding",
      defaultValue: "true",
      toolbar: {
        title: "Padding",
        icon: "outline",
        items: ["true", "false"],
        dynamicTitle: true,
      },
    },
    debug: {
      description: "Debug background",
      defaultValue: "false",
      toolbar: {
        title: "Debug background",
        icon: "contrast",
        items: ["true", "false"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || "light"
      const padding = context.globals.padding || "true"
      const debug = context.globals.debug || "false"

      return (
        <div
          id="storybook-viewport"
          class={`figma-${theme} viewport-padding-${padding} viewport-debug-bg-${debug}`}
        >
          {story()}
        </div>
      )
    },
  ],
}

export default preview
