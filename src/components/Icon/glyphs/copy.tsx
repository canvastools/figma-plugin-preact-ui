import { GlyphProps } from "../Icon.types"

export const copy = ({ variant, size }: GlyphProps) => {
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
            d="M7.5 6C6.67157 6 6 6.67157 6 7.5V13.5C6 14.3284 6.67157 15 7.5 15H9V16.5C9 17.3284 9.67157 18 10.5 18H16.5C17.3284 18 18 17.3284 18 16.5V10.5C18 9.67157 17.3284 9 16.5 9H15V7.5C15 6.67157 14.3284 6 13.5 6H7.5ZM15 10V13.5C15 14.3284 14.3284 15 13.5 15H10V16.5C10 16.7761 10.2239 17 10.5 17H16.5C16.7761 17 17 16.7761 17 16.5V10.5C17 10.2239 16.7761 10 16.5 10H15ZM7 7.5C7 7.22386 7.22386 7 7.5 7H13.5C13.7761 7 14 7.22386 14 7.5V13.5C14 13.7761 13.7761 14 13.5 14H7.5C7.22386 14 7 13.7761 7 13.5V7.5Z"
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
            d="M14.2041 4.01074C15.2128 4.113 16 4.96435 16 6V7.5H17.5C18.8807 7.5 20 8.61929 20 10V17.5C20 18.8807 18.8807 20 17.5 20H10C8.61929 20 7.5 18.8807 7.5 17.5V16H6C4.96435 16 4.113 15.2128 4.01074 14.2041L4 14V6C4 4.89543 4.89543 4 6 4H14L14.2041 4.01074ZM16 14L15.9893 14.2041C15.8938 15.1457 15.1457 15.8938 14.2041 15.9893L14 16H8.5V17.5C8.5 18.3284 9.17157 19 10 19H17.5C18.3284 19 19 18.3284 19 17.5V10C19 9.17157 18.3284 8.5 17.5 8.5H16V14ZM6 5C5.48232 5 5.05621 5.39333 5.00488 5.89746L5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V6C15 5.48232 14.6067 5.05621 14.1025 5.00488L14 5H6Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `copy icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
