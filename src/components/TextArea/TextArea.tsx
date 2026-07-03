import { Fragment } from 'preact'
import { useEffect, useLayoutEffect, useRef, useState, useImperativeHandle } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import { Tooltip } from '../Tooltip/Tooltip'
import { Text } from '../Text/Text'

import type { TextAreaProps } from './TextArea.types'
import './TextArea.scss'

const DEFAULT_CONTAINER_MIN_PX = 24

function clampResizeHeight(px: number, minPx: number, maxPx: number) {
  return Math.min(maxPx, Math.max(minPx, Math.round(px)))
}

function readHeightBoundsFromEl(el: HTMLElement) {
  const cs = getComputedStyle(el)
  const minH = parseFloat(cs.minHeight)
  const minPx = Number.isFinite(minH) && minH > 0 ? minH : DEFAULT_CONTAINER_MIN_PX
  const maxH = parseFloat(cs.maxHeight)
  const maxPx = Number.isFinite(maxH) ? Math.max(minPx, maxH) : Number.MAX_SAFE_INTEGER
  return { minPx, maxPx }
}

/* --- */

const TextAreaComponent = (
  {
    id,
    className,
    variant = 'default',
    label,
    placeholder,
    value,
    defaultValue,
    error = false,
    disabled = false,
    minLength = 0,
    maxLength,
    tooltip,
    autoFocus = false,
    selectOnFocus = false,
    maxWidth,
    minHeight,
    maxHeight,
    resize,
    onValueChange,
    onBlur,
    onFocus,
    onKeyDown,
    tabIndex,
    ...rest
  }: TextAreaProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const isControlled = value !== undefined

  const [internalValue, setInternalValue] = useState<string>(() => defaultValue ?? '')
  const [isFocused, setIsFocused] = useState(false)
  const [hasContent, setHasContent] = useState<boolean>(Boolean(value ?? internalValue ?? ''))

  const [containerHeightPx, setContainerHeightPx] = useState<number>(DEFAULT_CONTAINER_MIN_PX)

  const rootRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const resizeListenersRef = useRef<{ move: (e: PointerEvent) => void; up: (e: PointerEvent) => void } | null>(null)

  // Remove window resize-drag listeners if the component unmounts mid-drag.
  useEffect(() => {
    return () => {
      const d = resizeListenersRef.current
      if (d) {
        window.removeEventListener('pointermove', d.move)
        window.removeEventListener('pointerup', d.up)
        window.removeEventListener('pointercancel', d.up)
        resizeListenersRef.current = null
      }
    }
  }, [])

  // Expose the root wrapper element to consumers (stable anchor for tooltips)
  useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

  const displayedValue = isControlled ? value ?? '' : internalValue
  const autoGrow = resize !== 'y'

  useLayoutEffect(() => {
    if (resize !== 'y' || !containerRef.current) return
    const { minPx, maxPx } = readHeightBoundsFromEl(containerRef.current)
    setContainerHeightPx((h) => clampResizeHeight(h, minPx, maxPx))
  }, [resize, minHeight, maxHeight])

  useLayoutEffect(() => {
    const ta = textareaRef.current
    const container = containerRef.current
    if (!ta || !container) return

    if (resize === 'y') {
      ta.style.removeProperty('height')
      return
    }

    ta.style.height = '0px'
    const { minPx, maxPx } = readHeightBoundsFromEl(container)
    const next = clampResizeHeight(ta.scrollHeight, minPx, maxPx)
    ta.style.height = `${next}px`
  }, [resize, maxHeight, minHeight, displayedValue])

  useEffect(() => {
    if (!autoFocus) return
    const timeoutId = window.setTimeout(() => {
      textareaRef.current?.focus()
    }, 25)
    return () => clearTimeout(timeoutId)
  }, [autoFocus])

  useEffect(() => {
    if (isControlled && value !== undefined) {
      setHasContent(value.length > 0)
    }
  }, [isControlled, value])

  const _className = bem('TextArea', undefined, {
    filled: hasContent,
    disabled,
    variant,
    label: Boolean(label),
    focused: isFocused,
    error,
    resizeY: resize === 'y',
    autoGrow,
  })

  const handleResizePointerDown = (event: preact.JSX.TargetedPointerEvent<HTMLDivElement>) => {
    if (disabled || resize !== 'y' || !containerRef.current) return
    event.preventDefault()
    event.stopPropagation()

    const container = containerRef.current
    const handleEl = event.currentTarget
    const startY = event.clientY
    const startH = container.getBoundingClientRect().height
    const { minPx, maxPx } = readHeightBoundsFromEl(container)

    handleEl.setPointerCapture(event.pointerId)

    const onMove = (ev: PointerEvent) => {
      const next = startH + (ev.clientY - startY)
      setContainerHeightPx(clampResizeHeight(next, minPx, maxPx))
    }

    const onUp = (_ev: PointerEvent) => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      resizeListenersRef.current = null
      try {
        handleEl.releasePointerCapture(_ev.pointerId)
      } catch {
        /* released */
      }
    }

    resizeListenersRef.current = { move: onMove, up: onUp }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
  }

  const handleInput = (event: preact.JSX.TargetedEvent<HTMLTextAreaElement, Event>) => {
    event.stopPropagation()
    const nextValue = event.currentTarget.value
    if (!isControlled) {
      setInternalValue(nextValue)
    }
    setHasContent(nextValue.length > 0)
    onValueChange?.({
      event: event as Event,
      value: nextValue,
    })
  }

  const handleBlur = (event: preact.JSX.TargetedFocusEvent<HTMLTextAreaElement>) => {
    event.stopPropagation()
    setIsFocused(false)
    setHasContent(event.currentTarget.value.length > 0)
    onBlur?.({
      event: event as FocusEvent,
      value: event.currentTarget.value,
    })
  }

  const handleFocus = (event: preact.JSX.TargetedFocusEvent<HTMLTextAreaElement>) => {
    event.stopPropagation()
    setIsFocused(true)
    if (selectOnFocus) {
      // setTimeout to survive the trailing mouseup that would otherwise collapse the selection on click
      const el = event.currentTarget
      setTimeout(() => el.select(), 0)
    }
    onFocus?.({
      event: event as FocusEvent,
      value: event.currentTarget.value,
    })
  }

  const handleKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLTextAreaElement>) => {
    event.stopPropagation()
    onKeyDown?.({
      event: event as KeyboardEvent,
      value: event.currentTarget.value,
    })

    if (event.key === 'Escape' || event.key === 'Esc') {
      event.currentTarget.blur()
    }
  }

  const handleClick = (event: preact.JSX.TargetedMouseEvent<HTMLTextAreaElement>) => {
    event.stopPropagation()
  }

  const containerStyle: preact.JSX.CSSProperties = {
    maxWidth: variant === 'default' ? undefined : typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    flexShrink: maxWidth ? 0 : undefined,
    minHeight:
      minHeight !== undefined
        ? typeof minHeight === 'number'
          ? `${minHeight}px`
          : minHeight
        : resize === 'y'
        ? `${DEFAULT_CONTAINER_MIN_PX}px`
        : undefined,
    maxHeight: maxHeight !== undefined ? (typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight) : undefined,
    height: resize === 'y' ? `${containerHeightPx}px` : undefined,
  }

  return (
    <Fragment>
      <div
        id={id}
        className={[_className, className].join(' ').trim()}
        data-pui-interactive="true"
        ref={rootRef as preact.Ref<HTMLDivElement>}
        {...rest}
      >
        {label && (
          <Text className="TextArea__label" intentModifier="secondary" size={variant === 'list' ? 'medium' : 'small'} truncate>
            {label}
          </Text>
        )}
        <div className="TextArea__container" style={containerStyle} ref={containerRef}>
          <textarea
            className="TextArea__textarea-native"
            rows={1}
            ref={(el) => {
              textareaRef.current = el
            }}
            minLength={minLength}
            maxLength={maxLength}
            disabled={disabled}
            {...(tabIndex !== undefined ? { tabIndex } : {})}
            placeholder={placeholder}
            value={displayedValue}
            // onInput fires per keystroke in plain Preact; onChange would only
            // work through preact/compat's global vnode patch.
            onInput={handleInput}
            onClick={handleClick}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
          />
          {resize === 'y' && !disabled && (
            <div className="TextArea__resizeHandle" data-pui-interactive="true" onPointerDown={handleResizePointerDown} />
          )}
        </div>
      </div>
      {tooltip && <Tooltip anchorRef={rootRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const TextArea = typedForwardRef<TextAreaProps, HTMLDivElement>(TextAreaComponent)
