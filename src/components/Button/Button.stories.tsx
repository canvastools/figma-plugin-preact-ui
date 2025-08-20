import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { Button } from "./Button"
import type { ButtonProps } from "./Button.types"

import { Icon } from "../Icon/Icon"

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
      options: [
        "primary",
        "secondary",
        "destructive",
        "destructive-secondary",
        "success",
        "link",
        "link-destructive",
        "ghost",
      ],
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
    prefix: {
      control: { type: "text" },
    },
    suffix: {
      control: { type: "text" },
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
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-secondary">Destructive Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="link">Link</Button>
      <Button variant="link-destructive">Link Danger</Button>
      <Button variant="ghost">Ghost</Button>
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

      <div className="sb-row sb-gap-16">
        <Button variant="destructive" size="default">
          Destructive Default
        </Button>
        <Button variant="destructive" size="large">
          Destructive Large
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="destructive-secondary" size="default">
          Destructive Secondary Default
        </Button>
        <Button variant="destructive-secondary" size="large">
          Destructive Secondary Large
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="success" size="default">
          Success Default
        </Button>
        <Button variant="success" size="large">
          Success Large
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="link" size="default">
          Link Default
        </Button>
        <Button variant="link" size="large">
          Link Large
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="link-destructive" size="default">
          Link Destructive Default
        </Button>
        <Button variant="link-destructive" size="large">
          Link Destructive Large
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="ghost" size="default">
          Ghost Default
        </Button>
        <Button variant="ghost" size="large">
          Ghost Large
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

      <div className="sb-row sb-gap-16">
        <Button variant="destructive" size="default" disabled>
          Destructive Default Disabled
        </Button>
        <Button variant="destructive" size="large" disabled>
          Destructive Large Disabled
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="destructive-secondary" size="default" disabled>
          Destructive Secondary Default Disabled
        </Button>
        <Button variant="destructive-secondary" size="large" disabled>
          Destructive Secondary Large Disabled
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="success" size="default" disabled>
          Success Default Disabled
        </Button>
        <Button variant="success" size="large" disabled>
          Success Large Disabled
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="link" size="default" disabled>
          Link Default Disabled
        </Button>
        <Button variant="link" size="large" disabled>
          Link Large Disabled
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="link-destructive" size="default" disabled>
          Link Destructive Default Disabled
        </Button>
        <Button variant="link-destructive" size="large" disabled>
          Link Destructive Large Disabled
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button variant="ghost" size="default" disabled>
          Ghost Default Disabled
        </Button>
        <Button variant="ghost" size="large" disabled>
          Ghost Large Disabled
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
      <Button variant="destructive" size="default" fullWidth>
        Destructive Default FullWidth
      </Button>
      <Button variant="destructive" size="large" fullWidth>
        Destructive Large FullWidth
      </Button>
      <Button variant="destructive-secondary" size="default" fullWidth>
        Destructive Secondary Default FullWidth
      </Button>
      <Button variant="destructive-secondary" size="large" fullWidth>
        Destructive Secondary Large FullWidth
      </Button>
      <Button variant="success" size="default" fullWidth>
        Success Default FullWidth
      </Button>
      <Button variant="success" size="large" fullWidth>
        Success Large FullWidth
      </Button>
      <Button variant="link" size="default" fullWidth>
        Link Default FullWidth
      </Button>
      <Button variant="link" size="large" fullWidth>
        Link Large FullWidth
      </Button>
      <Button variant="link-destructive" size="default" fullWidth>
        Link Destructive Default FullWidth
      </Button>
      <Button variant="link-destructive" size="large" fullWidth>
        Link Destructive Large FullWidth
      </Button>
      <Button variant="ghost" size="default" fullWidth>
        Ghost Default FullWidth
      </Button>
      <Button variant="ghost" size="large" fullWidth>
        Ghost Large FullWidth
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Button
          variant="primary"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="primary"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="primary"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="primary"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="primary"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button
          variant="secondary"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="secondary"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="secondary"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="secondary"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="secondary"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button
          variant="destructive"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="destructive"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="destructive"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="destructive"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="destructive"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button
          variant="destructive-secondary"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="destructive-secondary"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="destructive-secondary"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="destructive-secondary"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="destructive-secondary"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button
          variant="success"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="success"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="success"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="success"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="success"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button
          variant="link"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="link"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="link"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="link"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="link"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button
          variant="link-destructive"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="link-destructive"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="link-destructive"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="link-destructive"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="link-destructive"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>

      <div className="sb-row sb-gap-16">
        <Button
          variant="ghost"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="ghost"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="ghost"
          size="default"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
        <Button
          variant="ghost"
          size="large"
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>

        <Button
          variant="ghost"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
          suffix={<Icon glyph="help" variant="small" />}
        >
          Button with icon
        </Button>
      </div>
    </div>
  ),
}
