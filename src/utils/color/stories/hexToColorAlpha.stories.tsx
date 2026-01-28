import { Meta, StoryObj } from "@storybook/preact"

import { Code, Stack, Text } from "../../../index"

import { hexAlphaToColor } from "../color"

const meta: Meta<typeof hexAlphaToColor> = {
  title: "Utils/hexAlphaToColor",
  component: hexAlphaToColor,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility function to convert hex string with alpha to `Color` type.",
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "(hex: string) => Color | null",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof hexAlphaToColor>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
import { hexAlphaToColor } from "figma-plugin-preact-ui"

const color = hexAlphaToColor("#ff0000ff") // { r: 255, g: 0, b: 0, a: 1 }
const colorTransparent = hexAlphaToColor("#ff000080") // { r: 255, g: 0, b: 0, a: 0.5 }
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'hexAlphaToColor("#ff000080")'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 255, g: 0, b: 0, a: 0.5 }'}</Code>
        </Stack>
      </div>
    )
  },
}