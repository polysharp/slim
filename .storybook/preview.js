import React from 'react';
import ReactBreakpoints from 'react-breakpoints';

import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ThemeProvider } from 'styled-components';

import defaultTheme from '../src/theme';
import GlobalStyle from '../src/core/style';

addParameters({
  viewport: {
    viewports: {
      ...{
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
      },
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator((s) => (
  <ThemeProvider theme={defaultTheme}>
    <ReactBreakpoints breakpoints={defaultTheme.global.breakpoints}>
      <GlobalStyle />
      {s()}
    </ReactBreakpoints>
  </ThemeProvider>
));
