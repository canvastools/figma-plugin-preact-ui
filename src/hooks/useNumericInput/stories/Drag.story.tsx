import { StoryObj } from '@storybook/preact-vite'

import { useState } from 'preact/hooks'

import { Icon, Input, Text, opacity } from '../../../index'

import { useNumericInput } from '../useNumericInput'
import type { NumericInputConfig } from '../useNumericInput.types'

type Story = StoryObj<typeof useNumericInput>

export const DragStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const numericInput = useNumericInput({
  value: "50%",
  unit: "%",
  min: 0,
  max: 100,
  step: 1,
  stepLarge: 10,
})

const [inputValue, setInputValue] = useState("50%")

const dragProps = numericInput.getDragProps({
  disabled: false,
  onChange: (next) => setInputValue(numericInput.parse(String(next)).formattedValue ?? String(next)),
  onCommit: (next) => console.log("commit", next),
})

<Input
  value={inputValue}
  focusOnPrefix
  prefix={
    <span {...dragProps}>
      <Icon glyph={opacity} intentModifier="secondary" />
    </span>
  }
  onValueChange={(args) => setInputValue(args.value)}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>`,
      },
    },
  },
  render: () => {
    const [inputValue, setInputValue] = useState('50%')
    const [committed, setCommitted] = useState<number | string>('50%')

    const numericInput = useNumericInput({
      value: inputValue,
      unit: '%',
      min: 0,
      max: 100,
      precision: 0,
      step: 1,
      stepLarge: 10,
      required: true,
      normalizeOnError: true,
    } as NumericInputConfig)

    const format = (next: number | string) => numericInput.parse(String(next)).formattedValue ?? String(next)

    const dragProps = numericInput.getDragProps({
      onChange: (next) => setInputValue(format(next)),
      onCommit: (next) => setCommitted(format(next)),
    })

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Input
          value={inputValue}
          placeholder="Opacity"
          focusOnPrefix
          selectOnFocus
          prefix={
            <span {...dragProps} style={{ ...dragProps.style, display: 'flex', alignItems: 'center' }}>
              <Icon glyph={opacity} intentModifier="secondary" />
            </span>
          }
          onValueChange={(args) => setInputValue(args.value)}
          onKeyDown={(args) => numericInput.handleKeyDown(args, (next) => setInputValue(format(next)))}
          onBlur={(args) => setInputValue(format(numericInput.parse(args.value).normalizedValue ?? 0))}
        />
        <Text>committed: "{committed}"</Text>
      </div>
    )
  },
}
