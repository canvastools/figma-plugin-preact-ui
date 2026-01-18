import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Text } from "../../../index"

import { SegmentedControl } from "../SegmentedControl"
import { SegmentedControlItemData } from "../SegmentedControl.types"

type Story = StoryObj<typeof SegmentedControl>

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
const [value, setValue] = useState("list")

const items = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl
  value={value}
  onValueChange={(args) => setValue(args.value)}
  items={items}
/>
`,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("list")

    const items: SegmentedControlItemData[] = [
      {
        value: "list",
        label: "List view",
      },
      {
        value: "grid",
        label: "Grid view",
      },
    ]

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Text>value: {value}</Text>
        <SegmentedControl
          items={items}
          value={value}
          onValueChange={(args) => setValue(args.value)}
        />
      </div>
    )
  },
}
