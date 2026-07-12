import { StoryObj } from '@storybook/preact-vite'

import { MenuContainer } from '../../../index'

import { MenuItemOption } from '../MenuItemOption'

type Story = StoryObj<typeof MenuItemOption>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<MenuItemOption defaultSelected={true}>
  {children}
</MenuItemOption>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemOption defaultSelected={true}>Menu Item Option 1</MenuItemOption>
        <MenuItemOption>Menu Item Option 2</MenuItemOption>
        <MenuItemOption>Menu Item Option 3</MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
