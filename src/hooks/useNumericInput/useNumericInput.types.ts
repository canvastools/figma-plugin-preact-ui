export type NumericInputError =
  | "required"
  | "invalid_number"
  | "less_than_min"
  | "greater_than_max"
  | "not_integer"

export interface NumericInputConfig {
  value: number | string
  unit?: string
  min?: number
  max?: number
  precision?: number
  step?: number
  stepLarge?: number
  required?: boolean
  normalizeOnError?: boolean
}

export interface NumericInputParseResult {
  value: number | undefined
  rawValue: string
  formattedValue: string
  isValid: boolean
  error: NumericInputError | null
}

export interface NumericInput extends NumericInputParseResult {
  handleKeyDown: (
    args: { event: KeyboardEvent; value: string },
    onValueChange?: (next: number) => void
  ) => void
  parse: (raw: string) => NumericInputParseResult
}
