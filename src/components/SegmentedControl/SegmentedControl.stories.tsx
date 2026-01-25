import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { DisabledStory } from "./stories/Disabled.story"
import { IconsStory } from "./stories/Icons.story"

import { SegmentedControl } from "./SegmentedControl"
import type { SegmentedControlItemData } from "./SegmentedControl.types"

const meta: Meta<typeof SegmentedControl> = {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    items: {
      control: { disable: true },
      description: "<strong>*</strong>Array of items to render in the control.",
      table: {
        type: {
          summary: "SegmentedControlItemData[]",
          detail: `
{
  value: string // required
  label: string // required
  icon: IconPropsPick 
}

// Types

type IconPropsPick = {
  glyph: Glyph
  variant: "default" | "scaled"
  size: 16 | 24
}

          `,
        },
      },
    },
    value: {
      control: { disable: true },
      description: "Value for controlled state.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    defaultValue: {
      control: { disable: true },
      description: "Value for uncontrolled state.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onValueChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  event: MouseEvent | KeyboardEvent
  value: string
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof SegmentedControl>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultValue: "list",
    disabled: false,
    fullWidth: false,
    onValueChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        code: `
const items = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl items={items} {...args} />
        `,
      },
    },
  },
  render: (args) => {
    const sampleOptionsWihtoutIcons: SegmentedControlItemData[] = [
      {
        value: "list",
        label: "List view",
      },
      {
        value: "grid",
        label: "Grid view",
      },
    ]

    return (
      <div className="sb-column">
        <SegmentedControl items={sampleOptionsWihtoutIcons} {...args} />
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Disabled = DisabledStory
export const Icons = IconsStory
