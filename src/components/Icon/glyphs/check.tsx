import { GlyphProps } from "../Icon.types"

export const check = ({ variant, size }: GlyphProps) => {
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
            d="M11.7773 4.084C12.0071 4.23717 12.0692 4.54761 11.916 4.77737L7.91603 10.7774C7.83293 10.902 7.69834 10.9828 7.54927 10.9976C7.4002 11.0123 7.25237 10.9595 7.14645 10.8536L4.14645 7.85358C3.95118 7.65831 3.95118 7.34173 4.14645 7.14647C4.34171 6.95121 4.65829 6.95121 4.85355 7.14647L7.42229 9.7152L11.084 4.22267C11.2372 3.99291 11.5476 3.93082 11.7773 4.084Z"
            fill="currentColor"
          />
        </svg>
      )

    case "24_small":
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
            d="M15.2519 8.56819C15.4905 8.70733 15.571 9.01349 15.4319 9.25202L11.9319 15.252C11.8498 15.3928 11.7041 15.4848 11.5416 15.4983C11.3792 15.5119 11.2203 15.4454 11.1159 15.3202L8.6159 12.3202C8.43912 12.108 8.46778 11.7928 8.67992 11.616C8.89206 11.4392 9.20734 11.4679 9.38412 11.68L11.4275 14.1321L14.5681 8.74815C14.7073 8.50962 15.0134 8.42905 15.2519 8.56819Z"
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
            d="M16.765 7.07607C16.9992 7.22242 17.0704 7.5309 16.924 7.76507L11.924 15.7651C11.8366 15.9049 11.686 15.9926 11.5212 15.9996C11.3565 16.0066 11.1989 15.932 11.1 15.8001L8.10003 11.7999C7.93434 11.579 7.97912 11.2656 8.20004 11.0999C8.42095 10.9343 8.73435 10.979 8.90003 11.2L11.4625 14.6167L16.076 7.23507C16.2224 7.0009 16.5309 6.92971 16.765 7.07607Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(
        `Check icon error: Unsupported combination size=${size}, variant=${variant}`
      )
  }
}
