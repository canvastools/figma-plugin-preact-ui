// @ts-nocheck

import type { Preview } from '@storybook/preact'
import { useEffect, useState } from 'preact/hooks'
import { addons } from '@storybook/preview-api'

import './fonts.css'
import './viewport.css'
import './docs.css'
import './stories.css'

// Load dist/style.css via a dynamic <link> and live-reload it when the file changes
if (typeof window !== 'undefined') {
  const LINK_ID = 'dist-style-css-link'
  const baseCssUrl = new URL('../dist/style.css', import.meta.url).pathname

  function setLinkHref(version) {
    let link = document.getElementById(LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = LINK_ID
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
    link.href = `${baseCssUrl}?v=${version}`
  }

  async function fetchSignature() {
    try {
      // Try lightweight HEAD first
      const head = await fetch(`${baseCssUrl}?sig=${Date.now()}`, {
        method: 'HEAD',
        cache: 'no-store',
      })
      const len = head.headers.get('content-length') || ''
      const mod = head.headers.get('last-modified') || ''
      const sigHead = `${len}:${mod}`
      if (sigHead !== ':') return sigHead
      // Fallback to GET and hash if headers are absent
      const res = await fetch(`${baseCssUrl}?sig=${Date.now()}`, {
        cache: 'no-store',
      })
      const text = await res.text()
      let hash = 0
      for (let i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) | 0
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
        method: 'alphabetical',
        order: ['Overview', 'Variables', 'Components', 'Docs'],
      },
    },
    docs: {
      source: {
        language: 'tsx',
      },
    },
    backgrounds: { disable: true, grid: { disable: true } },
    viewport: {
      viewports: {
        small: {
          name: '360',
          styles: {
            width: '360px',
            height: '400px',
          },
        },
        medium: {
          name: '480',
          styles: {
            width: '480px',
            height: '400px',
          },
        },
        large: {
          name: '800',
          styles: {
            width: '800px',
            height: '600px',
          },
        },
      },
      defaultViewport: 'large',
    },
  },
  globalTypes: {
    theme: {
      description: 'Figma theme',
      defaultValue: 'figma-light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: ['figma-light', 'figma-dark', 'figjam'],
        dynamicTitle: true,
      },
    },
    background: {
      description: 'Background',
      defaultValue: 'dotted',
      toolbar: {
        title: 'Background',
        icon: 'contrasting',
        items: ['dotted', 'primary', 'secondary', 'contrasting'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const ViewportDecorator = () => {
        const theme = context.globals.theme || 'figma-light'
        const background = context.globals.background || 'primary'
        const defaultViewport = context.parameters?.viewport?.defaultViewport || 'large'
        const [viewport, setViewport] = useState(defaultViewport)

        useEffect(() => {
          const rawViewport = (context.globals as any)?.viewport
          const nextViewport = rawViewport && rawViewport !== 'reset' ? rawViewport : defaultViewport
          setViewport(nextViewport)
        }, [context.globals?.viewport, defaultViewport])

        useEffect(() => {
          const removeClasses = ['figma-light', 'figma-dark', 'figjam']

          const applyToTargets = () => {
            const targets = Array.from(document.querySelectorAll('.sb-show-main, #storybook-root')) as HTMLElement[]
            targets.forEach((el) => {
              removeClasses.forEach((c) => el.classList.remove(c))
              el.classList.add(theme)
            })
          }

          applyToTargets()

          const observer = new MutationObserver(() => applyToTargets())
          observer.observe(document.body, { childList: true, subtree: true })

          return () => {
            observer.disconnect()
            const targets = Array.from(document.querySelectorAll('.sb-show-main, #storybook-root')) as HTMLElement[]
            targets.forEach((el) => {
              removeClasses.forEach((c) => el.classList.remove(c))
            })
          }
        }, [theme])

        return (
          <div id="storybook-viewport" class={`viewport-bg-${background} viewport-${viewport}`}>
            {story()}
          </div>
        )
      }

      return <ViewportDecorator />
    },
  ],
}

export default preview
