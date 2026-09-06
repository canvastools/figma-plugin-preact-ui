import { bem, typedForwardRef } from '../../utils'

import { ListContext } from '../ListContext/ListContext'
import { ListContainer } from '../ListContainer/ListContainer'
import { ListItem } from '../ListItem/ListItem'
import type { ListItemData } from '../ListContext/ListContext.types'

import type { ListProps } from './List.types'
import './List.scss'

/* --- */

const ListComponent = (
  {
    id,
    className,
    items,
    listItemProps,
    renderItem,
    selectedItemIds,
    selectionMode,
    deselectOnClickOutside,
    onItemsChange,
    onSelectionChange,
    onKeyDown,
    ...rest
  }: ListProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('List', undefined, undefined)

  const renderItems = (items: ListItemData[], level: number) => {
    return (
      <ListContainer>
        {items.map((item) => {
          const { id, items: nestedItems } = item
          const resolvedListItemProps = typeof listItemProps === 'function' ? listItemProps(item) : listItemProps
          const content = renderItem ? renderItem(item) : undefined

          return (
            <ListItem
              key={id}
              id={id}
              nestingLevel={level}
              {...resolvedListItemProps}
              items={nestedItems && nestedItems.length ? renderItems(nestedItems, level + 1) : undefined}
            >
              {content}
            </ListItem>
          )
        })}
      </ListContainer>
    )
  }

  return (
    <ListContext
      items={items}
      selectedItemIds={selectedItemIds}
      selectionMode={selectionMode}
      deselectOnClickOutside={deselectOnClickOutside}
      onItemsChange={onItemsChange}
      onSelectionChange={onSelectionChange}
      onKeyDown={onKeyDown}
    >
      <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
        {renderItems(items, 0)}
      </div>
    </ListContext>
  )
}

export const List = typedForwardRef<ListProps, HTMLDivElement>(ListComponent)
