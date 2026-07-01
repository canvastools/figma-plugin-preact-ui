import { GlyphProps } from '../Icon.types'

export const lockUnlocked = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 2C9.65685 2 11 3.34315 11 5C11 5.27614 10.7761 5.5 10.5 5.5C10.2239 5.5 10 5.27614 10 5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5V7H11.5C12.3284 7 13 7.67157 13 8.5V12.5C13 13.3284 12.3284 14 11.5 14H4.5L4.34668 13.9922C3.59028 13.9154 3 13.2767 3 12.5V8.5C3 7.67157 3.67157 7 4.5 7H5V5C5 3.34315 6.34315 2 8 2ZM4.5 8C4.22386 8 4 8.22386 4 8.5V12.5C4 12.7761 4.22386 13 4.5 13H11.5C11.7761 13 12 12.7761 12 12.5V8.5C12 8.22386 11.7761 8 11.5 8H4.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 3C14.2091 3 16 4.79086 16 7C16 7.27614 15.7761 7.5 15.5 7.5C15.2239 7.5 15 7.27614 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V10H16C17.1046 10 18 10.8954 18 12V17C18 18.1046 17.1046 19 16 19H8C6.89543 19 6 18.1046 6 17V12C6 10.8954 6.89543 10 8 10V7C8 4.79086 9.79086 3 12 3ZM8 11C7.44772 11 7 11.4477 7 12V17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17V12C17 11.4477 16.5523 11 16 11H8Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 10C19.1046 10 20 10.8954 20 12V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V12C4 10.8954 4.89543 10 6 10H7V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 7.27614 16.7761 7.5 16.5 7.5C16.2239 7.5 16 7.27614 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V10H18ZM6 11C5.44772 11 5 11.4477 5 12V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12C19 11.4477 18.5523 11 18 11H6Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`lockUnlocked icon error: Unsupported combination variant=${variant}`)
  }
}
