import React from 'react';
import styled from 'styled-components';

interface Props {
  price: number;
  className: string;
}

const StyledCircle = styled.div<Props>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryColor};
  font-size: ${({ price }) => {
    const length: number = price.toString().length;
    return Math.min(14, 18 - length);
  }}px; // Epic hack for decreasing font-size for longer numbers
  text-align: center;
`;

const PriceCircle: React.FC<Props> = ({ price, className }: Props) => {
  return (
    <StyledCircle price={price} className={className}>
      {'$' + price}
    </StyledCircle>
  );
};

export default PriceCircle;
