import { Meta, StoryObj } from '@storybook/preact'

import { IntentStory } from './stories/Intent.story'
import { PrefixStory } from './stories/Prefix.story'
import { SuffixStory } from './stories/Suffix.story'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
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
    intent: {
      control: { type: 'radio' },
      options: ['neutral', 'neutral-inverted', 'brand', 'danger', 'warning', 'success'],
      defaultValue: { summary: 'neutral' },
    },
    intentModifier: {
      control: { type: 'radio' },
      options: [
        'default',
        'secondary',
        'brand',
        'danger',
        'warning',
        'success',
        'component',
        'component-secondary',
        'slot',
        'slot-secondary',
      ],
      defaultValue: { summary: 'default' },
    },
    prefix: {
      control: { disable: true },
      description: 'Element displayed before children.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: 'Element displayed after children.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    children: {
      control: { type: 'text' },
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

type Story = StoryObj<typeof Badge>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    children: 'Badge',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `<Badge {...args}>{children}</Badge>`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      {/* @ts-expect-error Storybook spread */}
      <Badge {...args} />
    </div>
  ),
}

export const Intent = IntentStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
