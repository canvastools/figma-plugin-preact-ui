import { StoryObj } from "@storybook/preact"

import { useRef, useState } from "preact/hooks"

import { Button, Text } from "../../../index"

import { Menu } from "../Menu"
import { MenuItemData } from "../Menu.types"

type Story = StoryObj<typeof Menu>

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

const items = [
  {
    type: "action",
    closeOnClick: true,
    id: "action-1",
    children: "Action 1",
    onClick: () => { ... }
  },
  {
    type: "action",
    closeOnClick: true,
    id: "action-2",
    children: "Action 2",
    onClick: () => { ... }
  },
  {
    type: "action",
    id: "action-3",
    closeOnClick: true,
    children: "Action 3",
    onClick: () => { ... }
  },
]


<Button
  ref={triggerRef}
  onClick={() => setOpen(!open)}
>
  {children}
</Button>

<Menu
  triggerRef={triggerRef}
  open={open
  onClose={() => setOpen(false)}
  items={items}
/>`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)

    const items: MenuItemData[] = [
      {
        type: "action",
        id: "action-1",
        children: "Action 1",
        closeOnClick: true,
        onClick: () => console.log("action-1 clicked"),
      },
      {
        type: "action",
        id: "action-2",
        children: "Action 2",
        closeOnClick: true,
        onClick: () => console.log("action-2 clicked"),
      },
      {
        type: "action",
        id: "action-3",
        children: "Action 3",
        closeOnClick: true,
        onClick: () => console.log("action-3 clicked"),
      },
    ]
    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Text>Open: {open ? "true" : "false"}</Text>
        <Button ref={triggerRef} onClick={() => setOpen(!open)}>
          Open Menu
        </Button>
        <Menu
          triggerRef={triggerRef}
          open={open}
          onClose={() => setOpen(false)}
          items={items}
        />
      </div>
    )
  },
}
