import type { Glyph } from "../Icon/Icon.types"

import type { IconProps } from "../Icon/Icon.types"

export interface ButtonIconProps {
  className?: string
  intent?: "neutral"
  intentModifiers?: "default" | "secondary"
  ghost?: boolean
  size?: "medium" | "large"
  grouped?: "none" | "left" | "right" | "both"
  translucent?: boolean
  disabled?: boolean
  icon?: {
    glyph: Glyph
    variant?: IconProps["variant"]
    size?: IconProps["size"]
    selected?: boolean
  }
  children?: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent }) => void
}
