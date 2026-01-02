import { StoryObj } from "@storybook/preact"

import { Avatar } from "../Avatar"
import { Stack } from "../../../index"

type Story = StoryObj<typeof Avatar>

export const SrcStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Avatar src="https://thispersondoesnotexist.com/">{children}</Avatar>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Avatar src="https://thispersondoesnotexist.com/">A</Avatar>
        <Avatar>A</Avatar>
      </Stack>
    </div>
  ),
}
