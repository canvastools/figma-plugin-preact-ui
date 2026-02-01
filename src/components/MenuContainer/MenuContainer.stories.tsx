import { Meta, StoryObj } from "@storybook/preact"

import { SizeStory } from "./stories/Size.story"

import { MenuContainer } from "./MenuContainer"

import { MenuDivider, MenuItemAction, MenuItemOption } from "../../index"

const meta: Meta<typeof MenuContainer> = {
  title: "Components/MenuContainer",
  component: MenuContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    className: {
      control: { type: "text" },
    },
    width: {
      control: { type: "number" },
      description: "Takes the width of the menu items if not provided.",
    },
    height: {
      control: { type: "number" },
      description: "Takes the height of the menu items if not provided.",
    },
    children: {
      control: { disable: true },
      description: `<strong>*</strong>`,
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof MenuContainer>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    id: undefined,
    className: "",
    width: 208,
    height: 300,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<MenuContainer {...args}>
  {children}
</MenuContainer>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer {...args}>
        <MenuItemAction paddingLikeOption>Action 1</MenuItemAction>
        <MenuItemAction paddingLikeOption>Action 2</MenuItemAction>
        <MenuItemAction paddingLikeOption>Action 3</MenuItemAction>
        <MenuDivider variant="inset" />
        <MenuItemOption defaultSelected>Option 1</MenuItemOption>
        <MenuItemOption>Option 2</MenuItemOption>
        <MenuItemOption>Option 3</MenuItemOption>
        <MenuDivider variant="full" />
        <MenuItemAction paddingLikeOption intentModifier="danger">
          Destructive action
        </MenuItemAction>
      </MenuContainer>
    </div>
  ),
}

export const Size = SizeStory
