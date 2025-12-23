import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { ColorSwatch } from "./ColorSwatch"

import { Icon, ai as aiGlyph, Stack } from "../../index"

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
    interactive: {
      control: { type: "boolean" },
      description: "Enables interactive state.",
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
    tooltip: {
      control: { disable: true },
      description: "Tooltip content.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
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
    imageSrc: undefined,
    interactive: false,
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

export const Interactive: Story = {
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
          <ColorSwatch size="small" interactive />
          <ColorSwatch hex="#FF0000" size="small" interactive />
          <ColorSwatch hex="#FF00004D" size="small" interactive />
          <ColorSwatch
            imageSrc="https://placehold.co/48x48"
            size="small"
            interactive
          />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch interactive />
          <ColorSwatch hex="#FF0000" interactive />
          <ColorSwatch hex="#FF00004D" interactive />
          <ColorSwatch imageSrc="https://placehold.co/48x48" interactive />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch size="large" interactive />
          <ColorSwatch hex="#FF0000" size="large" interactive />
          <ColorSwatch hex="#FF00004D" size="large" interactive />
          <ColorSwatch
            imageSrc="https://placehold.co/48x48"
            size="large"
            interactive
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
            <ColorSwatch size="small" interactive selected />
            <ColorSwatch hex="#FF0000" size="small" interactive selected />
            <ColorSwatch hex="#FF00004D" size="small" interactive selected />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="small"
              interactive
              selected
            />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch
              size="small"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              hex="#FF0000"
              size="small"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              hex="#FF00004D"
              size="small"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="small"
              selection="rainbow"
              interactive
              selected
            />
          </Stack>
        </Stack>

        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="medium" interactive selected />
            <ColorSwatch hex="#FF0000" size="medium" interactive selected />
            <ColorSwatch hex="#FF00004D" size="medium" interactive selected />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="medium"
              interactive
              selected
            />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch
              size="medium"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              hex="#FF0000"
              size="medium"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              hex="#FF00004D"
              size="medium"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="medium"
              selection="rainbow"
              interactive
              selected
            />
          </Stack>
        </Stack>

        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="large" interactive selected />
            <ColorSwatch hex="#FF0000" size="large" interactive selected />
            <ColorSwatch hex="#FF00004D" size="large" interactive selected />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="large"
              interactive
              selected
            />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch
              size="large"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              hex="#FF0000"
              size="large"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              hex="#FF00004D"
              size="large"
              selection="rainbow"
              interactive
              selected
            />
            <ColorSwatch
              imageSrc="https://placehold.co/48x48"
              size="large"
              selection="rainbow"
              interactive
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
