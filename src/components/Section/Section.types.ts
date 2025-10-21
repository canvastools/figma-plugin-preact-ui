import { spacing } from "../../themes"

export type SectionPadding = keyof typeof spacing.variables

export interface SectionProps {
  className?: string
  variant?: "default" | "stacked"
  padding?: {
    top?: SectionPadding
    right?: SectionPadding
    bottom?: SectionPadding
    left?: SectionPadding
  }
  children?: preact.ComponentChildren
}
