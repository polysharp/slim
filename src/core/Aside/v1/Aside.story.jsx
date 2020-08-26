import React, { useState } from 'react';

import Aside from './Aside';

export default {
  title: 'Core/Menus/Aside',
  decorators: [],
  parameters: {
    component: Aside,
    componentSubtitle: 'Create a Aside menu',
  },
};

export const asideRightToLeft = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setAsideOpen(true)}>
        Open Aside
      </button>
      <br />
      <br />
      <br />
      <Aside isOpen={asideOpen} requestClose={() => setAsideOpen(false)}>
        <Aside.Header>
          <div>
            <button type="button" onClick={() => setAsideOpen(false)}>
              X
            </button>
          </div>
        </Aside.Header>
        <Aside.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Aside.Body>
        <Aside.Footer>
          <div>
            <button type="button">Effacer tout</button>
            <button type="button">Résultat (45)</button>
          </div>
        </Aside.Footer>
      </Aside>
    </>
  );
};

export const asideLeftToRight = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setAsideOpen(true)}>
        Open Aside
      </button>
      <br />
      <br />
      <br />
      <Aside isOpen={asideOpen} requestClose={() => setAsideOpen(false)} openRightToLeft={false}>
        <Aside.Header>
          <div>
            <button type="button" onClick={() => setAsideOpen(false)}>
              X
            </button>
          </div>
        </Aside.Header>
        <Aside.Body>
          <div>
            <div style={{ height: '300vh' }}>hello</div>
          </div>
        </Aside.Body>
        <Aside.Footer>
          <div>
            <button type="button">Effacer tout</button>
            <button type="button">Résultat (45)</button>
          </div>
        </Aside.Footer>
      </Aside>
    </>
  );
};
