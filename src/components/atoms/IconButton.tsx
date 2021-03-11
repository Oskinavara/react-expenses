import React from 'react';
import styled from 'styled-components';

const Container = styled.button``;

interface Props {
  handler: () => void;
  children: any;
}

const IconButton = ({ handler, children }: Props) => {
  return <Container>{children}</Container>;
};

export default IconButton;
