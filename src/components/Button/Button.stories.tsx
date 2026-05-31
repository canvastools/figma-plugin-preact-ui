import { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

import { IntentStory } from './stories/Intent.story'
import { SizeStory } from './stories/Size.story'
import { DisabledStory } from './stories/Disabled.story'
import { WidthStory } from './stories/Width.story'
import { PrefixStory } from './stories/Prefix.story'
import { SuffixStory } from './stories/Suffix.story'
import { CustomChildrenStory } from './stories/CustomChildren.story'

import { TooltipContext } from '../../index'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
      options: ['neutral', 'neutral-inverted', 'brand', 'danger', 'success'],
      defaultValue: { summary: 'neutral' },
    },
    intentModifier: {
      control: { type: 'radio' },
      options: ['default', 'secondary', 'brand', 'danger', 'success'],
      defaultValue: { summary: 'default' },
    },
    ghost: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    size: {
      control: { type: 'radio' },
      options: ['medium', 'large'],
      defaultValue: { summary: 'medium' },
    },
    grouped: {
      control: { type: 'radio' },
      options: [undefined, 'first', 'last', 'middle'],
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    tooltip: {
      control: { type: 'text' },
      description: 'Tooltip content.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
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
    tabIndex: {
      control: { type: 'number' },
      description: 'Tab order of the focusable element. Omit to keep the default focus behavior.',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: { 
  event: MouseEvent
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    ghost: false,
    size: 'medium',
    grouped: undefined,
    disabled: false,
    fullWidth: false,
    tooltip: 'Button tooltip',
    children: 'Button',
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Button {...args}>{children}</Button>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Button {...args}>{children}</Button>
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TooltipContext>
        {/* @ts-expect-error Storybook spread */}
        <Button {...args}>{args.children}</Button>
      </TooltipContext>
    </div>
  ),
}

export const Intent = IntentStory
export const Size = SizeStory
export const Disabled = DisabledStory
export const Width = WidthStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
export const CustomChildren = CustomChildrenStory
