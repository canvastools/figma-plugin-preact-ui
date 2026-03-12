import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Input, Text } from '../../../index'

import { useStringInput } from '../useStringInput'
import type { StringInputConfig } from '../useStringInput.types'

type Story = StoryObj<typeof useStringInput>

export const MaskStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: 'A mask function can be provided to format the input value as desired.',
      },
      source: {
        language: 'tsx',
        code: `
const stringInput = useStringInput({
  value: "",
  minLength: 4,
  maxLength: 4,
  required: false,
  trim: true,
  allowedCharacters: "0123456789:",
  format: (value) => {
    const digits = value.replace(/\D/g, "")

    if (digits.length <= 2) {
      return \`\${digits.padStart(2, "0")}:00\`
    }

    return digits
      .padStart(4, "0")
      .slice(0, 4)
      .replace(/(\d{2})(\d{2})/, "$1:$2")
  },
  normalizeOnError: true,
})

const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? "")     

<Input
  value={inputValue}
  placeholder="HH:MM"
  onValueChange={(e) => {
    setInputValue(e.value)
  }}
  onBlur={(e) => {
    const parsed = stringInput.parse(e.value)

    if (
      parsed.error === "required" ||
      parsed.error === "too_short"
    ) {
      setInputValue("Username")
      return
    }

    setInputValue(parsed.formattedValue ?? "")
  }}
/>`,
      },
    },
  },
  render: () => {
    const stringInput = useStringInput({
      value: '9h41',
      minLength: 4,
      maxLength: 4,
      required: false,
      trim: true,
      allowedCharacters: '0123456789:',
      format: (value) => {
        const digits = value.replace(/\D/g, '')

        if (digits.length <= 2) {
          return `${digits.padStart(2, '0')}:00`
        }

        return digits
          .padStart(4, '0')
          .slice(0, 4)
          .replace(/(\d{2})(\d{2})/, '$1:$2')
      },
      normalizeOnError: true,
    } as StringInputConfig)

    const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? '')

    const [parsed, setParsed] = useState({
      rawValue: '9h41',
      normalizedValue: '941',
      formattedValue: '9:41',
    })

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Input
          value={inputValue}
          placeholder="HH:MM"
          onValueChange={(e) => {
            setInputValue(e.value)
          }}
          onBlur={(e) => {
            const parsed = stringInput.parse(e.value)

            setParsed({
              rawValue: parsed.rawValue,
              normalizedValue: parsed.normalizedValue ?? '',
              formattedValue: parsed.formattedValue ?? '',
            })

            if (parsed.error === 'required' || parsed.error === 'too_short') {
              setInputValue('00:00')
              return
            }

            setInputValue(parsed.formattedValue ?? '')
          }}
        />
        <Text>rawValue: "{parsed.rawValue}"</Text>
        <Text>normalizedValue: "{parsed.normalizedValue}"</Text>
        <Text>formattedValue: "{parsed.formattedValue}"</Text>
      </div>
    )
  },
}
