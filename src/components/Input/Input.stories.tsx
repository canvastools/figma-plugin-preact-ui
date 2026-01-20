import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { PlaceholderStory } from "./stories/Placeholder.story"
import { DisabledStory } from "./stories/Disabled.story"
import { PrefixStory } from "./stories/Prefix.story"
import { SuffixStory } from "./stories/Suffix.story"

import { TooltipContext } from "../../index"

import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    type: {
      control: { type: "radio" },
      options: ["text", "number"],
      defaultValue: { summary: "text" },
    },
    defaultValue: {
      control: { type: "text" },
      description: "Value for uncontrolled mode.",
    },
    value: {
      control: { disable: true },
      description: "Value for controlled mode.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    ghost: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    grouped: {
      control: { type: "radio" },
      options: [undefined, "first", "last", "middle"],
    },
    error: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
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
    suffix: {
      control: { disable: true },
      description: "Element displayed after value.",

      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    showSuffixOnHover: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    focusOnDoubleClick: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    minLength: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Minimum length of the input value.",
    },
    maxLength: {
      control: { type: "number" },
      defaultValue: { summary: Infinity },
      description: "Maximum length of the input value.",
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
    autoFocus: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
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
    onBlur: {
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
    onFocus: {
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
    onKeyDown: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: { 
  event: KeyboardEvent
  value: string
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    type: "text",
    placeholder: "Placeholder",
    defaultValue: "",
    ghost: false,
    grouped: undefined,
    error: false,
    disabled: false,
    showSuffixOnHover: false,
    focusOnDoubleClick: false,
    tooltip: "Input tooltip",
    minLength: 0,
    maxLength: 9999,
    autoFocus: false,
    onValueChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <TooltipContext>
        <Input {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Placeholder = PlaceholderStory
export const Disabled = DisabledStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
