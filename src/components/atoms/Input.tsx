import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  autoFocus?: boolean;
  value: string;
  type: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.div<{ type: string }>`
  position: relative;

  label {
    position: absolute;
    top: -4px;
    left: 4px;
    font-size: 12px;
    display: block;
    color: ${({ theme }) => theme.primaryColor};
    transition: transform 0.15s, font-size 0.15s, color 0.15s;
  }

  input {
    display: block;
    position: relative;
    height: 40px;
    width: ${({ type }) => (type === 'date' ? '160px' : '100%')};
    padding: 4px 8px;
    letter-spacing: 0.4px;
    border: 0;
    font-size: 14px;
    border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
    transition: border-color 0.2s;
    margin-bottom: 28px;

    &[type='date'] {
      margin-bottom: 0;

      &::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
      }
    }

    &:focus {
      border-color: ${({ theme }) => theme.primaryColor};

      & + label {
        transform: translate(-4px, -8px);
        font-size: 14px;
      }
    }
  }
`;

const Input: React.FC<Props> = ({
  label,
  autoFocus,
  type,
  changeHandler,
  value,
}: Props) => {
  return (
    <StyledInput type={type} className='input'>
      <input onChange={changeHandler} type={type} value={value} autoFocus={autoFocus} />
      <label htmlFor='input'>{label}</label>
    </StyledInput>
  );
};

export default Input;
