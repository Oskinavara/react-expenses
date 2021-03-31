import React from 'react';

interface Props {
  handler: () => void;
  children: any;
}

const IconButton = ({ handler, children }: Props) => {
  return (
    <button className='icon-button' onClick={handler}>
      {children}
    </button>
  );
};

export default IconButton;
