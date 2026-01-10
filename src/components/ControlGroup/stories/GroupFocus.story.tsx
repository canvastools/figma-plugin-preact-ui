import { StoryObj } from "@storybook/preact"

import { Input } from "../../../index"

import { ControlGroup } from "../ControlGroup"

type Story = StoryObj<typeof ControlGroup>

export const GroupFocusStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<ControlGroup groupFocus>
  <Input />
  <Input />
  <Button>Button</Button>
</ControlGroup>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-40">
      <ControlGroup groupFocus>
        <Input placeholder="Input" />
        <Input placeholder="Input" />
      </ControlGroup>
    </div>
  ),
}
