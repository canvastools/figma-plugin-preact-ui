import { StoryObj } from "@storybook/preact"

import { Text, Icon, link } from "../../../index"

import { ButtonIcon } from "../ButtonIcon"
import type { ButtonIconProps } from "../ButtonIcon.types"

type Story = StoryObj<typeof ButtonIcon>

const validSizeCombinations = [
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

const sizeCombinations = () => {
  return validSizeCombinations.map(({ intent, intentModifier, ghost }) => (
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
        size="medium"
      >
        <Icon glyph={link} />
      </ButtonIcon>

      <ButtonIcon
        intent={intent as ButtonIconProps["intent"]}
        intentModifier={intentModifier as ButtonIconProps["intentModifier"]}
        ghost={ghost}
        size="large"
      >
        <Icon glyph={link} />
      </ButtonIcon>
    </div>
  ))
}

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
<ButtonIcon size="medium">{children}</ButtonIcon>

<ButtonIcon size="large">{children}</ButtonIcon>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-16">{sizeCombinations()}</div>
  ),
}
