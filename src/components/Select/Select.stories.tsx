import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Select } from "./Select"

import { Stack } from "../../index"
import { Text } from "../../index"
import { Icon } from "../../index"
import { search as searchGlyph } from "../../index"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    className: { control: { type: "text" } },
    options: {
      table: {
        type: {
          summary: "SelectOption[] | SelectOption[][]",
        },
      },
      control: { type: "object" },
      description: `Array of items to manage.
      <pre>interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}</pre>
      `,
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text to display when no option is selected.",
    },
    value: {
      control: { disable: true },
      description: "Value for the controlled mode.",
      table: { type: { summary: "string" } },
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default value for the uncontrolled mode.",
      table: { type: { summary: "string" } },
    },
    grouped: {
      control: { type: "select" },
      options: ["none", "left", "right", "both"],
      defaultValue: { summary: "none" },
    },
    error: { control: { type: "boolean" }, defaultValue: { summary: "false" } },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: "false" },
    },
    menuWidth: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      description: "Width of the menu.",
    },
    onBlur: {
      control: { disable: true },
      description: "Callback when the input is blurred.",
      table: { type: { summary: "() => void" } },
    },
    onFocus: {
      control: { disable: true },
      description: "Callback when the input is focused.",
      table: { type: { summary: "() => void" } },
    },
    onChange: {
      control: { disable: true },
      description: "Callback when the value is changed.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent, value: string }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

const sampleOptions = [
  { value: "opt-1", label: "Option one" },
  { value: "opt-2", label: "Option two" },
  { value: "opt-3", label: "Option three" },
]

const sampleOptionsWithGroups = [
  [
    { value: "opt-1", label: "Option one" },
    { value: "opt-2", label: "Option two" },
    { value: "opt-3", label: "Option three" },
  ],
  [
    { value: "opt-4", label: "Option four" },
    { value: "opt-5", label: "Option five" },
    { value: "opt-6", label: "Option six" },
  ],
]

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    options: sampleOptions,
    placeholder: "Choose an option",
    defaultValue: "",
    grouped: "none",
    error: false,
    disabled: false,
    menuWidth: 208,
    onBlur: fn(),
    onFocus: fn(),
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <Select {...args} />
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
    <div className="sb-column sb-width-300">
      <Select
        options={sampleOptions}
        placeholder="Choose an option"
        defaultValue="opt-1"
      />
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
    const [value, setValue] = useState("opt-1")

    return (
      <div className="sb-column sb-width-300">
        <Stack spacing={400}>
          <Text>Value: {value}</Text>
          <Select
            placeholder="Choose an option"
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.value)}
          />
        </Stack>
      </div>
    )
  },
}

export const Placeholder: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" />
    </div>
  ),
}

export const Grouped: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Stack direction="row">
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-1"
          grouped="right"
        />
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-2"
          grouped="both"
        />
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-3"
          grouped="left"
        />
      </Stack>
    </div>
  ),
}

export const GroupedOptions: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Select
        options={sampleOptionsWithGroups}
        placeholder="Choose an option"
        defaultValue="opt-1"
        grouped="right"
      />
    </div>
  ),
}

export const Error: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Select
        options={sampleOptions}
        placeholder="Choose an option"
        defaultValue="opt-1"
        error={true}
      />
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
    <div className="sb-column sb-width-300">
      <Stack spacing={400}>
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          disabled={true}
        />
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-1"
          disabled={true}
        />
      </Stack>
    </div>
  ),
}

export const Prefix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Select
        options={sampleOptions}
        placeholder="Choose an option"
        defaultValue="opt-1"
        prefix={
          <Icon
            glyph={searchGlyph}
            intent="neutral"
            intentModifiers="secondary"
            variant="scaled"
          />
        }
      />
    </div>
  ),
}

export const MenuWidth: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Select
        options={sampleOptions}
        placeholder="Choose an option"
        defaultValue="opt-1"
        menuWidth={200}
      />
    </div>
  ),
}
