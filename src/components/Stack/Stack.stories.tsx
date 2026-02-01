import { Meta, StoryObj } from "@storybook/preact"

import { spacing } from "../../themes"

import { Stack } from "./Stack"

import { Section, Avatar } from "../../index"

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A wrapper component that aligns components inside.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    className: {
      control: { type: "text" },
    },
    direction: {
      control: {
        type: "radio",
      },
      options: ["row", "row-reverse", "column", "column-reverse"],
      defaultValue: { summary: "column" },
    },
    spacing: {
      control: {
        type: "radio",
      },
      options: [undefined, ...Object.keys(spacing.variables).map(Number)],
    },
    x: {
      control: {
        type: "radio",
      },
      options: ["start", "center", "end"],
      defaultValue: { summary: "start" },
      description: "Horizontal alignment of the children.",
    },
    y: {
      control: {
        type: "radio",
      },
      options: ["start", "center", "end"],
      defaultValue: { summary: "start" },
      description: "Vertical alignment of the children.",
    },
    fullHeight: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Stack>

export const Demo: Story = {
  args: {
    id: undefined,
    className: "sb-container",
    direction: "column",
    spacing: 400,
    x: "start",
    y: "start",
    fullHeight: false,
    fullWidth: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Stack {...args}>
  {children}
</Stack>`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full sb-height-300">
      <Stack {...args}>
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
      </Stack>
    </div>
  ),
}
