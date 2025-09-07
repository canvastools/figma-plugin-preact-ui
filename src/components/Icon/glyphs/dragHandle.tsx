import { GlyphProps } from "../Icon.types"

export const dragHandle = ({ variant, size }: GlyphProps) => {
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
            d="M11 12H5V10H11V12ZM11 9H5V7H11V9ZM11 6H5V4H11V6Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `dragHandle icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
