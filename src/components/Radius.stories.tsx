import { Meta, StoryObj } from '@storybook/preact'

import { radius } from '../themes'

import { SimpleVariableTable } from './storiesUtils'

const meta: Meta = {
  title: 'Variables/Radius',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// CSS

.element {
  border-radius: var(--pui-radius-medium);
}

// JS

import { radius } from 'figma-plugin-preact-ui'

const style = {
  borderRadius: radius.variables.medium,
}

function App() {
  return (
    <div class="app" {...style}>
      Hello world!
    </div>
  )
}
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Radius: Story = {
  tags: ['!dev'],
  render: () => (
    <SimpleVariableTable
      variables={radius.variables as Record<string, string>}
      cssVarPrefix={radius.prefix ?? '--pui-radius'}
    />
  ),
}
