import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'
import { IntentStory } from './stories/Intent.story'
import { MixedStory } from './stories/Mixed.story'
import { DisabledStory } from './stories/Disabled.story'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
      options: ['neutral', 'brand'],
      table: { defaultValue: { summary: 'neutral' } },
    },
    intentModifier: {
      control: { type: 'radio' },
      options: ['default'],
      table: { defaultValue: { summary: 'default' } },
    },
    checked: {
      control: { disable: true },
      description: 'Value for controlled state.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Value for uncontrolled state.',
      table: { defaultValue: { summary: 'false' } },
    },
    mixed: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: { type: 'text' },
    },
    tabIndex: {
      control: { type: 'number' },
      description: 'Tab order of the focusable element. Omit to keep the default focus behavior.',
      table: {
        type: { summary: 'number' },
      },
    },
    onCheckedChange: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args:{
  event: MouseEvent
  checked: boolean
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    defaultChecked: false,
    mixed: false,
    disabled: false,
    label: 'Checkbox',
    onCheckedChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Checkbox {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Checkbox {...args} />
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Intent = IntentStory
export const Mixed = MixedStory
export const Disabled = DisabledStory
