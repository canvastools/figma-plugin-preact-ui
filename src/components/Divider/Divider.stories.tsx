import { Meta, StoryObj } from "@storybook/preact"

import { Divider } from "./Divider"

import { Text, Section } from "../../index"

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["full", "inset"],
      defaultValue: { summary: "full" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Demo: Story = {
  args: {
    className: "",
    variant: "full",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Divider {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Divider {...args} />
    </div>
  ),
}
