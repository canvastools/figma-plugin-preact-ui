import { StoryObj } from "@storybook/preact"

import { Text } from "../../../index"

import { Badge } from "../Badge"
import type { BadgeProps } from "../Badge.types"

type Story = StoryObj<typeof Badge>

const validIntentCombinations = [
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

const intentCombinations = () => {
  return validIntentCombinations.map(({ intent, intentModifiers }) => (
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
      >
        Badge
      </Badge>
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
<Badge intent="neutral">{children}</Badge>

<Badge 
  intent="neutral"
  intentModifiers="secondary"
>
  {children}
</Badge>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      {intentCombinations()}
    </div>
  ),
}
