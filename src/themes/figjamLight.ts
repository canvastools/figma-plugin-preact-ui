import type { ColorTokenTree } from "./index"

const figjamLight: ColorTokenTree = {
  class: "figjam-light",
  prefix: "--pui-color",
  variables: {
    neutral: {
      bg: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-hover": "#f5f5f5",
        "default-interactive-pressed": "#e5e5e5",
        "default-interactive-selected": "#f1e5ff",
        "default-interactive-selected-hover": "#e4ccff",
        "default-interactive-selected-pressed": "#f1e5ff",

        secondary: "#f5f5f5",
        "secondary-interactive": "#f5f5f5",
        "secondary-interactive-hover": "#e5e5e5",
        "secondary-interactive-pressed": "#f5f5f5",
        "secondary-interactive-selected": "#f8f2ff",

        "brand-interactive": "#ffffff",
        "brand-interactive-hover": "#f1e5ff",
        "brand-interactive-pressed": "#e4ccff",

        "danger-interactive": "#ffffff",
        "danger-interactive-hover": "#fff0f0",
        "danger-interactive-pressed": "#ffe2e0",

        swatch: "#ffffff",

        disabled: "#ffffff",
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#7c2bda",

        secondary: "#7d7d7d",
        "secondary-interactive": "#7d7d7d",

        placeholder: "#808080",

        brand: "#7c2bda",
        "brand-interactive": "#7c2bda",

        danger: "#dc3412",
        "danger-interactive": "#dc3412",

        warning: "#b86200",

        success: "#009951",

        disabled: "#b3b3b3",
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#7c2bda",

        secondary: "#7d7d7d",
        "secondary-interactive": "#7d7d7d",

        tertiary: "#cccccc",

        brand: "#7c2bda",
        "brand-interactive": "#7c2bda",

        danger: "#dc3412",
        "danger-interactive": "#dc3412",

        warning: "#b86200",

        success: "#009951",

        disabled: "#b3b3b3",
      },
      border: {
        default: "#e5e5e5",
        "default-interactive": "#e5e5e5",
        "default-interactive-hover": "#e5e5e5",
        "default-interactive-selected": "#8d3efb",

        secondary: "#cccccc",

        brand: "#9747ff",
        "brand-interactive": "#9747ff",
        "brand-interactive-hover": "#9747ff",
        "brand-interactive-selected": "#8d3efb",

        danger: "#ffc7c2",
        "danger-interactive": "#ffc7c2",
        "danger-interactive-error": "#f24822",

        warning: "#fcd19c",

        success: "#aff4c6",

        "drop-position": "#1a1a1a",
        "drop-position-restricted": "#f24822",

        swatch: "#0000001F",

        disabled: "#e5e5e5",
      },
    },
    "neutral-inverted": {
      bg: {
        default: "#2c2c2c",
        "default-interactive": "#2c2c2c",
        "default-interactive-hover": "#2c2c2c",
        "default-interactive-pressed": "#808080",

        disabled: "#d9d9d9",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
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
        default: "#8d3efb",
        "default-interactive": "#8d3efb",
        "default-interactive-hover": "#8d3efb",
        "default-interactive-pressed": "#6E1FB8",

        disabled: "#d9d9d9",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
      },
      border: {
        "default-interactive": "#7c2bda",
      },
    },
    danger: {
      bg: {
        default: "#f24822",
        "default-interactive": "#f24822",
        "default-interactive-hover": "#f24822",
        "default-interactive-pressed": "#bd2915",

        disabled: "#d9d9d9",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
      },
      border: {
        "default-interactive": "#dc3412",
      },
    },
    warning: {
      bg: {
        default: "#ffcd29",
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
        default: "#14ae5c",
        "default-interactive": "#14ae5c",
        "default-interactive-hover": "#14ae5c",
        "default-interactive-pressed": "#008043",

        disabled: "#d9d9d9",
      },
      text: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
      },
      icon: {
        default: "#ffffff",
        "default-interactive": "#ffffff",

        disabled: "#ffffff",
      },
      border: {
        "default-interactive": "#009951",
      },
    },
    system: {
      bg: {
        scrollbar: "#D4D4D4",
        resizer: "#A8A8A8",
      },
      border: {
        focus: "#8d3efb",
      },
    },
    shadow: {
      "popover-hard": "#0000002E",
      "popover-soft": "#0000001F",
      "popover-glare": "#FFFFFF",

      "tooltip-hard": "#0000001a",
      "tooltip-soft": "#0000001f",
      "tooltip-glare": "#ffffff0a",

      "menu-hard": "#0000002E",
      "menu-soft": "#0000001f",
      "menu-glare": "#ffffff0a",
    },
  },
}

export { figjamLight }
