import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`py-2 px-4 rounded bg-blue-500 text-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
