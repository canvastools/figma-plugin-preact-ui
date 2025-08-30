export interface ScrollContextValue {
  positionY: number
  isAtTop: boolean
  isAtBottom: boolean
  onScroll: (event: Event) => void
  setPositionY: (positionY: number) => void
}

export interface ScrollContextProps {
  defaultPositionY?: number
  positionY?: number
  onScroll?: (args: { positionY: number }) => void
  children: preact.ComponentChildren
}
