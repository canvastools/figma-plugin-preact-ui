import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { IntentStory } from './stories/Intent.story'
import { SizeStory } from './stories/Size.story'
import { DisabledStory } from './stories/Disabled.story'
import { TranslucentStory } from './stories/Translucent.story'
import { IconStory } from './stories/Icon.story'

import { Icon, link, TooltipContext } from '../../index'

import { ButtonIcon } from './ButtonIcon'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
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
      options: ['neutral'],
      table: { defaultValue: { summary: 'neutral' } },
    },
    intentModifier: {
      control: { type: 'radio' },
      options: ['default', 'secondary'],
      table: { defaultValue: { summary: 'default' } },
    },
    ghost: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: { type: 'radio' },
      options: ['medium', 'large'],
      table: { defaultValue: { summary: 'medium' } },
    },
    grouped: {
      control: { type: 'radio' },
      options: [undefined, 'first', 'last', 'middle'],
    },
    translucent: {
      control: { type: 'boolean' },
      description: 'Used for cases when the button is inside an input.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
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
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    icon: {
      control: { disable: true },
      description: `A shortcut for the displaying the icon (glyph) as a child.`,
      table: {
        type: {
          summary: 'Pick<IconProps>',
          detail: `
{ 
  glyph: Glyph
  variant: "default" | "upscaled"
  size: 16 | 24
}
          `,
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

type Story = StoryObj<typeof ButtonIcon>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    ghost: false,
    size: 'medium',
    grouped: undefined,
    translucent: false,
    disabled: false,
    tooltip: 'Button tooltip',
    children: <Icon glyph={link} />,
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ButtonIcon {...args}>{children}</ButtonIcon>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ButtonIcon {...args}>{children}</ButtonIcon>
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TooltipContext>
        <ButtonIcon {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Intent = IntentStory
export const Size = SizeStory
export const Disabled = DisabledStory
export const Translucent = TranslucentStory
export const _Icon = IconStory
