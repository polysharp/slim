/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'V1/Core/Inputs/Button',
  decorators: [withKnobs],
  parameters: {
    component: Button,
    componentSubtitle: 'HTML Button',
  },
};

const options = {
  color: {
    label: 'Color',
    options: {
      Primary: 'primary',
      Secondary: 'secondary',
      Black: 'black',
      White: 'white',
    },
    defaultValue: 'primary',
    groupId: 'Style',
  },
  variant: {
    label: 'Variant',
    options: {
      Text: 'text',
      Contained: 'contained',
      Outlined: 'outlined',
    },
    defaultValue: 'contained',
    groupId: 'Style',
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
  rounded: {
    label: 'Border Radius',
    options: {
      None: 'none',
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
      Full: 'full',
    },
    defaultValue: 'full',
    groupId: 'Style',
  },
  fullWidth: {
    label: 'Is full width ?',
    defaultValue: false,
    groupId: 'Custom',
  },
  doubleClick: {
    label: 'Is double clickable ?',
    defaultValue: false,
    groupId: 'Custom',
  },
  loading: {
    label: 'Is loading ?',
    defaultValue: false,
    groupId: 'Custom',
  },
  disabled: {
    label: 'Is disabled ?',
    defaultValue: false,
    groupId: 'Custom',
  },
  label: {
    label: 'Label',
    defaultValue: 'Ajouter au panier',
    groupId: 'Custom',
  },
};

export const withText = () => (
  <Button
    title="Add to cart"
    color={select(
      options.color.label,
      options.color.options,
      options.color.defaultValue,
      options.color.groupId
    )}
    variant={select(
      options.variant.label,
      options.variant.options,
      options.variant.defaultValue,
      options.variant.groupId
    )}
    rounded={select(
      options.rounded.label,
      options.rounded.options,
      options.rounded.defaultValue,
      options.rounded.groupId
    )}
    size={select(
      options.size.label,
      options.size.options,
      options.size.defaultValue,
      options.size.groupId
    )}
    fullWidth={boolean(
      options.fullWidth.label,
      options.fullWidth.defaultValue,
      options.fullWidth.groupId
    )}
    onClick={() => console.log('Button cliked')}
    isDoubleClickable={boolean(
      options.doubleClick.label,
      options.doubleClick.defaultValue,
      options.doubleClick.groupId
    )}
    isLoading={boolean(
      options.loading.label,
      options.loading.defaultValue,
      options.loading.groupId
    )}
    isDisabled={boolean(
      options.disabled.label,
      options.disabled.defaultValue,
      options.disabled.groupId
    )}
  >
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Button>
);
