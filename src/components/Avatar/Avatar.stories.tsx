import { Meta } from "@storybook/preact"

import { VariantStory } from "./stories/Variant.story"
import { SizeStory } from "./stories/Size.story"
import { ImageSrcStory } from "./stories/ImageSrc.story"
import { FillStory } from "./stories/Fill.story"

/* --- */

import { Avatar } from "./Avatar"

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["circle", "square"],
      defaultValue: { summary: "circle" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: { summary: "medium" },
    },
    imageSrc: {
      control: { type: "text" },
      description: "Image URL.",
      defaultValue: { summary: "undefined" },
    },
    fillBackground: {
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
        defaultValue: {
          summary: "var(--pui-color-neutral-inverted-bg-default)",
        },
      },
      control: { type: "color" },
      description:
        "Background color for the avatar container when no image is provided.",
    },
    fillText: {
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
        defaultValue: {
          summary: "var(--pui-color-neutral-inverted-text-default)",
        },
      },
      control: { type: "color" },
      description:
        "Text color for the children text content when no image is provided.",
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { type: "text" },
      description: "<strong>*</strong>",
    },
  },
}

export default meta

export const Demo = {
  tags: ["!autodocs"],
  args: {
    className: "",
    variant: "circle",
    size: "medium",
    imageSrc: "",
    children: "A",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `<Avatar {...args} />`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Avatar {...args} />
    </div>
  ),
}

export const Variant = VariantStory
export const Size = SizeStory
export const ImageSrc = ImageSrcStory
export const Fill = FillStory
