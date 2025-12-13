import { GlyphProps } from "../Icon.types"

export const chevronLeft = ({ variant, size }: GlyphProps) => {
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
            d="M9.23246 10.4749C9.0372 10.6702 8.72062 10.6702 8.52535 10.4749L6.40404 8.35357L6.05048 8.00001L6.40404 7.64646L8.52535 5.52514C8.72062 5.32988 9.0372 5.32988 9.23246 5.52514C9.42772 5.7204 9.42772 6.03698 9.23246 6.23225L7.46469 8.00001L9.23246 9.76778C9.42772 9.96305 9.42772 10.2796 9.23246 10.4749Z"
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
            d="M13.8536 15.1466C14.0488 15.3419 14.0488 15.6584 13.8536 15.8536C13.6583 16.0488 13.3418 16.0488 13.1465 15.8536L9.64654 12.3536C9.45131 12.1584 9.45137 11.8419 9.64654 11.6466L13.1465 8.1466C13.3418 7.95134 13.6583 7.95134 13.8536 8.1466C14.0488 8.34186 14.0488 8.65838 13.8536 8.85363L10.7071 12.0001L13.8536 15.1466Z"
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
            d="M14.8536 17.8534C14.6584 18.0487 14.3418 18.0486 14.1466 17.8534L8.64658 12.3534C8.45132 12.1582 8.45132 11.8417 8.64658 11.6464L14.1466 6.1464C14.3418 5.95118 14.6584 5.95115 14.8536 6.1464C15.0488 6.34165 15.0488 6.65819 14.8536 6.85343L9.70712 11.9999L14.8536 17.1464C15.0488 17.3417 15.0488 17.6582 14.8536 17.8534Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `chevronLeft icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
