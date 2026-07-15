import { GlyphProps } from '../Icon.types'

export const chevronLeft = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.14638 6.23348C6.95116 6.03826 6.95125 5.72172 7.14638 5.52645C7.34164 5.33119 7.65815 5.33119 7.85341 5.52645L10.328 8.00106L7.85341 10.4757C7.65815 10.6709 7.34164 10.6709 7.14638 10.4757C6.95129 10.2804 6.95117 9.96384 7.14638 9.76864L8.91396 8.00106L7.14638 6.23348Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.3536 16.7707C14.5488 16.9659 14.5487 17.2825 14.3536 17.4777C14.1583 17.6729 13.8418 17.673 13.6466 17.4777L8.17 12.0012L13.6466 6.5246C13.8418 6.32939 14.1583 6.3295 14.3536 6.5246C14.5487 6.71988 14.5488 7.03643 14.3536 7.23164L9.58406 12.0012L14.3536 16.7707Z"
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
            d="M15.8451 19.8231C15.6327 20.0477 15.2779 20.0578 15.0531 19.8456L7.17519 12.4061C7.06342 12.3005 6.99958 12.1536 6.99941 11.9999C6.99941 11.8459 7.06336 11.6984 7.17519 11.5926L15.0531 4.15319C15.2779 3.9409 15.6328 3.95091 15.8451 4.17565C16.0574 4.40047 16.0474 4.75529 15.8227 4.96764L8.37539 11.9989L15.8226 19.0311C16.0474 19.2435 16.0574 19.5983 15.8451 19.8231Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      throw new Error(`chevronLeft icon error: Unsupported combination variant=${variant}`)
  }
}
