import { Meta, StoryObj } from "@storybook/preact"

import { fn } from "@storybook/test"

import { MenuItemAction } from "./MenuItemAction"

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

const meta: Meta<typeof MenuItemAction> = {
  title: "Components/MenuItemAction",
  component: MenuItemAction,
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
      description: "Children of the menu item.",
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
      description: "Indicates if the item has nested menu levels.",
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
type Story = StoryObj<typeof MenuItemAction>

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
        <MenuItemAction {...args}>Action</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}

export const IntentModifiers: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction>Action</MenuItemAction>
        <MenuItemAction>Action</MenuItemAction>
        <MenuItemAction intentModifiers="danger">Destructive</MenuItemAction>
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
        <MenuItemAction disabled>Action</MenuItemAction>
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
        <MenuItemAction
          prefix={
            <Icon
              glyph={aiGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
            />
          }
        >
          Action
        </MenuItemAction>
        <MenuItemAction
          prefix={
            <Icon
              glyph={adjustGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
            />
          }
        >
          Action
        </MenuItemAction>
        <MenuItemAction
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
          Action
        </MenuItemAction>
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
        <MenuItemAction
          suffix={
            <Text intent="neutral-inverted-fixed" intentModifiers="secondary">
              Action
            </Text>
          }
        >
          Action
        </MenuItemAction>
        <MenuItemAction
          suffix={
            <Icon
              glyph={aiGlyph}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
            />
          }
        >
          Action
        </MenuItemAction>
        <MenuItemAction suffix={<Badge intent="brand">Badge</Badge>}>
          Action
        </MenuItemAction>
        <MenuItemAction
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
          Action
        </MenuItemAction>
      </MenuContainer>
    </div>
  ),
}

export const Nested: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction hasNested>Action</MenuItemAction>
        <MenuItemAction>Action</MenuItemAction>
        <MenuItemAction>Action</MenuItemAction>
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
        <MenuItemAction optionLikePadding>
          Action (option-like padding)
        </MenuItemAction>
        <MenuDivider variant="inset" />
        <MenuItemOption>Option</MenuItemOption>
        <MenuItemOption selected>Option</MenuItemOption>
        <MenuItemOption>Option</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
