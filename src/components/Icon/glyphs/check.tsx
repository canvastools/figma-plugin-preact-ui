import { GlyphProps } from "../Icon.types"

export const check = ({ variant, size }: GlyphProps) => {
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
            d="M11.0439 4.79033C11.4349 4.40048 12.068 4.40149 12.458 4.79228C12.8476 5.18321 12.8468 5.81636 12.4561 6.20634L7.45605 11.1966L6.75 11.9017L6.04395 11.1966L3.54395 8.70146C3.15313 8.31138 3.15207 7.67831 3.54199 7.2874C3.93202 6.89664 4.56513 6.89569 4.95605 7.28545L6.75 9.07646L11.0439 4.79033Z"
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
            d="M15.3965 9.14648C15.5918 8.95152 15.9084 8.95137 16.1035 9.14648C16.2982 9.34184 16.2985 9.65851 16.1035 9.85352L11.1035 14.8447L10.75 15.1973L10.3965 14.8447L7.89648 12.3496C7.70106 12.1546 7.70148 11.8371 7.89648 11.6416C8.0916 11.4466 8.40821 11.4467 8.60352 11.6416L10.75 13.7832L15.3965 9.14648Z"
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
            d="M16.6465 8.24648C16.8417 8.05124 17.1583 8.05123 17.3535 8.24648C17.5486 8.44175 17.5487 8.75831 17.3535 8.95351L10.25 16.057L6.64648 12.4535C6.4513 12.2583 6.4514 11.9417 6.64648 11.7465C6.84174 11.5513 7.15826 11.5513 7.35352 11.7465L10.25 14.643L16.6465 8.24648Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `Check icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
