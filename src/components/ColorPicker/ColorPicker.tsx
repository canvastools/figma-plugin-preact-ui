import { useEffect, useMemo, useRef, useState } from "preact/hooks"

import {
  bem,
  typedForwardRef,
  colorToHex,
  hexToColor,
  colorToHexAlpha,
  hexAlphaToColor,
  clamp,
  roundAlpha,
} from "../../utils"

import {
  RgbaColorPicker,
  HexColorPicker,
  HexAlphaColorPicker,
} from "react-colorful"

import type {
  ColorPickerProps,
  Color,
  ColorPickerType,
} from "./ColorPicker.types"
import "./ColorPicker.scss"

import {
  Input,
  Text,
  Select,
  ControlGroup,
  useNumericInput,
  useStringInput,
} from "../../index"

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
    defaultValue: "FF0000",
  },
  a: {
    min: 0,
    max: 1,
    defaultValue: 0.5,
  },
}

const TYPE_OPTIONS = [
  { value: "rgba", label: "RGB" },
  { value: "hex", label: "Hex" },
  { value: "hexAlpha", label: "Hex alpha" },
]

const hexMask = (input: string): string => {
  const cleaned = input
    .toUpperCase()
    .replace(/[^0-9A-F]/g, "0")
    .padEnd(6, "0")
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
}: {
  color: Color
  setColor: (color: Color) => void
  type: ColorPickerType
  setType: (t: ColorPickerType) => void
  options: { value: string; label: string }[]
  selectRef: preact.RefObject<HTMLDivElement>
}) => {
  const redValueValidation = useNumericInput({
    value: color.r.toString(),
    required: true,
    min: RGBA_VALUES.r.min,
    max: RGBA_VALUES.r.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const greenValueValidation = useNumericInput({
    value: color.g.toString(),
    required: true,
    min: RGBA_VALUES.g.min,
    max: RGBA_VALUES.g.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const blueValueValidation = useNumericInput({
    value: color.b.toString(),
    required: true,
    min: RGBA_VALUES.b.min,
    max: RGBA_VALUES.b.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const opacityValidation = useNumericInput({
    value: Math.round(color.a * 100).toString(),
    required: true,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const [inputRedValue, setInputRedValue] = useState<string>(color.r.toString())
  const [inputGreenValue, setInputGreenValue] = useState<string>(
    color.g.toString()
  )
  const [inputBlueValue, setInputBlueValue] = useState<string>(
    color.b.toString()
  )
  const [inputOpacityValue, setInputOpacityValue] = useState<string>(
    Math.round(color.a * 100).toString()
  )

  useEffect(() => {
    setInputRedValue(color.r.toString())
    setInputGreenValue(color.g.toString())
    setInputBlueValue(color.b.toString())
    setInputOpacityValue(Math.round(color.a * 100).toString())
  }, [color])

  return (
    <>
      <div style={{ minWidth: "52px" }}>
        <Select
          ref={selectRef}
          options={options}
          value={type}
          onChange={(e) => setType(e.value as ColorPickerType)}
          tooltip="Color mode"
          menuWidth={160}
        />
      </div>
      <div className="ColorPicker__controlsValues">
        <ControlGroup groupFocus>
          <Input
            className="ColorPicker__inputCompact"
            tooltip="Red"
            value={inputRedValue}
            onValueChange={(e) => setInputRedValue(e.value)}
            onBlur={(e) => {
              const parsed = redValueValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, r: RGBA_VALUES.r.min })
                setInputRedValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, r: RGBA_VALUES.r.min })
                setInputRedValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, r: RGBA_VALUES.r.max })
                setInputRedValue(String(parsed.formattedValue ?? "0"))
                return
              }

              setColor({ ...color, r: parsed.normalizedValue ?? 0 })
              setInputRedValue(String(parsed.formattedValue ?? "0"))
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
            value={inputGreenValue}
            onValueChange={(e) => setInputGreenValue(e.value)}
            onBlur={(e) => {
              const parsed = greenValueValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, g: RGBA_VALUES.g.min })
                setInputGreenValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, g: RGBA_VALUES.g.min })
                setInputGreenValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, g: RGBA_VALUES.g.max })
                setInputGreenValue(String(parsed.formattedValue ?? "0"))
                return
              }

              setColor({ ...color, g: parsed.normalizedValue ?? 0 })
              setInputGreenValue(String(parsed.formattedValue ?? "0"))
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
            value={inputBlueValue}
            onValueChange={(e) => setInputBlueValue(e.value)}
            onBlur={(e) => {
              const parsed = blueValueValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, b: RGBA_VALUES.b.min })
                setInputBlueValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, b: RGBA_VALUES.b.min })
                setInputBlueValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, b: RGBA_VALUES.b.max })
                setInputBlueValue(String(parsed.formattedValue ?? "0"))
                return
              }

              setColor({ ...color, b: parsed.normalizedValue ?? 0 })
              setInputBlueValue(String(parsed.formattedValue ?? "0"))
            }}
            onKeyDown={(e) =>
              blueValueValidation.handleKeyDown(e, (next) => {
                setInputBlueValue(String(next))
              })
            }
          />

          <Input
            className="ColorPicker__controlOpacity"
            tooltip="Opacity"
            value={inputOpacityValue}
            suffix={
              <Text intentModifier="secondary">
                <div className="ColorPicker__controlOpacityContainer">%</div>
              </Text>
            }
            onValueChange={(e) => setInputOpacityValue(e.value)}
            onBlur={(e) => {
              const parsed = opacityValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, a: RGBA_VALUES.a.min })
                setInputOpacityValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, a: RGBA_VALUES.a.min })
                setInputOpacityValue(String(parsed.formattedValue ?? "0"))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, a: RGBA_VALUES.a.max })
                setInputOpacityValue(String(parsed.formattedValue ?? "0"))
                return
              }

              const percent = parsed.normalizedValue ?? 0
              const fraction = roundAlpha(
                clamp(percent / 100, RGBA_VALUES.a.min, RGBA_VALUES.a.max)
              )

              setColor({ ...color, a: fraction })
              setInputOpacityValue(String(parsed.formattedValue ?? "0"))
            }}
            onKeyDown={(e) =>
              opacityValidation.handleKeyDown(e, (next) => {
                setInputOpacityValue(String(next))
                const fraction = roundAlpha(
                  clamp(next / 100, RGBA_VALUES.a.min, RGBA_VALUES.a.max)
                )
                setColor({ ...color, a: fraction })
              })
            }
          />
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
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: true,
    mask: hexMask,
    normalizeOnError: true,
  })

  return (
    <>
      <div style={{ minWidth: "52px" }}>
        <Select
          ref={selectRef}
          options={options}
          value={type}
          onChange={(e) => setType(e.value as ColorPickerType)}
          tooltip="Color mode"
          menuWidth={160}
        />
      </div>
      <div className="ColorPicker__controlsValues">
        <Input
          tooltip="Hex value"
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
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: true,
    mask: hexMask,
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

  const [hexOpacityValue, setHexOpacityValue] = useState<string>(
    Math.round(color.a * 100).toString()
  )

  useEffect(() => {
    setHexOpacityValue(Math.round(color.a * 100).toString())
  }, [color.a])

  return (
    <>
      <div style={{ minWidth: "52px" }}>
        <Select
          ref={selectRef}
          options={options}
          value={type}
          onChange={(e) => setType(e.value as ColorPickerType)}
          tooltip="Color mode"
          menuWidth={160}
        />
      </div>
      <div className="ColorPicker__controlsValues">
        <ControlGroup groupFocus>
          <Input
            tooltip="Hex value"
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

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, a: HEX_VALUES.a.min })
                setHexOpacityValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, a: HEX_VALUES.a.min })
                setHexOpacityValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, a: HEX_VALUES.a.max })
                setHexOpacityValue(String(parsed.formattedValue))
                return
              }

              const percent = parsed.normalizedValue ?? 0
              const fraction = roundAlpha(
                clamp(percent / 100, HEX_VALUES.a.min, HEX_VALUES.a.max)
              )
              setColor({ ...color, a: fraction })
              setHexOpacityValue(String(parsed.formattedValue))
            }}
            onKeyDown={(e) =>
              hexOpacityValidation.handleKeyDown(e, (next) => {
                setHexOpacityValue(String(next))
                const fraction = roundAlpha(
                  clamp(next / 100, HEX_VALUES.a.min, HEX_VALUES.a.max)
                )
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
    className,
    defaultType = "hex",
    type,
    defaultValue,
    types,
    value,
    showControls = true,
    width = 207,
    fullWidth = false,
    onTypeChange,
    onValueChange,
    ...rest
  }: ColorPickerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [internalColor, setInternalColor] = useState<Color>(() => {
    if (value) return value
    if (defaultValue) return defaultValue
    return { r: 255, g: 0, b: 0, a: 1 }
  })

  // Keep internal color in sync when used in controlled mode
  useEffect(() => {
    if (value) {
      setInternalColor(value)
    }
  }, [value])

  // compute allowed types list
  const allowedTypes: ColorPickerType[] = useMemo(
    () =>
      types && types.length
        ? (types as ColorPickerType[])
        : (["hex", "hexAlpha", "rgba"] as ColorPickerType[]),
    [types]
  )

  // Picker type state:
  // - uncontrolled by default, initialised from `defaultType`
  // - when `type` is provided, it acts as a controlled override
  const [internalType, setInternalType] = useState<ColorPickerType>(() =>
    allowedTypes.includes(defaultType as ColorPickerType)
      ? (defaultType as ColorPickerType)
      : allowedTypes[0]
  )

  useEffect(() => {
    if (type) {
      setInternalType(type as ColorPickerType)
    }
  }, [type])

  const allowedTypesKey = useMemo(
    () => (allowedTypes && allowedTypes.length ? allowedTypes.join("|") : ""),
    [allowedTypes]
  )

  useEffect(() => {
    // In controlled mode (`type` provided), `defaultType` should not
    // override the externally controlled value.
    if (type) {
      return
    }

    const nextType = (allowedTypes as ColorPickerType[]).includes(
      defaultType as ColorPickerType
    )
      ? (defaultType as ColorPickerType)
      : allowedTypes[0]
    setInternalType(nextType)
  }, [defaultType, allowedTypesKey, allowedTypes, type])

  const currentType: ColorPickerType = internalType

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

  const areColorsEqual = (a: Color, b: Color) =>
    a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a

  const flushPendingColor = () => {
    const next = pendingColorRef.current
    pendingColorRef.current = null
    rafIdRef.current = null
    if (!next) return

    const normalized: Color = {
      ...next,
      a: roundAlpha(clamp(next.a, 0, 1)),
    }

    if (!areColorsEqual(normalized, internalColor)) {
      setInternalColor(normalized)
    }

    onValueChange?.({
      rgba: normalized,
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

  const _className = bem("ColorPicker", undefined, {
    type: currentType,
    controls: showControls,
    fullWidth: Boolean(fullWidth),
  })

  const handleInteractionKeyDownCapture = (
    event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>
  ) => {
    // Any key press counts as keyboard interaction; a subsequent mouse
    // interaction will overwrite this flag.
    if (event.key) {
      lastInteractionWasKeyboardRef.current = true
    }
  }

  const handleInteractionMouseDownCapture = (
    _event: preact.JSX.TargetedMouseEvent<HTMLDivElement>
  ) => {
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
  const baseOptions = TYPE_OPTIONS.filter((o) =>
    allowedTypes.includes(o.value as ColorPickerType)
  )

  const computedOptions =
    !allowedTypes.includes("hex" as ColorPickerType) &&
    allowedTypes.includes("hexAlpha" as ColorPickerType)
      ? baseOptions.map((o) =>
          o.value === "hexAlpha" ? { ...o, label: "Hex" } : o
        )
      : baseOptions

  const handleKeyDown = (
    event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>
  ) => {
    const key = event.key

    if (key === "Escape" || key === "Esc") {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      if (target && typeof target.blur === "function") {
        target.blur()
      }
    }
  }

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
      onKeyDownCapture={handleInteractionKeyDownCapture}
      onMouseDownCapture={handleInteractionMouseDownCapture}
      onKeyDown={handleKeyDown}
      {...rest}
      style={{
        width: fullWidth ? undefined : (width as number),
      }}
    >
      {currentType === "hex" && (
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
      {currentType === "hexAlpha" && (
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
      {currentType === "rgba" && (
        <RgbaColorPicker
          color={internalColor}
          onChange={(e) => {
            scheduleNextColor(e)
          }}
        />
      )}
      {showControls && (
        <div className="ColorPicker__controls">
          {currentType === "hex" && (
            <ControlsHex
              color={internalColor}
              setColor={(color) => scheduleNextColor(color)}
              type={currentType as ColorPickerType}
              setType={handleTypeChange}
              options={computedOptions}
              selectRef={modeSelectRef}
            />
          )}
          {currentType === "hexAlpha" && (
            <ControlsHexAlpha
              color={internalColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={handleTypeChange}
              options={computedOptions}
              selectRef={modeSelectRef}
            />
          )}
          {currentType === "rgba" && (
            <ControlsRgba
              color={internalColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={handleTypeChange}
              options={computedOptions}
              selectRef={modeSelectRef}
            />
          )}
        </div>
      )}
    </div>
  )
}

export const ColorPicker = typedForwardRef<ColorPickerProps, HTMLDivElement>(
  ColorPickerComponent
)
