import { Meta, StoryObj } from "@storybook/preact"

import { Text } from "./Text"

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    context: {
      control: { type: "radio" },
      options: [
        "inherit",
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
      defaultValue: { summary: "inherit" },
      description:
        "The `inherit` value makes the text use the colours defined by its parent styles.",
    },
    variant: {
      control: { type: "radio" },
      options: ["heading", "body"],
      defaultValue: { summary: "body" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: { summary: "medium" },
    },
    strong: {
      description: "This property visually affects only the body context.",
      control: { type: "boolean" },
    },
    align: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
      defaultValue: { summary: "left" },
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { type: "text" },
      description: "Usually a text content.",
    },
  },
}
export default meta
type Story = StoryObj<typeof Text>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    context: "neutral",
    variant: "body",
    size: "medium",
    strong: false,
    align: "left",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
}

export const Context: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16 sb-padding-24">
        <Text variant="heading" context="inherit">
          Inherit
        </Text>
        <Text variant="body" context="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div className="sb-column sb-gap-16 sb-padding-24">
        <Text variant="heading" context="neutral">
          Neutral Primary
        </Text>
        <Text variant="body" context="neutral">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div className="sb-column sb-gap-16 sb-padding-24">
        <Text variant="heading" context="neutral-secondary">
          Neutral Secondary
        </Text>
        <Text variant="body" context="neutral-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div className="sb-column sb-gap-16 sb-padding-24">
        <Text variant="heading" context="neutral-brand">
          Brand Primary
        </Text>
        <Text variant="body" context="neutral-brand">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div className="sb-column sb-gap-16 sb-padding-24">
        <Text variant="heading" context="neutral-danger">
          Danger Primary
        </Text>
        <Text variant="body" context="neutral-danger">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div className="sb-column sb-gap-16 sb-padding-24">
        <Text variant="heading" context="neutral-warning">
          Warning Primary
        </Text>
        <Text variant="body" context="neutral-warning">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div className="sb-column sb-gap-16 sb-padding-24">
        <Text variant="heading" context="neutral-success">
          Success Primary
        </Text>
        <Text variant="body" context="neutral-success">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div
        className="sb-column sb-gap-16 sb-padding-24"
        style={{
          backgroundColor: "var(--pui-color-neutral-inverted-bg-default)",
        }}
      >
        <Text variant="heading" context="neutral-inverted">
          Neutral Inverted
        </Text>
        <Text variant="body" context="neutral-inverted">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div
        className="sb-column sb-gap-16 sb-padding-24"
        style={{
          backgroundColor: "var(--pui-color-brand-bg-default)",
        }}
      >
        <Text variant="heading" context="brand">
          Brand Primary
        </Text>
        <Text variant="body" context="brand">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div
        className="sb-column sb-gap-16 sb-padding-24"
        style={{
          backgroundColor: "var(--pui-color-danger-bg-default)",
        }}
      >
        <Text variant="heading" context="danger">
          Brand Danger
        </Text>
        <Text variant="body" context="danger">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div
        className="sb-column sb-gap-16 sb-padding-24"
        style={{
          backgroundColor: "var(--pui-color-warning-bg-default)",
        }}
      >
        <Text variant="heading" context="warning">
          Brand Warning
        </Text>
        <Text variant="body" context="warning">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div
        className="sb-column sb-gap-16 sb-padding-24"
        style={{
          backgroundColor: "var(--pui-color-success-bg-default)",
        }}
      >
        <Text variant="heading" context="success">
          Success Primary
        </Text>
        <Text variant="body" context="success">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
    </div>
  ),
}

export const Type: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading" context="neutral">
        Heading
      </Text>
      <Text variant="body" context="neutral">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </div>
  ),
}

export const Size: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text variant="heading" context="neutral" size="large">
          Heading Large
        </Text>
        <Text variant="body" context="neutral" size="large">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" context="neutral" size="medium">
          Heading Medium
        </Text>
        <Text variant="body" context="neutral" size="medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" context="neutral" size="small">
          Heading Small
        </Text>
        <Text variant="body" context="neutral" size="small">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
    </div>
  ),
}

export const Strong: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Text variant="body" context="neutral" size="large">
          Body Large
        </Text>
        <Text variant="body" context="neutral" size="medium">
          Body Medium
        </Text>
        <Text variant="body" context="neutral" size="small">
          Body Small
        </Text>
      </div>

      <div className="sb-row sb-gap-16">
        <Text variant="body" context="neutral" size="large" strong>
          Body Large Strong
        </Text>
        <Text variant="body" context="neutral" size="medium" strong>
          Body Medium Strong
        </Text>
        <Text variant="body" context="neutral" size="small" strong>
          Body Small Strong
        </Text>
      </div>
    </div>
  ),
}

export const Align: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text
          variant="heading"
          context="neutral"
          size="large"
          align="left"
          className="sb-width-full"
        >
          Heading Large
        </Text>
        <Text
          variant="heading"
          context="neutral"
          size="medium"
          align="center"
          className="sb-width-full"
        >
          Heading Medium
        </Text>
        <Text
          variant="heading"
          context="neutral"
          size="small"
          align="right"
          className="sb-width-full"
        >
          Heading Small
        </Text>
        <Text
          variant="body"
          context="neutral"
          size="large"
          align="left"
          className="sb-width-full"
        >
          Body Large
        </Text>
        <Text
          variant="body"
          context="neutral"
          size="medium"
          align="center"
          className="sb-width-full"
        >
          Body Medium
        </Text>
        <Text
          variant="body"
          context="neutral"
          size="small"
          align="right"
          className="sb-width-full"
        >
          Body Small
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text
          variant="body"
          context="neutral"
          size="large"
          strong
          align="left"
          className="sb-width-full"
        >
          Body Large Strong
        </Text>
        <Text
          variant="body"
          context="neutral"
          size="medium"
          strong
          align="center"
          className="sb-width-full"
        >
          Body Medium Strong
        </Text>
        <Text
          variant="body"
          context="neutral"
          size="small"
          strong
          align="right"
          className="sb-width-full"
        >
          Body Small Strong
        </Text>
      </div>
    </div>
  ),
}
