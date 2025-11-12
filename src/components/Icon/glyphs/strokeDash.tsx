import { GlyphProps } from "../Icon.types"

export const strokeDash = ({ variant, size }: GlyphProps) => {
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
            d="M7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12H5.5C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11H7.5ZM13 11C13.2761 11 13.5 11.2239 13.5 11.5C13.5 11.7761 13.2761 12 13 12H11C10.7239 12 10.5 11.7761 10.5 11.5C10.5 11.2239 10.7239 11 11 11H13ZM18.5 11C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H16.5C16.2239 12 16 11.7761 16 11.5C16 11.2239 16.2239 11 16.5 11H18.5Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `strokeDash icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
