import { Meta, StoryObj } from '@storybook/preact'

import { PaddingStory } from './stories/Padding.story'

import { MenuContainer } from '../../index'

import { MenuItemGroup } from './MenuItemGroup'

const meta: Meta<typeof MenuItemGroup> = {
  title: 'Components/MenuItemGroup',
  component: MenuItemGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "A component for creating a menu group title. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    paddingLikeOption: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Add padding to the left of the content to make it aligned with options.',
    },
  },
}

export default meta

type Story = StoryObj<typeof MenuItemGroup>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    className: '',
    paddingLikeOption: false,
    children: 'Group',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<MenuContainer>
  <MenuItemGroup {...args}>{children}</MenuItemGroup>
</MenuContainer>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        {/* @ts-expect-error Storybook spread */}
        <MenuItemGroup {...args}>{args.children}</MenuItemGroup>
      </MenuContainer>
    </div>
  ),
}

export const Padding = PaddingStory
