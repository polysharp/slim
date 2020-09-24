import React from 'react';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const overlay = {
  close: { opacity: 0 },
  open: { opacity: 1 },
};

const wrapper = {
  close: (anchor = 'right') => ({
    opacity: 0,
    [anchor]: '-100%',
  }),
  open: (anchor = 'right') => ({
    opacity: 1,
    [anchor]: 0,
  }),
};

const DrawerOverlay = styled(motion.div)`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  background: rgba(0, 0, 0, 0.15);
`;

const DrawerWrapper = styled(motion.aside)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 10000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 31.25rem;
`;

const DrawerHeader = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ffffff;
`;

const DrawerBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1.5rem 2.5rem;
`;

const DrawerFooter = styled.div`
  padding: 1.5rem 2.5rem;
  background-color: #ffffff;
`;

const Drawer = ({
  children,
  anchor,
  isOpen,
  requestClose,
  closeOnOutsideClick,
  trapFocusOnOpen,
}) => {
  const onOutsideClick = () => {
    if (closeOnOutsideClick) requestClose();
  };

  return (
    <FocusLock autoFocus={false} disabled={!(trapFocusOnOpen && isOpen)}>
      <div>
        <DrawerOverlay
          isOpen={isOpen}
          onClick={onOutsideClick}
          initial="close"
          animate={isOpen ? 'open' : 'close'}
          variants={overlay}
        />
        <DrawerWrapper
          inital="close"
          animate={isOpen ? 'open' : 'close'}
          variants={wrapper}
          transition={{ duration: 0.3, ease: 'linear' }}
          custom={anchor}
          anchor={anchor}
        >
          {children}
        </DrawerWrapper>
      </div>
    </FocusLock>
  );
};

Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;

Drawer.propTypes = {
  /**
    Aside content to display (TODO: replace with custom function for Header / Body / Footer)
  */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /**
    Slide in from right to left (Must be static !)
  */
  anchor: PropTypes.oneOf(['left', 'right']),
  /**
    Display the Aside
  */
  isOpen: PropTypes.bool.isRequired,
  /**
    Function called when the Aside should close
  */
  requestClose: PropTypes.func.isRequired,
  /**
    Does an outside click should call requestClose function?
  */
  closeOnOutsideClick: PropTypes.bool,
  /**
    Trap focus when the modal is open
   */
  trapFocusOnOpen: PropTypes.bool,
};

Drawer.defaultProps = {
  anchor: 'right',
  closeOnOutsideClick: true,
  trapFocusOnOpen: true,
};

export default Drawer;
