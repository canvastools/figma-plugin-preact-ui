import type { ColorTokenTree } from './index'

const figmaDark: ColorTokenTree = {
  class: 'figma-dark',
  prefix: '--pui-color',
  variables: {
    neutral: {
      bg: {
        default: '#2C2C2C',

        'default-hover': '#FFFFFF0F',
        'default-pressed': '#FFFFFF1F',
        'default-selected': '#85A5FF5C',
        'default-selected-hover': '#91B4FF5C',
        'default-selected-pressed': '#85A5FF5C',

        secondary: '#383838',
        'secondary-hover': '#FFFFFF1F',
        'secondary-pressed': '#FFFFFF0F',
        'secondary-selected': '#6385FF42',

        tertiary: '#444444',

        'brand-hover': '#85A5FF5C',
        'brand-pressed': '#6385FF42',

        'danger-hover': '#AD3C1366',
        'danger-pressed': '#9E4A29CC',

        disabled: '#2C2C2C',
      },
      text: {
        default: '#FFFFFF',
        'default-selected': '#7CC4F8',

        secondary: '#FFFFFFB3',

        brand: '#7CC4F8',

        danger: '#FCA397',

        warning: '#F7D15F',

        success: '#79D297',

        component: '#D1A8FF',
        'component-secondary': '#6B5884',

        slot: '#F08DD1',
        'slot-secondary': '#9B4A81',

        disabled: '#FFFFFF66',

        placeholder: '#FFFFFF8C',
      },
      icon: {
        default: '#FFFFFF',
        'default-selected': '#7CC4F8',

        secondary: '#FFFFFFB3',

        tertiary: '#FFFFFF59',

        brand: '#7CC4F8',

        danger: '#FCA397',

        warning: '#F7D15F',

        success: '#79D297',

        component: '#D1A8FF',
        'component-secondary': '#6B5884',

        slot: '#F08DD1',
        'slot-secondary': '#9B4A81',

        disabled: '#FFFFFF66',
      },
      border: {
        default: '#FFFFFF1F',
        'default-hover': '#FFFFFF14',
        'default-selected': '#0C8CE9',
        'default-selected-contrast': '#7CC4F86B',

        secondary: '#FFFFFF59',

        brand: '#7CC4F866',
        'brand-hover': '#7CC4F866',
        'brand-selected': '#7CC4F8',

        danger: '#F2482285',
        'danger-error': '#D4583B',

        warning: '#F2822780',

        success: '#09ED743D',

        component: '#D1A8FF',
        'component-secondary': '#6B5884',

        slot: '#F08DD1',
        'slot-secondary': '#9B4A81',

        disabled: '#FFFFFF1F',

        'drop-position': '#FFFFFF',
        'drop-position-restricted': '#D4583B',

        swatch: '#FFFFFF1F',
      },
    },
    'neutral-fixed': {
      bg: {
        swatch: '#FFFFFF',
      },
    },
    'neutral-inverted': {
      bg: {
        default: '#FFFFFF',
        'default-hover': '#D9D9D9',
        'default-pressed': '#BFBFBF',

        disabled: '#757575',
      },
      text: {
        default: '#1A1A1A',

        disabled: '#2C2C2C',
      },
      icon: {
        default: '#1A1A1A',

        disabled: '#2C2C2C',
      },
    },
    'neutral-inverted-fixed': {
      bg: {
        default: '#1E1E1E',
        'default-hover': '#5C5C5C',
        'default-pressed': '#808080',

        secondary: '#383838',
        'secondary-hover': '#FFFFFF1F',

        disabled: '#1E1E1E',
      },
      text: {
        default: '#FFFFFF',

        secondary: '#BBBBBB',

        danger: '#FCA397',

        disabled: '#808080',
      },
      icon: {
        default: '#FFFFFF',

        secondary: '#BBBBBB',

        disabled: '#808080',
      },
      border: {
        default: '#383838',
      },
    },
    brand: {
      bg: {
        default: '#0C8CE9',
        'default-hover': '#0A6CC2',
        'default-pressed': '#105CAD',

        secondary: '#105CAD',

        disabled: '#757575',
      },
      text: {
        default: '#FFFFFF',
        secondary: '#A8D6F7',

        disabled: '#2C2C2C',
      },
      icon: {
        default: '#FFFFFF',
        secondary: '#A8D6F7',

        disabled: '#2C2C2C',
      },
      border: {
        default: '#7CC4F8',
      },
    },
    danger: {
      bg: {
        default: '#E03E1A',
        'default-hover': '#C4381C',
        'default-pressed': '#963323',

        secondary: '#7C2622',

        disabled: '#757575',
      },
      text: {
        default: '#FFFFFF',

        disabled: '#2C2C2C',
      },
      icon: {
        default: '#FFFFFF',

        disabled: '#2C2C2C',
      },
      border: {
        default: '#A55440',
      },
    },
    warning: {
      bg: {
        default: '#F3C11B',

        disabled: '#757575',
      },
      text: {
        default: '#000000',

        disabled: '#2C2C2C',
      },
      icon: {
        default: '#000000',

        disabled: '#2C2C2C',
      },
      border: {},
    },
    success: {
      bg: {
        default: '#198F51',
        'default-hover': '#078348',
        'default-pressed': '#0A5C35',

        disabled: '#757575',
      },
      text: {
        default: '#FFFFFF',

        disabled: '#2C2C2C',
      },
      icon: {
        default: '#FFFFFF',

        disabled: '#2C2C2C',
      },
      border: {
        default: '#078348',
      },
    },
    system: {
      bg: {
        scrollbar: '#686868',
        resizer: '#A3A3A3',
      },
      border: {
        focused: '#0C8CE9',
      },
    },
    shadow: {
      'popover-hard': '#0000008A',
      'popover-soft': '#00000052',
      'popover-glare': '#ffffff0A',

      'tooltip-hard': '#0000008A',
      'tooltip-soft': '#00000052',
      'tooltip-glare': '#ffffff0A',

      'menu-hard': '#0000008A',
      'menu-soft': '#00000052',
      'menu-glare': '#ffffff0A',
    },
  },
}

export { figmaDark }
