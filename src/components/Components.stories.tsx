import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"

import { Shape as AvatarShape } from "./Avatar/Avatar.stories"
import { Prefix as BadgePrefix } from "./Badge/Badge.stories"
import { Prefix as ButtonPrefix } from "./Button/Button.stories"
import { Context as ButtonIconContext } from "./ButtonIcon/ButtonIcon.stories"
import { Context as ButtonIconToggleContext } from "./ButtonIconToggle/ButtonIconToggle.stories"
import { Checked as CheckboxChecked } from "./Checkbox/Checkbox.stories"
import { Variant as DividerVariant } from "./Divider/Divider.stories"
import { Glyphs as IconGlyphs } from "./Icon/Icon.stories"
import { Demo as ListItemDemo } from "./ListItem/ListItem.stories"
import { Demo as SectionDemo } from "./Section/Section.stories"
import { Demo as SpinnerDemo } from "./Spinner/Spinner.stories"
import { Demo as TabDemo } from "./Tab/Tab.stories"
import { Size as TextSize } from "./Text/Text.stories"

const meta: Meta = {
  title: "Overview/Components",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        component: `Getting started: https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md<br/><br/>
        Preview all components in their default state 👇`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const _1: Story = {
  tags: ["!autodocs"],
  render: () => <div className="sb-row sb-gap-16"></div>,
}

export const _Avatar = AvatarShape
export const _Badge = BadgePrefix
export const _Button = ButtonPrefix
export const _ButtonIcon = ButtonIconContext
export const _ButtonIconToggle = ButtonIconToggleContext
export const _Checkbox = CheckboxChecked
export const _Divider = DividerVariant
export const _Icon = IconGlyphs

ListItemDemo.tags = []
export const _List = ListItemDemo

export const _Section = SectionDemo
export const _Spinner = SpinnerDemo

TabDemo.tags = []
export const _Tab = TabDemo

export const _Text = TextSize
