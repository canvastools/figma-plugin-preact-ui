import {
  NumericInputConfig,
  NumericInputError,
  NumericInput,
  NumericInputParseResult,
} from "./useNumericInput.types"

const NUMBER_REGEX = /[-+]?\d*\.?\d+/

const clamp = (value: number, min?: number, max?: number): number => {
  if (typeof min === "number" && value < min) return min
  if (typeof max === "number" && value > max) return max
  return value
}

const roundToPrecision = (value: number, precision: number): number => {
  if (precision <= 0) return Math.round(value)
  const factor = Math.pow(10, precision)
  return Math.round(value * factor) / factor
}

const inferPrecisionFromValue = (value: number | string): number => {
  const str = String(value)
  const match = NUMBER_REGEX.exec(str)
  if (!match) return 0
  const [, decimals] = match[0].split(".")
  return decimals ? decimals.length : 0
}

type InternalParse = {
  value: number | undefined
  error: NumericInputError | null
}

/**
 * Extracts the first signed number from the input string.
 * Returns `invalid_number` when no valid number can be found.
 */
const parseNumericInput = (raw: unknown, required?: boolean): InternalParse => {
  if (raw === null || raw === undefined) {
    return {
      value: undefined,
      error: required ? "required" : null,
    }
  }

  const str = String(raw)
  const trimmed = str.trim()

  if (trimmed === "") {
    return {
      value: undefined,
      error: required ? "required" : null,
    }
  }

  const match = NUMBER_REGEX.exec(trimmed)

  if (!match) {
    return {
      value: undefined,
      error: "invalid_number",
    }
  }

  const num = Number(match[0])

  if (!Number.isFinite(num)) {
    return {
      value: undefined,
      error: "invalid_number",
    }
  }

  return { value: num, error: null }
}

const buildResult = (
  raw: string,
  config: NumericInputConfig
): NumericInputParseResult => {
  const { min, max, required, unit, normalizeOnError = false } = config

  const { value: parsed, error: parseError } = parseNumericInput(raw, required)

  const precision =
    typeof config.precision === "number"
      ? config.precision
      : inferPrecisionFromValue(config.value)

  // Parsing errors (required / invalid) – we cannot derive a numeric value
  // at all, so both normalizedValue and formattedValue are undefined.
  if (parseError) {
    return {
      rawValue: raw,
      normalizedValue: undefined,
      formattedValue: undefined,
      error: parseError,
    }
  }

  // Defensive: if parsed is somehow undefined without an error, treat it as
  // \"no value\".
  if (parsed === undefined) {
    return {
      rawValue: raw,
      normalizedValue: undefined,
      formattedValue: undefined,
      error: required ? "required" : null,
    }
  }

  let error: NumericInputError | null = null

  if (typeof min === "number" && parsed < min) {
    error = "less_than_min"
  } else if (typeof max === "number" && parsed > max) {
    error = "greater_than_max"
  }

  if (precision === 0 && !Number.isInteger(parsed) && !error) {
    error = "not_integer"
  }

  const clamped = clamp(parsed, min, max)
  const rounded = roundToPrecision(clamped, precision)

  // When there is a range / integer error:
  // - normalizeOnError = true  → still return normalizedValue / formattedValue
  // - normalizeOnError = false → return them as undefined
  if (error && !normalizeOnError) {
    return {
      rawValue: raw,
      normalizedValue: undefined,
      formattedValue: undefined,
      error,
    }
  }

  const normalizedValue = rounded
  const numericString =
    precision > 0 ? normalizedValue.toFixed(precision) : String(normalizedValue)
  const formattedValue = unit ? `${numericString}${unit}` : numericString

  return {
    rawValue: raw,
    normalizedValue,
    formattedValue,
    error,
  }
}

const useNumericInput = (config: NumericInputConfig): NumericInput => {
  const {
    value,
    min,
    max,
    precision = 0,
    step = 1,
    stepLarge = 10,
    required,
  } = config

  const parse = (raw: string): NumericInputParseResult =>
    buildResult(raw, config)

  const current = buildResult(String(value), config)

  /**
   * Computes the next numeric value when incrementing / decrementing via
   * keyboard. This does not modify any state
   */
  const getNextValue = (
    raw: number | string,
    direction: "increment" | "decrement",
    options?: { shiftKey?: boolean }
  ): number => {
    const { value: currentValue } = parseNumericInput(raw, required)

    const effectiveStep =
      options?.shiftKey && typeof stepLarge === "number" ? stepLarge : step

    const base =
      typeof currentValue === "number"
        ? currentValue
        : typeof min === "number"
        ? min
        : 0

    const delta = direction === "increment" ? effectiveStep : -effectiveStep
    const next = base + delta

    const precisionToUse =
      typeof precision === "number"
        ? precision
        : inferPrecisionFromValue(config.value)

    const rounded = roundToPrecision(next, precisionToUse)
    return clamp(rounded, min, max)
  }

  /**
   * Convenience handler for the custom `Input` component in this library.
   * Uses ArrowUp / ArrowDown (with optional Shift) to step the numeric value.
   */
  const handleKeyDown = (
    args: { event: KeyboardEvent; value: string },
    onValueChange?: (next: number) => void
  ) => {
    const { event, value: raw } = args

    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
      return
    }

    event.preventDefault()

    const direction = event.key === "ArrowUp" ? "increment" : "decrement"
    const next = getNextValue(raw, direction, { shiftKey: event.shiftKey })

    onValueChange?.(next)
  }

  return {
    ...current,
    handleKeyDown,
    parse,
  }
}

export {
  useNumericInput,
  type NumericInputConfig,
  type NumericInputError,
  type NumericInputParseResult,
}
