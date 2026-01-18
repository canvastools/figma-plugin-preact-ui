import { Meta, StoryObj } from "@storybook/preact"

import { Spinner } from "./Spinner"

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
    docs: {
      source: {
        language: "tsx",
        code: `
<Spinner {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Spinner {...args} />
    </div>
  ),
}
