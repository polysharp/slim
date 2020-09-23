import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const PriceWrapper = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  white-space: nowrap;
`;

const IntegersStyled = styled.span`
  line-height: 1.5rem;

  ${({ theme, size }) => {
    return css`
      font-size: ${theme.Price.sizes[size].integers.size};
      font-weight: ${theme.Price.sizes[size].integers.weight};
    `;
  }}
`;

const DecimalsStyled = styled.span`
  line-height: normal;

  ${({ theme, size }) => {
    return css`
      font-size: ${theme.Price.sizes[size].decimals.size};
      font-weight: ${theme.Price.sizes[size].decimals.weight};
    `;
  }}
`;

const SymbolStyled = styled.span`
  line-height: normal;
  padding-left: 0.25rem;

  ${({ theme, size }) => {
    return css`
      font-size: ${theme.Price.sizes[size].symbol.size};
      font-weight: ${theme.Price.sizes[size].symbol.weight};
    `;
  }}
`;

const Price = ({ value, size }) => {
  const [formatedPrice, setFormatedPrice] = useState({ integer: value, decimal: null });

  useEffect(() => {
    const formatPrice = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2 })
      .format(value / 100)
      .split(',');
    setFormatedPrice({
      integer: formatPrice[0],
      decimal: formatPrice[1] !== '00' ? formatPrice[1] : null,
    });
  }, [value]);

  return (
    <PriceWrapper>
      <IntegersStyled size={size}>{formatedPrice.integer}</IntegersStyled>
      <DecimalsStyled size={size}>
        {formatedPrice.decimal && `,${formatedPrice.decimal}`}
      </DecimalsStyled>
      <SymbolStyled size={size}>€</SymbolStyled>
    </PriceWrapper>
  );
};

Price.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Price.defaultProps = {
  size: 'medium',
};

export default Price;
