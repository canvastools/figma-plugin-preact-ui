import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { PlaceholderStory } from "./stories/Placeholder.story"
import { DisabledStory } from "./stories/Disabled.story"
import { PrefixStory } from "./stories/Prefix.story"
import { ItemGroupsStory } from "./stories/ItemGroups.story"
import { CustomItemStory } from "./stories/CustomItem.story"

import { TooltipContext } from "../../index"

import { Select } from "./Select"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    className: {
      control: { type: "text" },
    },
    options: {
      control: { disable: true },
      description: `Array of options to render in the select.`,
      table: {
        type: {
          summary: "SelectOptionData[] | SelectOptionData[][]",
          detail: `
{
  label: string // required
  value: string // required
  disabled: boolean
  children: preact.ComponentChildren
}
            `,
        },
      },
    },
    placeholder: {
      control: { type: "text" },
    },
    value: {
      control: { disable: true },
      description: "Value for controlled state.",
      table: {
        type: { summary: "string" },
      },
    },
    defaultValue: {
      control: { type: "text" },
      description: "Value for uncontrolled state.",
      table: {
        type: { summary: "string" },
      },
    },
    grouped: {
      control: { type: "radio" },
      options: [undefined, "first", "last", "middle"],
    },
    error: {
      control: { type: "boolean" },
      defaultValue: { summary: "false" },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: "false" },
    },
    prefix: {
      control: { disable: true },
      description: "Element displayed before value.",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    tooltip: {
      control: { control: "text" },
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    onBlur: {
      table: { type: { summary: "() => void" } },
    },
    onFocus: {
      table: { type: { summary: "() => void" } },
    },
    onValueChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  event: MouseEvent
  value: string
}
          `,
        },
      },
    },
    menuContainerProps: {
      control: { disable: true },
      table: {
        type: {
          summary: "Pick<MenuContainerProps>",
          detail: `
{
  width: number
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    id: undefined,
    className: "",
    placeholder: "Placeholder",
    defaultValue: "",
    grouped: undefined,
    error: false,
    disabled: false,
    tooltip: "Select tooltip",
    onBlur: fn(),
    onFocus: fn(),
    onValueChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Select {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Select {...args} />
</TooltipContext>
`,
      },
    },
  },
  render: (args) => {
    const options = [
      { value: "option-1", label: "Option one" },
      { value: "option-2", label: "Option two" },
      { value: "option-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <TooltipContext>
          <Select options={options} {...args} />
        </TooltipContext>
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Placeholder = PlaceholderStory
export const Disabled = DisabledStory
export const Prefix = PrefixStory
export const ItemGroups = ItemGroupsStory
export const CustomItem = CustomItemStory
