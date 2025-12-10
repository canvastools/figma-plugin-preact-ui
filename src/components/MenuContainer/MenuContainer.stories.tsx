import { Meta, StoryObj } from "@storybook/preact"

import { MenuContainer } from "./MenuContainer"

import {
  MenuDivider,
  MenuItemAction,
  MenuItemOption,
  MenuContext,
  Text,
  Stack,
} from "../../index"

const meta: Meta<typeof MenuContainer> = {
  title: "Components/MenuContainer",
  component: MenuContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A wrapper component that displays menu items.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    height: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    children: {
      control: { disable: true },
      description:
        "Usually &lt;MenuItem/&gt;, &lt;MenuItemOption/&gt;, &lt;MenuDivider/&gt; components.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuContainer>

export const Demo: Story = {
  args: {
    className: "",
    width: 208,
    height: 200,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContext>
        <MenuContainer {...args}>
          <MenuItemAction>Menu Item</MenuItemAction>
          <MenuItemAction>Menu Item</MenuItemAction>
          <MenuDivider />
          <MenuItemOption selected>Option</MenuItemOption>
          <MenuItemOption selected={false}>Option</MenuItemOption>
          <MenuItemOption selected={false}>Option</MenuItemOption>
          <MenuItemOption selected={false}>Option</MenuItemOption>
        </MenuContainer>
      </MenuContext>
    </div>
  ),
}

export const Width: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Text>Width: 160</Text>
        <MenuContext>
          <MenuContainer width={160}>
            <MenuItemAction>Menu Item</MenuItemAction>
            <MenuItemAction>Menu Item</MenuItemAction>
          </MenuContainer>
        </MenuContext>
        <Text>Width: auto</Text>
        <MenuContext>
          <MenuContainer width="auto">
            <MenuItemAction>Menu Item</MenuItemAction>
            <MenuItemAction>Menu Item</MenuItemAction>
          </MenuContainer>
        </MenuContext>
      </Stack>
    </div>
  ),
}

export const Height: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Text>Height: 160</Text>
        <MenuContext>
          <MenuContainer height={160}>
            <MenuItemAction>Menu Item</MenuItemAction>
            <MenuItemAction>Menu Item</MenuItemAction>
          </MenuContainer>
        </MenuContext>
        <Text>Height: auto</Text>
        <MenuContext>
          <MenuContainer height="auto">
            <MenuItemAction>Menu Item</MenuItemAction>
            <MenuItemAction>Menu Item</MenuItemAction>
          </MenuContainer>
        </MenuContext>
      </Stack>
    </div>
  ),
}
