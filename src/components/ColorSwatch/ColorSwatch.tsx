import { useRef } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

import type { ColorSwatchProps } from "./ColorSwatch.types"
import "./ColorSwatch.scss"

import { OverlayPositioner, Tooltip, Text } from "../../index"

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
    interactive = false,
    selected = false,
    children,
    onClick,
    ...rest
  }: ColorSwatchProps,
  ref: preact.Ref<HTMLDivElement | HTMLButtonElement>
) => {
  const anchorRef = useRef<HTMLElement | null>(null)

  const _className = bem("ColorSwatch", undefined, {
    selection: selection,
    hasImage: !!imageSrc,
    hasHex: !!hex,
    size,
    interactive,
    selected,
  })

  const RootElement = (interactive ? "button" : "div") as "button" | "div"

  const handleKeyDown = (
    event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (event.key === "Escape" || event.key === "Esc") {
      event.currentTarget.blur()
    }
  }

  return (
    <RootElement
      className={[_className, className, "no-drag"].join(" ").trim()}
      ref={(el) => {
        if (typeof ref === "function") {
          ref(el)
        } else if (ref) {
          // eslint-disable-next-line
          ;(ref as preact.RefObject<HTMLElement>).current = el as HTMLElement
        }
        anchorRef.current = el
      }}
      {...(interactive ? { type: "button" } : {})}
      onClick={(event) => onClick?.({ event, hex, imageSrc })}
      onKeyDown={handleKeyDown}
      {...rest}
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
          anchorRef={anchorRef as preact.RefObject<HTMLElement>}
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
    </RootElement>
  )
}

export const ColorSwatch = typedForwardRef<
  ColorSwatchProps,
  HTMLDivElement | HTMLButtonElement
>(ColorSwatchComponent)
