import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TileWrapper = styled.div`
  ${({ cols, rows, colStart, rowStart }) => css`
    ${cols[0] === 'auto' ? `grid-column: auto` : `grid-column: span ${cols[0]} / span ${cols[0]}`};
    ${rows[0] === 'auto' ? `grid-row: auto` : `grid-row: span ${rows[0]} / span ${rows[0]}`};

    ${colStart[0] === 'auto' ? `grid-column-start: auto` : `grid-column-start: ${colStart[0]}`};
    ${rowStart[0] === 'auto' ? `grid-row-start: auto` : `grid-row-start: ${rowStart[0]}`};

    @media (min-width: 640px) {
      ${cols[1] === 'auto'
        ? `grid-column: auto`
        : `grid-column: span ${cols[1]} / span ${cols[1]}`};
      ${rows[1] === 'auto' ? `grid-row: auto` : `grid-row: span ${rows[1]} / span ${rows[1]}`};

      ${colStart[1] === 'auto' ? `grid-column-start: auto` : `grid-column-start: ${colStart[1]}`};
      ${rowStart[1] === 'auto' ? `grid-row-start: auto` : `grid-row-start: ${rowStart[1]}`};
    }

    @media (min-width: 768px) {
      ${cols[2] === 'auto'
        ? `grid-column: auto`
        : `grid-column: span ${cols[2]} / span ${cols[2]}`};
      ${rows[2] === 'auto' ? `grid-row: auto` : `grid-row: span ${rows[2]} / span ${rows[2]}`};

      ${colStart[2] === 'auto' ? `grid-column-start: auto` : `grid-column-start: ${colStart[2]}`};
      ${rowStart[2] === 'auto' ? `grid-row-start: auto` : `grid-row-start: ${rowStart[2]}`};
    }

    @media (min-width: 1024px) {
      ${cols[3] === 'auto'
        ? `grid-column: auto`
        : `grid-column: span ${cols[3]} / span ${cols[3]}`};
      ${rows[3] === 'auto' ? `grid-row: auto` : `grid-row: span ${rows[3]} / span ${rows[3]}`};

      ${colStart[3] === 'auto' ? `grid-column-start: auto` : `grid-column-start: ${colStart[3]}`};
      ${rowStart[3] === 'auto' ? `grid-row-start: auto` : `grid-row-start: ${rowStart[3]}`};
    }

    @media (min-width: 1280px) {
      ${cols[4] === 'auto'
        ? `grid-column: auto`
        : `grid-column: span ${cols[4]} / span ${cols[4]}`};
      ${rows[4] === 'auto' ? `grid-row: auto` : `grid-row: span ${rows[4]} / span ${rows[4]}`};

      ${colStart[4] === 'auto' ? `grid-column-start: auto` : `grid-column-start: ${colStart[4]}`};
      ${rowStart[4] === 'auto' ? `grid-row-start: auto` : `grid-row-start: ${rowStart[4]}`};
    }
  `}
`;

const Tile = ({ children, colStart, rowStart, cols, rows }) => (
  <TileWrapper colStart={colStart} rowStart={rowStart} cols={cols} rows={rows}>
    {children}
  </TileWrapper>
);

Tile.propTypes = {
  /**
    Element(s) display in the title
  */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /**
    Starting column at `breakpoints` => [<sm, sm, md, lg, xl]
  */
  colStart: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number])),
  /**
    Starting row at `breakpoints` => [<sm, sm, md, lg, xl]
  */
  rowStart: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number])),
  /**
    Columns taken at `breakpoints` => [< sm, sm, md, lg, xl]
  */
  cols: PropTypes.arrayOf(PropTypes.number),
  /**
    Rows taken at `breakpoints` => [<sm, sm, md, lg, xl]
  */
  rows: PropTypes.arrayOf(PropTypes.number),
};

Tile.defaultProps = {
  colStart: ['auto', 'auto', 'auto', 'auto', 'auto'],
  rowStart: ['auto', 'auto', 'auto', 'auto', 'auto'],
  cols: [1, 1, 1, 1, 1],
  rows: [1, 1, 1, 1, 1],
};

export default Tile;
