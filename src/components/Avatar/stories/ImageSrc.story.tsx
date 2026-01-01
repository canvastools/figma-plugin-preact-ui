import { Avatar } from "../Avatar"
import { Stack } from "../../../index"

export const ImageSrcStory = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Avatar imageSrc="https://thispersondoesnotexist.com/">A</Avatar>

<Avatar>A</Avatar>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Avatar imageSrc="https://thispersondoesnotexist.com/">A</Avatar>
        <Avatar>A</Avatar>
      </Stack>
    </div>
  ),
}
