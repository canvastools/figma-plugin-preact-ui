import { Meta, StoryObj } from '@storybook/preact-vite'

import { spacing } from '../themes'

import { SimpleVariableTable } from './utils'

const meta: Meta = {
  title: 'Variables/Spacing',
  parameters: {
    docs: {
      source: {
        code: `
// CSS

.element {
  padding: var(--pui-spacing-400);
}

// JS

import { spacing } from 'figma-plugin-preact-ui'

const style = {
  padding: spacing.variables['400'],
}

function App() {
  return (
    <div class="app" {...style}>
      Hello world!
    </div>
  )
}`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Spacing: Story = {
  tags: ['!dev'],
  globals: {
    background: 'primary',
  },
  render: () => (
    <SimpleVariableTable
      variables={spacing.variables as Record<string, string>}
      cssVarPrefix={spacing.prefix ?? '--pui-spacing'}
    />
  ),
}
