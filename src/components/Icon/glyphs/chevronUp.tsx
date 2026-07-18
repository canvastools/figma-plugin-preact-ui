import { GlyphProps } from '../Icon.types'

export const chevronUp = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.23242 8.85164C6.0372 9.04685 5.72066 9.04677 5.52539 8.85164C5.33013 8.65637 5.33013 8.33987 5.52539 8.1446L8 5.67L10.4746 8.1446C10.6699 8.33987 10.6699 8.65637 10.4746 8.85164C10.2793 9.04673 9.96278 9.04684 9.76758 8.85164L8 7.08406L6.23242 8.85164Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.2324 14.3536C7.03723 14.5487 6.72065 14.5486 6.52537 14.3536C6.33011 14.1583 6.33011 13.8418 6.52537 13.6466L12.0019 8.16999L17.4785 13.6466C17.6736 13.8418 17.6735 14.1583 17.4785 14.3536C17.2832 14.5487 16.9667 14.5487 16.7715 14.3536L12.0019 9.58405L7.2324 14.3536Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.17524 15.8455C3.95071 15.6331 3.94056 15.2782 4.15278 15.0535L11.5922 7.17556C11.6979 7.06379 11.8447 6.99996 11.9985 6.99978C12.1524 6.99978 12.2999 7.06375 12.4057 7.17556L19.8452 15.0535C20.0575 15.2783 20.0474 15.6331 19.8227 15.8455C19.5979 16.0578 19.2431 16.0477 19.0307 15.823L11.9995 8.37575L4.96723 15.823C4.75489 16.0478 4.40009 16.0578 4.17524 15.8455Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`chevronUp icon error: Unsupported combination variant=${variant}`)
  }
}
