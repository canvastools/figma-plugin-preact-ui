/**
 * Forces a cursor on the whole document for the length of a drag and blocks
 * text selection. A cursor set on the dragged element (or on `body`) alone
 * loses to the rules of whatever the pointer travels over — a text input, a
 * button — so the lock goes in as a stylesheet with `!important`.
 *
 * Returns the function that removes it again.
 */
const lockCursor = (cursor: string): (() => void) => {
  const style = document.createElement('style')
  style.textContent = `*, *::before, *::after { cursor: ${cursor} !important; user-select: none !important; }`
  document.head.appendChild(style)

  return () => style.remove()
}

export { lockCursor }
