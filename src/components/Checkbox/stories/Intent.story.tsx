import { StoryObj } from '@storybook/preact'

import { Text } from '../../../index'

import { Checkbox } from '../Checkbox'
import type { CheckboxProps } from '../Checkbox.types'

type Story = StoryObj<typeof Checkbox>

const validIntentCombinations = [
  // neutral
  {
    intent: 'neutral',
    intentModifier: 'default',
  },

  // brand
  {
    intent: 'brand',
    intentModifier: 'default',
  },
]

const intentCombinations = () => {
  return validIntentCombinations.map(({ intent, intentModifier }) => (
    <div className="sb-row sb-width-full sb-gap-16" style={{ alignItems: 'center' }}>
      <Text fullWidth>
        {intent}, {intentModifier}
      </Text>

      <Checkbox
        intent={intent as CheckboxProps['intent']}
        intentModifier={intentModifier as CheckboxProps['intentModifier']}
        defaultChecked={true}
        label="Checked True"
      />

      <Checkbox
        intent={intent as CheckboxProps['intent']}
        intentModifier={intentModifier as CheckboxProps['intentModifier']}
        defaultChecked={false}
        label="Checked False"
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
        language: 'tsx',
        code: `
<Checkbox intent="neutral" />

<Checkbox intent="brand" />
`,
      },
    },
  },
  render: () => <div className="sb-column sb-width-full sb-gap-16">{intentCombinations()}</div>,
}
