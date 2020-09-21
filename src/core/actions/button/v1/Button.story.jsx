/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'Core/Actions/Button',
  decorators: [withKnobs],
  parameters: {
    component: Button,
    componentSubtitle: 'HTML Button',
  },
};

const options = {
  tiny: {
    label: 'Tiny',
    defaultValue: false,
    groupId: 'Style',
  },
  outline: {
    label: 'Outline',
    defaultValue: false,
    groupId: 'Style',
  },
  radius: {
    label: 'Border Radius',
    options: {
      None: 'none',
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
      'Extra-large': 'xl',
      Full: 'full',
    },
    defaultValue: 'full',
    groupId: 'Style',
  },
  color: {
    label: 'Color',
    options: {
      Primary: 'primary',
      Secondary: 'secondary',
      Outline: 'outline',
      Default: 'default',
    },
    defaultValue: 'default',
    groupId: 'Style',
  },
  click: {
    label: 'Prevent double click',
    defaultValue: true,
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
    tooltip="Add to cart"
    tiny={boolean(options.tiny.label, options.tiny.defaultValue, options.tiny.groupId)}
    outline={boolean(options.outline.label, options.outline.defaultValue, options.outline.groupId)}
    rounded={select(
      options.radius.label,
      options.radius.options,
      options.radius.defaultValue,
      options.radius.groupId
    )}
    color={select(
      options.color.label,
      options.color.options,
      options.color.defaultValue,
      options.color.groupId
    )}
  >
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Button>
);

export const withIcon = () => (
  <Button
    tooltip="Add to cart"
    tiny={boolean(options.tiny.label, options.tiny.defaultValue, options.tiny.groupId)}
    outline={boolean(options.outline.label, options.outline.defaultValue, options.outline.groupId)}
    rounded={select(
      options.radius.label,
      options.radius.options,
      options.radius.defaultValue,
      options.radius.groupId
    )}
    color={select(
      options.color.label,
      options.color.options,
      options.color.defaultValue,
      options.color.groupId
    )}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ccc">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.336 5.52055C14.2336 3.62376 17.3096 3.62401 19.2069 5.52129C20.2067 6.52115 20.6796 7.85005 20.6259 9.15761C20.6151 12.2138 18.4184 14.8654 16.4892 16.6366C15.4926 17.5517 14.5004 18.2923 13.7593 18.8036C13.3879 19.0598 13.0771 19.2601 12.8574 19.3973C12.7475 19.466 12.6601 19.519 12.5992 19.5555C12.5687 19.5737 12.5448 19.5879 12.5279 19.5978L12.5079 19.6094L12.502 19.6129L12.5001 19.614C12.5001 19.614 12.4989 19.6147 11.9999 18.748C11.501 19.6147 11.5005 19.6144 11.5005 19.6144L11.4979 19.6129L11.4919 19.6094L11.472 19.5978C11.4551 19.5879 11.4312 19.5737 11.4007 19.5555C11.3397 19.519 11.2524 19.466 11.1425 19.3973C10.9227 19.2601 10.612 19.0598 10.2405 18.8036C9.49947 18.2923 8.50726 17.5517 7.51063 16.6366C5.58146 14.8654 3.38477 12.2139 3.37399 9.15765C3.32024 7.85008 3.79314 6.52117 4.79301 5.52129C6.69054 3.62376 9.76704 3.62376 11.6646 5.52129L11.9993 5.856L12.3353 5.52129L12.336 5.52055ZM11.9999 18.748L11.5005 19.6144L11.9999 19.9019L12.4989 19.6147L11.9999 18.748ZM11.9999 17.573C12.1727 17.462 12.384 17.3226 12.6236 17.1573C13.3125 16.6821 14.2267 15.9988 15.1366 15.1634C17.0157 13.4381 18.6259 11.2919 18.6259 9.13506V9.11213L18.627 9.08922C18.6626 8.31221 18.3844 7.52727 17.7926 6.9355C16.6762 5.81903 14.866 5.81902 13.7495 6.9355L13.7481 6.93689L11.9965 8.68166L10.2504 6.9355C9.13387 5.81903 7.3237 5.81903 6.20722 6.9355C5.61546 7.52727 5.33724 8.31221 5.3729 9.08922L5.37395 9.11213V9.13507C5.37395 11.2919 6.98418 13.4381 8.86325 15.1634C9.77312 15.9988 10.6874 16.6821 11.3762 17.1573C11.6159 17.3226 11.8271 17.462 11.9999 17.573Z"
        />
      </svg>
      <span style={{ paddingLeft: '4px' }}>
        {text(options.label.label, options.label.defaultValue, options.label.groupId)}
      </span>
    </div>
  </Button>
);

export const withOnClick = () => (
  <Button
    tooltip="Add to cart"
    onClick={() => console.log('Button cliked')}
    preventDoubleClicking={boolean(
      options.click.label,
      options.click.defaultValue,
      options.click.groupId
    )}
    tiny={boolean(options.tiny.label, options.tiny.defaultValue, options.tiny.groupId)}
    outline={boolean(options.outline.label, options.outline.defaultValue, options.outline.groupId)}
    rounded={select(
      options.radius.label,
      options.radius.options,
      options.radius.defaultValue,
      options.radius.groupId
    )}
    color={select(
      options.color.label,
      options.color.options,
      options.color.defaultValue,
      options.color.groupId
    )}
  >
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Button>
);

export const customColor = () => (
  <Button tooltip="Add to cart" customColor={{ default: '#39c', hover: '#000' }}>
    {text(options.label.label, options.label.defaultValue, options.label.groupId)}
  </Button>
);
