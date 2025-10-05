type StringValidationError = "required" | "too_short" | "too_long" | "invalid"

type StringValidationConfig = {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  trim?: boolean
}

const normalize = (
  value: unknown,
  config: StringValidationConfig
): string | null => {
  if (value === null || value === undefined) return null
  const str = String(value)
  return config.trim ? str.trim() : str
}

const useStringValidator = (config: StringValidationConfig) => {
  const isValid = (value: unknown): value is string => {
    const str = normalize(value, config)

    if (str === null || str === "") return config.required ? false : true

    if (typeof config.minLength === "number" && str.length < config.minLength)
      return false

    if (typeof config.maxLength === "number" && str.length > config.maxLength)
      return false

    if (config.pattern && !config.pattern.test(str)) return false

    return true
  }

  const getErrorCode = (value: unknown): StringValidationError | null => {
    const str = normalize(value, config)

    if (str === null || str === "") return config.required ? "required" : null

    if (typeof config.minLength === "number" && str.length < config.minLength)
      return "too_short"

    if (typeof config.maxLength === "number" && str.length > config.maxLength)
      return "too_long"

    if (config.pattern && !config.pattern.test(str)) return "invalid"

    return null
  }

  return { isValid, getErrorCode }
}

export {
  useStringValidator,
  type StringValidationConfig,
  type StringValidationError,
}
