import RemoveIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext } from 'react';
import styled from 'styled-components';

import PriceCircle from '@/components/atoms/PriceCircle';
import IconButton from '@/components/atoms/IconButton';
import { MainContext } from '../../contexts/MainContext';

const StyledTransaction = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px lightgray;

  &:last-of-type {
    margin-bottom: 0;
  }

  .amount-circle {
    margin-right: 16px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    color: gray;
  }

  .wrapper {
    margin-left: auto;
    display: flex;
  }
`;

const StyledCircle = styled(PriceCircle)`
  margin-right: 24px;
`;

const Date = styled.p`
  font-size: 12px;
  color: gray;
`;

interface Props {
  title: string;
  date: Date;
  price: number;
  id: string;
}

const SingleTransaction = ({ title, date, price, id }: Props) => {
  const { removeTransaction, toggleModalSheet, setEditId } = useContext(MainContext);

  const editSingleTransaction = () => {
    setEditId(id);
    toggleModalSheet({ title, date, price });
  };

  return (
    <StyledTransaction>
      <StyledCircle price={price} className='' />
      <div>
        <h4>{title}</h4>
        <p>{date.toDateString()}</p>
      </div>
      <div className='wrapper'>
        <IconButton clickHandler={editSingleTransaction}>
          <EditIcon htmlColor='#166088' />
        </IconButton>
        <IconButton clickHandler={() => id && removeTransaction(id)}>
          <RemoveIcon htmlColor='#f44336' />
        </IconButton>
      </div>
    </StyledTransaction>
  );
};

export default SingleTransaction;
