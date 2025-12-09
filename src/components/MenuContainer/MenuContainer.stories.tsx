import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"

import { MenuContainer } from "./MenuContainer"

import { Icon } from "../../index"
import { MenuDivider } from "../../index"
import { OverlayPositioner } from "../../index"
import { Button } from "../../index"
import { MenuItemAction } from "../../index"
import { MenuItemOption } from "../../index"
import { chevronRight as chevronRightGlyph } from "../../index"

const meta: Meta<typeof MenuContainer> = {
  title: "Components/MenuContainer",
  component: MenuContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that displays menu items. Used within &lt;OverlayPositioner/&gt;.",
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
      <MenuContainer {...args}>
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuDivider />
        <MenuItemOption selected>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
