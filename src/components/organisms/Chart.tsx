import React from 'react';
import styled from 'styled-components';
import DayIndicator from '@/components/molecules/DayIndicator';

const StyledChart = styled.div`
  padding: 8px;
`;

const Chart = () => {
  return (
    <StyledChart>
      <DayIndicator total={'12'} day='W' />
    </StyledChart>
  );
};

export default Chart;
