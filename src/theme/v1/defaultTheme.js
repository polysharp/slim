import { breakpoints, colors, paddings, radius, typography } from './shared';

const defaultTheme = {
  Button: {
    colors: {
      primary: {
        text: {
          default: colors['light-primary'],
          hover: colors['dark-primary'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors['light-primary'],
          hover: colors['dark-primary'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors['light-primary'],
          hover: colors['dark-primary'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      },
      secondary: {
        text: {
          default: colors['light-secondary'],
          hover: colors['dark-secondary'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors['light-secondary'],
          hover: colors['dark-secondary'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors['light-secondary'],
          hover: colors['dark-secondary'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      },
      black: {
        text: {
          default: colors.black,
          hover: colors['light-black'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors.black,
          hover: colors['light-black'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors.black,
          hover: colors['light-black'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      },
      white: {
        text: {
          default: colors.white,
          hover: colors['light-white'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        outlined: {
          default: colors.white,
          hover: colors['light-white'],
          selected: colors['light-primary'],
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
        contained: {
          default: colors.white,
          hover: colors['light-white'],
          selected: colors['light-primary'],
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
    colors: {
      info: colors.info,
      warning: colors.warning,
      danger: colors.danger,
    },
    sizes: {
      small: {
        size: typography.sizes.xs,
        weight: typography.weights.bold,
      },
      medium: {
        size: typography.sizes.sm,
        weight: typography.weights.bold,
      },
      large: {
        size: typography.sizes.md,
        weight: typography.weights.bold,
      },
    },
  },
  Price: {
    sizes: {
      small: {
        integers: { size: typography.sizes.xl, weight: typography.weights.semibold },
        decimals: { size: typography.sizes.xs, weight: typography.weights.semibold },
        symbol: { size: typography.sizes.xs, weight: typography.weights.semibold },
      },
      medium: {
        integers: { size: typography.sizes['2xl'], weight: typography.weights.semibold },
        decimals: { size: typography.sizes.sm, weight: typography.weights.semibold },
        symbol: { size: typography.sizes.sm, weight: typography.weights.semibold },
      },
      large: {
        integers: { size: typography.sizes['3xl'], weight: typography.weights.semibold },
        decimals: { size: typography.sizes.md, weight: typography.weights.semibold },
        symbol: { size: typography.sizes.md, weight: typography.weights.semibold },
      },
    },
  },
  Global: {
    breakpoints: { ...breakpoints },
  },
};

export default defaultTheme;
