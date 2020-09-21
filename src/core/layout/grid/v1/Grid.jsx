import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// TODO: Replace media query breakpoint with theme breakpoint
// TODO: Replace 0.25rem (gutter base rem) with theme properties

const GridWrapper = styled.div`
  display: grid;

  ${({ cols, rows, colGap, rowGap }) => css`
    ${cols[0] === 'auto'
      ? `grid-auto-columns: auto`
      : `grid-template-columns: repeat(${cols[0]}, minmax(0, 1fr))`};

    ${rows[0] === 'auto'
      ? `grid-auto-rows: auto`
      : `grid-template-rows: repeat(${rows[0]}, minmax(0, 1fr))`};

    row-gap: calc(${rowGap[0]} * 0.25rem);
    column-gap: calc(${colGap[0]} * 0.25rem);

    @media (min-width: 640px) {
      ${cols[1] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[1]}, minmax(0, 1fr))`};

      ${rows[1] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[1]}, minmax(0, 1fr))`};

      row-gap: calc(${rowGap[1]} * 0.25rem);
      column-gap: calc(${colGap[1]} * 0.25rem);
    }

    @media (min-width: 768px) {
      ${cols[2] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[2]}, minmax(0, 1fr))`};

      ${rows[2] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[2]}, minmax(0, 1fr))`};

      row-gap: calc(${rowGap[2]} * 0.25rem);
      column-gap: calc(${colGap[2]} * 0.25rem);
    }

    @media (min-width: 1024px) {
      ${cols[3] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[3]}, minmax(0, 1fr))`};

      ${rows[3] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[3]}, minmax(0, 1fr))`};

      row-gap: calc(${rowGap[3]} * 0.25rem);
      column-gap: calc(${colGap[3]} * 0.25rem);
    }

    @media (min-width: 1280px) {
      ${cols[4] === 'auto'
        ? `grid-auto-columns: auto`
        : `grid-template-columns: repeat(${cols[4]}, minmax(0, 1fr))`};

      ${rows[4] === 'auto'
        ? `grid-auto-rows: auto`
        : `grid-template-rows: repeat(${rows[4]}, minmax(0, 1fr))`};

      row-gap: calc(${rowGap[4]} * 0.25rem);
      column-gap: calc(${colGap[4]} * 0.25rem);
    }
  `}
`;

const Grid = ({ children, cols, rows, colGap, rowGap }) => (
  <GridWrapper cols={cols} rows={rows} colGap={colGap} rowGap={rowGap}>
    {children}
  </GridWrapper>
);

Grid.propTypes = {
  /**
    Tile element(s) display in the grid
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
  /**
    Gutter between columns at `breakpoints` => [<sm, sm, md, lg, xl]
  */
  colGap: PropTypes.arrayOf(PropTypes.number),
  /**
    Gutter between rows at `breakpoints` => [<sm, sm, md, lg, xl]
  */
  rowGap: PropTypes.arrayOf(PropTypes.number),
};

Grid.defaultProps = {
  cols: [1, 1, 4, 6, 12],
  rows: ['auto', 'auto', 'auto', 'auto', 'auto'],
  colGap: [0, 0, 0, 0, 0],
  rowGap: [0, 0, 0, 0, 0],
};

export default Grid;
