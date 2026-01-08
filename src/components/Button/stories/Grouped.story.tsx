import { StoryObj } from "@storybook/preact"

import { Stack } from "../../../index"

import { Button } from "../Button"

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

<Stack direction="row" widthFull>
  <Button grouped="right" fullWidth>{children}</Button>
  <Button grouped="both" fullWidth>{children}</Button>
  <Button grouped="left" fullWidth>{children}</Button>
</Stack>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <Stack direction="row">
        <Button grouped="right">Grouped right</Button>
        <Button grouped="both">Grouped both</Button>
        <Button grouped="left">Grouped left</Button>
      </Stack>

      <Stack direction="row" fullWidth>
        <Button grouped="right" fullWidth>
          Grouped right
        </Button>
        <Button grouped="both" fullWidth>
          Grouped both
        </Button>
        <Button grouped="left" fullWidth>
          Grouped left
        </Button>
      </Stack>
    </div>
  ),
}
