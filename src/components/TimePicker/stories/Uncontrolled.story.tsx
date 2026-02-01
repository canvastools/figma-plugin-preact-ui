import { StoryObj } from "@storybook/preact"

import { TimePicker } from "../TimePicker"

type Story = StoryObj<typeof TimePicker>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<TimePicker defaultDate={new Date()}/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <TimePicker defaultDate={new Date()} />
    </div>
  ),
}
