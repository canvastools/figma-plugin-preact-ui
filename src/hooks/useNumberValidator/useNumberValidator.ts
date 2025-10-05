type NumberValidationError =
  | "required"
  | "less_than_min"
  | "greater_than_max"
  | "not_integer"

type NumberValidationConfig = {
  required?: boolean
  min?: number
  max?: number
  integer?: boolean
}

const toNumber = (value: unknown): number | null => {
  if (value === null || value === undefined || value === "") return null
  const num = typeof value === "string" ? Number(value) : (value as number)
  return Number.isFinite(num) ? num : null
}

const useNumberValidator = (config: NumberValidationConfig) => {
  const isValid = (value: unknown): value is number => {
    const num = toNumber(value)

    if (num === null) return config.required ? false : true

    if (typeof config.min === "number" && num < config.min) return false

    if (typeof config.max === "number" && num > config.max) return false

    if (config.integer && !Number.isInteger(num)) return false

    return true
  }

  const getErrorCode = (value: unknown): NumberValidationError | null => {
    const num = toNumber(value)

    if (num === null) return config.required ? "required" : null

    if (typeof config.min === "number" && num < config.min)
      return `less_than_min`

    if (typeof config.max === "number" && num > config.max)
      return `greater_than_max`

    if (config.integer && !Number.isInteger(num)) return "not_integer"

    return null
  }

  return { isValid, getErrorCode }
}

export {
  useNumberValidator,
  type NumberValidationConfig,
  type NumberValidationError,
}
