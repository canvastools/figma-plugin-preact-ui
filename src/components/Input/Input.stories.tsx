import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'
import { VariantStory } from './stories/Variant.story'
import { PlaceholderStory } from './stories/Placeholder.story'
import { DisabledStory } from './stories/Disabled.story'
import { PrefixStory } from './stories/Prefix.story'
import { SuffixStory } from './stories/Suffix.story'

import { TooltipContext } from '../../index'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    variant: {
      control: { type: 'radio' },
      options: ['default', 'list'],
      table: { defaultValue: { summary: 'default' } },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'number'],
      table: { defaultValue: { summary: 'text' } },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Value for uncontrolled state.',
    },
    value: {
      control: { disable: true },
      description: 'Value for controlled state.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    selected: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    ghost: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    grouped: {
      control: { type: 'radio' },
      options: [undefined, 'first', 'last', 'middle'],
    },
    error: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    prefix: {
      control: { disable: true },
      description: 'Element displayed before value.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: 'Element displayed after value.',

      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    showSuffixOnHover: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    focusOnDoubleClick: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    focusOnPrefix: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    minLength: {
      control: { type: 'number' },
      table: { defaultValue: { summary: '0' } },
      description: 'Minimum length of the input value.',
    },
    maxLength: {
      control: { type: 'number' },
      table: { defaultValue: { summary: 'Infinity' } },
      description: 'Maximum length of the input value.',
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
    autoFocus: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    selectOnFocus: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
      description: 'Select all text when the input receives focus.',
    },
    maxWidth: {
      control: { type: 'number' },
      description: 'Maximum width of the input (excluding label). Only applicable when variant is `list`.',
      table: {
        type: {
          summary: 'number | string',
        },
      },
    },
    tabIndex: {
      control: { type: 'number' },
      description:
        'Tab order of the focusable element (input, or display container when focusOnDoubleClick is enabled). Applied to a single tab stop only. Omit to keep the default.',
      table: {
        type: { summary: 'number' },
      },
    },
    onValueChange: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: { 
  event: MouseEvent
  value: string
}
          `,
        },
      },
    },
    onBlur: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: { 
  event: FocusEvent
  value: string
}
          `,
        },
      },
    },
    onFocus: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: { 
  event: FocusEvent
  value: string
}
          `,
        },
      },
    },
    onKeyDown: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: { 
  event: KeyboardEvent
  value: string
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    variant: 'default',
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    defaultValue: '',
    selected: false,
    ghost: false,
    grouped: undefined,
    error: false,
    disabled: false,
    showSuffixOnHover: false,
    focusOnDoubleClick: false,
    tooltip: 'Input tooltip',
    minLength: 0,
    maxLength: 9999,
    autoFocus: false,
    selectOnFocus: false,
    maxWidth: undefined,
    onValueChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <TooltipContext>
        <Input {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Variant = VariantStory
export const Placeholder = PlaceholderStory
export const Disabled = DisabledStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
