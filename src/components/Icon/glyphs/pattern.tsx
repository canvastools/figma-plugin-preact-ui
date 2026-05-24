import { GlyphProps } from '../Icon.types'

export const pattern = ({ variant, size }: GlyphProps) => {
  const combination = size + '_' + variant

  switch (combination) {
    case '16_default':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5 3C12.3284 3 13 3.67157 13 4.5V11.5C13 12.2767 12.4097 12.9154 11.6533 12.9922L11.5 13H4.5L4.34668 12.9922C3.64069 12.9205 3.07949 12.3593 3.00781 11.6533L3 11.5V4.5C3 3.67157 3.67157 3 4.5 3H11.5ZM4 11.5C4 11.7761 4.22386 12 4.5 12H7.5V10.5H4V11.5ZM4 9.5H5.5V6.5H4V9.5ZM10.5 6.5V9.5H12V6.5H10.5ZM6.5 9.5H9.5V6.5H6.5V9.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V5.5H7.5V4H4.5ZM8.5 5.5H12V4.5C12 4.22386 11.7761 4 11.5 4H8.5V5.5ZM11.5 12C11.7761 12 12 11.7761 12 11.5V10.5H8.5V12H11.5Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.2041 6.01074C17.2128 6.113 18 6.96435 18 8V16L17.9893 16.2041C17.8938 17.1457 17.1457 17.8938 16.2041 17.9893L16 18H8C6.96435 18 6.113 17.2128 6.01074 16.2041L6 16V8C6 6.89543 6.89543 6 8 6H16L16.2041 6.01074ZM7 16C7 16.5523 7.44772 17 8 17H11.5V15H7V16ZM12.5 15V17H16C16.5523 17 17 16.5523 17 16V15H12.5ZM15 10V14H17V10H15ZM7 14H9V10H7V14ZM10 14H14V10H10V14ZM12.5 9H17V8C17 7.44772 16.5523 7 16 7H12.5V9ZM8 7C7.44772 7 7 7.44772 7 8V9H11.5V7H8Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18ZM5 18C5 18.5523 5.44772 19 6 19H11.5V16H5V18ZM12.5 16V19H18C18.5523 19 19 18.5523 19 18V16H12.5ZM16 9V15H19V9H16ZM5 15H8V9H5V15ZM9 15H15V9H9V15ZM12.5 8H19V6C19 5.44772 18.5523 5 18 5H12.5V8ZM6 5C5.44772 5 5 5.44772 5 6V8H11.5V5H6Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`pattern icon error: Unsupported combination size=${size}, variant=${variant}`)
  }
}
