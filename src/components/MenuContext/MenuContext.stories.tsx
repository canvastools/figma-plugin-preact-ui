import { Meta, StoryObj } from "@storybook/preact"

import { ControlledStory } from "./stories/Controlled.story"
import { CustomItemStory } from "./stories/CustomItem.story"

import { useRef, useState } from "preact/hooks"

import { MenuContext, useMenuContext } from "./MenuContext"

import {
  Button,
  MenuContainer,
  MenuItemAction,
  OverlayPositioner,
} from "../../index"

const meta: Meta = {
  title: "Components/MenuContext",
  component: MenuContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A context provider that manages open state, focus, and keyboard navigation of Menu-related components.",
      },
    },
  },
  argTypes: {
    triggerRef: {
      control: { disable: true },
      description: "Ref to the trigger element.",
      table: {
        type: {
          summary: "preact.RefObject",
        },
      },
    },
    anchorRef: {
      control: { disable: true },
      description:
        "Ref to the anchor element. If not provided, the triggerRef will be used.",
      table: {
        type: {
          summary: "preact.RefObject",
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
          summary: "preact.ComponentChildren",
        },
      },
    },
    useMenuContext: {
      description: "Hook to access the context.",
      table: {
        type: {
          summary: "Props",
          detail: `
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null
  open: boolean
  setOpen: (open: boolean) => void
  registerItem: (meta: MenuItemMetadata) => void // register an item in the context
  focusedItemId: string | null // id of the currently focused item
  setFocusedItem: (id: string | null) => void // set the focused item
  clearFocus: () => void // clear the focused item
  setHoveredItem: (id: string | null) => void // set the hovered item
  keyboardInteraction: boolean // flag indicating keyboard interaction mode
}

// Types

type MenuItemMetadata = {
  id: string // required, unique identifier for the item
  ref: RefObject // required, ref to the item element
  disabled: boolean // whether the item is disabled
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof MenuContext>

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
<MenuContext {...args}> 
  {children}
</MenuContext>
`,
      },
    },
  },
  render: (args) => {
    // @ts-ignore-next-line
    const [open, setOpen] = useState(args.open)
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>}
          open={context.open}
          placement="bottom-left"
          offsetY={4}
          offsetEdge={16}
          onClose={() => context.setOpen(false)}
        >
          <MenuContainer>
            <MenuItemAction
              id="action-1"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItemId === "action-1"}
            >
              Action 1
            </MenuItemAction>
            <MenuItemAction
              id="action-2"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItemId === "action-2"}
            >
              Action 2
            </MenuItemAction>
            <MenuItemAction
              id="action-3"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItemId === "action-3"}
            >
              Action 3
            </MenuItemAction>
          </MenuContainer>
        </OverlayPositioner>
      )
    }

    return (
      <div className="sb-column sb-width-full">
        <Button
          ref={triggerRef}
          onClick={() => {
            setOpen(true)
          }}
        >
          Open Menu
        </Button>
        <MenuContext
          triggerRef={triggerRef}
          anchorRef={triggerRef}
          open={open}
          setOpen={setOpen}
        >
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}

export const Controlled = ControlledStory
export const CustomItem = CustomItemStory
