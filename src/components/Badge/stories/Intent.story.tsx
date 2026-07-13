import { StoryObj } from '@storybook/preact-vite'

import { Text } from '../../../index'

import { Badge } from '../Badge'
import type { BadgeProps } from '../Badge.types'

type Story = StoryObj<typeof Badge>

const validIntentCombinations = [
  // neutral
  {
    intent: 'neutral',
    intentModifier: 'default',
  },
  {
    intent: 'neutral',
    intentModifier: 'secondary',
  },
  {
    intent: 'neutral',
    intentModifier: 'brand',
  },
  {
    intent: 'neutral',
    intentModifier: 'danger',
  },
  {
    intent: 'neutral',
    intentModifier: 'warning',
  },
  {
    intent: 'neutral',
    intentModifier: 'success',
  },
  {
    intent: 'neutral',
    intentModifier: 'component',
  },
  {
    intent: 'neutral',
    intentModifier: 'component-secondary',
  },
  {
    intent: 'neutral',
    intentModifier: 'slot',
  },
  {
    intent: 'neutral',
    intentModifier: 'slot-secondary',
  },

  // neutral-inverted
  {
    intent: 'neutral-inverted',
    intentModifier: 'default',
  },

  // brand
  {
    intent: 'brand',
    intentModifier: 'default',
  },
  {
    intent: 'brand',
    intentModifier: 'secondary',
  },

  // danger
  {
    intent: 'danger',
    intentModifier: 'default',
  },

  // warning
  {
    intent: 'warning',
    intentModifier: 'default',
  },

  // success
  {
    intent: 'success',
    intentModifier: 'default',
  },
]

const intentCombinations = () => {
  return validIntentCombinations.map(({ intent, intentModifier }) => (
    <div className="sb-row sb-width-full sb-gap-16" style={{ alignItems: 'center' }}>
      <Text fullWidth>
        {intent}, {intentModifier}
      </Text>

      <Badge intent={intent as BadgeProps['intent']} intentModifier={intentModifier as BadgeProps['intentModifier']}>
        Badge
      </Badge>
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
<Badge intent="neutral">{children}</Badge>

<Badge 
  intent="neutral"
  intentModifier="secondary"
>
  {children}
</Badge>
`,
      },
    },
  },
  render: () => <div className="sb-column sb-width-300 sb-gap-16">{intentCombinations()}</div>,
}
