import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'core/inputs';

const IconButton = ({
  icon,
  type,
  title,
  ariaLabel,
  tabIndex,
  color,
  variant,
  size,
  onClick,
  pressKeyCode,
  isPressable,
  isDoubleClickable,
  isLoading,
  isDisabled,
}) => (
  <Button
    type={type}
    title={title}
    ariaLabel={ariaLabel}
    tabIndex={tabIndex}
    color={color}
    variant={variant}
    size={size}
    onClick={onClick}
    pressKeyCode={pressKeyCode}
    isPressable={isPressable}
    isDoubleClickable={isDoubleClickable}
    isLoading={isLoading}
    isDisabled={isDisabled}
    evenPadding
  >
    {icon}
  </Button>
);

IconButton.propTypes = {
  /**
    Content place in the button
  */
  icon: PropTypes.node.isRequired,
  /**
    (HTML Attribute) Button type
  */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
    (HTML Attribute) Button title
  */
  title: PropTypes.string.isRequired,
  /**
    (HTML Attribute) Button Aria Label
  */
  ariaLabel: PropTypes.string,
  /**
    (HTML Attribute) Focus tab index, 0 = auto focus | -1 = unfocusable
  */
  tabIndex: PropTypes.string,
  /**
    One of the theme color key
  */
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'white']),
  /**
    One of the theme variant key
  */
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  /**
    Button size based on theme settings
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
    Event trigger when the user click
  */
  onClick: PropTypes.func,
  /**
    Key code to trigger event
  */
  pressKeyCode: PropTypes.number,
  /**
    Trigger event when key is pressed ?
  */
  isPressable: PropTypes.bool,
  /**
    When off, we prevent double click in a short lapse
  */
  isDoubleClickable: PropTypes.bool,
  /**
    Is the button loading ?
  */
  isLoading: PropTypes.bool,
  /**
    Is the button disable ?
  */
  isDisabled: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'button',
  ariaLabel: undefined,
  tabIndex: '0',
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  onClick: () => {},
  pressKeyCode: 13,
  isPressable: true,
  isDoubleClickable: false,
  isLoading: false,
  isDisabled: false,
};

export default IconButton;
