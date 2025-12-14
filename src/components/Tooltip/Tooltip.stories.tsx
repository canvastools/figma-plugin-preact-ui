import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useRef } from "preact/hooks"

import { Tooltip } from "./Tooltip"

import { Button } from "../../index"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that creates a tooltip-like container. Used inside &lt;OverlayPositioner/&gt; component.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    triggerRef: {
      control: { disable: true },
      description: "Ref to the trigger element.",
      table: {
        type: { summary: "JSX.Element" },
      },
    },
    anchorRef: {
      control: { disable: true },
      description: "Ref to the anchor element.",
      table: {
        type: { summary: "JSX.Element" },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      table: {
        type: { summary: "number | 'auto'" },
      },
    },
    height: {
      control: { disable: true },
      defaultValue: { summary: "auto" },
      table: {
        type: { summary: "number | 'auto'" },
      },
    },
    placement: {
      control: { type: "radio" },
      defaultValue: { summary: "bottom" },
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
      description: "Placement of the popover.",
      table: {
        type: {
          summary: "OverlayPlacement",
        },
      },
    },
    placementFallback: {
      control: { disable: true },
      defaultValue: { summary: ["top"] },
      description: "Fallback placement of the popover.",
      table: {
        type: {
          summary: "false | OverlayPlacement[]",
        },
      },
    },
    paddingX: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      table: {
        type: { summary: "number" },
      },
    },
    paddingY: {
      control: { type: "number" },
      defaultValue: { summary: 8 },
      table: {
        type: { summary: "number" },
      },
    },
    edgePadding: {
      control: { type: "number" },
      defaultValue: { summary: 8 },
      table: {
        type: { summary: "number" },
      },
    },
    children: {
      control: { disable: true },
      description: "Children elements.",
      table: {
        type: { summary: "JSX.Element" },
      },
    },
    onOpen: {
      control: { disable: true },
      description: "Callback when the tooltip is opened.",
      table: {
        type: { summary: "() => void" },
      },
    },
    onClose: {
      control: { disable: true },
      description: "Callback when the tooltip is closed.",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Demo: Story = {
  args: {
    className: "",
    width: 140,
    placement: "bottom",
    paddingX: 0,
    paddingY: 8,
    edgePadding: 8,
    onOpen: fn(),
    onClose: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Hover to see Tooltip</Button>
        <Tooltip triggerRef={triggerRef} {...args}>
          Lorem ipsum dolor sit amet
        </Tooltip>
      </div>
    )
  },
}
