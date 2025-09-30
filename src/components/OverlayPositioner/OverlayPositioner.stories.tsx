import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"
import { fn } from "@storybook/test"

import { OverlayPositioner } from "./OverlayPositioner"

import { Popover } from "../Popover/Popover"
import { Button } from "../Button/Button"
import { Section } from "../Section/Section"
import { Text } from "../Text/Text"
import { Stack } from "../Stack/Stack"

const meta: Meta<typeof OverlayPositioner> = {
  title: "Components/OverlayPositioner",
  component: OverlayPositioner,
  tags: ["autodocs"],
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
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Visibility in controlled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
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
      options: ["x", "y", "over"],
      defaultValue: { summary: "x" },
      description:
        "Placement of the popover relative to the anchor. Occupies available space to the side of the anchor.",
    },
    offsetX: {
      control: { type: "number" },
      defaultValue: { summary: 8 },
      description: "Horizontal gap between popover and anchor when anchored.",
    },
    offsetY: {
      control: { type: "number" },
      defaultValue: { summary: 8 },
      description: "Vertical gap between popover and anchor when anchored.",
    },
    edgePadding: {
      control: { type: "number" },
      defaultValue: { summary: 8 },
      description: "Minimum spacing from viewport edges.",
    },
    closeOnOutsideClick: {
      control: { type: "boolean" },
      defaultValue: { summary: true },
      description: "Close when clicking outside.",
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
    placement: "x",
    offsetX: 8,
    offsetY: 8,
    edgePadding: 8,
    closeOnOutsideClick: true,
    onOpen: fn(),
    onClose: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef as any}>Show Popover</Button>

        <OverlayPositioner anchorRef={anchorRef} {...args}>
          <Popover width={300} height={200}>
            <Section>
              <Stack spacing={200}>
                <Text variant="heading">
                  Popover example inside OverlayPositioner
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Stack>
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
        <OverlayPositioner anchorRef={anchorRef} defaultOpen={false}>
          <Popover width={300} height={200}>
            <Section>
              <Stack spacing={200}>
                <Text variant="heading">
                  Popover example inside OverlayPositioner
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Stack>
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
          >
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
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
    const anchorRefX = useRef<HTMLButtonElement | null>(null)
    const anchorRefY = useRef<HTMLButtonElement | null>(null)
    const anchorRefOver = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefX as any}>Show Popover - X</Button>
          <OverlayPositioner anchorRef={anchorRefX} placement="x">
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefY as any}>Show Popover - Y</Button>
          <OverlayPositioner anchorRef={anchorRefY} placement="y">
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefOver as any}>Show Popover - Over</Button>
          <OverlayPositioner anchorRef={anchorRefOver} placement="over">
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>
    )
  },
}

export const Offset: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const anchorRefNoOffset = useRef<HTMLButtonElement | null>(null)
    const anchorRefOffset = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefNoOffset as any}>
            Show Popover - Offset 0, 0
          </Button>
          <OverlayPositioner
            anchorRef={anchorRefNoOffset}
            offsetX={0}
            offsetY={0}
          >
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefOffset as any}>
            Show Popover - Offset 24, 24
          </Button>
          <OverlayPositioner
            anchorRef={anchorRefOffset}
            offsetX={24}
            offsetY={24}
          >
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
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
          <Button ref={anchorRefNoPadding as any}>
            Show Popover - Edge Padding 0
          </Button>
          <OverlayPositioner anchorRef={anchorRefNoPadding} edgePadding={0}>
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefPadding as any}>
            Show Popover - Edge Padding 24
          </Button>
          <OverlayPositioner anchorRef={anchorRefPadding} edgePadding={24}>
            <Popover width={300} height={200}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Stack>
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
            Show Popover - Close On Outside Click True
          </Button>

          <OverlayPositioner
            anchorRef={anchorRefTrue}
            closeOnOutsideClick={true}
            open={openOutsideClickTrue}
            onClose={() => setOpenOutsideClickTrue(false)}
          >
            <Popover width={300}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
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
            Show Popover - Close On Outside Click False
          </Button>

          <OverlayPositioner
            anchorRef={anchorRefFalse}
            closeOnOutsideClick={false}
            open={openOutsideClickFalse}
            onClose={() => setOpenOutsideClickTrue(false)}
          >
            <Popover width={300}>
              <Section>
                <Stack spacing={200}>
                  <Text variant="heading">
                    Popover example inside OverlayPositioner
                  </Text>
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
