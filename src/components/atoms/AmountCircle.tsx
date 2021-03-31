import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: purple;
  font-size: 14px;
  font-weight: 100;
  text-align: center;
`;

const AmountCircle = ({ amount }: { amount: number }) => {
  return <Container className='amount-circle'>{'$' + amount}</Container>;
};

export default AmountCircle;
