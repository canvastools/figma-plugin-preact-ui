import { StoryObj } from "@storybook/preact"

import { Text, Icon, help } from "../../../index"
import type { IconProps } from "../../Icon/Icon.types"

import { Button } from "../Button"
import type { ButtonProps } from "../Button.types"

type Story = StoryObj<typeof Button>

const validPrefixCombinations = [
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
  {
    intent: "neutral",
    intentModifier: "brand",
    ghost: false,
  },
  {
    intent: "neutral",
    intentModifier: "brand",
    ghost: true,
  },
  {
    intent: "neutral",
    intentModifier: "danger",
    ghost: false,
  },
  {
    intent: "neutral",
    intentModifier: "danger",
    ghost: true,
  },

  // neutral-inverted
  {
    intent: "neutral-inverted",
    intentModifier: "default",
    ghost: false,
  },

  // brand
  {
    intent: "brand",
    intentModifier: "default",
    ghost: false,
  },

  // danger
  {
    intent: "danger",
    intentModifier: "default",
    ghost: false,
  },

  // success
  {
    intent: "success",
    intentModifier: "default",
    ghost: false,
  },
]

const prefixCombinations = () => {
  return validPrefixCombinations.map(({ intent, intentModifier, ghost }) => (
    <div
      className="sb-row sb-width-full sb-gap-16"
      style={{ alignItems: "center" }}
    >
      <Text fullWidth>
        {intent}, {intentModifier}
        {ghost ? ", ghost" : ""}
      </Text>

      <Button
        intent={intent as ButtonProps["intent"]}
        intentModifier={intentModifier as ButtonProps["intentModifier"]}
        ghost={ghost}
        prefix={
          <Icon
            glyph={help}
            variant="scaled"
            intent={intent as IconProps["intent"]}
            intentModifier={intentModifier as IconProps["intentModifier"]}
          />
        }
      >
        Button
      </Button>

      <Button
        intent={intent as ButtonProps["intent"]}
        intentModifier={intentModifier as ButtonProps["intentModifier"]}
        ghost={ghost}
        size="large"
        prefix={
          <Icon
            glyph={help}
            variant="scaled"
            intent={intent as IconProps["intent"]}
            intentModifier={intentModifier as IconProps["intentModifier"]}
          />
        }
      >
        Button
      </Button>
    </div>
  ))
}

export const PrefixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Button 
  intent="neutral"
  prefix={
    <Icon 
      glyph={help}
      variant="scaled"
      intent="neutral"
    />
  }
>
  {children}
</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-16">
      {prefixCombinations()}
    </div>
  ),
}
