import { StoryObj } from '@storybook/preact-vite'

import { useRef } from 'preact/hooks'

import { Button } from '../../../index'

import { Menu } from '../Menu'
import { MenuItemData } from '../Menu.types'

type Story = StoryObj<typeof Menu>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const triggerRef = useRef(null)


const items = [
  {
    type: "action",
    closeOnClick: true,
    id: "action-1",
    children: "Action 1",
    onClick: () => { ... }
  },
  {
    type: "action",
    closeOnClick: true,
    id: "action-2",
    children: "Action 2",
    onClick: () => { ... }
  },
  {
    type: "action",
    id: "action-3",
    closeOnClick: true,
    children: "Action 3",
    onClick: () => { ... }
  },
]


<Button ref={triggerRef}>{children}</Button>

<Menu 
  triggerRef={triggerRef}
  items={items}
/>

`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const items: MenuItemData[] = [
      {
        type: 'action',
        id: 'action-1',
        children: 'Action 1',
        closeOnClick: true,
        onClick: () => console.log('action-1 clicked'),
      },
      {
        type: 'action',
        id: 'action-2',
        children: 'Action 2',
        closeOnClick: true,
        onClick: () => console.log('action-2 clicked'),
      },
      {
        type: 'action',
        id: 'action-3',
        children: 'Action 3',
        closeOnClick: true,
        onClick: () => console.log('action-3 clicked'),
      },
    ]
    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Button ref={triggerRef}>Open Menu</Button>
        <Menu triggerRef={triggerRef} items={items} />
      </div>
    )
  },
}
