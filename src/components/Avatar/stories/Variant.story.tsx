import { Avatar } from "../Avatar"
import { Stack } from "../../../index"

export const VariantStory = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Avatar variant="circle">A</Avatar>
<Avatar variant="square">A</Avatar>
  `,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack direction="row" spacing={1000}>
        <Stack direction="row" spacing={400}>
          <Avatar
            imageSrc="https://thispersondoesnotexist.com/"
            variant="circle"
          >
            A
          </Avatar>
          <Avatar variant="circle">A</Avatar>
        </Stack>
        <Stack direction="row" spacing={400}>
          <Avatar
            imageSrc="https://thispersondoesnotexist.com/"
            variant="square"
          >
            A
          </Avatar>
          <Avatar variant="square">A</Avatar>
        </Stack>
      </Stack>
    </div>
  ),
}
