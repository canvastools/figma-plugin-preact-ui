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
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading">Heading</Text>
      <Text variant="body">
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
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text variant="heading" size="large">
          Heading Large
        </Text>
        <Text variant="body" size="large">
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
        <Text variant="heading" size="medium">
          Heading Medium
        </Text>
        <Text variant="body" size="medium">
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
        <Text variant="heading" size="small">
          Heading Small
        </Text>
        <Text variant="body" size="small">
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
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "This property visually affects only the body variant.",
      },
    },
  },
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
  parameters: {
    controls: { disable: true },
  },
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
