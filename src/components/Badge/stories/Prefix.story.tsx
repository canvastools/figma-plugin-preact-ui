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
    intentModifiers: "default",
  },
  {
    intent: "neutral",
    intentModifiers: "secondary",
  },
  {
    intent: "neutral",
    intentModifiers: "brand",
  },
  {
    intent: "neutral",
    intentModifiers: "danger",
  },
  {
    intent: "neutral",
    intentModifiers: "warning",
  },
  {
    intent: "neutral",
    intentModifiers: "success",
  },

  // neutral-inverted
  {
    intent: "neutral-inverted",
    intentModifiers: "default",
  },

  // brand
  {
    intent: "brand",
    intentModifiers: "default",
  },

  // danger
  {
    intent: "danger",
    intentModifiers: "default",
  },

  // warning
  {
    intent: "warning",
    intentModifiers: "default",
  },

  // success
  {
    intent: "success",
    intentModifiers: "default",
  },
]

const prefixCombinations = () => {
  return validPrefixCombinations.map(({ intent, intentModifiers }) => (
    <div
      className="sb-row sb-width-full sb-gap-16"
      style={{ alignItems: "center" }}
    >
      <Text widthFull>
        {intent}, {intentModifiers}
      </Text>

      <Badge
        intent={intent as BadgeProps["intent"]}
        intentModifiers={intentModifiers as BadgeProps["intentModifiers"]}
        prefix={
          <Icon
            glyph={help}
            size={16}
            intent={intent as IconProps["intent"]}
            intentModifiers={intentModifiers as IconProps["intentModifiers"]}
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
