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
const [date, setDate] = useState(new Date())

<Calendar
  date={date}
  onDateChange={(args) => setDate(args.date)}
/>
`,
      },
    },
  },
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date())

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Text>date: {date?.toString()}</Text>
        <Calendar
          date={date}
          onDateChange={(args) => setDate(args.date as Date)}
        />
      </div>
    )
  },
}
