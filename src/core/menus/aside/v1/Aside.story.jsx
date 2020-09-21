import React, { useState } from 'react';

import { Group, Button, Fab } from 'core/actions';
import Aside from './Aside';

export default {
  title: 'Core/Menus/Aside',
  decorators: [],
  parameters: {
    component: Aside,
    componentSubtitle: 'Create a Aside menu',
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

export const asideRightToLeft = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setAsideOpen(true)}>Open Aside</Button>
      <Aside isOpen={asideOpen} requestClose={() => setAsideOpen(false)}>
        <Aside.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Fab color="default" tiny icon={<CloseIcon />} onClick={() => setAsideOpen(false)} />
          </div>
        </Aside.Header>
        <Aside.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Aside.Body>
        <Aside.Footer>
          <Group>
            <Button color="secondary" disable tiny>
              Effacer tout
            </Button>
            <Button color="default" tiny>
              Résultat (45)
            </Button>
          </Group>
        </Aside.Footer>
      </Aside>
    </>
  );
};

export const asideLeftToRight = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setAsideOpen(true)}>Open Aside</Button>
      <Aside isOpen={asideOpen} requestClose={() => setAsideOpen(false)} openRightToLeft={false}>
        <Aside.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Fab color="default" tiny icon={<CloseIcon />} onClick={() => setAsideOpen(false)} />
          </div>
        </Aside.Header>
        <Aside.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Aside.Body>
        <Aside.Footer>
          <Group>
            <Button color="secondary" disable tiny>
              Effacer tout
            </Button>
            <Button color="default" tiny>
              Résultat (45)
            </Button>
          </Group>
        </Aside.Footer>
      </Aside>
    </>
  );
};
