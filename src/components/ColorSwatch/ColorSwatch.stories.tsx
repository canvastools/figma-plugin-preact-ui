import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { ColorSwatch } from "./ColorSwatch"

import { Stack } from "../../index"

const meta: Meta<typeof ColorSwatch> = {
  title: "Components/ColorSwatch",
  component: ColorSwatch,
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
    hex: {
      control: { type: "color" },
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
      },
    },
    imageSrc: {
      control: { disable: true },
      table: {
        type: {
          summary: "string",
        },
      },
      description: "Image source URL. Applies only to the image variant.",
    },
    wheel: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Display a colour wheel in the swatch.",
    },
    title: {
      control: { type: "text" },
      defaultValue: { summary: undefined },
      description: "Title to display when the color swatch is hovered.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    hoverable: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    selected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onClick: {
      action: "clicked",
      description: "Callback when the color swatch is clicked.",
      table: {
        type: {
          summary:
            "(args: { event: MouseEvent; hex: string | undefined; imageSrc: string | undefined }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorSwatch>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    wheel: false,
    size: "medium",
    hex: "#FF0000",
    title: "Title",
    hoverable: false,
    selected: false,
    onClick: fn(),
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

export const Hex: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column">
      <Stack spacing={400} direction="row">
        <ColorSwatch />
        <ColorSwatch hex="#FF0000" />
        <ColorSwatch hex="#FF00004D" />
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
    <div className="sb-column">
      <Stack spacing={400} direction="row">
        <ColorSwatch />
        <ColorSwatch imageSrc="https://placehold.co/48x48" />
      </Stack>
    </div>
  ),
}

export const Wheel: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column">
      <Stack spacing={400} direction="row">
        <ColorSwatch wheel />
      </Stack>
    </div>
  ),
}

export const Title: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column">
      <Stack spacing={400} direction="row">
        <ColorSwatch hex="#FF0000" title="Red" />
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
          <ColorSwatch size="small" />
          <ColorSwatch hex="#FF0000" size="small" />
          <ColorSwatch hex="#FF00004D" size="small" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" size="small" />
          <ColorSwatch size="small" wheel />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch />
          <ColorSwatch hex="#FF0000" />
          <ColorSwatch hex="#FF00004D" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" />
          <ColorSwatch wheel />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch size="large" />
          <ColorSwatch hex="#FF0000" size="large" />
          <ColorSwatch hex="#FF00004D" size="large" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" size="large" />
          <ColorSwatch size="large" wheel />
        </Stack>
      </Stack>
    </div>
  ),
}

export const Hoverable: Story = {
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
          <ColorSwatch size="small" hoverable />
          <ColorSwatch hex="#FF0000" size="small" hoverable />
          <ColorSwatch hex="#FF00004D" size="small" hoverable />
          <ColorSwatch
            imageSrc="https://placehold.co/48x48"
            size="small"
            hoverable
          />
          <ColorSwatch size="small" wheel hoverable />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch hoverable />
          <ColorSwatch hex="#FF0000" hoverable />
          <ColorSwatch hex="#FF00004D" hoverable />
          <ColorSwatch imageSrc="https://placehold.co/48x48" hoverable />
          <ColorSwatch wheel hoverable />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch size="large" hoverable />
          <ColorSwatch hex="#FF0000" size="large" hoverable />
          <ColorSwatch hex="#FF00004D" size="large" hoverable />
          <ColorSwatch
            imageSrc="https://placehold.co/48x48"
            size="large"
            hoverable
          />
          <ColorSwatch size="large" wheel hoverable />
        </Stack>
      </Stack>
    </div>
  ),
}

export const Selected: Story = {
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
          <ColorSwatch size="small" selected />
          <ColorSwatch hex="#FF0000" size="small" selected />
          <ColorSwatch hex="#FF00004D" size="small" selected />
          <ColorSwatch
            imageSrc="https://placehold.co/48x48"
            size="small"
            selected
          />
          <ColorSwatch size="small" wheel selected />
          <ColorSwatch size="small" wheel hex="#FF0000" selected />
          <ColorSwatch size="small" wheel hex="#FF00004D" selected />
          <ColorSwatch
            size="small"
            wheel
            imageSrc="https://placehold.co/48x48"
            selected
          />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch selected />
          <ColorSwatch hex="#FF0000" selected />
          <ColorSwatch hex="#FF00004D" selected />
          <ColorSwatch imageSrc="https://placehold.co/48x48" selected />
          <ColorSwatch wheel selected />
          <ColorSwatch wheel hex="#FF0000" selected />
          <ColorSwatch wheel hex="#FF00004D" selected />
          <ColorSwatch wheel imageSrc="https://placehold.co/48x48" selected />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch size="large" selected />
          <ColorSwatch hex="#FF0000" size="large" selected />
          <ColorSwatch hex="#FF00004D" size="large" selected />
          <ColorSwatch
            imageSrc="https://placehold.co/48x48"
            size="large"
            selected
          />
          <ColorSwatch wheel size="large" selected />
          <ColorSwatch wheel size="large" hex="#FF0000" selected />
          <ColorSwatch wheel size="large" hex="#FF00004D" selected />
          <ColorSwatch
            wheel
            size="large"
            imageSrc="https://placehold.co/48x48"
            selected
          />
        </Stack>
      </Stack>
    </div>
  ),
}
