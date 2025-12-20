import { Meta, StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { useNumericInput } from "./useNumericInput"
import {
  type NumericInputError,
  type NumericInputConfig,
} from "./useNumericInput.types"

import { Input, Stack, Text } from "../../index"

const meta: Meta<typeof useNumericInput> = {
  title: "Hooks/useNumericInput",
  component: useNumericInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A hook that validates and formats a numeric input based on the provided configuration.",
      },
    },
  },
  argTypes: {
    value: {
      control: { disable: true },
      description: "Initial numeric (string) value",
      table: {
        type: {
          summary: "number | string",
        },
      },
    },
    unit: {
      control: { type: "text" },
      description: "Unit of the value.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    min: {
      control: { type: "number" },
      description: "Minimum value of the input.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    max: {
      control: { type: "number" },
      description: "Maximum value of the input.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    precision: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description:
        "Precision of the value. If 0, the value will be rounded to the nearest integer, otherwise it will be rounded to the nearest precision like 1 = 0.1, 2 = 0.01, etc.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    step: {
      control: { type: "number" },
      defaultValue: { summary: 1 },
      description: "Step size for changing the value.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    stepLarge: {
      control: { type: "number" },
      defaultValue: { summary: 10 },
      description:
        "Step size for changing the value when shift key is pressed.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    required: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Whether the value is required.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    normalizeOnError: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Whether to normalize and format the raw value on error, otherwise undefined will be returned for normalized value and formatted value.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    useNumericInput: {
      control: { disable: true },
      description: `The hook instance.<br/><pre>interface NumericInput {
  handleKeyDown: (args: { event: KeyboardEvent; value: string }, onValueChange?: (next: number) => void) => void
  // parse the raw value and return the parse result
  parse: (raw: string) => NumericInputParseResult 
}</pre>

<pre>interface NumericInputParseResult {
  rawValue: string 
  // raw value after precision rounding, min/max clamping
  normalizedValue: number | undefined 
  // normalized value after adding unit
  formattedValue: string | undefined 
  error: NumericInputError | null
}</pre>

<pre>type NumericInputError = "required" | "invalid_number" | "less_than_min" | "greater_than_max" | "not_integer"</pre>
`,
      table: {
        type: {
          summary: "Hook",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof useNumericInput>

export const Demo: Story = {
  args: {
    unit: "°",
    min: -180,
    max: 180,
    precision: 0,
    step: 1,
    stepLarge: 10,
    required: false,
    normalizeOnError: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const numericInput = useNumericInput({
      value: 45, // initial value
      ...args,
    } as NumericInputConfig)

    const [inputValue, setInputValue] = useState(
      numericInput.formattedValue ?? ""
    )
    const [error, setError] = useState<NumericInputError | null>(null)

    return (
      <div className="sb-column sb-width-300">
        <Stack spacing={200}>
          <Input
            value={inputValue}
            error={!!error}
            placeholder="Rotation angle"
            onChange={(e) => setInputValue(e.value)}
            onBlur={(e) => {
              const parsed = numericInput.parse(e.value)

              console.log(parsed)

              if (parsed.error) {
                setInputValue(parsed.rawValue)
                setError(parsed.error)
                return
              }

              setInputValue(parsed.formattedValue ?? "")
              setError(null)
            }}
            onKeyDown={(e) =>
              numericInput.handleKeyDown(e, (next) =>
                setInputValue(
                  numericInput.parse(String(next)).formattedValue ?? ""
                )
              )
            }
          />
          <Text intentModifiers={error ? "danger" : "default"}>
            {error || "No errors"}
          </Text>
        </Stack>
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
    const numericInput = useNumericInput({
      value: 45, // initial value
      unit: "°",
      min: -180,
      max: 180,
      precision: 0,
      step: 1,
      stepLarge: 10,
      required: true,
      normalizeOnError: true,
    } as NumericInputConfig)

    const [inputValue, setInputValue] = useState(numericInput.formattedValue)

    return (
      <div className="sb-column sb-width-300">
        <Stack spacing={200}>
          <Input
            value={inputValue}
            placeholder="Rotation angle"
            onChange={(e) => setInputValue(e.value)}
            onBlur={(e) => {
              const parsed = numericInput.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number"
              ) {
                setInputValue(String("Auto"))
                return
              }
              if (parsed.error === "less_than_min") {
                setInputValue(String(parsed.formattedValue))
                return
              }
              if (parsed.error === "greater_than_max") {
                setInputValue(String(parsed.formattedValue))
                return
              }
              if (parsed.error === "not_integer") {
                setInputValue(String(parsed.formattedValue))
                return
              }

              setInputValue(String(parsed.formattedValue))
            }}
            onKeyDown={(e) =>
              numericInput.handleKeyDown(e, (next) =>
                setInputValue(String(next))
              )
            }
          />
        </Stack>
      </div>
    )
  },
}
