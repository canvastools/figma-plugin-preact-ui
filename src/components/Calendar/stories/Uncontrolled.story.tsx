import { StoryObj } from "@storybook/preact"

import { Calendar } from "../Calendar"

type Story = StoryObj<typeof Calendar>

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
<Calendar defaultValue={new Date()}/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Calendar defaultValue={new Date()} />
    </div>
  ),
}
