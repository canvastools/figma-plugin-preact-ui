import { Meta, StoryObj } from "@storybook/preact"

import { fn } from "@storybook/test"

import { MenuItemOption } from "./MenuItemOption"

import { MenuContainer } from "../MenuContainer/MenuContainer"
import { Icon } from "../Icon/Icon"
import { Badge } from "../Badge/Badge"
import { useState } from "preact/hooks"
import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text"

const meta: Meta<typeof MenuItemOption> = {
  title: "Components/MenuItemOption",
  component: MenuItemOption,
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
    defaultSelected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    selected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
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
    defaultSelected: false,
    disabled: false,
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer>
        <MenuItemOption {...args}>Menu Item Option</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}

export const Uncontrolled: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer>
        <MenuItemOption defaultSelected={true}>Menu Item Option</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [selected, setSelected] = useState(false)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Text>Selected: {selected ? "true" : "false"}</Text>
          <MenuContainer>
            <MenuItemOption
              selected={selected}
              onChange={(e) => setSelected(e.selected)}
            >
              Menu Item Option
            </MenuItemOption>
          </MenuContainer>
        </Stack>
      </div>
    )
  },
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
        <MenuItemOption disabled>Menu Item Option</MenuItemOption>
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
        <MenuItemOption
          suffix={
            <Icon glyph="ai" size={16} intent="neutral-inverted" interactive />
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
              glyph="link"
              size={16}
              intent="neutral-inverted"
              interactive
              disabled
            />
          }
        >
          Menu Item
        </MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
