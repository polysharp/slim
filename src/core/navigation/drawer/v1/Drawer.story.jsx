import React, { useState } from 'react';

import { Group, Button, Fab } from 'core/inputs';
import Drawer from './Drawer';

export default {
  title: 'Core/Navigation/Drawer',
  decorators: [],
  parameters: {
    component: Drawer,
    componentSubtitle: 'Create a Drawer menu',
  },
};

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="#111">
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
      <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
      <Drawer isOpen={drawerOpen} requestClose={() => setDrawerOpen(false)}>
        <Drawer.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Fab
              tooltip="Close"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="default"
              tiny
              icon={<CloseIcon />}
              onClick={() => setDrawerOpen(false)}
            />
          </div>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Group>
            <Button
              tooltip="Clear all filters"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="secondary"
              tiny
            >
              Effacer tout
            </Button>
            <Button
              tooltip="Show 45 results"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="default"
              tiny
            >
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
      <Button onClick={() => setDrawerOpen(true)}>Open Aside</Button>
      <Drawer isOpen={drawerOpen} requestClose={() => setDrawerOpen(false)} anchor="left">
        <Drawer.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Fab
              tooltip="Close"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="default"
              tiny
              icon={<CloseIcon />}
              onClick={() => setDrawerOpen(false)}
            />
          </div>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Group>
            <Button
              tooltip="Clear all filters"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="secondary"
              tiny
            >
              Effacer tout
            </Button>
            <Button
              tooltip="Show 45 results"
              tabIndex={drawerOpen ? '0' : '-1'}
              color="default"
              tiny
            >
              Résultat (45)
            </Button>
          </Group>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};
