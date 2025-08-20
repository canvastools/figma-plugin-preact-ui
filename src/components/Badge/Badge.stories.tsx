import { Meta, StoryObj } from "@storybook/preact"

import { Badge } from "./Badge"
import type { BadgeProps } from "./Badge.types"

import { Icon } from "../Icon/Icon"

const meta: Meta<BadgeProps> = {
  title: "Components/Feedback/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "brand",
        "brand-secondary",
        "danger",
        "danger-secondary",
        "warning",
        "warning-secondary",
        "success",
        "success-secondary",
        "disabled",
        "disabled-secondary",
        "count",
      ],
    },
    prefix: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<BadgeProps>

export const Demo: Story = {
  args: {
    className: "",
    variant: "default",
    children: "Badge",
  },
}

export const Variant: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="brand-secondary">Brand Secondary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="danger-secondary">Danger Secondary</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="warning-secondary">Warning Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="success-secondary">Success Secondary</Badge>
      <Badge variant="disabled">Disabled</Badge>
      <Badge variant="disabled-secondary">Disabled Secondary</Badge>
      <Badge variant="count">Count</Badge>
    </div>
  ),
}

export const Prefix: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Badge prefix={<Icon glyph="help" size={16} />} variant="default">
          Default
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="brand">
          Brand
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="brand-secondary"
        >
          Brand Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="danger">
          Danger
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="danger-secondary"
        >
          Danger Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="warning">
          Warning
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="warning-secondary"
        >
          Warning Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="success">
          Success
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="success-secondary"
        >
          Success Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="disabled">
          Disabled
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="disabled-secondary"
        >
          Disabled Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="count">
          Count
        </Badge>
      </div>
    </div>
  ),
}
