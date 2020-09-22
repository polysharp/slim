import { breakpoints, colors, paddings, radius, typography } from './shared';

const defaultTheme = {
  Button: {
    colors: {
      primary: {
        text: { default: colors['light-primary'], hover: colors['dark-primary'] },
        outlined: { default: colors['light-primary'], hover: colors['dark-primary'] },
        contained: { default: colors['light-primary'], hover: colors['dark-primary'] },
      },
      secondary: {
        text: { default: colors['light-secondary'], hover: colors['dark-secondary'] },
        outlined: { default: colors['light-secondary'], hover: colors['dark-secondary'] },
        contained: { default: colors['light-secondary'], hover: colors['dark-secondary'] },
      },
      black: {
        text: { default: colors.black, hover: colors['light-black'] },
        outlined: { default: colors.black, hover: colors['light-black'] },
        contained: { default: colors.black, hover: colors['light-black'] },
      },
      white: {
        text: { default: colors.white, hover: colors['light-white'] },
        outlined: { default: colors.white, hover: colors['light-white'] },
        contained: { default: colors.white, hover: colors['light-white'] },
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
