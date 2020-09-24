/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Grid } from 'core';
import Tile from './Tile';

export default {
  title: 'V1/Core/Layout/Tile',
  decorators: [withKnobs],
  parameters: {
    component: Tile,
    componentSubtitle: 'A tile will be used inside grid',
  },
};

const options = {
  range: true,
  min: 1,
  max: 12,
  step: 1,
};

const colsId = 'cols';
const rowsId = 'rows';

const colStartId = 'start-col';
const rowStartId = 'start-row';

const tileColId = 'size-col';
const tileRowId = 'size-row';

export const tile = () => (
  <Grid
    cols={[
      number('< sm', 1, options, colsId),
      number('sm', 1, options, colsId),
      number('md', 1, options, colsId),
      number('lg', 1, options, colsId),
      number('xl', 1, options, colsId),
    ]}
    rows={[
      number('< sm', 1, options, rowsId),
      number('sm', 1, options, rowsId),
      number('md', 1, options, rowsId),
      number('lg', 1, options, rowsId),
      number('xl', 1, options, rowsId),
    ]}
  >
    <Tile>
      <div style={{ height: '200px', with: '200px', border: '1px solid pink' }} />
    </Tile>
    <Tile
      colStart={[
        number('< sm', 1, options, colStartId),
        number('sm', 1, options, colStartId),
        number('md', 1, options, colStartId),
        number('lg', 1, options, colStartId),
        number('xl', 1, options, colStartId),
      ]}
      rowStart={[
        number('< sm', 1, options, rowStartId),
        number('sm', 1, options, rowStartId),
        number('md', 1, options, rowStartId),
        number('lg', 1, options, rowStartId),
        number('xl', 1, options, rowStartId),
      ]}
      cols={[
        number('< sm', 1, options, tileColId),
        number('sm', 1, options, tileColId),
        number('md', 1, options, tileColId),
        number('lg', 1, options, tileColId),
        number('xl', 1, options, tileColId),
      ]}
      rows={[
        number('< sm', 1, options, tileRowId),
        number('sm', 1, options, tileRowId),
        number('md', 1, options, tileRowId),
        number('lg', 1, options, tileRowId),
        number('xl', 1, options, tileRowId),
      ]}
    >
      <div style={{ height: '100%', with: '100%', border: '1px solid #000' }} />
    </Tile>
  </Grid>
);
