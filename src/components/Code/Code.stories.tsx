import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Code } from "./Code"

import { Text } from "../../index"
import { Stack } from "../../index"

const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["inline", "block"],
      defaultValue: { summary: "inline" },
    },
    children: {
      control: { type: "text" },
      description: "The content of the code block.",
    },
  },
}
export default meta
type Story = StoryObj<typeof Code>

export const Demo: Story = {
  args: {
    className: "",
    variant: "inline",
    children: "Hello, world!",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Code {...args}>
        {/* @ts-expect-error - Storybook types hack */}
        {args.children}
      </Code>
    </div>
  ),
}
