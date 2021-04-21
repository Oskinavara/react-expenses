import React from 'react';
import styled from 'styled-components';
import ProgressBar from '@/components/atoms/ProgressBar';

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
  readonly total: String;
  readonly day: String;
}

const DayIndicator: React.FC<Props> = ({ total, day }: Props) => {
  return (
    <StyledIndicator>
      <div className='total'>{total}</div>
      <ProgressBar percentage={40} />
      <div className='day'>{day}</div>
    </StyledIndicator>
  );
};

export default DayIndicator;
