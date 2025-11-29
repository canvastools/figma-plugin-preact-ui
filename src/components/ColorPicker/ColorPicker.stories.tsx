import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"
import { fn } from "@storybook/test"

import { ColorPicker } from "./ColorPicker"

import { Text } from "../../index"
import { Stack } from "../../index"
import { ColorSwatch } from "../../index"

import { colorToHexAlpha } from "../../index"

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    defaultType: {
      control: { type: "radio" },
      options: ["rgba", "hex", "hexAlpha"],
      description: "Initial color picker mode.",
      defaultValue: { summary: "hex" },
    },
    types: {
      control: { type: "check" },
      options: ["rgba", "hex", "hexAlpha"],
      defaultValue: { summary: `["hex", "hexAlpha", "rgba"]` },
      description: "Allowed color picker modes in the picker.",
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    value: {
      table: {
        type: {
          summary: "Color",
        },
      },
      control: { type: "object" },
      description: `<pre>type Color = {
  r: number
  g: number
  b: number
  a: number
}</pre>`,
    },
    controls: {
      control: { type: "boolean" },
      defaultValue: { summary: "true" },
      description: "Show input controls for the color picker.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: "207" },
      description: "Width of the color picker.",
      table: {
        type: { summary: "number | 'auto'" },
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback when the color is changed.",
      table: {
        type: {
          summary:
            "(args: { rgba: Color; hex: string; opacity: number }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultType: "hex",
    types: ["rgba", "hex", "hexAlpha"],
    controls: true,
    value: {
      r: 255,
      g: 0,
      b: 0,
      a: 1,
    },
    width: 207,
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <ColorPicker {...args} />
    </div>
  ),
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <ColorPicker defaultType="hex" controls={true} />
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [color, setColor] = useState({
      rgba: { r: 255, g: 0, b: 0, a: 1 },
      hex: "#FF0000",
      opacity: 1,
    })

    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>
            Value: {color.hex}, {color.opacity}
          </Text>
          <ColorSwatch hex={colorToHexAlpha(color.rgba)} />
          <ColorPicker
            defaultType="hex"
            value={color.rgba}
            controls
            onChange={(e) => setColor(e)}
          />
        </Stack>
      </div>
    )
  },
}

export const Type: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Stack spacing={400}>
          <Text>Hex</Text>
          <ColorPicker defaultType="hex" />
        </Stack>

        <Stack spacing={400}>
          <Text>HexAlpha</Text>
          <ColorPicker defaultType="hexAlpha" />
        </Stack>

        <Stack spacing={400}>
          <Text>RGBA</Text>
          <ColorPicker defaultType="rgba" />
        </Stack>
      </Stack>
    </div>
  ),
}

export const Controls: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <ColorPicker defaultType="hex" controls={true} />
        <ColorPicker defaultType="hex" controls={false} />
      </Stack>
    </div>
  ),
}

export const Types: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "Allow the user to select the type of color picker to use (e.g. only Hex and HexAlpha).",
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <ColorPicker defaultType="rgba" types={["rgba", "hexAlpha"]} />
      </Stack>
    </div>
  ),
}

export const Width: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <ColorPicker defaultType="hex" width={400} />
      </Stack>
    </div>
  ),
}
