import { spacing } from "../../themes"

export interface StackProps {
  className?: string
  id?: string
  direction?: "row" | "row-reverse" | "column" | "column-reverse"
  spacing?: keyof typeof spacing.variables
  x?: "start" | "center" | "end"
  y?: "start" | "center" | "end"
  fullHeight?: boolean
  fullWidth?: boolean
  children?: preact.ComponentChildren
}
