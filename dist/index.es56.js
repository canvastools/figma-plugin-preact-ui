const e = {
  class: "figma-light",
  prefix: "--pui-color",
  variables: {
    neutral: {
      bg: {
        default: "#FFFFFF",
        "default-hover": "#0000000D",
        "default-pressed": "#0000001C",
        "default-selected": "#0D99FF1F",
        "default-selected-hover": "#0D99FF40",
        "default-selected-pressed": "#0D99FF1F",
        secondary: "#F5F5F5",
        "secondary-hover": "#0000001C",
        "secondary-pressed": "#0000000A",
        "secondary-selected": "#0D99FF0F",
        tertiary: "#E6E6E6",
        "brand-hover": "#0D99FF1F",
        "brand-pressed": "#0D99FF40",
        "danger-hover": "#F2482214",
        "danger-pressed": "#F2482229",
        disabled: "#F5F5F5"
      },
      text: {
        default: "#000000E6",
        "default-selected": "#007BE5",
        secondary: "#00000085",
        brand: "#007BE5",
        danger: "#DC3412",
        warning: "#B86200",
        success: "#009951",
        component: "#8638e5",
        disabled: "#0000004D",
        placeholder: "#00000080"
      },
      icon: {
        default: "#000000E6",
        "default-selected": "#007BE5",
        secondary: "#00000085",
        tertiary: "#00000033",
        brand: "#007BE5",
        danger: "#DC3412",
        warning: "#B86200",
        success: "#009951",
        component: "#8638e5",
        disabled: "#0000004D"
      },
      border: {
        default: "#0000001C",
        "default-hover": "#00000014",
        "default-selected": "#0D99FF",
        "default-selected-contrast": "#0D99FF6B",
        secondary: "#00000033",
        brand: "#0D99FF40",
        "brand-hover": "#0D99FF85",
        "brand-selected": "#0D99FF",
        danger: "#F248224D",
        "danger-error": "#F24822",
        warning: "#F2A42780",
        success: "#12E3745C",
        disabled: "#0000001C",
        "drop-position": "#1A1A1A",
        "drop-position-restricted": "#F24822",
        swatch: "#0000001F"
      }
    },
    "neutral-fixed": {
      bg: {
        swatch: "#FFFFFF"
      }
    },
    "neutral-inverted": {
      bg: {
        default: "#2C2C2C",
        "default-hover": "#5C5C5C",
        "default-pressed": "#808080",
        disabled: "#D9D9D9"
      },
      text: {
        default: "#FFFFFF",
        disabled: "#FFFFFF"
      },
      icon: {
        default: "#FFFFFF",
        disabled: "#FFFFFF"
      }
    },
    "neutral-inverted-fixed": {
      bg: {
        default: "#1E1E1E",
        "default-hover": "#5C5C5C",
        "default-pressed": "#808080",
        secondary: "#383838",
        "secondary-hover": "#FFFFFF1F",
        disabled: "#1E1E1E"
      },
      text: {
        default: "#FFFFFF",
        secondary: "#BBBBBB",
        danger: "#FCA397",
        disabled: "#808080"
      },
      icon: {
        default: "#FFFFFF",
        secondary: "#BBBBBB",
        disabled: "#808080"
      },
      border: {
        default: "#383838"
      }
    },
    brand: {
      bg: {
        default: "#0D99FF",
        "default-hover": "#198DFB",
        "default-pressed": "#0768CF",
        disabled: "#D9D9D9"
      },
      text: {
        default: "#FFFFFF",
        secondary: "#A8DAFF",
        disabled: "#FFFFFF"
      },
      icon: {
        default: "#FFFFFF",
        secondary: "#A8DAFF",
        disabled: "#FFFFFF"
      },
      border: {
        default: "#007BE5"
      }
    },
    danger: {
      bg: {
        default: "#F24822",
        "default-hover": "#DC3412",
        "default-pressed": "#BD2915",
        secondary: "#FFE2E0",
        disabled: "#D9D9D9"
      },
      text: {
        default: "#FFFFFF",
        disabled: "#FFFFFF"
      },
      icon: {
        default: "#FFFFFF",
        disabled: "#FFFFFF"
      },
      border: {
        default: "#DC3412"
      }
    },
    warning: {
      bg: {
        default: "#FFCD29",
        disabled: "#D9D9D9"
      },
      text: {
        default: "#000000",
        disabled: "#FFFFFF"
      },
      icon: {
        default: "#000000",
        disabled: "#FFFFFF"
      },
      border: {}
    },
    success: {
      bg: {
        default: "#14AE5C",
        "default-hover": "#009951",
        "default-pressed": "#008043",
        disabled: "#D9D9D9"
      },
      text: {
        default: "#FFFFFF",
        disabled: "#FFFFFF"
      },
      icon: {
        default: "#FFFFFF",
        disabled: "#FFFFFF"
      },
      border: {
        default: "#009951"
      }
    },
    system: {
      bg: {
        scrollbar: "#D4D4D4",
        resizer: "#A8A8A8"
      },
      border: {
        focused: "#0D99FF"
      }
    },
    shadow: {
      "popover-hard": "#0000002E",
      "popover-soft": "#0000001F",
      "popover-glare": "#FFFFFF",
      "tooltip-hard": "#0000001C",
      "tooltip-soft": "#0000001F",
      "tooltip-glare": "#ffffff0A",
      "menu-hard": "#0000002E",
      "menu-soft": "#0000001F",
      "menu-glare": "#ffffff0A"
    }
  }
};
export {
  e as figmaLight
};
