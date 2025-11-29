import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { SegmentedControl } from "./SegmentedControl"
import type { SegmentedControlOption } from "./SegmentedControl.types"

import { Stack } from "../../index"
import { Text } from "../../index"
import { viewList as viewListGlyph } from "../../index"
import { viewGrid as viewGridGlyph } from "../../index"

const meta: Meta<typeof SegmentedControl> = {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  argTypes: {
    className: { control: { type: "text" } },
    options: {
      control: { type: "object" },
      table: {
        type: {
          summary: "SegmentedControlOption[]",
        },
      },
      description: `Array of items to manage. 
      <pre>interface SegmentedControlOption {
  value: string
  title: string
  icon?: Glyph | preact.ComponentChildren
}</pre>
      `,
    },
    value: {
      control: { disable: true },
      description: "Value for the controlled mode.",
      table: { type: { summary: "string" } },
    },
    defaultValue: {
      control: { disable: true },
      description: "Default value for the uncontrolled mode.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onChange: {
      action: "onChange",
      description: "Callback when the value is changed.",
      table: {
        type: {
          summary:
            "(args: { event: MouseEvent | KeyboardEvent, value: string }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

const sampleOptionsWihtoutIcons: SegmentedControlOption[] = [
  {
    value: "list",
    title: "List view",
  },
  {
    value: "grid",
    title: "Grid view",
  },
]

const sampleOptions: SegmentedControlOption[] = [
  {
    value: "list",
    title: "List view",
    icon: viewListGlyph,
  },
  {
    value: "grid",
    title: "Grid view",
    icon: viewGridGlyph,
  },
]

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    options: sampleOptionsWihtoutIcons,
    defaultValue: "list",
    disabled: false,
    fullWidth: false,
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column">
      <SegmentedControl options={sampleOptionsWihtoutIcons} {...args} />
    </div>
  ),
}

export const WithIcons: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <SegmentedControl options={sampleOptions} defaultValue="list" />
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
      <SegmentedControl
        options={sampleOptionsWihtoutIcons}
        defaultValue="list"
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
    const [value, setValue] = useState("list")
    return (
      <div className="sb-column sb-width-300">
        <Stack spacing={400} fullWidth>
          <Text>Value: {value}</Text>
          <SegmentedControl
            value={value}
            options={sampleOptionsWihtoutIcons}
            onChange={(e) => setValue(e.value)}
          />
        </Stack>
      </div>
    )
  },
}

export const FullWidth: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400} fullWidth>
        <SegmentedControl
          options={sampleOptions}
          defaultValue="list"
          fullWidth
        />
        <SegmentedControl
          options={sampleOptionsWihtoutIcons}
          defaultValue="list"
          fullWidth
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
    <div className="sb-column sb-width-300">
      <Stack spacing={400}>
        <SegmentedControl
          options={sampleOptions}
          defaultValue="list"
          disabled
        />
        <SegmentedControl
          options={sampleOptions.map((option) => ({
            ...option,
            icon: undefined,
          }))}
          defaultValue="list"
          disabled
        />
      </Stack>
    </div>
  ),
}
