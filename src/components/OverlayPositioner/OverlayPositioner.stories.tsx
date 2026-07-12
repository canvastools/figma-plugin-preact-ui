import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { useRef } from 'preact/hooks'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'
import { PlacementStory } from './stories/Placement.story'
import { DraggableStory } from './stories/Draggable.story'
import { TriggerStory } from './stories/Trigger.story'
import { OffsetStory } from './stories/Offset.story'
import { ClickOutsideStory } from './stories/ClickOutside.story'

import { OverlayPositioner } from './OverlayPositioner'
import type { OverlayPositionerPlacement } from './OverlayPositioner.types'

import { PopoverContainer, Button, Section, Text } from '../../index'

const meta: Meta<typeof OverlayPositioner> = {
  title: 'Layout/OverlayPositioner',
  component: OverlayPositioner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A wrapper component that allows to position any content relative to an anchor element.',
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
    anchorRef: {
      control: { disable: true },
      description: "<strong>*</strong> Element's ref the overlay is anchored to.",
      table: {
        type: {
          summary: 'preact.RefObject',
        },
      },
    },
    open: {
      control: { disable: true },
      description: 'Visibility for controlled state.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    defaultOpen: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
      description: 'Visibility for uncontrolled state.',
    },
    placement: {
      control: { type: 'radio' },
      options: [
        'over',
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'left-top',
        'left-bottom',
        'right',
        'right-top',
        'right-bottom',
      ],
      description: 'Placement of the overlay relative to the anchor.',
      table: {
        defaultValue: { summary: 'bottom' },
        type: {
          summary: 'OverlayPositionerPlacement',
          detail: `
"over"
| "top"
| "top-left"
| "top-right"
| "bottom"
| "bottom-left"
| "bottom-right"
| "left"
| "left-top"
| "left-bottom"
| "right"
| "right-top"
| "right-bottom"`,
        },
      },
    },
    placementFallback: {
      control: { type: 'radio' },
      options: [
        undefined,
        'over',
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'left-top',
        'left-bottom',
        'right',
        'right-top',
        'right-bottom',
      ],
      description: 'Fallback placements when the primary placement is not possible.',
      table: {
        type: {
          summary: 'OverlayPositionerPlacement[]',
          detail: `[
  "over", 
  "top", 
  "top-left", 
  "top-right", 
  "bottom", 
  "bottom-left", 
  "bottom-right", 
  "left", 
  "left-top", 
  "left-bottom", 
  "right",
  "right-top",
  "right-bottom"
]`,
        },
      },
    },
    autoReposition: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
      description: 'Automatically reposition the overlay when the content height changes to occupy the available space.',
    },
    constrainHeight: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
      description:
        'When true, the positioner reconstructs the natural (unclipped) content height of the overlay for placement, so a height-constrained overlay (e.g. a Popover whose body scrolls internally) is placed where the most content is visible. Leave false for overlays that size to their content such as tooltips, where absolutely-positioned decorations (arrows) would otherwise be mistaken for clipped content.',
    },
    trigger: {
      control: { type: 'radio' },
      options: ['click', 'hover'],
      table: { defaultValue: { summary: 'click' } },
      description: 'Trigger action for the overlay. Only works in uncontrolled state.',
    },
    draggable: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
      description:
        "Allow the overlay to be dragged. `data-pui-interactive='true'` attribute can be applied to elements inside the overlay to prevent drag initiation.",
    },
    offsetX: {
      control: { type: 'number' },
      table: { defaultValue: { summary: '0' } },
      description: 'Horizontal offset between the overlay and anchor.',
    },
    offsetY: {
      control: { type: 'number' },
      table: { defaultValue: { summary: '0' } },
      description: 'Vertical offset between the overlay and anchor.',
    },
    offsetEdge: {
      control: { type: 'number' },
      table: { defaultValue: { summary: '0' } },
      description: 'Minimum spacing from the viewport edges.',
    },
    closeOnClickOutside: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
      description: 'Close the overlay when clicking outside. Only works when the trigger is `click`.',
    },
    onOpen: {
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    onClose: {
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    children: {
      control: { disable: true },
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

type Story = StoryObj<typeof OverlayPositioner>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    defaultOpen: false,
    placement: 'bottom',
    placementFallback: undefined,
    autoReposition: false,
    trigger: 'click',
    draggable: false,
    offsetX: 0,
    offsetY: 0,
    offsetEdge: 0,
    closeOnClickOutside: true,
    constrainHeight: false,
    onOpen: fn(),
    onClose: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner
  anchorRef={anchorRef}
  {...args}
>
  {children}
</OverlayPositioner>
`,
      },
    },
  },
  render: (args) => {
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    // @ts-expect-error the control provides a single placement, wrap it into an array
    const placementFallback: OverlayPositionerPlacement[] | undefined = args.placementFallback
      ? [args.placementFallback]
      : undefined

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef}>Show Overlay</Button>

        <OverlayPositioner {...args} anchorRef={anchorRef} placementFallback={placementFallback}>
          <PopoverContainer width={300}>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus,
                ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique
                magnam aspernatur esse dignissimos molestiae.
              </Text>
            </Section>
          </PopoverContainer>
        </OverlayPositioner>
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Placement = PlacementStory
export const Draggable = DraggableStory
export const Trigger = TriggerStory
export const Offset = OffsetStory
export const ClickOutside = ClickOutsideStory
