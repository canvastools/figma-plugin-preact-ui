import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Text } from "../../../index"

import { Select } from "../Select"
import { SelectOptionData } from "../Select.types"

type Story = StoryObj<typeof Select>

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
const [value, setValue] = useState("option-1")

const options = [
  { 
    value: "option-1",
    label: "Option one"
  },
  { 
    value: "option-2",
    label: "Option two"
  },
  {
    value: "option-3",
    label: "Option three"
  },
]

<Select
  options={options}
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("option-1")

    const options: SelectOptionData[] = [
      { value: "option-1", label: "Option one" },
      { value: "option-2", label: "Option two" },
      { value: "option-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Text>value: {value}</Text>
        <Select
          options={options}
          value={value}
          onValueChange={(args) => setValue(args.value)}
        />
      </div>
    )
  },
}
