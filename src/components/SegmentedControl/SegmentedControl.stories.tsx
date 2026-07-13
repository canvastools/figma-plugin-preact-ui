import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'
import { DisabledStory } from './stories/Disabled.story'
import { IconsStory } from './stories/Icons.story'

import { SegmentedControl } from './SegmentedControl'
import type { SegmentedControlOptionData } from './SegmentedControl.types'

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
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
    options: {
      control: { disable: true },
      description: '<strong>*</strong>Array of options to render in the control.',
      table: {
        type: {
          summary: 'SegmentedControlOptionData[]',
          detail: `
{
  value: string // required
  label: string // required
  icon: IconPropsPick 
}

// Types

type IconPropsPick = {
  glyph: Glyph
  variant: "default" | "upscaled"
  size: 16 | 24
}

          `,
        },
      },
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
    defaultValue: {
      control: { type: 'text' },
      description: 'Value for uncontrolled state.',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    tabIndex: {
      control: { type: 'number' },
      description:
        'Tab order of the active segment button. Inactive segments stay at -1. Omit for roving tabindex (active: 0).',
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
  event: MouseEvent | KeyboardEvent
  value: string
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof SegmentedControl>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    defaultValue: 'list',
    disabled: false,
    fullWidth: false,
    onValueChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const options = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl options={options} {...args} />`,
      },
    },
  },
  render: (args) => {
    const sampleOptionsWithoutIcons: SegmentedControlOptionData[] = [
      {
        value: 'list',
        label: 'List view',
      },
      {
        value: 'grid',
        label: 'Grid view',
      },
    ]

    return (
      <div className="sb-column">
        <SegmentedControl {...args} options={sampleOptionsWithoutIcons} />
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Disabled = DisabledStory
export const Icons = IconsStory
