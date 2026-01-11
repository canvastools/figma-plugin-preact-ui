import { StoryObj } from "@storybook/preact"

import { Text, Icon, link } from "../../../index"

import { ButtonIcon } from "../ButtonIcon"
import type { ButtonIconProps } from "../ButtonIcon.types"

type Story = StoryObj<typeof ButtonIcon>

const validDisabledCombinations = [
  // neutral
  {
    intent: "neutral",
    intentModifier: "default",
    ghost: false,
  },
  {
    intent: "neutral",
    intentModifier: "default",
    ghost: true,
  },
]

const disabledCombinations = () => {
  return validDisabledCombinations.map(({ intent, intentModifier, ghost }) => (
    <div
      className="sb-row sb-width-full sb-gap-16"
      style={{ alignItems: "center" }}
    >
      <Text fullWidth>
        {intent}, {intentModifier}
        {ghost ? ", ghost" : ""}
      </Text>

      <ButtonIcon
        intent={intent as ButtonIconProps["intent"]}
        intentModifier={intentModifier as ButtonIconProps["intentModifier"]}
        ghost={ghost}
        disabled
      >
        <Icon glyph={link} variant="scaled" />
      </ButtonIcon>

      <ButtonIcon
        intent={intent as ButtonIconProps["intent"]}
        intentModifier={intentModifier as ButtonIconProps["intentModifier"]}
        ghost={ghost}
        size="large"
        disabled
      >
        <Icon glyph={link} />
      </ButtonIcon>
    </div>
  ))
}

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
<ButtonIcon disabled>{children}</ButtonIcon>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-16">
      {disabledCombinations()}
    </div>
  ),
}
