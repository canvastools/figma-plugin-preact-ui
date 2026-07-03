import type { SectionProps } from '../../index'

type SectionPropsPick = Pick<SectionProps, 'variant' | 'padding' | 'children'>

export interface SectionCollapsibleProps {
  id?: string
  className?: string
  collapsed?: boolean
  onCollapsedChange?: (args: { event: MouseEvent; collapsed: boolean }) => void
  sectionProps?: SectionPropsPick
  children?: preact.ComponentChildren
  tabIndex?: number
}
