import { Meta, StoryObj } from "@storybook/preact"

import { Badge } from "./Badge"

import { Icon } from "../Icon/Icon"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    context: {
      control: { type: "radio" },
      options: ["neutral", "brand", "danger", "warning", "success"],
      defaultValue: { summary: "neutral" },
    },
    contextModifiers: {
      control: { type: "radio" },
      options: [
        "default",
        "secondary",
        "brand",
        "danger",
        "warning",
        "success",
      ],
      defaultValue: { summary: "default" },
    },
    prefix: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { disable: true },
      description: "Element inserted before children.",
    },
    suffix: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { disable: true },
      description: "Element inserted after children.",
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    context: "neutral",
    contextModifiers: "default",
    children: "Badge",
  },
  render: (args) => <Badge {...args} />,
}

export const Variant: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Badge context="neutral">Neutral</Badge>
      <Badge context="neutral" contextModifiers="secondary">
        Neutral Secondary
      </Badge>
      <Badge context="neutral" contextModifiers="brand">
        Neutral Brand
      </Badge>
      <Badge context="neutral" contextModifiers="danger">
        Neutral Danger
      </Badge>
      <Badge context="neutral" contextModifiers="warning">
        Neutral Warning
      </Badge>
      <Badge context="neutral" contextModifiers="success">
        Neutral Success
      </Badge>
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
        <Badge
          context="neutral"
          prefix={<Icon glyph="help" size={16} context="neutral" />}
        >
          Neutral
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="secondary"
          prefix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="secondary"
            />
          }
        >
          Neutral Secondary
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="brand"
          prefix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="brand"
            />
          }
        >
          Neutral Brand
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="danger"
          prefix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="danger"
            />
          }
        >
          Neutral Danger
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="warning"
          prefix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="warning"
            />
          }
        >
          Neutral Warning
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="success"
          prefix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="success"
            />
          }
        >
          Neutral Success
        </Badge>
        <Badge
          context="neutral-inverted"
          prefix={<Icon glyph="help" size={16} context="neutral-inverted" />}
        >
          Neutral Inverted
        </Badge>
        <Badge
          context="brand"
          prefix={<Icon glyph="help" size={16} context="brand" />}
        >
          Brand
        </Badge>
        <Badge
          context="danger"
          prefix={<Icon glyph="help" size={16} context="danger" />}
        >
          Danger
        </Badge>
        <Badge
          context="warning"
          prefix={<Icon glyph="help" size={16} context="warning" />}
        >
          Warning
        </Badge>
        <Badge
          context="success"
          prefix={<Icon glyph="help" size={16} context="success" />}
        >
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
        <Badge
          context="neutral"
          suffix={<Icon glyph="help" size={16} context="neutral" />}
        >
          Neutral
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="secondary"
          suffix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="secondary"
            />
          }
        >
          Neutral Secondary
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="brand"
          suffix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="brand"
            />
          }
        >
          Neutral Brand
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="danger"
          suffix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="danger"
            />
          }
        >
          Neutral Danger
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="warning"
          suffix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="warning"
            />
          }
        >
          Neutral Warning
        </Badge>
        <Badge
          context="neutral"
          contextModifiers="success"
          suffix={
            <Icon
              glyph="help"
              size={16}
              context="neutral"
              contextModifiers="success"
            />
          }
        >
          Neutral Success
        </Badge>
        <Badge
          context="neutral-inverted"
          suffix={<Icon glyph="help" size={16} context="neutral-inverted" />}
        >
          Neutral Inverted
        </Badge>
        <Badge
          context="brand"
          suffix={<Icon glyph="help" size={16} context="brand" />}
        >
          Brand
        </Badge>
        <Badge
          context="danger"
          suffix={<Icon glyph="help" size={16} context="danger" />}
        >
          Danger
        </Badge>
        <Badge
          context="warning"
          suffix={<Icon glyph="help" size={16} context="warning" />}
        >
          Warning
        </Badge>
        <Badge
          context="success"
          suffix={<Icon glyph="help" size={16} context="success" />}
        >
          Success
        </Badge>
      </div>
    </div>
  ),
}
