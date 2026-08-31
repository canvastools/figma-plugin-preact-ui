import { GlyphProps } from '../Icon.types'

export const heartFilled = ({ variant }: GlyphProps) => {
  const combination = variant

  switch (combination) {
    case 'downscaled':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.02574 4.02559C9.39258 2.65881 11.6081 2.65877 12.975 4.02559C14.3416 5.39242 14.3417 7.60804 12.975 8.97482L8.70738 13.2424C8.31693 13.6329 7.68386 13.6327 7.29332 13.2424L3.02573 8.97482C1.65889 7.60798 1.65889 5.39243 3.02573 4.02559C4.39257 2.65881 6.60814 2.65877 7.97496 4.02559L8.00035 4.05098L8.02574 4.02559Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'default':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.3878 6.96223C13.991 5.58181 16.4128 5.68645 17.8897 7.23469C19.3664 8.78333 19.3567 11.2083 17.9014 12.7444L17.7559 12.8899L12.6876 17.7238C12.3012 18.0923 11.6931 18.0923 11.3067 17.7238L6.23842 12.8899C4.6401 11.3653 4.58016 8.83328 6.10464 7.23469C7.62924 5.63627 10.1612 5.57648 11.7598 7.1009L11.9971 7.32746L12.2344 7.1009L12.3878 6.96223Z"
            fill="currentColor"
          />
        </svg>
      )

    case 'upscaled':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.5509 5.37923C6.55026 3.47491 9.71573 3.55283 11.6202 5.55111L11.9971 5.94759L12.377 5.55013C14.2814 3.55187 17.446 3.47468 19.4453 5.37826C21.4446 7.28308 21.5207 10.4484 19.6162 12.4475L12.7217 19.6848C12.533 19.8828 12.2717 19.9953 11.9981 19.9953C11.7246 19.9953 11.4632 19.8828 11.2745 19.6848L4.37902 12.4475C2.4756 10.4482 2.55237 7.28353 4.5509 5.37923Z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      throw new Error(`heartFilled icon error: Unsupported combination variant=${variant}`)
  }
}
