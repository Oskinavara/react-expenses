import RemoveIcon from '@material-ui/icons/DeleteOutlined';
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

  .icon-button {
    margin-left: auto;
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
  date: string;
  price: number;
  id: string;
}

const SingleTransaction = ({ title, date, price, id }: Props) => {
  const { removeTransaction } = useContext(MainContext);

  return (
    <StyledTransaction>
      <StyledCircle price={price} className='' />
      <div>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
      <IconButton handler={() => removeTransaction(id)}>
        <RemoveIcon htmlColor='#f44336' />
      </IconButton>
    </StyledTransaction>
  );
};

export default SingleTransaction;
