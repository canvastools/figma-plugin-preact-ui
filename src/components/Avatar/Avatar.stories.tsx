import { Meta, StoryObj } from '@storybook/preact-vite'

import { VariantStory } from './stories/Variant.story'
import { SizeStory } from './stories/Size.story'
import { SrcStory } from './stories/Src.story'
import { ColorStory } from './stories/Color.story'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
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
      options: ['circle', 'square'],
      table: { defaultValue: { summary: 'circle' } },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: { defaultValue: { summary: 'medium' } },
    },
    src: {
      control: { type: 'text' },
      description: 'Image URL or data URI.',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color for the avatar container when no image is provided.',
      table: {
        type: {
          summary: 'HEX | RGB | RGBA | var()',
        },
        defaultValue: {
          summary: 'var(--pui-color-neutral-inverted-bg-default)',
        },
      },
    },
    textColor: {
      control: { type: 'color' },
      description: 'Text color for the children text content when no image is provided.',
      table: {
        type: {
          summary: 'HEX | RGB | RGBA | var()',
        },
        defaultValue: {
          summary: 'var(--pui-color-neutral-inverted-text-default)',
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

type Story = StoryObj<typeof Avatar>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    variant: 'circle',
    size: 'medium',
    src: '',
    children: 'A',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `<Avatar {...args}>{children}</Avatar>`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Avatar {...args} />
    </div>
  ),
}

export const Variant = VariantStory
export const Size = SizeStory
export const Image = SrcStory
export const Color = ColorStory
