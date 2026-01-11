import { StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import { Button, PopoverContainer, Section, Text } from "../../../index"

import { OverlayPositioner } from "../OverlayPositioner"

type Story = StoryObj<typeof OverlayPositioner>

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
const anchorRef = useRef(null)
const [open, setOpen] = useState(false)

<Button
  ref={anchorRef}
  onClick={() => setOpen(!open)}
>
  Show Overlay
</Button>

<OverlayPositioner
  anchorRef={anchorRef}
  open={open}
  onClose={() => setOpen(false)}
>
  {children}
</OverlayPositioner>
`,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Text>Overlay visibility: {open ? "true" : "false"}</Text>
        <Button ref={anchorRef} onClick={() => setOpen(!open)}>
          Show Overlay
        </Button>

        <OverlayPositioner
          anchorRef={anchorRef}
          open={open}
          onClose={() => setOpen(false)}
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
