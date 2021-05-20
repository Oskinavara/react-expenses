import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import TextButton from '../atoms/TextButton';
import { MainContext } from '../../contexts/MainContext';
import 'react-day-picker/lib/style.css';

const StyledBottomSheet = styled.div<{ opened: boolean }>`
  max-width: 600px;

  position: fixed;
  background: white;
  box-shadow: 0px 2px 5px 0px #333;
  left: 50%;
  padding: 32px 16px 48px;
  bottom: -120px;
  height: 280px;
  transform: translate(-50%, ${({ opened }) => (opened ? '-120px' : '0px')});
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  transition: transform 0.2s, opacity 0.2s;
  width: 100%;

  .input {
    width: 100%;
  }

  .text-button {
    display: block;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    .text-button {
      white-space: nowrap;
    }
  }
`;

const ModalBottomSheet: React.FC = () => {
  const {
    updateField,
    addTransaction,
    userInput,
    editTransaction,
    editId,
    setEditId,
    toggleModalSheet,
  } = useContext(MainContext);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
    return () => {
      setEditId('');
    };
  }, []);

  const dateValue = () => {
    const date = new Date(userInput.date);
    date.setDate(date.getDate() + 1);
    return new Date(date).toISOString().split('T')[0];
  };

  const handleClick = () => {
    if (editId.length) {
      editTransaction(editId);
    } else addTransaction(userInput);
    toggleModalSheet();
  };

  return (
    <StyledBottomSheet opened={opened}>
      <Input
        label='Title'
        autoFocus
        value={userInput.title}
        type='text'
        changeHandler={(e) => updateField('title', e)}
      />
      <Input
        label='Price'
        type='number'
        value={'' + userInput.price}
        changeHandler={(e) => updateField('price', e)}
      />
      <div className='wrapper'>
        <Input
          type='date'
          value={dateValue()}
          label='Date'
          changeHandler={(e) => updateField('date', e)}></Input>
        <TextButton
          text={editId.length ? 'Edit transaction' : 'Add transaction'}
          clickHandler={handleClick}
        />
      </div>
    </StyledBottomSheet>
  );
};

export default ModalBottomSheet;
