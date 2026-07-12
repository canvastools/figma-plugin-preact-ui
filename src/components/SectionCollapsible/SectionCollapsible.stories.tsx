import { Meta, StoryObj } from '@storybook/preact-vite'

import { ControlledStory } from './stories/Controlled.story'
import { UncontrolledStory } from './stories/Uncontrolled.story'
import { StackingStory } from './stories/Stacking.story'

import { Text } from '../../index'

import { SectionCollapsible } from './SectionCollapsible'

const meta: Meta<typeof SectionCollapsible> = {
  title: 'Layout/SectionCollapsible',
  component: SectionCollapsible,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A collapsible wrapper around `Section` that toggles content visibility on click.',
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
    collapsed: {
      control: { disable: true },
      description: 'Controlled collapsed state.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onCollapsedChange: {
      action: 'collapsedChange',
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: {
  event: MouseEvent
  collapsed: boolean
}
`,
        },
      },
    },
    sectionProps: {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<SectionProps>',
          detail: `
{
  variant: 'default' | 'stacked'
  padding: {
    top: SectionPadding
    right: SectionPadding
    bottom: SectionPadding
    left: SectionPadding
  }
  children: preact.ComponentChildren
}
`,
        },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Content shown when expanded.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    tabIndex: {
      control: { type: 'number' },
      description: 'Tab order of the focusable element. Omit to keep the default focus behavior.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SectionCollapsible>

export const Demo: Story = {
  args: {
    id: undefined,
    className: 'sb-container',
    sectionProps: {
      variant: 'default',
      children: 'Section header',
    },
    children: 'Collapsible content',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<SectionCollapsible sectionProps={{ children: 'Section header' }}>
  {children}
</SectionCollapsible>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <SectionCollapsible {...args} sectionProps={{ children: <Text strong>{args.sectionProps?.children}</Text> }}>
        <Text>{args.children}</Text>
      </SectionCollapsible>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Stacking = StackingStory
