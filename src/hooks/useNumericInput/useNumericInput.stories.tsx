import { Meta, StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { NormalizationStory } from './stories/Normalization.story'
import { DoubleValueStory } from './stories/DoubleValue.story'
import { MathStory } from './stories/Math.story'

import { Input, Text } from '../../index'

import { useNumericInput } from './useNumericInput'
import { type NumericInputError, type NumericInputConfig } from './useNumericInput.types'

const meta: Meta<typeof useNumericInput> = {
  title: 'Hooks/useNumericInput',
  component: useNumericInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A hook that validates and formats a numeric input based on the provided configuration.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: '<strong>*</strong>Initial numeric value',
      table: {
        type: {
          summary: 'number | string',
        },
      },
    },
    unit: {
      control: { type: 'text' },
      description: 'Unit of the value.',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value of the input.',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value of the input.',
    },
    precision: {
      control: { type: 'number' },
      defaultValue: { summary: 0 },
      description:
        'Precision of the value. If 0, the value will be rounded to the nearest integer, otherwise it will be rounded to the nearest precision like 1 = 0.1, 2 = 0.01, etc.',
    },
    step: {
      control: { type: 'number' },
      defaultValue: { summary: 1 },
      description: 'Step size for changing the value.',
    },
    stepLarge: {
      control: { type: 'number' },
      defaultValue: { summary: 10 },
      description: 'Step size for changing the value when `Shift` key is pressed.',
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Whether the value is required.',
    },
    normalizeOnError: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description:
        'Whether to normalize and format the raw value on error, otherwise `undefined` will be returned for normalized value and formatted value.',
    },
    doubleValue: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description:
        'When true, parses a comma-separated pair of numbers (e.g. "12,24") and exposes both values in `normalizedValues` / `formattedValues`.',
    },
    math: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Evaluates simple arithmetic expressions before validation and formatting.',
    },
    useNumericInput: {
      control: { disable: true },
      table: {
        type: {
          summary: 'Hook',
          detail: `
{
  handleKeyDown: (
    args: { 
      event: KeyboardEvent
      value: string
    }
    onValueChange: (next: number) => void
  ) => void
  parse: (
    raw: string // required
    unit: string
  ) => NumericInputParseResult 
}
  
// Types

type NumericInputParseResult = {
  rawValue: string
  normalizedValue: number | undefined
  formattedValue: string | undefined
  normalizedValues: [number, number] | undefined
  formattedValues: [string, string] | undefined
  error: NumericInputError | null
  unit: string | undefined
}

type NumericInputError = "required" | "invalid_number" | "less_than_min" | "greater_than_max" | "not_integer"
`,
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof useNumericInput>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    value: '45',
    unit: '°',
    min: -180,
    max: 180,
    precision: 0,
    step: 1,
    stepLarge: 10,
    required: false,
    doubleValue: false,
    normalizeOnError: false,
    math: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const numericInput = useNumericInput({
  value: "",
  unit: "°",
  min: -180,
  max: 180,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? "")
const [error, setError] = useState(null)

<Input
  value={inputValue}
  error={!!error}
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    if (parsed.error) {
      setInputValue(parsed.rawValue)
      setError(parsed.error)
      return
    }

    setError(null)

    setInputValue(parsed.formattedValue ?? "")
  }}
  onKeyDown={(e) =>
    numericInput.handleKeyDown(e, (next) => setInputValue(numericInput.parse(String(next)).formattedValue ?? ""))
  }
/>
`,
      },
    },
  },
  render: (args) => {
    const numericInput = useNumericInput(args as unknown as NumericInputConfig)

    const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? '')
    const [error, setError] = useState<NumericInputError | null>(null)

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Input
          value={inputValue}
          error={!!error}
          placeholder="Rotation angle"
          onValueChange={(args) => setInputValue(args.value)}
          onBlur={(args) => {
            const parsed = numericInput.parse(args.value)

            if (parsed.error) {
              setInputValue(parsed.rawValue)
              setError(parsed.error)
              return
            }

            setError(null)
            if (parsed.formattedValues) {
              setInputValue(parsed.formattedValues.join(', ') ?? '')
            } else {
              setInputValue(parsed.formattedValue ?? '')
            }
          }}
          onKeyDown={(e) =>
            numericInput.handleKeyDown(e, (next) => setInputValue(numericInput.parse(String(next)).formattedValue ?? ''))
          }
        />
        <Text intentModifier={error ? 'danger' : 'default'}>{error || 'No errors'}</Text>
      </div>
    )
  },
}

export const Normalization = NormalizationStory
export const DoubleValue = DoubleValueStory
export const Math = MathStory
