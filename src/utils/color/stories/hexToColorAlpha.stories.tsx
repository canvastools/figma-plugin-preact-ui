import { Meta, StoryObj } from '@storybook/preact'

import { Code, Stack, Text } from '../../../index'

import { hexAlphaToColor } from '../color'

const meta: Meta<typeof hexAlphaToColor> = {
  title: 'Utils/hexAlphaToColor',
  component: hexAlphaToColor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Utility function to convert a 6- or 8-digit hex string to `Color` type (all channels in 0–1).',
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: '(hex: string) => Color | undefined',
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
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
import { hexAlphaToColor } from "figma-plugin-preact-ui"

const color = hexAlphaToColor("#ff0000ff") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexAlphaToColor("#ff000080") // { r: 1, g: 0, b: 0, a: 0.5 }
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
          <Code variant="inline">{'{ r: 1, g: 0, b: 0, a: 0.5 }'}</Code>
        </Stack>
      </div>
    )
  },
}
