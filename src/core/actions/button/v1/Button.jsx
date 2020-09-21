import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';

import { getTextColor, preventDoubleClick } from 'utils';

const ButtonStyled = styled.button`
  ${({ outline, color, customColor, customOnColor, theme }) => {
    return outline
      ? css`
          border: ${customColor
            ? `1px solid ${customColor.default}`
            : `1px solid ${theme.Button.color[color].default}`};
          color: ${customOnColor ? getTextColor(customOnColor) : '#000000'};

          &:hover,
          &:focus {
            border: ${customColor
              ? `1px solid ${customColor.hover}`
              : `1px solid ${theme.Button.color[color].hover}`};
          }
        `
      : css`
          background-color: ${customColor
            ? customColor.default
            : theme.Button.color[color].default};
          color: ${customColor
            ? getTextColor(customColor.default)
            : getTextColor(theme.Button.color[color].default)};

          &:hover,
          &:focus {
            background-color: ${customColor ? customColor.hover : theme.Button.color[color].hover};
            color: ${customColor
              ? getTextColor(customColor.hover)
              : getTextColor(theme.Button.color[color].hover)};
          }
        `;
  }}

  ${({ rounded, theme }) => css`
    border-radius: ${theme.Button.radius[rounded].default};

    &:hover,
    &:focus {
      border-radius: ${theme.Button.radius[rounded].hover};
    }
  `}

  ${({ tiny, theme }) =>
    tiny
      ? css`
          padding: ${theme.Button.padding.tiny.y} ${theme.Button.padding.tiny.x};
          font-size: ${theme.Button.font.size.tiny};
          font-weight: ${theme.Button.font.weight.tiny};
        `
      : css`
          padding: ${theme.Button.padding.default.y} ${theme.Button.padding.default.x};
          font-size: ${theme.Button.font.size.default};
          font-weight: ${theme.Button.font.weight.default};
        `};

  &:focus {
    outline: none;
  }
`;

const Button = ({
  children,
  type,
  loading,
  disable,
  preventDoubleClicking,
  onClick,
  keyCode,
  tiny,
  outline,
  rounded,
  color,
  customColor,
  customOnColor,
}) => {
  const handleClick = () => {
    if (!disable && !loading) onClick();
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === keyCode) handleClick();
  };

  const handleClickWithPrevent = preventDoubleClick((event) => {
    event.preventDefault();
    handleClick();
  });

  const handleKeyPressWithPrevent = (event) => {
    if (event.keyCode === keyCode) handleClickWithPrevent(event);
  };

  return (
    <ButtonStyled
      type={type}
      disabled={disable}
      onClick={preventDoubleClicking ? handleClickWithPrevent : handleClick}
      onKeyPress={preventDoubleClicking ? handleKeyPressWithPrevent : handleKeyPress}
      tiny={tiny}
      outline={outline}
      rounded={rounded}
      color={color}
      customColor={customColor}
      customOnColor={customOnColor}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  /**
    Content place in the button
  */
  children: PropTypes.node.isRequired,
  /**
    (HTML Attribute) type of the button
  */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
    Is the button loading?
  */
  loading: PropTypes.bool,
  /**
    (HTML Attribute) Is the button disable?
  */
  disable: PropTypes.bool,
  /**
    If false the user can click as fast as he can on the button
  */
  preventDoubleClicking: PropTypes.bool,
  /**
    Event trigger when the user click the button
  */
  onClick: PropTypes.func,
  /**
    Keycode used to trigger onKeyPressed (trigger the onClick method)
  */
  keyCode: PropTypes.number,
  /**
    Set the padding to tiny based on theme settings
  */
  tiny: PropTypes.bool,
  /**
    Outline the button
  */
  outline: PropTypes.bool,
  /**
    Apply rounded corners on top / left / bottom / right
  */
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
  /**
    Used the theme colors to style the button
  */
  color: PropTypes.oneOf(['primary', 'secondary', 'outline', 'default']),
  /**
    Used the custom default / hover color you provide (text color is automatic)
  */
  customColor: PropTypes.shape({
    default: ExtraPropTypes.color,
    hover: ExtraPropTypes.color,
  }),
  /**
    Used this color as text color instead of auto
  */
  customOnColor: ExtraPropTypes.color,
};

Button.defaultProps = {
  type: 'button',
  loading: false,
  disable: false,
  preventDoubleClicking: true,
  onClick: () => {},
  keyCode: 13,
  tiny: false,
  outline: false,
  rounded: 'full',
  color: 'primary',
  customColor: null,
  customOnColor: null,
};

export default Button;
