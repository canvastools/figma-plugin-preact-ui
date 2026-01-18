import { StoryObj } from "@storybook/preact"

import { Select } from "../Select"
import { SelectItemData } from "../Select.types"

type Story = StoryObj<typeof Select>

export const RestStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story: "Some nested components can be customized with allowed props.",
      },
      source: {
        language: "tsx",
        code: `<Select menuContainerProps={{ width: 300 }}/>
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
        <Select
          items={items}
          defaultValue="option-1"
          menuContainerProps={{ width: 300 }}
        />
      </div>
    )
  },
}
