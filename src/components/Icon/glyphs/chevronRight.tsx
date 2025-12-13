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
            d="M10.1464 8.85355C9.9512 8.65829 9.95118 8.34177 10.1464 8.14652C10.3417 7.95137 10.6582 7.95133 10.8535 8.14652L14.3535 11.6465C14.5487 11.8418 14.5486 12.1583 14.3535 12.3536L10.8535 15.8536C10.6582 16.0488 10.3417 16.0488 10.1464 15.8536C9.9512 15.6583 9.95118 15.3418 10.1464 15.1465L13.2929 12L10.1464 8.85355Z"
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
            d="M9.14645 6.14654C9.34172 5.95136 9.65824 5.95131 9.85348 6.14654L15.3535 11.6465C15.5487 11.8418 15.5487 12.1583 15.3535 12.3536L9.85348 17.8536C9.65822 18.0488 9.3417 18.0488 9.14645 17.8536C8.9512 17.6583 8.9512 17.3418 9.14645 17.1465L14.2929 12.0001L9.14645 6.85358C8.95118 6.65831 8.95118 6.34181 9.14645 6.14654Z"
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
