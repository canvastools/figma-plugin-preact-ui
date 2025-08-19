import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { Icon } from "./Icon"
import type { IconProps } from "./Icon.types"
import { glyphs } from "./glyphs"

const meta: Meta<IconProps> = {
  title: "Components/Images/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    glyph: {
      control: { type: "select" },
      options: Object.keys(glyphs),
    },
    variant: {
      control: { type: "select" },
      options: ["default", "small"],
    },
    size: {
      control: { type: "radio" },
      options: [16, 24],
    },
    color: {
      control: { type: "color" },
    },
  },
}
export default meta
type Story = StoryObj<IconProps>

export const Demo: Story = {
  args: {
    className: "",
    glyph: "help",
    variant: "default",
    size: 24,
    color: "#ea62ff",
  },
}

export const Variant: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Icon glyph="help" variant="default" size={24} />
      <Icon glyph="help" variant="small" size={24} />
    </div>
  ),
}

export const Size: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Icon glyph="help" size={24} />
      <Icon glyph="help" size={16} />
    </div>
  ),
}

export const Color: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Icon glyph="help" />
      <Icon glyph="help" color="var(--pui-color-neutral-icon-brand)" />
    </div>
  ),
}

export const Custom: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return (
      <div className="sb-column sb-gap-16">
        <Icon size={24}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              d="M12 6v6l4 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Icon>
        <Icon size={16} color="var(--pui-color-neutral-icon-brand)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              d="M12 6v6l4 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Icon>
      </div>
    )
  },
}

export const ErrorHandling: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return (
      <div className="sb-column sb-gap-16">
        <Icon glyph="help" size={16} variant="small"></Icon>
      </div>
    )
  },
}
