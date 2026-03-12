import { Meta, StoryObj } from '@storybook/preact'

import { SizeStory } from './stories/Size.story'

import { Text } from '../../index'

import { TooltipContainer } from './TooltipContainer'

const meta: Meta<typeof TooltipContainer> = {
  title: 'Components/TooltipContainer',
  component: TooltipContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A wrapper component that displays the tooltip content.',
      },
    },
  },
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
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    showArrow: {
      control: { type: 'boolean' },
      description: 'Shows the arrow on the container based on the `<OverlayPositioner/>` placement.',
    },
    children: {
      control: { control: 'text' },
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

type Story = StoryObj<typeof TooltipContainer>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    width: 300,
    height: 100,
    showArrow: false,
    children: 'Tooltip content',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<TooltipContainer {...args}>{children}</TooltipContainer>
`,
      },
    },
  },
  render: (args) => {
    return (
      <div className="sb-column sb-width-full" style={'--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;'}>
        <TooltipContainer {...args}>
          {/* @ts-ignore-next-line */}
          {args.children}
        </TooltipContainer>
      </div>
    )
  },
}

export const Size = SizeStory
