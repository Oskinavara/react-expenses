import React from 'react';
import styled from 'styled-components';

interface Props {
  handler: () => void;
  children: any;
}

const StyledButton = styled.button`
  display: block;
  height: 24px;
`;

const IconButton: React.FC<Props> = ({ handler, children }: Props) => {
  return (
    <StyledButton className='icon-button' onClick={handler}>
      {children}
    </StyledButton>
  );
};

export default IconButton;
