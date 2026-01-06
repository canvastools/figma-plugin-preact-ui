import { Meta, StoryObj } from "@storybook/preact"

import { IntentStory } from "./stories/Intent.story"
import { VariantStory } from "./stories/Variant.story"
import { SizeStory } from "./stories/Size.story"
import { StrongStory } from "./stories/Strong.story"
import { AlignStory } from "./stories/Align.story"
import { DisabledStory } from "./stories/Disabled.story"
import { ColorStory } from "./stories/Color.story"

import { Text } from "./Text"

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
      options: [
        "neutral",
        "neutral-inverted",
        "neutral-inverted-fixed",
        "brand",
        "danger",
        "warning",
        "success",
      ],
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
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    align: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
      defaultValue: { summary: "left" },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    selected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },

    colorText: {
      control: { type: "color" },
      description: "Overrides the intent color.",
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
      },
    },
    wrap: {
      control: { type: "boolean" },
      defaultValue: { summary: true },
    },
    truncate: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    widthFull: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    children: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
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
    variant: "body",
    size: "medium",
    strong: false,
    align: "left",
    disabled: false,
    selected: false,
    colorText: undefined,
    wrap: true,
    truncate: false,
    widthFull: false,
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Text {...args}>{children}</Text>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      {/* @ts-ignore-next-line */}
      <Text {...args}>{args.children}</Text>
    </div>
  ),
}

export const Intent = IntentStory
export const Variant = VariantStory
export const Size = SizeStory
export const Strong = StrongStory
export const Align = AlignStory
export const Disabled = DisabledStory
export const Color = ColorStory
