/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Button } from 'core/actions';
import Group from './Group';

export default {
  title: 'Core/Actions/Button',
  decorators: [],
  parameters: {
    component: Group,
    componentSubtitle: 'Display children as a group',
  },
};

export const preview = () => (
  <Group>
    <Button>Aujouter au panier</Button>
    <Button>Résultats (8)</Button>
  </Group>
);
