import React, { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  autoFocus?: boolean;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.div`
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
    height: 40px;
    width: 100%;
    margin-bottom: 28px;
    padding: 4px 8px;
    letter-spacing: 0.4px;
    border: 0;
    font-size: 14px;
    border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.primaryColor};

      & + label {
        transform: translate(-4px, -8px);
        font-size: 14px;
      }
    }
  }
`;

const Input: React.FC<Props> = ({ label, autoFocus, type, handleChange }: Props) => {
  return (
    <StyledInput className='input'>
      <input onChange={handleChange} type={type} autoFocus={autoFocus} />
      <label htmlFor='input'>{label}</label>
    </StyledInput>
  );
};

export default Input;
