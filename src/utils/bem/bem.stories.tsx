import { Meta, StoryObj } from '@storybook/preact-vite'

import { ElementStory } from './story/Element.story'
import { ModifiersStory } from './story/Modifiers.story'

import { Code, Stack, Text } from '../../index'

import { bem } from './bem'

const meta: Meta = {
  title: 'Utils/bem',
  component: bem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Utility function to generate BEM class names.',
      },
    },
  },
  argTypes: {
    args: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: '(...) => string',
          detail: `
block: string // required
element: string
mods: Record<string, string | boolean>
`,
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
import { bem } from "figma-plugin-preact-ui"

const className = bem("Block", "element") // Block__element

<div className={className}>
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'bem("Block", "element")'}</Code>
          <Text>→</Text>
          <Code variant="inline">"Block__element"</Code>
        </Stack>
      </div>
    )
  },
}

export const Element = ElementStory
export const Modifiers = ModifiersStory
