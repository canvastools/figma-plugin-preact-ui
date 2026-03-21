import type { ColorTokenTree } from "./index"

const spacing: ColorTokenTree = {
  class: ":root",
  prefix: "--pui-spacing",
  variables: {
    0: "0px",
    100: "4px",
    200: "8px",
    400: "16px",
    600: "24px",
    800: "32px",
    1000: "40px",
  },
}

export { spacing }
