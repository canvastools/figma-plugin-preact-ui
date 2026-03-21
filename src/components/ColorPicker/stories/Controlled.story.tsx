import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { ColorPicker } from '../ColorPicker'

type Story = StoryObj<typeof ColorPicker>

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
const [type, setType] = useState("hex")
const [color, setColor] = useState({ r: 1, g: 0, b: 0, a: 1 })

<ColorPicker
  type={type}
  color={color}
  onColorChange={(args) => setColor(args.color)}
  onTypeChange={(args) => setType(args.type)}
/>
`,
      },
    },
  },
  render: () => {
    const [type, setType] = useState<'rgba' | 'hex' | 'hexAlpha'>('hex')
    const [color, setColor] = useState({ r: 1, g: 0, b: 0, a: 1 })

    return (
      <div className="sb-column sb-width-420 sb-gap-16">
        <Text>type: {type}</Text>
        <Text>
          color: {color.r}, {color.g}, {color.b}, {color.a}
        </Text>
        <ColorPicker
          type={type}
          color={color}
          onColorChange={(args) => setColor(args.color)}
          onTypeChange={(args) => setType(args.type)}
        />
      </div>
    )
  },
}
