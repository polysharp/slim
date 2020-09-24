import React, { useState } from 'react';

import { Button, IconButton } from 'core/inputs';
import { Group } from 'core/layout';

import Drawer from './Drawer';

export default {
  title: 'V1/Core/Navigation/Drawer',
  decorators: [],
  parameters: {
    component: Drawer,
    componentSubtitle: 'Create a Drawer menu',
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

export const anchorRight = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Button title="Open menu" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </Button>
      <Drawer isOpen={drawerOpen} requestClose={() => setDrawerOpen(false)}>
        <Drawer.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              icon={<CloseIcon />}
              title="Close"
              tabIndex={drawerOpen ? '0' : '-1'}
              onClick={() => setDrawerOpen(false)}
              color="white"
            />
          </div>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Group gap={2}>
            <Button
              title="Clear all filters"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="secondary"
              isDisabled
            >
              Effacer tout
            </Button>
            <Button title="Show 45 results" tabIndex={drawerOpen ? '0' : '-1'} color="black">
              Résultat (45)
            </Button>
          </Group>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};

export const anchorLeft = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Button title="Open menu" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </Button>
      <Drawer isOpen={drawerOpen} requestClose={() => setDrawerOpen(false)} anchor="left">
        <Drawer.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              icon={<CloseIcon />}
              title="Close"
              tabIndex={drawerOpen ? '0' : '-1'}
              onClick={() => setDrawerOpen(false)}
              color="white"
            />
          </div>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Group gap={2}>
            <Button
              title="Clear all filters"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="secondary"
              isDisabled
            >
              Effacer tout
            </Button>
            <Button title="Show 45 results" tabIndex={drawerOpen ? '0' : '-1'} color="black">
              Résultat (45)
            </Button>
          </Group>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};
