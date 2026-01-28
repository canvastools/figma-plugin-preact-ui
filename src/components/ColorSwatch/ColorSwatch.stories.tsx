import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { SizeStory } from "./stories/Size.story"
import { ColorStory } from "./stories/Color.story"
import { DisabledStory } from "./stories/Disabled.story"
import { SelectionStory } from "./stories/Selection.story"
import { ChildrenStory } from "./stories/Children.story"

import { TooltipContext } from "../../index"

import { ColorSwatch } from "./ColorSwatch"
import type { Color } from "../ColorPicker/ColorPicker.types"

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
    color: {
      control: { type: "object" },
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
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    selected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    selection: {
      control: { type: "radio" },
      options: ["default", "rainbow"],
      description: "Selection border style.",
      defaultValue: { summary: "default" },
    },
    tooltip: {
      control: { type: "text" },
      description: "Tooltip content.",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    onClick: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: { 
  event: MouseEvent
  color: Color | undefined
}
          `,
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
    size: "medium",
    color: { r: 255, g: 0, b: 0, a: 1 } as Color,
    disabled: false,
    selected: false,
    selection: "default",
    tooltip: "ColorSwatch tooltip",
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<ColorSwatch {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ColorSwatch {...args}/>
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TooltipContext>
        <ColorSwatch {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Size = SizeStory
export const _Color = ColorStory
export const Disabled = DisabledStory
export const Selection = SelectionStory
export const Children = ChildrenStory
