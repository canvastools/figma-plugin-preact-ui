import { useEffect, useMemo, useRef, useState } from 'preact/hooks'

import {
  bem,
  typedForwardRef,
  colorToHex,
  hexToColor,
  colorToHexAlpha,
  hexAlphaToColor,
  colorToRgba,
  rgbaToColor,
  clamp,
  roundAlpha,
} from '../../utils'

import { Input, Text, Select, ControlGroup, useNumericInput, useStringInput } from '../../index'

import { RgbaColorPicker, RgbColorPicker, HexColorPicker, HexAlphaColorPicker } from 'react-colorful'

import type { ColorPickerProps, Color, ColorPickerType } from './ColorPicker.types'
import './ColorPicker.scss'

/* --- */

const RGBA_VALUES = {
  r: {
    min: 0,
    max: 255,
    defaultValue: 200,
  },
  g: {
    min: 0,
    max: 255,
    defaultValue: 0,
  },
  b: {
    min: 0,
    max: 255,
    defaultValue: 35,
  },
  a: {
    min: 0,
    max: 1,
    defaultValue: 0.5,
  },
}

const HEX_VALUES = {
  v: {
    min: 6,
    max: 6,
    defaultValue: 'FF0000',
  },
  a: {
    min: 0,
    max: 1,
    defaultValue: 0.5,
  },
}

const TYPE_OPTIONS = [
  { value: 'rgba', label: 'RGB' },
  { value: 'hex', label: 'Hex' },
  { value: 'hexAlpha', label: 'Hex alpha' },
]

const resolveVisibleTypes = (allowedTypes: ColorPickerType[], alpha: boolean): ColorPickerType[] => {
  if (alpha) return allowedTypes
  // hexAlpha → hex (preserving position), then deduplicate
  return allowedTypes.map((t) => (t === 'hexAlpha' ? 'hex' : t)).filter((t, i, a) => a.indexOf(t) === i)
}

const resolvePickerType = (pickerType: ColorPickerType, visibleTypes: ColorPickerType[]): ColorPickerType => {
  if (visibleTypes.includes(pickerType)) return pickerType
  if (pickerType === 'hexAlpha' && visibleTypes.includes('hex')) return 'hex'
  return visibleTypes[0]
}

const hexMask = (input: string): string => {
  const cleaned = input
    .toUpperCase()
    .replace(/[^0-9A-F]/g, '0')
    .padEnd(6, '0')
    .slice(0, 6)

  return cleaned
}

const ControlsRgba = ({
  color,
  setColor,
  type,
  setType,
  options,
  selectRef,
  showOpacity = true,
}: {
  color: Color
  setColor: (color: Color) => void
  type: ColorPickerType
  setType: (t: ColorPickerType) => void
  options: { value: string; label: string }[]
  selectRef: preact.RefObject<HTMLDivElement>
  showOpacity?: boolean
}) => {
  const rgba = colorToRgba(color)

  const redValueValidation = useNumericInput({
    value: rgba.r.toString(),
    required: true,
    min: RGBA_VALUES.r.min,
    max: RGBA_VALUES.r.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const greenValueValidation = useNumericInput({
    value: rgba.g.toString(),
    required: true,
    min: RGBA_VALUES.g.min,
    max: RGBA_VALUES.g.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const blueValueValidation = useNumericInput({
    value: rgba.b.toString(),
    required: true,
    min: RGBA_VALUES.b.min,
    max: RGBA_VALUES.b.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const opacityValidation = useNumericInput({
    value: Math.round(rgba.a * 100).toString(),
    required: true,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const [inputRedValue, setInputRedValue] = useState<string>(rgba.r.toString())
  const [inputGreenValue, setInputGreenValue] = useState<string>(rgba.g.toString())
  const [inputBlueValue, setInputBlueValue] = useState<string>(rgba.b.toString())
  const [inputOpacityValue, setInputOpacityValue] = useState<string>(Math.round(rgba.a * 100).toString())

  useEffect(() => {
    const r = colorToRgba(color)
    setInputRedValue(r.r.toString())
    setInputGreenValue(r.g.toString())
    setInputBlueValue(r.b.toString())
    setInputOpacityValue(Math.round(r.a * 100).toString())
  }, [color])

  return (
    <>
      <div style={{ minWidth: '52px' }}>
        <Select
          ref={selectRef}
          options={options}
          value={type}
          onValueChange={(e) => setType(e.value as ColorPickerType)}
          tooltip="Color mode"
          menuContainerProps={{ width: 120 }}
        />
      </div>
      <div className="ColorPicker__controlsValues">
        <ControlGroup groupFocus fullWidth>
          <Input
            className="ColorPicker__inputCompact"
            tooltip="Red"
            value={inputRedValue}
            onValueChange={(e) => setInputRedValue(e.value)}
            onBlur={(e) => {
              const parsed = redValueValidation.parse(e.value)

              if (parsed.error === 'required' || parsed.error === 'invalid_number' || parsed.error === 'not_integer') {
                setColor(rgbaToColor({ r: RGBA_VALUES.r.min, g: rgba.g, b: rgba.b, a: rgba.a }))
                setInputRedValue(String(parsed.formattedValue ?? '0'))
                return
              }

              if (parsed.error === 'less_than_min') {
                setColor(rgbaToColor({ r: RGBA_VALUES.r.min, g: rgba.g, b: rgba.b, a: rgba.a }))
                setInputRedValue(String(parsed.formattedValue ?? '0'))
                return
              }

              if (parsed.error === 'greater_than_max') {
                setColor(rgbaToColor({ r: RGBA_VALUES.r.max, g: rgba.g, b: rgba.b, a: rgba.a }))
                setInputRedValue(String(parsed.formattedValue ?? '0'))
                return
              }

              setColor(rgbaToColor({ r: parsed.normalizedValue ?? 0, g: rgba.g, b: rgba.b, a: rgba.a }))
              setInputRedValue(String(parsed.formattedValue ?? '0'))
            }}
            onKeyDown={(e) =>
              redValueValidation.handleKeyDown(e, (next) => {
                setInputRedValue(String(next))
              })
            }
          />

          <Input
            className="ColorPicker__inputCompact"
            tooltip="Green"
            selectOnFocus={true}
            value={inputGreenValue}
            onValueChange={(e) => setInputGreenValue(e.value)}
            onBlur={(e) => {
              const parsed = greenValueValidation.parse(e.value)

              if (parsed.error === 'required' || parsed.error === 'invalid_number' || parsed.error === 'not_integer') {
                setColor(rgbaToColor({ r: rgba.r, g: RGBA_VALUES.g.min, b: rgba.b, a: rgba.a }))
                setInputGreenValue(String(parsed.formattedValue ?? '0'))
                return
              }

              if (parsed.error === 'less_than_min') {
                setColor(rgbaToColor({ r: rgba.r, g: RGBA_VALUES.g.min, b: rgba.b, a: rgba.a }))
                setInputGreenValue(String(parsed.formattedValue ?? '0'))
                return
              }

              if (parsed.error === 'greater_than_max') {
                setColor(rgbaToColor({ r: rgba.r, g: RGBA_VALUES.g.max, b: rgba.b, a: rgba.a }))
                setInputGreenValue(String(parsed.formattedValue ?? '0'))
                return
              }

              setColor(rgbaToColor({ r: rgba.r, g: parsed.normalizedValue ?? 0, b: rgba.b, a: rgba.a }))
              setInputGreenValue(String(parsed.formattedValue ?? '0'))
            }}
            onKeyDown={(e) =>
              greenValueValidation.handleKeyDown(e, (next) => {
                setInputGreenValue(String(next))
              })
            }
          />

          <Input
            className="ColorPicker__inputCompact"
            tooltip="Blue"
            selectOnFocus={true}
            value={inputBlueValue}
            onValueChange={(e) => setInputBlueValue(e.value)}
            onBlur={(e) => {
              const parsed = blueValueValidation.parse(e.value)

              if (parsed.error === 'required' || parsed.error === 'invalid_number' || parsed.error === 'not_integer') {
                setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: RGBA_VALUES.b.min, a: rgba.a }))
                setInputBlueValue(String(parsed.formattedValue ?? '0'))
                return
              }

              if (parsed.error === 'less_than_min') {
                setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: RGBA_VALUES.b.min, a: rgba.a }))
                setInputBlueValue(String(parsed.formattedValue ?? '0'))
                return
              }

              if (parsed.error === 'greater_than_max') {
                setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: RGBA_VALUES.b.max, a: rgba.a }))
                setInputBlueValue(String(parsed.formattedValue ?? '0'))
                return
              }

              setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: parsed.normalizedValue ?? 0, a: rgba.a }))
              setInputBlueValue(String(parsed.formattedValue ?? '0'))
            }}
            onKeyDown={(e) =>
              blueValueValidation.handleKeyDown(e, (next) => {
                setInputBlueValue(String(next))
              })
            }
          />

          {showOpacity && (
            <Input
              className="ColorPicker__controlOpacity"
              tooltip="Opacity"
              selectOnFocus={true}
              value={inputOpacityValue}
              suffix={
                <Text intentModifier="secondary">
                  <div className="ColorPicker__controlOpacityContainer">%</div>
                </Text>
              }
              onValueChange={(e) => setInputOpacityValue(e.value)}
              onBlur={(e) => {
                const parsed = opacityValidation.parse(e.value)

                if (parsed.error === 'required' || parsed.error === 'invalid_number' || parsed.error === 'not_integer') {
                  setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: rgba.b, a: RGBA_VALUES.a.min }))
                  setInputOpacityValue(String(parsed.formattedValue ?? '0'))
                  return
                }

                if (parsed.error === 'less_than_min') {
                  setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: rgba.b, a: RGBA_VALUES.a.min }))
                  setInputOpacityValue(String(parsed.formattedValue ?? '0'))
                  return
                }

                if (parsed.error === 'greater_than_max') {
                  setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: rgba.b, a: RGBA_VALUES.a.max }))
                  setInputOpacityValue(String(parsed.formattedValue ?? '0'))
                  return
                }

                const percent = parsed.normalizedValue ?? 0
                const fraction = roundAlpha(clamp(percent / 100, RGBA_VALUES.a.min, RGBA_VALUES.a.max))

                setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: rgba.b, a: fraction }))
                setInputOpacityValue(String(parsed.formattedValue ?? '0'))
              }}
              onKeyDown={(e) =>
                opacityValidation.handleKeyDown(e, (next) => {
                  setInputOpacityValue(String(next))
                  if (typeof next !== 'number') return
                  const fraction = roundAlpha(clamp(next / 100, RGBA_VALUES.a.min, RGBA_VALUES.a.max))
                  setColor(rgbaToColor({ r: rgba.r, g: rgba.g, b: rgba.b, a: fraction }))
                })
              }
            />
          )}
        </ControlGroup>
      </div>
    </>
  )
}

const ControlsHex = ({
  color,
  setColor,
  type,
  setType,
  options,
  selectRef,
}: {
  color: Color
  setColor: (color: Color) => void
  type: ColorPickerType
  setType: (t: ColorPickerType) => void
  options: { value: string; label: string }[]
  selectRef: preact.RefObject<HTMLDivElement>
}) => {
  const [hexValue, setHexValue] = useState<string>(colorToHex(color).slice(1))

  useEffect(() => {
    setHexValue(colorToHex(color).slice(1))
  }, [color])

  const hexValueValidation = useStringInput({
    value: colorToHex(color).slice(1),
    required: true,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: '0123456789abcdefABCDEF',
    trim: true,
    format: hexMask,
    normalizeOnError: true,
  })

  return (
    <>
      <div style={{ minWidth: '52px' }}>
        <Select
          ref={selectRef}
          options={options}
          value={type}
          onValueChange={(e) => setType(e.value as ColorPickerType)}
          tooltip="Color mode"
          menuContainerProps={{ width: 120 }}
        />
      </div>
      <div className="ColorPicker__controlsValues">
        <Input
          tooltip="Hex value"
          selectOnFocus={true}
          value={hexValue.toUpperCase()}
          onValueChange={(e) => setHexValue(e.value)}
          onBlur={(e) => {
            const parsed = hexValueValidation.parse(e.value)

            const rgb = hexToColor(parsed.formattedValue as string, color.a)
            if (rgb) setColor({ ...color, ...rgb })
            setHexValue(parsed.formattedValue as string)
          }}
        />
      </div>
    </>
  )
}

const ControlsHexAlpha = ({
  color,
  setColor,
  type,
  setType,
  options,
  selectRef,
}: {
  color: Color
  setColor: (color: Color) => void
  type: ColorPickerType
  setType: (t: ColorPickerType) => void
  options: { value: string; label: string }[]
  selectRef: preact.RefObject<HTMLDivElement>
}) => {
  const [hexValue, setHexValue] = useState<string>(colorToHex(color).slice(1))

  useEffect(() => {
    setHexValue(colorToHex(color).slice(1))
  }, [color])

  const hexValueValidation = useStringInput({
    value: colorToHex(color).slice(1),
    required: true,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: '0123456789abcdefABCDEF',
    trim: true,
    format: hexMask,
    normalizeOnError: true,
  })

  const hexOpacityValidation = useNumericInput({
    // Work in 0–100% space for the UI, map back to 0–1 alpha in handlers
    value: Math.round(color.a * 100).toString(),
    required: true,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const [hexOpacityValue, setHexOpacityValue] = useState<string>(Math.round(color.a * 100).toString())

  useEffect(() => {
    setHexOpacityValue(Math.round(color.a * 100).toString())
  }, [color.a])

  return (
    <>
      <div style={{ minWidth: '52px' }}>
        <Select
          ref={selectRef}
          options={options}
          value={type}
          onValueChange={(e) => setType(e.value as ColorPickerType)}
          tooltip="Color mode"
          menuContainerProps={{ width: 120 }}
        />
      </div>
      <div className="ColorPicker__controlsValues">
        <ControlGroup groupFocus fullWidth>
          <Input
            tooltip="Hex value"
            selectOnFocus={true}
            value={hexValue.toUpperCase()}
            onValueChange={(e) => setHexValue(e.value)}
            onBlur={(e) => {
              const parsed = hexValueValidation.parse(e.value)

              const rgb = hexToColor(parsed.formattedValue as string, color.a)
              if (rgb) setColor({ ...color, ...rgb })
              setHexValue(parsed.formattedValue as string)
            }}
          />

          <Input
            tooltip="Opacity"
            selectOnFocus={true}
            className="ColorPicker__controlOpacity"
            value={hexOpacityValue}
            suffix={
              <Text intentModifier="secondary">
                <div className="ColorPicker__controlOpacityContainer">%</div>
              </Text>
            }
            onValueChange={(e) => {
              setHexOpacityValue(e.value)
            }}
            onBlur={(e) => {
              const parsed = hexOpacityValidation.parse(e.value)

              if (parsed.error === 'required' || parsed.error === 'invalid_number' || parsed.error === 'not_integer') {
                setColor({ ...color, a: HEX_VALUES.a.min })
                setHexOpacityValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === 'less_than_min') {
                setColor({ ...color, a: HEX_VALUES.a.min })
                setHexOpacityValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === 'greater_than_max') {
                setColor({ ...color, a: HEX_VALUES.a.max })
                setHexOpacityValue(String(parsed.formattedValue))
                return
              }

              const percent = parsed.normalizedValue ?? 0
              const fraction = roundAlpha(clamp(percent / 100, HEX_VALUES.a.min, HEX_VALUES.a.max))
              setColor({ ...color, a: fraction })
              setHexOpacityValue(String(parsed.formattedValue))
            }}
            onKeyDown={(e) =>
              hexOpacityValidation.handleKeyDown(e, (next) => {
                setHexOpacityValue(String(next))
                if (typeof next !== 'number') return
                const fraction = roundAlpha(clamp(next / 100, HEX_VALUES.a.min, HEX_VALUES.a.max))
                setColor({ ...color, a: fraction })
              })
            }
          />
        </ControlGroup>
      </div>
    </>
  )
}

const ColorPickerComponent = (
  {
    id,
    className,
    defaultType = 'hex',
    type,
    defaultColor,
    types,
    color,
    showControls = true,
    alpha = true,
    width = 207,
    fullWidth = false,
    onTypeChange,
    onColorChange,
    tabIndex,
    ...rest
  }: ColorPickerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const [internalColor, setInternalColor] = useState<Color>(() => {
    if (color) return color
    if (defaultColor) return defaultColor
    return { r: 1, g: 0, b: 0, a: 1 }
  })

  const lastEmittedColorRef = useRef<Color | null>(null)

  // Keep internal color in sync when used in controlled state
  useEffect(() => {
    if (color) {
      const normalized: Color = {
        ...color,
        a: roundAlpha(clamp(color.a, 0, 1)),
      }
      setInternalColor(normalized)
      lastEmittedColorRef.current = normalized
    }
  }, [color])

  // compute allowed types list
  const allowedTypes: ColorPickerType[] = useMemo(
    () => (types && types.length ? (types as ColorPickerType[]) : (['hex', 'hexAlpha', 'rgba'] as ColorPickerType[])),
    [types],
  )

  const visibleTypes: ColorPickerType[] = useMemo(
    () => resolveVisibleTypes(allowedTypes, alpha),
    [allowedTypes, alpha],
  )

  // Picker type state:
  // - uncontrolled by default, initialised from `defaultType`
  // - when `type` is provided, it acts as a controlled override
  const [internalType, setInternalType] = useState<ColorPickerType>(() =>
    resolvePickerType(defaultType as ColorPickerType, resolveVisibleTypes(allowedTypes, alpha)),
  )

  useEffect(() => {
    if (type) {
      setInternalType(type as ColorPickerType)
    }
  }, [type])

  const visibleTypesKey = useMemo(() => (visibleTypes && visibleTypes.length ? visibleTypes.join('|') : ''), [visibleTypes])

  useEffect(() => {
    // In controlled state (`type` provided), `defaultType` should not
    // override the externally controlled value.
    if (type) {
      return
    }

    const nextType = resolvePickerType(defaultType as ColorPickerType, visibleTypes)
    setInternalType(nextType)
  }, [defaultType, visibleTypesKey, visibleTypes, type])

  useEffect(() => {
    if (type || visibleTypes.includes(internalType)) return

    const nextType = resolvePickerType(internalType, visibleTypes)
    if (nextType !== internalType) {
      setInternalType(nextType)
      onTypeChange?.({ type: nextType })
    }
  }, [internalType, visibleTypes, type, onTypeChange])

  const currentType: ColorPickerType = resolvePickerType(internalType, visibleTypes)

  const handleTypeChange = (nextType: ColorPickerType) => {
    if (nextType === internalType) return
    setInternalType(nextType)
    onTypeChange?.({ type: nextType })
  }

  const modeSelectRef = useRef<HTMLDivElement | null>(null)

  // Track whether the last interaction that may have triggered a type change
  // was done via keyboard or mouse. Capture handlers on the root element
  // update this flag, and we only auto-focus the mode select when it was
  // changed via keyboard.
  const lastInteractionWasKeyboardRef = useRef(false)

  // --- High-frequency update scheduler (one update per frame) ---
  const pendingColorRef = useRef<Color | null>(null)
  const rafIdRef = useRef<number | null>(null)

  const areColorsEqual = (a: Color, b: Color) => a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a

  const flushPendingColor = () => {
    const next = pendingColorRef.current
    pendingColorRef.current = null
    rafIdRef.current = null
    if (!next) return

    const normalized: Color = {
      ...next,
      a: roundAlpha(clamp(next.a, 0, 1)),
    }

    const prevEmitted = lastEmittedColorRef.current
    if (prevEmitted !== null && areColorsEqual(normalized, prevEmitted)) {
      return
    }

    lastEmittedColorRef.current = normalized
    setInternalColor(normalized)

    onColorChange?.({
      color: normalized,
      hex: colorToHex(normalized),
      opacity: normalized.a,
    })
  }

  const scheduleNextColor = (next: Color) => {
    pendingColorRef.current = next
    if (rafIdRef.current == null) {
      rafIdRef.current = window.requestAnimationFrame(flushPendingColor)
    }
  }

  useEffect(() => {
    return () => {
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
      pendingColorRef.current = null
    }
  }, [])

  const _className = bem('ColorPicker', undefined, {
    type: currentType,
    controls: showControls,
    fullWidth: Boolean(fullWidth),
  })

  const handleInteractionKeyDownCapture = (event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    // Any key press counts as keyboard interaction; a subsequent mouse
    // interaction will overwrite this flag.
    if (event.key) {
      lastInteractionWasKeyboardRef.current = true
    }
  }

  const handleInteractionMouseDownCapture = () => {
    lastInteractionWasKeyboardRef.current = false
  }

  useEffect(() => {
    if (!showControls || !modeSelectRef.current) return

    if (lastInteractionWasKeyboardRef.current) {
      modeSelectRef.current.focus()
      // Reset so programmatic or mouse-driven changes don't refocus unless
      // there is another keyboard interaction.
      lastInteractionWasKeyboardRef.current = false
    }
  }, [currentType, showControls])

  // Build Select options based on allowed types and rename hexAlpha to "Hex"
  // when hex is not available but hexAlpha is.
  const baseOptions = TYPE_OPTIONS.filter((o) => visibleTypes.includes(o.value as ColorPickerType))

  const computedOptions =
    !visibleTypes.includes('hex' as ColorPickerType) && visibleTypes.includes('hexAlpha' as ColorPickerType)
      ? baseOptions.map((o) => (o.value === 'hexAlpha' ? { ...o, label: 'Hex' } : o))
      : baseOptions

  const handleKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    const key = event.key

    if (key === 'Escape' || key === 'Esc') {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      if (target && typeof target.blur === 'function') {
        target.blur()
      }
    }
  }

  return (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      data-pui-interactive="true"
      ref={ref}
      onKeyDownCapture={handleInteractionKeyDownCapture}
      onMouseDownCapture={handleInteractionMouseDownCapture}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      {...rest}
      style={{
        width: fullWidth ? undefined : (width as number),
      }}
    >
      {currentType === 'hex' && (
        <HexColorPicker
          color={colorToHex(internalColor)}
          onChange={(hex) => {
            const nextColor = hexToColor(hex, internalColor.a)
            if (nextColor) {
              scheduleNextColor(nextColor)
            }
          }}
        />
      )}
      {currentType === 'hexAlpha' && (
        <HexAlphaColorPicker
          color={colorToHexAlpha(internalColor)}
          onChange={(hex8) => {
            const nextColor = hexAlphaToColor(hex8)
            if (nextColor) {
              scheduleNextColor(nextColor)
            }
          }}
        />
      )}
      {currentType === 'rgba' && alpha && (
        <RgbaColorPicker
          color={colorToRgba(internalColor)}
          onChange={(e) => {
            scheduleNextColor(rgbaToColor(e))
          }}
        />
      )}
      {currentType === 'rgba' && !alpha && (
        <RgbColorPicker
          color={colorToRgba(internalColor)}
          onChange={(rgb) => {
            scheduleNextColor(rgbaToColor({ ...rgb, a: internalColor.a }))
          }}
        />
      )}
      {showControls && (
        <div className="ColorPicker__controls">
          {currentType === 'hex' && (
            <ControlsHex
              color={internalColor}
              setColor={(color) => scheduleNextColor(color)}
              type={currentType as ColorPickerType}
              setType={handleTypeChange}
              options={computedOptions}
              selectRef={modeSelectRef}
            />
          )}
          {currentType === 'hexAlpha' && (
            <ControlsHexAlpha
              color={internalColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={handleTypeChange}
              options={computedOptions}
              selectRef={modeSelectRef}
            />
          )}
          {currentType === 'rgba' && (
            <ControlsRgba
              color={internalColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={handleTypeChange}
              options={computedOptions}
              selectRef={modeSelectRef}
              showOpacity={alpha}
            />
          )}
        </div>
      )}
    </div>
  )
}

export const ColorPicker = typedForwardRef<ColorPickerProps, HTMLDivElement>(ColorPickerComponent)
