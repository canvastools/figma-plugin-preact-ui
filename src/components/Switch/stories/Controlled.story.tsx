import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { Switch } from '../Switch'

type Story = StoryObj<typeof Switch>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
const [checked, setChecked] = useState(false)

<Switch
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`,
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Text>checked: {checked ? 'true' : 'false'}</Text>
        <Switch checked={checked} onCheckedChange={(args) => setChecked(args.checked)} />
      </div>
    )
  },
}
