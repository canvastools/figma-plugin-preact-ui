import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"

import { MenuContainer } from "./MenuContainer"

import { Icon } from "../../index"
import { MenuDivider } from "../../index"
import { OverlayPositioner } from "../../index"
import { Button } from "../../index"
import { MenuItem } from "../../index"
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
  tags: ["!autodocs"],
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
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
        <MenuDivider />
        <MenuItemOption selected>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}

export const OverlayMenu: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)

    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef} onClick={() => setOpen((v) => !v)}>
          Show Menu
        </Button>
        <OverlayPositioner
          anchorRef={anchorRef}
          paddingY={4}
          open={open}
          onClose={() => setOpen(false)}
        >
          <MenuContainer>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
          </MenuContainer>
        </OverlayPositioner>
      </div>
    )
  },
}

export const NestedMenu: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    const [openNested, setOpenNested] = useState(false)

    const anchorRefTrigger = useRef<HTMLButtonElement | null>(null)
    const anchorRefMenuNested = useRef<HTMLDivElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRefTrigger} onClick={() => setOpen((v) => !v)}>
          Show Menu
        </Button>
        <OverlayPositioner
          anchorRef={anchorRefTrigger}
          open={open}
          onClose={() => setOpen(false)}
        >
          <MenuContainer>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
            <MenuItem
              ref={anchorRefMenuNested}
              hasNested
              onClick={() => setOpenNested((v) => !v)}
              suffix={
                <Icon
                  glyph={chevronRightGlyph}
                  size={16}
                  intent="neutral-inverted-fixed"
                  interactive
                />
              }
            >
              Menu Item
            </MenuItem>
            <OverlayPositioner
              anchorRef={anchorRefMenuNested}
              open={openNested}
              placement="right-top"
              onClose={() => setOpenNested(false)}
              paddingX={4}
            >
              <MenuContainer>
                <MenuItem onClick={() => setOpenNested(false)}>
                  Nested Menu Item
                </MenuItem>
                <MenuItem onClick={() => setOpenNested(false)}>
                  Nested Menu Item
                </MenuItem>
              </MenuContainer>
            </OverlayPositioner>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
          </MenuContainer>
        </OverlayPositioner>
      </div>
    )
  },
}
