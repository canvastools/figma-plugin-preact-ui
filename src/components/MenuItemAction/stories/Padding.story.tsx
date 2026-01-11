import { StoryObj } from "@storybook/preact"

import {
  Icon,
  link,
  MenuContainer,
  MenuDivider,
  MenuItemOption,
} from "../../../index"

import { MenuItemAction } from "../MenuItemAction"

type Story = StoryObj<typeof MenuItemAction>

export const PaddingStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options.",
      },
      source: {
        language: "tsx",
        code: `
<MenuItemAction paddingLikeOption>{children}</MenuItemAction>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction paddingLikeOption>Action 1</MenuItemAction>
        <MenuItemAction paddingLikeOption>Action 2</MenuItemAction>
        <MenuItemAction paddingLikeOption>Action 3</MenuItemAction>
        <MenuDivider />
        <MenuItemOption defaultSelected={true}>Option 1</MenuItemOption>
        <MenuItemOption>Option 2</MenuItemOption>
        <MenuItemOption>Option 3</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
