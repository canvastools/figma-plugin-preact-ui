export interface MenuContainerProps {
  id?: string
  className?: string
  width?: number
  height?: number
  children: preact.ComponentChildren
}

export type MenuContainerPropsPick = Pick<MenuContainerProps, "width">
