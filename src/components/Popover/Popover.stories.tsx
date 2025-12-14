import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useRef, useState } from "preact/hooks"

import { Popover } from "./Popover"

import { Stack, Text, Section, Button, OverlayPositioner } from "../../index"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that creates a popover-like container. Used inside &lt;OverlayPositioner/&gt; component.",
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
        type: {
          summary: "JSX.Element",
        },
      },
    },
    anchorRef: {
      control: { disable: true },
      description: "Ref to the anchor element.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Initial open state.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    open: {
      control: { disable: true },
      description: "Controlled open state.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    header: {
      control: { disable: true },
      description: "Header content.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    draggable: {
      control: { type: "boolean" },
      defaultValue: { summary: true },
      description: "Whether the popover is draggable.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      description: "Width of the popover.",
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    height: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      description: "Height of the popover.",
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    placement: {
      control: { type: "radio" },
      defaultValue: { summary: "bottom-left" },
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
      defaultValue: { summary: false },
      description: "Fallback placement of the popover.",
      table: {
        type: {
          summary: "false | OverlayPlacement[]",
        },
      },
    },
    paddingX: {
      control: { type: "number" },
      defaultValue: { summary: 4 },
      description: "Padding of the popover.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    paddingY: {
      control: { type: "number" },
      defaultValue: { summary: 4 },
      description: "Padding of the popover.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    edgePadding: {
      control: { type: "number" },
      defaultValue: { summary: 16 },
      description: "Edge padding of the popover.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    onOpen: {
      control: { disable: true },
      description: "Callback when the popover is opened.",
      table: {
        type: { summary: "() => void" },
      },
    },
    onClose: {
      control: { disable: true },
      description: "Callback when the popover is closed.",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultOpen: false,
    header: "Popover Header",
    draggable: true,
    width: 300,
    height: 300,
    placement: "bottom-left",
    paddingX: 4,
    paddingY: 4,
    edgePadding: 16,
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
        <Button ref={triggerRef}>Open popover</Button>
        {/* @ts-expect-error: Storybook types hack */}
        <Popover triggerRef={triggerRef} {...args}>
          <Section>
            <Stack spacing={400}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam
                eos animi id nam tenetur adipisci? Amet nisi doloremque
                asperiores quisquam, repudiandae similique magnam aspernatur
                esse dignissimos molestiae.
              </Text>
              <Button>Button</Button>
            </Stack>
          </Section>
        </Popover>
      </div>
    )
  },
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Open popover</Button>
        <Popover
          triggerRef={triggerRef}
          defaultOpen={false}
          width={300}
          header="Uncontrolled popover"
        >
          <Section>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
              autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos
              animi id nam tenetur adipisci? Amet nisi doloremque asperiores
              quisquam, repudiandae similique magnam aspernatur esse dignissimos
              molestiae.
            </Text>
          </Section>
        </Popover>
      </div>
    )
  },
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>Open: {open ? "true" : "false"}</Text>
          <Button ref={triggerRef} onClick={() => setOpen(!open)}>
            Open popover
          </Button>
          <Popover
            triggerRef={triggerRef}
            open={open}
            width={300}
            onClose={() => setOpen(false)}
            header="Controlled popover"
          >
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam
                eos animi id nam tenetur adipisci? Amet nisi doloremque
                asperiores quisquam, repudiandae similique magnam aspernatur
                esse dignissimos molestiae.
              </Text>
            </Section>
          </Popover>
        </Stack>
      </div>
    )
  },
}
