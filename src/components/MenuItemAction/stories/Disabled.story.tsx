import { StoryObj } from '@storybook/preact-vite'

import { MenuContainer } from '../../../index'

import { MenuItemAction } from '../MenuItemAction'

type Story = StoryObj<typeof MenuItemAction>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<MenuItemAction disabled>{children}</MenuItemAction>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <MenuContainer width={208}>
        <MenuItemAction>Action 1</MenuItemAction>
        <MenuItemAction disabled>Action 2</MenuItemAction>
        <MenuItemAction>Action 3</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}
