module.exports = {
  stories: ['../src/**/*.story.(js|ts|tsx|jsx|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
  ],
};
