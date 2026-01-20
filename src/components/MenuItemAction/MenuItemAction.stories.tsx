import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { IntentStory } from "./stories/Intent.story"
import { DisabledStory } from "./stories/Disabled.story"
import { PrefixStory } from "./stories/Prefix.story"
import { SuffixStory } from "./stories/Suffix.story"
import { PaddingStory } from "./stories/Padding.story"

import { MenuContainer } from "../../index"

import { MenuItemAction } from "./MenuItemAction"

const meta: Meta<typeof MenuItemAction> = {
  title: "Components/MenuItemAction",
  component: MenuItemAction,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component for creating a menu action. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
      description:
        "Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.",
    },
    intentModifier: {
      control: { type: "radio" },
      defaultValue: { summary: "default" },
      options: ["default", "danger"],
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    focused: {
      control: { type: "boolean" },
      description: "Works only when the componet is inside `<MenuContext/>`.",
      defaultValue: { summary: false },
    },
    prefix: {
      control: { disable: true },
      description: "Element displayed before children.",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: "Element displayed after children.",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    children: {
      control: { type: "text" },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    paddingLikeOption: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Add padding to the left of the content to make it aligned with options.",
    },
    onClick: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  event: MouseEvent
  id: string
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof MenuItemAction>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    id: "menu-item-action",
    intentModifier: "default",
    disabled: false,
    focused: false,
    paddingLikeOption: false,
    children: "Action",
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
<MenuItemAction {...args}>{children}</MenuItemAction>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        {/* @ts-ignore-next-line */}
        <MenuItemAction {...args}>{args.children}</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}

export const Intent = IntentStory
export const Disabled = DisabledStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
export const Padding = PaddingStory
