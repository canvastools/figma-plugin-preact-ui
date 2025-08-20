import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"

import { Avatar } from "./Avatar/Avatar"
import { Badge } from "./Badge/Badge"

const meta: Meta = {
  title: "Overview/Components",
  parameters: {
    docs: {
      description: {
        component:
          "A single canvas to preview all components in their default state.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const _Avatar: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
          A
        </Avatar>
        <Avatar size="small">A</Avatar>
        <Avatar
          imageSrc="https://thispersondoesnotexist.com/"
          size="small"
          shape="square"
        >
          A
        </Avatar>
        <Avatar size="small" shape="square">
          A
        </Avatar>
      </div>
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="default">
          A
        </Avatar>
        <Avatar size="default">A</Avatar>
        <Avatar
          imageSrc="https://thispersondoesnotexist.com/"
          size="default"
          shape="square"
        >
          A
        </Avatar>
        <Avatar size="default" shape="square">
          A
        </Avatar>
      </div>
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
          A
        </Avatar>
        <Avatar size="large">A</Avatar>
        <Avatar
          imageSrc="https://thispersondoesnotexist.com/"
          size="large"
          shape="square"
        >
          A
        </Avatar>
        <Avatar size="large" shape="square">
          A
        </Avatar>
      </div>
    </div>
  ),
}

export const _Badge: Story = {
  render: () => (
    <div className="sb-column sb-gap-16">
      <Badge>Default</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="brand-secondary">Brand Secondary</Badge>
    </div>
  ),
}
