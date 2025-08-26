import { Meta, StoryObj } from "@storybook/preact"

import { Spinner } from "./Spinner"

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Demo: Story = {
  args: {
    className: "",
  },
  render: (args) => <Spinner {...args} />,
}
