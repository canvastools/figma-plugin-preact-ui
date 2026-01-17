import { spacing } from "../../themes"

export interface SpacingProps {
  className?: string
  direction?: "row" | "column"
  size: keyof typeof spacing.variables
}
