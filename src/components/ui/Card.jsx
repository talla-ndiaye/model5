import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  padding = 'p-6'
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md border border-gray-200
        ${hover ? 'hover:shadow-lg transition-shadow duration-200' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${padding}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;