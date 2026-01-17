import { StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import {
  PopoverContainer,
  PopoverHeader,
  Section,
  Text,
  Button,
  OverlayPositioner,
} from "../../../index"

import { PopoverContext, usePopoverContext } from "../PopoverContext"

type Story = StoryObj<typeof PopoverContext>

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
const PopoverContent = () => {
  const context = usePopoverContext()
  if (!context) return null

  return (
    <OverlayPositioner
      anchorRef={context.anchorRef}
      open={context.open}
      placement="bottom-left"
      offsetX={4}
      offsetY={4}
      offsetEdge={16}
      draggable={true}
      onClose={() => context.setOpen(false))}
    >
      <PopoverContainer width={300}>

        <PopoverHeader onClose={() => context.setOpen(false)}>
          Header
        </PopoverHeader>

        <Section>
          {children}
        </Section>

      </PopoverContainer>
    </OverlayPositioner>
  )
}

const ControlledPopover = () => {
  const [open, setOpen] = useState(args.open)
  const triggerRef = useRef(null)

  return (
    <div>
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      
      <PopoverContext
        triggerRef={triggerRef}
        anchorRef={triggerRef}
        open={open}
        setOpen={setOpen}
      >
        <PopoverContent />
      </PopoverContext>
    </div>
  )
}


`,
      },
    },
  },
  render: (args) => {
    // @ts-ignore-next-line
    const [open, setOpen] = useState(args.open)
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const PopoverContent = () => {
      const context = usePopoverContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>}
          open={context.open}
          placement="bottom-left"
          offsetX={4}
          offsetY={4}
          offsetEdge={16}
          draggable={true}
          onClose={() => context.setOpen?.(!open)}
        >
          <PopoverContainer width={300}>
            <PopoverHeader onClose={() => context.setOpen?.(!open)}>
              Header
            </PopoverHeader>
            <Section>
              <Text>Content</Text>
            </Section>
          </PopoverContainer>
        </OverlayPositioner>
      )
    }

    return (
      <div className="sb-column sb-width-full">
        <Button ref={triggerRef} onClick={() => setOpen(true)}>
          Open Popover
        </Button>
        <PopoverContext
          triggerRef={triggerRef}
          anchorRef={triggerRef}
          open={open}
          setOpen={setOpen}
        >
          <PopoverContent />
        </PopoverContext>
      </div>
    )
  },
}
