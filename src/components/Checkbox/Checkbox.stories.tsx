import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Checkbox } from "./Checkbox"

import { Text } from "../Text/Text"

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
    defaultChecked: {
      control: { type: "boolean" },
      description: "Initial checked state for uncontrolled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
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
          summary: "(args: {event: MouseEvent; checked: boolean}) => void",
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
    defaultChecked: false,
    mixed: false,
    disabled: false,
    label: "Checkbox",
    onChange: fn(),
  },
  render: (args) => <Checkbox {...args} />,
}

export const Uncontrolled: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <Checkbox defaultChecked={true} label="Checked True" />
    </div>
  ),
}

export const Controlled: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [isChecked, setIsChecked] = useState(false)
    return (
      <div className="sb-column sb-gap-16">
        <Text>Value: {isChecked ? "true" : "false"}</Text>
        <Checkbox
          checked={isChecked}
          label="Checked True"
          onChange={(args) => setIsChecked(args.checked)}
        />
      </div>
    )
  },
}

export const Checked: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <Checkbox defaultChecked={true} label="Checked True" />
      <Checkbox defaultChecked={false} label="Checked False" />
    </div>
  ),
}

export const Mixed: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <Checkbox
        defaultChecked={true}
        mixed={true}
        label="Checkbox True Mixed"
      />
      <Checkbox
        defaultChecked={false}
        mixed={true}
        label="Checkbox False Mixed"
      />
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
        <Checkbox
          defaultChecked={true}
          disabled
          label="Checked True Disabled"
        />
        <Checkbox
          defaultChecked={false}
          disabled
          label="Checked False Disabled"
        />
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
