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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM19 12C19 15.866 15.866 19 12 19C8.134 19 5 15.866 5 12C5 8.134 8.134 5 12 5C15.866 5 19 8.134 19 12ZM12.5 9.5C12.5 9.22386 12.2761 9 12 9C11.7239 9 11.5 9.22386 11.5 9.5V11.5H9.5C9.22386 11.5 9 11.7239 9 12C9 12.2761 9.22386 12.5 9.5 12.5H11.5V14.5C11.5 14.7761 11.7239 15 12 15C12.2761 15 12.5 14.7761 12.5 14.5V12.5H14.5C14.7761 12.5 15 12.2761 15 12C15 11.7239 14.7761 11.5 14.5 11.5H12.5V9.5Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 12C20 16.4183 16.4183 20 12 20C7.58173 20 4 16.4183 4 12C4 7.58173 7.58173 4 12 4C16.4183 4 20 7.58173 20 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02943 21 3 16.9706 3 12C3 7.02943 7.02943 3 12 3C16.9706 3 21 7.02943 21 12ZM12.5 8.5C12.5 8.22386 12.2761 8 12 8C11.7239 8 11.5 8.22386 11.5 8.5V11.5H8.5C8.22386 11.5 8 11.7239 8 12C8 12.2761 8.22386 12.5 8.5 12.5H11.5V15.5C11.5 15.7761 11.7239 16 12 16C12.2761 16 12.5 15.7761 12.5 15.5V12.5H15.5C15.7761 12.5 16 12.2761 16 12C16 11.7239 15.7761 11.5 15.5 11.5H12.5V8.5Z"
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
