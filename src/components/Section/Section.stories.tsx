import { Meta, StoryObj } from '@storybook/preact'

import { StackedStory } from './stories/Stacked.story'
import { PaddingStory } from './stories/Padding.story'

import { Text } from '../../index'

import { Section } from './Section'

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A wrapper component that creates a typical section layout with built-in padding.',
      },
    },
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'stacked'],
      defaultValue: { summary: 'default' },
    },
    padding: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
          detail: `
padding?: {
  top?: SectionPadding
  right?: SectionPadding
  bottom?: SectionPadding
  left?: SectionPadding
}

// Types

type SectionPadding = keyof typeof spacing.variables // string | number
`,
        },
      },
    },
    children: {
      control: { control: 'text' },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Section>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: 'sb-container',
    variant: 'default',
    padding: {},
    children: 'Lorem ipsum dolor sit amet.',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Section {...args}>{children}</Section>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-fullk">
      <Section {...args}>
        {/* @ts-expect-error Storybook spread */}
        <Text>{args.children}</Text>
      </Section>
    </div>
  ),
}

export const Stacked = StackedStory
export const Padding = PaddingStory
