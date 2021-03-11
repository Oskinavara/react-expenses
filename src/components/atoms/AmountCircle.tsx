import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  display: flex;
  place-items: center center;
  background: purple;
  padding: 8px;
  font-weight: 100;
`;

const AmountCircle = ({ amount }: { amount: number }) => {
  return <Container>{'$' + amount}</Container>;
};

export default AmountCircle;
