import { GlyphProps } from "../Icon.types"

export const plus = ({ variant, size }: GlyphProps) => {
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
            d="M8.5 3C8.77614 3 9 3.22386 9 3.5V7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H9V11.5C9 11.7761 8.77614 12 8.5 12C8.22399 11.9998 8 11.776 8 11.5V8H4.5C4.22399 7.99984 4 7.77604 4 7.5C4 7.22396 4.22399 7.00016 4.5 7H8V3.5C8 3.22396 8.22399 3.00016 8.5 3Z"
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
            d="M12.5 6C12.7761 6 13 6.22386 13 6.5V11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H13V16.5C13 16.7761 12.7761 17 12.5 17C12.2239 17 12 16.7761 12 16.5V12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H12V6.5C12 6.22386 12.2239 6 12.5 6Z"
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
            d="M12.5 6C12.7761 6 13 6.22386 13 6.5V11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H13V16.5C13 16.7761 12.7761 17 12.5 17C12.2239 17 12 16.7761 12 16.5V12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H12V6.5C12 6.22386 12.2239 6 12.5 6Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `Plus icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
