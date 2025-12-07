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
            d="M9.35357 13.8536C9.15831 14.0488 8.8418 14.0488 8.64654 13.8536C8.45132 13.6583 8.45129 13.3418 8.64654 13.1465L11.6465 10.1465C11.8418 9.95131 12.1583 9.95132 12.3536 10.1465L15.3536 13.1465C15.5488 13.3418 15.5488 13.6583 15.3536 13.8536C15.1583 14.0488 14.8418 14.0488 14.6465 13.8536L12.0001 11.2071L9.35357 13.8536Z"
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
            d="M8.35352 13.8535C8.15825 14.0488 7.84175 14.0488 7.64648 13.8535C7.45122 13.6583 7.45122 13.3417 7.64648 13.1465L11.6465 9.14648C11.8417 8.95122 12.1583 8.95122 12.3535 9.14648L16.3535 13.1465C16.5488 13.3417 16.5488 13.6583 16.3535 13.8535C16.1583 14.0488 15.8417 14.0488 15.6465 13.8535L12 10.207L8.35352 13.8535Z"
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
