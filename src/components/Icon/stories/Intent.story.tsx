import { StoryObj } from "@storybook/preact"

import { Text } from "../../../index"

import { link } from "../glyphs"

import { Icon } from "../Icon"
import type { IconProps } from "../Icon.types"

type Story = StoryObj<typeof Icon>

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
    intentModifiers: "tertiary",
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
        <Text fullWidth>
          {intent}, {intentModifiers}
          {selected ? ", selected" : ""}
        </Text>

        <div
          style={{
            backgroundColor: `var(${bg})`,
          }}
        >
          <div
            className="sb-padding-16"
            style={{
              backgroundColor: `var(${bg}${selected ? "-selected" : ""})`,
            }}
          >
            <Icon
              glyph={link}
              intent={intent as IconProps["intent"]}
              intentModifiers={intentModifiers as IconProps["intentModifiers"]}
              selected={selected}
            />
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
<Icon
  glyph={help}
  intent="neutral"
/>

<Icon
  glyph={help}
  intent="neutral"
  intentModifiers="secondary"
/>

<Icon
  glyph={help}
  intent="brand"
/>
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
