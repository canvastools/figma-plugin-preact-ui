import { Meta, StoryObj } from "@storybook/preact"

import { useRef, useEffect, useState } from "preact/hooks"

import { MenuContext, useMenuContext } from "./MenuContext"

import {
  Button,
  MenuContainer,
  MenuDivider,
  MenuItemAction,
  MenuItemOption,
  OverlayPositioner,
  Text,
} from "../../index"

const meta: Meta = {
  title: "Components/MenuContext",
  component: MenuContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A context provider that manages open state, focus, and keyboard navigation of a menu overlay.",
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
      description:
        "Ref to the anchor element. If not provided, the triggerRef will be used.",
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
      description: "Children components to render inside the menu.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    useMenuContext: {
      table: {
        type: {
          summary: "Hook",
        },
      },
      description: `Use this hook inside a child component to access the context. <br/>
        <pre>
        interface MenuContextValue {
          triggerRef?: preact.RefObject<HTMLElement> | null // ref to the trigger element
          anchorRef?: preact.RefObject<HTMLElement> | null // ref to the anchor element
          open?: boolean // open state
          setOpen?: (open: boolean) => void // set the open state
          registerItem: (meta: MenuItemMetadata) => () => void // register an item
          focusedItemId: string | null // id of the focused item
          focusItem: (id?: string) => void // focus an item
          clearFocusedItem: () => void // clear the focused item
          setHoveredItem: (id: string | null) => void // track last hovered item
          keyboardInteraction: boolean // flag indicating keyboard interaction mode
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
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(args.open)

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>}
          open={context.open}
          placement="bottom-left"
          paddingY={4}
          edgePadding={16}
          onClose={() => context.setOpen(false)}
        >
          <MenuContainer>
            <MenuItemAction
              id="action-1"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItemId === "action-1"}
            >
              Apple
            </MenuItemAction>
            <MenuItemAction
              id="action-2"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItemId === "action-2"}
            >
              Ananas
            </MenuItemAction>
            <MenuItemAction
              id="action-3"
              onClick={() => context.setOpen(false)}
              focused={context.focusedItemId === "action-3"}
            >
              Orange
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
            console.log("clicked", isMenuOpen)
            setIsMenuOpen(true)
          }}
        >
          Open menu
        </Button>
        <MenuContext
          triggerRef={triggerRef}
          anchorRef={triggerRef}
          open={isMenuOpen}
          setOpen={setIsMenuOpen}
        >
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}

export const Actions: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(args.open)

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>}
          open={context.open}
          placement="bottom-left"
          paddingY={4}
          edgePadding={16}
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
            console.log("clicked", isMenuOpen)
            setIsMenuOpen(true)
          }}
        >
          Open menu with actions
        </Button>
        <MenuContext
          triggerRef={triggerRef}
          anchorRef={triggerRef}
          open={isMenuOpen}
          setOpen={setIsMenuOpen}
        >
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}

export const Options: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(args.open)
    const [selectedOption, setSelectedOption] = useState<string | null>(
      "option-1"
    )

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>}
          open={context.open}
          placement="bottom-left"
          paddingY={4}
          edgePadding={16}
          onClose={() => context.setOpen(false)}
        >
          <MenuContainer>
            <MenuItemOption
              id="option-1"
              selected={selectedOption === "option-1"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-1" : null)
              }
              focused={context.focusedItemId === "option-1"}
            >
              Option 1
            </MenuItemOption>
            <MenuItemOption
              id="option-2"
              selected={selectedOption === "option-2"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-2" : null)
              }
              focused={context.focusedItemId === "option-2"}
            >
              Option 2
            </MenuItemOption>
            <MenuItemOption
              id="option-3"
              selected={selectedOption === "option-3"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-3" : null)
              }
              focused={context.focusedItemId === "option-3"}
            >
              Option 3
            </MenuItemOption>
          </MenuContainer>
        </OverlayPositioner>
      )
    }

    return (
      <div className="sb-column sb-width-full">
        <Button
          ref={triggerRef}
          onClick={() => {
            console.log("clicked", isMenuOpen)
            setIsMenuOpen(true)
          }}
        >
          Open menu with options
        </Button>
        <MenuContext
          triggerRef={triggerRef}
          anchorRef={triggerRef}
          open={isMenuOpen}
          setOpen={setIsMenuOpen}
        >
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}

export const Mixed: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(args.open)
    const [selectedOption, setSelectedOption] = useState<string | null>(
      "option-1"
    )

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>}
          open={context.open}
          placement="bottom-left"
          paddingY={4}
          edgePadding={16}
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
            <MenuDivider variant="inset" />
            <MenuItemOption
              id="option-1"
              selected={selectedOption === "option-1"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-1" : null)
              }
              focused={context.focusedItemId === "option-1"}
            >
              Option 1
            </MenuItemOption>
            <MenuItemOption
              id="option-2"
              selected={selectedOption === "option-2"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-2" : null)
              }
              focused={context.focusedItemId === "option-2"}
            >
              Option 2
            </MenuItemOption>
            <MenuItemOption
              id="option-3"
              selected={selectedOption === "option-3"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-3" : null)
              }
              focused={context.focusedItemId === "option-3"}
            >
              Option 3
            </MenuItemOption>
          </MenuContainer>
        </OverlayPositioner>
      )
    }

    return (
      <div className="sb-column sb-width-full">
        <Button
          ref={triggerRef}
          onClick={() => {
            console.log("clicked", isMenuOpen)
            setIsMenuOpen(true)
          }}
        >
          Open menu with mixed items
        </Button>
        <MenuContext
          triggerRef={triggerRef}
          anchorRef={triggerRef}
          open={isMenuOpen}
          setOpen={setIsMenuOpen}
        >
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}

export const CustomItem: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(args.open)
    const [selectedOption, setSelectedOption] = useState<string | null>(
      "option-1"
    )

    const CustomMenuItem = ({
      id,
      children,
      disabled,
      focused,
    }: {
      id: string
      children: preact.ComponentChildren
      disabled: boolean
      focused: boolean
    }) => {
      const { registerItem, clearFocusedItem, setHoveredItem, setOpen } =
        useMenuContext()
      const itemRef = useRef<HTMLElement>(null)

      useEffect(() => {
        const unregister = registerItem({
          id,
          ref: itemRef as preact.RefObject<HTMLElement>,
          disabled,
        })
        return unregister
      }, [])

      const handleMouseEnter = () => {
        if (disabled) return
        clearFocusedItem()
        setHoveredItem(id)
      }

      return (
        <div
          id={id}
          ref={itemRef as preact.Ref<HTMLDivElement>}
          onClick={() => {
            setOpen(false)
            alert("clicked")
          }}
          onMouseEnter={handleMouseEnter}
          style={{ padding: "var(--pui-spacing-100) var(--pui-spacing-400)" }}
        >
          <Text intent="neutral-inverted-fixed" interactive>
            {children} {focused ? " [focused]" : null}
          </Text>
        </div>
      )
    }

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>}
          open={context.open}
          placement="bottom-left"
          paddingY={4}
          edgePadding={16}
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
            <MenuDivider variant="inset" />
            <MenuItemOption
              id="option-1"
              selected={selectedOption === "option-1"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-1" : null)
              }
              focused={context.focusedItemId === "option-1"}
            >
              Option 1
            </MenuItemOption>
            <MenuItemOption
              id="option-2"
              selected={selectedOption === "option-2"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-2" : null)
              }
              focused={context.focusedItemId === "option-2"}
            >
              Option 2
            </MenuItemOption>
            <MenuItemOption
              id="option-3"
              selected={selectedOption === "option-3"}
              onChange={({ selected }) =>
                setSelectedOption(selected ? "option-3" : null)
              }
              focused={context.focusedItemId === "option-3"}
            >
              Option 3
            </MenuItemOption>
            <MenuDivider variant="inset" />
            <CustomMenuItem
              id="custom-1"
              disabled={false}
              focused={context.focusedItemId === "custom-1"}
            >
              Custom Item
            </CustomMenuItem>
          </MenuContainer>
        </OverlayPositioner>
      )
    }

    return (
      <div className="sb-column sb-width-full">
        <Button
          ref={triggerRef}
          onClick={() => {
            console.log("clicked", isMenuOpen)
            setIsMenuOpen(true)
          }}
        >
          Open menu with mixed items
        </Button>
        <MenuContext
          triggerRef={triggerRef}
          anchorRef={triggerRef}
          open={isMenuOpen}
          setOpen={setIsMenuOpen}
        >
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}
