import { Meta, StoryObj } from '@storybook/preact'

import { Code, Stack, Text } from '../../../index'

import { colorToHexAlpha } from '../color'

const meta: Meta<typeof colorToHexAlpha> = {
  title: 'Utils/colorToHexAlpha',
  component: colorToHexAlpha,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Utility function to convert `Color` type (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA).',
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: '(color: Color) => string',
          detail: `
// Types — all channels are 0–1

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

type Story = StoryObj<typeof colorToHexAlpha>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
import { colorToHexAlpha } from "figma-plugin-preact-ui"

const hex = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000FF
const hexTransparent = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 }) // #FF000080
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">"#FF000080"</Code>
        </Stack>
      </div>
    )
  },
}
