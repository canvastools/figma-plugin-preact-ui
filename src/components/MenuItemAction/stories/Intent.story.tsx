import { StoryObj } from '@storybook/preact-vite'

import { MenuContainer } from '../../../index'

import { MenuItemAction } from '../MenuItemAction'

type Story = StoryObj<typeof MenuItemAction>

export const IntentStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<MenuItemAction intentModifier="default">
  {children}
</MenuItemAction>

<MenuItemAction intentModifier="danger">
  {children}
</MenuItemAction>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction>Action 1</MenuItemAction>
        <MenuItemAction intentModifier="danger">Action 2</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}
