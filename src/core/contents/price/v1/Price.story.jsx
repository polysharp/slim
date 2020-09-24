/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import Price from './Price';

export default {
  title: 'V1/Core/Contents',
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
  size: {
    label: 'Size',
    options: {
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
    },
    defaultValue: 'medium',
    groupId: 'Style',
  },
};

export const price = () => (
  <Price
    value={number(options.value.label, options.value.defaultValue, options.value.groupId)}
    size={select(
      options.size.label,
      options.size.options,
      options.size.defaultValue,
      options.size.groupId
    )}
  />
);
