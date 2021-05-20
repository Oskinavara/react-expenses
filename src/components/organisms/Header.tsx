import React, { useContext } from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '../atoms/IconButton';
import { MainContext } from '../../contexts/MainContext';

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  padding: 12px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  color: white;
`;

const Header = () => {
  const { toggleModalSheet } = useContext(MainContext);
  return (
    <StyledHeader>
      <Title>Personal Expenses</Title>
      <IconButton clickHandler={toggleModalSheet}>
        <AddIcon htmlColor='white'></AddIcon>
      </IconButton>
    </StyledHeader>
  );
};

export default Header;
