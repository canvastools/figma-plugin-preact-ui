import { GlyphProps } from "../Icon.types"

export const viewList = ({ variant, size }: GlyphProps) => {
  const combination = size + "_" + variant

  switch (combination) {
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
            d="M7 15.5C7.55228 15.5 8 15.9477 8 16.5C8 17.0523 7.55228 17.5 7 17.5C6.44772 17.5 6 17.0523 6 16.5C6 15.9477 6.44772 15.5 7 15.5ZM17.5 16C17.7761 16 18 16.2239 18 16.5C18 16.7761 17.7761 17 17.5 17H10.5C10.2239 17 10 16.7761 10 16.5C10 16.2239 10.2239 16 10.5 16H17.5ZM7 10.5C7.55228 10.5 8 10.9477 8 11.5C8 12.0523 7.55228 12.5 7 12.5C6.44772 12.5 6 12.0523 6 11.5C6 10.9477 6.44772 10.5 7 10.5ZM17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H10.5C10.2239 12 10 11.7761 10 11.5C10 11.2239 10.2239 11 10.5 11H17.5ZM7 5.5C7.55228 5.5 8 5.94772 8 6.5C8 7.05228 7.55228 7.5 7 7.5C6.44772 7.5 6 7.05228 6 6.5C6 5.94772 6.44772 5.5 7 5.5ZM17.5 6C17.7761 6 18 6.22386 18 6.5C18 6.77614 17.7761 7 17.5 7H10.5C10.2239 7 10 6.77614 10 6.5C10 6.22386 10.2239 6 10.5 6H17.5Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `viewList icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
