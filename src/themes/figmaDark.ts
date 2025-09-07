import type { ColorTokenTree } from "./index"

const figmaDark: ColorTokenTree = {
  class: "figma-dark",
  prefix: "--pui-color",
  variables: {
    neutral: {
      bg: {
        default: "#2C2C2C",
        "default-interactive": "#2C2C2C",
        "default-interactive-hover": "#383838",
        "default-interactive-pressed": "#444444",
        "default-interactive-selected": "#4A5878",
        "default-interactive-selected-hover": "#394360",
        "default-interactive-selected-pressed": "#4A5878",

        secondary: "#383838",
        "secondary-interactive": "#383838",
        "secondary-interactive-selected": "#394360",

        "brand-interactive": "#2C2C2C",
        "brand-interactive-hover": "#394360",
        "brand-interactive-pressed": "#4A5878",

        "danger-interactive": "#2C2C2C",
        "danger-interactive-hover": "#60332A",
        "danger-interactive-pressed": "#864537",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",

        secondary: "#C0C0C0",
        "secondary-interactive": "#808080",

        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",

        danger: "#FCA397",
        "danger-interactive": "#FCA397",

        warning: "#F7D15F",

        success: "#79D297",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",

        secondary: "#C0C0C0",
        tertiary: "#767676",

        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",

        danger: "#FCA397",
        "danger-interactive": "#FCA397",

        warning: "#F7D15F",

        success: "#79D297",
      },
      border: {
        default: "#444444",
        "default-interactive": "#444444",
        "default-interactive-selected": "#0C8CE9",
        "default-interactive-selected-error": "#D4583B",

        secondary: "#767676",

        brand: "#536383",
        "brand-interactive": "#536383",

        danger: "#963323",
        "danger-interactive": "#963323",

        warning: "#925711",

        success: "#0A5C35",

        "drop-position": "#ffffff",
        "drop-position-restricted": "#D4583B",
      },
    },
    "neutral-inverted": {
      bg: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-hover": "#e5e5e5",
        "default-interactive-pressed": "#D9D9D9",
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
      },
    },
    brand: {
      bg: {
        default: "#0C8CE9",
        "default-interactive": "#0C8CE9",
        "default-interactive-hover": "#0A6DC2",
        "default-interactive-pressed": "#105CAD",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
      },
      border: {
        "default-interactive": "#7CC4F8",
      },
    },
    danger: {
      bg: {
        default: "#E03E1A",
        "default-interactive": "#E03E1A",
        "default-interactive-hover": "#C4381C",
        "default-interactive-pressed": "#963323",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
      },
      border: {
        "default-interactive": "#A55440",
      },
    },
    warning: {
      bg: {
        default: "#F3C11B",
      },
      text: {
        default: "#000000",
      },
      icon: {
        default: "#000000",
      },
      border: {},
    },
    success: {
      bg: {
        default: "#198F51",
        "default-interactive": "#198F51",
        "default-interactive-hover": "#078348",
        "default-interactive-pressed": "#0A5C35",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
      },
      border: {
        "default-interactive": "#078348",
      },
    },
    disabled: {
      bg: {
        default: "#757575",
        secondary: "#2C2C2C",
      },
      text: {
        default: "#2C2C2C",
        secondary: "#808080",
      },
      icon: {
        default: "#2C2C2C",
        secondary: "#808080",
      },
      border: {
        secondary: "#444444",
      },
    },
    system: {
      bg: {
        scrollbar: "#686868",
        resizer: "#686868",
      },
      border: {
        focus: "#0C8CE9",
      },
    },
  },
}

export { figmaDark }
