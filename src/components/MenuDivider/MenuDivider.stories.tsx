import { Meta, StoryObj } from "@storybook/preact"

import { MenuDivider } from "./MenuDivider"

import { MenuContainer } from "../MenuContainer/MenuContainer"
import { MenuItem } from "../MenuItem/MenuItem"

const meta: Meta<typeof MenuDivider> = {
  title: "Components/MenuDivider",
  component: MenuDivider,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuDivider>

export const Demo: Story = {
  args: {
    className: "",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
        <MenuDivider {...args} />
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
      </MenuContainer>
    </div>
  ),
}
