import {
  type StringInputConfig,
  type StringInputError,
  type StringInput,
  type StringInputParseResult,
} from './useStringInput.types'

const trimString = (value: unknown, config: StringInputConfig): string => {
  const str = value == null ? '' : String(value)
  return config.trim ? str.trim() : str
}

const buildResult = (raw: string, config: StringInputConfig): StringInputParseResult => {
  const { required, minLength, maxLength, allowedCharacters, format, normalizeOnError } = config

  const rawValue = raw
  const trimmedValue = trimString(rawValue, config)

  let error: StringInputError | null = null

  if (trimmedValue === '') {
    if (required) {
      error = 'required'
    }
  } else {
    if (typeof minLength === 'number' && trimmedValue.length < minLength) {
      error = 'too_short'
    } else if (typeof maxLength === 'number' && trimmedValue.length > maxLength) {
      error = 'too_long'
    } else if (allowedCharacters && [...trimmedValue].some((ch) => !allowedCharacters.includes(ch))) {
      error = 'invalid_characters'
    }
  }

  const hasError = error !== null

  let normalizedValue: string | undefined
  let formattedValue: string | undefined
  let outError = error

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

    let base = typeof maxLength === 'number' ? trimmedValue.slice(0, maxLength) : trimmedValue

    if (allowedCharacters) {
      base = [...base].filter((ch) => allowedCharacters.includes(ch)).join('')

      // If allowedCharacters includes spaces, collapse consecutive spaces
      // into a single space (e.g. "a   b" -> "a b").
      if (allowedCharacters.includes(' ')) {
        base = base.replace(/ {2,}/g, ' ')
      }
    }

    normalizedValue = base
    try {
      formattedValue = format ? format(base) : base
    } catch {
      formattedValue = base
    }

    // Apply trimming again after normalization/masking in case they
    // introduced leading/trailing whitespace.
    if (config.trim) {
      normalizedValue = trimString(normalizedValue, config)
      formattedValue = formattedValue != null ? trimString(formattedValue, config) : undefined
    }

    // Re-validate the normalized string so fixed inputs (e.g. clamped length) clear errors.
    outError = null
    const check = normalizedValue ?? ''
    if (check === '') {
      if (required) outError = 'required'
    } else {
      if (typeof minLength === 'number' && check.length < minLength) {
        outError = 'too_short'
      } else if (typeof maxLength === 'number' && check.length > maxLength) {
        outError = 'too_long'
      } else if (allowedCharacters && [...check].some((ch) => !allowedCharacters.includes(ch))) {
        outError = 'invalid_characters'
      }
    }
  }

  return {
    rawValue,
    normalizedValue,
    formattedValue,
    error: outError,
  }
}

const useStringInput = (config: StringInputConfig): StringInput => {
  const parse = (raw: string): StringInputParseResult => buildResult(raw, config)

  const current = buildResult(config.value, config)

  const handleKeyDown = (args: { event: KeyboardEvent; value: string }) => {
    const { event } = args
    const key = event.key

    // If no allowedCharacters configured, don't block anything.
    if (!config.allowedCharacters) return

    // Allow navigation / editing keys
    const isControlKey =
      key === 'Backspace' ||
      key === 'Delete' ||
      key === 'ArrowLeft' ||
      key === 'ArrowRight' ||
      key === 'Tab' ||
      key === 'Home' ||
      key === 'End' ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey

    if (event.isComposing === true) return

    // Block any printable character that is not allowed
    if (!isControlKey && key.length === 1 && !config.allowedCharacters.includes(key)) {
      event.preventDefault?.()
    }
  }

  return {
    ...current,
    handleKeyDown,
    parse,
  }
}

export { useStringInput, type StringInputConfig, type StringInputError, type StringInputParseResult }
