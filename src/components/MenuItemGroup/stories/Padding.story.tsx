import { StoryObj } from '@storybook/preact-vite'

import { MenuContainer, MenuDivider, MenuItemOption, MenuItemAction } from '../../../index'

import { MenuItemGroup } from '../MenuItemGroup'

type Story = StoryObj<typeof MenuItemGroup>

export const PaddingStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: 'When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options.',
      },
      source: {
        code: `
<MenuItemGroup paddingLikeOption>
  {children}
</MenuItemGroup>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemGroup>No padding</MenuItemGroup>
        <MenuItemAction>Action 1</MenuItemAction>
        <MenuItemAction>Action 2</MenuItemAction>
        <MenuItemAction>Action 3</MenuItemAction>
        <MenuDivider />
        <MenuItemGroup paddingLikeOption>With padding</MenuItemGroup>
        <MenuItemOption defaultSelected={true}>Option 1</MenuItemOption>
        <MenuItemOption>Option 2</MenuItemOption>
        <MenuItemOption>Option 3</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
