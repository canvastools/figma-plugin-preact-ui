import { StoryObj } from "@storybook/preact"

import { Select } from "../Select"
import { SelectOptionData } from "../Select.types"

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
    const options: SelectOptionData[] = [
      { value: "option-1", label: "Option one" },
      { value: "option-2", label: "Option two" },
      { value: "option-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select options={options} placeholder="Placeholder" />
      </div>
    )
  },
}
