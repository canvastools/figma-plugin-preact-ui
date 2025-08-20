import { Meta, StoryObj } from "@storybook/preact"

import { Avatar } from "./Avatar"
import type { AvatarProps } from "./Avatar.types"

const meta: Meta<AvatarProps> = {
  title: "Components/Images & Icons/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    imageSrc: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    fill: {
      control: { type: "color" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
    },
  },
}

export default meta
type Story = StoryObj<AvatarProps>

export const Demo: Story = {
  args: {
    className: "",
    imageSrc: "",
    children: "A",
    fill: "#FF24BD",
    size: "default",
    shape: "circle",
  },
}

export const ImageSrc: Story = {
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
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16">
      <Avatar fill="#FF24BD">A</Avatar>
      <Avatar fill="var(--pui-color-bg-brand)">A</Avatar>
    </div>
  ),
}

export const Size: Story = {
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
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="default">
          A
        </Avatar>
        <Avatar size="default">A</Avatar>
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
