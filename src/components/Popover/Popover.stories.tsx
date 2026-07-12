import { Meta, StoryObj } from '@storybook/preact-vite'

import { useRef } from 'preact/hooks'

import { ControlledStory } from './stories/Controlled.story'
import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ArrowStory } from './stories/Arrow.story'
import { RepositionStory } from './stories/Reposition.story'

import { Text, Section, Button } from '../../index'

import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A facade component that provides a simplified API for popovers.',
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
    children: {
      control: { type: 'text' },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    popoverHeaderProps: {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<PopoverHeaderProps>',
          detail: `
{
  children: preact.ComponentChildren
}
`,
        },
      },
    },
    // @ts-expect-error docs-only argTypes row, not a real prop
    '...PopoverContextProps': {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<PopoverContextProps>',
          detail: `
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null
}
`,
        },
      },
    },
    '...PopoverContainerProps': {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<PopoverContainerProps>',
          detail: `
{
  width: number
  height: number
  showArrow: boolean
  constrainHeight: boolean
}
`,
        },
      },
    },
    '...OverlayPositionerProps': {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<OverlayPositionerProps>',
          detail: `
{
  open: boolean
  defaultOpen: boolean
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  draggable: boolean
  offsetX: number
  offsetY: number
  offsetEdge: number
  autoReposition: boolean
  onOpen: () => void
  onClose: () => void
}`,
        },
      },
    },
    tabIndex: {
      control: { type: 'number' },
      description: 'Tab order of the popover container (via PopoverContainer). Omit for -1 when opened.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Popover>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    children: 'Content',
    popoverHeaderProps: {
      children: 'Header',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Popover {...args}>{children}</Popover>
`,
      },
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Open Popover</Button>

        <Popover triggerRef={triggerRef} {...args}>
          <Section>
            <Text>{args.children}</Text>
          </Section>
        </Popover>
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Arrow = ArrowStory
export const Reposition = RepositionStory
