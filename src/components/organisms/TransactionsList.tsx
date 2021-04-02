import React from 'react';
import styled from 'styled-components';
import SingleTransaction from '../molecules/SingleTransaction';
import Transaction from '../../interfaces/Transaction';

const StyledList = styled.ul`
  padding: 8px 8px 68px;
`;

interface Props {
  transactions: Transaction[];
}

const TransactionsList: React.FC<Props> = ({ transactions }: Props) => {
  return (
    <StyledList>
      {transactions.map((tx) => (
        <SingleTransaction
          key={tx.id}
          title={tx.title}
          date={tx.date.toDateString()}
          price={tx.price}
          id={tx.id}
        />
      ))}
    </StyledList>
  );
};

export default TransactionsList;
