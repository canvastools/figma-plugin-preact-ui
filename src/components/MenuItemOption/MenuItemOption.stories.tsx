import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { MenuItemOption } from "./MenuItemOption"

import {
  MenuContainer,
  Icon,
  Badge,
  Stack,
  Text,
  MenuContext,
  ai as aiGlyph,
} from "../../index"

const meta: Meta<typeof MenuItemOption> = {
  title: "Components/MenuItemOption",
  component: MenuItemOption,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
      description:
        "Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    defaultSelected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Initial value for uncontrolled mode..",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    selected: {
      control: { disable: true },
      description: "Controlled selected state.",
      table: {
        type: {
          summary: "boolean",
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
    focused: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      table: {
        type: {
          summary: "boolean",
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
      description: "Content of the menu item.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    onChange: {
      control: { disable: true },
      table: {
        type: {
          summary: "({ event: MouseEvent; selected: boolean }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuItemOption>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    id: "menu-item-option",
    defaultSelected: true,
    disabled: false,
    focused: false,
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContext>
        <MenuContainer width={208}>
          <MenuItemOption {...args}>Menu Item Option</MenuItemOption>
        </MenuContainer>
      </MenuContext>
    </div>
  ),
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContext>
        <MenuContainer width={208}>
          <MenuItemOption defaultSelected={true}>
            Menu Item Option
          </MenuItemOption>
        </MenuContainer>
      </MenuContext>
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [selected, setSelected] = useState(true)

    return (
      <div className="sb-column sb-width-full">
        <MenuContext>
          <Stack spacing={200}>
            <Text>Selected: {selected ? "true" : "false"}</Text>
            <MenuContainer width={208}>
              <MenuItemOption
                selected={selected}
                onChange={(e) => setSelected(e.selected)}
              >
                Menu Item Option
              </MenuItemOption>
            </MenuContainer>
          </Stack>
        </MenuContext>
      </div>
    )
  },
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
      <MenuContext>
        <MenuContainer width={208}>
          <MenuItemOption defaultSelected disabled>
            Menu Item Option
          </MenuItemOption>
        </MenuContainer>
      </MenuContext>
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
      <MenuContext>
        <MenuContainer width={208}>
          <MenuItemOption
            suffix={
              <Text intent="neutral-inverted-fixed" intentModifiers="secondary">
                Action
              </Text>
            }
          >
            Menu Item
          </MenuItemOption>
          <MenuItemOption
            defaultSelected
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
          </MenuItemOption>
          <MenuItemOption suffix={<Badge intent="brand">Badge</Badge>}>
            Menu Item
          </MenuItemOption>
          <MenuItemOption
            disabled
            suffix={
              <Icon
                glyph={aiGlyph}
                size={16}
                intent="neutral-inverted-fixed"
                interactive
                disabled
              />
            }
          >
            Menu Item
          </MenuItemOption>
        </MenuContainer>
      </MenuContext>
    </div>
  ),
}
