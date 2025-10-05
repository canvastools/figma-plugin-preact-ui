import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"
import { fn } from "@storybook/test"

import { ColorPicker } from "./ColorPicker"

import { Text } from "../../index"
import { Stack } from "../../index"

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
      defaultValue: { summary: "hex" },
    },
    types: {
      control: { type: "check" },
      options: ["rgba", "hex", "hexAlpha"],
      description: "Allowed color picker modes in the picker.",
    },
    value: {
      table: {
        type: {
          summary: "Color",
        },
      },
      control: { disable: true },
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
    controls: true,
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
