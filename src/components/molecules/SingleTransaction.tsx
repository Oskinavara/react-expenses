import RemoveIcon from '@material-ui/icons/DeleteOutlined';
import React from 'react';
import styled from 'styled-components';

import AmountCircle from '../atoms/AmountCircle';
import IconButton from '../atoms/IconButton';

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px lightgray;

  &:last-of-type {
    margin-bottom: 0;
  }

  .icon-button {
    margin-left: auto;
  }

  .amount-circle {
    margin-right: 16px;
  }
`;

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Date = styled.p`
  font-size: 12px;
  color: gray;
`;

interface Props {
  title: string;
  date: string;
  amount: number;
}

const removeTransaction = () => {
  console.log('removed');
};

const SingleTransaction = ({ title, date, amount }: Props) => {
  return (
    <Container>
      <AmountCircle amount={amount} />
      <div>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </div>
      <IconButton handler={removeTransaction}>
        <RemoveIcon htmlColor='#f44336' />
      </IconButton>
    </Container>
  );
};

export default SingleTransaction;
