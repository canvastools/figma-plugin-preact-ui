import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'

import { link } from '../../index'

import { ButtonIconToggle } from './ButtonIconToggle'

const meta: Meta<typeof ButtonIconToggle> = {
  title: 'Components/ButtonIconToggle',
  component: ButtonIconToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Extends <a href='/docs/components-buttonicon--docs'>`<ButtonIcon/>`</a> and its props to simplify the creation of toggle buttons.",
      },
    },
  },
  argTypes: {
    selected: {
      control: { disable: true },
      description: 'Value for controlled state.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    defaultSelected: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
      description: 'Value for uncontrolled state.',
    },
    tabIndex: {
      control: { type: 'number' },
      description: 'Tab order of the focusable element. Omit to keep the default focus behavior.',
      table: {
        type: { summary: 'number' },
      },
    },
    onSelectedChange: {
      action: 'changed',
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args:{
  event: MouseEvent,
  selected: boolean
}
`,
        },
      },
    },
    // @ts-expect-error docs-only argTypes row, not a real prop
    '...ButtonIconProps': {
      control: { disable: true },
      table: {
        type: {
          summary: 'ButtonIconProps',
          detail: `
{
  className: string
  intent: "neutral"
  intentModifier: "default" | "secondary"
  ghost: boolean
  size: "medium" | "large"
  grouped: "none" | "first" | "last" | "middle"
  translucent: boolean
  disabled: boolean
  selected: boolean
  tooltip: preact.ComponentChildren
  children: preact.ComponentChildren
  icon: IconPropsPick
  onClick: (args: { event: MouseEvent }) => void
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ButtonIconToggle>

export const Demo: Story = {
  args: {
    defaultSelected: false,
    onSelectedChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ButtonIconToggle {...args}>
  {children}
</ButtonIconToggle>
`,
      },
    },
  },

  render: (args) => (
    <div className="sb-column sb-width-full">
      <ButtonIconToggle icon={{ glyph: link }} {...args} />
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
