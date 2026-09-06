import { Meta, StoryObj } from '@storybook/preact-vite'

import { Code, Stack, Text } from '../../../index'

import { colorToHsb } from '../color'

const meta: Meta = {
  title: 'Utils/colorToHsb',
  component: colorToHsb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Utility function to convert `Color` type (r, g, b, a in 0–1) to HSB (h in 0–360, s and b in 0–1, a in 0–1). Use it with `hsbToColor` to shift a color — hue, saturation and brightness move independently, which they do not in RGB. A gray has no hue, so it comes back as `h: 0`.',
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: '(color: Color) => Hsb',
          detail: `
// Types

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}

type Hsb = {
  h: number // 0–360, degrees
  s: number // 0–1
  b: number // 0–1, brightness
  a: number // 0–1
}`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
import { colorToHsb } from "figma-plugin-preact-ui"

const hsb = colorToHsb({ r: 1, g: 0, b: 0, a: 1 }) // { h: 0, s: 1, b: 1, a: 1 }
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHsb({ r: 1, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ h: 0, s: 1, b: 1, a: 1 }'}</Code>
        </Stack>
      </div>
    )
  },
}
