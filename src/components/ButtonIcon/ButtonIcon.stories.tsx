import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { IntentStory } from "./stories/Intent.story"
import { SizeStory } from "./stories/Size.story"
import { DisabledStory } from "./stories/Disabled.story"
import { GroupedStory } from "./stories/Grouped.story"
import { TranslucentStory } from "./stories/Translucent.story"
import { IconStory } from "./stories/Icon.story"

import { Icon, link, TooltipContext } from "../../index"

import { ButtonIcon } from "./ButtonIcon"

const meta: Meta<typeof ButtonIcon> = {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    intent: {
      control: { type: "radio" },
      options: ["neutral"],
      defaultValue: { summary: "neutral" },
    },
    intentModifier: {
      control: { type: "radio" },
      options: ["default", "secondary"],
      defaultValue: { summary: "default" },
    },
    ghost: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    size: {
      control: { type: "radio" },
      options: ["medium", "large"],
      defaultValue: { summary: "medium" },
    },
    grouped: {
      control: { type: "radio" },
      options: ["none", "left", "right", "both"],
      defaultValue: { summary: "none" },
    },
    translucent: {
      control: { type: "boolean" },
      description: "Used for cases when the button is inside an input.",
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    tooltip: {
      control: { type: "text" },
      description: "Tooltip content.",
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
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
    icon: {
      control: { disable: true },
      description: `A shortcut for the displaying the icon (glyph) as a child.`,
      table: {
        type: {
          summary: "object",
          detail: `
{ 
  glyph: Glyph, // required
  variant: IconProps['variant'], 
  size: IconProps['size']
}
          `,
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
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ButtonIcon>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    intent: "neutral",
    intentModifier: "default",
    ghost: false,
    size: "medium",
    grouped: "none",
    translucent: false,
    disabled: false,
    tooltip: "Button tooltip",
    children: <Icon glyph={link} />,
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
<ButtonIcon {...args}>{children}</ButtonIcon>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ButtonIcon {...args}>{children}</ButtonIcon>
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TooltipContext>
        {/* @ts-ignore-next-line */}
        <ButtonIcon {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Intent = IntentStory
export const Size = SizeStory
export const Disabled = DisabledStory
export const Grouped = GroupedStory
export const Translucent = TranslucentStory
export const _Icon = IconStory
