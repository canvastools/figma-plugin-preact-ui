import { StoryObj } from "@storybook/preact"

import { Calendar } from "../Calendar"

type Story = StoryObj<typeof Calendar>

export const DatesStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
const weekBefore = new Date().setDate(new Date().getDate() - 7)
const weekAfter = new Date().setDate(new Date().getDate() + 7)

<Calendar
  minDate={new Date(weekBefore)}
  maxDate={new Date(weekAfter)}
/>
`,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300 sb-gap-40">
        <Calendar
          minDate={new Date(new Date().setDate(new Date().getDate() - 7))}
          maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
        />
      </div>
    )
  },
}
