import type { ColorTokenTree } from "./index"

const figmaLight: ColorTokenTree = {
  class: "figma-light",
  prefix: "--pui-color",
  variables: {
    neutral: {
      bg: {
        default: "#ffffff",
        "default-interactive": "#ffffff",
        "default-interactive-hover": "#f5f5f5",
        "default-interactive-pressed": "#e5e5e5",
        "default-interactive-selected": "#e5f4ff",
        "default-interactive-selected-hover": "#bde3ff",
        "default-interactive-selected-pressed": "#e5f4ff",

        secondary: "#f5f5f5",
        "secondary-interactive": "#f5f5f5",
        "secondary-interactive-hover": "#e5e5e5",
        "secondary-interactive-pressed": "#f5f5f5",
        "secondary-interactive-selected": "#f2f9ff",

        "brand-interactive": "#ffffff",
        "brand-interactive-hover": "#e5f4ff",
        "brand-interactive-pressed": "#bde3ff",

        "danger-interactive": "#ffffff",
        "danger-interactive-hover": "#fff0f0",
        "danger-interactive-pressed": "#ffe2e0",

        swatch: "#ffffff",

        disabled: "#ffffff",
      },
      text: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#007be5",

        secondary: "#7d7d7d",
        "secondary-interactive": "#7d7d7d",

        placeholder: "#808080",

        brand: "#007be5",
        "brand-interactive": "#007be5",

        danger: "#dc3412",
        "danger-interactive": "#dc3412",

        warning: "#b86200",

        success: "#009951",

        disabled: "#b3b3b3",
      },
      icon: {
        default: "#1a1a1a",
        "default-interactive": "#1a1a1a",
        "default-interactive-selected": "#007be5",

        secondary: "#7d7d7d",
        "secondary-interactive": "#7d7d7d",

        tertiary: "#cccccc",

        brand: "#007be5",
        "brand-interactive": "#007be5",

        danger: "#dc3412",
        "danger-interactive": "#dc3412",

        warning: "#b86200",

        success: "#009951",

        disabled: "#b3b3b3",
      },
      border: {
        default: "#e5e5e5",
        "default-interactive": "#e5e5e5",
        "default-interactive-selected": "#0d99ff",
        "default-interactive-selected-error": "#f24822",

        secondary: "#cccccc",

        brand: "#80CAFF",
        "brand-interactive": "#80CAFF",

        danger: "#ffc7c2",
        "danger-interactive": "#ffc7c2",

        warning: "#fcd19c",

        success: "#aff4c6",

        "drop-position": "#1a1a1a",
        "drop-position-restricted": "#f24822",

        swatch: "#0000001A",

        disabled: "#e5e5e5",
      },
    },
    "neutral-inverted": {
      bg: {
        default: "#2c2c2c",
        "default-interactive": "#2c2c2c",
        "default-interactive-hover": "#5c5c5c",
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
        default: "#0d99ff",
        "default-interactive": "#0d99ff",
        "default-interactive-hover": "#007be5",
        "default-interactive-pressed": "#0768cf",

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
        "default-interactive": "#007be5",
      },
    },
    danger: {
      bg: {
        default: "#f24822",
        "default-interactive": "#f24822",
        "default-interactive-hover": "#dc3412",
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
        "default-interactive-hover": "#009951",
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
        focus: "#0d99ff",
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

export { figmaLight }
