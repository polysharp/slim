/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import Tag from './Tag';

export default {
  title: 'Core/Typography/Tag',
  decorators: [withKnobs],
  parameters: {
    component: Tag,
    componentSubtitle: 'Tag text',
  },
};

const options = {
  tiny: {
    label: 'Tiny',
    defaultValue: false,
    groupId: 'Style',
  },
  color: {
    label: 'Color',
    options: {
      Info: 'info',
      Warning: 'warning',
      Danger: 'danger',
    },
    defaultValue: 'info',
    groupId: 'Style',
  },
  label: {
    label: 'Label',
    defaultValue: 'Prix baissé',
    groupId: 'Custom',
  },
};

export const withText = () => (
  <Tag
    tiny={boolean(options.tiny.label, options.tiny.defaultValue, options.tiny.groupId)}
    color={select(
      options.color.label,
      options.color.options,
      options.color.defaultValue,
      options.color.groupId
    )}
  >
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Tag>
);

export const customColor = () => (
  <Tag
    tiny={boolean(options.tiny.label, options.tiny.defaultValue, options.tiny.groupId)}
    customColor="#000"
  >
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Tag>
);
