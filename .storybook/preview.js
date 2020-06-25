import { addDecorator, addParameters } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

import './global.css';

const customViewports = {
  browser: {
    name: 'Browser 1920x1080',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  laptop: {
    name: 'Browser 1366x768',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: 'laptop',
  },
});

addDecorator(withA11y);
