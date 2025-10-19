import { bem, typedForwardRef } from "../../utils"

import type { ColorSwatchProps } from "./ColorSwatch.types"
import "./ColorSwatch.scss"

/* --- */

const hasOpacity = (hex: string | undefined) => {
  if (!hex) return false
  const opacity = hex.slice(-2)
  const isOpacity = opacity === "FF" || opacity === "ff"
  return hex.length === 9 && !isOpacity
}

const ColorSwatchComponent = (
  {
    className,
    variant = "fill",
    size = "medium",
    hex,
    imageSrc,
    ...rest
  }: ColorSwatchProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("ColorSwatch", undefined, {
    variant,
    size,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      {variant === "fill" && hasOpacity(hex) && (
        <>
          <div
            className="ColorSwatch__fill"
            style={{ backgroundColor: hex?.substring(0, hex.length - 2) }}
          />
          <div className="ColorSwatch__fill" style={{ backgroundColor: hex }} />
        </>
      )}
      {variant === "fill" && !hasOpacity(hex) && (
        <div className="ColorSwatch__fill" style={{ backgroundColor: hex }} />
      )}
      {variant === "image" && (
        <div
          className="ColorSwatch__image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}
    </div>
  )
}

export const ColorSwatch = typedForwardRef<ColorSwatchProps, HTMLDivElement>(
  ColorSwatchComponent
)
