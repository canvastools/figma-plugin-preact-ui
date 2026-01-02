import { StoryObj } from "@storybook/preact"

import { Button } from "../Button"
import { Stack } from "../../../index"

type Story = StoryObj<typeof Button>

export const SizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Button size="medium">{children}</Button>

<Button size="large">{children}</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack direction="row" spacing={1000}>
        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Button intent="neutral" intentModifiers="default">
              Neutral
            </Button>

            <Button intent="neutral" intentModifiers="default" ghost>
              Neutral Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="brand" intentModifiers="default">
              Brand
            </Button>
            <Button intent="neutral" intentModifiers="brand">
              Neutral Brand
            </Button>
            <Button intent="neutral" intentModifiers="brand" ghost>
              Neutral Brand Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="danger" intentModifiers="default">
              Danger
            </Button>
            <Button intent="neutral" intentModifiers="danger">
              Neutral Danger
            </Button>
            <Button intent="neutral" intentModifiers="danger" ghost>
              Neutral Danger Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="success" intentModifiers="default">
              Success
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="neutral-inverted" intentModifiers="default">
              Neutral Inverted
            </Button>
          </Stack>
        </Stack>

        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Button intent="neutral" intentModifiers="default" size="large">
              Neutral
            </Button>

            <Button
              intent="neutral"
              intentModifiers="default"
              ghost
              size="large"
            >
              Neutral Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="brand" intentModifiers="default" size="large">
              Brand
            </Button>
            <Button intent="neutral" intentModifiers="brand" size="large">
              Neutral Brand
            </Button>
            <Button intent="neutral" intentModifiers="brand" ghost size="large">
              Neutral Brand Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="danger" intentModifiers="default" size="large">
              Danger
            </Button>
            <Button intent="neutral" intentModifiers="danger" size="large">
              Neutral Danger
            </Button>
            <Button
              intent="neutral"
              intentModifiers="danger"
              ghost
              size="large"
            >
              Neutral Danger Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="success" intentModifiers="default" size="large">
              Success
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button
              intent="neutral-inverted"
              intentModifiers="default"
              size="large"
            >
              Neutral Inverted
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  ),
}
