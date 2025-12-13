import { GlyphProps } from "../Icon.types"

export const chevronUp = ({ variant, size }: GlyphProps) => {
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
            d="M5.52489 8.52514C5.32963 8.7204 5.32963 9.03698 5.52489 9.23225C5.72016 9.42751 6.03674 9.42751 6.232 9.23225L7.99977 7.46448L9.76754 9.23225C9.9628 9.42751 10.2794 9.42751 10.4746 9.23225C10.6699 9.03698 10.6699 8.7204 10.4746 8.52514L8.35332 6.40382L7.99977 6.05027L7.64622 6.40382L5.52489 8.52514Z"
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
            d="M8.85352 13.8534C8.65827 14.0486 8.34175 14.0486 8.14648 13.8534C7.95122 13.6581 7.95122 13.3416 8.14648 13.1463L11.6465 9.64633C11.8418 9.45117 12.1583 9.4511 12.3535 9.64633L15.8535 13.1463C16.0487 13.3416 16.0487 13.6581 15.8535 13.8534C15.6583 14.0486 15.3417 14.0486 15.1465 13.8534L12 10.7069L8.85352 13.8534Z"
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
            d="M6.14633 14.8532C5.9513 14.6579 5.95115 14.3414 6.14633 14.1462L11.6463 8.64619C11.8415 8.45123 12.1582 8.45124 12.3534 8.64619L17.8534 14.1462C18.0485 14.3414 18.0484 14.6579 17.8534 14.8532C17.6581 15.0485 17.3416 15.0485 17.1463 14.8532L11.9998 9.70673L6.85336 14.8532C6.6581 15.0485 6.34159 15.0485 6.14633 14.8532Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `chevronUp icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
