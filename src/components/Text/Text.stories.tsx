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
    disabled: {
      control: { type: "boolean" },
    },
    fill: {
      control: { type: "color" },
      description: "Overrides the context color.",
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
    contextModifiers: "default",
    disabled: false,
    variant: "body",
    size: "medium",
    strong: false,
    align: "left",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
}

const contextCombinations = () => {
  const validCombinations = {
    neutral: [
      ["default", false, false],
      ["default", true, false],
      ["default", true, true],

      ["secondary", false, false],

      ["brand", false, false],
      ["brand", true, false],

      ["danger", false, false],
      ["danger", true, false],

      ["warning", false, false],
      ["success", false, false],
    ],
    "neutral-inverted": [
      ["default", false, false],
      ["default", true, false],
    ],
    brand: [
      ["default", false, false],
      ["default", true, false],
    ],
    danger: [
      ["default", false, false],
      ["default", true, false],
    ],
    warning: [["default", false, false]],
    success: [
      ["default", false, false],
      ["default", true, false],
    ],
  }

  return Object.keys(validCombinations).map((context) => (
    <div className="sb-column sb-gap-16">
      {validCombinations[context].map(([modifier, interactive, selected]) => (
        <div
          className="sb-column sb-gap-8 sb-width-full sb-padding-16"
          style={{
            backgroundColor: `var(--pui-color-${context}-bg-default${
              interactive ? "-interactive" : ""
            }${selected ? "-selected" : ""})`,
          }}
        >
          <Text
            variant="heading"
            context={context as any}
            contextModifiers={modifier as any}
            interactive={interactive as any}
            selected={selected as any}
          >
            {context}
            {modifier === "default" ? "" : `-${modifier}`}
            {interactive ? ", interactive" : ""} {selected ? ", selected" : ""}
          </Text>
          <Text
            variant="body"
            context={context as any}
            contextModifiers={modifier as any}
            interactive={interactive as any}
            selected={selected as any}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </div>
      ))}
    </div>
  ))
}

export const Context: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">{contextCombinations()}</div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading" context="neutral" disabled>
        Heading
      </Text>
      <Text variant="body" context="neutral" disabled>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </div>
  ),
}

export const Fill: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading" context="neutral" fill="#00FF00">
        Heading
      </Text>
      <Text variant="body" context="neutral" fill="#00FF00">
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

export const Type: Story = {
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
