/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Grid from './Grid';

export default {
  title: 'Core/Layout/Grid',
  decorators: [withKnobs],
  parameters: {
    component: Grid,
    componentSubtitle: 'Create a grid of x by y columns and rows',
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

export const grid = () => (
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
    <div style={{ height: '200px', border: '1px solid #000' }}>1</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>2</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>3</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>4</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>5</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>6</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>7</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>8</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>9</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>10</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>11</div>
    <div style={{ height: '200px', border: '1px solid #000' }}>12</div>
  </Grid>
);
