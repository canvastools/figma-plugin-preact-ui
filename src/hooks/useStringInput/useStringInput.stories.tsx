import { Meta, StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { useStringInput } from "./useStringInput"
import {
  type StringInputConfig,
  type StringInputError,
  type StringInputParseResult,
} from "./useStringInput.types"

import { Input, Section, Stack, Text } from "../../index"

const meta: Meta<typeof useStringInput> = {
  title: "Hooks/useStringInput",
  component: useStringInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A hook that validates and normalizes a string based on the provided configuration.",
      },
    },
  },
  argTypes: {
    value: {
      control: { disable: true },
      description: "Initial string value",
      table: {
        type: { summary: "string" },
      },
    },
    required: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Whether the value is required.",
      table: {
        type: { summary: "boolean" },
      },
    },
    minLength: {
      control: { type: "number" },
      description: "Minimum allowed string length.",
      table: {
        type: { summary: "number" },
      },
    },
    maxLength: {
      control: { type: "number" },
      description: "Maximum allowed string length.",
      table: {
        type: { summary: "number" },
      },
    },
    allowedCharacters: {
      control: { type: "text" },
      description:
        "Optional set of allowed characters. Any character not included here will be treated as invalid.",
      table: {
        type: { summary: "string" },
      },
    },
    trim: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Trim the string before validation.",
      table: {
        type: { summary: "boolean" },
      },
    },
    normalizeOnError: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Whether to normalize and format the raw value on error, otherwise undefined will be returned for normalized value and formatted value.",
      table: {
        type: { summary: "boolean" },
      },
    },
    mask: {
      control: { disable: true },
      description:
        "Optional formatter that receives the normalized value and returns a formatted display string (e.g. for time masks).",
      table: {
        type: { summary: "(value: string) => string" },
      },
    },
    useStringInput: {
      control: { disable: true },
      description: `The hook instance.<br/><pre>interface StringInput {
  parse: (raw: string) => StringInputParseResult
  handleKeyDown: (args: { event: KeyboardEvent; value: string }) => void
}</pre>

<pre>interface StringInputParseResult {
  // raw value
rawValue: string 
  // raw value after trimming, maxLength clamping, and allowedCharacters filtering
  normalizedValue: string | undefined 
  // normalized value after applying mask
  formattedValue: string | undefined 
  error: StringInputError | null
}</pre>

<pre>type StringInputError = "required" | "too_short" | "too_long" | "invalid_characters"</pre>
`,
      table: {
        type: { summary: "Hook" },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof useStringInput>

export const Demo: Story = {
  args: {
    required: false,
    minLength: 3,
    maxLength: 12,
    trim: false,
    normalizeOnError: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const stringInput = useStringInput({
      value: "Hello there", // initial value
      ...args,
    })

    const [inputValue, setInputValue] = useState(
      stringInput.formattedValue ?? ""
    )
    const [error, setError] = useState<StringInputError | null>(null)

    return (
      <div className="sb-column sb-width-300">
        <Section>
          <Stack spacing={200}>
            <Input
              value={inputValue}
              error={!!error}
              placeholder="Your name"
              onChange={(e) => {
                setInputValue(e.value)
              }}
              onBlur={(e) => {
                const parsed = stringInput.parse(e.value)

                console.log(parsed)

                if (parsed.error) {
                  setInputValue(parsed.rawValue)
                  setError(parsed.error)
                  return
                }

                setInputValue(parsed.formattedValue ?? "")
                setError(null)
              }}
            />
            <Text intentModifiers={error ? "danger" : "default"}>
              {error || "No errors"}
            </Text>
          </Stack>
        </Section>
      </div>
    )
  },
}

export const MaskAndPattern: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const timeMask = (value: string): string => {
      const digits = value.replace(/\D/g, "").slice(0, 4)

      if (digits.length <= 2) return digits

      const hours = digits.slice(0, 2)
      const minutes = digits.slice(2)
      return `${hours}:${minutes}`
    }

    const stringInput = useStringInput({
      value: "", // initial value
      required: false,
      trim: true,
      allowedCharacters: "0123456789:",
      mask: timeMask,
      normalizeOnError: true,
    })

    const [inputValue, setInputValue] = useState(
      stringInput.formattedValue ?? ""
    )
    const [error, setError] = useState<StringInputError | null>(null)

    return (
      <div className="sb-column sb-width-300">
        <Section>
          <Stack spacing={200}>
            <Input
              value={inputValue}
              error={!!error}
              placeholder="HH:MM (24h)"
              onChange={(e) => {
                const parsed: StringInputParseResult = stringInput.parse(
                  e.value
                )

                setInputValue(parsed.formattedValue ?? "")

                if (parsed.error) {
                  setError(parsed.error)
                  return
                }

                setError(null)
              }}
              onKeyDown={(e) => stringInput.handleKeyDown(e)}
            />
            <Text intentModifiers={error ? "danger" : "default"}>
              {error || "No errors"}
            </Text>
          </Stack>
        </Section>
      </div>
    )
  },
}

export const FigmaLikeExperience: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const stringInput = useStringInput({
      value: "", // initial value
      required: true,
      minLength: 1,
      maxLength: 12,
      trim: true,
      allowedCharacters:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-!*()[] .",
      normalizeOnError: true,
    })

    const [inputValue, setInputValue] = useState(
      stringInput.formattedValue ?? ""
    )

    return (
      <div className="sb-column sb-width-300">
        <Section>
          <Stack spacing={200}>
            <Input
              value={inputValue}
              placeholder="Your name"
              onChange={(e) => setInputValue(e.value)}
              onBlur={(e) => {
                const parsed = stringInput.parse(e.value)

                if (
                  parsed.error === "required" ||
                  parsed.error === "too_short"
                ) {
                  setInputValue("Username")
                  return
                }

                if (
                  parsed.error === "too_long" ||
                  parsed.error === "invalid_characters"
                ) {
                  setInputValue(parsed.formattedValue ?? "")
                  return
                }

                setInputValue(parsed.formattedValue ?? "")
              }}
            />
          </Stack>
        </Section>
      </div>
    )
  },
}
