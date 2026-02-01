import { StoryObj } from "@storybook/preact"

import { TimePicker } from "../TimePicker"

type Story = StoryObj<typeof TimePicker>

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
<TimePicker
  hourPlaceholder="HH"
  minutePlaceholder="mm"
/>
`,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300">
        <TimePicker hourPlaceholder="HH" minutePlaceholder="mm" />
      </div>
    )
  },
}
