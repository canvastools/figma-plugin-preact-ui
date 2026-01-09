import { Meta, StoryObj } from "@storybook/preact"

import { IntentStory } from "./stories/Intent.story"
import { VariantStory } from "./stories/Variant.story"
import { SizeStory } from "./stories/Size.story"
import { DisabledStory } from "./stories/Disabled.story"
import { ColorStory } from "./stories/Color.story"
import { GlyphsStory } from "./stories/Glyph.story"
import { CustomGlyphStory } from "./stories/CustomGlyph.story"

import { Icon } from "./Icon"
import * as glyphs from "../Icon/glyphs"

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    glyph: {
      control: { type: "select" },
      options: Object.keys(glyphs),
      description:
        "Any library <a href='#glyphs'>glyph</a> to display as a child.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
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
    intentModifier: {
      control: { type: "radio" },
      options: [
        "default",
        "secondary",
        "tertiary",
        "brand",
        "danger",
        "warning",
        "success",
      ],
      defaultValue: { summary: "default" },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    selected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Enables the modifier for the selected state.",
    },
    iconColor: {
      control: { type: "color" },
      description: "Overrides the intent color.",
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
      },
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "scaled"],
      defaultValue: { summary: "default" },
      description:
        "Some icons may have glyph variations (e.g. size) while preserving the container dimensions.",
    },
    size: {
      control: { type: "radio" },
      options: [16, 24],
      defaultValue: { summary: "24" },
      description: "The size of the icon container.",
    },
    children: {
      control: { disable: true },
      description:
        "The SVG icon to display as a child if a custom glyph is required.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    glyph: "link",
    intent: "neutral",
    intentModifier: "default",
    variant: "default",
    size: 24,
    disabled: false,
    selected: false,
    iconColor: undefined,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `<Icon {...args}>{children}</Icon>`,
      },
    },
  },
  render: (args) => {
    // @ts-expect-error
    const { glyph, ...rest } = args as {
      glyph: keyof typeof glyphs
    } & import("./Icon.types").IconProps

    return (
      <div className="sb-column sb-width-full">
        <Icon {...rest} glyph={glyphs[glyph]} />
      </div>
    )
  },
}

export const Intent = IntentStory
export const Variant = VariantStory
export const Size = SizeStory
export const Disabled = DisabledStory
export const Color = ColorStory
export const Glyphs = GlyphsStory
export const CustomGlyph = CustomGlyphStory
