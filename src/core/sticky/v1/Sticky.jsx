import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StickyStyled = styled.div`
  position: sticky;
  top: ${({ top }) => top};
`;

const Stick = ({ children, top, stickEvent, onStick, stickClassName, unstickClassName }) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = createRef(null);

  useEffect(() => {
    if (!stickEvent) return () => {};
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(([e]) => setIsSticky(e.intersectionRatio < 1), {
      threshold: [1],
    });

    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, []);

  useEffect(() => {
    if (stickEvent) onStick(isSticky);
  }, [isSticky]);

  return (
    <StickyStyled ref={ref} top={top} className={isSticky ? stickClassName : unstickClassName}>
      {children}
    </StickyStyled>
  );
};

Stick.propTypes = {
  /**
    Content place in the sticky parent
  */
  children: PropTypes.node.isRequired,
  /**
    Distance to stick from top
  */
  top: PropTypes.string,
  /**
    Trigger a function when the component stick state change?
  */
  stickEvent: PropTypes.bool,
  /**
    Function trigger by the event
  */
  onStick: PropTypes.func,
  /**
    Classname apply to the root element on stick
  */
  stickClassName: PropTypes.string,
  /**
    Classname apply to the root element on unstick
  */
  unstickClassName: PropTypes.string,
};

Stick.defaultProps = {
  top: '-1px',
  stickEvent: false,
  onStick: () => {},
  stickClassName: null,
  unstickClassName: null,
};

export default Stick;
