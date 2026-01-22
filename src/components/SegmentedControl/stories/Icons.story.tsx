import { StoryObj } from "@storybook/preact"

import { viewList, viewGrid, TooltipContext } from "../../../index"

import { SegmentedControl } from "../SegmentedControl"
import { SegmentedControlItemData } from "../SegmentedControl.types"

type Story = StoryObj<typeof SegmentedControl>

export const IconsStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
import { viewList, viewGrid } from "figma-plugin-preact-ui"

const items = [
  {
    value: "list",
    label: "List view",
    glyph: viewList,
  },
  {
    value: "grid",
    label: "Grid view",
    glyph: viewGrid,
  },
]

<SegmentedControl
  items={items}
  defaultValue="list"
/>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <SegmentedControl
    items={items}
    defaultValue="list"
  />
</TooltipContext>
`,
      },
    },
  },
  render: () => {
    const items: SegmentedControlItemData[] = [
      {
        value: "list",
        label: "List view",
        glyph: viewList,
      },
      {
        value: "grid",
        label: "Grid view",
        glyph: viewGrid,
      },
    ]

    return (
      <div className="sb-column sb-width-300">
        <TooltipContext>
          <SegmentedControl items={items} defaultValue="list" />
        </TooltipContext>
      </div>
    )
  },
}
