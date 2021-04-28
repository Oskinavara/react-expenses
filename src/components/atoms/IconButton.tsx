import React from 'react';
import styled from 'styled-components';

interface Props {
  clickHandler: () => void;
  children: any;
}

const StyledButton = styled.button`
  display: block;
  height: 24px;
`;

const IconButton: React.FC<Props> = ({ clickHandler, children }: Props) => {
  return (
    <StyledButton className='icon-button' onClick={clickHandler}>
      {children}
    </StyledButton>
  );
};

export default IconButton;
