import { Meta, StoryObj } from '@storybook/preact-vite'

import { Code, Stack, Text } from '../../../index'

import { hsbToColor } from '../color'

const meta: Meta = {
  title: 'Utils/hsbToColor',
  component: hsbToColor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Utility function to convert HSB (h in 0–360, s and b in 0–1, a in 0–1) back to a `Color` (r, g, b, a in 0–1). The hue wraps, so shifting past 360° needs no clamping of its own.',
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: '(hsb: Hsb) => Color',
          detail: `
// Types

type Hsb = {
  h: number // 0–360, degrees
  s: number // 0–1
  b: number // 0–1, brightness
  a: number // 0–1
}

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
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
import { colorToHsb, hsbToColor } from "figma-plugin-preact-ui"

const base = colorToHsb({ r: 1, g: 0, b: 0, a: 1 })
const shifted = hsbToColor({ ...base, h: base.h + 120 }) // { r: 0, g: 1, b: 0, a: 1 }
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'hsbToColor({ h: 120, s: 1, b: 1, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 0, g: 1, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>
    )
  },
}
