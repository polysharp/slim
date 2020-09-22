import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTextColor } from 'utils';

const StyledSpinner = styled.span`
  position: absolute;
  border-radius: 99999px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
          background-color: #ffffff;
        `;
      default:
        return css`
          background-color: ${theme.Button.colors[color].contained.default};
        `;
    }
  }}
`;

const Spinner = ({ color, variant }) => (
  <StyledSpinner color={color} variant={variant}>
    <svg width="18px" height="18px" viewBox="0 0 128 128">
      <g>
        <path
          d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"
          fill="currentColor"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="1800ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  </StyledSpinner>
);

Spinner.propTypes = {
  /**
    One of the theme color key
  */
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'white']),
  /**
    One of the theme variant key
  */
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
};

Spinner.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export default Spinner;
