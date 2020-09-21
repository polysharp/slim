import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';

import getTextColor from 'utils';

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

const Button = ({ children, type, tiny, outline, rounded, color, customColor, customOnColor }) => (
  <ButtonStyled
    type={type}
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  tiny: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
  color: PropTypes.oneOf(['primary', 'secondary', 'outline', 'default']),
  customColor: PropTypes.shape({
    default: ExtraPropTypes.color,
    hover: ExtraPropTypes.color,
  }),
  customOnColor: ExtraPropTypes.color,
};

Button.defaultProps = {
  type: 'button',
  tiny: false,
  outline: false,
  rounded: 'full',
  color: 'primary',
  customColor: null,
  customOnColor: null,
};

export default Button;
