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
      description: "Additional CSS class names to apply to the component",
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "The visual variant of the button",
    },
    size: {
      control: { type: "radio" },
      options: ["default", "large"],
      description: "The size of the button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    fullWidth: {
      control: { type: "boolean" },
      description:
        "Whether the button should take the full width of its container",
    },
    children: {
      control: { type: "text" },
      description: "The content to display inside the button",
    },
    onClick: {
      action: "clicked",
      description: "Callback function called when the button is clicked",
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
