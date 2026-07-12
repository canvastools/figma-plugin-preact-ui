import { StoryObj } from '@storybook/preact-vite'

import { useState } from 'preact/hooks'

import { Text, MenuContainer, Stack } from '../../../index'

import { MenuItemOption } from '../MenuItemOption'

type Story = StoryObj<typeof MenuItemOption>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const [selected, setSelected] = useState("option-1")

<MenuItemOption
  id="option-1"
  selected={selected === "option-1"}
  onSelectedChange={(args) => setSelected(args.id)}
>
  {children}
</MenuItemOption>
`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('option-1')

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Stack spacing={400}>
          <Text>Selected: {selected}</Text>
          <MenuContainer width={208}>
            <MenuItemOption id="option-1" selected={selected === 'option-1'} onSelectedChange={(args) => setSelected(args.id)}>
              Menu Item Option 1
            </MenuItemOption>
            <MenuItemOption id="option-2" selected={selected === 'option-2'} onSelectedChange={(args) => setSelected(args.id)}>
              Menu Item Option 2
            </MenuItemOption>
            <MenuItemOption id="option-3" selected={selected === 'option-3'} onSelectedChange={(args) => setSelected(args.id)}>
              Menu Item Option 3
            </MenuItemOption>
          </MenuContainer>
        </Stack>
      </div>
    )
  },
}
