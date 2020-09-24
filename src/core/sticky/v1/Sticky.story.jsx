/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Sticky from './Sticky';
import './custom-style.css';

export default {
  title: 'V1/Core/Layout/Sticky',
  decorators: [],
  parameters: {
    component: Sticky,
    componentSubtitle: 'Sticky navigation bar',
  },
};

export const withNoEvent = () => (
  <>
    <div style={{ height: '100px' }} />
    <Sticky top="0px">
      <div style={{ height: '50px', backgroundColor: 'red' }} />
    </Sticky>
    <div style={{ height: '100vh' }} />
  </>
);

export const withEvent = () => (
  <>
    <div style={{ height: '100px' }} />
    <Sticky
      stickEvent
      onStick={(isSticky) => console.log(`Navigation bar is sticky : ${isSticky}`)}
      stickClassName="navigation-sticky"
      unstickClassName="navigation-not-sticky"
    >
      <div style={{ height: '50px' }} />
    </Sticky>
    <div style={{ height: '100vh' }} />
  </>
);
