import { Meta, StoryObj } from "@storybook/preact"

import { spacing } from "../../themes"

import { Stack } from "./Stack"

import { Section } from "../Section/Section"
import { Avatar } from "../Avatar/Avatar"

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
      options: [...Object.keys(spacing.variables).map(Number)],
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
      description: "Horizontal alignment of the children.",
    },
    fullHeight: {
      control: { type: "boolean" },
      description:
        "Set the height to 100% to occupy the entire height in flex containers. May requires &lt;ScrollContainer/&gt; to be used as it uses `overflow: hidden`.",
    },
    fullWidth: {
      control: { type: "boolean" },
      description:
        "Set the width to 100% to occupy the entire width in container.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Stack>

export const Demo: Story = {
  args: {
    className: "sb-container",
    spacing: 400,
    direction: "column",
    x: "start",
    y: "start",
    fullHeight: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-height-300">
      <Section>
        <Stack {...args}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
        </Stack>
      </Section>
    </div>
  ),
}
