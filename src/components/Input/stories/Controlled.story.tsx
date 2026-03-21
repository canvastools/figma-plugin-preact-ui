import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { Input } from '../Input'

type Story = StoryObj<typeof Input>

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
const [value, setValue] = useState("Hello World!")

<Input
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('Hello World!')

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Text>value: {value}</Text>
        <Input value={value} onValueChange={(args) => setValue(args.value)} />
      </div>
    )
  },
}
