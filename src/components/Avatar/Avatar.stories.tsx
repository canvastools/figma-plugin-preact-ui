import { Meta, StoryObj } from "@storybook/preact"

import { Avatar } from "./Avatar"

const meta: Meta<typeof Avatar> = {
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
      defaultValue: { summary: "medium" },
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
      defaultValue: { summary: "circle" },
    },
    imageSrc: {
      control: { type: "text" },
      description: "Image source URL.",
    },
    fillBg: {
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
        defaultValue: {
          summary: "var(--pui-color-neutral-inverted-bg-default)",
        },
      },
      control: { type: "color" },
      description:
        "Background color for the avatar container when no image is provided.",
    },
    fillText: {
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
        defaultValue: {
          summary: "var(--pui-color-neutral-inverted-text-default)",
        },
      },
      control: { type: "color" },
      description:
        "Text color for the children text content when no image is provided.",
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { type: "text" },
      description:
        "Content when no image is provided, usually a couple of letters.",
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    shape: "circle",
    size: "medium",
    imageSrc: "",
    children: "A",
  },
  render: (args) => <Avatar {...args} />,
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
      <Avatar fillBg="var(--pui-color-brand-bg-default)" fillText="#ffff00">
        A
      </Avatar>
    </div>
  ),
}
