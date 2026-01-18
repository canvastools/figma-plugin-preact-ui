import { StoryObj } from "@storybook/preact"

import { Select } from "../Select"
import { SelectItemData } from "../Select.types"

type Story = StoryObj<typeof Select>

export const PlaceholderStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Select placeholder="Placeholder"/>
`,
      },
    },
  },
  render: () => {
    const items: SelectItemData[] = [
      { value: "option-1", label: "Option one" },
      { value: "option-2", label: "Option two" },
      { value: "option-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select items={items} placeholder="Placeholder" />
      </div>
    )
  },
}
