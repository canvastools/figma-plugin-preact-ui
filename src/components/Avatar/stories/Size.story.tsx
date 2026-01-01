import { Avatar } from "../Avatar"
import { Stack } from "../../../index"

export const SizeStory = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Avatar size="small">{children}</Avatar>

<Avatar size="medium">{children}</Avatar>

<Avatar size="large">{children}</Avatar>
  `,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack direction="row" spacing={1000}>
        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Avatar src="https://thispersondoesnotexist.com/" size="small">
              A
            </Avatar>
            <Avatar size="small">A</Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar src="https://thispersondoesnotexist.com/" size="medium">
              A
            </Avatar>
            <Avatar size="medium">A</Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar src="https://thispersondoesnotexist.com/" size="large">
              A
            </Avatar>
            <Avatar size="large">A</Avatar>
          </Stack>
        </Stack>
        <Stack spacing={400}>
          <Stack spacing={400}>
            <Stack direction="row" spacing={400}>
              <Avatar
                src="https://thispersondoesnotexist.com/"
                size="small"
                variant="square"
              >
                A
              </Avatar>
              <Avatar size="small" variant="square">
                A
              </Avatar>
            </Stack>
            <Stack direction="row" spacing={400}>
              <Avatar
                src="https://thispersondoesnotexist.com/"
                size="medium"
                variant="square"
              >
                A
              </Avatar>
              <Avatar size="medium" variant="square">
                A
              </Avatar>
            </Stack>
            <Stack direction="row" spacing={400}>
              <Avatar
                src="https://thispersondoesnotexist.com/"
                size="large"
                variant="square"
              >
                A
              </Avatar>
              <Avatar size="large" variant="square">
                A
              </Avatar>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  ),
}
