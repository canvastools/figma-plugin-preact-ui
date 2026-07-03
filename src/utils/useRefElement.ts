import { useEffect, useState } from 'preact/hooks'

/**
 * Resolves a RefObject to its current element as state.
 *
 * Checks the ref after every render, so elements that mount later (conditional
 * triggers/anchors) are picked up as soon as the owner re-renders. A plain
 * `ref.current` check inside a mount-only effect would miss them forever,
 * because mutating `ref.current` does not re-run effects.
 */
const useRefElement = <T extends HTMLElement>(ref: preact.RefObject<T | null> | null | undefined): T | null => {
  const [element, setElement] = useState<T | null>(ref?.current ?? null)

  // Intentionally no dependency array: ref mutations don't trigger renders,
  // so the only way to notice a late-mounted element is to check after every
  // render. setElement bails out when the element is unchanged, so this does
  // not loop.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const el = ref?.current ?? null
    setElement((prev) => (prev === el ? prev : el))
  })

  return element
}

export { useRefElement }
