import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { Button } from "./Button"
import type { ButtonProps } from "./Button.types"

const meta: Meta<ButtonProps> = {
  title: "Components/Actions/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "radio" },
      options: ["default", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
}
export default meta
type Story = StoryObj<ButtonProps>

export const Demo: Story = {
  args: {
    className: "",
    variant: "primary",
    size: "default",
    disabled: false,
    fullWidth: false,
    children: "Button",
    onClick: fn(),
  },
}

export const Variant: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
}

export const Size: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Button variant="primary" size="default">
          Primary Default
        </Button>
        <Button variant="primary" size="large">
          Primary Large
        </Button>
      </div>
      <div className="sb-row sb-gap-16">
        <Button variant="secondary" size="default">
          Secondary Default
        </Button>
        <Button variant="secondary" size="large">
          Secondary Large
        </Button>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Button variant="primary" size="default" disabled>
          Primary Default Disabled
        </Button>
        <Button variant="primary" size="large" disabled>
          Primary Large Disabled
        </Button>
      </div>
      <div className="sb-row sb-gap-16">
        <Button variant="secondary" size="default" disabled>
          Secondary Default Disabled
        </Button>
        <Button variant="secondary" size="large" disabled>
          Secondary Large Disabled
        </Button>
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Button variant="primary" size="default" fullWidth>
        Primary Default FullWidth
      </Button>
      <Button variant="primary" size="large" fullWidth>
        Primary Large FullWidth
      </Button>
      <Button variant="secondary" size="default" fullWidth>
        Secondary Default FullWidth
      </Button>
      <Button variant="secondary" size="large" fullWidth>
        Secondary Large FullWidth
      </Button>
    </div>
  ),
}
