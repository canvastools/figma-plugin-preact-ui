import { StoryObj } from '@storybook/preact-vite'

import { Text } from '../../../index'

import { link } from '../glyphs'

import { Icon } from '../Icon'
import type { IconProps } from '../Icon.types'

type Story = StoryObj<typeof Icon>

const validIntentCombinations = [
  // neutral
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'default',
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'default',
    selected: true,
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'secondary',
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'tertiary',
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'brand',
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'danger',
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'warning',
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'success',
  },
  {
    bg: '--pui-color-neutral-bg-default',
    intent: 'neutral',
    intentModifier: 'component',
  },

  // neutral-inverted
  {
    bg: '--pui-color-neutral-inverted-bg-default',
    intent: 'neutral-inverted',
    intentModifier: 'default',
  },

  // neutral-inverted-fixed
  {
    bg: '--pui-color-neutral-inverted-fixed-bg-default',
    intent: 'neutral-inverted-fixed',
    intentModifier: 'default',
  },
  {
    bg: '--pui-color-neutral-inverted-fixed-bg-default',
    intent: 'neutral-inverted-fixed',
    intentModifier: 'secondary',
  },

  // brand
  {
    bg: '--pui-color-brand-bg-default',
    intent: 'brand',
    intentModifier: 'default',
  },
  {
    bg: '--pui-color-brand-bg-default',
    intent: 'brand',
    intentModifier: 'secondary',
  },

  // danger
  {
    bg: '--pui-color-danger-bg-default',
    intent: 'danger',
    intentModifier: 'default',
  },

  // warning
  {
    bg: '--pui-color-warning-bg-default',
    intent: 'warning',
    intentModifier: 'default',
  },

  // success
  {
    bg: '--pui-color-success-bg-default',
    intent: 'success',
    intentModifier: 'default',
  },
]

const intentCombinations = () => {
  return validIntentCombinations.map(({ bg, intent, intentModifier, selected }) => (
    <div className="sb-row sb-width-full sb-gap-16" style={{ alignItems: 'center' }}>
      <Text fullWidth>
        {intent}, {intentModifier}
        {selected ? ', selected' : ''}
      </Text>

      <div
        style={{
          backgroundColor: `var(${bg})`,
        }}
      >
        <div
          className="sb-padding-16"
          style={{
            backgroundColor: `var(${bg}${selected ? '-selected' : ''})`,
          }}
        >
          <Icon
            glyph={link}
            intent={intent as IconProps['intent']}
            intentModifier={intentModifier as IconProps['intentModifier']}
            selected={selected}
          />
        </div>
      </div>
    </div>
  ))
}

export const IntentStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Icon
  glyph={help}
  intent="neutral"
/>

<Icon
  glyph={help}
  intent="neutral"
  intentModifier="secondary"
/>

<Icon
  glyph={help}
  intent="brand"
/>
`,
      },
    },
  },
  render: () => <div className="sb-column sb-width-420 sb-gap-16">{intentCombinations()}</div>,
}
