import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { InputGroup } from "./InputGroup"

import { Input } from "../../index"

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Allows to group multiple inputs together and style them as a single input.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    children: {
      control: { disable: true },
    },
  },
}
export default meta
type Story = StoryObj<typeof InputGroup>

export const Demo: Story = {
  args: {
    className: "",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <InputGroup {...args}>
        <Input placeholder="First input" grouped="right" />
        <Input defaultValue="Second input" grouped="left" />
      </InputGroup>
    </div>
  ),
}
