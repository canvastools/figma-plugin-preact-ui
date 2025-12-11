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

import type { ColorPickerProps, Color } from "./ColorPicker.types"
import "./ColorPicker.scss"

import {
  RgbaColorPicker,
  HexColorPicker,
  HexAlphaColorPicker,
} from "react-colorful"

import { Input } from "../../index"
import { Text } from "../../index"
import { Select } from "../../index"
import { Tooltip } from "../../index"
import { OverlayPositioner } from "../../index"

import { useNumberValidator } from "../../index"
import { useStringValidator } from "../../index"

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
}: {
  color: Color
  setColor: (color: Color) => void
  type: ColorPickerType
  setType: (t: ColorPickerType) => void
  options: { value: string; label: string }[]
}) => {
  const [rgbaValue, setRgbaValue] = useState<Color>(color)

  useEffect(() => {
    setRgbaValue(color)
  }, [color])

  const { getErrorCode: getErrorCodeRgbaValue } = useNumberValidator({
    required: true,
    min: RGBA_VALUES.r.min,
    max: RGBA_VALUES.r.max,
  })

  const { getErrorCode: getErrorCodeRgbaOpacity } = useNumberValidator({
    required: true,
    min: RGBA_VALUES.a.min,
    max: RGBA_VALUES.a.max,
  })

  const selectRef = useRef<HTMLDivElement>(null)

  const inputRedRef = useRef<HTMLInputElement>(null)
  const inputGreenRef = useRef<HTMLInputElement>(null)
  const inputBlueRef = useRef<HTMLInputElement>(null)
  const inputOpacityRef = useRef<HTMLInputElement>(null)

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
      <div className="ColorPicker__controlsValues InputGrouped">
        <Input
          ref={inputRedRef}
          className="ColorPicker__inputCompact"
          type="number"
          grouped="right"
          value={rgbaValue.r.toString()}
          onChange={(e) => {
            const num = Number(e.value)
            if (Number.isFinite(num)) {
              setRgbaValue({ ...rgbaValue, r: num })
            }
          }}
          onBlur={(e) => {
            const value = Math.round(Number(e.value))

            if (getErrorCodeRgbaValue(value) === "required") {
              setColor({ ...color, r: RGBA_VALUES.r.min })
              setRgbaValue({ ...rgbaValue, r: RGBA_VALUES.r.min })
            }

            if (getErrorCodeRgbaValue(value) === "less_than_min") {
              setColor({ ...color, r: RGBA_VALUES.r.min })
              setRgbaValue({ ...rgbaValue, r: RGBA_VALUES.r.min })
            }

            if (getErrorCodeRgbaValue(value) === "greater_than_max") {
              setColor({ ...color, r: RGBA_VALUES.r.max })
              setRgbaValue({ ...rgbaValue, r: RGBA_VALUES.r.max })
            }

            if (getErrorCodeRgbaValue(value) === null) {
              setColor({ ...color, r: value })
              setRgbaValue({ ...rgbaValue, r: value })
            }
          }}
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
          type="number"
          grouped="both"
          value={rgbaValue.g.toString()}
          onChange={(e) => {
            const num = Number(e.value)
            if (Number.isFinite(num)) {
              setRgbaValue({ ...rgbaValue, g: num })
            }
          }}
          onBlur={(e) => {
            const value = Math.round(Number(e.value))

            if (getErrorCodeRgbaValue(value) === "required") {
              setColor({ ...color, g: RGBA_VALUES.g.min })
              setRgbaValue({ ...rgbaValue, g: RGBA_VALUES.g.min })
            }

            if (getErrorCodeRgbaValue(value) === "less_than_min") {
              setColor({ ...color, g: RGBA_VALUES.g.min })
              setRgbaValue({ ...rgbaValue, g: RGBA_VALUES.g.min })
            }

            if (getErrorCodeRgbaValue(value) === "greater_than_max") {
              setColor({ ...color, g: RGBA_VALUES.g.max })
              setRgbaValue({ ...rgbaValue, g: RGBA_VALUES.g.max })
            }

            if (getErrorCodeRgbaValue(value) === null) {
              setColor({ ...color, g: value })
              setRgbaValue({ ...rgbaValue, g: value })
            }
          }}
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
          type="number"
          grouped="both"
          value={rgbaValue.b.toString()}
          onChange={(e) => {
            const num = Number(e.value)
            if (Number.isFinite(num)) {
              setRgbaValue({ ...rgbaValue, b: num })
            }
          }}
          onBlur={(e) => {
            const value = Math.round(Number(e.value))

            if (getErrorCodeRgbaValue(value) === "required") {
              setColor({ ...color, b: RGBA_VALUES.b.min })
              setRgbaValue({ ...rgbaValue, b: RGBA_VALUES.b.min })
            }

            if (getErrorCodeRgbaValue(value) === "less_than_min") {
              setColor({ ...color, b: RGBA_VALUES.b.min })
              setRgbaValue({ ...rgbaValue, b: RGBA_VALUES.b.min })
            }

            if (getErrorCodeRgbaValue(value) === "greater_than_max") {
              setColor({ ...color, b: RGBA_VALUES.b.max })
              setRgbaValue({ ...rgbaValue, b: RGBA_VALUES.b.max })
            }

            if (getErrorCodeRgbaValue(value) === null) {
              setColor({ ...color, b: value })
              setRgbaValue({ ...rgbaValue, b: value })
            }
          }}
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
          type="number"
          grouped="left"
          value={Math.round(rgbaValue.a * 100).toString()}
          suffix={
            <Text intentModifiers="secondary">
              <div className="ColorPicker__controlOpacityContainer">%</div>
            </Text>
          }
          onChange={(e) => {
            const num = Number(e.value)
            if (Number.isFinite(num)) {
              const percent = Math.round(num)
              setRgbaValue({ ...rgbaValue, a: roundAlpha(percent / 100) })
            }
          }}
          onBlur={(e) => {
            const value = roundAlpha(Math.round(Number(e.value)) / 100)

            if (getErrorCodeRgbaOpacity(value) === "required") {
              setColor({ ...color, a: color.a })
              setRgbaValue({ ...rgbaValue, a: color.a })
            }

            if (getErrorCodeRgbaOpacity(value) === "less_than_min") {
              setColor({ ...color, a: RGBA_VALUES.a.min })
              setRgbaValue({ ...rgbaValue, a: RGBA_VALUES.a.min })
            }

            if (getErrorCodeRgbaOpacity(value) === "greater_than_max") {
              setColor({ ...color, a: RGBA_VALUES.a.max })
              setRgbaValue({ ...rgbaValue, a: RGBA_VALUES.a.max })
            }

            if (getErrorCodeRgbaOpacity(value) === null) {
              setColor({ ...color, a: value })
              setRgbaValue({ ...rgbaValue, a: value })
            }
          }}
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
}: {
  color: Color
  setColor: (color: Color) => void
  type: ColorPickerType
  setType: (t: ColorPickerType) => void
  options: { value: string; label: string }[]
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

  const selectRef = useRef<HTMLDivElement>(null)

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
}: {
  color: Color
  setColor: (color: Color) => void
  type: ColorPickerType
  setType: (t: ColorPickerType) => void
  options: { value: string; label: string }[]
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

  const { getErrorCode: getErrorCodeHexOpacity } = useNumberValidator({
    required: true,
    min: HEX_VALUES.a.min,
    max: HEX_VALUES.a.max,
  })

  const selectRef = useRef<HTMLDivElement>(null)
  const inputOpacityRef = useRef<HTMLInputElement>(null)

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
      <div className="ColorPicker__controlsValues InputGrouped">
        <Input
          grouped="right"
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

        <Input
          ref={inputOpacityRef}
          className="ColorPicker__controlOpacity"
          grouped="left"
          type="number"
          value={Math.round(color.a * 100).toString()}
          suffix={
            <Text intentModifiers="secondary">
              <div className="ColorPicker__controlOpacityContainer">%</div>
            </Text>
          }
          onChange={(e) => {
            const num = Number(e.value)
            if (Number.isFinite(num)) {
              const fraction = roundAlpha(
                clamp(num / 100, HEX_VALUES.a.min, HEX_VALUES.a.max)
              )
              setColor({ ...color, a: fraction })
            }
          }}
          onBlur={(e) => {
            const fraction = roundAlpha(Number(e.value) / 100)
            const error = getErrorCodeHexOpacity(fraction)

            if (error === "required") {
              setColor({ ...color, a: color.a })
            }

            if (error === "less_than_min") {
              setColor({ ...color, a: HEX_VALUES.a.min })
            }

            if (error === "greater_than_max") {
              setColor({ ...color, a: HEX_VALUES.a.max })
            }

            if (error === null) {
              setColor({ ...color, a: fraction })
            }
          }}
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

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
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
            />
          )}
          {currentType === "hexAlpha" && (
            <ControlsHexAlpha
              color={currentColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={setInternalType as (t: ColorPickerType) => void}
              options={computedOptions}
            />
          )}
          {currentType === "rgba" && (
            <ControlsRgba
              color={currentColor}
              setColor={scheduleNextColor}
              type={currentType as ColorPickerType}
              setType={setInternalType as (t: ColorPickerType) => void}
              options={computedOptions}
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
