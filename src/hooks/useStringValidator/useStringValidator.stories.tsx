import { Meta, StoryObj } from "@storybook/preact"

import {
  useStringValidator,
  type StringValidationError,
  type StringValidationConfig,
} from "./useStringValidator"

import { Input } from "../../components/Input/Input"
import { Section } from "../../components/Section/Section"
import { Stack } from "../../components/Stack/Stack"
import { Text } from "../../components/Text/Text"
import { useState } from "preact/hooks"

const meta: Meta<typeof useStringValidator> = {
  title: "Hooks/useStringValidator",
  component: useStringValidator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A hook that validates a string based on the provided configuration.",
      },
    },
  },
  argTypes: {
    required: {
      control: { type: "boolean" },
    },

    minLength: {
      control: { type: "number" },
    },
    maxLength: {
      control: { type: "number" },
    },
    pattern: {
      control: { type: "string" },
      description: "Regular expression to validate the string.",
    },
    trim: {
      control: { type: "boolean" },
      description: "Trim the string before validation.",
    },
  },
}

export default meta
type Story = StoryObj<typeof useStringValidator>

export const Demo: Story = {
  args: {
    required: false,
    minLength: 3,
    maxLength: 8,
    pattern: null,
    trim: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState("")
    const [inputError, setInputError] = useState(false)

    const { isValid, getErrorCode } = useStringValidator(
      args as StringValidationConfig
    )
    const [valueError, setValueError] = useState<StringValidationError | null>(
      null
    )

    const handleValidation = (value: string) => {
      if (isValid(value)) {
        setInputError(false)
        setValueError(null)
      } else {
        setInputError(true)
        setValueError(getErrorCode(value))
      }
    }

    return (
      <div className="sb-column sb-width-300">
        <Section>
          <Stack spacing={200}>
            <Input
              value={inputValue}
              error={inputError}
              placeholder="Input string"
              onKeyDown={(e) => {
                if (e.event.key === "Enter") {
                  e.event.preventDefault?.()
                  ;(e.event.currentTarget as HTMLInputElement).blur()
                }
              }}
              onChange={(e) => {
                setInputValue(e.value)
              }}
              onBlur={(e) => handleValidation(e.value)}
            />
            <Text intentModifiers={valueError ? "danger" : "default"}>
              {valueError || "No errors"}
            </Text>
          </Stack>
        </Section>
      </div>
    )
  },
}
