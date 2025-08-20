import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Checkbox } from "./Checkbox"
import type { CheckboxProps } from "./Checkbox.types"

import { Icon } from "../Icon/Icon"

const meta: Meta<CheckboxProps> = {
  title: "Components/Input & Selection/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    checked: {
      control: { type: "boolean" },
    },
    mixed: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    onChange: {
      action: "clicked",
    },
  },
}
export default meta
type Story = StoryObj<CheckboxProps>

export const Demo: Story = {
  args: {
    className: "",
    checked: false,
    mixed: false,
    disabled: false,
    label: "Checkbox",
    onChange: fn(),
  },
}

export const Checked: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Checkbox checked={true} label="Checked True" />
      <Checkbox checked={false} label="Checked False" />
      <Checkbox checked={true} mixed={true} label="Checkbox True Mixed" />
      <Checkbox checked={false} mixed={true} label="Checkbox False Mixed" />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Checkbox checked={true} disabled label="Checked True Disabled" />
      <Checkbox checked={false} disabled label="Checked False Disabled" />
      <Checkbox
        checked={true}
        disabled
        mixed
        label="Checkbox True Mixed Disabled"
      />
      <Checkbox
        checked={false}
        disabled
        mixed
        label="Checkbox False Mixed Disabled"
      />
    </div>
  ),
}

export const Label: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Checkbox label="Labelled" />
      <Checkbox />
    </div>
  ),
}
