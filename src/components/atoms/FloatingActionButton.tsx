import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button`
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 50%;
  z-index: 1;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
`;

const FloatingActionButton: React.FC<Props> = ({ handleClick }: Props) => {
  return (
    <StyledButton onClick={handleClick}>
      <AddIcon htmlColor={'white'}></AddIcon>
    </StyledButton>
  );
};

export default FloatingActionButton;
