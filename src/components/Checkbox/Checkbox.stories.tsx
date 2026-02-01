import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { IntentStory } from "./stories/Intent.story"
import { MixedStory } from "./stories/Mixed.story"
import { DisabledStory } from "./stories/Disabled.story"

import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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
    intent: {
      control: { type: "radio" },
      options: ["neutral", "brand"],
      defaultValue: { summary: "neutral" },
    },
    intentModifier: {
      control: { type: "radio" },
      options: ["default"],
      defaultValue: { summary: "default" },
    },
    checked: {
      control: { disable: true },
      description: "Value for controlled state.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Value for uncontrolled state.",
      defaultValue: { summary: false },
    },
    mixed: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    label: {
      control: { type: "text" },
    },
    onCheckedChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args:{
  event: MouseEvent
  checked: boolean
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    id: undefined,
    className: "",
    intent: "neutral",
    intentModifier: "default",
    defaultChecked: false,
    mixed: false,
    disabled: false,
    label: "Checkbox",
    onCheckedChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Checkbox {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Checkbox {...args} />
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Intent = IntentStory
export const Mixed = MixedStory
export const Disabled = DisabledStory
