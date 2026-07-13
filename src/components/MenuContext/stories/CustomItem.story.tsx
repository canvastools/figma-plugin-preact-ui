import { StoryObj } from '@storybook/preact-vite'

import { Fragment } from 'preact'
import { useRef, useState, useEffect } from 'preact/hooks'

import { MenuItemAction, MenuContainer, Button, OverlayPositioner, Text } from '../../../index'

import { MenuContext, useMenuContext } from '../MenuContext'

type Story = StoryObj<typeof MenuContext>

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

const CustomMenuContent = () => {
  const context = useMenuContext()

  return (
    <OverlayPositioner
      anchorRef={triggerRef}
      open={context.open}
      placement="bottom-left"
      offsetY={4}
      offsetEdge={16}
      onClose={() => context.setOpen(false)}
    >
      <MenuContainer>

        <MenuItemAction
          id="action-1"
          focused={context.focusedItem === "action-1"}
        >
          Action 1
        </MenuItemAction>

        <MenuItemAction
          id="action-2"
          focused={context.focusedItem === "action-2"}
        >
          Action 2
        </MenuItemAction>

        <MenuItemAction
          id="action-3"
          focused={context.focusedItem === "action-3"}
        >
          Action 3
        </MenuItemAction>

        <CustomMenuItem
          id="custom-1"
          disabled={false}
          focused={context.focusedItem === "custom-1"}
          onClick={(args) => console.log("Custom item clicked", args)}
        >
          Custom Item
        </CustomMenuItem>

      </MenuContainer>
    </OverlayPositioner>
  )
}


const CustomMenu = () => {
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>

      <MenuContext
        triggerRef={triggerRef}
        open={open}
        setOpen={setOpen}
      >
        <MenuContent />
      </MenuContext>
    </div>
  )
}

`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)

    const CustomMenuItem = ({
      id,
      children,
      disabled,
      focused,
      onClick,
    }: {
      id: string
      children: preact.ComponentChildren
      disabled: boolean
      focused: boolean
      onClick: (args: { event: MouseEvent; id: string }) => void
    }) => {
      const { registerItem, clearFocus, setHoveredItem } = useMenuContext()
      const itemRef = useRef<HTMLElement>(null)

      useEffect(() => {
        const unregister = registerItem({
          id,
          ref: itemRef as preact.RefObject<HTMLElement>,
          disabled,
        })
        return unregister
      }, [disabled, id, registerItem])

      const handleMouseEnter = () => {
        if (disabled) return
        clearFocus()
        setHoveredItem(id)
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
        onClick?.({ event, id })
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
            id={id}
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

    const MenuContent = () => {
      const context = useMenuContext()
      if (!context) return null

      return (
        <OverlayPositioner
          anchorRef={triggerRef}
          open={context.open}
          placement="bottom-left"
          offsetY={4}
          offsetEdge={16}
          onClose={() => context.setOpen(false)}
        >
          <MenuContainer>
            <MenuItemAction id="action-1" focused={context.focusedItemId === 'action-1'}>
              Action 1
            </MenuItemAction>
            <MenuItemAction id="action-2" focused={context.focusedItemId === 'action-2'}>
              Action 2
            </MenuItemAction>
            <MenuItemAction id="action-3" focused={context.focusedItemId === 'action-3'}>
              Action 3
            </MenuItemAction>
            <CustomMenuItem
              id="custom-1"
              disabled={false}
              focused={context.focusedItemId === 'custom-1'}
              onClick={(args) => console.log('Custom item clicked', args)}
            >
              Custom Item
            </CustomMenuItem>
          </MenuContainer>
        </OverlayPositioner>
      )
    }

    return (
      <div className="sb-column sb-width-full sb-gap-40">
        <Button ref={triggerRef} onClick={() => setOpen(true)}>
          Open Menu
        </Button>
        <MenuContext triggerRef={triggerRef} open={open} setOpen={setOpen}>
          <MenuContent />
        </MenuContext>
      </div>
    )
  },
}
