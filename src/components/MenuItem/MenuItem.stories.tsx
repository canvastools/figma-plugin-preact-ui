import { Meta, StoryObj } from "@storybook/preact"

import { fn } from "@storybook/test"

import { MenuItem } from "./MenuItem"

import { MenuContainer } from "../../index"
import { MenuItemOption } from "../../index"
import { MenuDivider } from "../../index"
import { Icon } from "../../index"
import { Badge } from "../../index"
import { Text } from "../../index"
import {
  ai as aiGlyph,
  adjust as adjustGlyph,
  link as linkGlyph,
} from "../../index"

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
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
    intentModifiers: {
      control: { type: "radio" },
      defaultValue: { summary: "default" },
      options: ["default", "danger"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    prefix: {
      control: { disable: true },
      description: "Element displayed before children.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: "Element displayed after children.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    optionLikePadding: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Indicates if the item has option like padding on the left.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    hasNested: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Indicates if the item has nested menu items. For pixel perfect alignment of the chevron for nested menus.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onClick: {
      control: { disable: true },
      description: "Callback when the item is clicked.",
      table: {
        type: {
          summary: "({ event: MouseEvent }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    intentModifiers: "default",
    disabled: false,
    optionLikePadding: false,
    hasNested: false,
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem {...args}>Menu Item</MenuItem>
      </MenuContainer>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem disabled>Menu Item</MenuItem>
      </MenuContainer>
    </div>
  ),
}

export const Prefix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem
          prefix={
            <Icon
              glyph={aiGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
            />
          }
        >
          Menu Item
        </MenuItem>
        <MenuItem
          prefix={
            <Icon
              glyph={adjustGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
            />
          }
        >
          Menu Item
        </MenuItem>
        <MenuItem
          disabled
          prefix={
            <Icon
              glyph={linkGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
              disabled
            />
          }
        >
          Menu Item
        </MenuItem>
      </MenuContainer>
    </div>
  ),
}

export const Suffix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem
          suffix={
            <Text intent="neutral-inverted-fixed" intentModifiers="secondary">
              Action
            </Text>
          }
        >
          Menu Item
        </MenuItem>
        <MenuItem
          suffix={
            <Icon
              glyph={aiGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
            />
          }
        >
          Menu Item
        </MenuItem>
        <MenuItem suffix={<Badge intent="brand">Badge</Badge>}>
          Menu Item
        </MenuItem>
        <MenuItem
          disabled
          suffix={
            <Icon
              glyph={linkGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
              disabled
            />
          }
        >
          Menu Item
        </MenuItem>
      </MenuContainer>
    </div>
  ),
}

export const OptionLikePadding: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={248}>
        <MenuItem optionLikePadding>Menu Item (option like padding)</MenuItem>
        <MenuDivider variant="inset" />
        <MenuItemOption>Menu Item Option</MenuItemOption>
        <MenuItemOption selected>Menu Item Option</MenuItemOption>
        <MenuItemOption>Menu Item Option</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
