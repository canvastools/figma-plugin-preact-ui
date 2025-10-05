import { Meta, StoryObj } from "@storybook/preact"

import { fn } from "@storybook/test"

import { MenuItem } from "./MenuItem"

import { MenuContainer } from "../../index"
import { Icon } from "../../index"
import { Badge } from "../../index"
import { Text } from "../../index"

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
      description: "Element inserted before children.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: "Element inserted after children.",
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
    reducedPaddingRight: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Indicates if the item has reduced padding on the right. For pixel perfect vertical alignment of the chevron for nested menus.",
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
    disabled: false,
    reducedPaddingRight: false,
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer>
        <MenuItem {...args}>Menu Item</MenuItem>
      </MenuContainer>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer>
        <MenuItem disabled>Menu Item</MenuItem>
      </MenuContainer>
    </div>
  ),
}

export const Prefix: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer>
        <MenuItem
          prefix={
            <Icon glyph="ai" size={16} intent="neutral-inverted" interactive />
          }
        >
          Menu Item
        </MenuItem>
        <MenuItem
          prefix={
            <Icon
              glyph="adjust"
              size={16}
              intent="neutral-inverted"
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
              glyph="link"
              size={16}
              intent="neutral-inverted"
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
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer>
        <MenuItem
          reducedPaddingRight
          suffix={
            <Text intent="neutral-inverted-fixed" intentModifiers="secondary">
              Action
            </Text>
          }
        >
          Menu Item
        </MenuItem>
        <MenuItem
          reducedPaddingRight
          suffix={
            <Icon glyph="ai" size={16} intent="neutral-inverted" interactive />
          }
        >
          Menu Item
        </MenuItem>
        <MenuItem
          reducedPaddingRight
          suffix={<Badge intent="brand">Badge</Badge>}
        >
          Menu Item
        </MenuItem>
        <MenuItem
          disabled
          reducedPaddingRight
          suffix={
            <Icon
              glyph="link"
              size={16}
              intent="neutral-inverted"
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
