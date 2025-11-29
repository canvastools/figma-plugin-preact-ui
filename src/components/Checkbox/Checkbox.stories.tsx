import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Checkbox } from "./Checkbox"

import { Text } from "../../index"
import { Stack } from "../../index"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    intent: {
      control: { type: "radio" },
      options: ["neutral", "brand"],
      defaultValue: { summary: "neutral" },
    },
    intentModifiers: {
      control: { type: "radio" },
      options: ["default"],
      defaultValue: { summary: "default" },
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
    mixed: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    label: {
      control: { type: "text" },
    },
    onChange: {
      action: "clicked",
      description: "Callback when the checkbox is clicked.",
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
    intent: "neutral",
    intentModifiers: "default",
    defaultChecked: false,
    mixed: false,
    disabled: false,
    label: "Checkbox",
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Checkbox {...args} />
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
      <Checkbox defaultChecked={true} label="Checked True" />
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
          <Checkbox
            checked={isChecked}
            label="Checked True"
            onChange={(args) => setIsChecked(args.checked)}
          />
        </Stack>
      </div>
    )
  },
}

export const Intent: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Checkbox
          intent="brand"
          intentModifiers="default"
          label="Brand Default"
          checked={true}
        />
        <Checkbox
          intent="brand"
          intentModifiers="default"
          label="Brand Default"
        />

        <Checkbox
          intent="neutral"
          intentModifiers="default"
          label="Neutral Default"
          checked={true}
        />
        <Checkbox
          intent="neutral"
          intentModifiers="default"
          label="Neutral Default"
        />
      </Stack>
    </div>
  ),
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
        <Checkbox defaultChecked={true} label="Checked True" />
        <Checkbox defaultChecked={false} label="Checked False" />
      </Stack>
    </div>
  ),
}

export const Mixed: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
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
      </Stack>
    </div>
  ),
}

export const Label: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Checkbox label="Labelled" />
        <Checkbox />
      </Stack>
    </div>
  ),
}
