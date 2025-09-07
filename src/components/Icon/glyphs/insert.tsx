import { GlyphProps } from "../Icon.types"

export const insert = ({ variant, size }: GlyphProps) => {
  const combination = size + "_" + variant

  switch (combination) {
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
            d="M12.5 4C16.6421 4 20 7.35786 20 11.5C20 15.6421 16.6421 19 12.5 19C8.35786 19 5 15.6421 5 11.5C5 7.35786 8.35786 4 12.5 4ZM12.5 5C8.91015 5 6 7.91015 6 11.5C6 15.0899 8.91015 18 12.5 18C16.0899 18 19 15.0899 19 11.5C19 7.91015 16.0899 5 12.5 5ZM12.5 8.5C12.7761 8.5 13 8.72386 13 9V11H15C15.2761 11 15.5 11.2239 15.5 11.5C15.5 11.7761 15.2761 12 15 12H13V14C13 14.2761 12.7761 14.5 12.5 14.5C12.2239 14.5 12 14.2761 12 14V12H10C9.72386 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.72386 11 10 11H12V9C12 8.72386 12.2239 8.5 12.5 8.5Z"
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
            d="M12.5 3C17.1944 3 21 6.80558 21 11.5C21 16.1944 17.1944 20 12.5 20C7.80558 20 4 16.1944 4 11.5C4 6.80558 7.80558 3 12.5 3ZM12.5 4C8.35786 4 5 7.35786 5 11.5C5 15.6421 8.35786 19 12.5 19C16.6421 19 20 15.6421 20 11.5C20 7.35786 16.6421 4 12.5 4ZM12.5 7C12.7761 7 13 7.22386 13 7.5V11H16.5C16.7761 11 17 11.2239 17 11.5C17 11.7761 16.7761 12 16.5 12H13V15.5C13 15.7761 12.7761 16 12.5 16C12.2239 16 12 15.7761 12 15.5V12H8.5C8.22386 12 8 11.7761 8 11.5C8 11.2239 8.22386 11 8.5 11H12V7.5C12 7.22386 12.2239 7 12.5 7Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `insert icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
