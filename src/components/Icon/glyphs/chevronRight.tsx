import { GlyphProps } from "../Icon.types"

export const chevronRight = ({ variant, size }: GlyphProps) => {
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.76754 5.52511C6.9628 5.32985 7.27938 5.32985 7.47465 5.52511L9.59596 7.64643L9.94952 7.99999L9.59596 8.35354L7.47465 10.4749C7.27938 10.6701 6.9628 10.6701 6.76754 10.4749C6.57228 10.2796 6.57228 9.96302 6.76754 9.76775L8.53531 7.99999L6.76754 6.23222C6.57228 6.03695 6.57228 5.72037 6.76754 5.52511Z"
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
            d="M10.1464 9.35349C9.95118 9.15823 9.95118 8.84172 10.1464 8.64646C10.3417 8.45127 10.6582 8.45122 10.8535 8.64646L13.8535 11.6465C14.0487 11.8417 14.0487 12.1582 13.8535 12.3535L10.8535 15.3535C10.6582 15.5488 10.3417 15.5488 10.1464 15.3535C9.95118 15.1582 9.95118 14.8417 10.1464 14.6465L12.7929 12L10.1464 9.35349Z"
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
            d="M10.1465 8.35352C9.95122 8.15825 9.95122 7.84175 10.1465 7.64648C10.3417 7.45122 10.6583 7.45122 10.8535 7.64648L14.8535 11.6465C15.0488 11.8417 15.0488 12.1583 14.8535 12.3535L10.8535 16.3535C10.6583 16.5488 10.3417 16.5488 10.1465 16.3535C9.95122 16.1583 9.95122 15.8417 10.1465 15.6465L13.793 12L10.1465 8.35352Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `chevronRight icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
