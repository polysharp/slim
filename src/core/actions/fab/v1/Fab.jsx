import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';

import { getTextColor, preventDoubleClick } from 'utils';

const THEME_KEY = 'Fab';

const FabStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }

  ${({ outline, color, customColor, customOnColor, theme }) =>
    outline
      ? css`
          border: ${customColor
            ? `1px solid ${customColor.default}`
            : `1px solid ${theme[THEME_KEY].color[color].default}`};
          color: ${customOnColor ? getTextColor(customOnColor) : '#000000'};

          &:hover,
          &:focus {
            border: ${customColor
              ? `1px solid ${customColor.hover}`
              : `1px solid ${theme[THEME_KEY].color[color].hover}`};
          }
        `
      : css`
          background-color: ${customColor
            ? customColor.default
            : theme[THEME_KEY].color[color].default};
          color: ${customColor
            ? getTextColor(customColor.default)
            : getTextColor(theme[THEME_KEY].color[color].default)};

          &:hover,
          &:focus {
            background-color: ${customColor
              ? customColor.hover
              : theme[THEME_KEY].color[color].hover};
            color: ${customColor
              ? getTextColor(customColor.hover)
              : getTextColor(theme[THEME_KEY].color[color].hover)};
          }
        `}

  ${({ rounded, theme }) => css`
    border-radius: ${theme[THEME_KEY].radius[rounded].default};

    &:hover,
    &:focus {
      border-radius: ${theme[THEME_KEY].radius[rounded].hover};
    }
  `}

  ${({ tiny, theme }) =>
    tiny
      ? css`
          padding: ${theme[THEME_KEY].padding.tiny};
        `
      : css`
          padding: ${theme[THEME_KEY].padding.default};
        `};
`;

const Fab = ({
  tooltip,
  type,
  icon,
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
    <FabStyled
      title={tooltip}
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
      {icon}
    </FabStyled>
  );
};

Fab.propTypes = {
  /**
    Content place in the fab
  */
  icon: PropTypes.node.isRequired,
  /**
    (HTML Attribute) title of the button (use for screen reader and tooltip on hover)
  */
  tooltip: PropTypes.string.isRequired,
  /**
    (HTML Attribute) type of the fab
  */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
    Is the fab loading?
  */
  loading: PropTypes.bool,
  /**
    (HTML Attribute) Is the fab disable?
  */
  disable: PropTypes.bool,
  /**
    If false the user can click as fast as he can on the fab
  */
  preventDoubleClicking: PropTypes.bool,
  /**
    Event trigger when the user click the fab
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
    Outline the fab
  */
  outline: PropTypes.bool,
  /**
    Apply rounded corners on top / left / bottom / right
  */
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
  /**
    Used the theme colors to style the fab
  */
  color: PropTypes.oneOf(['primary', 'outline', 'default']),
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

Fab.defaultProps = {
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

export default Fab;
