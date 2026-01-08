import { StoryObj } from "@storybook/preact"

import { Checkbox } from "../Checkbox"

type Story = StoryObj<typeof Checkbox>

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
<Checkbox defaultChecked={false}/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Checkbox defaultChecked={true} label="Checked True" />
      <Checkbox defaultChecked={false} label="Checked False" />
    </div>
  ),
}
