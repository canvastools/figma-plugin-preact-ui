import { StoryObj } from "@storybook/preact"

import { Icon, Text, help } from "../../../index"
import type { IconProps } from "../../../index"

import { Badge } from "../Badge"
import type { BadgeProps } from "../Badge.types"

type Story = StoryObj<typeof Badge>

const validPrefixCombinations = [
  // neutral
  {
    intent: "neutral",
    intentModifier: "default",
  },
  {
    intent: "neutral",
    intentModifier: "secondary",
  },
  {
    intent: "neutral",
    intentModifier: "brand",
  },
  {
    intent: "neutral",
    intentModifier: "danger",
  },
  {
    intent: "neutral",
    intentModifier: "warning",
  },
  {
    intent: "neutral",
    intentModifier: "success",
  },

  // neutral-inverted
  {
    intent: "neutral-inverted",
    intentModifier: "default",
  },

  // brand
  {
    intent: "brand",
    intentModifier: "default",
  },

  // danger
  {
    intent: "danger",
    intentModifier: "default",
  },

  // warning
  {
    intent: "warning",
    intentModifier: "default",
  },

  // success
  {
    intent: "success",
    intentModifier: "default",
  },
]

const prefixCombinations = () => {
  return validPrefixCombinations.map(({ intent, intentModifier }) => (
    <div
      className="sb-row sb-width-full sb-gap-16"
      style={{ alignItems: "center" }}
    >
      <Text fullWidth>
        {intent}, {intentModifier}
      </Text>

      <Badge
        intent={intent as BadgeProps["intent"]}
        intentModifier={intentModifier as BadgeProps["intentModifier"]}
        prefix={
          <Icon
            glyph={help}
            size={16}
            intent={intent as IconProps["intent"]}
            intentModifier={intentModifier as IconProps["intentModifier"]}
          />
        }
      >
        Badge
      </Badge>
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
<Badge
  intent="neutral"
  prefix={
    <Icon
      glyph={help}
      size={16}
      intent="neutral"
    />
  }
>
  {children}
</Badge>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      {prefixCombinations()}
    </div>
  ),
}
