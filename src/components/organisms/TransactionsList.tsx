import React from 'react';
import styled from 'styled-components';
import SingleTransaction from '../molecules/SingleTransaction';

interface Transaction {
  title: string;
  date: Date;
  amount: number;
  id: number;
}

const Container = styled.ul`
  padding: 8px;
`;

const transactions: Transaction[] = [
  { title: 'Title 1', date: new Date(), amount: 11, id: 1 },
  { title: 'Title 2', date: new Date(), amount: 2232, id: 2 },
  { title: 'Title 3', date: new Date(), amount: 33, id: 3 },
  { title: 'Title 4', date: new Date(), amount: 44, id: 4 },
];

const TransactionsList = () => {
  return (
    <Container>
      {transactions.map((tx) => (
        <SingleTransaction key={tx.id} title={tx.title} date={tx.date.toDateString()} amount={tx.amount} />
      ))}
    </Container>
  );
};

export default TransactionsList;
