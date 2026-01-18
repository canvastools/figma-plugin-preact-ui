import { StoryObj } from "@storybook/preact"

import { SegmentedControl } from "../SegmentedControl"
import { SegmentedControlItemData } from "../SegmentedControl.types"

type Story = StoryObj<typeof SegmentedControl>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
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
  defaultValue="list"
  items={items}
/>
`,
      },
    },
  },
  render: () => {
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
      <div className="sb-column sb-width-300">
        <SegmentedControl items={items} defaultValue="list" />
      </div>
    )
  },
}
