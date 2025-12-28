import { GlyphProps } from "../Icon.types"

export const mixed = ({ variant, size }: GlyphProps) => {
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
            d="M11.5 7C12.0523 7 12.5 7.44772 12.5 8C12.5 8.55228 12.0523 9 11.5 9H4.5C3.94772 9 3.5 8.55228 3.5 8C3.5 7.44772 3.94772 7 4.5 7H11.5Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `Mixed icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
