import { Meta, StoryObj } from "@storybook/preact"

import { MenuDivider } from "./MenuDivider"

import { MenuContainer } from "../../index"
import { MenuItem } from "../../index"

const meta: Meta<typeof MenuDivider> = {
  title: "Components/MenuDivider",
  component: MenuDivider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Used within &lt;MenuContainer/&gt;.",
      },
    },
  },
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
