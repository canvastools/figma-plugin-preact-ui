import { Fragment } from "preact/compat"
import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"

import { figmaLight, figmaDark, figjamLight, spacing, radius } from "../themes"
import type { ColorTokenTree, ColorTokenBranch } from "../themes"

import { Stack } from "../index"
import { Spacing as SpacingComponent } from "../index"
import { Checkbox } from "../index"
import { Text } from "../index"
import { ColorSwatch } from "../index"
import { Icon } from "../index"
import { ButtonIcon } from "../index"
import { copy as copyGlyph } from "../index"

const meta: Meta = {
  title: "Overview/Variables",
  parameters: {},
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

function buildTokenMatrix(
  groups: {
    intents: Record<string, boolean>
    elements: Record<string, boolean>
    themes: Record<string, boolean>
  },
  themes: ThemeMap
) {
  const flattened: Record<string, Record<string, string | undefined>> = {}

  const enabledIntents = new Set(
    Object.entries(groups.intents)
      .filter(([, isEnabled]) => isEnabled)
      .map(([intent]) => intent)
  )
  const enabledElements = new Set(
    Object.entries(groups.elements)
      .filter(([, isEnabled]) => isEnabled)
      .map(([element]) => element)
  )

  for (const [themeName, theme] of Object.entries(themes)) {
    const flat = flattenTokens(theme.variables)
    for (const [token, value] of Object.entries(flat)) {
      const segments = token.split("-")
      // intent is everything before the first known element segment
      const firstElementIdx = segments.findIndex((s) => s in groups.elements)
      const intent =
        firstElementIdx > 0
          ? segments.slice(0, firstElementIdx).join("-")
          : segments[0]
      const element =
        firstElementIdx > 0 ? segments[firstElementIdx] : undefined

      // Filter by intent first
      if (!enabledIntents.has(intent)) continue

      // If token has an element and it's one of the known element groups, respect the element filters.
      // If the element is not among known groups (e.g., shadow tokens), do not filter by elements.
      if (
        element &&
        element in groups.elements &&
        !enabledElements.has(element)
      )
        continue

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

const colorTokensList = (groups: {
  intents: Record<string, boolean>
  elements: Record<string, boolean>
  themes: Record<string, boolean>
}) => {
  const tokenMatrix = buildTokenMatrix(groups, {
    figmaLight,
    figmaDark,
    figjamLight,
  })

  const tokens = Object.keys(tokenMatrix)
  const enabledIntents = Object.keys(groups.intents).filter(
    (i) => groups.intents[i]
  )
  const enabledElements = Object.keys(groups.elements).filter(
    (e) => groups.elements[e]
  )
  const themeOrder: Array<{ key: string; label: string }> = [
    { key: "figmaLight", label: "Figma Light" },
    { key: "figmaDark", label: "Figma Dark" },
    { key: "figjamLight", label: "Figjam Light" },
  ]
  const enabledThemeKeys = themeOrder
    .filter((t) => groups.themes[t.key])
    .map((t) => t.key)

  const parseToken = (token: string) => {
    const parts = token.split("-")
    const firstElementIdx = parts.findIndex((s) => s in groups.elements)
    const intent =
      firstElementIdx > 0 ? parts.slice(0, firstElementIdx).join("-") : parts[0]
    const element = firstElementIdx > 0 ? parts[firstElementIdx] : undefined
    return { intent, element }
  }

  const renderTokenRow = (token: string) => (
    <tr
      key={`token-${token}`}
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
            <Icon glyph={copyGlyph} variant="scaled" />
          </ButtonIcon>

          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong noWrap>
              --pui-color-{token}
            </Text>
          </div>
        </div>
      </td>
      {enabledThemeKeys.map((theme) => (
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
                <Icon glyph={copyGlyph} variant="scaled" />
              </ButtonIcon>
              <ColorSwatch hex={tokenMatrix[token][theme]} />
              <div
                style={{
                  width: "100%",
                  paddingLeft: 16,
                }}
              >
                <Text strong noWrap>
                  {tokenMatrix[token][theme]}
                </Text>
              </div>
            </div>
          ) : null}
        </td>
      ))}
    </tr>
  )

  const rows: preact.JSX.Element[] = []

  for (const intent of enabledIntents) {
    const intentTokens = tokens.filter((t) => parseToken(t).intent === intent)
    if (intentTokens.length === 0) continue

    // Intent divider row
    rows.push(
      <tr
        key={`intent-divider-${intent}`}
        style={{
          background: "var(--pui-color-neutral-bg-secondary)",
          borderBottom: "1px solid var(--pui-color-neutral-border-default)",
        }}
      >
        <td colSpan={1 + enabledThemeKeys.length} style={{ padding: 12 }}>
          <Text strong>{intent}</Text>
        </td>
      </tr>
    )

    // Track remaining tokens to handle those without known elements
    const remaining = new Set(intentTokens)

    for (const element of enabledElements) {
      const elemTokens = intentTokens.filter(
        (t) => parseToken(t).element === element
      )
      if (elemTokens.length === 0) continue

      // Element divider row
      rows.push(
        <tr
          key={`element-divider-${intent}-${element}`}
          style={{
            borderBottom: "1px solid var(--pui-color-neutral-border-default)",
          }}
        >
          <td colSpan={1 + enabledThemeKeys.length} style={{ padding: 12 }}>
            <Text>{element}</Text>
          </td>
        </tr>
      )

      elemTokens.forEach((t) => {
        rows.push(renderTokenRow(t))
        remaining.delete(t)
      })
    }

    // Tokens without a known element (e.g., shadow)
    Array.from(remaining)
      .sort()
      .forEach((t) => rows.push(renderTokenRow(t)))
  }

  return rows
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
            <Icon glyph={copyGlyph} variant="scaled" />
          </ButtonIcon>

          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong noWrap>
              --pui-spacing-{token}
            </Text>
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
            <Icon glyph={copyGlyph} variant="scaled" />
          </ButtonIcon>
          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong noWrap>
              {tokenMatrix[token]}
            </Text>
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
            <Icon glyph={copyGlyph} variant="scaled" />
          </ButtonIcon>

          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong noWrap>
              --pui-spacing-{token}
            </Text>
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
            <Icon glyph={copyGlyph} variant="scaled" />
          </ButtonIcon>
          <div
            style={{
              width: "100%",
              paddingLeft: 16,
            }}
          >
            <Text strong noWrap>
              {tokenMatrix[token]}
            </Text>
          </div>
        </div>
      </td>
    </tr>
  ))
}

export const _1: Story = {
  tags: ["!dev", "!autodocs", "!test"],
  render: () => <div></div>,
}

export const Colors: Story = {
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Preview of all CSS variables used in the library.<br/> It is controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window.<br/> In addition, you can add classes to the plugin window to style the UI for specific Figma themes like `.figjam-light`.",
      },
    },
  },
  render: () => {
    const [groups, setGroups] = useState({
      intents: {
        neutral: true,
        "neutral-inverted": true,
        "neutral-inverted-fixed": true,
        brand: true,
        danger: true,
        warning: true,
        success: true,
        system: true,
        shadow: true,
      },
      elements: {
        bg: true,
        text: true,
        icon: true,
        border: true,
      },
      themes: {
        figmaLight: true,
        figmaDark: true,
        figjamLight: true,
      },
    })

    return (
      <Fragment>
        <Stack spacing={1000} direction="row">
          <Stack spacing={200} direction="column">
            <Text strong>Intents</Text>
            {Object.entries(groups.intents).map(([intent, value]) => (
              <Checkbox
                checked={value}
                label={intent}
                onChange={(args) =>
                  setGroups({
                    ...groups,
                    intents: { ...groups.intents, [intent]: args.checked },
                  })
                }
              />
            ))}
          </Stack>
          <Stack spacing={200} direction="column">
            <Text strong>Elements</Text>
            {Object.entries(groups.elements).map(([element, value]) => (
              <Checkbox
                checked={value}
                label={element}
                onChange={(args) =>
                  setGroups({
                    ...groups,
                    elements: { ...groups.elements, [element]: args.checked },
                  })
                }
              />
            ))}
          </Stack>
          <Stack spacing={200} direction="column">
            <Text strong>Themes</Text>
            {Object.entries(groups.themes).map(([theme, value]) => (
              <Checkbox
                checked={value}
                label={theme}
                onChange={(args) =>
                  setGroups({
                    ...groups,
                    themes: { ...groups.themes, [theme]: args.checked },
                  })
                }
              />
            ))}
          </Stack>
        </Stack>
        <SpacingComponent size={400} />
        <div className="sb-column sb-gap-16" style={{ overflowX: "scroll" }}>
          <table style={{ borderCollapse: "collapse", marginBottom: 24 }}>
            <tr
              style={{
                borderBottom:
                  "1px solid var(--pui-color-neutral-border-default)",
              }}
            >
              <td
                style={{
                  padding: 16,
                }}
              >
                <Text strong>Token name</Text>
              </td>
              {[
                ["figmaLight", "Figma Light"],
                ["figmaDark", "Figma Dark"],
                ["figjamLight", "Figjam Light"],
              ]
                .filter(
                  ([key]) => groups.themes[key as keyof typeof groups.themes]
                )
                .map(([, label]) => (
                  <td
                    style={{
                      padding: 16,
                    }}
                  >
                    <Text strong>{label}</Text>
                  </td>
                ))}
            </tr>
            {colorTokensList(groups)}
          </table>
        </div>
      </Fragment>
    )
  },
}

export const Spacing: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="sb-column sb-gap-16" style={{ overflowX: "scroll" }}>
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
    </div>
  ),
}

export const Radius: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="sb-column sb-gap-16" style={{ overflowX: "scroll" }}>
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
