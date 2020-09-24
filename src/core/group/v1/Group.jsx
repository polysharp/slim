import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const GroupStyled = styled.div`
  display: flex;

  & > * {
    width: ${({ fullWidth }) => (fullWidth ? '100% !important' : 'fit-content')};
  }

  ${({ align }) => {
    switch (align) {
      case 'start':
        return css`
          align-items: flex-start;
        `;
      case 'end':
        return css`
          align-items: flex-end;
        `;
      case 'baseline':
        return css`
          align-items: baseline;
        `;
      case 'stretch':
        return css`
          align-items: stretch;
        `;
      default:
        return css`
          align-items: center;
        `;
    }
  }}

  ${({ justify }) => {
    switch (justify) {
      case 'start':
        return css`
          justify-content: flex-start;
        `;
      case 'end':
        return css`
          justify-content: flex-end;
        `;
      case 'center':
        return css`
          justify-content: center;
        `;
      case 'around':
        return css`
          justify-content: space-around;
        `;
      case 'evenly':
        return css`
          justify-content: space-evenly;
        `;
      default:
        return css`
          justify-content: space-between;
        `;
    }
  }}

  ${({ direction, reverse, gap }) => {
    switch (direction) {
      case 'row':
        return css`
          flex-direction: ${reverse ? 'row-reverse' : 'row'};

          & > * {
            margin-left: ${gap * 0.25}rem;
            margin-right: ${gap * 0.25}rem;
          }

          & > *:first-child {
            margin-right: ${gap * 0.25}rem;
            margin-left: 0;
          }

          & > *:last-child {
            margin-left: ${gap * 0.25}rem;
            margin-right: 0;
          }
        `;
      default:
        return css`
          flex-direction: ${reverse ? 'column-reverse' : 'column'};

          & > * {
            margin-top: ${gap * 0.25}rem;
            margin-bottom: ${gap * 0.25}rem;
          }

          & > *:first-child {
            margin-top: ${gap * 0.25}rem;
            margin-bottom: 0;
          }

          & > *:last-child {
            margin-top: ${gap * 0.25}rem;
            margin-bottom: 0;
          }
        `;
    }
  }};
`;

const Group = ({ children, gap, direction, reverse, align, justify, fullWidth }) => (
  <GroupStyled
    direction={direction}
    reverse={reverse}
    align={align}
    justify={justify}
    gap={gap}
    fullWidth={fullWidth}
  >
    {children}
  </GroupStyled>
);

Group.propTypes = {
  /**
    Items to group
  */
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  /**
    Gutter between columns
  */
  gap: PropTypes.number,
  /**
    Flex direction
  */
  direction: PropTypes.oneOf(['row', 'column']),
  /**
    Reverse flex direction
  */
  reverse: PropTypes.bool,
  /**
    Align items
  */
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  /**
    Justify contents
  */
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
  /**
    Stretch items
  */
  fullWidth: PropTypes.bool,
};

Group.defaultProps = {
  gap: 1,
  direction: 'row',
  reverse: false,
  align: 'center',
  justify: 'between',
  fullWidth: true,
};

export default Group;
