import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useRef } from "preact/hooks"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { PlacementStory } from "./stories/Placement.story"
import { DraggableStory } from "./stories/Draggable.story"
import { TriggerStory } from "./stories/Trigger.story"
import { OffsetStory } from "./stories/Offset.story"
import { ClickOutsideStory } from "./stories/ClickOutside.story"

import { OverlayPositioner } from "./OverlayPositioner"
import type { OverlayPositionerPlacement } from "./OverlayPositioner.types"

import { PopoverContainer, Button, Section, Text } from "../../index"

const meta: Meta<typeof OverlayPositioner> = {
  title: "Layout/OverlayPositioner",
  component: OverlayPositioner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that allows to position any content relative to an anchor element.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    anchorRef: {
      control: { disable: true },
      description:
        "<strong>*</strong> Element's ref the overlay is anchored to.",
      table: {
        type: {
          summary: "preact.RefObject<HTMLElement>",
        },
      },
    },
    open: {
      control: { disable: true },
      description: "Visibility for controlled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Visibility for uncontrolled mode.",
    },
    placement: {
      control: { type: "radio" },
      options: [
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
        "right-bottom",
      ],
      defaultValue: { summary: "bottom" },
      description: "Placement of the overlay relative to the anchor.",
      table: {
        type: {
          summary: "OverlayPositionerPlacement",
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
      control: { type: "radio" },
      options: [
        undefined,
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
        "right-bottom",
      ],
      description:
        "Fallback placements when the primary placement is not possible.",
      table: {
        type: {
          summary: "OverlayPositionerPlacement[]",
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
    trigger: {
      control: { type: "radio" },
      options: ["click", "hover"],
      defaultValue: { summary: "click" },
      description:
        "Trigger action for the overlay. Only works in uncontrolled mode.",
    },
    draggable: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Allow the overlay to be dragged. `.no-drag` class can be applied to elements inside the overlay to prevent drag initiation.",
    },
    offsetX: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Horizontal offset between the overlay and anchor.",
    },
    offsetY: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Vertical offset between the overlay and anchor.",
    },
    offsetEdge: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Minimum spacing from the viewport edges.",
    },
    closeOnClickOutside: {
      control: { type: "boolean" },
      defaultValue: { summary: true },
      description:
        "Close the overlay when clicking outside. Only works when the trigger is `click`.",
    },
    onOpen: {
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onClose: {
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof OverlayPositioner>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultOpen: false,
    placement: "bottom",
    placementFallback: undefined,
    trigger: "click",
    draggable: false,
    offsetX: 0,
    offsetY: 0,
    offsetEdge: 0,
    closeOnClickOutside: true,
    onOpen: fn(),
    onClose: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<OverlayPositioner {...args}>
  {children}
</OverlayPositioner>
`,
      },
    },
  },
  render: (args) => {
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    const placementFallback: OverlayPositionerPlacement[] | undefined =
      /* @ts-ignore-next-line */
      args.placementFallback ? [args.placementFallback] : undefined

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef}>Show Overlay</Button>

        <OverlayPositioner
          anchorRef={anchorRef}
          {...args}
          placementFallback={placementFallback}
        >
          <PopoverContainer width={300}>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam
                eos animi id nam tenetur adipisci? Amet nisi doloremque
                asperiores quisquam, repudiandae similique magnam aspernatur
                esse dignissimos molestiae.
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
