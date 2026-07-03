import { useRef } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import { Tooltip } from '../Tooltip/Tooltip'
import { colorToHex, colorToHexAlpha } from '../../utils'

import type { Color } from '../ColorPicker/ColorPicker.types'
import type { ColorSwatchProps, GradientPaint, ColorStop } from './ColorSwatch.types'
import './ColorSwatch.scss'

/* --- */

const isGradient = (fill: Color | GradientPaint): fill is GradientPaint => {
  return 'gradientStops' in fill
}

const hasOpacity = (fill: Color) => {
  return fill.a < 1
}

const stopToCSS = (stop: ColorStop, opaque = false) => {
  const { r, g, b, a } = stop.color
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${opaque ? 1 : a}) ${
    stop.position * 100
  }%`
}

const gradientToCSS = (gradient: GradientPaint, opaque = false): string => {
  const stops = gradient.gradientStops.map((s) => stopToCSS(s, opaque)).join(', ')
  const [start, end] = gradient.gradientHandlePositions

  switch (gradient.type) {
    case 'gradient-linear': {
      const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI) + 90
      return `linear-gradient(${angle}deg, ${stops})`
    }

    case 'gradient-radial':
      return `radial-gradient(circle at ${start.x * 100}% ${start.y * 100}%, ${stops})`

    case 'gradient-angular': {
      const fromAngle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI) + 90
      return `conic-gradient(from ${fromAngle}deg at ${start.x * 100}% ${start.y * 100}%, ${stops})`
    }
  }
}

const getFillStyles = (fill: Color | GradientPaint, alpha = true): preact.JSX.CSSProperties[] => {
  if (isGradient(fill)) {
    return [{ background: gradientToCSS(fill) }]
  }

  if (alpha && hasOpacity(fill)) {
    return [{ backgroundColor: colorToHex(fill) }, { backgroundColor: colorToHexAlpha(fill) }]
  }

  return [{ backgroundColor: colorToHexAlpha(fill) }]
}

const ColorSwatchComponent = (
  {
    id,
    className,
    size = 'medium',
    fill,
    alpha = true,
    disabled = false,
    selected = false,
    selection = 'default',
    tooltip,
    children,
    tabIndex,
    onClick,
    ...rest
  }: ColorSwatchProps,
  ref: preact.Ref<HTMLDivElement | HTMLButtonElement>,
) => {
  const anchorRef = useRef<HTMLElement | null>(null)

  const isArray = Array.isArray(fill)
  const hasFill = isArray ? fill.length > 0 : fill !== undefined

  const _className = bem('ColorSwatch', undefined, {
    selection: selection,
    value: hasFill,
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

  const {
    onClick: nativeOnClick,
    onKeyDown: nativeOnKeyDown,
    ...buttonRest
  } = rest as preact.JSX.HTMLAttributes<HTMLButtonElement>

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
      {...buttonRest}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : tabIndex}
      onClick={(event) => {
        if (disabled) return
        nativeOnClick?.(event)
        onClick?.({ event, fill })
      }}
      onKeyDown={(event) => {
        handleKeyDown(event)
        nativeOnKeyDown?.(event)
      }}
    >
      <div className="ColorSwatch__container">
        {isArray
          ? fill.map((f, i) => (
              <div key={i} className="ColorSwatch__layer">
                {getFillStyles(f, alpha).map((style, j) => (
                  <div key={j} className="ColorSwatch__fill" style={style} />
                ))}
              </div>
            ))
          : fill && getFillStyles(fill, alpha).map((style, i) => <div key={i} className="ColorSwatch__fill" style={style} />)}

        {children && <div className="ColorSwatch__children">{children}</div>}
      </div>

      {tooltip && <Tooltip anchorRef={anchorRef}>{tooltip}</Tooltip>}
    </button>
  )
}

export const ColorSwatch = typedForwardRef<ColorSwatchProps, HTMLDivElement | HTMLButtonElement>(ColorSwatchComponent)
