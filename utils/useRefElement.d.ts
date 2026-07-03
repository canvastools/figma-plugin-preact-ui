/**
 * Resolves a RefObject to its current element as state.
 *
 * Checks the ref after every render, so elements that mount later (conditional
 * triggers/anchors) are picked up as soon as the owner re-renders. A plain
 * `ref.current` check inside a mount-only effect would miss them forever,
 * because mutating `ref.current` does not re-run effects.
 */
declare const useRefElement: <T extends HTMLElement>(ref: preact.RefObject<T | null> | null | undefined) => T | null;
export { useRefElement };
