import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"

import { MenuContainer } from "./MenuContainer"

import { Icon } from "../Icon/Icon"
import { MenuDivider } from "../MenuDivider/MenuDivider"
import { OverlayPositioner } from "../OverlayPositioner/OverlayPositioner"
import { Button } from "../Button/Button"
import { MenuItem } from "../MenuItem/MenuItem"
import { MenuItemOption } from "../MenuItemOption/MenuItemOption"

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
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)

    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef as any} onClick={() => setOpen((v) => !v)}>
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
        <Button
          ref={anchorRefTrigger as any}
          onClick={() => setOpen((v) => !v)}
        >
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
              reducedPaddingRight
              onClick={() => setOpenNested((v) => !v)}
              suffix={
                <Icon
                  glyph="chevronRight"
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
              paddingX={3}
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
