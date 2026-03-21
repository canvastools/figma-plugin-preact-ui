import { Meta, StoryObj } from '@storybook/preact'

import { Code, Stack, Text } from '../../../index'

import { colorToRgba } from '../color'

const meta: Meta<typeof colorToRgba> = {
  title: 'Utils/colorToRgba',
  component: colorToRgba,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Utility function to convert `Color` type (r, g, b, a in 0–1) to RGBA (r, g, b in 0–255, a in 0–1).',
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: '(color: Color) => Rgba',
          detail: `
// Types — all channels are 0–1

type Color = {
  r: number
  g: number
  b: number
  a: number
}`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof colorToRgba>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
import { colorToRgba } from "figma-plugin-preact-ui"

const rgba = colorToRgba({ r: 1, g: 0, b: 0, a: 1 }) // { r: 255, g: 0, b: 0, a: 1 }
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToRgba({ r: 1, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 255, g: 0, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>
    )
  },
}
