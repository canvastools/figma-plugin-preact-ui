import { Meta, StoryObj } from "@storybook/preact"

import { ColorSwatch } from "./ColorSwatch"

import { Stack } from "../Stack/Stack"

const meta: Meta<typeof ColorSwatch> = {
  title: "Components/ColorSwatch",
  component: ColorSwatch,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["fill", "image"],
      defaultValue: { summary: "fill" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
      defaultValue: { summary: "medium" },
    },
    hex: {
      control: { type: "color" },
    },
    imageSrc: {
      control: { type: "text" },
      description: "Image source URL. Applies only to the image variant.",
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorSwatch>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    variant: "fill",
    size: "medium",
    hex: "#FF0000",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <ColorSwatch {...args} />
    </div>
  ),
}

export const Variant: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column">
      <Stack spacing={400} direction="row">
        <ColorSwatch variant="fill" />
        <ColorSwatch variant="fill" hex="#FF0000" />
        <ColorSwatch variant="fill" hex="#FF00004D" />
        <ColorSwatch variant="image" imageSrc="https://placehold.co/48x48" />
      </Stack>
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
    <div className="sb-column">
      <Stack spacing={400}>
        <Stack spacing={400} direction="row">
          <ColorSwatch variant="fill" size="small" />
          <ColorSwatch variant="fill" hex="#FF0000" size="small" />
          <ColorSwatch variant="fill" hex="#FF00004D" size="small" />
          <ColorSwatch
            variant="image"
            imageSrc="https://placehold.co/48x48"
            size="small"
          />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch variant="fill" />
          <ColorSwatch variant="fill" hex="#FF0000" />
          <ColorSwatch variant="fill" hex="#FF00004D" />
          <ColorSwatch variant="image" imageSrc="https://placehold.co/48x48" />
        </Stack>
      </Stack>
    </div>
  ),
}
