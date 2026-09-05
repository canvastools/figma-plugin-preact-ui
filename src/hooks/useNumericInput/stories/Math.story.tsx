import { StoryObj } from '@storybook/preact-vite'

import { useState } from 'preact/hooks'

import { Input, Text } from '../../../index'

import { useNumericInput } from '../useNumericInput'
import type { NumericInputConfig } from '../useNumericInput.types'

type Story = StoryObj<typeof useNumericInput>

export const MathStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story:
          'Math expressions can be evaluated before validation and formatting.<br/>Supported operators are `+`, `-`, `*`, `/` and `()`.<br/>An expression that does not resolve to a number is an `invalid_number`, so with `normalizeOnError` it reverts to the current value - try `45+10`, then `45+`.',
      },
      source: {
        code: `
const numericInput = useNumericInput({
  value: 55,
  unit: "°",
  min: -180,
  max: 180,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
  normalizeOnError: true,
  math: true,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? "")

<Input
  value={inputValue}
  placeholder="Rotation angle"
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    // normalizeOnError always yields a value: out of range
    // clamps, unreadable input reverts to the current one
    setInputValue(String(parsed.formattedValue))
  }}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>`,
      },
    },
  },
  render: () => {
    const numericInput = useNumericInput({
      value: 55,
      unit: '°',
      min: -180,
      max: 180,
      precision: 0,
      step: 1,
      stepLarge: 10,
      required: false,
      doubleValue: false,
      normalizeOnError: true,
      math: true,
    } as NumericInputConfig)

    const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? '')

    const [parsed, setParsed] = useState({
      rawValue: '45+10',
      normalizedValue: 55,
      formattedValue: '55°',
    })

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Input
          value={inputValue}
          placeholder="Rotation angle"
          onValueChange={(args) => setInputValue(args.value)}
          onBlur={(args) => {
            const parsed = numericInput.parse(args.value)

            setParsed({
              rawValue: parsed.rawValue,
              normalizedValue: parsed.normalizedValue ?? 0,
              formattedValue: parsed.formattedValue ?? '',
            })

            /* normalizeOnError always yields a value: out of range clamps, unreadable input reverts */
            setInputValue(String(parsed.formattedValue))
          }}
          onKeyDown={(args) => numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))}
        />
        <Text>rawValue: "{parsed.rawValue}"</Text>
        <Text>normalizedValue: {parsed.normalizedValue}</Text>
        <Text>formattedValue: "{parsed.formattedValue}"</Text>
      </div>
    )
  },
}
