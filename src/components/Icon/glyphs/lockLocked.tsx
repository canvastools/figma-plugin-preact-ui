import { GlyphProps } from '../Icon.types'

export const lockLocked = ({ variant, size }: GlyphProps) => {
  const combination = size + '_' + variant

  switch (combination) {
    case '16_default':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 1.5C9.65685 1.5 11 2.84315 11 4.5V6H11.5C12.3284 6 13 6.67157 13 7.5V11.5L12.9922 11.6533C12.9205 12.3593 12.3593 12.9205 11.6533 12.9922L11.5 13H4.5L4.34668 12.9922C3.64069 12.9205 3.07949 12.3593 3.00781 11.6533L3 11.5V7.5C3 6.67157 3.67157 6 4.5 6H5V4.5C5 2.84315 6.34315 1.5 8 1.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V7.5C12 7.22386 11.7761 7 11.5 7H4.5ZM8 2.5C6.89543 2.5 6 3.39543 6 4.5V6H10V4.5C10 3.39543 9.10457 2.5 8 2.5Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 3.5C14.2091 3.5 16 5.29086 16 7.5V9H16.5C17.3284 9 18 9.67157 18 10.5V16.5L17.9922 16.6533C17.9154 17.4097 17.2767 18 16.5 18H7.5C6.72334 18 6.08461 17.4097 6.00781 16.6533L6 16.5V10.5C6 9.67157 6.67157 9 7.5 9H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM7.5 10C7.22386 10 7 10.2239 7 10.5V16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5V10.5C17 10.2239 16.7761 10 16.5 10H7.5ZM12 4.5C10.3431 4.5 9 5.84315 9 7.5V9H15V7.5C15 5.84315 13.6569 4.5 12 4.5Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C14.7614 2 17 4.23858 17 7V9H18.5C19.3284 9 20 9.67157 20 10.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.72334 20 4.08461 19.4097 4.00781 18.6533L4 18.5V10.5C4 9.67157 4.67157 9 5.5 9H7V7C7 4.23858 9.23858 2 12 2ZM5.5 10C5.22386 10 5 10.2239 5 10.5V18.5C5 18.7761 5.22386 19 5.5 19H18.5C18.7761 19 19 18.7761 19 18.5V10.5C19 10.2239 18.7761 10 18.5 10H5.5ZM12 3C9.79086 3 8 4.79086 8 7V9H16V7C16 4.79086 14.2091 3 12 3Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`lockLocked icon error: Unsupported combination size=${size}, variant=${variant}`)
  }
}
