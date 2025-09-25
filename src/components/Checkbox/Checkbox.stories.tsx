import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Checkbox } from "./Checkbox"

import { Text } from "../Text/Text"
import { Section } from "../Section/Section"
import { Stack } from "../Stack/Stack"

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
      table: {
        type: {
          summary: "boolean",
        },
      },
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
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Section>
        <Checkbox {...args} />
      </Section>
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
      <Section>
        <Checkbox defaultChecked={true} label="Checked True" />
      </Section>
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
        <Section>
          <Text>Value: {isChecked ? "true" : "false"}</Text>
        </Section>
        <Section>
          <Checkbox
            checked={isChecked}
            label="Checked True"
            onChange={(args) => setIsChecked(args.checked)}
          />
        </Section>
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
      <Section>
        <Stack spacing={400}>
          <Checkbox defaultChecked={true} label="Checked True" />
          <Checkbox defaultChecked={false} label="Checked False" />
        </Stack>
      </Section>
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
      <Section>
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
      </Section>
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
      <Section>
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
      </Section>
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
      <Section>
        <Stack spacing={400}>
          <Checkbox label="Labelled" />
          <Checkbox />
        </Stack>
      </Section>
    </div>
  ),
}
