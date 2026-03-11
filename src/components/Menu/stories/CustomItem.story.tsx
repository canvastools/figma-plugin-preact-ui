import { StoryObj } from '@storybook/preact'

import { Fragment } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import { Button, Text, useMenuContext } from '../../../index'

import { Menu } from '../Menu'
import type { MenuItemData } from '../Menu.types'

type Story = StoryObj<typeof Menu>

export const CustomItemStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story:
          'Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well.',
      },
      source: {
        language: 'tsx',
        code: `

const CustomMenuItem = ({
  id,
  children,
  disabled,
  focused,
  onClick,
}) => {
  const { registerItem, clearFocus, setHoveredItem } = useMenuContext()
  const itemRef = useRef(null)

  useEffect(() => {
    const unregister = registerItem({
      id,
      ref: itemRef,
      disabled,
    })
    return unregister
  }, [])

  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    event.stopPropagation()
    onClick({ event, id })
  }

  const handleMouseEnter = () => {
    if (disabled) return
    clearFocus()
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    if (disabled) return
    setHoveredItem(null)
  }

  return (
    <div
      id={id}
      className="CustomMenuItem"
      ref={itemRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CustomMenuItem__content">
        <Text intent="neutral-inverted-fixed">
          {children}
        </Text>
      </div>
    </div>
  )
}

const items = [
  {
    type: "action",
    id: "action-1",
    children: "Action 1",
    closeOnClick: true,
    onClick: () => { ... },
  },
  {
    type: "action",
    id: "action-2",
    children: "Action 2",
    closeOnClick: true,
    onClick: () => { ... },
  },
  {
    type: "action",
    id: "action-3",
    children: "Action 3",
    closeOnClick: true,
    onClick: () => { ... },
  },
  {
    type: "custom",
    id: "custom-1",
    children: <CustomItem>Custom item</CustomItem>,
    onClick: () => { ... },
  },
]

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

    const CustomItem = ({
      id,
      children,
      disabled,
      focused,
      onClick,
    }: {
      id?: string
      children?: preact.ComponentChildren
      disabled?: boolean
      focused?: boolean
      onClick?: (args: { event: MouseEvent; id: string }) => void
    }) => {
      const resolvedId = id ?? 'custom-id'
      const { registerItem, clearFocus, setHoveredItem } = useMenuContext()
      const itemRef = useRef<HTMLElement>(null)

      useEffect(() => {
        const unregister = registerItem({
          id: resolvedId,
          ref: itemRef as preact.RefObject<HTMLElement>,
          disabled,
        })
        return unregister
      }, [])

      const handleMouseEnter = () => {
        if (disabled) return
        clearFocus()
        setHoveredItem(resolvedId)
      }

      const handleMouseLeave = () => {
        if (disabled) return
        setHoveredItem(null)
      }

      const handleClick = (event: MouseEvent) => {
        if (disabled) {
          event.preventDefault()
          return
        }

        event.stopPropagation()
        onClick?.({ event, id: resolvedId })
      }

      return (
        <Fragment>
          <style>
            {`
            .CustomMenuItem {
              padding: 0 var(--pui-spacing-200);
            }

            .CustomMenuItem__content {
              padding: var(--pui-spacing-100) var(--pui-spacing-200);
              border-radius: var(--pui-radius-medium);
            }

            .CustomMenuItem:hover .CustomMenuItem__content {
              background-color: green;
            }
            `}
          </style>
          <div
            id={resolvedId}
            className="CustomMenuItem"
            ref={itemRef as preact.Ref<HTMLDivElement>}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="CustomMenuItem__content">
              <Text intent="neutral-inverted-fixed">
                {children} {focused ? ' [focused]' : null}
              </Text>
            </div>
          </div>
        </Fragment>
      )
    }

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
      {
        type: 'custom',
        id: 'custom-item',
        children: <CustomItem>Custom item</CustomItem>,
        onClick: () => console.log('custom-item clicked'),
      },
    ]

    return (
      <div className="sb-column sb-width-full sb-gap-40">
        <Button ref={triggerRef}>Open Menu</Button>
        <Menu triggerRef={triggerRef} items={items} />
      </div>
    )
  },
}
