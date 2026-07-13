import { Meta, StoryObj } from '@storybook/preact-vite'

import { Code, Stack, Text } from '../../../index'

import { colorToHex } from '../color'

const meta: Meta = {
  title: 'Utils/colorToHex',
  component: colorToHex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Utility function to convert `Color` type (r, g, b in 0–1) to a 6-digit hex string.',
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

type Story = StoryObj

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
import { colorToHex } from "figma-plugin-preact-ui"

const hex = colorToHex({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHex({ r: 1, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">"#FF0000"</Code>
        </Stack>
      </div>
    )
  },
}
