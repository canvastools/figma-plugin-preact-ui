import { StoryObj } from "@storybook/preact"

import { Icon, link, MenuContainer } from "../../../index"

import { MenuItemAction } from "../MenuItemAction"

type Story = StoryObj<typeof MenuItemAction>

export const SuffixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<MenuItemAction 
  suffix={
    <Icon 
      glyph={link}
      size={16}
      intent="neutral-inverted-fixed" 
    />
  }
>
  {children}
</MenuItemAction>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction
          suffix={
            <Icon glyph={link} size={16} intent="neutral-inverted-fixed" />
          }
        >
          Action 1
        </MenuItemAction>
        <MenuItemAction
          suffix={
            <Icon glyph={link} size={16} intent="neutral-inverted-fixed" />
          }
        >
          Action 2
        </MenuItemAction>
        <MenuItemAction
          suffix={
            <Icon glyph={link} size={16} intent="neutral-inverted-fixed" />
          }
        >
          Action 3
        </MenuItemAction>
      </MenuContainer>
    </div>
  ),
}
