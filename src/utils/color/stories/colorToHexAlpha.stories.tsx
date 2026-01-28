import { Meta, StoryObj } from "@storybook/preact"

import { Code, Stack, Text } from "../../../index"

import { colorToHexAlpha } from "../color"

const meta: Meta<typeof colorToHexAlpha> = {
  title: "Utils/colorToHexAlpha",
  component: colorToHexAlpha,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility function to convert `Color` type to hex string with alpha.",
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

type Story = StoryObj<typeof colorToHexAlpha>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
import { colorToHexAlpha } from "figma-plugin-preact-ui"

const hex = colorToHexAlpha({ r: 255, g: 0, b: 0, a: 1 }) // #ff0000ff
const hexTransparent = colorToHexAlpha({ r: 255, g: 0, b: 0, a: 0.5 }) // #ff000080
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHexAlpha({ r: 255, g: 0, b: 0, a: 0.5 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">"#ff000080"</Code>
        </Stack>
      </div>
    )
  },
}