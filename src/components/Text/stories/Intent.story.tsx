import { StoryObj } from '@storybook/preact-vite'

import { Text } from '../Text'
import type { TextProps } from '../Text.types'

type Story = StoryObj<typeof Text>

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
  {
    bg: '--pui-color-neutral-inverted-fixed-bg-default',
    intent: 'neutral-inverted-fixed',
    intentModifier: 'danger',
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
          width: '200%',
        }}
      >
        <div
          className="sb-padding-16"
          style={{
            backgroundColor: `var(${bg}${selected ? '-selected' : ''})`,
          }}
        >
          <Text intent={intent as TextProps['intent']} intentModifier={intentModifier as TextProps['intentModifier']} fullWidth>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
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
<Text intent="neutral">{children}</Text>

<Text 
  intent="neutral"
  intentModifier="secondary"
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
  render: () => <div className="sb-column sb-width-full sb-gap-16">{intentCombinations()}</div>,
}
