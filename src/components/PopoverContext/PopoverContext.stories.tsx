import { Meta, StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import { ControlledStory } from "./stories/Controlled.story"

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
          "A context provider that manages open state, focus, and keyboard navigation of Popover-related components.",
      },
    },
  },
  argTypes: {
    triggerRef: {
      control: { disable: true },
      description: "Ref to the trigger element.",
      table: {
        type: {
          summary: "preact.RefObject<HTMLElement>",
        },
      },
    },
    anchorRef: {
      control: { disable: true },
      description:
        "Ref to the anchor element. If not provided, the triggerRef will be used",
      table: {
        type: {
          summary: "preact.RefObject<HTMLElement>",
        },
      },
    },
    open: {
      control: { type: "boolean" },
      description: "State for controlled mode.",
    },
    setOpen: {
      control: { disable: true },
      description: "Function to set the open state.",
      table: {
        type: {
          summary: "(open: boolean) => void",
        },
      },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    usePopoverContext: {
      description: "Hook to access the context.",
      table: {
        type: {
          summary: "Props",
          detail: `
  {
    triggerRef: RefObject | null,
    anchorRef: RefObject | null, 
    open: boolean,
    setOpen: (open: boolean) => void,
  }
  `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof PopoverContext>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    open: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<PopoverContext {...args}>
  {children}
</PopoverContext>
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

export const Controlled = ControlledStory
