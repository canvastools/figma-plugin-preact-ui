import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Text } from "../../../index"

import { Calendar } from "../Calendar"

type Story = StoryObj<typeof Calendar>

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
const [value, setValue] = useState(new Date())

<Calendar
  value={value}
  onChange={(args) => setValue(args.value)}
/>
`,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date())

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Text>value: {value?.toString()}</Text>
        <Calendar
          value={value}
          onChange={(args) => setValue(args.value as Date)}
        />
      </div>
    )
  },
}
