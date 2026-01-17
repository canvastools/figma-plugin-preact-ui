import { StoryObj } from "@storybook/preact"

import { Text, ButtonIcon, Stack } from "../../../index"

import * as glyphs from "../glyphs"

import { Icon } from "../Icon"

type Story = StoryObj<typeof Icon>

const copyToClipboard = (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text)
  }
}

const glyphCombinations = (glyph: string) => {
  const combinations: { variant: "default" | "scaled"; size: 16 | 24 }[] = [
    { variant: "default", size: 24 },
    { variant: "scaled", size: 24 },
    { variant: "default", size: 16 },
  ]

  return combinations.map(({ variant, size }) => {
    try {
      glyphs[glyph as keyof typeof glyphs]!({ variant, size }) // Probe support for this size/variant pair

      return (
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            gap: "12px",
            minWidth: "80px",
          }}
        >
          <Icon
            className="sb-container-shape-neutral"
            glyph={glyphs[glyph as keyof typeof glyphs]}
            variant={variant}
            size={size}
          />
          <Text size="small" wrap={false}>
            {size}, {variant}
          </Text>
        </div>
      )
    } catch (e) {
      return (
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            gap: "12px",
            minWidth: "80px",
          }}
        >
          <div
            className="sb-container-shape"
            style={{ width: size, height: size }}
          ></div>
          <Text
            size="small"
            intent="neutral"
            intentModifier="danger"
            wrap={false}
          >
            {size}, {variant}
          </Text>
        </div>
      )
    }
  })
}

export const GlyphsStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
import { help } from "figma-plugin-preact-ui"

<Icon glyph={help}/>
`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        gap: "16px",
      }}
    >
      {Object.keys(glyphs).map((glyph) => {
        return (
          <div style={{ display: "flex", flexFlow: "row nowrap", gap: "16px" }}>
            <Stack direction="row" spacing={200} fullWidth y="center">
              <Text strong>{glyph}</Text>
              <ButtonIcon onClick={() => copyToClipboard(`${glyph}`)}>
                <Icon glyph={glyphs.copy} variant="scaled" />
              </ButtonIcon>
            </Stack>

            <div
              style={{
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "flex-end",
                gap: "16px",
              }}
            >
              {glyphCombinations(glyph)}
            </div>
          </div>
        )
      })}
    </div>
  ),
}
