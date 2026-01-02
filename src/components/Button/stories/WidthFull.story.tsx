import { StoryObj } from "@storybook/preact"

import { Button } from "../Button"
import { Stack } from "../../../index"

type Story = StoryObj<typeof Button>

export const WidthFullStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Button widthFull>{children}</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400} fullWidth>
        <Button intent="neutral" intentModifiers="brand" widthFull ghost>
          Neutral Brand Ghost
        </Button>

        <Button intent="neutral" intentModifiers="brand" widthFull>
          Neutral Brand
        </Button>

        <Button intent="brand" widthFull>
          Brand
        </Button>

        <Button
          intent="neutral"
          intentModifiers="danger"
          size="large"
          widthFull
          ghost
        >
          Neutral Danger Ghost
        </Button>

        <Button
          intent="neutral"
          intentModifiers="danger"
          size="large"
          widthFull
        >
          Neutral Danger
        </Button>

        <Button intent="danger" size="large" widthFull>
          Danger
        </Button>
      </Stack>
    </div>
  ),
}
