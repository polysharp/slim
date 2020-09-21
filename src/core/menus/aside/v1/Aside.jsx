import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const overlay = {
  close: { opacity: 0 },
  open: { opacity: 1 },
};

const wrapper = {
  close: (right = true) =>
    right
      ? {
          opacity: 0,
          right: '-100%',
        }
      : {
          opacity: 0,
          left: '-100%',
        },
  open: (right = true) =>
    right
      ? {
          opacity: 1,
          right: 0,
        }
      : {
          opacity: 1,
          left: 0,
        },
};

const AsideOverlay = styled(motion.div)`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  background: rgba(0, 0, 0, 0.15);
`;

const AsideWrapper = styled(motion.aside)`
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

const AsideHeader = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ffffff;
`;

const AsideBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.5rem 2.5rem;
`;

const AsideFooter = styled.div`
  padding: 1.5rem 2.5rem;
  background-color: #ffffff;
`;

const Aside = ({ children, isOpen, requestClose, closeOnOutsideClick, openRightToLeft }) => {
  const onOutsideClick = () => {
    if (closeOnOutsideClick) requestClose();
  };

  return (
    <div>
      <AsideOverlay
        isOpen={isOpen}
        onClick={onOutsideClick}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        variants={overlay}
      />
      <AsideWrapper
        inital="close"
        animate={isOpen ? 'open' : 'close'}
        variants={wrapper}
        transition={{ duration: 0.3, ease: 'linear' }}
        custom={openRightToLeft}
      >
        {children}
      </AsideWrapper>
    </div>
  );
};

Aside.Header = AsideHeader;
Aside.Body = AsideBody;
Aside.Footer = AsideFooter;

Aside.propTypes = {
  /**
    Aside content to display (TODO: replace with custom function for Header / Body / Footer)
  */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
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
    Slide in from right to left (Must be static !)
  */
  openRightToLeft: PropTypes.bool,
};

Aside.defaultProps = {
  closeOnOutsideClick: true,
  openRightToLeft: true,
};

export default Aside;
