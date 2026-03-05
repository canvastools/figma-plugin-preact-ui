import { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

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
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
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
  tags: ['!autodocs'],
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
        <SegmentedControl options={sampleOptionsWithoutIcons} {...args} />
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Disabled = DisabledStory
export const Icons = IconsStory
