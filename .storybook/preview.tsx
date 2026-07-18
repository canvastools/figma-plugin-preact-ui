import type { Preview } from '@storybook/preact-vite'
import { useEffect, useState } from 'preact/hooks'

import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/addon-docs/blocks'

import './fonts.css'
import './viewport.css'
import './docs.css'
import './stories.css'

// Load built dist/style.css (SCSS imports are stubbed in Storybook). When
// `npm run watch` rewrites the file, the watch-dist-style-css Vite plugin sends
// `pui:dist-style-update` and we bust the <link> href — same live update as TSX HMR.
if (typeof window !== 'undefined') {
  const LINK_ID = 'dist-style-css-link'
  const baseCssUrl = new URL('../dist/style.css', import.meta.url).pathname

  function setLinkHref(version: number) {
    let link = document.getElementById(LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = LINK_ID
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
    link.href = `${baseCssUrl}?v=${version}`
  }

  setLinkHref(Date.now())

  if (import.meta.hot) {
    import.meta.hot.on('pui:dist-style-update', () => {
      setLinkHref(Date.now())
    })
  }
}

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        method: 'alpha',
        order: ['Overview', 'Variables', 'Components', 'Docs'],
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
      controls: {
        sort: 'alpha',
      },
      source: {
        language: 'tsx',
      },
    },
    backgrounds: { disable: true, grid: { disable: true } },
    viewport: {
      options: {
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
        icon: 'paintbrush',
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
          // Since Storybook 9 the viewport global is an object: { value, isRotated }
          const rawViewport = context.globals?.viewport
          const value = typeof rawViewport === 'object' ? rawViewport?.value : rawViewport
          const nextViewport = value && value !== 'reset' ? value : defaultViewport
          setViewport(nextViewport)
        }, [defaultViewport])

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
