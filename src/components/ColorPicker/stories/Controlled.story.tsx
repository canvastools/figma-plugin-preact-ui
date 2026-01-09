import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Text } from "../../../index"

import { ColorPicker } from "../ColorPicker"

type Story = StoryObj<typeof ColorPicker>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
const [type, setType] = useState("hex")
const [value, setValue] = useState({ r: 255, g: 0, b: 0, a: 1 })

<ColorPicker
  type={type}
  value={value}
  onValueChange={(args) => setValue(args.rgba)}
  onTypeChange={(args) => setType(args.type)}
/>
`,
      },
    },
  },
  render: () => {
    const [type, setType] = useState<"rgba" | "hex" | "hexAlpha">("hex")
    const [value, setValue] = useState({ r: 255, g: 0, b: 0, a: 1 })

    return (
      <div className="sb-column sb-width-420 sb-gap-16">
        <Text>type: {type}</Text>
        <Text>
          value: {value.r}, {value.g}, {value.b}, {value.a}
        </Text>
        <ColorPicker
          type={type}
          value={value}
          onValueChange={(args) => setValue(args.rgba)}
          onTypeChange={(args) => setType(args.type)}
        />
      </div>
    )
  },
}
