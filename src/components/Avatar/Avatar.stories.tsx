import { Meta, StoryObj } from "@storybook/preact"

import { Avatar } from "./Avatar"

import { Stack } from "../../index"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: { summary: "medium" },
    },
    shape: {
      control: { type: "radio" },
      options: ["circle", "square"],
      defaultValue: { summary: "circle" },
    },
    imageSrc: {
      control: { type: "text" },
      description: "Image source URL.",
      defaultValue: { summary: "undefined | null" },
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
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Avatar {...args} />
    </div>
  ),
}

export const Size: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Stack direction="row" spacing={400}>
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
            A
          </Avatar>
          <Avatar size="small">A</Avatar>
        </Stack>
        <Stack direction="row" spacing={400}>
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium">
            A
          </Avatar>
          <Avatar size="medium">A</Avatar>
        </Stack>
        <Stack direction="row" spacing={400}>
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
            A
          </Avatar>
          <Avatar size="large">A</Avatar>
        </Stack>
      </Stack>
    </div>
  ),
}

export const Shape: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-width-full">
      <Stack spacing={400} direction="row">
        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
              A
            </Avatar>
            <Avatar size="small">A</Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar
              imageSrc="https://thispersondoesnotexist.com/"
              size="medium"
            >
              A
            </Avatar>
            <Avatar size="medium">A</Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
              A
            </Avatar>
            <Avatar size="large">A</Avatar>
          </Stack>
        </Stack>

        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
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
          </Stack>
          <Stack direction="row" spacing={400}>
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
          </Stack>
          <Stack direction="row" spacing={400}>
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
          </Stack>
        </Stack>
      </Stack>
    </div>
  ),
}

export const ImageSrc: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Avatar imageSrc="https://thispersondoesnotexist.com/">A</Avatar>
        <Avatar>A</Avatar>
      </Stack>
    </div>
  ),
}

export const Fill: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Avatar fillBg="var(--pui-color-brand-bg-default)" fillText="#ffff00">
        A
      </Avatar>
    </div>
  ),
}
