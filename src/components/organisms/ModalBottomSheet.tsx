import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import TextButton from '../atoms/TextButton';
import { MainContext } from '../../contexts/MainContext';

const StyledBottomSheet = styled.div<{ opened: boolean }>`
  position: fixed;
  background: white;
  box-shadow: 0px 2px 5px 0px #333;
  left: 0;
  padding: 32px 16px 16px;
  bottom: -120px;
  height: 250px;
  transform: translateY(${({ opened }) => (opened ? '-120px' : '0px')});
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  transition: transform 0.2s, opacity 0.2s;
  width: 100%;

  .input {
    width: 100%;
  }

  .text-button {
    margin-left: auto;
    display: block;
    margin-bottom: 32px;
  }
`;

const ModalBottomSheet: React.FC = () => {
  const { updateField, addTransaction, userInput } = useContext(MainContext);
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  }, []);
  return (
    <StyledBottomSheet opened={opened}>
      <Input
        label='Title'
        autoFocus
        type='text'
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField(e, 'title')}
      />
      <Input label='Price' type='number' handleChange={(e) => updateField(e, 'price')} />
      <TextButton
        text='Add transaction'
        handleClick={() =>
          addTransaction({
            ...userInput,
            date: new Date(),
            id: String(Math.floor(Math.random() * 10000000)),
          })
        }
      />
    </StyledBottomSheet>
  );
};

export default ModalBottomSheet;
