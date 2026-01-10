import { Meta, StoryObj } from "@storybook/preact"

import { GroupFocusStory } from "./stories/GroupFocus.story"
import { CombinationsStory } from "./stories/Combinations.story"

import { Input } from "../../index"

import { ControlGroup } from "./ControlGroup"

const meta: Meta<typeof ControlGroup> = {
  title: "Components/ControlGroup",
  component: ControlGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          'A wrapper component that groups multiple controls together and set `grouped` property on them.<br/>  Supported controls: <a href="/docs/components-button--docs">`<Button/>`</a>, <a href="/docs/components-buttonicon--docs">`<ButtonIcon/>`</a>, <a href="/docs/components-buttonicontoggle--docs">`<ButtonIconToggle/>`</a>, <a href="/docs/components-input--docs">`<Input/>`</a>, <a href="/docs/components-select--docs">`<Select/>`</a>',
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    groupFocus: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof ControlGroup>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    groupFocus: false,
    fullWidth: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<ControlGroup {...args}>
  {children}
</ControlGroup>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <ControlGroup {...args}>
        <Input placeholder="Input" />
        <Input placeholder="Input" />
      </ControlGroup>
    </div>
  ),
}

export const GroupFocus = GroupFocusStory
export const Combinations = CombinationsStory
