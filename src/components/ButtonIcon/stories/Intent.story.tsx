import { StoryObj } from '@storybook/preact-vite'

import { Text, Icon, link } from '../../../index'

import { ButtonIcon } from '../ButtonIcon'
import type { ButtonIconProps } from '../ButtonIcon.types'

type Story = StoryObj<typeof ButtonIcon>

const validIntentCombinations = [
  // neutral
  {
    intent: 'neutral',
    intentModifier: 'default',
    ghost: false,
  },
  {
    intent: 'neutral',
    intentModifier: 'default',
    ghost: true,
  },
  {
    intent: 'neutral',
    intentModifier: 'secondary',
    ghost: false,
  },
  {
    intent: 'neutral',
    intentModifier: 'brand',
    ghost: false,
  },
]

const intentCombinations = () => {
  return validIntentCombinations.map(({ intent, intentModifier, ghost }) => (
    <div className="sb-row sb-width-full sb-gap-16" style={{ alignItems: 'center' }}>
      <Text fullWidth>
        {intent}, {intentModifier}
        {ghost ? ', ghost' : ''}
      </Text>

      <ButtonIcon
        icon={{ glyph: link }}
        intent={intent as ButtonIconProps['intent']}
        intentModifier={intentModifier as ButtonIconProps['intentModifier']}
        ghost={ghost}
      />
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
<ButtonIcon intent="neutral">{children}</ButtonIcon>

<ButtonIcon 
  intent="neutral"
  intentModifier="default"
>
  {children}
</ButtonIcon>

<ButtonIcon ghost>{children}</ButtonIcon>
`,
      },
    },
  },
  render: () => <div className="sb-column sb-width-420 sb-gap-16">{intentCombinations()}</div>,
}
