import { Meta, StoryObj } from "@storybook/preact"

import { Typography } from "./Typography"
import type { TypographyProps } from "./Typography.types"

const meta: Meta<TypographyProps> = {
  title: "Components/Typography/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS class names to apply to the component",
    },
    variant: {
      control: { type: "radio" },
      options: ["heading", "body"],
      description: "The visual variant of the typography",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "The size of the typography",
    },
    strong: {
      control: { type: "boolean" },
      description: "Whether the typography should be strong",
    },
    children: {
      control: { type: "text" },
      description: "The content to display inside the typography",
    },
  },
}
export default meta
type Story = StoryObj<TypographyProps>

export const Demo: Story = {
  args: {
    className: "",
    variant: "heading",
    size: "medium",
    strong: false,
    children: "Typography",
  },
}

export const Variant: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <Typography variant="heading">Heading</Typography>
      <Typography variant="body">Body</Typography>
    </div>
  ),
}

export const Size: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Typography variant="heading" size="large">
          Heading Large
        </Typography>
        <Typography variant="heading" size="medium">
          Heading Medium
        </Typography>
        <Typography variant="heading" size="small">
          Heading Small
        </Typography>
      </div>

      <div className="sb-row sb-gap-16">
        <Typography variant="body" size="large">
          Body Large
        </Typography>
        <Typography variant="body" size="medium">
          Body Medium
        </Typography>
        <Typography variant="body" size="small">
          Body Small
        </Typography>
      </div>
    </div>
  ),
}

export const Strong: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Typography variant="body" size="large">
          Body Large
        </Typography>
        <Typography variant="body" size="medium">
          Body Medium
        </Typography>
        <Typography variant="body" size="small">
          Body Small
        </Typography>
      </div>

      <div className="sb-row sb-gap-16">
        <Typography variant="body" size="large" strong>
          Body Large Strong
        </Typography>
        <Typography variant="body" size="medium" strong>
          Body Medium Strong
        </Typography>
        <Typography variant="body" size="small" strong>
          Body Small Strong
        </Typography>
      </div>
    </div>
  ),
}
