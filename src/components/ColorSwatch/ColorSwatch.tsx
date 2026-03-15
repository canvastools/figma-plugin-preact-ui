import { useRef } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import { Tooltip } from '../../index'
import { colorToHex, colorToHexAlpha } from '../../index'

import type { ColorSwatchProps } from './ColorSwatch.types'
import './ColorSwatch.scss'

/* --- */

const hasOpacity = (color: ColorSwatchProps['color']) => {
  if (!color) return false
  return color.a < 1
}

const ColorSwatchComponent = (
  {
    id,
    className,
    size = 'medium',
    color,
    disabled = false,
    selected = false,
    selection = 'default',
    tooltip,
    children,
    onClick,
    ...rest
  }: ColorSwatchProps,
  ref: preact.Ref<HTMLDivElement | HTMLButtonElement>,
) => {
  const anchorRef = useRef<HTMLElement | null>(null)

  const _className = bem('ColorSwatch', undefined, {
    selection: selection,
    value: !!color,
    size,
    disabled,
    selected,
  })

  const handleKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (disabled) return
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.currentTarget.blur()
    }
  }

  return (
    <button
      id={id}
      className={[_className, className].join(' ').trim()}
      data-pui-interactive="true"
      ref={(el) => {
        if (typeof ref === 'function') {
          ref(el)
        } else if (ref) {
          // eslint-disable-next-line
          ;(ref as preact.RefObject<HTMLElement>).current = el as HTMLElement
        }
        anchorRef.current = el
      }}
      disabled={disabled}
      onClick={(event) => {
        if (disabled) return
        onClick?.({ event, color })
      }}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div className="ColorSwatch__container">
        {color && hasOpacity(color) && (
          <>
            <div className="ColorSwatch__fill" style={{ backgroundColor: colorToHex(color) }} />
            <div className="ColorSwatch__fill" style={{ backgroundColor: colorToHexAlpha(color) }} />
          </>
        )}

        {color && !hasOpacity(color) && <div className="ColorSwatch__fill" style={{ backgroundColor: colorToHex(color) }} />}

        {children && <div className="ColorSwatch__children">{children}</div>}
      </div>

      {tooltip && <Tooltip anchorRef={anchorRef}>{tooltip}</Tooltip>}
    </button>
  )
}

export const ColorSwatch = typedForwardRef<ColorSwatchProps, HTMLDivElement | HTMLButtonElement>(ColorSwatchComponent)
