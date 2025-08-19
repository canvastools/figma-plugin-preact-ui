import { Meta, StoryObj } from "@storybook/preact"

import { Text } from "./Text"
import type { TextProps } from "./Text.types"

const meta: Meta<TextProps> = {
  title: "Components/Typography/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["heading", "body"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    strong: {
      control: { type: "boolean" },
    },
    align: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
    children: {
      control: { type: "text" },
    },
  },
}
export default meta
type Story = StoryObj<TextProps>

export const Demo: Story = {
  args: {
    className: "",
    variant: "heading",
    size: "medium",
    strong: false,
    children: "Text",
  },
}

export const Variant: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading">Heading</Text>
      <Text variant="body">Body</Text>
    </div>
  ),
}

export const Size: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Text variant="heading" size="large">
          Heading Large
        </Text>
        <Text variant="heading" size="medium">
          Heading Medium
        </Text>
        <Text variant="heading" size="small">
          Heading Small
        </Text>
      </div>

      <div className="sb-row sb-gap-16">
        <Text variant="body" size="large">
          Body Large
        </Text>
        <Text variant="body" size="medium">
          Body Medium
        </Text>
        <Text variant="body" size="small">
          Body Small
        </Text>
      </div>
    </div>
  ),
}

export const Strong: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Text variant="body" size="large">
          Body Large
        </Text>
        <Text variant="body" size="medium">
          Body Medium
        </Text>
        <Text variant="body" size="small">
          Body Small
        </Text>
      </div>

      <div className="sb-row sb-gap-16">
        <Text variant="body" size="large" strong>
          Body Large Strong
        </Text>
        <Text variant="body" size="medium" strong>
          Body Medium Strong
        </Text>
        <Text variant="body" size="small" strong>
          Body Small Strong
        </Text>
      </div>
    </div>
  ),
}

export const Align: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text
          variant="heading"
          size="large"
          align="left"
          className="sb-width-100"
        >
          Heading Large
        </Text>
        <Text
          variant="heading"
          size="medium"
          align="center"
          className="sb-width-100"
        >
          Heading Medium
        </Text>
        <Text
          variant="heading"
          size="small"
          align="right"
          className="sb-width-100"
        >
          Heading Small
        </Text>
        <Text variant="body" size="large" align="left" className="sb-width-100">
          Body Large
        </Text>
        <Text
          variant="body"
          size="medium"
          align="center"
          className="sb-width-100"
        >
          Body Medium
        </Text>
        <Text
          variant="body"
          size="small"
          align="right"
          className="sb-width-100"
        >
          Body Small
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text
          variant="body"
          size="large"
          strong
          align="left"
          className="sb-width-100"
        >
          Body Large Strong
        </Text>
        <Text
          variant="body"
          size="medium"
          strong
          align="center"
          className="sb-width-100"
        >
          Body Medium Strong
        </Text>
        <Text
          variant="body"
          size="small"
          strong
          align="right"
          className="sb-width-100"
        >
          Body Small Strong
        </Text>
      </div>
    </div>
  ),
}
