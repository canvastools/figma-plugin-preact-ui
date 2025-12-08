import { Meta, StoryObj } from "@storybook/preact"

import { MenuDivider } from "./MenuDivider"

import { MenuContainer } from "../../index"
import { MenuItemAction } from "../../index"

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
    variant: {
      control: { type: "radio" },
      options: ["full", "inset"],
      defaultValue: { summary: "full" },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuDivider>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    variant: "full",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuDivider {...args} />
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuItemAction>Menu Item</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}

export const Variant: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction>Full divider below</MenuItemAction>
        <MenuDivider variant="full" />
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuDivider variant="inset" />
        <MenuItemAction>Inset divider above</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}
