import type { Glyph } from "../Icon/Icon.types"

import type { IconProps } from "../Icon/Icon.types"

export interface ButtonIconProps {
  className?: string
  intent?: "neutral"
  intentModifier?: "default"
  ghost?: boolean
  size?: "medium" | "large"
  grouped?: "none" | "left" | "right" | "both"
  translucent?: boolean
  disabled?: boolean
  selected?: boolean
  tooltip?: preact.ComponentChildren
  children: preact.ComponentChildren
  icon?: {
    glyph: Glyph
    variant?: IconProps["variant"]
    size?: IconProps["size"]
  }
  onClick?: (args: { event: MouseEvent }) => void
}
