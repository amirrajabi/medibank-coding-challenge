'use client'

import React from 'react';

interface CatItemProps {
  name: string;
}

const CatItem: React.FC<CatItemProps> = ({ name }) => {
  return (
    <div className="flex justify-center mb-4">
      <p>{name}</p>  
    </div>    
  );
};

export default CatItem;
