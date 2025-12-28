import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { Switch } from "./Switch"

import { Text, Stack } from "../../index"

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    checked: {
      control: { disable: true },
      description: "Value for controlled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Initial checked state for uncontrolled mode.",
      defaultValue: { summary: false },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onChange: {
      action: "clicked",
      description: "Callback when the switch is clicked.",
      table: {
        type: {
          summary: "(args: {event: MouseEvent; checked: boolean}) => void",
        },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Switch>

export const Demo: Story = {
  args: {
    className: "",
    defaultChecked: false,
    disabled: false,
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Switch {...args} />
    </div>
  ),
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Switch defaultChecked={true} />
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>Value: {isChecked ? "true" : "false"}</Text>
          <Switch
            checked={isChecked}
            onChange={(args) => setIsChecked(args.checked)}
          />
        </Stack>
      </div>
    )
  },
}

export const Checked: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Switch defaultChecked={true} />
        <Switch defaultChecked={false} />
      </Stack>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Switch defaultChecked={true} disabled />
        <Switch defaultChecked={false} disabled />
      </Stack>
    </div>
  ),
}
