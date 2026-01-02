import { StoryObj } from "@storybook/preact"

import { Button } from "../Button"
import { Stack } from "../../../index"

type Story = StoryObj<typeof Button>

export const GroupedStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Stack direction="row">       
  <Button grouped="right">{children}</Button>
  <Button grouped="both">{children}</Button>
  <Button grouped="left">{children}</Button>
</Stack>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Stack direction="row">
          <Button intent="neutral" intentModifiers="default" grouped="right">
            Grouped right
          </Button>
          <Button intent="neutral" intentModifiers="default" grouped="both">
            Grouped both
          </Button>
          <Button intent="neutral" intentModifiers="default" grouped="left">
            Grouped left
          </Button>
        </Stack>

        <Stack direction="row" fullWidth>
          <Button
            intent="neutral"
            intentModifiers="default"
            widthFull
            grouped="right"
            size="large"
          >
            Grouped right
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            widthFull
            grouped="both"
            size="large"
          >
            Grouped both
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            widthFull
            grouped="left"
            size="large"
          >
            Grouped left
          </Button>
        </Stack>
      </Stack>
    </div>
  ),
}
