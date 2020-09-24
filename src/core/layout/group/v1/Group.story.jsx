/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Button, IconButton } from 'core/inputs';
import Group from './Group';

export default {
  title: 'V1/Core/Layout/Group',
  decorators: [],
  parameters: {
    component: Group,
    componentSubtitle: 'Display children as a group',
  },
};

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13.414l4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95-1.414-1.414-4.95 4.95-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95z"
    />
  </svg>
);

export const buttons = () => (
  <Group>
    <Button title="Add to cart">Aujouter au panier</Button>
    <Button title="8 results">Résultats (8)</Button>
  </Group>
);

export const icons = () => (
  <Group gap={2} fullWidth={false} justify="start">
    <IconButton title="Close" icon={<CloseIcon />} />
    <IconButton title="Close" icon={<CloseIcon />} />
  </Group>
);
