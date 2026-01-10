import { StoryObj } from "@storybook/preact"

import { Input } from "../Input"

type Story = StoryObj<typeof Input>

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
<Input defaultValue="Hello World!" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Input defaultValue="Hello World!" />
    </div>
  ),
}
