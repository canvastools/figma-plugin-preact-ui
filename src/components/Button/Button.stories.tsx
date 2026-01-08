import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { IntentStory } from "./stories/Intent.story"
import { SizeStory } from "./stories/Size.story"
import { DisabledStory } from "./stories/Disabled.story"
import { WidthStory } from "./stories/Width.story"
import { GroupedStory } from "./stories/Grouped.story"
import { PrefixStory } from "./stories/Prefix.story"
import { SuffixStory } from "./stories/Suffix.story"

import { TooltipContext } from "../../index"

import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    intent: {
      control: { type: "radio" },
      options: ["neutral", "neutral-inverted", "brand", "danger", "success"],
      defaultValue: { summary: "neutral" },
    },
    intentModifier: {
      control: { type: "radio" },
      options: ["default", "secondary", "brand", "danger", "success"],
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
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    fullWidth: {
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
    prefix: {
      control: { disable: true },
      description: "Element displayed before children.",
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: "Element displayed after children.",
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
    children: {
      control: { type: "text" },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "string | number | JSX.Element",
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

type Story = StoryObj<typeof Button>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    intent: "neutral",
    intentModifier: "default",
    ghost: false,
    size: "medium",
    grouped: "none",
    disabled: false,
    fullWidth: false,
    tooltip: "Button tooltip",
    children: "Button",
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
<Button {...args}>{children}</Button>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Button {...args}>{children}</Button>
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TooltipContext>
        {/* @ts-ignore-next-line */}
        <Button {...args}>{args.children}</Button>
      </TooltipContext>
    </div>
  ),
}

export const Intent = IntentStory
export const Size = SizeStory
export const Disabled = DisabledStory
export const Width = WidthStory
export const Grouped = GroupedStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
