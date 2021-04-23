import React from 'react';
import styled from 'styled-components';
import DayIndicator from '@/components/molecules/DayIndicator';

const StyledChart = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-around;
`;

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Chart = () => {
  return (
    <StyledChart>
      {weekDays.map((day, index) => (
        <DayIndicator day={{name: day, index: index}} key={day} />
      ))}
    </StyledChart>
  );
};

export default Chart;
