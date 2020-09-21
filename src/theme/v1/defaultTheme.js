const defaultTheme = {
  global: {
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  Button: {
    color: {
      primary: { default: '#0058a3', hover: '#004f93' },
      secondary: { default: '#f5f5f5', hover: '#dfdfdf' },
      outline: { default: '#dfdfdf', hover: '#929292' },
      default: { default: '#000000', hover: '#333' },
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
      default: {
        y: '1rem',
        x: '2rem',
      },
      tiny: {
        y: '0.5rem',
        x: '1.5rem',
      },
    },
    font: {
      size: {
        defalt: '0.875rem',
        tiny: '0.75rem',
      },
      weight: {
        default: '700',
        tiny: '700',
      },
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
};

export default defaultTheme;
