import { StoryObj } from "@storybook/preact"

import { Stack, Text, Icon, link } from "../../../index"

import { ButtonIcon } from "../ButtonIcon"

type Story = StoryObj<typeof ButtonIcon>

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
  <ButtonIcon grouped="right">{children}</ButtonIcon>
  <ButtonIcon grouped="both">{children}</ButtonIcon>
  <ButtonIcon grouped="left">{children}</ButtonIcon>
</Stack>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <Stack direction="row">
        <ButtonIcon grouped="right">
          <Icon glyph={link} />
        </ButtonIcon>
        <ButtonIcon grouped="both">
          <Icon glyph={link} />
        </ButtonIcon>
        <ButtonIcon grouped="left">
          <Icon glyph={link} />
        </ButtonIcon>
      </Stack>
    </div>
  ),
}
