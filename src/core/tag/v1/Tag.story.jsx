/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, select, color, text } from '@storybook/addon-knobs';

import Tag from './Tag';

export default {
  title: 'V1/Core/Content/Tag',
  decorators: [withKnobs],
  parameters: {
    component: Tag,
    componentSubtitle: 'Tag text',
  },
};

const options = {
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
  customColor: {
    label: 'Custom Color',
    defaultValue: '#928ccd',
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
  label: {
    label: 'Label',
    defaultValue: 'Prix baissé',
    groupId: 'Custom',
  },
};

export const withText = () => (
  <Tag
    color={select(
      options.color.label,
      options.color.options,
      options.color.defaultValue,
      options.color.groupId
    )}
    size={select(
      options.size.label,
      options.size.options,
      options.size.defaultValue,
      options.size.groupId
    )}
  >
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Tag>
);

export const customColor = () => (
  <Tag
    customColor={color(
      options.customColor.label,
      options.customColor.defaultValue,
      options.customColor.groupId
    )}
    size={select(
      options.size.label,
      options.size.options,
      options.size.defaultValue,
      options.size.groupId
    )}
  >
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Tag>
);
