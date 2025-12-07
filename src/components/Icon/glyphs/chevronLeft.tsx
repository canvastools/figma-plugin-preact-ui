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
            d="M13.8536 14.6466C14.0488 14.8419 14.0488 15.1584 13.8536 15.3537C13.6584 15.5488 13.3418 15.5488 13.1466 15.3537L10.1466 12.3537C9.95134 12.1584 9.95137 11.8419 10.1466 11.6466L13.1466 8.64663C13.3418 8.45137 13.6584 8.45137 13.8536 8.64663C14.0488 8.8419 14.0488 9.15844 13.8536 9.35366L11.2071 12.0001L13.8536 14.6466Z"
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
            d="M13.8535 15.6465C14.0488 15.8417 14.0488 16.1583 13.8535 16.3535C13.6583 16.5488 13.3417 16.5488 13.1465 16.3535L9.14648 12.3535C8.95122 12.1583 8.95122 11.8417 9.14648 11.6465L13.1465 7.64649C13.3417 7.45122 13.6583 7.45122 13.8535 7.64649C14.0488 7.84175 14.0488 8.15826 13.8535 8.35352L10.207 12L13.8535 15.6465Z"
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
