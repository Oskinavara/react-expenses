import React, { useContext } from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { MainContext } from '@/contexts/MainContext';

interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

const FloatingActionButton: React.FC<Props> = ({ clickHandler }: Props) => {
  const { isBottomSheetOpened } = useContext(MainContext);

  return (
    <StyledButton onClick={clickHandler}>
      {isBottomSheetOpened ? (
        <CloseIcon htmlColor={'white'}></CloseIcon>
      ) : (
        <AddIcon htmlColor={'white'}></AddIcon>
      )}
    </StyledButton>
  );
};

export default FloatingActionButton;
