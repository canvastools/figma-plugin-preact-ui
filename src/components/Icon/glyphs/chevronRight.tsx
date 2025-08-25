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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1464 9.64645C11.3417 9.45118 11.6583 9.45118 11.8536 9.64645L13.8536 11.6464C14.0488 11.8417 14.0488 12.1583 13.8536 12.3536L11.8536 14.3536C11.6583 14.5488 11.3417 14.5488 11.1464 14.3536C10.9512 14.1583 10.9512 13.8417 11.1464 13.6464L12.7929 12L11.1464 10.3536C10.9512 10.1583 10.9512 9.84171 11.1464 9.64645Z"
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
            d="M10.1464 16.3536C9.95118 16.1583 9.95118 15.8417 10.1464 15.6464L13.7929 12L10.1464 8.35355C9.95118 8.15829 9.95118 7.84171 10.1464 7.64645C10.3417 7.45118 10.6583 7.45118 10.8536 7.64645L14.8536 11.6464C15.0488 11.8417 15.0488 12.1583 14.8536 12.3536L10.8536 16.3536C10.6583 16.5488 10.3417 16.5488 10.1464 16.3536Z"
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
