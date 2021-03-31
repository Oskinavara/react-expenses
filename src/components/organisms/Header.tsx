import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

const Container = styled.div`
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
  return (
    <Container>
      <Title>Personal Expenses</Title>
      <AddIcon htmlColor='white'></AddIcon>
    </Container>
  );
};

export default Header;
