import {
  type StringInputConfig,
  type StringInputError,
  type StringInput,
  type StringInputParseResult,
} from "./useStringInput.types"

const trimString = (value: unknown, config: StringInputConfig): string => {
  const str = value == null ? "" : String(value)
  return config.trim ? str.trim() : str
}

const buildResult = (
  raw: string,
  config: StringInputConfig
): StringInputParseResult => {
  const {
    required,
    minLength,
    maxLength,
    allowedCharacters,
    mask,
    normalizeOnError,
  } = config

  const rawValue = raw
  const trimmedValue = trimString(rawValue, config)

  let error: StringInputError | null = null

  if (trimmedValue === "") {
    if (required) {
      error = "required"
    }
  } else {
    if (typeof minLength === "number" && trimmedValue.length < minLength) {
      error = "too_short"
    } else if (
      typeof maxLength === "number" &&
      trimmedValue.length > maxLength
    ) {
      error = "too_long"
    } else if (
      allowedCharacters &&
      [...trimmedValue].some((ch) => !allowedCharacters.includes(ch))
    ) {
      error = "invalid_characters"
    }
  }

  const hasError = error !== null

  let normalizedValue: string | undefined
  let formattedValue: string | undefined

  if (hasError && !normalizeOnError) {
    // Do not normalize on error: only rawValue and error are meaningful.
    normalizedValue = undefined
    formattedValue = undefined
  } else {
    // Normalize on success, or when normalizeOnError=true:
    // - apply trimming (already in trimmedValue)
    // - apply maxLength clamping
    // - strip any characters not in allowedCharacters (if provided)
    // - then apply mask

    let base =
      typeof maxLength === "number"
        ? trimmedValue.slice(0, maxLength)
        : trimmedValue

    if (allowedCharacters) {
      base = [...base].filter((ch) => allowedCharacters.includes(ch)).join("")
    }

    normalizedValue = base
    formattedValue = mask ? mask(base) : base
  }

  return {
    rawValue,
    normalizedValue,
    formattedValue,
    error,
  }
}

const useStringInput = (config: StringInputConfig): StringInput => {
  const parse = (raw: string): StringInputParseResult =>
    buildResult(raw, config)

  const current = buildResult(config.value, config)

  const handleKeyDown = (args: { event: KeyboardEvent; value: string }) => {
    const { event } = args
    const key = event.key

    // If no allowedCharacters configured, don't block anything.
    if (!config.allowedCharacters) return

    // Allow navigation / editing keys
    const isControlKey =
      key === "Backspace" ||
      key === "Delete" ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "Tab" ||
      key === "Home" ||
      key === "End" ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey

    // Block any printable character that is not allowed
    if (
      !isControlKey &&
      key.length === 1 &&
      !config.allowedCharacters.includes(key)
    ) {
      event.preventDefault?.()
    }
  }

  return {
    ...current,
    handleKeyDown,
    parse,
  }
}

export {
  useStringInput,
  type StringInputConfig,
  type StringInputError,
  type StringInputParseResult,
}
