import { Meta, StoryObj } from "@storybook/preact"

import { spacing } from "../../themes"

import { Spacing } from "./Spacing"

import { Avatar } from "../../index"
import { Stack } from "../../index"

const meta: Meta<typeof Spacing> = {
  title: "Layout/Spacing",
  component: Spacing,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A component that creates a space between components.",
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
      options: ["row", "column"],
      defaultValue: { summary: "column" },
    },
    size: {
      control: {
        type: "radio",
      },
      options: [...Object.keys(spacing.variables).map(Number)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Spacing>

export const Demo: Story = {
  args: {
    className: "sb-container",
    direction: "column",
    size: 400,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Stack
        direction={
          // @ts-expect-error - Storybook types hack
          args.direction
        }
      >
        <Avatar>A</Avatar>
        <Spacing {...args} />
        <Avatar>B</Avatar>
        <Spacing {...args} />
        <Avatar>C</Avatar>
        <Spacing {...args} />
      </Stack>
    </div>
  ),
}
