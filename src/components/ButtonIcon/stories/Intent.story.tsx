import { StoryObj } from "@storybook/preact"

import { Text, Icon, link } from "../../../index"

import { ButtonIcon } from "../ButtonIcon"
import type { ButtonIconProps } from "../ButtonIcon.types"

type Story = StoryObj<typeof ButtonIcon>

const validIntentCombinations = [
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

const intentCombinations = () => {
  return validIntentCombinations.map(({ intent, intentModifiers, ghost }) => (
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
      >
        <Icon glyph={link} />
      </ButtonIcon>
    </div>
  ))
}

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
<ButtonIcon intent="neutral">{children}</ButtonIcon>

<ButtonIcon 
  intent="neutral"
  intentModifiers="default"
>
  {children}
</ButtonIcon>

<ButtonIcon ghost>{children}</ButtonIcon>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-16">
      {intentCombinations()}
    </div>
  ),
}
