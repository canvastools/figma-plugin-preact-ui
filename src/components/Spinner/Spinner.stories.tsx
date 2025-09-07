import { Meta, StoryObj } from "@storybook/preact"

import { Spinner } from "./Spinner"

import { Section } from "../Section/Section"

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

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
    <div className="sb-column sb-width-full">
      <Section>
        <Spinner {...args} />
      </Section>
    </div>
  ),
}
