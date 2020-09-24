import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';

const TagStyled = styled.span`
  ${({ theme, color, customColor, size }) => {
    return css`
      color: ${customColor || theme.Tag.colors[color]};
      font-size: ${theme.Tag.sizes[size].size};
      font-weight: ${theme.Tag.sizes[size].weight};
    `;
  }}
`;

const Tag = ({ children, color, customColor, size }) => (
  <TagStyled color={color} customColor={customColor} size={size}>
    {children}
  </TagStyled>
);

Tag.propTypes = {
  /**
    Content place in the tag
  */
  children: PropTypes.node.isRequired,
  /**
    One of the tag theme color key
  */
  color: PropTypes.oneOf(['info', 'warning', 'danger']),
  /**
    Used this color instead of theme color
  */
  customColor: ExtraPropTypes.color,
  /**
    Button size based on theme settings
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Tag.defaultProps = {
  color: 'info',
  customColor: null,
  size: 'medium',
};

export default Tag;
