import { bem, typedForwardRef } from "../../utils"
import { useRef } from "preact/hooks"

import type { ColorSwatchProps } from "./ColorSwatch.types"
import "./ColorSwatch.scss"

import { OverlayPositioner } from "../../index"
import { Tooltip } from "../../index"
import { Text } from "../../index"

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
    size = "medium",
    hex,
    imageSrc,
    title,
    selection = "default",
    hoverable = false,
    selected = false,
    children,
    onClick,
    ...rest
  }: ColorSwatchProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const anchorRef = useRef<HTMLDivElement | null>(null)

  const _className = bem("ColorSwatch", undefined, {
    selection: selection,
    hasImage: !!imageSrc,
    hasHex: !!hex,
    size,
    hoverable,
    selected,
  })

  return (
    <div
      className={[_className, className, "no-drag"].join(" ").trim()}
      ref={(el) => {
        if (typeof ref === "function") {
          ref(el)
        } else if (ref) {
          // eslint-disable-next-line
          ;(ref as preact.RefObject<HTMLDivElement>).current = el
        }
        anchorRef.current = el
      }}
      {...rest}
      onClick={(event) => onClick?.({ event, hex, imageSrc })}
    >
      <div className="ColorSwatch__container">
        {hex && hasOpacity(hex) && (
          <>
            <div
              className="ColorSwatch__fill"
              style={{ backgroundColor: hex?.substring(0, hex.length - 2) }}
            />
            <div
              className="ColorSwatch__fill"
              style={{ backgroundColor: hex }}
            />
          </>
        )}

        {hex && !hasOpacity(hex) && (
          <div className="ColorSwatch__fill" style={{ backgroundColor: hex }} />
        )}

        {imageSrc && (
          <div
            className="ColorSwatch__image"
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
          />
        )}
      </div>

      {children && <div className="ColorSwatch__children">{children}</div>}

      {title && (
        <OverlayPositioner
          anchorRef={anchorRef as preact.RefObject<HTMLDivElement>}
          placement="bottom"
          trigger="hover"
          paddingY={8}
          visibilityDelay={1000}
          arrow={true}
        >
          <Tooltip>
            <Text intent="neutral-inverted-fixed">{title}</Text>
          </Tooltip>
        </OverlayPositioner>
      )}
    </div>
  )
}

export const ColorSwatch = typedForwardRef<ColorSwatchProps, HTMLDivElement>(
  ColorSwatchComponent
)
