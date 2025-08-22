import { Meta, StoryObj } from "@storybook/preact"

import { Avatar } from "./Avatar"
import type { AvatarProps } from "./Avatar.types"

const meta: Meta<AvatarProps> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
    },
    imageSrc: {
      control: { type: "text" },
    },
    fillBg: {
      control: { type: "color" },
    },
    fillText: {
      control: { type: "color" },
    },
    children: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<AvatarProps>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    shape: "circle",
    size: "medium",
    imageSrc: "",
    children: "A",
  },
}

export const Size: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
          A
        </Avatar>
        <Avatar size="small">A</Avatar>
      </div>
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium">
          A
        </Avatar>
        <Avatar size="medium">A</Avatar>
      </div>
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
          A
        </Avatar>
        <Avatar size="large">A</Avatar>
      </div>
    </div>
  ),
}

export const Shape: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
            A
          </Avatar>
          <Avatar size="small">A</Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium">
            A
          </Avatar>
          <Avatar size="medium">A</Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
            A
          </Avatar>
          <Avatar size="large">A</Avatar>
        </div>
      </div>
      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
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
          <Avatar
            imageSrc="https://thispersondoesnotexist.com/"
            size="medium"
            shape="square"
          >
            A
          </Avatar>
          <Avatar size="medium" shape="square">
            A
          </Avatar>
        </div>
        <div className="sb-row sb-gap-16">
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
    </div>
  ),
}

export const ImageSrc: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Avatar imageSrc="https://thispersondoesnotexist.com/">A</Avatar>
      <Avatar>A</Avatar>
    </div>
  ),
}

export const Fill: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Avatar fillBg="var(--pui-color-brand-bg-default)" fillText="#fff">
        A
      </Avatar>
    </div>
  ),
}
