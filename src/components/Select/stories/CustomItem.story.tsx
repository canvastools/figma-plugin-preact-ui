import { StoryObj } from '@storybook/preact'

import { Fragment } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import { useMenuContext, Text, Icon, check } from '../../../index'

import { Select } from '../Select'
import { SelectOptionData } from '../Select.types'

type Story = StoryObj<typeof Select>

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
const CustomItem = ({
  label,
  value,
  disabled,
  focused,
  selected,
  onChange,
}) => {
  const { registerItem, clearFocus, setHoveredItem, setFocusedItem } = useMenuContext()

  const id = value ?? "custom-id"
  const itemRef = useRef(null)

  useEffect(() => {
    const unregister = registerItem({
      id: id,
      ref: itemRef,
      disabled,
    })
    return unregister
  }, [disabled, id])

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }

    event.stopPropagation()
    onChange({ event, value: id })
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
      className="CustomMenuItem"
      id={id}
      ref={itemRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CustomMenuItem__content">

        {selected && (<Icon glyph={check} size={16} disabled={disabled}/>)}

        <Text intent="neutral-inverted-fixed">
          {label}
        </Text>
        
      </div>
    </div>
  )
}

const options = [
  { value: "option-1", label: "Option one" },
  { value: "option-2", label: "Option two" },
  { value: "option-3", label: "Option three" },
  { value: "custom-value", label: "Custom option", children: <CustomItem /> },
]

<Select
  options={options}
  defaultValue="option-1"
/>
`,
      },
    },
  },
  render: () => {
    const CustomItem = ({
      label,
      value,
      disabled,
      focused,
      selected,
      onChange,
    }: {
      label?: string
      value?: string
      disabled?: boolean
      focused?: boolean
      selected?: boolean
      onChange?: (args: { event: MouseEvent; value: string }) => void
    }) => {
      const { registerItem, clearFocus, setHoveredItem } = useMenuContext()

      const id = value ?? 'custom-id'
      const itemRef = useRef<HTMLElement>(null)

      useEffect(() => {
        const unregister = registerItem({
          id: id,
          ref: itemRef as preact.RefObject<HTMLElement>,
          disabled,
        })
        return unregister
      }, [disabled, id])

      const handleClick = (event: MouseEvent) => {
        if (disabled) {
          event.preventDefault()
          return
        }

        event.stopPropagation()
        onChange?.({ event, value: id })
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
        <Fragment>
          <style>
            {`
            .CustomMenuItem {
              padding: 0 var(--pui-spacing-200);
            }

            .CustomMenuItem__content {
              display: flex;
              align-items: center;
              gap: var(--pui-spacing-100);
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
              <div style={{ width: 16, height: 16 }}>
                {selected && (
                  <Icon glyph={check} size={16} intent={focused ? 'brand' : 'neutral-inverted-fixed'} disabled={disabled} />
                )}
              </div>
              <Text intent="neutral-inverted-fixed">
                {label}
                {focused ? ' [focused]' : null}
              </Text>
            </div>
          </div>
        </Fragment>
      )
    }

    const options: SelectOptionData[] = [
      { value: 'option-1', label: 'Option one' },
      { value: 'option-2', label: 'Option two' },
      { value: 'option-3', label: 'Option three' },
      { value: 'custom-value', label: 'Custom option', children: <CustomItem /> },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select options={options} defaultValue="option-1" onValueChange={(args) => console.log('onValueChange', args)} />
      </div>
    )
  },
}
