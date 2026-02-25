import { Meta, StoryObj } from '@storybook/preact'

import { Code, Stack, Text } from '../../../index'

import { rgbaToColor } from '../color'

const meta: Meta<typeof rgbaToColor> = {
  title: 'Utils/rgbaToColor',
  component: rgbaToColor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Utility function to convert RGBA (r, g, b in 0–255, a in 0–1) to `Color` type (r, g, b, a in 0–1).',
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: '(rgba: Rgba) => Color',
          detail: `
// Types — all channels are 0–255

type Rgba = {
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

type Story = StoryObj<typeof rgbaToColor>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
import { rgbaToColor } from "figma-plugin-preact-ui"

const color = rgbaToColor({ r: 255, g: 0, b: 0, a: 1 }) // { r: 1, g: 0, b: 0, a: 1 }
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'rgbaToColor({ r: 255, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 1, g: 0, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>
    )
  },
}
