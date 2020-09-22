import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Spinner from 'core/miscellaneous';
import { getTextColor, preventDoubleClick } from 'utils';

const ButtonStyled = styled.button`
  position: relative;
  padding-top: ${({ theme, size }) => `${theme.Button.sizes[size].paddings[1]}`};
  padding-bottom: ${({ theme, size }) => `${theme.Button.sizes[size].paddings[1]}`};
  padding-left: ${({ theme, size }) => `${theme.Button.sizes[size].paddings[0]}`};
  padding-right: ${({ theme, size }) => `${theme.Button.sizes[size].paddings[0]}`};
  font-size: ${({ theme, size }) => theme.Button.sizes[size].fonts.size};
  font-weight: ${({ theme, size }) => theme.Button.sizes[size].fonts.weight};
  border: 1px solid transparent;
  border-radius: ${({ theme, rounded }) => theme.Button.radius[rounded]};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  transition: all 300ms cubic-bezier(0.55, 0.09, 0.68, 0.53);

  ${({ isLoading }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus,
    &:hover {
      outline: none;
      cursor: ${isLoading ? 'wait' : 'pointer'};
    }
  `};

  ${({ theme, color, variant }) => {
    switch (variant) {
      case 'text':
        return css`
          color: ${getTextColor('#FFFFFF')};

          &:hover,
          &:focus {
            background-color: ${theme.Button.colors[color].text.hover};
            color: ${getTextColor(theme.Button.colors[color].text.hover)};
          }
        `;
      case 'outlined':
        return css`
          border-color: ${theme.Button.colors[color].outlined.default};
          color: ${getTextColor('#FFFFFF')};

          &:hover,
          &:focus {
            border-color: ${theme.Button.colors[color].outlined.hover};
            color: ${getTextColor('#FFFFFF')};
          }
        `;
      default:
        return css`
          background-color: ${theme.Button.colors[color].contained.default};
          color: ${getTextColor(theme.Button.colors[color].contained.default)};

          &:hover,
          &:focus {
            background-color: ${theme.Button.colors[color].contained.hover};
            color: ${getTextColor(theme.Button.colors[color].contained.hover)};
          }
        `;
    }
  }}

  ${({ theme, customBackground, customForeground }) => css`
    &:disabled,
    &:disabled {
      background-color: ${customBackground || theme.Button.colors.disabled.bg};
      color: ${customForeground || theme.Button.colors.disabled.text};
    }
  `}
`;

const Button = ({
  children,
  type,
  title,
  ariaLabel,
  tabIndex,
  color,
  variant,
  rounded,
  size,
  fullWidth,
  onClick,
  pressKeyCode,
  isPressable,
  isDoubleClickable,
  isLoading,
  isDisabled,
}) => {
  const trigglerEvent = () => {
    if (!isDisabled && !isLoading) onClick();
  };

  const triggerEventWithPrevent = preventDoubleClick((event) => {
    event.preventDefault();
    trigglerEvent();
  });

  const handleClick = (event) => {
    if (isDoubleClickable) {
      trigglerEvent();
    } else {
      triggerEventWithPrevent(event);
    }
  };

  const handlePress = (event) => {
    if (!isPressable || event.keyCode !== pressKeyCode) return;

    if (isDoubleClickable) {
      trigglerEvent();
    } else {
      triggerEventWithPrevent(event);
    }
  };

  return (
    <ButtonStyled
      type={type}
      title={title}
      ariaLabel={ariaLabel}
      tabIndex={tabIndex}
      color={color}
      variant={variant}
      rounded={rounded}
      size={size}
      fullWidth={fullWidth}
      onClick={(e) => handleClick(e)}
      onKeyPress={(e) => handlePress(e)}
      isLoading={isLoading}
      disabled={isDisabled}
    >
      {children}
      {isLoading && <Spinner color={color} variant={variant} />}
    </ButtonStyled>
  );
};

Button.propTypes = {
  /**
    Content place in the button
  */
  children: PropTypes.node.isRequired,
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
    Apply border radius
  */
  rounded: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'full']),
  /**
    Button size based on theme settings
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
    Width 100% when on
  */
  fullWidth: PropTypes.bool,
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

Button.defaultProps = {
  type: 'button',
  ariaLabel: undefined,
  tabIndex: '0',
  color: 'primary',
  variant: 'contained',
  rounded: 'full',
  size: 'medium',
  fullWidth: false,
  onClick: () => {},
  pressKeyCode: 13,
  isPressable: true,
  isDoubleClickable: false,
  isLoading: false,
  isDisabled: false,
};

export default Button;
