import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { ColorSwatch } from "./ColorSwatch"

import { Icon } from "../Icon/Icon"
import { ai as aiGlyph } from "../Icon/glyphs"

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
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
      description: "Image source URL. Applies only to the image variant.",
    },
    title: {
      control: { type: "text" },
      defaultValue: { summary: undefined },
      description: "Tooltip text to display when the color swatch is hovered.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    hoverable: {
      control: { type: "boolean" },
      description: "Enables hoverable state.",
      defaultValue: { summary: false },
    },
    selected: {
      control: { type: "boolean" },
      description: "Enables selected state (controlled mode).",
      defaultValue: { summary: false },
    },
    selection: {
      control: { type: "radio" },
      options: ["default", "rainbow"],
      description: "Selection border style.",
      defaultValue: { summary: "default" },
    },
    children: {
      control: { disable: true },
      description: "Children to display inside the color swatch.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
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
    selection: "default",
    size: "medium",
    hex: "#FF0000",
    title: "Title",
    imageSrc: undefined,
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
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch />
          <ColorSwatch hex="#FF0000" />
          <ColorSwatch hex="#FF00004D" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch size="large" />
          <ColorSwatch hex="#FF0000" size="large" />
          <ColorSwatch hex="#FF00004D" size="large" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" size="large" />
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
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch hoverable />
          <ColorSwatch hex="#FF0000" hoverable />
          <ColorSwatch hex="#FF00004D" hoverable />
          <ColorSwatch imageSrc="https://placehold.co/48x48" hoverable />
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
        </Stack>
      </Stack>
    </div>
  ),
}

export const Selection: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column">
      <Stack spacing={400} direction="column">
        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="small" selected />
            <ColorSwatch hex="#FF0000" size="small" selected />
            <ColorSwatch hex="#FF00004D" size="small" selected />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="small"
              selected
            />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch size="small" selection="rainbow" selected />
            <ColorSwatch
              hex="#FF0000"
              size="small"
              selection="rainbow"
              selected
            />
            <ColorSwatch
              hex="#FF00004D"
              size="small"
              selection="rainbow"
              selected
            />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="small"
              selection="rainbow"
              selected
            />
          </Stack>
        </Stack>

        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="medium" selected />
            <ColorSwatch hex="#FF0000" size="medium" selected />
            <ColorSwatch hex="#FF00004D" size="medium" selected />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="medium"
              selected
            />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch size="medium" selection="rainbow" selected />
            <ColorSwatch
              hex="#FF0000"
              size="medium"
              selection="rainbow"
              selected
            />
            <ColorSwatch
              hex="#FF00004D"
              size="medium"
              selection="rainbow"
              selected
            />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="medium"
              selection="rainbow"
              selected
            />
          </Stack>
        </Stack>

        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="large" selected />
            <ColorSwatch hex="#FF0000" size="large" selected />
            <ColorSwatch hex="#FF00004D" size="large" selected />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="large"
              selected
            />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch size="large" selection="rainbow" selected />
            <ColorSwatch
              hex="#FF0000"
              size="large"
              selection="rainbow"
              selected
            />
            <ColorSwatch
              hex="#FF00004D"
              size="large"
              selection="rainbow"
              selected
            />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="large"
              selection="rainbow"
              selected
            />
          </Stack>
        </Stack>
      </Stack>
    </div>
  ),
}

export const Children: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column">
      <Stack spacing={400} direction="row">
        <ColorSwatch>
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        <ColorSwatch hex="#FF0000">
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        <ColorSwatch hex="#FF00004D">
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        <ColorSwatch imageSrc="https://placehold.co/48x48">
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        {/* <ColorSwatch wheel>
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch> */}
      </Stack>
    </div>
  ),
}
