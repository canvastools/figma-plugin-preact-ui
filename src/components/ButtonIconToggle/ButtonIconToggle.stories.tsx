import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"

import { link } from "../../index"

import { ButtonIconToggle } from "./ButtonIconToggle"

const meta: Meta<typeof ButtonIconToggle> = {
  title: "Components/ButtonIconToggle",
  component: ButtonIconToggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Extends <a href='/docs/components-buttonicon--docs'>`<ButtonIcon/>`</a> and its props to simplify the creation of toggle buttons.",
      },
    },
  },
  argTypes: {
    selected: {
      control: { disable: true },
      description: "Value for controlled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    defaultSelected: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Value for uncontrolled mode.",
    },
    onSelectedChange: {
      action: "changed",
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args:{
  event: MouseEvent,
  selected: boolean
}
`,
        },
      },
    },
    "...ButtonIconProps": {
      control: { disable: true },
      table: {
        type: {
          summary: "ButtonIconProps",
          detail: `
{
  className: string
  intent: "neutral"
  intentModifier: "default" | "secondary"
  ghost: boolean
  size: "medium" | "large"
  grouped: "none" | "first" | "last" | "middle"
  translucent: boolean
  disabled: boolean
  selected: boolean
  tooltip: preact.ComponentChildren
  children: preact.ComponentChildren
  icon: IconPropsPick
  onClick: (args: { event: MouseEvent }) => void
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ButtonIconToggle>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    defaultSelected: false,
    onSelectedChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<ButtonIconToggle {...args}>
  {children}
</ButtonIconToggle>
`,
      },
    },
  },

  render: (args) => (
    <div className="sb-column sb-width-full">
      <ButtonIconToggle icon={{ glyph: link, variant: "scaled" }} {...args} />
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
