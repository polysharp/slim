/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Button } from 'core/actions';
import Group from './Group';

export default {
  title: 'Core/Actions/Group',
  decorators: [],
  parameters: {
    component: Group,
    componentSubtitle: 'Display children as a group',
  },
};

export const preview = () => (
  <Group>
    <Button tooltip="Add to cart">Aujouter au panier</Button>
    <Button tooltip="8 results">Résultats (8)</Button>
  </Group>
);
