import { breakpoints, colors, paddings, radius, typography } from './shared';

const defaultTheme = {
  Button: {
    colors: {
      primary: {
        text: {
          default: colors['light-primary'],
          hover: colors['dark-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors['light-primary'],
          hover: colors['dark-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors['light-primary'],
          hover: colors['dark-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      },
      secondary: {
        text: {
          default: colors['light-secondary'],
          hover: colors['dark-secondary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors['light-secondary'],
          hover: colors['dark-secondary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors['light-secondary'],
          hover: colors['dark-secondary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      },
      black: {
        text: {
          default: colors.black,
          hover: colors['light-black'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors.black,
          hover: colors['light-black'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors.black,
          hover: colors['light-black'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      },
      white: {
        text: {
          default: colors.white,
          hover: colors['light-white'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors.white,
          hover: colors['light-white'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors.white,
          hover: colors['light-white'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      },
      disabled: { bg: colors['light-gray'], text: colors['dark-gray'] },
    },
    sizes: {
      small: {
        paddings: [paddings.lg, paddings.sm],
        fonts: {
          size: typography.sizes.xs,
          weight: typography.weights.bold,
        },
      },
      medium: {
        paddings: [paddings.xl, paddings.md],
        fonts: {
          size: typography.sizes.xs,
          weight: typography.weights.bold,
        },
      },
      large: {
        paddings: [paddings['2xl'], paddings.lg],
        fonts: {
          size: typography.sizes.sm,
          weight: typography.weights.bold,
        },
      },
    },
    radius: {
      none: radius.none,
      small: radius.sm,
      medium: radius.md,
      large: radius.large,
      full: radius.full,
    },
  },
  Tag: {
    color: {
      info: '#0077c1',
      warning: '#ca5008',
      danger: '#ed022a',
    },
    font: {
      size: {
        default: '0.875rem',
        tiny: '0.75rem',
      },
    },
  },
  Global: {
    breakpoints: { ...breakpoints },
  },
};

export default defaultTheme;
