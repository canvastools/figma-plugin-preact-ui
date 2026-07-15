import { useEffect, useState } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import { Icon } from '../Icon/Icon'
import { Section } from '../Section/Section'
import { chevronDown, chevronRight } from '../Icon/glyphs'

import type { SectionCollapsibleProps } from './SectionCollapsible.types'
import './SectionCollapsible.scss'

/* --- */

const SectionCollapsibleComponent = (
  { id, className, collapsed, onCollapsedChange, sectionProps, children, tabIndex, ...rest }: SectionCollapsibleProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const isCollapsedControlled = collapsed !== undefined
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(collapsed ?? true)

  useEffect(() => {
    if (isCollapsedControlled) setInternalCollapsed(Boolean(collapsed))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed])

  const effectiveCollapsed = isCollapsedControlled ? Boolean(collapsed) : internalCollapsed

  const _className = bem('SectionCollapsible', undefined, {
    collapsed: effectiveCollapsed,
  })

  const toggle = (event: MouseEvent | KeyboardEvent) => {
    const nextCollapsed = !effectiveCollapsed

    if (!isCollapsedControlled) {
      setInternalCollapsed(nextCollapsed)
    }

    onCollapsedChange?.({ event, collapsed: nextCollapsed })
  }

  const handleClick = (event: MouseEvent) => {
    toggle(event)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event

    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
      event.preventDefault()
      event.stopPropagation()
      toggle(event)
    }
  }

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div
        className="SectionCollapsible__trigger"
        data-pui-interactive="true"
        role="button"
        aria-expanded={!effectiveCollapsed}
        tabIndex={tabIndex ?? 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <div className="SectionCollapsible__trigger-icon">
          <Icon
            glyph={effectiveCollapsed ? chevronRight : chevronDown}
            size={16}
            intentModifier="secondary"
            variant="downscaled"
          />
        </div>
        <Section {...sectionProps} />
      </div>
      {!effectiveCollapsed && children != null && children !== false && children !== true && (
        <div className="SectionCollapsible__content">{children}</div>
      )}
    </div>
  )
}

export const SectionCollapsible = typedForwardRef<SectionCollapsibleProps, HTMLDivElement>(SectionCollapsibleComponent)
