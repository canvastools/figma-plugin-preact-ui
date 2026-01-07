import { StoryObj } from "@storybook/preact"

import { Text, Icon, link } from "../../../index"

import { ButtonIcon } from "../ButtonIcon"
import type { ButtonIconProps } from "../ButtonIcon.types"

type Story = StoryObj<typeof ButtonIcon>

const validDisabledCombinations = [
  // neutral
  {
    intent: "neutral",
    intentModifiers: "default",
    ghost: false,
  },
  {
    intent: "neutral",
    intentModifiers: "default",
    ghost: true,
  },
]

const disabledCombinations = () => {
  return validDisabledCombinations.map(({ intent, intentModifiers, ghost }) => (
    <div
      className="sb-row sb-width-full sb-gap-16"
      style={{ alignItems: "center" }}
    >
      <Text widthFull>
        {intent}, {intentModifiers}
        {ghost ? ", ghost" : ""}
      </Text>

      <ButtonIcon
        intent={intent as ButtonIconProps["intent"]}
        intentModifiers={intentModifiers as ButtonIconProps["intentModifiers"]}
        ghost={ghost}
        disabled
      >
        <Icon glyph={link} />
      </ButtonIcon>

      <ButtonIcon
        intent={intent as ButtonIconProps["intent"]}
        intentModifiers={intentModifiers as ButtonIconProps["intentModifiers"]}
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
