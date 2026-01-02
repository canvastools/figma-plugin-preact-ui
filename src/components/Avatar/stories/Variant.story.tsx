import { StoryObj } from "@storybook/preact"
import { Avatar } from "../Avatar"
import { Stack } from "../../../index"

type Story = StoryObj<typeof Avatar>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Avatar variant="circle">{children}</Avatar>

<Avatar variant="square">{children}</Avatar>
  `,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack direction="row" spacing={1000}>
        <Stack direction="row" spacing={400}>
          <Avatar src="https://thispersondoesnotexist.com/" variant="circle">
            A
          </Avatar>
          <Avatar variant="circle">A</Avatar>
        </Stack>
        <Stack direction="row" spacing={400}>
          <Avatar src="https://thispersondoesnotexist.com/" variant="square">
            A
          </Avatar>
          <Avatar variant="square">A</Avatar>
        </Stack>
      </Stack>
    </div>
  ),
}
