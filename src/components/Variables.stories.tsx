import { Meta, StoryObj } from "@storybook/preact"

const meta: Meta = {
  title: "Overview/Variables",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        component:
          "Preview of all CSS variables. TODO theming example (how it works)",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const _1: Story = {
  tags: ["!dev"],
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      TODO add variables list (colors, spacing, etc)
    </div>
  ),
}
