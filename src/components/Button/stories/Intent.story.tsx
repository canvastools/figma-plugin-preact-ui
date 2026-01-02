import { StoryObj } from "@storybook/preact"

import { Button } from "../Button"
import { Stack } from "../../../index"

type Story = StoryObj<typeof Button>

export const IntentStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Button intent="neutral">{children}</Button>

<Button 
  intent="neutral"
  intentModifiers="secondary"
>
  {children}
</Button>

<Button 
  intent="neutral"
  intentModifiers="secondary"
  ghost
>
  {children}
</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
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
    </div>
  ),
}
