import { Meta, StoryObj } from "@storybook/preact"

import { Code } from "./Code"

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
      description: "<strong>*</strong>",
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
    docs: {
      source: {
        language: "tsx",
        code: `
<Code {...args}>{children}</Code>
`,
      },
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
