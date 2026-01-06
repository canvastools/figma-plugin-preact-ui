import { StoryObj } from "@storybook/preact"

import { Text } from "../Text"
import type { TextProps } from "../Text.types"

type Story = StoryObj<typeof Text>

const validDisabledCombinations = [
  // neutral
  {
    bg: "--pui-color-neutral-bg",
    disabledBg: false,
    intent: "neutral",
  },
  {
    bg: "--pui-color-neutral-bg",
    disabledBg: true,
    intent: "neutral",
  },

  // neutral-inverted
  {
    bg: "--pui-color-neutral-inverted-bg",
    disabledBg: true,
    intent: "neutral-inverted",
  },

  // neutral-inverted-fixed
  {
    bg: "--pui-color-neutral-inverted-fixed-bg",
    disabledBg: true,
    intent: "neutral-inverted-fixed",
  },

  // brand
  {
    bg: "--pui-color-brand-bg",
    intent: "brand",
  },

  // danger
  {
    bg: "--pui-color-danger-bg",
    disabledBg: true,
    intent: "danger",
  },

  // warning
  {
    bg: "--pui-color-warning-bg",
    disabledBg: true,
    intent: "warning",
  },

  // success
  {
    bg: "--pui-color-success-bg",
    disabledBg: true,
    intent: "success",
  },
]

const disabledCombinations = () => {
  return validDisabledCombinations.map(({ bg, disabledBg, intent }) => (
    <div
      className="sb-row sb-width-full sb-gap-16"
      style={{ alignItems: "center" }}
    >
      <Text widthFull>{intent}, disabled</Text>

      <div
        style={{
          backgroundColor: `var(${bg}-default)`,
          width: "200%",
        }}
      >
        <div
          className="sb-padding-16"
          style={{
            backgroundColor: disabledBg ? `var(${bg}-disabled)` : "unset",
          }}
        >
          <Text intent={intent as TextProps["intent"]} disabled widthFull>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </div>
      </div>
    </div>
  ))
}

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Text disabled>{children}</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      {disabledCombinations()}
    </div>
  ),
}
