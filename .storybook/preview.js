import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src';
import ReactBreakpoints from 'react-breakpoints';

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
  },
});

addDecorator(withA11y);

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

addDecorator((s) => (
  <ThemeProvider theme={{ name: 'slim' }}>
    <ReactBreakpoints breakpoints={breakpoints}>
      <GlobalStyle />
      {s()}
    </ReactBreakpoints>
  </ThemeProvider>
));
