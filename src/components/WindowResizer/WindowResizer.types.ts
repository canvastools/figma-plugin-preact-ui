export interface WindowResizerProps {
  id?: string
  className?: string
  minWidth: number
  minHeight: number
  maxWidth: number
  maxHeight: number
  onResize?: (args: { width: number; height: number }) => void
}
