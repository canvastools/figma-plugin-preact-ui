import { Meta, StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { NormalizationStory } from './stories/Normalization.story'
import { MaskStory } from './stories/Mask.story'

import { Input, Text } from '../../index'

import { useStringInput } from './useStringInput'
import type { StringInputConfig, StringInputError } from './useStringInput.types'

const meta: Meta<typeof useStringInput> = {
  title: 'Hooks/useStringInput',
  component: useStringInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A hook that validates and formats a string input based on the provided configuration.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: '<strong>*</strong>Initial string value',
    },
    minLength: {
      control: { type: 'number' },
      description: 'Minimum allowed string length.',
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum allowed string length.',
    },
    allowedCharacters: {
      control: { type: 'text' },
      description: 'Optional set of allowed characters. Any character not included here will be treated as invalid.',
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    trim: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Trim the string before validation.',
    },
    normalizeOnError: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description:
        'Whether to normalize and format the raw value on error, otherwise `undefined` will be returned for normalized value and formatted value.',
    },
    format: {
      control: { disable: true },
      description:
        'Optional formatter function that receives the normalized value and returns a formatted display string (e.g. for masks).',
      table: {
        type: { summary: '(value: string) => string' },
      },
    },
    useStringInput: {
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
    onValueChange: (next: string) => void
  parse: (raw: string) => StringInputParseResult
}  

// Types

type StringInputParseResult = {
  rawValue: string
  normalizedValue: string | undefined
  formattedValue: string | undefined
  error: StringInputError | null
}

type StringInputError = "required" | "too_short" | "too_long" | "invalid_characters"
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof useStringInput>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    value: 'Hello world!',
    minLength: 3,
    maxLength: 12,
    required: false,
    trim: false,
    allowedCharacters: '',
    normalizeOnError: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
const stringInput = useStringInput({
  value: "Hello world!",
  minLength: 3,
  maxLength: 12,
  required: false,
  trim: false,
  normalizeOnError: false,
})

const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? "")  
const [error, setError] = useState(null)

<Input
  value={inputValue}
  placeholder="Any string"
  onValueChange={(e) => {
    setInputValue(e.value)
  }}
  onBlur={(e) => {
    const parsed = stringInput.parse(e.value)

    if (parsed.error) {
      setInputValue(parsed.rawValue)
      setError(parsed.error)
      return
    }

    setInputValue(parsed.formattedValue ?? "")
    setError(null)
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const stringInput = useStringInput(args as unknown as StringInputConfig)

    const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? '')
    const [error, setError] = useState<StringInputError | null>(null)

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Input
          value={inputValue}
          error={!!error}
          placeholder="Any string"
          onValueChange={(e) => {
            setInputValue(e.value)
          }}
          onBlur={(e) => {
            const parsed = stringInput.parse(e.value)

            if (parsed.error) {
              setInputValue(parsed.rawValue)
              setError(parsed.error)
              return
            }

            setInputValue(parsed.formattedValue ?? '')
            setError(null)
          }}
        />
        <Text intentModifier={error ? 'danger' : 'default'}>{error || 'No errors'}</Text>
      </div>
    )
  },
}

export const Normalization = NormalizationStory
export const Mask = MaskStory
