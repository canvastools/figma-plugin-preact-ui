import { StoryObj } from '@storybook/preact'

import { Icon, link, MenuContainer, Text } from '../../../index'

import { MenuItemOption } from '../MenuItemOption'

type Story = StoryObj<typeof MenuItemOption>

export const SuffixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<MenuItemOption 
  suffix={
    <Icon 
      glyph={link}
      size={16}
      intent="neutral-inverted-fixed" 
    />
  }
>
  {children}
</MenuItemOption>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemOption
          defaultSelected={true}
          suffix={
            <Text intent="neutral-inverted-fixed" intentModifier="secondary">
              Suffix
            </Text>
          }
        >
          Menu Item Option 1
        </MenuItemOption>
        <MenuItemOption suffix={<Icon glyph={link} size={16} intent="neutral-inverted-fixed" />}>
          Menu Item Option 2
        </MenuItemOption>
        <MenuItemOption suffix={<Icon glyph={link} size={16} intent="neutral-inverted-fixed" />}>
          Menu Item Option 3
        </MenuItemOption>
      </MenuContainer>
    </div>
  ),
}
