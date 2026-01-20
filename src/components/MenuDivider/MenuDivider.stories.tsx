import { Meta, StoryObj } from "@storybook/preact"

import { VariantStory } from "./stories/Variant.story"

import { MenuContainer, MenuItemAction } from "../../index"

import { MenuDivider } from "./MenuDivider"

const meta: Meta<typeof MenuDivider> = {
  title: "Components/MenuDivider",
  component: MenuDivider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component for creating dividers in a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>.",
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
    docs: {
      source: {
        language: "tsx",
        code: `
<MenuContainer>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuDivider {...args} />
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
</MenuContainer>
`,
      },
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

export const Variant = VariantStory
