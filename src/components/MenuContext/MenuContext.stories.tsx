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
          summary: "preact.RefObject<HTMLElement>",
        },
      },
    },
    anchorRef: {
      control: { disable: true },
      description:
        "Ref to the anchor element. If not provided, the triggerRef will be used.",
      table: {
        type: {
          summary: "preact.RefObject<HTMLElement>",
        },
      },
    },
    open: {
      control: { type: "boolean" },
      description: "State for the controlled mode.",
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
    useMenuContext: {
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
  registerItem: (meta: MenuItemMetadata) => void, // register an item in the context
  focusedItem: string | null, // id of the currently focused item
  setFocusedItem: (id: string | null) => void, // set the focused item
  clearFocus: () => void, // clear the focused item
  setHoveredItem: (id: string | null) => void, // set the hovered item
  keyboardInteraction: boolean, // flag indicating keyboard interaction mode
}

// Types

type MenuItemMetadata = {
  id: string // unique identifier for the item
  ref: RefObject // ref to the item element
  disabled: boolean // whether the item is disabled
}
`,
        },
      },
    },
  },
}

export default meta
type Story = StoryObj

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

// Use useMenuContext hook to access the context

import { useMenuContext } from "figma-plugin-preact-ui"

const context = useMenuContext()

context.registerItem({
  id: "action-1",
  ref: itemRef,
  disabled: false,
})
`,
      },
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(args.open)

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
              focused={context.focusedItem === "action-1"}
            >
              Action 1
            </MenuItemAction>
            <MenuItemAction
              id="action-2"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItem === "action-2"}
            >
              Action 2
            </MenuItemAction>
            <MenuItemAction
              id="action-3"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItem === "action-3"}
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
          Open menu
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
