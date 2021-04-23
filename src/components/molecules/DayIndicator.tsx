import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import ProgressBar from '@/components/atoms/ProgressBar';
import { MainContext } from '@/contexts/MainContext';

const StyledIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .total,
  .day {
    margin: 8px 0;
  }
`;

interface Props {
  readonly day: {
    name: string;
    index: number;
  };
}

const DayIndicator: React.FC<Props> = ({ day }: Props) => {
  const { transactions } = useContext(MainContext);

  const todayAmount: number = +transactions
    .filter((tx) => tx.date.getDay() === day.index)
    .reduce((acc, tx) => acc + +tx.price, 0);

  const total: number = +transactions.reduce((acc, tx) => acc + tx.price, 0);

  return (
    <StyledIndicator>
      <div className='total'>{`$${todayAmount}`}</div>
      <ProgressBar percentage={(todayAmount / total) * 100} />
      <div className='day'>{day.name}</div>
    </StyledIndicator>
  );
};

export default DayIndicator;
