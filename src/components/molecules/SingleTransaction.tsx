import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import styled from 'styled-components';

import AmountCircle from '../atoms/AmountCircle';
import IconButton from '../atoms/IconButton';

const Container = styled.li`
  display: flex;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 22px;
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
      <IconButton handler={() => removeTransaction()}>
        <AddIcon />
      </IconButton>
    </Container>
  );
};

export default SingleTransaction;
