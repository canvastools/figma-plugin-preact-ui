import { Meta, StoryObj } from "@storybook/preact"

import { Text } from "./Text"
import type { TextProps } from "./Text.types"

import { Section } from "../Section/Section"

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
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
    disabled: {
      control: { type: "boolean" },
    },
    interactive: {
      control: { type: "boolean" },
      description:
        "Allows using colours for interactive states within the intent.",
    },
    selected: {
      control: { type: "boolean" },
      description:
        "Enables the modifier for the selected state. Only works if interactive is enabled.",
    },
    fill: {
      control: { type: "color" },
      description: "Overrides the intent color.",
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
      description: "This property visually affects only the body intent.",
      control: { type: "boolean" },
    },
    align: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
      defaultValue: { summary: "left" },
    },
    fullWidth: {
      control: { type: "boolean" },
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
    intent: "neutral",
    intentModifiers: "default",
    disabled: false,
    interactive: false,
    selected: false,
    variant: "body",
    size: "medium",
    strong: false,
    align: "left",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Section>
        <Text {...args}>
          {/* @ts-expect-error - Storybook types hack */}
          {args.children}
        </Text>
      </Section>
    </div>
  ),
}

const intentCombinations = () => {
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

  return Object.keys(validCombinations).map((intent) => (
    <div className="sb-column sb-gap-16">
      {validCombinations[intent].map(([modifier, interactive, selected]) => (
        <div
          className="sb-column sb-gap-8 sb-width-full sb-padding-16"
          style={{
            backgroundColor: `var(--pui-color-${intent}-bg-default${
              interactive ? "-interactive" : ""
            }${selected ? "-selected" : ""})`,
          }}
        >
          <Text
            variant="heading"
            intent={intent as TextProps["intent"]}
            intentModifiers={modifier as TextProps["intentModifiers"]}
            interactive={interactive as TextProps["interactive"]}
            selected={selected as TextProps["selected"]}
          >
            {intent}
            {modifier === "default" ? "" : `-${modifier}`}
            {interactive ? ", interactive" : ""} {selected ? ", selected" : ""}
          </Text>
          <Text
            variant="body"
            intent={intent as TextProps["intent"]}
            intentModifiers={modifier as TextProps["intentModifiers"]}
            interactive={interactive as TextProps["interactive"]}
            selected={selected as TextProps["selected"]}
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

export const Intent: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-gap-16">{intentCombinations()}</div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading" intent="neutral" disabled>
        Heading
      </Text>
      <Text variant="body" intent="neutral" disabled>
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
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text fill="#00FF00">Heading</Text>
      <Text fill="#00FF00">
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
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Text variant="heading" intent="neutral">
        Heading
      </Text>
      <Text variant="body" intent="neutral">
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
        <Text variant="heading" intent="neutral" size="large">
          Heading Large
        </Text>
        <Text variant="body" intent="neutral" size="large">
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
        <Text variant="heading" intent="neutral" size="medium">
          Heading Medium
        </Text>
        <Text variant="body" intent="neutral" size="medium">
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
        <Text variant="heading" intent="neutral" size="small">
          Heading Small
        </Text>
        <Text variant="body" intent="neutral" size="small">
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
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Text variant="body" intent="neutral" size="large">
          Body Large
        </Text>
        <Text variant="body" intent="neutral" size="medium">
          Body Medium
        </Text>
        <Text variant="body" intent="neutral" size="small">
          Body Small
        </Text>
      </div>

      <div className="sb-row sb-gap-16">
        <Text variant="body" intent="neutral" size="large" strong>
          Body Large Strong
        </Text>
        <Text variant="body" intent="neutral" size="medium" strong>
          Body Medium Strong
        </Text>
        <Text variant="body" intent="neutral" size="small" strong>
          Body Small Strong
        </Text>
      </div>
    </div>
  ),
}

export const Align: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text
          variant="heading"
          intent="neutral"
          size="large"
          align="left"
          className="sb-width-full"
        >
          Heading Large
        </Text>
        <Text
          variant="heading"
          intent="neutral"
          size="medium"
          align="center"
          className="sb-width-full"
        >
          Heading Medium
        </Text>
        <Text
          variant="heading"
          intent="neutral"
          size="small"
          align="right"
          className="sb-width-full"
        >
          Heading Small
        </Text>
        <Text
          variant="body"
          intent="neutral"
          size="large"
          align="left"
          className="sb-width-full"
        >
          Body Large
        </Text>
        <Text
          variant="body"
          intent="neutral"
          size="medium"
          align="center"
          className="sb-width-full"
        >
          Body Medium
        </Text>
        <Text
          variant="body"
          intent="neutral"
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
          intent="neutral"
          size="large"
          strong
          align="left"
          className="sb-width-full"
        >
          Body Large Strong
        </Text>
        <Text
          variant="body"
          intent="neutral"
          size="medium"
          strong
          align="center"
          className="sb-width-full"
        >
          Body Medium Strong
        </Text>
        <Text
          variant="body"
          intent="neutral"
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
