import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Input, Text } from "../../../index"

import { useStringInput } from "../useStringInput"
import type { StringInputConfig } from "../useStringInput.types"


type Story = StoryObj<typeof useStringInput>

export const NormalizationStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "To replicate an experience similar to Figma, errors should be avoided and default values should be applied in most cases.<br/>Value normalisation, trimming and allowed characters ensure that a value is always returned.",
      },
      source: {
        language: "tsx",
        code: `
const stringInput = useStringInput({
  value: "",
  minLength: 3,
  maxLength: 12,
  required: false,
  trim: true,
  allowedCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-!*()[] .",
  normalizeOnError: true,
})

const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? "")     

<Input
  value={inputValue}
  placeholder="Any string"
  onValueChange={(e) => {
    setInputValue(e.value)
  }}
  onBlur={(e) => {
    const parsed = stringInput.parse(e.value)

    if (
      parsed.error === "required" ||
      parsed.error === "too_short"
    ) {
      setInputValue("Hello world!")
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
      value: "abc/*123",
      minLength: 3,
      maxLength: 12,
      required: false,
      trim: true,
      allowedCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      normalizeOnError: true,
    } as StringInputConfig)

    const [inputValue, setInputValue] = useState(
      stringInput.formattedValue ?? ""
    )

    const [parsed, setParsed] = useState({
      rawValue: "abc/*123",
      normalizedValue: "abc123",
    })

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Input
          value={inputValue}
          placeholder="Any string"
          onValueChange={(e) => {
            setInputValue(e.value)
          }}
          onBlur={(e) => {
            const parsed = stringInput.parse(e.value)

            setParsed({
              rawValue: parsed.rawValue,
              normalizedValue: parsed.normalizedValue ?? ""
            })

            if (
              parsed.error === "required" ||
              parsed.error === "too_short"
            ) {
              setInputValue("Hello world!")
              return
            }

            setInputValue(parsed.formattedValue ?? "")
          }}
        />
        <Text>rawValue: "{parsed.rawValue}"</Text>
        <Text>normalizedValue: "{parsed.normalizedValue}"</Text>
      </div>
    )
  },
}
