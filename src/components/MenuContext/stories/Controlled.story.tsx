import { StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import {
  MenuItemAction,
  MenuContainer,
  Button,
  OverlayPositioner,
} from "../../../index"

import { MenuContext, useMenuContext } from "../MenuContext"

type Story = StoryObj<typeof MenuContext>

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
const MenuContent = () => {
  const context = useMenuContext()

  return (
    <OverlayPositioner
      anchorRef={triggerRef}
      open={context.open}
      placement="bottom-left"
      offsetY={4}
      offsetEdge={16}
      onClose={() => context.setOpen(false)}
    >
      <MenuContainer>

        <MenuItemAction
          id="action-1"
          focused={context.focusedItem === "action-1"}
        >
          Action 1
        </MenuItemAction>

        <MenuItemAction
          id="action-2"
          focused={context.focusedItem === "action-2"}
        >
          Action 2
        </MenuItemAction>

        <MenuItemAction
          id="action-3"
          focused={context.focusedItem === "action-3"}
        >
          Action 3
        </MenuItemAction>

      </MenuContainer>
    </OverlayPositioner>
  )
}


const ControlledMenu = () => {
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>

      <MenuContext
        triggerRef={triggerRef}
        open={open}
        setOpen={setOpen}
      >
        <MenuContent />
      </MenuContext>
    </div>
  )
}

`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={triggerRef}
          open={context.open}
          placement="bottom-left"
          offsetY={4}
          offsetEdge={16}
          onClose={() => context.setOpen(false)}
        >
          <MenuContainer>
            <MenuItemAction
              id="action-1"
              focused={context.focusedItem === "action-1"}
            >
              Action 1
            </MenuItemAction>
            <MenuItemAction
              id="action-2"
              focused={context.focusedItem === "action-2"}
            >
              Action 2
            </MenuItemAction>
            <MenuItemAction
              id="action-3"
              focused={context.focusedItem === "action-3"}
            >
              Action 3
            </MenuItemAction>
          </MenuContainer>
        </OverlayPositioner>
      )
    }

    return (
      <div className="sb-column sb-width-full sb-gap-40">
        <Button ref={triggerRef} onClick={() => setOpen(true)}>
          Open menu
        </Button>
        <MenuContext triggerRef={triggerRef} open={open} setOpen={setOpen}>
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}
