import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly percentage: number;
}

const StyledBar = styled.div<Props>`
  position: relative;
  height: 100px;
  width: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow-y: hidden;

  ::after {
    content: '';
    border-radius: 4px;
    position: absolute;
    width: 100%;
    background: ${({ theme }) => theme.primaryColor};
    height: 100%;
    bottom: -100%;
    transform: translateY(-${({ percentage }) => percentage}%);
    transition: transform 0.2s;
  }
`;

const ProgressBar: React.FC<Props> = ({ percentage }: Props) => {
  return <StyledBar percentage={percentage}></StyledBar>;
};

export default ProgressBar;
