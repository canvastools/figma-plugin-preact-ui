import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { DisabledStory } from "./stories/Disabled.story"

import { Switch } from "./Switch"

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    checked: {
      control: { disable: true },
      description: "Value for controlled state.",
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Value for uncontrolled state.",
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onCheckedChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  event: MouseEvent | KeyboardEvent
  checked: boolean
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Switch>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultChecked: false,
    disabled: false,
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
<Switch {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Switch {...args} />
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Disabled = DisabledStory
