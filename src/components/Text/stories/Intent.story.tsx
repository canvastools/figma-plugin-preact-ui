import { StoryObj } from "@storybook/preact"

import { Text } from "../Text"
import type { TextProps } from "../Text.types"

type Story = StoryObj<typeof Text>

const validIntentCombinations = [
  // neutral
  {
    bg: "--pui-color-neutral-bg-default",
    intent: "neutral",
    intentModifiers: "default",
  },
  {
    bg: "--pui-color-neutral-bg-default",
    intent: "neutral",
    intentModifiers: "default",
    selected: true,
  },
  {
    bg: "--pui-color-neutral-bg-default",
    intent: "neutral",
    intentModifiers: "secondary",
  },
  {
    bg: "--pui-color-neutral-bg-default",
    intent: "neutral",
    intentModifiers: "brand",
  },
  {
    bg: "--pui-color-neutral-bg-default",
    intent: "neutral",
    intentModifiers: "danger",
  },
  {
    bg: "--pui-color-neutral-bg-default",
    intent: "neutral",
    intentModifiers: "warning",
  },
  {
    bg: "--pui-color-neutral-bg-default",
    intent: "neutral",
    intentModifiers: "success",
  },

  // neutral-inverted
  {
    bg: "--pui-color-neutral-inverted-bg-default",
    intent: "neutral-inverted",
    intentModifiers: "default",
  },

  // neutral-inverted-fixed
  {
    bg: "--pui-color-neutral-inverted-fixed-bg-default",
    intent: "neutral-inverted-fixed",
    intentModifiers: "default",
  },
  {
    bg: "--pui-color-neutral-inverted-fixed-bg-default",
    intent: "neutral-inverted-fixed",
    intentModifiers: "secondary",
  },
  {
    bg: "--pui-color-neutral-inverted-fixed-bg-default",
    intent: "neutral-inverted-fixed",
    intentModifiers: "danger",
  },

  // brand
  {
    bg: "--pui-color-brand-bg-default",
    intent: "brand",
    intentModifiers: "default",
  },

  // danger
  {
    bg: "--pui-color-danger-bg-default",
    intent: "danger",
    intentModifiers: "default",
  },

  // warning
  {
    bg: "--pui-color-warning-bg-default",
    intent: "warning",
    intentModifiers: "default",
  },

  // success
  {
    bg: "--pui-color-success-bg-default",
    intent: "success",
    intentModifiers: "default",
  },
]

const intentCombinations = () => {
  return validIntentCombinations.map(
    ({ bg, intent, intentModifiers, selected }) => (
      <div
        className="sb-row sb-width-full sb-gap-16"
        style={{ alignItems: "center" }}
      >
        <Text widthFull>
          {intent}, {intentModifiers}
          {selected ? ", selected" : ""}
        </Text>

        <div
          style={{
            backgroundColor: `var(${bg})`,
            width: "200%",
          }}
        >
          <div
            className="sb-padding-16"
            style={{
              backgroundColor: `var(${bg}${selected ? "-selected" : ""})`,
            }}
          >
            <Text
              intent={intent as TextProps["intent"]}
              intentModifiers={intentModifiers as TextProps["intentModifiers"]}
              widthFull
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </div>
        </div>
      </div>
    )
  )
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
<Text intent="neutral">{children}</Text>

<Text 
  intent="neutral"
  intentModifiers="secondary"
>
  {children}
</Text>

<Text intent="brand">
  {children}
</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      {intentCombinations()}
    </div>
  ),
}
