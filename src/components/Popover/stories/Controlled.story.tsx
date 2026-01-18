import { StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import { Button, Section, Text } from "../../../index"

import { Popover } from "../Popover"

type Story = StoryObj<typeof Popover>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
const triggerRef = useRef(null)
const [open, setOpen] = useState(false)

<Button
  ref={triggerRef}
  onClick={() => setOpen(!open)}
>
  {children}
</Button>

<Popover
  triggerRef={triggerRef}
  open={open}
  onClose={() => setOpen(false)}
  popoverHeaderProps={{
    children: "Controlled Popover",
  }}
>
  {children}
</Popover>

`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Text>Open: {open ? "true" : "false"}</Text>
        <Button ref={triggerRef} onClick={() => setOpen(!open)}>
          Open Popover
        </Button>
        <Popover
          triggerRef={triggerRef}
          open={open}
          onClose={() => setOpen(false)}
          popoverHeaderProps={{
            children: "Controlled Popover",
          }}
        >
          <Section>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Section>
        </Popover>
      </div>
    )
  },
}
