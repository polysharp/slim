import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';

const MAXIMUM_SCORE = 5;
const MAXIMUM_COMMENTS = 999;
const KEYS = ['0', '1', '2', '3', '4'];

const RateStyled = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & > ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

  & > span {
    padding-left: 0.5rem;
    color: #484848;
    font-weight: 500;
    line-height: normal;
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          & > ul > li > svg {
            width: 0.875rem;
            height: 0.875rem;
          }
          & > span {
            font-size: 0.75rem;
          }
        `;
      case 'large':
        return css`
          & > ul > li > svg {
            width: 1.125rem;
            height: 1.125rem;
          }
          & > span {
            font-size: 1rem;
          }
        `;
      default:
        return css`
          & > ul > li > svg {
            width: 1rem;
            height: 1rem;
          }
          & > span {
            font-size: 0.875rem;
          }
        `;
    }
  }}
`;

const Icon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill={color}>
    <path d="M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z" />
  </svg>
);

const Rate = ({ score, comments, size, customIcons }) => {
  const [capedScore, setCapedScore] = useState(score);
  const [capedComments, setCapedComments] = useState(undefined);

  useEffect(() => {
    setCapedScore(Math.min(Math.max(Math.round(score), 0), MAXIMUM_SCORE));
    if (comments) setCapedComments(comments && comments < MAXIMUM_COMMENTS ? comments : '+999');
  }, [score, comments]);

  return (
    <RateStyled size={size}>
      <ul>
        {[...Array(capedScore)].map((_, i) => (
          <li key={KEYS[i]}>
            {(customIcons && customIcons.fill) || <Icon color="currentColor" />}
          </li>
        ))}
        {[...Array(MAXIMUM_SCORE - capedScore)].map((_, i) => (
          <li key={KEYS[capedScore + i]}>
            {(customIcons && customIcons.empty) || <Icon color="#f5f5f5" />}
          </li>
        ))}
      </ul>
      {capedComments && <span>{`(${capedComments})`}</span>}
    </RateStyled>
  );
};

Icon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, ExtraPropTypes.color]).isRequired,
};

Rate.propTypes = {
  /**
    Used to display an icon (maximum is 5 and cannot go below 0)
  */
  score: PropTypes.number.isRequired,
  /**
    If provided, will be display as "(COMMENTS_AMOUNT)" (maximum is 999)
  */
  comments: PropTypes.number,
  /**
    Font size and icon size
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
    Custom fill & empty icons
  */
  customIcons: PropTypes.shape({
    fill: PropTypes.node,
    empty: PropTypes.node,
  }),
};

Rate.defaultProps = {
  comments: undefined,
  size: 'medium',
  customIcons: undefined,
};

export default Rate;
