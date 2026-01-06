import { StoryObj } from "@storybook/preact"

import { Text } from "../../../index"

import { Button } from "../Button"
import type { ButtonProps } from "../Button.types"

const validSizeCombinations = [
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

const sizeCombinations = () => {
  return validSizeCombinations.map(({ intent, intentModifiers }) => (
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
        size="medium"
      >
        Medium
      </Button>

      <Button
        intent={intent as ButtonProps["intent"]}
        intentModifiers={intentModifiers as ButtonProps["intentModifiers"]}
        size="large"
      >
        Large
      </Button>
    </div>
  ))
}

type Story = StoryObj<typeof Button>

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
<Button size="medium">{children}</Button>

<Button size="large">{children}</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-16">{sizeCombinations()}</div>
  ),
}
