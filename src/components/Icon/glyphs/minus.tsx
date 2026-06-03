import { GlyphProps } from '../Icon.types'

export const minus = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5 8C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H3.5C3.22386 9 3 8.77614 3 8.5C3 8.22386 3.22386 8 3.5 8H11.5Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5 12C16.7761 12 17 12.2239 17 12.5C17 12.7761 16.7761 13 16.5 13H6.5C6.22386 13 6 12.7761 6 12.5C6 12.2239 6.22386 12 6.5 12H16.5Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.5 12C18.7761 12 19 12.2239 19 12.5C19 12.7761 18.7761 13 18.5 13H4.5C4.22386 13 4 12.7761 4 12.5C4 12.2239 4.22386 12 4.5 12H18.5Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`minus icon error: Unsupported combination variant=${variant}`)
  }
}
