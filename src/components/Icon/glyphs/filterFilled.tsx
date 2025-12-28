import { GlyphProps } from "../Icon.types"

export const filterFilled = ({ variant, size }: GlyphProps) => {
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
            d="M11.5 5C15.6421 5 19 8.35786 19 12.5C19 16.6421 15.6421 20 11.5 20C7.35786 20 4 16.6421 4 12.5C4 8.35786 7.35786 5 11.5 5ZM10.5 15C10.2239 15 10 15.2239 10 15.5C10 15.7761 10.2239 16 10.5 16H12.5C12.7761 16 13 15.7761 13 15.5C13 15.2239 12.7761 15 12.5 15H10.5ZM9.5 12C9.22386 12 9 12.2239 9 12.5C9 12.7761 9.22386 13 9.5 13H13.5C13.7761 13 14 12.7761 14 12.5C14 12.2239 13.7761 12 13.5 12H9.5ZM8.5 9C8.22386 9 8 9.22386 8 9.5C8 9.77614 8.22386 10 8.5 10H14.5C14.7761 10 15 9.77614 15 9.5C15 9.22386 14.7761 9 14.5 9H8.5Z"
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
            d="M12.5 3C17.1944 3 21 6.80558 21 11.5C21 16.1944 17.1944 20 12.5 20C7.80558 20 4 16.1944 4 11.5C4 6.80558 7.80558 3 12.5 3ZM11 14C10.7239 14 10.5 14.2239 10.5 14.5C10.5 14.7761 10.7239 15 11 15H14C14.2761 15 14.5 14.7761 14.5 14.5C14.5 14.2239 14.2761 14 14 14H11ZM10 11C9.72386 11 9.5 11.2239 9.5 11.5C9.5 11.7761 9.72386 12 10 12H15C15.2761 12 15.5 11.7761 15.5 11.5C15.5 11.2239 15.2761 11 15 11H10ZM9 8C8.72386 8 8.5 8.22386 8.5 8.5C8.5 8.77614 8.72386 9 9 9H16C16.2761 9 16.5 8.77614 16.5 8.5C16.5 8.22386 16.2761 8 16 8H9Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `filterFilled icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
