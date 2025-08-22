import { Meta, StoryObj } from "@storybook/preact"

import { Badge } from "./Badge"
import type { BadgeProps } from "./Badge.types"

import { Icon } from "../Icon/Icon"

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    context: {
      control: { type: "radio" },
      options: [
        "neutral",
        "neutral-secondary",
        "neutral-brand",
        "neutral-danger",
        "neutral-warning",
        "neutral-success",
        "neutral-inverted",
        "brand",
        "danger",
        "warning",
        "success",
      ],
    },
    prefix: {
      control: { type: "text" },
    },
    suffix: {
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
  tags: ["!autodocs"],
  args: {
    className: "",
    context: "neutral",
    children: "Badge",
  },
}

export const Variant: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Badge context="neutral">Neutral</Badge>
      <Badge context="neutral-secondary">Neutral Secondary</Badge>
      <Badge context="neutral-brand">Brand Secondary</Badge>
      <Badge context="neutral-danger">Danger</Badge>
      <Badge context="neutral-warning">Warning</Badge>
      <Badge context="neutral-success">Success</Badge>
      <Badge context="neutral-inverted">Neutral Inverted</Badge>
      <Badge context="brand">Brand</Badge>
      <Badge context="danger">Danger</Badge>
      <Badge context="warning">Warning</Badge>
      <Badge context="success">Success</Badge>
    </div>
  ),
}

export const Prefix: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },

  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Badge context="neutral" prefix={<Icon glyph="help" size={16} />}>
          Neutral
        </Badge>
        <Badge
          context="neutral-secondary"
          prefix={<Icon glyph="help" size={16} />}
        >
          Neutral Secondary
        </Badge>
        <Badge context="neutral-brand" prefix={<Icon glyph="help" size={16} />}>
          Neutral Brand
        </Badge>
        <Badge
          context="neutral-danger"
          prefix={<Icon glyph="help" size={16} />}
        >
          Neutral Danger
        </Badge>
        <Badge
          context="neutral-warning"
          prefix={<Icon glyph="help" size={16} />}
        >
          Neutral Warning
        </Badge>
        <Badge
          context="neutral-success"
          prefix={<Icon glyph="help" size={16} />}
        >
          Neutral Success
        </Badge>
        <Badge
          context="neutral-inverted"
          prefix={<Icon glyph="help" size={16} />}
        >
          Neutral Inverted
        </Badge>
        <Badge context="brand" prefix={<Icon glyph="help" size={16} />}>
          Brand
        </Badge>
        <Badge context="danger" prefix={<Icon glyph="help" size={16} />}>
          Danger
        </Badge>
        <Badge context="warning" prefix={<Icon glyph="help" size={16} />}>
          Warning
        </Badge>
        <Badge context="success" prefix={<Icon glyph="help" size={16} />}>
          Success
        </Badge>
      </div>
    </div>
  ),
}

export const Suffix: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },

  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Badge context="neutral" suffix={<Icon glyph="help" size={16} />}>
          Neutral
        </Badge>
        <Badge
          context="neutral-secondary"
          suffix={<Icon glyph="help" size={16} />}
        >
          Neutral Secondary
        </Badge>
        <Badge context="neutral-brand" suffix={<Icon glyph="help" size={16} />}>
          Neutral Brand
        </Badge>
        <Badge
          context="neutral-danger"
          suffix={<Icon glyph="help" size={16} />}
        >
          Neutral Danger
        </Badge>
        <Badge
          context="neutral-warning"
          suffix={<Icon glyph="help" size={16} />}
        >
          Neutral Warning
        </Badge>
        <Badge
          context="neutral-success"
          suffix={<Icon glyph="help" size={16} />}
        >
          Neutral Success
        </Badge>
        <Badge
          context="neutral-inverted"
          suffix={<Icon glyph="help" size={16} />}
        >
          Neutral Inverted
        </Badge>
        <Badge context="brand" suffix={<Icon glyph="help" size={16} />}>
          Brand
        </Badge>
        <Badge context="danger" suffix={<Icon glyph="help" size={16} />}>
          Danger
        </Badge>
        <Badge context="warning" suffix={<Icon glyph="help" size={16} />}>
          Warning
        </Badge>
        <Badge context="success" suffix={<Icon glyph="help" size={16} />}>
          Success
        </Badge>
      </div>
    </div>
  ),
}
