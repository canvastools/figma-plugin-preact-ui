import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { TypeStory } from "./stories/Type.story"
import { WidthStory } from "./stories/Width.story"

import { TooltipContext } from "../../index"

import { ColorPicker } from "./ColorPicker"

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
      description: "Picker mode for uncontrolled state.",
      table: {
        type: {
          summary: "ColorPickerType",
          detail: `"rgba" | "hex" | "hexAlpha"`,
        },
      },
    },
    type: {
      control: { disable: true },
      options: ["rgba", "hex", "hexAlpha"],
      description: "Picker mode for controlled state.",
      table: {
        type: {
          summary: "ColorPickerType",
          detail: `"rgba" | "hex" | "hexAlpha"`,
        },
      },
    },
    types: {
      control: { type: "check" },
      options: ["rgba", "hex", "hexAlpha"],
      defaultValue: { summary: `["hex", "hexAlpha", "rgba"]` },
      description: "Allowed color picker modes in the picker.",
      table: {
        type: {
          summary: "ColorPickerType[]",
          detail: `["rgba", "hex", "hexAlpha"]`,
        },
      },
    },
    defaultColor: {
      control: { type: "object" },
      description: "Color value for uncontrolled state.",
      defaultValue: { summary: `{ r: 255, g: 0, b: 0, a: 1 }` },
      table: {
        type: {
          summary: "Color",
          detail: `
{
  r: number
  g: number
  b: number
  a: number
}
`,
        },
      },
    },
    color: {
      control: { disable: true },
      description: "Color value for controlled state.",
      table: {
        type: {
          summary: "Color",
          detail: `
{
  r: number
  g: number
  b: number
  a: number
}
`,
        },
      },
    },
    showControls: {
      control: { type: "boolean" },
      defaultValue: { summary: "true" },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: "207" },
    },
    fullWidth: {
      control: { type: "boolean" },
      defaultValue: { summary: "false" },
      description: "Overrides `width` property.",
    },
    onTypeChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args:{
  type: ColorPickerType
}
`,
        },
      },
    },
    onColorChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args:{
  color: Color
  hex: string
  opacity: number
}
`,
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
    defaultColor: {
      r: 255,
      g: 0,
      b: 0,
      a: 1,
    },
    showControls: true,
    width: 207,
    fullWidth: false,
    onColorChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<ColorPicker {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TooltipContext>
        <ColorPicker {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Type = TypeStory
export const Width = WidthStory
