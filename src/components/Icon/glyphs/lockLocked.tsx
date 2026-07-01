import { GlyphProps } from '../Icon.types'

export const lockLocked = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 3C9.65685 3 11 4.34315 11 6V7H11.5C12.3284 7 13 7.67157 13 8.5V12.5L12.9922 12.6533C12.9205 13.3593 12.3593 13.9205 11.6533 13.9922L11.5 14H4.5L4.34668 13.9922C3.64069 13.9205 3.07949 13.3593 3.00781 12.6533L3 12.5V8.5C3 7.67157 3.67157 7 4.5 7H5V6C5 4.34315 6.34315 3 8 3ZM4.5 8C4.22386 8 4 8.22386 4 8.5V12.5C4 12.7761 4.22386 13 4.5 13H11.5C11.7761 13 12 12.7761 12 12.5V8.5C12 8.22386 11.7761 8 11.5 8H4.5ZM8 4C6.89543 4 6 4.89543 6 6V7H10V6C10 4.89543 9.10457 4 8 4Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 10V9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9V10H15ZM8 11C7.44772 11 7 11.4477 7 12V17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17V12C17 11.4477 16.5523 11 16 11H8ZM16.2041 10.0107C17.2128 10.113 18 10.9643 18 12V17C18 18.0357 17.2128 18.887 16.2041 18.9893L16 19H8C6.96435 19 6.113 18.2128 6.01074 17.2041L6 17V12C6 10.8954 6.89543 10 8 10V9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9V10L16.2041 10.0107Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 10V8.5C16 6.29086 14.2091 4.5 12 4.5C9.79086 4.5 8 6.29086 8 8.5V10H16ZM6 11C5.44772 11 5 11.4477 5 12V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12C19 11.4477 18.5523 11 18 11H6ZM18 10C19.1046 10 20 10.8954 20 12V19L19.9893 19.2041C19.887 20.2128 19.0357 21 18 21H6C4.96435 21 4.113 20.2128 4.01074 19.2041L4 19V12C4 10.8954 4.89543 10 6 10H7V8.5C7 5.73858 9.23858 3.5 12 3.5C14.7614 3.5 17 5.73858 17 8.5V10H18Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`lockLocked icon error: Unsupported combination variant=${variant}`)
  }
}
