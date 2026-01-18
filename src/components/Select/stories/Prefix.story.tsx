import { StoryObj } from "@storybook/preact"

import { Icon, search } from "../../../index"

import { Select } from "../Select"
import { SelectItemData } from "../Select.types"

type Story = StoryObj<typeof Select>

export const PrefixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Select
  prefix={
    <Icon 
      glyph={search}
      intentModifier="secondary"
      variant="scaled"
    />
  }
/>
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
          prefix={
            <Icon glyph={search} intentModifier="secondary" variant="scaled" />
          }
        />
      </div>
    )
  },
}
