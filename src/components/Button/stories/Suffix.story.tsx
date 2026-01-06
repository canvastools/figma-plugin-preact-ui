import { StoryObj } from "@storybook/preact"

import { Text, Icon, help } from "../../../index"
import type { IconProps } from "../../Icon/Icon.types"

import { Button } from "../Button"
import type { ButtonProps } from "../Button.types"

const validSuffixCombinations = [
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
  {
    intent: "neutral",
    intentModifiers: "brand",
    ghost: false,
  },
  {
    intent: "neutral",
    intentModifiers: "brand",
    ghost: true,
  },
  {
    intent: "neutral",
    intentModifiers: "danger",
    ghost: false,
  },
  {
    intent: "neutral",
    intentModifiers: "danger",
    ghost: true,
  },

  // neutral-inverted
  {
    intent: "neutral-inverted",
    intentModifiers: "default",
    ghost: false,
  },

  // brand
  {
    intent: "brand",
    intentModifiers: "default",
    ghost: false,
  },

  // danger
  {
    intent: "danger",
    intentModifiers: "default",
    ghost: false,
  },

  // success
  {
    intent: "success",
    intentModifiers: "default",
    ghost: false,
  },
]

const suffixCombinations = () => {
  return validSuffixCombinations.map(({ intent, intentModifiers, ghost }) => (
    <div
      className="sb-row sb-width-full sb-gap-16"
      style={{ alignItems: "center" }}
    >
      <Text fullWidth>
        {intent}, {intentModifiers}
      </Text>

      <Button
        intent={intent as ButtonProps["intent"]}
        intentModifiers={intentModifiers as ButtonProps["intentModifiers"]}
        ghost={ghost}
        suffix={
          <Icon
            glyph={help}
            variant="scaled"
            intent={intent as IconProps["intent"]}
            intentModifiers={intentModifiers as IconProps["intentModifiers"]}
          />
        }
      >
        Button
      </Button>
    </div>
  ))
}

type Story = StoryObj<typeof Button>

export const SuffixStory: Story = {
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
  suffix={
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
      {suffixCombinations()}
    </div>
  ),
}
