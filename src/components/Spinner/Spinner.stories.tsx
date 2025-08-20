import { Meta, StoryObj } from "@storybook/preact"

import { Spinner } from "./Spinner"
import type { SpinnerProps } from "./Spinner.types"

const meta: Meta<SpinnerProps> = {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<SpinnerProps>

export const Demo: Story = {
  args: {
    className: "",
  },
}
