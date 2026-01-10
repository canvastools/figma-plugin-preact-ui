import type { Glyph } from "../Icon/Icon.types"

import type { IconProps } from "../Icon/Icon.types"

export interface ButtonIconProps {
  className?: string
  intent?: "neutral"
  intentModifier?: "default" | "secondary"
  ghost?: boolean
  size?: "medium" | "large"
  grouped?: "none" | "first" | "last" | "middle"
  translucent?: boolean
  disabled?: boolean
  selected?: boolean
  tooltip?: preact.ComponentChildren
  children?: preact.ComponentChildren
  icon?: {
    glyph: Glyph
    variant?: IconProps["variant"]
    size?: IconProps["size"]
  }
  onClick?: (args: { event: MouseEvent }) => void
}
