import { StoryObj } from "@storybook/preact"

import { Input } from "../Input"

type Story = StoryObj<typeof Input>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "If there is no label, the component will be displayed in the default variant.",
      },
      source: {
        language: "tsx",
        code: `
<Input defaultValue="Hello World!" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-40">
      <Input defaultValue="Hello World!" label="Label" variant="default" />
      <Input defaultValue="Hello World!" label="Label" variant="list" />
    </div>
  ),
}
