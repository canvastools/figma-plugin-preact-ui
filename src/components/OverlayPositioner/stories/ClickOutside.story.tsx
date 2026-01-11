import { StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import { Button, PopoverContainer, Section, Text, Stack } from "../../../index"

import { OverlayPositioner } from "../OverlayPositioner"

type Story = StoryObj<typeof OverlayPositioner>

export const ClickOutsideStory: Story = {
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
  closeOnClickOutside={false}
>
  <Button onClick={() => setOpen(false)}>Close</Button>
</OverlayPositioner>
`,
      },
    },
  },
  render: () => {
    const [openClickOutside, setOpenClickOutside] = useState(false)
    const anchorRefClickOutside = useRef<HTMLButtonElement | null>(null)

    const [openNoClickOutside, setOpenNoClickOutside] = useState(false)
    const anchorRefNoClickOutside = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Button
          ref={anchorRefClickOutside}
          onClick={() => setOpenClickOutside(!openClickOutside)}
        >
          Show Overlay (click outside or button to close)
        </Button>

        <OverlayPositioner
          anchorRef={anchorRefClickOutside}
          open={openClickOutside}
          onClose={() => setOpenClickOutside(false)}
        >
          <PopoverContainer width={300}>
            <Section>
              <Stack spacing={200}>
                <Text>
                  It can be closed by clicking the close button or clicking
                  outside.
                </Text>
                <Button onClick={() => setOpenClickOutside(false)}>
                  Close
                </Button>
              </Stack>
            </Section>
          </PopoverContainer>
        </OverlayPositioner>

        <Button
          ref={anchorRefNoClickOutside}
          onClick={() => setOpenNoClickOutside(!openNoClickOutside)}
        >
          Show Overlay (click close button to close)
        </Button>

        <OverlayPositioner
          anchorRef={anchorRefNoClickOutside}
          open={openNoClickOutside}
          onClose={() => setOpenNoClickOutside(false)}
          closeOnClickOutside={false}
        >
          <PopoverContainer width={300}>
            <Section>
              <Stack spacing={200}>
                <Text>It can be closed by clicking the close button only.</Text>
                <Button onClick={() => setOpenNoClickOutside(false)}>
                  Close
                </Button>
              </Stack>
            </Section>
          </PopoverContainer>
        </OverlayPositioner>
      </div>
    )
  },
}
