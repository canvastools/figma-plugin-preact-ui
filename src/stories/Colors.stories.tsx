import { Fragment } from 'preact/compat'
import { Meta, StoryObj } from '@storybook/preact-vite'
import { useState } from 'preact/hooks'

import { figmaLight, figmaDark, figjamLight } from '../themes'
import type { ColorTokenTree, TokenBranch } from '../themes'

import { Stack } from '../index'
import { Spacing as SpacingComponent } from '../index'
import { Checkbox } from '../index'
import { Text } from '../index'
import { ColorSwatch } from '../index'
import { Icon } from '../index'
import { ButtonIcon } from '../index'
import { copy as copyGlyph } from '../index'
import { hexAlphaToColor } from '../index'
import { Color } from '../index'

import { COLOR_DOC_THEMES, copyToClipboard } from './utils'

const meta: Meta = {
  title: 'Variables/Colors',
  parameters: {
    docs: {
      source: {
        code: `
// CSS

.element {
  color: var(--pui-color-neutral-text-default);
}

// JS

import { figmaLight } from 'figma-plugin-preact-ui' // or figmaDark, figjamLight

const style = {
  color: figmaLight.variables.neutral.text.default,
}

function App() {
  return (
    <div class="app" {...style}>
      Hello world!
    </div>
  )
}`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

type ThemeMap = Record<string, ColorTokenTree>

function flattenTokens(obj: TokenBranch, path: string[] = []): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(obj)) {
    const newPath = [...path, key]
    if (typeof value === 'string') {
      result[newPath.join('-')] = value
    } else if (typeof value === 'object' && value !== null) {
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
  themes: ThemeMap,
) {
  const flattened: Record<string, Record<string, string | undefined>> = {}

  const enabledIntents = new Set(
    Object.entries(groups.intents)
      .filter(([, isEnabled]) => isEnabled)
      .map(([intent]) => intent),
  )
  const enabledElements = new Set(
    Object.entries(groups.elements)
      .filter(([, isEnabled]) => isEnabled)
      .map(([element]) => element),
  )

  for (const [themeName, theme] of Object.entries(themes)) {
    const flat = flattenTokens(theme.variables)
    for (const [token, value] of Object.entries(flat)) {
      const segments = token.split('-')
      const firstElementIdx = segments.findIndex((s) => s in groups.elements)
      const intent = firstElementIdx > 0 ? segments.slice(0, firstElementIdx).join('-') : segments[0]
      const element = firstElementIdx > 0 ? segments[firstElementIdx] : undefined

      if (!enabledIntents.has(intent)) continue

      if (element && element in groups.elements && !enabledElements.has(element)) continue

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

const colorThemes: ThemeMap = {
  figmaLight,
  figmaDark,
  figjamLight,
}

const colorTokensList = (groups: {
  intents: Record<string, boolean>
  elements: Record<string, boolean>
  themes: Record<string, boolean>
}) => {
  const tokenMatrix = buildTokenMatrix(groups, colorThemes)

  const tokens = Object.keys(tokenMatrix)
  const enabledIntents = Object.keys(groups.intents).filter((i) => groups.intents[i])
  const enabledElements = Object.keys(groups.elements).filter((e) => groups.elements[e])
  const enabledThemeKeys = COLOR_DOC_THEMES.filter((t) => groups.themes[t.key]).map((t) => t.key)

  const parseToken = (token: string) => {
    const parts = token.split('-')
    const firstElementIdx = parts.findIndex((p) => p in groups.elements)
    const intent = firstElementIdx > 0 ? parts.slice(0, firstElementIdx).join('-') : parts[0]
    const element = firstElementIdx > 0 ? parts[firstElementIdx] : undefined
    return { intent, element }
  }

  const renderTokenRow = (token: string) => (
    <tr key={`token-${token}`} className="sb-variables-table__row-border">
      <td className="sb-variables-table__cell">
        <div className="sb-variables-table__flex">
          <ButtonIcon onClick={() => copyToClipboard(`--pui-color-${token}`)}>
            <Icon glyph={copyGlyph} />
          </ButtonIcon>
          <div className="sb-variables-table__name">
            <Text strong wrap={false}>
              --pui-color-{token}
            </Text>
          </div>
        </div>
      </td>
      {enabledThemeKeys.map((theme) => (
        <td key={theme} className="sb-variables-table__cell">
          {tokenMatrix[token][theme] ? (
            <div className="sb-variables-table__flex--gap">
              <ButtonIcon onClick={() => copyToClipboard(tokenMatrix[token][theme] as string)}>
                <Icon glyph={copyGlyph} />
              </ButtonIcon>
              <ColorSwatch disabled fill={hexAlphaToColor(tokenMatrix[token][theme]) as Color} />
              <div className="sb-variables-table__name">
                <Text strong wrap={false}>
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

    rows.push(
      <tr key={`intent-divider-${intent}`} className="sb-variables-table__row-intent">
        <td colSpan={1 + enabledThemeKeys.length} className="sb-variables-table__cell--compact">
          <Text strong>{intent}</Text>
        </td>
      </tr>,
    )

    const remaining = new Set(intentTokens)

    for (const element of enabledElements) {
      const elemTokens = intentTokens.filter((t) => parseToken(t).element === element)
      if (elemTokens.length === 0) continue

      rows.push(
        <tr key={`element-divider-${intent}-${element}`} className="sb-variables-table__row-border">
          <td colSpan={1 + enabledThemeKeys.length} className="sb-variables-table__cell--compact">
            <Text>{element}</Text>
          </td>
        </tr>,
      )

      elemTokens.forEach((t) => {
        rows.push(renderTokenRow(t))
        remaining.delete(t)
      })
    }

    Array.from(remaining)
      .sort()
      .forEach((t) => rows.push(renderTokenRow(t)))
  }

  return rows
}

export const Colors: Story = {
  tags: ['!dev'],
  globals: {
    background: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Color themes are controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window.<br/> For FigJam, use the `.figjam` class on the plugin root (see `dist/themes.css`).',
      },
    },
  },
  render: () => {
    const [groups, setGroups] = useState({
      intents: {
        neutral: true,
        'neutral-inverted': true,
        'neutral-fixed': true,
        'neutral-inverted-fixed': true,
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
                key={intent}
                checked={value}
                label={intent}
                onCheckedChange={(args) =>
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
                key={element}
                checked={value}
                label={element}
                onCheckedChange={(args) =>
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
                key={theme}
                checked={value}
                label={theme}
                onCheckedChange={(args) =>
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
        <div className="sb-column sb-gap-16 sb-variables-table-wrap">
          <table className="sb-variables-table">
            <tr className="sb-variables-table__row-border">
              <td className="sb-variables-table__cell">
                <Text strong>Token name</Text>
              </td>
              {COLOR_DOC_THEMES.filter((t) => groups.themes[t.key]).map((t) => (
                <td key={t.key} className="sb-variables-table__cell">
                  <Text strong>{t.label}</Text>
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
