import { GlyphProps } from '../Icon.types'

export const fontSize = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.52539 12H7.67383L6.96289 10.0361H4.15234L3.44141 12H2.59082L5.10449 5.0625H6.0127L8.52539 12ZM13.4102 12H12.7227L12.3467 10.9121H10.5625L10.1846 12H9.49707L11.0322 7.58789H11.8857L13.4102 12ZM10.7715 10.3125H12.1387L11.457 8.33984L10.7715 10.3125ZM4.40625 9.33691H6.70996L5.55859 6.15625L4.40625 9.33691Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6572 16H11.5928L10.7715 13.7324H7.61523L6.79297 16H5.73047L8.62891 8H9.75879L12.6572 16ZM18.3027 16H17.4033L16.9883 14.7998H15L14.583 16H13.6826L15.4531 10.9121H16.5439L18.3027 16ZM15.2783 13.999H16.7109L15.9971 11.9326L15.2783 13.999ZM7.90527 12.9316H10.4814L9.19336 9.375L7.90527 12.9316Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.7729 18H11.4956L10.3491 14.834H5.86377L4.71729 18H3.43994L7.42334 7.00781H8.7915L12.7729 18ZM20.5327 18H19.4741L18.8696 16.251H16.0308L15.4224 18H14.3628L16.7964 11.0088H18.1157L20.5327 18ZM16.3442 15.3506H18.5581L17.4546 12.1572L16.3442 15.3506ZM6.22607 13.834H9.98779L8.10693 8.64062L6.22607 13.834Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`fontSize icon error: Unsupported combination variant=${variant}`)
  }
}
