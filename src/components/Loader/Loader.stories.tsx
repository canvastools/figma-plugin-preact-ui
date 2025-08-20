import { Meta, StoryObj } from "@storybook/preact"

import { Loader } from "./Loader"
import type { LoaderProps } from "./Loader.types"

const meta: Meta<LoaderProps> = {
  title: "Components/Feedback/Loader",
  component: Loader,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<LoaderProps>

export const Demo: Story = {
  args: {
    className: "",
  },
}
