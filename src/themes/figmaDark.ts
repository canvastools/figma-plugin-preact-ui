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
        "secondary-interactive-hover": "#444444",
        "secondary-interactive-pressed": "#383838",
        "secondary-interactive-selected": "#394360",

        "tertiary-interactive": "#444444",

        "brand-interactive": "#2C2C2C",
        "brand-interactive-hover": "#394360",
        "brand-interactive-pressed": "#4A5878",

        "danger-interactive": "#2C2C2C",
        "danger-interactive-hover": "#60332A",
        "danger-interactive-pressed": "#864537",

        swatch: "#ffffff",

        disabled: "#2C2C2C",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",

        secondary: "#C0C0C0",
        "secondary-interactive": "#C0C0C0",

        placeholder: "#A0A0A0",

        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",

        danger: "#FCA397",
        "danger-interactive": "#FCA397",

        warning: "#F7D15F",

        success: "#79D297",

        disabled: "#808080",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-selected": "#7CC4F8",

        secondary: "#C0C0C0",
        "secondary-interactive": "#C0C0C0",

        tertiary: "#767676",

        brand: "#7CC4F8",
        "brand-interactive": "#7CC4F8",

        danger: "#FCA397",
        "danger-interactive": "#FCA397",

        warning: "#F7D15F",

        success: "#79D297",

        disabled: "#808080",
      },
      border: {
        default: "#444444",
        "default-interactive": "#444444",
        "default-interactive-hover": "#444444",
        "default-interactive-selected": "#0C8CE9",

        secondary: "#767676",

        brand: "#536383",
        "brand-interactive": "#536383",
        "brand-interactive-hover": "#536383",
        "brand-interactive-selected": "#0C8CE9",

        danger: "#963323",
        "danger-interactive": "#963323",
        "danger-interactive-error": "#D4583B",

        warning: "#925711",

        success: "#0A5C35",

        "drop-position": "#ffffff",
        "drop-position-restricted": "#D4583B",

        swatch: "#FFFFFF1F",

        disabled: "#444444",
      },
    },
    "neutral-inverted": {
      bg: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-hover": "#ffffff",
        "default-interactive-pressed": "#D9D9D9",

        disabled: "#757575",
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",

        disabled: "#2c2c2c",
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",

        disabled: "#2c2c2c",
      },
    },
    "neutral-inverted-fixed": {
      bg: {
        default: "#1E1E1E",
        "default-interactive": "#1E1E1E",
        "default-interactive-hover": "#5c5c5c",
        "default-interactive-pressed": "#808080",

        disabled: "#1E1E1E",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        secondary: "#BBBBBB",
        "secondary-interactive": "#BBBBBB",

        danger: "#FCA397",
        "danger-interactive": "#FCA397",

        disabled: "#808080",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        secondary: "#BBBBBB",
        "secondary-interactive": "#BBBBBB",

        disabled: "#808080",
      },
      border: {
        default: "#383838",
      },
    },
    brand: {
      bg: {
        default: "#0C8CE9",
        "default-interactive": "#0C8CE9",
        "default-interactive-hover": "#0C8CE9",
        "default-interactive-pressed": "#105CAD",

        disabled: "#757575",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#2c2c2c",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#2c2c2c",
      },
      border: {
        "default-interactive": "#7CC4F8",
      },
    },
    danger: {
      bg: {
        default: "#E03E1A",
        "default-interactive": "#E03E1A",
        "default-interactive-hover": "#E03E1A",
        "default-interactive-pressed": "#963323",

        disabled: "#757575",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#2c2c2c",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#2c2c2c",
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
        "default-interactive-hover": "#198F51",
        "default-interactive-pressed": "#0A5C35",

        disabled: "#757575",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#2c2c2c",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#2c2c2c",
      },
      border: {
        "default-interactive": "#078348",
      },
    },
    system: {
      bg: {
        scrollbar: "#686868",
        resizer: "#A3A3A3",
      },
      border: {
        focus: "#0C8CE9",
      },
    },
    shadow: {
      "popover-hard": "#0000008a",
      "popover-soft": "#00000052",
      "popover-glare": "#ffffff0a",

      "tooltip-hard": "#0000008a",
      "tooltip-soft": "#00000052",
      "tooltip-glare": "#ffffff0a",

      "menu-hard": "#0000008a",
      "menu-soft": "#00000052",
      "menu-glare": "#ffffff0a",
    },
  },
}

export { figmaDark }
