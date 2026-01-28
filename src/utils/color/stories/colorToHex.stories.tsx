import { Meta, StoryObj } from "@storybook/preact"

import { Code, Stack, Text } from "../../../index"

import { colorToHex } from "../color"

const meta: Meta<typeof colorToHex> = {
  title: "Utils/colorToHex",
  component: colorToHex,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility function to convert `Color` type to hex string.",
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "(color: Color) => string",
          detail: `
// Types

type Color = {
  r: number
  g: number
  b: number
  a: number
}`
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof colorToHex>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
import { colorToHex } from "figma-plugin-preact-ui"

const hex = colorToHex({ r: 255, g: 0, b: 0, a: 1 }) // #ff0000
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHex({ r: 255, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">"#ff0000"</Code>
        </Stack>
      </div>
    )
  },
}