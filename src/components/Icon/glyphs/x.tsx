import { GlyphProps } from '../Icon.types'

export const x = ({ variant, size }: GlyphProps) => {
  const combination = size + '_' + variant

  switch (combination) {
    case '16_default':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.59817 8L11.2652 12H10.063L7.99758 8.90137L5.93215 12H4.73L7.39602 8L4.73 4H5.93215L7.99758 7.09863L10.063 4H11.2652L8.59817 8Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6006 12L15.2676 16H14.0654L12 12.9014L9.93457 16H8.73242L11.3984 12L8.73242 8H9.93457L12 11.0986L14.0654 8H15.2676L12.6006 12Z"
            fill="currentColor"
          />
        </svg>
      )

    case '24_upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.604 11.9995L17.272 19.0005H16.0698L12.0034 12.9009L7.93799 19.0005H6.73584L11.4028 11.9995L6.73682 5.00049H7.93896L12.0034 11.0981L16.0688 5.00049H17.271L12.604 11.9995Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`x icon error: Unsupported combination size=${size}, variant=${variant}`)
  }
}
