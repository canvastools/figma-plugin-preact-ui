import { GlyphProps } from '../Icon.types'

export const y = ({ variant, size }: GlyphProps) => {
  const combination = size + '_' + variant

  switch (combination) {
    case '16_default':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.49856 8.6377L8.49758 12H7.49758L7.49856 8.6377L4.71438 4H5.88137L7.99856 7.52734L10.1138 4H11.2808L8.49856 8.6377Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 12.6377V16H11.5V12.6377L8.7168 8H9.88281L12 11.5283L14.1172 8H15.2832L12.5 12.6377Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.4995 12.644L12.5034 19.0005H11.5034L11.4995 12.6431L6.69971 5.00049H7.88135L11.9995 11.5601L16.1245 5.00049H17.3062L12.4995 12.644Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`y icon error: Unsupported combination size=${size}, variant=${variant}`)
  }
}
