import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useRef, useState } from "preact/hooks"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"

import { Menu } from "./Menu"
import { MenuItemData } from "./Menu.types"

import { Button } from "../../index"

const meta: Meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A facade component that provides a simplified API for menus.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    items: {
      control: { disable: true },
      description: `<strong>*</strong>Array of items to render in the menu.`,
      table: {
        type: {
          summary: "MenuItemData[]",
          detail: `

// Action item

{
  type: "action" // required
  closeOnClick: boolean
  ...Pick<MenuItemActionProps>
}
  
// Option item

{
  type: "option" // required
  closeOnClick: boolean
  ...Pick<MenuItemOptionProps>
}
  
// Divider

{
  type: "divider" // required
  ...Pick<MenuDividerProps>
}
          `,
        },
      },
    },
    "...MenuContextProps": {
      control: { disable: true },
      table: {
        type: {
          summary: "Pick<MenuContextProps>",
          detail: `
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null 
}
`,
        },
      },
    },
    "...MenuContainerProps": {
      control: { disable: true },
      table: {
        type: {
          summary: "Pick<MenuContainerProps>",
          detail: `
{
  width: number
  height: number
}
`,
        },
      },
    },
    "...OverlayPositionerProps": {
      control: { disable: true },
      table: {
        type: {
          summary: "Pick<OverlayPositionerProps>",
          detail: `
{
  open: boolean
  defaultOpen: boolean
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  offsetX: number
  offsetY: number
  offsetEdge: number
  onOpen: () => void
  onClose: () => void
}`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Menu>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Menu {...args} />
`,
      },
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
        paddingLikeOption: true,
        closeOnClick: true,
        onClick: fn(),
      },
      {
        type: "action",
        id: "action-2",
        children: "Action 2",
        paddingLikeOption: true,
        closeOnClick: true,
        onClick: fn(),
      },
      { type: "divider" },
      {
        type: "option",
        id: "option-1",
        selected: selectedOption === "option-1",
        children: "Option 1",
        onSelectedChange: ({ selected }) =>
          setSelectedOption(selected ? "option-1" : null),
      },
      {
        type: "option",
        id: "option-2",
        selected: selectedOption === "option-2",
        children: "Option 2",
        onSelectedChange: ({ selected }) =>
          setSelectedOption(selected ? "option-2" : null),
      },
    ]

    return (
      <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Open Menu</Button>
        <Menu triggerRef={triggerRef} items={items} {...args} />
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
