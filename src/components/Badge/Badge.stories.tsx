import { Meta, StoryObj } from "@storybook/preact"

import { Badge } from "./Badge"

import { Icon } from "../Icon/Icon"
import { Section } from "../Section/Section"
import { Stack } from "../Stack/Stack"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    intent: {
      control: { type: "radio" },
      options: ["neutral", "brand", "danger", "warning", "success"],
      defaultValue: { summary: "neutral" },
    },
    intentModifiers: {
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
          summary: "JSX.Element",
        },
      },
      control: { disable: true },
      description: "Element inserted before children.",
    },
    suffix: {
      table: {
        type: {
          summary: "JSX.Element",
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
    intent: "neutral",
    intentModifiers: "default",
    children: "Badge",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Section>
        <Badge {...args} />
      </Section>
    </div>
  ),
}

export const Intent: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Section>
        <Stack spacing={400}>
          <Badge intent="neutral">Neutral</Badge>
          <Badge intent="neutral" intentModifiers="secondary">
            Neutral Secondary
          </Badge>
          <Badge intent="neutral" intentModifiers="brand">
            Neutral Brand
          </Badge>
          <Badge intent="neutral" intentModifiers="danger">
            Neutral Danger
          </Badge>
          <Badge intent="neutral" intentModifiers="warning">
            Neutral Warning
          </Badge>
          <Badge intent="neutral" intentModifiers="success">
            Neutral Success
          </Badge>
          <Badge intent="neutral-inverted">Neutral Inverted</Badge>
          <Badge intent="brand">Brand</Badge>
          <Badge intent="danger">Danger</Badge>
          <Badge intent="warning">Warning</Badge>
          <Badge intent="success">Success</Badge>
        </Stack>
      </Section>
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
      <Section>
        <Stack spacing={400}>
          <Badge
            intent="neutral"
            prefix={<Icon glyph="help" size={16} intent="neutral" />}
          >
            Neutral
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="secondary"
            prefix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="secondary"
              />
            }
          >
            Neutral Secondary
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="brand"
            prefix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="brand"
              />
            }
          >
            Neutral Brand
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="danger"
            prefix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="danger"
              />
            }
          >
            Neutral Danger
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="warning"
            prefix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="warning"
              />
            }
          >
            Neutral Warning
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="success"
            prefix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="success"
              />
            }
          >
            Neutral Success
          </Badge>
          <Badge
            intent="neutral-inverted"
            prefix={<Icon glyph="help" size={16} intent="neutral-inverted" />}
          >
            Neutral Inverted
          </Badge>
          <Badge
            intent="brand"
            prefix={<Icon glyph="help" size={16} intent="brand" />}
          >
            Brand
          </Badge>
          <Badge
            intent="danger"
            prefix={<Icon glyph="help" size={16} intent="danger" />}
          >
            Danger
          </Badge>
          <Badge
            intent="warning"
            prefix={<Icon glyph="help" size={16} intent="warning" />}
          >
            Warning
          </Badge>
          <Badge
            intent="success"
            prefix={<Icon glyph="help" size={16} intent="success" />}
          >
            Success
          </Badge>
        </Stack>
      </Section>
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
      <Section>
        <Stack spacing={400}>
          <Badge
            intent="neutral"
            suffix={<Icon glyph="help" size={16} intent="neutral" />}
          >
            Neutral
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="secondary"
            suffix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="secondary"
              />
            }
          >
            Neutral Secondary
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="brand"
            suffix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="brand"
              />
            }
          >
            Neutral Brand
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="danger"
            suffix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="danger"
              />
            }
          >
            Neutral Danger
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="warning"
            suffix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="warning"
              />
            }
          >
            Neutral Warning
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="success"
            suffix={
              <Icon
                glyph="help"
                size={16}
                intent="neutral"
                intentModifiers="success"
              />
            }
          >
            Neutral Success
          </Badge>
          <Badge
            intent="neutral-inverted"
            suffix={<Icon glyph="help" size={16} intent="neutral-inverted" />}
          >
            Neutral Inverted
          </Badge>
          <Badge
            intent="brand"
            suffix={<Icon glyph="help" size={16} intent="brand" />}
          >
            Brand
          </Badge>
          <Badge
            intent="danger"
            suffix={<Icon glyph="help" size={16} intent="danger" />}
          >
            Danger
          </Badge>
          <Badge
            intent="warning"
            suffix={<Icon glyph="help" size={16} intent="warning" />}
          >
            Warning
          </Badge>
          <Badge
            intent="success"
            suffix={<Icon glyph="help" size={16} intent="success" />}
          >
            Success
          </Badge>
        </Stack>
      </Section>
    </div>
  ),
}
