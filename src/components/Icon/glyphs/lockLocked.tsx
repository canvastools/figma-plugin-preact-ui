import { GlyphProps } from '../Icon.types'

export const lockLocked = ({ variant, size }: GlyphProps) => {
  const combination = size + '_' + variant

  switch (combination) {
    case '16_default':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 2C9.65685 2 11 3.34315 11 5V6H11.5C12.3284 6 13 6.67157 13 7.5V11.5L12.9922 11.6533C12.9205 12.3593 12.3593 12.9205 11.6533 12.9922L11.5 13H4.5L4.34668 12.9922C3.64069 12.9205 3.07949 12.3593 3.00781 11.6533L3 11.5V7.5C3 6.67157 3.67157 6 4.5 6H5V5C5 3.34315 6.34315 2 8 2ZM4.5 7C4.22386 7 4 7.22386 4 7.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V7.5C12 7.22386 11.7761 7 11.5 7H4.5ZM8 3C6.89543 3 6 3.89543 6 5V6H10V5C10 3.89543 9.10457 3 8 3Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 9V8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V9H15ZM8 10C7.44772 10 7 10.4477 7 11V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V11C17 10.4477 16.5523 10 16 10H8ZM16.2041 9.01074C17.2128 9.113 18 9.96435 18 11V16C18 17.0357 17.2128 17.887 16.2041 17.9893L16 18H8C6.96435 18 6.113 17.2128 6.01074 16.2041L6 16V11C6 9.89543 6.89543 9 8 9V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V9L16.2041 9.01074Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 9V7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5V9H16ZM6 10C5.44772 10 5 10.4477 5 11V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V11C19 10.4477 18.5523 10 18 10H6ZM18 9C19.1046 9 20 9.89543 20 11V18L19.9893 18.2041C19.887 19.2128 19.0357 20 18 20H6C4.96435 20 4.113 19.2128 4.01074 18.2041L4 18V11C4 9.89543 4.89543 9 6 9H7V7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5V9H18Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`lockLocked icon error: Unsupported combination size=${size}, variant=${variant}`)
  }
}
