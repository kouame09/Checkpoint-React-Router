import React from 'react';
import EnginCard from './EnginCard';

const EnginList = ({ engins }) => {
  return (
    <div className="engin-list">
      {engins.map((engin, index) => (
        <EnginCard key={index} {...engin} />
      ))}
    </div>
  );
};

export default EnginList;
