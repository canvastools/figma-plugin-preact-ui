import { GlyphProps } from '../Icon.types'

export const chevronRight = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.85164 9.76864C9.04686 9.96386 9.04677 10.2804 8.85164 10.4757C8.65638 10.6709 8.33987 10.6709 8.14461 10.4757L5.67 8.00106L8.14461 5.52645C8.33987 5.33119 8.65638 5.33119 8.85164 5.52645C9.04674 5.72173 9.04685 6.03828 8.85164 6.23348L7.08407 8.00106L8.85164 9.76864Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.64645 7.23403C9.45118 7.03877 9.45118 6.72128 9.64645 6.52602C9.84174 6.33144 10.1584 6.33105 10.3535 6.52602L15.8281 12.0006L10.4755 17.3532C10.2803 17.5484 9.96378 17.5484 9.76852 17.3532C9.57352 17.1579 9.57335 16.8413 9.76852 16.6461L14.413 12.0006L9.64645 7.23403Z"
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
            d="M8.15291 4.17528C8.36527 3.95067 8.72012 3.94057 8.9449 4.15282L16.8228 11.5923C16.9346 11.6979 16.9984 11.8447 16.9986 11.9985C16.9986 12.1525 16.9347 12.3 16.8228 12.4057L8.9449 19.8452C8.72007 20.0575 8.36525 20.0475 8.1529 19.8227C7.94062 19.5979 7.95064 19.2431 8.17536 19.0307L15.6226 11.9995L8.17537 4.96727C7.95058 4.75493 7.9406 4.40012 8.15291 4.17528Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`chevronRight icon error: Unsupported combination variant=${variant}`)
  }
}
