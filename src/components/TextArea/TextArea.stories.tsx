import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'
import { VariantStory } from './stories/Variant.story'
import { PlaceholderStory } from './stories/Placeholder.story'
import { DisabledStory } from './stories/Disabled.story'
import { ResizeStory } from './stories/Resize.story'

import { TooltipContext } from '../../index'

import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
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
    error: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    minLength: {
      control: { type: 'number' },
      table: { defaultValue: { summary: '0' } },
      description: 'Minimum length of the field value.',
    },
    maxLength: {
      control: { type: 'number' },
      table: { defaultValue: { summary: 'Infinity' } },
      description: 'Maximum length of the field value.',
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
      description: 'Select all text when the textarea receives focus.',
    },
    maxWidth: {
      control: { type: 'number' },
      description: 'Maximum width of the field (excluding label). Only applicable when variant is `list`.',
      table: {
        type: {
          summary: 'number | string',
        },
      },
    },
    minHeight: {
      control: { type: 'number' },
      description: 'Minimum container height. With `resize="y"`, clamps drag.',
      table: {
        type: {
          summary: 'number | string',
        },
      },
    },
    maxHeight: {
      control: { type: 'number' },
      description:
        'Optional max container height. Without `resize`, the field grows with text (uncapped if omitted).<br/>With `resize="y"`, clamps drag.',
      table: {
        type: {
          summary: 'number | string',
        },
      },
    },
    resize: {
      control: { type: 'radio' },
      options: [undefined, 'y'],
      table: {
        type: {
          summary: "'y'",
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

type Story = StoryObj<typeof TextArea>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    variant: 'default',
    label: 'Label',
    placeholder: 'Placeholder',
    defaultValue: '',
    error: false,
    disabled: false,
    tooltip: 'TextArea tooltip',
    minLength: 0,
    maxLength: 9999,
    autoFocus: false,
    selectOnFocus: false,
    maxWidth: undefined,
    minHeight: 40,
    maxHeight: 136,
    resize: 'y',
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
<TextArea {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TextArea {...args} />
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <TooltipContext>
        <TextArea {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Variant = VariantStory
export const Placeholder = PlaceholderStory
export const Disabled = DisabledStory
export const Resize = ResizeStory
