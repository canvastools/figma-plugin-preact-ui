import { StoryObj } from '@storybook/preact-vite'

import { Icon, link, MenuContainer } from '../../../index'

import { MenuItemAction } from '../MenuItemAction'

type Story = StoryObj<typeof MenuItemAction>

export const PrefixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<MenuItemAction 
  prefix={
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
        <MenuItemAction prefix={<Icon glyph={link} size={16} intent="neutral-inverted-fixed" />}>Action 1</MenuItemAction>
        <MenuItemAction prefix={<Icon glyph={link} size={16} intent="neutral-inverted-fixed" />}>Action 2</MenuItemAction>
        <MenuItemAction prefix={<Icon glyph={link} size={16} intent="neutral-inverted-fixed" />}>Action 3</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}
