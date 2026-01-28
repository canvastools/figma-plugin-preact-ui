import { Meta, StoryObj } from "@storybook/preact"

import { Code, Stack, Text } from "../../../index"

import { hexToColor } from "../color"

const meta: Meta<typeof hexToColor> = {
  title: "Utils/hexToColor",
  component: hexToColor,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility function to convert hex string to `Color` type.",
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "(hex: string, alpha: number = 1) => Color | null",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof hexToColor>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
import { hexToColor } from "figma-plugin-preact-ui"

const color = hexToColor("#ff0000") // { r: 255, g: 0, b: 0, a: 1 }
const colorTransparent = hexToColor("#ff0000", 0.5) // { r: 255, g: 0, b: 0, a: 0.5 }
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'hexToColor("#ff0000")'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 255, g: 0, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>
    )
  },
}