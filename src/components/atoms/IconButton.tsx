import React from 'react';

interface Props {
  handler: () => void;
  children: any;
}

const IconButton: React.FC<Props> = ({ handler, children }: Props) => {
  return (
    <button className='icon-button' onClick={handler}>
      {children}
    </button>
  );
};

export default IconButton;
