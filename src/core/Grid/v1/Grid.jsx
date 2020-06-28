import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// TODO: Replace media query breakpoint with theme breakpoint
/*
@media (min-width: `${theme.breakpoints.sm}px`) {
  grid-template-columns: repeat(${cols[0]}, minmax(0, 1fr));
}
*/

const GridWrapper = styled.div`
  display: grid;

  ${({ cols }) => css`
    ${cols[0] === 'auto'
      ? `grid-auto-columns: auto`
      : `grid-template-columns: repeat(${cols[0]}, minmax(0, 1fr))`};

    @media (min-width: 640px) {
      ${cols[0] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[1]}, minmax(0, 1fr))`};
    }

    @media (min-width: 768px) {
      ${cols[1] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[2]}, minmax(0, 1fr))`};
    }

    @media (min-width: 1024px) {
      ${cols[2] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[3]}, minmax(0, 1fr))`};
    }

    @media (min-width: 1280px) {
      ${cols[3] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[4]}, minmax(0, 1fr))`};
    }
  `}

  ${({ rows }) => css`
    ${rows[0] === 'auto'
      ? `grid-auto-rows: auto`
      : `grid-template-rows: repeat(${rows[0]}, minmax(0, 1fr))`};

    @media (min-width: 640px) {
      ${rows[1] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[1]}, minmax(0, 1fr))`};
    }

    @media (min-width: 768px) {
      ${rows[2] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[2]}, minmax(0, 1fr))`};
    }

    @media (min-width: 1024px) {
      ${rows[3] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[3]}, minmax(0, 1fr))`};
    }

    @media (min-width: 1280px) {
      ${rows[4] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[4]}, minmax(0, 1fr))`};
    }
  `}
`;

const Grid = ({ children, cols, rows }) => (
  <GridWrapper cols={cols} rows={rows}>
    {children}
  </GridWrapper>
);

Grid.propTypes = {
  /**
    Tile element display in the grid
  */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /**
    Columns at `breakpoints` => [< sm, sm, md, lg, xl]
  */
  cols: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number])),
  /**
    Rows at `breakpoints` => [<sm, sm, md, lg, xl]
  */
  rows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number])),
};

Grid.defaultProps = {
  cols: [1, 1, 4, 6, 12],
  rows: ['auto', 'auto', 'auto', 'auto', 'auto'],
};

export default Grid;
