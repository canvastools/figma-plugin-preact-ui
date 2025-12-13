import { GlyphProps } from "../Icon.types"

export const chevronDown = ({ variant, size }: GlyphProps) => {
  const combination = size + "_" + variant

  switch (combination) {
    case "16_default":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4751 7.47486C10.6704 7.2796 10.6704 6.96302 10.4751 6.76775C10.2798 6.57249 9.96326 6.57249 9.768 6.76775L8.00023 8.53552L6.23246 6.76775C6.0372 6.57249 5.72062 6.57249 5.52535 6.76775C5.33009 6.96302 5.33009 7.2796 5.52535 7.47486L7.64668 9.59618L8.00023 9.94973L8.35378 9.59618L10.4751 7.47486Z"
            fill="currentColor"
          />
        </svg>
      )

    case "24_scaled":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1464 10.1464C15.3417 9.9512 15.6582 9.95118 15.8535 10.1464C16.0486 10.3417 16.0487 10.6582 15.8535 10.8535L12.3535 14.3535C12.1582 14.5487 11.8417 14.5486 11.6464 14.3535L8.14645 10.8535C7.95118 10.6582 7.95118 10.3417 8.14645 10.1464C8.34171 9.9512 8.65823 9.95118 8.85348 10.1464L12 13.2929L15.1464 10.1464Z"
            fill="currentColor"
          />
        </svg>
      )

    case "24_default":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8546 9.1469C18.0497 9.34219 18.0498 9.65875 17.8546 9.85394L12.3546 15.3539C12.1594 15.5489 11.8428 15.5489 11.6476 15.3539L6.14762 9.85394C5.95245 9.65875 5.95259 9.34218 6.14762 9.1469C6.34288 8.95166 6.65939 8.95166 6.85465 9.1469L12.0011 14.2934L17.1476 9.1469C17.3429 8.95164 17.6594 8.95164 17.8546 9.1469Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `chevronDown icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
