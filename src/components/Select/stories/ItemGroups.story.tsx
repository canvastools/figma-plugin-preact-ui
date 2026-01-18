import { StoryObj } from "@storybook/preact"

import { Select } from "../Select"
import { SelectItemData } from "../Select.types"

type Story = StoryObj<typeof Select>

export const ItemGroupsStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "Use an array of arrays for the `items` property to group options.",
      },
      source: {
        language: "tsx",
        code: `
const items = [
  [
    { value: "option-1", label: "Option one" },
    { value: "option-2", label: "Option two" },
    { value: "option-3", label: "Option three" },
  ],
  [
    { value: "option-4", label: "Option four" },
    { value: "option-5", label: "Option five" },
    { value: "ooptionpt-6", label: "Option six" },
  ],
]

<Select
  defaultValue="option-1"
  items={items}
/>
`,
      },
    },
  },
  render: () => {
    const items: SelectItemData[][] = [
      [
        { value: "option-1", label: "Option one" },
        { value: "option-2", label: "Option two" },
        { value: "option-3", label: "Option three" },
      ],
      [
        { value: "option-4", label: "Option four" },
        { value: "option-5", label: "Option five" },
        { value: "ooptionpt-6", label: "Option six" },
      ],
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select items={items} defaultValue="option-1" />
      </div>
    )
  },
}
