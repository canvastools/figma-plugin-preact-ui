export interface GlyphProps {
  variant: IconProps['variant']
  size: number
}

export type Glyph = (props: GlyphProps) => preact.VNode

export interface IconProps {
  id?: string
  className?: string
  glyph?: Glyph
  intent?: 'neutral' | 'neutral-inverted' | 'neutral-inverted-fixed' | 'brand' | 'danger' | 'warning' | 'success'
  intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success' | 'component'
  variant?: 'default' | 'upscaled'
  size?: 16 | 24
  disabled?: boolean
  selected?: boolean
  iconColor?: string
  children?: preact.ComponentChildren
}

export type IconPropsPick = Pick<IconProps, 'glyph' | 'variant' | 'size'>
