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

import type { ColorPickerProps, Color } from "./ColorPicker.types"
import "./ColorPicker.scss"

import {
  Input,
  Text,
  Select,
  Tooltip,
  OverlayPositioner,
  InputGroup,
  useNumericInput,
  useStringValidator,
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

type ColorPickerType = "rgba" | "hex" | "hexAlpha"

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
    normalizeOnError: true,
  })

  const greenValueValidation = useNumericInput({
    value: color.g.toString(),
    required: true,
    min: RGBA_VALUES.g.min,
    max: RGBA_VALUES.g.max,
    normalizeOnError: true,
  })

  const blueValueValidation = useNumericInput({
    value: color.b.toString(),
    required: true,
    min: RGBA_VALUES.b.min,
    max: RGBA_VALUES.b.max,
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

  const inputRedRef = useRef<HTMLInputElement>(null)
  const inputGreenRef = useRef<HTMLInputElement>(null)
  const inputBlueRef = useRef<HTMLInputElement>(null)
  const inputOpacityRef = useRef<HTMLInputElement>(null)

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
          menuWidth={160}
        />

        <OverlayPositioner
          anchorRef={selectRef}
          placement="bottom"
          placementFallback={["top"]}
          paddingY={8}
          edgePadding={8}
          trigger="hover"
          visibilityDelay={1000}
          arrow={true}
        >
          <Tooltip>
            <Text intent="neutral-inverted-fixed">Color mode</Text>
          </Tooltip>
        </OverlayPositioner>
      </div>
      <div className="ColorPicker__controlsValues">
        <InputGroup>
          <Input
            ref={inputRedRef}
            className="ColorPicker__inputCompact"
            grouped="right"
            value={inputRedValue}
            onChange={(e) => {
              setInputRedValue(e.value)
            }}
            onBlur={(e) => {
              const parsed = redValueValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, r: RGBA_VALUES.r.min })
                setInputRedValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, r: RGBA_VALUES.r.min })
                setInputRedValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, r: RGBA_VALUES.r.max })
                setInputRedValue(String(parsed.formattedValue))
                return
              }

              setColor({ ...color, r: parsed.value ?? 0 })
              setInputRedValue(String(parsed.formattedValue))
            }}
            onKeyDown={(e) =>
              redValueValidation.handleKeyDown(e, (next) => {
                setInputRedValue(String(next))
              })
            }
          />

          <OverlayPositioner
            anchorRef={inputRedRef}
            placement="bottom"
            placementFallback={["top"]}
            paddingY={8}
            edgePadding={8}
            trigger="hover"
            visibilityDelay={1000}
            arrow={true}
          >
            <Tooltip>
              <Text intent="neutral-inverted-fixed">Red</Text>
            </Tooltip>
          </OverlayPositioner>

          <Input
            ref={inputGreenRef}
            className="ColorPicker__inputCompact"
            grouped="both"
            value={inputGreenValue}
            onChange={(e) => {
              setInputGreenValue(e.value)
            }}
            onBlur={(e) => {
              const parsed = greenValueValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, g: RGBA_VALUES.g.min })
                setInputGreenValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, g: RGBA_VALUES.g.min })
                setInputGreenValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, g: RGBA_VALUES.g.max })
                setInputGreenValue(String(parsed.formattedValue))
                return
              }

              setColor({ ...color, g: parsed.value ?? 0 })
              setInputGreenValue(String(parsed.formattedValue))
            }}
            onKeyDown={(e) =>
              greenValueValidation.handleKeyDown(e, (next) => {
                setInputGreenValue(String(next))
              })
            }
          />

          <OverlayPositioner
            anchorRef={inputGreenRef}
            placement="bottom"
            placementFallback={["top"]}
            paddingY={8}
            edgePadding={8}
            trigger="hover"
            visibilityDelay={1000}
            arrow={true}
          >
            <Tooltip>
              <Text intent="neutral-inverted-fixed">Green</Text>
            </Tooltip>
          </OverlayPositioner>

          <Input
            ref={inputBlueRef}
            className="ColorPicker__inputCompact"
            grouped="both"
            value={inputBlueValue}
            onChange={(e) => {
              setInputBlueValue(e.value)
            }}
            onBlur={(e) => {
              const parsed = blueValueValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, b: RGBA_VALUES.b.min })
                setInputBlueValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, b: RGBA_VALUES.b.min })
                setInputBlueValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, b: RGBA_VALUES.b.max })
                setInputBlueValue(String(parsed.formattedValue))
                return
              }

              setColor({ ...color, b: parsed.value ?? 0 })
              setInputBlueValue(String(parsed.formattedValue))
            }}
            onKeyDown={(e) =>
              blueValueValidation.handleKeyDown(e, (next) => {
                setInputBlueValue(String(next))
              })
            }
          />

          <OverlayPositioner
            anchorRef={inputBlueRef}
            placement="bottom"
            placementFallback={["top"]}
            paddingY={8}
            edgePadding={8}
            trigger="hover"
            visibilityDelay={1000}
            arrow={true}
          >
            <Tooltip>
              <Text intent="neutral-inverted-fixed">Blue</Text>
            </Tooltip>
          </OverlayPositioner>

          <Input
            ref={inputOpacityRef}
            className="ColorPicker__controlOpacity"
            grouped="left"
            value={inputOpacityValue}
            suffix={
              <Text intentModifiers="secondary">
                <div className="ColorPicker__controlOpacityContainer">%</div>
              </Text>
            }
            onChange={(e) => {
              setInputOpacityValue(e.value)
            }}
            onBlur={(e) => {
              const parsed = opacityValidation.parse(e.value)

              if (
                parsed.error === "required" ||
                parsed.error === "invalid_number" ||
                parsed.error === "not_integer"
              ) {
                setColor({ ...color, a: RGBA_VALUES.a.min })
                setInputOpacityValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "less_than_min") {
                setColor({ ...color, a: RGBA_VALUES.a.min })
                setInputOpacityValue(String(parsed.formattedValue))
                return
              }

              if (parsed.error === "greater_than_max") {
                setColor({ ...color, a: RGBA_VALUES.a.max })
                setInputOpacityValue(String(parsed.formattedValue))
                return
              }

              const percent = parsed.value ?? 0
              const fraction = roundAlpha(
                clamp(percent / 100, RGBA_VALUES.a.min, RGBA_VALUES.a.max)
              )
              setColor({ ...color, a: fraction })
              setInputOpacityValue(String(parsed.formattedValue))
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

          <OverlayPositioner
            anchorRef={inputOpacityRef}
            placement="bottom"
            placementFallback={["top"]}
            paddingY={8}
            edgePadding={8}
            trigger="hover"
            visibilityDelay={1000}
            arrow={true}
          >
            <Tooltip>
              <Text intent="neutral-inverted-fixed">Opacity</Text>
            </Tooltip>
          </OverlayPositioner>
        </InputGroup>
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

  const { getErrorCode: getErrorCodeHexValue } = useStringValidator({
    required: true,
    minLength: 6,
    maxLength: 6,
    pattern: /^[0-9a-fA-F]{6}$/,
    trim: true,
  })

  return (
    <>
      <div style={{ minWidth: "52px" }}>
        <Select
          ref={selectRef}
          options={options}
          value={type}
          onChange={(e) => setType(e.value as ColorPickerType)}
          menuWidth={160}
        />

        <OverlayPositioner
          anchorRef={selectRef}
          placement="bottom"
          placementFallback={["top"]}
          paddingY={8}
          edgePadding={8}
          trigger="hover"
          visibilityDelay={1000}
          arrow={true}
        >
          <Tooltip>
            <Text intent="neutral-inverted-fixed">Color mode</Text>
          </Tooltip>
        </OverlayPositioner>
      </div>
      <div className="ColorPicker__controlsValues">
        <Input
          value={hexValue.toUpperCase()}
          onChange={(e) => {
            const value = e.value.replace(/^#/, "")
            setHexValue(value)
          }}
          onBlur={(e) => {
            const value = e.value.replace(/^#/, "").trim()
            const error = getErrorCodeHexValue(value)

            if (error === null) {
              const rgb = hexToColor(value, color.a)
              if (rgb) setColor({ ...color, ...rgb })
              setHexValue(value)
            } else {
              setHexValue(colorToHex(color).slice(1))
            }
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

  const { getErrorCode: getErrorCodeHexValue } = useStringValidator({
    required: true,
    minLength: 6,
    maxLength: 6,
    pattern: /^[0-9a-fA-F]{6}$/,
    trim: true,
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

  const inputOpacityRef = useRef<HTMLInputElement>(null)
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
          menuWidth={160}
        />

        <OverlayPositioner
          anchorRef={selectRef}
          placement="bottom"
          placementFallback={["top"]}
          paddingY={8}
          edgePadding={8}
          trigger="hover"
          visibilityDelay={1000}
          arrow={true}
        >
          <Tooltip>
            <Text intent="neutral-inverted-fixed">Color mode</Text>
          </Tooltip>
        </OverlayPositioner>
      </div>
      <div className="ColorPicker__controlsValues">
        <InputGroup>
          <Input
            grouped="right"
            value={hexValue.toUpperCase()}
            onChange={(e) => {
              setHexValue(e.value.replace(/^#/, ""))
            }}
            onBlur={(e) => {
              const value = e.value.replace(/^#/, "").trim()
              const error = getErrorCodeHexValue(value)

              if (error === null) {
                const rgb = hexToColor(value, color.a)
                if (rgb) setColor({ ...color, ...rgb })
                setHexValue(value)
              } else {
                setHexValue(colorToHex(color).slice(1))
              }
            }}
          />

          <Input
            ref={inputOpacityRef}
            className="ColorPicker__controlOpacity"
            grouped="left"
            value={hexOpacityValue}
            suffix={
              <Text intentModifiers="secondary">
                <div className="ColorPicker__controlOpacityContainer">%</div>
              </Text>
            }
            onChange={(e) => {
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

              const percent = parsed.value ?? 0
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

          <OverlayPositioner
            anchorRef={inputOpacityRef}
            placement="bottom"
            placementFallback={["top"]}
            paddingY={8}
            edgePadding={8}
            trigger="hover"
            visibilityDelay={1000}
            arrow={true}
          >
            <Tooltip>
              <Text intent="neutral-inverted-fixed">Opacity</Text>
            </Tooltip>
          </OverlayPositioner>
        </InputGroup>
      </div>
    </>
  )
}

const ColorPickerComponent = (
  {
    className,
    defaultType = "hex",
    types,
    value,
    controls = true,
    width = 207,
    onChange,
    ...rest
  }: ColorPickerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const isControlled = value !== undefined
  const [internalColor, setInternalColor] = useState<Color>(
    value ?? ({ r: 200, g: 150, b: 35, a: 0.5 } as Color)
  )

  // compute allowed types list
  const allowedTypes: ColorPickerType[] = useMemo(
    () =>
      types && types.length
        ? (types as ColorPickerType[])
        : (["hex", "hexAlpha", "rgba"] as ColorPickerType[]),
    [types]
  )

  // Picker type state (uncontrolled by design, syncs from prop when it changes)
  const [internalType, setInternalType] = useState<ColorPickerType>(() =>
    allowedTypes.includes(defaultType as ColorPickerType)
      ? (defaultType as ColorPickerType)
      : allowedTypes[0]
  )

  useEffect(() => {
    if (isControlled && value) {
      // ensure new reference for downstream effects
      setInternalColor({ r: value.r, g: value.g, b: value.b, a: value.a })
    }
  }, [isControlled, value])

  const allowedTypesKey = useMemo(
    () => (allowedTypes && allowedTypes.length ? allowedTypes.join("|") : ""),
    [allowedTypes]
  )
  useEffect(() => {
    const nextType = (allowedTypes as ColorPickerType[]).includes(
      defaultType as ColorPickerType
    )
      ? (defaultType as ColorPickerType)
      : allowedTypes[0]
    setInternalType(nextType)
  }, [defaultType, allowedTypesKey, allowedTypes])

  const currentColor = isControlled && value ? value : internalColor
  const currentType: ColorPickerType = internalType

  const modeSelectRef = useRef<HTMLDivElement | null>(null)

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

    if (!isControlled) {
      if (!areColorsEqual(normalized, internalColor)) {
        setInternalColor(normalized)
      }
    }

    onChange?.({
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
    controls,
  })

  useEffect(() => {
    if (controls && modeSelectRef.current) {
      modeSelectRef.current.focus()
    }
  }, [currentType, controls])

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
      onKeyDown={handleKeyDown}
      {...rest}
      style={{
        width: width === "auto" ? undefined : (width as number),
      }}
    >
      {currentType === "hex" && (
        <HexColorPicker
          color={colorToHex(currentColor)}
          onChange={(hex) => {
            const nextColor = hexToColor(hex, currentColor.a)
            if (nextColor) {
              scheduleNextColor(nextColor)
            }
          }}
        />
      )}
      {currentType === "hexAlpha" && (
        <HexAlphaColorPicker
          color={colorToHexAlpha(currentColor)}
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
          color={currentColor}
          onChange={(e) => {
            scheduleNextColor(e)
          }}
        />
      )}
      {controls && (
        <div className="ColorPicker__controls">
          {currentType === "hex" && (
            <ControlsHex
              color={currentColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={setInternalType as (t: ColorPickerType) => void}
              options={computedOptions}
              selectRef={modeSelectRef}
            />
          )}
          {currentType === "hexAlpha" && (
            <ControlsHexAlpha
              color={currentColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={setInternalType as (t: ColorPickerType) => void}
              options={computedOptions}
              selectRef={modeSelectRef}
            />
          )}
          {currentType === "rgba" && (
            <ControlsRgba
              color={currentColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={setInternalType as (t: ColorPickerType) => void}
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
