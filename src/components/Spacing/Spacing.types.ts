import { spacing } from "../../themes"

export interface SpacingProps {
  className?: string
  size?: keyof typeof spacing.variables
  direction?: "row" | "column"
}
