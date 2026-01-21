import { StoryObj } from "@storybook/preact"

import { Text } from "../../../index"

import { TooltipContainer } from "../TooltipContainer"

type Story = StoryObj<typeof TooltipContainer>

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
<TooltipContainer
  width={200}
  height={300}
>
  {children}
</TooltipContainer>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <TooltipContainer>No width or height</TooltipContainer>

      <TooltipContainer width={200}>Width: 200</TooltipContainer>

      <TooltipContainer height={300}>Height: 300</TooltipContainer>

      <TooltipContainer width={200} height={300}>
        Width: 200, Height: 300
      </TooltipContainer>
    </div>
  ),
}
