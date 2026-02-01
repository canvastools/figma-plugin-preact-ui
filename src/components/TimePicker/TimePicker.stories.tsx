import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { TooltipContext } from "../../index"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { VariantStory } from "./stories/Variant.story"
import { PlaceholderStory } from "./stories/Placeholder.story"
import { DisabledStory } from "./stories/Disabled.story"

import { TimePicker } from "./TimePicker"

const meta: Meta<typeof TimePicker> = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component:
          "A styled wrapper around the [react-time-picker](https://github.com/wojtekmaj/react-time-picker) component.",
      },
    },
  },
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
    locale: {
      control: { type: "text" },
      defaultValue: { summary: "en-US" },
    },
    variant: {
      control: { type: "radio" },
      defaultValue: { summary: "default" },
      options: ["default", "list"],
    },
    label: {
      control: { type: "text" },
    },
    defaultDate: {
      control: { type: "date" },
      description: "Date for uncontrolled state.",
      table: {
        type: {
          summary: "TimePickerDate",
          detail: `Date | string | number | null`,
        },
      },
    },
    date: {
      control: { disable: true },
      defaultValue: { summary: "null" },
      description: "Date for controlled state.",
      table: {
        type: {
          summary: "TimePickerDate",
          detail: `Date | string | number | null`,
        },
      },
    },
    format: {
      control: { type: "text" },
      defaultValue: { summary: "HH:mm" },
      desription:
        "Supported values are: `H`, `HH`, `h`, `hh`, `m`, `mm`, `s`, `ss`, `a`",
    },
    hourPlaceholder: {
      control: { type: "text" },
      defaultValue: { summary: "HH" },
    },
    minutePlaceholder: {
      control: { type: "text" },
      defaultValue: { summary: "mm" },
    },
    maxTime: {
      control: { type: "text" },
      defaultValue: { summary: "23:59" },
    },
    minTime: {
      control: { type: "text" },
      defaultValue: { summary: "00:00" },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: "false" },
    },
    autoFocus: {
      control: { type: "boolean" },
      defaultValue: { summary: "false" },
    },
    tooltip: {
      control: { type: "text" },
    },
    maxWidth: {
      control: { type: "number" },
      description: "Maximum width of the TimePicker (excluding label).",
    },
    onTimeChange: {
      description:
        "`date` argument will be returned as `Date` if the `date` or `defaultDate` is provided as Date, otherwise it will be `undefined`.",
      table: {
        type: {
          summary: "(args) => void",
          detail: `args: {
  date: TimePickerDate | undefined
  time: string
}`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof TimePicker>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    id: undefined,
    className: "",
    locale: "en-US",
    variant: "default",
    label: "Label",
    defaultDate: new Date(),
    format: "HH:mm",
    hourPlaceholder: "HH",
    minutePlaceholder: "mm",
    maxTime: "23:59",
    minTime: "00:00",
    disabled: false,
    autoFocus: false,
    tooltip: "TimePicker tooltip",
    maxWidth: undefined,
    onTimeChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<TimePicker {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <TooltipContext>
        <TimePicker {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Variant = VariantStory
export const Placeholder = PlaceholderStory
export const Disabled = DisabledStory
