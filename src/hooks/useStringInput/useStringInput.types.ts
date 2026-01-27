export type StringInputError =
  | "required"
  | "too_short"
  | "too_long"
  | "invalid_characters"

export type StringInputConfig = {
  value: string
  required?: boolean
  minLength?: number
  maxLength?: number
  allowedCharacters?: string
  trim?: boolean
  format?: (value: string) => string
  normalizeOnError?: boolean
}

export interface StringInputParseResult {
  rawValue: string
  normalizedValue: string | undefined
  formattedValue: string | undefined
  error: StringInputError | null
}

export interface StringInput extends StringInputParseResult {
  handleKeyDown: (args: { event: KeyboardEvent; value: string }) => void
  parse: (raw: string) => StringInputParseResult
}
