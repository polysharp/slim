import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';

const THEME_KEY = 'Tag';

const TagStyled = styled.span`
  font-weight: 700;

  ${({ color, customColor, theme }) =>
    customColor
      ? css`
          color: ${customColor};
        `
      : css`
          color: ${theme[THEME_KEY].color[color]};
        `}

  ${({ tiny, theme }) =>
    tiny
      ? css`
          font-size: ${theme[THEME_KEY].font.size.tiny};
        `
      : css`
          font-size: ${theme[THEME_KEY].font.size.default};
        `};
`;

const Tag = ({ children, color, tiny, customColor }) => (
  <TagStyled tiny={tiny} color={color} customColor={customColor}>
    {children}
  </TagStyled>
);

Tag.propTypes = {
  /**
    Content place in the tag
  */
  children: PropTypes.node.isRequired,
  /**
    Used for the font-size
  */
  tiny: PropTypes.bool,
  /**
    Used theme colors
  */
  color: PropTypes.oneOf(['info', 'warning', 'danger']),
  /**
    Used this color instead of theme color
  */
  customColor: ExtraPropTypes.color,
};

Tag.defaultProps = {
  tiny: false,
  color: 'info',
  customColor: null,
};

export default Tag;
