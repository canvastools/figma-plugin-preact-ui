import { Meta, StoryObj } from "@storybook/preact"

import {
  useNumberValidator,
  type NumberValidationError,
  type NumberValidationConfig,
} from "./useNumberValidator"

import { Input } from "../../components/Input/Input"
import { Section } from "../../components/Section/Section"
import { Stack } from "../../components/Stack/Stack"
import { Text } from "../../components/Text/Text"
import { useState } from "preact/hooks"

const meta: Meta<typeof useNumberValidator> = {
  title: "Hooks/useNumberValidator",
  component: useNumberValidator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A hook that validates a number based on the provided configuration.",
      },
    },
  },
  argTypes: {
    required: {
      control: { type: "boolean" },
    },

    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    integer: {
      control: { type: "boolean" },
      description: "Validate the number as an integer.",
    },
  },
}

export default meta
type Story = StoryObj<typeof useNumberValidator>

export const Demo: Story = {
  args: {
    required: false,
    min: 5,
    max: 10,
    integer: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState("")
    const [inputError, setInputError] = useState(false)

    const { isValid, getErrorCode } = useNumberValidator(
      args as NumberValidationConfig
    )
    const [valueErrors, setValueErrors] =
      useState<NumberValidationError | null>(null)

    const handleValidation = (value: string) => {
      if (isValid(value)) {
        setInputError(false)
        setValueErrors(null)
      } else {
        setInputError(true)
        setValueErrors(getErrorCode(value))
      }
    }

    return (
      <div className="sb-column sb-width-300">
        <Section>
          <Stack spacing={200}>
            <Input
              value={inputValue}
              error={inputError}
              placeholder="Input number"
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
            <Text intentModifiers={valueErrors ? "danger" : "default"}>
              {valueErrors || "No errors"}
            </Text>
          </Stack>
        </Section>
      </div>
    )
  },
}
