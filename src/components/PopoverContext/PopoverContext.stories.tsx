import { Meta, StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import { PopoverContext, usePopoverContext } from "./PopoverContext"

import {
  Button,
  Text,
  PopoverContainer,
  PopoverHeader,
  Section,
  OverlayPositioner,
} from "../../index"

const meta: Meta = {
  title: "Components/PopoverContext",
  component: PopoverContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A context provider that manages open state of a popover overlay.",
      },
    },
  },
  argTypes: {
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
    open: {
      control: { type: "boolean" },
      description: "Controlled open state.",
    },
    setOpen: {
      control: { disable: true },
      description: "Set the open state.",
      table: {
        type: {
          summary: "({ open: boolean }) => void",
        },
      },
    },
    children: {
      control: { disable: true },
      description: "Children components to render inside the popover.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    usePopoverContext: {
      table: {
        type: {
          summary: `Hook`,
        },
      },
      description: `Use this hook inside a child component to access the context. <br/>
        <pre>
        interface PopoverContextValue {
          triggerRef?: preact.RefObject<HTMLElement | null>
          anchorRef?: preact.RefObject<HTMLElement | null>
          open?: boolean
          setOpen?: (open: boolean) => void
        }</pre>`,
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  args: {
    open: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
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
          paddingX={4}
          paddingY={4}
          draggable={true}
          edgePadding={16}
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
          Open popover
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
