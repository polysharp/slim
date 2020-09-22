import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PriceWrapper = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  white-space: nowrap;
`;

const IntegersStyled = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const DecimalsStyled = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
`;

const SymbolStyled = styled.span`
  padding-left: 0.25rem;
`;

const Price = ({ value }) => {
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
      <IntegersStyled>{formatedPrice.integer}</IntegersStyled>
      <DecimalsStyled>
        {formatedPrice.decimal && `,${formatedPrice.decimal}`}
        <SymbolStyled>€</SymbolStyled>
      </DecimalsStyled>
    </PriceWrapper>
  );
};

Price.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Price;
