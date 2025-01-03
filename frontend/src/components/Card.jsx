import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg shadow-md bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
