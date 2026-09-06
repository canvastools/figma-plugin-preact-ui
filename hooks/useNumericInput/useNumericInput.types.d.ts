export type NumericInputError = 'required' | 'invalid_number' | 'less_than_min' | 'greater_than_max' | 'not_integer';
export interface NumericInputConfig {
    value: number | string;
    unit?: string;
    min?: number;
    max?: number;
    precision?: number;
    step?: number;
    stepLarge?: number;
    required?: boolean;
    normalizeOnError?: boolean;
    doubleValue?: boolean;
    math?: boolean;
    trimTrailingZeros?: boolean;
}
export interface NumericInputParseResult {
    rawValue: string;
    normalizedValue: number | undefined;
    formattedValue: string | undefined;
    normalizedValues?: [number, number] | undefined;
    formattedValues?: [string, string] | undefined;
    error: NumericInputError | null;
    unit: string | undefined;
}
export interface NumericInputDragOptions {
    disabled?: boolean;
    onChange?: (next: number | string) => void;
    onCommit?: (next: number | string) => void;
}
export interface NumericInputDragProps {
    style: {
        cursor?: string;
    };
    onMouseDown?: (event: MouseEvent) => void;
}
export interface NumericInput extends NumericInputParseResult {
    handleKeyDown: (args: {
        event: KeyboardEvent;
        value: string;
    }, onValueChange?: (next: number | string) => void) => void;
    parse: (raw: string, unit?: string) => NumericInputParseResult;
    getDragProps: (options?: NumericInputDragOptions) => NumericInputDragProps;
}
