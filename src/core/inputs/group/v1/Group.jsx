import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    flex-grow: 1;
    margin-left: ${({ gap }) => `${gap * 0.25}rem`};
    margin-right: ${({ gap }) => `${gap * 0.25}rem`};
  }

  *:first-child {
    margin-right: ${({ gap }) => `${gap * 0.25}rem`};
    margin-left: 0;
  }

  *:last-child {
    margin-left: ${({ gap }) => `${gap * 0.25}rem`};
    margin-right: 0;
  }
`;

const Group = ({ children, gap }) => <GroupStyled gap={gap}>{children}</GroupStyled>;

Group.propTypes = {
  /**
    Button has children
  */
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  /**
    Gutter between columns
  */
  gap: PropTypes.number,
};

Group.defaultProps = {
  gap: 1,
};

export default Group;
