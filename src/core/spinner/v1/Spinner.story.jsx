/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Spinner from './Spinner';

export default {
  title: 'V1/Core/Miscellaneous',
  decorators: [],
  parameters: {
    component: Spinner,
    componentSubtitle: 'Loading spinner',
  },
};

export const spinner = () => <Spinner color="white" />;
