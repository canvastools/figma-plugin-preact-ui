/** @jsx h */
import { h } from 'preact'

import type { Preview } from '@storybook/preact'

import './viewport.css'
import './figma-dark.css'
import './figma-light.css'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true, grid: { disable: true } },
    viewport: {
      viewports: {
        small: {
          name: '360',
          styles: {
            width: '360px',
            height: '400px'
          }
        },
        medium: {
          name: '480',
          styles: {
            width: '480px',
            height: '400px'
          }
        },
        large: {
          name: '800',
          styles: {
            width: '800px',
            height: '400px'
          }
        }
      },
      defaultViewport: '360'
    }
  },
  globalTypes: {
    theme: {
      description: 'Figma theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: ['light', 'dark'],
        dynamicTitle: true
      }
    },
    padding: {
      description: 'Viewport padding',
      defaultValue: 'true',
      toolbar: {
        title: 'Padding',
        icon: 'outline',
        items: ['true', 'false'],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light'
      const padding = context.globals.padding || 'true'

      return (
        <div id="storybook-viewport" class={`figma-${theme} viewport-padding-${padding}`}>
          {story()}
        </div>
      )
    }
  ]
}

export default preview
