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
            d="M14.6464 10.1464C14.8417 9.95118 15.1582 9.95118 15.3535 10.1464C15.5486 10.3417 15.5487 10.6582 15.3535 10.8535L12.3535 13.8535C12.1582 14.0487 11.8417 14.0486 11.6464 13.8535L8.64643 10.8535C8.45118 10.6582 8.4512 10.3417 8.64643 10.1464C8.84169 9.95118 9.1582 9.95118 9.35346 10.1464L11.9999 12.7929L14.6464 10.1464Z"
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
            d="M15.6465 10.1465C15.8417 9.95122 16.1583 9.95122 16.3535 10.1465C16.5488 10.3417 16.5488 10.6583 16.3535 10.8535L12.3535 14.8535C12.1583 15.0488 11.8417 15.0488 11.6465 14.8535L7.64648 10.8535C7.45122 10.6583 7.45122 10.3417 7.64648 10.1465C7.84175 9.95122 8.15825 9.95122 8.35352 10.1465L12 13.793L15.6465 10.1465Z"
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
