import { Meta, StoryObj } from "@storybook/preact"

import { figmaLight, figmaDark, spacing, radius } from "../themes"
import type { ColorTokenTree, ColorTokenBranch } from "../themes"

import { Text } from "../index"
import { ColorSwatch } from "../index"
import { Icon } from "../index"
import { ButtonIcon } from "../index"
import { glyphs } from "../index"

const meta: Meta = {
  title: "Overview/Variables",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        component:
          "Preview of all CSS variables used in the library.<br/> It is controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const copyToClipboard = (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text)
  }
}

type ThemeMap = Record<string, ColorTokenTree>

function flattenTokens(
  obj: ColorTokenBranch,
  path: string[] = []
): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(obj)) {
    const newPath = [...path, key]
    if (typeof value === "string") {
      result[newPath.join("-")] = value
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenTokens(value, newPath))
    }
  }
  return result
}

function buildTokenMatrix(themes: ThemeMap) {
  const flattened: Record<string, Record<string, string | undefined>> = {}

  for (const [themeName, theme] of Object.entries(themes)) {
    const flat = flattenTokens(theme.variables)
    for (const [token, value] of Object.entries(flat)) {
      if (!flattened[token]) flattened[token] = {}
      flattened[token][themeName] = value
    }
  }

  const themeNames = Object.keys(themes)
  for (const token of Object.keys(flattened)) {
    for (const themeName of themeNames) {
      if (!(themeName in flattened[token])) {
        flattened[token][themeName] = undefined
      }
    }
  }

  return flattened
}

const colorTokensList = () => {
  const tokenMatrix = buildTokenMatrix({ figmaLight, figmaDark })

  return Object.keys(tokenMatrix).map((token) => (
    <tr
      style={{
        borderBottom: "1px solid var(--pui-color-neutral-border-default)",
      }}
    >
      <td
        style={{
          padding: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ButtonIcon onClick={() => copyToClipboard(`--pui-color-${token}`)}>
            <Icon glyph={glyphs.copy} variant="scaled" />
          </ButtonIcon>

          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong>--pui-color-{token}</Text>
          </div>
        </div>
      </td>
      {Object.keys(tokenMatrix[token]).map((theme) => (
        <td
          style={{
            padding: 16,
          }}
        >
          {tokenMatrix[token][theme] ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: 16,
              }}
            >
              <ButtonIcon
                onClick={() =>
                  copyToClipboard(tokenMatrix[token][theme] as string)
                }
              >
                <Icon glyph={glyphs.copy} variant="scaled" />
              </ButtonIcon>
              <ColorSwatch hex={tokenMatrix[token][theme]} />
              <div
                style={{
                  width: "100%",
                  paddingLeft: 16,
                }}
              >
                <Text strong>{tokenMatrix[token][theme]}</Text>
              </div>
            </div>
          ) : null}
        </td>
      ))}
    </tr>
  ))
}

const spacingTokensList = () => {
  const tokenMatrix: Record<string, string | ColorTokenBranch> = {}

  for (const [token, value] of Object.entries(spacing.variables)) {
    tokenMatrix[token] = value
  }

  return Object.keys(tokenMatrix).map((token) => (
    <tr
      style={{
        borderBottom: "1px solid var(--pui-color-neutral-border-default)",
      }}
    >
      <td
        style={{
          padding: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ButtonIcon onClick={() => copyToClipboard(`--pui-spacing-${token}`)}>
            <Icon glyph={glyphs.copy} variant="scaled" />
          </ButtonIcon>

          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong>--pui-spacing-{token}</Text>
          </div>
        </div>
      </td>
      <td
        style={{
          padding: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ButtonIcon
            onClick={() => copyToClipboard(tokenMatrix[token] as string)}
          >
            <Icon glyph={glyphs.copy} variant="scaled" />
          </ButtonIcon>
          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong>{tokenMatrix[token]}</Text>
          </div>
        </div>
      </td>
    </tr>
  ))
}

const radiusTokensList = () => {
  const tokenMatrix: Record<string, string | ColorTokenBranch> = {}

  for (const [token, value] of Object.entries(radius.variables)) {
    tokenMatrix[token] = value
  }

  return Object.keys(tokenMatrix).map((token) => (
    <tr
      style={{
        borderBottom: "1px solid var(--pui-color-neutral-border-default)",
      }}
    >
      <td
        style={{
          padding: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ButtonIcon onClick={() => copyToClipboard(`--pui-spacing-${token}`)}>
            <Icon glyph={glyphs.copy} variant="scaled" />
          </ButtonIcon>

          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong>--pui-spacing-{token}</Text>
          </div>
        </div>
      </td>
      <td
        style={{
          padding: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ButtonIcon
            onClick={() => copyToClipboard(tokenMatrix[token] as string)}
          >
            <Icon glyph={glyphs.copy} variant="scaled" />
          </ButtonIcon>
          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong>{tokenMatrix[token]}</Text>
          </div>
        </div>
      </td>
    </tr>
  ))
}

export const _1: Story = {
  tags: ["!dev"],
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading" size="large">
        Colors
      </Text>
      <table style={{ borderCollapse: "collapse", marginBottom: 24 }}>
        <tr
          style={{
            borderBottom: "1px solid var(--pui-color-neutral-border-default)",
          }}
        >
          <td
            style={{
              padding: 16,
            }}
          >
            <Text strong>Token name</Text>
          </td>
          <td
            style={{
              padding: 16,
            }}
          >
            <Text strong>Figma Light</Text>
          </td>
          <td
            style={{
              padding: 16,
            }}
          >
            <Text strong>Figma Dark</Text>
          </td>
        </tr>
        {colorTokensList()}
      </table>
      <Text variant="heading" size="large">
        Spacing
      </Text>
      <table style={{ borderCollapse: "collapse", marginBottom: 24 }}>
        <tr
          style={{
            borderBottom: "1px solid var(--pui-color-neutral-border-default)",
          }}
        >
          <td style={{ padding: 16 }}>
            <Text strong>Token name</Text>
          </td>
          <td
            style={{
              padding: 16,
            }}
          >
            <Text strong>Value</Text>
          </td>
        </tr>
        {spacingTokensList()}
      </table>
      <Text variant="heading" size="large">
        Radius
      </Text>
      <table style={{ borderCollapse: "collapse", marginBottom: 24 }}>
        <tr
          style={{
            borderBottom: "1px solid var(--pui-color-neutral-border-default)",
          }}
        >
          <td style={{ padding: 16 }}>
            <Text strong>Token name</Text>
          </td>
          <td
            style={{
              padding: 16,
            }}
          >
            <Text strong>Value</Text>
          </td>
        </tr>
        {radiusTokensList()}
      </table>
    </div>
  ),
}
