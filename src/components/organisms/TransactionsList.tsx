import React from 'react';
import styled from 'styled-components';
import SingleTransaction from '../molecules/SingleTransaction';
import TransactionWithId from '../../interfaces/TransactionWithId';

const StyledList = styled.ul`
  padding: 8px 8px 120px;
  max-height: 80vh;
`;

interface Props {
  transactions: TransactionWithId[];
}

const TransactionsList: React.FC<Props> = ({ transactions }: Props) => {
  return (
    <StyledList>
      {transactions.map((tx) => (
        <SingleTransaction
          key={tx._id}
          title={tx.title}
          date={new Date(tx.date)}
          price={tx.price}
          id={tx._id}
        />
      ))}
    </StyledList>
  );
};

export default TransactionsList;
