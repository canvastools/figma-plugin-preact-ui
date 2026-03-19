import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { TextArea } from '../TextArea'

type Story = StoryObj<typeof TextArea>

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

<TextArea
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
        <TextArea value={value} onValueChange={(args) => setValue(args.value)} />
      </div>
    )
  },
}
