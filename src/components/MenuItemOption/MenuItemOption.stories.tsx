import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ControlledStory } from "./stories/Controlled.story"
import { DisabledStory } from "./stories/Disabled.story"
import { PrefixStory } from "./stories/Prefix.story"
import { SuffixStory } from "./stories/Suffix.story"

import { MenuContainer, MenuContext } from "../../index"

import { MenuItemOption } from "./MenuItemOption"

const meta: Meta<typeof MenuItemOption> = {
  title: "Components/MenuItemOption",
  component: MenuItemOption,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component for selecting an option from a list within a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>.",
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
    defaultSelected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Value for uncontrolled mode.",
    },
    selected: {
      control: { disable: true },
      description: "Value for controlled mode.",
      table: {
        type: {
          summary: "boolean",
        },
      },
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
    onSelectedChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  event: MouseEvent
  id: string
  selected: boolean
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof MenuItemOption>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    id: "menu-item-option",
    defaultSelected: true,
    disabled: false,
    focused: false,
    children: "Menu Item Option",
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
<MenuItemOption {...args}>{children}</MenuItemOption>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContext>
        <MenuContainer width={208}>
          {/* @ts-ignore-next-line */}
          <MenuItemOption {...args}>{args.children}</MenuItemOption>
        </MenuContainer>
      </MenuContext>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Disabled = DisabledStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
