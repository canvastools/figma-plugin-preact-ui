import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useRef, useState } from "preact/hooks"

import { Menu } from "./Menu"
import { MenuItemData } from "./Menu.types"

import { Button, Text, Stack } from "../../index"

const meta: Meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A facade component that uses simplified API to manage the open state, focus, and keyboard navigation of a menu overlay.",
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
    items: {
      control: { disable: true },
      description: `Array of items to render in the menu.
      <pre>type MenuItemData =
  | ({ type: "action", closeOnClick?: boolean } & Omit<MenuItemActionProps, "focused">)
  | ({ type: "option", closeOnClick?: boolean } & Omit<MenuItemOptionProps, "focused">)
  | ({ type: "divider" } & MenuDividerProps</pre>
      `,
      table: {
        type: {
          summary: "MenuItemData[]",
        },
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Value for the uncontrolled mode.",
      table: {
        type: { summary: "boolean" },
      },
    },
    open: {
      control: { disable: true },
      description: "Value for the controlled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    width: {
      control: { disable: true },
      defaultValue: { summary: "auto" },
      description: "Width of the menu.",
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    placement: {
      control: { type: "select" },
      defaultValue: { summary: "bottom-left" },
      options: [
        "over",
        "top",
        "top-left",
        "top-right",
        "bottom",
        "bottom-left",
        "bottom-right",
        "left",
        "left-top",
        "left-bottom",
        "right",
        "right-top",
        "right-bottom",
      ],
      description: "Placement of the menu.",
      table: {
        type: {
          summary: "OverlayPlacement",
        },
      },
    },
    placementFallback: {
      control: { disable: true },
      defaultValue: { summary: "false" },
      description:
        "Fallback placement when the primary placement is not possible.",
      table: {
        type: { summary: "false | OverlayPlacement[]" },
      },
    },
    paddingX: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Padding between the menu and the anchor.",
      table: {
        type: { summary: "number" },
      },
    },
    paddingY: {
      control: { type: "number" },
      defaultValue: { summary: 4 },
      description: "Padding between the menu and the anchor.",
      table: {
        type: { summary: "number" },
      },
    },
    edgePadding: {
      control: { type: "number" },
      defaultValue: { summary: 16 },
      description: "Padding between the menu and the viewport edges.",
      table: {
        type: { summary: "number" },
      },
    },
    onOpen: {
      control: { disable: true },
      description: "Callback when the menu is opened.",
      table: {
        type: { summary: "() => void" },
      },
    },
    onClose: {
      control: { disable: true },
      description: "Callback when the menu is closed.",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    defaultOpen: false,
    width: "auto",
    placement: "bottom-left",
    placementFallback: false,
    paddingX: 0,
    paddingY: 4,
    edgePadding: 16,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const [selectedOption, setSelectedOption] = useState<string | null>(
      "option-1"
    )

    const items: MenuItemData[] = [
      {
        type: "action",
        id: "action-1",
        children: "Action 1",
        optionLikePadding: true,
        closeOnClick: true,
        onClick: fn(),
      },
      {
        type: "action",
        id: "action-2",
        children: "Action 2",
        optionLikePadding: true,
        closeOnClick: true,
        onClick: fn(),
      },
      { type: "divider" },
      {
        type: "option",
        id: "option-1",
        selected: selectedOption === "option-1",
        children: "Option 1",
        onChange: ({ selected }) =>
          setSelectedOption(selected ? "option-1" : null),
      },
      {
        type: "option",
        id: "option-2",
        selected: selectedOption === "option-2",
        children: "Option 2",
        onChange: ({ selected }) =>
          setSelectedOption(selected ? "option-2" : null),
      },
    ]

    return (
      <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Open menu</Button>
        <Menu triggerRef={triggerRef} items={items} {...args} />
      </div>
    )
  },
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const items: MenuItemData[] = [
      {
        type: "action",
        id: "action-1",
        children: "Action 1",
        closeOnClick: true,
        onClick: fn(),
      },
      {
        type: "action",
        id: "action-2",
        children: "Action 2",
        closeOnClick: true,
        onClick: fn(),
      },
      {
        type: "action",
        id: "action-3",
        children: "Action 3",
        closeOnClick: true,
        onClick: fn(),
      },
    ]

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Button ref={triggerRef}>Open menu</Button>
          <Menu triggerRef={triggerRef} items={items} />
        </Stack>
      </div>
    )
  },
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
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
        onClick: fn(),
      },
      {
        type: "action",
        id: "action-2",
        children: "Action 2",
        closeOnClick: true,
        onClick: fn(),
      },
      {
        type: "action",
        id: "action-3",
        children: "Action 3",
        closeOnClick: true,
        onClick: fn(),
      },
    ]

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>Open: {open ? "true" : "false"}</Text>
          <Button ref={triggerRef} onClick={() => setOpen(!open)}>
            Open menu
          </Button>
          <Menu
            triggerRef={triggerRef}
            items={items}
            open={open}
            onClose={() => setOpen(false)}
          />
        </Stack>
      </div>
    )
  },
}
