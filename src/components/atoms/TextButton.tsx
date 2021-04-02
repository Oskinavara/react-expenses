import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 400;
  font-size: 14px;
  font-family: Roboto;
`;

const TextButton: React.FC<{ text: string; handleClick: () => void }> = ({
  text,
  handleClick,
}) => {
  return (
    <StyledButton className='text-button' onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default TextButton;
