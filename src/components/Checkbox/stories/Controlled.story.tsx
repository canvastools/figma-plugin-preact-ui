import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { Checkbox } from '../Checkbox'

type Story = StoryObj<typeof Checkbox>

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

<Checkbox
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`,
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState<boolean>(false)

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Text>checked: {checked ? 'true' : 'false'}</Text>
        <Checkbox checked={checked} onCheckedChange={(args) => setChecked(args.checked)} label="Checkbox" />
      </div>
    )
  },
}
