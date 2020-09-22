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
  Fab: {
    color: {
      primary: { default: '#0058a3', hover: '#004f93' },
      outline: { default: '#dfdfdf', hover: '#929292' },
      default: { default: '#FFFFFF', hover: '#f5f5f5' },
    },
    radius: {
      none: { default: '0', hover: '0' },
      sm: { default: '0.125rem', hover: '0.125rem' },
      md: { default: '0.25rem', hover: '0.25rem' },
      lg: { default: '0.375rem', hover: '0.375rem' },
      xl: { default: '0.5rem', hover: '0.5rem' },
      full: { default: '9999px', hover: '9999px' },
    },
    padding: {
      default: '0.9375rem',
      tiny: '.5rem',
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
