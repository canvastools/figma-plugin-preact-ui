import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { WindowResizer } from './WindowResizer'
import type { WindowResizerProps } from './WindowResizer.types'

const meta: Meta<WindowResizerProps> = {
  title: 'Layout/WindowResizer',
  component: WindowResizer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A plugin window resizer control. Demo window is non-resizable.',
      },
    },
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: { type: 'text' },
    },
    minWidth: {
      control: { type: 'number' },
      description: '<strong>*</strong>',
    },
    minHeight: {
      control: { type: 'number' },
      description: '<strong>*</strong>',
    },
    maxWidth: {
      control: { type: 'number' },
      description: '<strong>*</strong>',
    },
    maxHeight: {
      control: { type: 'number' },
      description: '<strong>*</strong>',
    },
    onResize: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: { 
  width: number
  height: number
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<WindowResizerProps>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    minWidth: 380,
    minHeight: 480,
    maxWidth: 800,
    maxHeight: 600,
    onResize: fn(),
  },
  globals: {
    background: 'secondary',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<WindowResizer 
  minWidth={380}
  minHeight={480}
  maxWidth={800}
  maxHeight={600}
  {...args} 
/>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
      <WindowResizer {...args} />
    </div>
  ),
}
