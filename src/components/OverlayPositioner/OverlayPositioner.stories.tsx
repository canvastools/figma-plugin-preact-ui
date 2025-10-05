import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"
import { fn } from "@storybook/test"

import { OverlayPositioner } from "./OverlayPositioner"

import { Popover } from "../../index"
import { Button } from "../../index"
import { Section } from "../../index"
import { Text } from "../../index"
import { Stack } from "../../index"
import { Tooltip } from "../../index"

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
      description: "Element's ref the popover is anchored to.",
      table: {
        type: {
          summary: "preact.RefObject<HTMLElement>",
        },
      },
    },
    open: {
      control: { disable: true },
      defaultValue: { summary: false },
      description: "Visibility in controlled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    defaultOpen: {
      control: { disable: true },
      defaultValue: { summary: false },
      description: "Initial visibility in uncontrolled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
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
      description: "Placement of the popover relative to the anchor.",
    },
    placementFallback: {
      control: { type: "radio" },
      options: [
        false,
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
      defaultValue: { summary: false },
      description:
        "Fallback placement when the primary placement is not possible.",
      table: {
        type: {
          summary: "false | string",
        },
      },
    },
    trigger: {
      control: { type: "radio" },
      options: ["click", "hover"],
      defaultValue: { summary: "click" },
      description:
        "Trigger action for the overlay. Only works for uncontrolled mode.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    visibilityDelay: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Delay in milliseconds before showing the overlay.",
    },
    paddingX: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Horizontal gap between popover and anchor when anchored.",
    },
    paddingY: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Vertical gap between popover and anchor when anchored.",
    },
    edgePadding: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Minimum spacing from viewport edges.",
    },
    closeOnOutsideClick: {
      control: { type: "boolean" },
      defaultValue: { summary: true },
      description: "Close when clicking outside. Only works for click trigger.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    arrow: {
      control: { type: "boolean" },
      defaultValue: { summary: true },
      description:
        "Show arrow pointing to the anchor. Supports the Tooltip as children component.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onOpen: {
      control: { disable: true },
      description: "Callback when opened.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onClose: {
      control: { disable: true },
      description: "Callback when closed.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "JSX.Element",
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
    placement: "bottom",
    placementFallback: false,
    trigger: "click",
    visibilityDelay: 0,
    paddingX: 0,
    paddingY: 0,
    edgePadding: 0,
    closeOnOutsideClick: true,
    arrow: false,
    onOpen: fn(),
    onClose: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef as any}>Show Popover</Button>

        <OverlayPositioner anchorRef={anchorRef} {...args}>
          <Popover width={300}>
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
        </OverlayPositioner>
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
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef as any}>Show Popover</Button>
        <OverlayPositioner
          anchorRef={anchorRef}
          defaultOpen={false}
          paddingY={8}
        >
          <Popover width={300}>
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
        </OverlayPositioner>
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
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Text>Overlay visibility: {open ? "Open" : "Closed"}</Text>
          <Button ref={anchorRef as any} onClick={() => setOpen((v) => !v)}>
            Show Popover
          </Button>

          <OverlayPositioner
            anchorRef={anchorRef}
            open={open}
            onClose={() => setOpen(false)}
            paddingY={8}
          >
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}

export const Placement: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRefTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefTopLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefTopEnd = useRef<HTMLButtonElement | null>(null)

    const anchorRefBottom = useRef<HTMLButtonElement | null>(null)
    const anchorRefBottomLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefBottomEnd = useRef<HTMLButtonElement | null>(null)

    const anchorRefLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefLeftTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefLeftBottom = useRef<HTMLButtonElement | null>(null)

    const anchorRefRight = useRef<HTMLButtonElement | null>(null)
    const anchorRefRightTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefRightBottom = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing={400}>
          <Stack spacing={200}>
            <Button ref={anchorRefTopLeft as any}>Top Left</Button>
            <OverlayPositioner
              anchorRef={anchorRefTopLeft}
              placement="top-left"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefTop as any}>Top</Button>
            <OverlayPositioner
              anchorRef={anchorRefTop}
              placement="top"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefTopEnd as any}>Top Right</Button>
            <OverlayPositioner
              anchorRef={anchorRefTopEnd}
              placement="top-right"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefBottomLeft as any}>Bottom Left</Button>
            <OverlayPositioner
              anchorRef={anchorRefBottomLeft}
              placement="bottom-left"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefBottom as any}>Bottom</Button>
            <OverlayPositioner
              anchorRef={anchorRefBottom}
              placement="bottom"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefBottomEnd as any}>Bottom Right</Button>
            <OverlayPositioner
              anchorRef={anchorRefBottomEnd}
              placement="bottom-right"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefLeftTop as any}>Left Top</Button>
            <OverlayPositioner
              anchorRef={anchorRefLeftTop}
              placement="left-top"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefLeft as any}>Left</Button>
            <OverlayPositioner
              anchorRef={anchorRefLeft}
              placement="left"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefLeftBottom as any}>Left Bottom</Button>
            <OverlayPositioner
              anchorRef={anchorRefLeftBottom}
              placement="left-bottom"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefRightTop as any}>Right Top</Button>
            <OverlayPositioner
              anchorRef={anchorRefRightTop}
              placement="right-top"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefRight as any}>Right</Button>
            <OverlayPositioner
              anchorRef={anchorRefRight}
              placement="right"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefRightBottom as any}>Right Bottom</Button>
            <OverlayPositioner
              anchorRef={anchorRefRightBottom}
              placement="right-bottom"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>
        </Stack>
      </div>
    )
  },
}

export const Trigger: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRefClick = useRef<HTMLButtonElement | null>(null)
    const anchorRefHover = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefClick as any}>Click</Button>
          <OverlayPositioner
            anchorRef={anchorRefClick}
            trigger="click"
            paddingY={8}
          >
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefHover as any}>Hover</Button>
          <OverlayPositioner
            anchorRef={anchorRefHover}
            trigger="hover"
            paddingY={8}
          >
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}

export const Padding: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRefNoPadding = useRef<HTMLButtonElement | null>(null)
    const anchorRefPadding = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefNoPadding as any}>Padding 0, 0</Button>
          <OverlayPositioner
            anchorRef={anchorRefNoPadding}
            placement="bottom-left"
            paddingX={0}
            paddingY={0}
          >
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefPadding as any}>Padding 24, 24</Button>
          <OverlayPositioner
            anchorRef={anchorRefPadding}
            placement="bottom-left"
            paddingX={24}
            paddingY={24}
          >
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}

export const EdgePadding: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRefNoPadding = useRef<HTMLButtonElement | null>(null)
    const anchorRefPadding = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefNoPadding as any}>Edge Padding 0</Button>
          <OverlayPositioner
            anchorRef={anchorRefNoPadding}
            edgePadding={0}
            paddingY={8}
          >
            <Popover width={300} height={200}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefPadding as any}>Edge Padding 80</Button>
          <OverlayPositioner
            anchorRef={anchorRefPadding}
            edgePadding={80}
            paddingY={8}
          >
            <Popover width={300} height={200}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}

export const CloseOnOutsideClick: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRefTrue = useRef<HTMLButtonElement | null>(null)
    const [openOutsideClickTrue, setOpenOutsideClickTrue] = useState(false)

    const anchorRefFalse = useRef<HTMLButtonElement | null>(null)
    const [openOutsideClickFalse, setOpenOutsideClickFalse] = useState(false)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button
            ref={anchorRefTrue as any}
            onClick={() => setOpenOutsideClickTrue((v) => !v)}
          >
            Close On Outside Click True
          </Button>

          <OverlayPositioner
            anchorRef={anchorRefTrue}
            closeOnOutsideClick={true}
            open={openOutsideClickTrue}
            onClose={() => setOpenOutsideClickTrue(false)}
            paddingY={8}
          >
            <Popover width={300}>
              <Section>
                <Stack spacing={200}>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                  <Button onClick={() => setOpenOutsideClickTrue(false)}>
                    Close
                  </Button>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button
            ref={anchorRefFalse as any}
            onClick={() => setOpenOutsideClickFalse((v) => !v)}
          >
            Close On Outside Click False
          </Button>

          <OverlayPositioner
            anchorRef={anchorRefFalse}
            closeOnOutsideClick={false}
            open={openOutsideClickFalse}
            onClose={() => setOpenOutsideClickTrue(false)}
            paddingY={8}
          >
            <Popover width={300}>
              <Section>
                <Stack spacing={200}>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                  <Button onClick={() => setOpenOutsideClickFalse(false)}>
                    Close
                  </Button>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}

export const VisibilityDelay: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRef = useRef<HTMLDivElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Text ref={anchorRef as any}>Hover delay 480ms</Text>
          <OverlayPositioner
            anchorRef={anchorRef}
            trigger="hover"
            visibilityDelay={480}
            arrow={true}
            paddingY={12}
          >
            <Tooltip>
              <Text intent="neutral-inverted-fixed" noWrap>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Tooltip>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}

export const Arrow: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRefTooltip = useRef<HTMLDivElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefTooltip as any}>Tooltip</Button>
          <OverlayPositioner
            anchorRef={anchorRefTooltip}
            arrow={true}
            paddingY={12}
          >
            <Tooltip>
              <Text intent="neutral-inverted-fixed" noWrap>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Tooltip>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}
