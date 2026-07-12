import { StoryObj } from '@storybook/preact-vite'

import { useState } from 'preact/hooks'

import { Input, Text } from '../../../index'

import { useNumericInput } from '../useNumericInput'
import type { NumericInputConfig } from '../useNumericInput.types'

type Story = StoryObj<typeof useNumericInput>

export const DoubleValueStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story:
          'A double value can be used for fields that combine pairs of values, such as padding top/bottom and left/right.<br/>When a comma is present, the hook returns an array of values.',
      },
      source: {
        code: `
const numericInput = useNumericInput({
  value: "",
  min: 0,
  max: 100,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
  doubleValue: true,
  normalizeOnError: true,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValues?.join(", ") ?? numericInput.formattedValue ?? "")

<Input
  value={inputValue}
  placeholder="10, 20"
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    if (
      parsed.error === "required" ||
      parsed.error === "invalid_number"
    ) {
      setInputValue(String("Auto"))
      return
    }

    if (parsed.formattedValues) {
      setInputValue(parsed.formattedValues.join(", "))
    } else {
      setInputValue(parsed.formattedValue ?? "")
    }
  }}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>

`,
      },
    },
  },
  render: () => {
    const numericInput = useNumericInput({
      value: '25,75',
      doubleValue: true,
      min: 0,
      max: 100,
      precision: 0,
      step: 1,
      stepLarge: 10,
      required: false,
      normalizeOnError: true,
    } as NumericInputConfig)

    const [inputValue, setInputValue] = useState(numericInput.formattedValues?.join(', ') ?? numericInput.formattedValue ?? '')

    const [parsed, setParsed] = useState({
      rawValue: '25,75',
      normalizedValues: [25, 75],
      formattedValues: ['25', '75'],
    })

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Input
          value={inputValue}
          placeholder="10, 20"
          onValueChange={(args) => setInputValue(args.value)}
          onBlur={(args) => {
            const parsed = numericInput.parse(args.value)

            setParsed({
              rawValue: parsed.rawValue,
              normalizedValues: parsed.normalizedValues ?? [],
              formattedValues: parsed.formattedValues ?? [],
            })

            if (parsed.error === 'required' || parsed.error === 'invalid_number') {
              setInputValue(String('Auto'))
              return
            }

            if (parsed.formattedValues) {
              setInputValue(parsed.formattedValues.join(', '))
            } else {
              setInputValue(parsed.formattedValue ?? '')
            }
          }}
          onKeyDown={(args) => numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))}
        />
        <Text>rawValue: "{parsed.rawValue}"</Text>
        <Text>
          normalizedValues: [{parsed.normalizedValues[0]}, {parsed.normalizedValues[1]}]
        </Text>
        <Text>
          formattedValues: ["{parsed.formattedValues[0]}", "{parsed.formattedValues[1]}"]
        </Text>
      </div>
    )
  },
}
