import { bem, typedForwardRef } from "../../utils"

import type { TextProps } from "./Text.types"
import "./Text.scss"

/* --- */

const parseMarkdownLinks = (text: string) => {
  const parts: preact.ComponentChildren[] = []
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match = linkPattern.exec(text)
  let linkIndex = 0

  while (match) {
    const [fullMatch, label, url] = match

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    parts.push(
      <a key={`Text-link-${linkIndex}`} className="Text__link" href={url}>
        {label}
      </a>
    )

    linkIndex += 1
    lastIndex = match.index + fullMatch.length
    match = linkPattern.exec(text)
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

const renderChildrenWithLinks = (children: preact.ComponentChildren) => {
  const renderChild = (child: preact.ComponentChildren) =>
    typeof child === "string" ? parseMarkdownLinks(child) : child

  if (Array.isArray(children)) {
    const rendered: preact.ComponentChildren[] = []

    children.forEach((child) => {
      const result = renderChild(child)
      if (Array.isArray(result)) {
        rendered.push(...result)
      } else {
        rendered.push(result)
      }
    })

    return rendered
  }

  return renderChild(children)
}

const TextComponent = (
  {
    className,
    id,
    intent = "neutral",
    intentModifier = "default",
    variant = "body",
    size = "medium",
    strong = false,
    align = "left",
    disabled = false,
    selected = false,
    wrap = true,
    textColor,
    truncate = false,
    fullWidth = false,
    children,
    ...rest
  }: TextProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Text", undefined, {
    ...(!textColor && {
      intent: `${intent}-${intentModifier}`,
      disabled,
      selected,
    }),
    variant,
    size,
    strong,
    align,
    fullWidth,
    wrap,
    truncated: truncate,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      id={id}
      ref={ref}
      {...rest}
      style={{
        ...(textColor && { color: textColor }),
      }}
    >
      {renderChildrenWithLinks(children)}
    </div>
  )
}

export const Text = typedForwardRef<TextProps, HTMLDivElement>(TextComponent)
