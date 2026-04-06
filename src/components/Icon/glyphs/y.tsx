import { GlyphProps } from '../Icon.types'

export const y = ({ variant, size }: GlyphProps) => {
  const combination = size + '_' + variant

  switch (combination) {
    case '16_default':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.62356 8.67285L8.62258 12H7.37258L7.37356 8.67188L4.56887 4H6.02688L7.99856 7.28516L9.96926 4H11.4253L8.62356 8.67285Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.625 12.6729V16H11.375V12.6729L8.57129 8H10.0293L12 11.2852L13.9707 8H15.4287L12.625 12.6729Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6245 12.6802L12.6284 19.0005H11.3784L11.3745 12.6782L6.55225 5.00049H8.02881L11.9995 11.3247L15.9771 5.00049H17.4536L12.6245 12.6802Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`y icon error: Unsupported combination size=${size}, variant=${variant}`)
  }
}
