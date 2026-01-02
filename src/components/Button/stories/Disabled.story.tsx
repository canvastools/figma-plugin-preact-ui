import { StoryObj } from "@storybook/preact"

import { Button } from "../Button"
import { Stack } from "../../../index"

type Story = StoryObj<typeof Button>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Button disabled>{children}</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack direction="row" spacing={1000}>
        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Button intent="neutral" intentModifiers="default" disabled>
              Neutral
            </Button>

            <Button intent="neutral" intentModifiers="default" ghost disabled>
              Neutral Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="brand" intentModifiers="default" disabled>
              Brand
            </Button>
            <Button intent="neutral" intentModifiers="brand" disabled>
              Neutral Brand
            </Button>
            <Button intent="neutral" intentModifiers="brand" ghost disabled>
              Neutral Brand Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="danger" intentModifiers="default" disabled>
              Danger
            </Button>
            <Button intent="neutral" intentModifiers="danger" disabled>
              Neutral Danger
            </Button>
            <Button intent="neutral" intentModifiers="danger" ghost disabled>
              Neutral Danger Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button intent="success" intentModifiers="default" disabled>
              Success
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button
              intent="neutral-inverted"
              intentModifiers="default"
              disabled
            >
              Neutral Inverted
            </Button>
          </Stack>
        </Stack>

        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Button
              intent="neutral"
              intentModifiers="default"
              size="large"
              disabled
            >
              Neutral
            </Button>

            <Button
              intent="neutral"
              intentModifiers="default"
              ghost
              size="large"
              disabled
            >
              Neutral Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button
              intent="brand"
              intentModifiers="default"
              size="large"
              disabled
            >
              Brand
            </Button>
            <Button
              intent="neutral"
              intentModifiers="brand"
              size="large"
              disabled
            >
              Neutral Brand
            </Button>
            <Button
              intent="neutral"
              intentModifiers="brand"
              ghost
              size="large"
              disabled
            >
              Neutral Brand Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button
              intent="danger"
              intentModifiers="default"
              size="large"
              disabled
            >
              Danger
            </Button>
            <Button
              intent="neutral"
              intentModifiers="danger"
              size="large"
              disabled
            >
              Neutral Danger
            </Button>
            <Button
              intent="neutral"
              intentModifiers="danger"
              ghost
              size="large"
              disabled
            >
              Neutral Danger Ghost
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button
              intent="success"
              intentModifiers="default"
              size="large"
              disabled
            >
              Success
            </Button>
          </Stack>

          <Stack direction="row" spacing={400}>
            <Button
              intent="neutral-inverted"
              intentModifiers="default"
              size="large"
              disabled
            >
              Neutral Inverted
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  ),
}
