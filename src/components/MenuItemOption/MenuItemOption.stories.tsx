import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"

import { fn } from "@storybook/test"

import { MenuItemOption } from "./MenuItemOption"

import { MenuContainer } from "../../index"
import { Icon } from "../../index"
import { Badge } from "../../index"
import { Stack } from "../../index"
import { Text } from "../../index"
import { glyphs } from "../../index"

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
    reducedPaddingRight: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Indicates if the item has reduced padding on the right. For pixel perfect vertical alignment of the icons.",
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
          reducedPaddingRight
          suffix={
            <Text intent="neutral-inverted-fixed" intentModifiers="secondary">
              Action
            </Text>
          }
        >
          Menu Item
        </MenuItemOption>
        <MenuItemOption
          reducedPaddingRight
          suffix={
            <Icon
              glyph={glyphs.ai}
              size={16}
              intent="neutral-inverted-fixed"
              interactive
            />
          }
        >
          Menu Item
        </MenuItemOption>
        <MenuItemOption
          reducedPaddingRight
          suffix={<Badge intent="brand">Badge</Badge>}
        >
          Menu Item
        </MenuItemOption>
        <MenuItemOption
          disabled
          reducedPaddingRight
          suffix={
            <Icon
              glyph={glyphs.link}
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
    </div>
  ),
}
