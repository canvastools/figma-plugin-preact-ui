import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Checkbox } from "./Checkbox"

import { Icon } from "../Icon/Icon"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
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
      description:
        "Callback function that is called when the checkbox is clicked.",
      table: {
        type: {
          summary: "([boolean]) => void",
        },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    checked: false,
    mixed: false,
    disabled: false,
    label: "Checkbox",
    onChange: fn(),
  },
  render: (args) => <Checkbox {...args} />,
}

export const Checked: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} label="Checked True" />
        <Checkbox checked={false} label="Checked False" />
      </div>
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} mixed={true} label="Checkbox True Mixed" />
        <Checkbox checked={false} mixed={true} label="Checkbox False Mixed" />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} disabled label="Checked True Disabled" />
        <Checkbox checked={false} disabled label="Checked False Disabled" />
      </div>
      <div className="sb-column sb-gap-16">
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
    </div>
  ),
}

export const Label: Story = {
  tags: ["!dev"],
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
