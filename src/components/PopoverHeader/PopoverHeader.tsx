import { bem, typedForwardRef } from "../../utils"

import type { PopoverHeaderProps } from "./PopoverHeader.types"
import "./PopoverHeader.scss"

import { Text, ButtonIcon, close as iconClose } from "../../index"

/* --- */

const PopoverHeaderComponent = (
  { className, children, onClose, ...rest }: PopoverHeaderProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("PopoverHeader", undefined, undefined)

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      <div className="PopoverHeader__content">
        <Text strong fullWidth>
          {children}
        </Text>
        <ButtonIcon ghost icon={{ glyph: iconClose }} onClick={onClose} />
      </div>
    </div>
  )
}

export const PopoverHeader = typedForwardRef<
  PopoverHeaderProps,
  HTMLDivElement
>(PopoverHeaderComponent)
