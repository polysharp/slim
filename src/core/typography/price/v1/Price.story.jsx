/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Price from './Price';

export default {
  title: 'Core/Typography/Price',
  decorators: [withKnobs],
  parameters: {
    component: Price,
    componentSubtitle: 'Tag text',
  },
};

const options = {
  value: {
    label: 'Value',
    defaultValue: 7899,
    groupId: 'Custom',
  },
};

export const preview = () => (
  <Price value={number(options.value.label, options.value.defaultValue, options.value.groupId)} />
);
